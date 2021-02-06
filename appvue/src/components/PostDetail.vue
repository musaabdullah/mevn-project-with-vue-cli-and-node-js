<template>
  <div class="container">
      <div class="row">
            <div class="col-md-6">
                <h3> {{ post.title }} </h3>
                <p> {{ post.body }}</p>
            </div>
      </div>
  </div>
</template>

<script>
  import axios from 'axios';
 export default {
     name: 'PostDetail',
     data () {
         return {
             id: this.$route.params.id,
             post: '',
         }
     },
     mounted () {
         axios.get('http://localhost:3000/posts/'+this.id)
         .then(res => {
             this.post = res.data;
             console.log(res.data);
         })
         .catch(error => console.log(error));
     }
 }
</script>