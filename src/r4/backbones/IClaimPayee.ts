import { IBackboneElement } from '../base';
import { ICodeableConcept, IReference } from '../datatypes';

/**
 * @name IClaimPayee
 * @description A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement.
 * @see <a href="https://hl7.org/fhir/R4/claim-definitions.html#Claim.payee">ClaimPayee</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IClaimPayee extends IBackboneElement {
  /**
   * @description Type of Party to be reimbursed: subscriber, provider, other.
   */
  type: ICodeableConcept;

  /**
   * @description Reference to the individual or organization to whom any payment will be made.
   */
  party?: IReference;
}
