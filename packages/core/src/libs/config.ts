import { merge } from "ts-deepmerge";
import { ContainerProps } from "../types";

type DefaultConfigProps = ContainerProps & {
	assetPath?: string;
};

export type LevonConfigProps = {
	containers?: {
		scenes?: DefaultConfigProps;
		characters?: DefaultConfigProps;
		dialogues?: DefaultConfigProps;
	};
	dialoguesPath: string;
};

const defaultConfig: LevonConfigProps = {
	dialoguesPath: "./src/assets/dialogues",
};

export const config = (userConfig: Partial<LevonConfigProps>) =>
	merge(defaultConfig, userConfig);
