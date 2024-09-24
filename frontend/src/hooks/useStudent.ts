import { useFetch } from '@vueuse/core';
import { ref, onUnmounted, onMounted } from 'vue';

export function useStudent(interval: number = 10000) {
  const { isFetching, error, data, execute } = useFetch("https://freetestapi.com/api/v1/students").json();

  const intervalId = ref(null);

  const startPolling = () => {
    intervalId.value = setInterval(() => {
      execute();
    }, interval); // 10秒ごとに更新
  }

  const stopPolling = () => {
    if (intervalId.value) {
      clearInterval(intervalId.value)
      intervalId.value = null
    }
  }

  onMounted(() => {
    startPolling()
  })

  onUnmounted(() => {
    stopPolling()
  })

  return { isFetching, error, data };
}
