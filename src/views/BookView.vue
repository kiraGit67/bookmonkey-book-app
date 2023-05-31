<template>
  <h1>Book View</h1>
  <p>{{ this.$route.params }}</p>
  <pre>
      {{ book }}
  </pre>
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
