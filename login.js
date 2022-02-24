//To focus on next element upon enter
function jumpNext(event,autoMove){
    var x = event.which
    if(x==13){
         document.getElementById(autoMove).focus();
    }
}
//To re-Window upon Enter
function enter(event){
    var key = event.which
    if(key==13)
    window.location.href = 'index1.html'
}

//To change color or Enter button pressing Enter
function edit(){
    let ele = document.getElementById('enter')
    ele.style.backgroundColor = 'rgb(83, 201, 142)'
    ele.style.outline = 'none'
    ele.style.transform = 'translateY(-5px)'

}
//toggling password to change visibility
const togglePassword = document.querySelector('#togglePassword');
const togglePassword1 = document.querySelector('#togglePassword1');
var password = document.querySelector('#pass');
var password1 = document.querySelector('#pass1');
//toggling password to change visibility
togglePassword.addEventListener('click', function (e) {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    pass.setAttribute('type', type);
    this.classList.toggle('bi-eye');
});
//toggling password to change visibility
togglePassword1.addEventListener('click', function (f) {
    const type = password1.getAttribute('type') === 'password' ? 'text' : 'password';
    pass1.setAttribute('type', type);
    this.classList.toggle('bi-eye');
});

//regex checking
const usernameRegex= /\w{8,15}/
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const passwordRegex= /^(?=.*[0-9])(?=.*[!@#$%&*])[a-zA-Z0-9!@#$%&*]{7,15}$/
const phonenumberRegex = /^\d{10}$/
const Uname='uname'
const Pass='pass'
function check(){      
      
       var username = document.getElementById('username').value
       var email = document.getElementById('email').value
       var password = document.getElementById('pass').value
       var phone = document.getElementById('phoneNumber').value
       console.log(username);
       console.log(password);
  
            
    if(usernameRegex.test(username)==true)
    { 
        if(emailRegex.test(email)==true)
        {   
          if(passwordRegex.test(password)==true)
          {
             if(phonenumberRegex.test(phone)==true)
                 {  
                    alert('Success!!')
                    //saving unsername and password in the local storage
                    localStorage.setItem(Uname,username)
                    localStorage.setItem(Pass,password)
                    //replacing location upon succesful register
                    window.location.replace("./index.html")
                   
                 }    
              else
              alert('invalid phone-number')
          }
          else
          alert('Invalid password')
        }
        else
        alert('Invalid email')
    }
    else
    alert('Invalid Username')
}

function brief(){
    alert('Username must be 8-15 chrs \n Password a min of 7chrs /with at least one Cap/Num/Special')
}

//Login checking
function login(){

    let inp_username = document.getElementById('user').value
    let inp_pass = document.getElementById('pass').value
    let storedUname = localStorage.getItem('uname')
    let storedPass = localStorage.getItem('pass')
     if((inp_username == storedUname) && (inp_pass == storedPass))
        {
          //during successful login
          alert('success!!')
          window.location.replace("./index1.html")
      }
      //during unsuccessful login
      else if((inp_username !== storedUname)&& (inp_pass !== storedPass)){
          alert('Invalid entry')
      }
  }
  


