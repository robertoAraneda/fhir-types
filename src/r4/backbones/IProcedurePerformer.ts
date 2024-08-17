import { IBackboneElement } from '../base';
import { ICodeableConcept, IReference } from '../datatypes';

export interface IProcedurePerformer extends IBackboneElement {
  /**
   * @description Distinguishes the type of involvement of the performer in the procedure. For example, surgeon, anaesthetist, endoscopist.
   */
  function?: ICodeableConcept;

  /**
   * @description The practitioner who was involved in the procedure.
   */
  actor: IReference;

  /**
   * @description The organization the device or practitioner was acting on behalf of.
   */
  onBehalfOf?: IReference;
}
