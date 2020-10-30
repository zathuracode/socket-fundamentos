var socket=io();

//Cuando se conecta
socket.on('connect',function(){
    console.log('Conectado al servidor');

});

//Cuando se desconecta
socket.on('disconnect',function(){
    console.log('Perdimos la conexion con el servidor');
});

//Enviar informacion al servidor de forma privada
socket.emit('enviarMensaje',{
    usuario:'Diego Gomez',
    mensaje:'Hola Mundo a todos'
},(resp)=>{
    console.log('Respuesta del server:',resp);
});

//Escuchar informacion al servidor de forma privada
socket.on('enviarMensaje',(mensaje)=>{
    console.log(mensaje);
});