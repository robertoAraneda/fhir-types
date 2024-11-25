import { IBackboneElement } from '../base';
import { ICodeableConcept, IIdentifier, IReference } from '../datatypes';

/**
 * @name IClaimRelated
 * @description A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement.
 * @see <a href="https://hl7.org/fhir/R4/claim-definitions.html#Claim.related">ClaimRelated</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IClaimRelated extends IBackboneElement {
  /**
   * @description Reference to a related claim.
   */
  claim?: IReference;

  /**
   * @description A code to convey how the claims are related.
   */
  relationship?: ICodeableConcept;

  /**
   * @description An alternate organizational reference to the case or file to which this particular claim pertains.
   */
  reference?: IIdentifier;
}
