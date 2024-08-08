/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
	testEnvironment: "node",
	preset: "ts-jest",
	transform: {
		// "^.+.tsx?$": ["ts-jest", {}],
		"^.+.ts?$": ["ts-jest"],
	},
	moduleNameMapper: {
		"^lib(.*)$": "<rootDir>/lib/$1",
		"^obsidian$": "<rootDir>/__mocks__/obsidian.ts",
	},
	moduleDirectories: ["node_modules"],
};
