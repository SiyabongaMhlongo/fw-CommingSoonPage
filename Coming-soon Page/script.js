var date = new Date("December 1, 2021 00:00:00").getTime();
    var countdownfunction = setInterval(function() {
      var today = new Date().getTime();
      var distance = date - today;  
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("demo").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";

      if (distance < 0) {
        clearInterval(countdownfunction);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);


const form = document.getElementById("form")
const email = document.getElementById("email")

form.addEventListener('submit', (e) =>{
e.preventDefault()

const emailValue = email.value.trim();

if(emailValue === ''){
  setErrorFor(email, 'Email cannont be blank');
 }else if(!validateEmail(emailValue)){
  setErrorFor(email, 'Email is not valid');
 }else{
     document.body.innerHTML= "Thank You"

 } 

function setErrorFor(input,message){
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  small.innerText = message;
  formControl.className= 'form-control error';
  
}

})

function validateEmail(email){
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

  