<template src="./user.html"> </template>

<script>
import { mapState, mapGetters } from 'vuex'
import api from "../../api"
import validate from "../../common/validate"

export default {
  name: 'user',
  data () {
    return {
      formData: {
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
        }
      ],
      del: [
        {name: 'abc', value: 'abc'},
        {name: 'abcd', value: 'abcd'},
        {name: 'abcde', value: 'abcde'},
        {name: 'abcdef', value: 'abcdef'},
      ],
      dialog: {
        password: {
          visible: false,
          formData: {
            code: ''
          },
          formRules: {
            code: validate.required,
          },
        }
      }
    }
  },
  computed: {
    formValid() {
      return this.dialog.password.formData.code
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
  beforeRouteEnter (to, from, next) {
    console.log('_____________________',to.query.id);
    next(vm => {
      vm.formData = {
        name: 'dddddddddddd'
      }
    })
  },
  mounted() {
    // //api.home.test({name: 'Tim', age: 18}).then(res => {
    // })
  },
  methods: {
    addone() {
      this.$store.commit('increment')
    },
    changeName() {
      this.$store.commit('chageName', "Green")
    },
    onCreate() {
      this.$router.push('user/create')
    },
    onSearch() {

    },
    onResetPassword(id) {
      this.dialog.password.visible = true
    },
    querySearch(queryString, cb) {
      if (queryString) {
        let temp = this.del.filter(v => v.name.indexOf(queryString) != -1)
        cb(temp)
      }
    }
  }
}
</script>
