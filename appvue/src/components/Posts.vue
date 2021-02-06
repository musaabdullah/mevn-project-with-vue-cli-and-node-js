<template>
  <div class="card m-3">
       <div class="card-body">
           <h3>{{ title }}</h3>
           <div class="card-text">{{ body }}</div>
       </div>
       <div class="card-footer">
           <!-- <button class="btn btn-primary">أقراء المزيد</button> -->
           <router-link :to="{ name:'PostDetail' , params: { id: postId }}">
               أقراء المزيد
           </router-link>
       </div>
  </div>
</template>

<script>
  export default {
      props: ['title', 'body', 'postId'],
      name: 'CardsItems',
  }
</script>

<style scoped>
 a {
     text-decoration: none;
     color: white;
     background-color: rgb(15, 22, 5);
     padding: 6px;
     border-radius: 6px;
     margin:0px 3px;
 }
</style>