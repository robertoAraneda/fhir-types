import { IBackboneElement, IElement } from '../base';
import { DaysOfWeekType } from '../types';

export interface IPractitionerRoleAvailableTime extends IBackboneElement {
  daysOfWeek?: DaysOfWeekType[]
  allDay?: boolean;
  availableStartTime?: string;
  availableEndTime?: string;
  _daysOfWeek?: IElement[];
  _allDay?: IElement;
  _availableStartTime?: IElement;
  _availableEndTime?: IElement;
}
