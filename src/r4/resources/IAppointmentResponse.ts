import { IDomainResource, IElement } from '../base';
import { ICodeableConcept, IIdentifier, IReference } from '../datatypes';
import { ParticipationStatusType } from '../types';

/**
 * @name IAppointmentResponse
 * @description A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection.
 * @see <a href="https://hl7.org/fhir/R4/appointmentresponse.html">AppointmentResponse</a>
 * @version R4
 * @extends {IDomainResource}
 * @author Claudia Alarcón Lazo
 */
export interface IAppointmentResponse extends IDomainResource {
  /**
   * @description This records identifiers associated with this appointment response concern that are defined by business processes and/ or used to refer to it when a direct URL reference to the resource itself is not appropriate.
   */
  identifier?: IIdentifier[];

  /**
   * @description Appointment that this response is replying to.
   */
  appointment: IReference;

  /**
   * @description Date/Time that the appointment is to take place, or requested new start time.
   */
  start?: string;

  /**
   * @description This may be either the same as the appointment request to confirm the details of the appointment, or alternately a new time to request a re-negotiation of the end time.
   */
  end?: string;

  /**
   * @description Role of participant in the appointment.
   */
  participantType?: ICodeableConcept[];

  /**
   * @description A Person, Location, HealthcareService, or Device that is participating in the appointment.
   */
  actor?: IReference;

  /**
   * @description Participation status of the participant. When the status is declined or tentative if the start/end times are different to the appointment, then these times should be interpreted as a requested time change. When the status is accepted, the times can either be the time of the appointment (as a confirmation of the time) or can be empty.
   * @description accepted | declined | tentative | needs-action
   * @see <a href="https://hl7.org/fhir/R4/valueset-participationstatus.html">ParticipationStatus</a>
   */
  participantStatus: ParticipationStatusType;

  /**
   * @description Additional comments about the appointment.
   */
  comment?: string;

  // Extensions attributes
  /**
   * @description Extension for start
   */
  _start?: IElement;

  /**
   * @description Extension for end
   */
  _end?: IElement;

  /**
   * @description Extension for participantStatus
   */
  _participantStatus?: IElement;

  /**
   * @description Extension for comment
   */
  _comment?: IElement;
}
