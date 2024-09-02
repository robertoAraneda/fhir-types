import { IBackboneElement, IElement } from '../base';
import { DeviceMetricCalibrationStateType, DeviceMetricCalibrationTypeType } from '../types';

/**
 * @name IDeviceMetricCalibration
 * @description Describes a measurement, calculation or setting capability of a medical device.
 * @see <a href="https://hl7.org/fhir/R4/devicemetric-definitions.html#DeviceMetric.calibration">DeviceMetricCalibration</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IDeviceMetricCalibration extends IBackboneElement {
  /**
   * @description Describes the type of the calibration method.
   * @description unspecified | offset | gain | two-point
   * @see <a href="https://hl7.org/fhir/R4/valueset-metric-calibration-type.html">DeviceMetricCalibrationType</a>
   */
  type?: DeviceMetricCalibrationTypeType;

  /**
   * @description Describes the state of the calibration.
   * @description not-calibrated | calibration-required | calibrated | unspecified
   * @see <a href="https://hl7.org/fhir/R4/valueset-device-metric-calibration-state.html">DeviceMetricCalibrationState</a>
   */
  state?: DeviceMetricCalibrationStateType;

  /**
   * @description Describes the time last calibration has been performed.
   */
  time?: string;

  // Extensions attributes
  /**
   * @description Extensions for type
   */
  _type?: IElement;

  /**
   * @description Extensions for state
   */
  _state?: IElement;

  /**
   * @description Extensions for time
   */
  _time?: IElement;
}
