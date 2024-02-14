import { ContainerProps } from "../types.js";

type RequiredSlotProps = {
  name: string;
  required: boolean;
  content: React.ReactElement<ContainerProps>;
};

type DefaultSlotProps = {
  name: string;
  content?: React.ReactElement<ContainerProps>;
};

export type SlotProps = RequiredSlotProps | DefaultSlotProps;

export const Slot = (props: SlotProps) => {
  if (Object.hasOwn(props, "require") && !props.content) {
    throw new Error(
      `${props.name} slot is required for ${Slot.constructor.name}`,
    );
  }

  return props.content;
};
