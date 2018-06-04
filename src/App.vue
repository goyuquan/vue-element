<template src="./app.html"> </template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import api from "./api"
export default {
  name: 'app',
  data () {
    return {
      isCollapse: false,
      menu: {
        suer: '/user',
      },
    }
  },
  computed: {
    authStatusClass() {
      return this.authStatus ? 'flex' : 'none'
    },
    ...mapGetters([
      'authStatus'
    ]),
    ...mapState({
      token: state => state.auth.token,
      breadcrumb: state => state.breadcrumb,
    }),
  },
  mounted() {
    this.getSyscode().then( res => {
      document.body.removeChild(document.getElementById('loader'));
    })
  },
  methods: {
    ...mapActions([ 'getSyscode' ]),
    onLogout() {
      api.auth.signout().then( res => {
          this.$store.commit('logOut')
          this.$router.push('/login')
      })
    },
  }
}
</script>

<style lang="scss" src="./app.scss"> </style>
