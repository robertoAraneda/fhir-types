import { IDomainResource, IElement } from '../base';
import { IAttachment, ICodeableConcept, IIdentifier, IReference } from '../datatypes';

/**
 * @name IBodyStructure
 * @description Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case.
 * @see <a href="https://hl7.org/fhir/R4/bodystructure.html">BodyStructure</a>
 * @version R4
 * @extends {IDomainResource}
 * @author Claudia Alarcón Lazo
 */
export interface IBodyStructure extends IDomainResource {
  /**
   * @description Identifier for this instance of the anatomical structure.
   */
  identifier?: IIdentifier[];

  /**
   * @description Whether this body site is in active use.
   */
  active?: boolean;

  /**
   * @description Extensions for active
   */
  _active?: IElement;

  /**
   * @description The kind of structure being represented by the body structure at `BodyStructure.location`.  This can define both normal and abnormal morphologies.
   */
  morphology?: ICodeableConcept;

  /**
   * @description The anatomical location or region of the specimen, lesion, or body structure.
   */
  location?: ICodeableConcept;

  /**
   * @description Qualifier to refine the anatomical location.  These include qualifiers for laterality, relative location, directionality, number, and plane.
   */
  locationQualifier?: ICodeableConcept[];

  /**
   * @description A summary, characterization or explanation of the body structure.
   */
  description?: string;

  /**
   * @description Extensions for description
   */
  _description?: IElement;

  /**
   * @description Image or images used to identify a location.
   */
  image?: IAttachment[];

  /**
   * @description The person to which the body site belongs.
   */
  patient: IReference;
}
