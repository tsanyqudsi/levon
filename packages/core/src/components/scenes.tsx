import React from "react";

export type SceneProps = {
	id?: string;
	className?: string;
	style?: React.CSSProperties;
	children: React.ReactNode;
};

export const StoryScene = ({ children, ...props }: SceneProps) => {
	return <section {...props}>{children}</section>;
};

export const MovieScene = ({ children, ...props }: SceneProps) => {
	return <section {...props}>{children}</section>;
};

export const MenuScene = ({ children, ...props }: SceneProps) => {
	return <section {...props}>{children}</section>;
};

export const DialogueScene = ({ children, ...props }: SceneProps) => {
	return <section {...props}>{children}</section>;
};

export const CreditsScene = ({ children, ...props }: SceneProps) => {
	return <section {...props}>{children}</section>;
};
