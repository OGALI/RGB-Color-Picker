var colors = generateColorArray(6)
var pickedColor = randomColor()
var squares = document.querySelectorAll('.square')
var colorDisplay = document.querySelector('#rgb')
var message = document.querySelector('#message')
var h1 =document.querySelector('h1')
var button = document.querySelector('#reset')
var easybtn = document.querySelector('#easy')
var hardbtn = document.querySelector('#hard')
var currentDiff = 6

easybtn.addEventListener('click', function(){
    currentDiff = 3
    this.classList.add('selected')
    hardbtn.classList.remove('selected')
    colorDisplay.textContent = pickedColor
    for (let i = 3; i < squares.length; i++) {
        squares[i].style.display = 'none'
    }
    reset(currentDiff)
})
hardbtn.addEventListener('click', function(){
    currentDiff = 6
    this.classList.add('selected')
    easybtn.classList.remove('selected')

    for (let i = 0; i < squares.length; i++) {
        squares[i].style.display = 'block'
    }
    reset(currentDiff)
})


reset(currentDiff)

button.addEventListener('click', function(){
    reset(currentDiff)
})


function reset(numColors){
    message.textContent = ''
    colors = generateColorArray(numColors)
    pickedColor = randomColor()

    colorDisplay.innerHTML = pickedColor
    for(var i=0; i < squares.length; ++i){
        squares[i].style.backgroundColor = colors[i]
        squares[i].addEventListener('click', function(){
            var clickedColor = this.style.backgroundColor
            if(pickedColor == clickedColor){
                correct()
                message.textContent = 'Correct'
            }else{
                this.style.backgroundColor = '#232323'
                message.textContent = 'Incorrect'
            }
        })
    }
    h1.style.backgroundColor = 'steelblue'
}

function correct(){
    for(var i=0; i < squares.length; ++i){
        squares[i].style.backgroundColor = pickedColor
    }
    h1.style.backgroundColor = pickedColor
}

function randomColor(){
    randomNumber = Math.floor(Math.random()*colors.length)
    return colors[randomNumber]
}

function generateColorArray(length){
    var colors = []
    for(var i=0; i< length; ++i){
        rgb1 = Math.floor(Math.random()*256)
        rgb2 = Math.floor(Math.random()*256)
        rgb3 = Math.floor(Math.random()*256)
        color = 'rgb(' + rgb1 + ', ' + rgb2 + ', ' + rgb3 + ')'
        colors.push(color)
    }
    return colors

}