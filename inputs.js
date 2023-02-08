
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

let loadFile = function(event){
    let image = document.getElementById('upload');
    image.src = URL.createObjectURL(event.target.files[0]);
};