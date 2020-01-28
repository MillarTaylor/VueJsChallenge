<template>
  <div class="wrapper" id="app">
    <div>
    <b-navbar type="bg-dark" class="bg-dark fixed-top">
        <b-navbar-brand href="#">NavBar</b-navbar-brand>
        <b-nav-item class="is-dark" href="#">
          Home
        </b-nav-item>
    </b-navbar>
    </div>
    <div class="card">
      <div id="componentCard" class="$style.card-header">
        <b-tabs content-class="mt-3" justified>
          <b-tab title="Users" active> </b-tab>
        </b-tabs>
      </div>
      <div class="card-body">
        <keep-alive>
          <component :is="component" :userId="userId"></component>
        </keep-alive>
      </div>
   </div>
    <footer class="footer"></footer>
  </div>
</template>

<script>
import Users from "./components/Users.vue";
import Posts from "./components/Posts.vue";
//import axios from 'axios';
import "./styles/myStyles.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

library.add(faUserSecret);

export default {
  
  name: "app",
  components: {
    users: Users,
    posts: Posts
  },
  data() {
    return {
      component: "users",
      userId: "",
    };
  },
  methods: {
    getPosts: function(item) { 
      if (this.component === "users") {
       
        this.userId=item;
         
        this.component = this.posts;
        
        
      }
    },
   
  }
};
</script>
