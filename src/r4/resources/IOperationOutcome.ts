import { IOperationOutcomeIssue } from '../backbones';
import { IDomainResource } from '../base';

/**
 * @name IOperationOutcome
 * @description A collection of error, warning, or information messages that result from a system action.
 * @see <a href="https://hl7.org/fhir/R4/operationoutcome.html">OperationOutcome</a>
 * @version R4
 * @extends {IDomainResource}
 * @author Roberto Araneda Espinoza
 */
export interface IOperationOutcome extends IDomainResource {
  /**
   * @description An error, warning, or information message that results from a system action.
   */
  issue: IOperationOutcomeIssue[];
}
