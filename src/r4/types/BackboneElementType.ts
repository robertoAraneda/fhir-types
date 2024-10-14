/**
 * @name BackboneElement
 * @version R4
 * @author Claudia Alarcón Lazo
 */
export type BackboneElementType =
  | 'AccountCoverage'
  | 'AccountGuarantor'
  | 'AdverseEventCausality'
  | 'AdverseEventSuspectEntity'
  | 'AllergyIntoleranceReaction'
  | 'AppointmentParticipant'
  | 'AuditEventAgent'
  | 'AuditEventAgentNetwork'
  | 'AuditEventEntity'
  | 'AuditEventEntityDetail'
  | 'AuditEventSource'
  | 'BundleEntry'
  | 'BundleLink'
  | 'BundleRequest'
  | 'BundleResponse'
  | 'BundleSearch'
  | 'CarePlanActivity'
  | 'CarePlanActivityDetail'
  | 'CareTeamParticipant'
  | 'ClinicalImpressionFinding'
  | 'ClinicalImpressionInvestigation'
  | 'CompositionAttester'
  | 'CompositionEvent'
  | 'CompositionRelatesTo'
  | 'CompositionSection'
  | 'ConditionEvidence'
  | 'ConditionStage'
  | 'ContractAction'
  | 'ContractAnswer'
  | 'ContractAsset'
  | 'ContractContentDefinition'
  | 'ContractContext'
  | 'ContractFriendly'
  | 'ContractLegal'
  | 'ContractOffer'
  | 'ContractParty'
  | 'ContractRule'
  | 'ContractSecurityLabel'
  | 'ContractSigner'
  | 'ContractSubject'
  | 'ContractTerm'
  | 'ContractValuedItem'
  | 'CoverageClass'
  | 'CoverageCostToBeneficiary'
  | 'CoverageException'
  | 'DetectedIssueEvidence'
  | 'DetectedIssueMitigation'
  | 'DeviceDefinitionCapability'
  | 'DeviceDefinitionDeviceName'
  | 'DeviceDefinitionMaterial'
  | 'DeviceDefinitionProperty'
  | 'DeviceDefinitionSpecialization'
  | 'DeviceDefinitionUdiDeviceIdentifier'
  | 'DeviceDeviceName'
  | 'DeviceMetricCalibration'
  | 'DeviceProperty'
  | 'DeviceSpecialization'
  | 'DeviceUdiCarrier'
  | 'DeviceVersion'
  | 'DiagnosticReportMedia'
  | 'Dosage'
  | 'EncounterClassHistory'
  | 'EncounterDiagnosis'
  | 'EncounterHospitalization'
  | 'EncounterLocation'
  | 'EncounterParticipant'
  | 'EncounterStatusHistory'
  | 'EpisodeOfCareDiagnosis'
  | 'EpisodeOfCareStatusHistory'
  | 'FamilyMemberHistoryCondition'
  | 'GoalTarget'
  | 'GroupCharacteristic'
  | 'GroupMember'
  | 'HealthcareServiceAvailableTime'
  | 'HealthcareServiceEligibility'
  | 'HealthcareServiceNotAvailable'
  | 'ImagingStudyInstance'
  | 'ImagingStudyPerformer'
  | 'ImagingStudySeries'
  | 'ImmunizationEducation'
  | 'ImmunizationPerformer'
  | 'ImmunizationProtocolApplied'
  | 'ImmunizationReaction'
  | 'ImmunizationRecommendationDateCriterion'
  | 'ImmunizationRecommendationRecommendation'
  | 'LocationHoursOfOperation'
  | 'LocationPosition'
  | 'MedicationAdministrationDosage'
  | 'MedicationAdministrationPerformer'
  | 'MedicationBatch'
  | 'MedicationDispensePerformer'
  | 'MedicationDispenseSubstitution'
  | 'MedicationIngredient'
  | 'MedicationKnowledgeAdministrationGuidelines'
  | 'MedicationKnowledgeCost'
  | 'MedicationKnowledgeDosage'
  | 'MedicationKnowledgeDrugCharacteristic'
  | 'MedicationKnowledgeIngredient'
  | 'MedicationKnowledgeKinetics'
  | 'MedicationKnowledgeMaxDispense'
  | 'MedicationKnowledgeMedicineClassification'
  | 'MedicationKnowledgeMonitoringProgram'
  | 'MedicationKnowledgeMonograph'
  | 'MedicationKnowledgePackaging'
  | 'MedicationKnowledgePatientCharacteristics'
  | 'MedicationKnowledgeRegulatory'
  | 'MedicationKnowledgeRelatedMedicationKnowledge'
  | 'MedicationKnowledgeSchedule'
  | 'MedicationKnowledgeSubstitution'
  | 'MedicationRequestDispenseRequest'
  | 'MedicationRequestInitialFill'
  | 'MedicationRequestSubstitution'
  | 'MolecularSequenceInner'
  | 'MolecularSequenceOuter'
  | 'MolecularSequenceQuality'
  | 'MolecularSequenceReferenceSeq'
  | 'MolecularSequenceRepository'
  | 'MolecularSequenceRoc'
  | 'MolecularSequenceStructureVariant'
  | 'MolecularSequenceVariant'
  | 'ObservationComponent'
  | 'ObservationReferenceRange'
  | 'OperationOutcomeIssue'
  | 'OrganizationContact'
  | 'PatientCommunication'
  | 'PatientContact'
  | 'PatientLink'
  | 'PersonLink'
  | 'PractitionerQualification'
  | 'PractitionerRoleAvailableTime'
  | 'PractitionerRoleNotAvailable'
  | 'ProcedureFocalDevice'
  | 'ProcedurePerformer'
  | 'QuestionnaireAnswerOption'
  | 'QuestionnaireEnableWhen'
  | 'QuestionnaireInitial'
  | 'QuestionnaireItem'
  | 'QuestionnaireResponseAnswer'
  | 'QuestionnaireResponseItem'
  | 'RelatedPersonCommunication'
  | 'RiskAssessmentPrediction'
  | 'SpecimenCollection'
  | 'SpecimenContainer'
  | 'SpecimenProcessing'
  | 'SubstanceIngredient'
  | 'SubstanceInstance'
  | 'TaskInput'
  | 'TaskOutput'
  | 'TaskRestriction'
  | 'Timing';
