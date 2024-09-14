/**
 * @name EventTiming
 * @description Real world event relating to the schedule.
 * @description MORN | MORN.early | MORN.late | NOON | AFT | AFT.early | AFT.late | EVE | EVE.early | EVE.late | NIGHT | PHS | HS | WAKE | C | CM | CD | CV | AC | ACM | ACD | ACV | PC | PCM | PCD | PCV
 * @see <a href="https://hl7.org/fhir/R4/valueset-event-timing.html">EventTiming</a>
 * @version R4
 * @author Roberto Araneda Espinoza
 */
export enum EventTimingEnum {
  MORNING = 'MORN',
  EARLY_MORNING = 'MORN.early',
  LATE_MORNING = 'MORN.late',
  NOON = 'NOON',
  AFTERNOON = 'AFT',
  EARLY_AFTERNOON = 'AFT.early',
  LATE_AFTERNOON = 'AFT.late',
  EVENING = 'EVE',
  EARLY_EVENING = 'EVE.early',
  LATE_EVENING = 'EVE.late',
  NIGHT = 'NIGHT',
  AFTER_SLEEP = 'PHS',
  HS = 'HS',
  WAKE = 'WAKE',
  C = 'C',
  CM = 'CM',
  CD = 'CD',
  CV = 'CV',
  AC = 'AC',
  ACM = 'ACM',
  ACD = 'ACD',
  ACV = 'ACV',
  PC = 'PC',
  PCM = 'PCM',
  PCD = 'PCD',
  PCV = 'PCV',
}
