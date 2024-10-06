import { IBackboneElement, IElement } from '../base';

/**
 * @name IMolecularSequenceInner
 * @description Raw data describing a biological sequence.
 * @see <a href="https://hl7.org/fhir/R4/molecularsequence-definitions.html#MolecularSequence.structureVariant.inner">IMolecularSequenceInner</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IMolecularSequenceInner extends IBackboneElement {
  /**
   * @description Structural variant inner start. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
   */
  start?: number;

  /**
   * @description Extensions for start
   */
  _start?: IElement;

  /**
   * @description Structural variant inner end. If the coordinate system is 0-based then end is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
   */
  end?: number;

  /**
   * @description Extensions for end
   */
  _end?: IElement;
}