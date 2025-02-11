import { IElement, IResource } from '../base';
import { IReference } from '../datatypes';

/**
 * @name IBinary
 * @description A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc.
 * @see <a href="https://hl7.org/fhir/R4/binary.html">Binary</a>
 * @version R4
 * @extends {IResource}
 * @author Claudia Alarcón Lazo
 */
export interface IBinary extends IResource {
  /**
   * @description MimeType of the binary content represented as a standard MimeType (BCP 13).
   * @description This value set cannot be expanded because of the way it is defined - it has an infinite number of members.
   * @see <a href="https://hl7.org/fhir/R4/valueset-mimetypes.html">MimeTypes</a>
   */
  contentType: string;

  /**
   * @description Extensions for contentType
   */
  _contentType?: IElement;

  /**
   * @description This element identifies another resource that can be used as a proxy of the security sensitivity to use when deciding and enforcing access control rules for the Binary resource. Given that the Binary resource contains very few elements that can be used to determine the sensitivity of the data and relationships to individuals, the referenced resource stands in as a proxy equivalent for this purpose. This referenced resource may be related to the Binary (e.g. Media, DocumentReference), or may be some non-related Resource purely as a security proxy. E.g. to identify that the binary resource relates to a patient, and access should only be granted to applications that have access to the patient.
   */
  securityContext?: IReference;

  /**
   * @description The actual content, base64 encoded.
   */
  data?: string;

  /**
   * @description Extensions for data
   */
  _data?: IElement;
}
