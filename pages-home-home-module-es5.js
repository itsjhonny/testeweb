function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/calculos/calculos.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/calculos/calculos.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCalculosCalculosPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\" (click)=\"closeModal()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n        </ion-button>\n  </ion-buttons>\n    <ion-title>\n      Cálculos\n    </ion-title>\n    \n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n\n    <div  class=\"fundo_principal ion-padding\">\n      <div class=\"texto-caderneta-virtual\" >\n   Seja bem vindo!<br><br>\n       <span>Monitore a saúde dos seus pacientes.</span><br><br>\n      </div>\n\n      <span class=\"titulo-caderneta-menor\"></span>\n      \n      <ion-list lines=\"none\">\n        <ion-item>\n          <section class=\"ion-text-center\" >\n            <ion-button (click)='presentAlertMultipleButtons()' \n             color=\"secondary\" expand=\"full\" shape=\"round\">Cálculo Esteatose Hepática\n              <ion-icon  style=\"padding-right: 10px;\" slot=\"icon-only\" ios=\"ios-medkit\" md=\"md-medkit\"></ion-icon>\n            </ion-button>\n          </section>\n        </ion-item>\n        <ion-item>\n          <section class=\"ion-text-center\" >\n            <ion-button (click)='presentAlertMultipleButtons()' \n             color=\"secondary\" expand=\"full\" shape=\"round\">Cálculo Fibrose Hepática\n              <ion-icon  style=\"padding-right: 10px;\" slot=\"icon-only\" ios=\"ios-medkit\" md=\"md-medkit\"></ion-icon>\n            </ion-button>\n          </section>\n        </ion-item>   \n      </ion-list>\n\n    </div>\n\n\n   \n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n\n    <ion-title>\n      Token: 123123\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"titulo-caderneta-virtual\">\n    Detecção de esteatose e fibrose hepática<br>\n    <span class=\"titulo-caderneta-menor\">Diagnóstico baseados em modelos preditivos</span>\n    </div>\n\n    <div  class=\"fundo_principal ion-padding\">\n      <div class=\"texto-caderneta-virtual\" >\n   Seja bem vindo!<br><br>\n       <span>Monitore a saúde dos seus pacientes.</span><br><br>\n      </div>\n\n      <ion-list lines=\"none\">\n        <ion-item *ngIf='!statusConsulta'>\n          <section class=\"ion-text-center\" >\n            <ion-button (click)='presentAlertMultipleButtons()' \n             color=\"secondary\" expand=\"full\" shape=\"round\">Iniciar consulta\n              <ion-icon  style=\"padding-right: 10px;\" slot=\"icon-only\" ios=\"ios-medkit\" md=\"md-medkit\"></ion-icon>\n            </ion-button>\n          </section>\n        </ion-item>\n\n        <ion-item *ngIf='statusConsulta'>\n          <section class=\"ion-text-center\" >\n            <ion-button (click)='presentAlertMultipleButtons()' \n             color=\"secondary\" expand=\"full\" shape=\"round\">Finalizar consulta\n              <ion-icon  style=\"padding-right: 10px;\" slot=\"icon-only\" ios=\"ios-medkit\" md=\"md-medkit\"></ion-icon>\n            </ion-button>\n          </section>\n        </ion-item>\n        <ion-item>\n          <section class=\"ion-text-center\" >\n            <ion-button (click)='presentAlertMultipleButtons()' \n             color=\"secondary\" expand=\"full\" shape=\"round\">Instruções\n              <ion-icon  style=\"padding-right: 10px;\" slot=\"icon-only\" ios=\"ios-medkit\" md=\"md-medkit\"></ion-icon>\n            </ion-button>\n          </section>\n        </ion-item>\n        <ion-item >\n          <section class=\"ion-text-center\" >\n            <ion-button (click)='presentAlertMultipleButtons()' \n             color=\"secondary\" expand=\"full\" shape=\"round\">Sobre\n              <ion-icon  style=\"padding-right: 10px;\" slot=\"icon-only\" ios=\"ios-medkit\" md=\"md-medkit\"></ion-icon>\n            </ion-button>\n          </section>\n        </ion-item>     \n      </ion-list>\n      <span class=\"titulo-caderneta-menor\"></span>\n      \n\n\n    </div>\n\n\n   \n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/calculos/calculos.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/calculos/calculos.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCalculosCalculosPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-button {\n  height: 50px;\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pwL0Rlc2t0b3AvaW5pX2FwcC9pbmlfdjVfcHdhL3NyYy9hcHAvcGFnZXMvY2FsY3Vsb3MvY2FsY3Vsb3MucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jYWxjdWxvcy9jYWxjdWxvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2FsY3Vsb3MvY2FsY3Vsb3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmlvbi1idXR0b24ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuIiwiaW9uLWJ1dHRvbiB7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/calculos/calculos.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/calculos/calculos.page.ts ***!
    \*************************************************/

  /*! exports provided: CalculosPage */

  /***/
  function srcAppPagesCalculosCalculosPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalculosPage", function () {
      return CalculosPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _Providers_Token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../Providers/Token */
    "./src/app/Providers/Token.ts");

    var CalculosPage_1;

    var CalculosPage = CalculosPage_1 =
    /*#__PURE__*/
    function () {
      function CalculosPage(alertController, token, modalController, navCtrl) {
        _classCallCheck(this, CalculosPage);

        this.alertController = alertController;
        this.token = token;
        this.modalController = modalController;
        this.navCtrl = navCtrl;
      }

      _createClass(CalculosPage, [{
        key: "presentAlertMultipleButtons",
        value: function presentAlertMultipleButtons() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    return _context.abrupt("return", this.presentModal(CalculosPage_1));

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "presentModal",
        value: function presentModal(_ModalPage) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalController.create({
                      component: _ModalPage,
                      cssClass: 'medium-modal-css'
                    });

                  case 2:
                    modal = _context2.sent;
                    _context2.next = 5;
                    return modal.present();

                  case 5:
                    return _context2.abrupt("return", _context2.sent);

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.modalController.dismiss();
        }
      }]);

      return CalculosPage;
    }();

    CalculosPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _Providers_Token__WEBPACK_IMPORTED_MODULE_3__["Token"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    CalculosPage = CalculosPage_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-calculos',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./calculos.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/calculos/calculos.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./calculos.page.scss */
      "./src/app/pages/calculos/calculos.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _Providers_Token__WEBPACK_IMPORTED_MODULE_3__["Token"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], CalculosPage);
    /***/
  },

  /***/
  "./src/app/pages/home/home.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/home/home.module.ts ***!
    \*******************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppPagesHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/pages/home/home.page.ts");
    /* harmony import */


    var _calculos_calculos_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../calculos/calculos.page */
    "./src/app/pages/calculos/calculos.page.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
      }])],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"], _calculos_calculos_page__WEBPACK_IMPORTED_MODULE_7__["CalculosPage"]],
      entryComponents: [_calculos_calculos_page__WEBPACK_IMPORTED_MODULE_7__["CalculosPage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/pages/home/home.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/home/home.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".titulo-caderneta-virtual {\n  background-color: #E8E8E8;\n  font-family: \"Saira-ExtraBold\" !important;\n  font-weight: 800 !important;\n  color: #646464;\n  font-size: 30px;\n  padding: 30px 20px 10px 20px;\n  line-height: 1;\n  border-bottom: 5px solid;\n  border-color: #7da29b;\n}\n\n.texto-caderneta-virtual {\n  top: 20px;\n  color: #000;\n  font-size: 21px;\n  font-family: \"Roboto\" !important;\n  font-weight: 400 !important;\n  line-height: 1;\n  margin-top: 10px;\n}\n\nion-button {\n  height: 50px;\n  font-size: 20px;\n  font-family: \"Roboto\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pwL0Rlc2t0b3AvaW5pX2FwcC9pbmlfdjVfcHdhL3NyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVFLHlCQUFBO0VBQ0EseUNBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtBQ0RGOztBRElBO0VBRUUsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0ZGOztBRE1BO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnRpdHVsby1jYWRlcm5ldGEtdmlydHVhbFxue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRThFOEU4O1xuICBmb250LWZhbWlseTogXCJTYWlyYS1FeHRyYUJvbGRcIiAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogODAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNjQ2NDY0O1xuICBmb250LXNpemU6IDMwcHg7XG4gIHBhZGRpbmc6IDMwcHggMjBweCAxMHB4IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgO1xuICBib3JkZXItY29sb3I6ICM3ZGEyOWI7XG59XG5cbi50ZXh0by1jYWRlcm5ldGEtdmlydHVhbFxue1xuICB0b3A6IDIwcHg7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDIxcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG5cbn1cblxuaW9uLWJ1dHRvbiB7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiAyMHB4OyBcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nXG59XG5cbiIsIi50aXR1bG8tY2FkZXJuZXRhLXZpcnR1YWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRThFOEU4O1xuICBmb250LWZhbWlseTogXCJTYWlyYS1FeHRyYUJvbGRcIiAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogODAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNjQ2NDY0O1xuICBmb250LXNpemU6IDMwcHg7XG4gIHBhZGRpbmc6IDMwcHggMjBweCAxMHB4IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBib3JkZXItYm90dG9tOiA1cHggc29saWQ7XG4gIGJvcmRlci1jb2xvcjogIzdkYTI5Yjtcbn1cblxuLnRleHRvLWNhZGVybmV0YS12aXJ0dWFsIHtcbiAgdG9wOiAyMHB4O1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/home/home.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/home/home.page.ts ***!
    \*****************************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppPagesHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _Providers_Token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../Providers/Token */
    "./src/app/Providers/Token.ts");
    /* harmony import */


    var _calculos_calculos_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../calculos/calculos.page */
    "./src/app/pages/calculos/calculos.page.ts");

    var HomePage =
    /*#__PURE__*/
    function () {
      function HomePage(alertController, token, modalController) {
        _classCallCheck(this, HomePage);

        this.alertController = alertController;
        this.token = token;
        this.modalController = modalController;
        this.statusConsulta = false;
      }

      _createClass(HomePage, [{
        key: "presentAlertMultipleButtons",
        value: function presentAlertMultipleButtons() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var _this = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertController.create({
                      header: 'Selecione uma opção.',
                      mode: 'ios',
                      buttons: [{
                        text: 'Nova Consulta',
                        handler: function handler() {
                          return _this.presentAlertPrompt('');
                        }
                      }, {
                        text: 'Inserir Token',
                        handler: function handler() {
                          return _this.presentAlertPrompt('');
                        }
                      }, {
                        text: 'Fechar'
                      }]
                    });

                  case 2:
                    alert = _context3.sent;
                    _context3.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "presentAlertPrompt",
        value: function presentAlertPrompt(tokenValue) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var _this2 = this;

            var _alert;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.alertController.create({
                      header: 'Insira o token do paciente.',
                      message: 'Token fica localizado no prontuário médico.',
                      mode: 'ios',
                      cssClass: "alertInput",
                      inputs: [{
                        name: 'token',
                        type: 'text',
                        value: tokenValue,
                        placeholder: 'Insira o Token'
                      }],
                      buttons: [{
                        text: 'QRCODE',
                        handler: function handler() {
                          _this2.token.scanToken().then(function (barcodeData) {
                            _this2.presentAlertPrompt(barcodeData.text);
                          }).catch(function (err) {
                            _this2.presentAlert("Ocorreu um erro na leitura.", 'Por favor, comunique ao suporte.');
                          });
                        }
                      }, {
                        text: 'Iniciar',
                        handler: function handler(data) {
                          var isTokenValid = _this2.token.checkToken(data.token);

                          if (isTokenValid) return _this2.presentModal(_calculos_calculos_page__WEBPACK_IMPORTED_MODULE_4__["CalculosPage"]);
                          return _this2.presentAlert("Token Inválido.", 'Nenhum paciente foi encontrado.');
                        }
                      }, {
                        text: 'Fechar'
                      }]
                    });

                  case 2:
                    _alert = _context4.sent;
                    _context4.next = 5;
                    return _alert.present();

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(_header, _message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var alert;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.alertController.create({
                      header: _header,
                      message: _message,
                      mode: 'ios',
                      buttons: ['Fechar']
                    });

                  case 2:
                    alert = _context5.sent;
                    _context5.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "presentModal",
        value: function presentModal(_ModalPage) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var modal;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    this.statusConsulta = !this.statusConsulta;
                    _context6.next = 3;
                    return this.modalController.create({
                      component: _ModalPage,
                      cssClass: 'medium-modal-css'
                    });

                  case 3:
                    modal = _context6.sent;
                    _context6.next = 6;
                    return modal.present();

                  case 6:
                    return _context6.abrupt("return", _context6.sent);

                  case 7:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _Providers_Token__WEBPACK_IMPORTED_MODULE_3__["Token"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/pages/home/home.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _Providers_Token__WEBPACK_IMPORTED_MODULE_3__["Token"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-home-home-module-es5.js.map