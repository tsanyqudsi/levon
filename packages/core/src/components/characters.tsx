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
	name: CharacterNameProps[];
	image: CharacterImageProps[];
};

export const Characters = (props: Omit<CharacterProps, "nameContainer">) => {
	if (props.image.length == 0) return null;

	return (
		<ul {...props.imageContainer}>
			{props.name.map((name, index) => {
				return (
					<li key={`${name.value}`}>
						<img
							src={props.image[index].value}
							width={props.image[index].width}
							height={props.image[index].height}
							alt={props.image[index].alt ?? name.value}
						/>
					</li>
				);
			})}
		</ul>
	);
};
