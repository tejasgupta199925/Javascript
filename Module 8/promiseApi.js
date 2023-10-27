const axios = require('axios')

const header = {
    'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBZG1pbiIsImlhdCI6MTY5NTQ3ODMyOSwiZXhwIjoxNjk1NTE0MzI5fQ.8_73r6WNPINJx_mw7aR_m9mg-Nc7Utie6l7UyJQr9vg'
}

const config = {
    headers : header,
}

// axios.get('https://api.nasa.gov')
axios.get(`http://localhost:8080/getusers`, config)
.then(response => {
    if(response.status === 200){
        return response
    }
    else{
        console.log(response)
        throw new Error('Api request failed')
    }
})
.then(data => {
    console.log(data.data)
})
.catch(error => {
    console.log(error)
})

console.log('GoodBye')