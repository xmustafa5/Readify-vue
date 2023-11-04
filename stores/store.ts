// import { defineStore } from 'pinia';

// // Define an interface for your store state
// interface Book {
//   id: number;
//   title: string;
//   description: string;
//   type: string;
//   isFav: boolean;
// }

// export const useGet = defineStore({
//   id: 'fetch',
//   state: () => ({
//     mustafa: 'mustafa' as string,
//     loading: false as boolean,
//     books: [] ,
//   }),
//   actions: {
//     async getTasks(){
//       const typedData = ref<Book[]>()
//         const {data:books} = await useFetch<Book>('http://localhost:3002/books')
//         this.books= books;
      
 
//   },
// }});

import { defineStore } from 'pinia';

export const useDataStore = defineStore('data', {
  state: () => ({
    data: [], // Initial data
  }),

  getters: {
    // Add any getters if needed
  },

  actions: {
    // Add actions to fetch and update the data
    async fetchData() {
      try {
        const response = await fetch('http://localhost:3002/books'); // Replace with your API endpoint
        const data = await response.json();
        this.data = data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
  },
});
