import { EncounterStatusEnum } from '../enums/EncounterStatusEnum';

const typesArray = Object.values(EncounterStatusEnum).map((value: any) => {
  return value;
}) as string[];

export type EncounterStatusType = (typeof typesArray)[number];
