import { ReactElement, ReactNode, isValidElement } from "react";
import { ContainerProps } from "../types.js";

export const useSlots = (components: ReactNode[] | undefined | null) => {
  const slots: Record<string, ReactElement<ContainerProps>> = {};

  if (components) {
    components.forEach((component) => {
      if (isValidElement<ContainerProps>(component) && component.props.slot) {
        slots[component.props.slot as string] = component;
      }
    });
  }

  return slots;
};
