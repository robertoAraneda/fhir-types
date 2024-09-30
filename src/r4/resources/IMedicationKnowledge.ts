import {
  IMedicationKnowledgeAdministrationGuidelines,
  IMedicationKnowledgeCost,
  IMedicationKnowledgeDrugCharacteristic,
  IMedicationKnowledgeIngredient,
  IMedicationKnowledgeKinetics,
  IMedicationKnowledgeMedicineClassification,
  IMedicationKnowledgeMonitoringProgram,
  IMedicationKnowledgeMonograph,
  IMedicationKnowledgePackaging,
  IMedicationKnowledgeRegulatory,
  IMedicationKnowledgeRelatedMedicationKnowledge,
} from '../backbones';
import { IDomainResource, IElement } from '../base';
import { ICodeableConcept, IReference, ISimpleQuantity } from '../datatypes';
import { MedicationKnowledgeStatusCodesType } from '../types';

/**
 * @name IMedicationKnowledge
 * @description Information about a medication that is used to support knowledge.
 * @see <a href="https://hl7.org/fhir/R4/medicationknowledge.html">MedicationKnowledge</a>
 * @version R4
 * @extends {IDomainResource}
 * @author Claudia Alarcón Lazo
 */
export interface IMedicationKnowledge extends IDomainResource {
  /**
   * @description A code that specifies this medication, or a textual description if no code is available. Usage note: This could be a standard medication code such as a code from RxNorm, SNOMED CT, IDMP etc. It could also be a national or local formulary code, optionally with translations to other code systems.
   */
  code?: ICodeableConcept;

  /**
   * @description A code to indicate if the medication is in active use.  The status refers to the validity about the information of the medication and not to its medicinal properties.
   * @description active | inactive | entered-in-error
   * @see <a href="https://hl7.org/fhir/R4/valueset-medicationknowledge-status.html">MedicationKnowledgeStatusCodes</a>
   */
  status?: MedicationKnowledgeStatusCodesType;

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
  doseForm?: ICodeableConcept;

  /**
   * @description Specific amount of the drug in the packaged product.  For example, when specifying a product that has the same strength (For example, Insulin glargine 100 unit per mL solution for injection), this attribute provides additional clarification of the package amount (For example, 3 mL, 10mL, etc.).
   */
  amount?: ISimpleQuantity;

  /**
   * @description Additional names for a medication, for example, the name(s) given to a medication in different countries.  For example, acetaminophen and paracetamol or salbutamol and albuterol.
   */
  synonym?: string[];

  /**
   * @description Extensions for synonym
   */
  _synonym?: IElement[];

  /**
   * @description Associated or related knowledge about a medication.
   */
  relatedMedicationKnowledge?: IMedicationKnowledgeRelatedMedicationKnowledge[];

  /**
   * @description Associated or related medications.  For example, if the medication is a branded product (e.g. Crestor), this is the Therapeutic Moeity (e.g. Rosuvastatin) or if this is a generic medication (e.g. Rosuvastatin), this would link to a branded product (e.g. Crestor).
   */
  associatedMedication?: IReference[];

  /**
   * @description Category of the medication or product (e.g. branded product, therapeutic moeity, generic product, innovator product, etc.).
   */
  productType?: ICodeableConcept[];

  /**
   * @description Associated documentation about the medication.
   */
  monograph?: IMedicationKnowledgeMonograph[];

  /**
   * @description Identifies a particular constituent of interest in the product.
   */
  ingredient?: IMedicationKnowledgeIngredient[];

  /**
   * @description The instructions for preparing the medication.
   */
  preparationInstruction?: string;

  /**
   * @description Extensions for preparationInstruction
   */
  _preparationInstruction?: IElement;

  /**
   * @description The intended or approved route of administration.
   */
  intendedRoute?: ICodeableConcept[];

  /**
   * @description The price of the medication.
   */
  cost?: IMedicationKnowledgeCost[];

  /**
   * @description The program under which the medication is reviewed.
   */
  monitoringProgram?: IMedicationKnowledgeMonitoringProgram[];

  /**
   * @description Guidelines for the administration of the medication.
   */
  administrationGuidelines?: IMedicationKnowledgeAdministrationGuidelines[];

  /**
   * @description Categorization of the medication within a formulary or classification system.
   */
  medicineClassification?: IMedicationKnowledgeMedicineClassification[];

  /**
   * @description Information that only applies to packages (not products).
   */
  packaging?: IMedicationKnowledgePackaging;

  /**
   * @description Specifies descriptive properties of the medicine, such as color, shape, imprints, etc.
   */
  drugCharacteristic?: IMedicationKnowledgeDrugCharacteristic[];

  /**
   * @description Potential clinical issue with or between medication(s) (for example, drug-drug interaction, drug-disease contraindication, drug-allergy interaction, etc.).
   */
  contraindication?: IReference[];

  /**
   * @description Regulatory information about a medication.
   */
  regulatory?: IMedicationKnowledgeRegulatory[];

  /**
   * @description The time course of drug absorption, distribution, metabolism and excretion of a medication from the body.
   */
  kinetics?: IMedicationKnowledgeKinetics[];
}
