import type { Meta, StoryObj } from "@storybook/react";
import parse, {
	DOMNode,
	Element,
	HTMLReactParserOptions,
	domToReact,
} from "html-react-parser";

import { Dialogue, DialogueProps } from "@levon/core";
import { WindupChildren } from "windups";

/** Dialogue is the main channel for interacting inside Levon.
 */
const meta: Meta<DialogueProps> = {
	title: "Core/Dialogue",
	component: Dialogue,
	parameters: {
		componentSubtitle: "The main element for a story",
	},
	args: {
		container: {
			id: "defaultDialogue",
			style: {
				border: "1px solid #ccc",
				padding: "6px 12px", // Adjust the values based on your design
				borderRadius: "8px",
				minHeight: "80px",
				backgroundImage: 'url("/double-bubble-outline.png")',
			},
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
				style: {
					marginBottom: "8px",
				},
			},
		},
	},
	tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
	name: "Default Component",
	args: {
		children: "This is a basic dialogue, it spawns instantly",
	},
	render: ({ children, ...rest }) => {
		return <Dialogue {...rest}>{children}</Dialogue>;
	},
};

export const TypewriterEffect: Story = {
	name: "Using Typewriter Effect",
	args: {
		children:
			"<WindupChildren>This is using Windups component for typewriter, you can take a look of windups at <a href='https://windups.gwil.co/'>https://windups.gwil.co/</a> </WindupChildren>",
	},
	render: ({ children, ...rest }) => {
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
