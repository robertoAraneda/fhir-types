import { IDeviceMetricCalibration, ITiming } from '../backbones';
import { IDomainResource, IElement } from '../base';
import { ICodeableConcept, IIdentifier, IReference } from '../datatypes';
import { DeviceMetricCategoryType, DeviceMetricColorType, DeviceMetricOperationalStatusType } from '../types';

/**
 * @name IDeviceMetric
 * @description Describes a measurement, calculation or setting capability of a medical device.
 * @see <a href="https://hl7.org/fhir/R4/devicemetric.html">DeviceMetric</a>
 * @version R4
 * @extends {IDomainResource}
 * @author Claudia Alarcón Lazo
 */
export interface IDeviceMetric extends IDomainResource {
  /**
   * @description The type of resource
   */
  resourceType?: string;

  /**
   * @description Unique instance identifiers assigned to a device by the device or gateway software, manufacturers, other organizations or owners. For example: handle ID.
   */
  identifier?: IIdentifier[];

  /**
   * @description Describes the type of the metric. For example: Heart Rate, PEEP Setting, etc.
   */
  type: ICodeableConcept;

  /**
   * @description Describes the unit that an observed value determined for this metric will have. For example: Percent, Seconds, etc.
   */
  unit?: ICodeableConcept;

  /**
   * @description "Describes the link to the  Device that this DeviceMetric belongs to and that contains administrative device information such as manufacturer, serial number, etc.
   */
  source?: IReference;

  /**
   * @description Describes the link to the  Device that this DeviceMetric belongs to and that provide information about the location of this DeviceMetric in the containment structure of the parent Device. An example would be a Device that represents a Channel. This reference can be used by a client application to distinguish DeviceMetrics that have the same type, but should be interpreted based on their containment location.
   */
  parent?: IReference;

  /**
   * @description Indicates current operational state of the device. For example: On, Off, Standby, etc.
   * @description on | off | standby | entered-in-error
   * @see <a href="https://hl7.org/fhir/R4/valueset-metric-operational-status.html">DeviceMetricOperationalStatus</a>
   */
  operationalStatus?: DeviceMetricOperationalStatusType;

  /**
   * @description Describes the color representation for the metric. This is often used to aid clinicians to track and identify parameter types by color. In practice, consider a Patient Monitor that has ECG/HR and Pleth for example; the parameters are displayed in different characteristic colors, such as HR-blue, BP-green, and PR and SpO2- magenta.
   * @description black | red | green | yellow | blue | magenta | cyan | white
   * @see <a href="https://hl7.org/fhir/R4/valueset-metric-color.html">DeviceMetricColor</a>
   */
  color?: DeviceMetricColorType;

  /**
   * @description Indicates the category of the observation generation process. A DeviceMetric can be for example a setting, measurement, or calculation.
   * @description measurement | setting | calculation | unspecified
   * @see <a href="https://hl7.org/fhir/R4/valueset-devicemetric-category.html">DeviceMetricCategory</a>
   */
  category: DeviceMetricCategoryType;

  /**
   * @description Describes the measurement repetition time. This is not necessarily the same as the update period. The measurement repetition time can range from milliseconds up to hours. An example for a measurement repetition time in the range of milliseconds is the sampling rate of an ECG. An example for a measurement repetition time in the range of hours is a NIBP that is triggered automatically every hour. The update period may be different than the measurement repetition time, if the device does not update the published observed value with the same frequency as it was measured.
   */
  measurementPeriod?: ITiming;

  /**
   * @description Describes the calibrations that have been performed or that are required to be performed.
   */
  calibration?: IDeviceMetricCalibration[];

  // Extensions attributes
  /**
   * @description Extensions for operationalStatus
   */
  _operationalStatus?: IElement;

  /**
   * @description Extensions for color
   */
  _color?: IElement;

  /**
   * @description Extensions for category
   */
  _category?: IElement;
}
