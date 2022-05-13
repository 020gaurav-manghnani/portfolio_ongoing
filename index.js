 const value=document.getElementById("field1").value="gaurav";

 document.getElementById("btn").onclick=function(){
     if(value=="gaurav"){
         const value1=document.getElementById("field").value="manghnani";
         alert(value1);
     }
     else if(value!="gaurav"){
         alert("nikal");
     }
     else{
         alert("try harder");
         
     }

 }