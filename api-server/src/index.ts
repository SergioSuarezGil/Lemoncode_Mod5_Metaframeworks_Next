import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { cors } from 'hono/cors';
import { serve } from '@hono/node-server';
import { serveStatic } from '@hono/node-server/serve-static';
import { houses } from './mock-data';

const db = {
  houses,
};

const app = new Hono();
app.use('/*', serveStatic({ root: './api-server/public' }));

app.use(logger());
app.use('/api/*', cors());

app.get('/', (context) => {
  return context.html(`
    <!doctype html>
    <html lang="es">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>API casas rurales</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 2rem;
            line-height: 1.5;
          }
          code {
            background: #f3f3f3;
            padding: 0.15rem 0.35rem;
            border-radius: 0.25rem;
          }
        </style>
      </head>
      <body>
        <h1>API casas rurales</h1>
        <p>Servidor activo. Usa los endpoints:</p>
        <ul>
          <li><code>/api/houses</code></li>
          <li><code>/api/houses/:id</code></li>
        </ul>
      </body>
    </html>
  `);
});

app.get('/api/houses', (context) => {
  return context.json(db.houses);
});

app.get('/api/houses/:id', (context) => {
  return context.json(db.houses.find((c) => c.id === context.req.param('id')));
});

serve({ fetch: app.fetch, port: 3001 }, (info) => {
  console.log(`API running on ${info.port}`);
});
