import { IBackboneElement } from "../base";
import { ICodeableConcept } from "../datatypes";
import { OperationOutcomeIssueCodeType } from "../types/OperationOutcomeIssueCodeType";
import { OperationOutcomeIssueSeverityType } from "../types/OperationOutcomeIssueSeverityType";

export interface IOperationOutcomeIssue extends IBackboneElement {
  severity: OperationOutcomeIssueSeverityType;
  code: OperationOutcomeIssueCodeType;
  details?: ICodeableConcept;
  diagnostics?: string;
  location?: string[];
  expression?: string[];
}