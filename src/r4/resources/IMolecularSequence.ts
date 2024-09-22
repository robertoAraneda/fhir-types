import {
  IMolecularSequenceQuality,
  IMolecularSequenceReferenceSeq,
  IMolecularSequenceRepository,
  IMolecularSequenceStructureVariant,
  IMolecularSequenceVariant,
} from '../backbones';
import { IDomainResource, IElement } from '../base';
import { IIdentifier, IQuantity, IReference } from '../datatypes';
import { SequenceTypeType } from '../types';

/**
 * @name IMolecularSequence
 * @description Raw data describing a biological sequence.
 * @see <a href="https://hl7.org/fhir/R4/molecularsequence.html">MolecularSequence</a>
 * @version R4
 * @extends {IDomainResource}
 * @author Claudia Alarcón Lazo
 */
export interface IMolecularSequence extends IDomainResource {
  /**
   * @description A unique identifier for this particular sequence instance. This is a FHIR-defined id.
   */
  identifier?: IIdentifier[];

  /**
   * @description Amino Acid Sequence/ DNA Sequence / RNA Sequence.
   * @description aa | dna | rna
   * @see <a href="https://hl7.org/fhir/R4/valueset-sequence-type.html">SequenceType</a>
   */
  type?: SequenceTypeType;

  /**
   * @description Extensions for type
   */
  _type?: IElement;

  /**
   * @description Whether the sequence is numbered starting at 0 (0-based numbering or coordinates, inclusive start, exclusive end) or starting at 1 (1-based numbering, inclusive start and inclusive end).
   */
  coordinateSystem: number;

  /**
   * @description Extensions for coordinateSystem
   */
  _coordinateSystem?: IElement;

  /**
   * @description The patient whose sequencing results are described by this resource.
   */
  patient?: IReference;

  /**
   * @description Specimen used for sequencing.
   */
  specimen?: IReference;

  /**
   * @description The method for sequencing, for example, chip information.
   */
  device?: IReference;

  /**
   * @description The organization or lab that should be responsible for this result.
   */
  performer?: IReference;

  /**
   * @description The number of copies of the sequence of interest. (RNASeq).
   */
  quantity?: IQuantity;

  /**
   * @description A sequence that is used as a reference to describe variants that are present in a sequence analyzed.
   */
  referenceSeq?: IMolecularSequenceReferenceSeq;

  /**
   * @description A sequence that is used as a reference to describe variants that are present in a sequence analyzed.
   */
  variant?: IMolecularSequenceVariant[];

  /**
   * @description Sequence that was observed. It is the result marked by referenceSeq along with variant records on referenceSeq. This shall start from referenceSeq.windowStart and end by referenceSeq.windowEnd.
   */
  observedSeq?: string;

  /**
   * @description Extensions for observedSeq
   */
  _observedSeq?: IElement;

  /**
   * @description An experimental feature attribute that defines the quality of the feature in a quantitative way, such as a phred quality score ([SO:0001686](http://www.sequenceontology.org/browser/current_svn/term/SO:0001686)).
   */
  quality?: IMolecularSequenceQuality[];

  /**
   * @description Coverage (read depth or depth) is the average number of reads representing a given nucleotide in the reconstructed sequence.
   */
  readCoverage?: number;

  /**
   * @description Extensions for readCoverage
   */
  _readCoverage?: IElement;

  /**
   * @description Configurations of the external repository. The repository shall store target\u0027s observedSeq or records related with target\u0027s observedSeq.
   */
  repository?: IMolecularSequenceRepository[];

  /**
   * @description Pointer to next atomic sequence which at most contains one variant.
   */
  pointer?: IReference[];

  /**
   * @description Information about chromosome structure variation.
   */
  structureVariant?: IMolecularSequenceStructureVariant[];
}
