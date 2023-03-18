<template>
  <button :class="[props.style]">{{ props.content }}</button>
</template>

<script setup lang="ts">
import { defineProps } from "vue";


const props = defineProps<{
  content: string,
  style: 'new' | 'solved' | 'inProgress' | 'onReview' | 'deffered' | 'rejected',
}>()

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("@/styles/_variables.scss");

button {
  cursor: pointer;
  padding: 0.3125rem 1.3125rem;
  border-radius: 0.625rem;
  transition: opacity 0.5s ease-in-out;
}

.button:hover {
  opacity: 0.5;
}

.new {
  color: black;
  background-color: var(--new-color);
  border: var(--solved-color) 1px solid;
}

.solved {
  color: black;
  background-color: var(--solved-color);
  border: none;
}

.inProgress {
  color: black;
  background-color: var(--in-progress-color);
  border: none;
}

.onReview {
  color: black;
  background-color: var(--in-review-color);
  border: var(--in-progress-color) 1px solid;
}


.deffered {
  color: black;
  background-color: var(--deffered-color);
  border: var(--rejected-color) 1px solid;
}


.rejected {
  color: black;
  background-color: var(--rejected-color);
  border: none;
}
</style>
