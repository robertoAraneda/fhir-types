import { IAppointmentParticipant } from '../backbones';
import { IDomainResource, IElement } from '../base';
import { ICodeableConcept, IIdentifier, IPeriod, IReference } from '../datatypes';
import { AppointmentStatusType } from '../types';

export interface IAppointment extends IDomainResource {
  /**
   * @description This records identifiers associated with this appointment concern that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
   */
  identifier?: IIdentifier[];

  /**
   * @description The overall status of the Appointment. Each of the participants has their own participation status which indicates their involvement in the process, however this status indicates the shared status.
   * @description proposed | pending | booked | arrived | fulfilled | cancelled | noshow | entered-in-error | checked-in | waitlist
   * @see <a href="https://hl7.org/fhir/R4/valueset-appointmentstatus.html">AppointmentStatus</a>
   */
  status: AppointmentStatusType;

  /**
   * @description The coded reason for the appointment being cancelled.
   */
  cancelationReason?: ICodeableConcept;

  /**
   * @description A broad categorization of the service that is to be performed during this appointment.
   */
  serviceCategory?: ICodeableConcept[];

  /**
   * @description The specific service that is to be performed during this appointment.
   */
  serviceType?: ICodeableConcept[];

  /**
   * @description The specialty of a practitioner that would be required to perform the service requested in this appointment.
   */
  specialty?: ICodeableConcept[];

  /**
   * @description The style of appointment or patient that has been booked in the slot (not service type).
   */
  appointmentType?: ICodeableConcept;

  /**
   * @description The coded reason that this appointment is being scheduled. This is more clinical than administrative.
   */
  reasonCode?: ICodeableConcept[];

  /**
   * @description Reason the appointment has been scheduled to take place, as specified using information from another resource.
   */
  reasonReference?: IReference[];

  /**
   * @description The priority of the appointment. Can be used to make informed decisions if needing to re-prioritize appointments.
   */
  priority?: number;

  /**
   * @description The brief description of the appointment as would be shown on a subject line in a meeting request, or appointment list.
   */
  description?: string;

  /**
   * @description Additional information to support the appointment provided when making the appointment.
   */
  supportingInformation?: IReference[];

  /**
   * @description Date/Time that the appointment is to take place.
   */
  start?: string;

  /**
   * @description Date/Time that the appointment is to conclude.
   */
  end?: string;

  /**
   * @description Number of minutes that the appointment is to take. This can be less than the duration between the start and end times.
   */
  minutesDuration?: number;

  /**
   * @description The slots from the participants' schedules that will be filled by the appointment.
   */
  slot?: IReference[];

  /**
   * @description The date that this appointment was initially created.
   */
  created?: string;

  /**
   * @description Additional comments about the appointment.
   */
  comment?: string;

  /**
   * @description While Appointment.comment contains information for internal use, Appointment.patientInstructions is used to capture patient facing information about the Appointment (e.g. please bring your referral or fast from 8pm night before).
   */
  patientInstruction?: string;

  /**
   * @description The service request this appointment is allocated to assess (e.g. incoming referral or procedure request).
   */
  basedOn?: IReference[];

  /**
   * @description List of participants involved in the appointment.
   */
  participant: IAppointmentParticipant[];

  /**
   * @description A set of date ranges (potentially including times) that the appointment is preferred to be scheduled within.
   */
  requestedPeriod?: IPeriod[];

  // Extensions attributes
  /**
   * @description Extensions for status
   */
  _status?: IElement;

  /**
   * @description Extensions for priority
   */
  _priority?: IElement;

  /**
   * @description Extensions for description
   */
  _description?: IElement;

  /**
   * @description Extensions for start
   */
  _start?: IElement;

  /**
   * @description Extensions for end
   */
  _end?: IElement;

  /**
   * @description Extensions for minutesDuration
   */
  _minutesDuration?: IElement;

  /**
   * @description Extensions for created
   */
  _created?: IElement;

  /**
   * @description Extensions for comment
   */
  _comment?: IElement;

  /**
   * @description Extensions for patientInstruction
   */
  _patientInstruction?: IElement;
}
