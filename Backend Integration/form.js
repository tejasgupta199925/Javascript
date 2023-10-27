document.addEventListener("DOMContentLoaded", () => {

    const buttonresponse = document.getElementById('abc')
    const reset = document.getElementById('def')
    const paste = document.getElementById('paste')
    let input1, input2

    
    // console.log(buttonresponse)

    buttonresponse.addEventListener('submit', (event) => {
        event.preventDefault()

        const form = event.target
        const i1=form.querySelector('[class="input1"]')

        const i2=form.querySelector('[class="input2"]')
        console.log(i1.value+" "+i2.value)

        if(document.getElementById('pastearea').style.display === 'none') {
            document.getElementById('pastearea').style.display = 'block'
        }

        input1 = i1.value
        input2 = i2.value
    })

    reset.addEventListener('click', event => {
        buttonresponse.reset()
        document.getElementById('pastearea').style.display = 'none'
    })

    paste.addEventListener('click', () => {
        const targetdiv = document.getElementById('pastearea')
        targetdiv.textContent = `${input1} and ${input2}`
        
    })

})