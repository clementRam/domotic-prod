(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/automatisation/container/automatisation-view/automatisation-view.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/automatisation/container/automatisation-view/automatisation-view.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-scenes></app-scenes>");

/***/ }),

/***/ "./src/app/automatisation/automatisation-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/automatisation/automatisation-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AutomatisationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutomatisationRoutingModule", function() { return AutomatisationRoutingModule; });
/* harmony import */ var src_app_automatisation_container_automatisation_view_automatisation_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/automatisation/container/automatisation-view/automatisation-view.component */ "./src/app/automatisation/container/automatisation-view/automatisation-view.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var automatisationRoutes = [
    { path: '', component: src_app_automatisation_container_automatisation_view_automatisation_view_component__WEBPACK_IMPORTED_MODULE_0__["AutomatisationViewComponent"] },
];
var AutomatisationRoutingModule = /** @class */ (function () {
    function AutomatisationRoutingModule() {
    }
    AutomatisationRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(automatisationRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], AutomatisationRoutingModule);
    return AutomatisationRoutingModule;
}());



/***/ }),

/***/ "./src/app/automatisation/automatisation.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/automatisation/automatisation.module.ts ***!
  \*********************************************************/
/*! exports provided: AutomatisationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutomatisationModule", function() { return AutomatisationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _container_automatisation_view_automatisation_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./container/automatisation-view/automatisation-view.component */ "./src/app/automatisation/container/automatisation-view/automatisation-view.component.ts");
/* harmony import */ var _automatisation_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./automatisation-routing.module */ "./src/app/automatisation/automatisation-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var AutomatisationModule = /** @class */ (function () {
    function AutomatisationModule() {
    }
    AutomatisationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                _automatisation_routing_module__WEBPACK_IMPORTED_MODULE_3__["AutomatisationRoutingModule"]
            ],
            declarations: [
                _container_automatisation_view_automatisation_view_component__WEBPACK_IMPORTED_MODULE_2__["AutomatisationViewComponent"]
            ]
        })
    ], AutomatisationModule);
    return AutomatisationModule;
}());



/***/ }),

/***/ "./src/app/automatisation/container/automatisation-view/automatisation-view.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/automatisation/container/automatisation-view/automatisation-view.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dG9tYXRpc2F0aW9uL2NvbnRhaW5lci9hdXRvbWF0aXNhdGlvbi12aWV3L2F1dG9tYXRpc2F0aW9uLXZpZXcuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/automatisation/container/automatisation-view/automatisation-view.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/automatisation/container/automatisation-view/automatisation-view.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: AutomatisationViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutomatisationViewComponent", function() { return AutomatisationViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_scene_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/scene.service */ "./src/app/shared/services/scene.service.ts");
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


var AutomatisationViewComponent = /** @class */ (function () {
    function AutomatisationViewComponent(sceneService) {
        this.sceneService = sceneService;
    }
    AutomatisationViewComponent.prototype.ngOnInit = function () {
        this.sceneService.getScenes().subscribe();
    };
    AutomatisationViewComponent.ctorParameters = function () { return [
        { type: src_app_shared_services_scene_service__WEBPACK_IMPORTED_MODULE_1__["SceneService"] }
    ]; };
    AutomatisationViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-automatisation-view',
            template: __importDefault(__webpack_require__(/*! raw-loader!./automatisation-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/automatisation/container/automatisation-view/automatisation-view.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./automatisation-view.component.scss */ "./src/app/automatisation/container/automatisation-view/automatisation-view.component.scss")).default]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_scene_service__WEBPACK_IMPORTED_MODULE_1__["SceneService"]])
    ], AutomatisationViewComponent);
    return AutomatisationViewComponent;
}());



/***/ })

}]);
//# sourceMappingURL=1.js.map