<template>
  <div class="p-home">
    <div class="p-home__aside">
      <div class="p-home__img-wrapper">
        <img loading="lazy" src="../assets/undraw_a-woman-avatar_ifsl.svg" />
      </div>
      <ul>
        <li><a>@lauvivans</a></li>
      </ul>
    </div>
    <div class="p-home__presentation">
      <p>Hi, I’m Laura.</p>
      <p>
        I'm a passionate Web Developer with a strong foundation in Front-End
        development and a growing interest in becoming a well-rounded Full Stack
        Web Developer. I hold a degree in Information Systems from the Instituto
        Federal de Santa Catarina (IFSC), where I had the opportunity to work on
        projects that combined technology with real-world challenges. One of
        these experiences was a university extension project focused on
        developing a web application with Django to automate the triage process
        in health centers and hospitals.
      </p>
      <p>
        Throughout my journey, I've also worked on projects with a strong focus
        on accessibility and social impact. I developed AcessiWeb, a web system
        designed to make WCAG accessibility guidelines easier to understand
        while implementing some of these practices directly into the application
        to improve the experience for users with different accessibility needs.
        Later, I joined Lacrei Saúde, a social-impact health tech that connects
        the LGBTQIAPN+ community with inclusive and qualified healthcare
        professionals, where I grew as a developer and eventually took on the
        role of Front-End Tech Lead.
      </p>
      <p>
        My professional experience also includes working as a contractor on a
        payment management system that helps companies manage partners,
        services, and charges while processing payments to multiple partners
        through a single transaction. The system integrates with a payment API
        and gave me valuable experience building solutions around real business
        needs. I also contributed to Estudos Arquivados, a project that uses the
        arquivo.pt API to help Portuguese students find relevant academic
        content based on their school year and subjects. The project also
        leverages OpenAI's LLM to identify related words and expressions from
        user input, improving the accuracy of the search filters.
      </p>
      <p>
        Outside of professional projects, I enjoy experimenting and learning
        through side projects such as Notion-portfolio, Yoko!, and Koda. These
        projects allow me to explore new ideas, technologies, and approaches
        while continuing to grow as a developer. Overall, I'm driven by
        curiosity and a desire to build useful, accessible, and well-crafted web
        experiences—and I'm excited to keep expanding my skills toward becoming
        a great Full Stack Web Developer.
      </p>
    </div>
  </div>
</template>

<style lang="css">
.p-home {
  display: flex;
  column-gap: 1em;
  padding: 1em;

  @media (max-width: 480px) {
    flex-direction: column;
  }
}

.p-home__aside {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1em;
  flex: 1;
}

.p-home__aside ul {
  list-style: none;
}

.p-home__aside ul li {
  font-weight: 700;
}

.p-home__img-wrapper img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.p-home__presentation {
  display: flex;
  flex-direction: column;
  row-gap: 1em;
  flex: 4;
}

.p-home__presentation > p {
  line-height: 1.5;
}
</style>
