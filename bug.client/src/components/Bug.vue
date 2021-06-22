<template>
  <div class="row justify-content-center">
    <div class="col-8 card my-2 bg-dark shadow" @click="bugDetails" title="Bug Details">
      <div class="row p-4">
        <div class="col-4 align-middle pt-5">
          <img :src="bug.creator.picture" class="rounded-circle image-fluid img-thumbnail img-height shadow">
          <p>{{ bug.creator.name }}</p>
        </div>
        <div class="col-8">
          <div class="card my-6 shadow">
            <h5 class="card-header">
              {{ bug.title }}
            </h5>
            <div class="card-body">
              <p class="p-0">
                {{ bug.description }}
              </p>
            </div>
            <div>
              {{ new Date(bug.updatedAt).toLocaleString('en',date) }}
            </div>
            <div class="card-footer p-0 m-0">
              <p v-if="bug.closed==false" class="py-1 my-1 text-success">
                Open
              </p>
              <p v-else class="py-1 my-1 text-danger">
                Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import Notification from '../utils/Notification'

export default {
  props: {
    bug: { type: Object, required: true }
  },
  setup(props) {
    const router = useRouter()
    return {
      date: {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      },
      bugDetails() {
        try {
          router.push({ name: 'BugDetailsPage', params: { id: props.bug.id } })
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
  height: 4rem;
  width: 4rem;
}
.text-shadow{
  text-shadow: .1rem .1rem #31313150;
}
</style>
