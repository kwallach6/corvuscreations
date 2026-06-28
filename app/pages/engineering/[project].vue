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

const title = page.value?.seo.title || page.value?.title
const description = page.value?.seo.description || page.value?.description

useSeoMeta({
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description
})

defineOgImage('Portfolio', {
  title: `${title} - Alex Wallach's Portfolio`,
  description
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
