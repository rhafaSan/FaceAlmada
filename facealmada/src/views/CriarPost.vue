<template>
<div>

<header>FaceAlmada</header>
  <main>
      <div>
        <form action="" @submit="criarPost" >
          <p>O que você está pensando? </p>
          <textarea cols="30" rows="10" v-model="this.text"></textarea>
          <button type="submit">Enviar</button>
        </form>    
      </div>
      <button @click="this.$router.go(-1)">Voltar</button>
  </main>
</div>
</template>

<script>
import api from '@/services/api';

export default {
  name: 'CriarPost',
   data(){
    return{
      text: '',
      userId: localStorage.getItem('logged')
    }
  },
  methods: {
    criarPost(e){
      e.preventDefault();
      this.submeter();
    },
    async submeter(){
      const data = {
        text: this.text,
        user_id: this.userId
      }
      try{
        const res = await api.post('/posts/', data);
        console.log(res.data);
      }catch(e){
        alert(e.error.response);
      }

    }
  }
}
</script>

<style scoped>

</style>