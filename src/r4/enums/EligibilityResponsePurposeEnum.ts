/**
 * @name EligibilityResponsePurpose
 * @description A code specifying the types of information being requested.
 * @description auth-requirements | benefits | discovery | validation
 * @see <a href="https://hl7.org/fhir/R4/valueset-eligibilityresponse-purpose.html">EligibilityResponsePurpose</a>
 * @version R4
 * @author Claudia Alarcón Lazo
 */
export enum EligibilityResponsePurposeEnum {
  AUTH_REQUIREMENTS = 'auth-requirements',
  BENEFITS = 'benefits',
  DISCOVERY = 'discovery',
  VALIDATION = 'validation',
}
