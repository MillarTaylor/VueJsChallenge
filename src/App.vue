
<template>
  <div class="wrapper" id="app">
    <b-navbar class="is-dark"
      :fixed-top= true
    >
      <template slot="brand">
       <b-navbar-item tag="router-link" :to="{ path: '/' }">
         <img
          src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
         >
       </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item class="is-dark" href="#">
          Home
        </b-navbar-item>
      </template>      
    </b-navbar>
    
  <component :is="component" v-bind="getPosts"></component>
  <footer class="footer"></footer>
   
  </div>
  
</template>

<script>
  import Users from './components/Users.vue'
  import Posts from './components/Posts.vue'

export default {
  
  name: "app",
  components: {
   'users': Users,
   'posts':Posts
  },
  data(){
    return {
      component: 'users'
    }
  },
  methods:{
    getPosts: function(){
      if(this.component==='users'){
        this.component = 'posts'  
      } 
    }
  }
  
};
</script>

