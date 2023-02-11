
let valid = () =>{
    let firstName = document.getElementById('first_name').value;
    let lastName = document.getElementById('last_name').value;
    let email = document.getElementById('email').value;
    let emailPattern = /^[a-zA-Z0-9.]+@redberry.ge$/;
    let phoneNumber = document.getElementById('phone').value;
    let phonePattern = /^(\+?995)?(79\d{7}|5\d{8})$/;
    let geoPatern = /^[ა-ჰ]+$/;


    if(email.match(emailPattern)){
        document.getElementById('email').style.border = '1px solid #98E37E';
        location.href = 'file:///Users/user/Desktop/რედბერი/index2.html';
         }else{
            document.getElementById('email').style.border = '1px solid #EF5050';
            
        }

    if(phoneNumber.match(phonePattern)){
        document.getElementById('phone').style.border = '1px solid #98E37E';
        location.href = 'file:///Users/user/Desktop/რედბერი/index2.html';
    }else{
        document.getElementById('phone').style.border = '1px solid #EF5050';
    }    

    if (firstName.length >2 && firstName.match(geoPatern)){
            document.getElementById('first_name').style.border = '1px solid #98E37E';
            location.href = 'file:///Users/user/Desktop/რედბერი/index2.html';
        }else{
            document.getElementById('first_name').style.border = '1px solid #EF5050';
        }
       
    if (lastName.length >2 && lastName.match(geoPatern)){
            document.getElementById('last_name').style.border = '1px solid #98E37E';
            location.href = 'file:///Users/user/Desktop/რედბერი/index2.html';
        }else{
            document.getElementById('last_name').style.border = '1px solid #EF5050';
        } 
    
}


let validExperience = () =>{
    let position = document.getElementById('position').value;
    let job = document.getElementById('job').value;
    let startDate = document.getElementById('start').value;
    let endDate = document.getElementById('end').value;
    

    if(position.length > 2){
        document.getElementById('position').style.border = '1px solid #98E37E';
        location.href = 'file:///Users/user/Desktop/რედბერი/index3.html';
        }else{
            document.getElementById('position').style.border = '1px solid #EF5050';
        }
    if(job.length > 2){
            document.getElementById('job').style.border = '1px solid #98E37E';
            location.href = 'file:///Users/user/Desktop/რედბერი/index3.html';
        }else{
        document.getElementById('job').style.border = '1px solid #EF5050';
    }

     if(startDate == ""){
        document.getElementById('start').style.border = '1px solid #EF5050';
        }else{
            document.getElementById('start').style.border = '1px solid #98E37E';
            ocation.href = 'file:///Users/user/Desktop/რედბერი/index3.html';
    }

    if(endDate == ""){
        document.getElementById('end').style.border = '1px solid #EF5050';
    }else{
        document.getElementById('end').style.border = '1px solid #98E37E';
        ocation.href = 'file:///Users/user/Desktop/რედბერი/index3.html';
    }
}

let validEdu = () =>{
    let school = document.getElementById('school').value;
    let degree = document.getElementById('degree').value;
    let schoolDate = document.getElementById('school-date').value;
    
    if(school.length > 2){
        document.getElementById('school').style.border = '1px solid #98E37E';
        location.href = '/Users/user/Desktop/რედბერი/index4.html';
        }else{
            document.getElementById('school').style.border = '1px solid #EF5050';
        }
    if(degree.length > 2){
            document.getElementById('degree').style.border = '1px solid #98E37E';
            location.href = '/Users/user/Desktop/რედბერი/index4.html';
        }else{
        document.getElementById('degree').style.border = '1px solid #EF5050';
    }

     if(schoolDate == ""){
        document.getElementById('school-date').style.border = '1px solid #EF5050';
        }else{
            document.getElementById('school-date').style.border = '1px solid #98E37E';
            location.href = '/Users/user/Desktop/რედბერი/index4.html';
    }


}