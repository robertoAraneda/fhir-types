import { IDetectedIssueEvidence, IDetectedIssueMitigation } from '../backbones';
import { IDomainResource, IElement } from '../base';
import { ICodeableConcept, IIdentifier, IPeriod, IReference } from '../datatypes';
import { DetectedIssueSeverityType, ObservationStatusType } from '../types';

/**
 * @name IDetectedIssue
 * @description Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc.
 * @see <a href="https://hl7.org/fhir/R4/detectedissue.html">DetectedIssue</a>
 * @version R4
 * @extends {IDomainResource}
 * @author Claudia Alarcón Lazo
 */
export interface IDetectedIssue extends IDomainResource {
  /**
   * @description Business identifier associated with the detected issue record.
   */
  identifier?: IIdentifier[];

  /**
   * @description Indicates the status of the detected issue.
   */
  status: ObservationStatusType;

  /**
   * @description Extensions for status
   */
  _status?: IElement;

  /**
   * @description Identifies the general type of issue identified.
   */
  code?: ICodeableConcept;

  /**
   * @description Indicates the degree of importance associated with the identified issue based on the potential impact on the patient.
   * @description high | moderate | low
   * @see <a href="https://hl7.org/fhir/R4/valueset-detectedissue-severity.html">DetectedIssueSeverity</a>
   */
  severity?: DetectedIssueSeverityType;

  /**
   * @description Extensions for severity
   */
  _severity?: IElement;

  /**
   * @description Indicates the patient whose record the detected issue is associated with.
   */
  patient?: IReference;

  /**
   * @description The date or period when the detected issue was initially identified.
   */
  identifiedDateTime?: string;

  /**
   * @description Extensions for identified
   */
  _identifiedDateTime?: IElement;

  /**
   * @description The date or period when the detected issue was initially identified.
   */
  identifiedPeriod?: IPeriod;

  /**
   * @description Individual or device responsible for the issue being raised.  For example, a decision support application or a pharmacist conducting a medication review.
   */
  author?: IReference;

  /**
   * @description Indicates the resource representing the current activity or proposed activity that is potentially problematic.
   */
  implicated?: IReference[];

  /**
   * @description Supporting evidence or manifestations that provide the basis for identifying the detected issue such as a GuidanceResponse or MeasureReport.
   */
  evidence?: IDetectedIssueEvidence[];

  /**
   * @description A textual explanation of the detected issue.
   */
  detail?: string;

  /**
   * @description Extensions for detail
   */
  _detail?: IElement;

  /**
   * @description The literature, knowledge-base or similar reference that describes the propensity for the detected issue identified.
   */
  reference?: string;

  /**
   * @description Extensions for reference
   */
  _reference?: IElement;

  /**
   * @description Indicates an action that has been taken or is committed to reduce or eliminate the likelihood of the risk identified by the detected issue from manifesting.  Can also reflect an observation of known mitigating factors that may reduce/eliminate the need for any action.
   */
  mitigation?: IDetectedIssueMitigation[];
}
