'use strict';

customElements.define(
    'compodoc-menu',
    class extends HTMLElement {
        constructor() {
            super();
            this.isNormalMode = this.getAttribute('mode') === 'normal';
        }

        connectedCallback() {
            this.render(this.isNormalMode);
        }

        render(isNormalMode) {
            let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">@molitio/resource-hub-api documentation</a>
                </li>

                <li class="divider"></li>
                ${
                    isNormalMode
                        ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>`
                        : ''
                }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${
                                isNormalMode ? 'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"'
                            }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"'}>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${
                                            isNormalMode
                                                ? 'data-bs-target="#controllers-links-module-AppModule-d50d927cfada0717c71ffd406aaba9e0ad9f11dedf24cc27b63bc91d9bce61e5fd61a01a3bfb10cd21a26c5726824ce197d8bedebeae1526c93ee83c5d54835d"'
                                                : 'data-bs-target="#xs-controllers-links-module-AppModule-d50d927cfada0717c71ffd406aaba9e0ad9f11dedf24cc27b63bc91d9bce61e5fd61a01a3bfb10cd21a26c5726824ce197d8bedebeae1526c93ee83c5d54835d"'
                                        }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${
                                            isNormalMode
                                                ? 'id="controllers-links-module-AppModule-d50d927cfada0717c71ffd406aaba9e0ad9f11dedf24cc27b63bc91d9bce61e5fd61a01a3bfb10cd21a26c5726824ce197d8bedebeae1526c93ee83c5d54835d"'
                                                : 'id="xs-controllers-links-module-AppModule-d50d927cfada0717c71ffd406aaba9e0ad9f11dedf24cc27b63bc91d9bce61e5fd61a01a3bfb10cd21a26c5726824ce197d8bedebeae1526c93ee83c5d54835d"'
                                        }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${
                                        isNormalMode
                                            ? 'data-bs-target="#injectables-links-module-AppModule-d50d927cfada0717c71ffd406aaba9e0ad9f11dedf24cc27b63bc91d9bce61e5fd61a01a3bfb10cd21a26c5726824ce197d8bedebeae1526c93ee83c5d54835d"'
                                            : 'data-bs-target="#xs-injectables-links-module-AppModule-d50d927cfada0717c71ffd406aaba9e0ad9f11dedf24cc27b63bc91d9bce61e5fd61a01a3bfb10cd21a26c5726824ce197d8bedebeae1526c93ee83c5d54835d"'
                                    }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${
                                        isNormalMode
                                            ? 'id="injectables-links-module-AppModule-d50d927cfada0717c71ffd406aaba9e0ad9f11dedf24cc27b63bc91d9bce61e5fd61a01a3bfb10cd21a26c5726824ce197d8bedebeae1526c93ee83c5d54835d"'
                                            : 'id="xs-injectables-links-module-AppModule-d50d927cfada0717c71ffd406aaba9e0ad9f11dedf24cc27b63bc91d9bce61e5fd61a01a3bfb10cd21a26c5726824ce197d8bedebeae1526c93ee83c5d54835d"'
                                    }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ResourceModule.html" data-type="entity-link" >ResourceModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${
                                        isNormalMode
                                            ? 'data-bs-target="#injectables-links-module-ResourceModule-1eb9961eaf62370569ad0956d60dea19e2bf1ea737c6831562cfa214c7e0247110911c7edbfc70da198aeeb8b0fe0eac24797a32fe62121b946f9515fe8b3a47"'
                                            : 'data-bs-target="#xs-injectables-links-module-ResourceModule-1eb9961eaf62370569ad0956d60dea19e2bf1ea737c6831562cfa214c7e0247110911c7edbfc70da198aeeb8b0fe0eac24797a32fe62121b946f9515fe8b3a47"'
                                    }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${
                                        isNormalMode
                                            ? 'id="injectables-links-module-ResourceModule-1eb9961eaf62370569ad0956d60dea19e2bf1ea737c6831562cfa214c7e0247110911c7edbfc70da198aeeb8b0fe0eac24797a32fe62121b946f9515fe8b3a47"'
                                            : 'id="xs-injectables-links-module-ResourceModule-1eb9961eaf62370569ad0956d60dea19e2bf1ea737c6831562cfa214c7e0247110911c7edbfc70da198aeeb8b0fe0eac24797a32fe62121b946f9515fe8b3a47"'
                                    }>
                                        <li class="link">
                                            <a href="injectables/ResourceService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResourceService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SpecificationLabelModule.html" data-type="entity-link" >SpecificationLabelModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${
                                        isNormalMode
                                            ? 'data-bs-target="#injectables-links-module-SpecificationLabelModule-a03641dbc463d9e39afde643b3f3c2c7080d87d44cc5eb66886d2962f083de3f751bfa1f353f520986bf172407e0e8b36fbde3537da035f5cf82d0c351b191c9"'
                                            : 'data-bs-target="#xs-injectables-links-module-SpecificationLabelModule-a03641dbc463d9e39afde643b3f3c2c7080d87d44cc5eb66886d2962f083de3f751bfa1f353f520986bf172407e0e8b36fbde3537da035f5cf82d0c351b191c9"'
                                    }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${
                                        isNormalMode
                                            ? 'id="injectables-links-module-SpecificationLabelModule-a03641dbc463d9e39afde643b3f3c2c7080d87d44cc5eb66886d2962f083de3f751bfa1f353f520986bf172407e0e8b36fbde3537da035f5cf82d0c351b191c9"'
                                            : 'id="xs-injectables-links-module-SpecificationLabelModule-a03641dbc463d9e39afde643b3f3c2c7080d87d44cc5eb66886d2962f083de3f751bfa1f353f520986bf172407e0e8b36fbde3537da035f5cf82d0c351b191c9"'
                                    }>
                                        <li class="link">
                                            <a href="injectables/SpecificationLabelService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SpecificationLabelService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserPrivateModule.html" data-type="entity-link" >UserPrivateModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${
                                        isNormalMode
                                            ? 'data-bs-target="#injectables-links-module-UserPrivateModule-e814ea1931c74029d5a87e8749a0d752ddade98fe4cc0ed42a42ff0c70ccd731c437fece9d560780afdaa564214e041994c78f1d36f67fcd041e7f6df53cfda4"'
                                            : 'data-bs-target="#xs-injectables-links-module-UserPrivateModule-e814ea1931c74029d5a87e8749a0d752ddade98fe4cc0ed42a42ff0c70ccd731c437fece9d560780afdaa564214e041994c78f1d36f67fcd041e7f6df53cfda4"'
                                    }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${
                                        isNormalMode
                                            ? 'id="injectables-links-module-UserPrivateModule-e814ea1931c74029d5a87e8749a0d752ddade98fe4cc0ed42a42ff0c70ccd731c437fece9d560780afdaa564214e041994c78f1d36f67fcd041e7f6df53cfda4"'
                                            : 'id="xs-injectables-links-module-UserPrivateModule-e814ea1931c74029d5a87e8749a0d752ddade98fe4cc0ed42a42ff0c70ccd731c437fece9d560780afdaa564214e041994c78f1d36f67fcd041e7f6df53cfda4"'
                                    }>
                                        <li class="link">
                                            <a href="injectables/UserPrivateService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserPrivateService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserPublicModule.html" data-type="entity-link" >UserPublicModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${
                                        isNormalMode
                                            ? 'data-bs-target="#injectables-links-module-UserPublicModule-f9a4050e038c5b50ac6e45d9f716f025fe136ab63ce70b448eccfe36fc951537adead4411672c0817ba95c29641855ab17b9367629f084c1e65c48d9cddd5d20"'
                                            : 'data-bs-target="#xs-injectables-links-module-UserPublicModule-f9a4050e038c5b50ac6e45d9f716f025fe136ab63ce70b448eccfe36fc951537adead4411672c0817ba95c29641855ab17b9367629f084c1e65c48d9cddd5d20"'
                                    }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${
                                        isNormalMode
                                            ? 'id="injectables-links-module-UserPublicModule-f9a4050e038c5b50ac6e45d9f716f025fe136ab63ce70b448eccfe36fc951537adead4411672c0817ba95c29641855ab17b9367629f084c1e65c48d9cddd5d20"'
                                            : 'id="xs-injectables-links-module-UserPublicModule-f9a4050e038c5b50ac6e45d9f716f025fe136ab63ce70b448eccfe36fc951537adead4411672c0817ba95c29641855ab17b9367629f084c1e65c48d9cddd5d20"'
                                    }>
                                        <li class="link">
                                            <a href="injectables/UserPublicService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserPublicService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${
                            isNormalMode ? 'data-bs-target="#classes-links"' : 'data-bs-target="#xs-classes-links"'
                        }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"'}>
                            <li class="link">
                                <a href="classes/LabelValue.html" data-type="entity-link" >LabelValue</a>
                            </li>
                            <li class="link">
                                <a href="classes/Resource.html" data-type="entity-link" >Resource</a>
                            </li>
                            <li class="link">
                                <a href="classes/ResourceMutation.html" data-type="entity-link" >ResourceMutation</a>
                            </li>
                            <li class="link">
                                <a href="classes/ResourceQuery.html" data-type="entity-link" >ResourceQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/SpecificationLabel.html" data-type="entity-link" >SpecificationLabel</a>
                            </li>
                            <li class="link">
                                <a href="classes/SpecificationLabelMutation.html" data-type="entity-link" >SpecificationLabelMutation</a>
                            </li>
                            <li class="link">
                                <a href="classes/SpecificationLabelQuery.html" data-type="entity-link" >SpecificationLabelQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserPrivate.html" data-type="entity-link" >UserPrivate</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserPrivateMutation.html" data-type="entity-link" >UserPrivateMutation</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserPrivateQuery.html" data-type="entity-link" >UserPrivateQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserPublic.html" data-type="entity-link" >UserPublic</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserPublicResolverMutation.html" data-type="entity-link" >UserPublicResolverMutation</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserPublicResolverQuery.html" data-type="entity-link" >UserPublicResolverQuery</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${
                                isNormalMode
                                    ? 'data-bs-target="#injectables-links"'
                                    : 'data-bs-target="#xs-injectables-links"'
                            }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${
                                isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"'
                            }>
                                <li class="link">
                                    <a href="injectables/LoggerMiddleware.html" data-type="entity-link" >LoggerMiddleware</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${
                            isNormalMode
                                ? 'data-bs-target="#interfaces-links"'
                                : 'data-bs-target="#xs-interfaces-links"'
                        }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${
                            isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"'
                        }>
                            <li class="link">
                                <a href="interfaces/CreateLabelValueDto.html" data-type="entity-link" >CreateLabelValueDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CreateResourceDto.html" data-type="entity-link" >CreateResourceDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CreateSpecificationLabelDto.html" data-type="entity-link" >CreateSpecificationLabelDto</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${
                            isNormalMode
                                ? 'data-bs-target="#miscellaneous-links"'
                                : 'data-bs-target="#xs-miscellaneous-links"'
                        }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${
                            isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"'
                        }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
            this.innerHTML = tp.strings;
        }
    },
);
