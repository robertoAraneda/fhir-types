/**
 * @name BundleType
 * @description Indicates the purpose of this bundle - how it is intended to be used.
 * @description document | message | transaction | transaction-response | batch | batch-response | history | searchset | collection.
 * @see <a href="https://hl7.org/fhir/R4/valueset-bundle-type.html">BundleType</a>
 * @version R4
 * @author Roberto Araneda Espinoza
 */
export enum BundleTypeEnum {
  DOCUMENT = 'document',
  MESSAGE = 'message',
  TRANSACTION = 'transaction',
  TRANSACTION_RESPONSE = 'transaction-response',
  BATCH = 'batch',
  BATCH_RESPONSE = 'batch-response',
  HISTORY = 'history',
  SEARCHSET = 'searchset',
  COLLECTION = 'collection',
}
