/**
 * @name DeviceMetricOperationalStatus
 * @description Describes the operational status of the DeviceMetric.
 * @description on | off | standby | entered-in-error
 * @see <a href="https://hl7.org/fhir/R4/valueset-metric-operational-status.html">DeviceMetricOperationalStatus</a>
 * @version R4
 * @author Claudia Alarcón Lazo
 */
export enum DeviceMetricOperationalStatusEnum {
  ON = 'on',
  OFF = 'off',
  STANDBY = 'standby',
  ENTERED_IN_ERROR = 'entered-in-error',
}
