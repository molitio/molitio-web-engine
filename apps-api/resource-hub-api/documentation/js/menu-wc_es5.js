'use strict';

function _typeof(o) {
    '@babel/helpers - typeof';
    return (
        (_typeof =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (o) {
                      return typeof o;
                  }
                : function (o) {
                      return o && 'function' == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype
                          ? 'symbol'
                          : typeof o;
                  }),
        _typeof(o)
    );
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError('Cannot call a class as a function');
}
function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
        var o = r[t];
        (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return (
        r && _defineProperties(e.prototype, r),
        t && _defineProperties(e, t),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        e
    );
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, 'string');
    return 'symbol' == _typeof(i) ? i : i + '';
}
function _toPrimitive(t, r) {
    if ('object' != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || 'default');
        if ('object' != _typeof(i)) return i;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === r ? String : Number)(t);
}
function _callSuper(t, o, e) {
    return (
        (o = _getPrototypeOf(o)),
        _possibleConstructorReturn(
            t,
            _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e),
        )
    );
}
function _possibleConstructorReturn(t, e) {
    if (e && ('object' == _typeof(e) || 'function' == typeof e)) return e;
    if (void 0 !== e) throw new TypeError('Derived constructors may only return object or undefined');
    return _assertThisInitialized(t);
}
function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function _inherits(t, e) {
    if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })),
        Object.defineProperty(t, 'prototype', { writable: !1 }),
        e && _setPrototypeOf(t, e);
}
function _wrapNativeSuper(t) {
    var r = 'function' == typeof Map ? new Map() : void 0;
    return (
        (_wrapNativeSuper = function _wrapNativeSuper(t) {
            if (null === t || !_isNativeFunction(t)) return t;
            if ('function' != typeof t) throw new TypeError('Super expression must either be null or a function');
            if (void 0 !== r) {
                if (r.has(t)) return r.get(t);
                r.set(t, Wrapper);
            }
            function Wrapper() {
                return _construct(t, arguments, _getPrototypeOf(this).constructor);
            }
            return (
                (Wrapper.prototype = Object.create(t.prototype, {
                    constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 },
                })),
                _setPrototypeOf(Wrapper, t)
            );
        }),
        _wrapNativeSuper(t)
    );
}
function _construct(t, e, r) {
    if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
    var o = [null];
    o.push.apply(o, e);
    var p = new (t.bind.apply(t, o))();
    return r && _setPrototypeOf(p, r.prototype), p;
}
function _isNativeReflectConstruct() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
        return !!t;
    })();
}
function _isNativeFunction(t) {
    try {
        return -1 !== Function.toString.call(t).indexOf('[native code]');
    } catch (n) {
        return 'function' == typeof t;
    }
}
function _setPrototypeOf(t, e) {
    return (
        (_setPrototypeOf = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                  return (t.__proto__ = e), t;
              }),
        _setPrototypeOf(t, e)
    );
}
function _getPrototypeOf(t) {
    return (
        (_getPrototypeOf = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
              }),
        _getPrototypeOf(t)
    );
}
customElements.define(
    'compodoc-menu',
    /*#__PURE__*/ (function (_HTMLElement) {
        function _class() {
            var _this;
            _classCallCheck(this, _class);
            _this = _callSuper(this, _class);
            _this.isNormalMode = _this.getAttribute('mode') === 'normal';
            return _this;
        }
        _inherits(_class, _HTMLElement);
        return _createClass(_class, [
            {
                key: 'connectedCallback',
                value: function connectedCallback() {
                    this.render(this.isNormalMode);
                },
            },
            {
                key: 'render',
                value: function render(isNormalMode) {
                    var tp = lithtml.html(
                        '\n        <nav>\n            <ul class="list">\n                <li class="title">\n                    <a href="index.html" data-type="index-link">@molitio/resource-hub-api documentation</a>\n                </li>\n\n                <li class="divider"></li>\n                '
                            .concat(
                                isNormalMode
                                    ? '<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>'
                                    : '',
                                '\n                <li class="chapter">\n                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>\n                    <ul class="links">\n                        <li class="link">\n                            <a href="overview.html" data-type="chapter-link">\n                                <span class="icon ion-ios-keypad"></span>Overview\n                            </a>\n                        </li>\n                        <li class="link">\n                            <a href="index.html" data-type="chapter-link">\n                                <span class="icon ion-ios-paper"></span>README\n                            </a>\n                        </li>\n                        <li class="link">\n                            <a href="license.html"  data-type="chapter-link">\n                                <span class="icon ion-ios-paper"></span>LICENSE\n                            </a>\n                        </li>\n                                <li class="link">\n                                    <a href="dependencies.html" data-type="chapter-link">\n                                        <span class="icon ion-ios-list"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class="link">\n                                    <a href="properties.html" data-type="chapter-link">\n                                        <span class="icon ion-ios-apps"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class="chapter modules">\n                        <a data-type="chapter-link" href="modules.html">\n                            <div class="menu-toggler linked" data-bs-toggle="collapse" ',
                            )
                            .concat(
                                isNormalMode ? 'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"',
                                '>\n                                <span class="icon ion-ios-archive"></span>\n                                <span class="link-name">Modules</span>\n                                <span class="icon ion-ios-arrow-down"></span>\n                            </div>\n                        </a>\n                        <ul class="links collapse " ',
                            )
                            .concat(
                                isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"',
                                '>\n                            <li class="link">\n                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>\n                                    <li class="chapter inner">\n                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ',
                            )
                            .concat(
                                isNormalMode
                                    ? 'data-bs-target="#controllers-links-module-AppModule-d50d927cfada0717c71ffd406aaba9e0ad9f11dedf24cc27b63bc91d9bce61e5fd61a01a3bfb10cd21a26c5726824ce197d8bedebeae1526c93ee83c5d54835d"'
                                    : 'data-bs-target="#xs-controllers-links-module-AppModule-d50d927cfada0717c71ffd406aaba9e0ad9f11dedf24cc27b63bc91d9bce61e5fd61a01a3bfb10cd21a26c5726824ce197d8bedebeae1526c93ee83c5d54835d"',
                                '>\n                                            <span class="icon ion-md-swap"></span>\n                                            <span>Controllers</span>\n                                            <span class="icon ion-ios-arrow-down"></span>\n                                        </div>\n                                        <ul class="links collapse" ',
                            )
                            .concat(
                                isNormalMode
                                    ? 'id="controllers-links-module-AppModule-d50d927cfada0717c71ffd406aaba9e0ad9f11dedf24cc27b63bc91d9bce61e5fd61a01a3bfb10cd21a26c5726824ce197d8bedebeae1526c93ee83c5d54835d"'
                                    : 'id="xs-controllers-links-module-AppModule-d50d927cfada0717c71ffd406aaba9e0ad9f11dedf24cc27b63bc91d9bce61e5fd61a01a3bfb10cd21a26c5726824ce197d8bedebeae1526c93ee83c5d54835d"',
                                '>\n                                            <li class="link">\n                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class="chapter inner">\n                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ',
                            )
                            .concat(
                                isNormalMode
                                    ? 'data-bs-target="#injectables-links-module-AppModule-d50d927cfada0717c71ffd406aaba9e0ad9f11dedf24cc27b63bc91d9bce61e5fd61a01a3bfb10cd21a26c5726824ce197d8bedebeae1526c93ee83c5d54835d"'
                                    : 'data-bs-target="#xs-injectables-links-module-AppModule-d50d927cfada0717c71ffd406aaba9e0ad9f11dedf24cc27b63bc91d9bce61e5fd61a01a3bfb10cd21a26c5726824ce197d8bedebeae1526c93ee83c5d54835d"',
                                '>\n                                        <span class="icon ion-md-arrow-round-down"></span>\n                                        <span>Injectables</span>\n                                        <span class="icon ion-ios-arrow-down"></span>\n                                    </div>\n                                    <ul class="links collapse" ',
                            )
                            .concat(
                                isNormalMode
                                    ? 'id="injectables-links-module-AppModule-d50d927cfada0717c71ffd406aaba9e0ad9f11dedf24cc27b63bc91d9bce61e5fd61a01a3bfb10cd21a26c5726824ce197d8bedebeae1526c93ee83c5d54835d"'
                                    : 'id="xs-injectables-links-module-AppModule-d50d927cfada0717c71ffd406aaba9e0ad9f11dedf24cc27b63bc91d9bce61e5fd61a01a3bfb10cd21a26c5726824ce197d8bedebeae1526c93ee83c5d54835d"',
                                '>\n                                        <li class="link">\n                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class="link">\n                                <a href="modules/ResourceModule.html" data-type="entity-link" >ResourceModule</a>\n                                <li class="chapter inner">\n                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ',
                            )
                            .concat(
                                isNormalMode
                                    ? 'data-bs-target="#injectables-links-module-ResourceModule-1eb9961eaf62370569ad0956d60dea19e2bf1ea737c6831562cfa214c7e0247110911c7edbfc70da198aeeb8b0fe0eac24797a32fe62121b946f9515fe8b3a47"'
                                    : 'data-bs-target="#xs-injectables-links-module-ResourceModule-1eb9961eaf62370569ad0956d60dea19e2bf1ea737c6831562cfa214c7e0247110911c7edbfc70da198aeeb8b0fe0eac24797a32fe62121b946f9515fe8b3a47"',
                                '>\n                                        <span class="icon ion-md-arrow-round-down"></span>\n                                        <span>Injectables</span>\n                                        <span class="icon ion-ios-arrow-down"></span>\n                                    </div>\n                                    <ul class="links collapse" ',
                            )
                            .concat(
                                isNormalMode
                                    ? 'id="injectables-links-module-ResourceModule-1eb9961eaf62370569ad0956d60dea19e2bf1ea737c6831562cfa214c7e0247110911c7edbfc70da198aeeb8b0fe0eac24797a32fe62121b946f9515fe8b3a47"'
                                    : 'id="xs-injectables-links-module-ResourceModule-1eb9961eaf62370569ad0956d60dea19e2bf1ea737c6831562cfa214c7e0247110911c7edbfc70da198aeeb8b0fe0eac24797a32fe62121b946f9515fe8b3a47"',
                                '>\n                                        <li class="link">\n                                            <a href="injectables/ResourceService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResourceService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class="link">\n                                <a href="modules/SpecificationLabelModule.html" data-type="entity-link" >SpecificationLabelModule</a>\n                                <li class="chapter inner">\n                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ',
                            )
                            .concat(
                                isNormalMode
                                    ? 'data-bs-target="#injectables-links-module-SpecificationLabelModule-a03641dbc463d9e39afde643b3f3c2c7080d87d44cc5eb66886d2962f083de3f751bfa1f353f520986bf172407e0e8b36fbde3537da035f5cf82d0c351b191c9"'
                                    : 'data-bs-target="#xs-injectables-links-module-SpecificationLabelModule-a03641dbc463d9e39afde643b3f3c2c7080d87d44cc5eb66886d2962f083de3f751bfa1f353f520986bf172407e0e8b36fbde3537da035f5cf82d0c351b191c9"',
                                '>\n                                        <span class="icon ion-md-arrow-round-down"></span>\n                                        <span>Injectables</span>\n                                        <span class="icon ion-ios-arrow-down"></span>\n                                    </div>\n                                    <ul class="links collapse" ',
                            )
                            .concat(
                                isNormalMode
                                    ? 'id="injectables-links-module-SpecificationLabelModule-a03641dbc463d9e39afde643b3f3c2c7080d87d44cc5eb66886d2962f083de3f751bfa1f353f520986bf172407e0e8b36fbde3537da035f5cf82d0c351b191c9"'
                                    : 'id="xs-injectables-links-module-SpecificationLabelModule-a03641dbc463d9e39afde643b3f3c2c7080d87d44cc5eb66886d2962f083de3f751bfa1f353f520986bf172407e0e8b36fbde3537da035f5cf82d0c351b191c9"',
                                '>\n                                        <li class="link">\n                                            <a href="injectables/SpecificationLabelService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SpecificationLabelService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class="link">\n                                <a href="modules/UserPrivateModule.html" data-type="entity-link" >UserPrivateModule</a>\n                                <li class="chapter inner">\n                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ',
                            )
                            .concat(
                                isNormalMode
                                    ? 'data-bs-target="#injectables-links-module-UserPrivateModule-e814ea1931c74029d5a87e8749a0d752ddade98fe4cc0ed42a42ff0c70ccd731c437fece9d560780afdaa564214e041994c78f1d36f67fcd041e7f6df53cfda4"'
                                    : 'data-bs-target="#xs-injectables-links-module-UserPrivateModule-e814ea1931c74029d5a87e8749a0d752ddade98fe4cc0ed42a42ff0c70ccd731c437fece9d560780afdaa564214e041994c78f1d36f67fcd041e7f6df53cfda4"',
                                '>\n                                        <span class="icon ion-md-arrow-round-down"></span>\n                                        <span>Injectables</span>\n                                        <span class="icon ion-ios-arrow-down"></span>\n                                    </div>\n                                    <ul class="links collapse" ',
                            )
                            .concat(
                                isNormalMode
                                    ? 'id="injectables-links-module-UserPrivateModule-e814ea1931c74029d5a87e8749a0d752ddade98fe4cc0ed42a42ff0c70ccd731c437fece9d560780afdaa564214e041994c78f1d36f67fcd041e7f6df53cfda4"'
                                    : 'id="xs-injectables-links-module-UserPrivateModule-e814ea1931c74029d5a87e8749a0d752ddade98fe4cc0ed42a42ff0c70ccd731c437fece9d560780afdaa564214e041994c78f1d36f67fcd041e7f6df53cfda4"',
                                '>\n                                        <li class="link">\n                                            <a href="injectables/UserPrivateService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserPrivateService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class="link">\n                                <a href="modules/UserPublicModule.html" data-type="entity-link" >UserPublicModule</a>\n                                <li class="chapter inner">\n                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ',
                            )
                            .concat(
                                isNormalMode
                                    ? 'data-bs-target="#injectables-links-module-UserPublicModule-f9a4050e038c5b50ac6e45d9f716f025fe136ab63ce70b448eccfe36fc951537adead4411672c0817ba95c29641855ab17b9367629f084c1e65c48d9cddd5d20"'
                                    : 'data-bs-target="#xs-injectables-links-module-UserPublicModule-f9a4050e038c5b50ac6e45d9f716f025fe136ab63ce70b448eccfe36fc951537adead4411672c0817ba95c29641855ab17b9367629f084c1e65c48d9cddd5d20"',
                                '>\n                                        <span class="icon ion-md-arrow-round-down"></span>\n                                        <span>Injectables</span>\n                                        <span class="icon ion-ios-arrow-down"></span>\n                                    </div>\n                                    <ul class="links collapse" ',
                            )
                            .concat(
                                isNormalMode
                                    ? 'id="injectables-links-module-UserPublicModule-f9a4050e038c5b50ac6e45d9f716f025fe136ab63ce70b448eccfe36fc951537adead4411672c0817ba95c29641855ab17b9367629f084c1e65c48d9cddd5d20"'
                                    : 'id="xs-injectables-links-module-UserPublicModule-f9a4050e038c5b50ac6e45d9f716f025fe136ab63ce70b448eccfe36fc951537adead4411672c0817ba95c29641855ab17b9367629f084c1e65c48d9cddd5d20"',
                                '>\n                                        <li class="link">\n                                            <a href="injectables/UserPublicService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserPublicService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                </ul>\n                </li>\n                    <li class="chapter">\n                        <div class="simple menu-toggler" data-bs-toggle="collapse" ',
                            )
                            .concat(
                                isNormalMode ? 'data-bs-target="#classes-links"' : 'data-bs-target="#xs-classes-links"',
                                '>\n                            <span class="icon ion-ios-paper"></span>\n                            <span>Classes</span>\n                            <span class="icon ion-ios-arrow-down"></span>\n                        </div>\n                        <ul class="links collapse " ',
                            )
                            .concat(
                                isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"',
                                '>\n                            <li class="link">\n                                <a href="classes/LabelValue.html" data-type="entity-link" >LabelValue</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/Resource.html" data-type="entity-link" >Resource</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/ResourceMutation.html" data-type="entity-link" >ResourceMutation</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/ResourceQuery.html" data-type="entity-link" >ResourceQuery</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/SpecificationLabel.html" data-type="entity-link" >SpecificationLabel</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/SpecificationLabelMutation.html" data-type="entity-link" >SpecificationLabelMutation</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/SpecificationLabelQuery.html" data-type="entity-link" >SpecificationLabelQuery</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/UserPrivate.html" data-type="entity-link" >UserPrivate</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/UserPrivateMutation.html" data-type="entity-link" >UserPrivateMutation</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/UserPrivateQuery.html" data-type="entity-link" >UserPrivateQuery</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/UserPublic.html" data-type="entity-link" >UserPublic</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/UserPublicResolverMutation.html" data-type="entity-link" >UserPublicResolverMutation</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/UserPublicResolverQuery.html" data-type="entity-link" >UserPublicResolverQuery</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class="chapter">\n                            <div class="simple menu-toggler" data-bs-toggle="collapse" ',
                            )
                            .concat(
                                isNormalMode
                                    ? 'data-bs-target="#injectables-links"'
                                    : 'data-bs-target="#xs-injectables-links"',
                                '>\n                                <span class="icon ion-md-arrow-round-down"></span>\n                                <span>Injectables</span>\n                                <span class="icon ion-ios-arrow-down"></span>\n                            </div>\n                            <ul class="links collapse " ',
                            )
                            .concat(
                                isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"',
                                '>\n                                <li class="link">\n                                    <a href="injectables/LoggerMiddleware.html" data-type="entity-link" >LoggerMiddleware</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class="chapter">\n                        <div class="simple menu-toggler" data-bs-toggle="collapse" ',
                            )
                            .concat(
                                isNormalMode
                                    ? 'data-bs-target="#interfaces-links"'
                                    : 'data-bs-target="#xs-interfaces-links"',
                                '>\n                            <span class="icon ion-md-information-circle-outline"></span>\n                            <span>Interfaces</span>\n                            <span class="icon ion-ios-arrow-down"></span>\n                        </div>\n                        <ul class="links collapse " ',
                            )
                            .concat(
                                isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"',
                                '>\n                            <li class="link">\n                                <a href="interfaces/CreateLabelValueDto.html" data-type="entity-link" >CreateLabelValueDto</a>\n                            </li>\n                            <li class="link">\n                                <a href="interfaces/CreateResourceDto.html" data-type="entity-link" >CreateResourceDto</a>\n                            </li>\n                            <li class="link">\n                                <a href="interfaces/CreateSpecificationLabelDto.html" data-type="entity-link" >CreateSpecificationLabelDto</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class="chapter">\n                        <div class="simple menu-toggler" data-bs-toggle="collapse" ',
                            )
                            .concat(
                                isNormalMode
                                    ? 'data-bs-target="#miscellaneous-links"'
                                    : 'data-bs-target="#xs-miscellaneous-links"',
                                '>\n                            <span class="icon ion-ios-cube"></span>\n                            <span>Miscellaneous</span>\n                            <span class="icon ion-ios-arrow-down"></span>\n                        </div>\n                        <ul class="links collapse " ',
                            )
                            .concat(
                                isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"',
                                '>\n                            <li class="link">\n                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>\n                            </li>\n                            <li class="link">\n                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>\n                            </li>\n                            <li class="link">\n                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class="chapter">\n                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>\n                    </li>\n                    <li class="divider"></li>\n                    <li class="copyright">\n                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">\n                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        ',
                            ),
                    );
                    this.innerHTML = tp.strings;
                },
            },
        ]);
    })(/*#__PURE__*/ _wrapNativeSuper(HTMLElement)),
);
