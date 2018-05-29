<template src="./src.html"> </template>

<script>
import { mapState, mapGetters } from 'vuex'
import api from "../../api"
export default {
  name: 'src',
  data () {
    return {
      name: '',
      tableData: [
        {
          name: 'my name',
          url: 'url',
          type: 'type',
          parent: 'update_time',
          sort: 'sort',
          status: 'unit',
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
            type: '',
            url: '',
            parent: '',
            system: '',
            code: '',
            sort: '',
          },
          formRules: {
            name: { required: true, message: '必选项', trigger: ['change', 'blur'] },
            status: { required: true, message: '必选项', trigger: ['change', 'blur'] },
            type: { required: true, message: '必选项', trigger: ['change', 'blur'] },
            parent: { required: true, message: '必选项', trigger: ['change', 'blur'] },
            system: { required: true, message: '必选项', trigger: ['change', 'blur'] },
          },
        },
        edit: {
          visible: false,
          formData: {
            name: '',
            status: '',
            type: '',
            url: '',
            parent: '',
            system: '',
            code: '',
            sort: '',
          },
          formRules: {
            name: { required: true, message: '必选项', trigger: ['change', 'blur'] },
            status: { required: true, message: '必选项', trigger: ['change', 'blur'] },
            type: { required: true, message: '必选项', trigger: ['change', 'blur'] },
            parent: { required: true, message: '必选项', trigger: ['change', 'blur'] },
            system: { required: true, message: '必选项', trigger: ['change', 'blur'] },
          },
        },
        child: {
          visible: false,
          formData: {
            name: '',
            status: '',
            type: '',
            url: '',
            parent: '',
            system: '',
            code: '',
            sort: '',
          },
          formRules: {
            name: { required: true, message: '必选项', trigger: ['change', 'blur'] },
            status: { required: true, message: '必选项', trigger: ['change', 'blur'] },
            type: { required: true, message: '必选项', trigger: ['change', 'blur'] },
            parent: { required: true, message: '必选项', trigger: ['change', 'blur'] },
            system: { required: true, message: '必选项', trigger: ['change', 'blur'] },
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
    onCreateChild() {
      this.dialog.child.visible = true
    },
  }
}
</script>
