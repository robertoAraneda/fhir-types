import { IBackboneElement, IElement } from '../base';
import { IAddress, ICodeableConcept, IReference } from '../datatypes';

/**
 * @name IClaimAccident
 * @description A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement.
 * @see <a href="https://hl7.org/fhir/R4/claim-definitions.html#Claim.accident">ClaimAccident</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IClaimAccident extends IBackboneElement {
  /**
   * @description Date of an accident event  related to the products and services contained in the claim.
   */
  date: string;

  /**
   * @description Extensions for date
   */
  _date?: IElement;

  /**
   * @description The type or context of the accident event for the purposes of selection of potential insurance coverages and determination of coordination between insurers.
   */
  type?: ICodeableConcept;

  /**
   * @description The physical location of the accident event.
   */
  locationAddress?: IAddress;

  /**
   * @description The physical location of the accident event.
   */
  locationReference?: IReference;
}
