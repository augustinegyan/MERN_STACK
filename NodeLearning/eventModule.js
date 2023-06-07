const EventEmiter = require('events');
const event = new EventEmiter();

//Event is any process happening . 

event.on('Authenticated', () => {
    console.log("Authentication completed sucessfully"); //Listener
})

event.on('order-placed',(meat , fish) =>{
    console.log(`Bought ${meat} pizza and ${fish} pizza`)
})


event.on('order-placed',(meat) =>{
    if(meat === "lamb"){
        console.log("Just had a very nice meat Pizza");
    }
})


event.emit('Authenticated');
event.emit('order-placed',"lamb","tuna") // added 2 parameters to be executed in call back function 
