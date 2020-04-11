
//Comando para establecer una conexion
let socket = io();

let label = $('#lblNuevoTicket');


socket.on('connect', () => {

    console.log('Usuario conectado');

});

socket.on('disconnect', () => {

    console.log('Desconectado del servidor');

});

socket.on('estadoActual', (resp) => {

    console.log(resp);
    label.text(resp.actual);

});

$('button').on('click', () => {

    socket.emit('siguienteTicket', null, (siguienteTicket) => {
        
        label.text(siguienteTicket);


    });
    
});