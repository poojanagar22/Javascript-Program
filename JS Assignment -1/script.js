document.getElementById('getText').addEventListener('click',getData)
       
function getData(){
 let url='https://random-data-api.com/api/v2/users'
 fetch(url)
 .then(res=>res.json())
 .then((data)=>{
     var finalData=''
     var message=''
     console.log(data)
      finalData+=` 
      <table>
         <tr>
         <td>First Name :</td>    
         <td>${data.first_name}</td>
     </tr>
     <tr>
         <td>Last Name :</td>    
         <td>${data.last_name}</td>
     </tr>
     <tr>
         <td>User Name :</td>    
         <td>${data.username}</td>
     </tr>
     <tr>
         <td>Email :</td>    
         <td>${data.email}</td>
     </tr>
     <tr>
         <td>Phone Number :</td>    
         <td>${data.phone_number}</td>
     </tr>
     <tr>
         <td>Date of Birth :</td>    
         <td>${data.date_of_birth}</td>
     </tr>
     ` 
     // document.getElementById('output').innerHTML=data.first_name;
     //JSON.stringify(fname);
     console.log(finalData)
     document.getElementById('msg').innerHTML=`Welcome "${data.first_name}" your details`
     document.getElementById('output').innerHTML=finalData 
     document.getElementById('image').innerHTML=`<img src="${data.avatar}">`
 })
 .catch((err)=>console.log(err))
}