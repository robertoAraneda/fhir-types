import { EncounterLocationStatusEnum } from '../enums/EncounterLocationStatusEnum';

const typesArray = Object.values(EncounterLocationStatusEnum).map((value: any) => {
  return value;
}) as string[];

export type EncounterLocationStatusType = (typeof typesArray)[number];
