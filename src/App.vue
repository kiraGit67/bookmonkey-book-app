<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/books/add">Add New Book</router-link></li>
    </ul>
  </nav>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin: 3rem 0.5rem;
}

nav > ul {
  list-style-type: none;
  padding-left: 0;
  display: flex;
  gap: 2rem;
}

nav > ul > li > a {
  text-decoration: none;
  font-size: 1.25rem;
  color: #2c3e50;
}

nav > ul > li > a:hover,
nav > ul > li > a.router-link-active.router-link-exact-active {
  color: #42b983;
}

@media screen and (min-width: 768px) {
  #app {
    margin: 3rem 1.25rem;
  }
}
</style>
