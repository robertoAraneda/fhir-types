import { IBackboneElement } from '../base';
import { ICodeableConcept, IReference } from '../datatypes';

/**
 * @name IContractParty
 * @description Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement.
 * @see <a href="https://hl7.org/fhir/R4/contract-definitions.html#Contract.term.offer.party">ContractParty</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IContractParty extends IBackboneElement {
  /**
   * @description Participant in the offer.
   */
  reference: IReference[];

  /**
   * @description How the party participates in the offer.
   */
  role: ICodeableConcept;
}
