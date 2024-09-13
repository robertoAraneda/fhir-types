/**
 * @name EpisodeOfCareStatus
 * @description The status of the episode of care.
 * @description planned | waitlist | active | onhold | finished | cancelled | entered-in-error
 * @see <a href="https://hl7.org/fhir/R4/valueset-episode-of-care-status.html">EpisodeOfCareStatus</a>
 * @version R4
 * @author Roberto Araneda Espinoza
 */
export enum EpisodeOfCareStatusEnum {
  PLANNED = 'planned',
  WAITLIST = 'waitlist',
  ACTIVE = 'active',
  ONHOLD = 'onhold',
  FINISHED = 'finished',
  CANCELLED = 'cancelled',
  ENTERED_IN_ERROR = 'entered-in-error',
}
