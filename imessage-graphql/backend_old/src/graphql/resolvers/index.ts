import merge from "lodash.merge";
import userResolver from "./user";

const resolvers = merge({}, userResolver);

export default resolvers;
