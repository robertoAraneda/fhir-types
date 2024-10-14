/**
 * @name EligibilityrequestPurpose
 * @description A code specifying the types of information being requested.
 * @description auth-requirements | benefits | discovery | validation
 * @see <a href="https://hl7.org/fhir/R4/valueset-eligibilityrequest-purpose.html">EligibilityrequestPurpose</a>
 * @version R4
 * @author Claudia Alarcón Lazo
 */
export enum EligibilityrequestPurposeEnum {
  AUTH_REQUIREMENTS = 'auth-requirements',
  BENEFITS = 'benefits',
  DISCOVERY = 'discovery',
  VALIDATION = 'validation',
}
