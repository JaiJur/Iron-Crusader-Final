window.addEventListener('load', () => {
    
    const gameManager = new GameManager('game-canvas')
    gameManager.ranking.getLocalStorage()
    
    const marcoStart = document.getElementById('btn-container')
    
    let startGame = true;  
    
    let btnStart = document.getElementById('btn-start')

    let btnContinue = document.getElementById("btn-continue")

    let playerName = document.getElementById('name-input');

    let interface = document.getElementById('interface')

    let gameCanvas = document.getElementById("game-canvas")

    btnStart.addEventListener('click', () => {

        if (startGame === true){

            document.getElementById('data-name').innerHTML = playerName.value;
            clickToStart()
            startGame = false;
        }        
    }); 
   
    document.addEventListener('keydown', (event) => {
        gameManager.onKeyEvent(event);
    })

    document.addEventListener('keyup', (event) => {
        gameManager.onKeyEvent(event);
    })

    document.addEventListener('mousedown', (target) => {
       
        if (gameManager.mouseBlock === true) {

           btnContinue.addEventListener('click', () => {

               clickToStart()
               gameManager.mouseDownEvent(target);
               gameCanvas.classList.remove('ocultar')
               gameManager.mouseBlock = false;
               
           })

        } else {

            gameManager.mouseDownEvent(target);

        }
    })

    document.addEventListener('mouseup', (target) => {
        gameManager.mouseUpEvent(target);
    })

    document.addEventListener('mousemove', (target) => {
        gameManager.mouseMove(target)
    })

    function clickToStart(){

            gameManager.resetEnemies()
            gameManager.start()
            marcoStart.remove()
            interface.classList.remove('ocultar')
            
          
    }

 
});



