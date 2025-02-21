import { io, Socket } from 'socket.io-client';

class SocketApi {
  private static instance: Socket | null = null;

  static connect(userId: string) {
    if (!this.instance) {
      this.instance = io('http://localhost:4200', {
        query: { userId },
      });
      this.instance.on('connect', () =>
        console.log('Connected to WebSocket with ID:', userId),
      );
      this.instance.on('disconnect', () =>
        console.log('Disconnected from WebSocket'),
      );
    }
    return this.instance;
  }

  static disconnect() {
    if (this.instance) {
      this.instance.disconnect();
      console.log('Disconnected from WebSocket');
      this.instance = null;
    }
  }

  static getInstance() {
    if (!this.instance) {
      console.error('Socket not initialized! Call connect() first.');
    }
    return this.instance;
  }
}

export default SocketApi;
