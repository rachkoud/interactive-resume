function replaceDataInLine(line, value) {
  return line.replace(/%data%/g, value);
}

// Data sources

var bio = {
  name : "Rachid Abdoun",
  picture : "images/Me.jpeg",
  role : "Full Stack Developer",
  welcomeMessage : "Hi! I'm a software Engineer with six years of web and application development and project management!",
  aboutMe : "A Software Engineer with six years of web and application development work experience, specializing in the development, integration, implementation, and support of software applications and the resolution of transversal issues that occur with .NET applications in production.",
  contacts: {
    mobileNumber: "+41XXXXXXXXX",
    emailAddress: "mail@mail.com",
    githubUsername: "rachkoud",
    twitterHandle: "rachkoud",
    blog: "",
    location: "Neuchâtel, Switzerland"
  },
  skills: [
    { name : ".NET / C#", percent : "100" },
    { name : "JavaScript / jQuery", percent : "100" },
    { name : "ASP.NET", percent : "100" },
    { name : "HTML5", percent : "100" },
    { name : "Scrum", percent : "100" },
    { name : "CSS", percent : "80" },
  ]
};

var work = {
  jobs: [
    {
      employer: "State of Neuchâtel, IT Department (SIEN)",
      title: "IT Consultant",
      location: "Neuchâtel, Switzerland",
      dates: "April 2010 – Present (4 years 8 months)",
      description: "Developed, maintained, and supported business applications, Guichet Unique eGovernment portals with 25K users, and web services for the state of Neuchâtel as part of the twelve-member .NET team."
    },
    {
      employer: "Banque Privée Espirito Santo",
      title: "New Technologies Engineer",
      location: "Lausanne, Switzerland",
      dates: "November 2007 – March 2010 (2 years 5 months)",
      description: "Developed the bank intranet for 140 users across seven countries as part of the three-member New Technologies team."
    },
    {
      employer: "IICT, Dept. of Information Technology and Communication",
      title: "Research Engineer",
      location: "Yverdon-Les-Bains, Switzerland",
      dates: "February 2007 – November 2007 (10 months)",
      description: "Created virtualization tools and systems based on Linux, XEN, and QEMU. Developed a network virtualization system and a network configuration UI using wxPython, Python, and QEMU."
    },
    {
      employer: "NexPC ltd",
      title: "Co-Founder / Manager",
      location: "Neuchâtel, Switzerland",
      dates: "July 2006 – October 2007 (1 year 4 months)",
      description: "Co-founded an IT technical support provider and developed a customer relationship management web platform for company partners with Ruby on Rails."
    }
  ]
};

var projects = {
  projects: [
    {
      title: "Portfolio Mockup to HTML",
      dates: "October 2014",
      description: "From a PDF-file design mockup, I developed a responsive website that display images, descriptions and links to each of the portfolio projects that I have completed throughout the course of the Front-End Web Developer Nanodegree.",
      images: [
        "images/ProjectNanodegree1.jpg",
        "images/ProjectNanodegree2.jpg",
        "images/ProjectNanodegree3.jpg",
        "images/ProjectNanodegree4.jpg",
        "images/ProjectNanodegree5.jpg"
      ]
    },
    {
      title: "Interactive Resume",
      dates: "October 2014",
      description: "I developed an interactive resume application that reads your resume content from a JSON file and dynamically displays that content within a provided template. I used objects, functions, conditionals, and control structures to compose the content displayed on the resume.",
      images: [
        "images/ProjectNanodegree2.jpg"
      ]
    },
    {
      title: "Classic Arcade Game Clone",
      dates: "November 2014",
      description: "You will be provided with visual assets and a game loop engine; using these tools you must add a number of entities to the game including the player characters and enemies to recreate the classic arcade game Frogger.",
      images: [
        "images/ProjectNanodegree3.jpg"
      ]
    },
    {
      title: "Website Optimization",
      dates: "December 2014",
      description: "You will optimize a provided website with a number of optimization- and performance-related issues so that it achieves a target PageSpeed score and runs at 60 frames per second.",
      images: [
        "images/ProjectNanodegree4.jpg"
      ]
    },
    {
      title: "Neighborhood Map",
      dates: "January 2015",
      description: "You will develop a single-page application featuring a map of your neighborhood or a neighborhood you would like to visit. You will then add additional functionality to this application, including: map markers to identify popular locations or places you’d like to visit, a search function to easily discover these locations, and a listview to support simple browsing of all locations. You will then research and implement third-party APIs that provide additional information about each of these locations (such as StreetView images, Wikipedia articles, Yelp reviews, etc).",
      images: [
        "images/ProjectNanodegree5.jpg"
      ]
    },
    {
      title: "TodoMVC with HumanJS",
      dates: "January 2015",
      description: "This app is largely inspired by the well known todoMVC Backbone example and use the components from the great book HumanJavascript of Henrik Joreteg.",
      images: [
        "images/ProjectTodoMvcHumanJS.png"
      ]
    },
    {
      title: "Hard coded token for WCF",
      dates: "Novembeer 2013",
      description: "This is a POC where a token is created from the ClaimsPrincipal.Current and call a WCF service. The WCF service is configured to receive token from a trusted STS.",
      images: [
        "images/ProjectHardCodedToken.png"
      ]
    }
  ]
};

var education = {
  schools: [
    {
      name: "Haute Ecole d’Ingénierie et de Gestion (HEIG-VD)",
      location: "Yverdon-Les-Bains, Switzerland",
      degree: "HES Telecommunication Engineer",
      majors: [ "M1", "M2" ],
      dates: "2003 – 2007",
      schoolWebsite: "http://www.heig-vd.ch/"
    },
    {
      name: "Centre professionnel du Littoral neuchâtelois (CPLN)",
      location: "Neuchâtel, Switzerland",
      degree: "Degree of Technician in Electronics",
      majors: [],
      dates: "2001 – 2003",
      schoolWebsite: "http://www.cpln.ch/"
    }
  ],
  onlineCourses: [
    {
      title: "Preparing For a Job Interview",
      school: "PluralSight",
      dates: "Sept 2014",
      courseUrl: "http://www.pluralsight.com/courses/developer-job-interviews"
    },
    {
      title: "Git Fundamentals",
      school: "PluralSight",
      dates: "Jun 2014",
      courseUrl: "http://www.pluralsight.com/courses/git-fundamentals"
    },
    {
      title: "Git for Visual Studio Developers",
      school: "PluralSight",
      dates: "Jun 2014",
      courseUrl: "http://www.pluralsight.com/courses/git-visual-studio-developers"
    },
    {
      title: "Building End-to-End Multi-Client Service Oriented Applications",
      school: "PluralSight",
      dates: "May 2014",
      courseUrl: "http://www.pluralsight.com/courses/building-multi-client-end-to-end-service-oriented-applications"
    },
    {
      title: "Fixing Common JavaScript Bugs",
      school: "PluralSight",
      dates: "April 2014",
      courseUrl: "http://www.pluralsight.com/courses/fixing-common-javascript-bugs"
    },
    {
      title: "Structuring JavaScript Code",
      school: "PluralSight",
      dates: "April 2014",
      courseUrl: "http://www.pluralsight.com/courses/structuring-javascript"
    },
    {
      title: "JavaScript Design Patterns",
      school: "PluralSight",
      dates: "April 2014",
      courseUrl: "http://www.pluralsight.com/courses/javascript-design-patterns"
    },
    {
      title: "JavaScript Fundamentals",
      school: "PluralSight",
      dates: "April 2014",
      courseUrl: "http://www.pluralsight.com/courses/jscript-fundamentals"
    },
    {
      title: "Introduction to Raven DB",
      school: "PluralSight",
      dates: "Jul 2013",
      courseUrl: "http://www.pluralsight.com/courses/ravendb"
    },
    {
      title: "Understanding NoSQL",
      school: "PluralSight",
      dates: "Jul 2013",
      courseUrl: "http://www.pluralsight.com/courses/understanding-nosql"
    },
    {
      title: "Single Page Apps with HTML5, Web API, Knockout and jQuery",
      school: "PluralSight",
      dates: "Jul 2013",
      courseUrl: "http://www.pluralsight.com/courses/spa"
    },
    {
      title: "Single Page Apps JumpStart",
      school: "PluralSight",
      dates: "Jul 2013",
      courseUrl: "http://www.pluralsight.com/courses/single-page-apps-jumpstart"
    },
    {
      title: "C# Interfaces",
      school: "PluralSight",
      dates: "Jul 2013",
      courseUrl: "http://www.pluralsight.com/courses/csharp-interfaces"
    },
    {
      title: "AngularJS Fundamentals",
      school: "PluralSight",
      dates: "Jul 2013",
      courseUrl: "http://www.pluralsight.com/courses/angularjs-fundamentals"
    },
    {
      title: "Identity and Access Control in ASP.NET 4.5",
      school: "PluralSight",
      dates: "May 2013",
      courseUrl: "http://www.pluralsight.com/courses/iac-aspnet"
    },
    {
      title: "Introduction to Identity and Access Control in .NET 4.5",
      school: "PluralSight",
      dates: "May 2013",
      courseUrl: "http://www.pluralsight.com/courses/iac-intro"
    },
    {
      title: "Identity and Access Control in WCF 4.5",
      school: "PluralSight",
      dates: "May 2013",
      courseUrl: "http://www.pluralsight.com/courses/iac-wcf"
    },
    {
      title: "IIS for Developers",
      school: "PluralSight",
      dates: "May 2013",
      courseUrl: "http://www.pluralsight.com/courses/iis-for-developers"
    },
    {
      title: "Cross Platform Game Development with MonoGame",
      school: "PluralSight",
      dates: "May 2013",
      courseUrl: "http://www.pluralsight.com/courses/monogame"
    },
  ]
};

// Resume builder can create build resume from JSON
// In this example, JSON is in memory

var resumeBuilder = function(bio, work, projects, education) { // name lower case, don’t have to use the new keyword on it
  //private variables
  //private functions

  bio.build = function() {
    $("#about-me").html(HTMLaboutMeInitialize);
    $("#skills").html(HTMLskillsInitialize);
    $("#site-header").html(HTMLsiteHeaderInitialize);

    $("#logoline").prepend(replaceDataInLine(HTMLheaderName, bio.name));

    $("#site-header").append(replaceDataInLine(HTMLheaderRole, bio.role));

    $("#site-header").append(replaceDataInLine(HTMLWelcomeMsg, bio.welcomeMessage));

    $("#about-me-text").append(replaceDataInLine(HTMLbioPic, bio.picture));

    $("#about-me-text").append(replaceDataInLine(HTMLAboutMe, bio.aboutMe));

    $("#contacts").append(replaceDataInLine(HTMLmobile, bio.contacts.mobileNumber));

    $("#contacts").append(replaceDataInLine(HTMLemail, bio.contacts.emailAddress));

    $("#contacts").append(replaceDataInLine(HTMLlocation, bio.contacts.location));

    $("#social").append(replaceDataInLine(HTMLtwitter, bio.contacts.twitterHandle));

    $("#social").append(replaceDataInLine(HTMLgithub, bio.contacts.githubUsername));

    $("#social").append(replaceDataInLine(HTMLblog, bio.contacts.blog));

    $("#skills").append(HTMLskillsStart);
    if (bio.skills.length > 0)
    {
      for (var skill in bio.skills) {
          $("#skills-list").append(replaceDataInLine(HTMLskillsName, bio.skills[skill].name));

          $("#skills-list").append(replaceDataInLine(HTMLskillsPercent, bio.skills[skill].percent));
      }
    }
  }

  work.build = function() {
    $("#experience").html(HTMLexperienceInitialize);

    for (job in work.jobs) {
      $("#experience-details").append(HTMLworkStart);

      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      $(".work-entry:last").append(formattedDates);

      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      $(".work-entry:last").append(formattedEmployer);

      var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      $(".work-entry:last header").append(formattedLocation);

      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      $(".work-entry:last header").append(formattedTitle);

      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
      $(".work-entry:last").append(formattedDescription);
    }
  }

  projects.build = function() {
    $("#projects").html(HTMLprojectsInitialize);

    for (project in projects.projects) {
      $("#projects-details").append(HTMLprojectStart);

      $(".project-entry:last").prepend(replaceDataInLine(HTMLprojectTitle, projects.projects[project].title));

      $(".project-entry:last").prepend(replaceDataInLine(HTMLprojectDates, projects.projects[project].dates));

      $(".project-entry:last").append(replaceDataInLine(HTMLprojectDescription, projects.projects[project].description));

      if (projects.projects[project].images.length > 0)
      {
        for (image in projects.projects[project].images)
        {
          $(".project-entry:last .project-images").append(replaceDataInLine(HTMLprojectImage, projects.projects[project].images[image]));
        }
      }
    }
  }

  education.build = function() {
    $("#education").html(HTMLeducationInitialize);
    $("#online-courses").html(HTMLonlineCoursesInitialize);

    for (school in education.schools) {
      $("#education-details").append(HTMLschoolStart);

      $(".education-entry:last").append(replaceDataInLine(HTMLschoolDates, education.schools[school].dates));

      $(".education-entry:last").append(replaceDataInLine(HTMLschoolName, education.schools[school].name));

      $(".education-entry:last header").append(replaceDataInLine(HTMLschoolDegree, education.schools[school].degree));

      if (education.schools[school].majors.length > 0)
      {
        for (major in education.schools[school].majors)
        {
          $(".education-entry:last").append(replaceDataInLine(HTMLschoolMajor, education.schools[school].majors[major]));
        }
      }

      $(".education-entry:last").append(replaceDataInLine(HTMLschoolLocation, education.schools[school].location));
    }

    $("#online-courses-header").prepend(HTMLonlineClasses);

    for (onlineCourse in education.onlineCourses) {
      $("#online-courses-details").append(replaceDataInLine(HTMLonlineURL, education.onlineCourses[onlineCourse].courseUrl));

      $("#online-courses-details div.row:last").prepend(replaceDataInLine(HTMLonlineDates, education.onlineCourses[onlineCourse].dates));

      $("#online-courses-details a:last").append(replaceDataInLine(education.onlineCourses[onlineCourse].title + education.onlineCourses[onlineCourse].school));
    }
  }

  var map = {
    build : function() {
      $("#map-section").html(HTMLmapInitialize);

      $("#mapDiv").append(googleMap);
      initializeMap();
    }
  };

  var build = function() {
    bio.build();
    work.build();
    projects.build();
    education.build();

    $('#main').append(internationalizeButton);
  };

  return {
    //public members
    build : build,
    bio: bio,
    work: work,
    projects: projects,
    education: education,
    map: map
  };
}(bio, work, projects, education); // () self calling the function, so don’t have to use the new keyword to instantiate it

// We could build the full resume :
// resumeBuilder.build();

// Or in any order :
$(document).ready(function() {
  resumeBuilder.bio.build();
  resumeBuilder.bio.build();
  resumeBuilder.map.build();
  resumeBuilder.work.build();
  resumeBuilder.projects.build();
  resumeBuilder.education.build();
  resumeBuilder.map.build();
  resumeBuilder.work.build();
  resumeBuilder.projects.build();
});

