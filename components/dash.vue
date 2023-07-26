<template>
  <div :class="{ 'dark-mode': darkMode }">
    <header>
      <img
        :src="darkMode ? '/logo-dark.png' : '/logo-light.png'"
        alt="Logo da Empresa"
      />
      <nav>
        <ul>
          <li><a href="">Início</a></li>
          <li><a href="">Produtos</a></li>
          <li><a href="">Contato</a></li>
        </ul>
      </nav>
    </header>
    <section>
      <div class="container-Home">
        <h2>Dashboard de Vendas</h2>
        <p class="subheading">Informações de vendas</p>
        <div class="sales-data">
          <div class="sales-item">
            <h3>Total Sales</h3>
            <p>{{ totalSales }}</p>
          </div>
          <div class="sales-item">
            <h3>Today's Sales</h3>
            <p>{{ todaysSales }}</p>
          </div>
          <div class="sales-item">
            <h3>Top Product</h3>
            <p>{{ topProduct }}</p>
          </div>
        </div>
      </div>
    </section>
    <div class="dark-light" @click="toggleDarkMode">
      <svg
        v-if="darkMode"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 7V3M16 7V3M3 12H21M8 17v4M16 17v4M12 21l2.5-3M12 21l-2.5-3"
        />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 4v16m8-8H4"
        />
      </svg>
    </div>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      darkMode: false,
      totalSales: 1500,
      todaysSales: 200,
      topProduct: "Product XYZ",
    };
  },
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
    },
  },
};
</script>
  
  <style>
/* Estilos para a seção de vendas */
.sales-data {
  display: flex;
  justify-content: space-between;
  gap: 20px; /* Espaço entre os itens */
  margin-top: 30px;
}

/* Estilos para os itens de venda */
.sales-item {
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  flex: 1;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Estilos para os títulos dos itens de venda */
.sales-item h3 {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
}

/* Estilos para os valores dos itens de venda */
.sales-item p {
  font-size: 1.5rem;
  color: #007bff; /* ou qualquer outra cor de destaque que você desejar */
}

/* Adicione aqui os estilos para os elementos específicos do dark mode */
.dark-mode .sales-item {
  background-color: #333;
  color: white;
  box-shadow: 0 2px 4px rgba(255, 255, 255, 0.1);
}
</style>
  