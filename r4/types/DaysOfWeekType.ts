import { DaysOfWeekEnum } from '../enums';

const typesArray = Object.values(DaysOfWeekEnum).map((value: any) => {
  return value;
}) as string[];

export type DaysOfWeekType = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';
