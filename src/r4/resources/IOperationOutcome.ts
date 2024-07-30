import { IOperationOutcomeIssue } from "../backbones/IOperationOutcomeIssue";
import { IDomainResource } from "../base";

export interface IOperationOutcome extends IDomainResource {
  issue: IOperationOutcomeIssue[];
}