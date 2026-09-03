<script setup lang="ts">
import Book from "./icons/Book.vue";
import type { Component } from "vue";
import Bookmark from "./icons/Bookmark.vue";

const props = defineProps<{
  title: string;
  desc?: string;
  href: string;
  category: string;
}>();

const categoryIcons: {
  [category: string]: Component;
} = {
  books: Book,
};
</script>

<template>
  <article class="c-card">
    <component :is="categoryIcons[props.category]" />
    <div class="c-card__content">
      <h3>{{ props.title }}</h3>
      <div></div>
    </div>
    <div class="c-card__bookmark">
      <Bookmark />
    </div>
  </article>
</template>

<style lang="css">
.c-card {
  display: flex;
  border-radius: 10px;
  border: 1px solid var(--border);
  position: relative;
  background-color: var(--bg);
}

.c-card:hover {
  background-color: var(--code-bg);
}

.c-card {
  flex: 1;
  display: flex;
  column-gap: 10px;
  align-items: flex-start;
  padding: 18px 20px 20px;
  text-decoration: none;
}

.c-card__content {
  display: flex;
  flex-direction: column;
  row-gap: 5px;
}

.c-card__content h3 {
  font-weight: 900;
  font-size: 1.1rem;
  line-height: 1.5;
}

.c-card__content div {
  height: 2px;
  width: 30%;
  background-color: var(--text);
}

.c-card svg {
  flex: none;
  height: 25px;
  width: 25px;
}

.c-card__bookmark svg path,
.c-card svg path {
  fill: var(--text);
}

.c-card__bookmark {
  position: absolute;
  right: 5%;
  top: -2px;
}

.c-card__bookmark svg {
  height: 24px;
  width: 24px;
}
</style>
