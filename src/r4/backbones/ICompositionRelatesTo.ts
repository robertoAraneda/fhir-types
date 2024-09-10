import { IBackboneElement, IElement } from '../base';
import { IIdentifier, IReference } from '../datatypes';
import { DocumentRelationshipTypeType } from '../types';

/**
 * @name ICompositionRelatesTo
 * @description Relationships that this composition has with other compositions or documents that already exist.
 * @see <a href="https://hl7.org/fhir/R4/composition-definitions.html#Composition.relatesTo">CompositionRelatesTo</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Roberto Araneda Espinoza
 */
export interface ICompositionRelatesTo extends IBackboneElement {
  /**
   * @description The type of relationship that this document has with anther document.
   * @description replaces | transforms | signs | appends
   * @see <a href="https://hl7.org/fhir/R4/valueset-document-relationship-type.html">DocumentRelationshipType</a>
   */
  code: DocumentRelationshipTypeType;

  /**
   * @description Extensions for code
   */
  _code?: IElement;

  /**
   * @description The target composition/document of this relationship.
   */
  targetIdentifier?: IIdentifier;

  /**
   * @description The target composition/document of this relationship.
   */
  targetReference?: IReference;
}
