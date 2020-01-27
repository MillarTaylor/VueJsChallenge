<template slot-scope="props">
  <div id="tableContainer">
    <h3 style="{color:black}">Users</h3>
    
  <b-table
    :head-variant='dark'
    :data="users" 
    :columns="userCols"
    :default-sort-direction="defaultSortDirection"
    :sort-icon="sortIcon"
    :sort-icon-size="sortIconSize"
    default-sort="user.name"
    :selected.sync= "selected"
    :bordered="false"
    :stripped="true"
    @click="this.getPosts(item)"></b-table>
    
  </div>
</template>

<script>
  import axios from 'axios';
  

export default {
  
  name: "app",
  components: {
  },
  methods: {
    getPosts(row){
        console.log("here")
        
      this.parent.getPosts(row);
    }
  },
 
  data: function (){
    return {
      users: [],
      selected: null,
      defaultSortDirection: 'asc',
      sortIcon: 'arrow-up',
      sortIconSize: 'is-small',
      userCols: [
       {
           field: 'id',
           label: 'ID',
           width: '40',
           numeric: true,
           sortable: true,
           searchable: true

       },
       {
           field: 'name',
           label: 'Name',
           sortable: true,
            searchable: true
       },
       {
           field: 'email',
           label: 'Email',
           sortable: true,
           searchable: true
       },
       {
           field: 'phone',
           label: 'Phone',
           centered: true,
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