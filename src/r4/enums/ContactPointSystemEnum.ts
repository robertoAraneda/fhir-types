/**
 * @name ContactPointSystem
 * @description Telecommunications form for contact point.
 * @description phone | fax | email | pager | url | sms | other
 * @see <a href="https://hl7.org/fhir/R4/valueset-contact-point-system.html">ContactPointSystem</a>
 * @version R4
 * @author Roberto Araneda Espinoza
 */
export enum ContactPointSystemEnum {
  PHONE = 'phone',
  FAX = 'fax',
  EMAIL = 'email',
  PAGER = 'pager',
  URL = 'url',
  SMS = 'sms',
  OTHER = 'other',
}
