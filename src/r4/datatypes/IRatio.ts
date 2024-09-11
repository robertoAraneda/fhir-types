import { IElement } from '../base';
import { IQuantity } from './IQuantity';

export interface IRatio extends IElement {
  /**
   * @description The value of the numerator.
   */
  numerator?: IQuantity;

  /**
   * @description The value of the denominator.
   */
  denominator?: IQuantity;
}
