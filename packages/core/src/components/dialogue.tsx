import React, { cloneElement } from "react";
import { ActionProps, ContainerProps } from "@levon/utils";
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
	if (props.names.length > 1) {
		return (
			<div {...props.nameContainer}>
				{props.names.map((prop, index) => {
					return <CharacterName {...prop} key={`character-name-${index}`} />;
				})}
			</div>
		);
	}

	return <CharacterName {...props.names[0]} />;
};

export const DialogueCharacterImage = ({
	imageContainer,
	images,
}: Omit<CharacterProps, "name" | "nameContainer">) => {
	if (images.length > 1) {
		return (
			<div {...imageContainer}>
				{images.map((prop, index) => {
					return <CharacterImage {...prop} key={`character-image-${index}`} />;
				})}
			</div>
		);
	}

	return <CharacterName {...images[0]} />;
};

const DialogueChildren = ({
	children,
	...props
}: Omit<DialogueProps, "container">) => {
	if (typeof children === "function") {
		return children(props);
	}
	if (props.character) {
		const {
			character: { nameContainer },
		} = props;
		return (
			<>
				<div>
					<DialogueCharacterImage {...props.character} />
				</div>
				<div
					id={nameContainer.id ?? "character-container"}
					className={nameContainer.className}
					style={nameContainer.style}
				>
					<DialogueCharacterName {...props.character} />
				</div>
				{children}
				{hasActionButton(props.action)}
			</>
		);
	}
	throw new Error(
		"Either `props.children` is not a function nor `props.character` does not exists"
	);
};

export const Dialogue = ({ container, ...childrenProps }: DialogueProps) => {
	const {
		containers: { dialogue },
	} = useLevonConfig();

	const containerProps = merge(
		dialogue ?? {},
		container ?? {}
	) as ContainerProps;

	return (
		<section {...containerProps}>
			<DialogueChildren {...childrenProps} />
		</section>
	);
};
