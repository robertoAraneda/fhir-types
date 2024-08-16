import { IAllergyIntoleranceReaction } from '../backbones';
import { IDomainResource, IElement } from '../base';
import { IAge, IAnnotation, ICodeableConcept, IIdentifier, IPeriod, IRange, IReference } from '../datatypes';
import {
  AllergyIntoleranceCategoryType,
  AllergyIntoleranceCriticalityType,
  AllergyIntoleranceTypeType,
} from '../types';

export interface IAllergyIntolerance extends IDomainResource {
  /**
   * @description Business identifiers assigned to this AllergyIntolerance by the performer or other systems which remain constant as the resource is updated and propagates from server to server.
   */
  identifier?: IIdentifier[];

  /**
   * @description The clinical status of the allergy or intolerance.
   */
  clinicalStatus?: ICodeableConcept;

  /**
   * @description Assertion about certainty associated with the propensity, or potential risk, of a reaction to the identified substance (including pharmaceutical product).
   */
  verificationStatus?: ICodeableConcept;

  /**
   * @description Identification of the underlying physiological mechanism for the reaction risk.
   * @description allergy | intolerance
   * @see <a href="https://hl7.org/fhir/R4/valueset-allergy-intolerance-type.html">AllergyIntoleranceType</a>
   */
  type?: AllergyIntoleranceTypeType;

  /**
   * @description Category of the identified substance.
   * @description food | medication | environment | biologic
   * @see <a href="https://hl7.org/fhir/R4/valueset-allergy-intolerance-category.html">AllergyIntoleranceCategory</a>
   */
  category?: AllergyIntoleranceCategoryType[];

  /**
   * @description Estimate of the potential clinical harm, or seriousness, of the reaction to the identified substance.
   * @description low | high | unable-to-assess
   * @see <a href="https://hl7.org/fhir/R4/valueset-allergy-intolerance-criticality.html"AllergyIntoleranceCriticality</a>
   */
  criticality?: AllergyIntoleranceCriticalityType;

  /**
   * @description Code for an allergy or intolerance statement (either a positive or a negated/excluded statement).
   */
  code?: ICodeableConcept;

  /**
   * @description The patient who has the allergy or intolerance.
   */
  patient: IReference;

  /**
   * @description The encounter when the allergy or intolerance was asserted.
   */
  encounter?: IReference;

  /**
   * @description Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
   */
  onsetDateTime?: string;

  /**
   * @description Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
   */
  onsetAge?: IAge;

  /**
   * @description Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
   */
  onsetPeriod?: IPeriod;

  /**
   * @description Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
   */
  onsetRange?: IRange;

  /**
   * @description Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
   */
  onsetString?: string;

  /**
   * @description The recordedDate represents when this particular AllergyIntolerance record was created in the system, which is often a system-generated date.
   */
  recordedDate?: string;

  /**
   * @description Individual who recorded the record and takes responsibility for its content.
   */
  recorder?: IReference;

  /**
   * @description The source of the information about the allergy that is recorded.
   */
  asserter?: IReference;

  /**
   * @description Represents the date and/or time of the last known occurrence of a reaction event.
   */
  lastOccurrence?: string;

  /**
   * @description Additional narrative about the propensity for the Adverse Reaction, not captured in other fields.
   */
  note?: IAnnotation[];

  /**
   * @description Details about each adverse reaction event linked to exposure to the identified substance.
   */
  reaction?: IAllergyIntoleranceReaction[];

  // Extensions attributes
  /**
   * @description Extension for type
   */
  _type?: IElement;

  /**
   * @description Extension for category
   */
  _category?: IElement[];

  /**
   * @description Extension for criticality
   */
  _criticality?: IElement;

  /**
   * @description Extension for onsetDateTime
   */
  _onsetDateTime?: IElement;

  /**
   * @description Extension for onsetString
   */
  _onsetString?: IElement;

  /**
   * @description Extension for recordedDate
   */
  _recordedDate?: IElement;

  /**
   * @description Extension for lastOccurrence
   */
  _lastOccurrence?: IElement;
}
