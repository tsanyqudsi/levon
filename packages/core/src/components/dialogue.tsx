import React, { cloneElement } from "react";
import { ActionProps, ContainerProps } from "../types";
import {
	CharacterImageProps,
	CharacterNameProps,
	CharacterProps,
} from "./characters";
import { useLevonConfig } from "./context";
import { merge } from "ts-deepmerge";

// Start Type Area

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
	const { value, ...rest } = props;
	return <span {...rest}>{value}</span>;
};

const CharacterImage = (props: CharacterImageProps) => {
	const { value, ...rest } = props;
	return <img src={value} {...rest} />;
};

export const DialogueCharacterName = (props: CharacterProps) => {
	if (props.name.length > 1) {
		return (
			<div {...props.nameContainer}>
				{props.name.map((prop, index) => {
					return <CharacterName {...prop} key={`character-name-${index}`} />;
				})}
			</div>
		);
	}

	return <CharacterName {...props.name[0]} />;
};

export const DialogueCharacterImage = ({
	imageContainer,
	image,
}: Omit<CharacterProps, "name" | "nameContainer">) => {
	if (image.length > 1) {
		return (
			<div {...imageContainer}>
				{image.map((prop, index) => {
					return <CharacterImage {...prop} key={`character-image-${index}`} />;
				})}
			</div>
		);
	}

	return <CharacterName {...image[0]} />;
};

const DialogueChildren = ({
	children,
	...props
}: Omit<DialogueProps, "container">) => {
	if (typeof children === "function") {
		return children(props);
	}
	if (props.character)
		return (
			<>
				<div>
					<DialogueCharacterImage {...props.character} />
				</div>
				<div
					id={props.character.nameContainer.id ?? "character-container"}
					className={props.character.nameContainer.className}
					style={props.character.nameContainer.style}
				>
					<DialogueCharacterName {...props.character} />
				</div>
				{children}
				{hasActionButton(props.action)}
			</>
		);
	throw new Error(
		"Either `props.children` is not a function nor `props.character` does not exists"
	);
};

export const Dialogue = ({ container, ...props }: DialogueProps) => {
	const config = useLevonConfig();

	const containerProps = merge(
		config.containers?.dialogues ?? {},
		container ?? {}
	);

	return (
		<section
			id={containerProps?.id ?? "dialogue"}
			className={containerProps?.className}
			style={containerProps?.style}
		>
			<DialogueChildren {...props} />
		</section>
	);
};
