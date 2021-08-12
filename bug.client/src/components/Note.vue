<template>
  <div class="row justify-content-center p-3">
    <div class="col-11 card pl-0 cursor">
      <div class="my-1 d-flex p-3 align-items-center">
        <img :src="note.creator.picture" alt="creator picture" class="rounded-circle img-thumbnail img-height">
        <tr></tr>
        <p class="p-0 m-0">
          {{ note.creator.name }}: {{ note.body }}
        </p>
        <i @click="deleteNote" class="fas fa-trash-alt text-danger ms-auto cursor" v-if="note.creator.id ===state.account.id"></i>
      </div>
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
