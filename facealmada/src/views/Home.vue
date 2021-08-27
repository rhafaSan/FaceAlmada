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
              <div v-for="comment of comentarios" :key="comment.id">
                <div v-if="comment.post_id === post.id">
                  <p>{{ comment.text }}</p>
                </div>
            </div>
            <p>{{ post.date_post }}</p>
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

section{
  display: flex;
  flex-direction: column;
  margin-right: auto;
  margin-left: auto;
  width: 80%;
}

.card-post{
  border: 1px solid #000;
}

.card-post span{
  background-color: #9998;
}

</style>