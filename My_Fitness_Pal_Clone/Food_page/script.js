let container = document.getElementById("show_water_consumption")
let total_water = 0;
document.getElementById("add_water").addEventListener("click" , function(){
    // console.log(document.getElementById("water_intake").value)
    let water_intake = document.getElementById("water_intake").value
    total_water += Number(water_intake)
    let output = ""
    output += `<p style="font-size: 14px;font-weight: 700;">${total_water} cups</p>
    <div><img style=" overflow: hidden ;" src = "data:image/jpeg;base64,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" alt="glass"/></div>`
    container.innerHTML = output
})

document.getElementById("calender").addEventListener("click", function(){
    document.getElementById("main_calender").innerHTML = `<img style=" overflow: hidden ;"  src = "data:image/png;base64,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" alt = "calender" />`
})


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

window.addEventListener('load',show_food)
function show_food() {
    console.log('The page has fully loaded');
    var food_info = JSON.parse(localStorage.getItem("food_info"))||[];
    let output = ""
    var total = 0
    
    food_info.forEach(function(i,index){
        
        
        total += Number(i.cal)
        output += `<tr >
                   <td class = "food_info_td">${i.food}</td>
                   <td class = "food_info_first_td">${i.quantity}</td>
                   <td class = "food_info_third_td">${i.cal}</td>
                   <td class = "food_info_third_td">${i.carbs}</td>
                   <td class = "food_info_third_td">${i.fat}</td>
                   <td class = "food_info_third_td">${i.protein}</td>
                   <td class = "food_info_third_td">${i.sodium}</td>
                   <td class = "food_info_third_td">${i.sugar}</td>
                   <td><img style = "margin-bottom : 10px; margin-left : 30px" onClick = "delete_item(${index})" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfFXtoPSkM8Rvgk6rcrzGNbI_RonsKQ7Q8-A&usqp=CAU" height = "20px" , width = "20px"/></td>
                   </tr>
                   `
    })
    document.getElementById("show_food_info").innerHTML = output
    document.getElementById("total_food_taken").innerHTML = Number(total)
};
function delete_item(index){
    console.log(index)
    var food_info = JSON.parse(localStorage.getItem("food_info"));
    food_info.splice(index ,1)
    localStorage.setItem("food_info" , JSON.stringify(food_info));
    show_food()
}
window.addEventListener('load' , () => {
    var user_info = JSON.parse(localStorage.getItem("user_info"))||[];
    console.log(user_info)
    document.getElementById("user_name").innerHTML = user_info[user_info.length - 1].name
  
  })

