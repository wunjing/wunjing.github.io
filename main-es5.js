function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _index_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./index/index.component */
    "./src/app/index/index.component.ts");

    var routes = [{
      path: 'index',
      component: _index_index_component__WEBPACK_IMPORTED_MODULE_2__["IndexComponent"]
    }, {
      path: '',
      redirectTo: '/index',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'NewPortfolio';
    };

    AppComponent.??fac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _index_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./index/index.component */
    "./src/app/index/index.component.ts");
    /* harmony import */


    var primeng_panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/panel */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-panel.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/button */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");
    /* harmony import */


    var primeng_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! primeng/dialog */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dialog.js");
    /* harmony import */


    var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! primeng/inputtextarea */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtextarea.js");
    /* harmony import */


    var primeng_steps__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! primeng/steps */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-steps.js");
    /* harmony import */


    var primeng_messages__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! primeng/messages */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-messages.js");
    /* harmony import */


    var primeng_message__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! primeng/message */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-message.js");
    /* harmony import */


    var primeng_toast__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! primeng/toast */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-toast.js");
    /* harmony import */


    var primeng_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! primeng/tooltip */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-tooltip.js");
    /* harmony import */


    var primeng_tabview__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! primeng/tabview */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-tabview.js");
    /* harmony import */


    var primeng_progressbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! primeng/progressbar */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-progressbar.js");
    /* harmony import */


    var primeng_carousel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! primeng/carousel */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-carousel.js");
    /* harmony import */


    var primeng_galleria__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! primeng/galleria */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-galleria.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], primeng_panel__WEBPACK_IMPORTED_MODULE_5__["PanelModule"], primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_8__["DialogModule"], primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_9__["InputTextareaModule"], primeng_steps__WEBPACK_IMPORTED_MODULE_10__["StepsModule"], primeng_message__WEBPACK_IMPORTED_MODULE_12__["MessageModule"], primeng_messages__WEBPACK_IMPORTED_MODULE_11__["MessagesModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_13__["ToastModule"], primeng_tooltip__WEBPACK_IMPORTED_MODULE_14__["TooltipModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_15__["TabViewModule"], primeng_progressbar__WEBPACK_IMPORTED_MODULE_16__["ProgressBarModule"], primeng_carousel__WEBPACK_IMPORTED_MODULE_17__["CarouselModule"], primeng_galleria__WEBPACK_IMPORTED_MODULE_18__["GalleriaModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _index_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], primeng_panel__WEBPACK_IMPORTED_MODULE_5__["PanelModule"], primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_8__["DialogModule"], primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_9__["InputTextareaModule"], primeng_steps__WEBPACK_IMPORTED_MODULE_10__["StepsModule"], primeng_message__WEBPACK_IMPORTED_MODULE_12__["MessageModule"], primeng_messages__WEBPACK_IMPORTED_MODULE_11__["MessagesModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_13__["ToastModule"], primeng_tooltip__WEBPACK_IMPORTED_MODULE_14__["TooltipModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_15__["TabViewModule"], primeng_progressbar__WEBPACK_IMPORTED_MODULE_16__["ProgressBarModule"], primeng_carousel__WEBPACK_IMPORTED_MODULE_17__["CarouselModule"], primeng_galleria__WEBPACK_IMPORTED_MODULE_18__["GalleriaModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _index_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], primeng_panel__WEBPACK_IMPORTED_MODULE_5__["PanelModule"], primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_8__["DialogModule"], primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_9__["InputTextareaModule"], primeng_steps__WEBPACK_IMPORTED_MODULE_10__["StepsModule"], primeng_message__WEBPACK_IMPORTED_MODULE_12__["MessageModule"], primeng_messages__WEBPACK_IMPORTED_MODULE_11__["MessagesModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_13__["ToastModule"], primeng_tooltip__WEBPACK_IMPORTED_MODULE_14__["TooltipModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_15__["TabViewModule"], primeng_progressbar__WEBPACK_IMPORTED_MODULE_16__["ProgressBarModule"], primeng_carousel__WEBPACK_IMPORTED_MODULE_17__["CarouselModule"], primeng_galleria__WEBPACK_IMPORTED_MODULE_18__["GalleriaModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/index/index.component.ts":
  /*!******************************************!*\
    !*** ./src/app/index/index.component.ts ***!
    \******************************************/

  /*! exports provided: IndexComponent */

  /***/
  function srcAppIndexIndexComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndexComponent", function () {
      return IndexComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
    /* harmony import */


    var primeng_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! primeng/toast */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-toast.js");
    /* harmony import */


    var primeng_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! primeng/carousel */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-carousel.js");
    /* harmony import */


    var primeng_steps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! primeng/steps */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-steps.js");
    /* harmony import */


    var primeng_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/tooltip */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-tooltip.js");
    /* harmony import */


    var primeng_tabview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/tabview */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-tabview.js");
    /* harmony import */


    var primeng_progressbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/progressbar */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-progressbar.js");
    /* harmony import */


    var primeng_galleria__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! primeng/galleria */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-galleria.js");

    function IndexComponent_ng_template_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var carousel_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("src", "assets/images/", carousel_r1, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
      }
    }

    var _c0 = function _c0() {
      return {
        marginTop: "80px"
      };
    };

    var _c1 = function _c1() {
      return {
        "height": "1.45vw"
      };
    };

    var IndexComponent = /*#__PURE__*/function () {
      function IndexComponent(messageService) {
        _classCallCheck(this, IndexComponent);

        this.messageService = messageService;
        this.pictures = [];
        this.images = [];
        this.imagestwo = [];
        this.activeIndex = 0;
        this.responsiveOptions = [{
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
        }, {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
        }, {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
        }];
      }

      _createClass(IndexComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.images = [];
          this.images.push({
            source: 'assets/images/galleria1-1.png',
            alt: 'Merchant can view their products, add a new product, browse products by tags or status and update a product',
            title: 'Merchant Application'
          });
          this.images.push({
            source: 'assets/images/galleria1-2.png',
            alt: 'Merchant can update product details',
            title: 'Merchant Application'
          });
          this.images.push({
            source: 'assets/images/galleria1-3.png',
            alt: 'Merchant can view exchanges requested by customers and choose to accept or reject',
            title: 'Merchant Application'
          });
          this.images.push({
            source: 'assets/images/galleria1-4.png',
            alt: 'Customer views a specific product and is able to subscribe to the product',
            title: 'Customer Application'
          });
          this.images.push({
            source: 'assets/images/galleria1-5.png',
            alt: 'Customer is able to choose multiple customisations of the subscription and the duration of the subscription',
            title: 'Customer Application'
          });
          this.images.push({
            source: 'assets/images/galleria1-6.png',
            alt: 'Customer sees the overview of the order and is able to choose to keep or redeem his/her available points',
            title: 'Customer Application'
          });
          this.images.push({
            source: 'assets/images/galleria1-8.png',
            alt: 'Customer views all subscriptions and chooses if he/she wants to pause a subscription, write a review or view more details of a particular subscription',
            title: 'Customer Application'
          });
          this.images.push({
            source: 'assets/images/galleria1-9.png',
            alt: 'Customer views orders that are delivered/deliverying and is able to click order received or request for an exchange',
            title: 'Customer Application'
          });
          this.imagestwo = [];
          this.imagestwo.push({
            source: 'assets/images/galleria2-1.png',
            alt: 'Customer can browse food items based on restaurants',
            title: 'Login as Customer'
          });
          this.imagestwo.push({
            source: 'assets/images/galleria2-2.png',
            alt: 'Customer can order food with promotional codes',
            title: 'Login as Customer'
          });
          this.imagestwo.push({
            source: 'assets/images/galleria2-3.png',
            alt: 'Manager can view overall performance',
            title: 'Login as Manager of FDS'
          });
          this.imagestwo.push({
            source: 'assets/images/galleria2-4.png',
            alt: 'Manager can view all payrolls of deliverymen and add a new payroll',
            title: 'Login as Manager of FDS'
          });
          this.imagestwo.push({
            source: 'assets/images/galleria2-6.png',
            alt: 'Manager can view all restaurant staffs and add a new restaurant staff account on the application',
            title: 'Login as Manager of FDS'
          });
          this.imagestwo.push({
            source: 'assets/images/galleria2-7.png',
            alt: 'Manager can allocate work schedule to a deliveryman',
            title: 'Login as Manager of FDS'
          });
          this.imagestwo.push({
            source: 'assets/images/galleria2-5.png',
            alt: 'Deliveryman can view an assigned order and update the order accordingly. Time is updated automatically.',
            title: 'Login as Deliveryman'
          });
          this.imagestwo.push({
            source: 'assets/images/galleria2-8.png',
            alt: 'Deliveryman can view latest work schedule',
            title: 'Login as Deliveryman'
          });
          this.items = [{
            label: 'NUS 2018-2021(Expected)',
            command: function command(event) {
              _this.activeIndex = 0;

              _this.messageService.add({
                severity: 'info',
                summary: 'NUS, Degree: Information Systems',
                detail: 'CAP: 3.50/5'
              });
            }
          }, {
            label: 'Ngee Ann Polytechnic 2015-2018',
            command: function command(event) {
              _this.activeIndex = 1;

              _this.messageService.add({
                severity: 'info',
                summary: 'Ngee Ann Polytechnic, Diploma: Banking and Financial Services',
                detail: 'GPA: 3.68/4, Top 20% in cohort'
              });
            }
          }];
          this.pictures.push('carousel1');
          this.pictures.push('carousel2');
          this.pictures.push('carousel3');
          this.pictures.push('carousel4');
          this.pictures.push('carousel5');
          this.pictures.push('carousel6');
        }
      }, {
        key: "showPositionDialog",
        value: function showPositionDialog(position) {
          this.position = position;
          this.displayPosition = true;
        }
      }, {
        key: "showEducationDialog",
        value: function showEducationDialog(position) {
          this.position = position;
          this.educationDisplayPosition = true;
        }
      }]);

      return IndexComponent;
    }();

    IndexComponent.??fac = function IndexComponent_Factory(t) {
      return new (t || IndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"]));
    };

    IndexComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: IndexComponent,
      selectors: [["app-index"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])],
      decls: 210,
      vars: 37,
      consts: [["align", "middle", 1, "ui-g-12", "banner"], ["src", "assets/images/banner.png", 1, "banner-pic"], ["styleClass", "custom-carousel", "align", "middle", 3, "value", "numVisible", "numScroll", "circular", "autoplayInterval"], ["align", "middle", 1, "carouselHeader", 2, "font-size", "1.95vw"], ["pTemplate", "item"], [1, "block-pink"], [1, "ui-g-12", "profile-section"], [1, "ui-g-1", "blank"], [1, "ui-g-4", "picture"], ["align", "middle", 1, "inline-block"], ["src", "assets/images/profilepicture.jpg", 1, "profilecircleicon"], [1, "ui-g-5", "profile", 2, "font-size", "1.2vw"], [1, "flex-profile", 2, "font-size", "1.95vw"], [1, "ui-g-4", "blank-second"], [1, "ui-g-12", "education-section"], [1, "ui-g-4", "picture-education"], ["src", "assets/images/education.png", 1, "profilecircleicon"], [1, "ui-g-5", "education"], [1, "flex-education", 2, "font-size", "1.95vw"], ["pTooltip", "Click for Details!", "tooltipPosition", "left", 1, "customstep", 3, "model", "activeIndex", "readonly", "activeIndexChange"], ["header", "NUS", "headerStyleClass", "mystyle"], [1, "panelheader", 2, "font-size", "1.35vw"], ["src", "assets/images/nus.png", 1, "tabpictures"], [1, "panelbody", 2, "font-size", "1.2vw"], ["header", "Ngee Ann Polytechnic", "headerStyleClass", "mystyle"], ["src", "assets/images/na.webp", 1, "tabpictures"], [1, "ui-g-12", "skills-section"], [1, "ui-g-4", "picture-skills"], ["src", "assets/images/skills.png", 1, "circleicon"], [1, "ui-g-5", "picture"], [1, "flex-skills", 2, "font-size", "1.95vw"], [1, "softSkills", 2, "font-size", "1.3vw"], [1, "subtitleSkills", 2, "font-size", "1.2vw"], [1, "progressline", 2, "font-size", "1.2vw"], [1, "customProgress", 3, "value"], [1, "ui-g-12", "job-section"], [1, "ui-g-4", "picture-job"], ["src", "assets/images/job.png", 1, "profilecircleicon"], [1, "ui-g-5", "employment"], [1, "ui-g-12", "employment-section"], [1, "ui-g-3", "employment-picture"], ["src", "assets/images/citi.jpg", 1, "profilecircleicon"], [1, "employment-picturetitle", 2, "font-size", "0.8vw"], [1, "ui-g-9", "employment-details", 2, "font-size", "1.2vw"], [1, "employment-title", 2, "font-size", "1.35vw"], [1, "ui-g-12", "activity-section"], [1, "ui-g-4", "picture-activity"], ["src", "assets/images/activity.png", 1, "profilecircleicon"], [1, "ui-g-5", "activity"], ["src", "assets/images/fintech.jpg", 1, "circleicon"], ["src", "assets/images/baoc.jpg", 1, "circleicon"], ["src", "assets/images/ndp.jpg", 1, "circleicon"], ["src", "assets/images/cambodia.JPG", 1, "circleicon"], [1, "ui-g-12", "projects-section"], ["align", "middle", 1, "project-details-header", 2, "font-size", "1.95vw"], [1, "ui-g-12"], [1, "ui-g-4", "descriptionProject"], [1, "titleofproject", 2, "font-size", "1.35vw"], [1, "descriptionofproject", 2, "font-size", "1.2vw"], [1, "ui-g-6", "galleria"], ["panelWidth", "auto", "showCaption", "true", 3, "images"], [1, "ui-g-1", "blank-second"], [1, "ui-g-12", "contact-section"], ["align", "middle", 1, "header-contact", 2, "font-size", "1.95vw"], [1, "ui-g-5", "contact-details"], ["align", "middle"], ["src", "assets/images/email.png", "width", "100px"], ["align", "middle", 1, "contact-details", 2, "font-size", "1.5vw"], ["src", "assets/images/phone.png", "width", "100px"], [1, "carousel-details"], [1, "p-grid", "p-nogutter"], ["algin", "middle", 1, "p-col-12"], [1, "carousel-pics", 3, "src"]],
      template: function IndexComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "p-toast");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "p-carousel", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " Projects Worked On ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, IndexComponent_ng_template_7_Template, 4, 1, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " \xA0\n\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, " Profile ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, " I am a year 3 Information Systems student who is passionate in solving problems using new technologies. I aspire to build a career as a Software/Web/App Developer in the IT industry.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, " During my free time, I participate in projects to hone my techncial skills such as building web and mobile applications. I completed a React Native and Firebase project which is to built a mobile application on grocery shopping list. In addition, I am building a web application using Python, Django and SQLite for people to create their own portfolio or business. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, " On the side, I also take online courses on Six Sigma Projects and on Project Management Skills. Beyond my technical skills, I aim to build on my communication & leadership skills by actively volunteering in events. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, " Education ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "p-steps", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("activeIndexChange", function IndexComponent_Template_p_steps_activeIndexChange_36_listener($event) {
            return ctx.activeIndex = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "p-tabView");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "p-tabPanel", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, " \xA0 Degree : Information Systems ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, " - Applying Unified Modelling Language and software design patterns into designing enterprise systems ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, " - Exposure to Netbeans IDE, JSF, Angular, Ionic, JavaScript, Java, MySQL, PostgreSQL, React Native, Python, Django and SQLite ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, " - Exposure to IT solutioning skills ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, " - Stakeholder Analysis, Customer Persona & Value Stream Mapping ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "p-tabPanel", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](58, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, " \xA0 Diploma : Banking and Financial Services ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, " - Learnt excel application and information design skillsets ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, " - Understanding of wealth management, financial markets and digital marketing for financial services ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](66, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](68, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](71, "img", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, " Skills ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, " AIGPE\u2019s Six Sigma Yellow Belt Certification ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, " Rough indicators of my proficiency in the various programming languages and frameworks ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, " - Exposure to Git, Netbeans IDE, JSF, Python, React Native, Django and SQLite ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, " - Experience with Figma and Balsamiq ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, " Java ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](88, "p-progressBar", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, " JavaScript ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](91, "p-progressBar", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, " HTML/CSS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](94, "p-progressBar", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, " Angular ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](97, "p-progressBar", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, " SQL ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](100, "p-progressBar", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, " PostgreSQL ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](103, "p-progressBar", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](104, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](106, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](109, "img", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, " Employment History ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](115, "img", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, " Apr, 2017 - Aug, 2017 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, " Human Resource Intern ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, " Responsible for managing the company's resignation process and assisting in departmental level projects. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](122, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](124, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](127, "img", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, " Co-Curricular Activities ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](133, "img", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, " 2020 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, " NUS Fintech Society DevOps Team Member ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139, " Currently developing NUS Fintech Society website with in a group of 5. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](143, "img", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, " 2015 & 2016 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](148, " Student Leader for Business and Accountancy Orientation ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, " Facilitated and took care of students and being a leader that strived to bring out the full potential of the students under my care. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](150, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](153, "img", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, " Heartware Network, 2016 & 2017 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, " Volunteer in National Day Parade ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, " Handle logistics of team's welfare, plan team-building activities and carry out ushering duties. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](160, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](161, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](164, "img", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](166, " Nov, 2017 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](169, " Cambodia Youth Expedition Project ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](170, " Plan and execute activities for the students in Cambodia. Carry out English and Math lessons while integrating the use of technology(Ipad games) in their school curriculum. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](171, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](174, " Details of Projects ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](176, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](179, " Subscription Marketplace ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](181, " This project is done in a team of four. It is a platform where consumers can subscribe to any products available and earn points which can be deducted at the next subscription order. We did two applications, database as MySQL: one using Java EE and JSF, the other with Angular. The application with JSF is for merchants who wants to put up their products on this platform. The application with Angular is for consumers to browse and purchase the subscriptions. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](183, "p-galleria", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](184, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](186, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](189, " Similar to Grab - FDS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](191, " This project is done in a team of four. It is a platform where consumers can order food and the application keeps track of restaurants, their respective food categories and food items and deliverymen's work schedule. It is done using Node JS, Express JS and Vue, with database as PostgreSQL. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](193, "p-galleria", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](194, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](197, " Feel Free To Contact Me : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](198, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](201, "img", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](203, " chengwunjing@outlook.com ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](204, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](206, "img", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](207, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](208, " +65 93214767 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](209, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](30, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", ctx.pictures)("numVisible", 1)("numScroll", 1)("circular", true)("autoplayInterval", 2000);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("model", ctx.items)("activeIndex", ctx.activeIndex)("readonly", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](31, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](32, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](33, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](34, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](35, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](36, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("images", ctx.images);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("images", ctx.imagestwo);
        }
      },
      directives: [primeng_toast__WEBPACK_IMPORTED_MODULE_2__["Toast"], primeng_carousel__WEBPACK_IMPORTED_MODULE_3__["Carousel"], primeng_api__WEBPACK_IMPORTED_MODULE_1__["Header"], primeng_api__WEBPACK_IMPORTED_MODULE_1__["PrimeTemplate"], primeng_steps__WEBPACK_IMPORTED_MODULE_4__["Steps"], primeng_tooltip__WEBPACK_IMPORTED_MODULE_5__["Tooltip"], primeng_tabview__WEBPACK_IMPORTED_MODULE_6__["TabView"], primeng_tabview__WEBPACK_IMPORTED_MODULE_6__["TabPanel"], primeng_progressbar__WEBPACK_IMPORTED_MODULE_7__["ProgressBar"], primeng_galleria__WEBPACK_IMPORTED_MODULE_8__["Galleria"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZGV4L2luZGV4LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](IndexComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-index',
          templateUrl: './index.component.html',
          styleUrls: ['./index.component.css'],
          providers: [primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"]]
        }]
      }], function () {
        return [{
          type: primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Portfolio\porfolioCode\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map