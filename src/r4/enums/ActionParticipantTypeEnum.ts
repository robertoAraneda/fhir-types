/**
 * @name ActionParticipantType
 * @description The type of participant for the action.
 * @description patient | practitioner | related-person | device
 * @see <a href="https://hl7.org/fhir/R4/valueset-action-participant-type.html">ActionParticipantType</a>
 * @version R4
 * @author Claudia Alarcón Lazo
 */
export enum ActionParticipantTypeEnum {
  PATIENT = 'patient',
  PRACTITIONER = 'practitioner',
  RELATED_PERSON = 'related-person',
  DEVICE = 'device',
}
