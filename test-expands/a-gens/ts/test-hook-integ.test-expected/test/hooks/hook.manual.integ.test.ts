
/// <reference types="mocha"/>
import feathers, { Params, Service, Application } from '@feathersjs/feathers';
import assert from 'assert';
import feathers from '@feathersjs/feathers';
import { join } from 'path';
import { readJsonFileSync } from '@feathers-plus/test-utils';
import hookManual from '../../src1/hooks/hook.manual';

// Get generated fake data
// tslint:disable-next-line:no-unused-variable
const fakeData = readJsonFileSync(join(__dirname, '../../seeds/fake-data.json')) || {};

describe('Test /hooks/hook.manual.integ.test.ts', () => {
  let app: Application, params: Params;
  // tslint:disable-next-line:no-unused-variable
  let service: Service<any>;

  beforeEach(() => {
    app = feathers();

    app.use('/test-service', {
      async create(data: any) {
        return data;
      }
    });

    app.service('/test-service').hooks({
      before: {
        create: hookManual()
      }
    });

    service = app.service('/test-service');
    params = {
      user: (fakeData['users1'] || [])[0] || {
        email: 'test@example.com'
      }

    };
  });


  it('Hook exists', () => {
    assert(typeof hookManual === 'function', 'Hook is not a function.');
  });

  it('???', async () => {
    params.provider = undefined;
    assert(true);

    /*
    const result = await service.create({

    }, params);

    assert.deepEqual(user, {

    }, result);
    */
  });
});
