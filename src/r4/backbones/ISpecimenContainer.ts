import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept, IIdentifier, IReference, ISimpleQuantity } from '../datatypes';

/**
 * @name ISpecimenContainer
 * @description A sample to be used for analysis.
 * @see <a href="https://hl7.org/fhir/R4/specimen-definitions.html#Specimen.container">SpecimenContainer</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface ISpecimenContainer extends IBackboneElement {
  /**
   * @description Id for container. There may be multiple; a manufacturer\u0027s bar code, lab assigned identifier, etc. The container ID may differ from the specimen id in some circumstances.
   */
  identifier?: IIdentifier[];

  /**
   * @description Textual description of the container.
   */
  description?: string;

  /**
   * @description Extensions for description
   */
  _description?: IElement;

  /**
   * @description The type of container associated with the specimen (e.g. slide, aliquot, etc.).
   */
  type?: ICodeableConcept;

  /**
   * @description The capacity (volume or other measure) the container may contain.
   */
  capacity?: ISimpleQuantity;

  /**
   * @description The quantity of specimen in the container; may be volume, dimensions, or other appropriate measurements, depending on the specimen type.
   */
  specimenQuantity?: ISimpleQuantity;

  /**
   * @description Introduced substance to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
   */
  additiveCodeableConcept?: ICodeableConcept;

  /**
   * @description Introduced substance to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
   */
  additiveReference?: IReference;
}
