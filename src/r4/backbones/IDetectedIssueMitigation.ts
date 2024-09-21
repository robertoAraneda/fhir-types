import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept, IReference } from '../datatypes';

/**
 * @name IDetectedIssueMitigation
 * @description Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc.
 * @see <a href="https://hl7.org/fhir/R4/detectedissue-definitions.html#DetectedIssue.mitigation">DetectedIssueMitigation</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IDetectedIssueMitigation extends IBackboneElement {
  /**
   * @description Describes the action that was taken or the observation that was made that reduces/eliminates the risk associated with the identified issue.
   */
  action: ICodeableConcept;

  /**
   * @description Indicates when the mitigating action was documented.
   */
  date?: string;

  /**
   * @description Extensions for date
   */
  _date?: IElement;

  /**
   * @description Identifies the practitioner who determined the mitigation and takes responsibility for the mitigation step occurring.
   */
  author?: IReference;
}
