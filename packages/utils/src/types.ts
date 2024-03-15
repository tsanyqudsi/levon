export type ContainerProps = {
	id?: string;
	style?: React.CSSProperties;
	className?: string;
	slot?: string;
};

export type ActionProps = {
	element: React.ReactElement;
	onClick: () => void;
};
