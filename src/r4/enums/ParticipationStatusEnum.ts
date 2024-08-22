/**
 * @name ObservationStatus
 * @description Participation status of the participant. When the status is declined or tentative if the start/end times are different to the appointment, then these times should be interpreted as a requested time change. When the status is accepted, the times can either be the time of the appointment (as a confirmation of the time) or can be empty.
 * @description accepted | declined | tentative | needs-action
 * @see <a href="https://hl7.org/fhir/R4/valueset-participationstatus.html">ParticipationStatus</a>
 * @version R4
 * @author Claudia Alarcón Lazo
 */
export enum ParticipationStatusEnum {
  ACCEPTED = 'accepted',
  DECLINED = 'declined',
  TENTATIVE = 'tentative',
  NEEDS_ACTION = 'needs-action',
}
