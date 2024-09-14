/**
 * @name ConfidentialityClassification
 * @description Set of codes used to value Act.Confidentiality and Role.Confidentiality attribute in accordance with the definition for concept domain "Confidentiality".
 * @description U | L | M | N | R | V
 * @see <a href="https://hl7.org/fhir/R4/v3/ConfidentialityClassification/vs.html">ConfidentialityClassification</a>
 * @version R4
 * @author Roberto Araneda Espinoza
 */
export enum ConfidentialityClassificationEnum {
  UNRESTRICTED = 'U',
  LOW = 'L',
  MODERATE = 'M',
  NORMAL = 'N',
  RESTRICTED = 'R',
  VERY_RESTRICTED = 'V',
}
