import { IAuditEventAgent } from '../IAuditEventAgent';
import { ICodeableConcept, ICoding, IReference } from '../../datatypes';
import { IAuditEventAgentNetwork } from '../IAuditEventAgentNetwork';
import { IElement } from '../../base';
import { AuditEventAgentNetworkTypeEnum } from '../../enums';

describe('IAuditEventAgent', () => {
  it('should have an optional type property of type ICodeableConcept', () => {
    const type: ICodeableConcept = { coding: [{ system: 'system', code: 'code' }] };
    const agent: IAuditEventAgent = { requestor: true, type };
    expect(agent.type).toBe(type);
  });

  it('should allow type property to be undefined', () => {
    const agent: IAuditEventAgent = { requestor: true };
    expect(agent.type).toBeUndefined();
  });

  it('should have an optional role property of type ICodeableConcept array', () => {
    const role: ICodeableConcept[] = [{ coding: [{ system: 'system', code: 'code' }] }];
    const agent: IAuditEventAgent = { requestor: true, role };
    expect(agent.role).toBe(role);
  });

  it('should allow role property to be undefined', () => {
    const agent: IAuditEventAgent = { requestor: true };
    expect(agent.role).toBeUndefined();
  });

  it('should have an optional who property of type IReference', () => {
    const who: IReference = { reference: 'Reference/123' };
    const agent: IAuditEventAgent = { requestor: true, who };
    expect(agent.who).toBe(who);
  });

  it('should allow who property to be undefined', () => {
    const agent: IAuditEventAgent = { requestor: true };
    expect(agent.who).toBeUndefined();
  });

  it('should have a requestor property of type boolean', () => {
    const agent: IAuditEventAgent = { requestor: true };
    expect(agent.requestor).toBe(true);
  });

  it('should have an optional location property of type IReference', () => {
    const location: IReference = { reference: 'Location/123' };
    const agent: IAuditEventAgent = { requestor: true, location };
    expect(agent.location).toBe(location);
  });

  it('should allow location property to be undefined', () => {
    const agent: IAuditEventAgent = { requestor: true };
    expect(agent.location).toBeUndefined();
  });

  it('should have an optional policy property of type string array', () => {
    const policy: string[] = ['policy1', 'policy2'];
    const agent: IAuditEventAgent = { requestor: true, policy };
    expect(agent.policy).toBe(policy);
  });

  it('should allow policy property to be undefined', () => {
    const agent: IAuditEventAgent = { requestor: true };
    expect(agent.policy).toBeUndefined();
  });

  it('should have an optional media property of type ICoding', () => {
    const media: ICoding = { system: 'system', code: 'code' };
    const agent: IAuditEventAgent = { requestor: true, media };
    expect(agent.media).toBe(media);
  });

  it('should allow media property to be undefined', () => {
    const agent: IAuditEventAgent = { requestor: true };
    expect(agent.media).toBeUndefined();
  });

  it('should have an optional network property of type IAuditEventAgentNetwork', () => {
    const network: IAuditEventAgentNetwork = { address: 'address', type: '3' };
    const agent: IAuditEventAgent = { requestor: true, network };
    expect(agent.network).toBe(network);
  });

  it('should allow network property to be undefined', () => {
    const agent: IAuditEventAgent = { requestor: true };
    expect(agent.network).toBeUndefined();
  });

  it('should have an optional purposeOfUse property of type ICodeableConcept array', () => {
    const purposeOfUse: ICodeableConcept[] = [{ coding: [{ system: 'system', code: 'code' }] }];
    const agent: IAuditEventAgent = { requestor: true, purposeOfUse };
    expect(agent.purposeOfUse).toBe(purposeOfUse);
  });

  it('should allow purposeOfUse property to be undefined', () => {
    const agent: IAuditEventAgent = { requestor: true };
    expect(agent.purposeOfUse).toBeUndefined();
  });

  it('should have an optional _altId property of type IElement', () => {
    const _altId: IElement = { id: 'altId-element' };
    const agent: IAuditEventAgent = { requestor: true, _altId };
    expect(agent._altId).toBe(_altId);
  });

  it('should allow _altId property to be undefined', () => {
    const agent: IAuditEventAgent = { requestor: true };
    expect(agent._altId).toBeUndefined();
  });

  it('should have an optional _name property of type IElement', () => {
    const _name: IElement = { id: 'name-element' };
    const agent: IAuditEventAgent = { requestor: true, _name };
    expect(agent._name).toBe(_name);
  });

  it('should allow _name property to be undefined', () => {
    const agent: IAuditEventAgent = { requestor: true };
    expect(agent._name).toBeUndefined();
  });

  it('should have an optional _requestor property of type IElement', () => {
    const _requestor: IElement = { id: 'requestor-element' };
    const agent: IAuditEventAgent = { requestor: true, _requestor };
    expect(agent._requestor).toBe(_requestor);
  });

  it('should allow _requestor property to be undefined', () => {
    const agent: IAuditEventAgent = { requestor: true };
    expect(agent._requestor).toBeUndefined();
  });

  it('should have an optional _policy property of type IElement array', () => {
    const _policy: IElement[] = [{ id: 'policy-element' }];
    const agent: IAuditEventAgent = { requestor: true, _policy };
    expect(agent._policy).toBe(_policy);
  });

  it('should allow _policy property to be undefined', () => {
    const agent: IAuditEventAgent = { requestor: true };
    expect(agent._policy).toBeUndefined();
  });
});
