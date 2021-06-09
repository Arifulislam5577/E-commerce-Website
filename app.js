let slideMenu =()=>{
    let menu = document.querySelector('.menu-wrap')
    let burger = document.querySelector('.burger')

    burger.addEventListener('click' , ()=>{
        menu.classList.toggle('active')
    })
}

slideMenu();


// Need To improve more code