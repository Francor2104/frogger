class frogger {
    constructor() {
        this.spriteWidth = 250;
        this.spriteHeight = 250;
        this.width = this.spriteWidth / 5;
        this.height = this.spriteHeight / 5;
        this.x = canvas.width / 2 - this.width / 2;
        this.y = canvas.height - this.height - 40;
        this.moving = false;
        this.frameX = 0;
        this.frameY = 0;
    }
    moverse() {
        if (keys[38] && puntaje < 1){
            if (this.moving === false || lives == 3){
                this.y -= grid;
                this.moving = true;
            }
        }
        if (keys[40] && puntaje < 1){
            if (this.moving === false && this.y < canvas.height - this.height * 2 && this.moving === false || lives == 3){
                    this.y += grid;
                    this.moving = true; 
            }
        }

        if (keys[37] && puntaje < 1){
            if (this.moving === false && this.x > this.width || lives == 3){
                    this.x -= grid;
                    this.moving = true;            
            }
        }

        if (keys[39] && puntaje < 1 ){
            if (this.moving === false && this.x < canvas.width - this.width * 2 || lives == 3){
                    this.x += grid;
                    this.moving = true;            
            }
        }
        if (this.y < 0) scored();
    }
    dibujo() {
        ctx3.fillStyle = 'green';
        ctx3.fillRect(this.x, this.y, this.width, this.height);
    }

    salto(){
        console.log('hop!');
    }
}

const Frogger = new frogger();