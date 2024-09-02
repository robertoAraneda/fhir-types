import { IBackboneElement, IElement } from '../base';
import { IAttachment } from './IAttachment';
import { ICodeableConcept } from './ICodeableConcept';
import { IQuantity } from './IQuantity';

/**
 * @name IProdCharacteristic
 * @description The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available.
 * @see <a href="https://hl7.org/fhir/R4/prodcharacteristic.html#ProdCharacteristic">ProdCharacteristic</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IProdCharacteristic extends IBackboneElement {
  /**
   * @description Where applicable, the height can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
   */
  height?: IQuantity;

  /**
   * @description Where applicable, the width can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
   */
  width?: IQuantity;

  /**
   * @description Where applicable, the depth can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
   */
  depth?: IQuantity;

  /**
   * @description Where applicable, the weight can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
   */
  weight?: IQuantity;

  /**
   * @description Where applicable, the nominal volume can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
   */
  nominalVolume?: IQuantity;

  /**
   * @description Where applicable, the external diameter can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
   */
  externalDiameter?: IQuantity;

  /**
   * @description Where applicable, the shape can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used.
   */
  shape?: string;

  /**
   * @description Where applicable, the color can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used.
   */
  color?: string[];

  /**
   * @description Where applicable, the imprint can be specified as text.
   */
  imprint?: string[];

  /**
   * @description Where applicable, the image can be provided The format of the image attachment shall be specified by regional implementations.
   */
  image?: IAttachment[];

  /**
   * @description Where applicable, the scoring can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used.
   */
  scoring?: ICodeableConcept;

  // Extensions attributes
  /**
   * @description Extensions for shape
   */
  _shape?: IElement;

  /**
   * @description Extensions for color
   */
  _color?: IElement[];

  /**
   * @description Extensions for imprint
   */
  _imprint?: IElement[];
}
