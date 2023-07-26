<template>
  <section class="container">
    <h1>Test Nuxt</h1>
    <p class="subheading">Testando</p>
    <p>Texto asdasdasdasdasdasdasd</p>
  </section>
</template>

<script>

export default {
  head(){
    return{
        title: 'Home Nuxt',
        meta:[
            { name: 'description', content: 'This is my home description here'},
            { name: 'keywords', content: 'home nuxt, home info'},
        ]
    }
   }
}
</script>

<style>

</style>
