const peopleId = (rule, value, callback) => {
  if ( !/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(value) ) {
    callback(new Error('请输入正确的身份证号'));
  }
}

const cellphone = (rule, value, callback) => {
  if ( !/^1[3|4|5|7|8][0-9]{9}$/.test(value) ) {
    callback(new Error('请输入正确的手机号'));
  }
}

const required = { required: true, message: '必选项', trigger: ['change', 'blur'] }

const validate = {
  peopleId,
  cellphone,
  required
}

export default validate
