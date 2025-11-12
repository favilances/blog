<template>
  <div class="min-h-screen w-full flex flex-col items-center justify-center p-8 fixed inset-0 bg-[#ddd] dark:bg-black text-black dark:text-white">
    <div class="flex flex-col items-center">
      <!-- Plak Çalar Animasyonu -->
      <div class="record-player mb-8 relative">
        <div class="turntable w-64 h-64 bg-black rounded-full shadow-xl flex items-center justify-center">
          <div class="record w-56 h-56 bg-[#333] rounded-full animate-spin-slow relative">
            <!-- Albüm Kapağı -->
            <img src="/album-cover.jpg" alt="Album Cover" class="w-full h-full object-cover rounded-full" />
            <!-- Plak Merkezi -->
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-8 h-8 bg-[#ddd] rounded-full"></div>
            </div>
          </div>
          <!-- Kol -->
          <div class="tonearm absolute top-8 right-8 w-24 h-4 bg-[#444] origin-right transform rotate-12"></div>
        </div>
      </div>

      <!-- 404 Mesajı -->
      <h1 class="text-4xl font-bold mb-4">404</h1>
      <p class="text-xl mb-8">Sayfa Bulunamadı</p>

      <!-- Gizli Audio Player -->
      <audio ref="audioPlayer" :src="'/song.mp3'" class="hidden" loop></audio>

      <!-- Ana Sayfaya Dön -->
      <NuxtLink to="/" class="mt-8 text-blue-600 dark:text-blue-400 hover:underline">
        Ana Sayfaya Dön
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const error = useError()
const audioPlayer = ref<HTMLAudioElement | null>(null)

useHead({
  title: '404 - favilances - blog',
  meta: [
    { name: 'description', content: 'Sayfa bulunamadı - favilances - blog' },
    { property: 'og:title', content: '404 - favilances - blog' },
    { property: 'og:description', content: 'Sayfa bulunamadı - favilances - blog' }
  ]
})

onMounted(() => {
  if (audioPlayer.value) {
    audioPlayer.value.volume = 0.5
    audioPlayer.value.play()
  }
})

onUnmounted(() => {
  if (audioPlayer.value) {
    audioPlayer.value.pause()
  }
})
</script>

<style scoped>
.animate-spin-slow {
  animation: spin 4s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

input[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  height: 4px;
  background: #666;
  border-radius: 2px;
  outline: none;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 16px;
  height: 16px;
  background: currentColor;
  border-radius: 50%;
  cursor: pointer;
}

input[type="range"]::-moz-range-thumb {
  width: 16px;
  height: 16px;
  background: currentColor;
  border-radius: 50%;
  cursor: pointer;
  border: none;
}
</style> 