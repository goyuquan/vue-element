<template src="./nest.html"> </template>

<script>
import { mapState, mapGetters } from 'vuex'
import api from "../../../api"
export default {
    name: 'nest',
    data () {
        return {
            msg: 'Welcome to Your Vue.js nest'
        }
    },
    computed: {
        otherComputed() {

        },
        ...mapState({
            listName0: state => state.listName,
            word: state => state.word,
        }),
        ...mapGetters([
            // 'listName',
            // 'showUser',
        ])
    },
    mounted() {
      api.home.test({name: 'Tim', age: 18}).then(res => {
      })
    },
    methods: {
        addone() {
            this.$store.commit('increment')
        },
        changeName() {
            this.$store.commit('chageName', "Green")
        }
    }
}
</script>

<style lang="scss" scoped src="./nest.scss"> </style>
