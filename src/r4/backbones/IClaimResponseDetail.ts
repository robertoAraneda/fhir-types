import { IBackboneElement, IElement } from '../base';
import { IClaimResponseAdjudication } from './IClaimResponseAdjudication';
import { IClaimResponseSubDetail } from './IClaimResponseSubDetail';

/**
 * @name IClaimResponseDetail
 * @description This resource provides the adjudication details from the processing of a Claim resource.
 * @see <a href="https://hl7.org/fhir/R4/claimresponse-definitions.html#ClaimResponse.item.detail">ClaimResponseDetail</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IClaimResponseDetail extends IBackboneElement {
  /**
   * @description A number to uniquely reference the claim detail entry.
   */
  detailSequence: number;

  /**
   * @description Extensions for detailSequence
   */
  _detailSequence?: IElement;

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
   * @description A sub-detail adjudication of a simple product or service.
   */
  subDetail?: IClaimResponseSubDetail[];
}
