// Toggle password visibility
const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

togglePassword.addEventListener("click", () => {
  const type = passwordInput.type === "password" ? "text" : "password";
  passwordInput.type = type;
});

const form = document.getElementById("signinForm");

form.addEventListener("submit", async (e) =>{
  e.preventDefault();

 
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
 
  

  try{
    const response = await fetch("https://authenticationpractice.onrender.com/api/login",{
      method : "POST",
      headers : {
        "Content-Type" : "application/json",
      },
      body : JSON.stringify({
      
        username,
        password
     
      })
    })

    if (!response.ok){
      alert("Signup failed");
      return;
    }

    alert("Signup succcessful!")
    window.location.href = "home.html"
  } catch(error){
    console.log(error);
    alert(error);
  }

})