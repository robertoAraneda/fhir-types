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

export interface IServiceRequest extends IDomainResource {
  resourceType?: 'ServiceRequest';

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
   * @description Codes identifying the lifecycle stage of a request
   * @description draft | active | on-hold | revoked | completed | entered-in-error | unknown
   * @see <a href="https://hl7.org/fhir/R4/valueset-request-status.html">RequestStatus</a>
   */
  status: RequestStatusType;

  /**
   * @description Codes indicating the degree of authority/intentionality associated with a request
   * @description proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option
   * @see <a href="https://hl7.org/fhir/R4/valueset-request-intent.html">RequestIntent</a>
   */
  intent: RequestIntentType;

  /**
   * @description A code that classifies the service for searching, sorting and display purposes (e.g. "Surgical Procedure").
   */
  category?: ICodeableConcept[];

  /**
   * @description Indicates how quickly the ServiceRequest should be addressed with respect to other requests.
   * @description routine | urgent | asap | stat
   * @see <a href="https://hl7.org/fhir/R4/valueset-request-priority.html">RequestPriority</a>
   */
  priority?: RequestPriorityType;

  /**
   * @description Set this to true if the record is saying that the service/procedure should NOT be performed.
   */
  doNotPerform?: boolean;

  /**
   * @description A code that identifies a particular service (i.e., procedure, diagnostic investigation, or panel of investigations) that have been requested.
   */
  code?: ICodeableConcept;

  /**
   * @description Additional details and instructions about the how the services are to be delivered.
   */
  orderDetail?: ICodeableConcept[];

  /**
   * @description An amount of service being requested. A measured amount (or an amount that can potentially be measured).
   */
  quantityQuantity?: IQuantity;

  /**
   * @description An amount of service being requested. A relationship between two Quantity values expressed as a numerator and a denominator.
   */
  quantityRatio?: IRatio;

  /**
   * @description An amount of service being requested. A set of ordered Quantity values defined by a low and high limit.
   */
  quantityRange?: IRange;

  /**
   * @description On whom or what the service is to be performed.
   */
  subject: IReference;

  /**
   * @description An encounter that provides additional information about the healthcare context in which this request is made.
   */
  encounter?: IReference;

  /**
   * @description The date/time at which the requested service should occur. A date, date-time or partial date (e.g. just year or year + month) as used in human communication.
   */
  occurrenceDateTime?: string;

  /**
   * @description The date/time at which the requested service should occur. A time period defined by a start and end date/time.
   */
  occurrencePeriod?: IPeriod;

  /**
   * @description The date/time at which the requested service should occur. Describes the occurrence of an event that may occur multiple times.
   */
  occurrenceTiming?: ITiming;

  /**
   * @description Preconditions for service.
   */
  asNeededBoolean?: boolean;

  /**
   * @description If a CodeableConcept is present, it indicates the pre-condition for performing the service.
   */
  asNeededCodeableConcept?: ICodeableConcept;

  /**
   * @description When the request transitioned to being actionable..
   */
  authoredOn?: string;

  /**
   * @description The individual who initiated the request and has responsibility for its activation.
   */
  requester?: IReference;

  /**
   * @description Desired type of performer for doing the requested service.
   */
  performerType?: ICodeableConcept;

  /**
   * @description The desired performer for doing the requested service.
   */
  performer?: IReference[];

  /**
   * @description The preferred location(s) where the procedure should actually happen in coded or free text form.
   */
  locationCode?: ICodeableConcept[];

  /**
   * @description A reference to the the preferred location(s) where the procedure should actually happen.
   */
  locationReference?: IReference[];

  /**
   * @description An explanation or justification for why this service is being requested in coded or textual form.
   */
  reasonCode?: ICodeableConcept[];

  /**
   * @description Indicates another resource that provides a justification for why this service is being requested.
   */
  reasonReference?: IReference[];

  /**
   * @description Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be needed for delivering the requested service.
   */
  insurance?: IReference[];

  /**
   * @description Additional clinical information about the patient or specimen that may influence the services or their interpretations.
   */
  supportingInfo?: IReference[];

  /**
   * @description One or more specimens that the laboratory procedure will use.
   */
  specimen?: IReference[];

  /**
   * @description Anatomic location where the procedure should be performed.
   */
  bodySite?: ICodeableConcept[];

  /**
   * @description Any other notes and comments made about the service request.
   */
  note?: IAnnotation[];

  /**
   * @description Instructions in terms that are understood by the patient or consumer.
   */
  patientInstruction?: string;

  /**
   * @description Key events in the history of the request.
   */
  relevantHistory?: IReference[];

  // Extensions attributes
  /**
   * @description Extension for instantiatesCanonical.
   */
  _instantiatesCanonical?: IElement[];

  /**
   * @description Extension for instantiatesUri.
   */
  _instantiatesUri?: IElement[];

  /**
   * @description Extension for doNotPerform.
   */
  _doNotPerform?: IElement;

  /**
   * @description Extension for authoredOn.
   */
  _authoredOn?: IElement;

  /**
   * @description Extension for patientInstruction.
   */
  _patientInstruction?: IElement;
}
