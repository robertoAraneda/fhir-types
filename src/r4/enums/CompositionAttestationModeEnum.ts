/**
 * @name CompositionAttestationMode
 * @description The way in which a person authenticated a composition.
 * @description personal | professional | legal | official
 * @see <a href="https://hl7.org/fhir/R4/valueset-composition-attestation-mode.html">CompositionAttestationMode</a>
 * @version R4
 * @author Roberto Araneda Espinoza
 */
export enum CompositionAttestationModeEnum {
  PERSONAL = 'personal',
  PROFESSIONAL = 'professional',
  LEGAL = 'legal',
  OFFICIAL = 'official',
}
