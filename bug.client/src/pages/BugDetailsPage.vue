<template>
  <div v-if="state.rendering===true"></div>
  <div class="container-fluid bg-secondary" v-else>
    <div class="row justify-content-center">
      <div class="col-11">
        <div class="card my-3 bg-primary">
          <div class="card-header">
            <div v-if="state.activeBug.creator.id === state.account.id">
              <i v-if="state.activeBug.closed == false" @click="deleteBug" class="fas fa-archive float-right text-danger text-shadow" title="Close Bug"></i>
            </div>
            <h1 class="text-success text-shadow">
              {{ state.activeBug.title }}
            </h1>
            <h4 v-if="state.activeBug.closed==false" class="py-1 my-1 text-success text-shadow">
              Open
            </h4>
            <h4 v-else class="py-1 my-1 text-danger text-shadow">
              Closed
            </h4>
          </div>
          <div class="card-body p-2">
            <p class="p-3" v-if="state.edit===false">
              {{ state.activeBug.description }}
            </p>
            <input type="text" class="form-control" v-model="state.newBug.description" v-else placeholder="edit description...">
            <i class="far fa-edit float-right" v-if="state.activeBug.creator.id === state.account.id && state.activeBug.closed == false" @click="state.edit = true"></i>
            <div v-if="state.edit === true">
              <button type="button" class="btn btn-danger" @click="state.edit = false">
                Go Back
              </button>
              <button type="button" class="btn btn-success" @click="editBug">
                Save
              </button>
            </div>
          </div>
          <div class="card-footer">
            <div class="d-flex">
              <img :src="state.activeBug.creator.picture" class="img-height rounded-circle img-thumbnail" alt="User Image">
              <p class="m-1 ">
                {{ state.activeBug.creator.name }}
              </p>
            </div>
            <div class="text-end">
              {{ new Date(state.activeBug.updatedAt).toLocaleString('en',date) }} - {{ new Date(state.activeBug.updatedAt).toLocaleTimeString('en',time) }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-11">
        <form @submit.prevent="createNote" class="input-group">
          <input class="form-control" type="text" placeholder="notes..." v-model="state.newNote.body">
          <button type="submit" class="btn btn-success" id="button-addon2">
            <i class="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </div>
    <Note v-for="note in state.notes" :key="note.id" :note="note" />
  </div>
</template>

<script>
import { computed, onMounted, reactive } from '@vue/runtime-core'
import { bugsService } from '../services/BugsService'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
import Notification from '../utils/Notification'
import { notesService } from '../services/NotesService'
export default {
  name: 'BugDetailsPage',
  setup() {
    const route = useRoute()
    const state = reactive({
      edit: false,
      rendering: true,
      newBug: {},
      newNote: {},
      account: computed(() => AppState.account),
      user: computed(() => AppState.user),
      activeBug: computed(() => AppState.activeBug),
      notes: computed(() => AppState.notes)
    })
    onMounted(async() => {
      try {
        await bugsService.getBugById(route.params.id)
        await notesService.getNotesByBugId(route.params.id)
        state.rendering = false
      } catch (error) {
        Notification.toast(error.message)
      }
    })
    return {
      state,
      async editBug() {
        try {
          state.newBug.id = state.activeBug.id
          await bugsService.editBug(state.newBug)
          state.newBug = {}
          state.edit = false
        } catch (error) {

        }
      },
      async createNote() {
        try {
          state.newNote.bug = route.params.id
          await notesService.createNote(state.newNote, route.params.id)
          state.newNote = {}
          Notification.toast('success', 'success')
        } catch (error) {
          Notification.toast(error.message)
        }
      },
      async deleteBug() {
        try {
          const close = confirm('Once closed, a bug cannot be reopened')
          if (close === true) {
            bugsService.deleteBug(route.params.id)
          }
        } catch (error) {
          Notification.toast(error.message)
        }
      },
      date: {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      },
      time: {
        hour: '2-digit',
        minute: '2-digit'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.text-shadow{
  text-shadow: .1rem .1rem #31313150;
}
.img-height{
  height: 2rem;
  width: 2rem;
}

</style>
