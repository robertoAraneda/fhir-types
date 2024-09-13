import { AccountStatusEnum } from '../AccountStatusEnum';
import { AddressTypeEnum } from '../AddressTypeEnum';
import { AddressUseEnum } from '../AddressUseEnum';
import { AllergyIntoleranceCategoryEnum } from '../AllergyIntoleranceCategoryEnum';
import { AllergyIntoleranceCriticalityEnum } from '../AllergyIntoleranceCriticalityEnum';
import { AllergyIntoleranceSeverityEnum } from '../AllergyIntoleranceSeverityEnum';
import { AllergyIntoleranceTypeEnum } from '../AllergyIntoleranceTypeEnum';
import { AppointmentStatusEnum } from '../AppointmentStatusEnum';
import { BackboneElementEnum } from '../BackboneElementEnum';
import { BundleTypeEnum } from '../BundleTypeEnum';
import { CareTeamStatusEnum } from '../CareTeamStatusEnum';
import { CompositionAttestationModeEnum } from '../CompositionAttestationModeEnum';
import { CompositionStatusEnum } from '../CompositionStatusEnum';
import { ConfidentialityClassificationEnum } from '../ConfidentialityClassificationEnum';
import { CurrencyCodeEnum } from '../CurrencyCodeEnum';
import { DataTypeEnum } from '../DatatypeEnum';
import { DeviceMetricCalibrationStateEnum } from '../DeviceMetricCalibrationStateEnum';
import { DeviceMetricCalibrationTypeEnum } from '../DeviceMetricCalibrationTypeEnum';
import { DeviceMetricCategoryEnum } from '../DeviceMetricCategoryEnum';
import { DeviceMetricColorEnum } from '../DeviceMetricColorEnum';
import { DeviceMetricOperationalStatusEnum } from '../DeviceMetricOperationalStatusEnum';
import { DeviceNameTypeEnum } from '../DeviceNameTypeEnum';
import { DiagnosticReportStatusEnum } from '../DiagnosticReportStatusEnum';
import { DocumentRelationshipTypeEnum } from '../DocumentRelationshipTypeEnum';
import { EventStatusEnum } from '../EventStatusEnum';
import { EventTimingEnum } from '../EventTimingEnum';
import { FamilyHistoryStatusEnum } from '../FamilyHistoryStatusEnum';
import { FHIRDeviceStatusEnum } from '../FHIRDeviceStatusEnum';
import { FHIRSubstanceStatusEnum } from '../FHIRSubstanceStatusEnum';
import { FinancialResourceStatusCodesEnum } from '../FinancialResourceStatusCodesEnum';
import { FlagStatusEnum } from '../FlagStatusEnum';
import { GoalLifecycleStatusEnum } from '../GoalLifecycleStatusEnum';
import { GroupTypeEnum } from '../GroupTypeEnum';
import { HTTPVerbEnum } from '../HTTPVerbEnum';
import { IssueSeverityEnum } from '../IssueSeverityEnum';
import { IssueTypeEnum } from '../IssueTypeEnum';
import { ListModeEnum } from '../ListModeEnum';
import { ObservationStatusEnum } from '../ObservationStatusEnum';
import { ParticipantRequiredEnum } from '../ParticipantRequiredEnum';
import { ParticipantStatusEnum } from '../ParticipantStatusEnum';
import { ParticipationStatusEnum } from '../ParticipationStatusEnum';
import { ResourceEnum } from '../ResourceEnum';
import { SearchEntryModeEnum } from '../SearchEntryModeEnum';
import { SlotStatusEnum } from '../SlotStatusEnum';
import { TaskIntentEnum } from '../TaskIntentEnum';
import { TaskStatusEnum } from '../TaskStatusEnum';
import { UDIEntryTypeEnum } from '../UDIEntryTypeEnum';

describe('AccountStatusEnum', () => {
  it('should have the correct values', () => {
    expect(AccountStatusEnum.ACTIVE).toEqual('active');
    expect(AccountStatusEnum.INACTIVE).toEqual('inactive');
    expect(AccountStatusEnum.ENTERED_IN_ERROR).toEqual('entered-in-error');
    expect(AccountStatusEnum.ON_HOLD).toEqual('on-hold');
    expect(AccountStatusEnum.UNKNOWN).toEqual('unknown');
  });
});

describe('AddressTypeEnum', () => {
  it('should have the correct values', () => {
    expect(AddressTypeEnum.POSTAL).toEqual('postal');
    expect(AddressTypeEnum.PHYSICAL).toEqual('physical');
    expect(AddressTypeEnum.BOTH).toEqual('both');
  });
});

describe('AddressUseEnum', () => {
  it('should have the correct values', () => {
    expect(AddressUseEnum.HOME).toEqual('home');
    expect(AddressUseEnum.WORK).toEqual('work');
    expect(AddressUseEnum.TEMP).toEqual('temp');
    expect(AddressUseEnum.OLD).toEqual('old');
    expect(AddressUseEnum.BILLING).toEqual('billing');
  });
});

describe('CurrencyCodeEnum', () => {
  it('should have the correct values', () => {
    expect(CurrencyCodeEnum.AED).toEqual('AED');
    expect(CurrencyCodeEnum.AFN).toEqual('AFN');
    expect(CurrencyCodeEnum.ALL).toEqual('ALL');
    expect(CurrencyCodeEnum.AMD).toEqual('AMD');
    expect(CurrencyCodeEnum.ANG).toEqual('ANG');
    expect(CurrencyCodeEnum.AOA).toEqual('AOA');
    expect(CurrencyCodeEnum.ARS).toEqual('ARS');
    expect(CurrencyCodeEnum.AUD).toEqual('AUD');
    expect(CurrencyCodeEnum.AWG).toEqual('AWG');
    expect(CurrencyCodeEnum.AZN).toEqual('AZN');
    expect(CurrencyCodeEnum.BAM).toEqual('BAM');
    expect(CurrencyCodeEnum.BBD).toEqual('BBD');
    expect(CurrencyCodeEnum.BDT).toEqual('BDT');
    expect(CurrencyCodeEnum.BGN).toEqual('BGN');
    expect(CurrencyCodeEnum.BHD).toEqual('BHD');
    expect(CurrencyCodeEnum.BIF).toEqual('BIF');
    expect(CurrencyCodeEnum.BMD).toEqual('BMD');
    expect(CurrencyCodeEnum.BND).toEqual('BND');
    expect(CurrencyCodeEnum.BOB).toEqual('BOB');
    expect(CurrencyCodeEnum.BOV).toEqual('BOV');
    expect(CurrencyCodeEnum.BRL).toEqual('BRL');
    expect(CurrencyCodeEnum.BSD).toEqual('BSD');
    expect(CurrencyCodeEnum.BTN).toEqual('BTN');
    expect(CurrencyCodeEnum.BWP).toEqual('BWP');
    expect(CurrencyCodeEnum.BYN).toEqual('BYN');
    expect(CurrencyCodeEnum.BZD).toEqual('BZD');
    expect(CurrencyCodeEnum.CAD).toEqual('CAD');
    expect(CurrencyCodeEnum.CDF).toEqual('CDF');
    expect(CurrencyCodeEnum.CHE).toEqual('CHE');
    expect(CurrencyCodeEnum.CHF).toEqual('CHF');
    expect(CurrencyCodeEnum.CHW).toEqual('CHW');
    expect(CurrencyCodeEnum.CLF).toEqual('CLF');
    expect(CurrencyCodeEnum.CLP).toEqual('CLP');
    expect(CurrencyCodeEnum.CNY).toEqual('CNY');
    expect(CurrencyCodeEnum.COP).toEqual('COP');
    expect(CurrencyCodeEnum.COU).toEqual('COU');
    expect(CurrencyCodeEnum.CRC).toEqual('CRC');
    expect(CurrencyCodeEnum.CUC).toEqual('CUC');
    expect(CurrencyCodeEnum.CUP).toEqual('CUP');
    expect(CurrencyCodeEnum.CVE).toEqual('CVE');
    expect(CurrencyCodeEnum.CZK).toEqual('CZK');
    expect(CurrencyCodeEnum.DJF).toEqual('DJF');
    expect(CurrencyCodeEnum.DKK).toEqual('DKK');
    expect(CurrencyCodeEnum.DOP).toEqual('DOP');
    expect(CurrencyCodeEnum.DZD).toEqual('DZD');
    expect(CurrencyCodeEnum.EGP).toEqual('EGP');
    expect(CurrencyCodeEnum.ERN).toEqual('ERN');
    expect(CurrencyCodeEnum.ETB).toEqual('ETB');
    expect(CurrencyCodeEnum.EUR).toEqual('EUR');
    expect(CurrencyCodeEnum.FJD).toEqual('FJD');
    expect(CurrencyCodeEnum.FKP).toEqual('FKP');
    expect(CurrencyCodeEnum.GBP).toEqual('GBP');
    expect(CurrencyCodeEnum.GEL).toEqual('GEL');
    expect(CurrencyCodeEnum.GGP).toEqual('GGP');
    expect(CurrencyCodeEnum.GHS).toEqual('GHS');
    expect(CurrencyCodeEnum.GIP).toEqual('GIP');
    expect(CurrencyCodeEnum.GMD).toEqual('GMD');
    expect(CurrencyCodeEnum.GNF).toEqual('GNF');
    expect(CurrencyCodeEnum.GTQ).toEqual('GTQ');
    expect(CurrencyCodeEnum.GYD).toEqual('GYD');
    expect(CurrencyCodeEnum.HKD).toEqual('HKD');
    expect(CurrencyCodeEnum.HNL).toEqual('HNL');
    expect(CurrencyCodeEnum.HRK).toEqual('HRK');
    expect(CurrencyCodeEnum.HTG).toEqual('HTG');
    expect(CurrencyCodeEnum.HUF).toEqual('HUF');
    expect(CurrencyCodeEnum.IDR).toEqual('IDR');
    expect(CurrencyCodeEnum.ILS).toEqual('ILS');
    expect(CurrencyCodeEnum.IMP).toEqual('IMP');
    expect(CurrencyCodeEnum.INR).toEqual('INR');
    expect(CurrencyCodeEnum.IQD).toEqual('IQD');
    expect(CurrencyCodeEnum.IRR).toEqual('IRR');
    expect(CurrencyCodeEnum.ISK).toEqual('ISK');
    expect(CurrencyCodeEnum.JEP).toEqual('JEP');
    expect(CurrencyCodeEnum.JMD).toEqual('JMD');
    expect(CurrencyCodeEnum.JOD).toEqual('JOD');
    expect(CurrencyCodeEnum.JPY).toEqual('JPY');
    expect(CurrencyCodeEnum.KES).toEqual('KES');
    expect(CurrencyCodeEnum.KGS).toEqual('KGS');
    expect(CurrencyCodeEnum.KHR).toEqual('KHR');
    expect(CurrencyCodeEnum.KMF).toEqual('KMF');
    expect(CurrencyCodeEnum.KPW).toEqual('KPW');
    expect(CurrencyCodeEnum.KRW).toEqual('KRW');
    expect(CurrencyCodeEnum.KWD).toEqual('KWD');
    expect(CurrencyCodeEnum.KYD).toEqual('KYD');
    expect(CurrencyCodeEnum.KZT).toEqual('KZT');
    expect(CurrencyCodeEnum.LAK).toEqual('LAK');
    expect(CurrencyCodeEnum.LBP).toEqual('LBP');
    expect(CurrencyCodeEnum.LKR).toEqual('LKR');
    expect(CurrencyCodeEnum.LRD).toEqual('LRD');
    expect(CurrencyCodeEnum.LSL).toEqual('LSL');
    expect(CurrencyCodeEnum.LYD).toEqual('LYD');
    expect(CurrencyCodeEnum.MAD).toEqual('MAD');
    expect(CurrencyCodeEnum.MDL).toEqual('MDL');
    expect(CurrencyCodeEnum.MGA).toEqual('MGA');
    expect(CurrencyCodeEnum.MKD).toEqual('MKD');
    expect(CurrencyCodeEnum.MMK).toEqual('MMK');
    expect(CurrencyCodeEnum.MNT).toEqual('MNT');
    expect(CurrencyCodeEnum.MOP).toEqual('MOP');
    expect(CurrencyCodeEnum.MRU).toEqual('MRU');
    expect(CurrencyCodeEnum.MUR).toEqual('MUR');
    expect(CurrencyCodeEnum.MVR).toEqual('MVR');
    expect(CurrencyCodeEnum.MWK).toEqual('MWK');
    expect(CurrencyCodeEnum.MXN).toEqual('MXN');
    expect(CurrencyCodeEnum.MXV).toEqual('MXV');
    expect(CurrencyCodeEnum.MYR).toEqual('MYR');
    expect(CurrencyCodeEnum.MZN).toEqual('MZN');
    expect(CurrencyCodeEnum.NAD).toEqual('NAD');
    expect(CurrencyCodeEnum.NGN).toEqual('NGN');
    expect(CurrencyCodeEnum.NIO).toEqual('NIO');
    expect(CurrencyCodeEnum.NOK).toEqual('NOK');
    expect(CurrencyCodeEnum.NPR).toEqual('NPR');
    expect(CurrencyCodeEnum.NZD).toEqual('NZD');
    expect(CurrencyCodeEnum.OMR).toEqual('OMR');
    expect(CurrencyCodeEnum.PAB).toEqual('PAB');
    expect(CurrencyCodeEnum.PEN).toEqual('PEN');
    expect(CurrencyCodeEnum.PGK).toEqual('PGK');
    expect(CurrencyCodeEnum.PHP).toEqual('PHP');
    expect(CurrencyCodeEnum.PKR).toEqual('PKR');
    expect(CurrencyCodeEnum.PLN).toEqual('PLN');
    expect(CurrencyCodeEnum.PYG).toEqual('PYG');
    expect(CurrencyCodeEnum.QAR).toEqual('QAR');
    expect(CurrencyCodeEnum.RON).toEqual('RON');
    expect(CurrencyCodeEnum.RSD).toEqual('RSD');
    expect(CurrencyCodeEnum.RUB).toEqual('RUB');
    expect(CurrencyCodeEnum.RWF).toEqual('RWF');
    expect(CurrencyCodeEnum.SAR).toEqual('SAR');
    expect(CurrencyCodeEnum.SBD).toEqual('SBD');
    expect(CurrencyCodeEnum.SCR).toEqual('SCR');
    expect(CurrencyCodeEnum.SDG).toEqual('SDG');
    expect(CurrencyCodeEnum.SEK).toEqual('SEK');
    expect(CurrencyCodeEnum.SGD).toEqual('SGD');
    expect(CurrencyCodeEnum.SHP).toEqual('SHP');
    expect(CurrencyCodeEnum.SLL).toEqual('SLL');
    expect(CurrencyCodeEnum.SOS).toEqual('SOS');
    expect(CurrencyCodeEnum.SRD).toEqual('SRD');
    expect(CurrencyCodeEnum.SSP).toEqual('SSP');
    expect(CurrencyCodeEnum.STN).toEqual('STN');
    expect(CurrencyCodeEnum.SVC).toEqual('SVC');
    expect(CurrencyCodeEnum.SYP).toEqual('SYP');
    expect(CurrencyCodeEnum.SZL).toEqual('SZL');
    expect(CurrencyCodeEnum.THB).toEqual('THB');
    expect(CurrencyCodeEnum.TJS).toEqual('TJS');
    expect(CurrencyCodeEnum.TMT).toEqual('TMT');
    expect(CurrencyCodeEnum.TND).toEqual('TND');
    expect(CurrencyCodeEnum.TOP).toEqual('TOP');
    expect(CurrencyCodeEnum.TRY).toEqual('TRY');
    expect(CurrencyCodeEnum.TTD).toEqual('TTD');
    expect(CurrencyCodeEnum.TVD).toEqual('TVD');
    expect(CurrencyCodeEnum.TWD).toEqual('TWD');
    expect(CurrencyCodeEnum.TZS).toEqual('TZS');
    expect(CurrencyCodeEnum.UAH).toEqual('UAH');
    expect(CurrencyCodeEnum.UGX).toEqual('UGX');
    expect(CurrencyCodeEnum.USD).toEqual('USD');
    expect(CurrencyCodeEnum.USN).toEqual('USN');
    expect(CurrencyCodeEnum.UYI).toEqual('UYI');
    expect(CurrencyCodeEnum.UYU).toEqual('UYU');
    expect(CurrencyCodeEnum.UZS).toEqual('UZS');
    expect(CurrencyCodeEnum.VEF).toEqual('VEF');
    expect(CurrencyCodeEnum.VND).toEqual('VND');
    expect(CurrencyCodeEnum.VUV).toEqual('VUV');
    expect(CurrencyCodeEnum.WST).toEqual('WST');
    expect(CurrencyCodeEnum.XAF).toEqual('XAF');
    expect(CurrencyCodeEnum.XAG).toEqual('XAG');
    expect(CurrencyCodeEnum.XAU).toEqual('XAU');
    expect(CurrencyCodeEnum.XBA).toEqual('XBA');
    expect(CurrencyCodeEnum.XBB).toEqual('XBB');
    expect(CurrencyCodeEnum.XBC).toEqual('XBC');
    expect(CurrencyCodeEnum.XBD).toEqual('XBD');
    expect(CurrencyCodeEnum.XCD).toEqual('XCD');
    expect(CurrencyCodeEnum.XDR).toEqual('XDR');
    expect(CurrencyCodeEnum.XOF).toEqual('XOF');
    expect(CurrencyCodeEnum.XPD).toEqual('XPD');
    expect(CurrencyCodeEnum.XPF).toEqual('XPF');
    expect(CurrencyCodeEnum.XPT).toEqual('XPT');
    expect(CurrencyCodeEnum.XSU).toEqual('XSU');
    expect(CurrencyCodeEnum.XTS).toEqual('XTS');
    expect(CurrencyCodeEnum.XUA).toEqual('XUA');
    expect(CurrencyCodeEnum.XXX).toEqual('XXX');
    expect(CurrencyCodeEnum.YER).toEqual('YER');
    expect(CurrencyCodeEnum.ZAR).toEqual('ZAR');
    expect(CurrencyCodeEnum.ZMW).toEqual('ZMW');
    expect(CurrencyCodeEnum.ZWL).toEqual('ZWL');
  });
});

describe('ResourceEnum Enum', () => {
  it('should have the correct values', () => {
    expect(ResourceEnum.ACCOUNT).toEqual('Account');
    expect(ResourceEnum.ACTIVITY_DEFINITION).toEqual('ActivityDefinition');
    expect(ResourceEnum.ADVERSE_EVENT).toEqual('AdverseEvent');
    expect(ResourceEnum.ALLERGY_INTOLERANCE).toEqual('AllergyIntolerance');
    expect(ResourceEnum.APPOINTMENT).toEqual('Appointment');
    expect(ResourceEnum.APPOINTMENT_RESPONSE).toEqual('AppointmentResponse');
    expect(ResourceEnum.AUDIT_EVENT).toEqual('AuditEvent');
    expect(ResourceEnum.BASIC).toEqual('Basic');
    expect(ResourceEnum.BINARY).toEqual('Binary');
    expect(ResourceEnum.BIOLOGICALLY_DERIVED_PRODUCT).toEqual('BiologicallyDerivedProduct');
    expect(ResourceEnum.BODY_STRUCTURE).toEqual('BodyStructure');
    expect(ResourceEnum.BUNDLE).toEqual('Bundle');
    expect(ResourceEnum.CAPABILITY_STATEMENT).toEqual('CapabilityStatement');
    expect(ResourceEnum.CARE_PLAN).toEqual('CarePlan');
    expect(ResourceEnum.CARE_TEAM).toEqual('CareTeam');
    expect(ResourceEnum.CATALOG_ENTRY).toEqual('CatalogEntry');
    expect(ResourceEnum.CHARGE_ITEM).toEqual('ChargeItem');
    expect(ResourceEnum.CHARGE_ITEM_DEFINITION).toEqual('ChargeItemDefinition');
    expect(ResourceEnum.CLAIM).toEqual('Claim');
    expect(ResourceEnum.CLAIM_RESPONSE).toEqual('ClaimResponse');
    expect(ResourceEnum.CLINICAL_IMPRESSION).toEqual('ClinicalImpression');
    expect(ResourceEnum.CODE_SYSTEM).toEqual('CodeSystem');
    expect(ResourceEnum.COMMUNICATION).toEqual('Communication');
    expect(ResourceEnum.COMMUNICATION_REQUEST).toEqual('CommunicationRequest');
    expect(ResourceEnum.COMPARTMENT_DEFINITION).toEqual('CompartmentDefinition');
    expect(ResourceEnum.COMPOSITION).toEqual('Composition');
    expect(ResourceEnum.CONCEPT_MAP).toEqual('ConceptMap');
    expect(ResourceEnum.CONDITION).toEqual('Condition');
    expect(ResourceEnum.CONSENT).toEqual('Consent');
    expect(ResourceEnum.CONTRACT).toEqual('Contract');
    expect(ResourceEnum.COVERAGE).toEqual('Coverage');
    expect(ResourceEnum.COVERAGE_ELIGIBILITY_REQUEST).toEqual('CoverageEligibilityRequest');
    expect(ResourceEnum.COVERAGE_ELIGIBILITY_RESPONSE).toEqual('CoverageEligibilityResponse');
    expect(ResourceEnum.DETECTED_ISSUE).toEqual('DetectedIssue');
    expect(ResourceEnum.DEVICE).toEqual('Device');
    expect(ResourceEnum.DEVICE_DEFINITION).toEqual('DeviceDefinition');
    expect(ResourceEnum.DEVICE_METRIC).toEqual('DeviceMetric');
    expect(ResourceEnum.DEVICE_REQUEST).toEqual('DeviceRequest');
    expect(ResourceEnum.DEVICE_USE_STATEMENT).toEqual('DeviceUseStatement');
    expect(ResourceEnum.DIAGNOSTIC_REPORT).toEqual('DiagnosticReport');
    expect(ResourceEnum.DOCUMENT_MANIFEST).toEqual('DocumentManifest');
    expect(ResourceEnum.DOCUMENT_REFERENCE).toEqual('DocumentReference');
    expect(ResourceEnum.DOMAIN_RESOURCE).toEqual('DomainResource');
    expect(ResourceEnum.EFFECT_EVIDENCE_SYNTHESIS).toEqual('EffectEvidenceSynthesis');
    expect(ResourceEnum.ENCOUNTER).toEqual('Encounter');
    expect(ResourceEnum.ENDPOINT).toEqual('Endpoint');
    expect(ResourceEnum.ENROLLMENT_REQUEST).toEqual('EnrollmentRequest');
    expect(ResourceEnum.ENROLLMENT_RESPONSE).toEqual('EnrollmentResponse');
    expect(ResourceEnum.EPISODE_OF_CARE).toEqual('EpisodeOfCare');
    expect(ResourceEnum.EVENT_DEFINITION).toEqual('EventDefinition');
    expect(ResourceEnum.EVIDENCE).toEqual('Evidence');
    expect(ResourceEnum.EVIDENCE_VARIABLE).toEqual('EvidenceVariable');
    expect(ResourceEnum.EXAMPLE_SCENARIO).toEqual('ExampleScenario');
    expect(ResourceEnum.EXPLANATION_OF_BENEFIT).toEqual('ExplanationOfBenefit');
    expect(ResourceEnum.FAMILY_MEMBER_HISTORY).toEqual('FamilyMemberHistory');
    expect(ResourceEnum.FLAG).toEqual('Flag');
    expect(ResourceEnum.GOAL).toEqual('Goal');
    expect(ResourceEnum.GRAPH_DEFINITION).toEqual('GraphDefinition');
    expect(ResourceEnum.GROUP).toEqual('Group');
    expect(ResourceEnum.GUIDANCE_RESPONSE).toEqual('GuidanceResponse');
    expect(ResourceEnum.HEALTHCARE_SERVICE).toEqual('HealthcareService');
    expect(ResourceEnum.IMAGING_STUDY).toEqual('ImagingStudy');
    expect(ResourceEnum.IMMUNIZATION).toEqual('Immunization');
    expect(ResourceEnum.IMMUNIZATION_EVALUATION).toEqual('ImmunizationEvaluation');
    expect(ResourceEnum.IMMUNIZATION_RECOMMENDATION).toEqual('ImmunizationRecommendation');
    expect(ResourceEnum.IMPLEMENTATION_GUIDE).toEqual('ImplementationGuide');
    expect(ResourceEnum.INSURANCE_PLAN).toEqual('InsurancePlan');
    expect(ResourceEnum.INVOICE).toEqual('Invoice');
    expect(ResourceEnum.LIBRARY).toEqual('Library');
    expect(ResourceEnum.LINKAGE).toEqual('Linkage');
    expect(ResourceEnum.LIST).toEqual('List');
    expect(ResourceEnum.LOCATION).toEqual('Location');
    expect(ResourceEnum.MEASURE).toEqual('Measure');
    expect(ResourceEnum.MEASURE_REPORT).toEqual('MeasureReport');
    expect(ResourceEnum.MEDIA).toEqual('Media');
    expect(ResourceEnum.MEDICATION).toEqual('Medication');
    expect(ResourceEnum.MEDICATION_ADMINISTRATION).toEqual('MedicationAdministration');
    expect(ResourceEnum.MEDICATION_DISPENSE).toEqual('MedicationDispense');
    expect(ResourceEnum.MEDICATION_KNOWLEDGE).toEqual('MedicationKnowledge');
    expect(ResourceEnum.MEDICATION_REQUEST).toEqual('MedicationRequest');
    expect(ResourceEnum.MEDICATION_STATEMENT).toEqual('MedicationStatement');
    expect(ResourceEnum.MEDICINAL_PRODUCT).toEqual('MedicinalProduct');
    expect(ResourceEnum.MEDICINAL_PRODUCT_AUTHORIZATION).toEqual('MedicinalProductAuthorization');
    expect(ResourceEnum.MEDICINAL_PRODUCT_CONTRAINDICATION).toEqual('MedicinalProductContraindication');
    expect(ResourceEnum.MEDICINAL_PRODUCT_INDICATION).toEqual('MedicinalProductIndication');
    expect(ResourceEnum.MEDICINAL_PRODUCT_INGREDIENT).toEqual('MedicinalProductIngredient');
    expect(ResourceEnum.MEDICINAL_PRODUCT_INTERACTION).toEqual('MedicinalProductInteraction');
    expect(ResourceEnum.MEDICINAL_PRODUCT_MANUFACTURED).toEqual('MedicinalProductManufactured');
    expect(ResourceEnum.MEDICINAL_PRODUCT_PACKAGED).toEqual('MedicinalProductPackaged');
    expect(ResourceEnum.MEDICINAL_PRODUCT_PHARMACEUTICAL).toEqual('MedicinalProductPharmaceutical');
    expect(ResourceEnum.MEDICINAL_PRODUCT_UNDESIRABLE_EFFECT).toEqual('MedicinalProductUndesirableEffect');
    expect(ResourceEnum.MESSAGE_DEFINITION).toEqual('MessageDefinition');
    expect(ResourceEnum.MESSAGE_HEADER).toEqual('MessageHeader');
    expect(ResourceEnum.MOLECULAR_SEQUENCE).toEqual('MolecularSequence');
    expect(ResourceEnum.NAMING_SYSTEM).toEqual('NamingSystem');
    expect(ResourceEnum.NUTRITION_ORDER).toEqual('NutritionOrder');
    expect(ResourceEnum.OBSERVATION).toEqual('Observation');
    expect(ResourceEnum.OBSERVATION_DEFINITION).toEqual('ObservationDefinition');
    expect(ResourceEnum.OPERATION_DEFINITION).toEqual('OperationDefinition');
    expect(ResourceEnum.OPERATION_OUTCOME).toEqual('OperationOutcome');
    expect(ResourceEnum.ORGANIZATION).toEqual('Organization');
    expect(ResourceEnum.ORGANIZATION_AFFILIATION).toEqual('OrganizationAffiliation');
    expect(ResourceEnum.PARAMETERS).toEqual('Parameters');
    expect(ResourceEnum.PATIENT).toEqual('Patient');
    expect(ResourceEnum.PAYMENT_NOTICE).toEqual('PaymentNotice');
    expect(ResourceEnum.PAYMENT_RECONCILIATION).toEqual('PaymentReconciliation');
    expect(ResourceEnum.PERSON).toEqual('Person');
    expect(ResourceEnum.PLAN_DEFINITION).toEqual('PlanDefinition');
    expect(ResourceEnum.PRACTITIONER).toEqual('Practitioner');
    expect(ResourceEnum.PRACTITIONER_ROLE).toEqual('PractitionerRole');
    expect(ResourceEnum.PROCEDURE).toEqual('Procedure');
    expect(ResourceEnum.PROVENANCE).toEqual('Provenance');
    expect(ResourceEnum.QUESTIONNAIRE).toEqual('Questionnaire');
    expect(ResourceEnum.QUESTIONNAIRE_RESPONSE).toEqual('QuestionnaireResponse');
    expect(ResourceEnum.RELATED_PERSON).toEqual('RelatedPerson');
    expect(ResourceEnum.REQUEST_GROUP).toEqual('RequestGroup');
    expect(ResourceEnum.RESEARCH_DEFINITION).toEqual('ResearchDefinition');
    expect(ResourceEnum.RESEARCH_ELEMENT_DEFINITION).toEqual('ResearchElementDefinition');
    expect(ResourceEnum.RESEARCH_STUDY).toEqual('ResearchStudy');
    expect(ResourceEnum.RESEARCH_SUBJECT).toEqual('ResearchSubject');
    expect(ResourceEnum.RISK_ASSESSMENT).toEqual('RiskAssessment');
    expect(ResourceEnum.RISK_EVIDENCE_SYNTHESIS).toEqual('RiskEvidenceSynthesis');
    expect(ResourceEnum.SCHEDULE).toEqual('Schedule');
    expect(ResourceEnum.SEARCH_PARAMETER).toEqual('SearchParameter');
    expect(ResourceEnum.SERVICE_REQUEST).toEqual('ServiceRequest');
    expect(ResourceEnum.SLOT).toEqual('Slot');
    expect(ResourceEnum.SPECIMEN).toEqual('Specimen');
    expect(ResourceEnum.SPECIMEN_DEFINITION).toEqual('SpecimenDefinition');
    expect(ResourceEnum.STRUCTURE_DEFINITION).toEqual('StructureDefinition');
    expect(ResourceEnum.STRUCTURE_MAP).toEqual('StructureMap');
    expect(ResourceEnum.SUBSCRIPTION).toEqual('Subscription');
    expect(ResourceEnum.SUBSTANCE).toEqual('Substance');
    expect(ResourceEnum.SUBSTANCE_NUCLEIC_ACID).toEqual('SubstanceNucleicAcid');
    expect(ResourceEnum.SUBSTANCE_POLYMER).toEqual('SubstancePolymer');
    expect(ResourceEnum.SUBSTANCE_PROTEIN).toEqual('SubstanceProtein');
    expect(ResourceEnum.SUBSTANCE_REFERENCE_INFORMATION).toEqual('SubstanceReferenceInformation');
    expect(ResourceEnum.SUBSTANCE_SOURCE_MATERIAL).toEqual('SubstanceSourceMaterial');
    expect(ResourceEnum.SUBSTANCE_SPECIFICATION).toEqual('SubstanceSpecification');
    expect(ResourceEnum.SUPPLY_DELIVERY).toEqual('SupplyDelivery');
    expect(ResourceEnum.SUPPLY_REQUEST).toEqual('SupplyRequest');
    expect(ResourceEnum.TASK).toEqual('Task');
    expect(ResourceEnum.TERMINOLOGY_CAPABILITIES).toEqual('TerminologyCapabilities');
    expect(ResourceEnum.TEST_REPORT).toEqual('TestReport');
    expect(ResourceEnum.TEST_SCRIPT).toEqual('TestScript');
    expect(ResourceEnum.VALUE_SET).toEqual('ValueSet');
    expect(ResourceEnum.VERIFICATION_RESULT).toEqual('VerificationResult');
    expect(ResourceEnum.VISION_PRESCRIPTION).toEqual('VisionPrescription');
  });
});

describe('DataTypeEnum', () => {
  it('should have the correct values', () => {
    expect(DataTypeEnum.ADDRESS).toEqual('Address');
    expect(DataTypeEnum.AGE).toEqual('Age');
    expect(DataTypeEnum.ANNOTATION).toEqual('Annotation');
    expect(DataTypeEnum.ATTACHMENT).toEqual('Attachment');
    expect(DataTypeEnum.BACKBONE_ELEMENT).toEqual('BackboneElement');
    expect(DataTypeEnum.CODEABLE_CONCEPT).toEqual('CodeableConcept');
    expect(DataTypeEnum.CODING).toEqual('Coding');
    expect(DataTypeEnum.CONTACT_DETAIL).toEqual('ContactDetail');
    expect(DataTypeEnum.CONTACT_POINT).toEqual('ContactPoint');
    expect(DataTypeEnum.CONTRIBUTOR).toEqual('Contributor');
    expect(DataTypeEnum.COUNT).toEqual('Count');
    expect(DataTypeEnum.DATA_REQUIREMENT).toEqual('DataRequirement');
    expect(DataTypeEnum.DISTANCE).toEqual('Distance');
    expect(DataTypeEnum.DOSAGE).toEqual('Dosage');
    expect(DataTypeEnum.DURATION).toEqual('Duration');
    expect(DataTypeEnum.ELEMENT).toEqual('Element');
    expect(DataTypeEnum.ELEMENT_DEFINITION).toEqual('ElementDefinition');
    expect(DataTypeEnum.EXPRESSION).toEqual('Expression');
    expect(DataTypeEnum.EXTENSION).toEqual('Extension');
    expect(DataTypeEnum.HUMAN_NAME).toEqual('HumanName');
    expect(DataTypeEnum.IDENTIFIER).toEqual('Identifier');
    expect(DataTypeEnum.MARKETING_STATUS).toEqual('MarketingStatus');
    expect(DataTypeEnum.META).toEqual('Meta');
    expect(DataTypeEnum.MONEY).toEqual('Money');
    expect(DataTypeEnum.MONEY_QUANTITY).toEqual('MoneyQuantity');
    expect(DataTypeEnum.NARRATIVE).toEqual('Narrative');
    expect(DataTypeEnum.PARAMETER_DEFINITION).toEqual('ParameterDefinition');
    expect(DataTypeEnum.PERIOD).toEqual('Period');
    expect(DataTypeEnum.POPULATION).toEqual('Population');
    expect(DataTypeEnum.PROD_CHARACTERISTIC).toEqual('ProdCharacteristic');
    expect(DataTypeEnum.PRODUCT_SHELF_LIFE).toEqual('ProductShelfLife');
    expect(DataTypeEnum.QUANTITY).toEqual('Quantity');
    expect(DataTypeEnum.RANGE).toEqual('Range');
    expect(DataTypeEnum.RATIO).toEqual('Ratio');
    expect(DataTypeEnum.REFERENCE).toEqual('Reference');
    expect(DataTypeEnum.RELATED_ARTIFACT).toEqual('RelatedArtifact');
    expect(DataTypeEnum.SAMPLE_DATA).toEqual('SampledData');
    expect(DataTypeEnum.SIGNATURE).toEqual('Signature');
    expect(DataTypeEnum.SIMPLE_QUANTITY).toEqual('SimpleQuantity');
    expect(DataTypeEnum.SUBSTANCE_AMOUNT).toEqual('SubstanceAmount');
    expect(DataTypeEnum.TIMING).toEqual('Timing');
    expect(DataTypeEnum.TRIGGER_DEFINITION).toEqual('TriggerDefinition');
    expect(DataTypeEnum.USAGE_CONTEXT).toEqual('UsageContext');
    expect(DataTypeEnum.BASE64_BINARY).toEqual('base64Binary');
    expect(DataTypeEnum.BOOLEAN).toEqual('boolean');
    expect(DataTypeEnum.CANONICAL).toEqual('canonical');
    expect(DataTypeEnum.CODE).toEqual('code');
    expect(DataTypeEnum.DATE).toEqual('date');
    expect(DataTypeEnum.DATE_TIME).toEqual('dateTime');
    expect(DataTypeEnum.DECIMAL).toEqual('decimal');
    expect(DataTypeEnum.ID).toEqual('id');
    expect(DataTypeEnum.INSTANT).toEqual('instant');
    expect(DataTypeEnum.INTEGER).toEqual('integer');
    expect(DataTypeEnum.MARKDOWN).toEqual('markdown');
    expect(DataTypeEnum.OID).toEqual('oid');
    expect(DataTypeEnum.POSITIVE_INT).toEqual('positiveInt');
    expect(DataTypeEnum.STRING).toEqual('string');
    expect(DataTypeEnum.TIME).toEqual('time');
    expect(DataTypeEnum.UNSIGNED_INT).toEqual('unsignedInt');
    expect(DataTypeEnum.URI).toEqual('uri');
    expect(DataTypeEnum.URL).toEqual('url');
    expect(DataTypeEnum.UUID).toEqual('uuid');
    expect(DataTypeEnum.XHTML).toEqual('xhtml');
  });
});

describe('TaskStatusEnum', () => {
  it('should have the correct values', () => {
    expect(TaskStatusEnum.DRAFT).toEqual('draft');
    expect(TaskStatusEnum.REQUESTED).toEqual('requested');
    expect(TaskStatusEnum.RECEIVED).toEqual('received');
    expect(TaskStatusEnum.ACCEPTED).toEqual('accepted');
    expect(TaskStatusEnum.REJECTED).toEqual('rejected');
    expect(TaskStatusEnum.READY).toEqual('ready');
    expect(TaskStatusEnum.CANCELLED).toEqual('cancelled');
    expect(TaskStatusEnum.IN_PROGRESS).toEqual('in-progress');
    expect(TaskStatusEnum.ON_HOLD).toEqual('on-hold');
    expect(TaskStatusEnum.FAILED).toEqual('failed');
    expect(TaskStatusEnum.COMPLETED).toEqual('completed');
    expect(TaskStatusEnum.ENTERED_IN_ERROR).toEqual('entered-in-error');
  });
});

describe('TaskIntentEnum', () => {
  it('should have the correct values', () => {
    expect(TaskIntentEnum.UNKNOWN).toEqual('unknown');
    expect(TaskIntentEnum.PROPOSAL).toEqual('proposal');
    expect(TaskIntentEnum.PLAN).toEqual('plan');
    expect(TaskIntentEnum.ORDER).toEqual('order');
    expect(TaskIntentEnum.ORIGINAL_ORDER).toEqual('original-order');
    expect(TaskIntentEnum.REFLEX_ORDER).toEqual('reflex-order');
    expect(TaskIntentEnum.FILLER_ORDER).toEqual('filler-order');
    expect(TaskIntentEnum.INSTANCE_ORDER).toEqual('instance-order');
    expect(TaskIntentEnum.OPTION).toEqual('option');
  });
});

describe('AppointmentStatusEnum', () => {
  it('should have the correct values', () => {
    expect(AppointmentStatusEnum.PROPOSED).toEqual('proposed');
    expect(AppointmentStatusEnum.PENDING).toEqual('pending');
    expect(AppointmentStatusEnum.BOOKED).toEqual('booked');
    expect(AppointmentStatusEnum.ARRIVED).toEqual('arrived');
    expect(AppointmentStatusEnum.FULFILLED).toEqual('fulfilled');
    expect(AppointmentStatusEnum.CANCELLED).toEqual('cancelled');
    expect(AppointmentStatusEnum.NOSHOW).toEqual('noshow');
    expect(AppointmentStatusEnum.ENTERED_IN_ERROR).toEqual('entered-in-error');
    expect(AppointmentStatusEnum.CHECKED_IN).toEqual('checked-in');
    expect(AppointmentStatusEnum.WAITLIST).toEqual('waitlist');
  });
});

describe('ParticipantRequiredEnum', () => {
  it('should have the correct values', () => {
    expect(ParticipantRequiredEnum.REQUIRED).toEqual('required');
    expect(ParticipantRequiredEnum.OPTIONAL).toEqual('optional');
    expect(ParticipantRequiredEnum.INFORMATION_ONLY).toEqual('information-only');
  });
});

describe('ParticipantStatusEnum', () => {
  it('should have the correct values', () => {
    expect(ParticipantStatusEnum.ACCEPTED).toEqual('accepted');
    expect(ParticipantStatusEnum.DECLINED).toEqual('declined');
    expect(ParticipantStatusEnum.TENTATIVE).toEqual('tentative');
    expect(ParticipantStatusEnum.NEEDS_ACTION).toEqual('needs-action');
  });
});

describe('EventTimingEnum', () => {
  it('should have the correct values', () => {
    expect(EventTimingEnum.MORNING).toEqual('MORN');
    expect(EventTimingEnum.EARLY_MORNING).toEqual('MORN.early');
    expect(EventTimingEnum.LATE_MORNING).toEqual('MORN.late');
    expect(EventTimingEnum.NOON).toEqual('NOON');
    expect(EventTimingEnum.AFTERNOON).toEqual('AFT');
    expect(EventTimingEnum.EARLY_AFTERNOON).toEqual('AFT.early');
    expect(EventTimingEnum.LATE_AFTERNOON).toEqual('AFT.late');
    expect(EventTimingEnum.EVENING).toEqual('EVE');
    expect(EventTimingEnum.EARLY_EVENING).toEqual('EVE.early');
    expect(EventTimingEnum.LATE_EVENING).toEqual('EVE.late');
    expect(EventTimingEnum.NIGHT).toEqual('NIGHT');
    expect(EventTimingEnum.AFTER_SLEEP).toEqual('PHS');
    expect(EventTimingEnum.HS).toEqual('HS');
    expect(EventTimingEnum.WAKE).toEqual('WAKE');
    expect(EventTimingEnum.C).toEqual('C');
    expect(EventTimingEnum.CM).toEqual('CM');
    expect(EventTimingEnum.CD).toEqual('CD');
    expect(EventTimingEnum.CV).toEqual('CV');
    expect(EventTimingEnum.AC).toEqual('AC');
    expect(EventTimingEnum.ACM).toEqual('ACM');
    expect(EventTimingEnum.ACD).toEqual('ACD');
    expect(EventTimingEnum.ACV).toEqual('ACV');
    expect(EventTimingEnum.PC).toEqual('PC');
    expect(EventTimingEnum.PCM).toEqual('PCM');
    expect(EventTimingEnum.PCD).toEqual('PCD');
    expect(EventTimingEnum.PCV).toEqual('PCV');
  });
});

describe('SlotStatusEnum', () => {
  it('should have the correct values', () => {
    expect(SlotStatusEnum.BUSY).toEqual('busy');
    expect(SlotStatusEnum.FREE).toEqual('free');
    expect(SlotStatusEnum.BUSY_UNAVAILABLE).toEqual('busy-unavailable');
    expect(SlotStatusEnum.BUSY_TENTATIVE).toEqual('busy-tentative');
    expect(SlotStatusEnum.ENTERED_IN_ERROR).toEqual('entered-in-error');
  });
});

describe('AllergyIntoleranceTypeEnum', () => {
  it('should have the correct values', () => {
    expect(AllergyIntoleranceTypeEnum.ALLERGY).toEqual('allergy');
    expect(AllergyIntoleranceTypeEnum.INTOLERANCE).toEqual('intolerance');
  });
});

describe('AllergyIntoleranceCategoryEnum', () => {
  it('should have the correct values', () => {
    expect(AllergyIntoleranceCategoryEnum.FOOD).toEqual('food');
    expect(AllergyIntoleranceCategoryEnum.MEDICATION).toEqual('medication');
    expect(AllergyIntoleranceCategoryEnum.ENVIRONMENT).toEqual('environment');
    expect(AllergyIntoleranceCategoryEnum.BIOLOGIC).toEqual('biologic');
  });
});

describe('AllergyIntoleranceCriticalityEnum', () => {
  it('should have the correct values', () => {
    expect(AllergyIntoleranceCriticalityEnum.LOW).toEqual('low');
    expect(AllergyIntoleranceCriticalityEnum.HIGH).toEqual('high');
    expect(AllergyIntoleranceCriticalityEnum.UNABLE_TO_ASSESS).toEqual('unable-to-assess');
  });
});

describe('AllergyIntoleranceSeverityEnum', () => {
  it('should have the correct values', () => {
    expect(AllergyIntoleranceSeverityEnum.MILD).toEqual('mild');
    expect(AllergyIntoleranceSeverityEnum.MODERATE).toEqual('moderate');
    expect(AllergyIntoleranceSeverityEnum.SEVERE).toEqual('severe');
  });
});

describe('EventStatusEnum', () => {
  it('should have the correct values', () => {
    expect(EventStatusEnum.PREPARATION).toEqual('preparation');
    expect(EventStatusEnum.IN_PROGRESS).toEqual('in-progress');
    expect(EventStatusEnum.NOT_DONE).toEqual('not-done');
    expect(EventStatusEnum.ON_HOLD).toEqual('on-hold');
    expect(EventStatusEnum.STOPPED).toEqual('stopped');
    expect(EventStatusEnum.COMPLETED).toEqual('completed');
    expect(EventStatusEnum.ENTERED_IN_ERROR).toEqual('entered-in-error');
    expect(EventStatusEnum.UNKNOWN).toEqual('unknown');
  });
});

describe('FamilyHistoryStatusEnum', () => {
  it('should have the correct values', () => {
    expect(FamilyHistoryStatusEnum.PARTIAL).toEqual('partial');
    expect(FamilyHistoryStatusEnum.COMPLETED).toEqual('completed');
    expect(FamilyHistoryStatusEnum.ENTERED_IN_ERROR).toEqual('entered-in-error');
    expect(FamilyHistoryStatusEnum.HEALTH_UNKNOWN).toEqual('health-unknown');
  });
});

describe('GoalLifecycleStatusEnum', () => {
  it('should have the correct values', () => {
    expect(GoalLifecycleStatusEnum.PROPOSED).toEqual('proposed');
    expect(GoalLifecycleStatusEnum.PLANNED).toEqual('planned');
    expect(GoalLifecycleStatusEnum.ACCEPTED).toEqual('accepted');
    expect(GoalLifecycleStatusEnum.ACTIVE).toEqual('active');
    expect(GoalLifecycleStatusEnum.ON_HOLD).toEqual('on-hold');
    expect(GoalLifecycleStatusEnum.COMPLETED).toEqual('completed');
    expect(GoalLifecycleStatusEnum.CANCELLED).toEqual('cancelled');
    expect(GoalLifecycleStatusEnum.ENTERED_IN_ERROR).toEqual('entered-in-error');
    expect(GoalLifecycleStatusEnum.REJECTED).toEqual('rejected');
  });
});

describe('CareTeamStatusEnum', () => {
  it('should have the correct values', () => {
    expect(CareTeamStatusEnum.PROPOSED).toEqual('proposed');
    expect(CareTeamStatusEnum.ACTIVE).toEqual('active');
    expect(CareTeamStatusEnum.SUSPENDED).toEqual('suspended');
    expect(CareTeamStatusEnum.INACTIVE).toEqual('inactive');
    expect(CareTeamStatusEnum.ENTERED_IN_ERROR).toEqual('entered-in-error');
  });
});

describe('ObservationStatusEnum', () => {
  it('should have the correct values', () => {
    expect(ObservationStatusEnum.REGISTERED).toEqual('registered');
    expect(ObservationStatusEnum.PRELIMINARY).toEqual('preliminary');
    expect(ObservationStatusEnum.FINAL).toEqual('final');
    expect(ObservationStatusEnum.AMENDED).toEqual('amended');
    expect(ObservationStatusEnum.CORRECTED).toEqual('corrected');
    expect(ObservationStatusEnum.CANCELLED).toEqual('cancelled');
    expect(ObservationStatusEnum.ENTERED_IN_ERROR).toEqual('entered-in-error');
    expect(ObservationStatusEnum.UNKNOWN).toEqual('unknown');
  });
});

describe('DiagnosticReportStatusEnum', () => {
  it('should have the correct values', () => {
    expect(DiagnosticReportStatusEnum.REGISTERED).toEqual('registered');
    expect(DiagnosticReportStatusEnum.PARTIAL).toEqual('partial');
    expect(DiagnosticReportStatusEnum.PRELIMINARY).toEqual('preliminary');
    expect(DiagnosticReportStatusEnum.FINAL).toEqual('final');
    expect(DiagnosticReportStatusEnum.AMENDED).toEqual('amended');
    expect(DiagnosticReportStatusEnum.CORRECTED).toEqual('corrected');
    expect(DiagnosticReportStatusEnum.APPENDED).toEqual('appended');
    expect(DiagnosticReportStatusEnum.CANCELLED).toEqual('cancelled');
    expect(DiagnosticReportStatusEnum.ENTERED_IN_ERROR).toEqual('entered-in-error');
    expect(DiagnosticReportStatusEnum.UNKNOWN).toEqual('unknown');
  });
});

describe('ParticipationStatusEnum', () => {
  it('should have the correct values', () => {
    expect(ParticipationStatusEnum.ACCEPTED).toEqual('accepted');
    expect(ParticipationStatusEnum.DECLINED).toEqual('declined');
    expect(ParticipationStatusEnum.TENTATIVE).toEqual('tentative');
    expect(ParticipationStatusEnum.NEEDS_ACTION).toEqual('needs-action');
  });
});

describe('FlagStatusEnum', () => {
  it('should have the correct values', () => {
    expect(FlagStatusEnum.ACTIVE).toEqual('active');
    expect(FlagStatusEnum.INACTIVE).toEqual('inactive');
    expect(FlagStatusEnum.ENTERED_IN_ERROR).toEqual('entered-in-error');
  });
});

describe('FinancialResourceStatusCodesEnum', () => {
  it('should have the correct values', () => {
    expect(FinancialResourceStatusCodesEnum.ACTIVE).toEqual('active');
    expect(FinancialResourceStatusCodesEnum.CANCELLED).toEqual('cancelled');
    expect(FinancialResourceStatusCodesEnum.DRAFT).toEqual('draft');
    expect(FinancialResourceStatusCodesEnum.ENTERED_IN_ERROR).toEqual('entered-in-error');
  });
});

describe('BackboneElementEnum', () => {
  it('should have the correct values', () => {
    expect(BackboneElementEnum.ACCOUNT_COVERAGE).toEqual('AccountCoverage');
    expect(BackboneElementEnum.ACCOUNT_GUARANTOR).toEqual('AccountGuarantor');
    expect(BackboneElementEnum.ALLERGY_INTOLERANCE_REACTION).toEqual('AllergyIntoleranceReaction');
    expect(BackboneElementEnum.APPOINTMENT_PARTICIPANT).toEqual('AppointmentParticipant');
    expect(BackboneElementEnum.AUDIT_EVENT_AGENT).toEqual('AuditEventAgent');
    expect(BackboneElementEnum.AUDIT_EVENT_ENTITY).toEqual('AuditEventEntity');
    expect(BackboneElementEnum.AUDIT_EVENT_ENTITY_DETAIL).toEqual('AuditEventEntityDetail');
    expect(BackboneElementEnum.BUNDLE_ENTRY).toEqual('BundleEntry');
    expect(BackboneElementEnum.BUNDLE_REQUEST).toEqual('BundleRequest');
    expect(BackboneElementEnum.BUNDLE_RESPONSE).toEqual('BundleResponse');
    expect(BackboneElementEnum.BUNDLE_SEARCH).toEqual('BundleSearch');
    expect(BackboneElementEnum.BUNDLE_LINK).toEqual('BundleLink');
    expect(BackboneElementEnum.CARE_PLAN_ACTIVITY).toEqual('CarePlanActivity');
    expect(BackboneElementEnum.CARE_PLAN_ACTIVITY_DETAIL).toEqual('CarePlanActivityDetail');
    expect(BackboneElementEnum.CARE_TEAM_PARTICIPANT).toEqual('CareTeamParticipant');
    expect(BackboneElementEnum.COMPOSITION_ATTESTER).toEqual('CompositionAttester');
    expect(BackboneElementEnum.COMPOSITION_EVENT).toEqual('CompositionEvent');
    expect(BackboneElementEnum.COMPOSITION_RELATES_TO).toEqual('CompositionRelatesTo');
    expect(BackboneElementEnum.COMPOSITION_SECTION).toEqual('CompositionSection');
    expect(BackboneElementEnum.CONDITION_EVIDENCE).toEqual('ConditionEvidence');
    expect(BackboneElementEnum.CONDITION_STAGE).toEqual('ConditionStage');
    expect(BackboneElementEnum.COVERAGE_CLASS).toEqual('CoverageClass');
    expect(BackboneElementEnum.COVERAGE_COST_TO_BENEFICIARY).toEqual('CoverageCostToBeneficiary');
    expect(BackboneElementEnum.COVERAGE_EXCEPTION).toEqual('CoverageException');
    expect(BackboneElementEnum.DIAGNOSTIC_REPORT_MEDIA).toEqual('DiagnosticReportMedia');
    expect(BackboneElementEnum.ENCOUNTER_CLASS_HISTORY).toEqual('EncounterClassHistory');
    expect(BackboneElementEnum.ENCOUNTER_DIAGNOSIS).toEqual('EncounterDiagnosis');
    expect(BackboneElementEnum.ENCOUNTER_HOSPITALIZATION).toEqual('EncounterHospitalization');
    expect(BackboneElementEnum.ENCOUNTER_LOCATION).toEqual('EncounterLocation');
    expect(BackboneElementEnum.ENCOUNTER_PARTICIPANT).toEqual('EncounterParticipant');
    expect(BackboneElementEnum.ENCOUNTER_STATUS_HISTORY).toEqual('EncounterStatusHistory');
    expect(BackboneElementEnum.EPISODE_OF_CARE_DIAGNOSIS).toEqual('EpisodeOfCareDiagnosis');
    expect(BackboneElementEnum.EPISODE_OF_CARE_STATUS).toEqual('EpisodeOfCareStatus');
    expect(BackboneElementEnum.FAMILY_MEMBER_HISTORY_CONDITION).toEqual('FamilyMemberHistoryCondition');
    expect(BackboneElementEnum.GOAL_TARGET).toEqual('GoalTarget');
    expect(BackboneElementEnum.GROUP_CHARACTERISTIC).toEqual('GroupCharacteristic');
    expect(BackboneElementEnum.GROUP_MEMBER).toEqual('GroupMember');
    expect(BackboneElementEnum.HEALTHCARE_SERVICE_AVAILABLE_TIME).toEqual('HealthcareServiceAvailableTime');
    expect(BackboneElementEnum.HEALTHCARE_SERVICE_ELIGIBILITY).toEqual('HealthcareServiceEligibility');
    expect(BackboneElementEnum.HEALTHCARE_SERVICE_NOT_AVAILABLE).toEqual('HealthcareServiceNotAvailable');
    expect(BackboneElementEnum.LOCATION_POSITION).toEqual('LocationPosition');
    expect(BackboneElementEnum.OBSERVATION_COMPONENT).toEqual('ObservationComponent');
    expect(BackboneElementEnum.OBSERVATION_REFERENCE_RANGE).toEqual('ObservationReferenceRange');
    expect(BackboneElementEnum.OPERATION_OUTCOME_ISSUE).toEqual('OperationOutcomeIssue');
    expect(BackboneElementEnum.ORGANIZATION_CONTACT).toEqual('OrganizationContact');
    expect(BackboneElementEnum.PATIENT_COMMUNICATION).toEqual('PatientCommunication');
    expect(BackboneElementEnum.PATIENT_CONTACT).toEqual('PatientContact');
    expect(BackboneElementEnum.PATIENT_LINK).toEqual('PatientLink');
    expect(BackboneElementEnum.PERSON_LINK).toEqual('PersonLink');
    expect(BackboneElementEnum.PRACTITIONER_QUALIFICATION).toEqual('PractitionerQualification');
    expect(BackboneElementEnum.PRACTITIONER_ROLE_AVAILABLE_TIME).toEqual('PractitionerRoleAvailableTime');
    expect(BackboneElementEnum.PRACTITIONER_ROLE_NOT_AVAILABLE).toEqual('PractitionerRoleNotAvailable');
    expect(BackboneElementEnum.PROCEDURE_FOCAL_DEVICE).toEqual('ProcedureFocalDevice');
    expect(BackboneElementEnum.PROCEDURE_PERFORMER).toEqual('ProcedurePerformer');
    expect(BackboneElementEnum.RELATED_PERSON_COMMUNICATION).toEqual('RelatedPersonCommunication');
    expect(BackboneElementEnum.TASK_INPUT).toEqual('TaskInput');
    expect(BackboneElementEnum.TASK_OUTPUT).toEqual('TaskOutput');
    expect(BackboneElementEnum.TASK_RESTRICTION).toEqual('TaskRestriction');
    expect(BackboneElementEnum.TIMING).toEqual('Timing');
  });
});

describe('UDIEntryTypeEnum', () => {
  it('should have the correct values', () => {
    expect(UDIEntryTypeEnum.BARCODE).toEqual('barcode');
    expect(UDIEntryTypeEnum.RFID).toEqual('rfid');
    expect(UDIEntryTypeEnum.MANUAL).toEqual('manual');
    expect(UDIEntryTypeEnum.CARD).toEqual('card');
    expect(UDIEntryTypeEnum.SELF_REPORTED).toEqual('self-reported');
    expect(UDIEntryTypeEnum.UNKNOWN).toEqual('unknown');
  });
});

describe('FHIRDeviceStatusEnum', () => {
  it('should have the correct values', () => {
    expect(FHIRDeviceStatusEnum.ACTIVE).toEqual('active');
    expect(FHIRDeviceStatusEnum.INACTIVE).toEqual('inactive');
    expect(FHIRDeviceStatusEnum.ENTERED_IN_ERROR).toEqual('entered-in-error');
    expect(FHIRDeviceStatusEnum.UNKNOWN).toEqual('unknown');
  });
});

describe('DeviceNameTypeEnum', () => {
  it('should have the correct values', () => {
    expect(DeviceNameTypeEnum.UDI_LABEL_NAME).toEqual('udi-label-name');
    expect(DeviceNameTypeEnum.USER_FRIENDLY_NAME).toEqual('user-friendly-name');
    expect(DeviceNameTypeEnum.PATIENT_REPORTED_NAME).toEqual('patient-reported-name');
    expect(DeviceNameTypeEnum.MANUFACTURER_NAME).toEqual('manufacturer-name');
    expect(DeviceNameTypeEnum.MODEL_NAME).toEqual('model-name');
    expect(DeviceNameTypeEnum.OTHER).toEqual('other');
  });
});

describe('DeviceMetricOperationalStatusEnum', () => {
  it('should have the correct values', () => {
    expect(DeviceMetricOperationalStatusEnum.ON).toEqual('on');
    expect(DeviceMetricOperationalStatusEnum.OFF).toEqual('off');
    expect(DeviceMetricOperationalStatusEnum.STANDBY).toEqual('standby');
    expect(DeviceMetricOperationalStatusEnum.ENTERED_IN_ERROR).toEqual('entered-in-error');
  });
});

describe('DeviceMetricColorEnum', () => {
  it('should have the correct values', () => {
    expect(DeviceMetricColorEnum.BLACK).toEqual('black');
    expect(DeviceMetricColorEnum.RED).toEqual('red');
    expect(DeviceMetricColorEnum.GREEN).toEqual('green');
    expect(DeviceMetricColorEnum.YELLOW).toEqual('yellow');
    expect(DeviceMetricColorEnum.BLUE).toEqual('blue');
    expect(DeviceMetricColorEnum.MAGENTA).toEqual('magenta');
    expect(DeviceMetricColorEnum.CYAN).toEqual('cyan');
    expect(DeviceMetricColorEnum.WHITE).toEqual('white');
  });
});

describe('DeviceMetricCategoryEnum', () => {
  it('should have the correct values', () => {
    expect(DeviceMetricCategoryEnum.MEASUREMENT).toEqual('measurement');
    expect(DeviceMetricCategoryEnum.SETTING).toEqual('setting');
    expect(DeviceMetricCategoryEnum.CALCULATION).toEqual('calculation');
    expect(DeviceMetricCategoryEnum.UNSPECIFIED).toEqual('unspecified');
  });
});

describe('DeviceMetricCalibrationTypeEnum', () => {
  it('should have the correct values', () => {
    expect(DeviceMetricCalibrationTypeEnum.UNSPECIFIED).toEqual('unspecified');
    expect(DeviceMetricCalibrationTypeEnum.OFFSET).toEqual('offset');
    expect(DeviceMetricCalibrationTypeEnum.GAIN).toEqual('gain');
    expect(DeviceMetricCalibrationTypeEnum.TWO_POINT).toEqual('two-point');
  });
});

describe('DeviceMetricCalibrationStateEnum', () => {
  it('should have the correct values', () => {
    expect(DeviceMetricCalibrationStateEnum.NOT_CALIBRATED).toEqual('not-calibrated');
    expect(DeviceMetricCalibrationStateEnum.CALIBRATION_REQUIRED).toEqual('calibration-required');
    expect(DeviceMetricCalibrationStateEnum.CALIBRATED).toEqual('calibrated');
    expect(DeviceMetricCalibrationStateEnum.UNSPECIFIED).toEqual('unspecified');
  });
});

describe('FHIRSubstanceStatusEnum', () => {
  it('should have the correct values', () => {
    expect(FHIRSubstanceStatusEnum.ACTIVE).toEqual('active');
    expect(FHIRSubstanceStatusEnum.INACTIVE).toEqual('inactive');
    expect(FHIRSubstanceStatusEnum.ENTERED_IN_ERROR).toEqual('entered-in-error');
  });
});

describe('BundleTypeEnum', () => {
  it('should have the correct values', () => {
    expect(BundleTypeEnum.DOCUMENT).toEqual('document');
    expect(BundleTypeEnum.MESSAGE).toEqual('message');
    expect(BundleTypeEnum.TRANSACTION).toEqual('transaction');
    expect(BundleTypeEnum.TRANSACTION_RESPONSE).toEqual('transaction-response');
    expect(BundleTypeEnum.BATCH).toEqual('batch');
    expect(BundleTypeEnum.BATCH_RESPONSE).toEqual('batch-response');
    expect(BundleTypeEnum.HISTORY).toEqual('history');
    expect(BundleTypeEnum.SEARCHSET).toEqual('searchset');
    expect(BundleTypeEnum.COLLECTION).toEqual('collection');
  });
});

describe('SearchEntryModeEnum', () => {
  it('should have the correct values', () => {
    expect(SearchEntryModeEnum.MATCH).toEqual('match');
    expect(SearchEntryModeEnum.INCLUDE).toEqual('include');
    expect(SearchEntryModeEnum.OUTCOME).toEqual('outcome');
  });
});

describe('HTTPVerbEnum', () => {
  it('should have the correct values', () => {
    expect(HTTPVerbEnum.GET).toEqual('GET');
    expect(HTTPVerbEnum.HEAD).toEqual('HEAD');
    expect(HTTPVerbEnum.POST).toEqual('POST');
    expect(HTTPVerbEnum.PUT).toEqual('PUT');
    expect(HTTPVerbEnum.DELETE).toEqual('DELETE');
    expect(HTTPVerbEnum.PATCH).toEqual('PATCH');
  });
});

describe('CompositionStatusEnum', () => {
  it('should have the correct values', () => {
    expect(CompositionStatusEnum.PRELIMINARY).toEqual('preliminary');
    expect(CompositionStatusEnum.FINAL).toEqual('final');
    expect(CompositionStatusEnum.AMENDED).toEqual('amended');
    expect(CompositionStatusEnum.ENTERED_IN_ERROR).toEqual('entered-in-error');
  });
});

describe('ConfidentialityClassificationEnum', () => {
  it('should have the correct values', () => {
    expect(ConfidentialityClassificationEnum.UNRESTRICTED).toEqual('U');
    expect(ConfidentialityClassificationEnum.LOW).toEqual('L');
    expect(ConfidentialityClassificationEnum.MODERATE).toEqual('M');
    expect(ConfidentialityClassificationEnum.NORMAL).toEqual('N');
    expect(ConfidentialityClassificationEnum.RESTRICTED).toEqual('R');
    expect(ConfidentialityClassificationEnum.VERY_RESTRICTED).toEqual('V');
  });
});

describe('CompositionAttestationModeEnum', () => {
  it('should have the correct values', () => {
    expect(CompositionAttestationModeEnum.PERSONAL).toEqual('personal');
    expect(CompositionAttestationModeEnum.PROFESSIONAL).toEqual('professional');
    expect(CompositionAttestationModeEnum.LEGAL).toEqual('legal');
    expect(CompositionAttestationModeEnum.OFFICIAL).toEqual('official');
  });
});

describe('DocumentRelationshipTypeEnum', () => {
  it('should have the correct values', () => {
    expect(DocumentRelationshipTypeEnum.REPLACES).toEqual('replaces');
    expect(DocumentRelationshipTypeEnum.TRANSFORMS).toEqual('transforms');
    expect(DocumentRelationshipTypeEnum.SIGNS).toEqual('signs');
    expect(DocumentRelationshipTypeEnum.APPENDS).toEqual('appends');
  });
});

describe('ListModeEnum', () => {
  it('should have the correct values', () => {
    expect(ListModeEnum.WORKING).toEqual('working');
    expect(ListModeEnum.SNAPSHOT).toEqual('snapshot');
    expect(ListModeEnum.CHANGES).toEqual('changes');
  });
});

describe('GroupTypeEnum', () => {
  it('should have the correct values', () => {
    expect(GroupTypeEnum.PERSON).toEqual('person');
    expect(GroupTypeEnum.ANIMAL).toEqual('animal');
    expect(GroupTypeEnum.PRACTITIONER).toEqual('practitioner');
    expect(GroupTypeEnum.DEVICE).toEqual('device');
    expect(GroupTypeEnum.MEDICATION).toEqual('medication');
    expect(GroupTypeEnum.SUBSTANCE).toEqual('substance');
  });
});

describe('IssueSeverityEnum', () => {
  it('should have the correct values', () => {
    expect(IssueSeverityEnum.FATAL).toEqual('fatal');
    expect(IssueSeverityEnum.ERROR).toEqual('error');
    expect(IssueSeverityEnum.WARNING).toEqual('warning');
    expect(IssueSeverityEnum.INFORMATION).toEqual('information');
  });
});

describe('IssueTypeEnum', () => {
  it('should have the correct values', () => {
    expect(IssueTypeEnum.INVALID).toEqual('invalid');
    expect(IssueTypeEnum.STRUCTURE).toEqual('structure');
    expect(IssueTypeEnum.REQUIRED).toEqual('required');
    expect(IssueTypeEnum.VALUE).toEqual('value');
    expect(IssueTypeEnum.INVARIANT).toEqual('invariant');
    expect(IssueTypeEnum.SECURITY).toEqual('security');
    expect(IssueTypeEnum.LOGIN).toEqual('login');
    expect(IssueTypeEnum.UNKNOWN).toEqual('unknown');
    expect(IssueTypeEnum.EXPIRED).toEqual('expired');
    expect(IssueTypeEnum.FORBIDDEN).toEqual('forbidden');
    expect(IssueTypeEnum.SUPPRESSED).toEqual('suppressed');
    expect(IssueTypeEnum.PROCESSING).toEqual('processing');
    expect(IssueTypeEnum.NOT_SUPPORTED).toEqual('not-supported');
    expect(IssueTypeEnum.DUPLICATE).toEqual('duplicate');
    expect(IssueTypeEnum.MULTIPLE_MATCHES).toEqual('multiple-matches');
    expect(IssueTypeEnum.NOT_FOUND).toEqual('not-found');
    expect(IssueTypeEnum.DELETED).toEqual('deleted');
    expect(IssueTypeEnum.TOO_LONG).toEqual('too-long');
    expect(IssueTypeEnum.CODE_INVALID).toEqual('code-invalid');
    expect(IssueTypeEnum.EXTENSION).toEqual('extension');
    expect(IssueTypeEnum.TOO_COSTLY).toEqual('too-costly');
    expect(IssueTypeEnum.BUSINESS_RULE).toEqual('business-rule');
    expect(IssueTypeEnum.CONFLICT).toEqual('conflict');
    expect(IssueTypeEnum.TRANSIENT).toEqual('transient');
    expect(IssueTypeEnum.LOCK_ERROR).toEqual('lock-error');
    expect(IssueTypeEnum.NO_STORE).toEqual('no-store');
    expect(IssueTypeEnum.EXCEPTION).toEqual('exception');
    expect(IssueTypeEnum.TIMEOUT).toEqual('timeout');
    expect(IssueTypeEnum.INCOMPLETE).toEqual('incomplete');
    expect(IssueTypeEnum.THROTTLED).toEqual('throttled');
    expect(IssueTypeEnum.INFORMATIONAL).toEqual('informational');
  });
});
