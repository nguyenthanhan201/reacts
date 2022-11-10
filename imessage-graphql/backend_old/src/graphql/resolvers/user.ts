import { verifyAndCreateUsername } from "../../util/functions";
import { CreateUsernameResponse, GraphQLContext } from "./../../util/types";
const resolvers = {
  Query: {
    searchUsers: () => {},
  },
  Mutation: {
    createUsername: async function createUsername(
      _: any,
      args: { username: string },
      context: GraphQLContext
    ): Promise<CreateUsernameResponse> {
      // console.log("HERE IS CONTEXT", context);
      const { session, prisma } = context;

      if (!session?.user) {
        return {
          error: "Not authorized",
        };
      }

      const { id } = session.user;
      const { username } = args;

      return await verifyAndCreateUsername({ userId: id, username }, prisma);
    },
  },
};

export default resolvers;
