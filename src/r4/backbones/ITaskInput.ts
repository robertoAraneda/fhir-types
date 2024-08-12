import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept } from '../datatypes';

export interface ITaskInput extends IBackboneElement {
  /**
   * @description A code or description indicating how the input is intended to be used as part of the task execution.
   */
  type: ICodeableConcept;

  /**
   * @description The value of the input parameter as a basic type.
   */
  value: unknown;
}
