export const requestUrl = jest.fn().mockResolvedValue({
	status: 200,
	json: async () => ({}),
});

export class Plugin {
	app = {
		workspace: {
			on: jest.fn(),
		},
	};
}

export class Notice {
	constructor(message: string) {
		console.log(message);
	}
}
