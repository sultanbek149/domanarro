


const form = document.querySelector('#form')

const username = document.querySelector('#username')
const contacts = document.querySelector('#contacts')
const city = document.querySelector('#city')
const rooms = document.querySelector('#rooms')
const period = document.querySelector('#period')
const date = document.querySelector('#date')
const amount = document.querySelector('#amount')
const floor = document.querySelector('#floor')
const citizen = document.querySelector('#citizen')
const info = document.querySelector('#info')


form.addEventListener('submit', function (e) {
    e.preventDefault()
    sendMessage()
})


const modal = document.querySelector('#open-modal')

function sendMessage() {

    const text = `Данные с сайта: %0A<b>Имя:</b> <i>${username.value}</i> %0A<b>Контакты:</b> <i>${contacts.value}</i>%0A<b>Страна | Город | Район:</b> <i>${city.value}</i> %0A<b>Комнаты:</b> <i>${rooms.value}</i> %0A<b>Период аренды:</b> <i>${period.value}</i> %0A<b>Период аренды:</b> <i>${date.value}</i> %0A<b>Дата заселения:</b> <i>${date.value}</i> %0A<b>Количество людей:</b> <i>${amount.value}</i> %0A<b>Этажность:</b> <i>${floor.value}</i> %0A<b>Гражданство:</b> <i>${citizen.value}</i> %0A<b>Доп. информация:</b> <i>${info.value}</i>`



    const t = "7128441159:AAGUCoQcKXxMPd3eEzNeK5HTbzQYbzVw8GQ"
    const cid = -4156580536
    const url = `https://api.telegram.org/bot${t}/sendMessage?chat_id=${cid}&text=${text}&parse_mode=html`


    const xhr = new XMLHttpRequest();

    // Handle the 'load' event for successful completion of the request    

    if (!window.navigator.onLine) return alert("Прошу проверьте свое интернет соединение!!!")


    xhr.open("GET", url, true);
    xhr.send();

    modal.classList.toggle('active')

    setTimeout(() => {
        modal.classList.toggle('active')
    }, 3000)

    reset()
}

function reset() {
    username.value = ""
    contacts.value = ""
    city.value = ""
    rooms.value = ""
    period.value = ""
    date.value = ""
    amount.value = ""
    floor.value = ""
    citizen.value = ""
    info.value = ""
}

