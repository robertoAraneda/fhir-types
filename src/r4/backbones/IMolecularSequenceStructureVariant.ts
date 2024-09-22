import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept } from '../datatypes';
import { IMolecularSequenceInner } from './IMolecularSequenceInner';
import { IMolecularSequenceOuter } from './IMolecularSequenceOuter';

/**
 * @name IMolecularSequenceStructureVariant
 * @description Raw data describing a biological sequence.
 * @see <a href="https://hl7.org/fhir/R4/molecularsequence-definitions.html#MolecularSequence.structureVariant">IMolecularSequenceStructureVariant</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IMolecularSequenceStructureVariant extends IBackboneElement {
  /**
   * @description Information about chromosome structure variation DNA change type.
   */
  variantType?: ICodeableConcept;

  /**
   * @description Used to indicate if the outer and inner start-end values have the same meaning.
   */
  exact?: boolean;

  /**
   * @description Extensions for exact
   */
  _exact?: IElement;

  /**
   * @description Length of the variant chromosome.
   */
  length?: number;

  /**
   * @description Extensions for length
   */
  _length?: IElement;

  /**
   * @description Structural variant outer.
   */
  outer?: IMolecularSequenceOuter;

  /**
   * @description Structural variant inner.
   */
  inner?: IMolecularSequenceInner;
}
