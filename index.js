 const logregBox = document.querySelector('.logreg-box');
  const loginLink = document.querySelector('.login-link');
 const registerLink = document.querySelector('.register-link'); 
        
 registerLink.addEventListener('click', () => {
      logregBox.classList.add('active')
 });
 loginLink.addEventListener('click', () => {
    logregBox.classList.remove('active')
});

/**    localStorage     **/

function myfunc(event){
     event.preventDefault();

     // sign in page
     var full_name = document.getElementById("full_name").value;
     var new_email = document.getElementById("new_email").value;
     var new_password = document.getElementById("new_password").value;

     localStorage.setItem('1s_full_name', full_name);
     localStorage.setItem('1s_new_email', new_email);
     localStorage.setItem('1s_new_password', new_password);
     alert("Hi , "+full_name+" ,WELCOME IN Premier league");
     // login page 
     var email=document.getElementById("email").value;
     var password=document.getElementById("password").value;

     if((password==new_password)&&(email==new_email)){
          alert("login successfully! ,Welcome"+full_name+"!");
     }
}



