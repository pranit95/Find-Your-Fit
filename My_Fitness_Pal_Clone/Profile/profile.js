window.addEventListener('load' ,function(){
    var user_info = JSON.parse(localStorage.getItem("user_info"))
    console.log(user_info)
   
        // document.getElementById("user_name_top").innerHTML = user_info[user_info.length - 1].name ;
        document.getElementById("user_name_profile").innerHTML = user_info[user_info.length - 1].name +"'s" +" Profile" ;
        document.getElementById("age").innerHTML = "Age :  " +  Number(2020 - user_info[user_info.length - 1].dob) ;
        document.getElementById("country").innerHTML =  "Country :  " +  user_info[user_info.length - 1].country ;
        document.getElementById("weight").innerHTML = "Weight :  " + user_info[user_info.length - 1].weight ;
        document.getElementById("user_name").innerHTML = user_info[user_info.length - 1].name
        document.getElementById("gender").innerHTML =  "Gender :  " + user_info[user_info.length - 1].gender ;
    
    // user_info.forEach(function(user_info[i]){
        
    // })
})


window.addEventListener('load' , () => {
    var user_info = JSON.parse(localStorage.getItem("user_info"))||[];
    console.log(user_info)
    document.getElementById("user_name").innerHTML = user_info[user_info.length - 1].name
  
  })