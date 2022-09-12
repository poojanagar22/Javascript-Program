var modal=document.querySelector("#myModal")
var modalbtn=document.querySelectorAll(".card-modal-open-button")
var span=document.getElementsByClassName('close')[0]
modalbtn.forEach((btn)=>{
    btn.addEventListener('click',(event)=>{
      const target= event.currentTarget; 
      const url=target.getAttribute('data-url');
      console.log(url)
      modal.style.display="block";
      modal.querySelector('iframe').setAttribute('src',url)
    })
})

span.addEventListener('click',()=>{
    modal.style.display="none";
    modal.querySelector('iframe').setAttribute('src','')
})
window.addEventListener('click',(event)=>{
    if(event.target==modal)
    modal.style.display="none";  
})


