import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept, IIdentifier, IReference } from '../datatypes';
import { IContractAnswer } from './IContractAnswer';
import { IContractParty } from './IContractParty';

/**
 * @name IContractOffer
 * @description Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement.
 * @see <a href="https://hl7.org/fhir/R4/contract-definitions.html#Contract.term.offer">ContractOffer</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IContractOffer extends IBackboneElement {
  /**
   * @description Unique identifier for this particular Contract Provision.
   */
  identifier?: IIdentifier[];

  /**
   * @description Offer Recipient.
   */
  party?: IContractParty[];

  /**
   * @description The owner of an asset has the residual control rights over the asset: the right to decide all usages of the asset in any way not inconsistent with a prior contract, custom, or law (Hart, 1995, p. 30).
   */
  topic?: IReference;

  /**
   * @description Type of Contract Provision such as specific requirements, purposes for actions, obligations, prohibitions, e.g. life time maximum benefit.
   */
  type?: ICodeableConcept;

  /**
   * @description Type of choice made by accepting party with respect to an offer made by an offeror/ grantee.
   */
  decision?: ICodeableConcept;

  /**
   * @description How the decision about a Contract was conveyed.
   */
  decisionMode?: ICodeableConcept[];

  /**
   * @description Response to offer text.
   */
  answer?: IContractAnswer[];

  /**
   * @description Human readable form of this Contract Offer.
   */
  text?: string;

  /**
   * @description Extensions for text
   */
  _text?: IElement;

  /**
   * @description The id of the clause or question text of the offer in the referenced questionnaire/response.
   */
  linkId?: string[];

  /**
   * @description Extensions for linkId
   */
  _linkId?: IElement[];

  /**
   * @description Security labels that protects the offer.
   */
  securityLabelNumber?: number[];

  /**
   * @description Extensions for securityLabelNumber
   */
  _securityLabelNumber?: IElement[];
}
