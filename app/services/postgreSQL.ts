import { createConnections } from "typeorm";

const connections = await createConnections();
console.log(connections)

export default connections;