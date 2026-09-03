<script setup lang="ts">
import { ref } from "vue";
import data from "../data";
import Card from "../components/Card.vue";

const category = ref("books");
const selectedLink = ref<{
  title: string;
  link: string;
  desc?: string;
}>();

const selectMenuItem = (item: string) => {
  category.value = item;
};

const handleSelectedLink = (item: {
  title: string;
  link: string;
  desc?: string;
}) => {
  selectedLink.value = item;
};
</script>

<template>
  <div class="p-homepage">
    <aside class="p-homepage__aside">
      <ul v-for="dt in Object.keys(data)">
        <li
          v-on:click="selectMenuItem(dt)"
          :class="{ active: category === dt }"
        >
          {{ dt }}
        </li>
      </ul>
    </aside>
    <div class="p-homepage__content">
      <div class="p-homepage__content__left">
        <div class="p-homepage__content__left__links">
          <div
            class="p-homepage__content__left__links__subcategories"
            v-for="(categoryItems, key) in data[category]"
            :key="key"
          >
            <div
              class="p-homepage__content__left__links__subcategories__subcategory"
            >
              <h2>{{ key }}</h2>
              <div>
                <Card
                  v-for="categoryItem in categoryItems"
                  @click="handleSelectedLink(categoryItem)"
                  :title="categoryItem.title"
                  :href="categoryItem.link"
                  :category="category"
                  :desc="categoryItem.desc"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="p-homepage__content__left__img-wrapper">
          <img src="../assets/undraw_summer_u79u.svg" />
        </div>
      </div>
      <div class="p-homepage__link">
        <div v-if="selectedLink">
          <h2>{{ selectedLink.title }}</h2>
          <p>{{ selectedLink.desc }}</p>
          <a :href="selectedLink.link" target="_blank">Access content</a>
        </div>
        <div v-else>
          <p class="p-homepage__link__no-selected-content">Click in a card to show content here</p>
        </div>
        <div class="p-homepage__link__img-wrapper">
          <img src="../assets/undraw_friends_xscy.svg" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css">
.p-homepage {
  display: flex;
  height: 100%;
  width: 100%;

  @media (max-width: 480px) {
    flex-direction: column;
  }
}

.p-homepage__aside {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: var(--code-bg);
  padding: 1em 4em 1em 1em;
  height: fit-content;
  z-index: 100;
  flex: 1;

  @media (max-width: 480px) {
    position: inherit;
    width: 100%;
    height: fit-content;
  }
}

.p-homepage__aside ul {
  list-style: none;
}

.p-homepage__aside ul li {
  font-weight: 700;
}

.p-homepage__aside ul li:hover {
  color: var(--accent);
  cursor: pointer;
}

.p-homepage__aside .active {
  color: var(--accent);
  text-decoration: underline;
}

.p-homepage__content {
  display: flex;
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  position: relative;

  @media (max-width: 480px) {
    flex-direction: column;
    row-gap: 20px;
  }
}

.p-homepage__content__left {
  display: flex;
  flex-direction: column;
  flex: 2;
  height: 100%;
  width: 100%;
}

.p-homepage__content__left__img-wrapper {
  max-width: 50%;

  @media (max-width: 480px) {
    width: 100%;
  }
}

.p-homepage__content__left__img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  z-index: 200;
}

.p-homepage__content__left__links {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  height: 100%;
  overflow-y: auto;
  padding: 0px 20px;

  @media (max-width: 480px) {
    width: 100%;
    padding: 0px 10px;
    max-height: inherit;
  }
}

.p-homepage__content__left__links__subcategories__subcategory {
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  width: 100%;
  background-color: var(--code-bg);
  padding: 20px 20px 30px;
  border-radius: 10px;
  box-shadow: var(--shadow);
}

.p-homepage__content__left__links__subcategories__subcategory h2 {
  font-size: 1.5rem;
}

.p-homepage__content__left__links__subcategories__subcategory > div {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}

.p-homepage__content__left__links__subcategories:last-of-type {
  padding-bottom: 50px;
}

.p-homepage__link {
  padding: 1.5em 0.5em 0em;
  flex: 2;
  display: flex;
  flex-direction: column;
}

.p-homepage__link > div {
  display: flex;
  flex-direction: column;
  row-gap: 1em;
  height: 100%;
}

.p-homepage__link__img-wrapper {
  display: flex;
  margin-top: auto;
  max-height: 50%;
}

.p-homepage__link__img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.p-homepage__link__no-selected-content {
  margin: auto;
  align-self: center;
}
</style>
