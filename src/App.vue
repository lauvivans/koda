<script setup lang="ts">
import { ref } from "vue";
import data from "./data.ts";
import Modal from "./components/Modal.vue";
import Header from "./components/Header.vue";
import ArrowLeft from "./components/icons/ArrowLeft.vue";

const search = ref("");
const isModalOpen = ref(false);
const isYoutubeOpen = ref(false);
const searchResults = ref<
  Array<{
    section: string;
    category: string;
    title: string;
    link: string;
    desc?: string;
  }>
>([]);

const handleModalOpen = (isOpen: boolean) => {
  isModalOpen.value = isOpen;
};

const handleSearch = (event: SubmitEvent) => {
  searchResults.value = [];
  const formData = new FormData(event.target as HTMLFormElement);

  isModalOpen.value = true;

  const s = formData.get("search") as string;

  search.value = s;

  const q = s.toLowerCase().trim();
  if (!q) return [];

  for (const [section, categories] of Object.entries(data)) {
    for (const [category, items] of Object.entries(categories)) {
      for (const item of items) {
        const matches =
          item.title.toLowerCase().includes(q) ||
          item.desc?.toLowerCase().includes(q);

        if (matches) {
          searchResults.value.push({ ...item, section, category });
        }
      }
    }
  }
};

const handleYoutubeOpen = () => {
  isYoutubeOpen.value = !isYoutubeOpen.value;
};
</script>

<template>
  <Header :handleSearch="handleSearch" />
  <main class="koda-app">
    <RouterView />

    <button class="koda-app__helper" @click="handleYoutubeOpen">
      <ArrowLeft />
    </button>

    <iframe
      src="https://www.youtube.com/embed/videoseries?list=PLGa5r4TzH_OZoTsFrse-EQ0mZZAC8nlmr"
      frameborder="10"
      allow="autoplay; encrypted-media"
      allowfullscreen
      :style="{
        visibility: isYoutubeOpen ? `visible` : `hidden`,
        width: isYoutubeOpen ? 'auto' : '0%',
      }"
    />

    <Modal :handleModalOpen="handleModalOpen" :isModalOpen="isModalOpen">
      <div v-if="searchResults.length > 0" class="search-results">
        <span
          >Results for
          <span class="search-results__search">{{ search }}</span></span
        >
        <div class="search-results__item" v-for="res in searchResults">
          <a target="_blank" :href="res.link"
            ><h3>{{ res.title }}</h3>
          </a>
          <p>{{ res.desc }}</p>
        </div>
      </div>
      <div v-if="searchResults.length === 0"></div>
    </Modal>
  </main>
</template>

<style lang="css">
.koda-app {
  height: calc(100% - var(--header-height));
  display: flex;
  width: 100%;
  position: relative;
}

.koda-app__helper {
  all: unset;
  cursor: pointer;
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  background-color: var(--code-bg);
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  transition: width 0.5s ease-in;
  width: 2%;
}

.koda-app__helper:hover {
  width: 5%;
}

.koda-app__helper svg {
  width: 3em;
  height: 3em;
}

.koda-app__helper svg path {
  fill: var(--text);
}

.koda-app > iframe {
  position: absolute;
  height: 200px;
  right: 0;
  top: 20%;
}

.search-results {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}

.search-results__search {
  font-weight: 700;
  color: var(--accent);
}

.search-results__item {
  background-color: var(--code-bg);
  padding: 15px 20px;
  border-radius: 5px;
}

.search-results__item p {
  color: var(--text);
  font-size: 13px;
}

@media (max-width: 480px) {
  .koda-app {
    flex-direction: column;
    row-gap: 20px;
  }
}
</style>
