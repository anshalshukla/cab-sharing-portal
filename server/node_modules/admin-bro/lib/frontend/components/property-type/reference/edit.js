"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Async = _interopRequireDefault(require("react-select/lib/Async"));

var _styledComponents = require("styled-components");

var _apiClient = _interopRequireDefault(require("../../../utils/api-client"));

var _selectStyles = _interopRequireDefault(require("../../../styles/select-styles"));

var _designSystem = require("../../design-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Edit = props => {
  var _ref;

  const {
    onChange,
    property,
    record,
    theme
  } = props;
  const {
    reference: resourceId
  } = property;

  if (!resourceId) {
    throw new Error(`Cannot reference resource in property '${property.name}'`);
  }

  const handleChange = selected => {
    if (selected) {
      onChange(property.name, selected.value, selected.record);
    } else {
      onChange(property.name, '');
    }
  };

  const loadOptions = async inputValue => {
    const api = new _apiClient.default();
    const optionRecords = await api.searchRecords({
      resourceId,
      query: inputValue
    });
    return optionRecords.map(optionRecord => ({
      value: optionRecord.id,
      label: optionRecord.title,
      record: optionRecord
    }));
  };

  const error = record === null || record === void 0 ? void 0 : record.errors[property.name];
  const selectedId = record === null || record === void 0 ? void 0 : record.params[property.name];
  const [loadedRecord, setLoadedRecord] = (0, _react.useState)();
  const [loadingRecord, setLoadingRecord] = (0, _react.useState)(0);
  const selectedValue = (_ref = record === null || record === void 0 ? void 0 : record.populated[property.name]) !== null && _ref !== void 0 ? _ref : loadedRecord;
  const selectedOption = selectedId && selectedValue ? {
    value: selectedValue.id,
    label: selectedValue.title
  } : {
    value: '',
    label: ''
  };
  const styles = (0, _selectStyles.default)(theme);
  (0, _react.useEffect)(() => {
    if (!selectedValue && selectedId) {
      setLoadingRecord(c => c + 1);
      const api = new _apiClient.default();
      api.recordAction({
        actionName: 'show',
        resourceId,
        recordId: selectedId
      }).then(({
        data
      }) => {
        setLoadedRecord(data.record);
      }).finally(() => {
        setLoadingRecord(c => c - 1);
      });
    }
  }, [selectedValue, selectedId, resourceId]);
  return _react.default.createElement(_designSystem.FormGroup, {
    error: Boolean(error)
  }, _react.default.createElement(_designSystem.Label, {
    htmlFor: property.name
  }, property.label), _react.default.createElement(_Async.default, {
    cacheOptions: true,
    value: selectedOption,
    styles: styles,
    defaultOptions: true,
    loadOptions: loadOptions,
    onChange: handleChange,
    isDisabled: property.isDisabled,
    isLoading: loadingRecord
  }), _react.default.createElement(_designSystem.FormMessage, null, error === null || error === void 0 ? void 0 : error.message));
};

var _default = (0, _styledComponents.withTheme)(Edit);

exports.default = _default;