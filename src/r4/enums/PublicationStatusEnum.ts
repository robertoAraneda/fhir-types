/**
 * @name PublicationStatus
 * @description The lifecycle status of an artifact.
 * @description draft | active | retired | unknown
 * @see <a href="https://hl7.org/fhir/R4/valueset-publication-status.html">PublicationStatus</a>
 * @version R4
 * @author Claudia Alarcón Lazo
 */
export enum PublicationStatusEnum {
  DRAFT = 'draft',
  ACTIVE = 'active',
  RETIRED = 'retired',
  UNKNOWN = 'unknown',
}
