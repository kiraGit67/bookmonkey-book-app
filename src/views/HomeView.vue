<template>
  <h1>{{ h1title }}</h1>
  <ul>
    <li v-for="book in books" :key="book.isbn">
      <div class="book-img">
        <img :src="book.cover" :alt="book.title" :title="book.title" />
      </div>
      <div class="book-details">
        <h3>{{ book.title }}</h3>
        <h4>{{ book.subtitle }}</h4>
        <h5>{{ book.author }}</h5>
        <div class="router-links">
          <router-link :to="{ name: 'details', params: { isbn: book.isbn } }"
            ><button>Details</button></router-link
          >
          <router-link :to="{ name: 'edit', params: { isbn: book.isbn } }"
            ><button>Edit</button></router-link
          >
        </div>
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
  grid-template-columns: 25% 75%;
  grid-column-gap: 0.25rem;
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

h1,
h2,
h3 {
  color: #42b983;
  font-weight: 500;
}

button {
  font-size: 0.95rem;
  font-weight: 500;
  color: #42b983;
  background-color: transparent;
  padding: 0.25rem;
  border: 1px solid #42b983;
  border-radius: 0;
  margin-top: 0.25rem;
  transition: background-color 0.5s steps(3), color 0.5s steps(3);
}

button:hover {
  background-color: #42b983;
  color: white;
}

.router-links {
  display: flex;
  gap: 1rem;
}

@media screen and (min-width: 768px) {
  li {
    grid-template-columns: 20% 80%;
    grid-column-gap: 0.5rem;
  }
}

@media screen and (min-width: 992px) {
  li {
    grid-template-columns: 15% 85%;
    grid-column-gap: 0.5rem;
  }
}

@media screen and (min-width: 1280px) {
  li {
    grid-template-columns: 10% 90%;
    grid-column-gap: 0.75rem;
  }
}
</style>
