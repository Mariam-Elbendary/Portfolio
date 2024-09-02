// const send = document.getElementById("send");

// const input = document.querySelector("input");

   
//     input.addEventListener("keyup",display);
   

//         localStorage.setItem('value', input.value);

//     console.log(localStorage.getItem('value'));


    function display(){

        const name = document.getElementById("name").value;
        const mail = document.getElementById("mail").value;
        const message = document.getElementById("message").value;
    if (name =="" || mail =="" || message ==""){
        let confirmBox = document.getElementById("servee");
        let message = confirmBox.querySelector(".message");
        confirmBox.style.display = "block"; 
        let yesButton = confirmBox.querySelector(".yes");
        confirmBox.style.display = "block"; 
        yesButton.addEventListener('click', hideyes); 
    
        function hideyes() {
            confirmBox.style.display = "none"; 
          
        }
  } else {
        let confirmBox = document.getElementById("serve");
        let message = confirmBox.querySelector(".message");
        confirmBox.style.display = "block"; 
        let yesButton = confirmBox.querySelector(".yes");
        confirmBox.style.display = "block"; 
        yesButton.addEventListener('click', hideyes); 
    
        function hideyes() {
            confirmBox.style.display = "none"; 
          
        } 
        }
    }


