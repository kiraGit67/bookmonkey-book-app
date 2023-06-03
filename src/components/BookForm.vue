<template>
  <form @submit.prevent="updateBookData">
    <div class="form-row">
      <label for="title-input">Title</label>
      <input
        :value="titleInput"
        type="text"
        name="title-input"
        id="title-input"
      />
    </div>
    <div class="form-row">
      <label for="subtitle-input">Subtitle</label>
      <input
        :value="subtitleInput"
        type="text"
        name="subtitle-input"
        id="subtitle-input"
      />
    </div>
    <div class="form-row">
      <label for="isbn-input">ISBN</label>
      <input :value="isbnInput" type="text" name="isbn-input" id="isbn-input" />
    </div>
    <div class="form-row">
      <label for="author-input">Author</label>
      <input
        :value="authorInput"
        type="text"
        name="author-input"
        id="author-input"
      />
    </div>
    <div class="form-row">
      <label for="publisher-input">Publisher</label>
      <input
        :value="publisherInput"
        type="text"
        name="publisher-input"
        id="publisher-input"
      />
    </div>
    <div class="form-row">
      <label for="price-input">Price</label>
      <input
        :value="priceInput"
        type="text"
        name="price-input"
        id="price-input"
      />
    </div>
    <div class="form-row">
      <label for="pages-input">Pages</label>
      <input
        :value="pagesInput"
        type="number"
        name="pages-input"
        id="pages-input"
      />
    </div>
    <div class="form-row">
      <label for="pages-input">Cover</label>
      <input
        :value="coverInput"
        type="text"
        name="cover-input"
        id="cover-input"
      />
    </div>
    <div class="form-row">
      <label for="abstract-input">Abstract</label>
      <textarea
        :value="abstractInput"
        name="abstract-input"
        id="abstract-input"
      />
    </div>
    <div class="form-row">
      <label for="update-book"></label>
      <button>{{ buttonText }}</button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    titleInput: {
      type: String,
      required: true,
    },
    subtitleInput: {
      type: String,
      required: false,
    },
    isbnInput: {
      type: String,
      required: true,
    },
    authorInput: {
      type: String,
      required: false,
    },
    publisherInput: {
      type: String,
      required: false,
    },
    priceInput: {
      type: String,
      required: true,
    },
    pagesInput: {
      type: Number,
      required: false,
    },
    coverInput: {
      type: String,
      required: false,
    },
    abstractInput: {
      type: String,
      required: false,
    },
    buttonText: String,
  },
  methods: {
    updateBookData() {
      this.$emit("updateBookData");
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
