var bio = {
    "name": "Harjot Singh",
    "role": "Front-End Web Developer",
    "contacts": {
        "mobile": "209-345-5129",
        "email": "pannuaj@outlook.com",
        "github": "HarjotSingh0723",
        "location": "Tracy, CA"
    },
    "welcomeMessage": "An energetic and imaginative young web developer ",
    "skills": ["HTML", "CSS", "Javascript", "JQuery", "Bootstrap", "PHP", "WordPress"],
    "bioPic": "images/harjot.png"
};

//Append the bio object to index.html via helper.js
bio.display = function () {
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedBioPic);

    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);

    var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedmobile);
    $("#footerContacts").append(formattedmobile);
    var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedemail);
    $("#footerContacts").append(formattedemail);
    var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedgithub);
    $("#footerContacts").append(formattedgithub);
    var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedlocation);
    $("#footerContacts").append(formattedlocation);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        var length = bio.skills.length;
        for (var i = 0; i < length; i++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
    }
}
var work = {
    "jobs": [{
        "employer": "FreeLance Web Developer",
        "title": "Web Developer",
        "location": "Tracy, CA",
        "dates": "2015 - Current",
        "description": "Designing, coding and modifying websites from layout to function and according to clients specifications."
    }, {
        "employer": "Salvis Bistro",
        "title": "Web Developer",
        "location": "Galloway, OH",
        "dates": "2011-2014",
        "description": " Designed, developed, documented, tested and debugged applications software and systems that contain logical and mathematical solutions."
    }, {
        "employer": "Shell Gas Stations",
        "title": "Office Manager",
        "location": "Columbus, OH",
        "dates": "2007-2011",
        "description": "Delivered energy, insight, technical expertise and leadership that support growth, profitability, and quality."
    }, {
        "employer": "Loan City",
        "title": "Technology Quality Assurance Specialist",
        "location": "San Jose, CA",
        "dates": "2004-2007",
        "description": "Assigned the tasks of conducting quality testing and evaluating the results with the help of supervisors."
    }, {
        "employer": "Fry's Electronics",
        "title": "Computer Sales Representative",
        "location": "Fremont, CA",
        "dates": "2002-2004",
        "description": "Handled the tasks of selling computer hardware as well as peripherals to corporate sector"
    }]
};

//Append the work object to index.html via helper.js
work.display = function () {
    for (var job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
}

var education = {
    "schools": [{
        "name": "Ohlone College",
        "location": "Fremont, CA, US",
        "degree": "",
        "majors": ["Computer Science"],
        "dates": "2002-2005",
        "url": "http://www.ohlone.edu/"
    }, {
        "name": "Washington High School",
        "location": "Fremont, CA, US",
        "degree": "High School Diploma",
        "majors": ["Computer Science"],
        "dates": "1998-2002",
        "url": "http://www.fremont.k12.ca.us/washington/"
    }],
    "onlineCourses": [{
        "title": "Practical PHP",
        "school": "Udemy",
        "date": 2015,
        "url": "https://www.udemy.com/code-dynamic-websites/learn/#/"
    }, {
        "title": "Bootstrap Basics",
        "school": "Udemy",
        "date": 2015,
        "url": "https://www.udemy.com/code-responsive-website-twitter-bootstrap/learn/#/"
    }, {
        "title": "WordPress Theme Development with Bootstrap",
        "school": "Udemy",
        "date": 2015,
        "url": "https://www.udemy.com/bootstrap-to-wordpress/learn/#/"
    }, {
        "title": "The Complete Web Developer Course",
        "school": "Udemy",
        "date": 2015,
        "url": "https://www.udemy.com/complete-web-developer-course/learn/#/"
    }, ]
};

//Append the education object to index.html via helper.js
education.display = function () {
    for (var school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedNameDegree = formattedName + formattedDegree;
        $(".education-entry:last").append(formattedNameDegree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedDates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedLocation);
        if (education.schools[school].majors.length) {
            var len = education.schools[school].majors.length;
            for (var i = 0; i < len; i++) {
                var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[i]);
                $(".education-entry:last").append(formattedMajor);
            }
        }
    }

$("#education").append(HTMLonlineClasses);
for (var course in education.onlineCourses) {
    $("#education").append(HTMLschoolStart);
    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
    var formattedTitleSchool = formattedTitle + formattedOnlineSchool;
    $(".education-entry:last").append(formattedTitleSchool);
    var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
    $(".education-entry:last").append(formattedDate);
    var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
    $(".education-entry:last").append(formattedURL);
}
}

var projects = {
    "projects": [{
        "title": "Bootstrap",
        "dates": "2015",
        "description": "Created Responsive Websites using Twitter Bootstrap",
        "images": ["images/bootstrap1.jpg", "images/bootstrap2.jpg", "images/bootstrap3.jpg"]
    }, {
        "title": "JQuery",
        "dates": "2015",
        "description": "Built a fully functional code tester using JQuery",
        "images": ["images/jquery.jpg"]
    }, {
        "title": "Bootstrap2WordPress",
        "dates": "2015",
        "description": "Created WordPress theme using Twitter Bootstrap",
        "images": ["images/bootstrap2wordpress.jpg"]
    }]
};

//Append the projects object to index.html via helper.js
projects.display = function () {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);

            }

        }
    }
}

//call our display functions here to keep things organized
bio.display();
projects.display();
work.display();
education.display();


//Append the Google Map
$("#mapDiv").append(googleMap);