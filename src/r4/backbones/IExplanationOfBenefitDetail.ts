import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept, IMoney, IReference, ISimpleQuantity } from '../datatypes';
import { IExplanationOfBenefitAdjudication } from './IExplanationOfBenefitAdjudication';
import { IExplanationOfBenefitSubDetail } from './IExplanationOfBenefitSubDetail';

/**
 * @name IExplanationOfBenefitDetail
 * @description This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided.
 * @see <a href="https://hl7.org/fhir/R4/explanationofbenefit-definitions.html#ExplanationOfBenefit.item.detail">ExplanationOfBenefitDetail</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IExplanationOfBenefitDetail extends IBackboneElement {
  /**
   * @description A claim detail line. Either a simple (a product or service) or a \u0027group\u0027 of sub-details which are simple items.
   */
  sequence: number;

  /**
   * @description Extensions for sequence
   */
  _sequence?: IElement;

  /**
   * @description The type of revenue or cost center providing the product and/or service.
   */
  revenue?: ICodeableConcept;

  /**
   * @description Code to identify the general type of benefits under which products and services are provided.
   */
  category?: ICodeableConcept;

  /**
   * @description When the value is a group code then this item collects a set of related claim details, otherwise this contains the product, service, drug or other billing code for the item.
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
   * @description Unique Device Identifiers associated with this line item.
   */
  udi?: IReference[];

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
  adjudication?: IExplanationOfBenefitAdjudication[];

  /**
   * @description Third-tier of goods and services.
   */
  subDetail?: IExplanationOfBenefitSubDetail[];
}
