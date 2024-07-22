import { IBackboneElement, IElement } from '../base';
import { DaysOfWeekEnum } from '../enums';
import { DaysOfWeekType } from '../types';

type PractitionerRoleAvailableTimeDaysOfWeekType = DaysOfWeekEnum | DaysOfWeekType;

export interface IPractitionerRoleAvailableTime extends IBackboneElement {
  daysOfWeek?: PractitionerRoleAvailableTimeDaysOfWeekType[]
  allDay?: boolean;
  availableStartTime?: string;
  availableEndTime?: string;
  _daysOfWeek?: IElement[];
  _allDay?: IElement;
  _availableStartTime?: IElement;
  _availableEndTime?: IElement;
}
