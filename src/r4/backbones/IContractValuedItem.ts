import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept, IIdentifier, IMoney, IReference, ISimpleQuantity } from '../datatypes';

/**
 * @name IContractValuedItem
 * @description Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement.
 * @see <a href="https://hl7.org/fhir/R4/contract-definitions.html#Contract.term.asset.valuedItem">ContractValuedItem</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IContractValuedItem extends IBackboneElement {
  /**
   * @description Specific type of Contract Valued Item that may be priced.
   */
  entityCodeableConcept?: ICodeableConcept;

  /**
   * @description Specific type of Contract Valued Item that may be priced.
   */
  entityReference?: IReference;

  /**
   * @description Identifies a Contract Valued Item instance.
   */
  identifier?: IIdentifier;

  /**
   * @description Indicates the time during which this Contract ValuedItem information is effective.
   */
  effectiveTime?: string;

  /**
   * @description Extensions for effectiveTime
   */
  _effectiveTime?: IElement;

  /**
   * @description Specifies the units by which the Contract Valued Item is measured or counted, and quantifies the countable or measurable Contract Valued Item instances.
   */
  quantity?: ISimpleQuantity;

  /**
   * @description A Contract Valued Item unit valuation measure.
   */
  unitPrice?: IMoney;

  /**
   * @description A real number that represents a multiplier used in determining the overall value of the Contract Valued Item delivered. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.
   */
  factor?: number;

  /**
   * @description Extensions for factor
   */
  _factor?: IElement;

  /**
   * @description An amount that expresses the weighting (based on difficulty, cost and/or resource intensiveness) associated with the Contract Valued Item delivered. The concept of Points allows for assignment of point values for a Contract Valued Item, such that a monetary amount can be assigned to each point.
   */
  points?: number;

  /**
   * @description Extensions for points
   */
  _points?: IElement;

  /**
   * @description Expresses the product of the Contract Valued Item unitQuantity and the unitPriceAmt. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points \u003d net Amount. Quantity, factor and points are assumed to be 1 if not supplied.
   */
  net?: IMoney;

  /**
   * @description Terms of valuation.
   */
  payment?: string;

  /**
   * @description Extensions for payment
   */
  _payment?: IElement;

  /**
   * @description When payment is due.
   */
  paymentDate?: string;

  /**
   * @description Extensions for paymentDate
   */
  _paymentDate?: IElement;

  /**
   * @description Who will make payment.
   */
  responsible?: IReference;

  /**
   * @description Who will receive payment.
   */
  recipient?: IReference;

  /**
   * @description Id  of the clause or question text related to the context of this valuedItem in the referenced form or QuestionnaireResponse.
   */
  linkId?: string[];

  /**
   * @description Extensions for linkId
   */
  _linkId?: IElement[];

  /**
   * @description A set of security labels that define which terms are controlled by this condition.
   */
  securityLabelNumber?: number[];

  /**
   * @description Extensions for securityLabelNumber
   */
  _securityLabelNumber?: IElement[];
}
