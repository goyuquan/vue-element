<template src="./app.html"> </template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'app',
  data () {
    return {
      isCollapse: true
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
    onLogout() {
      this.$store.dispatch('logOut')
    },
    handleOpen(key, keyPath) {
        console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="scss" src="./app.scss"> </style>
