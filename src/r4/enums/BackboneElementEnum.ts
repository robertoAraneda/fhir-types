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
  CLAIM_ACCIDENT = 'ClaimAccident',
  CLAIM_CARE_TEAM = 'ClaimCareTeam',
  CLAIM_DETAIL = 'ClaimDetail',
  CLAIM_DIAGNOSIS = 'ClaimDiagnosis',
  CLAIM_INSURANCE = 'ClaimInsurance',
  CLAIM_ITEM = 'ClaimItem',
  CLAIM_PAYEE = 'ClaimPayee',
  CLAIM_PROCEDURE = 'ClaimProcedure',
  CLAIM_RELATED = 'ClaimRelated',
  CLAIM_RESPONSE_ADD_ITEM = 'ClaimResponseAddItem',
  CLAIM_RESPONSE_ADD_ITEM_DETAIL = 'ClaimResponseAddItemDetail',
  CLAIM_RESPONSE_ADD_ITEM_SUB_DETAIL = 'ClaimResponseAddItemSubDetail',
  CLAIM_RESPONSE_ADJUDICATION = 'ClaimResponseAdjudication',
  CLAIM_RESPONSE_DETAIL = 'ClaimResponseDetail',
  CLAIM_RESPONSE_ERROR = 'ClaimResponseError',
  CLAIM_RESPONSE_INSURANCE = 'ClaimResponseInsurance',
  CLAIM_RESPONSE_ITEM = 'ClaimResponseItem',
  CLAIM_RESPONSE_PAYMENT = 'ClaimResponsePayment',
  CLAIM_RESPONSE_PROCESS_NOTE = 'ClaimResponseProcessNote',
  CLAIM_RESPONSE_SUB_DETAIL = 'ClaimResponseSubDetail',
  CLAIM_RESPONSE_TOTAL = 'ClaimResponseTotal',
  CLAIM_SUB_DETAIL = 'ClaimSubDetail',
  CLAIM_SUPPORTING_INFO = 'ClaimSupportingInfo',
  CLINICAL_IMPRESSION_FINDING = 'ClinicalImpressionFinding',
  CLINICAL_IMPRESSION_INVESTIGATION = 'ClinicalImpressionInvestigation',
  COMPOSITION_ATTESTER = 'CompositionAttester',
  COMPOSITION_EVENT = 'CompositionEvent',
  COMPOSITION_RELATES_TO = 'CompositionRelatesTo',
  COMPOSITION_SECTION = 'CompositionSection',
  CONDITION_EVIDENCE = 'ConditionEvidence',
  CONDITION_STAGE = 'ConditionStage',
  CONTRACT_ACTION = 'ContractAction',
  CONTRACT_ANSWER = 'ContractAnswer',
  CONTRACT_ASSET = 'ContractAsset',
  CONTRACT_CONTENT_DEFINITION = 'ContractContentDefinition',
  CONTRACT_CONTEXT = 'ContractContext',
  CONTRACT_FRIENDLY = 'ContractFriendly',
  CONTRACT_LEGAL = 'ContractLegal',
  CONTRACT_OFFER = 'ContractOffer',
  CONTRACT_PARTY = 'ContractParty',
  CONTRACT_RULE = 'ContractRule',
  CONTRACT_SECURITY_LABEL = 'ContractSecurityLabel',
  CONTRACT_SIGNER = 'ContractSigner',
  CONTRACT_SUBJECT = 'ContractSubject',
  CONTRACT_TERM = 'ContractTerm',
  CONTRACT_VALUED_ITEM = 'ContractValuedItem',
  COVERAGE_CLASS = 'CoverageClass',
  COVERAGE_COST_TO_BENEFICIARY = 'CoverageCostToBeneficiary',
  COVERAGE_ELIGIBILITY_REQUEST_DIAGNOSIS = 'CoverageEligibilityRequestDiagnosis',
  COVERAGE_ELIGIBILITY_REQUEST_SUPPORTING_INFO = 'CoverageEligibilityRequestSupportingInfo',
  COVERAGE_ELIGIBILITY_REQUEST_INSURANCE = 'CoverageEligibilityRequestInsurance',
  COVERAGE_ELIGIBILITY_REQUEST_ITEM = 'CoverageEligibilityRequestItem',
  COVERAGE_ELIGIBILITY_RESPONSE_BENEFIT = 'CoverageEligibilityResponseBenefit',
  COVERAGE_ELIGIBILITY_RESPONSE_ERROR = 'CoverageEligibilityResponseError',
  COVERAGE_ELIGIBILITY_RESPONSE_INSURANCE = 'CoverageEligibilityResponseInsurance',
  COVERAGE_ELIGIBILITY_RESPONSE_ITEM = 'CoverageEligibilityResponseItem',
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
  DOSAGE = 'Dosage',
  ENCOUNTER_CLASS_HISTORY = 'EncounterClassHistory',
  ENCOUNTER_DIAGNOSIS = 'EncounterDiagnosis',
  ENCOUNTER_HOSPITALIZATION = 'EncounterHospitalization',
  ENCOUNTER_LOCATION = 'EncounterLocation',
  ENCOUNTER_PARTICIPANT = 'EncounterParticipant',
  ENCOUNTER_STATUS_HISTORY = 'EncounterStatusHistory',
  EPISODE_OF_CARE_DIAGNOSIS = 'EpisodeOfCareDiagnosis',
  EPISODE_OF_CARE_STATUS_HISTORY = 'EpisodeOfCareStatusHistory',
  EXPLANATION_OF_BENEFIT_ACCIDENT = 'ExplanationOfBenefitAccident',
  EXPLANATION_OF_BENEFIT_ADD_ITEM = 'ExplanationOfBenefitAddItem',
  EXPLANATION_OF_BENEFIT_ADD_ITEM_DETAIL = 'ExplanationOfBenefitAddItemDetail',
  EXPLANATION_OF_BENEFIT_ADD_ITEM_SUB_DETAIL = 'ExplanationOfBenefitAddItemSubDetail',
  EXPLANATION_OF_BENEFIT_ADJUDICATION = 'ExplanationOfBenefitAdjudication',
  EXPLANATION_OF_BENEFIT_BENEFIT_BALANCE = 'ExplanationOfBenefitBenefitBalance',
  EXPLANATION_OF_BENEFIT_CARE_TEAM = 'ExplanationOfBenefitCareTeam',
  EXPLANATION_OF_BENEFIT_DETAIL = 'ExplanationOfBenefitDetail',
  EXPLANATION_OF_BENEFIT_DIAGNOSIS = 'ExplanationOfBenefitDiagnosis',
  EXPLANATION_OF_BENEFIT_FINANCIAL = 'ExplanationOfBenefitFinancial',
  EXPLANATION_OF_BENEFIT_INSURANCE = 'ExplanationOfBenefitInsurance',
  EXPLANATION_OF_BENEFIT_ITEM = 'ExplanationOfBenefitItem',
  EXPLANATION_OF_BENEFIT_PAYEE = 'ExplanationOfBenefitPayee',
  EXPLANATION_OF_BENEFIT_PAYMENT = 'ExplanationOfBenefitPayment',
  EXPLANATION_OF_BENEFIT_PROCEDURE = 'ExplanationOfBenefitProcedure',
  EXPLANATION_OF_BENEFIT_PROCESS_NOTE = 'ExplanationOfBenefitProcessNote',
  EXPLANATION_OF_BENEFIT_RELATED = 'ExplanationOfBenefitRelated',
  EXPLANATION_OF_BENEFIT_SUB_DETAIL = 'ExplanationOfBenefitSubDetail',
  EXPLANATION_OF_BENEFIT_SUPPORTING_INFO = 'ExplanationOfBenefitSupportingInfo',
  EXPLANATION_OF_BENEFIT_TOTAL = 'ExplanationOfBenefitTotal',
  FAMILY_MEMBER_HISTORY_CONDITION = 'FamilyMemberHistoryCondition',
  GOAL_TARGET = 'GoalTarget',
  GROUP_CHARACTERISTIC = 'GroupCharacteristic',
  GROUP_MEMBER = 'GroupMember',
  HEALTHCARE_SERVICE_AVAILABLE_TIME = 'HealthcareServiceAvailableTime',
  HEALTHCARE_SERVICE_ELIGIBILITY = 'HealthcareServiceEligibility',
  HEALTHCARE_SERVICE_NOT_AVAILABLE = 'HealthcareServiceNotAvailable',
  IMMUNIZATION_EDUCATION = 'ImmunizationEducation',
  IMMUNIZATION_PERFORMER = 'ImmunizationPerformer',
  IMMUNIZATION_PROTOCOL_APPLIED = 'ImmunizationProtocolApplied',
  IMMUNIZATION_REACTION = 'ImmunizationReaction',
  IMMUNIZATION_RECOMMENDATION_DATE_CRITERION = 'ImmunizationRecommendationDateCriterion',
  IMMUNIZATION_RECOMMENDATION_RECOMMENDATION = 'ImmunizationRecommendationRecommendation',
  IMAGING_STUDY_INSTANCE = 'ImagingStudyInstance',
  IMAGING_STUDY_PERFORMER = 'ImagingStudyPerformer',
  IMAGING_STUDY_SERIES = 'ImagingStudySeries',
  LOCATION_POSITION = 'LocationPosition',
  MEDICATION_ADMINISTRATION_DOSAGE = 'MedicationAdministrationDosage',
  MEDICATION_ADMINISTRATION_PERFORMER = 'MedicationAdministrationPerformer',
  MEDICATION_BATCH = 'MedicationBatch',
  MEDICATION_DISPENSE_PERFORMER = 'MedicationDispensePerformer',
  MEDICATION_DISPENSE_SUBSTITUTION = 'MedicationDispenseSubstitution',
  MEDICATION_INGREDIENT = 'MedicationIngredient',
  MEDICATION_KNOWLEDGE_ADMINISTRATION_GUIDELINES = 'MedicationKnowledgeAdministrationGuidelines',
  MEDICATION_KNOWLEDGE_COST = 'MedicationKnowledgeCost',
  MEDICATION_KNOWLEDGE_DOSAGE = 'MedicationKnowledgeDosage',
  MEDICATION_KNOWLEDGE_DRUG_CHARACTERISTIC = 'MedicationKnowledgeDrugCharacteristic',
  MEDICATION_KNOWLEDGE_INGREDIENT = 'MedicationKnowledgeIngredient',
  MEDICATION_KNOWLEDGE_KINETICS = 'MedicationKnowledgeKinetics',
  MEDICATION_KNOWLEDGE_MAX_DISPENSE = 'MedicationKnowledgeMaxDispense',
  MEDICATION_KNOWLEDGE_MEDICINE_CLASSIFICATION = 'MedicationKnowledgeMedicineClassification',
  MEDICATION_KNOWLEDGE_MONITORING_PROGRAM = 'MedicationKnowledgeMonitoringProgram',
  MEDICATION_KNOWLEDGE_MONOGRAPH = 'MedicationKnowledgeMonograph',
  MEDICATION_KNOWLEDGE_PACKAGING = 'MedicationKnowledgePackaging',
  MEDICATION_KNOWLEDGE_PATIENT_CHARACTERISTICS = 'MedicationKnowledgePatientCharacteristics',
  MEDICATION_KNOWLEDGE_REGULATORY = 'MedicationKnowledgeRegulatory',
  MEDICATION_KNOWLEDGE_RELATED_MEDICATION_KNOWLEDGE = 'MedicationKnowledgeRelatedMedicationKnowledge',
  MEDICATION_KNOWLEDGE_SCHEDULE = 'MedicationKnowledgeSchedule',
  MEDICATION_KNOWLEDGE_SUBSTITUTION = 'MedicationKnowledgeSubstitution',
  MEDICATION_REQUEST_DISPENSE_REQUEST = 'MedicationRequestDispenseRequest',
  MEDICATION_REQUEST_INITIAL_FILL = 'MedicationRequestInitialFill',
  MEDICATION_REQUEST_SUBSTITUTION = 'MedicationRequestSubstitution',
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
  PAYMENT_RECONCILIATION_DETAIL = 'PaymentReconciliationDetail',
  PAYMENT_RECONCILIATION_PROCESS_NOTE = 'PaymentReconciliationProcessNote',
  PERSON_LINK = 'PersonLink',
  PRACTITIONER_QUALIFICATION = 'PractitionerQualification',
  PRACTITIONER_ROLE_AVAILABLE_TIME = 'PractitionerRoleAvailableTime',
  PRACTITIONER_ROLE_NOT_AVAILABLE = 'PractitionerRoleNotAvailable',
  PROCEDURE_FOCAL_DEVICE = 'ProcedureFocalDevice',
  PROCEDURE_PERFORMER = 'ProcedurePerformer',
  QUESTIONNAIRE_ANSWER_OPTION = 'QuestionnaireAnswerOption',
  QUESTIONNAIRE_ENABLE_WHEN = 'QuestionnaireEnableWhen',
  QUESTIONNAIRE_INITIAL = 'QuestionnaireInitial',
  QUESTIONNAIRE_ITEM = 'QuestionnaireItem',
  QUESTIONNAIRE_RESPONSE_ANSWER = 'QuestionnaireResponseAnswer',
  QUESTIONNAIRE_RESPONSE_ITEM = 'QuestionnaireResponseItem',
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
  VISION_PRESCRIPTION_LENS_SPECIFICATION = 'VisionPrescriptionLensSpecification',
  VISION_PRESCRIPTION_PRISM = 'VisionPrescriptionPrism',
}
