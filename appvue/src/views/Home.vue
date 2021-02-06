<template>
 <div class="home">
     <div class="container">
       <div class="h5 mt-4">الصفحة الرئسية</div>
        <div class="row">
          <div class='col-md-6'>
             <CardsItems v-for="post in posts" :key="post._id" :title="post.title" :postId="post._id" :body="post.body"/> 
          </div>
        </div>
     </div> 
 </div>
</template>

<script>
 
// @ is an alias to /src 
 import CardsItems from '@/components/Posts.vue';
 import axios from 'axios';
export default {
  name: 'Home',
  components: {
    CardsItems
  },
  data () {
     return {
       posts: [],
     }
  },
  mounted () {
    axios.get('http://localhost:3000/posts')
    .then(res => this.posts = res.data)
    .catch(error => console.log(error));
  }
}
</script>
 
<style>
    
 </style>