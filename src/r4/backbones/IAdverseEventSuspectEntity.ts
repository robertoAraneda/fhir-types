import { IBackboneElement } from '../base';
import { IReference } from '../datatypes';
import { IAdverseEventCausality } from './IAdverseEventCausality';

/**
 * @name IAdverseEventSuspectEntity
 * @description Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death.
 * @see <a href="https://hl7.org/fhir/R4/adverseevent-definitions.html#AdverseEvent.suspectEntity">AdverseEventSuspectEntity</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IAdverseEventSuspectEntity extends IBackboneElement {
  /**
   * @description Identifies the actual instance of what caused the adverse event.  May be a substance, medication, medication administration, medication statement or a device.
   */
  instance: IReference;

  /**
   * @description Information on the possible cause of the event.
   */
  causality?: IAdverseEventCausality[];
}
