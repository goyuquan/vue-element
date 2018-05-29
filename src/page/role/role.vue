<template src="./role.html"> </template>

<script>
import { mapState, mapGetters } from 'vuex'
import api from "../../api"
export default {
  name: 'role',
  data () {
    return {
      formData: {
        name: '',
        system: [],
      },
      tableData: [
        {
          name: 'my name',
          describe: 'describe',
          status: 'status',
          update_time: 'update_time',
          unit: 'unit',
        },
        {
          name: 'my name',
          describe: 'describe',
          status: 'status',
          update_time: 'update_time',
          unit: 'unit',
        },
        {
          name: 'my name',
          describe: 'describe',
          status: 'status',
          update_time: 'update_time',
          unit: 'unit',
        },
        {
          name: 'my name',
          describe: 'describe',
          status: 'status',
          update_time: 'update_time',
          unit: 'unit',
        },
        {
          name: 'my name',
          describe: 'describe',
          status: 'status',
          update_time: 'update_time',
          unit: 'unit',
        },
        {
          name: 'my name',
          describe: 'describe',
          status: 'status',
          update_time: 'update_time',
          unit: 'unit',
        },
        {
          name: 'my name',
          describe: 'describe',
          status: 'status',
          update_time: 'update_time',
          unit: 'unit',
        },
      ],
      del: [
        {name: 'abc', value: 'abc'},
        {name: 'abcd', value: 'abcd'},
        {name: 'abcde', value: 'abcde'},
        {name: 'abcdef', value: 'abcdef'},
      ],
      dialog: {
        create: {
          visible: false,
          formData: {
            name: '',
            status: '',
            code: '',
            describe: '',
          },
          formRules: {
            name: { required: true, message: '必选项', trigger: ['change', 'blur'] },
            status: { required: true, message: '必选项', trigger: ['change', 'blur'] },
            code: { required: true, message: '必选项', trigger: ['change', 'blur'] },
          },
        },
        edit: {
          visible: false,
          formData: {
            name: '',
            status: '',
            code: '',
            describe: '',
          },
          formRules: {
            name: { required: true, message: '必选项', trigger: ['change', 'blur'] },
            status: { required: true, message: '必选项', trigger: ['change', 'blur'] },
            code: { required: true, message: '必选项', trigger: ['change', 'blur'] },
          },
        },
        authorize: {
          visible: false,
          formData: {
            name: '',
            system: '',
            src: '',
          },
          formRules: {
            name: { required: true, message: '必选项', trigger: ['change', 'blur'] },
            system: { required: true, message: '必选项', trigger: ['change', 'blur'] },
            src: { required: true, message: '必选项', trigger: ['change', 'blur'] },
          },
        },
      }
    }
  },
  computed: {
    createFormValid() {
      return this.dialog.create.formData.name &&
            this.dialog.create.formData.status &&
            this.dialog.create.formData.code ;
    },
    editFormValid() {
      return this.dialog.edit.formData.name &&
            this.dialog.edit.formData.status &&
            this.dialog.edit.formData.code ;
    },
    authorizeFormValid() {
      return this.dialog.authorize.formData.name &&
            this.dialog.authorize.formData.system &&
            this.dialog.authorize.formData.src ;
    },
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

    },
    onCreate() {
      this.dialog.create.visible = true
    },
    onEdit() {
      this.dialog.edit.visible = true
    },
    onDelete() {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(
          () => {
            alert()
          },
          () => {

          }
        )
    },
    onAuthorize() {
      this.dialog.authorize.visible = true
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
