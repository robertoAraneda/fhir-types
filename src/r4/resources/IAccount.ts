import { IDomainResource, IElement } from '../base';
import { ICodeableConcept, IIdentifier, IPeriod, IReference } from '../datatypes';
import { IAccountCoverage, IAccountGuarantor } from '../backbones';
import { AccountStatusType } from '../types';

/**
 * @name IAccount
 * @description A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc.
 * @see <a href="https://hl7.org/fhir/R4/account.html">Account</a>
 * @version R4
 * @extends {IDomainResource}
 * @author Roberto Araneda Espinoza
 */
export interface IAccount extends IDomainResource {
  /**
   * @description Unique identifier used to reference the account.  Might or might not be intended for human use (e.g. credit card number).
   */
  identifier?: IIdentifier[];

  /**
   * @description Indicates whether the account is presently used/usable or not.
   */
  status: AccountStatusType;

  /**
   * @description Extensions for status
   */
  _status?: IElement;

  /**
   * @description Categorizes the account for reporting and searching purposes.
   */
  type?: ICodeableConcept;

  /**
   * @description Name used for the account when displaying it to humans in reports, etc.
   */
  name?: string;

  /**
   * @description Extensions for name
   */
  _name?: IElement;

  /**
   * @description Identifies the entity which incurs the expenses. While the immediate recipients of services or goods might be entities related to the subject, the expenses were ultimately incurred by the subject of the Account.
   */
  subject?: IReference[];

  /**
   * @description The date range of services associated with this account.
   */
  servicePeriod?: IPeriod;

  /**
   * @description The party(s) that are responsible for covering the payment of this account, and what order should they be applied to the account.
   */
  coverage?: IAccountCoverage[];

  /**
   * @description Indicates the service area, hospital, department, etc. with responsibility for managing the Account.
   */
  owner?: IReference;

  /**
   * @description Provides additional information about what the account tracks and how it is used.
   */
  description?: string;

  /**
   * @description Extensions for description
   */
  _description?: IElement;

  /**
   * @description The parties responsible for balancing the account if other payment options fall short.
   */
  guarantor?: IAccountGuarantor[];

  /**
   * @description Reference to a parent Account.
   */
  partOf?: IReference;
}
