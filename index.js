const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Definir a rota raiz
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Ouvir eventos de conexão
// ...
const matrizArray = [
    {
      id: '1',
      businessName: 'Empresa 1',
      fantasyName: 'Fantasia 1',
      cnpj: '12345678901234'
    },
    {
      id: '2',
      businessName: 'Empresa 2',
      fantasyName: 'Fantasia 2',
      cnpj: '56789012345678'
    },
    {
      id: '3',
      businessName: 'Empresa 3',
      fantasyName: 'Fantasia 3',
      cnpj: '90123456789012'
    }
  ];

  const clienteArray = [
    {
      id: '1',
      matrizId: '1',
      businessName: 'Cliente 1',
      fantasyName: 'Fantasia 1',
      cnpj: '12345678901234'
    },
    {
      id: '2',
      matrizId: '2',
      businessName: 'Cliente 2',
      fantasyName: 'Fantasia 2',
      cnpj: '56789012345678'
    },
    {
      id: '3',
      matrizId: '1',
      businessName: 'Cliente 3',
      fantasyName: 'Fantasia 3',
      cnpj: '90123456789012'
    }
  ];

  const unidadeArray = [
    {
      id: '1',
      clientId: '1',
      description: 'Unidade 1',
      batteryRooms: [
        { id: '1', name: 'Sala 1' },
        { id: '2', name: 'Sala 2' }
      ]
    },
    {
      id: '2',
      clientId: '2',
      description: 'Unidade 2',
      batteryRooms: [
        { id: '3', name: 'Sala 3' },
        { id: '4', name: 'Sala 4' },
        { id: '5', name: 'Sala 5' }
      ]
    },
    {
      id: '3',
      clientId: '1',
      description: 'Unidade 3',
      batteryRooms: [
        { id: '6', name: 'Sala 6' }
      ]
    }
  ];
  

const salasPorEntidade = []
io.on('connection', (socket) => {
    socket.on("mensagem", (sala, message) => {
        socket.join(sala); // Faz o join na sala
         io.to(sala).emit('novaMensagem', message);
    })
  });
  
  // ...
  

// Iniciar o servidor
const port = 3000;
server.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});
