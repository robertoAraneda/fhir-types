import { IQuestionnaireItem } from '../backbones';
import { IDomainResource, IElement } from '../base';
import { ICodeableConcept, ICoding, IContactDetail, IIdentifier, IPeriod, IUsageContext } from '../datatypes';
import { PublicationStatusType, ResourceTypesType } from '../types';

/**
 * @name IQuestionnaire
 * @description A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection.
 * @see <a href="https://hl7.org/fhir/R4/questionnaire.html">Questionnaire</a>
 * @version R4
 * @extends {IDomainResource}
 * @author Claudia Alarcón Lazo
 */
export interface IQuestionnaire extends IDomainResource {
  /**
   * @description An absolute URI that is used to identify this questionnaire when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this questionnaire is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the questionnaire is stored on different servers.
   */
  url?: string;

  /**
   * @description Extensions for url
   */
  _url?: IElement;

  /**
   * @description A formal identifier that is used to identify this questionnaire when it is represented in other formats, or referenced in a specification, model, design or an instance.
   */
  identifier?: IIdentifier[];

  /**
   * @description The identifier that is used to identify this version of the questionnaire when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the questionnaire author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
   */
  version?: string;

  /**
   * @description Extensions for version
   */
  _version?: IElement;

  /**
   * @description A natural language name identifying the questionnaire. This name should be usable as an identifier for the module by machine processing applications such as code generation.
   */
  name?: string;

  /**
   * @description Extensions for name
   */
  _name?: IElement;

  /**
   * @description A short, descriptive, user-friendly title for the questionnaire.
   */
  title?: string;

  /**
   * @description Extensions for title
   */
  _title?: IElement;

  /**
   * @description The URL of a Questionnaire that this Questionnaire is based on.
   */
  derivedFrom?: string[];

  /**
   * @description The status of this questionnaire. Enables tracking the life-cycle of the content.
   * @description draft | active | retired | unknown
   * @see <a href="https://hl7.org/fhir/R4/valueset-publication-status.html">PublicationStatus</a>
   */
  status: PublicationStatusType;

  /**
   * @description Extensions for status
   */
  _status?: IElement;

  /**
   * @description A Boolean value to indicate that this questionnaire is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
   */
  experimental?: boolean;

  /**
   * @description Extensions for experimental
   */
  _experimental?: IElement;

  /**
   * @description The types of subjects that can be the subject of responses created for the questionnaire.
   * @description Account | ActivityDefinition | AdverseEvent | AllergyIntolerance | Appointment | AppointmentResponse | AuditEvent | Basic | Binary | BiologicallyDerivedProduct | BodyStructure | Bundle | CapabilityStatement | CarePlan | CareTeam | CatalogEntry | ChargeItem | ChargeItemDefinition | Claim | ClaimResponse | ClinicalImpression | CodeSystem | Communication | CommunicationRequest | CompartmentDefinition | Composition | ConceptMap | Condition | Consent | Contract | Coverage | CoverageEligibilityRequest | CoverageEligibilityResponse | DetectedIssue | Device | DeviceDefinition | DeviceMetric | DeviceRequest | DeviceUseStatement | DiagnosticReport | DocumentManifest | DocumentReference | DomainResource | EffectEvidenceSynthesis | Encounter | Endpoint | EnrollmentRequest | EnrollmentResponse | EpisodeOfCare | EventDefinition | Evidence | EvidenceVariable | ExampleScenario | ExplanationOfBenefit | FamilyMemberHistory | Flag | Goal | GraphDefinition | Group | GuidanceResponse | HealthcareService | ImagingStudy | Immunization | ImmunizationEvaluation | ImmunizationRecommendation | ImplementationGuide | InsurancePlan | Invoice | Library | Linkage | List | Location | Measure | MeasureReport | Media | Medication | MedicationAdministration | MedicationDispense | MedicationKnowledge | MedicationRequest | MedicationStatement | MedicinalProduct | MedicinalProductAuthorization | MedicinalProductContraindication | MedicinalProductIndication | MedicinalProductIngredient | MedicinalProductInteraction | MedicinalProductManufactured | MedicinalProductPackaged | MedicinalProductPharmaceutical | MedicinalProductUndesirableEffect | MessageDefinition | MessageHeader | MolecularSequence | NamingSystem | NutritionOrder | Observation | ObservationDefinition | OperationDefinition | OperationOutcome | Organization | OrganizationAffiliation | Parameters | Patient | PaymentNotice | PaymentReconciliation | Person | PlanDefinition | Practitioner | PractitionerRole | Procedure | Provenance | Questionnaire | QuestionnaireResponse | RelatedPerson | RequestGroup | ResearchDefinition | ResearchElementDefinition | ResearchStudy | ResearchSubject | RiskAssessment | RiskEvidenceSynthesis | Schedule | SearchParameter | ServiceRequest | Slot | Specimen | SpecimenDefinition | StructureDefinition | StructureMap | Subscription | Substance | SubstanceNucleicAcid | SubstancePolymer | SubstanceProtein | SubstanceReferenceInformation | SubstanceSourceMaterial | SubstanceSpecification | SupplyDelivery | SupplyRequest | Task | TerminologyCapabilities | TestReport | TestScript | ValueSet | VerificationResult | VisionPrescription
   * @see <a href="https://hl7.org/fhir/R4/valueset-resource-types.html">ResourceTypes</a>
   */
  subjectType?: ResourceTypesType[];

  /**
   * @description Extensions for subjectType
   */
  _subjectType?: IElement[];

  /**
   * @description The date  (and optionally time) when the questionnaire was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the questionnaire changes.
   */
  date?: string;

  /**
   * @description Extensions for date
   */
  _date?: IElement;

  /**
   * @description The name of the organization or individual that published the questionnaire.
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
   * @description A free text natural language description of the questionnaire from a consumer\u0027s perspective.
   */
  description?: string;

  /**
   * @description Extensions for description
   */
  _description?: IElement;

  /**
   * @description The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate questionnaire instances.
   */
  useContext?: IUsageContext[];

  /**
   * @description A legal or geographic region in which the questionnaire is intended to be used.
   */
  jurisdiction?: ICodeableConcept[];

  /**
   * @description Explanation of why this questionnaire is needed and why it has been designed as it has.
   */
  purpose?: string;

  /**
   * @description Extensions for purpose
   */
  _purpose?: IElement;

  /**
   * @description A copyright statement relating to the questionnaire and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the questionnaire.
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
   * @description The period during which the questionnaire content was or is planned to be in active use.
   */
  effectivePeriod?: IPeriod;

  /**
   * @description An identifier for this question or group of questions in a particular terminology such as LOINC.
   */
  code?: ICoding[];

  /**
   * @description A particular question, question grouping or display text that is part of the questionnaire.
   */
  item?: IQuestionnaireItem[];
}
