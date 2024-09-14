/**
 * @name EventTiming
 * @description Real world event relating to the schedule.
 * @description MORN | MORN.early | MORN.late | NOON | AFT | AFT.early | AFT.late | EVE | EVE.early | EVE.late | NIGHT | PHS | HS | WAKE | C | CM | CD | CV | AC | ACM | ACD | ACV | PC | PCM | PCD | PCV
 * @see <a href="https://hl7.org/fhir/R4/valueset-event-timing.html">EventTiming</a>
 * @version R4
 * @author Roberto Araneda Espinoza
 */
export type EventTimingType =
  | 'MORN'
  | 'MORN.early'
  | 'MORN.late'
  | 'NOON'
  | 'AFT'
  | 'AFT.early'
  | 'AFT.late'
  | 'EVE'
  | 'EVE.early'
  | 'EVE.late'
  | 'NIGHT'
  | 'PHS'
  | 'HS'
  | 'WAKE'
  | 'C'
  | 'CM'
  | 'CD'
  | 'CV'
  | 'AC'
  | 'ACM'
  | 'ACD'
  | 'ACV'
  | 'PC'
  | 'PCM'
  | 'PCD'
  | 'PCV';
