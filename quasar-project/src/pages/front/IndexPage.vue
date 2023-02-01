<template>
  <q-page class="flex flex-center">
      <q-btn label="Notify" @click="notify" color="primary" />
      {{ counter }}
      <q-btn icon="fa-solid fa-play" label="點我" @click="increment" color="primary" />
      <v-image-input v-model="file" />
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useCounterStore } from '@/stores/example-store'
import { storeToRefs } from 'pinia'
import { useQuasar } from 'quasar'
import { api } from '@/boot/axios'

const counterStore = useCounterStore()
const { increment } = counterStore
const { counter } = storeToRefs(counterStore)

const file = ref(null)

const $q = useQuasar()

const notify = () => {
  $q.notify(
    {
      position: 'center',
      color: 'negative',
      message: 'Woah! Danger! You are getting good at this!',
      icon: 'report_problem'
    }
  )
}

(async () => {
  await api.get('/')
})()
</script>
