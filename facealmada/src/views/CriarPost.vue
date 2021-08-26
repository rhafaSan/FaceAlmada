<template>
<div>

<header>FaceAlmada</header>
  <main>
      <div>
        <form action="" @submit="submeter" >
          <p>O que você está pensando? </p>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <button type="submit">Enviar</button>
        </form>    
      </div>
      <button @click="this.$router.go(-1)">Voltar</button>
  </main>
</div>
</template>

<script>
export default {
  name: 'CriarPost',
   data(){
    return{
      corpo: '',
      dataHora: new Date(),
    }
  },
  methods: {
    submeter(e){
      e.preventDefault();
      console.log(this.dataHora);
    }
  }
}
</script>

<style scoped>

</style>