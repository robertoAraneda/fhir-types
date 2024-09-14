import { IBackboneElement, IElement } from '../base';
import { DaysOfWeekType } from '../types';

export interface IHealthcareServiceAvailableTime extends IBackboneElement {
  /**
   * @description Indicates which days of the week are available between the start and end Times.
   * @description mon | tue | wed | thu | fri | sat | sun
   * @see <a href="https://hl7.org/fhir/R4/valueset-days-of-week.html">DaysOfWeek</a>
   */
  daysOfWeek?: DaysOfWeekType[];

  /**
   * @description Is this always available? (hence times are irrelevant) e.g. 24 hour service.
   */
  allDay?: boolean;

  /**
   * @description The opening time of day. Note: If the AllDay flag is set, then this time is ignored.
   */
  availableStartTime?: string;

  /**
   * @description The closing time of day. Note: If the AllDay flag is set, then this time is ignored.
   */
  availableEndTime?: string;

  // Extensions attributes
  /**
   * @description Extensions for daysOfWeek
   */
  _daysOfWeek?: IElement[];

  /**
   * @description Extensions for allDay
   */
  _allDay?: IElement;

  /**
   * @description Extensions for availableStartTime
   */
  _availableStartTime?: IElement;

  /**
   * @description Extensions for availableEndTime
   */
  _availableEndTime?: IElement;
}
