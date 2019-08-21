/* eslint-disable no-undef */
const snake = new Snake(10, 8)
// eslint-disable-next-line no-undef
$('keyDown', function () {
    if (!(snake.speedY < 0)) {
    snake.speedY = snake.speed
    snake.speedX = 0
    }
})
$('keyUp', function () {
    if (!(snake.speedY > 0)) {
        snake.speedY = -snake.speed
        snake.speedX = 0
    }
})
$('keyRight', function () {
    if (!(snake.speedX < 0)) {
    snake.speedX = snake.speed
    snake.speedY = 0
    }
})
$('keyLeft', function () {
    if (!(snake.speedX > 0)) {
    snake.speedX = -snake.speed
    snake.speedY = 0
    }
})

setInterval(() => {
    // var previousX = snake.x
    // var previousY = snake.y
    // snake.x += snake.speedX
    // snake.y += snake.speedy
    c.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight)
    snake.color += 0.02
    snake.render()
    for (let i = 0; i < 5; i++) {
        const feed = new Feed(true, 'simple')
        feed.render()
    }
}, 1000 / 60)
