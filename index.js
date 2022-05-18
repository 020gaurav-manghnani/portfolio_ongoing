
// document.addEventListener("DOMContentLoaded",function(){

//     document.getElementById("btn").onclick= function(){
//         // console.log('Here....')
//         const value1=document.getElementById("field1").value;
//         const value2=document.getElementById("field").value;

//         if(value1.length===0 && value2.length===0 ){
//                value1.style.backgroundColor="red";
//         }
//        else if(value1.length>0 && value2.length>0){
//         // console.log('value....', value1);
//         // input.style.backgroundColor = 'green';
//             location.href="portfolio.html";
//         }
        
//     }
// })

//providing links to SVG's...


 
/////button will only be enable if all the input fields are filled

//(only username input is working as of now)

// document.getElementById('btn').disabled = true;

// document.querySelector('#field1').addEventListener('keyup', e => {
//     //Check for the input's value
//     if (e.target.value == "") {
//       document.getElementById('btn').disabled = true;
//     }
//     else {
//       document.getElementById('btn').disabled = false;
//     }
//   });

 
 // validation check for username and password

//  function validate(){
//     var nameRegex = /^[a-zA-Z\-]+$/;
//     var storedName=document.getElementById("field1").value.match(nameRegex);

//     document.getElementById("btn").onclick= function(){

//         if(storedName==null){

//             alert("Your first name is not valid. Only characters A-Z, a-z and '-' are  acceptable.");
//             return false;
//         }
//     }
    
    
//  }
//  validate();


// another way to validate input fields

    
//     document.getElementById("btn").onclick=function(){
//         var fname =document.getElementById("field1").value;
   
// //    console.log(fname);

    
//     if (fname.length == 0) {  
//         alert("Name is required");  
//         fname.focus();  
//         // return false;  
// }
//     }
 
    document.getElementById("btn").onclick=function(){

     console.log("hello");
         let user_value = document.getElementById("login_name").value;
         let pass_value = document.getElementById("login_password").value;

         let getLocalStorageUsernameValue= localStorage.getItem("username");
         
         let getLocalStoragePasswordValue= localStorage.getItem("password");

         if(user_value===getLocalStorageUsernameValue && pass_value===getLocalStoragePasswordValue){
              location.href="portfolio.html"
         }
         else{
              alert("wrong details");
         }
    }

    