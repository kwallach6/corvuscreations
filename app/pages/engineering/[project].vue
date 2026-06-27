<script setup lang="ts">
const { data: page } = await useAsyncData('page', () => {
  return queryCollection('engpage').path(useRoute().path).first()
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
  <UContainer :ui="{ base: 'mt-12' }">
    <ContentRenderer
      v-if="page"
      :value="page"
    />
  </UContainer>
</template>
