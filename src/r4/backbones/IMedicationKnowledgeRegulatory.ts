import { IBackboneElement } from '../base';
import { IReference } from '../datatypes';
import { IMedicationKnowledgeMaxDispense } from './IMedicationKnowledgeMaxDispense';
import { IMedicationKnowledgeSchedule } from './IMedicationKnowledgeSchedule';
import { IMedicationKnowledgeSubstitution } from './IMedicationKnowledgeSubstitution';

/**
 * @name IMedicationKnowledgeRegulatory
 * @description Information about a medication that is used to support knowledge.
 * @see <a href="https://hl7.org/fhir/R4/medicationknowledge-definitions.html#MedicationKnowledge.regulatory">MedicationKnowledgeRegulatory</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IMedicationKnowledgeRegulatory extends IBackboneElement {
  /**
   * @description The authority that is specifying the regulations.
   */
  regulatoryAuthority: IReference;

  /**
   * @description Specifies if changes are allowed when dispensing a medication from a regulatory perspective.
   */
  substitution?: IMedicationKnowledgeSubstitution[];

  /**
   * @description Specifies the schedule of a medication in jurisdiction.
   */
  schedule?: IMedicationKnowledgeSchedule[];

  /**
   * @description The maximum number of units of the medication that can be dispensed in a period.
   */
  maxDispense?: IMedicationKnowledgeMaxDispense;
}
