import { IDomainResource, IElement } from '../base';
import { ICodeableConcept, IIdentifier, IReference } from '../datatypes';
import { SlotStatusType } from '../types';

export interface ISlot extends IDomainResource {
  /**
   * @description External Ids for this item.
   */
  identifier?: IIdentifier[];

  /**
   * @description A broad categorization of the service that is to be performed during this appointment.
   */
  serviceCategory?: ICodeableConcept[];

  /**
   * @description The type of appointments that can be booked into an appointment slot (e.g. Telehealth, In-person, etc.).
   */
  serviceType?: ICodeableConcept[];

  /**
   * @description The specialty of a practitioner that would be required to perform the service requested in this appointment.
   */
  specialty?: ICodeableConcept[];

  /**
   * @description The style of appointment or patient that may be booked in the slot (not service type).
   */
  appointmentType?: ICodeableConcept;

  /**
   * @description The schedule resource that this slot defines an interval of status information.
   */
  schedule: IReference;

  /**
   * @description busy | free | busy-unavailable | busy-tentative | entered-in-error.
   */
  status: SlotStatusType;

  /**
   * @description Date/Time that the slot is to begin.
   */
  start: string;

  /**
   * @description Date/Time that the slot is to conclude.
   */
  end: string;

  /**
   * @description This slot has already been overbooked, appointments are unlikely to be accepted for this time.
   */
  overbooked?: boolean;

  /**
   * @description Comments on the slot to describe any extended information. Such as custom constraints on the slot.
   */
  comment?: string;

  // Extensions attributes
  /**
   * @description Extension for status
   */
  _status?: IElement;

  /**
   * @description Extension for start
   */
  _start?: IElement;

  /**
   * @description Extension for end
   */
  _end?: IElement;

  /**
   * @description Extension for overbooked
   */
  _overbooked?: IElement;

  /**
   * @description Extension for comment
   */
  _comment?: IElement;
}
