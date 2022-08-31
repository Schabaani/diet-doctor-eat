import {Server} from 'miragejs';

export function makeServer({environment = 'development'} = {}) {
  let server = new Server({
    environment,

    routes() {
      this.get(
        'api/home/',
        () => {
          return [
            {
              type: 'Video',
              header: 'AAA',
              assets: [{duration: '17:00', image: '', videoUrl: '', title: ''}],
            },
            {
              type: 'Meals',
              header: 'Breakfast',
              assets: [{image: '', title: ''}],
            },
            {type: 'Meals', header: 'Lunch', assets: [{image: '', title: ''}]},
            {type: 'Meals', header: 'Dinner', assets: [{image: '', title: ''}]},
            {type: 'Meals', header: 'Snack', assets: [{image: '', title: ''}]},
            {
              type: 'People',
              header: 'Real People',
              assets: [{image: '', title: '', subtitle: ''}],
            },
          ];
        },
        {timing: 5000},
      );
    },
  });

  return server;
}

if (global.server) {
  global.server.shutdown();
}
global.server = makeServer();
