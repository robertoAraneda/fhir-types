import { IBackboneElement, IElement } from '../base';
import { IReference } from '../datatypes';

/**
 * @name IMolecularSequenceVariant
 * @description Raw data describing a biological sequence.
 * @see <a href="https://hl7.org/fhir/R4/molecularsequence-definitions.html#MolecularSequence.variant">IMolecularSequenceVariant</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IMolecularSequenceVariant extends IBackboneElement {
  /**
   * @description Start position of the variant on the  reference sequence. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
   */
  start?: number;

  /**
   * @description Extensions for start
   */
  _start?: IElement;

  /**
   * @description End position of the variant on the reference sequence. If the coordinate system is 0-based then end is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
   */
  end?: number;

  /**
   * @description Extensions for end
   */
  _end?: IElement;

  /**
   * @description An allele is one of a set of coexisting sequence variants of a gene ([SO:0001023](http://www.sequenceontology.org/browser/current_svn/term/SO:0001023)).  Nucleotide(s)/amino acids from start position of sequence to stop position of sequence on the positive (+) strand of the observed  sequence. When the sequence  type is DNA, it should be the sequence on the positive (+) strand. This will lay in the range between variant.start and variant.end.
   */
  observedAllele?: string;

  /**
   * @description Extensions for observedAllele
   */
  _observedAllele?: IElement;

  /**
   * @description An allele is one of a set of coexisting sequence variants of a gene ([SO:0001023](http://www.sequenceontology.org/browser/current_svn/term/SO:0001023)). Nucleotide(s)/amino acids from start position of sequence to stop position of sequence on the positive (+) strand of the reference sequence. When the sequence  type is DNA, it should be the sequence on the positive (+) strand. This will lay in the range between variant.start and variant.end.
   */
  referenceAllele?: string;

  /**
   * @description Extensions for referenceAllele
   */
  _referenceAllele?: IElement;

  /**
   * @description Extended CIGAR string for aligning the sequence with reference bases. See detailed documentation [here](http://support.illumina.com/help/SequencingAnalysisWorkflow/Content/Vault/Informatics/Sequencing_Analysis/CASAVA/swSEQ_mCA_ExtendedCIGARFormat.htm).
   */
  cigar?: string;

  /**
   * @description Extensions for cigar
   */
  _cigar?: IElement;

  /**
   * @description A pointer to an Observation containing variant information.
   */
  variantPointer?: IReference;
}
