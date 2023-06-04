<template>
  <div class="header-row">
    <h1>{{ h1title }}</h1>

    <div class="filter-actions">
      <div class="filters">
        <select
          name="filter-options"
          id="filter-options"
          v-model="filterStatus"
          @change="getBooks"
        >
          <option value="">All Books</option>
          <option value="?_page=2&_limit=10">Page 2 limit 10</option>
          <option value="?_sort=title&_order=desc">Sort down by title</option>
          <option value="?_sort=title&_order=asc">Sort up by title</option>
          <option value="?_start=25&_end=50">From 25 to 50</option>
          <option value="?numPages_gte=200&numPages_lte=400">
            Between 200 and 400 Pages
          </option>
        </select>
        <div class="radio-filter">
          <div class="radio-wrapper">
            <input
              type="radio"
              name="max-pages"
              id="max-pages"
              value="250"
              v-model="maxPages"
              @change="getSearchedBooks('pages')"
            />
            <label for="250">250 pages</label>
          </div>
          <div class="radio-wrapper">
            <input
              type="radio"
              name="max-pages"
              id="max-pages"
              value="500"
              v-model="maxPages"
              @change="getSearchedBooks('pages')"
            />
            <label for="500">500 pages</label>
          </div>
          <div class="radio-wrapper">
            <input
              type="radio"
              name="max-pages"
              id="max-pages"
              value="750"
              v-model="maxPages"
              @change="getSearchedBooks('pages')"
            />
            <label for="750">750 pages</label>
          </div>
        </div>
      </div>
      <div class="search-fields">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search for"
          v-model="searchTerm"
          @input="getSearchedBooks()"
        />
        <input
          type="text"
          name="author-search"
          id="author-search"
          placeholder="Search for Author"
          v-model="authorSearch"
          @input="getSearchedBooks('author')"
        />
        <input
          type="text"
          name="publisher-search"
          id="publisher-search"
          placeholder="Search for Publisher"
          v-model="publisherSearch"
          @input="getSearchedBooks('publisher')"
        />
      </div>
    </div>
  </div>
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
      filterStatus: "",
      searchTerm: "",
      authorSearch: "",
      publisherSearch: "",
      maxPrice: "",
      maxPages: 0,
    };
  },
  created() {
    this.getBooks();
  },
  methods: {
    getBooks() {
      fetch("http://localhost:4730/books" + this.filterStatus)
        .then((res) => res.json())
        .then((books) => (this.books = books));
    },
    getSearchedBooks(param) {
      if (param === "author") {
        this.filterStatus = "?author_like=" + this.authorSearch;
      } else if (param === "publisher") {
        this.filterStatus = "?publisher_like=" + this.publisherSearch;
      } else if (param === "price") {
        this.filterStatus = "?price_like=" + this.maxPrice;
      } else if (param === "pages") {
        this.filterStatus = "?numPages_lte=" + this.maxPages;
      } else {
        this.filterStatus = "?q=" + this.searchTerm;
      }
      this.getBooks();
    },
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

.search-fields,
.filters {
  display: flex;
  gap: 0.5rem;
  _flex-wrap: wrap;
  flex-shrink: 1;
}

.filters {
  justify-content: space-between;
}

.filters + .search-fields {
  margin-top: 0.75rem;
}

.radio-filter {
  display: flex;
  gap: 0.5rem;
}

input,
select {
  padding: 0.25rem 0.15rem;
  font-size: 1.1rem;
  border: 1px solid lightgrey;
  border-radius: 0;
}

input:focus-within,
select:focus-within {
  outline: 2px solid #42b983;
}

@media screen and (max-width: 767px) {
  .filters,
  .search-fields {
    flex-direction: column;
  }
}

@media screen and (min-width: 768px) {
  li {
    grid-template-columns: 20% 80%;
    grid-column-gap: 0.5rem;
  }

  .search-fields {
    justify-content: space-between;
  }

  .search-fields > input {
    width: 100%;
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

  .header-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .filter-actions {
    flex-shrink: 0;
  }
}
</style>
