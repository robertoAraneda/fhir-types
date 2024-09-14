/**
 * @name AppointmentStatus
 * @description The free/busy status of an appointment.
 * @description proposed | pending | booked | arrived | fulfilled | cancelled | noshow | entered-in-error | checked-in | waitlist
 * @see <a href="https://hl7.org/fhir/R4/valueset-appointmentstatus.html">AppointmentStatus</a>
 * @version R4
 * @author Roberto Araneda Espinoza
 */
export type AppointmentStatusType =
  | 'proposed'
  | 'pending'
  | 'booked'
  | 'arrived'
  | 'fulfilled'
  | 'cancelled'
  | 'noshow'
  | 'entered-in-error'
  | 'checked-in'
  | 'waitlist';
