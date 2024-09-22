import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept, IQuantity } from '../datatypes';
import { QualityTypeType } from '../types';
import { IMolecularSequenceRoc } from './IMolecularSequenceRoc';

/**
 * @name IMolecularSequenceQuality
 * @description Raw data describing a biological sequence.
 * @see <a href="https://hl7.org/fhir/R4/molecularsequence-definitions.html#MolecularSequence.quality">IMolecularSequenceQuality</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IMolecularSequenceQuality extends IBackboneElement {
  /**
   * @description INDEL / SNP / Undefined variant.
   * @description indel | snp | unknown
   * @see <a href="https://hl7.org/fhir/R4/valueset-quality-type.html">QualityType</a>
   */
  type: QualityTypeType;

  /**
   * @description Extensions for type
   */
  _type?: IElement;

  /**
   * @description Gold standard sequence used for comparing against.
   */
  standardSequence?: ICodeableConcept;

  /**
   * @description Start position of the sequence. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
   */
  start?: number;

  /**
   * @description Extensions for start
   */
  _start?: IElement;

  /**
   * @description End position of the sequence. If the coordinate system is 0-based then end is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
   */
  end?: number;

  /**
   * @description Extensions for end
   */
  _end?: IElement;

  /**
   * @description The score of an experimentally derived feature such as a p-value ([SO:0001685](http://www.sequenceontology.org/browser/current_svn/term/SO:0001685)).
   */
  score?: IQuantity;

  /**
   * @description Which method is used to get sequence quality.
   */
  method?: ICodeableConcept;

  /**
   * @description True positives, from the perspective of the truth data, i.e. the number of sites in the Truth Call Set for which there are paths through the Query Call Set that are consistent with all of the alleles at this site, and for which there is an accurate genotype call for the event.
   */
  truthTP?: number;

  /**
   * @description Extensions for truthTP
   */
  _truthTP?: IElement;

  /**
   * @description True positives, from the perspective of the query data, i.e. the number of sites in the Query Call Set for which there are paths through the Truth Call Set that are consistent with all of the alleles at this site, and for which there is an accurate genotype call for the event.
   */
  queryTP?: number;

  /**
   * @description Extensions for queryTP
   */
  _queryTP?: IElement;

  /**
   * @description False negatives, i.e. the number of sites in the Truth Call Set for which there is no path through the Query Call Set that is consistent with all of the alleles at this site, or sites for which there is an inaccurate genotype call for the event. Sites with correct variant but incorrect genotype are counted here.
   */
  truthFN?: number;

  /**
   * @description Extensions for truthFN
   */
  _truthFN?: IElement;

  /**
   * @description False positives, i.e. the number of sites in the Query Call Set for which there is no path through the Truth Call Set that is consistent with this site. Sites with correct variant but incorrect genotype are counted here.
   */
  queryFP?: number;

  /**
   * @description Extensions for queryFP
   */
  _queryFP?: IElement;

  /**
   * @description The number of false positives where the non-REF alleles in the Truth and Query Call Sets match (i.e. cases where the truth is 1/1 and the query is 0/1 or similar)
   */
  gtFP?: number;

  /**
   * @description Extensions for gtFP
   */
  _gtFP?: IElement;

  /**
   * @description Precision of comparison. QUERY.TP / (QUERY.TP + QUERY.FP).
   */
  precision?: number;

  /**
   * @description Extensions for precision
   */
  _precision?: IElement;

  /**
   * @description Recall of comparison. TRUTH.TP / (TRUTH.TP + TRUTH.FN).
   */
  recall?: number;

  /**
   * @description Extensions for recall
   */
  _recall?: IElement;

  /**
   * @description Harmonic mean of Recall and Precision, computed as: 2 * precision * recall / (precision + recall).
   */
  fScore?: number;

  /**
   * @description Extensions for fScore
   */
  _fScore?: IElement;

  /**
   * @description Receiver Operator Characteristic (ROC) Curve  to give sensitivity/specificity tradeoff.
   */
  roc?: IMolecularSequenceRoc;
}
