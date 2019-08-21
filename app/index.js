let snake = new Snake
$("keyDown", function(){
    snake.speedY =  snake.speed
    snake.speedX = 0
})
$("keyUp", function(){
    snake.speedY = -snake.speed
    snake.speedX = 0
})
$("keyRight", function(){
    snake.speedX =  snake.speed
    snake.speedY = 0
})
$("keyLeft", function(){
    snake.speedX =-snake.speed
    snake.speedY = 0
})


setInterval(() => {
    // var previousX = snake.x
    // var previousY = snake.y
    // snake.x += snake.speedX
    // snake.y += snake.speedy
    c.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight)
    snake.color += 0.02 
    snake.render()
}, 1000/60)