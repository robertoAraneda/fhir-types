import { IBackboneElement } from '../base';
import { ICodeableConcept, IReference } from '../datatypes';

export interface IProcedureFocalDevice extends IBackboneElement {
  /**
   * @description The kind of change that happened to the device during the procedure.
   */
  action?: ICodeableConcept;

  /**
   * @description The device that was manipulated (changed) during the procedure.
   */
  manipulated: IReference;
}
