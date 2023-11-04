import {defineStore} from "pinia"
// Define an interface for your store state
interface Book {
    id: number;
    title: string;
    description: string;
    type: string;
    isFav: boolean;
  }
  
  export const useGet = defineStore({
    id: 'fetch',
    state: () => ({
      mustafa: "mustafa" as string,
      loading: false as boolean,
      books: [] as Book[]
    }),
    actions: {
      async getTasks() {
        this.loading = true;
        const res = await fetch('http://localhost:3001/books')
        const data = await res.json();
        console.log(data);
        
        this.books = data;
        this.loading = false;
      },
    },
  });
  