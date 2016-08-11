/* global $ */
$(document).ready(function () {
  // loading the base map
  var mymap = L.map('mapid').setView([1.2981, 103.8498], 12)
  L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: '<a href="https://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    zoomControl: false,
    accessToken: 'pk.eyJ1IjoiZGF2aWZpZWQiLCJhIjoiY2lxYWoxMnF3MDF0Z2Z2bTZ6MHl3cWdiMyJ9.JhNjMNWSTxbGzp7ck3ahMA'
  }).addTo(mymap)
  //  L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
  //    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  //    subdomains: 'abcd',
  //    minZoom: 1,
  //    maxZoom: 18,
  //    ext: 'png'
  // }).addTo(mymap)
  // making ajax request to our own api
  function getData () {
    $.ajax({
      url: 'https://anything-halal.herokuapp.com/api/listings/',
      // url: 'http://localhost:3000/api',
      type: 'GET',
      success: function (data) {
        visualiseData(data)
      }
    })
  }
  // adding all circles to a layer so that we can remove and re-add the circles every time the API call is made (once per minute)
  var circlesGroup = new L.FeatureGroup()
  //  DEFINE FUNCTION FOR VISUALISING DATA RETURNED FROM AJAX CALL
  function visualiseData (data) {
    for (var i = 0; i < data.length; i++) {
      var lat = data[i].locacation.latitude
      var lon = data[i].locacation.longitude
      var circle = L.marker([lat, lon], 200, {
        fillColor: '#09AD83',
        fillOpacity: 0.8,
        stroke: false
      })
      circle.bindPopup(data[i].title)
      circlesGroup.addLayer(circle)
    }
  }
  mymap.addLayer(circlesGroup)
  getData()
})
