<template>
  <div id="tableContainer">
    <h3 style="{color:black}">Posts</h3>
  <b-table 
    :data="posts" 
    :columns="postCols"
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
  props: {
    id: String
  },
 
  data: function (){
    return {
      posts: [],
      postCols: [
       {
           field: 'id',
           label: 'ID',
           width: '40',
           numeric: true
       },
       {
           field: 'title',
           label: 'Tile',
       },
       {
           field: 'body',
           label: 'Body',
       }
     ]
    }
  }, 
  mounted: function(){
     axios.get('https://jsonplaceholder.typeicode.com/posts/1')
     .then(response => {
       this.posts = response.data;   
     });
  }
};
</script>