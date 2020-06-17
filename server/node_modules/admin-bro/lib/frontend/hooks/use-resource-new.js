"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _reactRouter = require("react-router");

var _apiClient = _interopRequireDefault(require("../utils/api-client"));

var _recordToFormData = _interopRequireDefault(require("../components/actions/record-to-form-data"));

var _appendForceRefresh = require("../components/actions/utils/append-force-refresh");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const api = new _apiClient.default();

const useResourceNew = (initialRecord, resourceId, onNotice) => {
  var _ref, _ref2, _ref3;

  const [record, setRecord] = (0, _react.useState)({ ...initialRecord,
    params: (_ref = initialRecord === null || initialRecord === void 0 ? void 0 : initialRecord.params) !== null && _ref !== void 0 ? _ref : {},
    errors: (_ref2 = initialRecord === null || initialRecord === void 0 ? void 0 : initialRecord.errors) !== null && _ref2 !== void 0 ? _ref2 : {},
    populated: (_ref3 = initialRecord === null || initialRecord === void 0 ? void 0 : initialRecord.populated) !== null && _ref3 !== void 0 ? _ref3 : {}
  });
  const [loading, setLoading] = (0, _react.useState)(false);
  const history = (0, _reactRouter.useHistory)();

  const handleChange = (propertyOrRecord, value) => {
    if (typeof value === 'undefined' && !(typeof propertyOrRecord === 'string') && propertyOrRecord.params) {
      setRecord(propertyOrRecord);
    } else {
      setRecord(prev => ({ ...prev,
        params: { ...prev.params,
          [propertyOrRecord]: value
        }
      }));
    }
  };

  const handleSubmit = event => {
    const formData = (0, _recordToFormData.default)(record);
    setLoading(true);
    api.resourceAction({
      resourceId,
      actionName: 'new',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(response => {
      if (response.data.notice) {
        onNotice(response.data.notice);
      }

      if (response.data.redirectUrl) {
        history.push((0, _appendForceRefresh.appendForceRefresh)(response.data.redirectUrl));
      } else {
        setRecord(prev => ({ ...prev,
          errors: response.data.record.errors
        }));
        setLoading(false);
      }
    }).catch(() => {
      setLoading(false);
      onNotice({
        message: 'There was an error updating record, Check out console to see more information.',
        type: 'error'
      });
    });
    event.preventDefault();
    return false;
  };

  return {
    record,
    handleChange,
    handleSubmit,
    loading
  };
};

var _default = useResourceNew;
exports.default = _default;