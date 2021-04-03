document.getElementById("add_exercise").addEventListener("click" , function(){
    document.getElementById("exercise_show").textContent = "Exercise have been added"
    let output = "";
    output = `<div id="adding">
    <div style="display: flex;padding-left : 60px;font-size : 15px ; font-weight : bold ;width : 300px;"><p style="text-align: center;">Adding:<p>${document.getElementById("exercise_input").value}</p></p></div>
    <div style="display: flex;padding-left : 60px;"><p>How Long ?</p><input type="text" id="how_long"/></div>
    <div style="display: flex;padding-left : 60px;"><p>Calories Burned : </p><input type="text" id="calories_burned"/></div>
    <p>If you know how many calories you burned(eg: froem a machine at<br/> the gym), manually enter that value above</p>
    <button class="search_exercise_button" id="exercise_added">ADD EXERCISE</button>
    </div>`
    document.getElementById("exercise_container").innerHTML = output
    document.getElementById("exercise_information").innerHTML = `<li>${document.getElementById("exercise_input").value}</li>`
 
    document.getElementById("exercise_added").addEventListener("click",function(){
        var exercise_info = JSON.parse(localStorage.getItem("exercise_info"))||[]
        exercise_info.push({exercise : document.getElementById("exercise_input").value ,km :document.getElementById("how_long").value , cal:document.getElementById("calories_burned").value})
        console.log(exercise_info)
        localStorage.setItem("exercise_info" , JSON.stringify(exercise_info))
    })
})


