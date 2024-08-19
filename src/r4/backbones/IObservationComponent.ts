import { IBackboneElement } from '../base';
import { ICodeableConcept, IPeriod, IQuantity, IRange, IRatio, ISampledData } from '../datatypes';
import { IObservationReferenceRange } from './IObservationReferenceRange';

/**
 * @name IObservationComponent
 * @description Some observations have multiple component observations. These component observations are expressed as separate code value pairs that share the same attributes. Examples include systolic and diastolic component observations for blood pressure measurement and multiple component observations for genetics observations.
 * @see <a href="https://hl7.org/fhir/R4/observation-definitions.html#Observation.component">ObservationComponent</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IObservationComponent extends IBackboneElement {
  /**
   * @description Describes what was observed. Sometimes this is called the observation "code".
   */
  code: ICodeableConcept;

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
   * @description Guidance on how to interpret the value by comparison to a normal or recommended range.
   */
  referenceRange?: IObservationReferenceRange[];
}
