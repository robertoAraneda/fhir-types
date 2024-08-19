import { IElement } from '../base';
import { ISimpleQuantity } from './ISimpleQuantity';

/**
 * @name ISampledData
 * @description Data that comes from a series of measurements taken by a device, which may have upper and lower limits. The data type also supports more than one dimension in the data.
 * @see <a href="https://hl7.org/fhir/R4/datatypes.html#SampledData">SampledData</a>
 * @version R4
 * @extends {IElement}
 * @author Claudia Alarcón Lazo
 */
export interface ISampledData extends IElement {
  /**
   * @description The base quantity that a measured value of zero represents. In addition, this provides the units of the entire measurement series.
   */
  origin: ISimpleQuantity;

  /**
   * @description The length of time between sampling times, measured in milliseconds.
   */
  period: number;

  /**
   * @description A correction factor that is applied to the sampled data points before they are added to the origin.
   */
  factor?: number;

  /**
   * @description The lower limit of detection of the measured points. This is needed if any of the data points have the value "L" (lower than detection limit).
   */
  lowerLimit?: number;

  /**
   * @description The upper limit of detection of the measured points. This is needed if any of the data points have the value "U" (higher than detection limit).
   */
  upperLimit?: number;

  /**
   * @description The number of sample points at each time point. If this value is greater than one, then the dimensions will be interlaced - all the sample points for a point in time will be recorded at once.
   */
  dimensions: number;

  /**
   * @description A series of data points which are decimal values separated by a single space (character u20). The special values "E" (error), "L" (below detection limit) and "U" (above detection limit) can also be used in place of a decimal value.
   */
  data: string;

  // Extensions attributes
  /**
   * @description Extension for period
   */
  _period?: IElement;

  /**
   * @description Extension for factor
   */
  _factor?: IElement;

  /**
   * @description Extension for lowerLimit
   */
  _lowerLimit?: IElement;

  /**
   * @description Extension for upperLimit
   */
  _upperLimit?: IElement;

  /**
   * @description Extension for dimensions
   */
  _dimensions?: IElement;

  /**
   * @description Extension for data
   */
  _data?: IElement;
}
