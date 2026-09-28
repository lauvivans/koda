<script setup lang="ts">
import Github from "@/components/icons/Github.vue";
</script>

<template>
  <footer class="footer">
    <ul>
      <li>
        <Github />
        <a href="https://github.com/lauvivans">lauvivans</a>
      </li>
    </ul>
  </footer>
</template>

<style lang="css">
.footer {
  border-top: 1px solid var(--accent-border);
  padding: 2rem 0 5rem;
}

.footer ul {
  list-style: none;
}

.footer ul li {
  display: flex;
  place-items: center;
  column-gap: .2rem;
}

.footer ul li svg {
  max-width: 1.7rem;
}
</style>
