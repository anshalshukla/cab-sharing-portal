"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _propertyType = _interopRequireDefault(require("../property-type"));

var _designSystem = require("../design-system");

var _hooks = require("../../hooks");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const parseQuery = location => {
  const filter = {};
  const query = new URLSearchParams(location.search);

  for (const entry of query.entries()) {
    const [key, value] = entry;

    if (key.match('filters.')) {
      filter[key.replace('filters.', '')] = value;
    }
  }

  return filter;
};

const FilterContainer = props => {
  const {
    resource,
    isVisible,
    toggleFilter
  } = props;
  const properties = resource.filterProperties;
  const location = (0, _reactRouterDom.useLocation)();
  const [filter, setFilter] = (0, _react.useState)(parseQuery(location));
  const match = (0, _reactRouterDom.useRouteMatch)();
  const history = (0, _reactRouterDom.useHistory)();
  const {
    translateLabel,
    translateButton
  } = (0, _hooks.useTranslation)();
  (0, _react.useEffect)(() => setFilter({}), [match.params.resourceId]);

  const handleSubmit = event => {
    event.preventDefault();
    const search = new URLSearchParams(window.location.search);
    Object.keys(filter).forEach(key => {
      if (filter[key] !== '') {
        search.set(`filters.${key}`, filter[key]);
      } else {
        search.delete(`filters.${key}`);
      }
    });
    search.set('page', '1');
    history.push(`${history.location.pathname}?${search.toString()}`);
    return false;
  };

  const resetFilter = event => {
    event.preventDefault();
    const filteredSearch = new URLSearchParams();
    const search = new URLSearchParams(window.location.search);

    for (const key of search.keys()) {
      if (!key.match('filters.')) {
        filteredSearch.set(key, search.get(key));
      }
    }

    const query = filteredSearch.toString() === '' ? `?${filteredSearch.toString()}` : '';
    history.push(history.location.pathname + query);
    setFilter({});
  };

  const handleChange = (propertyName, value) => {
    if (propertyName.params) {
      throw new Error('you can not pass RecordJSON to filters');
    }

    setFilter({ ...filter,
      [propertyName]: value
    });
  };

  return _react.default.createElement(_designSystem.Drawer, {
    variant: "filter",
    isHidden: !isVisible,
    as: "form",
    onSubmit: handleSubmit
  }, _react.default.createElement(_designSystem.DrawerContent, null, _react.default.createElement(_designSystem.H3, null, _react.default.createElement(_designSystem.Button, {
    type: "button",
    size: "icon",
    rounded: true,
    mr: "lg",
    onClick: () => toggleFilter()
  }, _react.default.createElement(_designSystem.Icon, {
    icon: "ChevronRight",
    color: "white"
  })), translateLabel('filters', resource.id)), _react.default.createElement(_designSystem.Box, {
    my: "x3"
  }, properties.map(property => _react.default.createElement(_propertyType.default, {
    key: property.name,
    where: "filter",
    onChange: handleChange,
    property: property,
    filter: filter,
    resource: resource
  })))), _react.default.createElement(_designSystem.DrawerFooter, null, _react.default.createElement(_designSystem.Button, {
    variant: "primary",
    size: "lg"
  }, translateButton('applyChanges', resource.id)), _react.default.createElement(_designSystem.Button, {
    variant: "text",
    size: "lg",
    onClick: resetFilter,
    type: "button",
    color: "white"
  }, translateButton('resetFilter', resource.id))));
};

var _default = FilterContainer;
exports.default = _default;