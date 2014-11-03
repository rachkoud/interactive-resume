// OK var HTMLheaderName = "<h1 id='name'>%data%</h1>";
// OK var HTMLheaderRole = "<span>%data%</span><hr/>";

// var HTMLcontactGeneric = "<li class='flex-item'><span class='orange-text'>%contact%</span><span class='white-text'>%data%</span></li>";
// OK var HTMLmobile = "<li class='flex-item'><span class='orange-text'>mobile</span><span class='white-text'>%data%</span></li>";
// OK var HTMLemail = "<li class='flex-item'><span class='orange-text'>email</span><span class='white-text'>%data%</span></li>";
// OK var HTMLtwitter = "<li class='flex-item'><span class='orange-text'>twitter</span><span class='white-text'>%data%</span></li>";
// OK var HTMLgithub = "<li class='flex-item'><span class='orange-text'>github</span><span class='white-text'>%data%</span></li>";
// OK var HTMLblog = "<li class='flex-item'><span class='orange-text'>blog</span><span class='white-text'>%data%</span></li>";
// OK var HTMLlocation = "<li class='flex-item'><span class='orange-text'>location</span><span class='white-text'>%data%</span></li>";

// OK var HTMLbioPic = "<img src='%data%' class='biopic'>";
// OK var HTMLWelcomeMsg = "<span class='welcome-message'>%data%</span>";

// OK var HTMLskillsStart = "<h3 id='skillsH3'>Skills at a Glance:</h3><ul id='skills' class='flex-box'></ul>";
// OK var HTMLskills = "<li class='flex-item'><span class='white-text'>%data%</span></li>";

// OK var HTMLworkStart = "<div class='work-entry'></div>";
// OK var HTMLworkEmployer = "<a href='#'>%data%";
// OK var HTMLworkTitle = " - %data%</a>";
// OK var HTMLworkDates = "<div class='date-text'>%data%</div>";
// OK var HTMLworkLocation = "<div class='location-text'>%data%</div>";
// OK var HTMLworkDescription = "<p><br>%data%</p>";

// OK var HTMLprojectStart = "<div class='project-entry'></div>";
// OK var HTMLprojectTitle = "<a href='#'>%data%</a>";
// OK var HTMLprojectDates = "<div class='date-text'>%data%</div>";
// OK var HTMLprojectDescription = "<p><br>%data%</p>";
// OK var HTMLprojectImage = "<img src='%data%'>";

// OK var HTMLschoolStart = "<div class='education-entry'></div>";
// OK var HTMLschoolName = "<a href='#'>%data%";
// OK var HTMLschoolDegree = " -- %data%</a>";
// OK var HTMLschoolDates = "<div class='date-text'>%data%</div>";
// OK var HTMLschoolLocation = "<div class='location-text'>%data%</div>";
// OK var HTMLschoolMajor = "<em><br>Major: %data%</em>"

// OK var HTMLonlineClasses = "<h3>Online Classes</h3>";
// OK var HTMLonlineTitle = "<a href='#'>%data%";
// OK var HTMLonlineSchool = " - %data%</a>";
// OK var HTMLonlineDates = "<div class='date-text'>%data%</div>";
// OK var HTMLonlineURL = "<br><a href='#'>%data%</a>";

// OK var internationalizeButton = "<button>Internationalize</button>";
// OK var googleMap = "<div id='map'></div>";


var work = {
    jobs: [
      {
        employer: "State of Neuchâtel, IT Department (SIEN)",
        title: "IT Consultant",
        location: "Neuchâtel, Switzerland",
        dates: "April 2010 – Present (4 years 8 months)",
        description: "DDeveloped, maintained, and supported business applications, Guichet Unique eGovernment portals with 25K users, and web services for the state of Neuchâtel as part of the twelve-member .NET team."
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
    ],
    display: function() {
      for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);  

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        $(".work-entry:last").append(formattedEmployer + formattedTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
      }
    }
};

work.display();


var bio = {
  name : "Rachid Abdoun",
  role : "Full Stack Developer",
  welcomeMessage : "Hi! Welcome!",
  contacts: {
    mobileNumber: "+41787075115",
    emailAddress: "rachid.abdoun@gmail.com",
    githubUsername: "rachkoud",
    twitterHandle: "@rachkoud",
    blog: "",
    location: "Neuchâtel, Switzerland"
  },
  skills: [
    ".NET / C#",
    "JavaScript / jQuery",
    "ASP.NET",
    "HTML5",
    "Scrum",
    "CSS",
  ],
  display: function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);
    
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#name").after(formattedRole);

    var formattedMobileNumber = HTMLmobile.replace("%data%", bio.contacts.mobileNumber);
    $("#topContacts,#footerContacts").append(formattedMobileNumber);

    var formattedEmailAddress = HTMLemail.replace("%data%", bio.contacts.emailAddress);
    $("#topContacts,#footerContacts").append(formattedEmailAddress);

    var formattedTwitterHandle = HTMLtwitter.replace("%data%", bio.contacts.twitterHandle);
    $("#topContacts,#footerContacts").append(formattedTwitterHandle);

    var formattedGithubUsername = HTMLgithub.replace("%data%", bio.contacts.githubUsername);
    $("#topContacts,#footerContacts").append(formattedGithubUsername);

    var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
    $("#topContacts,#footerContacts").append(formattedBlog);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts,#footerContacts").append(formattedLocation);

    var formattedBioPic = HTMLbioPic.replace("%data%", "images/fry.jpg");
    $("#header").append(formattedBioPic);

    var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMessage);

    $("#header").append(HTMLskillsStart);
    if (bio.skills.length > 0)
    {
      for (var skill in bio.skills) {
          var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
          $("#skills").append(formattedSkill);
      }
    }
  }
}

bio.display();

var projects = {
    projects: [
      {
        title: "Portfolio Mockup to HTML",
        dates: "October 2014",
        description: "From a PDF-file design mockup, I developed a responsive website that display images, descriptions and links to each of the portfolio projects that I have completed throughout the course of the Front-End Web Developer Nanodegree.",
        images: [
          "images/NanodegreePortfolioMockupToHtml.png"
        ]
      },
      {
        title: "Portfolio Mockup to HTML",
        dates: "October 2014",
        description: "From a PDF-file design mockup, I developed a responsive website that display images, descriptions and links to each of the portfolio projects that I have completed throughout the course of the Front-End Web Developer Nanodegree.",
        images: [
          "images/NanodegreePortfolioMockupToHtml.png"
        ]
      },
      {
        title: "Portfolio Mockup to HTML",
        dates: "October 2014",
        description: "From a PDF-file design mockup, I developed a responsive website that display images, descriptions and links to each of the portfolio projects that I have completed throughout the course of the Front-End Web Developer Nanodegree.",
        images: [
          "images/NanodegreePortfolioMockupToHtml.png"
        ]
      },
    ],
    display: function() {
      for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);  

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0)
        {
            for (image in projects.projects[project].images)
            {
              var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
              $(".project-entry:last").append(formattedImage);
            }
          }
        }
    }
};

projects.display();

var education = {
    schools: [
      {
        name: "Haute Ecole d’Ingénierie et de Gestion (HEIG-VD)",
        location: "Yverdon-Les-Bains, Switzerland",
        degree: "FHES Telecommunication Engineer",
        majors: [],
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
    ],
    display: function() {
      for (school in education.schools) {
        $("#education").append(HTMLschoolStart);  

        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);

        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedSchoolDates);

        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedSchoolLocation);

        if (education.schools[school].majors.length > 0)
        {
          for (major in education.schools[school].majors)
          {
            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
            $(".education-entry:last").append(formattedMajor);
        }
        }
      }

      $("#education").append(HTMLonlineClasses);

      for (onlineCourse in education.onlineCourses) {
        var formattedOnlineCourseTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
        $("#education").append(formattedOnlineCourseTitle + formattedOnlineSchool);

        var formattedOnlineCourseDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
        $("#education").append(formattedOnlineCourseDates);

        var formattedOnlineCourseUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].courseUrl);
        $("#education").append(formattedOnlineCourseUrl);
      }
    }
};

education.display();

$('#main').append(internationalizeButton);

$("#mapDiv").append(googleMap);

