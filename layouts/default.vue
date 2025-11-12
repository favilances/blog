<template>
  <div class="min-h-screen bg-[#ddd] dark:bg-black text-black dark:text-white flex flex-col justify-between">
    <div>
      <header class="fixed top-0 left-0 right-0 bg-[#ddd] dark:bg-black z-50">
        <div class="flex justify-between p-8">
          <div class="space-y-2">
            <NuxtLink to="/" class="text-xl font-medium hover:opacity-75 transition-opacity">
              favilances blog
            </NuxtLink>

          </div>
          <div>
            <a href="https://favilances.com/" target="_blank" class="hover:opacity-75 transition-opacity text-sm inline-flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      <main class="pt-36 px-8">
        <slot />
      </main>
    </div>

    <footer class="p-8 flex justify-between items-end">
      <div class="text-sm text-gray-600 dark:text-gray-400">
        © 2025 noirLang
      </div>
      <div class="logo-placeholder">
        <img src="/logo.png" alt="Maze Logo" class="w-24 h-24 object-contain" />
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  titleTemplate: (title) => title ? `${title} - favilances - blog` : 'favilances - blog',
  meta: [
    { name: 'description', content: 'favilances - blog' },
    { property: 'og:site_name', content: 'favilances - blog' }
  ]
})
</script>

<style scoped>
/* Özel stiller buraya eklenebilir */
</style> 