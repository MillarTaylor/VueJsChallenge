<template slot-scope="props">
  <div id="tableContainer">
   <!-- <h3 style="{color:black}">Users</h3>-->
    
  <b-table class="b-table"
    :items="users" 
    :fields="userCols"
    :bordered="true"
    default-sort="user.name"
    :striped="true"
    :hover="true"
    @row-clicked="rowClicked"></b-table>
    
  </div>
</template>

<script>
  import axios from 'axios';
  import '../styles/myStyles.scss'
  

export default {
  
  name: "app",
  components: {
  },
  methods: {
  
    getPosts(item){        
      this.$parent.getPosts(item);
    },
    rowClicked(item) {
  
    this.getPosts(item.id);
  }
  }, 
  data: function (){
    return {
      users: [],
      userCols: [
        {
          key:'id',
          sortable: true
         },
         {
           key:'name',
           sortable: true
         },
         {
           key:'email',
           sortable: true
         },
         {
           key:'phone', 
           sortable: true
         }, 
      {key:'website',
      sortable: true
      }
      ]
      
    }
  }, 
  mounted: function(){
    axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(response  => {
      this.users = response.data;
    });
  }
};
</script>