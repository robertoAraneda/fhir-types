import { IBackboneElement, IElement } from '../base';
import { IAnnotation, ICodeableConcept, IPeriod, IReference } from '../datatypes';
import { IContractSubject } from './IContractSubject';
import { ITiming } from './ITiming';

/**
 * @name IContractAction
 * @description Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement.
 * @see <a href="https://hl7.org/fhir/R4/contract-definitions.html#Contract.term.action">ContractAction</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IContractAction extends IBackboneElement {
  /**
   * @description True if the term prohibits the  action.
   */
  doNotPerform?: boolean;

  /**
   * @description Extensions for doNotPerform
   */
  _doNotPerform?: IElement;

  /**
   * @description Activity or service obligation to be done or not done, performed or not performed, effectuated or not by this Contract term.
   */
  type: ICodeableConcept;

  /**
   * @description Entity of the action.
   */
  subject?: IContractSubject[];

  /**
   * @description Reason or purpose for the action stipulated by this Contract Provision.
   */
  intent: ICodeableConcept;

  /**
   * @description Id [identifier??] of the clause or question text related to this action in the referenced form or QuestionnaireResponse.
   */
  linkId?: string[];

  /**
   * @description Extensions for linkId
   */
  _linkId?: IElement[];

  /**
   * @description Current state of the term action.
   */
  status: ICodeableConcept;

  /**
   * @description Encounter or Episode with primary association to specified term activity.
   */
  context?: IReference;

  /**
   * @description Id [identifier??] of the clause or question text related to the requester of this action in the referenced form or QuestionnaireResponse.
   */
  contextLinkId?: string[];

  /**
   * @description Extensions for contextLinkId
   */
  _contextLinkId?: IElement[];

  /**
   * @description When action happens.
   */
  occurrenceDateTime?: string;

  /**
   * @description Extensions for occurrenceDateTime
   */
  _occurrenceDateTime?: IElement;

  /**
   * @description When action happens.
   */
  occurrencePeriod?: IPeriod;

  /**
   * @description When action happens.
   */
  occurrenceTiming?: ITiming;

  /**
   * @description Who or what initiated the action and has responsibility for its activation.
   */
  requester?: IReference[];

  /**
   * @description Id [identifier??] of the clause or question text related to the requester of this action in the referenced form or QuestionnaireResponse.
   */
  requesterLinkId?: string[];

  /**
   * @description Extensions for requesterLinkId
   */
  _requesterLinkId?: IElement[];

  /**
   * @description The type of individual that is desired or required to perform or not perform the action.
   */
  performerType?: ICodeableConcept[];

  /**
   * @description The type of role or competency of an individual desired or required to perform or not perform the action.
   */
  performerRole?: ICodeableConcept;

  /**
   * @description Indicates who or what is being asked to perform (or not perform) the ction.
   */
  performer?: IReference;

  /**
   * @description Id [identifier??] of the clause or question text related to the reason type or reference of this  action in the referenced form or QuestionnaireResponse.
   */
  performerLinkId?: string[];

  /**
   * @description Extensions for performerLinkId
   */
  _performerLinkId?: IElement[];

  /**
   * @description Rationale for the action to be performed or not performed. Describes why the action is permitted or prohibited.
   */
  reasonCode?: ICodeableConcept[];

  /**
   * @description Indicates another resource whose existence justifies permitting or not permitting this action.
   */
  reasonReference?: IReference[];

  /**
   * @description Describes why the action is to be performed or not performed in textual form.
   */
  reason?: string[];

  /**
   * @description Extensions for reason
   */
  _reason?: IElement[];

  /**
   * @description Id [identifier??] of the clause or question text related to the reason type or reference of this  action in the referenced form or QuestionnaireResponse.
   */
  reasonLinkId?: string[];

  /**
   * @description Extensions for reasonLinkId
   */
  _reasonLinkId?: IElement[];

  /**
   * @description Comments made about the term action made by the requester, performer, subject or other participants.
   */
  note?: IAnnotation[];

  /**
   * @description Security labels that protects the action.
   */
  securityLabelNumber?: number[];

  /**
   * @description Extensions for securityLabelNumber
   */
  _securityLabelNumber?: IElement[];
}
