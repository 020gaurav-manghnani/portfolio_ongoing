// // document.addEventListener("DOMContentLoaded",function(){
// //      let value1=document.getElementById("field1").value;
// //      let value2=document.getElementById("field2").value;
// //      let value3=document.getElementById("field3").value;
// // })



// // document.getElementById("btn").onclick=function(){
// //     var name =document.getElementById("field1").value;
// //     var email=document.getElementById("field2").value;
// //     var password=document.getElementById("field3").value;




// // if (name.length == 0 || email.length==0 || password.length==0) {  
// //     alert("fields are required");  
// //     name.focus(); 
// //     email.focus(); 
// //     password.focus();
// //     return false;  
// // }
// // else{
// //     location.href="portfolio.html";
// // }
// // }

// // to store user data inside local storage ....
// // we have to create an object for each user enters the detail and then pass that detail inside an array
// // so basically there will be one array which will store multiple objects consisting details of users.

// //localStorage.setItem('all_users',JSON.stringify(a));

// //setItem used to set values in an object ,where json.stringify() will comvert its value into string because localstorage
// //omly stores string value


// //if the username and passwords record exists in the LocalStorage. For this, we need to convert the user information in the form of Array of Objects to Hash-map.




// function Login()
// {
//  var a = new Array();
//  up1 = new Object();
//  up2 = new Object();
 
// up1={
//  name:"abcd@gmail.com",
//  password:btoa("abc@12")
// };
// up2={
//  name:"bcd@gmail.com",
//  password:btoa("abc@123")
// };
// a.push(up1);
// a.push(up2);
// }

// var username = document.getElementById("field1").value;
// var password = document.getElementById("field2").value;
// var email = document.getElementById("field3").value;

// localStorage.setItem('all_users',JSON.stringify(a));

// a=JSON.parse((localStorage.getItem("all_users")));
// a.push({
//     name: username,
//      password: password,
//        email:email
//     });
// localStorage.setItem('name',JSON.stringify(a));
// for(var i=0; i<a.length; i++)
//   {
//    var li = document.createElement("li");
//    li.innerHTML=a[i]['name'];
//    document.getElementById("rp").appendChild(li);
//  

//to  add item into local storage we use (setItem)

localStorage.setItem('Name','gaurav');
localStorage.setItem('surname','manghnani');

// to remove items from localstorage we use (removeItem)
localStorage.removeItem('surname');
 //to get an item from localstorage we use (getItem)
let names=localStorage.getItem('surname');
console.log(names);

// clear localstorage
localStorage.clear();

// this whole code is taking array as in input in storage and passing it as a string
let array=['my','name','is','gaurav']
localStorage.setItem('sbji',array);
let  veges=localStorage.getItem('sbji'); // without stringify() output--- my,name,is,garuav
console.log(veges);

//now to store it as an array only but not as a string will use json.stringify()

localStorage.setItem('sbji',JSON.stringify(array));// with stringify() output--[my,name,is,gaurav]
// let names=localStorage.getItem('surname');
names=JSON.parse(localStorage.getItem('sbji'));
console.log(names);

// to summary is //array to string use JSON.stringify()
                 //string to array use JSON.parse()

