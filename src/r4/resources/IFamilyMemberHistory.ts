import { IFamilyMemberHistoryCondition } from '../backbones';
import { IDomainResource, IElement } from '../base';
import { IAge, IAnnotation, ICodeableConcept, IIdentifier, IPeriod, IRange, IReference } from '../datatypes';
import { FamilyHistoryStatusType } from '../types';

export interface IFamilyMemberHistory extends IDomainResource {
  /**
   * @description Business identifiers assigned to this family member history by the performer or other systems which remain constant as the resource is updated and propagates from server to server.
   */
  identifier?: IIdentifier[];

  /**
   * @description The URL pointing to a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this FamilyMemberHistory.
   */
  instantiatesCanonical?: string[];

  /**
   * @description The URL pointing to an externally maintained protocol, guideline, orderset or other definition that is adhered to in whole or in part by this FamilyMemberHistory.
   */
  instantiatesUri?: string[];

  /**
   * @description A code specifying the status of the record of the family history of a specific family member.
   * @description partial | completed | entered-in-error | health-unknown
   * @see <a href="https://hl7.org/fhir/R4/valueset-history-status.html">FamilyHistoryStatus</a>
   */
  status: FamilyHistoryStatusType;

  /**
   * @description Describes why the family member's history is not available.
   */
  dataAbsentReason?: ICodeableConcept;

  /**
   * @description The person who this history concerns.
   */
  patient: IReference;

  /**
   * @description The date (and possibly time) when the family member history was recorded or last updated.
   */
  date?: string;

  /**
   * @description This will either be a name or a description; e.g. "Aunt Susan", "my cousin with the red hair".
   */
  name?: string;

  /**
   * @description The type of relationship this person has to the patient (father, mother, brother etc.).
   */
  relationship: ICodeableConcept;

  /**
   * @description The birth sex of the family member.
   */
  sex?: ICodeableConcept;

  /**
   * @description The actual or approximate date of birth of the relative.
   */
  bornPeriod?: IPeriod;

  /**
   * @description The actual or approximate date of birth of the relative.
   */
  bornDate?: string;

  /**
   * @description The actual or approximate date of birth of the relative.
   */
  bornString?: string;

  /**
   * @description The age of the relative at the time the family member history is recorded.
   */
  ageAge?: IPeriod;

  /**
   * @description The age of the relative at the time the family member history is recorded.
   */
  ageRange?: IRange;

  /**
   * @description The age of the relative at the time the family member history is recorded.
   */
  ageString?: string;

  /**
   * @description If true, indicates that the age value specified is an estimated value.
   */
  estimatedAge?: boolean;

  /**
   * @description Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
   */
  deceasedBoolean?: boolean;

  /**
   * @description Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
   */
  deceasedAge?: IAge;

  /**
   * @description Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
   */
  deceasedRange?: IRange;

  /**
   * @description Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
   */
  deceasedDate?: string;

  /**
   * @description Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
   */
  deceasedString?: string;

  /**
   * @description Describes why the family member history occurred in coded or textual form.
   */
  reasonCode?: ICodeableConcept[];

  /**
   * @description Indicates a Condition, Observation, AllergyIntolerance, or QuestionnaireResponse that justifies this family member history event.
   */
  reasonReference?: IReference[];

  /**
   * @description This property allows a non condition-specific note to the made about the related person. Ideally, the note would be in the condition property, but this is not always possible.
   */
  note?: IAnnotation[];

  /**
   * @description The significant Conditions (or condition) that the family member had. This is a repeating section to allow a system to represent more than one condition per resource, though there is nothing stopping multiple resources - one per condition.
   */
  condition?: IFamilyMemberHistoryCondition[];

  // Extensions attributes
  /**
   * @description Extension for instantiatesCanonical
   */
  _instantiatesCanonical?: IElement[];

  /**
   * @description Extension for instantiatesUri
   */
  _instantiatesUri?: IElement[];

  /**
   * @description Extension for status
   */
  _status?: IElement;

  /**
   * @description Extension for date
   */
  _date?: IElement;

  /**
   * @description Extension for name
   */
  _name?: IElement;

  /**
   * @description Extension for estimatedAge
   */
  _estimatedAge?: IElement;
}
