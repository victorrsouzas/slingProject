<template>
  <header>
    <nuxt-link to="/" class="logo">slingProject</nuxt-link>

    <nav>
      <ul>
        <li>
          <nuxt-link to="/">Home</nuxt-link>
          <nuxt-link to="dashboard">Dashboard</nuxt-link>
          <nuxt-link to="about">About</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {

}
</script>
<style>

.logo,
li a {
  padding: 1em 2em;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: bold;
  color: black;
  font-size: .9em;
}

nav {
  justify-self: right;
}

ul {
  list-style-type: none;
}

li {
  display: inline;
}

li a {
  padding: 1em 2em;
  background: rgba(0, 0, 0, 0.1);
}
</style>