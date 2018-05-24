<template>
  <div>
    <img src="../../assets/logo.png">
    <ul>
      <li v-for="(li, index) of list" :key="index">
        <router-link :to="li.url">{{li.name}}</router-link>
      </li>
    </ul>
    <h1>{{ msg }}</h1>
    <h2>Essential Links~~~~~~~dashbard~~~~~~</h2>
  </div>
</template>

<script>
export default {
  name: 'dashboard',
  data () {
    return {
      list: [
        // { name: '/', url: 'dashbard' },
        { name: 'setting', url: 'setting' },
        { name: 'nest', url: 'nest' },
        { name: 'nestDetail', url: 'nest/detail' },
      ],
      msg: 'Welcome to Your Vue.js dashbard'
    }
  }
}
</script>

<style lang="scss">  </style>
