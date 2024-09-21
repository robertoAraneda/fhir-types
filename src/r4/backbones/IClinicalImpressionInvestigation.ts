import { IBackboneElement } from '../base';
import { ICodeableConcept, IReference } from '../datatypes';

/**
 * @name IClinicalImpressionInvestigation
 * @description A record of a clinical assessment performed to determine what problem(s) may affect the patient and before planning the treatments or management strategies that are best to manage a patient\u0027s condition. Assessments are often 1:1 with a clinical consultation / encounter,  but this varies greatly depending on the clinical workflow. This resource is called \"ClinicalImpression\" rather than \"ClinicalAssessment\" to avoid confusion with the recording of assessment tools such as Apgar score.
 * @see <a href="https://hl7.org/fhir/R4/clinicalimpression-definitions.html#ClinicalImpression.investigation">ClinicalImpressionInvestigation</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IClinicalImpressionInvestigation extends IBackboneElement {
  /**
   * @description A name/code for the group (\"set\") of investigations. Typically, this will be something like \"signs\", \"symptoms\", \"clinical\", \"diagnostic\", but the list is not constrained, and others such groups such as (exposure|family|travel|nutritional) history may be used.
   */
  code: ICodeableConcept;

  /**
   * @description A record of a specific investigation that was undertaken.
   */
  item?: IReference[];
}
