import { IElement } from '../base';
import { QuantityComparatorType } from '../types';

export interface IAge extends IElement {
  /**
   * @description The value of the measured amount. The value includes an implicit precision in the presentation of the value.
   */
  value?: number;

  /**
   * @description How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is "<" , then the real value is < stated value.
   * @description < | <= | >= | >
   * @see <a href="https://hl7.org/fhir/R4/valueset-quantity-comparator.html">QuantityComparator</a>
   */
  comparator?: QuantityComparatorType;

  /**
   * @description A human-readable form of the unit.
   */
  unit?: string;

  /**
   * @description The identification of the system that provides the coded form of the unit.
   */
  system?: string;

  /**
   * @description A computer processable form of the unit in some unit representation system.
   */
  code?: string;

  // Extensions attributes
  /**
   * @description Extension for value
   */
  _value?: IElement;

  /**
   * @description Extension for comparator
   */
  _comparator?: IElement;

  /**
   * @description Extension for unit
   */
  _unit?: IElement;

  /**
   * @description Extension for system
   */
  _system?: IElement;

  /**
   * @description Extension for code
   */
  _code?: IElement;
}
