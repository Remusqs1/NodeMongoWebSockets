import { Server } from 'socket.io';

class SocketClass {

    constructor() {
        this.socket = {}
    }

    connect(server) {
        this.socket.io = new Server(server)
    }

}

const socket = new SocketClass();
export { socket }
