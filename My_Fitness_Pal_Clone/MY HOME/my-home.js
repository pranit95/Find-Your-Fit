
let emailSend = document.getElementById("myhome__left_verifyEmail--link-btn")

emailSend.addEventListener('click', () => {
    emailSend.innerText = 'Email Sent!'
    emailSend.style.backgroundColor = "rgb(250,250,250)"
    emailSend.style.color = "rgb(185,185,185)"
})

let newsShare = document.getElementById("newsfeed__share-btn")
let addTaskInput = document.getElementById("newsText") 

getInfo()
newsShare.addEventListener('click', () => {
  let addTaskInputValue = document.getElementById("newsText").value;
  if(addTaskInputValue.trim()){
    var task = localStorage.getItem("addedFeed");
    if(task == null){
      taskObj = [];

    }else{
      taskObj = JSON.parse(task)
    }

    taskObj.push({addedFeed: addTaskInputValue});
    localStorage.setItem("addedFeed", JSON.stringify(taskObj))
    addTaskInput.value = ""
  } 
  getInfo()
});


 
  function getInfo(){
    var task = localStorage.getItem("addedFeed");
    if(task == null){
      taskObj = [];
    }else{
      taskObj = JSON.parse(task)
    }

    var html = ""
    var taskList = document.getElementById("myhome__blog")
    taskObj.forEach(function (item, index){
      html += `<div class="myhome__blog_photo">  
                  <div class="myhome__blog_content"  style="display:flex;">
                      <img src="./images/photo_comment.png" style="width:60px;height:60px; margin-left:-70px">
                      <div class="blog__content">
                          <div class="blog__content_heading">
                              <div style="flex-basis:90%;"><a class="blog__email" style="color:rgb(0,114,188);">pranitjogwe49200</a><span> 1 hour ago</span></div>
                              <div style="flex-basis:10%;"><button  onclick="deleteData(${index})" class="close" >&times;</button></div>
                          </div>
                          <p >${item.addedFeed}</p>
                          <div class="blog__content_like">
                              <div id="like-btn"><i class="fa fa-thumbs-o-up" ></i> Like</div>
                              <div ><i class="fa fa-comment" aria-hidden="true" style="color:rgb(137,137,137);"></i><span>  Comment</span></div>
                          </div>
                      </div>
                  </div>
                  <div style="width:100%; margin-bottom:20px ">
                    <div class="write__comment">
                      <div style="width:10%;"><img style="width:30px; height:30px; margin-left:5px;" src="./images/photo_comment.png"></div> 
                      <textarea type="text" placeholder="Write something..." style="width: 70%; height:30px;"></textarea>
                    </div>
                  </div>
              </div>`       
    })
   
   
    taskList.innerHTML = html;
}

function deleteData(index){
  var task = localStorage.getItem("addedFeed");
  var taskObj = JSON.parse(task);
  taskObj.splice(index, 1);
  localStorage.setItem("addedFeed", JSON.stringify(taskObj))
  getInfo();
}



// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x) close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

window.addEventListener('load' , () => {
  var user_info = JSON.parse(localStorage.getItem("user_info"))||[];
  console.log(user_info)
  document.getElementById("user_name").innerHTML = user_info[user_info.length - 1].name

})