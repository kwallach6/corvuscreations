<script setup lang="ts">
const { data: page } = await useAsyncData('prefixed-page', () => queryCollection('pages').path(useRoute().path).first())
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}
</script>

<template>
  <UContainer>
    <ContentRenderer
      v-if="page"
      :value="page"
    />
  </UContainer>
</template>
