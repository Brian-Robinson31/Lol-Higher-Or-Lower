
fetch('http://127.0.0.1:5000/api/tierlist')
    .then(response => response.json())
    .then(data => {
        const randOne = Math.floor(Math.random() * data.length)
        const randTwo = Math.floor(Math.random() * data.length)
        console.log(randOne)
        console.log(randTwo)
        console.log(data);
        console.log(data[randOne].name)
        console.log(data[randOne].role)
        console.log(data[randOne].win_rate)
        console.log('Versus')
        console.log(data[randTwo].name)
        console.log(data[randTwo].role)
        console.log(data[randTwo].win_rate)
        
    })
    .catch(error => console.error('Error:', error));
