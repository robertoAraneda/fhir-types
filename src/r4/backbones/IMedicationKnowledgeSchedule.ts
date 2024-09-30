import { IBackboneElement } from '../base';
import { ICodeableConcept } from '../datatypes';

/**
 * @name IMedicationKnowledgeSchedule
 * @description Information about a medication that is used to support knowledge.
 * @see <a href="https://hl7.org/fhir/R4/medicationknowledge-definitions.html#MedicationKnowledge.regulatory.schedule">MedicationKnowledgeSchedule</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IMedicationKnowledgeSchedule extends IBackboneElement {
  /**
   * @description Specifies the specific drug schedule.
   */
  schedule: ICodeableConcept;
}
