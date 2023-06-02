<template>
  <h1>{{ book.title }}</h1>
  <div class="book-container">
    <div class="book-container--book-image">
      <img :src="book.cover" :alt="book.title" :title="book.title" />
    </div>
    <div class="book-container--book-details">
      <h2>{{ book.subtitle }}</h2>
      <p>{{ book.abstract }}</p>
      <ul class="book-details--list">
        <li>
          <span><strong>Author</strong></span
          ><span>{{ book.author }}</span>
        </li>
        <li>
          <span><strong>Publisher</strong></span
          ><span>{{ book.publisher }}</span>
        </li>
        <li>
          <span><strong>Pages</strong></span
          ><span>{{ book.numPages }}</span>
        </li>
        <li>
          <span><strong>Price</strong></span
          ><span>{{ book.price }}</span>
        </li>
      </ul>
    </div>
  </div>
  <!-- 
  <p>{{ this.$route.params }}</p>
  <pre>
      {{ book }}
  </pre>
  -->
</template>

<script>
export default {
  name: "BookView",
  data() {
    return {
      book: {},
    };
  },
  created() {
    fetch("http://localhost:4730/books/" + this.$route.params.isbn)
      .then((res) => res.json())
      .then((book) => (this.book = book));
  },
};
</script>

<style scoped>
ul.book-details--list {
  list-style-type: none;
  padding-left: 0;
}

.book-details--list > li {
  display: grid;
  grid-template-columns: 1fr 3fr;
}

.book-details--list > li strong,
h1,
h2 {
  color: #42b983;
}

h1,
h2 {
  font-weight: 500;
}

@media screen and (min-width: 768px) {
  .book-container {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 0.5rem;
    align-items: center;
  }
}
</style>
