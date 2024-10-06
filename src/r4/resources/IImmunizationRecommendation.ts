import { IImmunizationRecommendationRecommendation } from '../backbones';
import { IDomainResource, IElement } from '../base';
import { IIdentifier, IReference } from '../datatypes';

/**
 * @name ImmunizationRecommendation
 * @description A patient\u0027s point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification.
 * @see <a href="https://hl7.org/fhir/R4/immunizationrecommendation.html">ImmunizationRecommendation</a>
 * @version R4
 * @extends {IDomainResource}
 * @author Claudia Alarcón Lazo
 */
export interface IImmunizationRecommendation extends IDomainResource {
  /**
   * @description A unique identifier assigned to this particular recommendation record.
   */
  identifier?: IIdentifier[];

  /**
   * @description The patient the recommendation(s) are for.
   */
  patient: IReference;

  /**
   * @description The date the immunization recommendation(s) were created.
   */
  date: string;

  /**
   * @description Extensions for date
   */
  _date?: IElement;

  /**
   * @description Indicates the authority who published the protocol (e.g. ACIP).
   */
  authority?: IReference;

  /**
   * @description Vaccine administration recommendations.
   */
  recommendation: IImmunizationRecommendationRecommendation[];
}
