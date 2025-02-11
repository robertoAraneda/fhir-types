/**
 * @name RequestResourceTypes
 * @description A list of all the request resource types defined in this version of the FHIR specification.
 * @description Appointment | AppointmentResponse | CarePlan | Claim | CommunicationRequest | Contract | DeviceRequest | EnrollmentRequest ImmunizationRecommendation | MedicationRequest | NutritionOrder | ServiceRequest | SupplyRequest | Task | VisionPrescription
 * @see <a href="https://hl7.org/fhir/R4/valueset-request-resource-types.html">RequestResourceTypes</a>
 * @version R4
 * @author Claudia Alarcón Lazo
 */
export enum RequestResourceTypesEnum {
  APPOINTMENT = 'Appointment',
  APPOINTMENT_RESPONSE = 'AppointmentResponse',
  CARE_PLAN = 'CarePlan',
  CLAIM = 'Claim',
  COMMUNICATION_REQUEST = 'CommunicationRequest',
  CONTRACT = 'Contract',
  DEVICE_REQUEST = 'DeviceRequest',
  ENROLLMENT_REQUEST = 'EnrollmentRequest',
  IMMUNIZATION_RECOMMENDATION = 'ImmunizationRecommendation',
  MEDICATION_REQUEST = 'MedicationRequest',
  NUTRITION_ORDER = 'NutritionOrder',
  SERVICE_REQUEST = 'ServiceRequest',
  SUPPLY_REQUEST = 'SupplyRequest',
  TASK = 'Task',
  VISION_PRESCRIPTION = 'VisionPrescription',
}
