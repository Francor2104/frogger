class Obstacle {
    constructor(x, y, width, height, speed, type){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.type = type;
    }
    draw(){
        ctx1.fillStyle = 'blue';
        ctx1.fillRect(this.x, this.y, this.width, this.height);
    }
    movimiento(){
        this.x += this.speed * velocidad;
        if (this.speed > 0){
           if (this.x > canvas.width + this.width){
               this.x = 0 - this.width;
           }
        }
        else{
            if(this.x < 0 - this.width){
                this.x = canvas.width + this.width;
            }
        }
    }

}

function iniciarobs(){
    for (let i= 0; i < 3; i++){ // primera linea
        let x = i * 400;
        CantCarros.push(new Obstacle(x, canvas.height - grid * 2 - 20, grid * 2, grid, 1.5,'car'))
    }

    // segunda linea
    for (let i= 0; i< 3; i++){
        let x = i * 250
        CantCarros.push(new Obstacle(x, canvas.height - grid * 3 - 20, grid, grid, -1,'car'))
    }
    for (let i= 0; i < 6; i++){ // tercera linea
        let x = i * 200;
        CantCarros.push(new Obstacle(x, canvas.height - grid * 4 - 20, grid, grid, 1.5,'car'))
    }
    for (let i= 0; i< 3; i++){ //cuarta linea
        let x = i * 400
        CantCarros.push(new Obstacle(x, canvas.height - grid * 5 - 20, grid * 2, grid, -2,'car'))
    }
    for (let i= 0; i < 6; i++){ // quinta linea
        let x = i * 200;
        CantCarros.push(new Obstacle(x, canvas.height - grid * 6 - 20, grid, grid, 0.5,'car'))
    }
}

iniciarobs();

function creacionobs(){
    for (let i = 0; i < CantCarros.length; i++){
        CantCarros[i].movimiento();
        CantCarros[i].draw();
    }

    for (let i= 0; i < CantCarros.length; i++){
        if(colision(Frogger, CantCarros[i])){
            reset();
        }
    }
}
