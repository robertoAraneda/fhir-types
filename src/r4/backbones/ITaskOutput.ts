import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept } from '../datatypes';

export interface ITaskOutput extends IBackboneElement {
  /**
   * @description The name of the Output parameter.
   */
  type: ICodeableConcept;

  /**
   * @description The value of the Output parameter as a basic type.
   */
  value: unknown;
}
