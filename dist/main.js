(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main container\">\n  <router-outlet></router-outlet>\n</div>\n<app-navbar></app-navbar>\n<app-notification></app-notification>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/devices/components/device/device.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/devices/components/device/device.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\" [class.off]=\"device.SubType === 'Switch' && device.Status === 'Off'\" (click)=\"handleClick()\">\n  <div class=\"card-body pr-3 pl-3 pt-2 pb-2\">\n    <div class=\"row\">\n      <div class=\"col pr-2 pl-2\">\n        <img src=\"assets/images/{{device.TypeImg}}.png\" class=\"device-img\" alt=\"device icon\">\n      </div>\n    </div>\n    <div class=\"row mt-2\">\n      <div class=\"col pr-2 pl-2 device-name\">\n        <span *ngIf=\"!devicesEditable; else editDescription\">\n          {{ device.Description }}\n        </span>\n        <ng-template #editDescription>\n          <input type=\"text\" class=\"form-control\" value=\"{{device.Description}}\" (focusout)=\"handleFocusOutDescription($event)\">\n        </ng-template>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col pr-2 pl-2 device-name\">\n        <span *ngIf=\"!devicesEditable; else editName\">\n          {{ device.Name }}\n        </span>\n        <ng-template #editName>\n            <input id=\"deviceName\" type=\"text\" class=\"form-control\" value=\"{{device.Name}}\" (focusout)=\"handleFocusOutName($event)\">\n        </ng-template>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col pr-2 pl-2 font-weight-light\">\n        <span *ngIf=\"device.SwitchType == 'Dimmer'; else data\">{{ device.Level}}%</span>\n        <ng-template #data>\n            {{ device.Data }}\n        </ng-template>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/devices/components/devices/devices.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/devices/components/devices/devices.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row pr-2 pl-2\">\n  <div *ngFor=\"let device of devices$ | async\" class=\"p-1 col-4 col-lg-2 mt-0\">\n    <app-device [device]=\"device\"></app-device>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/navbar/navbar.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/navbar/navbar.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar fixed-bottom navbar-light\">\n  <div class=\"col text-center\">\n    <a [routerLink]=\"['/dashboard']\" routerLinkActive=\"active\">\n      <fa-icon [icon]=\"faTachometerAlt\"></fa-icon>\n      <div class=\"text-logo\">\n        Dashboard\n      </div>\n    </a>\n  </div>\n  <div class=\"col text-center\">\n    <a [routerLink]=\"['/home']\" routerLinkActive=\"active\">\n      <fa-icon [icon]=\"faHome\"></fa-icon>\n      <div class=\"text-logo\">\n        Maison\n      </div>\n    </a>\n  </div>\n  <div class=\"col text-center\">\n    <a [routerLink]=\"['/automatisation']\" routerLinkActive=\"active\">\n      <fa-icon [icon]=\"faClock\"></fa-icon>\n      <div class=\"text-logo\">\n        Automatisation\n      </div>\n    </a>\n  </div>\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/notification/notification.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/notification/notification.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"notification?.displayed\" class=\"notification alert fixed-bottom m-4 alert-{{notification?.type}}\"\n  role=\"alert\">\n  <div class=\"container\">\n    {{notification?.message}}\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/scenes/components/scene/scene.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/scenes/components/scene/scene.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\" (click)=\"handleClick()\">\n  <div class=\"card-body pr-3 pl-3 pt-2 pb-2\">\n    <div class=\"row pb-2\">\n      <div class=\"col\">\n        <fa-icon [icon]=\"faHome\"></fa-icon>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col\">\n        <span class=\"text-bold\">{{scene.Name}}</span>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/scenes/components/scenes/scenes.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/scenes/components/scenes/scenes.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <div class=\"row pr-2 pl-2 mt-2\" [class.favoriteView]=\"favoriteView\">\n      <div *ngFor=\"let scene of scenes$ | async\" \n      [ngClass]=\"{\n        'p-1 col col-7 col-md-4 col-lg-3 mt-2 pr-1 pl-1': favoriteView,\n        'p-1 col-6 col-lg-4 mt-2': !favoriteView\n      }\">\n        <app-scene [scene]=\"scene\"></app-scene>\n      </div>\n  </div>");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var appRoutes = [
    { path: "automatisation", loadChildren: function () { return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./automatisation/automatisation.module */ "./src/app/automatisation/automatisation.module.ts")).then(function (m) { return m.AutomatisationModule; }); } },
    { path: "home", loadChildren: function () { return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ./home/home.module */ "./src/app/home/home.module.ts")).then(function (m) { return m.HomeModule; }); } },
    { path: "dashboard", loadChildren: function () { return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts")).then(function (m) { return m.DashboardModule; }); } },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.main {\n  padding-top: 70px;\n  padding-bottom: 70px;\n  position: relative;\n}\n\nh1 {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jbGVtZW50cmFtb25kb3UvV29ya3NwYWNlL2RvbW90aWMvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2Lm1haW4ge1xuICAgIHBhZGRpbmctdG9wOiA3MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA3MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaDF7XG4gICAgY29sb3I6ICNmZmY7XG59IiwiZGl2Lm1haW4ge1xuICBwYWRkaW5nLXRvcDogNzBweDtcbiAgcGFkZGluZy1ib3R0b206IDcwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaDEge1xuICBjb2xvcjogI2ZmZjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'domotic';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../http-interceptor */ "./src/http-interceptor/index.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]
            ],
            providers: [_http_interceptor__WEBPACK_IMPORTED_MODULE_1__["httpInterceptorProviders"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/shared/components/devices/components/device/device.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/components/devices/components/device/device.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.card {\n  cursor: pointer;\n  border-radius: 10px;\n}\ndiv.card.off {\n  background-color: rgba(255, 255, 255, 0.6);\n}\ndiv.card img.device-img {\n  height: 30px;\n}\ndiv.card .form-control {\n  background-image: linear-gradient(0deg, #3f51b5 2px, rgba(63, 81, 181, 0) 0), linear-gradient(0deg, rgba(0, 0, 0, 0.26) 1px, transparent 0);\n  font-size: 0.875rem;\n}\ndiv.card .form-control:focus {\n  box-shadow: none;\n}\ndiv.card input[type=text] {\n  height: 20.8px;\n}\ndiv.card .device-name span {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jbGVtZW50cmFtb25kb3UvV29ya3NwYWNlL2RvbW90aWMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9kZXZpY2VzL2NvbXBvbmVudHMvZGV2aWNlL2RldmljZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZGV2aWNlcy9jb21wb25lbnRzL2RldmljZS9kZXZpY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUNDSjtBREFJO0VBQ0ksMENBQUE7QUNFUjtBRENJO0VBQ0UsWUFBQTtBQ0NOO0FERUk7RUFDRSwySUFBQTtFQUNBLG1CQUFBO0FDQU47QURDTTtFQUNFLGdCQUFBO0FDQ1I7QURHSTtFQUNFLGNBQUE7QUNETjtBREtNO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDSFIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9kZXZpY2VzL2NvbXBvbmVudHMvZGV2aWNlL2RldmljZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5jYXJke1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICYub2Zme1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7IFxuICAgIH1cblxuICAgIGltZy5kZXZpY2UtaW1ne1xuICAgICAgaGVpZ2h0OiAzMHB4OyAgXG4gICAgfVxuXG4gICAgLmZvcm0tY29udHJvbCB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMGRlZywjM2Y1MWI1IDJweCxyZ2JhKDYzLDgxLDE4MSwwKSAwKSxsaW5lYXItZ3JhZGllbnQoMGRlZyxyZ2JhKDAsMCwwLC4yNikgMXB4LHRyYW5zcGFyZW50IDApO1xuICAgICAgZm9udC1zaXplOiAuODc1cmVtO1xuICAgICAgJjpmb2N1c3tcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIH1cbiAgICB9IFxuXG4gICAgaW5wdXRbdHlwZT1cInRleHRcIl17XG4gICAgICBoZWlnaHQ6IDIwLjhweDtcbiAgICB9XG5cbiAgICAuZGV2aWNlLW5hbWV7XG4gICAgICBzcGFue1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIH1cbiAgICB9IFxuICAgIFxufVxuIiwiZGl2LmNhcmQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5kaXYuY2FyZC5vZmYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG59XG5kaXYuY2FyZCBpbWcuZGV2aWNlLWltZyB7XG4gIGhlaWdodDogMzBweDtcbn1cbmRpdi5jYXJkIC5mb3JtLWNvbnRyb2wge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzNmNTFiNSAycHgsIHJnYmEoNjMsIDgxLCAxODEsIDApIDApLCBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgwLCAwLCAwLCAwLjI2KSAxcHgsIHRyYW5zcGFyZW50IDApO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xufVxuZGl2LmNhcmQgLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5kaXYuY2FyZCBpbnB1dFt0eXBlPXRleHRdIHtcbiAgaGVpZ2h0OiAyMC44cHg7XG59XG5kaXYuY2FyZCAuZGV2aWNlLW5hbWUgc3BhbiB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/shared/components/devices/components/device/device.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/components/devices/components/device/device.component.ts ***!
  \*********************************************************************************/
/*! exports provided: DeviceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceComponent", function() { return DeviceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/store/store */ "./src/app/shared/store/store.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var DeviceComponent = /** @class */ (function () {
    function DeviceComponent(store) {
        this.store = store;
    }
    DeviceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(src_app_shared_store_store__WEBPACK_IMPORTED_MODULE_1__["DefaultStoreDataNames"].DEVICES_EDITABLE)
            .subscribe(function (devicesEditable) { return _this.devicesEditable = devicesEditable; });
    };
    DeviceComponent.prototype.handleClick = function () {
        if (!this.devicesEditable && this.device.hasOwnProperty('switchState'))
            this.device.switchState().subscribe();
    };
    DeviceComponent.prototype.handleFocusOutName = function (event) {
        this.device.updateName(event.target.value).subscribe();
    };
    DeviceComponent.prototype.handleFocusOutDescription = function (event) {
        this.device.updateDescription(event.target.value).subscribe();
    };
    DeviceComponent.ctorParameters = function () { return [
        { type: src_app_shared_store_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DeviceComponent.prototype, "device", void 0);
    DeviceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-device',
            template: __importDefault(__webpack_require__(/*! raw-loader!./device.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/devices/components/device/device.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./device.component.scss */ "./src/app/shared/components/devices/components/device/device.component.scss")).default]
        }),
        __metadata("design:paramtypes", [src_app_shared_store_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], DeviceComponent);
    return DeviceComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/devices/components/devices/devices.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/shared/components/devices/components/devices/devices.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2RldmljZXMvY29tcG9uZW50cy9kZXZpY2VzL2RldmljZXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/shared/components/devices/components/devices/devices.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/components/devices/components/devices/devices.component.ts ***!
  \***********************************************************************************/
/*! exports provided: DevicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicesComponent", function() { return DevicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/store/store */ "./src/app/shared/store/store.ts");
/* harmony import */ var src_app_shared_services_device_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/device.service */ "./src/app/shared/services/device.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var DevicesComponent = /** @class */ (function () {
    function DevicesComponent(store, deviceService) {
        this.store = store;
        this.deviceService = deviceService;
    }
    DevicesComponent.prototype.ngOnInit = function () {
        this.devices$ = this.store.select(src_app_shared_store_store__WEBPACK_IMPORTED_MODULE_1__["DefaultStoreDataNames"].DEVICES);
        // this.deviceService.getDevices({favorite: "1"}).subscribe(d => this.store.set(DefaultStoreDataNames.DEVICES, d.result))
    };
    DevicesComponent.ctorParameters = function () { return [
        { type: src_app_shared_store_store__WEBPACK_IMPORTED_MODULE_1__["Store"] },
        { type: src_app_shared_services_device_service__WEBPACK_IMPORTED_MODULE_2__["DeviceService"] }
    ]; };
    DevicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-devices',
            template: __importDefault(__webpack_require__(/*! raw-loader!./devices.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/devices/components/devices/devices.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./devices.component.scss */ "./src/app/shared/components/devices/components/devices/devices.component.scss")).default]
        }),
        __metadata("design:paramtypes", [src_app_shared_store_store__WEBPACK_IMPORTED_MODULE_1__["Store"], src_app_shared_services_device_service__WEBPACK_IMPORTED_MODULE_2__["DeviceService"]])
    ], DevicesComponent);
    return DevicesComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/navbar/navbar.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/navbar/navbar.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar {\n  background-color: rgba(0, 0, 0, 0.75);\n  padding: 0 0 10px 0;\n}\n.navbar div.col a {\n  color: #aaa;\n}\n.navbar div.col a.active {\n  color: orange;\n}\n.navbar div.col a.active .text-logo {\n  color: orange;\n}\n.navbar div.col a:hover {\n  text-decoration: none;\n}\n.navbar div.col a fa-icon {\n  font-size: 1.8rem;\n}\n.navbar div.col a .text-logo {\n  font-size: 0.65rem;\n  color: #aaa;\n}\n@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {\n  .navbar {\n    padding-bottom: 40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jbGVtZW50cmFtb25kb3UvV29ya3NwYWNlL2RvbW90aWMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0kscUNBQUE7RUFDQSxtQkFBQTtBQ0ZKO0FESVE7RUFDSSxXQVBJO0FDS2hCO0FER1k7RUFDSSxhQVZGO0FDU2Q7QURFZ0I7RUFDSSxhQVpOO0FDWWQ7QURHWTtFQUNJLHFCQUFBO0FDRGhCO0FER1k7RUFDSSxpQkFBQTtBQ0RoQjtBREdZO0VBQ0ksa0JBQUE7RUFDQSxXQXRCQTtBQ3FCaEI7QURPQTtFQUlRO0lBQ0ksb0JBQUE7RUNQVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRhY3RpdmVDb2xvcjogb3JhbmdlO1xuJGluYWN0aXZlQ29sb3I6ICNhYWE7XG5cbi5uYXZiYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjMDAwMDAwLCAkYWxwaGE6IDAuNzUpO1xuICAgIHBhZGRpbmc6IDAgMCAxMHB4IDA7XG4gICAgZGl2LmNvbCB7XG4gICAgICAgIGF7XG4gICAgICAgICAgICBjb2xvcjogJGluYWN0aXZlQ29sb3I7XG4gICAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRhY3RpdmVDb2xvcjtcbiAgICAgICAgICAgICAgICAudGV4dC1sb2dve1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGFjdGl2ZUNvbG9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6aG92ZXJ7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmEtaWNvbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGV4dC1sb2dvIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNjVyZW07XG4gICAgICAgICAgICAgICAgY29sb3I6ICRpbmFjdGl2ZUNvbG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gXG4gICAgYW5kIChkZXZpY2Utd2lkdGggOiAzNzVweCkgXG4gICAgYW5kIChkZXZpY2UtaGVpZ2h0IDogODEycHgpIFxuICAgIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW8gOiAzKSB7IFxuICAgICAgICAubmF2YmFye1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDQwcHg7ICAgIFxuICAgICAgICB9XG4gICAgfSIsIi5uYXZiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICBwYWRkaW5nOiAwIDAgMTBweCAwO1xufVxuLm5hdmJhciBkaXYuY29sIGEge1xuICBjb2xvcjogI2FhYTtcbn1cbi5uYXZiYXIgZGl2LmNvbCBhLmFjdGl2ZSB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG4ubmF2YmFyIGRpdi5jb2wgYS5hY3RpdmUgLnRleHQtbG9nbyB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG4ubmF2YmFyIGRpdi5jb2wgYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5uYXZiYXIgZGl2LmNvbCBhIGZhLWljb24ge1xuICBmb250LXNpemU6IDEuOHJlbTtcbn1cbi5uYXZiYXIgZGl2LmNvbCBhIC50ZXh0LWxvZ28ge1xuICBmb250LXNpemU6IDAuNjVyZW07XG4gIGNvbG9yOiAjYWFhO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChkZXZpY2Utd2lkdGg6IDM3NXB4KSBhbmQgKGRldmljZS1oZWlnaHQ6IDgxMnB4KSBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAzKSB7XG4gIC5uYXZiYXIge1xuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/shared/components/navbar/navbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.faHome = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faHome"];
        this.faClock = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faClock"];
        this.faTachometerAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTachometerAlt"];
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __importDefault(__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/navbar/navbar.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./navbar.component.scss */ "./src/app/shared/components/navbar/navbar.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/notification/notification.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/notification/notification.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".notification {\n  box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jbGVtZW50cmFtb25kb3UvV29ya3NwYWNlL2RvbW90aWMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0UsNENBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm90aWZpY2F0aW9uIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggMnB4IDVweCAwIHJnYmEoMCwwLDAsLjIpO1xuICAtbW96LWJveC1zaGFkb3c6IDJweCAycHggNXB4IDAgcmdiYSgwLDAsMCwuMik7XG4gIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDAgcmdiYSgwLDAsMCwuMik7XG59IiwiLm5vdGlmaWNhdGlvbiB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIC1tb3otYm94LXNoYWRvdzogMnB4IDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/shared/components/notification/notification.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/notification/notification.component.ts ***!
  \**************************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/notification.service */ "./src/app/shared/services/notification.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var NotificationComponent = /** @class */ (function () {
    function NotificationComponent(notificationService) {
        this.notificationService = notificationService;
    }
    NotificationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.notificationService.notificationSubject.subscribe(function (notification) { return _this.notification = notification; });
    };
    NotificationComponent.ctorParameters = function () { return [
        { type: _services_notification_service__WEBPACK_IMPORTED_MODULE_1__["NotificationService"] }
    ]; };
    NotificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notification',
            template: __importDefault(__webpack_require__(/*! raw-loader!./notification.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/notification/notification.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./notification.component.scss */ "./src/app/shared/components/notification/notification.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_notification_service__WEBPACK_IMPORTED_MODULE_1__["NotificationService"]])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/scenes/components/scene/scene.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/scenes/components/scene/scene.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n  border-radius: 10px;\n}\n\nfa-icon {\n  font-size: 1.5rem;\n  color: orange;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jbGVtZW50cmFtb25kb3UvV29ya3NwYWNlL2RvbW90aWMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9zY2VuZXMvY29tcG9uZW50cy9zY2VuZS9zY2VuZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2NlbmVzL2NvbXBvbmVudHMvc2NlbmUvc2NlbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9zY2VuZXMvY29tcG9uZW50cy9zY2VuZS9zY2VuZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbmZhLWljb257XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgY29sb3I6IG9yYW5nZTtcbn0iLCIuY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbmZhLWljb24ge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY29sb3I6IG9yYW5nZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared/components/scenes/components/scene/scene.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/scenes/components/scene/scene.component.ts ***!
  \******************************************************************************/
/*! exports provided: SceneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SceneComponent", function() { return SceneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var src_app_shared_services_scene_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/scene.service */ "./src/app/shared/services/scene.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var SceneComponent = /** @class */ (function () {
    function SceneComponent(sceneService) {
        this.sceneService = sceneService;
        this.faHome = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faHome"];
    }
    SceneComponent.prototype.ngOnInit = function () {
    };
    SceneComponent.prototype.handleClick = function () {
        this.sceneService.setScene(this.scene).subscribe();
    };
    SceneComponent.ctorParameters = function () { return [
        { type: src_app_shared_services_scene_service__WEBPACK_IMPORTED_MODULE_2__["SceneService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SceneComponent.prototype, "scene", void 0);
    SceneComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-scene',
            template: __importDefault(__webpack_require__(/*! raw-loader!./scene.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/scenes/components/scene/scene.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./scene.component.scss */ "./src/app/shared/components/scenes/components/scene/scene.component.scss")).default]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_scene_service__WEBPACK_IMPORTED_MODULE_2__["SceneService"]])
    ], SceneComponent);
    return SceneComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/scenes/components/scenes/scenes.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/scenes/components/scenes/scenes.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".favoriteView {\n  overflow-x: scroll;\n  display: -webkit-inline-box;\n  width: 100vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jbGVtZW50cmFtb25kb3UvV29ya3NwYWNlL2RvbW90aWMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9zY2VuZXMvY29tcG9uZW50cy9zY2VuZXMvc2NlbmVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9zY2VuZXMvY29tcG9uZW50cy9zY2VuZXMvc2NlbmVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3NjZW5lcy9jb21wb25lbnRzL3NjZW5lcy9zY2VuZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmF2b3JpdGVWaWV3IHtcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtYm94O1xuICAgIHdpZHRoOiAxMDB2dztcbn1cbiIsIi5mYXZvcml0ZVZpZXcge1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWJveDtcbiAgd2lkdGg6IDEwMHZ3O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/shared/components/scenes/components/scenes/scenes.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/scenes/components/scenes/scenes.component.ts ***!
  \********************************************************************************/
/*! exports provided: ScenesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScenesComponent", function() { return ScenesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/store/store */ "./src/app/shared/store/store.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var ScenesComponent = /** @class */ (function () {
    function ScenesComponent(store) {
        this.store = store;
    }
    ScenesComponent.prototype.ngOnInit = function () {
        if (this.favoriteView === null)
            this.favoriteView = false;
        this.scenes$ = this.store.select(src_app_shared_store_store__WEBPACK_IMPORTED_MODULE_1__["DefaultStoreDataNames"].SCENES);
    };
    ScenesComponent.ctorParameters = function () { return [
        { type: src_app_shared_store_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ScenesComponent.prototype, "favoriteView", void 0);
    ScenesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-scenes',
            template: __importDefault(__webpack_require__(/*! raw-loader!./scenes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/scenes/components/scenes/scenes.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./scenes.component.scss */ "./src/app/shared/components/scenes/components/scenes/scenes.component.scss")).default]
        }),
        __metadata("design:paramtypes", [src_app_shared_store_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], ScenesComponent);
    return ScenesComponent;
}());



/***/ }),

/***/ "./src/app/shared/models/notification-types.enum.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/models/notification-types.enum.ts ***!
  \**********************************************************/
/*! exports provided: NotificationTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationTypes", function() { return NotificationTypes; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var NotificationTypes;
(function (NotificationTypes) {
    NotificationTypes["Success"] = "success";
    NotificationTypes["Danger"] = "danger";
})(NotificationTypes || (NotificationTypes = {}));


/***/ }),

/***/ "./src/app/shared/models/notification.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/models/notification.model.ts ***!
  \*****************************************************/
/*! exports provided: Notification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return Notification; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Notification = /** @class */ (function () {
    function Notification(message, type) {
        this.message = message;
        this.type = type;
        this.displayed = true;
    }
    return Notification;
}());



/***/ }),

/***/ "./src/app/shared/services/device-improvement.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/services/device-improvement.service.ts ***!
  \***************************************************************/
/*! exports provided: DeviceImprovementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceImprovementService", function() { return DeviceImprovementService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared_models_notification_types_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/models/notification-types.enum */ "./src/app/shared/models/notification-types.enum.ts");
/* harmony import */ var src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var DeviceImprovementService = /** @class */ (function () {
    function DeviceImprovementService(notificationService, http) {
        this.notificationService = notificationService;
        this.http = http;
    }
    DeviceImprovementService.prototype.addMethodsToDevice = function (device, devices$) {
        if (this.isSwitchType(device))
            this.addSwitchStateMethod(device, devices$);
        this.addUpdateNameMethod(device, devices$);
        this.addDescriptionMethod(device, devices$);
        return device;
    };
    DeviceImprovementService.prototype.isSwitchType = function (device) {
        return device.SwitchType === "On/Off" || device.SwitchType === "Dimmer";
    };
    DeviceImprovementService.prototype.addSwitchStateMethod = function (device, devices$) {
        var _this = this;
        device.switchState = function () {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('type', 'command')
                .append('param', 'switchlight')
                .append('idx', device.idx)
                .append('switchcmd', 'Toggle');
            return _this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, { params: params, observe: 'response' })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
                if (response.body.status === 'OK') {
                    devices$.subscribe();
                }
                else {
                    _this.notificationService.sendNotificationTemp(response.body.status + ': ' + response.body.title, src_app_shared_models_notification_types_enum__WEBPACK_IMPORTED_MODULE_4__["NotificationTypes"].Danger);
                }
                return response.body;
            }));
        };
    };
    DeviceImprovementService.prototype.addUpdateNameMethod = function (device, devices$) {
        var _this = this;
        device.updateName = function (name) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('type', 'setused')
                .append('idx', device.idx)
                .append('name', name)
                .append('description', device.Description)
                .append('used', 'true');
            return _this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, { params: params, observe: 'response' })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
                if (response.body.status === 'OK') {
                    devices$.subscribe();
                }
                else {
                    _this.notificationService.sendNotificationTemp(response.body.status + ': ' + response.body.title, src_app_shared_models_notification_types_enum__WEBPACK_IMPORTED_MODULE_4__["NotificationTypes"].Danger);
                }
                return response.body;
            }));
        };
    };
    DeviceImprovementService.prototype.addDescriptionMethod = function (device, devices$) {
        var _this = this;
        device.updateDescription = function (description) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('description', description)
                .append('idx', device.idx)
                .append('name', device.Name)
                .append('type', 'setused')
                .append('used', 'true');
            return _this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, { params: params, observe: 'response' })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
                if (response.body.status === 'OK') {
                    devices$.subscribe();
                }
                else {
                    _this.notificationService.sendNotificationTemp(response.body.status + ': ' + response.body.title, src_app_shared_models_notification_types_enum__WEBPACK_IMPORTED_MODULE_4__["NotificationTypes"].Danger);
                }
                return response.body;
            }));
        };
    };
    DeviceImprovementService.ctorParameters = function () { return [
        { type: src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    DeviceImprovementService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DeviceImprovementService);
    return DeviceImprovementService;
}());



/***/ }),

/***/ "./src/app/shared/services/device.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/device.service.ts ***!
  \***************************************************/
/*! exports provided: DeviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceService", function() { return DeviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_shared_store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/store/store */ "./src/app/shared/store/store.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _device_improvement_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./device-improvement.service */ "./src/app/shared/services/device-improvement.service.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var DeviceService = /** @class */ (function () {
    function DeviceService(http, store, deviceImprovementService) {
        this.http = http;
        this.store = store;
        this.deviceImprovementService = deviceImprovementService;
    }
    DeviceService.prototype.getDevices = function (options) {
        var _this = this;
        var defaultParams = {
            type: 'devices',
            favorite: "0",
            filter: 'all',
            used: "true"
        };
        var params = __assign({}, defaultParams, options);
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('type', params.type)
            .append('favorite', params.favorite)
            .append('filter', params.filter)
            .append('used', params.used);
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, {
            params: httpParams
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (devices) {
            devices.result = devices.result.map(function (device) { return _this.deviceImprovementService.addMethodsToDevice(device, _this.getDevices(params)); });
            _this.store.set(src_app_shared_store_store__WEBPACK_IMPORTED_MODULE_3__["DefaultStoreDataNames"].DEVICES, devices.result);
            return devices;
        }));
    };
    DeviceService.prototype.getDevice = function (idx) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('rid', idx)
            .append('type', 'devices');
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, { params: params });
    };
    DeviceService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: src_app_shared_store_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _device_improvement_service__WEBPACK_IMPORTED_MODULE_5__["DeviceImprovementService"] }
    ]; };
    DeviceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], src_app_shared_store_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _device_improvement_service__WEBPACK_IMPORTED_MODULE_5__["DeviceImprovementService"]])
    ], DeviceService);
    return DeviceService;
}());



/***/ }),

/***/ "./src/app/shared/services/notification.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/notification.service.ts ***!
  \*********************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models_notification_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/notification.model */ "./src/app/shared/models/notification.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var NotificationService = /** @class */ (function () {
    function NotificationService() {
        this.notificationSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    NotificationService.prototype.sendNotificationTemp = function (message, type) {
        var _this = this;
        this.notification = new _models_notification_model__WEBPACK_IMPORTED_MODULE_2__["Notification"](message, type);
        this.emitNotificationSubject();
        setTimeout(function () {
            _this.notification.displayed = false;
        }, 4000);
    };
    NotificationService.prototype.emitNotificationSubject = function () {
        this.notificationSubject.next(this.notification);
    };
    NotificationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "./src/app/shared/services/scene.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/scene.service.ts ***!
  \**************************************************/
/*! exports provided: SceneService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SceneService", function() { return SceneService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared_store_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/store/store */ "./src/app/shared/store/store.ts");
/* harmony import */ var src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");
/* harmony import */ var src_app_shared_models_notification_types_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/models/notification-types.enum */ "./src/app/shared/models/notification-types.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







var SceneService = /** @class */ (function () {
    function SceneService(http, store, notificationService) {
        this.http = http;
        this.store = store;
        this.notificationService = notificationService;
    }
    SceneService.prototype.getScenes = function () {
        var _this = this;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('type', 'scenes');
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, { params: params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (scenes) {
            _this.store.set(src_app_shared_store_store__WEBPACK_IMPORTED_MODULE_4__["DefaultStoreDataNames"].SCENES, scenes.result);
            return scenes;
        }));
    };
    SceneService.prototype.setScene = function (scene) {
        var _this = this;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('type', 'command')
            .append('param', 'switchscene')
            .append('idx', scene.idx)
            .append('switchcmd', 'On');
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, { params: params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (scene) {
            _this.notificationService.sendNotificationTemp(scene.status, scene.status === 'OK' ? src_app_shared_models_notification_types_enum__WEBPACK_IMPORTED_MODULE_6__["NotificationTypes"].Success : src_app_shared_models_notification_types_enum__WEBPACK_IMPORTED_MODULE_6__["NotificationTypes"].Danger);
            return scene;
        }));
    };
    SceneService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: src_app_shared_store_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }
    ]; };
    SceneService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], src_app_shared_store_store__WEBPACK_IMPORTED_MODULE_4__["Store"], src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]])
    ], SceneService);
    return SceneService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/notification/notification.component */ "./src/app/shared/components/notification/notification.component.ts");
/* harmony import */ var _components_scenes_components_scene_scene_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/scenes/components/scene/scene.component */ "./src/app/shared/components/scenes/components/scene/scene.component.ts");
/* harmony import */ var _components_scenes_components_scenes_scenes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/scenes/components/scenes/scenes.component */ "./src/app/shared/components/scenes/components/scenes/scenes.component.ts");
/* harmony import */ var _components_devices_components_device_device_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/devices/components/device/device.component */ "./src/app/shared/components/devices/components/device/device.component.ts");
/* harmony import */ var _components_devices_components_devices_devices_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/devices/components/devices/devices.component */ "./src/app/shared/components/devices/components/devices/devices.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/shared/components/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};












var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"],
            ],
            declarations: [
                _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_5__["NotificationComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                _components_devices_components_device_device_component__WEBPACK_IMPORTED_MODULE_8__["DeviceComponent"],
                _components_devices_components_devices_devices_component__WEBPACK_IMPORTED_MODULE_9__["DevicesComponent"],
                _components_scenes_components_scene_scene_component__WEBPACK_IMPORTED_MODULE_6__["SceneComponent"],
                _components_scenes_components_scenes_scenes_component__WEBPACK_IMPORTED_MODULE_7__["ScenesComponent"],
            ],
            exports: [
                _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_5__["NotificationComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"],
                _components_devices_components_device_device_component__WEBPACK_IMPORTED_MODULE_8__["DeviceComponent"],
                _components_devices_components_devices_devices_component__WEBPACK_IMPORTED_MODULE_9__["DevicesComponent"],
                _components_scenes_components_scene_scene_component__WEBPACK_IMPORTED_MODULE_6__["SceneComponent"],
                _components_scenes_components_scenes_scenes_component__WEBPACK_IMPORTED_MODULE_7__["ScenesComponent"],
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/store/store.ts":
/*!***************************************!*\
  !*** ./src/app/shared/store/store.ts ***!
  \***************************************/
/*! exports provided: DefaultStoreDataNames, Store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultStoreDataNames", function() { return DefaultStoreDataNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var initState = {
    devices: undefined,
    devicesEditable: false,
    scenes: undefined
};
var DefaultStoreDataNames;
(function (DefaultStoreDataNames) {
    DefaultStoreDataNames["DEVICES"] = "devices";
    DefaultStoreDataNames["DEVICES_EDITABLE"] = "devicesEditable";
    DefaultStoreDataNames["SCENES"] = "scenes";
})(DefaultStoreDataNames || (DefaultStoreDataNames = {}));
var Store = /** @class */ (function () {
    function Store() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](initState);
        this.store = this.subject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])());
    }
    Object.defineProperty(Store.prototype, "value", {
        get: function () {
            return this.subject.value;
        },
        enumerable: true,
        configurable: true
    });
    Store.prototype.select = function (name) {
        return this.store.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])(name));
    };
    Store.prototype.set = function (name, state) {
        var _a;
        this.subject.next(__assign({}, this.value, (_a = {}, _a[name] = state, _a)));
    };
    Store = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        })
    ], Store);
    return Store;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var environment = {
    production: false,
    domoticzUrl: 'http://raspberry:8080',
    apiUrl: 'http://raspberry:8080/json.htm'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/http-interceptor/index.ts":
/*!***************************************!*\
  !*** ./src/http-interceptor/index.ts ***!
  \***************************************/
/*! exports provided: httpInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpInterceptorProviders", function() { return httpInterceptorProviders; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _noop_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./noop-interceptor */ "./src/http-interceptor/noop-interceptor.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var httpInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _noop_interceptor__WEBPACK_IMPORTED_MODULE_1__["NoopInterceptor"], multi: true },
];


/***/ }),

/***/ "./src/http-interceptor/noop-interceptor.ts":
/*!**************************************************!*\
  !*** ./src/http-interceptor/noop-interceptor.ts ***!
  \**************************************************/
/*! exports provided: NoopInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoopInterceptor", function() { return NoopInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");
/* harmony import */ var src_app_shared_models_notification_types_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/models/notification-types.enum */ "./src/app/shared/models/notification-types.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var NoopInterceptor = /** @class */ (function () {
    function NoopInterceptor(notificationService) {
        this.notificationService = notificationService;
    }
    NoopInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error, caught) {
            console.warn(error);
            if (error.error instanceof ErrorEvent) {
                _this.notificationService.sendNotificationTemp("Error " + error.status + ": " + error.error.error, src_app_shared_models_notification_types_enum__WEBPACK_IMPORTED_MODULE_4__["NotificationTypes"].Danger);
            }
            else if (error.error && error.error.message) {
                _this.notificationService.sendNotificationTemp("Error " + error.status + ": " + error.error.message, src_app_shared_models_notification_types_enum__WEBPACK_IMPORTED_MODULE_4__["NotificationTypes"].Danger);
            }
            else if (error.error instanceof ProgressEvent) {
                _this.notificationService.sendNotificationTemp("Error " + error.status + ": " + error.message, src_app_shared_models_notification_types_enum__WEBPACK_IMPORTED_MODULE_4__["NotificationTypes"].Danger);
            }
            else {
                _this.notificationService.sendNotificationTemp("Error " + error.status + ": " + error.error, src_app_shared_models_notification_types_enum__WEBPACK_IMPORTED_MODULE_4__["NotificationTypes"].Danger);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(error);
        }));
    };
    NoopInterceptor.ctorParameters = function () { return [
        { type: src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] }
    ]; };
    NoopInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]])
    ], NoopInterceptor);
    return NoopInterceptor;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/clementramondou/Workspace/domotic/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map