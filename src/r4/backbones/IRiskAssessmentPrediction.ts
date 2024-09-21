import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept, IPeriod, IRange } from '../datatypes';

/**
 * @name IRiskAssessmentPrediction
 * @description An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome.
 * @see <a href="https://hl7.org/fhir/R4/riskassessment-definitions.html#RiskAssessment.prediction">RiskAssessmentPrediction</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IRiskAssessmentPrediction extends IBackboneElement {
  /**
   * @description One of the potential outcomes for the patient (e.g. remission, death,  a particular condition).
   */
  outcome?: ICodeableConcept;

  /**
   * @description Indicates how likely the outcome is (in the specified timeframe).
   */
  probabilityDecimal?: number;

  /**
   * @description Extensions for probabilityDecimal
   */
  _probabilityDecimal?: IElement;

  /**
   * @description Indicates how likely the outcome is (in the specified timeframe).
   */
  probabilityRange?: IRange;

  /**
   * @description Indicates how likely the outcome is (in the specified timeframe), expressed as a qualitative value (e.g. low, medium, or high).
   */
  qualitativeRisk?: ICodeableConcept;

  /**
   * @description Indicates the risk for this particular subject (with their specific characteristics) divided by the risk of the population in general.  (Numbers greater than 1 \u003d higher risk than the population, numbers less than 1 \u003d lower risk.).
   */
  relativeRisk?: number;

  /**
   * @description Extensions for relativeRisk
   */
  _relativeRisk?: IElement;

  /**
   * @description Indicates the period of time or age range of the subject to which the specified probability applies.
   */
  whenPeriod?: IPeriod;

  /**
   * @description Indicates the period of time or age range of the subject to which the specified probability applies.
   */
  whenRange?: IRange;

  /**
   * @description Additional information explaining the basis for the prediction.
   */
  rationale?: string;

  /**
   * @description Extensions for rationale
   */
  _rationale?: IElement;
}
