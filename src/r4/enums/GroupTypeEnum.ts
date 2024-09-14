/**
 * @name GroupType
 * @description Types of resources that are part of group.
 * @description person | animal | practitioner | device | medication | substance
 * @see <a href="https://hl7.org/fhir/R4/valueset-group-type.html">GroupType</a>
 * @version R4
 * @author Roberto Araneda Espinoza
 */
export enum GroupTypeEnum {
  PERSON = 'person',
  ANIMAL = 'animal',
  PRACTITIONER = 'practitioner',
  DEVICE = 'device',
  MEDICATION = 'medication',
  SUBSTANCE = 'substance',
}
