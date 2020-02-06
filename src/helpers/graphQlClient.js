import { GraphQLClient } from "graphql-request";

const URL =
	process.env.NODEENV == "test"
		? "https://testingdatabasetask.herokuapp.com/v1/graphql"
		: "https://newtask1233.herokuapp.com/v1/graphql";

const graphQLClient = new GraphQLClient(URL, {
	headers: {
		"content-type": "application/json"
	}
});
export default graphQLClient;
