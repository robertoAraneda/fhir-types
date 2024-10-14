import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept, ICoding, IPeriod, IReference } from '../datatypes';
import { IContractAnswer } from './IContractAnswer';
import { IContractContext } from './IContractContext';
import { IContractValuedItem } from './IContractValuedItem';

/**
 * @name IContractAsset
 * @description Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement.
 * @see <a href="https://hl7.org/fhir/R4/contract-definitions.html#Contract.term.asset">ContractAsset</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IContractAsset extends IBackboneElement {
  /**
   * @description Differentiates the kind of the asset.
   */
  scope?: ICodeableConcept;

  /**
   * @description Target entity type about which the term may be concerned.
   */
  type?: ICodeableConcept[];

  /**
   * @description Associated entities.
   */
  typeReference?: IReference[];

  /**
   * @description May be a subtype or part of an offered asset.
   */
  subtype?: ICodeableConcept[];

  /**
   * @description Specifies the applicability of the term to an asset resource instance, and instances it refers to orinstances that refer to it, and/or are owned by the offeree.
   */
  relationship?: ICoding;

  /**
   * @description Circumstance of the asset.
   */
  context?: IContractContext[];

  /**
   * @description Description of the quality and completeness of the asset that imay be a factor in its valuation.
   */
  condition?: string;

  /**
   * @description Extensions for condition
   */
  _condition?: IElement;

  /**
   * @description Type of Asset availability for use or ownership.
   */
  periodType?: ICodeableConcept[];

  /**
   * @description Asset relevant contractual time period.
   */
  period?: IPeriod[];

  /**
   * @description Time period of asset use.
   */
  usePeriod?: IPeriod[];

  /**
   * @description Clause or question text (Prose Object) concerning the asset in a linked form, such as a QuestionnaireResponse used in the formation of the contract.
   */
  text?: string;

  /**
   * @description Extensions for text
   */
  _text?: IElement;

  /**
   * @description Id [identifier??] of the clause or question text about the asset in the referenced form or QuestionnaireResponse.
   */
  linkId?: string[];

  /**
   * @description Extensions for linkId
   */
  _linkId?: IElement[];

  /**
   * @description Response to assets.
   */
  answer?: IContractAnswer[];

  /**
   * @description Security labels that protects the asset.
   */
  securityLabelNumber?: number[];

  /**
   * @description Extensions for securityLabelNumber
   */
  _securityLabelNumber?: IElement[];

  /**
   * @description Contract Valued Item List.
   */
  valuedItem?: IContractValuedItem[];
}
