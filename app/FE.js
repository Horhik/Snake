//FE - Fast Eventlistener
let $ = function (event, func){
    document.addEventListener("keydown", function(e){
        evt = 
        event === "keyUp" ? "ArrowUp" : 
        event === "keyDown" ? "ArrowDown" : 
        event === "keyLeft" ? "ArrowLeft" : 
        event === "keyRight" ? "ArrowRight" :
        undefined;
        if (e.code === evt){
            func()
        }
    })
}
