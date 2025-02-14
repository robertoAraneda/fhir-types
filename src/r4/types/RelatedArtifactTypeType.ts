/**
 * @name RelatedArtifactType
 * @description The type of relationship to the related artifact.
 * @description documentation | justification | citation | predecessor | successor | derived-from | depends-on | composed-of
 * @see <a href="https://hl7.org/fhir/R4/valueset-related-artifact-type.html">RelatedArtifactType</a>
 * @version R4
 * @author Claudia Alarcón Lazo
 */
export type RelatedArtifactTypeType =
  | 'documentation'
  | 'justification'
  | 'citation'
  | 'predecessor'
  | 'successor'
  | 'derived-from'
  | 'depends-on'
  | 'composed-of';
