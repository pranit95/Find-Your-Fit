
       
       
      
        var form = document.getElementById('form')
        var signup = document.getElementById('signup')

        function validation(){
            var username = document.getElementById("signup").value
            var password = document.getElementById("pass").value
            localStorage.setItem('username',username)
            localStorage.setItem('password',password)
            if(username == "chinna"){
                alert("should fill")
                if(password == "123456"){
                    alert("sucess")
                }
            }
            else{
                prompt("fill")
            }
        }
        // .addEventListener("onsubmit",validation)

        // var fbbtn = document.getElementById('fb')

        // function facebook(){
        //     prompt("Login With Your FaceBook Details")
        // }
        // fbbtn.addEventListener('click', facebook)



        // document.getElementById("signup")("pass").addEventListener("click",function(){
        //     var signup = JSON.parse(localStorage.getItem("signup"))||[]
        //     signup.push({email :document.getElementById("email").value , 
        //     password:document.getElementById("password").value})
        //     localStorage.setItem("signup" , JSON.stringify(signup))
        // })



