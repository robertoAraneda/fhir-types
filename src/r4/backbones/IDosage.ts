import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept, IDoseAndRate, IQuantity, IRatio } from '../datatypes';
import { ITiming } from './ITiming';

/**
 * @name IDosage
 * @description Indicates how the medication is/was taken or should be taken by the patient.
 * @see <a href="https://hl7.org/fhir/R4/dosage.html#Dosage">Dosage</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IDosage extends IBackboneElement {
  /**
   * @description Indicates the order in which the dosage instructions should be applied or interpreted.
   */
  sequence?: number;

  /**
   * @description Extensions for sequence
   */
  _sequence?: IElement;

  /**
   * @description Free text dosage instructions e.g. SIG.
   */
  text?: string;

  /**
   * @description Extensions for text
   */
  _text?: IElement;

  /**
   * @description Supplemental instructions to the patient on how to take the medication (e.g. "with meals" or"take half to one hour before food") or warnings for the patient about the medication (e.g. "may cause drowsiness" or "avoid exposure of skin to direct sunlight or sunlamps").
   */
  additionalInstruction?: ICodeableConcept[];

  /**
   * @description Instructions in terms that are understood by the patient or consumer.
   */
  patientInstruction?: string;

  /**
   * @description Extensions for patientInstruction
   */
  _patientInstruction?: IElement;

  /**
   * @description When medication should be administered.
   */
  timing?: ITiming;

  /**
   * @description Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept).
   */
  asNeededBoolean?: boolean;

  /**
   * @description Extensions for asNeededBoolean
   */
  _asNeededBoolean?: IElement;

  /**
   * @description Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept).
   */
  asNeededCodeableConcept?: ICodeableConcept;

  /**
   * @description Body site to administer to.
   */
  site?: ICodeableConcept;

  /**
   * @description How drug should enter body.
   */
  route?: ICodeableConcept;

  /**
   * @description Technique for administering medication.
   */
  method?: ICodeableConcept;

  /**
   * @description The amount of medication administered.
   */
  doseAndRate?: IDoseAndRate[];

  /**
   * @description Upper limit on medication per unit of time.
   */
  maxDosePerPeriod?: IRatio;

  /**
   * @description Upper limit on medication per administration.
   */
  maxDosePerAdministration?: IQuantity;

  /**
   * @description Upper limit on medication per lifetime of the patient.
   */
  maxDosePerLifetime?: IQuantity;
}
