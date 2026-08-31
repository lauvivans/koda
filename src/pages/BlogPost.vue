<script setup lang="ts">
import { useRoute } from "vue-router";
import posts from "../posts";
import { computed } from "vue";

const route = useRoute();
const postId = route.params.id;

const post = computed(() => posts.find((p) => p.id === postId));
</script>

<template>
  <div class="c-blog-post">
    <div class="c-blog-post__header">
      <h1>{{ post?.title }}</h1>
      <span>{{ post?.published }}</span>
      <span>Updated at {{ post?.updated }}</span>
    </div>

    <div class="c-blog-post__post">
      <component :is="post?.post" />
    </div>
  </div>
</template>

<style lang="css">
.c-blog-post {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 60%;
  padding: 3em;
}

.c-blog-post__header {
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5em;
}

.c-blog-post .c-blog-post__post {
  padding-bottom: 10em;
}

.c-blog-post .c-blog-post__post p {
  line-height: 1.5;
  margin: 0.5em 0;
}

.c-blog-post .c-blog-post__post h2,
.c-blog-post .c-blog-post__post h3,
.c-blog-post .c-blog-post__post h4 {
  margin: 1em 0;
}

.c-blog-post .c-blog-post__post figure {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 1.5em 0;
}

.c-blog-post .c-blog-post__post pre {
  background-color: var(--code-bg);
  border-radius: 10px;
  padding: 0.9em;
}

.c-blog-post .c-blog-post__post ul {
  padding-left: 0.7em;
}

.c-blog-post .c-blog-post__post ul li {
  margin: 0.3em 0;
  line-height: 1.5;
}
</style>
