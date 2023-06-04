<template>
  <h1>Add New Book</h1>
  <form
    action="{ name: 'details', params: { isbn: book.isbn } }"
    @submit.prevent="addBook"
  >
    <div class="form-row">
      <label for="title-input">Title</label>
      <input
        type="text"
        name="title-input"
        id="title-input"
        v-model="titleInput"
      />
    </div>
    <div class="form-row">
      <label for="subtitle-input">Subtitle</label>
      <input
        type="text"
        name="subtitle-input"
        id="subtitle-input"
        v-model="subtitleInput"
      />
    </div>
    <div class="form-row">
      <label for="isbn-input">ISBN</label>
      <input
        type="text"
        name="isbn-input"
        id="isbn-input"
        v-model="isbnInput"
      />
    </div>
    <div class="form-row">
      <label for="author-input">Author</label>
      <input
        type="text"
        name="author-input"
        id="author-input"
        v-model="authorInput"
      />
    </div>
    <div class="form-row">
      <label for="publisher-input">Publisher</label>
      <input
        type="text"
        name="publisher-input"
        id="publisher-input"
        v-model="publisherInput"
      />
    </div>
    <div class="form-row">
      <label for="price-input">Price</label>
      <input
        type="text"
        name="price-input"
        id="price-input"
        v-model="priceInput"
      />
    </div>
    <div class="form-row">
      <label for="pages-input">Pages</label>
      <input
        type="number"
        name="pages-input"
        id="pages-input"
        v-model="pagesInput"
      />
    </div>
    <div class="form-row">
      <label for="cover-input">Cover</label>
      <input
        type="text"
        name="cover-input"
        id="cover-input"
        v-model="coverInput"
      />
    </div>
    <div class="form-row">
      <label for="abstract-input">Abstract</label>
      <textarea
        name="abstract-input"
        id="abstract-input"
        v-model="abstractInput"
      />
    </div>
    <div class="form-row">
      <label for="update-book"></label>
      <button>{{ buttonText }}</button>
    </div>
    <p class="success-message">{{ successMessage }}</p>
    <p class="error-message">{{ errorMessage }}</p>
  </form>
</template>

<script>
export default {
  name: "AddBookView",
  data() {
    return {
      h1title: "BookMonkey Book Store",
      books: [],
      titleInput: "",
      subtitleInput: "",
      isbnInput: "",
      authorInput: "",
      publisherInput: "",
      priceInput: "",
      pagesInput: 0,
      coverInput: "",
      abstractInput: "",
      buttonText: "Add New Book",
      successMessage: "",
      errorMessage: "",
      errors: {
        isbn: {
          msg: "An ISBN has to be given.",
          param: "isbn",
          location: "body",
        },
        title: {
          msg: "A Title has to be given.",
          param: "title",
          location: "body",
        },
        price: {
          msg: "A Price has to be given.",
          param: "price",
          location: "body",
        },
      },
    };
  },
  created() {
    fetch("http://localhost:4730/books")
      .then((res) => res.json())
      .then((books) => (this.books = books));
  },
  methods: {
    addBook() {
      const newBook = {
        id: this.isbnInput,
        title: this.titleInput,
        subtitle: this.subtitleInput,
        isbn: this.isbnInput,
        author: this.authorInput,
        publisher: this.publisherInput,
        price: this.priceInput,
        numPages: this.pagesInput,
        cover: this.coverInput,
        abstract: this.abstractInput,
      };

      console.log(newBook);

      if (
        this.isbnInput !== "" &&
        this.titleInput !== "" &&
        this.priceInput !== ""
      ) {
        fetch("http://localhost:4730/books", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(newBook),
        })
          .then((res) => res.json())
          .then((newBookFromApi) => {
            console.log(newBookFromApi);
            this.books.push(newBookFromApi);
            this.successMessage = "New Book has been added successfully.";
            this.errorMessage = "";
          });
      } else {
        console.error("All required fields have to be filled in!");
        this.errorMessage = "All required fields have to be filled in!";
        if (this.isbnInput === "") {
          this.errorMessage += "\n" + this.errors.isbn.msg;
        }
        if (this.titleInput === "") {
          this.errorMessage += "\n" + this.errors.title.msg;
        }
        if (this.priceInput === "") {
          this.errorMessage += "\n" + this.errors.price.msg;
        }
        this.successMessage = "";
        return;
      }
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

.error-message,
.success-message {
  font-size: 1.15rem;
  font-weight: 600;
}

.error-message {
  color: darkred;
}

.success-message {
  color: green;
}

button {
  max-width: 200px;
  font-size: 1.25rem;
  background-color: transparent;
  color: #42b983;
  border: 2px solid #42b983;
  border-radius: 0;
  padding: 0.25rem 0.35rem;
  transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;
}

button:hover {
  background-color: #42b983;
  color: white;
}

@media screen and (min-width: 768px) {
  .form-row {
    grid-template-columns: 20% 80%;
  }
}
</style>
