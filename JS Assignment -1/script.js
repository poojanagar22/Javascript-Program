let myBtn= document.getElementById("myBtn");



function fetchdata(){

    url="https://random-data-api.com/api/v2/users ";

    fetch(url).then((response)=>{

        return response.json();

    }).then((data)=>{

        console.log(data);

    })

    }

    fetchdata();