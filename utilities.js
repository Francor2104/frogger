function animate() {
    ctx3.clearRect(0, 0, canvas.width, canvas.height);
    Frogger.dibujo();
    Frogger.moverse();
    creacionobs();
    requestAnimationFrame(animate);
}

animate();

window.addEventListener('keydown',function(e){
    keys = [];
    keys[e.keyCode] = true;
    if (keys[37] || keys[38] || keys[39] || keys[40]){
        Frogger.salto();
    }
    });

    window.addEventListener('keyup', function(e){
        delete keys[e.keyCode];
        Frogger.moving = false;

    });

    function scored(){
        puntaje++;
        Frogger.x = canvas.width/2 - Frogger.width/2;
        Frogger.y = canvas.height - Frogger.height - 40;
        alert("Felicidades, has ganado! refresca la pagina para intentarlo de nuevo.")
    }

    function colision(first, second){
        return !( first.x > second.x + second.width ||
                  first.x + first.width < second.x  ||
                  first.y > second.y + second.height||
                  first.y + first.height < second.y);

    }

    function reset(){
        Frogger.x = canvas.width/2 - Frogger.width/2;
        Frogger.y = canvas.height - Frogger.height - 40;
        lives++;
        if(lives == 3){
            alert("Has perdido! refresca la pagina para probar otra vez.")
            puntaje++;
        }
    }

