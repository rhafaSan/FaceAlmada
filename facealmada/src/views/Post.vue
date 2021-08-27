<template>
  <div>
    <header>FaceAlmada</header>
    <main>
       <section>
        <div >
          <div class="card-post">
            <span>{{post.text}}</span>
          </div>
          <div>
              <span>Comentar: </span>
              <input type="text" v-model="this.text">
              <button @click="verComentario">Comentar</button>
            </div>
        </div>
        <button @click="this.$router.go(-1)">Voltar</button>
      </section>
    </main>
  </div>
</template>

<script>
import api from '@/services/api';
export default {
  name: 'Post',
  data(){
    return{
      id: this.$route.params.id,
      text: '',
      post: []
    }
  },
  methods: {
    async verPost(){
      const res = await api.get(`/posts/${this.id}`);
      console.log(res.data);
      this.post = res.data
    },
    verComentario(){
      console.log(this.text);
      this.comentar()
    },
    async comentar(){
      const data ={
        text: this.text,
        post_id: this.id
      }
      try{
        const res = await api.post('/comments/', data);
        console.log(res.data);
      }catch(e){
        alert(e.response.data.error)
      }

    }
  },
  mounted(){
    this.verPost()
  }
}
</script>

<style>

</style>