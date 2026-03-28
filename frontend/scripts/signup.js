// Toggle password visibility
const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

togglePassword.addEventListener("click", () => {
  const type = passwordInput.type === "password" ? "text" : "password";
  passwordInput.type = type;
});

const form = document.getElementById("signupForm");

form.addEventListener("submit", async (e) =>{
  e.preventDefault();

  const name = document.getElementById("name").value ;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const college = document.getElementById("college").value;
  

  try{
    const response = await fetch("https://authenticationpractice.onrender.com/api/register",{
      method : "POST",
      headers : {
        "Content-Type" : "application/json",
      },
      body : JSON.stringify({
        name,
        username,
        password,
        college
      })
    })

    if (!response.ok){
      alert("Signup failed");
      return;
    }

    alert("Signup succcessful!")
    window.location.href = "signin.html"
  } catch(error){
    console.log(error);
    alert(error);
  }

})