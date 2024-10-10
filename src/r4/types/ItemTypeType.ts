/**
 * @name ItemType
 * @description Distinguishes groups from questions and display text and indicates data type for questions.
 * @description group | display | question | boolean | decimal | integer | date | dateTime | time | string | text | url | choice | open-choice | attachment | reference | quantity
 * @see <a href="https://hl7.org/fhir/R4/valueset-item-type.html">ItemType</a>
 * @version R4
 * @author Claudia Alarcón Lazo
 */
export type ItemTypeType =
  | 'group'
  | 'display'
  | 'question'
  | 'boolean'
  | 'decimal'
  | 'integer'
  | 'date'
  | 'dateTime'
  | 'time'
  | 'string'
  | 'text'
  | 'url'
  | 'choice'
  | 'open-choice'
  | 'attachment'
  | 'reference'
  | 'quantity';
