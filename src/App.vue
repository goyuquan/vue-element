<template src="./app.html"> </template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'app',
  data () {
    return {
      isCollapse: false,
      menu: {
        suer: '/user'
      },
    }
  },
  computed: {
    ...mapGetters([
      'isAuthenticated'
    ])
  },
  mounted() {
    document.body.removeChild(document.getElementById('loader'));
  },
  methods: {
    onSelect(key, keyPath) {
        // console.log(key, keyPath);
        console.log(this.$route.path)
        // this.$router.push(key)
    },
    handleOpen(key, keyPath) {
        console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    onLogout() {
      this.$store.dispatch('logOut')
    },
  }
}
</script>

<style lang="scss" src="./app.scss"> </style>
