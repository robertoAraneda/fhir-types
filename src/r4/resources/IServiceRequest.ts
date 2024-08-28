import { IDomainResource, IElement } from '../base';
import {
  IAnnotation,
  ICodeableConcept,
  IIdentifier,
  IPeriod,
  IQuantity,
  IRange,
  IRatio,
  IReference,
} from '../datatypes';
import { ITiming } from '../backbones';
import { RequestIntentType, RequestPriorityType, RequestStatusType } from '../types';

/**
 * @name IServiceRequest
 * @description A record of a request for service such as diagnostic investigations, treatments, or operations to be performed.
 * @see <a href="https://www.hl7.org/fhir/R4/servicerequest.html">ServiceRequest</a>
 * @version R4
 * @extends {IDomainResource}
 * @author Roberto Araneda Espinoza
 * @author Claudia Alarcón Lazo
 */
export interface IServiceRequest extends IDomainResource {
  /**
   * @description The type of resource
   */
  resourceType?: string;

  /**
   * @description Identifiers assigned to this order instance by the orderer and/or the receiver and/or order fulfiller.
   */
  identifier?: IIdentifier[];

  /**
   * @description The URL pointing to a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this ServiceRequest.
   */
  instantiatesCanonical?: string[];

  /**
   * @description The URL pointing to an externally maintained protocol, guideline, orderset or other definition that is adhered to in whole or in part by this ServiceRequest.
   */
  instantiatesUri?: string[];

  /**
   * @description Extensions for instantiatesUri
   */
  _instantiatesUri?: IElement[];

  /**
   * @description Plan/proposal/order fulfilled by this request.
   */
  basedOn?: IReference[];

  /**
   * @description The request takes the place of the referenced completed or terminated request(s).
   */
  replaces?: IReference[];

  /**
   * @description A shared identifier common to all service requests that were authorized more or less simultaneously by a single author, representing the composite or group identifier.
   */
  requisition?: IIdentifier;

  /**
   * @description The status of the order.
   */
  status: RequestStatusType;

  /**
   * @description Extensions for status
   */
  _status?: IElement;

  /**
   * @description Whether the request is a proposal, plan, an original order or a reflex order.
   */
  intent: RequestIntentType;

  /**
   * @description Extensions for intent
   */
  _intent?: IElement;

  /**
   * @description A code that classifies the service for searching, sorting and display purposes (e.g. "Surgical Procedure").
   */
  category?: ICodeableConcept[];

  /**
   * @description Indicates how quickly the ServiceRequest should be addressed with respect to other requests.
   */
  priority?: RequestPriorityType;

  /**
   * @description Extensions for priority
   */
  _priority?: IElement;

  /**
   * @description Set this to true if the record is saying that the service/procedure should NOT be performed.
   */
  doNotPerform?: boolean;

  /**
   * @description Extensions for doNotPerform
   */
  _doNotPerform?: IElement;

  /**
   * @description A code that identifies a particular service (i.e., procedure, diagnostic investigation, or panel of investigations) that have been requested.
   */
  code?: ICodeableConcept;

  /**
   * @description Additional details and instructions about the how the services are to be delivered.   For example, and order for a urinary catheter may have an order detail for an external or indwelling catheter, or an order for a bandage may require additional instructions specifying how the bandage should be applied.
   */
  orderDetail?: ICodeableConcept[];

  /**
   * @description An amount of service being requested which can be a quantity ( for example $1,500 home modification), a ratio ( for example, 20 half day visits per month), or a range (2.0 to 1.8 Gy per fraction).
   */
  quantityQuantity?: IQuantity;

  /**
   * @description An amount of service being requested which can be a quantity ( for example $1,500 home modification), a ratio ( for example, 20 half day visits per month), or a range (2.0 to 1.8 Gy per fraction).
   */
  quantityRatio?: IRatio;

  /**
   * @description An amount of service being requested which can be a quantity ( for example $1,500 home modification), a ratio ( for example, 20 half day visits per month), or a range (2.0 to 1.8 Gy per fraction).
   */
  quantityRange?: IRange;

  /**
   * @description On whom or what the service is to be performed. This is usually a human patient, but can also be requested on animals, groups of humans or animals, devices such as dialysis machines, or even locations (typically for environmental scans).
   */
  subject: IReference;

  /**
   * @description An encounter that provides additional information about the healthcare context in which this request is made.
   */
  encounter?: IReference;

  /**
   * @description The date/time at which the requested service should occur.
   */
  occurrenceDateTime?: string;

  /**
   * @description Extensions for occurrenceDateTime
   */
  _occurrenceDateTime?: IElement;

  /**
   * @description The date/time at which the requested service should occur.
   */
  occurrencePeriod?: IPeriod;

  /**
   * @description The date/time at which the requested service should occur.
   */
  occurrenceTiming?: ITiming;

  /**
   * @description If a CodeableConcept is present, it indicates the pre-condition for performing the service.  For example "pain", "on flare-up", etc.
   */
  asNeededBoolean?: boolean;

  /**
   * @description Extensions for asNeededBoolean
   */
  _asNeededBoolean?: IElement;

  /**
   * @description If a CodeableConcept is present, it indicates the pre-condition for performing the service.  For example "pain", "on flare-up", etc.
   */
  asNeededCodeableConcept?: ICodeableConcept;

  /**
   * @description When the request transitioned to being actionable.
   */
  authoredOn?: string;

  /**
   * @description Extensions for authoredOn
   */
  _authoredOn?: IElement;

  /**
   * @description The individual who initiated the request and has responsibility for its activation.
   */
  requester?: IReference;

  /**
   * @description Desired type of performer for doing the requested service.
   */
  performerType?: ICodeableConcept;

  /**
   * @description The desired performer for doing the requested service.  For example, the surgeon, dermatopathologist, endoscopist, etc.
   */
  performer?: IReference[];

  /**
   * @description The preferred location(s) where the procedure should actually happen in coded or free text form. E.g. at home or nursing day care center.
   */
  locationCode?: ICodeableConcept[];

  /**
   * @description A reference to the the preferred location(s) where the procedure should actually happen. E.g. at home or nursing day care center.
   */
  locationReference?: IReference[];

  /**
   * @description An explanation or justification for why this service is being requested in coded or textual form.   This is often for billing purposes.  May relate to the resources referred to in `supportingInfo`.
   */
  reasonCode?: ICodeableConcept[];

  /**
   * @description Indicates another resource that provides a justification for why this service is being requested.   May relate to the resources referred to in `supportingInfo`.
   */
  reasonReference?: IReference[];

  /**
   * @description Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be needed for delivering the requested service.
   */
  insurance?: IReference[];

  /**
   * @description Additional clinical information about the patient or specimen that may influence the services or their interpretations.     This information includes diagnosis, clinical findings and other observations.  In laboratory ordering these are typically referred to as "ask at order entry questions (AOEs)".  This includes observations explicitly requested by the producer (filler) to provide context or supporting information needed to complete the order. For example,  reporting the amount of inspired oxygen for blood gas measurements.
   */
  supportingInfo?: IReference[];

  /**
   * @description One or more specimens that the laboratory procedure will use.
   */
  specimen?: IReference[];

  /**
   * @description Anatomic location where the procedure should be performed. This is the target site.
   */
  bodySite?: ICodeableConcept[];

  /**
   * @description Any other notes and comments made about the service request. For example, internal billing notes.
   */
  note?: IAnnotation[];

  /**
   * @description Instructions in terms that are understood by the patient or consumer.
   */
  patientInstruction?: string;

  /**
   * @description Extensions for patientInstruction
   */
  _patientInstruction?: IElement;

  /**
   * @description Key events in the history of the request.
   */
  relevantHistory?: IReference[];
}
