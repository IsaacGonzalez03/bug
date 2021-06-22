<template>
  <div class="row justify-content-center">
    <div class="col-11 card my-1">
      <p>{{ note.creator.name }}: {{ note.body }}</p>
      <img :src="note.creator.picture" alt="creator picture" class="rounded-circle img-thumbnail img-height">
      <i @click="deleteNote" class="fas fa-trash-alt text-danger float-right" v-if="note.creator.id ===state.account.id"></i>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { notesService } from '../services/NotesService'
import Notification from '../utils/Notification'
export default {
  name: 'Note',
  props: {
    note: { type: Object, required: true }
  },
  setup(props) {
    const state = reactive({
      account: computed(() => AppState.account),
      user: computed(() => AppState.user)
    })
    return {
      state,
      async deleteNote() {
        try {
          const dNote = confirm('Once deleted, note cannot be recovered')
          if (dNote === true) {
            await notesService.deleteNote(props.note.id, props.note.bug)
          }
        } catch (error) {
          Notification.toast(error.message)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.img-height{
  height: 2rem;
  width: 2rem;
}

</style>
