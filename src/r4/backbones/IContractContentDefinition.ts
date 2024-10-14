import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept, IReference } from '../datatypes';
import { ContractPublicationstatusType } from '../types';

/**
 * @name IContractContentDefinition
 * @description Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement.
 * @see <a href="https://hl7.org/fhir/R4/contract-definitions.html#Contract.contentDefinition">ContractContentDefinition</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IContractContentDefinition extends IBackboneElement {
  /**
   * @description Precusory content structure and use, i.e., a boilerplate, template, application for a contract such as an insurance policy or benefits under a program, e.g., workers compensation.
   */
  type: ICodeableConcept;

  /**
   * @description Detailed Precusory content type.
   */
  subType?: ICodeableConcept;

  /**
   * @description The  individual or organization that published the Contract precursor content.
   */
  publisher?: IReference;

  /**
   * @description The date (and optionally time) when the contract was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the contract changes.
   */
  publicationDate?: string;

  /**
   * @description Extensions for publicationDate
   */
  _publicationDate?: IElement;

  /**
   * @description This value set contract specific codes for status.
   * @description amended | appended | cancelled | disputed | entered-in-error | executable | executed | negotiable | offered | policy | rejected | renewed | revoked | resolved | terminated
   * @see <a href="https://hl7.org/fhir/R4/valueset-contract-publicationstatus.html">ContractPublicationstatus</a>
   */
  publicationStatus: ContractPublicationstatusType;

  /**
   * @description Extensions for publicationStatus
   */
  _publicationStatus?: IElement;

  /**
   * @description A copyright statement relating to Contract precursor content. Copyright statements are generally legal restrictions on the use and publishing of the Contract precursor content.
   */
  copyright?: string;

  /**
   * @description Extensions for copyright
   */
  _copyright?: IElement;
}
