/**
 * @name ParticipantRequired
 * @description Is the participant required to attend the appointment.
 * @description required | optional | information-only
 * @see <a href="https://hl7.org/fhir/R4/valueset-participantrequired.html">ParticipantRequired</a>
 * @version R4
 * @author Roberto Araneda Espinoza
 */
export enum ParticipantRequiredEnum {
  REQUIRED = 'required',
  OPTIONAL = 'optional',
  INFORMATION_ONLY = 'information-only',
}
