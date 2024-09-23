import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept } from '../datatypes';

/**
 * @name IMedicationRequestSubstitution
 * @description An order or request for both supply of the medication and the instructions for administration of the medication to a patient. The resource is called \"MedicationRequest\" rather than \"MedicationPrescription\" or \"MedicationOrder\" to generalize the use across inpatient and outpatient settings, including care plans, etc., and to harmonize with workflow patterns.
 * @see <a href="https://hl7.org/fhir/R4/medicationrequest-definitions.html#MedicationRequest.substitution">MedicationRequestSubstitution</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IMedicationRequestSubstitution extends IBackboneElement {
  /**
   * @description True if the prescriber allows a different drug to be dispensed from what was prescribed.
   */
  allowedBoolean?: boolean;

  /**
   * @description Extensions for allowedBoolean
   */
  _allowedBoolean?: IElement;

  /**
   * @description True if the prescriber allows a different drug to be dispensed from what was prescribed.
   */
  allowedCodeableConcept?: ICodeableConcept;

  /**
   * @description Indicates the reason for the substitution, or why substitution must or must not be performed.
   */
  reason?: ICodeableConcept;
}
