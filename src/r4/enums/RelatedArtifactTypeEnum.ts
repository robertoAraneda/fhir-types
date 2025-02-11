/**
 * @name RelatedArtifactType
 * @description The type of relationship to the related artifact.
 * @description documentation | justification | citation | predecessor | successor | derived-from | depends-on | composed-of
 * @see <a href="https://hl7.org/fhir/R4/valueset-related-artifact-type.html">RelatedArtifactType</a>
 * @version R4
 * @author Claudia Alarcón Lazo
 */
export enum RelatedArtifactTypeEnum {
  DOCUMENTATION = 'documentation',
  JUSTIFICATION = 'justification',
  CITATION = 'citation',
  PREDECESSOR = 'predecessor',
  SUCCESSOR = 'successor',
  DERIVED_FROM = 'derived-from',
  DEPENDS_ON = 'depends-on',
  COMPOSED_OF = 'composed-of',
}
