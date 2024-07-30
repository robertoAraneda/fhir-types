import { ICodeableConcept, IIdentifier, IPeriod, IReference } from '../datatypes';
import { IBackboneElement } from '../base';

/**
 * Qualifications, certifications, accreditations, licenses, training, etc. pertaining to the provision of care.
 * @property {ICodeableConcept} code
 * @property {IIdentifier[]} identifier
 * @property {IReference} issuer
 * @property {IPeriod} period
 * @see https://www.hl7.org/fhir/practitioner-definitions.html#Practitioner.qualification HL7.org/fhir/practitioner-definitions.html#Practitioner.qualification
 * @author Roberto Araneda
 */
export interface IPractitionerQualification extends IBackboneElement {
  /**
   * An identifier for this qualification for the organization
   */
  identifier?: IIdentifier[];

  /**
   * Coded representation of the qualification
   */
  code: ICodeableConcept;

  /**
   * Period during which the qualification is valid
   */
  period?: IPeriod;

  /**
   * Organization that regulates and issues the qualification
   */
  issuer?: IReference;
}
