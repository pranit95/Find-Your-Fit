window.addEventListener('load',executedata)


let output = ""

function executedata(){
  let myhome = document.getElementById("myhome")
  let addedFeed = JSON.parse(localStorage.getItem("addedFeed"))
  if(addedFeed === null) console.log("No data is feeded")
  else{
    for(i in addedFeed){
      output += ` <div class="myhome__blog_photo">
                    
                  </div>
                  <div class="myhome__blog_content">
                    <div class="blog__content">
                        <div class="blog__content_heading">
                            <div style="flex-basis:90%;"><a class="blog__email" style="color:rgb(0,114,188);">pranitjogwe49200</a><span> 1 hour ago</span></div>
                            <div style="flex-basis:10%;"><span class="close" >&times;</span></div>
                        </div>
                        <p >${addedFeed[i].blog_info}</p>
                        <div class="blog__content_like">
                            <div id="like-btn"><i class="fa fa-thumbs-o-up" ></i> Like</div>
                            <div ><i class="fa fa-comment" aria-hidden="true" style="color:rgb(137,137,137);"></i><span>  Comment</span></div>
                        </div>
                    </div>
                    <div class="write__comment">
                        <a></a> 
                        <input type="text" placeholder="Write something..." style="width: 90%; height:30px;"></input>
                    </div>
                  </div>`
    }

    myBlog.innerHTML = output;
   
  }
}

let emailSend = document.getElementById("myhome__left_verifyEmail--link-btn")

emailSend.addEventListener('click', () => {
    emailSend.innerText = 'Email Sent!'
    emailSend.style.backgroundColor = "rgb(250,250,250)"
    emailSend.style.color = "rgb(185,185,185)"
})

let newsShare = document.getElementById("newsfeed__share-btn")
let myBlog = document.getElementById("myhome__blog") 


newsShare.addEventListener('click', () => {
  

  let addedFeed = JSON.parse(localStorage.getItem("addedFeed")) || []
   addedFeed.push({blog_info: document.getElementById("newsText").value})
   localStorage.setItem("addedFeed", JSON.stringify(addedFeed)) 
   let added_info = JSON.parse(localStorage.getItem("addedFeed"))
   let len = added_info.length
   
  function getInfo(){
   let afterAdding = `<div class="myhome__blog_photo">
                    <a></a>
                  </div>
                  <div class="myhome__blog_content">
                    <div class="blog__content">
                        <div class="blog__content_heading">
                            <div style="flex-basis:90%;"><a class="blog__email" style="color:rgb(0,114,188);">pranitjogwe49200</a><span> 1 hour ago</span></div>
                            <div style="flex-basis:10%;"><span class="close" >&times;</span></div>
                        </div>
                        <p >${added_info[len-1].blog_info}</p>
                        <div class="blog__content_like">
                            <div id="like-btn"><i class="fa fa-thumbs-o-up" ></i> Like</div>
                            <div ><i class="fa fa-comment" aria-hidden="true" style="color:rgb(137,137,137);"></i><span>  Comment</span></div>
                        </div>
                    </div>
                    <div class="write__comment">
                        <a></a> 
                        <input type="text" placeholder="Write something..." style="width: 90%; height:30px;"></input>
                    </div>
                  </div>`
   
    myBlog.innerHTML = output + afterAdding;
    // document.getElementById("newsText").textContent = ""
}

getInfo(added_info)
})


//     document.getElementById("like-btn").addEventListener("click", ()=>{
//       document.getElementById("like-btn").style.color = "rgb(0,112,191)"
//       document.getElementById("like-btn").innerHTML = " Unlike"
    
  
//     })
  
// })

 

// // function getBlog(){

// // }

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
