/**
 * @name ItemType
 * @description Distinguishes groups from questions and display text and indicates data type for questions.
 * @description group | display | question | boolean | decimal | integer | date | dateTime | time | string | text | url | choice | open-choice | attachment | reference | quantity
 * @see <a href="https://hl7.org/fhir/R4/valueset-item-type.html">ItemType</a>
 * @version R4
 * @author Claudia Alarcón Lazo
 */
export enum ItemTypeEnum {
  GROUP = 'group',
  DISPLAY = 'display',
  QUESTION = 'question',
  BOOLEAN = 'boolean',
  DECIMAL = 'decimal',
  INTEGER = 'integer',
  DATE = 'date',
  DATE_TIME = 'dateTime',
  TIME = 'time',
  STRING = 'string',
  TEXT = 'text',
  URL = 'url',
  CHOICE = 'choice',
  OPEN_CHOICE = 'open-choice',
  ATTACHMENT = 'attachment',
  REFERENCE = 'reference',
  QUANTITY = 'quantity',
}
