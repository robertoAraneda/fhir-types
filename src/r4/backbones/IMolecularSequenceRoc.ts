import { IBackboneElement, IElement } from '../base';

/**
 * @name IMolecularSequenceRoc
 * @description Raw data describing a biological sequence.
 * @see <a href="https://hl7.org/fhir/R4/molecularsequence-definitions.html#MolecularSequence.quality.roc">MolecularSequenceRoc</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IMolecularSequenceRoc extends IBackboneElement {
  /**
   * @description Invidual data point representing the GQ (genotype quality) score threshold.
   */
  score?: number[];

  /**
   * @description Extensions for score
   */
  _score?: IElement;

  /**
   * @description The number of true positives if the GQ score threshold was set to \"score\" field value.
   */
  numTP?: number[];

  /**
   * @description Extensions for numTP
   */
  _numTP?: IElement;

  /**
   * @description The number of false positives if the GQ score threshold was set to \"score\" field value.
   */
  numFP?: number[];

  /**
   * @description Extensions for numFP
   */
  _numFP?: IElement;

  /**
   * @description The number of false negatives if the GQ score threshold was set to \"score\" field value.
   */
  numFN?: number[];

  /**
   * @description Extensions for numFN
   */
  _numFN?: IElement;

  /**
   * @description Calculated precision if the GQ score threshold was set to \"score\" field value.
   */
  precision?: number[];

  /**
   * @description Extensions for precision
   */
  _precision?: IElement;

  /**
   * @description Calculated sensitivity if the GQ score threshold was set to \"score\" field value.
   */
  sensitivity?: number[];

  /**
   * @description Extensions for sensitivity
   */
  _sensitivity?: IElement;

  /**
   * @description Calculated fScore if the GQ score threshold was set to \"score\" field value.
   */
  fMeasure?: number[];

  /**
   * @description Extensions for fMeasure
   */
  _fMeasure?: IElement;
}
