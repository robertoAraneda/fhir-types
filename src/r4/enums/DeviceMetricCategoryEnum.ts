/**
 * @name DeviceMetricCategory
 * @description Describes the category of the metric.
 * @description measurement | setting | calculation | unspecified
 * @see <a href="https://hl7.org/fhir/R4/valueset-metric-category.html">DeviceMetricCategory</a>
 * @version R4
 * @author Claudia Alarcón Lazo
 */
export enum DeviceMetricCategoryEnum {
  MEASUREMENT = 'measurement',
  SETTING = 'setting',
  CALCULATION = 'calculation',
  UNSPECIFIED = 'unspecified',
}
