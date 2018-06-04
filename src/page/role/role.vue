<template src="./role.html"> </template>

<script>
import { mapState, mapGetters } from 'vuex'
import api from "../../api"
import { formClean } from "../../common/util"
import validate from "../../common/validate"

export default {
  name: 'role',
  data () {
    return {
      formData: {
        name: '',
        system: [],
      },
      tableData: [],
      del: [
        {name: 'abc', value: 'abc'},
        {name: 'abcd', value: 'abcd'},
        {name: 'abcde', value: 'abcde'},
        {name: 'abcdef', value: 'abcdef'},
      ],
      formOption: {
        systemCode: this.$store.state.option.libraries.systemCode
      },
      dialog: {
        create: {
          visible: false,
          formData: {
            name: '',
            status: '',
            describe: '',
            systemCode: '',
          },
          formRules: {
            name: validate.required,
            status: validate.required,
            systemCode: validate.required,
          },
          formOption: {
            status: [
              {name: '启用', value: '启用'},
              {name: '停用', value: '停用'},
            ]
          }
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
            name: validate.required,
            status: validate.required,
            code: validate.required,
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
            name: validate.required,
            system: validate.required,
            src: validate.required,
          },
        },
      }
    }
  },
  computed: {
    createFormValid() {
      return this.dialog.create.formData.name &&
            this.dialog.create.formData.systemCode &&
            this.dialog.create.formData.status ;
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
    api.role.page({}).then( res => {
      next(vm => {
        vm.tableData = res.records
      })
      return Promise.resolve()
    })
  },
  mounted() {
  },
  methods: {
    query(p = {}) {
      api.role.page({}).then( res => {
        this.tableData = res.records
        return Promise.resolve()
      })
    },
    createOpen() {
      if ('dialog.create.formData' in this.$refs) {
        this.$refs['dialog.create.formData'].clearValidate();
      }
    },
    onCreateOpen() {
      this.dialog.create.visible = true
    },
    createClose() {
      this.dialog.create.formData = formClean(this.dialog.create.formData)
    },
    onCreateSubmit() {
      const form = this.dialog.create.formData
      api.role.sysrole({
        roleName: form.name,
        available: form.status,
        systemCode: form.systemCode,
        roleMark: form.describe,
      }).then( res => {
        this.$message({ message: '添加成功', type: 'success' });
        this.dialog.create.visible = false
        this.query()
      })
    },
    editOpen() {
      if ('dialog.edit.formData' in this.$refs) {
        this.$refs['dialog.edit.formData'].clearValidate();
      }
    },
    onEditOpen() {
      this.dialog.edit.visible = true
    },
    editClose() {
      this.dialog.edit.formData = formClean(this.dialog.edit.formData)
    },
    authorizeOpen() {
      if ('dialog.authorize.formData' in this.$refs) {
        this.$refs['dialog.authorize.formData'].clearValidate();
      }
    },
    onAuthorizeOpen() {
      this.dialog.authorize.visible = true
    },
    authorizeClose() {
      this.dialog.authorize.formData = formClean(this.dialog.authorize.formData)
    },
    onSearch() {

    },
    onDelete(id) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(
        () => {
          api.role.sysroleDel(id).then( res => {

          })
        },
      )
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
