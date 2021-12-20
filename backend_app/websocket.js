const WebSocket = require('ws');
const { WebSocketServer } = WebSocket;

//WebSocket to send DB updates
const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws) => {
    ws.on('message', (data) => {
        console.log(data);
    });
})

/**
 * Broadcast an Object as string.
 * @param {Object} data 
 */
exports.sendMessage = (data) => {
    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(data));
        }
    });
};