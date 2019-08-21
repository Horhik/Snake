const canvas = document.querySelector('.snake')
canvas.width = innerWidth
canvas.height = innerHeight
const c = canvas.getContext('2d')
let ἅ = 0
let  = 9 

const Snake =function () {
    this.x = window.innerWidth/2
    this.y = window.innerHeight/2
    this.head ={
        x: window.innerWidth/2,
        y: window.innerHeight/2
    }
    this.sizeX = this.sizeY = 30
    this.color = 0
    this.tile = []
    this.length = 30
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
            this.color++
            this.x += this.speedX
            this.y += this.speedY
            c.fillStyle = `hsl(${this.color}, 50%, 50%)`;
            for( var i = 0; i < this.tile.length; i++ )
            {
              c.fillStyle =  `hsl(${this.color}, 50%, 50%)`
              c.fillRect(this.tile[i].x, this.tile[i].y, this.sizeX, this.sizeY);
              this.showHide()
            }
            this.tile.push({x: this.x, y: this.y});
          
            if( this.tile.length > this.length )
            {
              this.tile.shift();
            }
        }
    this.showHide = (x, y) => {
        //checking left border
        if (this.x > canvas.width){
            this.x = 0  - this.speedX
        }
        //checking right border
        if(this.x + this.sizeX< 0){
            this.x =  canvas.width - this.sizeX  - this.speedX
        }
        //checking bottom border
        if (this.y > canvas.height){
            this.y = - this.speedY
        }
        //checking top border
        if(this.y + this.sizeY < 0){
            console.log(this.y);
            this.y = canvas.height - this.sizeY
        }
    }
    c.fillStyle = `hsl(${this.color}, 50%, 50%)`;
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
