import { IAccountCoverage } from '../IAccountCoverage';
import { IReference } from '../../datatypes';
import { IElement } from '../../base';

describe('IAccountCoverage', () => {
  it('should have a coverage property of type IReference', () => {
    const coverage: IReference = { reference: 'Coverage/123' };
    const accountCoverage: IAccountCoverage = { coverage };
    expect(accountCoverage.coverage).toBe(coverage);
  });

  it('should have an optional priority property of type number', () => {
    const accountCoverage: IAccountCoverage = { coverage: { reference: 'Coverage/123' }, priority: 1 };
    expect(accountCoverage.priority).toBe(1);
  });

  it('should allow priority property to be undefined', () => {
    const accountCoverage: IAccountCoverage = { coverage: { reference: 'Coverage/123' } };
    expect(accountCoverage.priority).toBeUndefined();
  });

  it('should have an optional _priority property of type IElement', () => {
    const _priority: IElement = { id: 'priority-element' };
    const accountCoverage: IAccountCoverage = { coverage: { reference: 'Coverage/123' }, _priority };
    expect(accountCoverage._priority).toBe(_priority);
  });

  it('should allow _priority property to be undefined', () => {
    const accountCoverage: IAccountCoverage = { coverage: { reference: 'Coverage/123' } };
    expect(accountCoverage._priority).toBeUndefined();
  });
});
