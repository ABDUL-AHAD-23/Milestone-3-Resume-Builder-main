// Form Display

const form = document.getElementById('resume-form') as HTMLFormElement

const displayElement = document.getElementById('resume-display') as HTMLDivElement

// Result of Form Submission

form.addEventListener ('submit' , (event : Event) => {
    event.preventDefault(); // Page Reload 

    //  Collect Input Values

    const name = (document.getElementById ('name') as HTMLInputElement).value
    const email = (document.getElementById ('email') as HTMLInputElement).value
    const phone = (document.getElementById ('phone') as HTMLInputElement).value
    const education = (document.getElementById ('education') as HTMLInputElement).value
    const experience = (document.getElementById ('experience') as HTMLInputElement).value
    const skills = (document.getElementById ('skills') as HTMLInputElement).value

    // Generate Resume 

    const resumeHtml = `
    <h2><b>Resume</b></h2>

    <h3>Personal Information</h3>

    <p><b>Name:</b>${name}</p>
    <p><b>Email:</b>${email}</p>
    <p><b>Phone Number:</b>${phone}</p>

    <h3>Education</h3>
    <p>${education}</p>

    <h3>Experience</h3>
    <p>${experience}</p>

    <h3>Skills</h3>
    <p>${skills}</p>
    `;

    // Generated Resume Display 

    if(displayElement){
        displayElement.innerHTML = resumeHtml;
    }
    else {
     console.error('The resume display element is missing')
    }

});


