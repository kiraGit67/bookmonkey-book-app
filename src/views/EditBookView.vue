<template>
  <h1>Edit Book</h1>
  <form @submit.prevent="updateBook">
    <div class="form-row">
      <label for="title-input">Title</label>
      <input
        type="text"
        name="title-input"
        id="title-input"
        v-model="book.title"
      />
    </div>
    <div class="form-row">
      <label for="subtitle-input">Subtitle</label>
      <input
        type="text"
        name="subtitle-input"
        id="subtitle-input"
        v-model="book.subtitle"
      />
    </div>
    <div class="form-row">
      <label for="isbn-input">ISBN</label>
      <input
        type="text"
        name="isbn-input"
        id="isbn-input"
        v-model="book.isbn"
      />
    </div>
    <div class="form-row">
      <label for="author-input">Author</label>
      <input
        type="text"
        name="author-input"
        id="author-input"
        v-model="book.author"
      />
    </div>
    <div class="form-row">
      <label for="publisher-input">Publisher</label>
      <input
        type="text"
        name="publisher-input"
        id="publisher-input"
        v-model="book.publisher"
      />
    </div>
    <div class="form-row">
      <label for="price-input">Price</label>
      <input
        type="text"
        name="price-input"
        id="price-input"
        v-model="book.price"
      />
    </div>
    <div class="form-row">
      <label for="pages-input">Pages</label>
      <input
        type="number"
        name="pages-input"
        id="pages-input"
        v-model="book.numPages"
      />
    </div>
    <div class="form-row">
      <label for="pages-input">Cover</label>
      <input
        type="text"
        name="cover-input"
        id="cover-input"
        v-model="book.cover"
      />
    </div>
    <div class="form-row">
      <label for="abstract-input">Abstract</label>
      <textarea
        name="abstract-input"
        id="abstract-input"
        v-model="book.abstract"
      />
    </div>
    <div class="form-row">
      <label for="update-book"></label>
      <button>{{ buttonText }}</button>
    </div>
  </form>
  <!--
  <p>{{ this.$route.params }}</p>
  <pre>
      {{ book }}
  </pre>
  
  <book-form
    :titleInput="book.title"
    :subtitleInput="book.subtitle"
    :isbnInput="book.isbn"
    :authorInput="book.author"
    :publisherInput="book.publisher"
    :priceInput="book.price"
    :pagesInput="book.numPages"
    :coverInput="book.cover"
    :abstractInput="book.abstract"
    :buttonText="buttonText"
    @updateBookData="updateBook"
  />
  -->
</template>

<script>
//import BookForm from "@/components/BookForm.vue";

export default {
  name: "EditBookView",
  data() {
    return {
      book: {},
      buttonText: "Update Book",
    };
  },
  components: {
    //BookForm,
  },
  created() {
    fetch("http://localhost:4730/books/" + this.$route.params.id)
      .then((res) => res.json())
      .then((book) => (this.book = book));
  },
  methods: {
    updateBook() {
      const updatedBook = {
        title: this.book.title,
        subtitle: this.book.subtitle,
        isbn: this.book.isbn,
        abstract: this.book.abstract,
        numPages: this.book.numPages,
        author: this.book.author,
        publisher: this.book.publisher,
        price: this.book.price,
        cover: this.book.cover,
      };
      console.log(updatedBook);
    },
  },
};
</script>

<style scoped>
.form-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

label {
  color: #42b983;
  font-weight: 600;
  font-size: 1.25rem;
}

input,
textarea {
  padding: 0.5rem 0.75rem;
  border: 1px solid lightgrey;
  border-radius: 0;
  font-size: 1.1rem;
}

textarea {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  min-height: 10rem;
}

@media screen and (min-width: 768px) {
  .form-row {
    grid-template-columns: 20% 80%;
  }
}
</style>
