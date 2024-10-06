import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept, IReference } from '../datatypes';
import { IImmunizationRecommendationDateCriterion } from './IImmunizationRecommendationDateCriterion';

/**
 * @name IImmunizationRecommendationRecommendation
 * @description A patient\u0027s point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification.
 * @see <a href="https://hl7.org/fhir/R4/immunizationrecommendation-definitions.html#ImmunizationRecommendation.recommendation">ImmunizationRecommendationRecommendation</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IImmunizationRecommendationRecommendation extends IBackboneElement {
  /**
   * @description Vaccine(s) or vaccine group that pertain to the recommendation.
   */
  vaccineCode?: ICodeableConcept[];

  /**
   * @description The targeted disease for the recommendation.
   */
  targetDisease?: ICodeableConcept;

  /**
   * @description Vaccine(s) which should not be used to fulfill the recommendation.
   */
  contraindicatedVaccineCode?: ICodeableConcept[];

  /**
   * @description Indicates the patient status with respect to the path to immunity for the target disease.
   */
  forecastStatus: ICodeableConcept;

  /**
   * @description The reason for the assigned forecast status.
   */
  forecastReason?: ICodeableConcept[];

  /**
   * @description Vaccine date recommendations.  For example, earliest date to administer, latest date to administer, etc.
   */
  dateCriterion?: IImmunizationRecommendationDateCriterion[];

  /**
   * @description Contains the description about the protocol under which the vaccine was administered.
   */
  description?: string;

  /**
   * @description Extensions for description
   */
  _description?: IElement;

  /**
   * @description One possible path to achieve presumed immunity against a disease - within the context of an authority.
   */
  series?: string;

  /**
   * @description Extensions for series
   */
  _series?: IElement;

  /**
   * @description Nominal position of the recommended dose in a series (e.g. dose 2 is the next recommended dose).
   */
  doseNumberPositiveInt?: number;

  /**
   * @description Extensions for doseNumberPositiveInt
   */
  _doseNumberPositiveInt?: IElement;

  /**
   * @description Nominal position of the recommended dose in a series (e.g. dose 2 is the next recommended dose).
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

  /**
   * @description Immunization event history and/or evaluation that supports the status and recommendation.
   */
  supportingImmunization?: IReference[];

  /**
   * @description Patient Information that supports the status and recommendation.  This includes patient observations, adverse reactions and allergy/intolerance information.
   */
  supportingPatientInformation?: IReference[];
}
