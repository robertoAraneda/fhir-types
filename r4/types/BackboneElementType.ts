import { BackboneElementEnum } from '../enums';

export const typesArray = Object.values(BackboneElementEnum).map((value: any) => {
  return value;
}) as string[];

export type BackboneElementType = (typeof typesArray)[number];
