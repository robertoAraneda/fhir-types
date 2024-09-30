import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept } from '../datatypes';

/**
 * @name IMedicationKnowledgeMonitoringProgram
 * @description Information about a medication that is used to support knowledge.
 * @see <a href="https://hl7.org/fhir/R4/medicationknowledge-definitions.html#MedicationKnowledge.monitoringProgram">MedicationKnowledgeMonitoringProgram</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IMedicationKnowledgeMonitoringProgram extends IBackboneElement {
  /**
   * @description Type of program under which the medication is monitored.
   */
  type?: ICodeableConcept;

  /**
   * @description Name of the reviewing program.
   */
  name?: string;

  /**
   * @description Extensions for name
   */
  _name?: IElement;
}
