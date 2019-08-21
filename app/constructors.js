// const canvas = document.querySelector('.snake')
// canvas.width = innerWidth
// canvas.height = innerHeight
// const c = canvas.getContext('2d')
// const randomX = Math.random() * canvas.width
// const randomY = Math.random() * canvas.height
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
        this.update = () => {
            this.scaling()
            this.teleport()
            this.tiling()

        }
        this.show = () => {
            fill(`hsl(${this.color}, 50%, 50%)`)
            rect(this.x, this.y, this.sizeX, this.sizeY);
          this.tiling()
          console.log(this.color)
          for(let i = 0; i < this.tile.length; i++){
            fill(`hsl(${this.color}, 50%, 50%)`)
            rect(this.tile[i].x, this.tile[i].y, this.sizeX, this.sizeY)
          }
            noStroke()
        }
        this.teleport = () => {
          if (this.x + this.sizeX < 0 ){
            this.x = innerWidth
          }
          if (this.x > innerWidth){
            this.x =  0
          }
          if (this.y + this.sizeY < 0 ){
            this.y = innerHeight
          }
          if (this.y > innerHeight){
            this.y = 0
          }
        }
        this.scaling = () => {
            this.speed *= 1.00004
            this.x += this.speedX
            this.y += this.speedY
        this.color++
            if (this.color > 360){
                this.color = 0
            }
        }
        this.tiling = () =>  {
          this.tile.push({x: this.x, y: this.y})
          if (this.tile.length > this.length){
            this.tile.shift()
          }
        }
      }
}
