let btn = document.getElementById("headbtn")
  window.addEventListener("scroll" , function(){
    if(document.body.scrollTop>400 || document.documentElement.scrollTop>400){
       btn.classList.add('d-block')
       btn.classList.remove('d-none')
    }
    else if (document.body.scrollTop<400 || document.documentElement.scrollTop<400){
        btn.classList.remove('d-block')
       btn.classList.add('d-none')
    }
  })





let form = document.querySelector('#my-form')

function nameValidation(input){
    console.log(input);
    let inputValue = input.value.trim();

    // let inputType = parseInt(input.value.trim())
    
     
    if(inputValue.length > 2){
        // input.nextElementSibling.innerText = ""
        handleError(input)
    }
    else {
        
        handleError(input ,  "minimum 3 character")
    }
    (isNaN(parseInt(input.value))) ? console.log("not a number")   : input.nextElementSibling.innerText="number not valid in name"
}


function emailValidation(input){
       let reg =  new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
   // var reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if(reg.test(input.value)){
        handleError(input)
      }
      else {
        handleError(input , "invalid email")
      }
    }
    
function passwordValidation(input){
        var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        console.log(strongRegex.test(input.value))
        if(strongRegex.test(input.value)){
            handleError(input)
        }
        else  handleError(input, "must enter at least 1 lowercase letter , 1 uppercase letter , 1 number , 1 special character ......")
    }
    

function handleError(element , msg = ""){
    element.nextElementSibling.innerText = msg
}


form.addEventListener('input', function (e) {
    // console.log('typing.........')
    // console.log(e.target.name)

    switch (e.target.name) {
        case "userName":
            nameValidation(e.target)
            break;
        case 'userEmail':
             emailValidation(e.target)
             break;
        case 'userPassword':
             passwordValidation(e.target)
             break;
    } 
})


form.addEventListener('submit' , function(e){
    e.preventDefault()
    console.log(e.target.elements.userName.value)
    if(e.target.elements.userName.value == ""){
        e.target.elements.userName.nextElementSibling.innerText="this feild required"
    }
    if(e.target.elements.userEmail.value ==""){
        e.target.elements.userEmail.nextElementSibling.innerText="this feild required"
    }
    if(e.target.elements.userPassword.value ==""){
        e.target.elements.userPassword.nextElementSibling.innerText="this feild required"
    }
})




