<template>
  <h1>Home View</h1>
  <ul>
    <li v-for="book in books" :key="book.id">
      {{ book.title }}
      <router-link :to="{ name: 'details', params: { isbn: book.isbn } }"
        >View</router-link
      >
    </li>
  </ul>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      books: [],
    };
  },
  created() {
    fetch("http://localhost:4730/books")
      .then((res) => res.json())
      .then((books) => (this.books = books));
  },
};
</script>
