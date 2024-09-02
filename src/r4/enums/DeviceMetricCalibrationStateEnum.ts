/**
 * @name DeviceMetricCalibrationState
 * @description Describes the state of a metric calibration.
 * @description not-calibrated | calibration-required | calibrated | unspecified
 * @see <a href="https://hl7.org/fhir/R4/valueset-metric-calibration-state.html">DeviceMetricCalibrationState</a>
 * @version R4
 * @author Claudia Alarcón Lazo
 */
export enum DeviceMetricCalibrationStateEnum {
  NOT_CALIBRATED = 'not-calibrated',
  CALIBRATION_REQUIRED = 'calibration-required',
  CALIBRATED = 'calibrated',
  UNSPECIFIED = 'unspecified',
}
