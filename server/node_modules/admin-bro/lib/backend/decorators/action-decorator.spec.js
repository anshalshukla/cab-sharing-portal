"use strict";

var _chai = require("chai");

var _sinon = _interopRequireDefault(require("sinon"));

var _actionDecorator = _interopRequireDefault(require("./action-decorator"));

var _adminBro = _interopRequireDefault(require("../../admin-bro"));

var _baseResource = _interopRequireDefault(require("../adapters/base-resource"));

var _forbiddenError = _interopRequireDefault(require("../utils/forbidden-error"));

var _validationError = _interopRequireDefault(require("../utils/validation-error"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('ActionDecorator', function () {
  const request = {
    response: true
  };
  let admin;
  let resource;
  let context;
  let handler;
  beforeEach(function () {
    admin = _sinon.default.createStubInstance(_adminBro.default);
    resource = _sinon.default.createStubInstance(_baseResource.default);
    context = {
      resource,
      _admin: admin
    };
    handler = _sinon.default.stub();
  });
  afterEach(function () {
    _sinon.default.restore();
  });
  describe('#handler', function () {
    it('calls the before action when it is given', async function () {
      const mockedRequest = {
        response: true
      };

      const before = _sinon.default.stub().returns(mockedRequest);

      const decorator = new _actionDecorator.default({
        action: {
          before,
          handler,
          name: 'myAction',
          actionType: 'resource'
        },
        admin,
        resource
      });
      await decorator.handler(request, 'res', context);
      (0, _chai.expect)(before).to.have.been.calledWith(request);
      (0, _chai.expect)(handler).to.have.been.calledWith(_sinon.default.match(mockedRequest));
    });
    it('calls the after action when it is given', async function () {
      const modifiedData = {
        records: false
      };
      const data = {};

      const after = _sinon.default.stub().returns(modifiedData);

      handler = handler.resolves(data);
      const decorator = new _actionDecorator.default({
        action: {
          name: 'myAction',
          handler,
          after,
          actionType: 'resource'
        },
        admin,
        resource
      });
      const ret = await decorator.handler(request, 'res', context);
      (0, _chai.expect)(ret).to.equal(modifiedData);
      (0, _chai.expect)(handler).to.have.been.called;
      (0, _chai.expect)(after).to.have.been.calledWith(data);
    });
    it('returns forbidden error when its thrown', async function () {
      const errorMessage = 'you cannot edit this resource';

      const before = _sinon.default.stub().throws(new _forbiddenError.default(errorMessage));

      const decorator = new _actionDecorator.default({
        action: {
          before,
          handler,
          name: 'myAction',
          actionType: 'record'
        },
        admin,
        resource
      });
      const ret = await decorator.handler(request, 'res', context);
      (0, _chai.expect)(before).to.have.been.calledWith(request);
      (0, _chai.expect)(ret).to.deep.equal({
        notice: {
          message: errorMessage,
          type: 'error'
        }
      });
      (0, _chai.expect)(handler).not.to.have.been.called;
    });
    it('returns record with validation errors when they are thrown', async function () {
      const errors = {
        email: {
          message: 'Wrong email',
          type: 'notGood'
        }
      };
      const notice = {
        message: 'There are validation errors',
        type: 'validationError'
      };

      const before = _sinon.default.stub().throws(new _validationError.default(errors, notice));

      const decorator = new _actionDecorator.default({
        action: {
          before,
          handler,
          name: 'myAction',
          actionType: 'record'
        },
        admin,
        resource
      });
      const ret = await decorator.handler(request, 'res', context);
      (0, _chai.expect)(before).to.have.been.calledWith(request);
      (0, _chai.expect)(ret).to.deep.equal({
        notice: {
          message: notice.message,
          type: 'error'
        },
        record: {
          errors,
          params: {},
          populated: {}
        }
      });
      (0, _chai.expect)(handler).not.to.have.been.called;
    });
  });
});