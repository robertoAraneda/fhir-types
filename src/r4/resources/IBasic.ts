import { IDomainResource, IElement } from '../base';
import { ICodeableConcept, IIdentifier, IReference } from '../datatypes';

/**
 * @name IBasic
 * @description Basic is used for handling concepts not yet defined in FHIR, narrative-only resources that don\u0027t map to an existing resource, and custom resources not appropriate for inclusion in the FHIR specification.
 * @see <a href="https://hl7.org/fhir/R4/basic.html">Basic</a>
 * @version R4
 * @extends {IDomainResource}
 * @author Claudia Alarcón Lazo
 */
export interface IBasic extends IDomainResource {
  /**
   * @description Identifier assigned to the resource for business purposes, outside the context of FHIR.
   */
  identifier?: IIdentifier[];

  /**
   * @description Identifies the \u0027type\u0027 of resource - equivalent to the resource name for other resources.
   */
  code: ICodeableConcept;

  /**
   * @description Identifies the patient, practitioner, device or any other resource that is the \"focus\" of this resource.
   */
  subject?: IReference;

  /**
   * @description Identifies when the resource was first created.
   */
  created?: string;

  /**
   * @description Extensions for created
   */
  _created?: IElement;

  /**
   * @description Indicates who was responsible for creating the resource instance.
   */
  author?: IReference;
}
