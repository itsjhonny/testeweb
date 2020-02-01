(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/calculos/calculos.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/calculos/calculos.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\" (click)=\"closeModal()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n        </ion-button>\n  </ion-buttons>\n    <ion-title>\n      Cálculos\n    </ion-title>\n    \n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n\n    <div  class=\"fundo_principal ion-padding\">\n      <div class=\"texto-caderneta-virtual\" >\n   Seja bem vindo!<br><br>\n       <span>Monitore a saúde dos seus pacientes.</span><br><br>\n      </div>\n\n      <span class=\"titulo-caderneta-menor\"></span>\n      \n      <ion-list lines=\"none\">\n        <ion-item>\n          <section class=\"ion-text-center\" >\n            <ion-button (click)='presentAlertMultipleButtons()' \n             color=\"secondary\" expand=\"full\" shape=\"round\">Cálculo Esteatose Hepática\n              <ion-icon  style=\"padding-right: 10px;\" slot=\"icon-only\" ios=\"ios-medkit\" md=\"md-medkit\"></ion-icon>\n            </ion-button>\n          </section>\n        </ion-item>\n        <ion-item>\n          <section class=\"ion-text-center\" >\n            <ion-button (click)='presentAlertMultipleButtons()' \n             color=\"secondary\" expand=\"full\" shape=\"round\">Cálculo Fibrose Hepática\n              <ion-icon  style=\"padding-right: 10px;\" slot=\"icon-only\" ios=\"ios-medkit\" md=\"md-medkit\"></ion-icon>\n            </ion-button>\n          </section>\n        </ion-item>   \n      </ion-list>\n\n    </div>\n\n\n   \n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n\n    <ion-title>\n      Token: 123123\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"titulo-caderneta-virtual\">\n    Detecção de esteatose e fibrose hepática<br>\n    <span class=\"titulo-caderneta-menor\">Diagnóstico baseados em modelos preditivos</span>\n    </div>\n\n    <div  class=\"fundo_principal ion-padding\">\n      <div class=\"texto-caderneta-virtual\" >\n   Seja bem vindo!<br><br>\n       <span>Monitore a saúde dos seus pacientes.</span><br><br>\n      </div>\n\n      <ion-list lines=\"none\">\n        <ion-item *ngIf='!statusConsulta'>\n          <section class=\"ion-text-center\" >\n            <ion-button (click)='presentAlertMultipleButtons()' \n             color=\"secondary\" expand=\"full\" shape=\"round\">Iniciar consulta\n              <ion-icon  style=\"padding-right: 10px;\" slot=\"icon-only\" ios=\"ios-medkit\" md=\"md-medkit\"></ion-icon>\n            </ion-button>\n          </section>\n        </ion-item>\n\n        <ion-item *ngIf='statusConsulta'>\n          <section class=\"ion-text-center\" >\n            <ion-button (click)='presentAlertMultipleButtons()' \n             color=\"secondary\" expand=\"full\" shape=\"round\">Finalizar consulta\n              <ion-icon  style=\"padding-right: 10px;\" slot=\"icon-only\" ios=\"ios-medkit\" md=\"md-medkit\"></ion-icon>\n            </ion-button>\n          </section>\n        </ion-item>\n        <ion-item>\n          <section class=\"ion-text-center\" >\n            <ion-button (click)='presentAlertMultipleButtons()' \n             color=\"secondary\" expand=\"full\" shape=\"round\">Instruções\n              <ion-icon  style=\"padding-right: 10px;\" slot=\"icon-only\" ios=\"ios-medkit\" md=\"md-medkit\"></ion-icon>\n            </ion-button>\n          </section>\n        </ion-item>\n        <ion-item >\n          <section class=\"ion-text-center\" >\n            <ion-button (click)='presentAlertMultipleButtons()' \n             color=\"secondary\" expand=\"full\" shape=\"round\">Sobre\n              <ion-icon  style=\"padding-right: 10px;\" slot=\"icon-only\" ios=\"ios-medkit\" md=\"md-medkit\"></ion-icon>\n            </ion-button>\n          </section>\n        </ion-item>     \n      </ion-list>\n      <span class=\"titulo-caderneta-menor\"></span>\n      \n\n\n    </div>\n\n\n   \n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/calculos/calculos.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/calculos/calculos.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-button {\n  height: 50px;\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pwL0Rlc2t0b3AvaW5pX2FwcC9pbmlfdjVfcHdhL3NyYy9hcHAvcGFnZXMvY2FsY3Vsb3MvY2FsY3Vsb3MucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jYWxjdWxvcy9jYWxjdWxvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2FsY3Vsb3MvY2FsY3Vsb3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmlvbi1idXR0b24ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuIiwiaW9uLWJ1dHRvbiB7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/calculos/calculos.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/calculos/calculos.page.ts ***!
  \*************************************************/
/*! exports provided: CalculosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculosPage", function() { return CalculosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _Providers_Token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Providers/Token */ "./src/app/Providers/Token.ts");

var CalculosPage_1;



let CalculosPage = CalculosPage_1 = class CalculosPage {
    constructor(alertController, token, modalController, navCtrl) {
        this.alertController = alertController;
        this.token = token;
        this.modalController = modalController;
        this.navCtrl = navCtrl;
    }
    presentAlertMultipleButtons() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.presentModal(CalculosPage_1);
        });
    }
    presentModal(_ModalPage) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _ModalPage,
                cssClass: 'medium-modal-css'
            });
            return yield modal.present();
        });
    }
    closeModal() {
        this.modalController.dismiss();
    }
};
CalculosPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _Providers_Token__WEBPACK_IMPORTED_MODULE_3__["Token"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
CalculosPage = CalculosPage_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-calculos',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./calculos.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/calculos/calculos.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./calculos.page.scss */ "./src/app/pages/calculos/calculos.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _Providers_Token__WEBPACK_IMPORTED_MODULE_3__["Token"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], CalculosPage);



/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var _calculos_calculos_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../calculos/calculos.page */ "./src/app/pages/calculos/calculos.page.ts");








let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"], _calculos_calculos_page__WEBPACK_IMPORTED_MODULE_7__["CalculosPage"]],
        entryComponents: [
            _calculos_calculos_page__WEBPACK_IMPORTED_MODULE_7__["CalculosPage"]
        ]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".titulo-caderneta-virtual {\n  background-color: #E8E8E8;\n  font-family: \"Saira-ExtraBold\" !important;\n  font-weight: 800 !important;\n  color: #646464;\n  font-size: 30px;\n  padding: 30px 20px 10px 20px;\n  line-height: 1;\n  border-bottom: 5px solid;\n  border-color: #7da29b;\n}\n\n.texto-caderneta-virtual {\n  top: 20px;\n  color: #000;\n  font-size: 21px;\n  font-family: \"Roboto\" !important;\n  font-weight: 400 !important;\n  line-height: 1;\n  margin-top: 10px;\n}\n\nion-button {\n  height: 50px;\n  font-size: 20px;\n  font-family: \"Roboto\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pwL0Rlc2t0b3AvaW5pX2FwcC9pbmlfdjVfcHdhL3NyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVFLHlCQUFBO0VBQ0EseUNBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtBQ0RGOztBRElBO0VBRUUsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0ZGOztBRE1BO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnRpdHVsby1jYWRlcm5ldGEtdmlydHVhbFxue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRThFOEU4O1xuICBmb250LWZhbWlseTogXCJTYWlyYS1FeHRyYUJvbGRcIiAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogODAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNjQ2NDY0O1xuICBmb250LXNpemU6IDMwcHg7XG4gIHBhZGRpbmc6IDMwcHggMjBweCAxMHB4IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgO1xuICBib3JkZXItY29sb3I6ICM3ZGEyOWI7XG59XG5cbi50ZXh0by1jYWRlcm5ldGEtdmlydHVhbFxue1xuICB0b3A6IDIwcHg7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDIxcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG5cbn1cblxuaW9uLWJ1dHRvbiB7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiAyMHB4OyBcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nXG59XG5cbiIsIi50aXR1bG8tY2FkZXJuZXRhLXZpcnR1YWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRThFOEU4O1xuICBmb250LWZhbWlseTogXCJTYWlyYS1FeHRyYUJvbGRcIiAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogODAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNjQ2NDY0O1xuICBmb250LXNpemU6IDMwcHg7XG4gIHBhZGRpbmc6IDMwcHggMjBweCAxMHB4IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBib3JkZXItYm90dG9tOiA1cHggc29saWQ7XG4gIGJvcmRlci1jb2xvcjogIzdkYTI5Yjtcbn1cblxuLnRleHRvLWNhZGVybmV0YS12aXJ0dWFsIHtcbiAgdG9wOiAyMHB4O1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _Providers_Token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Providers/Token */ "./src/app/Providers/Token.ts");
/* harmony import */ var _calculos_calculos_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../calculos/calculos.page */ "./src/app/pages/calculos/calculos.page.ts");





let HomePage = class HomePage {
    constructor(alertController, token, modalController) {
        this.alertController = alertController;
        this.token = token;
        this.modalController = modalController;
        this.statusConsulta = false;
    }
    presentAlertMultipleButtons() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Selecione uma opção.',
                mode: 'ios',
                buttons: [
                    {
                        text: 'Nova Consulta',
                        handler: () => this.presentAlertPrompt('')
                    },
                    {
                        text: 'Inserir Token',
                        handler: () => this.presentAlertPrompt('')
                    },
                    {
                        text: 'Fechar'
                    },
                ]
            });
            yield alert.present();
        });
    }
    presentAlertPrompt(tokenValue) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const _alert = yield this.alertController.create({
                header: 'Insira o token do paciente.',
                message: 'Token fica localizado no prontuário médico.',
                mode: 'ios',
                cssClass: "alertInput",
                inputs: [
                    {
                        name: 'token',
                        type: 'text',
                        value: tokenValue,
                        placeholder: 'Insira o Token'
                    },
                ],
                buttons: [
                    {
                        text: 'QRCODE',
                        handler: () => {
                            this.token.scanToken().then(barcodeData => {
                                this.presentAlertPrompt(barcodeData.text);
                            }).catch(err => {
                                this.presentAlert("Ocorreu um erro na leitura.", 'Por favor, comunique ao suporte.');
                            });
                        }
                    },
                    {
                        text: 'Iniciar',
                        handler: (data) => {
                            const isTokenValid = this.token.checkToken(data.token);
                            if (isTokenValid)
                                return this.presentModal(_calculos_calculos_page__WEBPACK_IMPORTED_MODULE_4__["CalculosPage"]);
                            return this.presentAlert("Token Inválido.", 'Nenhum paciente foi encontrado.');
                        }
                    },
                    {
                        text: 'Fechar',
                    },
                ]
            });
            yield _alert.present();
        });
    }
    presentAlert(_header, _message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: _header,
                message: _message,
                mode: 'ios',
                buttons: ['Fechar']
            });
            yield alert.present();
        });
    }
    presentModal(_ModalPage) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.statusConsulta = !this.statusConsulta;
            const modal = yield this.modalController.create({
                component: _ModalPage,
                cssClass: 'medium-modal-css'
            });
            return yield modal.present();
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _Providers_Token__WEBPACK_IMPORTED_MODULE_3__["Token"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _Providers_Token__WEBPACK_IMPORTED_MODULE_3__["Token"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es2015.js.map