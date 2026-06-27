<script setup lang="ts">
const { global } = useAppConfig()

defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <UPageHero
    :title="title"
    :description="description"
    orientation="horizontal"
    :ui="{
      container: 'lg:flex sm:flex-row px-0! items-center',
      title: 'mx-0! text-left',
      description: 'mx-0! text-left',
      links: 'justify-start'
    }"
  >
    <UColorModeAvatar
      class="sm:rotate-4 size-36 rounded-lg ring ring-default ring-offset-3 ring-offset-bg"
      :light="global.picture?.light!"
      :dark="global.picture?.dark!"
      :alt="global.picture?.alt!"
    />
  </UPageHero>
</template>
