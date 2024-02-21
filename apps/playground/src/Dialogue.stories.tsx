import type { Meta, StoryObj } from "@storybook/react";
import parse, {
	DOMNode,
	Element,
	HTMLReactParserOptions,
	domToReact,
} from "html-react-parser";

import { Dialogue, DialogueProps } from "@levon/core";
import { WindupChildren } from "windups";

/**this is a description */
const meta = {
	title: "Core/Dialogue",
	component: Dialogue,
	parameters: {
		componentSubtitle: "The main element for a story",
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
	},
	args: {
		children: "This is a basic dialogue, it spawns instantly",
		container: {
			id: "defaultDialogue",
			className: "w-full border border-gray-400 px-6 py-2 rounded min-h-28",
		},
		character: {
			image: [],
			name: [
				{
					value: "Levon",
					id: "levon",
				},
			],
			nameContainer: {
				id: "character-names",
				className: "mb-2",
			},
		},
	},
	tags: ["autodocs"],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<DialogueProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		container: {
			...meta.args.container,
			style: {
				backgroundImage: 'url("/double-bubble-outline.png")',
			},
		},
	},
	render: (args) => {
		const { children, ...rest } = args;
		return <Dialogue {...rest}>{children}</Dialogue>;
	},
};

export const TypewriterEffect: Story = {
	args: {
		children:
			"<WindupChildren>This is using Windups component for typewriter, you can take a look of windups at <a href='https://windups.gwil.co/'>https://windups.gwil.co/</a> </WindupChildren>",
		container: {
			...meta.args.container,
			style: {
				backgroundImage: 'url("/double-bubble-outline.png")',
			},
		},
	},
	render: function Render(args) {
		const { children, ...rest } = args;
		const parseOption: HTMLReactParserOptions = {
			replace: (node) => {
				const element = node as Element;
				if (element.name == "windupchildren")
					return (
						<WindupChildren {...element.attribs}>
							{domToReact(element.children as DOMNode[], parseOption)}
						</WindupChildren>
					);
			},
		};

		return (
			<Dialogue {...rest}>
				{parse(
					(typeof children != "function" && children) as string,
					parseOption
				)}
			</Dialogue>
		);
	},
};
