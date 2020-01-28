<template>
  <div id="tableContainer">
    <!--<h3 style="{color:black}">Posts</h3>-->
    <b-table
      :data="posts"
      :columns="postCols"
      :bordered="true"
      :stripped="true"
    />
  </div>
</template>

<script>
import axios from "axios";
import "../styles/myStyles.scss";

export default {
  name: "app",
  
  props:{
    userId: Number
  },
  data: function() {
    return {
      userPosts: this.retrievePosts(),
      postCols: [
        {
          field: "id",
        },
        {
          field: "title",
        },
        {
          field: "body",
         
        }
      ]
    };
  },
  mounted() {
       console.log("here");
      axios
        .get("https://jsonplaceholder.typeicode.com/posts/"+this.userId)
        .then(response => {
         this.userPosts= response.data;
          
        });
     }
  
};
</script>
