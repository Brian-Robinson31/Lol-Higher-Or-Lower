function properString(str){
    if(str === "Kog'Maw"){
        return 'KogMaw'
    }
    if(str === "Rek'Sai"){
        return 'RekSai'
    }
    if(str === "K'Sante"){
        return 'KSante'
    }
    if(str === "Nunu & Willump"){
        return ('Nunu')
    }
    if(str === 'LeBlanc'){
        return ('Leblanc')
    }
    if(str === "Wukong"){
        return ('MonkeyKing')
    }
    if(str === 'Renata Glasc'){
        return ('Renata')
    }
    if(str === 'Dr. Mundo'){
        return('DrMundo')
    }
if (str.includes("'")){
    str = str.replace(/'/g, '');
    str = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
return str.replace(/\s+/g, '');
}

let winner;
let score = 0;
let highscore = 0;
document.getElementById('Score').textContent = `Score: ${score}                 High Score: ${highscore}`

function setScene(){
fetch('https://lol-higher-or-lower.onrender.com/api/tierlist')
    .then(response => response.json())
    .then(data => {
        const randOne = Math.floor(Math.random() * data.length)
        const randTwo = Math.floor(Math.random() * data.length)
        document.getElementById('char1').textContent = data[randOne].name
        document.getElementById('char1role').textContent = data[randOne].role
        document.getElementById('char1winrate').textContent = data[randOne].win_rate
        const charoneImg = document.getElementById('ImageOne')
        const charOneImgName = properString(data[randOne].name)
        charoneImg.src = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${charOneImgName}_0.jpg`
        document.getElementById('char2').textContent = data[randTwo].name
        document.getElementById('char2role').textContent = data[randTwo].role
        document.getElementById('char2winrate').textContent = data[randTwo].win_rate
        const charTwoImg = document.getElementById('ImageTwo')
        const charTwoImgName = properString(data[randTwo].name)
        charTwoImg.src = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${charTwoImgName}_0.jpg`

        

        oneWin = data[randOne].win_rate.replace('%', '')
        twoWin = data[randTwo].win_rate.replace('%', '')
        if(parseFloat(oneWin) > parseFloat(twoWin)){
            winner = 1
            console.log(winner)
        } else {
            winner = 2
            console.log(winner)
        }
        
    })
    .catch(error => console.error('Error:', error));
}

    function results(){
        const imgOne = document.getElementById('ImageOne')
        const imgTwo = document.getElementById('ImageTwo')
        if (winner === 1){
            imgOne.style.filter = 'sepia(1) hue-rotate(90deg) saturate(1.5)'
            imgTwo.style.filter = 'sepia(1) hue-rotate(-50deg) saturate(1.5)'
        }else {
            imgOne.style.filter ='sepia(1) hue-rotate(-50deg) saturate(1.5)'
            imgTwo.style.filter ='sepia(1) hue-rotate(90deg) saturate(1.5)'
        }
    }



    function onButton1Click(){
        const charOneWin = document.getElementById('char1winrate')
        const charTwoWin = document.getElementById('char2winrate')
        const nextButton = document.getElementById('next')
        nextButton.style.display='block'
        charOneWin.style.display = 'block'
        charTwoWin.style.display= 'block'

        if(winner === 1){
            score++
            checkHighScore()
            document.getElementById('Score').textContent = `Score: ${score}                 High Score: ${highscore}`

        } else {
            score = 0
            checkHighScore()
            document.getElementById('Score').textContent = `Score: ${score}                 High Score: ${highscore}`

        }
       
        results()
    }
    function onButton2Click(){
        const charOneWin = document.getElementById('char1winrate')
        const charTwoWin = document.getElementById('char2winrate')
        const nextButton = document.getElementById('next')
        charOneWin.style.display = 'block'
        charTwoWin.style.display= 'block'
        nextButton.style.display='block'
        if(winner === 2){
            score++
            checkHighScore()
            document.getElementById('Score').textContent = `Score: ${score}                 High Score: ${highscore}`

        } else {
            score = 0
            checkHighScore()
            document.getElementById('Score').textContent = `Score: ${score}                 High Score: ${highscore}`

        }
        results()
    }

    function nextClick(){
        const imgOne = document.getElementById('ImageOne')
        const imgTwo = document.getElementById('ImageTwo')
        const charOneWin = document.getElementById('char1winrate')
        const charTwoWin = document.getElementById('char2winrate')
        const nextButton = document.getElementById('next')
        charOneWin.style.display = 'none'
        charTwoWin.style.display = 'none'
        nextButton.style.display ='none'
        imgOne.style.filter=''
        imgTwo.style.filter=''
        
        setScene()
        
    }

    function checkHighScore(){
        if (score >= highscore){
            highscore = score
        }
    }



    setScene()

    
