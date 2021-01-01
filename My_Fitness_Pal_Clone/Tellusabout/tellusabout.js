document.getElementById("sign_up_button").addEventListener("click", function(){
    let info = JSON.parse(localStorage.getItem("user_info")) || [];
    info.push({name : document.getElementById("user_name").value,
                weight : document.getElementById("user_weight").value,
                height : document.getElementById("user_height").value,
                goal_weight : document.getElementById("user_goal_weight").value,
                pin_code : document.getElementById("user_pin_code").value,
                country : document.getElementById("user_country").value,
                gender : document.getElementById("user_gender").value,
                dob : [document.getElementById("dob_date").value , document.getElementById("dob_month").value , document.getElementById("dob_year").value],
                }) 
        localStorage.setItem("user_info" , JSON.stringify(info))  
        console.log(info)        
 })