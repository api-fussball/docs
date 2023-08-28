<!-- ./components/content/InfoBox.vue -->

<script setup>
import {InformationCircleIcon, ExclamationTriangleIcon, ExclamationCircleIcon} from "@heroicons/vue/24/outline";

const props = defineProps({
  marginClass: {
    type: String,
    default: 'mt-5'
  },
  type: {
    type: String,
    default: 'info'
  }
});

</script>

<template>

  <div :class="['rounded-md p-4',type, marginClass]">
    <div class="flex items-center">
      <div class="flex-shrink-0">
        <ExclamationTriangleIcon v-if="type == 'warning'" class="icon" />
        <ExclamationCircleIcon v-else-if="type == 'error'" class="icon" />
        <InformationCircleIcon v-else class="icon" />
      </div>
      <div class="ml-3">
        <span class="text-sm">
          <ContentSlot :use="$slots.default" unwrap="p"/>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>

.icon {
  @apply h-6 w-6;
}

.info {
  @apply bg-green-50 text-green-800;
}

.info .icon {
  @apply text-green-400;
}

.error {
  @apply bg-red-50 text-red-800;
}

.error .icon {
  @apply text-red-400;
}

.warning {
  @apply bg-yellow-50 text-yellow-800;
}

.warning .icon {
  @apply text-yellow-400;
}



</style>
