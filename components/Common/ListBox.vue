<template>
    <div class="relative w-full  border-b border-t border-[rgba(255,255,255,0.07)] bg-gradient-to-b from-mirage to-dark   py-[18px]">
      <Listbox v-model="selectedPerson">
        <div class="px-4">
          <ListboxButton class="bg-gray-700 w-full flex justify-between items-center py-[9px] rounded-md px-2">
            <span class="text-sm font-light">
              {{ selectedPerson.name }}
            </span>
            <NuxtIcon name="admin/arrow-down" filled />
           </ListboxButton>
        </div>
        <ListboxOptions class="absolute bg-black px-4 bg-mirage left-4 py-4 right-4 space-y-2 rounded ">
          <ListboxOption
          v-for="person in people"
          :key="person.id"
          :value="person"
          :disabled="person.unavailable"
          class="text-sm font-light"
          >
          {{ person.name }}
        </ListboxOption>
      </ListboxOptions>
    </Listbox>
  </div>
  </template>
  
  <script lang="ts" setup>
    import { ref } from 'vue'
    import {
      Listbox,
      ListboxButton,
      ListboxOptions,
      ListboxOption,
    } from '@headlessui/vue'
  
    const people = [
      { id: 1, name: 'Popularity Ascending', unavailable: false },
      { id: 2, name: 'Popularity Descending', unavailable: false },
      { id: 3, name: 'Release Date Ascending', unavailable: false },
      { id: 4, name: 'Release Date Descending', unavailable: true },
      { id: 5, name: 'Rating Ascending', unavailable: false },
      { id: 6, name: 'Rating Descending', unavailable: false },
    ]
    
    const selectedPerson = ref(people[0])
  </script>
  