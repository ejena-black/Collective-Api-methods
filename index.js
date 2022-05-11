const url       = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes'
      fetchBtn  = document.querySelector('#fetch')
      xhrBtn    = document.querySelector('#xhr')
      aixosBtn  = document.querySelector('#axios')
      quote     = document.querySelector('#quote')

// for XHR
xhrBtn.addEventListener('click', () => {
    let XHR = new XMLHttpRequest
    XHR.onreadystatechange = () => {
        if(XHR.readyState == 4 && XHR.status == 200){
            let newQuote = JSON.parse(XHR.responseText)
            quote.innerText = newQuote
        }
    }

    XHR.open('GET', url)
    XHR.send()
})



// for jquery
$('#jquery').on('click', () => {
    $.get(url)
    .done((res) => {
        $('#quote').text(res)
    })
    .fail()
})




// for Fetch
fetchBtn.addEventListener('click', () => {
    fetch(url)
    .then(handleErrors)
    .then(parseJSON)
    .then(updateQuote)
    .catch(showError)
})

function parseJSON(res){
    return res.json()
}

function handleErrors(res){
    if(!res.ok){
        throw Error(res.status)
    }
    return res
}

function updateQuote(data){
    quote.innerText = data
}

function showError(err){
    console.log(err)
}



// for Axios
aixosBtn.addEventListener('click', () => {
    axios.get(url)
    .then(function(res){
        quote.innerText = res.data
    })
    .catch(showError)
})