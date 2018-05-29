<template src="./app.html"> </template>

<script>
import { mapState, mapGetters } from 'vuex'
import api from "./api"
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
    ]),
    ...mapState({
      breadcrumb: state => state.breadcrumb,
    }),
  },
  mounted() {
    // api.common.firstLevelLst({id: 123}).then(
    //   res => {
    //     console.log(res);
    //   }
    // )
    setTimeout(() => {
      document.body.removeChild(document.getElementById('loader'));
    }, 0)
  },
  methods: {
    onLogout() {
      this.$store.dispatch('logOut')
    },
  }
}
</script>

<style lang="scss" src="./app.scss"> </style>
