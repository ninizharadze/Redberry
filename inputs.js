
function updateFullName(e){
    /* ეს არის ელემენტი სადაც უნდა ჩავსვათ მნიშვნელობა */
    let targetFullName = document.getElementById("targetFullName");
    /* ეს არის სახელის ველის მნიშვნელობა */
    let first_name = document.getElementById('first_name').value;
    /* ეს არის გვარის მნიშვნელობა */
    let last_name = document.getElementById('last_name').value;
    /* ეს ჩასმაა მნიშვნელობის */
    targetFullName.textContent = first_name + " " + last_name;
}

function updateEmail(e){
    let targetEmail = document.getElementById("targetEmail");
    let email = document.getElementById('email').value;
    targetEmail.textContent = email;
}

function updatePhone(e){
    let targetPhone = document.getElementById("targetPhone");
    let phone = document.getElementById('phone').value;
    targetPhone.textContent = phone;
}

function updateAbout(e){
    let targetAbout = document.getElementById('targetAbout');
    let about = document.getElementById('about').value;
    targetAbout.textContent = about;
}



function updateJob(e){
    /* ეს არის ელემენტი სადაც უნდა ჩავსვათ მნიშვნელობა */
    let targetWork = document.getElementById('targetWork');
    /* ეს არის სახელის ველის მნიშვნელობა */
    let position = document.getElementById('position').value;
    /* ეს არის გვარის მნიშვნელობა */
    let job = document.getElementById('job').value;
    /* ეს ჩასმაა მნიშვნელობის */
    targetWork.textContent = position + ',' + job;
}

function updateDate(e){
    /* ეს არის ელემენტი სადაც უნდა ჩავსვათ მნიშვნელობა */
    let targetDate = document.getElementById('targetDate');
    /* ეს არის სახელის ველის მნიშვნელობა */
    let start = document.getElementById('start').value;
    /* ეს არის გვარის მნიშვნელობა */
    let end = document.getElementById('end').value;
    /* ეს ჩასმაა მნიშვნელობის */
    targetDate.textContent = start + '-' + end;
}

function updateDescription(e){
    let targetDescription = document.getElementById('targetDescription');
    let description = document.getElementById('description').value;
    targetDescription.textContent = description;
}

function updateSchool(e){
    /* ეს არის ელემენტი სადაც უნდა ჩავსვათ მნიშვნელობა */
    let targetSchool = document.getElementById('targetSchool');
    /* ეს არის სახელის ველის მნიშვნელობა */
    let school = document.getElementById('school').value;
    /* ეს არის გვარის მნიშვნელობა */
    let degree = document.getElementById('degree').value;
    /* ეს ჩასმაა მნიშვნელობის */
    targetSchool.textContent = school + ',' + degree;
}


function updateStartDate(e){
    let startdaTe = document.getElementById('targetStartDate');
    let date = document.getElementById('school-date').value;
    targetStartDate.textContent = date;
}

function updateEduDescription(e){
    let Description = document.getElementById('targeteduDescription');
    let description = document.getElementById('eduDescription').value;
    targeteduDescription.textContent = description;
}