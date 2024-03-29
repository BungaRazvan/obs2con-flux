import { Client, RequestConfig } from "./types";
import { SearchByCQL } from "./parameters";

export class Search {
	constructor(private client: Client) {}

	async searchByCQL(parameters: SearchByCQL): Promise<object> {
		const config: RequestConfig = {
			url: "rest/api/search",
			method: "GET",
			params: {
				cql: parameters.cql,
				cqlcontext: parameters.cqlcontext,
				cursor: parameters.cursor,
				next: parameters.next,
				prev: parameters.prev,
				limit: parameters.limit,
				start: parameters.start,
				includeArchivedSpaces: parameters.includeArchivedSpaces,
				excludeCurrentSpaces: parameters.excludeCurrentSpaces,
				excerpt: parameters.excerpt,
				sitePermissionTypeFilter: parameters.sitePermissionTypeFilter,
				expand: parameters.expand,
			},
		};

		return (await this.client.sendRequest(config)) as object;
	}
}
