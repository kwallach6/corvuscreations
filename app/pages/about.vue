<script setup lang="ts">
const { data: page } = await useAsyncData('about', () => {
  return queryCollection('about').first()
})
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

const title = page.value?.seo.title || page.value?.title
const description = page.value?.seo.description || page.value?.description

useSeoMeta({
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description
})

defineOgImage('Portfolio', {
  title: `${title} - Kam Wallach's Portfolio`,
  description
})
</script>

<template>
  <UContainer>
    <ContentRenderer
      v-if="page"
      :value="page"
    />
  </UContainer>
</template>
