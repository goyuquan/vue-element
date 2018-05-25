<template src="./user.html"> </template>

<script>
import { mapState, mapGetters } from 'vuex'
import api from "../../api"
export default {
  name: 'user',
  data () {
    return {
      ruleForm: {
        log_name: '',
        status: [],
        name: '',
        department: '',
      },

      tableData: [
        {
          log_name: 'my name',
          name: 'name',
          status: 'name',
          department: 'department',
          unit: 'unit',
          cellphone: 'unit',
          update_time: 'unit',
          oprate: 'unit',
        },
        {
          log_name: 'my name',
          name: 'name',
          status: 'name',
          department: 'department',
          unit: 'unit',
          cellphone: 'unit',
          update_time: 'unit',
          oprate: 'unit',
        },
        {
          log_name: 'my name',
          name: 'name',
          status: 'name',
          department: 'department',
          unit: 'unit',
          cellphone: 'unit',
          update_time: 'unit',
          oprate: 'unit',
        },
        {
          log_name: 'my name',
          name: 'name',
          status: 'name',
          department: 'department',
          unit: 'unit',
          cellphone: 'unit',
          update_time: 'unit',
          oprate: 'unit',
        },
      ]
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
    },
    onCreate() {

    },
    onSubmit() {

    },
  }
}
</script>

<style lang="scss" scoped src="./user.scss"> </style>
