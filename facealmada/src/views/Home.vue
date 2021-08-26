<template>
  <div>
    <header>FaceAlmada</header>
    <router-link class="links" to="/criar-post">Criar post</router-link>
    
  </div>
</template>

<script>
export default {
  name: 'Home',
 
}
</script>

<style scoped>
header{
  height: 50px;
  background-color: #771db3;
  text-align: center;
  color: #fff;
  font-size: 1.4rem;
  padding: 1%;
}

.links{
  text-decoration: none;
  font-size: 1.2rem;
}

.links:hover{
  color: #5d1fcf;
}

</style>