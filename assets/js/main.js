const url = "https://api.adviceslip.com/advice"

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