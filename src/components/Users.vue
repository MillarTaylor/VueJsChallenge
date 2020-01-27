<template>
  <div id="tableContainer">
    <h3 style="{color:black}">Users</h3>
  <b-table 
    :data="users" 
    :columns="userCols"
    :bordered="true"
    :stripped="true"></b-table>
  </div>
</template>

<script>
  import axios from 'axios';
  

export default {
  
  name: "app",
  components: {
  },
 
  data: function (){
    return {
      users: [],
      userCols: [
       {
           field: 'id',
           label: 'ID',
           width: '40',
           numeric: true
       },
       {
           field: 'name',
           label: 'Name',
       },
       {
           field: 'email',
           label: 'Email',
       },
       {
           field: 'phone',
           label: 'Phone',
           centered: true
       },
       {
           field: 'website',
           label: 'Website',
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