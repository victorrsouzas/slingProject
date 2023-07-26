<template>
    <section class="container">
      <h1>About Nuxt</h1>
      <p class="subheading">Testando o about</p>
      <p>Texto </p>
    </section>
  </template>
  
  <script>
  
  export default {
   head(){
    return{
        title: 'About Nuxt',
        meta:[
            { name: 'description', content: 'This is my about description here'},
            { name: 'keywords', content: 'about nuxt, nuxt info'},
        ]
    }
   }
  }
  </script>
  
  <style>
  
  </style>
  