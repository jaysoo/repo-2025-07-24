import { FastifyInstance } from 'fastify';
import { util } from '@node-acme/util';
import { hello } from '@node-acme/hello';

export default async function(fastify: FastifyInstance) {
  fastify.get('/', async function() {
    return { message: 'Hello API + ' + util()  + hello()};
  });
}
