import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept, IReference } from '../datatypes';

/**
 * @name IImmunizationProtocolApplied
 * @description Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party.
 * @see <a href="https://hl7.org/fhir/R4/immunization-definitions.html#Immunization.protocolApplied">ImmunizationProtocolApplied</a>
 * @version R4
 * @extends {IBackboneElement}
 * @uthor Claudia Alarcón Lazo
 */
export interface IImmunizationProtocolApplied extends IBackboneElement {
  /**
   * @description One possible path to achieve presumed immunity against a disease - within the context of an authority.
   */
  series?: string;

  /**
   * @description Extensions for series
   */
  _series?: IElement;

  /**
   * @description Indicates the authority who published the protocol (e.g. ACIP) that is being followed.
   */
  authority?: IReference;

  /**
   * @description The vaccine preventable disease the dose is being administered against.
   */
  targetDisease?: ICodeableConcept[];

  /**
   * @description Nominal position in a series.
   */
  doseNumberPositiveInt?: number;

  /**
   * @description Extensions for doseNumberPositiveInt
   */
  _doseNumberPositiveInt?: IElement;

  /**
   * @description Nominal position in a series.
   */
  doseNumberString?: string;

  /**
   * @description Extensions for doseNumberString
   */
  _doseNumberString?: IElement;

  /**
   * @description The recommended number of doses to achieve immunity.
   */
  seriesDosesPositiveInt?: number;

  /**
   * @description Extensions for seriesDosesPositiveInt
   */
  _seriesDosesPositiveInt?: IElement;

  /**
   * @description The recommended number of doses to achieve immunity.
   */
  seriesDosesString?: string;

  /**
   * @description Extensions for seriesDosesString
   */
  _seriesDosesString?: IElement;
}
