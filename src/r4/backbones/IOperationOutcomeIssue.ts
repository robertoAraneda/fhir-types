import { IBackboneElement } from '../base';
import { ICodeableConcept } from '../datatypes';
import { OperationOutcomeIssueCodeType, OperationOutcomeIssueSeverityType } from '../types';

export interface IOperationOutcomeIssue extends IBackboneElement {
  severity: OperationOutcomeIssueSeverityType;
  code: OperationOutcomeIssueCodeType;
  details?: ICodeableConcept;
  diagnostics?: string;
  location?: string[];
  expression?: string[];
}
