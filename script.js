



function submit(){
    const button = document.querySelector("input[type='submit']")
    let email = document.querySelector("input[type='email']")
    let regex = new RegExp("[a-z0-9._-]+@[a-z._-]+\\.[a-z._-]+")
    let form = document.querySelector("form")
    form.addEventListener("submit", (event)=>{
        event.preventDefault()
        if(email.value==="" || !regex.test(email.value)){
            email.classList.add("active")
            button.disabled=true
            error()
        }else{
            // email.classList.remove("active")
        }
        setTimeout(hideerror, 4000)

    })
}
submit()

function error(){
    let msgerror=document.querySelector("form p")
    const iconerror = document.querySelector("form img")
    msgerror.classList.add("show")
    iconerror.classList.add("display")
}

function hideerror(){
    let email = document.querySelector("input[type='email']")
    let msgerror=document.querySelector("form p")
    const button = document.querySelector("input[type='submit']")
    const iconerror = document.querySelector("form img")
    msgerror.classList.remove("show")
    email.classList.remove("active")
    iconerror.classList.remove("display")
    button.disabled=false
}