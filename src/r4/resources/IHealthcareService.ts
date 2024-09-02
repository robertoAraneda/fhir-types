import {
  IHealthcareServiceAvailableTime,
  IHealthcareServiceEligibility,
  IHealthcareServiceNotAvailable,
} from '../backbones';
import { IDomainResource, IElement } from '../base';
import { IAttachment, ICodeableConcept, IContactPoint, IIdentifier, IReference } from '../datatypes';

/**
 * @name HealthcareService
 * @description The details of a healthcare service available at a location.
 * @see <a href="https://hl7.org/fhir/R4/healthcareservice.html">HealthcareService</a>
 * @version R4
 * @extends {IDomainResource}
 * @author Claudia Alarcón Lazo
 */
export interface IHealthcareService extends IDomainResource {
  /**
   * @description External identifiers for this item.
   */
  identifier?: IIdentifier[];

  /**
   * @description This flag is used to mark the record to not be used. This is not used when a center is closed for maintenance, or for holidays, the notAvailable period is to be used for this.
   */
  active?: boolean;

  /**
   * @description The organization that provides this healthcare service.
   */
  providedBy?: IReference;

  /**
   * @description Identifies the broad category of service being performed or delivered.
   */
  category?: ICodeableConcept[];

  /**
   * @description The specific type of service that may be delivered or performed.
   */
  type?: ICodeableConcept[];

  /**
   * @description Collection of specialties handled by the service site. This is more of a medical term.
   */
  specialty?: ICodeableConcept[];

  /**
   * @description The location(s) where this healthcare service may be provided.
   */
  location?: IReference[];

  /**
   * @description Further description of the service as it would be presented to a consumer while searching.
   */
  name?: string;

  /**
   * @description Any additional description of the service and/or any specific issues not covered by the other attributes, which can be displayed as further detail under the serviceName.
   */
  comment?: string;

  /**
   * @description Extra details about the service that can't be placed in the other fields.
   */
  extraDetails?: string;

  /**
   * @description If there is a photo/symbol associated with this HealthcareService, it may be included here to facilitate quick identification of the service in a list.
   */
  photo?: IAttachment;

  /**
   * @description List of contacts related to this specific healthcare service.
   */
  telecom?: IContactPoint[];

  /**
   * @description The location(s) that this service is available to (not where the service is provided).
   */
  coverageArea?: IReference[];

  /**
   * @description The code(s) that detail the conditions under which the healthcare service is available/offered.
   */
  serviceProvisionCode?: ICodeableConcept[];

  /**
   * @description Does this service have specific eligibility requirements that need to be met in order to use the service?
   */
  eligibility?: IHealthcareServiceEligibility[];

  /**
   * @description Programs that this service is applicable to.
   */
  program?: ICodeableConcept[];

  /**
   * @description Collection of characteristics (attributes).
   */
  characteristic?: ICodeableConcept[];

  /**
   * @description Some services are specifically made available in multiple languages, this property permits a directory to declare the languages this is offered in. Typically this is only provided where a service operates in communities with mixed languages used.
   */
  communication?: ICodeableConcept[];

  /**
   * @description Ways that the service accepts referrals, if this is not provided then it is implied that no referral is required.
   */
  referralMethod?: ICodeableConcept[];

  /**
   * @description Indicates whether or not a prospective consumer will require an appointment for a particular service at a site to be provided by the Organization. Indicates if an appointment is required for access to this service.
   */
  appointmentRequired?: boolean;

  /**
   * @description A collection of times that the Service Site is available.
   */
  availableTime?: IHealthcareServiceAvailableTime[];

  /**
   * @description The HealthcareService is not available during this period of time due to the provided reason.
   */
  notAvailable?: IHealthcareServiceNotAvailable[];

  /**
   * @description A description of site availability exceptions, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as details in the available Times and not available Times.
   */
  availabilityExceptions?: string;

  /**
   * @description Technical endpoints providing access to services operated for the specific healthcare service.
   */
  endpoint?: IReference[];

  // Extensions attributes
  /**
   * @description Extensions for active
   */
  _active?: IElement;

  /**
   * @description Extensions for name
   */
  _name?: IElement;

  /**
   * @description Extensions for comment
   */
  _comment?: IElement;

  /**
   * @description Extensions for extraDetails
   */
  _extraDetails?: IElement;

  /**
   * @description Extensions for appointmentRequired
   */
  _appointmentRequired?: IElement;

  /**
   * @description Extensions for availabilityExceptions
   */
  _availabilityExceptions?: IElement;
}
