<script setup lang="ts">
defineProps<{
  genders: any;
}>()
</script>

<template>
  <ul>
    <li v-for="student in genders" :key="student.id">
      {{ student.name }} {{ student.gender }}
    </li>
  </ul>
</template>
