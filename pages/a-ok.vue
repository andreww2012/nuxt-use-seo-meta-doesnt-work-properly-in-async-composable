<template>
  <div>{{ NAME }} page</div>
</template>

<script setup lang="ts">
import {useSeoMeta} from '#imports';
import {useMeta} from '@/composables/useMeta';

const NAME = 'A';

// await useMeta(NAME);

await new Promise((resolve) => setTimeout(resolve, 1000));

useSeoMeta(() => ({
  title: `${NAME} layout title`,
  description: `${NAME} layout description`,
}));
</script>
