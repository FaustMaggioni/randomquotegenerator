import React, { useState, useEffect } from 'react'
import { fetchQuote } from './fetchQuote.js'

const App = () => {
    const [quote, setQuote] = useState(null)
    const [quotes, setQuotes] = useState([])
    useEffect(() => {
        fetch("https://type.fit/api/quotes")
            .then(function (response) {
                const data = response.json()
                return data
            }).then((data) => {
                console.log('data: ', data)
                setQuotes(data)
            })
    }, [])

    useEffect(() => {
        newQuote()
    }, [quotes])
    const newQuote = () => {
        const index = Math.round(Math.random() * 1642);
        console.log('index')
        const q = quotes[index]
        setQuote(q)
    }
    return (
        <div>
            <h1>Random Quote Generator</h1>
            { quote ?
                (
                    <div id='quote-box'>
                        <p id='text'> {quote.text} </p>
                        <i id='author'> {quote.author} </i>
                        <button id='new-quote' onClick={newQuote}> New quote </button>
                        <a id="tweet-quote" href="twitter.com/intent/tweet"> Tweet Quote </a>
                    </div>
                ) : (
                    <div> Cargando </div>
                )
            }

        </div>
    )
}

export default App
