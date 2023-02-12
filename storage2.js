window.onload = function(){
    let firstName = localStorage.getItem('firstName');
    let lastName = localStorage.getItem('lastName');
    let photo = localStorage.getItem('photo');
    let about = localStorage.getItem('about');
    
    let email = localStorage.getItem('email');
    let phoneNumber = localStorage.getItem('phoneNumber');

    document.getElementById("targetFullName").innerHTML = firstName;
    document.getElementById("targetFullName").innerHTML = lastName;
    // document.getElementById("photo").innerHTML = "photo: " + photo;
    document.getElementById("targetAbout").innerHTML =  about;
    if( about != null){
        document.getElementById('about-me').style.display = 'block';
    }
    document.getElementById("targetEmail").innerHTML =  email;
    document.getElementById("targetPhone").innerHTML =  phoneNumber;


}