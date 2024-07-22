import { DatatypeEnum } from '../enums';

export const typesArray = Object.values(DatatypeEnum).map((value: any) => {
  return value;
}) as string[];

export type DatatypeType = (typeof typesArray)[number];
