(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav{\r\n    background: rgba(255,255,255,0.95)!important;\r\n    box-shadow: 0px 2px 12px -3px rgba(0,0,0,0.75);\r\n    border-top: 5px solid #00bf72\r\n}\r\nnav .active a{\r\n    color: #00bf72;\r\n    font-weight: 500    \r\n}\r\n.search-icon{\r\n    position: relative;\r\n    right: 15%;\r\n    color: lightgrey\r\n}\r\n@media screen and (max-width: 990px) {    \r\n    .search-icon{\r\n        right: 7%;\r\n    }\r\n}\r\n.search-icon:hover{\r\n    color: #00bf72;\r\n    cursor: pointer;\r\n}\r\ninput{\r\n    border: 1px solid lightgrey;\r\n    padding: 0.5rem 1rem;\r\n    color: #00bf72\r\n}\r\ninput:focus{\r\n    outline: 0.8px solid #00bf72\r\n}\r\n.search-result-container{\r\n    position: fixed;\r\n    z-index: 5;\r\n    max-height: 80vh;\r\n    overflow-y: auto\r\n}\r\n.search-result-item:hover{\r\n    cursor: pointer;\r\n    background: whitesmoke\r\n}\r\n.search-close-button{\r\n    cursor: pointer;\r\n    color: lightgrey;\r\n    transition: all 0.5s ease\r\n}\r\n.search-close-button:hover{\r\n    color: grey\r\n}\r\nfooter{\r\n    margin-top: 10rem;\r\n    padding-top: 1rem;\r\n    background: #004d7a;\r\n    color: white;\r\n    position: relative\r\n}\r\nfooter:before{\r\n    content: \"\";\r\n    height: 15vh;\r\n    width: 90vw;\r\n    position: absolute;\r\n    top: -8vh;\r\n    z-index: -1;\r\n    background: #00bf72;\r\n    -webkit-transform: rotate(3.8deg) skewX(3.8deg);\r\n            transform: rotate(3.8deg) skewX(3.8deg);\r\n    box-shadow: 0px 3px 22px -3px rgba(0,0,0,0.75);\r\n}\r\nfooter::after{\r\n    content: \"\";\r\n    height: 20vh;\r\n    width: 100vw;\r\n    position: absolute;\r\n    top: -8vh;\r\n    right: 0;\r\n    z-index: -1;\r\n    background: #004d7a;\r\n    -webkit-transform: rotate(-3.8deg) skewX(-3.8deg);\r\n            transform: rotate(-3.8deg) skewX(-3.8deg);\r\n    box-shadow: 0px 3px 26px -3px rgba(0,0,0,0.75);\r\n}\r\n.footer-link{\r\n    text-decoration: none;\r\n    color: #00bf72\r\n}\r\n.footer-link:hover{\r\n    color: #47d49c\r\n}\r\n.footer-icon{\r\n    color: #00bf72;\r\n    font-size: 1.8rem\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- navbar -->\r\n<nav class=\"navbar sticky-top navbar-expand-lg navbar-light bg-light\">\r\n  <a class=\"navbar-brand\" [routerLink]=\"['/home']\">Country Deatils</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\r\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\" [ngClass]=\"{active: url == '/home'}\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/home']\">Home\r\n          <span class=\"sr-only\">(current)</span>\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\" *ngFor=\"let region of ['Americas','Europe','Asia','Africa','Oceania']\" [ngClass]=\"{active: url && url.includes(region | lowercase) }\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/countries','region',region | lowercase]\">{{region}}</a>\r\n      </li>\r\n    </ul>\r\n    <div class=\"form-inline my-2 my-lg-0\">\r\n      <input class=\"mr-sm-2\" type=\"search\" placeholder=\"Search country\" aria-label=\"Search\" [(ngModel)]=\"searchInput\" (keyup.enter)=\"getCountry(searchInput)\">\r\n      <fa-icon class=\"search-icon\" [icon]=\"faSearch\" (click)=\"getCountry(searchInput)\"></fa-icon>\r\n    </div>\r\n  </div>\r\n</nav>\r\n<!-- end navbar -->\r\n\r\n<!-- navbar search results container -->\r\n<div class=\"container-fluid search-result-container\" *ngIf=\"search\">\r\n  <div class=\"row justify-content-end\">\r\n    <div class=\"col-5 col-md-3 card\">\r\n      <div class=\"row justify-content-between align-items-center\">\r\n        <h2 class=\"col-auto lead pt-2\">Results</h2>\r\n        <fa-icon class=\"col-auto search-close-button\" [icon]=\"faTimesCircle\" (click)=\"search=searchInput=undefined\"></fa-icon>\r\n      </div>\r\n      <div class=\"row py-2 align-items-center search-result-item\" *ngFor=\"let country of search\" [routerLink]=\"['/country',country.alpha3Code]\"\r\n        (click)=\"search=undefined\">\r\n        <div class=\"col-12 col-md-3\">\r\n          <img class=\"img-fluid\" src=\"{{country.flag}}\">\r\n        </div>\r\n        <div class=\"col-12 col-md-9\">{{country.name}}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<!-- footer -->\r\n<footer>\r\n  <div class=\"container\">\r\n    <div class=\"row py-4\">\r\n      <div class=\"col-12 col-md mb-4 mb-md-0 text-center text-md-left\">\r\n        <div class=\"row\">\r\n          <span class=\"col-12\">Made using REST Countries API</span>\r\n          <div class=\"col-12\">\r\n            <a class=\"footer-link\" href=\"https://restcountries.eu\" target=\"blank\">restcountries.eu</a>\r\n          </div>\r\n          <span class=\"col-12\">Github repository</span>\r\n          <div class=\"col-12\">\r\n            <a class=\"footer-link\" href=\"https://github.com/nitin095/Country-Details\" target=\"blank\">github.com/nitin095/Country-Details</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12 col-md-3 mb-4 mb-md-0 text-center\">\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <fa-icon class=\"mr-2 footer-icon\" [icon]=\"faEnvelope\"></fa-icon>\r\n          </div>\r\n          <span class=\"col-12 lead\">nitinshokeen9@gmail.com</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12 col-md-3 text-center\">\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <a href=\"https://github.com/nitin095\" target=\"blank\">\r\n              <fa-icon class=\"mr-2 footer-icon\" [icon]=\"faGithubSquare\"></fa-icon>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-12 lead\">github.com/nitin095</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row py-1\">\r\n      <small class=\"col text-center\">&copy; 2018 Nitin Shokeen</small>\r\n    </div>\r\n  </div>\r\n</footer>"

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
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(router, httpService) {
        var _this = this;
        this.router = router;
        this.httpService = httpService;
        this.title = 'app';
        this.faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSearch"];
        this.faTimesCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTimesCircle"];
        this.faEnvelope = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEnvelope"];
        this.faGithubSquare = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faGithubSquare"];
        this.getCountry = function (search) {
            _this.httpService.getCountryBySearch('name', search).subscribe(function (data) {
                _this.search = data;
                console.log(_this.search);
            }, function (error) {
                _this.search = ['not found'];
                console.log(error.errorMessage);
            });
        };
        console.log('app component constructor called');
        router.events.subscribe(function (val) {
            _this.url = _this.router.url;
        });
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]])
    ], AppComponent);
    return AppComponent;
}());

// end class AppComponent


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm5/nicky-lenaers-ngx-scroll-to.js");
/* harmony import */ var _data_data_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./data/data.module */ "./src/app/data/data.module.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _data_data_module__WEBPACK_IMPORTED_MODULE_10__["DataModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
                _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_9__["ScrollToModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundComponent"] }
                ])
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data/countries/countries.component.css":
/*!********************************************************!*\
  !*** ./src/app/data/countries/countries.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".region-name{\r\n    position: absolute;\r\n    font-family: 'Poppins', sans-serif;\r\n    font-size: 10rem;\r\n    letter-spacing: -5px;\r\n    color: lightgrey;\r\n    z-index: -1;\r\n    background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);\r\n    background-size: cover;\r\n    -webkit-background-clip: text;\r\n    background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n}\r\n.region-img{\r\n    max-height: 50vh;\r\n}\r\n.filter-name{\r\n    font-family: 'Poppins', sans-serif;\r\n    font-size: 10rem;\r\n    letter-spacing: -5px;\r\n    color: lightgrey;\r\n    background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);\r\n    background-size: cover;\r\n    -webkit-background-clip: text;\r\n    background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n}\r\n.card{\r\n    box-shadow: 0px 2px 8px -4px rgba(0,0,0,0.75);\r\n    transition: all 0.5s ease;\r\n    padding-bottom: 0px!important \r\n}\r\n.card:hover{\r\n    box-shadow: 0px 2px 15px -4px rgba(0,0,0,0.75);\r\n}\r\n.card-text{\r\n    line-height: 1rem \r\n}\r\n.item-title{\r\n    color: #008793;\r\n    font-weight: 500 \r\n}\r\n.card .lead{\r\n    font-weight: 500 \r\n}\r\n.card .details-row{\r\n    font-size: small \r\n}\r\n.card:hover button{\r\n    display: block \r\n}\r\n.card button{\r\n    display: none;\r\n    position: absolute;\r\n    bottom: 0;\r\n    width: 100%;\r\n    background: none;\r\n    padding: 0.1rem 1rem;\r\n    border: 1px solid lightgrey;\r\n    color: #00bf72;\r\n    text-transform: uppercase;\r\n    font-size: small;\r\n    letter-spacing: 1px;\r\n    font-weight: 500;\r\n    transition: all 0.5s ease \r\n}\r\n.card button:hover{\r\n    border: 1px solid #00bf72;\r\n    background: #00bf72;\r\n    color: #fff;\r\n    font-weight: 500 \r\n}\r\n.country-code-col::before{\r\n    content: \"\";\r\n    width: 100%;\r\n    position: absolute;\r\n    top: 55%;\r\n    right: 0;\r\n    border-top: 1px solid lightgrey;\r\n    z-index: 1 \r\n}\r\n.country-code-col > small{\r\n    background: white;\r\n    color: #00bf72;\r\n    font-weight: bold;\r\n    z-index: 2;\r\n    position: relative;\r\n    padding: 0rem 1rem \r\n}\r\nh2{\r\n    font-family: 'Poppins', sans-serif;\r\n    text-transform: uppercase;\r\n    margin-top: 1rem;\r\n    word-spacing: 0.5rem \r\n}\r\n.search-input small{\r\n    font-weight: 700;\r\n    letter-spacing: 1px \r\n}\r\n.search-input input{\r\n    border: none;\r\n    border-bottom: 1px solid black;\r\n    width: 100% \r\n}\r\n.search-input input:focus{\r\n    outline: none \r\n}\r\n.search-input{\r\n    border: 2px solid transparent;\r\n    padding-bottom: 0.3rem;\r\n    line-height: 1rem \r\n}\r\n.search-input.active{\r\n    background: whitesmoke \r\n}\r\n.search-input.active input{\r\n    background: none \r\n}\r\n.sort small{\r\n    font-weight: 700;\r\n    letter-spacing: 1px \r\n}\r\n.sort select{\r\n    border: none;\r\n    border-bottom: 1px solid black;\r\n    width: 100% \r\n}\r\n.sort{\r\n    border: 2px solid transparent;\r\n    padding-bottom: 0.3rem;\r\n    line-height: 1rem \r\n}\r\n.sort select:focus{\r\n    outline: none \r\n}\r\n.sort.active{\r\n    background: whitesmoke \r\n}\r\n.sort.active select{\r\n    background: none;\r\n}\r\n.hover:hover{\r\n    color: #051937;\r\n    background: whitesmoke;\r\n    border-radius: 15px;\r\n    cursor: pointer;\r\n}\r\n.reset-btn{\r\n    background:none;\r\n    border: 1px solid black;\r\n    color: black;\r\n    text-transform: uppercase;\r\n    font-size: small;\r\n    font-weight: bold;\r\n    padding: 0.4rem 0.5rem;\r\n    border-radius: 2px;\r\n    transition: all 0.1s ease \r\n}\r\n.reset-btn:focus{\r\n    outline: none;\r\n}\r\n.reset-btn:hover{\r\n    background: black;\r\n    color: white \r\n}\r\n/* Media queries */\r\n/*extra small devices*/\r\n@media screen and (max-width: 575px) {\r\n    .region-name{\r\n        font-size: 4rem \r\n   }\r\n    .region-img{\r\n        max-height: 25vh;\r\n        margin-top: 4vh \r\n   }\r\n    .filter-name{\r\n        font-size: 4rem \r\n   }\r\n}\r\n/*small devices*/\r\n@media screen and (min-width: 576px) and (max-width: 767px) {\r\n    .region-img{\r\n        max-height: 25vh;\r\n        margin-top: 6vh \r\n   }\r\n}"

/***/ }),

/***/ "./src/app/data/countries/countries.component.html":
/*!*********************************************************!*\
  !*** ./src/app/data/countries/countries.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\" [hidden]='countries'></div>\r\n<div class=\"container\" *ngIf=\"countries\">\r\n  <div class=\"row mt-3\">\r\n    <back-btn></back-btn>\r\n  </div>\r\n  <div class=\"row justify-content-center text-center\">\r\n    <h1 [ngClass]=\"{'region-name': region,'filter-name': !region}\">{{id | languageName | uppercase}}</h1>\r\n    <h2 class=\"col-12 mt-0\" *ngIf=\"filter == 'language'\">Countries with language - {{id| languageName}}</h2>\r\n    <h2 class=\"col-12 mt-0\" *ngIf=\"filter == 'currency'\">Countries with currency - {{id}}</h2>\r\n    <h2 class=\"col-12 mt-0\" *ngIf=\"filter == 'regionalbloc'\">Countries with regional bloc - {{id}}</h2>\r\n    <div class=\"col-12\">\r\n      <img *ngIf=\"region\" class=\"img-fluid region-img d-block mx-auto\" src=\"assets/{{region}}-header.png\" [ngClass]=\"{'mt-3': region == 'americas' || region == 'oceania'}\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row justify-content-center my-5\">\r\n    <div class=\"col-6 col-md text-center\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12 display-4\">{{countries.length}}</div>\r\n        <small class=\"col-12\">Number of countries</small>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-6 col-md text-center\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12 display-4\">{{highestPopulationCountry.population | numberToMB }}</div>\r\n        <div class=\"col-12\">{{highestPopulationCountry.name}}</div>\r\n        <small class=\"col-12\">Highest population country</small>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-6 col-md text-center\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12 display-4\">{{population | numberToMB}}</div>\r\n        <small class=\"col-12\">Overall population</small>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-6 col-md text-center\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12 display-4\">{{lowestPopulationCountry.population | numberToMB }}</div>\r\n        <div class=\"col-12\">{{lowestPopulationCountry.name}}</div>\r\n        <small class=\"col-12\">Lowest population country</small>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-6 col-md text-center\" *ngIf=\"region\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12 display-4\">{{languages.size}}</div>\r\n        <small class=\"col-12\">Languages spoken</small>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row my-5\" *ngIf=\"region\">\r\n    <div class=\"col-12\">\r\n      <h2>Languages</h2>\r\n    </div>\r\n    <div class=\"col-4 col-md-auto my-2 lead hover\" *ngFor=\"let lang of languages\" (click)=\"languageModel = lang\" style=\"line-height: 1.2rem\">\r\n      {{lang}}\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-12\">\r\n      <h2>Countries</h2>\r\n    </div>\r\n\r\n    <!-- filters -->\r\n    <div class=\"col-12\">\r\n      <div class=\"row justify-content-end px-5 pt-2 pb-3\">\r\n        <div class=\"col-6 col-md-3 sort\" [ngClass]=\"{active: languageModel}\" *ngIf=\"region\">\r\n          <small class=\"text-uppercase\">Filter by language</small>\r\n          <br>\r\n          <select [(ngModel)]=\"languageModel\">\r\n            <option *ngFor=\"let language of languages\" value=\"{{language}}\">{{language}}</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"col-6 col-md-3 sort\" [ngClass]=\"{active: sortField}\">\r\n          <small class=\"text-uppercase\">Sort by</small>\r\n          <br>\r\n          <select [(ngModel)]=\"sortField\" (change)=\"sortBy(sortField)\">\r\n            <option value=\"name\">Name A-Z</option>\r\n            <option value=\"name1\">Name Z-A</option>\r\n            <option value=\"population\">Population - Low to high</option>\r\n            <option value=\"population1\">Popuation - High to low</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"col-6 col-md-3 search-input\" [ngClass]=\"{active: searchInput}\">\r\n          <small class=\"text-uppercase\">Search</small>\r\n          <br>\r\n          <input type=\"text\" [(ngModel)]=\"searchInput\" placeholder=\"Search country\">\r\n        </div>\r\n        <div class=\"col-6 col-md-auto align-self-center\">\r\n          <button class=\"reset-btn\" (click)=\"sortBy('name');searchInput=sortField=languageModel=undefined\">Reset filters</button>\r\n        </div>\r\n        <div class=\"col-12\" *ngIf=\"selectedCurrency\">\r\n          Showing countries with currency -\r\n          <b>{{selectedCurrency}}</b>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- countries cards -->\r\n    <div class=\"col-auto\" *ngFor=\"let country of countries | search: searchInput | search: languageModel:'language' | search: selectedCurrency:'currency'\">\r\n      <div class=\"card my-3\" style=\"width: 15rem;min-height: 21rem\">\r\n        <img class=\"card-img-top\" src=\"{{country.flag}}\" alt=\"Card image cap\" style=\"height: 22vh\">\r\n        <div class=\"px-3 pt-2 pb-4\">\r\n          <div class=\"row text-center\">\r\n            <div class=\"col-12\">\r\n              <span class=\"lead\" style=\"line-height: 1.35rem\">{{country.name}}</span>\r\n            </div>\r\n            <div class=\"col-12 country-code-col\">\r\n              <small>{{country.alpha3Code}}</small>\r\n            </div>\r\n          </div>\r\n          <div class=\"row no-gutters details-row\">\r\n            <div class=\"col-4 mr-1 item-title\">\r\n              Subregion:\r\n            </div>\r\n            <div class=\"col\">\r\n              {{country.subregion}}\r\n            </div>\r\n          </div>\r\n          <div class=\"row no-gutters details-row\" *ngIf=\"country.capital\">\r\n            <div class=\"col-4 mr-1 item-title\">\r\n              Capital:\r\n            </div>\r\n            <div class=\"col\">\r\n              {{country.capital}}\r\n            </div>\r\n          </div>\r\n          <div class=\"row no-gutters details-row\">\r\n            <div class=\"col-4 mr-1 item-title\">\r\n              Population:\r\n            </div>\r\n            <div class=\"col\">\r\n              {{country.population}}\r\n            </div>\r\n          </div>\r\n          <div class=\"row no-gutters details-row\">\r\n            <div class=\"col-4 mr-1 item-title\">\r\n              Currency:\r\n            </div>\r\n            <div class=\"col\">\r\n              <span class=\"hover\" *ngFor=\"let currency of country.currencies;let last=last\" [routerLink]=\"['/countries','currency',currency.code]\">\r\n                {{currency.name}}{{last ? '' : ', '}} </span>\r\n            </div>\r\n          </div>\r\n          <div class=\"row no-gutters details-row\">\r\n            <div class=\"col-4 mr-1 item-title\">\r\n              Languages:\r\n            </div>\r\n            <div class=\"col\">\r\n              <span class=\"hover\" *ngFor=\"let language of country.languages;let last=last\" [routerLink]=\"['/countries','language',language.iso639_1]\">\r\n                {{language.name}}{{last ? '' : ', '}}</span>\r\n            </div>\r\n          </div>\r\n          <div class=\"row no-gutters details-row\">\r\n            <div class=\"col-4 mr-1 item-title\">\r\n              Timezones:\r\n            </div>\r\n            <div class=\"col\">\r\n              <span *ngFor=\"let timezone of country.timezones;let last=last\">\r\n                {{timezone}}{{last ? '' : ', '}}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <button [routerLink]=\"['/country',country.alpha3Code]\">View details</button>\r\n      </div>\r\n    </div>\r\n    <!-- end countries cards -->\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/data/countries/countries.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/data/countries/countries.component.ts ***!
  \*******************************************************/
/*! exports provided: CountriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountriesComponent", function() { return CountriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CountriesComponent = /** @class */ (function () {
    function CountriesComponent(_route, router, httpService, location) {
        var _this = this;
        this._route = _route;
        this.router = router;
        this.httpService = httpService;
        this.location = location;
        // end ngOnInit
        this.getRegion = function () {
            _this.httpService.getRegion(_this.region).subscribe(function (data) {
                _this.countries = data;
                _this.getStats(_this.countries);
            }, function (error) {
                console.log(error.errorMessage);
            });
        };
        // end getRegion
        this.getAllCountriesWithLanguage = function () {
            _this.httpService.getAllCountriesWithLanguage(_this.id).subscribe(function (data) {
                _this.countries = data;
                _this.getStats(_this.countries);
            }, function (error) {
                console.log(error.errorMessage);
            });
        };
        // end getAllCountriesWithLanguage
        this.getAllCountriesWithCurrency = function () {
            _this.httpService.getAllCountriesWithCurrency(_this.id).subscribe(function (data) {
                _this.countries = data;
                _this.getStats(_this.countries);
            }, function (error) {
                console.log(error.errorMessage);
            });
        };
        // end getAllCountriesWithCurrency
        this.getAllCountriesWithBloc = function () {
            _this.httpService.getAllCountriesWithBloc(_this.id).subscribe(function (data) {
                _this.countries = data;
                _this.getStats(_this.countries);
            }, function (error) {
                console.log(error.errorMessage);
            });
        };
        // end getAllCountriesWithBloc
        this.getStats = function (countries) {
            _this.population = 0;
            var maxPopulation = Math.max.apply(Math, countries.map(function (o) { return o.population; }));
            var minPopulation = Math.min.apply(Math, countries.map(function (c) { return c.population; }));
            var allLanguages = [];
            for (var _i = 0, countries_1 = countries; _i < countries_1.length; _i++) {
                var country = countries_1[_i];
                _this.population += country.population;
                for (var _a = 0, _b = country.languages; _a < _b.length; _a++) {
                    var l = _b[_a];
                    allLanguages.push(l.name);
                }
                if (country.population == maxPopulation) {
                    var highestPopulation = { name: country.name, population: maxPopulation };
                    _this.highestPopulationCountry = highestPopulation;
                }
                if (country.population == minPopulation) {
                    var lowestPopulation = { name: country.name, population: minPopulation };
                    _this.lowestPopulationCountry = lowestPopulation;
                }
            }
            _this.languages = new Set(allLanguages);
            console.log(_this.languages);
        };
        // end getStats
        this.sortBy = function (field) {
            if (_this.countries.length > 1) {
                if (field.endsWith('1')) {
                    field = field.slice(0, -1);
                    _this.countries.sort(function (a, b) {
                        if (a[field] < b[field])
                            return 1;
                        else if (a[field] > b[field])
                            return -1;
                        else
                            return 0;
                    });
                }
                else {
                    _this.countries.sort(function (a, b) {
                        if (a[field] < b[field])
                            return -1;
                        else if (a[field] > b[field])
                            return 1;
                        else
                            return 0;
                    });
                }
            }
        }; //end sortBy
    }
    CountriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.region = _this.sortField = _this.languageModel = _this.searchInput = undefined;
            _this.filter = _this._route.snapshot.paramMap.get('filter');
            _this.id = _this._route.snapshot.paramMap.get('id');
            if (_this.filter == 'region') {
                _this.region = _this.id;
                _this.getRegion();
            }
            else if (_this.filter == 'language') {
                console.log('language filter');
                _this.getAllCountriesWithLanguage();
            }
            else if (_this.filter == 'currency') {
                console.log('currency filter');
                _this.getAllCountriesWithCurrency();
            }
            else {
                console.log('bloc filter');
                _this.getAllCountriesWithBloc();
            }
        });
    };
    CountriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-countries',
            template: __webpack_require__(/*! ./countries.component.html */ "./src/app/data/countries/countries.component.html"),
            styles: [__webpack_require__(/*! ./countries.component.css */ "./src/app/data/countries/countries.component.css")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], CountriesComponent);
    return CountriesComponent;
}());

// end class CountriesComponent


/***/ }),

/***/ "./src/app/data/country/country.component.css":
/*!****************************************************!*\
  !*** ./src/app/data/country/country.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2{\r\n    font-family: 'Poppins', sans-serif;\r\n    text-transform: uppercase;\r\n    margin-top: 1rem \r\n}\r\n.country-back-btn{\r\n    position: absolute;\r\n    top: 25px;\r\n    left: 35px;\r\n    padding: 0.5rem 1rem;\r\n    z-index: 1;\r\n    transition: all 0.3s ease\r\n}\r\n.country-back-btn:hover{\r\n    background: rgba(0,0,0,0.25);\r\n}\r\n.flag{\r\n    position: relative;\r\n    bottom: -15%;\r\n    box-shadow: 0px 2px 10px -2px rgba(0,0,0,0.75);\r\n}\r\n.name{\r\n    font-family: 'Poppins', sans-serif;\r\n    font-size: 3rem;\r\n    color: #008793;\r\n    position: relative;\r\n    top: 45%;\r\n    background: white;\r\n    padding: 0px 20px\r\n}\r\n.name-row{\r\n    position: relative;\r\n}\r\n.name-row::before{\r\n    content: \"\";\r\n    width: 75vw;\r\n    height: 1.5px;\r\n    position: absolute;\r\n    bottom: 1rem; \r\n    background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);\r\n    z-index: -1;\r\n}\r\n.country-name{\r\n    font-size: 2rem;\r\n    padding: 0px 20px;\r\n    \r\n}\r\n.header{\r\n    position: relative;\r\n    background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);\r\n    box-shadow: inset 0px -37px 172px -72px rgba(0,0,0,0.75);\r\n}\r\n.number{\r\n    font-size: 1.3rem;\r\n    font-weight: 500\r\n}\r\nfa-icon{\r\n    font-size: 2rem;\r\n    color: #008793;\r\n}\r\n.currency-symbol{\r\n    font-size: 2rem;\r\n    color: #008793;\r\n    font-weight: 700;\r\n}\r\n.region-img{\r\n    -webkit-filter: grayscale(0.5);\r\n            filter: grayscale(0.5);\r\n    -webkit-transform: scale(0.9);\r\n            transform: scale(0.9)\r\n}\r\n.region-img-container{border-radius: 100%;\r\n    padding: 2rem 1rem;\r\n    background-image: linear-gradient(to right top, #72b6f9, #78c1fb, #81cbfd, #8cd5fe, #9adfff)\r\n}\r\n.border-flag{\r\n    height: 10vh;\r\n    box-shadow: 0px 2px 10px -2px rgba(0,0,0,0.75);\r\n}\r\n.low-line-height{\r\n    line-height: 1.2rem\r\n}\r\nhr{\r\n    margin: 0.2rem\r\n}\r\n.hover:hover{\r\n    cursor: pointer;\r\n    color: #00bf72\r\n}\r\n.hover:focus{\r\n    outline: none\r\n}\r\n.lang-name{\r\n    background: whitesmoke;\r\n    padding: 0rem  1rem 0.2rem;\r\n    border-radius: 10px\r\n}\r\n.border-col{\r\n    transition: all 0.3s ease\r\n}\r\n.border-col:focus{\r\n    outline: none\r\n}\r\n.border-col:hover{\r\n    cursor: pointer;\r\n    color: #00bf72\r\n}\r\n.bloc-row{\r\n    cursor: pointer\r\n}\r\n.bloc-row:focus{\r\n    outline: none\r\n}\r\n.bloc-row:hover .acronym{\r\n    color: #00bf72\r\n}\r\n/* Media queries */\r\n/*extra small devices*/\r\n@media screen and (max-width: 575px) {    \r\n    \r\n    .country-back-btn{\r\n        top: 0px;\r\n        left: 5px;\r\n    }\r\n}\r\n/*small devices*/\r\n@media screen and (min-width: 576px) and (max-width: 767px) {\r\n    .country-back-btn{\r\n        top: 5px;\r\n        left: 0px;\r\n    }\r\n }\r\n "

/***/ }),

/***/ "./src/app/data/country/country.component.html":
/*!*****************************************************!*\
  !*** ./src/app/data/country/country.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\" [hidden]='country'></div>\r\n\r\n<!-- header container -->\r\n<div class=\"container-fluid\">\r\n  <div class=\"row text-center header\" *ngIf=\"country\">\r\n    <back-btn class=\"country-back-btn\"></back-btn>\r\n    <div class=\"col-12 pt-2 pt-sm-0\" style=\"position: relative;\">\r\n      <img class=\"img-fluid flag\" src=\"{{country.flag}}\" style=\"max-height: 45vh;\">\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- end header container -->\r\n\r\n<div class=\"container my-5\" [ngClass]=\"{'d-none': !country}\" *ngIf=\"country\">\r\n  <div class=\"row no-gutters name-row justify-content-center\">\r\n    <div class=\"col text-center mb-3\">\r\n      <span class=\"text-uppercase name\" [ngClass]=\"{'country-name': country.name.length > 14}\">{{country.name}}</span>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row justify-content-around\">\r\n    <div class=\"col-4 col-md mt-5\">\r\n      <div class=\"row text-center align-items-center\">\r\n        <div class=\"col-12 mb-1\" style=\"line-height: 1rem\">\r\n          <fa-icon [icon]=\"faLanguage\"></fa-icon>\r\n          <br>\r\n          <small>Language\r\n            <span *ngIf=\"country.languages.length > 1\">s</span>\r\n          </small>\r\n        </div>\r\n        <div class=\"col-12\">\r\n          <span class=\"number hover\" *ngFor=\"let language of country.languages; let last=last\" [routerLink]=\"['/countries','language',language.iso639_1]\">{{language.name}}{{last ? '' : ', '}}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-4 col-md mt-5\">\r\n      <div class=\"row text-center align-items-center\">\r\n        <div class=\"col-12 mb-1\" style=\"line-height: 1rem\">\r\n          <fa-icon [icon]=\"faMapMarkedAlt\"></fa-icon>\r\n          <br>\r\n          <small>Capital</small>\r\n        </div>\r\n        <div class=\"col-12\">\r\n          <span class=\"number\">{{country.capital}}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-4 col-md mt-5\">\r\n      <div class=\"row text-center align-items-center\">\r\n        <div class=\"col-12 mb-1\" style=\"line-height: 1rem\">\r\n          <fa-icon [icon]=\"faUsers\"></fa-icon>\r\n          <br>\r\n          <small>Population</small>\r\n        </div>\r\n        <div class=\"col-12\">\r\n          <span class=\"number\">{{country.population | numberToMB}}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-4 col-md mt-5\">\r\n      <div class=\"row text-center align-items-center\">\r\n        <div class=\"col-12 mb-1\" style=\"line-height: 1rem\">\r\n          <fa-icon [icon]=\"faMap\"></fa-icon>\r\n          <br>\r\n          <small>Area</small>\r\n        </div>\r\n        <div class=\"col-12\">\r\n          <span class=\"number\">{{country.area | numberToMB}} Km\r\n            <sup>2</sup>\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-4 col-md mt-5\">\r\n      <div class=\"row text-center align-items-center\">\r\n        <div class=\"col-12 mb-1\" [ngClass]=\"{'mt-2 mb-1': country.currencies[0].symbol}\" style=\"line-height: 1rem\">\r\n          <fa-icon [icon]=\"faCoins\" [hidden]=\"country.currencies[0].symbol\"></fa-icon>\r\n          <span class=\"currency-symbol\">{{country.currencies[0].symbol}}</span>\r\n          <br>\r\n          <small>Currency</small>\r\n        </div>\r\n        <div class=\"col-12\">\r\n          <span class=\"number hover\" [routerLink]=\"['/countries','currency',country.currencies[0].code]\">{{country.currencies[0].name}}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!-- other names -->\r\n  <div class=\"row mt-5\">\r\n    <div class=\"col-12\">\r\n      <h2>Also know as</h2>\r\n    </div>\r\n    <div class=\"col-auto lead\" *ngFor=\"let name of country.altSpellings\">{{name}}</div>\r\n  </div>\r\n\r\n  <!-- region -->\r\n  <div class=\"row mt-5 align-items-center\">\r\n    <div class=\"col-12\">\r\n      <h2>Region</h2>\r\n    </div>\r\n    <div class=\"col-12 col-md text-center display-4\">\r\n      <span class=\"hover\" [routerLink]=\"['/countries','region',country.region | lowercase]\">\r\n        {{country.region}}\r\n      </span>\r\n      / {{country.subregion}}\r\n    </div>\r\n    <div class=\"col-12 col-md-4 mt-4 mt-md-auto\">\r\n      <div class=\"region-img-container\">\r\n        <img class=\"img-fluid region-img\" src=\"assets/{{country.region | lowercase }}.png\" alt=\"{{country.region | lowercase }}\"\r\n          style=\"height: 40vh\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- borders -->\r\n  <div class=\"row mt-5\">\r\n    <div class=\"col-12\">\r\n      <h2>Borders</h2>\r\n    </div>\r\n    <div class=\"col-4 col-md-2 lead text-center border-col my-4\" *ngFor=\"let border of bordersName\" [routerLink]=\"['/country',border.code]\">\r\n      <img class=\"img-fluid border-flag mb-3\" src=\"https://restcountries.eu/data/{{border.code | lowercase}}.svg\">\r\n      <br>\r\n      <div class=\"low-line-height\">\r\n        <b>\r\n          <small>{{border.name}}</small>\r\n        </b>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-12 lead\" [hidden]=\"country.borders[0]\">{{country.name}} has no borders</div>\r\n  </div>\r\n\r\n  <!-- translations -->\r\n  <div class=\"row mt-5\">\r\n    <div class=\"col-12\">\r\n      <h2>Translations</h2>\r\n    </div>\r\n    <div class=\"col-4 col-md-2 lead text-center my-4\" *ngFor=\"let translation of translations\">\r\n      <b>{{translation.translation}}</b>\r\n      <br>\r\n      <small class=\"text-muted lang-name\">{{translation.lang | languageName}}</small>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- region blocs -->\r\n  <div class=\"row mt-5\">\r\n    <div class=\"col-12\">\r\n      <h2>Regional Blocs</h2>\r\n    </div>\r\n    <div class=\"col-12 col-md-6 my-4 bloc-row\" *ngFor=\"let bloc of country.regionalBlocs\" [routerLink]=\"['/countries','regionalbloc',bloc.acronym]\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12 col-md-2 text-md-center acronym\">\r\n          <b>{{bloc.acronym}}</b>\r\n        </div>\r\n        <div class=\"col-10 low-line-height\">\r\n          {{bloc.name}}\r\n          <br>\r\n          <small *ngIf=\"bloc.otherNames[0]\">\r\n            <b class=\"text-muted\">Also know as:</b> {{bloc.otherNames}}</small>\r\n          <br>\r\n          <small *ngIf=\"bloc.otherAcronyms[0]\">\r\n            <b class=\"text-muted\">Other acronyms:</b> {{bloc.otherAcronyms}}</small>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-12 lead\" [hidden]=\"country.regionalBlocs[0]\">{{country.name}} has no regional blocs</div>\r\n  </div>\r\n\r\n  <!-- other details -->\r\n  <div class=\"row mt-5\">\r\n    <div class=\"col-12\">\r\n      <h2>Other Details</h2>\r\n    </div>\r\n\r\n    <div class=\"col-12 col-md-6 my-1\" *ngIf=\"country.topLevelDomain != ''\">\r\n      <div class=\"row align-items-center\">\r\n        <div class=\"col-12 col-sm-4 pt-2 text-sm-right text-muted\">\r\n          <b>Top Level Domain</b>\r\n        </div>\r\n        <div class=\"col col-sm-8 display-4\">{{country.topLevelDomain}}</div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-12 col-md-6 my-1\" *ngIf=\"country.callingCodes[0]\">\r\n      <div class=\"row align-items-center\">\r\n        <div class=\"col-12 col-sm-4 pt-2 text-sm-right text-muted\">\r\n          <b>Calling Codes</b>\r\n        </div>\r\n        <div class=\"col col-sm-8 display-4\">\r\n          {{country.callingCodes}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-12 col-md-6 my-1\">\r\n      <div class=\"row align-items-center\">\r\n        <div class=\"col-12 col-sm-4 pt-2 text-sm-right text-muted\">\r\n          <b>Alpha 2 Code</b>\r\n        </div>\r\n        <div class=\"col col-sm-8 display-4\">{{country.alpha2Code}}</div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-12 col-md-6 my-1\">\r\n      <div class=\"row align-items-center\">\r\n        <div class=\"col-12 col-sm-4 pt-2 text-sm-right text-muted\">\r\n          <b>Alpha 3 Code</b>\r\n        </div>\r\n        <div class=\"col col-sm-8 display-4\">\r\n          {{country.alpha3Code}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-12 col-md-6 my-1\" *ngIf=\"country.demonym\">\r\n      <div class=\"row align-items-center\">\r\n        <div class=\"col-12 col-sm-4 pt-2 text-sm-right text-muted\">\r\n          <b>Demonym</b>\r\n        </div>\r\n        <div class=\"col col-sm-8 display-4\">\r\n          {{country.demonym}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-12 col-md-6 my-1\" *ngIf=\"country.gini\">\r\n      <div class=\"row align-items-center\">\r\n        <div class=\"col-12 col-sm-4 pt-2 text-sm-right text-muted\">\r\n          <b>GINI Index</b>\r\n        </div>\r\n        <div class=\"col col-sm-8 display-4\">\r\n          {{country.gini}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-12 col-md-6 my-1\" *ngIf=\"country.nativeName\">\r\n      <div class=\"row align-items-center\">\r\n        <div class=\"col-12 col-sm-4 pt-2 text-sm-right text-muted\">\r\n          <b>Native Name</b>\r\n        </div>\r\n        <div class=\"col col-sm-8 display-4\">\r\n          {{country.nativeName}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-12 col-md-6 my-1\" *ngIf=\"country.numericCode\">\r\n      <div class=\"row align-items-center\">\r\n        <div class=\"col-12 col-sm-4 pt-2 text-sm-right text-muted\">\r\n          <b>Numeric Code</b>\r\n        </div>\r\n        <div class=\"col col-sm-8 display-4\">\r\n          {{country.numericCode}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-12 col-md-6 my-1\" *ngIf=\"country.cioc\">\r\n      <div class=\"row align-items-center\">\r\n        <div class=\"col-12 col-sm-4 pt-2 text-sm-right text-muted\">\r\n          <b>Cioc</b>\r\n        </div>\r\n        <div class=\"col col-sm-8 display-4\">\r\n          {{country.cioc}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-12 col-md-auto my-1\">\r\n      <div class=\"row align-items-center\">\r\n        <div class=\"col-12 col-sm-4 col-lg-auto pt-2 text-sm-right text-muted p-sm-0 pr-3\">\r\n          <b>Latitude and longitude</b>\r\n        </div>\r\n        <div class=\"col display-4\">\r\n          {{country.latlng}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-12 my-1\" *ngIf=\"country.timezones\">\r\n      <div class=\"row align-items-center justify-content-end\">\r\n        <div class=\"col-12 col-sm-4 col-md-2 pt-2 text-sm-right text-muted\">\r\n          <b>Timezone</b>\r\n        </div>\r\n        <div class=\"col-12 col-sm-8 col-md-10 display-4\" *ngFor=\"let timezone of country.timezones\">\r\n          {{timezone}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <!-- end row -->\r\n\r\n</div>\r\n<!-- end container -->"

/***/ }),

/***/ "./src/app/data/country/country.component.ts":
/*!***************************************************!*\
  !*** ./src/app/data/country/country.component.ts ***!
  \***************************************************/
/*! exports provided: CountryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryComponent", function() { return CountryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CountryComponent = /** @class */ (function () {
    function CountryComponent(_route, router, httpService, location) {
        var _this = this;
        this._route = _route;
        this.router = router;
        this.httpService = httpService;
        this.location = location;
        this.faLanguage = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faLanguage"];
        this.faUsers = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faUsers"];
        this.faMap = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faMap"];
        this.faCoins = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCoins"];
        this.faMapMarkedAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faMapMarkedAlt"];
        this.translations = [];
        // end ngOnInit
        this.getCountry = function (code) {
            _this.httpService.getCountry(code).subscribe(function (data) {
                _this.country = data;
                console.log(data);
                //stroing translations object key value pairs in array as ngFor can't iterate over objects
                for (var _i = 0, _a = Object.keys(_this.country.translations); _i < _a.length; _i++) {
                    var language = _a[_i];
                    var translationObj = {
                        lang: language,
                        translation: _this.country.translations[language]
                    };
                    _this.translations.push(translationObj);
                }
                _this.getBordersName(_this.country.borders);
            }, function (error) {
                console.log(error.errorMessage);
            });
        };
        // end getCountry
        this.getBordersName = function (borders) {
            _this.bordersName = new Array;
            for (var _i = 0, borders_1 = borders; _i < borders_1.length; _i++) {
                var border = borders_1[_i];
                _this.httpService.getCountry(border).subscribe(function (data) {
                    var borderObj = {
                        name: data.name,
                        code: data.alpha3Code
                    };
                    _this.bordersName.push(borderObj);
                }, function (error) {
                    console.log(error.errorMessage);
                });
            }
            // end for
        };
    }
    CountryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            var countryCode = _this._route.snapshot.paramMap.get('code');
            _this.translations = new Array;
            _this.getCountry(countryCode);
        });
    };
    CountryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-country',
            template: __webpack_require__(/*! ./country.component.html */ "./src/app/data/country/country.component.html"),
            styles: [__webpack_require__(/*! ./country.component.css */ "./src/app/data/country/country.component.css")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], CountryComponent);
    return CountryComponent;
}());

// end class CountryComponent


/***/ }),

/***/ "./src/app/data/data.module.ts":
/*!*************************************!*\
  !*** ./src/app/data/data.module.ts ***!
  \*************************************/
/*! exports provided: DataModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataModule", function() { return DataModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _country_country_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./country/country.component */ "./src/app/data/country/country.component.ts");
/* harmony import */ var _countries_countries_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./countries/countries.component */ "./src/app/data/countries/countries.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _number_to_mb_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../number-to-mb.pipe */ "./src/app/number-to-mb.pipe.ts");
/* harmony import */ var _search_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../search.pipe */ "./src/app/search.pipe.ts");
/* harmony import */ var _language_name_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../language-name.pipe */ "./src/app/language-name.pipe.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var DataModule = /** @class */ (function () {
    function DataModule() {
    }
    DataModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    { path: 'country/:code', component: _country_country_component__WEBPACK_IMPORTED_MODULE_2__["CountryComponent"] },
                    { path: 'countries/:filter/:id', component: _countries_countries_component__WEBPACK_IMPORTED_MODULE_3__["CountriesComponent"] }
                ]),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"]
            ],
            declarations: [
                _country_country_component__WEBPACK_IMPORTED_MODULE_2__["CountryComponent"],
                _countries_countries_component__WEBPACK_IMPORTED_MODULE_3__["CountriesComponent"],
                _language_name_pipe__WEBPACK_IMPORTED_MODULE_9__["LanguageNamePipe"],
                _number_to_mb_pipe__WEBPACK_IMPORTED_MODULE_7__["NumberToMBPipe"],
                _search_pipe__WEBPACK_IMPORTED_MODULE_8__["SearchPipe"]
            ]
        })
    ], DataModule);
    return DataModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Poppins:800');\r\n\r\nh2{\r\n    font-family: 'Poppins', sans-serif;\r\n    text-transform: uppercase;\r\n    margin-top: 1rem;\r\n    word-spacing: 4px \r\n}\r\n\r\n.cover-logo{\r\n    height: 100%;\r\n    font-family: 'Poppins', sans-serif;\r\n    text-transform: uppercase;\r\n    letter-spacing: -6px;\r\n    color: whitesmoke;\r\n    background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);\r\n}\r\n\r\n.cover-logo::after{\r\n    content: \"\";\r\n    height: 100%;\r\n    width: 45%;\r\n    background: #fff;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    -webkit-transform: skewX(-23deg) translateX(50%);\r\n            transform: skewX(-23deg) translateX(50%);\r\n    box-shadow: inset 13px -1px 28px -12px rgba(0,0,0,0.75);\r\n}\r\n\r\n.cover-icon{\r\n    font-size: 3rem;\r\n}\r\n\r\n.search-icon{\r\n    position: relative;\r\n    right: 5%;\r\n    color: grey;\r\n    transition: all 0.5s ease\r\n}\r\n\r\n.cover-text{\r\n    font-size: 1.8rem;\r\n    background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);\r\n    background-size: cover;\r\n    -webkit-background-clip: text;\r\n    background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n    font-weight: 400\r\n}\r\n\r\n.search-icon:hover{\r\n    color: #004d7a;\r\n    cursor: pointer;\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1)\r\n}\r\n\r\n.search-type{\r\n    cursor: pointer;\r\n    padding: 0rem 0.5rem;\r\n    color: grey;\r\n    padding: 0.15rem 0.5rem\r\n}\r\n\r\n.search-type:hover{\r\n    color: #00bf72;\r\n    transition: all 0.3s ease\r\n}\r\n\r\n.search-type.active{\r\n    color: #004d7a;\r\n    background: #e7edee;\r\n    border-radius: 10px;\r\n}\r\n\r\n.header-input{\r\n    height: 8vh;\r\n    border: 0.1px solid whitesmoke;\r\n    box-shadow: 0px 2px 10px -4px rgba(0,0,0,0.75);\r\n    transition: all 0.3s ease\r\n}\r\n\r\n.header-input:focus{\r\n    outline: none\r\n}\r\n\r\n.header-input:hover{\r\nbox-shadow: 0px 2px 12px -3px rgba(0,0,0,0.75);\r\n}\r\n\r\n.search-results-container .card:hover{\r\n    cursor: default;\r\n    box-shadow: 0px 2px 12px -3px rgba(0,0,0,0.75);\r\n}\r\n\r\n.map-row-md{\r\n    height: 40vh;\r\n    cursor: pointer;\r\n}\r\n\r\n.map-row-md img{\r\n    max-height: 35vh;\r\n}\r\n\r\n.map-row-md:nth-child(even){\r\n    background: whitesmoke;\r\n}\r\n\r\n.detail-col{\r\n    margin-top: 1rem;\r\n    line-height: 1.2rem\r\n}\r\n\r\n.detail-col span{\r\n    /* font-size: 1rem */\r\n    font-weight: 500\r\n}\r\n\r\n.detail-col fa-icon{\r\n    font-size: 1.5rem;\r\n    color: #008793\r\n}\r\n\r\n.americas-text span,.europe-text span,.africa-text span,.asia-text span,.oceania-text span{\r\n    text-transform: uppercase;\r\n    font-family: 'Poppins', sans-serif;\r\n    font-size: 1.2rem\r\n}\r\n\r\n.americas-img,.europe-img,.africa-img,.asia-img,.oceania-img{\r\n    -webkit-filter: grayscale(1);\r\n            filter: grayscale(1);\r\n    transition: all 0.3s ease-in;\r\n    cursor: pointer;\r\n    z-index: 1;\r\n}\r\n\r\n.americas-img:hover + .americas-text > .americas-des{\r\n    opacity: 1;\r\n}\r\n\r\n.europe-img:hover + .europe-text >.europe-des{\r\n    opacity: 1;\r\n}\r\n\r\n.africa-img:hover + .africa-text > .africa-des{\r\n    opacity: 1;\r\n}\r\n\r\n.asia-img:hover + .asia-text > .asia-des{\r\n    opacity: 1;\r\n}\r\n\r\n.oceania-img:hover + .oceania-text > .oceania-des{\r\n    opacity: 1;\r\n}\r\n\r\n.americas-img:hover,.europe-img:hover,.africa-img:hover,.asia-img:hover,.oceania-img:hover{\r\n    -webkit-filter: drop-shadow(0 0 0.2rem grey);\r\n            filter: drop-shadow(0 0 0.2rem grey) \r\n}\r\n\r\n.americas-img:focus,.europe-img:focus,.africa-img:focus,.asia-img:focus,.oceania-img:focus{\r\n    outline: none\r\n}\r\n\r\n.americas-img{\r\n    position: relative;\r\n    left: 25%\r\n}\r\n\r\n.americas-text{\r\n    position: absolute;\r\n    top: 40%;\r\n    left: 30%;\r\n    color: rgb(0,170,0);\r\n    z-index: 2\r\n}\r\n\r\n.americas-des{\r\n    font-size: small;\r\n    opacity: 0;\r\n    width: 12vw;\r\n    background-color: white;\r\n    border: 1px solid rgb(0,170,0);\r\n    padding: 1rem 0rem;\r\n    transition: all 0.2s ease-in\r\n}\r\n\r\n.europe-img{\r\n    z-index: 2;\r\n}\r\n\r\n.europe-text{\r\n    position: absolute;\r\n    top: 21%;\r\n    left: -12%;\r\n    color: rgb(200,55,113);\r\n    z-index: 4\r\n}\r\n\r\n.europe-des{\r\n    font-size: small;\r\n    opacity: 0;\r\n    width: 12vw;\r\n    background-color: white;\r\n    border: 1px solid rgb(200,55,113);\r\n    padding: 1rem 0rem;\r\n    transition: all 0.2s ease-in;\r\n}\r\n\r\n.africa-img{\r\n    position: relative;\r\n    bottom: 5%; \r\n    left: -2%;\r\n    z-index: 3;\r\n}\r\n\r\n.africa-text{\r\n    position: absolute;\r\n    bottom: 25%;\r\n    color: rgb(83,103,108);\r\n    z-index: 3\r\n}\r\n\r\n.africa-des{\r\n    font-size: small;\r\n    opacity: 0;\r\n    width: 12vw;\r\n    background-color: white;\r\n    border: 1px solid rgb(83,103,108);\r\n    padding: 1rem 0rem;\r\n    transition: all 0.2s ease-in\r\n}\r\n\r\n.asia-img{\r\n    position: relative;\r\n    left: -34%;\r\n}\r\n\r\n.asia-text{\r\n    position: absolute;\r\n    top: 20%;\r\n    right: 25%;\r\n    color: rgb(255,153,85);\r\n    z-index: 2\r\n}\r\n\r\n.asia-des{\r\n    font-size: small;\r\n    opacity: 0;\r\n    width: 12vw;\r\n    background-color: white;\r\n    border: 1px solid rgb(255,153,85);\r\n    padding: 1rem 0rem;\r\n    transition: all 0.2s ease-in\r\n}\r\n\r\n.oceania-img{\r\n    position: relative;\r\n    bottom: 10%;\r\n    left: 35%;\r\n}\r\n\r\n.oceania-text{\r\n    position: absolute;\r\n    bottom: 20%;\r\n    left: 12%;\r\n    color: rgb(0,170,212);\r\n    z-index: 2\r\n}\r\n\r\n.oceania-des{\r\n    font-size: small;\r\n    opacity: 0;\r\n    width: 12vw;\r\n    background-color: white;\r\n    border: 1px solid rgb(0,170,212);\r\n    padding: 1rem 0rem;\r\n    transition: all 0.2s ease-in\r\n}\r\n\r\n.low-line-height{\r\n    line-height: 0.9rem\r\n}\r\n\r\n.bloc-row > .card{\r\n    box-shadow: 0px 2px 5px -4px rgba(0,0,0,0.75);  \r\n}\r\n\r\n.bloc-row > .card:hover{\r\n    cursor: default;\r\n    border-color: #00bf72;\r\n    box-shadow: 0px 2px 10px -4px rgba(0,0,0,0.75); \r\n}\r\n\r\n::-webkit-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\r\n    color: rgb(206, 202, 202);\r\n    opacity: 1; /* Firefox */\r\n}\r\n\r\n:-ms-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\r\n    color: rgb(206, 202, 202);\r\n    opacity: 1; /* Firefox */\r\n}\r\n\r\n::-ms-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\r\n    color: rgb(206, 202, 202);\r\n    opacity: 1; /* Firefox */\r\n}\r\n\r\n::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\r\n    color: rgb(206, 202, 202);\r\n    opacity: 1; /* Firefox */\r\n}\r\n\r\n:-ms-input-placeholder { /* Internet Explorer 10-11 */\r\n    color: rgb(206, 202, 202);\r\n}\r\n\r\n::-ms-input-placeholder { /* Microsoft Edge */\r\n    color: rgb(206, 202, 202);\r\n}\r\n\r\n/* Media queries */\r\n\r\n/*extra small devices*/\r\n\r\n@media screen and (max-width: 575px) {    \r\n    .cover-container{\r\n        margin-bottom: 18rem\r\n    }\r\n    .cover-logo::after{\r\n        content: \"\";\r\n        height: 20%;\r\n        width: 100%;\r\n        background: #fff;\r\n        position: absolute;\r\n        top: 90%;\r\n        left: 0%;\r\n        -webkit-transform: skewY(-5deg) translateX(0%);\r\n                transform: skewY(-5deg) translateX(0%);\r\n        box-shadow: inset 0px 10px 28px -12px rgba(0,0,0,0.75);\r\n    }\r\n    .cover-container > .row{\r\n        height: 45vh!important;\r\n    }\r\n    .cover-logo .display-1{\r\n        font-size: 4rem;\r\n        letter-spacing: -3px;\r\n    }\r\n    .cover-text{\r\n        line-height: 1.8rem;\r\n        padding-bottom: 1rem\r\n    }\r\n    .header-input{\r\n        position: relative;\r\n        left: 2%;\r\n    }\r\n    .search-icon{\r\n        position: relative;\r\n        right: 7%;\r\n    }\r\n}\r\n\r\n/*small devices*/\r\n\r\n@media screen and (min-width: 576px) and (max-width: 767px) {\r\n    .cover-container{\r\n        margin-bottom: 18rem\r\n    }\r\n    .cover-logo::after{\r\n        content: \"\";\r\n        height: 20%;\r\n        width: 100%;\r\n        background: #fff;\r\n        position: absolute;\r\n        top: 90%;\r\n        left: 0%;\r\n        -webkit-transform: skewY(-5deg) translateX(0%);\r\n                transform: skewY(-5deg) translateX(0%);\r\n        box-shadow: inset 0px 10px 28px -12px rgba(0,0,0,0.75);\r\n    }\r\n }\r\n\r\n/*medium devices*/\r\n\r\n@media screen and (min-width: 768px) and (max-width: 991px) {\r\n    .cover-logo{\r\n        box-shadow: 3px 0px 27px -4px rgba(0,0,0,0.75);\r\n    }\r\n    .cover-logo::after{\r\n        display: none\r\n    }\r\n    \r\n    .cover-logo .display-1{\r\n        font-size: 5rem;\r\n        letter-spacing: -5px;\r\n    }\r\n }\r\n\r\n/*large devices*/\r\n\r\n@media screen and (min-width: 992px) and (max-width: 1199px) {\r\n    .cover-logo::after{\r\n        content: \"\";\r\n        height: 100%;\r\n        width: 15%;\r\n        background: #fff;\r\n        position: absolute;\r\n        top: 0;\r\n        right: 0;\r\n        -webkit-transform: skewX(-5deg) translateX(50%);\r\n                transform: skewX(-5deg) translateX(50%);\r\n        box-shadow: inset 13px -1px 28px -12px rgba(0,0,0,0.75);\r\n    }\r\n }"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- cover container -->\r\n<div class=\"container-fluid cover-container\">\r\n  <div class=\"row align-items-center\" style=\"height: 90vh\">\r\n    <div class=\"col-12 col-md-6 cover-logo\">\r\n      <div class=\"row align-items-center mx-2\" style=\"height: 100%;\">\r\n        <div class=\"display-1\">Country Details</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-12 col-md-6\">\r\n      <div class=\"row justify-content-center align-items-center text-center\" style=\"height: 100%\">\r\n        <fa-icon class=\"cover-icon\" [icon]=\"faGlobe\"></fa-icon>\r\n        <div class=\"col-12 lead cover-text\">Get details of any country in the world.</div>\r\n        <small class=\"col-12\">\r\n          <div class=\"row justify-content-center py-1\">\r\n            <b class=\"text-muted col-auto\">Search by: </b>\r\n            <span class=\"search-type col-auto\" [ngClass]=\"{'active': isActive('name')}\" (click)=\"makeActive('name')\">Name</span>\r\n            <span class=\"search-type col-auto\" [ngClass]=\"{'active': isActive('alpha')}\" (click)=\"makeActive('alpha')\">Country-code</span>\r\n            <span class=\"search-type col-auto\" [ngClass]=\"{'active': isActive('currency')}\" (click)=\"makeActive('currency')\">Currency</span>\r\n            <span class=\"search-type col-auto\" [ngClass]=\"{'active': isActive('lang')}\" (click)=\"makeActive('lang')\">Language</span>\r\n            <span class=\"search-type col-auto\" [ngClass]=\"{'active': isActive('capital')}\" (click)=\"makeActive('capital')\">Capital city</span>\r\n            <span class=\"search-type col-auto\" [ngClass]=\"{'active': isActive('callingcode')}\" (click)=\"makeActive('callingcode')\">Calling code</span>\r\n          </div>\r\n        </small>\r\n        <input class=\"col-10 my-4 header-input\" type=\"text\" [(ngModel)]=\"searchInput\" (keyup.enter)=\"getCountry(activeSearchType,searchInput)\"\r\n          placeholder=\"Search country by {{getPlaceholderText(activeSearchType)}}\">\r\n        <fa-icon class=\"search-icon\" [icon]=\"faSearch\" (click)=\"getCountry(activeSearchType,searchInput)\"></fa-icon>\r\n        <div class=\"col-12 my-3\" *ngIf=\"searchResult && searchResult[0] == 'not found'\">No country found!</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- end cover-container -->\r\n\r\n<!-- search results container -->\r\n<div id=\"result\" class=\"container my-5 search-results-container\">\r\n  <div class=\"row align-items-center\" *ngIf=\"searchResult\" [hidden]=\"searchResult[0] == 'not found'\">\r\n    <div class=\"col-12\">\r\n      <h2>Search results</h2>\r\n    </div>\r\n    <div class=\"col-12 mb-2\">\r\n      <span class=\"lead\">{{searchResult.length}}\r\n        <span *ngIf=\"searchResult.length>1\">countries</span>\r\n        <span [hidden]=\"searchResult.length>1\">country</span> found for {{searchText}}</span>\r\n    </div>\r\n    <div class=\"col-6 col-md-4 col-lg-3\" *ngFor=\"let country of searchResult\" style=\"color: gray;border-radius: 0px\">\r\n      <div class=\"card my-2\">\r\n        <div class=\"row align-items-center text-center no-gutters\" [routerLink]=\"['/country',country.alpha3Code]\">\r\n          <div class=\"col-12 col-sm-auto\">\r\n            <img class=\"img-fluid\" src=\"{{country.flag}}\" style=\"height: 10vh\">\r\n          </div>\r\n          <div class=\"col\">\r\n            <small class=\"row\">\r\n              <b class=\"col-12 low-line-height\">{{country.name}}</b>\r\n              <span class=\"col-12 text-muted\">{{country.subregion}}</span>\r\n            </small>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- end search results container -->\r\n\r\n<!-- regions container -->\r\n<div class=\"container my-5\">\r\n  <div class=\"row\">\r\n    <h2 class=\"col mt-5\">Pick a region to view it's countries</h2>\r\n  </div>\r\n\r\n  <div class=\"row mt-5 map-row d-none d-md-flex\">\r\n    <div class=\"col-4 americas-col\">\r\n      <img class=\"img-fluid americas-img\" [routerLink]=\"['/countries','region','americas']\" src=\"assets/americas.png\">\r\n      <div class=\"americas-text text-center\">\r\n        <span>Americas</span>\r\n        <div class=\"row americas-des\">\r\n          <div class=\"col-12 low-line-height\">\r\n            <b>Countries</b>\r\n            <br>57</div>\r\n          <div class=\"col-12 low-line-height my-1\">\r\n            <b>Area</b>\r\n            <br>42,549,000 km2</div>\r\n          <div class=\"col-12 low-line-height\">\r\n            <b>Population</b>\r\n            <br>1,001,559,000 (2016)</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-3 europe-col\" style=\"z-index: 2;\">\r\n      <img class=\"img-fluid europe-img\" [routerLink]=\"['/countries','region','europe']\" src=\"assets/europe.png\">\r\n      <div class=\"europe-text text-center\">\r\n        <span>Europe</span>\r\n        <div class=\"row europe-des\">\r\n          <div class=\"col-12 low-line-height\">\r\n            <b>Countries</b>\r\n            <br>53</div>\r\n          <div class=\"col-12 low-line-height my-1\">\r\n            <b>Area</b>\r\n            <br>10,180,000 km2</div>\r\n          <div class=\"col-12 low-line-height\">\r\n            <b>Population</b>\r\n            <br>741,447,158 (2016)</div>\r\n        </div>\r\n      </div>\r\n      <img class=\"img-fluid africa-img\" [routerLink]=\"['/countries','region','africa']\" src=\"assets/africa.png\">\r\n      <div class=\"africa-text text-center\">\r\n        <div class=\"row africa-des\">\r\n          <div class=\"col-12 low-line-height\">\r\n            <b>Countries</b>\r\n            <br>60</div>\r\n          <div class=\"col-12 low-line-height my-1\">\r\n            <b>Area</b>\r\n            <br>30,370,000 km2</div>\r\n          <div class=\"col-12 low-line-height\">\r\n            <b>Population</b>\r\n            <br>1,225,080,510 (2016)</div>\r\n        </div>\r\n        <span>Africa</span>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-5 asia-col\">\r\n      <img class=\"img-fluid asia-img\" [routerLink]=\"['/countries','region','asia']\" src=\"assets/asia.png\">\r\n      <div class=\"asia-text text-center\">\r\n        <span>Asia</span>\r\n        <div class=\"row asia-des\">\r\n          <div class=\"col-12 low-line-height\">\r\n            <b>Countries</b>\r\n            <br>50</div>\r\n          <div class=\"col-12 low-line-height my-1\">\r\n            <b>Area</b>\r\n            <br> 44,579,000 km2</div>\r\n          <div class=\"col-12 low-line-height\">\r\n            <b>Population</b>\r\n            <br> 4,462,676,731 (2016)</div>\r\n        </div>\r\n      </div>\r\n      <img class=\"img-fluid oceania-img\" [routerLink]=\"['/countries','region','oceania']\" src=\"assets/oceania.png\">\r\n      <div class=\"oceania-text text-center\">\r\n        <div class=\"row oceania-des\">\r\n          <div class=\"col-12 low-line-height\">\r\n            <b>Countries</b>\r\n            <br>27</div>\r\n          <div class=\"col-12 low-line-height my-1\">\r\n            <b>Area</b>\r\n            <br>8,525,989 km2</div>\r\n          <div class=\"col-12 low-line-height\">\r\n            <b>Population</b>\r\n            <br>40,117,432 (2016)</div>\r\n        </div>\r\n        <span>Oceania</span>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <!-- end row -->\r\n\r\n  <div class=\"row align-items-center map-row-md text-center mt-5 d-md-none\" [routerLink]=\"['/countries','region','asia']\">\r\n    <div class=\"col\">\r\n      <div class=\"row justify-content-center\">\r\n        <span class=\"col-12 display-4\">Asia</span>\r\n        <div class=\"col-6 detail-col\">\r\n          <div class=\"row\">\r\n            <div class=\"col-12\">\r\n              <fa-icon [icon]=\"faUsers\"></fa-icon>\r\n            </div>\r\n            <div class=\"col-12\">Population</div>\r\n            <span class=\"col-12 pt-1\">4.39B</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-6 detail-col\">\r\n          <div class=\"row\">\r\n            <div class=\"col-12\">\r\n              <fa-icon [icon]=\"faMap\"></fa-icon>\r\n            </div>\r\n            <div class=\"col-12\">Area</div>\r\n            <span class=\"col-12 pt-1\">44.58M Km\r\n              <sup>2</sup>\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col\">\r\n      <img class=\"img-fluid\" src=\"assets/asia.png\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row align-items-center map-row-md text-center mt-5 d-md-none\" [routerLink]=\"['/countries','region','africa']\">\r\n    <div class=\"col\">\r\n      <img class=\"img-fluid\" src=\"assets/africa.png\">\r\n    </div>\r\n    <div class=\"col\">\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-12 display-4\">Africa</div>\r\n        <div class=\"col-6 detail-col\">\r\n          <div class=\"row\">\r\n            <div class=\"col-12\">\r\n              <fa-icon [icon]=\"faUsers\"></fa-icon>\r\n            </div>\r\n            <div class=\"col-12\">Population</div>\r\n            <span class=\"col-12 pt-1\">1.19B</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-6 detail-col\">\r\n          <div class=\"row\">\r\n            <div class=\"col-12\">\r\n              <fa-icon [icon]=\"faMap\"></fa-icon>\r\n            </div>\r\n            <div class=\"col-12\">Area</div>\r\n            <span class=\"col-12 pt-1\">30.3M Km\r\n              <sup>2</sup>\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row align-items-center map-row-md text-center mt-5 d-md-none\" [routerLink]=\"['/countries','region','europe']\">\r\n    <div class=\"col\">\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-12 display-4\">Europe</div>\r\n        <div class=\"col-6 detail-col\">\r\n          <div class=\"row\">\r\n            <div class=\"col-12\">\r\n              <fa-icon [icon]=\"faUsers\"></fa-icon>\r\n            </div>\r\n            <div class=\"col-12\">Population</div>\r\n            <span class=\"col-12 pt-1\">747M</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-6 detail-col\">\r\n          <div class=\"row\">\r\n            <div class=\"col-12\">\r\n              <fa-icon [icon]=\"faMap\"></fa-icon>\r\n            </div>\r\n            <div class=\"col-12\">Area</div>\r\n            <span class=\"col-12 pt-1\">10.18M Km\r\n              <sup>2</sup>\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col\">\r\n      <img class=\"img-fluid\" src=\"assets/europe.png\">\r\n    </div>\r\n  </div>\r\n  <div class=\"row align-items-center map-row-md text-center mt-5 d-md-none\" [routerLink]=\"['/countries','region','americas']\">\r\n    <div class=\"col\">\r\n      <img class=\"img-fluid\" src=\"assets/americas.png\">\r\n    </div>\r\n    <div class=\"col\">\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-12 display-4\">Americas</div>\r\n        <div class=\"col-6 detail-col\">\r\n          <div class=\"row\">\r\n            <div class=\"col-12\">\r\n              <fa-icon [icon]=\"faUsers\"></fa-icon>\r\n            </div>\r\n            <div class=\"col-12\">Population</div>\r\n            <span class=\"col-12 pt-1\">990M</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-6 detail-col\">\r\n          <div class=\"row\">\r\n            <div class=\"col-12\">\r\n              <fa-icon [icon]=\"faMap\"></fa-icon>\r\n            </div>\r\n            <div class=\"col-12\">Area</div>\r\n            <span class=\"col-12 pt-1\">42.55M Km\r\n              <sup>2</sup>\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row align-items-center map-row-md text-center mt-5 d-md-none\" [routerLink]=\"['/countries','region','oceania']\">\r\n    <div class=\"col\">\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-12 display-4\">Ocenia</div>\r\n        <div class=\"col-6 detail-col\">\r\n          <div class=\"row\">\r\n            <div class=\"col-12\">\r\n              <fa-icon [icon]=\"faUsers\"></fa-icon>\r\n            </div>\r\n            <div class=\"col-12\">Population</div>\r\n            <span class=\"col-12 pt-1\">40.2M</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-6 detail-col\">\r\n          <div class=\"row\">\r\n            <div class=\"col-12\">\r\n              <fa-icon [icon]=\"faMap\"></fa-icon>\r\n            </div>\r\n            <div class=\"col-12\">Area</div>\r\n            <span class=\"col-12 pt-1\">8.53M Km\r\n              <sup>2</sup>\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col\">\r\n      <img class=\"img-fluid\" src=\"assets/oceania.png\">\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n<!-- end regions container -->\r\n\r\n<!-- regional bloc container -->\r\n<div class=\"container my-5\">\r\n  <div class=\"row\">\r\n    <h2 class=\"col mt-5\">Countries by regional bloc</h2>\r\n  </div>\r\n  <div class=\"row bloc-row\">\r\n\r\n    <div class=\"card m-3\">\r\n      <div class=\"card-body\" [routerLink]=\"['/countries','regionalbloc','EU']\">\r\n        <h5 class=\"card-title mb-1\">EU</h5>\r\n        <p class=\"card-text\">(European Union)</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card m-3\">\r\n      <div class=\"card-body\" [routerLink]=\"['/countries','regionalbloc','EFTA']\">\r\n        <h5 class=\"card-title mb-1\">EFTA</h5>\r\n        <p class=\"card-text\">(European Free Trade Association)</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card m-3\">\r\n      <div class=\"card-body\" [routerLink]=\"['/countries','regionalbloc','CARICOM']\">\r\n        <h5 class=\"card-title mb-1\">CARICOM</h5>\r\n        <p class=\"card-text\">(Caribbean Community)</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card m-3\">\r\n      <div class=\"card-body\" [routerLink]=\"['/countries','regionalbloc','PA']\">\r\n        <h5 class=\"card-title mb-1\">PA</h5>\r\n        <p class=\"card-text\">(Pacific Alliance)</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card m-3\">\r\n      <div class=\"card-body\" [routerLink]=\"['/countries','regionalbloc','AU']\">\r\n        <h5 class=\"card-title mb-1\">AU</h5>\r\n        <p class=\"card-text\">(African Union)</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card m-3\">\r\n      <div class=\"card-body\" [routerLink]=\"['/countries','regionalbloc','USAN']\">\r\n        <h5 class=\"card-title mb-1\">USAN</h5>\r\n        <p class=\"card-text\">(Union of South American Nations)</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card m-3\">\r\n      <div class=\"card-body\" [routerLink]=\"['/countries','regionalbloc','EEU']\">\r\n        <h5 class=\"card-title mb-1\">EEU</h5>\r\n        <p class=\"card-text\">(Eurasian Economic Union)</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card m-3\">\r\n      <div class=\"card-body\" [routerLink]=\"['/countries','regionalbloc','AL']\">\r\n        <h5 class=\"card-title mb-1\">AL</h5>\r\n        <p class=\"card-text\">(Arab League)</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card m-3\">\r\n      <div class=\"card-body\" [routerLink]=\"['/countries','regionalbloc','ASEAN']\">\r\n        <h5 class=\"card-title mb-1\">ASEAN</h5>\r\n        <p class=\"card-text\">(Association of Southeast Asian Nations)</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card m-3\">\r\n      <div class=\"card-body\" [routerLink]=\"['/countries','regionalbloc','CAIS']\">\r\n        <h5 class=\"card-title mb-1\">CAIS</h5>\r\n        <p class=\"card-text\">(Central American Integration System)</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card m-3\">\r\n      <div class=\"card-body\" [routerLink]=\"['/countries','regionalbloc','CEFTA']\">\r\n        <h5 class=\"card-title mb-1\">CEFTA</h5>\r\n        <p class=\"card-text\">(Central European Free Trade Agreement)</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card m-3\">\r\n      <div class=\"card-body\" [routerLink]=\"['/countries','regionalbloc','NAFTA']\">\r\n        <h5 class=\"card-title mb-1\">NAFTA</h5>\r\n        <p class=\"card-text\">(North American Free Trade Agreement)</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card m-3\">\r\n      <div class=\"card-body\" [routerLink]=\"['/countries','regionalbloc','SAARC']\">\r\n        <h5 class=\"card-title mb-1\">SAARC</h5>\r\n        <p class=\"card-text\">(South Asian Association for Regional Cooperation)</p>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <!-- end row -->\r\n</div>\r\n<!-- end regional container container -->"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm5/nicky-lenaers-ngx-scroll-to.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(httpService, _scrollToService) {
        var _this = this;
        this.httpService = httpService;
        this._scrollToService = _scrollToService;
        this.faGlobe = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGlobe"];
        this.faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSearch"];
        this.faUsers = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faUsers"];
        this.faMap = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faMap"];
        this.isActive = function (type) {
            if (_this.activeSearchType == type)
                return true;
        };
        this.makeActive = function (type) {
            _this.activeSearchType = type;
        };
        this.getPlaceholderText = function (type) {
            if (type == 'name')
                return 'name';
            if (type == 'alpha')
                return "country code. Eg. 'IND' for India";
            if (type == 'currency')
                return "currency code. Eg. 'INR' for Indian National Rupee";
            if (type == 'lang')
                return "language code. Eg. 'HI' for Hindi";
            if (type == 'capital')
                return "capital city. Eg. 'New Delhi' for India";
            if (type == 'callingcode')
                return "calling code. Eg. '91' for India";
        };
        this.getCountry = function (searchType, search) {
            _this.setSearchText(searchType, search);
            _this.httpService.getCountryBySearch(searchType, search).subscribe(function (data) {
                if (searchType == 'alpha')
                    _this.searchResult = [data];
                else
                    _this.searchResult = data;
                _this.scrollToResults();
                console.log(_this.searchResult);
            }, function (error) {
                _this.searchResult = ['not found'];
                console.log(error.errorMessage);
            });
        };
        // end getCountry
        this.setSearchText = function (type, search) {
            if (type == 'alpha')
                _this.searchText = "country code \"" + search + "\"";
            else if (type == 'lang')
                _this.searchText = "language \"" + search + "\"";
            else if (type == 'callingcode')
                _this.searchText = "calling code \"" + search + "\"";
            else
                _this.searchText = type + " \"" + search + "\"";
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.activeSearchType = 'name';
    };
    HomeComponent.prototype.scrollToResults = function () {
        var config = {
            target: 'result',
            offset: -100
        };
        this._scrollToService.scrollTo(config);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_3__["ScrollToService"]])
    ], HomeComponent);
    return HomeComponent;
}());

// end class HomeComponent


/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
        this.baseUrl = "https://restcountries.eu/rest/v2";
        console.log('http service called');
    }
    HttpService.prototype.handleError = function (err) {
        console.log('Handle error Http call');
        console.log(err.message);
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(err.message);
    };
    HttpService.prototype.getAllCountriesWithLanguage = function (language) {
        var response = this._http.get(this.baseUrl + '/lang/' + language);
        return response;
    };
    HttpService.prototype.getAllCountriesWithCurrency = function (currency) {
        var response = this._http.get(this.baseUrl + '/currency/' + currency);
        return response;
    };
    HttpService.prototype.getAllCountriesWithBloc = function (bloc) {
        var response = this._http.get(this.baseUrl + '/regionalbloc/' + bloc);
        return response;
    };
    HttpService.prototype.getRegion = function (region) {
        var response = this._http.get(this.baseUrl + '/region/' + region + '?fields=name;alpha3Code;flag;capital;subregion;population;currencies;languages;timezones');
        return response;
    };
    HttpService.prototype.getCountry = function (code) {
        var response = this._http.get(this.baseUrl + '/alpha/' + code);
        return response;
    };
    HttpService.prototype.getCountryBySearch = function (searchType, search) {
        var response = this._http.get(this.baseUrl + "/" + searchType + "/" + search + "?fields=name;alpha3Code;flag;subregion");
        return response;
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/language-name.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/language-name.pipe.ts ***!
  \***************************************/
/*! exports provided: LanguageNamePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageNamePipe", function() { return LanguageNamePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LanguageNamePipe = /** @class */ (function () {
    function LanguageNamePipe() {
    }
    LanguageNamePipe.prototype.transform = function (value, args) {
        if (value == 'en')
            return 'English';
        if (value == 'es')
            return 'Spanish';
        if (value == 'de')
            return 'German';
        if (value == 'fr')
            return 'French';
        if (value == 'ja')
            return 'Japanese';
        if (value == 'it')
            return 'Italian';
        if (value == 'ru')
            return 'Russian';
        if (value == 'la')
            return 'Latin';
        if (value == 'ca')
            return 'Catalian';
        if (value == 'gn')
            return 'Guaraní';
        if (value == 'ar')
            return 'Arabic';
        if (value == 'af')
            return 'Afrikaans';
        if (value == 'sq')
            return 'Albanian';
        if (value == 'br')
            return 'Breton';
        if (value == 'pt')
            return 'Portuguese';
        if (value == 'nl')
            return 'Dutch';
        if (value == 'da')
            return 'Danish';
        if (value == 'hr')
            return 'Croatian';
        if (value == 'fa')
            return 'Persian';
        if (value == 'fi')
            return 'Finnish';
        if (value == 'tk')
            return 'Turkmen';
        if (value == 'ps')
            return 'Pashto';
        if (value == 'uz')
            return 'Uzbek';
        if (value == 'hy')
            return 'Armenian';
        if (value == 'el')
            return 'Greek';
        if (value == 'tr')
            return 'Turkish';
        if (value == 'pa')
            return '(Eastern) Punjabi';
        if (value == 'sm')
            return 'Samoan';
        if (value == 'rw')
            return 'Kinyarwanda';
        if (value == 'sr')
            return 'Serbian';
        if (value == 'sv')
            return 'Swedish';
        if (value == 'sm')
            return 'Samoan';
        if (value == 'ff')
            return 'Fula';
        if (value == 'so')
            return 'Somali';
        if (value == 'ss')
            return 'Swati';
        if (value == 'tn')
            return 'Tswana';
        if (value == 'st')
            return 'Southern Sotho';
        if (value == 'qu')
            return 'Quechua';
        if (value == 'xh')
            return 'Xhosa';
        if (value == 'zu')
            return 'Zulu';
        else
            return value;
    };
    LanguageNamePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'languageName'
        })
    ], LanguageNamePipe);
    return LanguageNamePipe;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\r\n    word-spacing: 15px\r\n}\r\n.button{\r\n    padding: 1.5rem 2rem;\r\n    color: silver;\r\n    background-color: #004d7a;\r\n    cursor: pointer;\r\n    border-radius: 2px;\r\n    text-transform: uppercase;\r\n    transition: all 0.3s ease-in-out\r\n}\r\n.button:hover{\r\n    color: #008793;\r\n    background-color: rgba(168, 235, 18, 0.3)\r\n}"

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center\">\n  <h1 class=\"my-5 display-1\">404</h1>\n  <p class=\"lead my-5\">Couldn’t find that page. It either moved or doesn’t exist anymore.</p>\n  <div class=\"row justify-content-center\">\n    <div class=\"col-2 button m-2\" (click)=\"goBack()\">Previous page</div>\n    <div class=\"col-2 button m-2\" [routerLink]=\"['/home']\">Home</div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent(location) {
        this.location = location;
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    // function to go back to previous location
    NotFoundComponent.prototype.goBack = function () {
        this.location.back();
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/number-to-mb.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/number-to-mb.pipe.ts ***!
  \**************************************/
/*! exports provided: NumberToMBPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberToMBPipe", function() { return NumberToMBPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NumberToMBPipe = /** @class */ (function () {
    function NumberToMBPipe() {
    }
    NumberToMBPipe.prototype.transform = function (value, args) {
        // Nine Zeroes for Billions
        return Math.abs(Number(value)) >= 1.0e+9
            ? (Math.abs(Number(value)) / 1.0e+9).toPrecision(3) + "B"
            // Six Zeroes for Millions 
            : Math.abs(Number(value)) >= 1.0e+6
                ? (Math.abs(Number(value)) / 1.0e+6).toPrecision(3) + "M"
                // Three Zeroes for Thousands
                : Math.abs(Number(value)) >= 1.0e+3
                    ? (Math.abs(Number(value)) / 1.0e+3).toPrecision(3) + "K"
                    : Math.abs(Number(value));
    };
    NumberToMBPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'numberToMB'
        })
    ], NumberToMBPipe);
    return NumberToMBPipe;
}());



/***/ }),

/***/ "./src/app/search.pipe.ts":
/*!********************************!*\
  !*** ./src/app/search.pipe.ts ***!
  \********************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (items, searchText, type) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        if (type == 'language') {
            return items.filter(function (it) {
                for (var _i = 0, _a = it.languages; _i < _a.length; _i++) {
                    var language = _a[_i];
                    if (language.name.toLowerCase().includes(searchText))
                        return true;
                }
            });
        }
        else if (type == 'currency') {
            return items.filter(function (it) {
                for (var _i = 0, _a = it.currencies; _i < _a.length; _i++) {
                    var currency = _a[_i];
                    if (currency.name && currency.name.toLowerCase().includes(searchText))
                        return true;
                }
            });
        }
        else {
            return items.filter(function (it) {
                return it.name.toLowerCase().includes(searchText);
            });
        }
    };
    SearchPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'search'
        })
    ], SearchPipe);
    return SearchPipe;
}());



/***/ }),

/***/ "./src/app/shared/back-btn/back-btn.component.css":
/*!********************************************************!*\
  !*** ./src/app/shared/back-btn/back-btn.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back-btn{\r\n    background: none;\r\n    color: #00bf72;\r\n    cursor: pointer;\r\n    border: 2px solid #00bf72;\r\n    border-radius: 50%;\r\n    padding: 0.1rem 0.55rem;\r\n    padding-top: 0.1rem;\r\n    padding-bottom: 0.18rem;\r\n    transition: all 0.5s ease\r\n}\r\n.back-btn:hover{\r\n    background: #00bf72;\r\n    color: white;\r\n    border-color: transparent;\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1)\r\n}\r\n.text{\r\n    visibility: hidden;\r\n    font-weight: bold;\r\n    font-size: small;\r\n    color: #00bf72;\r\n    letter-spacing: 1px;\r\n    transition: all 5 ease\r\n}\r\n.back-btn:hover + .text{\r\n    visibility: visible;\r\n}"

/***/ }),

/***/ "./src/app/shared/back-btn/back-btn.component.html":
/*!*********************************************************!*\
  !*** ./src/app/shared/back-btn/back-btn.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"back-btn\" (click)=\"goBack()\">\n    <fa-icon [icon]=\"faArrowLeft\"></fa-icon>\n</button>\n<span class=\"pl-2 text\">GO BACK</span>"

/***/ }),

/***/ "./src/app/shared/back-btn/back-btn.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/back-btn/back-btn.component.ts ***!
  \*******************************************************/
/*! exports provided: BackBtnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackBtnComponent", function() { return BackBtnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BackBtnComponent = /** @class */ (function () {
    function BackBtnComponent(location) {
        var _this = this;
        this.location = location;
        this.faArrowLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faArrowLeft"];
        this.goBack = function () {
            _this.location.back();
        };
    }
    BackBtnComponent.prototype.ngOnInit = function () {
    };
    BackBtnComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'back-btn',
            template: __webpack_require__(/*! ./back-btn.component.html */ "./src/app/shared/back-btn/back-btn.component.html"),
            styles: [__webpack_require__(/*! ./back-btn.component.css */ "./src/app/shared/back-btn/back-btn.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], BackBtnComponent);
    return BackBtnComponent;
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
/* harmony import */ var _back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./back-btn/back-btn.component */ "./src/app/shared/back-btn/back-btn.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"]
            ],
            declarations: [_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_2__["BackBtnComponent"]],
            exports: [
                _back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_2__["BackBtnComponent"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\nitin\Documents\edwisor\edWisor New\Level 4\assignment 3\countryDetails\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map