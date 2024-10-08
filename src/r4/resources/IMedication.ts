import { IMedicationBatch, IMedicationIngredient } from '../backbones';
import { IDomainResource, IElement } from '../base';
import { ICodeableConcept, IIdentifier, IRatio, IReference } from '../datatypes';
import { MedicationStatusCodesType } from '../types';

/**
 * @name IMedication
 * @description This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use.
 * @see <a href="https://hl7.org/fhir/R4/medication.html">Medication</a>
 * @version R4
 * @extends {IDomainResource}
 * @author Claudia Alarcón Lazo
 */
export interface IMedication extends IDomainResource {
  /**
   * @description Business identifier for this medication.
   */
  identifier?: IIdentifier[];

  /**
   * @description A code (or set of codes) that specify this medication, or a textual description if no code is available. Usage note: This could be a standard medication code such as a code from RxNorm, SNOMED CT, IDMP etc. It could also be a national or local formulary code, optionally with translations to other code systems.
   */
  code?: ICodeableConcept;

  /**
   * @description A code to indicate if the medication is in active use.
   * @description active | inactive | entered-in-error
   * @see <a href="https://hl7.org/fhir/R4/valueset-medication-status.html">MedicationStatusCodes</a>
   */
  status?: MedicationStatusCodesType;

  /**
   * @description Extensions for status
   */
  _status?: IElement;

  /**
   * @description Describes the details of the manufacturer of the medication product.  This is not intended to represent the distributor of a medication product.
   */
  manufacturer?: IReference;

  /**
   * @description Describes the form of the item.  Powder; tablets; capsule.
   */
  form?: ICodeableConcept;

  /**
   * @description Specific amount of the drug in the packaged product.  For example, when specifying a product that has the same strength (For example, Insulin glargine 100 unit per mL solution for injection), this attribute provides additional clarification of the package amount (For example, 3 mL, 10mL, etc.).
   */
  amount?: IRatio;

  /**
   * @description Identifies a particular constituent of interest in the product.
   */
  ingredient?: IMedicationIngredient[];

  /**
   * @description Information that only applies to packages (not products).
   */
  batch?: IMedicationBatch;
}
