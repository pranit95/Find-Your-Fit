window.addEventListener('load' ,function(){
    var user_info = JSON.parse(localStorage.getItem("user_info"))
    console.log(user_info)
    for(i in user_info){
        // document.getElementById("user_name_top").innerHTML = user_info[i].name ;
        document.getElementById("user_name_profile").innerHTML = user_info[i].name ;
        document.getElementById("age").innerHTML = "Age :  " +  Number(2020 - user_info[i].dob[2]) ;
        document.getElementById("country").innerHTML =  "Country :  " +  user_info[i].country ;
        document.getElementById("weight").innerHTML = "Weight :  " + user_info[i].weight ;
        document.getElementById("user_name").innerHTML =  user_info[i].name ;
        document.getElementById("gender").innerHTML =  "Gender :  " + user_info[i].gender ;
    }
    // user_info.forEach(function(user_info[i]){
        
    // })
})