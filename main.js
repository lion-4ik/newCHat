const activateBurger = ()=>{
    
    menu.classList.toggle('active')
    btn.classList.toggle('active')
}

btn.addEventListener('click', activateBurger)