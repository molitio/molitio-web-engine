import { server } from './server';

// use `prisma` in your application to read and write data in your DB

import { RouteShorthandOptions } from 'fastify';

const opts: RouteShorthandOptions = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    pong: {
                        type: 'string',
                    },
                },
            },
        },
    },
};

server.get('/ping', opts, async (request, reply) => {
    console.log('req', request);
    console.log('re', reply);
    return { pong: 'it worked!' };
});

const start = async () => {
    try {
        await server.listen({ port: 3000 });

        const address = server.server.address();
        const port = typeof address === 'string' ? address : address?.port;
        console.log('port', port);
    } catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};
start();
