<template src="./password.html"> </template>

<script>
import { mapState, mapGetters } from 'vuex'
import api from "../../../api"
export default {
  name: 'password',
  data () {
    return {
      data: {
        name: '',
        email: ''
      },
      formData: {
        code: ''
      },
      formRules: {
        code: [
          { required: true, message: '必填项', trigger: ['change', 'blur'] },
        ]
      }
    }
  },
  computed: {
    formValid() {
      return this.formData.code;
    }
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
    //api.home.test({name: 'Tim', age: 18}).then(res => {
    // })
  },
  methods: {
    onSearch() {

    }
  }
}
</script>
