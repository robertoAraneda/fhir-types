import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept, IMoney, ISimpleQuantity } from '../datatypes';
import { IClaimResponseAddItemSubDetail } from './IClaimResponseAddItemSubDetail';
import { IClaimResponseAdjudication } from './IClaimResponseAdjudication';

/**
 * @name IClaimResponseAddItemDetail
 * @description This resource provides the adjudication details from the processing of a Claim resource.
 * @see <a href="https://hl7.org/fhir/R4/claimresponse-definitions.html#ClaimResponse.addItem.detail">ClaimResponseAddItemDetail</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IClaimResponseAddItemDetail extends IBackboneElement {
  /**
   * @description When the value is a group code then this item collects a set of related claim details, otherwise this contains the product, service, drug or other billing code for the item.
   */
  productOrService: ICodeableConcept;

  /**
   * @description Item typification or modifiers codes to convey additional context for the product or service.
   */
  modifier?: ICodeableConcept[];

  /**
   * @description The number of repetitions of a service or product.
   */
  quantity?: ISimpleQuantity;

  /**
   * @description If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
   */
  unitPrice?: IMoney;

  /**
   * @description A real number that represents a multiplier used in determining the overall value of services delivered and/or goods received. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.
   */
  factor?: number;

  /**
   * @description Extensions for factor
   */
  _factor?: IElement;

  /**
   * @description The quantity times the unit price for an additional service or product or charge.
   */
  net?: IMoney;

  /**
   * @description The numbers associated with notes below which apply to the adjudication of this item.
   */
  noteNumber?: number[];

  /**
   * @description Extensions for noteNumber
   */
  _noteNumber?: IElement[];

  /**
   * @description The adjudication results.
   */
  adjudication: IClaimResponseAdjudication[];

  /**
   * @description The third-tier service adjudications for payor added services.
   */
  subDetail?: IClaimResponseAddItemSubDetail[];
}
