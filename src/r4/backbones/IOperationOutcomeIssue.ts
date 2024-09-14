import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept } from '../datatypes';
import { IssueSeverityType, IssueTypeType } from '../types';

/**
 * @name IOperationOutcomeIssue
 * @description An error, warning, or information message that results from a system action.
 * @see <a href="https://hl7.org/fhir/R4/operationoutcome-definitions.html#OperationOutcome.issue">OperationOutcomeIssue</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Roberto Araneda Espinoza
 */
export interface IOperationOutcomeIssue extends IBackboneElement {
  /**
   * @description Indicates whether the issue indicates a variation from successful processing.
   * @description fatal | error | warning | information
   * @see <a href="https://hl7.org/fhir/R4/valueset-issue-severity.html">IssueSeverity</a>
   */
  severity: IssueSeverityType;

  /**
   * @description Extensions for severity
   */
  _severity?: IElement;

  /**
   * @description Describes the type of the issue. The system that creates an OperationOutcome SHALL choose the most applicable code from the IssueType value set, and may additional provide its own code for the error in the details element.
   * @description invalid | structure | required | value | invariant | security | login | unknown | expired | forbidden | suppressed | processing | not-supported | duplicate | multiple-matches | not-found | deleted | too-long | code-invalid | extension | too-costly | business-rule | conflict | transient | lock-error | no-store | exception | timeout | incomplete | throttled | informational
   * @see <a href="https://hl7.org/fhir/R4/valueset-issue-type.html">IssueType</a>
   */
  code: IssueTypeType;

  /**
   * @description Extensions for code
   */
  _code?: IElement;

  /**
   * @description Additional details about the error. This may be a text description of the error or a system code that identifies the error.
   */
  details?: ICodeableConcept;

  /**
   * @description Additional diagnostic information about the issue.
   */
  diagnostics?: string;

  /**
   * @description Extensions for diagnostics
   */
  _diagnostics?: IElement;

  /**
   * @description This element is deprecated because it is XML specific. It is replaced by issue.expression, which is format independent, and simpler to parse. \n\nFor resource issues, this will be a simple XPath limited to element names, repetition indicators and the default child accessor that identifies one of the elements in the resource that caused this issue to be raised.  For HTTP errors, will be \"http.\" + the parameter name.
   */
  location?: string[];

  /**
   * @description Extensions for location
   */
  _location?: IElement[];

  /**
   * @description A [simple subset of FHIRPath](fhirpath.html#simple) limited to element names, repetition indicators and the default child accessor that identifies one of the elements in the resource that caused this issue to be raised.
   */
  expression?: string[];

  /**
   * @description Extensions for expression
   */
  _expression?: IElement[];
}
