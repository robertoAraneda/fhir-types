import {
  IContractContentDefinition,
  IContractFriendly,
  IContractLegal,
  IContractRule,
  IContractSigner,
  IContractTerm,
} from '../backbones';
import { IDomainResource, IElement } from '../base';
import { IAttachment, ICodeableConcept, IIdentifier, IPeriod, IReference } from '../datatypes';
import { ContractLegalstateType } from '../types';

/**
 * @name IContract
 * @description Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement.
 * @see <a href="https://hl7.org/fhir/R4/contract.html">Contract</a>
 * @version R4
 * @extends {IDomainResource}
 * @author Claudia Alarcón Lazo
 */
export interface IContract extends IDomainResource {
  /**
   * @description Unique identifier for this Contract or a derivative that references a Source Contract.
   */
  identifier?: IIdentifier[];

  /**
   * @description Canonical identifier for this contract, represented as a URI (globally unique).
   */
  url?: string;

  /**
   * @description Extensions for url
   */
  _url?: IElement;

  /**
   * @description An edition identifier used for business purposes to label business significant variants.
   */
  version?: string;

  /**
   * @description Extensions for version
   */
  _version?: IElement;

  /**
   * @description The status of the resource instance.
   * @description amended | appended | cancelled | disputed | entered-in-error | executable | executed | negotiable | offered | policy | rejected | renewed | revoked | resolved | terminated
   * @see <a href="https://hl7.org/fhir/R4/valueset-contract-legalstate.html">ContractLegalstate</a>
   */
  status?: ContractLegalstateType;

  /**
   * @description Extensions for status
   */
  _status?: IElement;

  /**
   * @description Legal states of the formation of a legal instrument, which is a formally executed written document that can be formally attributed to its author, records and formally expresses a legally enforceable act, process, or contractual duty, obligation, or right, and therefore evidences that act, process, or agreement.
   */
  legalState?: ICodeableConcept;

  /**
   * @description The URL pointing to a FHIR-defined Contract Definition that is adhered to in whole or part by this Contract.
   */
  instantiatesCanonical?: IReference;

  /**
   * @description The URL pointing to an externally maintained definition that is adhered to in whole or in part by this Contract.
   */
  instantiatesUri?: string;

  /**
   * @description Extensions for instantiatesUri
   */
  _instantiatesUri?: IElement;

  /**
   * @description The minimal content derived from the basal information source at a specific stage in its lifecycle.
   */
  contentDerivative?: ICodeableConcept;

  /**
   * @description When this  Contract was issued.
   */
  issued?: string;

  /**
   * @description Extensions for issued
   */
  _issued?: IElement;

  /**
   * @description Relevant time or time-period when this Contract is applicable.
   */
  applies?: IPeriod;

  /**
   * @description Event resulting in discontinuation or termination of this Contract instance by one or more parties to the contract.
   */
  expirationType?: ICodeableConcept;

  /**
   * @description The target entity impacted by or of interest to parties to the agreement.
   */
  subject?: IReference[];

  /**
   * @description A formally or informally recognized grouping of people, principals, organizations, or jurisdictions formed for the purpose of achieving some form of collective action such as the promulgation, administration and enforcement of contracts and policies.
   */
  authority?: IReference[];

  /**
   * @description Recognized governance framework or system operating with a circumscribed scope in accordance with specified principles, policies, processes or procedures for managing rights, actions, or behaviors of parties or principals relative to resources.
   */
  domain?: IReference[];

  /**
   * @description Sites in which the contract is complied with,  exercised, or in force.
   */
  site?: IReference[];

  /**
   * @description A natural language name identifying this Contract definition, derivative, or instance in any legal state. Provides additional information about its content. This name should be usable as an identifier for the module by machine processing applications such as code generation.
   */
  name?: string;

  /**
   * @description Extensions for name
   */
  _name?: IElement;

  /**
   * @description A short, descriptive, user-friendly title for this Contract definition, derivative, or instance in any legal state.t giving additional information about its content.
   */
  title?: string;

  /**
   * @description Extensions for title
   */
  _title?: IElement;

  /**
   * @description An explanatory or alternate user-friendly title for this Contract definition, derivative, or instance in any legal state.t giving additional information about its content.
   */
  subtitle?: string;

  /**
   * @description Extensions for subtitle
   */
  _subtitle?: IElement;

  /**
   * @description Alternative representation of the title for this Contract definition, derivative, or instance in any legal state., e.g., a domain specific contract number related to legislation.
   */
  alias?: string[];

  /**
   * @description Extensions for alias
   */
  _alias?: IElement[];

  /**
   * @description The individual or organization that authored the Contract definition, derivative, or instance in any legal state.
   */
  author?: IReference;

  /**
   * @description A selector of legal concerns for this Contract definition, derivative, or instance in any legal state.
   */
  scope?: ICodeableConcept;

  /**
   * @description Narrows the range of legal concerns to focus on the achievement of specific contractual objectives.
   */
  topicCodeableConcept?: ICodeableConcept;

  /**
   * @description Narrows the range of legal concerns to focus on the achievement of specific contractual objectives.
   */
  topicReference?: IReference;

  /**
   * @description A high-level category for the legal instrument, whether constructed as a Contract definition, derivative, or instance in any legal state.  Provides additional information about its content within the context of the Contract\u0027s scope to distinguish the kinds of systems that would be interested in the contract.
   */
  type?: ICodeableConcept;

  /**
   * @description Sub-category for the Contract that distinguishes the kinds of systems that would be interested in the Contract within the context of the Contract\u0027s scope.
   */
  subType?: ICodeableConcept[];

  /**
   * @description Precusory content developed with a focus and intent of supporting the formation a Contract instance, which may be associated with and transformable into a Contract.
   */
  contentDefinition?: IContractContentDefinition;

  /**
   * @description One or more Contract Provisions, which may be related and conveyed as a group, and may contain nested groups.
   */
  term?: IContractTerm[];

  /**
   * @description Information that may be needed by/relevant to the performer in their execution of this term action.
   */
  supportingInfo?: IReference[];

  /**
   * @description Links to Provenance records for past versions of this Contract definition, derivative, or instance, which identify key state transitions or updates that are likely to be relevant to a user looking at the current version of the Contract.  The Provence.entity indicates the target that was changed in the update. http://build.fhir.org/provenance-definitions.html#Provenance.entity.
   */
  relevantHistory?: IReference[];

  /**
   * @description Parties with legal standing in the Contract, including the principal parties, the grantor(s) and grantee(s), which are any person or organization bound by the contract, and any ancillary parties, which facilitate the execution of the contract such as a notary or witness.
   */
  signer?: IContractSigner[];

  /**
   * @description The \"patient friendly language\" versionof the Contract in whole or in parts. \"Patient friendly language\" means the representation of the Contract and Contract Provisions in a manner that is readily accessible and understandable by a layperson in accordance with best practices for communication styles that ensure that those agreeing to or signing the Contract understand the roles, actions, obligations, responsibilities, and implication of the agreement.
   */
  friendly?: IContractFriendly[];

  /**
   * @description List of Legal expressions or representations of this Contract.
   */
  legal?: IContractLegal[];

  /**
   * @description List of Computable Policy Rule Language Representations of this Contract.
   */
  rule?: IContractRule[];

  /**
   * @description Legally binding Contract: This is the signed and legally recognized representation of the Contract, which is considered the \"source of truth\" and which would be the basis for legal action related to enforcement of this Contract.
   */
  legallyBindingAttachment?: IAttachment;

  /**
   * @description Legally binding Contract: This is the signed and legally recognized representation of the Contract, which is considered the \"source of truth\" and which would be the basis for legal action related to enforcement of this Contract.
   */
  legallyBindingReference?: IReference;
}
