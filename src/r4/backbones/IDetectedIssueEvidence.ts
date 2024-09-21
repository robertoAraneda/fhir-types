import { IBackboneElement } from '../base';
import { ICodeableConcept, IReference } from '../datatypes';

/**
 * @name IDetectedIssueEvidence
 * @description Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc.
 * @see <a href="https://hl7.org/fhir/R4/detectedissue-definitions.html#DetectedIssue.evidence">IDetectedIssueEvidence</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IDetectedIssueEvidence extends IBackboneElement {
  /**
   * @description A manifestation that led to the recording of this detected issue.
   */
  code?: ICodeableConcept[];

  /**
   * @description Links to resources that constitute evidence for the detected issue such as a GuidanceResponse or MeasureReport.
   */
  detail?: IReference[];
}
