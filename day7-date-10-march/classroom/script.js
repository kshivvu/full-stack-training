let input=document.querySelector("#input")
let comment=document.querySelector("#comment")


input.addEventListener("input",()=>{
    if(input.value.length<6){
        comment.textContent="password length must be atleast 6"
        comment.style.color="red";
    }else{
        comment.textContent="strong"
        comment.style.color="green"
    }
})