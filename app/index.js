let snake
function setup () {
    createCanvas(window.innerWidth, window.innerHeight)
    snake = new Snake(30, 6)
}

function draw () {
  background(53)
  snake.update()
  snake.show()
}

function keyPressed () {
    if (keyCode === LEFT_ARROW && snake.speedX != snake.speed) {
            snake.speedX = -snake.speed
            snake.speedY = 0
    }
    if (keyCode === RIGHT_ARROW && snake.speedX != -snake.speed) {
            snake.speedX = snake.speed
            snake.speedY = 0
    }
    if (keyCode === UP_ARROW && snake.speedY != snake.speed) {
            snake.speedY = -snake.speed
            snake.speedX = 0
    }
    if (keyCode === DOWN_ARROW && snake.speedY != -snake.speed) {
            snake.speedY = snake.speed
            snake.speedX = 0
    }
}
