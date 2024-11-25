import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept } from '../datatypes';

/**
 * @name IClaimResponseError
 * @description This resource provides the adjudication details from the processing of a Claim resource.
 * @see <a href="https://hl7.org/fhir/R4/claimresponse-definitions.html#ClaimResponse.error">ClaimResponseError</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IClaimResponseError extends IBackboneElement {
  /**
   * @description The sequence number of the line item submitted which contains the error. This value is omitted when the error occurs outside of the item structure.
   */
  itemSequence?: number;

  /**
   * @description Extensions for itemSequence
   */
  _itemSequence?: IElement;

  /**
   * @description The sequence number of the detail within the line item submitted which contains the error. This value is omitted when the error occurs outside of the item structure.
   */
  detailSequence?: number;

  /**
   * @description Extensions for detailSequence
   */
  _detailSequence?: IElement;

  /**
   * @description The sequence number of the sub-detail within the detail within the line item submitted which contains the error. This value is omitted when the error occurs outside of the item structure.
   */
  subDetailSequence?: number;

  /**
   * @description Extensions for subDetailSequence
   */
  _subDetailSequence?: IElement;

  /**
   * @description An error code, from a specified code system, which details why the claim could not be adjudicated.
   */
  code: ICodeableConcept;
}
