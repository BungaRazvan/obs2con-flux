import ParagraphDirector from "lib/directors/paragraph";

import ADFBuilder from "lib/builder/adf";
import FileAdaptor from "lib/adaptors/file";
import { App } from "obsidian";
import { describe, expect, test } from "@jest/globals";
import BaseClient, { mockBaseClient } from "lib/confluence/__mocks__/base";
import ConfluenceClient from "lib/confluence/client";

jest.mock("lib/confluence/base");

beforeEach(() => {
	mockBaseClient.mockClear();
	BaseClient.mockClear();
});

test("mock confluence calls", () => {
	const conf = new ConfluenceClient({
		host: "",
		authentication: {
			email: "",
			apiToken: "",
		},
	});
	conf.page.createPage({
		adf: undefined,
		pageTitle: "Test",
		spaceId: "123",
	});

	expect(BaseClient).toHaveBeenCalledTimes(1);
});
