webpackJsonp([1,4],{

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InfoService = (function () {
    function InfoService() {
        this.version = '0.2.0-alpha';
    }
    InfoService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], InfoService);
    return InfoService;
}());
//# sourceMappingURL=D:/dev/js/ng/book/src/info.service.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_info_service__ = __webpack_require__(215);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = (function () {
    function AboutComponent(info) {
        this.info = info;
        this.version = '';
        this.version = info.version;
    }
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            template: __webpack_require__(681)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_info_service__["a" /* InfoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_info_service__["a" /* InfoService */]) === 'function' && _a) || Object])
    ], AboutComponent);
    return AboutComponent;
    var _a;
}());
//# sourceMappingURL=D:/dev/js/ng/book/src/about.component.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BooksComponent = (function () {
    function BooksComponent() {
        this.books = [
            {
                ImgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Cover_(Hound_of_Baskervilles,_1902).jpg/200px-Cover_(Hound_of_Baskervilles,_1902).jpg',
                Title: 'The Hound of the Baskervilles'
            },
            {
                ImgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Cover_(Hound_of_Baskervilles,_1902).jpg/200px-Cover_(Hound_of_Baskervilles,_1902).jpg',
                Title: 'The Hound of the Baskervilles'
            },
            {
                ImgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Cover_(Hound_of_Baskervilles,_1902).jpg/200px-Cover_(Hound_of_Baskervilles,_1902).jpg',
                Title: 'The Hound of the Baskervilles'
            },
            {
                ImgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Cover_(Hound_of_Baskervilles,_1902).jpg/200px-Cover_(Hound_of_Baskervilles,_1902).jpg',
                Title: 'The Hound of the Baskervilles'
            }
        ];
    }
    BooksComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            template: __webpack_require__(683)
        }), 
        __metadata('design:paramtypes', [])
    ], BooksComponent);
    return BooksComponent;
}());
//# sourceMappingURL=D:/dev/js/ng/book/src/books.component.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReadComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReadComponent = (function () {
    function ReadComponent() {
        this.book = {
            'Title': 'The Hound of the Baskervilles',
            'Author': 'Sir Arthur Conan Doyle',
            'img': 'link',
            'Contents': {
                'Title': 'Chapter 1--Mr. Sherlock Holmes',
                'Text': [
                    'Mr. Sherlock Holmes, who was usually very late in the mornings, save upon those not infrequent occasions when he was up all night, was seated at the breakfast table. I stood upon the hearth-rug and picked up the stick which our visitor had left behind him the night before. It was a fine, thick piece of wood, bulbous-headed, of the sort which is known as a "Penang lawyer." Just under the head was a broad silver band nearly an inch across. "To James Mortimer, M.R.C.S., from his friends of the C.C.H.," was engraved upon it, with the date "1884." It was just such a stick as the old-fashioned family practitioner used to carry--dignified, solid, and reassuring.',
                    '"Well, Watson, what do you make of it?"',
                    'Holmes was sitting with his back to me, and I had given him no sign of my occupation.',
                    '"How did you know what I was doing? I believe you have eyes in the back of your head."',
                    ' "I have, at least, a well-polished, silver-plated coffee-pot in front of me," said he. "But, tell me, Watson, what do you make of our visitor\'s stick? Since we have been so unfortunate as to miss him and have no notion of his errand, this accidental souvenir becomes of importance. Let me hear you reconstruct the man by an examination of it."',
                    '"I think," said I, following as far as I could the methods of my companion, "that Dr. Mortimer is a successful, elderly medical man, well-esteemed since those who know him give him this mark of their appreciation."',
                    ' "Good!" said Holmes. "Excellent!"',
                    ' "I think also that the probability is in favour of his being a country practitioner who does a great deal of his visiting on foot."',
                    '"Why so?"',
                    '   "Because this stick, though originally a very handsome one has been so knocked about that I can hardly imagine a town practitioner carrying it. The thick-iron ferrule is worn down, so it is evident that he has done a great amount of walking with it."',
                    '"Perfectly sound!" said Holmes.',
                    '"And then again, there is the \'friends of the C.C.H.\' I should guess that to be the Something Hunt, the local hunt to whose members he has possibly given some surgical assistance, and which has made him a small presentation in return."',
                    '"Really, Watson, you excel yourself," said Holmes, pushing back his chair and lighting a cigarette. "I am bound to say that in all the accounts which you have been so good as to give of my own small achievements you have habitually underrated your own abilities. It may be that you are not yourself luminous, but you are a conductor of light. Some people without possessing genius have a remarkable power of stimulating it. I confess, my dear fellow, that I am very much in your debt."',
                    'He had never said as much before, and I must admit that his words gave me keen pleasure, for I had often been piqued by his indifference to my admiration and to the attempts which I had made to give publicity to his methods. I was proud, too, to think that I had so far mastered his system as to apply it in a way which earned his approval. He now took the stick from my hands and examined it for a few minutes with his naked eyes. Then with an expression of interest he laid down his cigarette, and carrying the cane to the window, he looked over it again with a convex lens.',
                    '"Interesting, though elementary," said he as he returned to his favourite corner of the settee. "There are certainly one or two indications upon the stick. It gives us the basis for several deductions."',
                    '"Has anything escaped me?" I asked with some self-importance. "I trust that there is nothing of consequence which I have overlooked?"',
                    '"Has anything escaped me?" I asked with some self-importance. "I trust that there is nothing of consequence which I have overlooked?"'
                ]
            }
        };
    }
    ReadComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            template: __webpack_require__(687),
            styles: [__webpack_require__(678)]
        }), 
        __metadata('design:paramtypes', [])
    ], ReadComponent);
    return ReadComponent;
}());
//# sourceMappingURL=D:/dev/js/ng/book/src/reader.component.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TranslateService = (function () {
    function TranslateService(http) {
        this.http = http;
        this.TransalteToken = 'trnsl.1.1.20170122T140228Z.315d034ad2b621da.dcbade2e787cec10b69e4788d710bdf2f5172f82';
        this.TranslateUri = 'https://translate.yandex.net/api/v1.5/tr.json/translate?';
        this.DictionaryToken = 'dict.1.1.20170305T130201Z.2554c112ec72330d.d69305e3c1764a48a7f41ff1e996b392f0fbce55';
        this.DictionaryUri = 'https://dictionary.yandex.net/api/v1/dicservice.json/lookup?';
    }
    TranslateService.prototype.translate = function (text, isDictionary) {
        if (isDictionary === void 0) { isDictionary = false; }
        if (isDictionary) {
            return this._dictionary(text);
        }
        else {
            return this._translate(text);
        }
    };
    TranslateService.prototype._translate = function (text) {
        var url = this.TranslateUri + "key=" + this.TransalteToken + "&text=" + text + "&lang=en-ru";
        return this.http.get(url)
            .toPromise()
            .then(function (x) { return x.json().text; });
    };
    TranslateService.prototype._dictionary = function (text) {
        var _this = this;
        var url = this.DictionaryUri + "key=" + this.DictionaryToken + "&text=" + text + "&lang=en-ru";
        return this.http.get(url)
            .toPromise()
            .then(function (x) { return x.json().def; })
            .then(function (x) {
            if (x.length > 0) {
                var y_1 = [];
                x.forEach(function (items) { return items.tr.forEach(function (item) { return y_1.push(item); }); });
                return y_1;
            }
            else {
                return _this._translate(text);
            }
        });
    };
    TranslateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], TranslateService);
    return TranslateService;
    var _a;
}());
//# sourceMappingURL=D:/dev/js/ng/book/src/translate.service.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WordsComponent = (function () {
    function WordsComponent() {
    }
    WordsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            template: __webpack_require__(690)
        }), 
        __metadata('design:paramtypes', [])
    ], WordsComponent);
    return WordsComponent;
}());
//# sourceMappingURL=D:/dev/js/ng/book/src/words.component.js.map

/***/ }),

/***/ 392:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 392;


/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(513);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=D:/dev/js/ng/book/src/main.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'body',
            template: __webpack_require__(682),
            styles: [__webpack_require__(676)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=D:/dev/js/ng/book/src/app.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_header_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__footer_footer_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_about_component__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__books_books_component__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__words_words_component__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__reader_reader_component__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__reader_paragraph_paragraph_reader_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__reader_word_word_reader_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__reader_word_modal_modal_word_reader_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_translate_service__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_info_service__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_split_pipe__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__routing_module__ = __webpack_require__(519);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_6__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_7__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_8__books_books_component__["a" /* BooksComponent */],
                __WEBPACK_IMPORTED_MODULE_9__words_words_component__["a" /* WordsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__reader_reader_component__["a" /* ReadComponent */],
                __WEBPACK_IMPORTED_MODULE_12__reader_word_word_reader_component__["a" /* WordReadComponent */],
                __WEBPACK_IMPORTED_MODULE_11__reader_paragraph_paragraph_reader_component__["a" /* ParagraphReaderComponent */],
                __WEBPACK_IMPORTED_MODULE_16__shared_split_pipe__["a" /* SplitPipe */],
                __WEBPACK_IMPORTED_MODULE_13__reader_word_modal_modal_word_reader_component__["a" /* ModalComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_17__routing_module__["a" /* RoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_14__shared_translate_service__["a" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_15__shared_info_service__["a" /* InfoService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/dev/js/ng/book/src/app.module.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_info_service__ = __webpack_require__(215);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = (function () {
    function FooterComponent(info) {
        this.info = info;
        this.version = '';
        this.version = info.version;
    }
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'footer',
            template: __webpack_require__(684)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_info_service__["a" /* InfoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_info_service__["a" /* InfoService */]) === 'function' && _a) || Object])
    ], FooterComponent);
    return FooterComponent;
    var _a;
}());
//# sourceMappingURL=D:/dev/js/ng/book/src/footer.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'header',
            template: __webpack_require__(685)
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
//# sourceMappingURL=D:/dev/js/ng/book/src/header.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParagraphReaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ParagraphReaderComponent = (function () {
    function ParagraphReaderComponent() {
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', String)
    ], ParagraphReaderComponent.prototype, "paragraph", void 0);
    ParagraphReaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'p-reader',
            template: __webpack_require__(686),
            styles: [__webpack_require__(677)]
        }), 
        __metadata('design:paramtypes', [])
    ], ParagraphReaderComponent);
    return ParagraphReaderComponent;
}());
//# sourceMappingURL=D:/dev/js/ng/book/src/paragraph.reader.component.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalComponent = (function () {
    function ModalComponent() {
        this.isConfirmed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
    }
    ModalComponent.prototype.click = function (text) {
        this.isConfirmed.emit(text);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', String)
    ], ModalComponent.prototype, "word", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Array)
    ], ModalComponent.prototype, "translates", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]) === 'function' && _a) || Object)
    ], ModalComponent.prototype, "isConfirmed", void 0);
    ModalComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'modal',
            template: __webpack_require__(688),
            styles: [__webpack_require__(679)]
        }), 
        __metadata('design:paramtypes', [])
    ], ModalComponent);
    return ModalComponent;
    var _a;
}());
//# sourceMappingURL=D:/dev/js/ng/book/src/modal.word.reader.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_translate_service__ = __webpack_require__(334);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordReadComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WordReadComponent = (function () {
    function WordReadComponent(translateService) {
        this.translateService = translateService;
        this.isTranslate = false;
        this.isModalDialogVisible = false;
    }
    WordReadComponent.prototype.translate = function () {
        var _this = this;
        if (!this.isTranslate) {
            this.translateService.translate(this.word).then(function (x) { return _this.wordTranslate = x[0].replace(/ /g, '_'); });
        }
        else {
            this.showDialog();
        }
        this.isTranslate = true;
    };
    WordReadComponent.prototype.showDialog = function () {
        var _this = this;
        this.translateService.translate(this.word, true).then(function (x) {
            _this.wordTranslates = [];
            if (x[0].text != null) {
                x.forEach(function (translate) { return _this.wordTranslates.push(translate.text); });
            }
            else {
                _this.wordTranslates = x;
            }
        });
        this.isModalDialogVisible = true;
    };
    WordReadComponent.prototype.closeModal = function (translate) {
        this.isModalDialogVisible = false;
        this.wordTranslate = translate.replace(/ /g, '_');
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', String)
    ], WordReadComponent.prototype, "word", void 0);
    WordReadComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'word',
            template: __webpack_require__(689),
            styles: [__webpack_require__(680)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_translate_service__["a" /* TranslateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_translate_service__["a" /* TranslateService */]) === 'function' && _a) || Object])
    ], WordReadComponent);
    return WordReadComponent;
    var _a;
}());
//# sourceMappingURL=D:/dev/js/ng/book/src/word.reader.component.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about_component__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__books_books_component__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__words_words_component__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reader_reader_component__ = __webpack_require__(333);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var routes = [
    { path: '', redirectTo: '/books', pathMatch: 'full' },
    { path: 'books', component: __WEBPACK_IMPORTED_MODULE_3__books_books_component__["a" /* BooksComponent */] },
    { path: 'words', component: __WEBPACK_IMPORTED_MODULE_4__words_words_component__["a" /* WordsComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_2__about_about_component__["a" /* AboutComponent */] },
    { path: 'reader', component: __WEBPACK_IMPORTED_MODULE_5__reader_reader_component__["a" /* ReadComponent */] }
];
var RoutingModule = (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], RoutingModule);
    return RoutingModule;
}());
//# sourceMappingURL=D:/dev/js/ng/book/src/routing.module.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplitPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SplitPipe = (function () {
    function SplitPipe() {
    }
    SplitPipe.prototype.transform = function (text) {
        return text.split(' ');
    };
    SplitPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Pipe */])({
            name: 'split'
        }), 
        __metadata('design:paramtypes', [])
    ], SplitPipe);
    return SplitPipe;
}());
//# sourceMappingURL=D:/dev/js/ng/book/src/split.pipe.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=D:/dev/js/ng/book/src/environment.js.map

/***/ }),

/***/ 676:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 677:
/***/ (function(module, exports) {

module.exports = "word{\r\n  position: relative;\r\n}\r\n"

/***/ }),

/***/ 678:
/***/ (function(module, exports) {

module.exports = "p{\r\n  position: relative;\r\n  line-height: 1.5;\r\n}\r\np-reader{\r\n  position: relative;\r\n}\r\ndiv{\r\n  position: relative;\r\n}\r\n"

/***/ }),

/***/ 679:
/***/ (function(module, exports) {

module.exports = ".modal-background {\r\n  position         : absolute;\r\n  display          : -webkit-box;\r\n  display          : -ms-flexbox;\r\n  display          : flex;\r\n  -webkit-box-pack  : center;\r\n      -ms-flex-pack  : center;\r\n          justify-content  : center;\r\n  -webkit-box-align      : center;\r\n      -ms-flex-align      : center;\r\n          align-items      : center;\r\n  z-index          : 9999;\r\n  left             : 0;\r\n  right            : 0;\r\n  top              : 0;\r\n  bottom           : 0;\r\n  background-color : rgba(0, 0, 0, 0.6);\r\n}\r\n\r\n.modal-background:hover {\r\n  background-color : rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n.container {\r\n  position        : relative;\r\n  display         : -webkit-box;\r\n  display         : -ms-flexbox;\r\n  display         : flex;\r\n  -webkit-box-orient  : vertical;\r\n  -webkit-box-direction  : normal;\r\n      -ms-flex-direction  : column;\r\n          flex-direction  : column;\r\n  -webkit-box-pack : start;\r\n      -ms-flex-pack : start;\r\n          justify-content : flex-start;\r\n  width           : 350px;\r\n  border-radius   : 5px;\r\n  border          : gray solid 1px;\r\n  background      : white;\r\n  color           : black;\r\n  margin-bottom   : 15px;\r\n  padding-bottom  : 10px;\r\n}\r\n\r\n.header-block {\r\n  display         : -webkit-box;\r\n  display         : -ms-flexbox;\r\n  display         : flex;\r\n  -webkit-box-orient  : horizontal;\r\n  -webkit-box-direction  : normal;\r\n      -ms-flex-direction  : row;\r\n          flex-direction  : row;\r\n  -webkit-box-pack : justify;\r\n      -ms-flex-pack : justify;\r\n          justify-content : space-between;\r\n  -webkit-box-align     : center;\r\n      -ms-flex-align     : center;\r\n          align-items     : center;\r\n  padding         : 5px 15px;\r\n}\r\n\r\n.header-title {\r\n  margin : 0;\r\n}\r\n\r\n.close-button {\r\n  font-size : 1.2rem;\r\n  cursor    : pointer;\r\n  color     : #000000;\r\n}\r\n\r\n.content {\r\n  color      : #000000;\r\n  padding    : 1rem;\r\n  border-top : 1px solid #000000;\r\n}\r\n\r\n.action-block {\r\n  display         : -webkit-box;\r\n  display         : -ms-flexbox;\r\n  display         : flex;\r\n  -webkit-box-pack : end;\r\n      -ms-flex-pack : end;\r\n          justify-content : flex-end;\r\n}\r\n"

/***/ }),

/***/ 680:
/***/ (function(module, exports) {

module.exports = "span{\r\n  position: relative;\r\n}\r\n\r\nsup{\r\n  position: absolute;\r\n  left: 50%;\r\n  -webkit-transform: translateX(-50%);\r\n          transform: translateX(-50%);\r\n  top:-0.25em;\r\n  color: #808080;\r\n}\r\n"

/***/ }),

/***/ 681:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default container\">\r\n  <div class=\"panel-body\">\r\n    Невероятно важная и интересная инфа(нет)\r\n    <p>Текущая версия: {{version}}</p>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 682:
/***/ (function(module, exports) {

module.exports = "<header></header>\r\n<router-outlet></router-outlet>\r\n<footer class=\"footer\"></footer>"

/***/ }),

/***/ 683:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div *ngFor=\"let book of books\" class=\"col-md-3 panel panel-default\" routerLink=\"/reader\">\r\n      <div class=\"panel-body\">\r\n        <img src=\"{{book.ImgUrl}}\" alt=\"\">\r\n        <br>{{book.Title}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 684:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <p class=\"text-muted\">Version: {{version}} </p>\r\n</div>"

/***/ }),

/***/ 685:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-static-top\" role=\"navigation\">\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand\">Books</a>\r\n    <ul class=\"nav navbar-nav\">\r\n      <li routerLinkActive=\"active\"><a routerLink=\"/books\">Книги</a></li>\r\n      <li routerLinkActive=\"active\"><a routerLink=\"/words\">Словарь</a></li>\r\n      <li routerLinkActive=\"active\"><a routerLink=\"/about\">О сайте</a></li>\r\n    </ul>\r\n    <button type=\"button\" class=\"btn btn-default navbar-btn navbar-right\">Войти</button>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ 686:
/***/ (function(module, exports) {

module.exports = "<word *ngFor=\"let word of paragraph|split\" [word]=\"word\"></word>"

/***/ }),

/***/ 687:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default container\">\r\n  <div class=\"panel-body\">\r\n    <p *ngFor=\"let paragraph of book.Contents.Text\">\r\n      <p-reader [paragraph]=\"paragraph\"></p-reader>\r\n    </p>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 688:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-background\">\r\n  <div class=\"container\">\r\n    <div class=\"header-block\">\r\n      <h3 class=\"header-title\">{{word}}</h3>\r\n    </div>\r\n    <div class=\"content\">\r\n      <ul>\r\n        <li *ngFor=\"let translate of translates\" (click)=\"click(translate)\">{{translate}}</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 689:
/***/ (function(module, exports) {

module.exports = "<span (click)=\"translate()\">{{word}}</span>\r\n<sup *ngIf=\"isTranslate\" (click)=\"translate()\">{{wordTranslate}}</sup>\r\n<modal *ngIf=\"isModalDialogVisible\" [word]=\"word\" \r\n        [translates]=\"wordTranslates\" (isConfirmed)=\"closeModal($event)\"></modal>"

/***/ }),

/***/ 690:
/***/ (function(module, exports) {

module.exports = "<p>words</p>"

/***/ }),

/***/ 711:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(393);


/***/ })

},[711]);
//# sourceMappingURL=main.bundle.map