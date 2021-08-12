<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col d-flex">
        <div>
          <h1>acount bugs under construction</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'Account',
  setup() {
    const state = ({
      bugs: computed(() => AppState.bugs)
    })
    return {
      state,
      account: computed(() => AppState.account)
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
