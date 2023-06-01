<template>
  <h1>{{ h1title }}</h1>
  <ul>
    <li v-for="book in books" :key="book.id">
      <div class="book-img">
        <img :src="book.cover" :alt="book.title" :title="book.title" />
      </div>
      <div class="book-details">
        <h3>{{ book.title }}</h3>
        <h4>{{ book.subtitle }}</h4>
        <h5>{{ book.author }}</h5>
        <router-link :to="{ name: 'details', params: { isbn: book.isbn } }"
          >Details</router-link
        >
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      h1title: "BookMonkey Book Store",
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

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0;
}

li {
  display: grid;
  grid-template-columns: 15% 85%;
  grid-column-gap: 0.75rem;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid #42b983;
}

img {
  max-width: 100%;
}

h3,
h4,
h5 {
  margin: 0.25rem 0;
}

router-link {
  text-decoration: none;
  color: #42b983;
}
</style>
