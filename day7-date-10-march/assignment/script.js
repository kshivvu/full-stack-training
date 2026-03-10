const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const phoneInput = document.querySelector("#phone")
const passwordInput = document.querySelector("#password")

const nameError = document.querySelector("#nameError")
const emailError = document.querySelector("#emailError")
const phoneError = document.querySelector("#phoneError")
const strength = document.querySelector("#strength")

const form = document.querySelector("#form")
const toggle = document.querySelector("#toggle")



nameInput.addEventListener("input", () => {

    if(nameInput.value.length < 3){
        nameError.textContent = "Name must be at least 3 characters"
    }else{
        nameError.textContent = ""
    }

})
emailInput.addEventListener("input", () => {

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(!regex.test(emailInput.value)){
        emailError.textContent = "Invalid email"
    }else{
        emailError.textContent = ""
    }

})



phoneInput.addEventListener("input", () => {

    const regex = /^[0-9]{10}$/

    if(!regex.test(phoneInput.value)){
        phoneError.textContent = "Phone must be 10 digits"
    }else{
        phoneError.textContent = ""
    }

})



passwordInput.addEventListener("input", () => {

    const pass = passwordInput.value

    if(pass.length < 6){
        strength.textContent = "Weak"
        strength.style.color = "red"
    }
    else if(pass.length < 10){
        strength.textContent = "Medium"
        strength.style.color = "orange"
    }
    else{
        strength.textContent = "Strong"
        strength.style.color = "green"
    }

})


toggle.addEventListener("click", () => {

    if(passwordInput.type === "password"){
        passwordInput.type = "text"
        toggle.textContent = "Hide"
    }else{
        passwordInput.type = "password"
        toggle.textContent = "Show"
    }

})

form.addEventListener("submit", (e) => {

    e.preventDefault()

    const submission = {
        name: nameInput.value,
        email: emailInput.value,
        phone: phoneInput.value
    }

    let submissions = JSON.parse(localStorage.getItem("submissions")) || []

    submissions.push(submission)

    localStorage.setItem("submissions", JSON.stringify(submissions))

    alert("Form Submitted!")

    form.reset()

})