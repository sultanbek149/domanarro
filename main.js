const estate = document.querySelector('#estate')
const yacht = document.querySelector('#yacht')
const goods = document.querySelector('#goods')


const present = document.querySelector('.present')
const back = document.querySelector('.back')


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
})

