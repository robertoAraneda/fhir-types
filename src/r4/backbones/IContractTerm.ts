import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept, IIdentifier, IPeriod, IReference } from '../datatypes';
import { IContractAction } from './IContractAction';
import { IContractAsset } from './IContractAsset';
import { IContractOffer } from './IContractOffer';
import { IContractSecurityLabel } from './IContractSecurityLabel';

/**
 * @name IContractTerm
 * @description Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement.
 * @see <a href="https://hl7.org/fhir/R4/contract-definitions.html#Contract.term">ContractTerm</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IContractTerm extends IBackboneElement {
  /**
   * @description Unique identifier for this particular Contract Provision.
   */
  identifier?: IIdentifier;

  /**
   * @description When this Contract Provision was issued.
   */
  issued?: string;

  /**
   * @description Extensions for issued
   */
  _issued?: IElement;

  /**
   * @description Relevant time or time-period when this Contract Provision is applicable.
   */
  applies?: IPeriod;

  /**
   * @description The entity that the term applies to.
   */
  topicCodeableConcept?: ICodeableConcept;

  /**
   * @description The entity that the term applies to.
   */
  topicReference?: IReference;

  /**
   * @description A legal clause or condition contained within a contract that requires one or both parties to perform a particular requirement by some specified time or prevents one or both parties from performing a particular requirement by some specified time.
   */
  type?: ICodeableConcept;

  /**
   * @description A specialized legal clause or condition based on overarching contract type.
   */
  subType?: ICodeableConcept;

  /**
   * @description Statement of a provision in a policy or a contract.
   */
  text?: string;

  /**
   * @description Extensions for text
   */
  _text?: IElement;

  /**
   * @description Security labels that protect the handling of information about the term and its elements, which may be specifically identified.
   */
  securityLabel?: IContractSecurityLabel[];

  /**
   * @description The matter of concern in the context of this provision of the agrement.
   */
  offer?: IContractOffer;

  /**
   * @description Contract Term Asset List.
   */
  asset?: IContractAsset[];

  /**
   * @description An actor taking a role in an activity for which it can be assigned some degree of responsibility for the activity taking place.
   */
  action?: IContractAction[];

  /**
   * @description Nested group of Contract Provisions.
   */
  group?: IContractTerm[];
}
