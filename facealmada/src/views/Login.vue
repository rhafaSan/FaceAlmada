<template>
  <div>
      <main>
          <form action="" @submit="goPosts">
            <label for="">Usuário:</label>
            <input type="text" v-model="this.username">

            <label for="">Senha: </label>
            <input type="password" v-model="this.password">
          <button type="submit">Entrar</button>
          </form>
      </main>
  </div>
</template>

<script>
import api from '@/services/api';
export default {
    name: 'Login',
    data(){
        return{
            username: '',
            password: '',
        }
    },
    methods: {
        goPosts(e){
            e.preventDefault();
            this.login();
            console.log(this.username + this.password);
        },

        async login(){
            console.log('ok')
            const data = {
                username: this.username,
                password: this.password.toString(),
            }
            try{
                const res = await api.post('/login/', data);
                console.log(res.data);
                localStorage.setItem('logged', res.data.id);
                this.$router.push('/index');
            }catch(res){
                alert(res.response.data.error);
            }

        }
    }
}
</script>

<style>

</style>