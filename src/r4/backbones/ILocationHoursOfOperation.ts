import { IBackboneElement, IElement } from '../base';
import { DaysOfWeekType } from '../types';

export interface ILocationHoursOfOperation extends IBackboneElement {
  daysOfWeek?: DaysOfWeekType[];
  allDay?: boolean;
  openingTime?: string;
  closingTime?: string;
  _allDay?: IElement;
  _openingTime?: IElement;
  _closingTime?: IElement;
  _daysOfWeek?: IElement[];
}
