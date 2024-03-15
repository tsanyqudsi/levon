import { merge } from "ts-deepmerge";
import { ContainerProps } from "@levon/utils";

export type DefaultConfigProps = ContainerProps & {
	assetPath?: string;
};

export type LevonConfigProps = {
	containers: {
		scenes?: DefaultConfigProps;
		character?: DefaultConfigProps;
		dialogue?: DefaultConfigProps;
	};
	dialoguesPath: string;
};

const defaultConfig: LevonConfigProps = {
	containers: {},
	dialoguesPath: "./src/assets/dialogues",
};

export const config = (userConfig: Partial<LevonConfigProps>) =>
	merge(defaultConfig, userConfig);
