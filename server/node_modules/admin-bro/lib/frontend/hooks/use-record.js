"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.useRecord = void 0;

var _react = require("react");

var _apiClient = _interopRequireDefault(require("../utils/api-client"));

var _recordToFormData = _interopRequireDefault(require("../components/actions/record-to-form-data"));

var _useNotice = _interopRequireDefault(require("./use-notice"));

var _mergeRecordResponse = _interopRequireDefault(require("../utils/merge-record-response"));

var _updateRecord = _interopRequireDefault(require("./update-record"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const api = new _apiClient.default();
/**
 * Result of useRecord hook
 *
 * @memberof useRecord
 * @alias UseRecordResult
 */

/**
 * A powerful, hook which allows you to manage an entire record of given type.
 *
 * Take a look of creating a component which renders form for some non-existing record.
 * Form have name and surname fields. After clicking "save" user will create a new record.
 * Consecutive calls will update it.
 *
 * ```javascript
 * import { BasePropertyComponent, useRecord, Box, useTranslation } from 'admin-bro'
 *
 * const MyRecordActionComponent = (props) => {
 *   const { record: initialRecord, resource, action } = props
 *
 *   const { record, handleChange, submit } = useRecord(initialRecord, resource.id)
 *   const { translateButton } = useTranslation()
 *
 *   const nameProperty = resource.editProperties.find((property) => property.name === 'name')
 *   const surnameProperty = resource.editProperties.find((property) => property.name === 'surname')
 *
 *   const handleSubmit = (event) => {
 *     submit().then(() => {
 *        // do something
 *     })
 *   }
 *
 *   return (
 *     <Box
 *       as="form"
 *       onSubmit={handleSubmit}
 *     >
 *       <BasePropertyComponent
 *         where="edit"
 *         onChange={handleChange}
 *         property={nameProperty}
 *         resource={resource}
 *         record={record}
 *       />
 *       <BasePropertyComponent
 *         where="edit"
 *         onChange={handleChange}
 *         property={surnameProperty}
 *         resource={resource}
 *         record={record}
 *       />
 *       <Button variant="primary" size="lg">
 *         {translateButton('save', resource.id)}
 *       </Button>
 *     </Box>
 *   )
 * }
 * export default MyRecordActionComponent
 * ```
 *
 * Returns {@link UseRecordResult}.
 *
 * @subcategory Hooks
 * @component
 */
const useRecord = (initialRecord, resourceId) => {
  var _ref, _ref2, _ref3;

  const [loading, setLoading] = (0, _react.useState)(false);
  const [progress, setProgress] = (0, _react.useState)(0);
  const [record, setRecord] = (0, _react.useState)({ ...initialRecord,
    params: (_ref = initialRecord === null || initialRecord === void 0 ? void 0 : initialRecord.params) !== null && _ref !== void 0 ? _ref : {},
    errors: (_ref2 = initialRecord === null || initialRecord === void 0 ? void 0 : initialRecord.errors) !== null && _ref2 !== void 0 ? _ref2 : {},
    populated: (_ref3 = initialRecord === null || initialRecord === void 0 ? void 0 : initialRecord.populated) !== null && _ref3 !== void 0 ? _ref3 : {}
  });
  const onNotice = (0, _useNotice.default)();
  (0, _react.useEffect)(() => {
    if (initialRecord) {
      setRecord(initialRecord);
    }
  }, [initialRecord]);
  const handleChange = (0, _react.useCallback)((propertyOrRecord, value, incomingRecord) => {
    if (typeof value === 'undefined' && !(typeof propertyOrRecord === 'string') && propertyOrRecord.params) {
      setRecord(propertyOrRecord);
    } else {
      setRecord((0, _updateRecord.default)(propertyOrRecord, value, incomingRecord));
    }
  }, [setRecord]);
  const handleSubmit = (0, _react.useCallback)((customParams = {}) => {
    setLoading(true);
    const formData = (0, _recordToFormData.default)(record);
    Object.entries(customParams).forEach(([key, value]) => formData.set(key, value));
    const params = {
      resourceId,
      onUploadProgress: e => setProgress(Math.round(e.loaded * 100 / e.total)),
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    };
    const promise = record.id ? api.recordAction({ ...params,
      actionName: 'edit',
      recordId: record.id
    }) : api.resourceAction({ ...params,
      actionName: 'new'
    });
    promise.then(response => {
      if (response.data.notice) {
        onNotice(response.data.notice);
      }

      setRecord(prev => (0, _mergeRecordResponse.default)(prev, response.data));
      setProgress(0);
      setLoading(false);
    }).catch(() => {
      onNotice({
        message: 'There was an error updating record, Check out console to see more information.',
        type: 'error'
      });
      setProgress(0);
      setLoading(false);
    });
    return promise;
  }, [record, resourceId, setLoading, setProgress]);
  return {
    record,
    handleChange,
    submit: handleSubmit,
    loading,
    progress
  };
};

exports.useRecord = useRecord;
var _default = useRecord;
exports.default = _default;