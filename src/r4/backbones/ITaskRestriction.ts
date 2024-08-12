import { IBackboneElement, IElement } from '../base';
import { IReference } from '../datatypes';

export interface ITaskRestriction extends IBackboneElement {
  /**
   * @description Indicates the number of times the requested action should occur.
   */
  repetitions?: number;

  /**
   * @description Over what time-period is fulfillment sought.
   */
  period?: string;

  /**
   * @description For requests that are targeted to more than on potential recipient/target, for whom is fulfillment sought?
   */
  recipient?: IReference[];

  // Extensions attributes
  /**
   * @description Extensions for repetitions
   */
  _repetitions?: IElement;

  /**
   * @description Extensions for period
   */
  _period?: IElement;
}
