<script setup lang="ts">
import { useFetch } from '@vueuse/core';
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { useStudent } from './hooks/useStudent';
import StudentCard from './components/StudentCard.vue'
const { isFetching, error, data } = useStudent(20000);

const genders = computed(() => {
  return data.value?.filter(student => student.gender === 'Male');
});
</script>

<template>
  <div>
    <h1>学生データ</h1>
    <div v-if="isFetching">データを取得中です...</div>
    <div v-else-if="error">エラーが発生しました: {{ error }}</div>
    <div v-else>
      <StudentCard :genders="genders" />
    </div>
  </div>
</template>

<style scoped>
.list {
  color: aliceblue;
}
</style>
