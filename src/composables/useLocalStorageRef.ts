import { ref, Ref, watch } from 'vue';

export const writeToLocalStorage = (key: string, value: any): void => {
  localStorage.setItem(key, JSON.stringify(value));
};
export const loadFromLocalStorage = <T>(key: string): T => {
  return JSON.parse(localStorage.getItem(key) ?? 'undefined');
};

export default function <T>(key: string, value?: T): Ref<T | undefined> {
  const customRef: Ref<T | undefined> = ref();
  if (!value) {
    customRef.value = loadFromLocalStorage<T>(key);
  } else {
    customRef.value = value;
  }

  watch(
    customRef,
    (newVal) => {
      writeToLocalStorage(key, newVal);
    },
    {
      deep: true,
      immediate: true,
    }
  );

  return customRef;
}
