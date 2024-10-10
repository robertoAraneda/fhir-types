import { IElement } from '../base';
import { ICodeableConcept } from './ICodeableConcept';
import { ICoding } from './ICoding';
import { IQuantity } from './IQuantity';
import { IRange } from './IRange';
import { IReference } from './IReference';

/**
 * @name IUsageContext
 * @description Specifies clinical/business/etc. metadata that can be used to retrieve, index and/or categorize an artifact. This metadata can either be specific to the applicable population (e.g., age category, DRG) or the specific context of care (e.g., venue, care setting, provider of care).
 * @see <a href="https://hl7.org/fhir/R4/metadatatypes.html#UsageContext">UsageContext</a>
 * @version R4
 * @extends {IElement}
 * @author Claudia Alarcón Lazo
 */
export interface IUsageContext extends IElement {
  /**
   * @description A code that identifies the type of context being specified by this usage context.
   */
  code: ICoding;

  /**
   * @description A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.
   */
  valueCodeableConcept?: ICodeableConcept;

  /**
   * @description A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.
   */
  valueQuantity?: IQuantity;

  /**
   * @description A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.
   */
  valueRange?: IRange;

  /**
   * @description A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.
   */
  valueReference?: IReference;
}
