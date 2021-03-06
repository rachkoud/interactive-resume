/*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Cameron Pittman
*/


/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
var HTMLaboutMeInitialize = "<aside class='col-md-3 aside-el'><h2>About me</h2><h5>professional profile<br /> and contact info</h5></aside><article id='about-me-text' class='col-md-6 border-left par-el'></article><div class='col-md-3 cont-info'><ul id='social'></ul><ul id='contacts'></ul></div>";
var HTMLskillsInitialize = "<aside class='col-md-3 aside-el'><h2>My Skills</h2><h5>skills that I’m<br /> proud of</h5></aside>";
var HTMLexperienceInitialize = "<aside class='col-md-3 aside-el'><h2>Experience</h2><h5>where I worked</h5></aside><div id='experience-details' class='col-md-9'></div>";
var HTMLeducationInitialize = "<aside class='col-md-3 aside-el'><h2>Education</h2><h5>Where I studied</h5></aside><div id='education-details' class='col-md-9'></div>";
var HTMLonlineCoursesInitialize = "<aside id='online-courses-header' class='col-md-3 aside-el'></aside><div id='online-courses-details' class='col-md-9'></div>";
var HTMLprojectsInitialize = "<aside class='col-md-3 aside-el'><h2>Projects</h2><h5>some of my<br /> best work</h5></aside><div class='col-md-9 border-left'><div id='projects-details'></div>";
var HTMLsiteHeaderInitialize = "<div id='logoline'></div>";
var HTMLmapInitialize = "<aside class='col-md-3 aside-el'><h2>Where I've Lived and Worked</h2></aside><div class='col-md-9 border-left'><div id='mapDiv'></div></div>";

var HTMLheaderName = "<h1 id='name'>%data%</h1>";
var HTMLheaderRole = "<h2>%data%</h2>";

var HTMLcontactGeneric = "<li class='flex-item'><span class='orange-text'>%contact%</span><span class='white-text'>%data%</span></li>";
var HTMLmobile = "<li class='flex-item'><i class='fa fa-mobile fa-2x'></i><a>%data%</a></li>";
var HTMLemail = "<li class='flex-item'><i class='fa fa-envelope fa-2x'></i><a>%data%</a></li>";
var HTMLtwitter = "<li class='flex-item'><a href='https://twitter.com/%data%'><img src='images/icons/twitter.png' alt='' /></a></li>";
var HTMLgithub = "<li class='flex-item'><a href='https://github.com/%data%'><img src='images/icons/github.png' alt='' /></a></li>";
var HTMLblog = "<li class='flex-item'><a href='%data%'><img src='images/icons/blogger.png' alt='' /></a></li>";
var HTMLlocation = "<li class='flex-item'><i class='fa fa-map-marker fa-2x'></i><a>%data%</a></li>";

var HTMLbioPic = "<img src='%data%' alt='Picture of Me!' class='img-circle img-responsive biopic'>";
var HTMLWelcomeMsg = "<h3>%data%</h3>";
var HTMLAboutMe = "<p>%data%</p>";

var HTMLskillsStart = "<div id='skills-list' class='col-md-9 border-left skill-level'></div>";
var HTMLskillsName = "<h4>%data%</h4>";
var HTMLskillsPercent = "<div class='progressbar percent-%data% skills-entry'><div class='progressbar-inner'></div></div>";

var HTMLworkStart = "<div class='row'><article class='work-entry col-md-12 border-left par-el in-spacing'><div class='bigspacing'></div></article></div>";
var HTMLworkEmployer = "<header><h2>%data%</h2></header>";
var HTMLworkTitle = "<h3>%data%</h3>";
var HTMLworkDates = "<div class='period'>%data%</div>";
var HTMLworkLocation = "<div class='location-text'>%data%</div>";
var HTMLworkDescription = "<p>%data%</p>";

var HTMLprojectStart = "<div class='project-entry'><div class='project-images row'></div></div>";
var HTMLprojectTitle = "<h3>%data%</h3>";
var HTMLprojectDates = "<div class='period'>%data%</div>";
var HTMLprojectDescription = "<p>%data%</p>";
var HTMLprojectImage = "<div class='thumbnail project-image'><img src='%data%'></div></div>";

var HTMLschoolStart = "<div class='row'><article class='education-entry col-md-12  border-left par-el in-spacing'></article></div>";
var HTMLschoolName = "<header><h2>%data%</h2></header>";
var HTMLschoolDegree = "<h3>%data%</h3>";
var HTMLschoolDates = "<div class='period'>%data%</div>";
var HTMLschoolLocation = "<p>%data%</p>";
var HTMLschoolMajor = "<em><br>Major: %data%</em>"

var HTMLonlineClasses = "<h2>Online Classes</h2>";
var HTMLonlineTitle = "%data%";
var HTMLonlineSchool = "%data%";
var HTMLonlineDates = "<div class='col-md-2'><span class='date-text'>%data%</span></div>";
var HTMLonlineURL = "<div class='row'><a href='%data%'></a></div>";

var internationalizeButton = "<button>Internationalize</button>";
var googleMap = "<div id='map'></div>";


/*
The International Name challenge in Lesson 2 where you'll create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
  $('button').click(function() {
    var iName = inName() || function(){};
    $('#name').html(iName);
  });
})



/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/
clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      "x": x,
      "y": y
    }
  );
  console.log("x location: " + x + "; y location: " + y);
}

$(document).click(function(loc) {
  // your code goes here!
  logClicks(loc.pageX, loc.pageY)
});



/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  // This next line makes `map` a new Google Map JavaScript Object and attaches it to
  // <div id="map">, which is appended as part of an exercise late in the course.
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array
    for (var school in education.schools) {
      locations.push(education.schools[school].location);
    }

    // iterates through work locations and appends each location to
    // the locations array
    for (var job in work.jobs) {
      locations.push(work.jobs[job].location);
    }

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.k;  // latitude from the place service
    var lon = placeData.geometry.location.B;  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
      // your code goes here!
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0])
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
    for (place in locations) {

      // the search request object
      var request = {
        query: locations[place]
      }

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    }
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

};

/*
Uncomment all the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
  // Make sure the map bounds get updated on page resize
  map.fitBounds(mapBounds);
});
