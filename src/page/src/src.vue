<template src="./src.html"> </template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import api from "../../api"
import { formClean } from "../../common/util"
import validate from "../../common/validate"
import store from "../../store"

export default {
  name: 'src',
  data () {
    return {
      name: '',
      tableData: [
        {
          name: '',
          url: '',
          type: '',
          parent: '',
          sort: '',
          status: '',
        },
      ],
      formOption: {
        SYS_RESOURCE_TYPE: []
      },
      del: [
        {name: 'abc', value: 'abc'},
        {name: 'abcd', value: 'abcd'},
        {name: 'abcde', value: 'abcde'},
        {name: 'abcdef', value: 'abcdef'},
      ],
      dialog: {
        create: {
          visible: false,
          formData: { name: '', status: '', type: '', url: '',
            parent: '', system: '', system_parent: [], code: '', sort: '', },
          formRules: {
            name: validate.required,
            status: validate.required,
            type: validate.required,
            parent: validate.required,
            system: validate.required,
          },
        },
        edit: {
          visible: false,
          formData: { name: '', status: '', type: '', url: '',
            parent: '', system: '', code: '', sort: '', },
          formRules: {
            name: validate.required,
            status: validate.required,
            type: validate.required,
            parent: validate.required,
            system: validate.required,
          },
        },
        child: {
          visible: false,
          formData: { name: '', status: '', type: '', url: '', parent: '',
            system: '', code: '', sort: '', },
          formRules: {
            name: validate.required,
            status: validate.required,
            type: validate.required,
            parent: validate.required,
            system: validate.required,
          },
        },
      }
    }
  },
  computed: {
    createFormValid() {
      return this.dialog.create.formData.name &&
            this.dialog.create.formData.status &&
            this.dialog.create.formData.type &&
            this.dialog.create.formData.parent &&
            this.dialog.create.formData.system ;
    },
    editFormValid() {
      return this.dialog.create.formData.name &&
          this.dialog.create.formData.status &&
          this.dialog.create.formData.type &&
          this.dialog.create.formData.parent &&
          this.dialog.create.formData.system ;
    },
    createChildFormValid() {
      return this.dialog.create.formData.name &&
          this.dialog.create.formData.status &&
          this.dialog.create.formData.type &&
          this.dialog.create.formData.parent &&
          this.dialog.create.formData.system ;
    },
  },
  beforeRouteEnter (to, from, next) {
    const syscode = store.dispatch('getSyscode')
    const SYS_RESOURCE_TYPE = store.dispatch('get_dictionary', 'SYS_RESOURCE_TYPE')
    const reqPre = Promise.all([syscode, SYS_RESOURCE_TYPE])

    reqPre.then( res => {
      console.log(111111111111111,res)
      const systemCodeArray = res[0].map( v => {
         return api.common.sysrescource_tree(v.systemCode)
      })
      Promise.all(systemCodeArray).then( resp => {
      })
    })
    next(vm => {
      // vm.formOption.systemCode = res[0]['childs']
      // vm.formOption.SYS_RESOURCE_TYPE = res[0]['childs']
    })
  },
  mounted() {
    //api.home.test({name: 'Tim', age: 18}).then(res => {
    // })
  },
  methods: {
    handleChange() {

    },
    ...mapActions([ 'get_dictionary' ]),
    onSearch() {

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
      api.src.sysrescource({
        roleName: form.name,
        available: form.status,
        roleMark: form.describe,
      }).then( res => {
        this.dialog.create.visible = false
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
    childOpen() {
      if ('dialog.child.formData' in this.$refs) {
        this.$refs['dialog.child.formData'].clearValidate();
      }
    },
    onChildOpen() {
      this.dialog.child.visible = true
    },
    childClose() {
      this.dialog.child.formData = formClean(this.dialog.child.formData)
    },
  }
}
</script>
