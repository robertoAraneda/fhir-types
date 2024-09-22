/**
 * @name BackboneElement
 * @version R4
 * @author Claudia Alarcón Lazo
 */
export enum BackboneElementEnum {
  ACCOUNT_COVERAGE = 'AccountCoverage',
  ACCOUNT_GUARANTOR = 'AccountGuarantor',
  ADVERSE_EVENT_CAUSALITY = 'AdverseEventCausality',
  ADVERSE_EVENT_SUSPECT_ENTITY = 'AdverseEventSuspectEntity',
  ALLERGY_INTOLERANCE_REACTION = 'AllergyIntoleranceReaction',
  APPOINTMENT_PARTICIPANT = 'AppointmentParticipant',
  AUDIT_EVENT_AGENT = 'AuditEventAgent',
  AUDIT_EVENT_AGENT_NETWORK = 'AuditEventAgentNetwork',
  AUDIT_EVENT_ENTITY = 'AuditEventEntity',
  AUDIT_EVENT_ENTITY_DETAIL = 'AuditEventEntityDetail',
  BUNDLE_ENTRY = 'BundleEntry',
  BUNDLE_REQUEST = 'BundleRequest',
  BUNDLE_RESPONSE = 'BundleResponse',
  BUNDLE_SEARCH = 'BundleSearch',
  BUNDLE_LINK = 'BundleLink',
  CARE_PLAN_ACTIVITY = 'CarePlanActivity',
  CARE_PLAN_ACTIVITY_DETAIL = 'CarePlanActivityDetail',
  CARE_TEAM_PARTICIPANT = 'CareTeamParticipant',
  CLINICAL_IMPRESSION_FINDING = 'ClinicalImpressionFinding',
  CLINICAL_IMPRESSION_INVESTIGATION = 'ClinicalImpressionInvestigation',
  COMPOSITION_ATTESTER = 'CompositionAttester',
  COMPOSITION_EVENT = 'CompositionEvent',
  COMPOSITION_RELATES_TO = 'CompositionRelatesTo',
  COMPOSITION_SECTION = 'CompositionSection',
  CONDITION_EVIDENCE = 'ConditionEvidence',
  CONDITION_STAGE = 'ConditionStage',
  COVERAGE_CLASS = 'CoverageClass',
  COVERAGE_COST_TO_BENEFICIARY = 'CoverageCostToBeneficiary',
  COVERAGE_EXCEPTION = 'CoverageException',
  DETECTED_ISSUE_EVIDENCE = 'DetectedIssueEvidence',
  DETECTED_ISSUE_MITIGATION = 'DetectedIssueMitigation',
  DEVICE_DEFINITION_CAPABILITY = 'DeviceDefinitionCapability',
  DEVICE_DEFINITION_DEVICE_NAME = 'DeviceDefinitionDeviceName',
  DEVICE_DEFINITION_MATERIAL = 'DeviceDefinitionMaterial',
  DEVICE_DEFINITION_PROPERTY = 'DeviceDefinitionProperty',
  DEVICE_DEFINITION_SPECIALIZATION = 'DeviceDefinitionSpecialization',
  DEVICE_DEFINITION_UDI_DEVICE_IDENTIFIER = 'DeviceDefinitionUdiDeviceIdentifier',
  DEVICE_DEVICE_NAME = 'DeviceDeviceName',
  DEVICE_METRIC_CALIBRATION = 'DeviceMetricCalibration',
  DEVICE_PROPERTY = 'DeviceProperty',
  DEVICE_SPECIALIZATION = 'DeviceSpecialization',
  DEVICE_UDI_CARRIER = 'DeviceUdiCarrier',
  DEVICE_VERSION = 'DeviceVersion',
  DIAGNOSTIC_REPORT_MEDIA = 'DiagnosticReportMedia',
  ENCOUNTER_CLASS_HISTORY = 'EncounterClassHistory',
  ENCOUNTER_DIAGNOSIS = 'EncounterDiagnosis',
  ENCOUNTER_HOSPITALIZATION = 'EncounterHospitalization',
  ENCOUNTER_LOCATION = 'EncounterLocation',
  ENCOUNTER_PARTICIPANT = 'EncounterParticipant',
  ENCOUNTER_STATUS_HISTORY = 'EncounterStatusHistory',
  EPISODE_OF_CARE_DIAGNOSIS = 'EpisodeOfCareDiagnosis',
  EPISODE_OF_CARE_STATUS = 'EpisodeOfCareStatus',
  FAMILY_MEMBER_HISTORY_CONDITION = 'FamilyMemberHistoryCondition',
  GOAL_TARGET = 'GoalTarget',
  GROUP_CHARACTERISTIC = 'GroupCharacteristic',
  GROUP_MEMBER = 'GroupMember',
  HEALTHCARE_SERVICE_AVAILABLE_TIME = 'HealthcareServiceAvailableTime',
  HEALTHCARE_SERVICE_ELIGIBILITY = 'HealthcareServiceEligibility',
  HEALTHCARE_SERVICE_NOT_AVAILABLE = 'HealthcareServiceNotAvailable',
  IMAGING_STUDY_INSTANCE = 'ImagingStudyInstance',
  IMAGING_STUDY_PERFORMER = 'ImagingStudyPerformer',
  IMAGING_STUDY_SERIES = 'ImagingStudySeries',
  LOCATION_POSITION = 'LocationPosition',
  MOLECULAR_SEQUENCE_INNER = 'MolecularSequenceInner',
  MOLECULAR_SEQUENCE_OUTER = 'MolecularSequenceOuter',
  MOLECULAR_SEQUENCE_QUALITY = 'MolecularSequenceQuality',
  MOLECULAR_SEQUENCE_REFERENCE_SEQ = 'MolecularSequenceReferenceSeq',
  MOLECULAR_SEQUENCE_REPOSITORY = 'MolecularSequenceRepository',
  MOLECULAR_SEQUENCE_ROC = 'MolecularSequenceRoc',
  MOLECULAR_SEQUENCE_STRUCTURE_VARIANT = 'MolecularSequenceStructureVariant',
  MOLECULAR_SEQUENCE_VARIANT = 'MolecularSequenceVariant',
  OBSERVATION_COMPONENT = 'ObservationComponent',
  OBSERVATION_REFERENCE_RANGE = 'ObservationReferenceRange',
  OPERATION_OUTCOME_ISSUE = 'OperationOutcomeIssue',
  ORGANIZATION_CONTACT = 'OrganizationContact',
  PATIENT_COMMUNICATION = 'PatientCommunication',
  PATIENT_CONTACT = 'PatientContact',
  PATIENT_LINK = 'PatientLink',
  PERSON_LINK = 'PersonLink',
  PRACTITIONER_QUALIFICATION = 'PractitionerQualification',
  PRACTITIONER_ROLE_AVAILABLE_TIME = 'PractitionerRoleAvailableTime',
  PRACTITIONER_ROLE_NOT_AVAILABLE = 'PractitionerRoleNotAvailable',
  PROCEDURE_FOCAL_DEVICE = 'ProcedureFocalDevice',
  PROCEDURE_PERFORMER = 'ProcedurePerformer',
  RELATED_PERSON_COMMUNICATION = 'RelatedPersonCommunication',
  RISK_ASSESSMENT_PREDICTION = 'RiskAssessmentPrediction',
  SPECIMEN_COLLECTION = 'SpecimenCollection',
  SPECIMEN_CONTAINER = 'SpecimenContainer',
  SPECIMEN_PROCESSING = 'SpecimenProcessing',
  SUBSTANCE_INGREDIENT = 'SubstanceIngredient',
  SUBSTANCE_INSTANCE = 'SubstanceInstance',
  TASK_INPUT = 'TaskInput',
  TASK_OUTPUT = 'TaskOutput',
  TASK_RESTRICTION = 'TaskRestriction',
  TIMING = 'Timing',
}
