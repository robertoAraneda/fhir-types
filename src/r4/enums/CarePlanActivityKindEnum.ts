/**
 * @name CarePlanActivityKind
 * @description Resource types defined as part of FHIR that can be represented as in-line definitions of a care plan activity.
 * @description Appointment | CommunicationRequest | DeviceRequest | MedicationRequest | NutritionOrder | Task | ServiceRequest | VisionPrescription
 * @see <a href="https://hl7.org/fhir/R4/valueset-care-plan-activity-kind.html">CarePlanActivityKind</a>
 * @version R4
 * @author Roberto Araneda Espinoza
 */
export enum CarePlanActivityKindEnum {
  APPOINTMENT = 'Appointment',
  COMMUNICATION_REQUEST = 'CommunicationRequest',
  DEVICE_REQUEST = 'DeviceRequest',
  MEDICATION_REQUEST = 'MedicationRequest',
  NUTRITION_ORDER = 'NutritionOrder',
  TASK = 'Task',
  SERVICE_REQUEST = 'ServiceRequest',
  VISION_PRESCRIPTION = 'VisionPrescription',
}
