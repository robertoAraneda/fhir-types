import { IBackboneElement, IElement } from '../base';
import { IAddress, ICodeableConcept, IMoney, IPeriod, IReference, ISimpleQuantity } from '../datatypes';
import { IClaimResponseAddItemDetail } from './IClaimResponseAddItemDetail';
import { IClaimResponseAdjudication } from './IClaimResponseAdjudication';

/**
 * @name IClaimResponseAddItem
 * @description This resource provides the adjudication details from the processing of a Claim resource.
 * @see <a href="https://hl7.org/fhir/R4/claimresponse-definitions.html#ClaimResponse.addItem" target="_blank">ClaimResponseAddItem</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IClaimResponseAddItem extends IBackboneElement {
  /**
   * @description Claim items which this service line is intended to replace.
   */
  itemSequence?: number[];

  /**
   * @description Extensions for itemSequence
   */
  _itemSequence?: IElement[];

  /**
   * @description The sequence number of the details within the claim item which this line is intended to replace.
   */
  detailSequence?: number[];

  /**
   * @description Extensions for detailSequence
   */
  _detailSequence?: IElement[];

  /**
   * @description The sequence number of the sub-details within the details within the claim item which this line is intended to replace.
   */
  subdetailSequence?: number[];

  /**
   * @description Extensions for subdetailSequence
   */
  _subdetailSequence?: IElement[];

  /**
   * @description The providers who are authorized for the services rendered to the patient.
   */
  provider?: IReference[];

  /**
   * @description "When the value is a group code then this item collects a set of related claim details, otherwise this contains the product, service, drug or other billing code for the item.
   */
  productOrService: ICodeableConcept;

  /**
   * @description Item typification or modifiers codes to convey additional context for the product or service.
   */
  modifier?: ICodeableConcept[];

  /**
   * @description Identifies the program under which this may be recovered.
   */
  programCode?: ICodeableConcept[];

  /**
   * @description The date or dates when the service or product was supplied, performed or completed.
   */
  servicedDate?: string;

  /**
   * @description Extensions for servicedDate
   */
  _servicedDate?: IElement;

  /**
   * @description The date or dates when the service or product was supplied, performed or completed.
   */
  servicedPeriod?: IPeriod;

  /**
   * @description Where the product or service was provided.
   */
  locationCodeableConcept?: ICodeableConcept;

  /**
   * @description Where the product or service was provided.
   */
  locationAddress?: IAddress;

  /**
   * @description Where the product or service was provided.
   */
  locationReference?: IReference;

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
   * @description Physical service site on the patient (limb, tooth, etc.).
   */
  bodySite?: ICodeableConcept;

  /**
   * @description A region or surface of the bodySite, e.g. limb region or tooth surface(s).
   */
  subSite?: ICodeableConcept[];

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
   * @description The second-tier service adjudications for payor added services.
   */
  detail?: IClaimResponseAddItemDetail[];
}
