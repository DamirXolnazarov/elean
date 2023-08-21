<template>
    <div class="register">
        <form action="./HomeView.vue" method="get"></form>
        <input required v-model="name" type="text" placeholder="name">
        <input required v-model="password" type="text" placeholder="password">
        <input type="submit" value="Register" @click="reg()">
    </div>
</template>
<script>
import store from '../store/index.js';
export default {
    name: 'EleanRegister',

    data() {
        return {
            users: store.state.users,
            name: '',
            password: '',
            user: {},
        };
    },

    beforeUpdate() {
        window.localStorage.isSigned = JSON.stringify(import.meta.env.VITE_LOGIN)
    },
    methods: {
        }
    }    
</script>

<style scoped>
.header[data-v-f71a5ffa]{
   position: absolute;
   top: -100%;
}
</style>