const axios = require('axios')
const prompt = require('prompt-sync')()

const user = {
    username : 'Tejas',
    password : 'tejas123'
}

const guest = {
    username : 'Guest',
    password : 'guest123',
    email : 'guest987@gmail.com'
}


let choice = prompt('Enter Option ')
console.log(`Loading Data for Choice ${choice}`)

const tokenurl = 'http://localhost:8080/token'
const welcomeurl = 'http://localhost:8080/welcome'
const usersfetchurl = 'http://localhost:8080/getusers'
const signupurl = 'http://localhost:8080/signup'
let token = null

// axios.post(signupurl, guest)
// .then(data => {
//     console.log('Registered new user')
//     console.log(data.data)
// })
// .catch(error => {
//     console.log(error.message)
// })

axios.post(tokenurl, user)
.then(data => {
    return data.data
})
.then(key => {
    token = key
    console.log(`JWT Token fetched`)
    if(choice == 1) {
        console.log('Choice 1 block')
        runwelcomeapi(token)
    } else if (choice == 2) {
        console.log('Choice 2 block')
        rungetusersapi(token)
    }
})
.catch(error => {
    console.log(error.message)
    console.log("Error from 1st block")
})



function runwelcomeapi(token) {
    axios.get(welcomeurl, {
        headers : {
            'Authorization' : 'Bearer '+token.token
        }
    })
    .then(data => {
        console.log('Success')
        console.log(data.data)
    })
    .catch(error => {
        console.log(error.message)
    })
}

function rungetusersapi(token) {
    axios.get(usersfetchurl, {
        headers : {
            'Authorization' : 'Bearer '+token.token
        }
    })
    .then(data => {
        console.log(data.data)
    })
    .catch(error => {
        console.log(error.message)
    })
}