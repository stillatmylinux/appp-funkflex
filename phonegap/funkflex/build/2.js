webpackJsonp([2],{

/***/ 601:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BpMessagesModule", function() { return BpMessagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bp_messages__ = __webpack_require__(654);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_do_links_do_links_module__ = __webpack_require__(628);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BpMessagesModule = /** @class */ (function () {
    function BpMessagesModule() {
    }
    BpMessagesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__bp_messages__["a" /* BpMessages */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__bp_messages__["a" /* BpMessages */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__pipes_do_links_do_links_module__["a" /* DoLinksModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__bp_messages__["a" /* BpMessages */]
            ]
        })
    ], BpMessagesModule);
    return BpMessagesModule;
}());

//# sourceMappingURL=bp-messages.module.js.map

/***/ }),

/***/ 616:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * Options defaulting function
 *
**/
function defaultOptions(options) {
    if (!options) {
        options = {
            attributes: [],
            ips: true,
            emails: true,
            urls: true,
            files: true,
            truncate: Infinity,
            defaultProtocol: "http://",
            list: false
        };
    }
    if (typeof options.attributes !== "object")
        options.attributes = [];
    if (typeof options.ips !== "boolean")
        options.ips = true;
    if (typeof options.emails !== "boolean")
        options.emails = true;
    if (typeof options.urls !== "boolean")
        options.urls = true;
    if (typeof options.files !== "boolean")
        options.files = true;
    if (typeof options.list !== "boolean")
        options.list = false;
    if (typeof options.defaultProtocol !== "string" && typeof options.defaultProtocol !== "function")
        options.defaultProtocol = "http://";
    if (typeof options.truncate !== "number" && (typeof options.truncate !== "object" || options.truncate === null))
        options.truncate = Infinity;
    return options;
}
exports.defaultOptions = defaultOptions;
/**
 *
 * Returns whether passed string
 * can be a valid port number or not
 *
**/
function isPort(value) {
    if (isNaN(Number(value)))
        return false;
    if ((Number(value)) > 65535)
        return false;
    else
        return true;
}
exports.isPort = isPort;


/***/ }),

/***/ 617:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.tlds = ["com", "org", "net", "uk", "gov", "edu", "io", "cc", "co", "aaa", "aarp", "abarth", "abb", "abbott", "abbvie", "abc", "able", "abogado", "abudhabi", "ac", "academy", "accenture", "accountant", "accountants", "aco", "active", "actor", "ad", "adac", "ads", "adult", "ae", "aeg", "aero", "aetna", "af", "afamilycompany", "afl", "africa", "ag", "agakhan", "agency", "ai", "aig", "aigo", "airbus", "airforce", "airtel", "akdn", "al", "alfaromeo", "alibaba", "alipay", "allfinanz", "allstate", "ally", "alsace", "alstom", "am", "americanexpress", "americanfamily", "amex", "amfam", "amica", "amsterdam", "analytics", "android", "anquan", "anz", "ao", "aol", "apartments", "app", "apple", "aq", "aquarelle", "ar", "aramco", "archi", "army", "arpa", "art", "arte", "as", "asda", "asia", "associates", "at", "athleta", "attorney", "au", "auction", "audi", "audible", "audio", "auspost", "author", "auto", "autos", "avianca", "aw", "aws", "ax", "axa", "az", "azure", "ba", "baby", "baidu", "banamex", "bananarepublic", "band", "bank", "bar", "barcelona", "barclaycard", "barclays", "barefoot", "bargains", "baseball", "basketball", "bauhaus", "bayern", "bb", "bbc", "bbt", "bbva", "bcg", "bcn", "bd", "be", "beats", "beauty", "beer", "bentley", "berlin", "best", "bestbuy", "bet", "bf", "bg", "bh", "bharti", "bi", "bible", "bid", "bike", "bing", "bingo", "bio", "biz", "bj", "black", "blackfriday", "blanco", "blockbuster", "blog", "bloomberg", "blue", "bm", "bms", "bmw", "bn", "bnl", "bnpparibas", "bo", "boats", "boehringer", "bofa", "bom", "bond", "boo", "book", "booking", "boots", "bosch", "bostik", "boston", "bot", "boutique", "box", "br", "bradesco", "bridgestone", "broadway", "broker", "brother", "brussels", "bs", "bt", "budapest", "bugatti", "build", "builders", "business", "buy", "buzz", "bv", "bw", "by", "bz", "bzh", "ca", "cab", "cafe", "cal", "call", "calvinklein", "cam", "camera", "camp", "cancerresearch", "canon", "capetown", "capital", "capitalone", "car", "caravan", "cards", "care", "career", "careers", "cars", "cartier", "casa", "case", "caseih", "cash", "casino", "cat", "catering", "catholic", "cba", "cbn", "cbre", "cbs", "cd", "ceb", "center", "ceo", "cern", "cf", "cfa", "cfd", "cg", "ch", "chanel", "channel", "chase", "chat", "cheap", "chintai", "chloe", "christmas", "chrome", "chrysler", "church", "ci", "cipriani", "circle", "cisco", "citadel", "citi", "citic", "city", "cityeats", "ck", "cl", "claims", "cleaning", "click", "clinic", "clinique", "clothing", "cloud", "club", "clubmed", "cm", "cn", "coach", "codes", "coffee", "college", "cologne", "comcast", "commbank", "community", "company", "compare", "computer", "comsec", "condos", "construction", "consulting", "contact", "contractors", "cooking", "cookingchannel", "cool", "coop", "corsica", "country", "coupon", "coupons", "courses", "cr", "credit", "creditcard", "creditunion", "cricket", "crown", "crs", "cruise", "cruises", "csc", "cu", "cuisinella", "cv", "cw", "cx", "cy", "cymru", "cyou", "cz", "dabur", "dad", "dance", "data", "date", "dating", "datsun", "day", "dclk", "dds", "de", "deal", "dealer", "deals", "degree", "delivery", "dell", "deloitte", "delta", "democrat", "dental", "dentist", "desi", "design", "dev", "dhl", "diamonds", "diet", "digital", "direct", "directory", "discount", "discover", "dish", "diy", "dj", "dk", "dm", "dnp", "do", "docs", "doctor", "dodge", "dog", "doha", "domains", "dot", "download", "drive", "dtv", "dubai", "duck", "dunlop", "duns", "dupont", "durban", "dvag", "dvr", "dz", "earth", "eat", "ec", "eco", "edeka", "education", "ee", "eg", "email", "emerck", "energy", "engineer", "engineering", "enterprises", "epost", "epson", "equipment", "er", "ericsson", "erni", "es", "esq", "estate", "esurance", "et", "eu", "eurovision", "eus", "events", "everbank", "exchange", "expert", "exposed", "express", "extraspace", "fage", "fail", "fairwinds", "faith", "family", "fan", "fans", "farm", "farmers", "fashion", "fast", "fedex", "feedback", "ferrari", "ferrero", "fi", "fiat", "fidelity", "fido", "film", "final", "finance", "financial", "fire", "firestone", "firmdale", "fish", "fishing", "fit", "fitness", "fj", "fk", "flickr", "flights", "flir", "florist", "flowers", "fly", "fm", "fo", "foo", "food", "foodnetwork", "football", "ford", "forex", "forsale", "forum", "foundation", "fox", "fr", "free", "fresenius", "frl", "frogans", "frontdoor", "frontier", "ftr", "fujitsu", "fujixerox", "fun", "fund", "furniture", "futbol", "fyi", "ga", "gal", "gallery", "gallo", "gallup", "game", "games", "gap", "garden", "gb", "gbiz", "gd", "gdn", "ge", "gea", "gent", "genting", "george", "gf", "gg", "ggee", "gh", "gi", "gift", "gifts", "gives", "giving", "gl", "glade", "glass", "gle", "global", "globo", "gm", "gmail", "gmbh", "gmo", "gmx", "gn", "godaddy", "gold", "goldpoint", "golf", "goo", "goodhands", "goodyear", "goog", "google", "gop", "got", "gp", "gq", "gr", "grainger", "graphics", "gratis", "green", "gripe", "group", "gs", "gt", "gu", "guardian", "gucci", "guge", "guide", "guitars", "guru", "gw", "gy", "hair", "hamburg", "hangout", "haus", "hbo", "hdfc", "hdfcbank", "health", "healthcare", "help", "helsinki", "here", "hermes", "hgtv", "hiphop", "hisamitsu", "hitachi", "hiv", "hk", "hkt", "hm", "hn", "hockey", "holdings", "holiday", "homedepot", "homegoods", "homes", "homesense", "honda", "honeywell", "horse", "hospital", "host", "hosting", "hot", "hoteles", "hotmail", "house", "how", "hr", "hsbc", "ht", "htc", "hu", "hughes", "hyatt", "hyundai", "ibm", "icbc", "ice", "icu", "id", "ie", "ieee", "ifm", "ikano", "il", "im", "imamat", "imdb", "immo", "immobilien", "in", "industries", "infiniti", "info", "ing", "ink", "institute", "insurance", "insure", "int", "intel", "international", "intuit", "investments", "ipiranga", "iq", "ir", "irish", "is", "iselect", "ismaili", "ist", "istanbul", "it", "itau", "itv", "iveco", "iwc", "jaguar", "java", "jcb", "jcp", "je", "jeep", "jetzt", "jewelry", "jio", "jlc", "jll", "jm", "jmp", "jnj", "jo", "jobs", "joburg", "jot", "joy", "jp", "jpmorgan", "jprs", "juegos", "juniper", "kaufen", "kddi", "ke", "kerryhotels", "kerrylogistics", "kerryproperties", "kfh", "kg", "kh", "ki", "kia", "kim", "kinder", "kindle", "kitchen", "kiwi", "km", "kn", "koeln", "komatsu", "kosher", "kp", "kpmg", "kpn", "kr", "krd", "kred", "kuokgroup", "kw", "ky", "kyoto", "kz", "la", "lacaixa", "ladbrokes", "lamborghini", "lamer", "lancaster", "lancia", "lancome", "land", "landrover", "lanxess", "lasalle", "lat", "latino", "latrobe", "law", "lawyer", "lb", "lc", "lds", "lease", "leclerc", "lefrak", "legal", "lego", "lexus", "lgbt", "li", "liaison", "lidl", "life", "lifeinsurance", "lifestyle", "lighting", "like", "lilly", "limited", "limo", "lincoln", "linde", "link", "lipsy", "live", "living", "lixil", "lk", "loan", "loans", "locker", "locus", "loft", "lol", "london", "lotte", "lotto", "love", "lpl", "lplfinancial", "lr", "ls", "lt", "ltd", "ltda", "lu", "lundbeck", "lupin", "luxe", "luxury", "lv", "ly", "ma", "macys", "madrid", "maif", "maison", "makeup", "man", "management", "mango", "market", "marketing", "markets", "marriott", "marshalls", "maserati", "mattel", "mba", "mc", "mcd", "mcdonalds", "mckinsey", "md", "me", "med", "media", "meet", "melbourne", "meme", "memorial", "men", "menu", "meo", "metlife", "mg", "mh", "miami", "microsoft", "mil", "mini", "mint", "mit", "mitsubishi", "mk", "ml", "mlb", "mls", "mm", "mma", "mn", "mo", "mobi", "mobile", "mobily", "moda", "moe", "moi", "mom", "monash", "money", "monster", "montblanc", "mopar", "mormon", "mortgage", "moscow", "moto", "motorcycles", "mov", "movie", "movistar", "mp", "mq", "mr", "ms", "msd", "mt", "mtn", "mtpc", "mtr", "mu", "museum", "mutual", "mv", "mw", "mx", "my", "mz", "na", "nab", "nadex", "nagoya", "name", "nationwide", "natura", "navy", "nba", "nc", "ne", "nec", "netbank", "netflix", "network", "neustar", "new", "newholland", "news", "next", "nextdirect", "nexus", "nf", "nfl", "ng", "ngo", "nhk", "ni", "nico", "nike", "nikon", "ninja", "nissan", "nissay", "nl", "no", "nokia", "northwesternmutual", "norton", "now", "nowruz", "nowtv", "np", "nr", "nra", "nrw", "ntt", "nu", "nyc", "nz", "obi", "observer", "off", "office", "okinawa", "olayan", "olayangroup", "oldnavy", "ollo", "om", "omega", "one", "ong", "onl", "online", "onyourside", "ooo", "open", "oracle", "orange", "organic", "orientexpress", "origins", "osaka", "otsuka", "ott", "ovh", "pa", "page", "pamperedchef", "panasonic", "panerai", "paris", "pars", "partners", "parts", "party", "passagens", "pay", "pccw", "pe", "pet", "pf", "pfizer", "pg", "ph", "pharmacy", "philips", "phone", "photo", "photography", "photos", "physio", "piaget", "pics", "pictet", "pictures", "pid", "pin", "ping", "pink", "pioneer", "pizza", "pk", "pl", "place", "play", "playstation", "plumbing", "plus", "pm", "pn", "pnc", "pohl", "poker", "politie", "porn", "post", "pr", "pramerica", "praxi", "press", "prime", "pro", "prod", "productions", "prof", "progressive", "promo", "properties", "property", "protection", "pru", "prudential", "ps", "pt", "pub", "pw", "pwc", "py", "qa", "qpon", "quebec", "quest", "qvc", "racing", "radio", "raid", "re", "read", "realestate", "realtor", "realty", "recipes", "red", "redstone", "redumbrella", "rehab", "reise", "reisen", "reit", "reliance", "ren", "rent", "rentals", "repair", "report", "republican", "rest", "restaurant", "review", "reviews", "rexroth", "rich", "richardli", "ricoh", "rightathome", "ril", "rio", "rip", "rmit", "ro", "rocher", "rocks", "rodeo", "rogers", "room", "rs", "rsvp", "ru", "ruhr", "run", "rw", "rwe", "ryukyu", "sa", "saarland", "safe", "safety", "sakura", "sale", "salon", "samsclub", "samsung", "sandvik", "sandvikcoromant", "sanofi", "sap", "sapo", "sarl", "sas", "save", "saxo", "sb", "sbi", "sbs", "sc", "sca", "scb", "schaeffler", "schmidt", "scholarships", "school", "schule", "schwarz", "science", "scjohnson", "scor", "scot", "sd", "se", "seat", "secure", "security", "seek", "select", "sener", "services", "ses", "seven", "sew", "sex", "sexy", "sfr", "sg", "sh", "shangrila", "sharp", "shaw", "shell", "shia", "shiksha", "shoes", "shop", "shopping", "shouji", "show", "showtime", "shriram", "si", "silk", "sina", "singles", "site", "sj", "sk", "ski", "skin", "sky", "skype", "sl", "sling", "sm", "smart", "smile", "sn", "sncf", "so", "soccer", "social", "softbank", "software", "sohu", "solar", "solutions", "song", "sony", "soy", "space", "spiegel", "spot", "spreadbetting", "sr", "srl", "srt", "st", "stada", "staples", "star", "starhub", "statebank", "statefarm", "statoil", "stc", "stcgroup", "stockholm", "storage", "store", "stream", "studio", "study", "style", "su", "sucks", "supplies", "supply", "support", "surf", "surgery", "suzuki", "sv", "swatch", "swiftcover", "swiss", "sx", "sy", "sydney", "symantec", "systems", "sz", "tab", "taipei", "talk", "taobao", "target", "tatamotors", "tatar", "tattoo", "tax", "taxi", "tc", "tci", "td", "tdk", "team", "tech", "technology", "tel", "telecity", "telefonica", "temasek", "tennis", "teva", "tf", "tg", "th", "thd", "theater", "theatre", "tiaa", "tickets", "tienda", "tiffany", "tips", "tires", "tirol", "tj", "tjmaxx", "tjx", "tk", "tkmaxx", "tl", "tm", "tmall", "tn", "to", "today", "tokyo", "tools", "top", "toray", "toshiba", "total", "tours", "town", "toyota", "toys", "tr", "trade", "trading", "training", "travel", "travelchannel", "travelers", "travelersinsurance", "trust", "trv", "tt", "tube", "tui", "tunes", "tushu", "tv", "tvs", "tw", "tz", "ua", "ubank", "ubs", "uconnect", "ug", "unicom", "university", "uno", "uol", "ups", "us", "uy", "uz", "va", "vacations", "vana", "vanguard", "vc", "ve", "vegas", "ventures", "verisign", "versicherung", "vet", "vg", "vi", "viajes", "video", "vig", "viking", "villas", "vin", "vip", "virgin", "visa", "vision", "vista", "vistaprint", "viva", "vivo", "vlaanderen", "vn", "vodka", "volkswagen", "volvo", "vote", "voting", "voto", "voyage", "vu", "vuelos", "wales", "walmart", "walter", "wang", "wanggou", "warman", "watch", "watches", "weather", "weatherchannel", "webcam", "weber", "website", "wed", "wedding", "weibo", "weir", "wf", "whoswho", "wien", "wiki", "williamhill", "win", "windows", "wine", "winners", "wme", "wolterskluwer", "woodside", "work", "works", "world", "wow", "ws", "wtc", "wtf", "xbox", "xerox", "xfinity", "xihuan", "xin", "xn--11b4c3d", "xn--1ck2e1b", "xn--1qqw23a", "xn--30rr7y", "xn--3bst00m", "xn--3ds443g", "xn--3e0b707e", "xn--3oq18vl8pn36a", "xn--3pxu8k", "xn--42c2d9a", "xn--45brj9c", "xn--45q11c", "xn--4gbrim", "xn--54b7fta0cc", "xn--55qw42g", "xn--55qx5d", "xn--5su34j936bgsg", "xn--5tzm5g", "xn--6frz82g", "xn--6qq986b3xl", "xn--80adxhks", "xn--80ao21a", "xn--80aqecdr1a", "xn--80asehdb", "xn--80aswg", "xn--8y0a063a", "xn--90a3ac", "xn--90ae", "xn--90ais", "xn--9dbq2a", "xn--9et52u", "xn--9krt00a", "xn--b4w605ferd", "xn--bck1b9a5dre4c", "xn--c1avg", "xn--c2br7g", "xn--cck2b3b", "xn--cg4bki", "xn--clchc0ea0b2g2a9gcd", "xn--czr694b", "xn--czrs0t", "xn--czru2d", "xn--d1acj3b", "xn--d1alf", "xn--e1a4c", "xn--eckvdtc9d", "xn--efvy88h", "xn--estv75g", "xn--fct429k", "xn--fhbei", "xn--fiq228c5hs", "xn--fiq64b", "xn--fiqs8s", "xn--fiqz9s", "xn--fjq720a", "xn--flw351e", "xn--fpcrj9c3d", "xn--fzc2c9e2c", "xn--fzys8d69uvgm", "xn--g2xx48c", "xn--gckr3f0f", "xn--gecrj9c", "xn--gk3at1e", "xn--h2brj9c", "xn--hxt814e", "xn--i1b6b1a6a2e", "xn--imr513n", "xn--io0a7i", "xn--j1aef", "xn--j1amh", "xn--j6w193g", "xn--jlq61u9w7b", "xn--jvr189m", "xn--kcrx77d1x4a", "xn--kprw13d", "xn--kpry57d", "xn--kpu716f", "xn--kput3i", "xn--l1acc", "xn--lgbbat1ad8j", "xn--mgb9awbf", "xn--mgba3a3ejt", "xn--mgba3a4f16a", "xn--mgba7c0bbn0a", "xn--mgbaam7a8h", "xn--mgbab2bd", "xn--mgbai9azgqp6j", "xn--mgbayh7gpa", "xn--mgbb9fbpob", "xn--mgbbh1a71e", "xn--mgbc0a9azcg", "xn--mgbca7dzdo", "xn--mgberp4a5d4ar", "xn--mgbi4ecexp", "xn--mgbpl2fh", "xn--mgbt3dhd", "xn--mgbtx2b", "xn--mgbx4cd0ab", "xn--mix891f", "xn--mk1bu44c", "xn--mxtq1m", "xn--ngbc5azd", "xn--ngbe9e0a", "xn--node", "xn--nqv7f", "xn--nqv7fs00ema", "xn--nyqy26a", "xn--o3cw4h", "xn--ogbpf8fl", "xn--p1acf", "xn--p1ai", "xn--pbt977c", "xn--pgbs0dh", "xn--pssy2u", "xn--q9jyb4c", "xn--qcka1pmc", "xn--qxam", "xn--rhqv96g", "xn--rovu88b", "xn--s9brj9c", "xn--ses554g", "xn--t60b56a", "xn--tckwe", "xn--tiq49xqyj", "xn--unup4y", "xn--vermgensberater-ctb", "xn--vermgensberatung-pwb", "xn--vhquv", "xn--vuq861b", "xn--w4r85el8fhu5dnra", "xn--w4rs40l", "xn--wgbh1c", "xn--wgbl6a", "xn--xhq521b", "xn--xkc2al3hye2a", "xn--xkc2dl3a5ee0h", "xn--y9a3aq", "xn--yfro4i67o", "xn--ygbi2ammx", "xn--zfr164b", "xperia", "xxx", "xyz", "yachts", "yahoo", "yamaxun", "yandex", "ye", "yodobashi", "yoga", "yokohama", "you", "youtube", "yt", "yun", "za", "zappos", "zara", "zero", "zip", "zippo", "zm", "zone", "zuerich", "zw"];
exports.htmlAttrs = ["src=", "data=", "href=", "cite=", "formaction=", "icon=", "manifest=", "poster=", "codebase=", "background=", "profile=", "usemap="];


/***/ }),

/***/ 620:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lists_1 = __webpack_require__(617);
// pattern that an emails MUST have
var pattern = /^[a-z0-9!#$%&'*+\-/=?^_`{|}~.]+@([a-z0-9%\-]+\.){1,}([a-z0-9\-]+)?$/i;
// patterns that an email can not have
var negativePatterns = [
    /^[!#$%&'*+\-/=?^_`{|}~.]/,
    /[.]{2,}[a-z0-9!#$%&'*+\-/=?^_`{|}~.]+@/i,
    /\.@/
];
function default_1(str) {
    // general pattern recognition
    var match = str.match(pattern);
    if (match === null)
        return false;
    // doesn't have a negative pattern
    for (var i = negativePatterns.length - 1; i >= 0; i--) {
        if (negativePatterns[i].test(str))
            return false;
    }
    // valid TLD
    var tld = match[2];
    if (!tld)
        return false;
    if (lists_1.tlds.indexOf(tld) === -1)
        return false;
    return true;
}
exports.default = default_1;


/***/ }),

/***/ 621:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__(616);
// general IP pattern https://regex101.com/r/rzUcJ4/1
var pattern = /^(\d{1,3}\.){3}\d{1,3}(:\d{1,5})?(\/([a-z0-9\-._~:\/\?#\[\]@!$&'\(\)\*\+,;=%]+)?)?$/i;
function default_1(str) {
    if (!pattern.test(str))
        return false;
    var IPArray = str.split(".");
    // validate oc1
    var oc1 = Number(IPArray[0]);
    if ((isNaN(oc1)) || oc1 > 255 || oc1 < 0)
        return false;
    // validate oc2
    var oc2 = Number(IPArray[1]);
    if ((isNaN(oc2)) || oc2 > 255 || oc2 < 0)
        return false;
    // validate oc3
    var oc3 = Number(IPArray[2]);
    if ((isNaN(oc3)) || oc3 > 255 || oc3 < 0)
        return false;
    // validate oc4
    var oc4 = Number((IPArray[3].match(/^\d+/) || [])[0]);
    if ((isNaN(oc4)) || oc4 > 255 || oc4 < 0)
        return false;
    // validate port
    var port = (IPArray[3].match(/(^\d+)(:)(\d+)/) || [])[3];
    if (port && (!util_1.isPort(port)))
        return false;
    return true;
}
exports.default = default_1;


/***/ }),

/***/ 622:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__(616);
var lists_1 = __webpack_require__(617);
var pattern = /^(https?:\/\/|ftps?:\/\/)?([a-z0-9%\-]+\.){1,}([a-z0-9\-]+)?(:(\d{1,5}))?(\/([a-z0-9\-._~:\/\?#\[\]@!$&'\(\)\*\+,;=%]+)?)?$/i;
function default_1(str) {
    // general pattern recognition https://regex101.com/r/RgKTA4/2
    var match = str.match(pattern);
    if (match === null)
        return false;
    // validate TLD
    if (typeof match[3] !== "string")
        return false;
    if (lists_1.tlds.indexOf(match[3].toLowerCase()) === -1)
        return false;
    // validate port
    if (match[5] && (!util_1.isPort(match[5])))
        return false;
    return true;
}
exports.default = default_1;


/***/ }),

/***/ 623:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var fix_1 = __webpack_require__(632);
/**
 *
 * Split the string with word separators
 * such as punctuation marks and spaces
 *
**/
function separate(input) {
    var splitted = input
        .replace(/([\s\(\)\[\]<>"'])/g, "\0$1\0")
        .replace(/([?;:,.!]+)(?=(\0|$|\s))/g, "\0$1\0")
        .split("\0");
    var fixed = fix_1.default(splitted);
    return fixed;
}
exports.separate = separate;
/**
 *
 * Join the resulting array into a string
 *
**/
function deSeparate(input) {
    return input.join("");
}
exports.deSeparate = deSeparate;


/***/ }),

/***/ 624:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function default_1(str) {
    str = str.toLowerCase();
    if (str.indexOf("http://") === 0)
        return "http://";
    else if (str.indexOf("https://") === 0)
        return "https://";
    else if (str.indexOf("ftp://") === 0)
        return "ftp://";
    else if (str.indexOf("ftps://") === 0)
        return "ftps://";
    else if (str.indexOf("file:///") === 0)
        return "file:///";
    else if (str.indexOf("mailto:") === 0)
        return "mailto:";
    else
        return false;
}
exports.default = default_1;


/***/ }),

/***/ 628:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoLinksModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__do_links__ = __webpack_require__(629);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DoLinksModule = /** @class */ (function () {
    function DoLinksModule() {
    }
    DoLinksModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__do_links__["a" /* DoLinks */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__do_links__["a" /* DoLinks */]]
        })
    ], DoLinksModule);
    return DoLinksModule;
}());

//# sourceMappingURL=do-links.module.js.map

/***/ }),

/***/ 629:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoLinks; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_anchorme__ = __webpack_require__(630);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_anchorme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_anchorme__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
 * This converts text links to HTML links with target blank
 * It also bypasses security to display videos
 * http://alexcorvi.github.io/anchorme.js/
 */
var DoLinks = /** @class */ (function () {
    function DoLinks(sanitizer) {
        this.sanitizer = sanitizer;
    }
    DoLinks.prototype.transform = function (str) {
        str = __WEBPACK_IMPORTED_MODULE_2_anchorme___default()(str, { attributes: [{
                    name: "target",
                    value: "_blank"
                }] });
        return this.sanitizer.bypassSecurityTrustHtml(str);
    };
    DoLinks = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'doLinks' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], DoLinks);
    return DoLinks;
}());

//# sourceMappingURL=do-links.js.map

/***/ }),

/***/ 630:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__(616);
var email_1 = __webpack_require__(620);
var ip_1 = __webpack_require__(621);
var url_1 = __webpack_require__(622);
var transform_1 = __webpack_require__(631);
var hasprotocol_1 = __webpack_require__(624);
var anchorme = function (str, options) {
    options = util_1.defaultOptions(options);
    var result = transform_1.default(str, options);
    return result;
};
// exposing few functions for extra uses
anchorme.validate = {
    ip: ip_1.default,
    url: function (input) {
        // simple wrapper that does what "identify.ts" does initially
        // remove the protocal
        var protocol = hasprotocol_1.default(input) || "";
        input = input.substr(protocol.length);
        input = encodeURI(input);
        return url_1.default(input);
    },
    email: email_1.default
};
exports.default = anchorme;


/***/ }),

/***/ 631:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var separate_1 = __webpack_require__(623);
var identify_1 = __webpack_require__(633);
var separate_2 = __webpack_require__(623);
function default_1(str, options) {
    var arr = separate_2.separate(str);
    var identified = identify_1.default(arr, options);
    // custom filtering-out function
    if (options.exclude) {
        for (var index = 0; index < identified.length; index++) {
            var element = identified[index];
            if (typeof element === "object" && options.exclude(element))
                identified[index] = element.raw;
        }
    }
    // return the current list (with words being filtered out)
    if (options.list) {
        var listed = [];
        for (var i = 0; i < identified.length; i++) {
            var fragment = identified[i];
            if (typeof fragment !== "string")
                listed.push(fragment);
        }
        return listed;
    }
    // transform objects to HTML tags
    identified = identified.map(function (fragment) {
        if (typeof fragment === "string")
            return fragment;
        return url2tag(fragment, options);
    });
    // join and return
    return separate_1.deSeparate(identified);
}
exports.default = default_1;
function url2tag(fragment, options) {
    var href = fragment.protocol + fragment.encoded;
    var original = fragment.raw;
    if (typeof options.truncate === "number") {
        if (original.length > options.truncate)
            original = original.substring(0, options.truncate) + "...";
    }
    if (typeof options.truncate === "object") {
        if (original.length > (options.truncate[0] + options.truncate[1]))
            original = original.substr(0, options.truncate[0]) + "..." + original.substr(original.length - options.truncate[1]);
    }
    if (options.attributes === undefined)
        options.attributes = [];
    return "<a href=\"" + href + "\" " + options.attributes.map(function (attribute) {
        if (typeof attribute === 'function') {
            var name = (attribute(fragment) || {}).name;
            var value = (attribute(fragment) || {}).value;
            if (name && !value)
                return " name ";
            if (name && value)
                return " " + name + "=\"" + value + "\" ";
        }
        else
            return " " + attribute.name + "=\"" + attribute.value + "\" ";
    }).join("") + ">" + original + "</a>";
}


/***/ }),

/***/ 632:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 *
 * @hack
 *
 * This is a dirty hack to fix URLs that have parenthesis and quotation marks in them
 * For example take this paragraph:
 *
 * """"
 * I visited this url: "http://www.wikipedia.com/some_article(with_paranthesis)"
 * and this URL: (http://www.wikipedia.com/some_article(with_paranthesis))
 * """"
 *
 * The quotation marks `'` `"` and parenthesis `(` `)` `[` `]`
 * can be considered to be part of the URL, and as a
 * punctuation marks surrounding the URL.
 * While this hack works for the most part, it's quite dirty and
 * I may replace it with something better in the future.
 *
 *
 * Another fix is removing punctuation marks that may appear at the end of URL
 * Example:
 *
 * """"
 * I've visited google.com, facebook.com, and yahoo.com.
 * """"
 *
 * @todo: replace the following function with something cleaner.
 *
 *
**/

Object.defineProperty(exports, "__esModule", { value: true });
function fixSeparators(arr, sep1, sep2) {
    arr.forEach(function (bit, i) {
        if ((bit.indexOf(".") > -1) &&
            (!(arr[i - 1] === sep1 && arr[i + 1] === sep2)) &&
            (arr[i + 1] === sep1 || arr[i + 1] === sep2) // the one after it, is either sep1 or sep2
        ) {
            arr[i] = arr[i] + arr[i + 1];
            if (typeof arr[i + 2] === "string")
                arr[i] = arr[i] + arr[i + 2];
            if (typeof arr[i + 3] === "string")
                arr[i] = arr[i] + arr[i + 3];
            if (typeof arr[i + 4] === "string")
                arr[i] = arr[i] + arr[i + 4];
            arr.splice(i + 1, 4);
            fixSeparators(arr, sep1, sep2);
        }
    });
    return arr;
}
exports.fixSeparators = fixSeparators;
function default_1(arr) {
    arr = fixSeparators(arr, "(", ")");
    arr = fixSeparators(arr, "[", "]");
    arr = fixSeparators(arr, "\"", "\"");
    arr = fixSeparators(arr, "'", "'");
    return arr;
}
exports.default = default_1;


/***/ }),

/***/ 633:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var email_1 = __webpack_require__(620);
var hasprotocol_1 = __webpack_require__(624);
var lists_1 = __webpack_require__(617);
var ip_1 = __webpack_require__(621);
var url_1 = __webpack_require__(622);
function default_1(inputArr, options) {
    return inputArr.map(function (fragment, index) {
        var encoded = encodeURI(fragment);
        // quick validations
        // 1
        if (encoded.indexOf(".") < 1 && (!hasprotocol_1.default(encoded)))
            return fragment;
        var urlObj = null;
        var protocol = hasprotocol_1.default(encoded) || "";
        // remove the protocol before proceeding to any other test
        if (protocol)
            encoded = encoded.substr(protocol.length);
        // test 1: it's a file
        if (options.files && protocol === "file:///" && encoded.split(/\/|\\/).length - 1) {
            urlObj = {
                reason: "file",
                protocol: protocol,
                raw: fragment,
                encoded: encoded,
            };
        }
        // test 2: it's a URL
        if ((!urlObj) && options.urls && url_1.default(encoded)) {
            urlObj = {
                reason: "url",
                protocol: protocol ? protocol : typeof options.defaultProtocol === "function" ? options.defaultProtocol(fragment) : options.defaultProtocol,
                raw: fragment,
                encoded: encoded,
            };
        }
        // test 3: it's an email
        if ((!urlObj) && options.emails && email_1.default(encoded)) {
            urlObj = {
                reason: "email",
                protocol: "mailto:",
                raw: fragment,
                encoded: encoded,
            };
        }
        // test 4: it's an IP
        if ((!urlObj) && options.ips && ip_1.default(encoded)) {
            urlObj = {
                reason: "ip",
                protocol: protocol ? protocol : typeof options.defaultProtocol === "function" ? options.defaultProtocol(fragment) : options.defaultProtocol,
                raw: fragment,
                encoded: encoded,
            };
        }
        if (!urlObj)
            return fragment;
        else {
            if ((inputArr[index - 1] === "'" || inputArr[index - 1] === '"') && ~lists_1.htmlAttrs.indexOf(inputArr[index - 2]))
                return fragment;
            return urlObj;
        }
    });
}
exports.default = default_1;


/***/ }),

/***/ 654:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BpMessages; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_globalvars_globalvars__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_header_logo_header_logo__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_device__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_buddypress_bp_provider__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_analytics_analytics_service__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var BpMessages = /** @class */ (function () {
    function BpMessages(nav, navParams, globalvars, loadingController, storage, toastCtrl, viewCtrl, platform, headerLogoService, Network, Device, modalCtrl, events, ga, bpProvider, translate, renderer, elementRef) {
        var _this = this;
        this.nav = nav;
        this.navParams = navParams;
        this.globalvars = globalvars;
        this.loadingController = loadingController;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.platform = platform;
        this.headerLogoService = headerLogoService;
        this.Network = Network;
        this.Device = Device;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.ga = ga;
        this.bpProvider = bpProvider;
        this.translate = translate;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.page = 1;
        this.rtlBack = false;
        this.show_header_logo = false;
        this.customClasses = '';
        this.singleThread = false;
        this.boxArg = '?box=inbox';
        var item = window.localStorage.getItem('myappp');
        this.route = JSON.parse(item).wordpress_url + 'wp-json/ap-bp/v1/messages';
        this.customClasses = 'bp-messages';
        if (this.navParams.data.singleThread) {
            this.doSingleThread();
        }
        else {
            this.setupSegments();
        }
        this.title = navParams.data.title;
        if (!this.title) {
            this.translate.get('Messages').subscribe(function (text) {
                _this.title = text;
            });
        }
        if (this.navParams.data.senderAvatar) {
            this.navParams.data.senderAvatar = this.formatUrl(this.navParams.data.senderAvatar);
        }
        if (navParams.data.is_home == true) {
            this.doLogo();
        }
        this.eventSubscribe();
        // Listen for link clicks, open in in app browser
        this.listenFunc = renderer.listen(elementRef.nativeElement, 'click', function (event) {
            _this.iabLinks(event.target, event);
        });
    }
    BpMessages.prototype.eventSubscribe = function () {
        var _this = this;
        // push new activity item after posted
        this.events.subscribe('bp-add-message', function (data) {
            if (_this.singleThread) {
                if (!_this.threads || !_this.threads.messages) {
                    _this.getThreads(_this.route + '/' + data.threadId);
                }
                else {
                    _this.addMessage(data);
                    _this.scrollDown(500);
                }
            }
        });
    };
    // maybe add https to avatar url
    BpMessages.prototype.formatUrl = function (url) {
        // console.log('format url', url)
        if (!url)
            return;
        if (url.indexOf('://') >= 0) {
            return url;
        }
        else {
            return 'https:' + url;
        }
    };
    BpMessages.prototype.getStarted = function () {
        this.networkState = this.Network.type;
        if (this.networkState === 'none' || this.networkState === 'unknown') {
            // if offline, get posts from storage
            this.getStoredPosts();
        }
        else {
            this.getThreads(this.route);
        }
    };
    BpMessages.prototype.ionViewWillLeave = function () {
        // fixes a transition bug
        this.navParams.data.senderAvatar = null;
    };
    BpMessages.prototype.ionViewWillEnter = function () {
        var _this = this;
        // get login data on first load
        this.storage.get('user_login').then(function (data) {
            if (data && data.user_id) {
                _this.login_data = data;
            }
            else {
                _this.events.publish('login:force_login');
            }
            if (!_this.singleThread) {
                _this.getStarted();
            }
        });
        if (this.platform.isRTL && this.viewCtrl.enableBack()) {
            this.viewCtrl.showBackButton(false);
            this.rtlBack = true;
        }
        if (this.navParams.data.slug) {
            var list_route = (this.navParams.data.list_route) ? this.navParams.data.list_route + '/' : '';
            var list_slug = this.navParams.data.slug;
            this.ga.trackScreenView('BpMessages', list_route + list_slug);
        }
    };
    BpMessages.prototype.doSingleThread = function () {
        var _this = this;
        this.singleThread = true;
        this.boxArg = '';
        this.login_data = this.navParams.data.login_data;
        if (this.navParams.data.threadId) {
            this.route = this.route + '/' + this.navParams.data.threadId;
            this.getStarted();
        }
        else if (this.navParams.data.newThread) {
            this.translate.get('Message').subscribe(function (text) {
                var data = { message: true, title: text };
                if (_this.navParams.data.recipients) {
                    data.recipients = _this.navParams.data.recipients;
                }
                var bpModal = _this.modalCtrl.create('BpModal', data);
                bpModal.present();
            });
        }
    };
    BpMessages.prototype.addMessage = function (data) {
        this.threads.messages.unshift({
            "subject": (data.subject ? data.subject : null),
            "message": data.content,
            "sender_id": this.login_data.user_id,
            "sender_data": {
                name: this.login_data.username,
                avatar: this.login_data.avatar
            }
        });
    };
    BpMessages.prototype.scrollDown = function (delay) {
        var _this = this;
        if (!this.content || !this.content._scroll)
            return;
        setTimeout(function () {
            _this.content.scrollToBottom(200).then(function (res) {
                console.log('scroll done', res);
            });
        }, delay);
    };
    BpMessages.prototype.setupSegments = function () {
        this.messageSegments = [{ name: 'Inbox', value: 'inbox' }, { name: 'Sent', value: 'sentbox' }];
        // fixes iphoneX status bar padding
        this.customClasses += ' has-favorites';
    };
    BpMessages.prototype.segmentChanged = function () {
        switch (this.segment) {
            case 'Inbox':
                this.boxArg = '?box=inbox';
                this.getThreads(this.route);
                break;
            case 'Sent':
                this.boxArg = '?box=sentbox';
                this.getThreads(this.route);
        }
    };
    // get posts from storage when we are offline
    BpMessages.prototype.getStoredPosts = function () {
        var _this = this;
        this.storage.get(this.route.substr(-10, 10) + '_bp').then(function (threads) {
            if (threads) {
                _this.threads = threads;
            }
            else {
                _this.presentToast('No data available, pull to refresh when you are online.');
            }
        });
    };
    BpMessages.prototype.loadThread = function (thread) {
        var data = {
            singleThread: true,
            threadId: thread.id,
            login_data: this.login_data
        };
        if (thread.sender_data) {
            data.senderAvatar = this.formatUrl(thread.sender_data.avatar);
            data.senderName = thread.sender_data.name;
        }
        this.nav.push('BpMessages', data);
    };
    BpMessages.prototype.getThreads = function (route) {
        var _this = this;
        if (!route)
            return;
        var loading = this.loadingController.create({
            showBackdrop: false,
        });
        loading.present(loading);
        this.page = 1;
        // any menu imported from WP has to use same component. Other pages can be added manually with different components
        this.bpProvider.getItems(route + this.boxArg, this.login_data, this.page).then(function (items) {
            // Loads posts from WordPress API
            _this.threads = items;
            if (_this.singleThread) {
                _this.scrollDown(100);
            }
            else {
                // load more
                _this.loadMore(null);
            }
            _this.storage.set(route.substr(-10, 10) + '_bp', items);
            loading.dismiss();
        }).catch(function (err) {
            loading.dismiss();
            _this.handleErr(err);
        });
        setTimeout(function () {
            if (loading)
                loading.dismiss();
        }, 8000);
    };
    BpMessages.prototype.doRefresh = function (refresh) {
        this.getThreads(this.route);
        // refresh.complete should happen when posts are loaded, not timeout
        setTimeout(function () { return refresh.complete(); }, 500);
    };
    BpMessages.prototype.loadMore = function (infiniteScroll) {
        var _this = this;
        this.page++;
        this.bpProvider.getItems(this.route + this.boxArg, this.login_data, this.page).then(function (items) {
            // Loads posts from WordPress API
            var length = items["length"];
            if (length === 0) {
                if (infiniteScroll)
                    infiniteScroll.complete();
                return;
            }
            for (var i = 0; i < length; ++i) {
                _this.threads.push(items[i]);
            }
            _this.storage.set(_this.route.substr(-10, 10) + '_bp', _this.threads);
            if (infiniteScroll)
                infiniteScroll.complete();
        }).catch(function (e) {
            // promise was rejected, usually a 404 or error response from API
            if (infiniteScroll)
                infiniteScroll.complete();
            console.warn('load more error', e);
        });
    };
    BpMessages.prototype.presentToast = function (msg) {
        var _this = this;
        this.translate.get(msg).subscribe(function (translation) {
            var toast = _this.toastCtrl.create({
                message: msg,
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        });
    };
    // we don't want to show auto-generated subjects, or empty subjects
    BpMessages.prototype.getSubject = function (subject) {
        if (!subject || subject === '' || subject.indexOf('No Subject') >= 0 || subject == 'undefined' || subject && subject.indexOf('Re:') >= 0) {
            return null;
        }
        else {
            return subject + ':';
        }
    };
    // this pushes the message text to the thread, then sends it to the server. If there is an error, we remove the message.
    BpMessages.prototype.replyToThread = function () {
        var _this = this;
        // fake delay
        setTimeout(function () {
            _this.addMessage({ subject: null, content: _this.threadReply });
            _this.threadReply = '';
            _this.scrollDown(1);
        }, 500);
        var recipients = Object.keys(this.threads.recipients);
        this.bpProvider.sendMessage(recipients, this.login_data, '', this.threadReply, this.threads.thread_id).then(function (ret) {
            console.log('message sent, thread id: ', ret);
        }).catch(function (e) {
            console.warn(e);
            _this.threads.messages.shift();
            _this.presentToast('There was a problem, please try again.');
        });
    };
    BpMessages.prototype.newMessage = function () {
        this.nav.push('BpMessages', {
            singleThread: true,
            newThread: true,
            login_data: this.login_data
        });
    };
    BpMessages.prototype.iabLink = function (link) {
        window.open(link, '_blank');
    };
    BpMessages.prototype.iabLinks = function (el, event) {
        var target = '_blank';
        if (el.href && el.href.indexOf('http') >= 0) {
            if (el.classList && el.classList.contains('system'))
                target = '_system';
            event.preventDefault();
            window.open(el.href, target);
        }
        else if (el.tagName == 'IMG' && el.parentNode.href && el.parentNode.href.indexOf('http') >= 0) {
            // handle image tags that have link as the parent
            if (el.parentNode.classList && el.parentNode.classList.contains('system'))
                target = '_system';
            event.preventDefault();
            window.open(el.parentNode.href, target);
        }
    };
    // changes the back button transition direction if app is RTL
    BpMessages.prototype.backRtlTransition = function () {
        var obj = {};
        if (this.platform.is('ios'))
            obj = { direction: 'forward' };
        this.nav.pop(obj);
    };
    BpMessages.prototype.doLogo = function () {
        var _this = this;
        // check if logo file exists. If so, show it
        this.headerLogoService.checkLogo().then(function (data) {
            _this.show_header_logo = true;
            _this.header_logo_url = data;
        }).catch(function (e) {
            // no logo, do nothing
            //console.log(e)
        });
    };
    // make sure user is logged in
    BpMessages.prototype.loginCheck = function () {
        if (!this.login_data || !this.login_data.user_id) {
            this.presentToast('Please log in.');
            return false;
        }
        return true;
    };
    BpMessages.prototype.handleErr = function (err) {
        var _this = this;
        console.error('Error getting posts', err);
        this.translate.get('Cannot show items.').subscribe(function (text) {
            var msg = text;
            if (err['_body'] && JSON.parse(err['_body']).message) {
                msg += ' ' + JSON.parse(err['_body']).message;
            }
            _this.presentToast(msg);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* Content */])
    ], BpMessages.prototype, "content", void 0);
    BpMessages = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"/Users/matt/projects/alphaweb/appp-funkflex/src/pages/bp-messages/bp-messages.html"*/'<ion-header>\n\n  <ion-navbar>\n    \n    <ion-buttons start>\n    <button *ngIf="rtlBack||is_registration_page" (click)="backRtlTransition()" ion-button class="custom-back-button">\n        <ion-icon name="arrow-back"></ion-icon>\n        {{ \'Back\' | translate }}\n    </button>\n\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    </ion-buttons>\n\n    <img class="header-logo" *ngIf="show_header_logo" [src]="header_logo_url" />\n\n    <ion-title *ngIf="!show_header_logo && !singleThread">{{ title | translate }}</ion-title>\n\n    <div *ngIf="singleThread" class="message-header-sender">\n\n      <img *ngIf="navParams.data.senderAvatar" [src]="navParams.data.senderAvatar" class="message-header-avatar">\n\n      <!-- <span class="message-header-name" *ngIf="navParams.data.senderName">{{ navParams.data.senderName }}</span> -->\n\n    </div>\n\n    <ion-buttons end>\n\n      <button ion-button *ngIf="!singleThread" (tap)="newMessage()">\n        <ion-icon name="ios-send"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n  <ion-item *ngIf="messageSegments" id="favorites-toolbar" color="light">\n\n    <ion-select [(ngModel)]="segment" (ionChange)="segmentChanged()" placeholder="Inbox">\n\n      <ion-option *ngFor="let segment of messageSegments" [value]="segment.name">{{ segment.name | translate }}</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n</ion-header>\n\n<ion-content #content [ngClass]="customClasses">\n\n  <!-- <ion-infinite-scroll *ngIf="singleThread" (ionInfinite)="loadMore($event)" position="top">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll> -->\n\n  <div *ngIf="threads && !singleThread">\n\n    <ion-list no-lines>\n\n        <ion-item *ngFor="let thread of threads" (tap)="loadThread(thread)">\n          <ion-avatar item-start>\n            <img *ngIf="thread.sender_data && thread.sender_data.avatar" [src]="formatUrl( thread.sender_data.avatar )">\n            <img *ngIf="!thread.sender_data || !thread.sender_data.avatar" src="assets/default.png">\n          </ion-avatar>\n          <p *ngIf="thread.sender_data && thread.sender_data.name"><strong>{{ thread.sender_data.name }}</strong></p>\n          <p class="message-preview"><strong *ngIf="thread.subject && thread.subject != \'undefined\'" [innerHTML]="getSubject( thread.subject )"></strong> <span [innerHTML]=" thread.message"></span></p>\n          <p *ngIf="thread.date" class="message-date">{{ thread.date }}</p>\n          \n        </ion-item>\n\n    </ion-list>\n\n  </div>\n\n  <div *ngIf="threads && singleThread">\n\n    <ion-list no-lines class="single-message-thread">\n\n        <ion-item *ngFor="let message of threads.messages.reverse()" [ngClass]="{ \'my-reply\' : message.sender_id == login_data.user_id }" text-wrap>\n          <ion-avatar item-start>\n            <img *ngIf="message.sender_data && message.sender_data.avatar" [src]="formatUrl( message.sender_data.avatar )">\n            <img *ngIf="!message.sender_data || !message.sender_data.avatar" src="assets/default.png">\n            <p *ngIf="message.sender_data && message.sender_data.name" class="sender-name">{{ message.sender_data.name }}</p>\n          </ion-avatar>\n            \n            <p class="message-preview"><strong>{{ getSubject( message.subject ) }}</strong> <span [innerHTML]=" message.message | doLinks"></span></p>\n\n        </ion-item>\n\n    </ion-list>\n\n  </div>\n\n  <ion-item *ngIf="!threads">{{ \'No items to show.\' | translate }}</ion-item>\n\n</ion-content>\n\n<ion-footer no-border>\n  <ion-toolbar *ngIf="threads && singleThread">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-10>\n          <ion-input [(ngModel)]="threadReply" name="threadReply" type="text" (keyup.enter)="replyToThread()"></ion-input>\n        </ion-col>\n        <ion-col col-2 text-center>\n          <button block ion-button icon-only (tap)="replyToThread()">\n            <ion-icon name="ios-send"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/matt/projects/alphaweb/appp-funkflex/src/pages/bp-messages/bp-messages.html"*/,
            selector: 'bp-messages'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_globalvars_globalvars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__providers_header_logo_header_logo__["a" /* HeaderLogo */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_9__providers_analytics_analytics_service__["a" /* AnalyticsService */],
            __WEBPACK_IMPORTED_MODULE_8__providers_buddypress_bp_provider__["a" /* BpProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["d" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"]])
    ], BpMessages);
    return BpMessages;
}());

//# sourceMappingURL=bp-messages.js.map

/***/ })

});
//# sourceMappingURL=2.js.map