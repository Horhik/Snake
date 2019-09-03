
class Game {
  	constructor () {
		  this.hasFeed = false
  	}
	created(){}
}

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
	this.score = 0
    this.length = len
    this.speed = speed
    this.speedX = 0
    this.speedY = 0
  }
    update(){
      this.scaling()
      this.teleport()
      this.tiling()
    }
    show(){
      fill(`hsl(${this.color}, 50%, 50%)`)
      rect(this.x, this.y, this.sizeX, this.sizeY)
      this.tiling()
      for (let i = 0; i < this.tile.length; i++) {

        fill(`hsl(${this.color}, 50%, 50%)`)
				
        rect(this.tile[i].x, this.tile[i].y, this.sizeX, this.sizeY)
      }
      noStroke()
    }
    teleport(){	
      if (this.x + this.sizeX < 0) {
        this.x = innerWidth
      }
      if (this.x > innerWidth) {
        this.x = 0
      }		 
      if (this.y + this.sizeY < 0) {
        this.y = innerHeight
      }
      if (this.y > innerHeight) {
        this.y = 0
      }
    }
    scaling(){
		if (this.speed   <= 19.5){
      this.speed =2 + this.score/70
		}
		else{
			this.speed = 20
		}
      this.x += this.speedX
      this.y += this.speedY
      this.color++
      if (this.color > 360) {
        this.color = 0
      }
    }
    tiling(){
      this.tile.push({ x: this.x, y: this.y })
      if (this.tile.length > this.length) {
        this.tile.shift()
      }
    }
	encounter(eat, place = game){
		if (
			 this.x <= eat.x + eat.size/2 &&
			 this.y <= eat.y + eat.size/2 && 
			 this.x + this.sizeX >= eat.x - eat.size/2  &&
			 this.y + this.sizeY >= eat.y - eat.size/2 
		){
			place.hasFeed = false
			this.score += eat.sts
			this.length += eat.sts 
			document.querySelector('.score__number').textContent = this.score
		}
		for (let i = 10; i < this.tile.length - 1; i += 1){
			let head = {
				x: this.tile[this.tile.length - 1].x,
				y: this.tile[this.tile.length - 1].y,
			}
			let size = this.sizeX/2
			let target = {
				x: this.tile[i].x, 
				y: this.tile[i].y
			}
			if (
				head.x + size === target.x + size&&
				head.y + size === target.y + size &&
				i < this.tile.length - 10
			){

					this.length =this.tile.length- i 
					this.tile.length  =this.tile.length- i
			console.log(i, this.tile.length)
			this.score = 0
			}
		}
	}
}
class Feed {
  	constructor (game, size = 30, rare = 'simple', temper = true) {
	  	this.rare = rare
	  	this.x = Math.random() * width
	  	this.y = Math.random() * height
		this.color = 90
		this.rainbow = `hsl(${color}, 40%, 70%)`
		this.real =[]
	  	this.sizeX = size
	  	this.sizeY = size
	  	this.temper = temper
	  	this.eatRandom =0 
		  this.speed = 1
		  this.speedY = 6
	  	this.sts = 					// from "salutariness"
	  		rare === "simple" ? 1 :
			rare === "middle" ? 3 :
			rare === "rare" ? 5 : 1

}
  	animation(){
		  this.color = this.color > 360 ? 0 : this.color + 5
		  if (this.real[3]) {this.real[3] = `hsl(${this.color}, 95%, 90%)`}
		  this.rainbow = `hsl(${this.color}, 40%, 70%)`
	}
	show(){

		this.real = []
		this.animation()
	   let eatRandom = this.eatRandom = ~~(Math.random() * 100) 
		this.x = ~~(Math.random() * width)
		this.y = ~~(Math.random() * height)
	    if (eatRandom <= 60){
		    this.rare = 'simple'
		    this.size = 30
			this.sts = 5
			fill('red')
			this.real[3] = 'red'
			ellipse(this.x, this.y, this.size)
			noStroke()
		}
		else if (eatRandom <= 95){
		    this.rare = 'middle'
			this.sts = 15
		    this.size = 20
			fill('yellow')
			this.real[3] = 'yellow'
			ellipse(this.x, this.y, this.size)
			noStroke()
		}
		else if (eatRandom <= 100){
		    this.rare = 'rare'
			this.sts = 30
		    this.size = 10
			this.real[3] = this.color
			fill(`hsl(${this.real[3]}, 30%, 50%)`)
			ellipse(this.x, this.y, this.size)
			noStroke()
		}
		this.real[0] = this.x 
		this.real[1] = this.y 
		this.real[2] = this.size
        game.hasFeed  = true
	}
	update(){
		if(this.eatRandom > 95){
		fill(this.real[3])
	}
		else if(this.eatRandom > 60){
		fill('yellow')

		}
		else{
			fill('green')
		}
		this.animation()

		this.x += this.speed
		this.y += this.speedY
		this.real[0] += this.speed
		this.real[1] += this.speedY
		if (this.real[0] + this.real[2]/2 > width || this.real[0] - this.real[2]/2 < 0){
			this.speed *= -1
		}
		if (this.real[1] + this.real[2]/2 > height || this.real[1] - this.real[2]/2 < 0){
			this.speedY *= -1
		}
		ellipse(this.real[0] , this.real[1] , this.real[2])
		noStroke()	
	}
}