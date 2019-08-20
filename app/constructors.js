
const canvas = document.querySelector('.snake')
canvas.width = innerWidth
canvas.height = innerHeight
const c = canvas.getContext('2d')
let ἅ = 0
let  = 9 

const Snake = function () {
    this.x = window.innerWidth/2
    this.y = window.innerHeight/2
    this.sizeX = this.sizeY = 30
    this.color = 0
    this.tile = []
    this.length = 1
    this.speed = 10
    this.speedX = 0
    this.speedY = 0
    this.texture = {
        small: {
        head : '../src/img/small-head',
        body : '../src/img/small-body',
        tale : '../src/img/small-tale'

        },
        middle: {
        head : '../src/img/middle-head',
        body : '../src/img/middle-body',
        tale : '../src/img/middle-tile'

        },
        big: {
        head : '../src/img/big-head',
        body : '../src/img/big-body',
        tale : '../src/img/big-tile'
        }
    }
    this.render = () => {
        for (let i = 0; i < this.length; i++){
        c.fillStyle = `hsl(${this.color}, 50%, 50%)`
        let tileX  = this.x + i * this.sizeX
        this.showHide(tileX)
        c.fillRect(tileX , this.y, this.sizeX, this.sizeY)
        }
    }
    this.showHide = (x, y) => {
        //checking left border
        if ((this.x + this.sizeX )> canvas.width){
            this.x = 0  - this.speedX
        }
        //checking right border
        if(this.x < -this.speedX){
            this.x =  canvas.width - this.sizeX  - this.speedX
        }
        //checking bottom border
        if ((this.y ) > canvas.height){
            this.y = - this.speedY
        }
        //checking top border
        if(this.y + this.sizeY < -this.speedY){
            console.log(this.y);
            this.y = canvas.height - this.sizeY
        }
    }
    c.fillStyle = "red"
    c.fillRect(this.x , this.y, this.sizeX, this.sizeY)
}
const Feed = function (type, kind = false){
    this.temper = type
    this.kind = kind
    if (this.temper === true){
        if (kind === "simple") this.baff = 1
        else if (kind === "taste") this.baff = 5
    }
}
// -- == === =!= != -> >= <= () {} {||} [||] && || {} [] *** ** * 🃔  ♂
