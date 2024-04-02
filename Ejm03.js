(function () {
    console.log("This is the start")

    setTimeout(function cd() {
        console.log("This is a msg from call back");
    });

    console.log("This is just a message");

    setTimeout(function cb1() {
        console.log("This is a msg from call back1");
        
    },0);

    console.log("This is the end")
    
})();