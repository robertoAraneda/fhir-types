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
  | 'ClaimAccident'
  | 'ClaimCareTeam'
  | 'ClaimDetail'
  | 'ClaimDiagnosis'
  | 'ClaimInsurance'
  | 'ClaimItem'
  | 'ClaimPayee'
  | 'ClaimProcedure'
  | 'ClaimRelated'
  | 'ClaimResponseAddItem'
  | 'ClaimResponseAddItemDetail'
  | 'ClaimResponseAddItemSubDetail'
  | 'ClaimResponseAdjudication'
  | 'ClaimResponseDetail'
  | 'ClaimResponseError'
  | 'ClaimResponseInsurance'
  | 'ClaimResponseItem'
  | 'ClaimResponsePayment'
  | 'ClaimResponseProcessNote'
  | 'ClaimResponseSubDetail'
  | 'ClaimResponseTotal'
  | 'ClaimSubDetail'
  | 'ClaimSupportingInfo'
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
  | 'CoverageEligibilityRequestDiagnosis'
  | 'CoverageEligibilityRequestSupportingInfo'
  | 'CoverageEligibilityRequestInsurance'
  | 'CoverageEligibilityRequestItem'
  | 'CoverageEligibilityResponseBenefit'
  | 'CoverageEligibilityResponseError'
  | 'CoverageEligibilityResponseInsurance'
  | 'CoverageEligibilityResponseItem'
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
  | 'ExplanationOfBenefitAccident'
  | 'ExplanationOfBenefitAddItem'
  | 'ExplanationOfBenefitAddItemDetail'
  | 'ExplanationOfBenefitAddItemSubDetail'
  | 'ExplanationOfBenefitAdjudication'
  | 'ExplanationOfBenefitBenefitBalance'
  | 'ExplanationOfBenefitCareTeam'
  | 'ExplanationOfBenefitDetail'
  | 'ExplanationOfBenefitDiagnosis'
  | 'ExplanationOfBenefitFinancial'
  | 'ExplanationOfBenefitInsurance'
  | 'ExplanationOfBenefitItem'
  | 'ExplanationOfBenefitPayee'
  | 'ExplanationOfBenefitPayment'
  | 'ExplanationOfBenefitProcedure'
  | 'ExplanationOfBenefitProcessNote'
  | 'ExplanationOfBenefitRelated'
  | 'ExplanationOfBenefitSubDetail'
  | 'ExplanationOfBenefitSupportingInfo'
  | 'ExplanationOfBenefitTotal'
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
  | 'PaymentReconciliationDetail'
  | 'PaymentReconciliationProcessNote'
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
  | 'Timing'
  | 'VisionPrescriptionLensSpecification'
  | 'VisionPrescriptionPrism';
