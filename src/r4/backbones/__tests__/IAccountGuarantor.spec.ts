import { IAccountGuarantor } from '../IAccountGuarantor';
import { IReference, IPeriod } from '../../datatypes';
import { IElement } from '../../base';

describe('IAccountGuarantor', () => {
  it('should have a party property of type IReference', () => {
    const party: IReference = { reference: 'Party/123' };
    const accountGuarantor: IAccountGuarantor = { party };
    expect(accountGuarantor.party).toBe(party);
  });

  it('should have an optional onHold property of type boolean', () => {
    const accountGuarantor: IAccountGuarantor = { party: { reference: 'Party/123' }, onHold: true };
    expect(accountGuarantor.onHold).toBe(true);
  });

  it('should allow onHold property to be undefined', () => {
    const accountGuarantor: IAccountGuarantor = { party: { reference: 'Party/123' } };
    expect(accountGuarantor.onHold).toBeUndefined();
  });

  it('should have an optional period property of type IPeriod', () => {
    const period: IPeriod = { start: '2021-01-01', end: '2021-12-31' };
    const accountGuarantor: IAccountGuarantor = { party: { reference: 'Party/123' }, period };
    expect(accountGuarantor.period).toBe(period);
  });

  it('should allow period property to be undefined', () => {
    const accountGuarantor: IAccountGuarantor = { party: { reference: 'Party/123' } };
    expect(accountGuarantor.period).toBeUndefined();
  });

  it('should have an optional _onHold property of type IElement', () => {
    const _onHold: IElement = { id: 'onHold-element' };
    const accountGuarantor: IAccountGuarantor = { party: { reference: 'Party/123' }, _onHold };
    expect(accountGuarantor._onHold).toBe(_onHold);
  });

  it('should allow _onHold property to be undefined', () => {
    const accountGuarantor: IAccountGuarantor = { party: { reference: 'Party/123' } };
    expect(accountGuarantor._onHold).toBeUndefined();
  });
});
