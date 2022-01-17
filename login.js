function jumpNext(event,autoMove){
    var x = event.which
    if(x==13){
         document.getElementById(autoMove).focus();
    }
}

function enter(event){
    var key = event.which
    if(key==13)
    window.location.href = 'index1.html'
}

function edit(){
    let ele = document.getElementById('enter')
    ele.style.backgroundColor = 'rgb(83, 201, 142)'
    ele.style.outline = 'none'
    ele.style.transform = 'translateY(-5px)'

}

const togglePassword = document.querySelector('#togglePassword');
const togglePassword1 = document.querySelector('#togglePassword1');
var password = document.querySelector('#pass');
var password1 = document.querySelector('#pass1');

togglePassword.addEventListener('click', function (e) {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    pass.setAttribute('type', type);
    this.classList.toggle('bi-eye');
});
togglePassword1.addEventListener('click', function (f) {
    const type = password1.getAttribute('type') === 'password' ? 'text' : 'password';
    pass1.setAttribute('type', type);
    this.classList.toggle('bi-eye');
});


function check(){
    var Uname = 'Uname'
    var Pass = 'Pass'
    
  
      
          var usernameRegex= /\w{8,15}/
          var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
          var passwordRegex= /^(?=.*[0-9])(?=.*[!@#$%&*])[a-zA-Z0-9!@#$%&*]{7,15}$/
          var phonenumberRegex = /^\d{10}$/
       var username = document.getElementById('username').value
       var email = document.getElementById('email').value
       var password = document.getElementById('pass').value
       var phone = document.getElementById('phoneNumber').value
  
            
    if(usernameRegex.test(username)==true)
    { 
        if(emailRegex.test(email)==true)
        { 
            
          if(passwordRegex.test(password)==true)
          {
             if(phonenumberRegex.test(phone)==true)
                 {  
                    localStorage.setItem(Uname,username)
                    localStorage.setItem(Pass,password)
                   alert('Success!!')
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


function login(){
    var Uname = 'Uname'
    var Pass = 'Pass'
    let inp_username = document.getElementById('username').value
    let inp_pass = document.getElementById('pass').value
    let storedUname = localStorage.getItem(Uname)
    let storedPass = localStorage.getItem(Pass)
     if(inp_username == storedUname && inp_pass == storedPass)
        {
          alert('success!!')
          window.location.replace("./index2.html")
      }
      else{
          alert('Invalid username or password')
      }
  }
  


