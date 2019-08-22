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
      this.speed *= 1.00004
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
		if ((eat.x + eat.size) <= this.x + this.sizeX && (eat.x) >= this.x || (eat.y + eat.size) <= (this.y + this.sizeY) && eat.y >- this.y ){
			place.hasFeed = false
			console.log(place)
			this.score++
			document.querySelector('.score__number').textContent = this.score
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
	    let eatRandom = ~~(Math.random() * 100)
		this.x = ~~(Math.random() * width)
		this.y = ~~(Math.random() * height)
	    if (eatRandom <= 60){
		    this.rare = 'simple'
		    this.size = 30
			fill('red')
			this.real[3] = 'red'
			ellipse(this.x, this.y, this.size)
			noStroke()
		}
		else if (eatRandom <= 55){
		    this.rare = 'middle'
		    this.size = 20
			fill('yellow')
			this.real[3] = 'yellow'
			ellipse(this.x, this.y, this.size)
			noStroke()
		}
		else if (eatRandom <= 100){
		    this.rare = 'rare'
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
		fill(this.real[3])
		this.animation()
		ellipse(this.real[0], this.real[1], this.real[2])
		noStroke()	
	}
}