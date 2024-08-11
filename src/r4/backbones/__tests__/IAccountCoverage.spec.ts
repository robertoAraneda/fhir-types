import { IAccountCoverage } from '../IAccountCoverage';
import { IReference } from '../../datatypes';
import { IElement } from '../../base';

function processAccountCoverage(accountCoverage: IAccountCoverage) {
  return accountCoverage;
}

describe('processAccountCoverage', () => {
  it('should return an object with a coverage property of type IReference', () => {
    const coverage: IReference = { reference: 'Coverage/123' };
    const accountCoverage: IAccountCoverage = { coverage };

    const result = processAccountCoverage(accountCoverage);
    expect(result.coverage).toBe(coverage);
  });

  it('should return an object with an optional priority property of type number', () => {
    const accountCoverage: IAccountCoverage = { coverage: { reference: 'Coverage/123' }, priority: 1 };

    const result = processAccountCoverage(accountCoverage);
    expect(result.priority).toBe(1);
  });

  it('should return an object allowing priority property to be undefined', () => {
    const accountCoverage: IAccountCoverage = { coverage: { reference: 'Coverage/123' } };

    const result = processAccountCoverage(accountCoverage);
    expect(result.priority).toBeUndefined();
  });

  it('should return an object with an optional _priority property of type IElement', () => {
    const _priority: IElement = { id: 'priority-element' };
    const accountCoverage: IAccountCoverage = { coverage: { reference: 'Coverage/123' }, _priority };

    const result = processAccountCoverage(accountCoverage);
    expect(result._priority).toBe(_priority);
  });

  it('should return an object allowing _priority property to be undefined', () => {
    const accountCoverage: IAccountCoverage = { coverage: { reference: 'Coverage/123' } };

    const result = processAccountCoverage(accountCoverage);
    expect(result._priority).toBeUndefined();
  });
});
