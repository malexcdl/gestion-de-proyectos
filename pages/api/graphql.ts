import "reflect-metadata"
import { buildSchema } from "type-graphql";
import { resolvers } from "../../prisma/generated/type-graphql";
import Cors from "micro-cors";
import { ApolloServer } from "apollo-server-micro";
import { PrismaClient } from ".prisma/client";
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient();

const cors = Cors({
    allowMethods: ["POST", "GET", "OPTIONS", "HEAD"]
})

interface Context {
    prisma: PrismaClient
}

const funcionServidorGraphQL = async (req:NextApiRequest, res:NextApiResponse) => {
    const schema = await buildSchema({
        resolvers: resolvers,
        validate: false,
    });

    const graphQLServer = new ApolloServer({
        schema: schema,
        context: (): Context => ({ prisma }),
    });

    const startServer = graphQLServer.start();

    await startServer;

    return graphQLServer.createHandler({
        path: "/api/graphql",
    })(req, res);

};

export default cors ((req:any, res:any) => {
    return funcionServidorGraphQL(req, res)
});
