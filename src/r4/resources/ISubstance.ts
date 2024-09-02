import { ISubstanceIngredient, ISubstanceInstance } from '../backbones';
import { IDomainResource, IElement } from '../base';
import { ICodeableConcept, IIdentifier } from '../datatypes';
import { FHIRSubstanceStatusType } from '../types';

/**
 * @name ISubstance
 * @description A homogeneous material with a definite composition.
 * @see <a href="https://hl7.org/fhir/R4/substance.html">Substance</a>
 * @version R4
 * @extends {IDomainResource}
 * @author Claudia Alarcón Lazo
 */
export interface ISubstance extends IDomainResource {
  /**
   * @description The type of resource
   */
  resourceType?: string;

  /**
   * @description Unique identifier for the substance.
   */
  identifier?: IIdentifier[];

  /**
   * @description A code to indicate if the substance is actively used.
   */
  status?: FHIRSubstanceStatusType;

  /**
   * @description A code that classifies the general type of substance.  This is used  for searching, sorting and display purposes.
   */
  category?: ICodeableConcept[];

  /**
   * @description A code (or set of codes) that identify this substance.
   */
  code: ICodeableConcept;

  /**
   * @description A description of the substance - its appearance, handling requirements, and other usage notes.
   */
  description?: string;

  /**
   * @description Substance may be used to describe a kind of substance, or a specific package/container of the substance: an instance.
   */
  instance?: ISubstanceInstance[];

  /**
   * @description A substance can be composed of other substances.
   */
  ingredient?: ISubstanceIngredient[];

  // Extensions attributes
  /**
   * @description Extensions for status
   */
  _status?: IElement;

  /**
   * @description Extensions for description
   */
  _description?: IElement;
}
