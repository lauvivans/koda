<script setup lang="ts">
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="p-home">
    <div class="p-home__presentation">
      <p>
        I&apos;m Laura, systems analyst focused on web development, with a
        strong foundation in Front-End. I graduated from Instituto Federal de
        Santa Catarina (IFSC).
      </p>
      <p>
        I&apos;ve worked in a varied health-focused systems, in
        <a href="https://estudosarquivados.pt/">estudos arquivados</a> and
        <a href="https://acessiweb.vercel.app/">acessiweb</a>.
      </p>
      <p>
        I&apos;ve became Tech Lead in the Front-End development team in
        <a href="https://lacreisaude.com.br/">Lacrei Saúde</a>, social-impact
        health tech that connects LGBTQIAPN+ community with inclusive and
        qualified healthcare professionals.
      </p>
      <p>
        I&apos;m building
        <a href="https://notionportfolio.arualvivan.com/">Notion portfolio</a>,
        <a href="https://yoko.arualvivan.com/">Yoko!</a>,
        <a href="https://haru.arualvivan.com/">Haru</a> and
        <a href="https://nori.arualvivan.com/">Nori</a>.
      </p>
      <p>
        You can also access my <a href="https://arualvivan.com">portfolio</a> to see more.
      </p>
    </div>
    <div class="p-home__aside">
      <div class="p-home__img-wrapper">
        <img loading="lazy" src="../assets/undraw_a-woman-avatar_ifsl.svg" />
      </div>
      <ul>
        <li><a>@lauvivans</a></li>
      </ul>
    </div>
  </div>
  <Footer />
</template>

<style lang="css">
.p-home {
  display: flex;
  padding: 2em 2em 2em 0;
  height: 100%;
}

.p-home__aside {
  display: flex;
  flex-direction: column;
  place-items: center;
  row-gap: 0.5em;
  flex: 1;
}

.p-home__aside ul {
  list-style: none;
}

.p-home__aside ul li {
  font-weight: 700;
}

.p-home__img-wrapper {
  height: auto;
}

.p-home__img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.p-home__presentation {
  display: flex;
  flex-direction: column;
  row-gap: 1em;
  flex: 7;
  width: 95%;
  margin: auto;
  padding-bottom: 5em;
  margin-top: 1rem;
}

.p-home__presentation > p {
  line-height: 1.5;
}

.p-home__presentation > p a:hover {
  font-weight: 800;
  color: var(--accent);
}
</style>
