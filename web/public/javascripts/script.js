/* global $ */
// console.clear()
console.log('App.js is loaded')
// global $
var serverURL = 'https://anything-halal.herokuapp.com//'
var currentUser = window.localStorage.email || undefined

function signin (formData) {
  $.ajax({
    type: 'POST',
    url: serverURL + 'signin',
    data: formData,
    success: function (response) {
      window.alert(response)
      console.log(response.user._id)
      console.log(response.user.auth_token)
      // success save the repsonse
      window.localStorage.id = response.user._id
      window.localStorage.email = $('#inputEmail2').val()
      window.localStorage.auth_token = response.user.auth_token
      // then redirect
      window.location.href = './'
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
  $('#logout').click(function (event) {
    event.preventDefault()
    // window.locationStorage.removeItem('id')
    window.localStorage.removeItem('email')
    window.localStorage.removeItem('auth_token')
    window.location.href = '/index.html'
  })

  console.log(currentUser)
  // if (currentUser !== undefined) $('#sign-in, #sign-up').remove()
  // if (currentUser === undefined) $('#logout, #add-article').remove()
  // $('#hello-user a').html('Hello, ' + currentUser)
  // $('#user-name').html('Welcome ' + window.localStorage.email)
  // $('#user-stats').html('Your auth_token: ' + window.localStorage.auth_token)
})
