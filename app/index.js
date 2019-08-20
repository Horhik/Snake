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
    snake.x += snake.speedX
    snake.y += snake.speedY
    snake.color++
    snake.render()
}, 10);