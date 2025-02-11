import { IActivityDefinitionDynamicValue, IActivityDefinitionParticipant, IDosage, ITiming } from '../backbones';
import { IDomainResource, IElement } from '../base';
import {
  IAge,
  ICodeableConcept,
  IContactDetail,
  IDuration,
  IIdentifier,
  IPeriod,
  IQuantity,
  IRange,
  IReference,
  IRelatedArtifact,
  IUsageContext,
} from '../datatypes';
import { PublicationStatusType, RequestIntentType, RequestPriorityType, RequestResourceTypesType } from '../types';

/**
 * @name IActivityDefinition
 * @description This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context.
 * @see <a href="https://hl7.org/fhir/R4/activitydefinition.html">ActivityDefinition</a>
 * @version R4
 * @extends {IDomainResource}
 * @author Claudia Alarcón Lazo
 */
export interface IActivityDefinition extends IDomainResource {
  /**
   * @description An absolute URI that is used to identify this activity definition when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this activity definition is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the activity definition is stored on different servers.
   */
  url?: string;

  /**
   * @description Extensions for url
   */
  _url?: IElement;

  /**
   * @description A formal identifier that is used to identify this activity definition when it is represented in other formats, or referenced in a specification, model, design or an instance.
   */
  identifier?: IIdentifier[];

  /**
   * @description The identifier that is used to identify this version of the activity definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the activity definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. To provide a version consistent with the Decision Support Service specification, use the format Major.Minor.Revision (e.g. 1.0.0). For more information on versioning knowledge assets, refer to the Decision Support Service specification. Note that a version is required for non-experimental active assets.
   */
  version?: string;

  /**
   * @description Extensions for version
   */
  _version?: IElement;

  /**
   * @description A natural language name identifying the activity definition. This name should be usable as an identifier for the module by machine processing applications such as code generation.
   */
  name?: string;

  /**
   * @description Extensions for name
   */
  _name?: IElement;

  /**
   * @description A short, descriptive, user-friendly title for the activity definition.
   */
  title?: string;

  /**
   * @description Extensions for title
   */
  _title?: IElement;

  /**
   * @description An explanatory or alternate title for the activity definition giving additional information about its content.
   */
  subtitle?: string;

  /**
   * @description Extensions for subtitle
   */
  _subtitle?: IElement;

  /**
   * @description The status of this activity definition. Enables tracking the life-cycle of the content.
   * @description draft | active | retired | unknown
   * @see <a href="https://hl7.org/fhir/R4/valueset-publication-status.html">PublicationStatus</a>
   */
  status: PublicationStatusType;

  /**
   * @description Extensions for status
   */
  _status?: IElement;

  /**
   * @description A Boolean value to indicate that this activity definition is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
   */
  experimental?: boolean;

  /**
   * @description Extensions for experimental
   */
  _experimental?: IElement;

  /**
   * @description A code or group definition that describes the intended subject of the activity being defined.
   */
  subjectCodeableConcept?: ICodeableConcept;

  /**
   * @description A code or group definition that describes the intended subject of the activity being defined.
   */
  subjectReference?: IReference;

  /**
   * @description The date  (and optionally time) when the activity definition was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the activity definition changes.
   */
  date?: string;

  /**
   * @description Extensions for date
   */
  _date?: IElement;

  /**
   * @description The name of the organization or individual that published the activity definition.
   */
  publisher?: string;

  /**
   * @description Extensions for publisher
   */
  _publisher?: IElement;

  /**
   * @description Contact details to assist a user in finding and communicating with the publisher.
   */
  contact?: IContactDetail[];

  /**
   * @description A free text natural language description of the activity definition from a consumer\u0027s perspective.
   */
  description?: string;

  /**
   * @description Extensions for description
   */
  _description?: IElement;

  /**
   * @description The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate activity definition instances.
   */
  useContext?: IUsageContext[];

  /**
   * @description A legal or geographic region in which the activity definition is intended to be used.
   */
  jurisdiction?: ICodeableConcept[];

  /**
   * @description Explanation of why this activity definition is needed and why it has been designed as it has.
   */
  purpose?: string;

  /**
   * @description Extensions for purpose
   */
  _purpose?: IElement;

  /**
   * @description A detailed description of how the activity definition is used from a clinical perspective.
   */
  usage?: string;

  /**
   * @description Extensions for usage
   */
  _usage?: IElement;

  /**
   * @description A copyright statement relating to the activity definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the activity definition.
   */
  copyright?: string;

  /**
   * @description Extensions for copyright
   */
  _copyright?: IElement;

  /**
   * @description The date on which the resource content was approved by the publisher. Approval happens once when the content is officially approved for usage.
   */
  approvalDate?: string;

  /**
   * @description Extensions for approvalDate
   */
  _approvalDate?: IElement;

  /**
   * @description The date on which the resource content was last reviewed. Review happens periodically after approval but does not change the original approval date.
   */
  lastReviewDate?: string;

  /**
   * @description Extensions for lastReviewDate
   */
  _lastReviewDate?: IElement;

  /**
   * @description The period during which the activity definition content was or is planned to be in active use.
   */
  effectivePeriod?: IPeriod;

  /**
   * @description Descriptive topics related to the content of the activity. Topics provide a high-level categorization of the activity that can be useful for filtering and searching.
   */
  topic?: ICodeableConcept[];

  /**
   * @description An individiual or organization primarily involved in the creation and maintenance of the content.
   */
  author?: IContactDetail[];

  /**
   * @description An individual or organization primarily responsible for internal coherence of the content.
   */
  editor?: IContactDetail[];

  /**
   * @description An individual or organization primarily responsible for review of some aspect of the content.
   */
  reviewer?: IContactDetail[];

  /**
   * @description An individual or organization responsible for officially endorsing the content for use in some setting.
   */
  endorser?: IContactDetail[];

  /**
   * @description Related artifacts such as additional documentation, justification, or bibliographic references.
   */
  relatedArtifact?: IRelatedArtifact[];

  /**
   * @description A reference to a Library resource containing any formal logic used by the activity definition.
   */
  library?: string[];

  /**
   * @description Extensions for library
   */
  _library?: IElement[];

  /**
   * @description A description of the kind of resource the activity definition is representing. For example, a MedicationRequest, a ServiceRequest, or a CommunicationRequest. Typically, but not always, this is a Request resource.
   * @description Appointment | AppointmentResponse | CarePlan | Claim | CommunicationRequest | Contract | DeviceRequest | EnrollmentRequest ImmunizationRecommendation | MedicationRequest | NutritionOrder | ServiceRequest | SupplyRequest | Task | VisionPrescription
   * @see <a href="https://hl7.org/fhir/R4/valueset-request-resource-types.html">RequestResourceTypes</a>
   */
  kind?: RequestResourceTypesType;

  /**
   * @description Extensions for kind
   */
  _kind?: IElement;

  /**
   * @description A profile to which the target of the activity definition is expected to conform.
   */
  profile?: string;

  /**
   * @description Extensions for profile
   */
  _profile?: IElement;

  /**
   * @description Detailed description of the type of activity; e.g. What lab test, what procedure, what kind of encounter.
   */
  code?: ICodeableConcept;

  /**
   * @description Indicates the level of authority/intentionality associated with the activity and where the request should fit into the workflow chain.
   * @description proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option
   * @see <a href="https://hl7.org/fhir/R4/valueset-request-intent.html">RequestIntent</a>
   */
  intent?: RequestIntentType;

  /**
   * @description Extensions for intent
   */
  _intent?: IElement;

  /**
   * @description Indicates how quickly the activity  should be addressed with respect to other requests.
   * @description routine | urgent | asap | stat
   * @see <a href="https://hl7.org/fhir/R4/valueset-request-priority.html">RequestPriority</a>
   */
  priority?: RequestPriorityType;

  /**
   * @description Extensions for priority
   */
  _priority?: IElement;

  /**
   * @description Set this to true if the definition is to indicate that a particular activity should NOT be performed. If true, this element should be interpreted to reinforce a negative coding. For example NPO as a code with a doNotPerform of true would still indicate to NOT perform the action.
   */
  doNotPerform?: boolean;

  /**
   * @description Extensions for doNotPerform
   */
  _doNotPerform?: IElement;

  /**
   * @description The period, timing or frequency upon which the described activity is to occur.
   */
  timingTiming?: ITiming;

  /**
   * @description The period, timing or frequency upon which the described activity is to occur.
   */
  timingDateTime?: string;

  /**
   * @description Extensions for timingDateTime
   */
  _timingDateTime?: IElement;

  /**
   * @description The period, timing or frequency upon which the described activity is to occur.
   */
  timingAge?: IAge;

  /**
   * @description The period, timing or frequency upon which the described activity is to occur.
   */
  timingPeriod?: IPeriod;

  /**
   * @description The period, timing or frequency upon which the described activity is to occur.
   */
  timingRange?: IRange;

  /**
   * @description The period, timing or frequency upon which the described activity is to occur.
   */
  timingDuration?: IDuration;

  /**
   * @description Identifies the facility where the activity will occur; e.g. home, hospital, specific clinic, etc.
   */
  location?: IReference;

  /**
   * @description Indicates who should participate in performing the action described.
   */
  participant?: IActivityDefinitionParticipant[];

  /**
   * @description Identifies the food, drug or other product being consumed or supplied in the activity.
   */
  productReference?: IReference;

  /**
   * @description Identifies the food, drug or other product being consumed or supplied in the activity.
   */
  productCodeableConcept?: ICodeableConcept;

  /**
   * @description Identifies the quantity expected to be consumed at once (per dose, per meal, etc.).
   */
  quantity?: IQuantity;

  /**
   * @description Provides detailed dosage instructions in the same way that they are described for MedicationRequest resources.
   */
  dosage?: IDosage[];

  /**
   * @description Indicates the sites on the subject\u0027s body where the procedure should be performed (I.e. the target sites).
   */
  bodySite?: ICodeableConcept[];

  /**
   * @description Defines specimen requirements for the action to be performed, such as required specimens for a lab test.
   */
  specimenRequirement?: IReference[];

  /**
   * @description Defines observation requirements for the action to be performed, such as body weight or surface area.
   */
  observationRequirement?: IReference[];

  /**
   * @description Defines the observations that are expected to be produced by the action.
   */
  observationResultRequirement?: IReference[];

  /**
   * @description A reference to a StructureMap resource that defines a transform that can be executed to produce the intent resource using the ActivityDefinition instance as the input.
   */
  transform?: string;

  /**
   * @description Extensions for transform
   */
  _transform?: IElement;

  /**
   * @description Dynamic values that will be evaluated to produce values for elements of the resulting resource. For example, if the dosage of a medication must be computed based on the patient\u0027s weight, a dynamic value would be used to specify an expression that calculated the weight, and the path on the request resource that would contain the result.
   */
  dynamicValue?: IActivityDefinitionDynamicValue[];
}
