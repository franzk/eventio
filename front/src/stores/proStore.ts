import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Pro } from '@/types/Pro'

export const useProStore = defineStore('proStore', () => {
  const pros = ref<Pro[] | null>(null)

  const pro = ref<Pro | null>(null)

  const fetchPro = (id: string) => {
    fetchPros()
    pro.value = pros.value?.find(pro => pro.id === id) || null
  }

  const fetchPros = () => {
    pros.value = [
      {
        id: '1',
        name: 'Franz Van Schlettstadt',
        description:
          'La meilleure ambiance pour les plantations en extérieur !',
        youtubeId: 'uloiNgVr3JU',
        imageUrl: '/fs.png',
        pricing: '666 euros / soirée',
      },
      {
        id: '2',
        name: 'React',
        description: 'A JavaScript library for building user interfaces',
        youtubeId: 'Ke90Tje7VS0',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
        pricing: 'Free',
      },
      {
        id: '3',
        name: 'Angular',
        description: 'One framework. Mobile & desktop.',
        youtubeId: 'z5mZ3n8f4bo',
        imageUrl: 'https://angular.io/assets/images/logos/angular/angular.svg',
        pricing: 'Free',
      },
    ]
  }

  return {
    pros,
    fetchPros,
    pro,
    fetchPro,
  }
})
