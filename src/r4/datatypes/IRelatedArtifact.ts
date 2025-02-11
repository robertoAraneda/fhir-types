import { IElement } from '../base';
import { RelatedArtifactTypeType } from '../types';
import { IAttachment } from './IAttachment';

/**
 * @name IRelatedArtifact
 * @description Related artifacts such as additional documentation, justification, or bibliographic references.
 * @see <a href="https://hl7.org/fhir/R4/metadatatypes.html#RelatedArtifact>RelatedArtifact</a>
 * @version R4
 * @extends {IElement}
 * @author Claudia Alarcón Lazo
 */
export interface IRelatedArtifact extends IElement {
  /**
   * @description The type of relationship to the related artifact.
   * @description documentation | justification | citation | predecessor | successor | derived-from | depends-on | composed-of
   * @see <a href="https://hl7.org/fhir/R4/valueset-related-artifact-type.html">RelatedArtifactType</a>
   */
  type: RelatedArtifactTypeType;

  /**
   * @description Extensions for type
   */
  _type?: IElement;

  /**
   * @description A short label that can be used to reference the citation from elsewhere in the containing artifact, such as a footnote index.
   */
  label?: string;

  /**
   * @description Extensions for label
   */
  _label?: IElement;

  /**
   * @description A brief description of the document or knowledge resource being referenced, suitable for display to a consumer.
   */
  display?: string;

  /**
   * @description Extensions for display
   */
  _display?: IElement;

  /**
   * @description A bibliographic citation for the related artifact. This text SHOULD be formatted according to an accepted citation format.
   */
  citation?: string;

  /**
   * @description Extensions for citation
   */
  _citation?: IElement;

  /**
   * @description A url for the artifact that can be followed to access the actual content.
   */
  url?: string;

  /**
   * @description Extensions for url
   */
  _url?: IElement;

  /**
   * @description The document being referenced, represented as an attachment. This is exclusive with the resource element.
   */
  document?: IAttachment;

  /**
   * @description The related resource, such as a library, value set, profile, or other knowledge resource.
   */
  resource?: string;

  /**
   * @description Extensions for resource
   */
  _resource?: IElement;
}
