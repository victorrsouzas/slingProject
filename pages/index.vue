<template>
  <div>
    <section class="container-Home">
      <h1>Nuxt 2: O Framework Intuitivo do Vue para SlingProject</h1>
      <p class="subheading">
        Explore o poderoso SlingProject em Nuxt 2 - o framework Vue intuitivo
        com um dashboard personalizado. Controle seus dados de forma eficiente
        em uma interface moderna e otimizada, proporcionando a melhor
        experiência ao usuário. Impulsione seus projetos com SlingProject!
      </p>
      <div class="image-container">
        <img
          src="https://s3.amazonaws.com/creativetim_bucket/products/156/original/vue-argon-dashboard.jpg?1653536619"
          alt="Dashboard"
          class="dashboard-image"
        />
      </div>
      <div class="buttons-container">
        <nuxt-link to="dashboard"
          ><button class="app-button-primary-color">
            Get started Dashboard
          </button></nuxt-link
        >
        <nuxt-link to="about">
          <button class="app-button-primary-color">More informations</button>
        </nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Home - SlingProject",
      meta: [
        { name: "description", content: "This is my home description here" },
        {
          name: "keywords",
          content: "Home - SlingProject, Home - SlingProject info",
        },
      ],
    };
  },
};
</script>

<style>
</style>
