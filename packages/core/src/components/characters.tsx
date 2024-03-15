import React from "react";
import { ContainerProps } from "@levon/utils";

export type CharacterNameProps = {
	value: string;
} & ContainerProps;

export type CharacterImageProps = {
	value: string;
	width: string | number | "auto";
	height: string | number | "auto";
	alt?: string;
} & ContainerProps;

export type CharacterProps = {
	nameContainer: ContainerProps;
	imageContainer?: ContainerProps;
	names: CharacterNameProps[];
	images: CharacterImageProps[];
};

export const Characters = (props: Omit<CharacterProps, "nameContainer">) => {
	if (props.images.length == 0) return null;

	return (
		<ul {...props.imageContainer}>
			{props.names.map((name, index) => {
				const image = props.images[index];
				return (
					<li key={`${name.value}`}>
						<img
							src={image.value}
							width={image.width}
							height={image.height}
							alt={image.alt ?? name.value}
						/>
					</li>
				);
			})}
		</ul>
	);
};
