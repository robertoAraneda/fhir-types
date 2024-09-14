/**
 * @name ParticipationStatus
 * @description The Participation status of an appointment.
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
