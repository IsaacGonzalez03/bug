<template>
  <div class="home container-fluid align-items-center justify-content-center bg-secondary shadow">
    <div class="row justify-content-center my-5">
      <div class="col-8 p-0">
        <form class="card shadow bg-dark" @submit.prevent="createBug">
          <div class="card-header">
            <h3 class="text-success text-shadow">
              New Bug
            </h3>
          </div>
          <div class="card-body">
            <div class="form-group">
              <input v-model="state.newBug.title" type="text" class="form-control my-1 bg-light shadow-sm" placeholder="bug..." title="Bug Title">
              <textarea v-model="state.newBug.description"
                        class="form-control bg-light shadow-sm"
                        cols="30"
                        rows="3"
                        placeholder="explain in detail..."
                        title="Bug Description"
              ></textarea>
            </div>
          </div>
          <div class="card-footer">
            <button type="submit" class="btn btn-warning btn-sm float-right shadow-sm text-light cursor" title="Submit Form">
              Submit
            </button>
          </div>
        </form>
        <div class="row">
          <div class="col">
            <button class="btn btn-success my-3 cursor" type="button" @click="filterBugs">
              Newest Open Bugs
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <Bug v-for="bug in state.bugs" :key="bug.id" :bug="bug" />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { bugsService } from '../services/BugsService'
import Notification from '../utils/Notification'
export default {
  name: 'Home',
  setup() {
    const state = reactive({
      bugOrder: true,
      account: computed(() => AppState.account),
      user: computed(() => AppState.user),
      bugs: computed(() => AppState.bugs),
      newBug: {}
    })
    onMounted(async() => await bugsService.getAllBugs())
    return {
      state,
      async filterBugs() {
        try {
          if (state.bugOrder === true) {
            await bugsService.filterBugs()
            state.bugOrder = false
          }
        } catch (error) {
        }
      },
      async createBug() {
        try {
          await bugsService.createBug(state.newBug)
          Notification.toast('Successfully Created Bug', 'success')
          state.newBug = {}
        } catch (error) {
          Notification.toast(error.message)
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
.text-shadow{
  text-shadow: .1rem .1rem #31313150;
}
</style>
