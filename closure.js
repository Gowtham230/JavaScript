

function requestvar(){
    const reqvar = "I need a product key";
    function responsevar(){
        const resvar = "Product key : 12345"
        console.log(reqvar);
        console.log(resvar);
    }
    return responsevar();
}
requestvar();



function greet(game){
    let score=0;
    return function play(){
        score++
        return `you will play ${game} and your score is ${score}`;
    }
    
}   
const crickets = greet("Cricket");
    const football = greet("Football");
    console.log(crickets());
    console.log(football());
