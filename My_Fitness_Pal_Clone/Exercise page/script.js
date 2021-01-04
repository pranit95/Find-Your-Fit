var currentDate = new Date();
var date = currentDate.getDate();
var month = currentDate.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
var year = currentDate.getFullYear();
console.log("The current date="+currentDate);

document.getElementById("date").innerHTML = currentDate.toDateString()

document.getElementById("prev_button").addEventListener("click" , function(){
    let yesterdayDate = new Date(currentDate) ;
    yesterdayDate.setDate(currentDate.getDate()- 1);
    console.log(yesterdayDate)
    console.log(yesterdayDate.toDateString())
    
    document.getElementById("date").innerHTML = yesterdayDate.toDateString()
})

document.getElementById("next_button").addEventListener("click" , function(){
    let nextDate = new Date(currentDate) ;
    nextDate.setDate(currentDate.getDate() + 1);
    console.log(nextDate)
    console.log(nextDate.toDateString())
    
    document.getElementById("date").innerHTML = nextDate.toDateString()
})
var yesterdayDate = currentDate.setDate(currentDate.getDate()- 1);
console.log("The yesterday date ="+new Date(yesterdayDate))

document.getElementById("calender").addEventListener("click", function(){
    document.getElementById("main_calender").innerHTML = `<img style=" overflow: hidden ;"  src = "data:image/png;base64,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" alt = "calender" />`
})

window.addEventListener('load',show_exercise)

function show_exercise(){
    console.log('The page has fully loaded');
    var exercise_info = JSON.parse(localStorage.getItem("exercise_info"))||[];
    console.log(exercise_info)
    let output = ""
    var total_km = 0
    var total_cal = 0 ;
    
    exercise_info.forEach(function(i,index){
        
        total_km += Number(i.km)
    
        total_cal += Number(i.cal)
        console.log(total_cal)
        output += `<tr ><td class = "exercise_info_td">${i.exercise}</td><td class = "exercise_info_first_td">${i.km}</td><td class = "exercise_info_second_td">${i.cal}</td><td><img style = "margin-bottom : 15px; margin-left : 60px" onClick = "delete_item(${index})" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfFXtoPSkM8Rvgk6rcrzGNbI_RonsKQ7Q8-A&usqp=CAU" height = "20px" , width = "20px"/></td></tr>`
    })
    document.getElementById("show_exercise_info").innerHTML = output
    document.getElementById("daily_total_km").innerHTML = Number(total_km) + " /"
    document.getElementById("daily_total_cal").innerHTML = Number(total_cal) + " /"
    document.getElementById("weekly_total_km").innerHTML = Number(total_cal) + " /"
    document.getElementById("weekly_total_cal").innerHTML = Number(total_cal) + " /"
};

function delete_item(index){
    console.log(index)
    var exercise_info = JSON.parse(localStorage.getItem("exercise_info"));
    exercise_info.splice(index ,1)
    localStorage.setItem("exercise_info" , JSON.stringify(exercise_info));
    show_exercise()
}



window.addEventListener('load' , () => {
    var user_info = JSON.parse(localStorage.getItem("user_info"))||[];
    console.log(user_info)
    document.getElementById("user_name").innerHTML = user_info[user_info.length - 1].name
  
  })