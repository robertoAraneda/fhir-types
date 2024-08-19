import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept, IRange, ISimpleQuantity } from '../datatypes';

/**
 * @name IObservationReferenceRange
 * @description Guidance on how to interpret the value by comparison to a normal or recommended range. Multiple reference ranges are interpreted as an "OR". In other words, to represent two distinct target populations, two referenceRange elements would be used.
 * @see <a href="https://hl7.org/fhir/R4/observation-definitions.html#Observation.referenceRange">ObservationReferenceRange</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IObservationReferenceRange extends IBackboneElement {
  /**
   * @description The value of the low bound of the reference range. The low bound of the reference range endpoint is inclusive of the value (e.g. reference range is >=5 - <=9). If the low bound is omitted, it is assumed to be meaningless (e.g. reference range is <=2.3).
   */
  low?: ISimpleQuantity;

  /**
   * @description The value of the high bound of the reference range. The high bound of the reference range endpoint is inclusive of the value (e.g. reference range is >=5 - <=9). If the high bound is omitted, it is assumed to be meaningless (e.g. reference range is >= 2.3).
   */
  high?: ISimpleQuantity;

  /**
   * @description Codes to indicate the what part of the targeted reference population it applies to. For example, the normal or therapeutic range.
   */
  type?: ICodeableConcept;

  /**
   * @description Codes to indicate the target population this reference range applies to. For example, a reference range may be based on the normal population or a particular sex or race. Multiple appliesTo are interpreted as an "AND" of the target populations. For example, to represent a target population of African American females, both a code of female and a code for African American would be used.
   */
  appliesTo?: ICodeableConcept[];

  /**
   * @description The age at which this reference range is applicable. This is a neonatal age (e.g. number of weeks at term) if the meaning says so.
   */
  age?: IRange;

  /**
   * @description Text based reference range in an observation which may be used when a quantitative range is not appropriate for an observation. An example would be a reference value of "Negative" or a list or table of "normals".
   */
  text?: string;

  // Extensions attributes
  /**
   * @description Extension for text
   */
  _text?: IElement;
}
