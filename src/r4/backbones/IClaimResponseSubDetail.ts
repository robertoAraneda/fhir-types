import { IBackboneElement, IElement } from '../base';
import { IClaimResponseAdjudication } from './IClaimResponseAdjudication';

/**
 * @name IClaimResponseSubDetail
 * @description This resource provides the adjudication details from the processing of a Claim resource.
 * @see <a href="https://hl7.org/fhir/R4/claimresponse-definitions.html#ClaimResponse.item.detail.subDetail">ClaimResponseSubDetail</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IClaimResponseSubDetail extends IBackboneElement {
  /**
   * @description A number to uniquely reference the claim sub-detail entry.
   */
  subDetailSequence: number;

  /**
   * @description Extensions for subDetailSequence
   */
  _subDetailSequence?: IElement;

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
  adjudication?: IClaimResponseAdjudication[];
}
