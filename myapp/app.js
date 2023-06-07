const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Go to /number/:num to check if :num is prime or composite')
})

app.get('/number/:num', (req, res) => {
    let isPrime = "true";
    let num = req.params.num;
    if(num < 0) {
        isPrime = "negative";
    } else if(num == 1) {
        isPrime = 1;
    } else if(num > 1) {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                isPrime = "false";
                break;
            }
        }
    }
    
    if (isPrime === "true") {
        res.send(`Number ${num} is prime`);
    } else if (isPrime === "false") {
        res.send(`Number ${num} is composite`);
    } else if (isPrime === "negative") {
        res.send(`Number ${num} is negative`);
    } else if (isPrime === 1) {
        res.send(`Number ${num} is neither prime nor composite`);
    }
})

app.listen(port, () => {
    console.log(`Express Server has started on Port ${port}`);
})