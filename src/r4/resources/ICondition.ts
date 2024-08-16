import { IConditionEvidence, IConditionStage } from '../backbones';
import { IDomainResource, IElement } from '../base';
import { IAge, IAnnotation, ICodeableConcept, IIdentifier, IPeriod, IRange, IReference } from '../datatypes';

export interface ICondition extends IDomainResource {
  /**
   * @description Business identifiers assigned to this condition by the performer or other systems which remain constant as the resource is updated and propagates from server to server.
   */
  identifier?: IIdentifier[];

  /**
   * @description The clinical status of the condition.
   */
  clinicalStatus?: ICodeableConcept;

  /**
   * @description The verification status to support the clinical status of the condition.
   */
  verificationStatus?: ICodeableConcept;

  /**
   * @description A category assigned to the condition.
   */
  category?: ICodeableConcept[];

  /**
   * @description A subjective assessment of the severity of the condition as evaluated by the clinician.
   */
  severity?: ICodeableConcept;

  /**
   * @description Identification of the condition, problem or diagnosis.
   */
  code?: ICodeableConcept;

  /**
   * @description The anatomical location where this condition manifests itself.
   */
  bodySite?: ICodeableConcept[];

  /**
   * @description Indicates the patient or group who the condition record is associated with.
   */
  subject: IReference;

  /**
   * @description The Encounter during which this Condition was created or to which the creation of this record is tightly associated.
   */
  encounter?: IReference;

  /**
   * @description Estimated or actual date or date-time  the condition began, in the opinion of the clinician.
   */
  onsetDateTime?: string;

  /**
   * @description Estimated or actual date or date-time  the condition began, in the opinion of the clinician.
   */
  onsetAge?: IAge;

  /**
   * @description Estimated or actual date or date-time  the condition began, in the opinion of the clinician.
   */
  onsetPeriod?: IPeriod;

  /**
   * @description Estimated or actual date or date-time  the condition began, in the opinion of the clinician.
   */
  onsetRange?: IRange;

  /**
   * @description Estimated or actual date or date-time  the condition began, in the opinion of the clinician.
   */
  onsetString?: string;

  /**
   * @description The date or estimated date that the condition resolved or went into remission. This is called "abatement" because of the many overloaded connotations associated with "remission" or "resolution" - Conditions are never really resolved, but they can abate.
   */
  abatementDateTime?: string;

  /**
   * @description The date or estimated date that the condition resolved or went into remission. This is called "abatement" because of the many overloaded connotations associated with "remission" or "resolution" - Conditions are never really resolved, but they can abate.
   */
  abatementAge?: IAge;

  /**
   * @description The date or estimated date that the condition resolved or went into remission. This is called "abatement" because of the many overloaded connotations associated with "remission" or "resolution" - Conditions are never really resolved, but they can abate.
   */
  abatementPeriod?: IPeriod;

  /**
   * @description The date or estimated date that the condition resolved or went into remission. This is called "abatement" because of the many overloaded connotations associated with "remission" or "resolution" - Conditions are never really resolved, but they can abate.
   */
  abatementRange?: IRange;

  /**
   * @description The date or estimated date that the condition resolved or went into remission. This is called "abatement" because of the many overloaded connotations associated with "remission" or "resolution" - Conditions are never really resolved, but they can abate.
   */
  abatementString?: string;

  /**
   * @description The recordedDate represents when this particular Condition record was created in the system, which is often a system-generated date.
   */
  recordedDate?: string;

  /**
   * @description Individual who recorded the record and takes responsibility for its content.
   */
  recorder?: IReference;

  /**
   * @description Individual who is making the condition statement.
   */
  asserter?: IReference;

  /**
   * @description Clinical stage or grade of a condition. May include formal severity assessments.
   */
  stage?: IConditionStage[];

  /**
   * @description Supporting evidence / manifestations that are the basis of the Condition's verification status, such as evidence that confirmed or refuted the condition.
   */
  evidence?: IConditionEvidence[];

  /**
   * @description Additional information about the Condition. This is a general notes/comments entry for description of the Condition, its diagnosis and prognosis.
   */
  note?: IAnnotation[];

  // Extensions attributes
  /**
   * @description Extensions for onsetDateTime
   */
  _onsetDateTime?: IElement;

  /**
   * @description Extensions for onsetString
   */
  _onsetString?: IElement;

  /**
   * @description Extensions for abatementDateTime
   */
  _abatementDateTime?: IElement;

  /**
   * @description Extensions for abatementString
   */
  _abatementString?: IElement;

  /**
   * @description Extensions for recordedDate
   */
  _recordedDate?: IElement;
}
