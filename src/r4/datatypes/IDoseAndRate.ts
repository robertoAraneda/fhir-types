import { IElement } from '../base';
import { ICodeableConcept } from './ICodeableConcept';
import { IRange } from './IRange';
import { IRatio } from './IRatio';
import { ISimpleQuantity } from './ISimpleQuantity';

/**
 * @name IDoseAndRate
 * @description The amount of medication administered.
 * @see <a href="https://hl7.org/fhir/R4/dosage-definitions.html#Dosage.doseAndRate">DoseAndRate</a>
 * @version R4
 * @extends {IElement}
 * @author Claudia Alarcón Lazo
 */
export interface IDoseAndRate extends IElement {
  /**
   * @description The kind of dose or rate specified, for example, ordered or calculated.
   */
  type?: ICodeableConcept;

  /**
   * @description Amount of medication per dose.
   */
  doseRange?: IRange;

  /**
   * @description Amount of medication per dose.
   */
  doseQuantity?: ISimpleQuantity;

  /**
   * @description Amount of medication per unit of time.
   */
  rateRatio?: IRatio;

  /**
   * @description Amount of medication per unit of time.
   */
  rateRange?: IRange;

  /**
   * @description Amount of medication per unit of time.
   */
  rateQuantity?: ISimpleQuantity;
}
