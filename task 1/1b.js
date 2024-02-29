function delayedGreeting(name ,delayTime){
    let newName = name;
    setTimeout(()=>{
        console.log("hello", newName)
    },delayTime)
}

delayedGreeting("Rana", 4000)