// user_name_profile,username,age

window.addEventListener('load' ,function(){
    var user_info = JSON.parse(localStorage.getItem("user_info"))
    console.log(user_info)
    user_info.forEach(function(item){
        document.getElementById("user_name_top").innerHTML = item.name ;
        document.getElementById("user_name_profile").innerHTML = item.name ;
        document.getElementById("age").innerHTML = "Age :  " +  Number(2020 - item.dob[2]) ;
        document.getElementById("country").innerHTML =  "Country :  " +  item.country ;
        document.getElementById("weight").innerHTML = "Weight :  " + item.weight ;
        document.getElementById("user_name").innerHTML =  "User name :  " +  item.name ;
        document.getElementById("gender").innerHTML =  "Gender :  " + item.gender ;
    })
    // document.getElementById("user_name_profile").innerHTML = 
})

// name: "archana", weight: "54", height: "190", goal_weight: "57", pin_code: "4700044",