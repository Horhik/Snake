let $ = function (event, func){
    // if (
    //     event === "keyUp" ||
    //     event === "keyDown" ||
    //     event === "keyRight" ||
    //     event === "keyLeft"
    //     ){
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
        // }

}
