/**
 * @name DeviceMetricCalibrationType
 * @description Describes the type of a metric calibration.
 * @description unspecified | offset | gain | two-point
 * @see <a href="https://hl7.org/fhir/R4/valueset-metric-calibration-type.html">DeviceMetricCalibrationType</a>
 * @version R4
 * @author Claudia Alarcón Lazo
 */
export enum DeviceMetricCalibrationTypeEnum {
  UNSPECIFIED = 'unspecified',
  OFFSET = 'offset',
  GAIN = 'gain',
  TWO_POINT = 'two-point',
}
