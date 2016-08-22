/* global $ */
// console.clear()
console.log('App.js is loaded')
// global $
var serverURL = 'https://anything-halal.herokuapp.com/api/'
var currentUser = window.localStorage.email || undefined

// for geocoder
function initialize () {
  var input = document.getElementById('searchTextField')
  var autocomplete = new google.maps.places.Autocomplete(input)
  google.maps.event.addListener(autocomplete, 'place_changed', function () {
    var place = autocomplete.getPlace()
    document.getElementById('city2').value = place.name
    document.getElementById('latitude').value = place.geometry.location.lat()
    document.getElementById('longitude').value = place.geometry.location.lng()
    // alert('This function is working!')
    // alert(place.name)
    // alert(place.address_components[0].long_name)
  })
}
google.maps.event.addDomListener(window, 'load', initialize)

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

function submitListing (formData) {
  $.ajax({
    type: 'POST',
    url: serverURL + 'listings',
    data: formData,
    success: function (response) {
      console.log(formData)
      window.alert(response.message)
      // success save the repsonse
      // then redirect
      window.location.href = '/categories'
    },
    error: function (xhr, ajaxOptions, thrownError) {
      // else output error
      console.log(xhr.status)
      console.log(thrownError)
      window.alert('Create Listing Error')
      window.location.href = '/profile'
    }
  })
}

function showListings () {
  $.ajax({
    url: 'https://anything-halal.herokuapp.com/api/listings/',
    // url: 'http://localhost:3000/api',
    type: 'GET',
    success: function (data) {
      data.forEach(function (datum) {
        $('#categories').append('<div class="col-md-6"><div class="panel panel-default" ><div class="panel-body" id="cafe"><h3 class="text-center" style="margin-top: 110px;">' + datum.name + '</h3><small>' + datum.address + '</small></div></div></div>')
      })
    }
  })
}

// <li class="list-group-item"><a href="' + datum.html_url + '" target="_blank">' + datum.name + '</li>

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

  $('#listingForm').on('submit', function (event) {
    event.preventDefault()
    var formData = $(this).serialize()
    submitListing(formData)
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
    $('.greet').html('You are currently as ' + currentUser)
  }
  // $('#user-name').html('Welcome ' + window.localStorage.email)
  // $('#user-stats').html('Your auth_token: ' + window.localStorage.auth_token)
  showListings()
})
