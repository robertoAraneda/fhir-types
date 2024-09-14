import { IElement } from '../base';
import { IReference } from './IReference';

export interface IAnnotation extends IElement {
  /**
   * @description The individual responsible for the annotation.
   */
  authorReference?: IReference;

  /**
   * @description The individual responsible for the annotation.
   */
  authorString?: string;

  /**
   * @description Indicates when the annotation was made.
   */
  time?: string;

  /**
   * @description The annotation - text content (as markdown).
   */
  text: string;

  // Extensions attributes
  /**
   * @description Extension for time.
   */
  _time?: IElement;

  /**
   * @description Extension for text
   */
  _text?: IElement;
}
