import { IElement } from '../base';

/**
 * @summary FHIR R4
 * @property {string} contentType - Mime type of the content, with charset etc.
 * @property {string} language - Human language of the content (BCP-47)
 * @property {string} data - Data inline, base64ed
 * @property {string} url - Uri where the data can be found
 * @property {number} size - Number of bytes of content (if url provided)
 * @property {string} hash - Hash of the data (sha-1, base64ed)
 * @property {string} title - Label to display in place of the data
 * @property {string} creation - Date attachment was first created
 * @property {IElement} _contentType - Extensions for contentType
 * @property {IElement} _language - Extensions for language
 * @property {IElement} _data - Extensions for data
 * @property {IElement} _url - Extensions for url
 * @property {IElement} _size - Extensions for size
 * @property {IElement} _hash - Extensions for hash
 * @property {IElement} _title - Extensions for title
 * @property {IElement} _creation - Extensions for creation
 * @see http://hl7.org/fhir/R4/datatypes.html#Attachment http://hl7.org/fhir/R4/datatypes.html#Attachment
 * @description This type is for containing or referencing attachments - additional data content defined in other formats. The most common use of this type is to include images or reports in some report format such as PDF. However, it can be used for any data that has a MIME type.
 * @author Roberto Araneda
 */
export interface IAttachment extends IElement {
  contentType?: string;
  language?: string;
  data?: string;
  url?: string;
  size?: number;
  hash?: string;
  title?: string;
  /**
   * @description Date attachment was first created
   * @description The format is YYYY, YYYY-MM, YYYY-MM-DD or YYYY-MM-DDThh:mm:ss+zz:zz
   * @example e.g. 2018, 1973-06, 1905-08-23, 2015-02-07T13:28:17-05:00 or 2017-01-01T00:00:00.000Z
   * @see https://hl7.org/fhir/datatypes.html#Attachment
   */
  creation?: string;
  _contentType?: IElement;
  _language?: IElement;
  _data?: IElement;
  _url?: IElement;
  _size?: IElement;
  _hash?: IElement;
  _title?: IElement;
  _creation?: IElement;
}
