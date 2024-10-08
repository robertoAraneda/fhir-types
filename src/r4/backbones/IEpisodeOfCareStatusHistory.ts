import { IBackboneElement, IElement } from '../base';
import { IPeriod } from '../datatypes';
import { EpisodeOfCareStatusType } from '../types';

/**
 * @description Past list of status codes (the current status may be included to cover the start date of the status)
 * @see <a href="https://hl7.org/fhir/R4/episodeofcare-definitions.html#EpisodeOfCare.statusHistory">EpisodeOfCareDiagnosis</a>
 * @name IEpisodeOfCareStatusHistory
 * @extends {IBackboneElement}
 * @version R4
 */
export interface IEpisodeOfCareStatusHistory extends IBackboneElement {
  /**
   * @description planned | waitlist | active | onhold | finished | cancelled | entered-in-error
   * @see <a href="https://hl7.org/fhir/R4/valueset-episode-of-care-status.html">EpisodeOfCareDiagnosis</a>
   */
  status: EpisodeOfCareStatusType;

  /**
   * @description Duration the episode was in the specified status.
   */
  period: IPeriod;

  /**
   * @description Extension for status
   */
  _status?: IElement;
}
