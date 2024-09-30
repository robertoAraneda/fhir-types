import { IBackboneElement, IElement } from '../base';

/**
 * @name IMedicationBatch
 * @description This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use.
 * @see <a href="https://hl7.org/fhir/R4/medication-definitions.html#Medication.batch">MedicationBatch</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IMedicationBatch extends IBackboneElement {
  /**
   * @description The assigned lot number of a batch of the specified product.
   */
  lotNumber?: string;

  /**
   * @description Extensions for lotNumber
   */
  _lotNumber?: IElement;

  /**
   * @description When this specific batch of product will expire.
   */
  expirationDate?: string;

  /**
   * @description Extensions for expirationDate
   */
  _expirationDate?: IElement;
}
