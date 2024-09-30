import { IBackboneElement } from '../base';
import { IDuration, ISimpleQuantity } from '../datatypes';

/**
 * @name IMedicationKnowledgeKinetics
 * @description Information about a medication that is used to support knowledge.
 * @see <a href="https://hl7.org/fhir/R4/medicationknowledge-definitions.html#MedicationKnowledge.kinetics">MedicationKnowledgeKinetics</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IMedicationKnowledgeKinetics extends IBackboneElement {
  /**
   * @description The drug concentration measured at certain discrete points in time.
   */
  areaUnderCurve?: ISimpleQuantity[];

  /**
   * @description The median lethal dose of a drug.
   */
  lethalDose50?: ISimpleQuantity[];

  /**
   * @description The time required for any specified property (e.g., the concentration of a substance in the body) to decrease by half.
   */
  halfLifePeriod?: IDuration;
}
