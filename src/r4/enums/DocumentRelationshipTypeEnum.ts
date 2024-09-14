/**
 * @name DocumentRelationshipType
 * @description The type of relationship that this document has with anther document.
 * @description replaces | transforms | signs | appends
 * @see <a href="https://hl7.org/fhir/R4/valueset-document-relationship-type.html">DocumentRelationshipType</a>
 * @version R4
 * @author Roberto Araneda Espinoza
 */
export enum DocumentRelationshipTypeEnum {
  REPLACES = 'replaces',
  TRANSFORMS = 'transforms',
  SIGNS = 'signs',
  APPENDS = 'appends',
}
