const emailRule = [

  value => !!value || 'This field is required.',

  value => (value || '').length <= 30 || 'Max 30 characters',

  value => {

    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    return pattern.test(value) || 'Invalid e-mail.'

  },

]

const UsernameRule = [

  value => !!value || 'This field is required.',

  value => (value || '').length <= 20 || 'Max 20 characters',

]

const passwordRule = [

  value => !!value || 'Password is required',

  value => (value && value.length >= 8) || 'Password must be 8  characters or more!',

]

const numberRule = [

  value => !!value || 'This field is required.',

  value => (value || '').length <= 11 || 'Max 11 numbers',

]

const imageRule = [

  value => !!value || 'This field is required.',

]

export {

  UsernameRule,

  emailRule,

  passwordRule,

  numberRule,

  imageRule

}