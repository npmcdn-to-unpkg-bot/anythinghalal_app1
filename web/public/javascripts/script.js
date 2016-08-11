/* global $ */
// console.clear()
console.log('App.js is loaded')
// global $
var serverURL = 'https://anything-halal.herokuapp.com/api/'
var currentUser = window.localStorage.email || undefined

function signin (formData) {
  $.ajax({
    type: 'POST',
    url: serverURL + 'signin',
    data: formData,
    success: function (response) {
      window.alert(response.message)
      // success save the repsonse
      window.localStorage.id = response.user._id
      window.localStorage.email = $('#inputEmail2').val()
      window.localStorage.auth_token = response.user.auth_token
      // then redirect
      window.location.href = '/'
    },
    error: function (xhr, ajaxOptions, thrownError) {
      // else output error
      console.log(xhr.status)
      console.log(thrownError)
      window.alert('Login Failed')
    }
  })
}

// check for user auth
$(function () {
  console.log('jQuery is alive!!')
  // if (!window.localStorage['email'] || !window.localStorage['auth_token']) loadUser()
  // globals $ currentUser //
  console.log('Hello ' + currentUser)

  // Signing in users
  // listen for the form login
  $('#signin-form').on('submit', function (event) {
    event.preventDefault()
    var formData = $(this).serialize()
    signin(formData)
  })

  // logout users
  $('.logout').click(function (event) {
    event.preventDefault()
    // window.locationStorage.removeItem('id')
    window.localStorage.removeItem('email')
    window.localStorage.removeItem('auth_token')
    window.localStorage.removeItem('auth_token')
    window.localStorage.removeItem('id')
    window.localStorage.removeItem('lsid')
    window.location.href = '/'
  })

  console.log(currentUser)
  if (currentUser !== undefined || '') $('.sign-in').remove()
  if (currentUser === undefined || '') $('.logout').remove()
  if (currentUser !== undefined || '') {
    $('#hello-user a').html('Hello, ' + currentUser)
  }
  // $('#user-name').html('Welcome ' + window.localStorage.email)
  // $('#user-stats').html('Your auth_token: ' + window.localStorage.auth_token)
})
