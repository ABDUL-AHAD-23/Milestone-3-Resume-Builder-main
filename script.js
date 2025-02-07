// Form Display
var form = document.getElementById('resume-form');
var displayElement = document.getElementById('resume-display');
// Result of Form Submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Page Reload 
    //  Collect Input Values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Generate Resume 
    var resumeHtml = "\n    <h2><b>Resume</b></h2>\n\n    <h3>Personal Information</h3>\n\n    <p><b>Name:</b>".concat(name, "</p>\n    <p><b>Email:</b>").concat(email, "</p>\n    <p><b>Phone Number:</b>").concat(phone, "</p>\n\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p>").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n    ");
    // Generated Resume Display 
    if (displayElement) {
        displayElement.innerHTML = resumeHtml;
    }
    else {
        console.error('The resume display element is missing');
    }
});
