export { config } from "./libs/config.js";
export type { LevonConfigProps } from "./libs/config.js";

export { Dialogue } from "./components/dialogue.js";
export type { DialogueProps } from "./components/dialogue.js";

export {
	MenuScene,
	StoryScene,
	MovieScene,
	CreditsScene,
	DialogueScene,
} from "./components/scenes.js";
export type { SceneProps } from "./components/scenes.js";

export { useLevonConfig, LevonProvider } from "./components/context.js";
