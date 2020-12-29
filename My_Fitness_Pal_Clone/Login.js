
       
       
       var username = document.getElementById("signup")
        var password = document.getElementById("pass")
        var form = document.getElementById('form')

        function validation(){
            if(username.value == ""){
                alert("should fill")
            }
            else{
                prompt("fill")
            }
        }
        body.addEventListener("onsubmit",validation)



