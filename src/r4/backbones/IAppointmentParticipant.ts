import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept, IPeriod, IReference } from '../datatypes';
import { ParticipantRequiredType, ParticipantStatusType } from '../types';

export interface IAppointmentParticipant extends IBackboneElement {
  /**
   * @description Role of participant in the appointment.
   */
  type?: ICodeableConcept[];

  /**
   * @description A Person, Location/HealthcareService or Device that is participating in the appointment.
   */
  actor?: IReference;

  /**
   * @description Whether this participant is required to be present at the meeting. This covers a use-case where two doctors need to meet to discuss the results for a specific patient, and the patient is not required to be present.
   * @description required | optional | information-only
   * @see <a href="https://hl7.org/fhir/R4/valueset-participantrequired.html">ParticipantRequired</a>
   */
  required?: ParticipantRequiredType;

  /**
   * @description Participation status of the actor.
   * @description accepted | declined | tentative | needs-action
   * @see <a href="https://hl7.org/fhir/R4/valueset-participationstatus.html">ParticipantStatus</a>
   */
  status: ParticipantStatusType;

  /**
   * @description Participation period of the actor.
   */
  period?: IPeriod;

  // Extensions attributes
  /**
   * @description Extensions for required
   */
  _required?: IElement;

  /**
   * @description Extensions for status
   */
  _status?: IElement;
}
