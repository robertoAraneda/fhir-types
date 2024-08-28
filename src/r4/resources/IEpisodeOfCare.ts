import { IElement } from '../base';
import { IEpisodeOfCareDiagnosis, IEpisodeOfCareStatusHistory } from '../backbones';
import { IDomainResource } from '../base';
import { ICodeableConcept, IIdentifier, IPeriod, IReference } from '../datatypes';
import { EpisodeOfCareStatusType } from '../types';

/**
 * @name IEpisodeOfCare
 * @description An association of a Patient with an Organization and Healthcare Provider(s) for a period of time that the Organization assumes some level of responsibility
 * @see <a href="https://hl7.org/fhir/R4/episodeofcare.html">EpisodeOfCare</a>
  @version R4
  @extends IDomainResource
 */
export interface IEpisodeOfCare extends IDomainResource {
  resourceType?: string;
  /**
   * @description 	Business Identifier(s) relevant for this EpisodeOfCare
   */
  identifier?: IIdentifier[];

  /**
   * @description planned | waitlist | active | onhold | finished | cancelled | entered-in-error
   * @see <a href="https://hl7.org/fhir/R4/valueset-episode-of-care-status.html">EpisodeOfCareDiagnosis</a>
   */
  status: EpisodeOfCareStatusType;

  /**
   * @description Past list of status codes (the current status may be included to cover the start date of the status)
   */
  statusHistory?: IEpisodeOfCareStatusHistory[];

  /**
   * @description Type/class  - e.g. specialist referral, disease management
   */
  type?: ICodeableConcept[];

  /**
   * @description The list of diagnosis relevant to this episode of care
   */
  diagnosis?: IEpisodeOfCareDiagnosis[];

  /**
   * @description The patient who is the focus of this episode of care
   */
  patient: IReference;

  /**
   * @description Organization that assumes care
   */
  managingOrganization?: IReference;

  /**
   * @description Interval during responsibility is assumed
   */
  period?: IPeriod;

  /**
   * @description Originating Referral Request(s)
   */
  referralRequest?: IReference[];

  /**
   * @description Care manager/care coordinator for the patient
   */
  careManager?: IReference;

  /**
   * @description Other practitioners facilitating this episode of care
   */
  team?: IReference[];

  /**
   * @description The set of accounts that may be used for billing for this EpisodeOfCare
   */
  account?: IReference[];

  /**
   * @description Extension for status
   */
  _status?: IElement;
}
