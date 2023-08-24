<script>
import { InformationCircleIcon } from '@heroicons/vue/24/outline'

export default {
  components: {
    InformationCircleIcon
  },
  props: {
    message: {
      type: String,
      required: true
    },
    marginClass: {
      type: String,
      default: 'm-5'
    }
  }
}
</script>

<template>
  <div :class="['rounded-md bg-green-50 p-4', marginClass]">
    <div class="flex">
      <div class="flex-shrink-0">
        <InformationCircleIcon class="h-5 w-5 text-green-400" aria-hidden="true" />
      </div>
      <div class="ml-3">
        <p class="text-sm text-green-800">{{ message }}</p>
      </div>
    </div>
  </div>
</template>


