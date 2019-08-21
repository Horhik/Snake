const canvas = document.querySelector('.snake')
canvas.width = innerWidth
canvas.height = innerHeight
const c = canvas.getContext('2d')
const randomX = Math.random() * canvas.width
const randomY = Math.random() * canvas.height
// eslint-disable-next-line no-unused-vars
class Snake {
    constructor (len, speed) {
        this.x = window.innerWidth / 2
        this.y = window.innerHeight / 2
        this.head = {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
        }
        this.sizeX = 20 // with textures 55.5
        this.sizeY = 20 // with textures 62.5
        this.color = 0
        this.tile = []
        this.length = len
        this.speed = speed
        this.speedX = 0
        this.speedY = 0
        this.img = new Image(100, 100)
        this.img.src = 'sprites.png'
        this.texture = {
            small: {
                head: [this.img, 208, 62, 18, 30],
                body: [this.img, 208, 112, 18, 30],
                tile: [this.img, 160, 120, 18, 30]
            },
            middle: {
                head: '../src/img/middle-head',
                body: '../src/img/middle-body',
                tile: '../src/img/middle-tile'
            },
            big: {
                head: '../src/img/big-head',
                body: '../src/img/big-body',
                tile: '../src/img/big-tile'
            }
        }
        this.render = () => {
            this.color++
            this.x += this.speedX
            this.y += this.speedY
            c.fillStyle = `hsl(${this.color}, 50%, 50%)`
            for (var i = 0; i < this.tile.length; i++) {
                // if (i === 0) {
                // c.drawImage(...this.texture.small.tile, this.tile[i].x, this.tile[i].y + 60, this.sizeX, this.sizeY)
                // } else if (i === this.tile.length - 1) {
                //   c.drawImage(...this.texture.small.head, this.tile[i].x, this.tile[i].y, this.sizeX, this.sizeY)
                // } else {
                // c.rotate(Math.PI)
                // c.drawImage(...this.texture.small.body, this.tile[i].x, this.tile[i].y + 25, this.sizeX, this.sizeY)
                c.fillStyle = `hsl(${this.color}, 50%, 50%)`
                c.fillRect(this.tile[i].x, this.tile[i].y, this.sizeX, this.sizeY)

                this.showHide()
            // }
        }
            this.tile.push({ x: this.x, y: this.y })
            if (this.tile.length > this.length) {
                this.tile.shift()
            }
        }
        this.showHide = (x, y) => {
            // checking left border
            if (this.x > canvas.width) {
                this.x = 0 - this.speedX
            }
            // checking right border
            if (this.x + this.sizeX < 0) {
                this.x = canvas.width - this.sizeX - this.speedX
            }
            // checking bottom border
            if (this.y > canvas.height) {
                this.y = -this.speedY
            }
            // checking top border
            if (this.y + this.sizeY < 0) {
                console.log(this.y)
                this.y = canvas.height - this.sizeY
            }
        }
        c.fillStyle = `hsl(${this.color}, 50%, 50%)`
        c.fillRect(this.x, this.y, this.sizeX, this.sizeY)
    }
}
const Feed = function (type, kind = false) {
    this.temper = type
    this.kind = kind
    if (this.temper === true) {
        if (kind === 'simple') {
            this.color = 'green'
            this.baff = 1
            this.radius = 15
        } else if (kind === 'taste') this.baff = 5
    }
    this.render = () => {
        function draw () {
            fill(90)
            ellipse(200, 200, this.radius, this.radius)
        }
    }
}
// -- == === =!= != -> >= <= () {} {||} [||] && || {} [] *** ** * 🃔  ♂
