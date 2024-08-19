import { IObservationComponent, IObservationReferenceRange, ITiming } from '../backbones';
import { IDomainResource, IElement } from '../base';
import {
  IAnnotation,
  ICodeableConcept,
  IIdentifier,
  IPeriod,
  IQuantity,
  IRange,
  IRatio,
  IReference,
  ISampledData,
} from '../datatypes';
import { ObservationStatusType } from '../types';

/**
 * @name IObservation
 * @description Measurements and simple assertions made about a patient, device or other subject.
 * @see <a href="https://hl7.org/fhir/R4/observation.html">Observation</a>
 * @version R4
 * @extends {IDomainResource}
 * @author Claudia Alarcón Lazo
 */
export interface IObservation extends IDomainResource {
  /**
   * @description A unique identifier assigned to this observation.
   */
  identifier?: IIdentifier[];

  /**
   * @description A plan, proposal or order that is fulfilled in whole or in part by this event. For example, a MedicationRequest may require a patient to have laboratory test performed before it is dispensed.
   */
  basedOn?: IReference[];

  /**
   * @description A larger event of which this particular Observation is a component or step. For example, an observation as part of a procedure.
   */
  partOf?: IReference[];

  /**
   * @description The status of the result value.
   * @description registered | preliminary | final | amended | corrected | cancelled | entered-in-error | unknown
   * @see <a href="https://hl7.org/fhir/R4/valueset-observation-status.html">ObservationStatus</a>
   */
  status: ObservationStatusType;

  /**
   * @description A code that classifies the general type of observation being made.
   */
  category?: ICodeableConcept[];

  /**
   * @description Describes what was observed. Sometimes this is called the observation "name".
   */
  code: ICodeableConcept;

  /**
   * @description The patient, or group of patients, location, or device this observation is about and into whose record the observation is placed. If the actual focus of the observation is different from the subject (or a sample of, part, or region of the subject), the focus element or the code itself specifies the actual focus of the observation.
   */
  subject: IReference;

  /**
   * @description The actual focus of an observation when it is not the patient of record representing something or someone associated with the patient such as a spouse, parent, fetus, or donor. For example, fetus observations in a mother's record. The focus of an observation could also be an existing condition, an intervention, the subject's diet, another observation of the subject, or a body structure such as tumor or implanted device.
   */
  focus?: IReference[];

  /**
   * @description The healthcare event  (e.g. a patient and healthcare provider interaction) during which this observation is made.
   */
  encounter?: IReference;

  /**
   * @description The time or time-period the observed value is asserted as being true. For biological subjects - e.g. human patients - this is usually called the "physiologically relevant time".
   */
  effectiveDateTime?: string;

  /**
   * @description The time or time-period the observed value is asserted as being true. For biological subjects - e.g. human patients - this is usually called the "physiologically relevant time".
   */
  effectivePeriod?: IPeriod;

  /**
   * @description The time or time-period the observed value is asserted as being true. For biological subjects - e.g. human patients - this is usually called the "physiologically relevant time".
   */
  effectiveTiming?: ITiming;

  /**
   * @description The time or time-period the observed value is asserted as being true. For biological subjects - e.g. human patients - this is usually called the "physiologically relevant time".
   */
  effectiveInstant?: string;

  /**
   * @description The date and time this version of the observation was made available to providers, typically after the results have been reviewed and verified.
   */
  issued?: string;

  /**
   * @description Who was responsible for asserting the observed value as "true".
   */
  performer?: IReference[];

  /**
   * @description The information determined as a result of making the observation, if the information has a simple value.
   */
  valueQuantity?: IQuantity;

  /**
   * @description The information determined as a result of making the observation, if the information has a simple value.
   */
  valueCodeableConcept?: ICodeableConcept;

  /**
   * @description The information determined as a result of making the observation, if the information has a simple value.
   */
  valueString?: string;

  /**
   * @description The information determined as a result of making the observation, if the information has a simple value.
   */
  valueBoolean?: boolean;

  /**
   * @description The information determined as a result of making the observation, if the information has a simple value.
   */
  valueInteger?: number;

  /**
   * @description The information determined as a result of making the observation, if the information has a simple value.
   */
  valueRange?: IRange;

  /**
   * @description The information determined as a result of making the observation, if the information has a simple value.
   */
  valueRatio?: IRatio;

  /**
   * @description The information determined as a result of making the observation, if the information has a simple value.
   */
  valueSampledData?: ISampledData;

  /**
   * @description The information determined as a result of making the observation, if the information has a simple value.
   */
  valueTime?: string;

  /**
   * @description The information determined as a result of making the observation, if the information has a simple value.
   */
  valueDateTime?: string;

  /**
   * @description The information determined as a result of making the observation, if the information has a simple value.
   */
  valuePeriod?: IPeriod;

  /**
   * @description Provides a reason why the expected value in the element Observation.value[x] is missing.
   */
  dataAbsentReason?: ICodeableConcept;

  /**
   * @description A categorical assessment of an observation value. For example, high, low, normal.
   */
  interpretation?: ICodeableConcept[];

  /**
   * @description Comments about the observation or the results.
   */
  note?: IAnnotation[];

  /**
   * @description Indicates the site on the subject's body where the observation was made (i.e. the target site).
   */
  bodySite?: ICodeableConcept;

  /**
   * @description Indicates the mechanism used to perform the observation.
   */
  method?: ICodeableConcept;

  /**
   * @description The specimen that was used when this observation was made.
   */
  specimen?: IReference;

  /**
   * @description The device used to generate the observation data.
   */
  device?: IReference;

  /**
   * @description Guidance on how to interpret the value by comparison to a normal or recommended range. Multiple reference ranges are interpreted as an "OR". In other words, to represent two distinct target populations, two referenceRange elements would be used.
   */
  referenceRange?: IObservationReferenceRange[];

  /**
   * @description This observation is a group observation (e.g. a battery, a panel of tests, a set of vital sign measurements) that includes the target as a member of the group.
   */
  hasMember?: IReference[];

  /**
   * @description The target resource that represents a measurement from which this observation value is derived. For example, a calculated anion gap or a fetal measurement based on an ultrasound image.
   */
  derivedFrom?: IReference[];

  /**
   * @description Some observations have multiple component observations. These component observations are expressed as separate code value pairs that share the same attributes. Examples include systolic and diastolic component observations for blood pressure measurement and multiple component observations for genetics observations.
   */
  component?: IObservationComponent[];

  // Extensions attributes
  /**
   * @description Extension for status
   */
  _status?: IElement;

  /**
   * @description Extension for issued
   */
  _issued?: IElement;
}
