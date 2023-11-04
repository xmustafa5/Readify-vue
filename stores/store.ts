import { defineStore } from "pinia";

// Define an interface for your store state
interface Book {
  id: number;
  title: string;
  description: string;
  type: string;
  isFav: boolean;
}

export const useGet = defineStore({
  id: "fetch",
  state: () => ({
    typeo: "s" as string,
    loading: false as boolean,
    books: [] as Book[],

  }),
  getters:{
    Filter(typeo: string) {
      if (this.typeo === 's') {
        return this.books
      } else {
        return this.books.filter((t) => t.type === this.typeo);
      }
    },
  
  },
  actions: {
    async getTasks() {
      try {
        this.loading = true;

        const { data: books } = await useFetch<Book>(
          "http://localhost:3002/books"
        );
        this.books = books;
      } catch (error) {
        console.log("error");
      } finally {
        this.loading = false;
      }
    },
    async getdata() {
      try {
        this.loading = true;
        const response = await fetch("http://localhost:3002/books");
        if (response.ok) {
          const books = await response.json();
          this.books = books;
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});


