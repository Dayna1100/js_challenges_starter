(function coinFlip(){
    const randomNumber = Math.random()
    if (randomNumber >= 0.5) {
        document.write("Heads")
    }   else if (randomNumber < 0.5) {
        document.write("Tails")
    }
})();
