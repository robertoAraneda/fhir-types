import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept, IReference } from '../datatypes';
import { OrientationTypeType, StrandTypeType } from '../types';

/**
 * @name IMolecularSequenceReferenceSeq
 * @description Raw data describing a biological sequence.
 * @see <a href="https://hl7.org/fhir/R4/molecularsequence-definitions.html#MolecularSequence.referenceSeq">IMolecularSequenceReferenceSeq</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IMolecularSequenceReferenceSeq extends IBackboneElement {
  /**
   * @description Structural unit composed of a nucleic acid molecule which controls its own replication through the interaction of specific proteins at one or more origins of replication ([SO:0000340](http://www.sequenceontology.org/browser/current_svn/term/SO:0000340)).
   */
  chromosome?: ICodeableConcept;

  /**
   * @description The Genome Build used for reference, following GRCh build versions e.g. \u0027GRCh 37\u0027.  Version number must be included if a versioned release of a primary build was used.
   */
  genomeBuild?: string;

  /**
   * @description Extensions for genomeBuild
   */
  _genomeBuild?: IElement;

  /**
   * @description A relative reference to a DNA strand based on gene orientation. The strand that contains the open reading frame of the gene is the \"sense\" strand, and the opposite complementary strand is the \"antisense\" strand.
   * @description sense | antisense
   * @see <a href="https://hl7.org/fhir/R4/valueset-orientation-type.html">OrientationType</a>
   */
  orientation?: OrientationTypeType;

  /**
   * @description Extensions for orientation
   */
  _orientation?: IElement;

  /**
   * @description Reference identifier of reference sequence submitted to NCBI. It must match the type in the MolecularSequence.type field. For example, the prefix, “NG_” identifies reference sequence for genes, “NM_” for messenger RNA transcripts, and “NP_” for amino acid sequences.
   */
  referenceSeqId?: ICodeableConcept;

  /**
   * @description A pointer to another MolecularSequence entity as reference sequence.
   */
  referenceSeqPointer?: IReference;

  /**
   * @description A string like \"ACGT\".
   */
  referenceSeqString?: string;

  /**
   * @description Extensions for referenceSeqString
   */
  _referenceSeqString?: IElement;

  /**
   * @description An absolute reference to a strand. The Watson strand is the strand whose 5\u0027-end is on the short arm of the chromosome, and the Crick strand as the one whose 5\u0027-end is on the long arm.
   */
  strand?: StrandTypeType;

  /**
   * @description Extensions for strand
   */
  _strand?: IElement;

  /**
   * @description Start position of the window on the reference sequence. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
   */
  windowStart?: number;

  /**
   * @description Extensions for windowStart
   */
  _windowStart?: IElement;

  /**
   * @description End position of the window on the reference sequence. If the coordinate system is 0-based then end is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
   */
  windowEnd?: number;

  /**
   * @description Extensions for windowEnd
   */
  _windowEnd?: IElement;
}
