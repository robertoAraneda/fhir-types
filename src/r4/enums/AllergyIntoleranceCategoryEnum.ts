/**
 * @name AllergyIntoleranceCategory
 * @description Category of an identified substance associated with allergies or intolerances.
 * @description food | medication | environment | biologic
 * @see <a href="https://hl7.org/fhir/R4/valueset-allergy-intolerance-category.html">AllergyIntoleranceCategory</a>
 * @version R4
 * @author Roberto Araneda Espinoza
 */
export enum AllergyIntoleranceCategoryEnum {
  FOOD = 'food',
  MEDICATION = 'medication',
  ENVIRONMENT = 'environment',
  BIOLOGIC = 'biologic',
}
