import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept, IReference } from '../datatypes';

/**
 * @name IClinicalImpressionFinding
 * @description A record of a clinical assessment performed to determine what problem(s) may affect the patient and before planning the treatments or management strategies that are best to manage a patient\u0027s condition. Assessments are often 1:1 with a clinical consultation / encounter,  but this varies greatly depending on the clinical workflow. This resource is called \"ClinicalImpression\" rather than \"ClinicalAssessment\" to avoid confusion with the recording of assessment tools such as Apgar score.
 * @see <a href="https://hl7.org/fhir/R4/clinicalimpression-definitions.html#ClinicalImpression.finding">ClinicalImpressionFinding</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IClinicalImpressionFinding extends IBackboneElement {
  /**
   * @description Specific text or code for finding or diagnosis, which may include ruled-out or resolved conditions.
   */
  itemCodeableConcept?: ICodeableConcept;

  /**
   * @description Specific reference for finding or diagnosis, which may include ruled-out or resolved conditions.
   */
  itemReference?: IReference;

  /**
   * @description Which investigations support finding or diagnosis.
   */
  basis?: string;

  /**
   * @description Extensions for basis
   */
  _basis?: IElement;
}
