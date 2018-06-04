<template src="./create.html"> </template>

<script>
import { mapState, mapGetters } from 'vuex';
import api from "../../../api"
import validate from "../../../common/validate"

export default {
  name: 'create',
  data () {
    return {
      formData: {
        log_name: '',
        name: '',
        sex: '',
        people_id: '',
        cellphone: '',
        email: '',
        company: '',
        department: '',
        position: '',
        system: '',
        role: '',
        group: '',
      },
      formOption: {
        company: [
          { name: 'A公司', value: 'a' },
          { name: 'B公司', value: 'b' },
        ],
        department: [
          { name: 'A部门', value: 'a' },
          { name: 'B部门', value: 'b' },
        ],
        position: [
          { name: 'A职位', value: 'a' },
          { name: 'B职位', value: 'b' },
        ],
        system: [
          { name: 'A系统', value: 'a' },
          { name: 'B系统', value: 'b' },
        ],
        role: [
          { name: 'A角色', value: 'a' },
          { name: 'B角色', value: 'b' },
          { name: 'c角色', value: 'c' },
          { name: 'd角色', value: 'd' },
        ],
        group: [
          { name: 'A组', value: 'a' },
          { name: 'A组', value: 'a' },
          { name: 'c组', value: 'c' },
          { name: 'd组', value: 'd' },
          { name: 'A组', value: 'a' },
          { name: 'A组', value: 'a' },
          { name: 'c组', value: 'c' },
          { name: 'd组', value: 'd' },
          { name: 'A组', value: 'a' },
          { name: 'A组', value: 'a' },
          { name: 'c组', value: 'c' },
          { name: 'd组', value: 'd' },
          { name: 'A组', value: 'a' },
          { name: 'A组', value: 'a' },
          { name: 'c组', value: 'c' },
          { name: 'd组', value: 'd' },
        ],
      },
      formRules: {
        log_name: validate.required,
        name: validate.required,
        sex: { required: true, message: '必选项', trigger: ['change', 'blur'] },
        people_id: [
          validate.required,
          { validator: validate.peopleId, trigger: ['change', 'blur'] }
        ],
        cellphone: [
          validate.required,
          { validator: validate.cellphone, trigger: ['change', 'blur'] }
        ],
        email: [
          validate.required,
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['change', 'blur'] }
        ],
        company: validate.required,
        department: validate.required,
        position: validate.required,
        system: validate.required,
        role: validate.required,
        group: validate.required,
      }
    }
  },
  computed: {
    formValid() {
      return this.formData.log_name && this.formData.name &&
              this.formData.sex && this.formData.people_id &&
              this.formData.cellphone && this.formData.email &&
              this.formData.company && this.formData.department &&
              this.formData.position && this.formData.system &&
              this.formData.role && this.formData.group ;
    }
  },
  mounted() {
    // //api.home.test({name: 'Tim', age: 18}).then(res => {
    // })
  },
  methods: {
    validate() {
      this.$refs[this.formName].validate((valid) => {
        if (valid) {
          return true
        } else {
          return false;
        }
      });
    },
    onSubmit() {
      if (this.validate()) {

      }
    }
  }
}
</script>
