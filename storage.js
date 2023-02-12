function myFunction(event){
    event.preventDefault();

    let firstName = document.getElementById('first_name').value;
    let lastName = document.getElementById('last_name').value;
    let photo = document.getElementById('image_input').value;
    let about = document.getElementById('about').value;
    let email = document.getElementById('email').value;
    let phoneNumber = document.getElementById('phone').value;


    localStorage.setItem('firstName', firstName );
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('photo', photo);
    localStorage.setItem('about', about);
    localStorage.setItem('email', email);
    localStorage.setItem('phoneNumber', phoneNumber);
}


// function getValue(){
//     var storedText = localStorage.getItem("firstName");
//     if(storedText != null){
//         document.getElementById("targetFullName").innerHTML = storedText; 
//         document.getElementById("first_name").value = storedText; 
//     }
//     else
//         document.getElementById("first_name").value = '';
// }
// function store(){
//     var text = document.getElementById("first_name").value;
//     localStorage.setItem("firstName", text);
// }


// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById("first_name").onkeyup = store;
//     document.getElementById("first_name").onload = getValue();
// });

function secondPage(event){
    event.preventDefault();

    let position = document.getElementById('position').value;
    let job = document.getElementById('job').value;
    let startDate = document.getElementById('start').value;
    let endDate = document.getElementById('end').value;
    let description = document.getElementById('description').value;

    localStorage.setItem('position', position);
    localStorage.setItem('job', job);
    localStorage.setItem('startDate', startDate);
    localStorage.setItem('endDate', endDate);
    localStorage.setItem('description', description);

    localStorage.getItem('position', position);
    localStorage.getItem('job', job);
    localStorage.getItem('startDate', startDate);
    localStorage.getItem('endDate', endDate);
    localStorage.getItem('description', description);

}

function thirdPage(event){
    event.preventDefault();

    let school = document.getElementById('school').value;
    let degree = document.getElementById('degree').value;
    let schoolDate = document.getElementById('school-date').value;
    let eduDescription = document.getElementById('eduDescription').value;

    localStorage.setItem('school', school);
    localStorage.setItem('degree', degree);
    localStorage.setItem('schoolDate', schoolDate);
    localStorage.setItem('eduDescription', eduDescription);

    localStorage.getItem('school', school);
    localStorage.getItem('degree', degree);
    localStorage.getItem('schoolDate', schoolDate);
    localStorage.getItem('eduDescription', eduDescription);

}


