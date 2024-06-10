const url = "https://api.adviceslip.com/advice"
const btn = document.querySelector(".card__btn")


function getUsers(){
    fetch(url)
     .then(response => response.json())
     .then(data => {
        idAdvice.textContent = JSON.stringify(data.slip.id)
        advice.textContent = JSON.stringify(data.slip.advice)
     })
     .catch(error => console.error(error))
}

getUsers()