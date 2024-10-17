<template>
  <section id="pro-video">
    <VideoPlayer :youtubeId="proStore.pro?.youtubeId" />
  </section>

  <section id="pro-infos">
    <div class="image">
      <img :src="proStore.pro?.imageUrl" :alt="proStore.pro?.name" />
    </div>
    <div class="identity">
      <h1>{{ proStore.pro?.name }}</h1>
      <p>{{ proStore.pro?.description }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import VideoPlayer from '@/components/VideoPlayer.vue'
import { useProStore } from '@/stores/proStore'
import { RouteUtils } from '@/utils/RouteUtils'
import { useRoute } from 'vue-router'

const route = useRoute()
const proStore = useProStore()

const id = RouteUtils.firstIfArray(route.params.id)
console.log('id', id)
proStore.fetchPro(id)
</script>

<style scoped lang="scss">
#pro-infos {
  display: flex;
  flex-direction: row;
  margin: 0.5rem;
  gap: 0.5rem;

  .image {
    flex-basis: 50%;
    aspect-ratio: 1;
    img {
      width: 100%;
      height: 100%;
      box-shadow: 0.2rem 0.2rem 0.5rem #00000055;
      border-radius: 0.5rem;
      object-fit: cover;
    }
  }
}
</style>
