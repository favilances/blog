<template>
  <div class="w-full">
    <ContentList path="/articles" v-slot="{ list }" :sort="{ date: -1 }">
      <div class="space-y-6">
        <article 
          v-for="article in list" 
          :key="article._path"
          class="space-y-4"
        >
          <div 
            class="flex items-start space-x-4 hover:bg-white dark:hover:bg-gray-900 rounded-lg cursor-pointer transition-colors p-4"
            @click="toggleArticle(article._path)"
          >
            <div class="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap min-w-[80px]">
              {{ formatDate(article.date) }}
            </div>
            <div class="flex-1">
              <h2 class="text-base font-medium text-gray-900 dark:text-gray-100">
                {{ article.title }}
              </h2>
              <p v-if="article.description" class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {{ article.description }}
              </p>
            </div>
          </div>

          <Transition
            enter-active-class="transition-all duration-200 ease-out"
            enter-from-class="opacity-0 -translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition-all duration-150 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-1"
          >
            <div 
              v-if="openArticles.includes(article._path)" 
              class="mt-4"
            >
              <ContentDoc :path="article._path" v-slot="{ doc }">
                <article class="prose dark:prose-invert max-w-none bg-[#ddd] dark:bg-black rounded-lg text-sm p-4">
                  <ContentRenderer :value="doc" />
                </article>
              </ContentDoc>
            </div>
          </Transition>
        </article>
      </div>
    </ContentList>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '@vueuse/head'

const openArticles = ref<string[]>([])

const toggleArticle = (path: string) => {
  const index = openArticles.value.indexOf(path)
  if (index === -1) {
    openArticles.value.push(path)
  } else {
    openArticles.value = openArticles.value.filter(p => p !== path)
  }
}

const formatDate = (date: string) => {
  if (!date) return ''
  const d = new Date(date)
  return d.toLocaleDateString('tr-TR', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit'
  }).replace(/\./g, '-')
}

useHead({
  title: 'favilances - blog',
  titleTemplate: 'favilances - blog',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'format-detection', content: 'telephone=no' },
    { name: 'description', content: 'favilances - blog' },
    { name: 'keywords', content: 'favilances, blog, teknoloji, yazılım, düşünceler' },
    { name: 'author', content: 'favilances' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:site_name', content: 'favilances - blog' },
    { property: 'og:title', content: 'favilances - blog' },
    { property: 'og:description', content: 'favilances - blog' },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'tr_TR' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@favilances' },
    { name: 'twitter:creator', content: '@favilances' },
    { name: 'twitter:title', content: 'favilances - blog' },
    { name: 'twitter:description', content: 'favilances - blog' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'canonical', href: 'https://favilances.com' }
  ]
})
</script>

<style>
.prose {
  @apply max-w-none;
}

.prose :where(h1, h2, h3, h4, h5, h6) {
  @apply text-base font-medium mt-4 mb-2;
}

.prose :where(p) {
  @apply text-sm my-2;
}

.prose :where(ul, ol) {
  @apply text-sm my-2 pl-4;
}

.prose a {
  @apply text-blue-600 dark:text-blue-400 no-underline hover:underline;
}

.prose img {
  @apply rounded-lg shadow-lg;
}

.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 3px;
}

.dark .custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.2);
}
</style> 