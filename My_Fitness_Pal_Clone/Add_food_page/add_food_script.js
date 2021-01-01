// document.getElementById("down_arrow").addEventListener("click" , function(){
//     let output = "" ;
//     output = 
// })


document.getElementById("add_food_button").addEventListener("click" , function(){
    document.getElementById("exercise_show").textContent = "Some Food have been added"
    let output = "";
    output = `<div id="adding">
    <div style="display: flex;padding-left : 60px;font-size : 15px ; font-weight : bold ;"><p style="text-align: center;">Name of the meal:<p>${document.getElementById("food_input").value}</p></p></div>
    <div style="display: flex;padding-left : 60px;"><p>How Much ?</p><input type="text" id="how_much"/></div>
    <div style="display: flex;padding-left : 60px;"><p>To Which Meal : </p><input type="text" id="which_meal"/></div>
    <div style="display: flex;"><button class="food_container__search_button" id="food_added" style="padding:10px 25px ;margin-top: 20px;">ADD Food To Diary</button><button class="food_container__search_button" style="padding:10px 25px ;margin-left: 90px;margin-top: 20px;">Nutrition Info</button></div>
    </div>`
    document.getElementById("food_form_container").innerHTML = output
    document.getElementById("food_information").innerHTML = `<li>${document.getElementById("food_input").value}</li>`
 
    document.getElementById("food_added").addEventListener("click",function(){
        var food_info = JSON.parse(localStorage.getItem("food_info"))||[]
        food_info.push({food : document.getElementById("food_input").value ,
                        quantity :document.getElementById("how_much").value ,
                        meal_name :document.getElementById("which_meal").value,
                        carbs : 0,
                        fat:0,
                        protein : 0,
                        sodium : 0,
                        sugar:0,
                        cal:125})
        console.log(food_info)
        localStorage.setItem("food_info" , JSON.stringify(food_info))
    })
})