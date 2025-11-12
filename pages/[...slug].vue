<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string[] || []
const path = `/articles/${slug.join('/')}`

// İçeriği yükle
const { data: page, error } = await useAsyncData(`content-${path}`, () => 
  queryContent(path).findOne()
)

// Eğer sayfa bulunamazsa 404 göster
if (error.value || !page.value) {
  throw createError({ 
    statusCode: 404, 
    statusMessage: 'Sayfa Bulunamadı',
    fatal: true
  })
}
</script>

<template>
  <div>
    <ContentDoc v-if="page" :path="path" />
  </div>
</template> 