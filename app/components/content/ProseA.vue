<template>
  <NuxtLink
    :href="props.href"
    :target="props.target"
    class="text-primary border-b border-transparent hover:border-primary
    font-medium focus-visible:outline-primary focus-visible:has-[>code]:outline-0
    [&>code]:border-dashed hover:[&>code]:border-primary hover:[&code]:text-primary
    focus-visible:[&>code]:border-primary
    focus-visible:[&>code]:text-primary transition-colors
    [&>code]:transition-colors"
  >
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

const props = defineProps({
  href: {
    type: String,
    default: ''
  },
  target: {
    type: String as PropType<'_blank' | '_parent' | '_self' | '_top' | (string & object) | null | undefined>,
    default: '_blank',
    required: false
  }
})
</script>
