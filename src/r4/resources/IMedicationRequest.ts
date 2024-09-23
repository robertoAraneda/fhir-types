import { IDosage, IMedicationRequestDispenseRequest, IMedicationRequestSubstitution } from '../backbones';
import { IDomainResource, IElement } from '../base';
import { IAnnotation, ICodeableConcept, IIdentifier, IReference } from '../datatypes';
import { MedicationRequestIntentType, MedicationRequestStatusType, RequestPriorityType } from '../types';

/**
 * @name IMedicationRequest
 * @description An order or request for both supply of the medication and the instructions for administration of the medication to a patient. The resource is called \"MedicationRequest\" rather than \"MedicationPrescription\" or \"MedicationOrder\" to generalize the use across inpatient and outpatient settings, including care plans, etc., and to harmonize with workflow patterns.
 * @see <a href="https://hl7.org/fhir/R4/medicationrequest.html">MedicationRequest</a>
 * @version R4
 * @extends {IDomainResource}
 * @author Claudia Alarcón Lazo
 */
export interface IMedicationRequest extends IDomainResource {
  /**
   * @description Identifiers associated with this medication request that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate. They are business identifiers assigned to this resource by the performer or other systems and remain constant as the resource is updated and propagates from server to server.
   */
  identifier?: IIdentifier[];

  /**
   * @description A code specifying the current state of the order.  Generally, this will be active or completed state.
   * @description active | on-hold | cancelled | completed | entered-in-error | stopped | draft | unknown
   * @see <a href="https://hl7.org/fhir/R4/valueset-medicationrequest-status.html">MedicationRequestStatus</a>
   */
  status: MedicationRequestStatusType;

  /**
   * @description Extensions for status
   */
  _status?: IElement;

  /**
   * @description Captures the reason for the current state of the MedicationRequest.
   */
  statusReason?: ICodeableConcept;

  /**
   * @description Whether the request is a proposal, plan, or an original order.
   * @description proposal | plan | order | original-order | reflex-order | filler-order | instance-order | option
   * @see <a href="https://hl7.org/fhir/R4/valueset-medicationrequest-intent.html">MedicationRequestIntent</a>
   */
  intent: MedicationRequestIntentType;

  /**
   * @description Extensions for intent
   */
  _intent?: IElement;

  /**
   * @description Indicates the type of medication request (for example, where the medication is expected to be consumed or administered (i.e. inpatient or outpatient)).
   */
  category?: ICodeableConcept[];

  /**
   * @description Indicates how quickly the Medication Request should be addressed with respect to other requests.
   * @description routine | urgent | asap | stat
   * @see <a href="https://hl7.org/fhir/R4/valueset-request-priority.html">RequestPriority</a>
   */
  priority?: RequestPriorityType;

  /**
   * @description Extensions for priority
   */
  _priority?: IElement;

  /**
   * @description If true indicates that the provider is asking for the medication request not to occur.
   */
  doNotPerform?: boolean;

  /**
   * @description Extensions for doNotPerform
   */
  _doNotPerform?: IElement;

  /**
   * @description Indicates if this record was captured as a secondary \u0027reported\u0027 record rather than as an original primary source-of-truth record.  It may also indicate the source of the report.
   */
  reportedBoolean?: boolean;

  /**
   * @description Extensions for reportedBoolean
   */
  _reportedBoolean?: IElement;

  /**
   * @description Indicates if this record was captured as a secondary \u0027reported\u0027 record rather than as an original primary source-of-truth record.  It may also indicate the source of the report.
   */
  reportedReference?: IReference;

  /**
   * @description Identifies the medication being requested. This is a link to a resource that represents the medication which may be the details of the medication or simply an attribute carrying a code that identifies the medication from a known list of medications.
   */
  medicationCodeableConcept?: ICodeableConcept;

  /**
   * @description Identifies the medication being requested. This is a link to a resource that represents the medication which may be the details of the medication or simply an attribute carrying a code that identifies the medication from a known list of medications.
   */
  medicationReference?: IReference;

  /**
   * @description A link to a resource representing the person or set of individuals to whom the medication will be given.
   */
  subject: IReference;

  /**
   * @description The Encounter during which this [x] was created or to which the creation of this record is tightly associated.
   */
  encounter?: IReference;

  /**
   * @description Include additional information (for example, patient height and weight) that supports the ordering of the medication.
   */
  supportingInformation?: IReference[];

  /**
   * @description The date (and perhaps time) when the prescription was initially written or authored on.
   */
  authoredOn?: string;

  /**
   * @description Extensions for authoredOn
   */
  _authoredOn?: IElement;

  /**
   * @description The individual, organization, or device that initiated the request and has responsibility for its activation.
   */
  requester?: IReference;

  /**
   * @description The specified desired performer of the medication treatment (e.g. the performer of the medication administration).
   */
  performer?: IReference;

  /**
   * @description Indicates the type of performer of the administration of the medication.
   */
  performerType?: ICodeableConcept;

  /**
   * @description The person who entered the order on behalf of another individual for example in the case of a verbal or a telephone order.
   */
  recorder?: IReference;

  /**
   * @description The reason or the indication for ordering or not ordering the medication.
   */
  reasonCode?: ICodeableConcept[];

  /**
   * @description Condition or observation that supports why the medication was ordered.
   */
  reasonReference?: IReference[];

  /**
   * @description The URL pointing to a protocol, guideline, orderset, or other definition that is adhered to in whole or in part by this MedicationRequest.
   */
  instantiatesCanonical?: string[];

  /**
   * @description Extensions for instantiatesCanonical
   */
  _instantiatesCanonical?: IElement[];

  /**
   * @description The URL pointing to an externally maintained protocol, guideline, orderset or other definition that is adhered to in whole or in part by this MedicationRequest.
   */
  instantiatesUri?: string[];

  /**
   * @description Extensions for instantiatesUri
   */
  _instantiatesUri?: IElement[];

  /**
   * @description A plan or request that is fulfilled in whole or in part by this medication request.
   */
  basedOn?: IReference[];

  /**
   * @description A shared identifier common to all requests that were authorized more or less simultaneously by a single author, representing the identifier of the requisition or prescription.
   */
  groupIdentifier?: IIdentifier;

  /**
   * @description The description of the overall patte3rn of the administration of the medication to the patient.
   */
  courseOfTherapyType?: ICodeableConcept;

  /**
   * @description Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be required for delivering the requested service.
   */
  insurance?: IReference[];

  /**
   * @description Extra information about the prescription that could not be conveyed by the other attributes.
   */
  note?: IAnnotation[];

  /**
   * @description Indicates how the medication is to be used by the patient.
   */
  dosageInstruction?: IDosage[];

  /**
   * @description Indicates the specific details for the dispense or medication supply part of a medication request (also known as a Medication Prescription or Medication Order).  Note that this information is not always sent with the order.  There may be in some settings (e.g. hospitals) institutional or system support for completing the dispense details in the pharmacy department.
   */
  dispenseRequest?: IMedicationRequestDispenseRequest;

  /**
   * @description Indicates whether or not substitution can or should be part of the dispense. In some cases, substitution must happen, in other cases substitution must not happen. This block explains the prescriber\u0027s intent. If nothing is specified substitution may be done.
   */
  substitution?: IMedicationRequestSubstitution;

  /**
   * @description A link to a resource representing an earlier order related order or prescription.
   */
  priorAuthorization?: IReference;

  /**
   * @description Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, duplicate therapy, dosage alert etc.
   */
  detectedIssue?: IReference[];

  /**
   * @description Links to Provenance records for past versions of this resource or fulfilling request or event resources that identify key state transitions or updates that are likely to be relevant to a user looking at the current version of the resource.
   */
  eventHistory?: IReference[];
}
