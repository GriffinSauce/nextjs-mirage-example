import { Server } from 'miragejs';

export function createServer() {
  console.info('Initializing mock API with Mirage');
  return new Server({
    routes() {
      this.namespace = '/api';

      this.get('/todos', () => {
        return {
          todos: [
            { id: 1, text: 'Get MirageJS to work with Next.js' },
            { id: 2, text: 'Clean up example' },
            { id: 3, text: 'Publish as Mirage guide' },
            { id: 4, text: 'Publish as Next.js example' },
          ],
        };
      });
    },
  });
}
