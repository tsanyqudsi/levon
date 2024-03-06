import React, { createContext, useContext } from "react";
import { LevonConfigProps } from "../libs/config";

const LevonContext = createContext<LevonConfigProps>({} as LevonConfigProps);

type LevonProviderProps = {
	config: LevonConfigProps;
	children: React.ReactNode;
};

export const LevonProvider = (props: LevonProviderProps) => {
	return (
		<LevonContext.Provider value={props.config}>
			{props.children}
		</LevonContext.Provider>
	);
};

export const useLevonConfig = () => {
	return useContext(LevonContext);
};
