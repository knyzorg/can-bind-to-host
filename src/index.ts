import net from 'net';

const canBindToHost = (host: string = '0.0.0.0', port: number = 0) => new Promise<boolean>((res) => {
  if (port >= 0 && port <= 65_535) {
    const server = net
      .createServer()
      .listen({
        host,
        port,
      })
      .addListener('error', () => res(false))
      .addListener('listening', () => {
        server.close();
        res(true);
      });
  } else res(false);
});

export default canBindToHost;
export { canBindToHost };
