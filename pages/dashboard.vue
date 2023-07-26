<template>
  <div>
    <section class="container-Home">
      <h1>Dashboard</h1>
      <p class="subheading">
        A PARTIR DE UM DASHBOARD DE BAIXA FIDELIDADE, COMO EXEMPLO ABAIXO:
      </p>
      <Dash />
      <p class="subheading">
        TRANSFORME-O EM UM DESSES EXEMPLOS USANDO NOSSA TECNOLOGIA DE DEEP LEARNING:
      </p>
      <div class="image-container">
        <img
          src="https://s3.amazonaws.com/creativetim_bucket/products/156/original/vue-argon-dashboard.jpg?1653536619"
          alt="Dashboard"
          class="dashboard-image"
        />
        <img
          src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/vue-black-dashboard/vue-black-dashboard.jpg"
          alt="Dashboard"
          class="dashboard-image"
        />
        <img
          src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/vue-now-ui-dashboard-pro/vue-now-ui-dashboard-pro.jpg"
          alt="Dashboard"
          class="dashboard-image"
        />
      </div>
      <div class="buttons-container">
        <nuxt-link to="popup">
          <button class="app-button-primary-color">Criar Dashboard</button>
        </nuxt-link>
      </div>
    </section>
  </div>
</template>
  
  <script>
import Dash from "../components/dash";
export default {
  components: {
    Dash,
  },
  head() {
    return {
      title: "Dashboard - SlingProject",
      meta: [
        {
          name: "description",
          content: "This is my dashboard description here",
        },
        {
          name: "keywords",
          content: "Dashboard - SlingProject, Dashboard - SlingProject info",
        },
      ],
    };
  },
};
</script>
  
  <style>
</style>
  