var bio = {
    "name": "Christiana Martinez",
    "role": "Student",
    "message": "Hi! I am Christiana and I am new to Web Development.",
    "contacts": {
        "mobile": "516-993-5691",
        "email": "christiana.martinez@ymail.com",
        "github": "christianamartinez19",
        "twitter": "@crmartinez19",
        "location": "Long Beach, New York"
    },
    "skills": [
        "HTML", "CSS", "Javascript", "Python"
    ],
    "bioPic": "images/me.jpg"
};

bio.display = function() {

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    var formattedMobile = HTMLmobile.replace(/%data%/g, bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace(/%data%/g, bio.contacts.email);
    $("#topContacts").append(formattedEmail);

    var formattedGithub = HTMLgithub.replace(/%data%/g, bio.contacts.github);
    $("#topContacts").append(formattedGithub);



    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedBioPic);

    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.message);
    $("#header").append(formattedWelcomeMessage);

    if (bio.skills.length > 0) {

        $("#header").append(HTMLskillsStart);

        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);

        formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);

        formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);

        formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills").append(formattedSkill);



    }

};
// Work 

var work = {
    "jobs": [{
            "employer": "Galli",
            "title": "General Manager",
            "datesWorked": "2012-2016",
            "location": "New York City, New York ",
            "description": "Responsible for the day-to-day operations of the restaurant's payroll, invoices, accounts <br> Responsible for all social media <br> Lead coordinator for all in-house and catered events"
        },
        {
            "employer": "Forrest Partners",
            "title": "Property Manager",
            "datesWorked": "2015-2017",
            "location": "New York City, New York",
            "description": "Property Manager for a portfolio of residential and commercial buildings in the Lower East Side of Manhattan."
        }
    ]
};

work.display = function() {

    for (var job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

        var formattedJobTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

        var formattedEmployerTitle = formattedEmployer + formattedJobTitle;

        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].datesWorked);
        $(".work-entry:last").append(formattedDates);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);

    }
};

// Projects


var projects = {
    "projects": [{
        "title": "Build a Webpage!",
        "datesWorked": "2016",
        "description": "This project was one of the first projects I have ever made using HTML and CSS. I built a webpage about my 9month journey in Southeast Asia.",
        "images": ["images/southeast_asia_vacation.jpg"]
    }]
};

projects.display = function() {
    for (var project in projects.projects) {

        $("#projects").append(HTMLprojectStart);

        formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedProjectTitle);

        formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].datesWorked);
        $(".project-entry:last").append(formattedProjectDates);

        if (projects.projects[project].images.length > 0) {

            for (var image in projects.projects[project].images)
                formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
            $(".project-entry:last").append(formattedProjectImage);

        }

        formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedProjectDescription);


    }
};

// Education


var education = {
    "schools": [{
        "name": "Nassau Community College",
        "degree": "Associates Degree",
        "location": "Garden City, New York",
        "majors": [
            "Paralegal Studies"
        ],
        "datesAttended": "2009-2011"
    }, ],
    "onlineCourses": [{
            "title": "Intro to Programming Nanodegree",
            "school": "Udacity",
            "dates": "February 2017",
            "url": "https://www.udacity.com"
        },
        {
            "title": "Front-End Nanodegree",
            "school": "Udacity",
            "dates": "February 2017",
            "url": "https://www.udacity.com"
        }
    ]
};

education.display = function() {

    $("#education").append(HTMLschoolStart);

    for (var school in education.schools) {



        formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        $(".education-entry:last").append(formattedSchoolName);


        formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry:last").append(formattedSchoolDegree);



        formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].datesAttended);
        $(".education-entry:last").append(formattedDates);



        formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedSchoolLocation);

        if (education.schools[school].majors.length > 0) {

            for (var major in education.schools[school].majors) {

                formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);

                $(".education-entry:last").append(formattedSchoolMajor);
            }

        }



    }

    $(".education-entry:last").append(HTMLonlineClasses);

    for (var course in education.onlineCourses) {


        formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        $(".education-entry:last").append(formattedOnlineTitle);

        formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        $(".education-entry:last").append(formattedOnlineSchool);

        formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        $(".education-entry:last").append(formattedOnlineDates);

        formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
        $(".education-entry:last").append(formattedOnlineUrl);




    }


};

function inName(name) {
    var name1 = bio.name;
    name1 = name1.trim().split(" ");
    console.log(name1);
    name1[1] = name1[1].toUpperCase();
    name1[0] = name1[0].slice(0, 1).toUpperCase() + name1[0].slice(1).toLowerCase();

    return name1[0] + " " + name1[1];


}

$("#main").append(internationalizeButton);

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
