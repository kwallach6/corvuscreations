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

useSeoMeta({
  title: page.value?.seo.title || page.value?.title,
  ogTitle: page.value?.seo.title || page.value?.title,
  description: page.value?.seo.description || page.value?.description,
  ogDescription: page.value?.seo.description || page.value?.description
})

defineOgImage('Portfolio', {
  title: `${page.value?.seo.title || page.value?.title} - Alex Wallach's Portfolio`,
  description: page.value?.seo.description || page.value?.description
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
