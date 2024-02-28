const estate = document.querySelector('#estate')
const yacht = document.querySelector('#yacht')
const goods = document.querySelector('#goods')


const present = document.querySelector('.present')
const back = document.querySelector('.back')
const services = document.querySelectorAll('[data-service]')


const estateContent = document.querySelector('#estate-content')
estate.addEventListener('click', () => {
    present.classList.toggle('active')
    estateContent.style.display = 'flex'
})

// const yachtContent = document.querySelector('#yacht-content')
// yacht.addEventListener('click', () => {
//     present.classList.toggle('active')
//     yachtContent.style.display = 'flex'
// })

const content = document.querySelector('.content')
back.addEventListener('click', () => {
    present.classList.toggle('active')
    content.style.display = 'none'

    // document.querySelector('#id11').checked = true
    // input.innerHTML = document.querySelector('#id11').nextElementSibling.querySelector('.name').innerHTML;
})

// services.forEach((item) => {
//     item.addEventListener("click", () => {
//         // input.innerHTML = item.querySelector('.service').innerHTML;
//         back.click()

//         // input.click();
//     });
// });
