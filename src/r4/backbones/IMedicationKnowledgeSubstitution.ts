import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept } from '../datatypes';

/**
 * @name IMedicationKnowledgeSubstitution
 * @description Information about a medication that is used to support knowledge.
 * @see <a href="https://hl7.org/fhir/R4/medicationknowledge-definitions.html#MedicationKnowledge.regulatory.substitution">MedicationKnowledgeSubstitution</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IMedicationKnowledgeSubstitution extends IBackboneElement {
  /**
   * @description Specifies the type of substitution allowed.
   */
  type: ICodeableConcept;

  /**
   * @description Specifies if regulation allows for changes in the medication when dispensing.
   */
  allowed: boolean;

  /**
   * @description Extensions for allowed
   */
  _allowed?: IElement;
}
