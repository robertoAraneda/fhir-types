/**
 * @name SequenceType
 * @description Type if a sequence -- DNA, RNA, or amino acid sequence.
 * @description aa | dna | rna
 * @see <a href="https://hl7.org/fhir/R4/valueset-sequence-type.html">SequenceType</a>
 * @version R4
 * @author Claudia Alarcón Lazo
 */
export enum SequenceTypeEnum {
  AA_SEQUENCE = 'aa',
  DNA_SEQUENCE = 'dna',
  RNA_SEQUENCE = 'rna',
}
