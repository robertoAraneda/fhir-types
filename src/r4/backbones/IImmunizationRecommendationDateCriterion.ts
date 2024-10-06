import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept } from '../datatypes';

/**
 * @name IImmunizationRecommendationDateCriterion
 * @description A patient\u0027s point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification.
 * @see <a href="https://hl7.org/fhir/R4/immunizationrecommendation-definitions.html#ImmunizationRecommendation.recommendation.dateCriterion">ImmunizationRecommendationDateCriterion</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IImmunizationRecommendationDateCriterion extends IBackboneElement {
  /**
   * @description Date classification of recommendation.  For example, earliest date to give, latest date to give, etc.
   */
  code: ICodeableConcept;

  /**
   * @description The date whose meaning is specified by dateCriterion.code.
   */
  value: string;

  /**
   * @description Extensions for value
   */
  _value?: IElement;
}
