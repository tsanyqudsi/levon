import React from "react";
import { cloneElement } from "react";
import { ActionProps, ContainerProps } from "@levon/utils";

// Start Type Area
type CharacterNameProps = {
	value: string;
} & ContainerProps;

type CharacterProps = {
	container: ContainerProps;
	name: CharacterNameProps;
};

export type DialogueProps = {
	container?: ContainerProps;
	children:
		| ((arg: Omit<DialogueProps, "children">) => React.ReactNode[])
		| React.ReactNode;
	action?: ActionProps;
	character?: CharacterProps;
};

// End Tipe Area

const hasActionButton = (actionButton: ActionProps | undefined) => {
	if (actionButton)
		return cloneElement(actionButton.element, {
			onClick: actionButton.onClick(),
		});
};

const CharacterName = (props: CharacterNameProps) => {
	return (
		<span className={props.className} style={props.style}>
			{props.value}
		</span>
	);
};

export const DialogueCharacterName = (
	props: CharacterNameProps | CharacterNameProps[]
) => {
	if (Array.isArray(props)) {
		return (
			<>
				{props.map((props, index) => {
					return <CharacterName {...props} key={`character-name-${index}`} />;
				})}
			</>
		);
	}
	return <CharacterName {...props} />;
};

const DialogueChildren = (props: Omit<DialogueProps, "container">) => {
	const { children, ...arg } = props;

	if (typeof children === "function") {
		return <>{children(arg)}</>;
	}
	return (
		<>
			<div
				id={props.character?.container.id ?? "character-container"}
				className={props.character?.container.className}
				style={props.character?.container.style}
			>
				{props.character && (
					<DialogueCharacterName {...props.character?.name} />
				)}
			</div>
			{children}
			{hasActionButton(props.action)}
		</>
	);
};

export const Dialogue = (props: DialogueProps) => {
	const { container, ...arg } = props;

	return (
		<section
			id={container?.id ?? "dialogue"}
			className={container?.className}
			style={container?.style}
		>
			<DialogueChildren {...arg} />
		</section>
	);
};
