import { IBackboneElement, IElement } from '../base';
import { DaysOfWeekEnum } from '../enums';
import { DaysOfWeekType } from '../types';
declare type LocationHoursOfOperationDaysOfWeek = DaysOfWeekEnum | DaysOfWeekType;
export interface ILocationHoursOfOperation extends IBackboneElement {
    daysOfWeek?: LocationHoursOfOperationDaysOfWeek[];
    allDay?: boolean;
    openingTime?: string;
    closingTime?: string;
    _allDay?: IElement;
    _openingTime?: IElement;
    _closingTime?: IElement;
    _daysOfWeek?: IElement[];
}
export {};
