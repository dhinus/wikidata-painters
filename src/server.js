import path from 'node:path';
import Fastify from 'fastify';
import fastifyStatic from '@fastify/static';

const fastify = Fastify({ logger: true });

fastify.register(fastifyStatic, {
  root: path.join(import.meta.dirname, '..', 'dist'),
  spa: true,
});

const start = async () => {
  try {
    const port = process.env.PORT || 3000;
    await fastify.listen({ port: Number(port), host: '0.0.0.0' });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
