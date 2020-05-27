let snake = ''
let game = new Game()
let feed
function setup () {
    createCanvas(window.innerWidth, window.innerHeight)
    snake = new Snake(300, 10, game)
        feed = new Feed(game)

}
let floating = document.querySelectorAll('.floating')

setTimeout(() => {
        
        floating.forEach(elem => {
                elem.style.display = 'none'
        })
}, 7500);

function keyPressed () {
    if (keyCode === LEFT_ARROW && snake.speedX === 0) {
            snake.speedX = -snake.speed
            snake.speedY = 0
    }
    if (keyCode === RIGHT_ARROW && snake.speedX === 0) {
            snake.speedX = snake.speed
            snake.speedY = 0
    }
    if (keyCode === UP_ARROW && snake.speedY === 0) {
            snake.speedY = -snake.speed
            snake.speedX = 0
    }
    if (keyCode === DOWN_ARROW && snake.speedY === 0) {
            snake.speedY = snake.speed
            snake.speedX = 0
    }
}
let mx 
let my
let direction
function touchStarted() {
        mx = mouseX
        my = mouseY

}

function touchEnded (){
        if (Math.abs(mx - mouseX) > Math.abs(my - mouseY))
        {
                direction = mx > mouseX ? 'left' : 'right'
        }else if (Math.abs(mx - mouseX) < Math.abs(my - mouseY))
        {
                direction = my < mouseY ? 'down' : 'up'
        }
        if (direction === 'left' && snake.speedX===0) {
            snake.speedX = -snake.speed
            snake.speedY = 0
        }
        if (direction === 'right'  && snake.speedX===0) {
                snake.speedX = snake.speed
                snake.speedY = 0
        }
        if (direction === 'up'  && snake.speedY===0) {
                snake.speedY = -snake.speed
                snake.speedX = 0
        }
        if (direction === 'down'  && snake.speedY===0) {
                snake.speedY = snake.speed
                snake.speedX = 0
        }
}
function draw () { 
        background(53)
        if(!game.hasFeed){feed.show()}
        for(let i = 0; i <= ppi**2; i++){
        feed.update()
        }
        snake.encounter(feed, game)
        for(let i = 0; i <= ppi**2; i++){
        snake.update()
        }
        snake.show()

}
