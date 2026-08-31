<script setup lang="ts">
import posts from "../posts";
</script>

<template>
  <div class="p-blog">
    <h1>My posts</h1>
    <div class="p-blog__links">
      <RouterLink
        class="p-blog__links__post"
        v-for="post in posts"
        :to="{ name: 'BlogPost', params: { id: post.id } }"
        >{{ post.title }} ({{ post.published }})</RouterLink
      >
    </div>
    <div class="p-blog__img-wrapper">
      <img src="../assets/undraw_playful-cat_3ta5.svg" />
    </div>
  </div>
</template>

<style lang="css">
.p-blog {
  display: flex;
  flex-direction: column;
  row-gap: 2em;
  padding: 3em 3em 0;
  width: 100%;
}

.p-blog__links {
  display: flex;
  flex-direction: column;
  row-gap: 1.5em;
}

.p-blog__links__post {
  width: 100%;
}

.p-blog__links__post:hover {
  color: var(--accent);
}

.p-blog__img-wrapper {
  margin-top: auto;
  margin-left: auto;
  width: 40%;
}

.p-blog__img-wrapper img {
  width: 100%;
  height: auto;
  object-fit: fill;
}
</style>
