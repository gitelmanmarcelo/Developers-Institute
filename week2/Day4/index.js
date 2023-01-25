function calcAges(myAge){
    console.log('My mum is ' + 2*myAge + 'years.');
    console.log('My dad is ' + 2.4*myAge + 'years.');
}

calcAges(12);

function calcAges2(myAge){
    return 2*myAge;
}

console.log('My mum is ' + calcAges2(12) + 'years.');

// Exercise 1
// You are the manager of the chocolate factory, in order to make your clients happy you will send them a gift depending on their quantity of chocolate box they ordered.

// Create a function named checkQuantityOrder, that takes one parameter, the quantity the user ordered.

// If the client ordered more between 5 and 10 boxes (included) 
// console.log "Dear client, you won a bouquet of flowers"
// If the client ordered more between 10 and 20 boxes (included)
//  console.log "Dear client, you won a bottle of wine"
// If the client ordered more than 20 boxes (included) 
// console.log "Dear client, you won a trip to Paris"
// Call the function a few times,

function checkQuantityOrder(quant) {
    if (quant >= 5 && quant <= 10)
        console.log("Dear client, you won a bouquet of flowers");
    else if (quant >10 && quant <= 20)
        console.log("Dear client, you won a bottle of wine");
    else if (quant > 20)
    console.log("Dear client, you won a trip to Paris");
}

checkQuantityOrder(8);
checkQuantityOrder(15);
checkQuantityOrder(30);

// BONUS : add a parameter to the function, the name of the client. 
// If you don't know the name of the client, call him/her "client"

// If the client ordered more between 5 and 10 boxes (included) console.log "Dear <name_client>, you won a bouquet of flowers"
// If the client ordered more between 10 and 20 boxes (included) console.log "Dear <name_client>, you won a bottle of wine"
// If the client ordered more than 20 boxes (included) console.log "Dear <name_client>, you won a trip to Paris"
// Call the function a few times,

function checkQuantityOrder(quant, name='client') {
    if (quant >= 5 && quant <= 10)
        console.log("Dear " + name + ", you won a bouquet of flowers");
    else if (quant >10 && quant <= 20)
        console.log("Dear " + name + ", you won a bottle of wine");
    else if (quant > 20)
    console.log("Dear " + name + ", you won a trip to Paris");
}


checkQuantityOrder(8, "John");
checkQuantityOrder(15);
checkQuantityOrder(30, "David");














