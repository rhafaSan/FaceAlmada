<template>
  <div>
    <header>FaceAlmada</header>
    <main>
      <aside>
        <router-link class="links" to="/criar-post">Criar post</router-link>
      </aside>
      <section>
        <div v-for="post of posts" :key="post.id" @click="selectPost(post.id)" >
          <div class="card-post">
            <span>{{post.text}}</span>
          </div>
              <div v-for="comment of comentarios" :key="comment.id">
              
                  <span>{{ comment.text }}</span>
                
            </div>
        </div>
      </section>
    </main>
    
  </div>
</template>

<script>
import api from '@/services/api';

export default {
  name: 'Home',
  data(){
    return{
      posts: [],
      comentarios: [],
      comentario: '',
      postId: ''
    }
  },
  methods: {
    async getAll(){
      const res = await api.get('/posts/');
      this.posts = res.data;
    },
    async getComentarios(){
      const res = await api.get('/comments');
      this.comentarios = res.data;
      console.log(res.data)
    },
    selectPost(id){
      this.$router.push(`/post/${id}`)
    }
  },
  mounted(){
    this.getAll();
    this.getComentarios()
  }
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