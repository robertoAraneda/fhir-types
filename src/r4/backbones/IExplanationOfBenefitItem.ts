import { IBackboneElement, IElement } from '../base';
import { IAddress, ICodeableConcept, IMoney, IPeriod, IReference, ISimpleQuantity } from '../datatypes';
import { IExplanationOfBenefitAdjudication } from './IExplanationOfBenefitAdjudication';
import { IExplanationOfBenefitDetail } from './IExplanationOfBenefitDetail';

/**
 * @name IExplanationOfBenefitItem
 * @description This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided.
 * @see <a href="https://hl7.org/fhir/R4/explanationofbenefit-definitions.html#ExplanationOfBenefit.item">ExplanationOfBenefitItem</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IExplanationOfBenefitItem extends IBackboneElement {
  /**
   * @description A number to uniquely identify item entries.
   */
  sequence: number;

  /**
   * @description Extensions for sequence
   */
  _sequence?: IElement;

  /**
   * @description Care team members related to this service or product.
   */
  careTeamSequence?: number[];

  /**
   * @description Extensions for careTeamSequence
   */
  _careTeamSequence?: IElement[];

  /**
   * @description Diagnoses applicable for this service or product.
   */
  diagnosisSequence?: number[];

  /**
   * @description Extensions for diagnosisSequence
   */
  _diagnosisSequence?: IElement[];

  /**
   * @description Procedures applicable for this service or product.
   */
  procedureSequence?: number[];

  /**
   * @description Extensions for procedureSequence
   */
  _procedureSequence?: IElement[];

  /**
   * @description Exceptions, special conditions and supporting information applicable for this service or product.
   */
  informationSequence?: number[];

  /**
   * @description Extensions for informationSequence
   */
  _informationSequence?: IElement[];

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
   * @description Unique Device Identifiers associated with this line item.
   */
  udi?: IReference[];

  /**
   * @description Physical service site on the patient (limb, tooth, etc.)
   */
  bodySite?: ICodeableConcept;

  /**
   * @description A region or surface of the bodySite, e.g. limb region or tooth surface(s).
   */
  subSite?: ICodeableConcept[];

  /**
   * @description A billed item may include goods or services provided in multiple encounters.
   */
  encounter?: IReference[];

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
  adjudication?: IExplanationOfBenefitAdjudication[];

  /**
   * @description Second-tier of goods and services.
   */
  detail?: IExplanationOfBenefitDetail[];
}
