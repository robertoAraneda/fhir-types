import { IBackboneElement, IElement } from '../base';
import { IClaimResponseAdjudication } from './IClaimResponseAdjudication';
import { IClaimResponseDetail } from './IClaimResponseDetail';

/**
 * @name IClaimResponseItem
 * @description This resource provides the adjudication details from the processing of a Claim resource.
 * @see <a href="https://hl7.org/fhir/R4/claimresponse-definitions.html#ClaimResponse.item">ClaimResponseItem</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IClaimResponseItem extends IBackboneElement {
  /**
   * @description A number to uniquely reference the claim item entries.
   */
  itemSequence: number;

  /**
   * @description Extensions for itemSequence
   */
  _itemSequence?: IElement;

  /**
   * @description The numbers associated with notes below which apply to the adjudication of this item.
   */
  noteNumber?: number[];

  /**
   * @description Extensions for noteNumber
   */
  _noteNumber?: IElement[];

  /**
   * @description If this item is a group then the values here are a summary of the adjudication of the detail items. If this item is a simple product or service then this is the result of the adjudication of this item.
   */
  adjudication: IClaimResponseAdjudication[];

  /**
   * @description A claim detail. Either a simple (a product or service) or a \u0027group\u0027 of sub-details which are simple items.
   */
  detail?: IClaimResponseDetail[];
}
