/**
 * @name SearchEntryMode
 * @description Why an entry is in the result set - whether it's included as a match or because of an _include requirement, or to convey information or warning information about the search process.
 * @description match | include | outcome
 * @see <a href="https://hl7.org/fhir/R4/valueset-search-entry-mode.html">SearchEntryMode</a>
 * @version R4
 * @author Claudia Alarcón Lazo
 */
export type SearchEntryModeType = 'match' | 'include' | 'outcome';
