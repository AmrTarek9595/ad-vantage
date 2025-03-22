
import { createApp } from "vue";
// import { createRouter, createWebHistory,useRoute } from "vue-router";
import router from "./router/index";
import axios from 'axios';
// layout
import Layout from "./components/layouts/default.vue";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel';
// Define a global mixin to access subdomain
const baseurl = {
    data() {
      return {
       access_token:localStorage.getItem('access_token')
        
      };
    },
    computed: {
        baseUrl() {
          return "http://127.0.0.1:8000/api/"; 
        }
      }
  };
  const axiosInstance = 
  axios.create({ baseURL: `http://127.0.0.1:8000/api/`, headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}`, 'Content-Type': 'application/json' } });
  // Register the mixin globally
// Create the Vue app instance 
const app = createApp(Layout); 
// Register the mixin globally 
app.mixin(baseurl);
app.config.globalProperties.$axios = axiosInstance;
// Use the router 
app.use(router); 

// Mount the app to the DOM 
app.mount('#app');