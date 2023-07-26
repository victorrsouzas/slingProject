<template>
  <footer class="footer">
    <div class="container">
      <p>&copy; {{ currentYear }} Seu Site. Todos os direitos reservados.</p>
    </div>
  </footer>
</template>
  
  <script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>
  
  <style>
.footer {
  background-color: #f9f9f9;
  padding: 20px 0;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
  