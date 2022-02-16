
var require_html = __commonJS({
  "src/iinl/html.js"(exports) {
import "./html.js"
})

// src/iinl/html.js

// src/iinl/bot.js<related>

var ki = JSON.stringify({
  "inline_keyboard": [
    [{
      "text": "L",
      "callback_data": "LLLL"
    }, {
      "text": ":RE",
      "callback_data": "re"
    }]
  ]
});
var kk = JSON.stringify({
  "inline_keyboard": [
    [{
      "text": "L",
      "callback_data": "LLLL"
    }, {
      "text": ":RE",
      "switch_inline_query_current_chat": ""
    }, {
      "text": "-",
      "callback_data": "-"
    }, {
      "text": "D",
      "switch_inline_query_current_chat": "D"
    }]
  ]
});
var kg = JSON.stringify({ "resize_keyboard": true, "keyboard": [
  [{
    "request_location": true,
    "text": "GEO"
  }, "#M", "$LLL", "@IEEII", "X.co"]
] });
async function bot(update) {
  var bot2 = new Bot(TOKEN, update);
  var bus = new CommandBus();
  bus.on(/\/add/, function() {

  	
    B.reply_markup = JSON.stringify({ "remove_keyboard": true });
    this.replyToSender("1.vvwv.workers.dev/");
  });
  bus.on(/\/help/, function() {
 
    B.reply_markup = JSON.stringify({
      "inline_keyboard": [
        [{
          "text": "LINK",
          "url": `https://t.me/de_nobot?start=${req.chat}`
        }]
      ]
    });
    this.replyToSender(JSON.stringify(v, null, 4));
  });
  bus.on(/^(?=.*LLLL).*$/, reply);
  bus.on(/\/_\s*([A-Za-z0-9_]+)?_\s*([A-Za-z0-9_]+)?/, randomJoke);
  bus.on(/\/start \s*([A-Za-z0-9_]+)?/, deep);
  bus.on(/#\s*([A-я0-9_]+)?/, rH);
  bus.on(/\/_\s*([A-Za-z0-9_]+)?/, randomJ);
  bot2.register(bus);
  if (update) {
    bot2.process();
  }
}
async function rH(x) {
	//console.info(x)
	

  
  B.reply_markup = kk
  this.replyToSender(x);
}
async function deep(x) {
  
  B.reply_markup = kg;
  this.replyToSender(x);
}
async function reply() {
  B.reply_markup = JSON.stringify({ "force_reply": true })
  this.replyToSender(req.data);
}
   async function randomJ(x) {
  B.text = x;
  B.reply_markup = kg;
  this.replyToSender(x);
}
async function randomJoke(name, surname) {
  var firstName = name || null;
  var lastName = surname || null;
  var url = "https://api.icndb.com/jokes/random?escape=javascript";
  if (firstName)
    url = url + "&firstName=" + firstName;
  if (lastName)
    url = url + "&lastName=" + lastName;
  return await fetch(url).then(async (r) => {
    r = await r.json();
    r = r.value.joke;
    B.reply_markup = kk;
    return await this.replyToSender(r);
  });
}
function Bot(token, update) {
  this.token = token;
  this.update = update;
  this.handlers = [];
}
Bot.prototype.register = function(handler) {
  this.handlers.push(handler);
};
Bot.prototype.process = function() {
  for (var i in this.handlers) {
    var event = this.handlers[i];
    return event.handle(this);
  }
};
Bot.prototype.request = async function(method, data) {
};
Bot.prototype.replyToSender = function(text) {
  B.text = text;
  if (B.text)
    B.method = "sendMessage";
};
function CommandBus() {
  this.commands = [];
}
CommandBus.prototype.on = function(regexp, callback) {
  this.commands.push({
    "regexp": regexp,
    "callback": callback
  });
};
CommandBus.prototype.handle = function(bot2) {
  for (var i in this.commands) {
    var cmd = this.commands[i];
    var x = JSON.stringify(bot2.update);
    var tokens = cmd.regexp.exec(x);
    if (tokens != null) {
      return cmd.callback.apply(bot2, tokens.splice(1));
    }
  }
  return bot2.replyToSender(tokens);
}

// src/iinl/66o.js
var import_upd = __toESM(require_upd());
var J = ["jirrj", "wo_va", "shas4a", "rul0n", "cokemonn"]
require_console();
var db = require_db();
globalThis.Z = async function(r) {
  try {
    await (0, import_upd.upd)(r);
  } catch (err) {
    console.warn(err);
  }
  // if (J.indexOf(req.from) < 0)
  //   return new Response(console.warn(req), { status: 200 });
  globalThis.v = await db.get(req.from);
  B.chat_id = req.chat;

        if (req.data) {
            
            
           if (req.data == "-") {
await fetch(`https://api.telegram.org/bot${TOKEN}/answerCallbackQuery?callback_query_id=${req.id}&text=❌`);

            req.message_id = req.message.message_id
      }  }

  if (req.ref) {
    await db.add({ ref: req.ref }, req.from);
  }
    if (req.photo) {
  	var t = ''
  	 if (!v.ref) t += " noRef! "
  	 	if (!v.ll) t += " noLL! "
    B.text = t
    B.method = "sendmessage";
  }
  if (req.photo && v.ref && v.ll) {
  	
    var t = ("%20" + v.ll + "%20" + v.ref + "%20" +  req.caption + "%20").toUpperCase().replace(/ /g, "%20").replace(/,/g, "%20");
    req.width = req.width > 960 ? req.width : 960
    var nn = `l_text:roboto%20mono_96_center_bold:V,x_0.17,y_-100/`
   // nn = ''
req.photo = `https://res.cloudinary.com/o6/image/fetch/w_960/g_north,l_${v.pic},y_-480/b_rgb:f5e6e4,c_fill,co_black,g_north,l_text:roboto%20mono_96_center_bold:${t},w_960/${nn}${req.photo}`
//h
    //req.photo = `https://res.cloudinary.com/o6/image/fetch/w_${req.width}/fl_relative,g_north_west,h_300,l_${v.pic},w_300/b_rgb:f5e6e4,c_fit,co_rgb:21211f,fl_relative,g_north_west,l_text:Yanone%20Kaffeesatz_42_bold_center:${t},w_300,y_300/${nn}${req.photo}`;
    B.text = await fetch(`https://api.imgbb.com/1/upload?key=9245767bac1ebd9783f91024150db0f2&name=${v.ll}&image=${encodeURIComponent(req.photo)}`).then((r2) => r2.json()).then(async (r2) => {
  // console.info(r2)
	    var i = r2.data.id;
      r2 = [  "ibb.co/" + i, "www.google.com/maps?q=" + v.ll].join("\n")
      var o = { id: i, date: Date.now(), ref: v.ref, ll: v.ll, from: req.from, is: 1 };
      await db.put(o, i);
      return r2;
    });
    B.method = "sendmessage";
  }
  if (req.result_id) {
    await db.put({ is: -1 }, req.result_id)
  }
  if (req.location && !req.id && !req.result_id) {
    //B.photo = `https://www.mapquestapi.com/staticmap/v5/map?key=brX4s7eKqZr24Z1icIAJzRYOBQEWxtVv&banner=${req.location}|lg-21211f-f5e6e4&type=hyb&zoom=17&size=400,400@2x&locations=${req.location}|circle-lg-21211f-f5e6e4`;
  B.photo = `https://www.mapquestapi.com/staticmap/v5/map?key=brX4s7eKqZr24Z1icIAJzRYOBQEWxtVv&type=hyb&zoom=17&size=480,240@2x&locations=${req.location}|circle-lg-21211f-f5e6e4`;

    await fetch(`https://api.cloudinary.com/v1_1/o6/image/upload?upload_preset=o6oooo&file=${encodeURIComponent(B.photo)}`).then((r2) => r2.json()).then(async (r2) => {
      await db.add({ ll: req.location, pic: r2.public_id }, req.from);
    });
	B.reply_markup =   {
  "inline_keyboard": [
    [{
      "text": "L",
        "switch_inline_query": ""
    }, {
      "text": ":RE",
      "switch_inline_query_current_chat": ""
    }]
  ]
}
    B.method = "sendphoto";
  }
  if (req.type == "inline_query") {
    var rrr = await db.list(req.query);
    var l = rrr.length;
    rrr = await rrr.map(({ ref, date, from, ll, id }, o) => ({
      type: "article",
      id,
      title: l - o + " - " + id,
      "description": ref,
      "thumb_url": `https://i.ibb.co/${id}/i.png`,
      "input_message_content": {
        "message_text": [ref, "ibb.co/" + id, "www.google.com/maps?q=" + ll].join("\n")
      }
    }));
    B = {
      method: "answerInlineQuery",
      cache_time: 0,
      is_personal: true,
      inline_query_id: req.id,
      results: rrr
    };
  }
  try {
    if (!B.method && !B.photo && !B.cache_time)
    //console.info(req)
      await bot(req);
  } catch (err) {
    console.warn(err);
  }
  if (req.message_id && !req.via_bot && !req.url)
    await fetch(`https://api.telegram.org/bot${TOKEN}/deleteMessage?chat_id=${req.chat}&message_id=${req.message_id}`);
}

// src/index.js
var import_html = __toESM(require_html());

if (typeof L === "undefined")
  globalThis.L = {};
var src_default = {
  async fetch(request, env, ctx) {
    globalThis.B = {};
    if (request.method === "GET")
      return new Response((0, import_html.html2)(JSON.stringify(request.cf, null, 4)), { headers: {
        "content-type": "text/html;charset=UTF-8"
      } });
    
    try {
     
      await Z(request);
    } catch (err) {
      console.warn(err);
    }
    
    return new Response(JSON.stringify(B, null, 4), {
      headers: {
        "content-type": "application/json"
      }
    });
  }
};
export {
  src_default as default
};
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
globalThis.__commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __reExport = (target, module, copyDefault, desc) => {
  if (module && typeof module === "object" || typeof module === "function") {
    for (let key of __getOwnPropNames(module))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
  }
  return target;
};
globalThis.__toESM = (module, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", !isNodeMode && module && module.__esModule ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
};

// src/iinl/chucknorris.js


// src/iinl/upd.js
globalThis.require_upd = __commonJS({
  "src/iinl/upd.js"(exports) {
    exports.upd = async function(r) {
      if (r.cf)
        r = await r.clone().json();
      globalThis.req = r;   
globalThis.TOKEN = "5017904403:AAFY1cZFRuN1HN3aSn-YDPenR5y8i5t3jaQ";
      req[Object.keys(req)[1]].type = Object.keys(req)[1];
      req = req[Object.keys(req)[1]];
      req.from = req.chat || req.from;
      req.chat = req.from.id;
      req.from = req.from.username || req.from.title || req.from.first_name;
      if (req.text && req.text.startsWith(".")) {
        req.ref = req.text.replace(".", "");
        delete req.text;
      }
      if (req.entities && req.text) {
        req.entities.forEach((element) => {
          if (element.type === "text_link") {
            req.url = element.url;
          } else {
            req[element.type] = req.text.substring(element.offset, element.offset + element.length);
            if (req.text === req[element.type]) {
              delete req.text;
            }
          }
        });
        delete req.entities;
      }
      if (req.document && req.document.mime_type.startsWith("image")) {
        req.photo = [{
          file_size: req.document.file_size,
          file_id: req.document.file_id, 
          width: 1280
        }];
        delete req.document;
      }
      if (req.photo) {
        if (!req.caption) {
          req.caption = ""
        } else {
          req.caption = req.caption.toLowerCase()
        }
        req.photo = req.photo[req.photo.length - 1];
        req.width = req.photo.width;
        req.size = req.photo.file_size
        req.photo = await fetch("https://api.telegram.org/bot" + TOKEN + "/getFile?file_id=" + req.photo.file_id).then((r2) => r2.json()).then((r2) => {
          return "https://api.telegram.org/file/bot" + TOKEN + "/" + r2.result.file_path;
        });
      }
      if (req.location && !req.id && !req.result_id) {
        req.location = req.location.latitude.toFixed(5) + "," + req.location.longitude.toFixed(5);
      }
      delete req.forward_from;
      delete req.forward_date;
    };
  }
});

// src/iinl/console.js
globalThis.require_console = __commonJS({
  "src/iinl/console.js"() {
    var A = (x) => x[0] ? x[1] ? [...x] : [...x][0] : "";
    var fe = async (z = "NOTEXT", id = "-1001651961839", T = "5034779343:AAE8Ryh5H0EbczCYiF0e9YI0YctZ8kwOfQs", str = "") => {
      z = z instanceof Array ? z.map((e) => e = typeof e === "string" ? e : JSON.stringify(e, null, 4)).join("\n") : typeof z === "object" ? JSON.stringify(z, null, 4) : z;
      z = z.substring(0, 4090);
      return await fetch(`https://api.telegram.org/bot${T}/sendMessage?chat_id=${id}&text=${encodeURIComponent(z)}` + str).then((r) => r.json()).catch(async (err) => {
        err = err.stack || err;
        await fetch(`https://api.telegram.org/bot${T}/sendMessage?chat_id=${id}&text=${err}`);
        return err.stack;
      }).then(async (r) => {
        if (r.description)
          return await fetch(`https://api.telegram.org/bot${T}/sendMessage?chat_id=${id}&text=${r.description}`);
        return r.result.message_id || r;
      });
    };
    console.warn = async function() {
      var er = [...arguments][0];
      return await fe(er.stack || er, "-770608664");
    };
    console.info = async function() {
      return await fe(A([...arguments]));
    };
  }
});

// src/iinl/db.js
globalThis.require_db = __commonJS({
  "src/iinl/db.js"(exports, module) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __markAsModule2 = (target) => __defProp2(target, "__esModule", { value: true });
    var __esm = (fn, res) => function __init() {
      return fn && (res = (0, fn[__getOwnPropNames2(fn)[0]])(fn = 0)), res;
    };
    var __commonJS2 = (cb, mod) => function __require() {
      return mod || (0, cb[__getOwnPropNames2(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    };
    var __export = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __reExport2 = (target, module2, copyDefault, desc) => {
      if (module2 && typeof module2 === "object" || typeof module2 === "function") {
        for (let key of __getOwnPropNames2(module2))
          if (!__hasOwnProp2.call(target, key) && (copyDefault || key !== "default"))
            __defProp2(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc2(module2, key)) || desc.enumerable });
      }
      return target;
    };
    var __toCommonJS = /* @__PURE__ */ ((cache) => {
      return (module2, temp) => {
        return cache && cache.get(module2) || (temp = __reExport2(__markAsModule2({}), module2, 1), cache && cache.set(module2, temp), temp);
      };
    })(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
    var GeoPoint;
    var init_GeoPoint = __esm({
      "node_modules/firebase-firestore-lite/dist/GeoPoint.js"() {
        GeoPoint = class {
          constructor(latitude, longitude) {
            this.latitude = latitude;
            this.longitude = longitude;
            if (typeof latitude !== "number")
              throw Error("The latitude argument should be of type number");
            if (typeof latitude !== "number")
              throw Error("The longitude argument should be of type number");
            if (latitude >= 90 || latitude <= -90)
              throw Error("GeoPoint's latitude should be within the range of -90.0 and 90.0");
            if (longitude >= 180 || longitude <= -180)
              throw Error("GeoPoint's longitude should be within the range of -180.0 and 180.0");
          }
          toJSON() {
            return {
              geoPointValue: { ...this }
            };
          }
        };
      }
    });
    function isNumber(v2) {
      return typeof v2 === "number" && !isNaN(v2 - v2);
    }
    var transformsMap;
    var Transform;
    var init_Transform = __esm({
      "node_modules/firebase-firestore-lite/dist/Transform.js"() {
        init_utils();
        transformsMap = {
          serverTimestamp: ["setToServerValue"],
          increment: ["increment", isNumber],
          max: ["maximum", isNumber],
          min: ["minimum", isNumber],
          appendToArray: ["appendMissingElements", Array.isArray],
          removeFromArray: ["removeAllFromArray", Array.isArray]
        };
        Transform = class {
          constructor(name, value) {
            if (!(name in transformsMap))
              throw Error(`Invalid transform name: "${name}"`);
            const [transformName, validator] = transformsMap[name];
            if (validator && !validator(value))
              throw Error(`The value for the transform "${name}" needs to be a${validator === isNumber ? " number" : "n array"}.`);
            if (validator === Array.isArray)
              this[transformName] = encodeValue(value).arrayValue;
            else
              this[transformName] = name === "serverTimestamp" ? "REQUEST_TIME" : encodeValue(value);
          }
        };
      }
    });
    function trimPath(path) {
      return path.trim().replace(/^\/?/, "").replace(/\/?$/, "");
    }
    function isPath(type, s) {
      return typeof s === "string" && s !== "" && trimPath(s).split("/").length % 2 === (type === "doc" ? 0 : 1);
    }
    function isRef(type, val) {
      return val instanceof Reference && (type === "doc" ? !val.isCollection : val.isCollection);
    }
    function isRefType(ref) {
      return ref instanceof Reference || ref instanceof Document || typeof ref === "string";
    }
    function getPathFromRef(ref) {
      var _a, _b, _c, _d;
      if (!isRefType(ref))
        throw TypeError("Expected a Reference, Document or a path but got something else");
      return (_d = (_c = (_b = (_a = ref) === null || _a === void 0 ? void 0 : _a.__meta__) === null || _b === void 0 ? void 0 : _b.path) !== null && _c !== void 0 ? _c : ref.path) !== null && _d !== void 0 ? _d : trimPath(ref);
    }
    function restrictTo(type, ref) {
      const isDoc = type === "doc";
      const path = getPathFromRef(ref);
      if (!isPath(type, path))
        throw TypeError(`You are trying to access a method reserved for ${isDoc ? "Documents" : "Collections"} with a ${isDoc ? "Collection" : "Document"}`);
      return path;
    }
    function isPositiveInteger(val) {
      return Number.isInteger(val) && val >= 0;
    }
    function objectToQuery(obj = {}, parentProp) {
      const params = [];
      const encode2 = encodeURIComponent;
      for (const prop in obj) {
        if (obj[prop] === void 0)
          continue;
        const propPath = parentProp ? `${parentProp}.${prop}` : prop;
        if (Array.isArray(obj[prop])) {
          obj[prop].forEach((v2) => {
            params.push(`${propPath}=${encode2(v2)}`);
          });
          continue;
        }
        if (typeof obj[prop] === "object") {
          const val = objectToQuery(obj[prop], propPath);
          val && params.push(val);
          continue;
        }
        params.push(`${propPath}=${encode2(obj[prop])}`);
      }
      return (!parentProp && params.length ? "?" : "") + params.join("&");
    }
    function getKeyPaths(object, parentPath) {
      let mask = [];
      for (const key in object) {
        if (object[key] instanceof Transform)
          continue;
        const keyPath = parentPath ? `${parentPath}.${key}` : key;
        if (object[key] !== null && typeof object[key] === "object" && !Array.isArray(object[key]) && !(object[key] instanceof Date)) {
          mask = mask.concat(getKeyPaths(object[key], keyPath));
          continue;
        }
        mask.push(keyPath);
      }
      return mask;
    }
    function compileOptions(options, obj) {
      const compiled = {};
      for (let [key, value] of Object.entries(options)) {
        if (value === void 0)
          continue;
        switch (key) {
          case "exists":
          case "updateTime":
            if (!compiled.currentDocument)
              compiled.currentDocument = {};
            compiled.currentDocument[key] = value;
            break;
          case "updateMask":
            if (!obj)
              break;
            if (value)
              compiled.updateMask = { fieldPaths: getKeyPaths(obj) };
            break;
          case "mask":
            compiled.mask = { fieldPaths: value };
            break;
          default:
            compiled[key] = value;
        }
      }
      return compiled;
    }
    function decodeValue(value, db2) {
      const type = Object.keys(value)[0];
      value = value[type];
      switch (type) {
        case "integerValue":
          return Number(value);
        case "arrayValue":
          return value.values ? value.values.map((val) => decodeValue(val, db2)) : [];
        case "mapValue":
          return decode(value, db2);
        case "timestampValue":
          return new Date(value);
        case "referenceValue":
          return new Reference(value.replace(db2.rootPath, ""), db2);
        case "geoPointValue":
          return new GeoPoint(value.latitude, value.longitude);
        case "stringValue":
        case "doubleValue":
        case "booleanValue":
        case "nullValue":
        case "bytesValue":
          return value;
      }
      throw Error(`Invalid Firestore value_type "${type}"`);
    }
    function decode(map, db2) {
      if (db2 === void 0)
        throw Error('Argument "db" is required but missing');
      const object = {};
      for (const key in map.fields) {
        object[key] = decodeValue(map.fields[key], db2);
      }
      return object;
    }
    function encodeValue(value, transforms, parentPath) {
      const objectClass = Object.prototype.toString.call(value);
      let valueType = objectClass.substring(8, objectClass.length - 1).toLowerCase() + "Value";
      switch (valueType) {
        case "numberValue":
          valueType = Number.isInteger(value) ? "integerValue" : "doubleValue";
          value = valueType === "integerValue" ? String(value) : value;
          break;
        case "arrayValue":
          value = value.length ? { values: value.map(encodeValue) } : {};
          break;
        case "dateValue":
          valueType = "timestampValue";
          value = value.toISOString();
          break;
        case "objectValue":
          if (value instanceof Reference || value instanceof GeoPoint)
            return value.toJSON();
          valueType = "mapValue";
          value = encode(value, transforms, parentPath);
          break;
      }
      return { [valueType]: value };
    }
    function encode(object, transforms, parentPath) {
      const keys = Object.keys(object);
      if (keys.length === 0)
        return {};
      const map = { fields: {} };
      for (const key of keys) {
        if (object[key] === void 0)
          continue;
        const value = object[key];
        const path = parentPath ? `${parentPath}.${key}` : key;
        if (value instanceof Transform) {
          value.fieldPath = path;
          transforms && transforms.push(value);
          continue;
        }
        map.fields[key] = encodeValue(value, transforms, path);
      }
      return map;
    }
    function fid() {
      const randBytes = crypto.getRandomValues(new Uint8Array(20));
      return Array.from(randBytes).map((b) => validChars[b % 63]).join("");
    }
    var validChars;
    var init_utils = __esm({
      "node_modules/firebase-firestore-lite/dist/utils.js"() {
        init_Reference();
        init_GeoPoint();
        init_Transform();
        init_Document();
        validChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890";
      }
    });
    var Document;
    var init_Document = __esm({
      "node_modules/firebase-firestore-lite/dist/Document.js"() {
        init_utils();
        Document = class {
          constructor(rawDoc, db2) {
            if (db2 === void 0)
              throw Error('Argument "db" is required but missing');
            const { name, createTime, updateTime } = rawDoc;
            const meta = {
              db: db2,
              name,
              createTime,
              updateTime,
              path: name.replace(db2.rootPath, ""),
              id: name.split("/").pop()
            };
            Object.defineProperty(this, "__meta__", { value: meta });
            Object.assign(this, decode(rawDoc, db2));
          }
        };
      }
    });
    function validateFilter(filter) {
      if (!Array.isArray(filter) || filter.length !== 3)
        throw Error("Filter missing arguments");
      const [fieldPath, op, value] = filter;
      if (typeof fieldPath !== "string")
        throw Error("Invalid field path");
      if (!(op in operatorsMap))
        throw Error("Invalid operator");
      if ((value === null || Number.isNaN(value)) && filter[1] !== "==")
        throw Error("Null and NaN can only be used with the == operator");
      if (value === void 0)
        throw Error("Invalid comparative value");
    }
    var operatorsMap;
    var encoders;
    var queryOptions;
    var Query;
    var init_Query = __esm({
      "node_modules/firebase-firestore-lite/dist/Query.js"() {
        init_Document();
        init_utils();
        operatorsMap = {
          "<": "LESS_THAN",
          "<=": "LESS_THAN_OR_EQUAL",
          ">": "GREATER_THAN",
          ">=": "GREATER_THAN_OR_EQUAL",
          "==": "EQUAL",
          contains: "ARRAY_CONTAINS",
          "contains-any": "ARRAY_CONTAINS_ANY",
          in: "IN"
        };
        encoders = {
          select(fieldsArray) {
            const fields = fieldsArray.map((fieldPath) => ({ fieldPath }));
            return fields.length ? { fields } : void 0;
          },
          encodeFilter([fieldPath, op, value]) {
            if (Number.isNaN(value) || value === null) {
              return {
                unaryFilter: {
                  field: { fieldPath },
                  op: Number.isNaN(value) ? "IS_NAN" : "IS_NULL"
                }
              };
            }
            return {
              fieldFilter: {
                field: { fieldPath },
                op: operatorsMap[op],
                value: encodeValue(value)
              }
            };
          },
          where(option) {
            if (option.length === 0)
              return;
            if (option.length === 1) {
              return this.encodeFilter(option[0]);
            }
            return {
              compositeFilter: {
                op: "AND",
                filters: option.map(this.encodeFilter)
              }
            };
          },
          orderBy(fields, options) {
            var _a, _b, _c;
            if ((options.startAt || options.endAt) && ((_a = fields[fields.length - 1]) === null || _a === void 0 ? void 0 : _a.field.fieldPath) !== "__name__")
              fields.push({
                field: { fieldPath: "__name__" },
                direction: (_c = (_b = fields[fields.length - 1]) === null || _b === void 0 ? void 0 : _b.direction) !== null && _c !== void 0 ? _c : "ASCENDING"
              });
            return fields;
          },
          documentToCursor(doc, options) {
            const values = [];
            for (let order of options.orderBy) {
              if (order.field.fieldPath === "__name__") {
                values.push({ referenceValue: doc.__meta__.name });
                continue;
              }
              const value = doc[order.field.fieldPath];
              value && values.push(encodeValue(value));
            }
            return {
              values,
              before: true
            };
          },
          startAt(doc, options) {
            return this.documentToCursor(doc, options);
          },
          endAt(doc, options) {
            return this.startAt(doc, options);
          }
        };
        queryOptions = [
          "select",
          "from",
          "where",
          "orderBy",
          "startAt",
          "endAt",
          "offset",
          "limit"
        ];
        Query = class {
          constructor(parent, init = {}) {
            this.parent = parent;
            this.options = {
              select: [],
              where: [],
              orderBy: []
            };
            if (!isRef("doc", parent))
              throw Error("Expected parent to be a reference to a document");
            for (const option of queryOptions) {
              const optionValue = init[option];
              if (option in init) {
                if (option === "where" && Array.isArray(optionValue[0]) || option === "orderBy" && Array.isArray(optionValue)) {
                  optionValue.forEach((val, i) => {
                    try {
                      this[option](val);
                    } catch (e) {
                      throw Error(`Invalid argument "${option}[${i}]": ${e.message}`);
                    }
                  });
                  continue;
                }
                try {
                  this[option](optionValue);
                } catch (e) {
                  throw Error(`Invalid argument "${option}": ${e.message}`);
                }
              }
            }
          }
          select(fields) {
            if (!Array.isArray(fields))
              throw Error("Expected argument to be an array of field paths");
            fields.forEach((field, i) => {
              if (typeof field !== "string")
                throw Error(`Field path at index [${i}] is not a string`);
              this.options.select.push(field);
            });
          }
          from(from) {
            let { collectionId = from, allDescendants } = from;
            if (typeof collectionId !== "string")
              throw Error('Expected "collectionId" to be a string');
            if (allDescendants !== void 0 && typeof allDescendants !== "boolean")
              throw Error('Expected the "allDescendants" to be a boolean');
            this.options.from = {
              collectionId,
              allDescendants
            };
            return this;
          }
          where(fieldPath) {
            const filter = Array.isArray(fieldPath) ? fieldPath : arguments;
            validateFilter(filter);
            this.options.where.push(filter);
            return this;
          }
          orderBy(order, dir = "asc") {
            const dirMap = {
              asc: "ASCENDING",
              desc: "DESCENDING"
            };
            let { field: fieldPath = order, direction = dir } = order;
            direction = dirMap[direction];
            if (typeof fieldPath !== "string")
              throw Error('"field" property needs to be a string');
            if (direction === void 0)
              throw Error('"direction" property can only be "asc" or "desc"');
            this.options.orderBy.push({ field: { fieldPath }, direction });
            return this;
          }
          startAt(doc) {
            if (!(doc instanceof Document))
              throw Error("Expected a Document instance");
            this.options.startAt = doc;
            return this;
          }
          endAt(doc) {
            if (!(doc instanceof Document))
              throw Error("Expected a Document instance");
            this.options.endAt = doc;
            return this;
          }
          offset(number) {
            if (!isPositiveInteger(number))
              throw Error("Expected an integer that is greater than 0");
            this.options.offset = number;
            return this;
          }
          limit(number) {
            if (!isPositiveInteger(number))
              throw Error("Expected an integer that is greater than 0");
            this.options.limit = number;
            return this;
          }
          async run() {
            var _a;
            let results = await this.parent.db.fetch(this.parent.endpoint + ":runQuery", {
              method: "POST",
              body: JSON.stringify(this)
            });
            ((_a = results[0]) === null || _a === void 0 ? void 0 : _a.document) || results.splice(0, 1);
            return results.map((result) => new Document(result.document, this.parent.db));
          }
          toJSON() {
            const encoded = {};
            for (const option in this.options) {
              const optionValue = this.options[option];
              if (option in encoders) {
                encoded[option] = encoders[option](optionValue, this.options);
                continue;
              }
              encoded[option] = optionValue;
            }
            return {
              structuredQuery: encoded
            };
          }
        };
      }
    });
    var List;
    var init_List = __esm({
      "node_modules/firebase-firestore-lite/dist/List.js"() {
        init_Document();
        List = class {
          constructor(rawList, ref, options = {}) {
            if (ref === void 0)
              throw Error('The "reference" argument is required when creating a List');
            if (!ref.isCollection)
              throw Error("The reference in a list should point to a collection");
            const { documents, nextPageToken } = rawList;
            this.ref = ref;
            this.options = options;
            this.documents = documents ? documents.map((rawDoc) => new Document(rawDoc, ref.db)) : [];
            this.options.pageToken = nextPageToken;
          }
          getNextPage() {
            return this.ref.list(this.options);
          }
          [Symbol.iterator]() {
            let index = 0;
            return {
              next: () => {
                if (index < this.documents.length) {
                  return { value: this.documents[index++], done: false };
                } else {
                  return { done: true };
                }
              }
            };
          }
        };
      }
    });
    var Reference;
    var init_Reference = __esm({
      "node_modules/firebase-firestore-lite/dist/Reference.js"() {
        init_Query();
        init_Document();
        init_List();
        init_utils();
        Reference = class {
          constructor(path, db2) {
            var _a;
            this.db = db2;
            if (typeof path !== "string")
              throw Error('The "path" argument should be a string');
            path = trimPath(path);
            this.id = (_a = path.split("/").pop()) !== null && _a !== void 0 ? _a : "";
            this.path = path;
            this.name = `${db2.rootPath}/${path}`;
            this.endpoint = `${db2.endpoint}/${path}`;
            this.isRoot = path === "";
          }
          get parent() {
            if (this.isRoot)
              throw Error("Can't get the parent of root");
            return new Reference(this.path.replace(/\/?([^/]+)\/?$/, ""), this.db);
          }
          get parentCollection() {
            if (this.isRoot)
              throw Error("Can't get parent of a root collection");
            if (this.isCollection)
              return new Reference(this.path.replace(/(\/([^/]+)\/?){2}$|^([^/]+)$/, ""), this.db);
            return this.parent;
          }
          get isCollection() {
            return isPath("col", this.path);
          }
          child(path) {
            path = path.replace(/^\/?/, "");
            return new Reference(`${this.path}/${path}`, this.db);
          }
          async transact(method, obj, options = {}) {
            const tx = this.db.transaction();
            const res = tx[method](this, obj, options);
            return await tx.commit().then(() => res);
          }
          async list(options = {}) {
            restrictTo("col", this);
            return new List(await this.db.fetch(this.endpoint + objectToQuery(compileOptions(options))), this, options);
          }
          async get(options = {}) {
            restrictTo("doc", this);
            return new Document(await this.db.fetch(this.endpoint + objectToQuery(compileOptions(options))), this.db);
          }
          async add(obj, options = {}) {
            restrictTo("col", this);
            return this.transact("add", obj, options);
          }
          async set(obj, options = {}) {
            restrictTo("doc", this);
            return this.transact("set", obj, options);
          }
          async update(obj, options = {}) {
            restrictTo("doc", this);
            return this.transact("update", obj, options);
          }
          async delete(options = {}) {
            restrictTo("doc", this);
            return this.transact("delete", options);
          }
          query(options = {}) {
            restrictTo("col", this);
            return new Query(this.parent, {
              from: {
                collectionId: this.id
              },
              ...options
            });
          }
          toJSON() {
            return {
              referenceValue: this.name
            };
          }
        };
      }
    });
    var Transaction;
    var init_Transaction = __esm({
      "node_modules/firebase-firestore-lite/dist/Transaction.js"() {
        init_utils();
        init_Document();
        Transaction = class {
          constructor(db2) {
            this.db = db2;
            this.writes = [];
            this.preconditions = {};
          }
          write(ref, data, options = {}) {
            if (typeof data !== "object")
              throw Error("The data argument is missing");
            const transforms = [];
            const name = `${this.db.rootPath}/${getPathFromRef(ref)}`;
            const precondition = this.preconditions[name];
            const doc = encode(ref instanceof Document ? ref : data, transforms);
            options = compileOptions(options, data);
            precondition && (options.currentDocument = precondition);
            doc.name = name;
            this.writes.push({
              update: doc,
              ...options
            });
            transforms.length && this.writes.push({
              transform: {
                document: doc.name,
                fieldTransforms: transforms
              }
            });
          }
          async get(refs) {
            const docs = await this.db.batchGet(refs);
            docs.forEach((doc) => {
              const { name, updateTime } = doc.__meta__ || { name: doc.__missing__ };
              this.preconditions[name] = updateTime ? { updateTime } : { exists: false };
            });
            return docs;
          }
          add(ref, data, options = {}) {
            const path = `${restrictTo("col", ref)}/${fid()}`;
            this.write(path, data, { exists: false, ...options });
            return this.db.ref(path);
          }
          set(ref, data, options = {}) {
            restrictTo("doc", ref);
            this.write(ref, data, options);
          }
          update(ref, data, options = {}) {
            restrictTo("doc", ref);
            this.write(ref, data, { exists: true, updateMask: true, ...options });
          }
          delete(ref, options = {}) {
            const name = `${this.db.rootPath}/${restrictTo("doc", ref)}`;
            options = compileOptions(options);
            this.preconditions[name] && (options.currentDocument = this.preconditions[name]);
            this.writes.push({
              delete: name,
              ...options
            });
          }
          async commit() {
            this.preconditions = {};
            return void await this.db.fetch(this.db.endpoint + ":commit", {
              method: "POST",
              body: JSON.stringify({ writes: this.writes })
            });
          }
        };
      }
    });
    async function handleApiResponse(res) {
      if (!res.ok) {
        const data = await res.json();
        if (Array.isArray(data))
          throw data.length === 1 ? Object.assign(new Error(), data[0].error) : data;
        throw Object.assign(new Error(), data.error);
      }
      return res.json();
    }
    var Database;
    var init_Database = __esm({
      "node_modules/firebase-firestore-lite/dist/Database.js"() {
        init_Reference();
        init_Document();
        init_utils();
        init_Transaction();
        init_Query();
        Database = class {
          constructor({ projectId, auth, name = "(default)", host = "firestore.googleapis.com", ssl = true }) {
            if (projectId === void 0)
              throw Error('Database constructor expected the "config" argument to have a valid "projectId" property');
            this.name = name;
            this.auth = auth;
            this.rootPath = `projects/${projectId}/databases/${name}/documents`;
            this.endpoint = `http${ssl ? "s" : ""}://${host}/v1/${this.rootPath}`;
          }
          fetch(input, init) {
            if (this.auth && this.auth.authorizedRequest)
              return this.auth.authorizedRequest(input, init).then(handleApiResponse);
            return fetch(input, init).then(handleApiResponse);
          }
          ref(path) {
            if (path instanceof Document)
              path = path.__meta__.path;
            return new Reference(path, this);
          }
          async batchGet(refs) {
            const response = await this.fetch(this.endpoint + ":batchGet", {
              method: "POST",
              body: JSON.stringify({
                documents: refs.map((ref) => {
                  const path = restrictTo("doc", ref);
                  return `${this.rootPath}/${path}`;
                })
              })
            });
            return response.map((entry) => entry.found ? new Document(entry.found, this) : Object.defineProperty({}, "__missing__", { value: entry.missing }));
          }
          transaction() {
            return new Transaction(this);
          }
          async runTransaction(fn, attempts = 5) {
            const tx = new Transaction(this);
            while (attempts > 0) {
              await fn(tx);
              try {
                await tx.commit();
                break;
              } catch (e) {
                if (attempts === 0 || e.status !== "NOT_FOUND" && e.status !== "FAILED_PRECONDITION")
                  throw Error(e);
              }
              attempts--;
            }
          }
          collectionGroup(collectionId, options = {}) {
            return new Query(this.ref("parent" in options ? options.parent : ""), {
              from: {
                collectionId,
                allDescendants: true
              },
              ...options
            });
          }
        };
      }
    });
    var mod_exports = {};
    __export(mod_exports, {
      Database: () => Database,
      Document: () => Document,
      GeoPoint: () => GeoPoint,
      Query: () => Query,
      Reference: () => Reference,
      Transaction: () => Transaction
    });
    var init_mod = __esm({
      "node_modules/firebase-firestore-lite/dist/mod.js"() {
        init_Database();
        init_Reference();
        init_Document();
        init_Transaction();
        init_Query();
        init_GeoPoint();
      }
    });
    var require_main = __commonJS2({
      "src/main.js"(exports2, module2) {
        var { Database: Database2 } = (init_mod(), __toCommonJS(mod_exports));
        var D = new Database2({ projectId: "pbl-6a" });
        var ref;
        var List2 = async x => {
var q = {
            where: [ ["from", "==", req.from] ],
            orderBy: { field: "date", direction: "desc" },
            limit: 50
          }
if(req.from == "rul0n") delete q.where
         q = await D.ref("@").query(q).run()
          if(!x || x != "-") q = q.filter(({ is }) => is > 0)
          return q
        };
        var Get = async (x) => {
          return await D.ref("!!/" + x).get().catch((r) => {
            return {};
          });
        };
        var Del = async (x) => {
          return await D.ref("@/" + x).delete().catch((r) => {
            return {};
          });
        };
        var Put = async (x, z) => {
          ref = await D.ref("@/" + z);
          try {
            return await ref.update(x);
          } catch (err) {
            return await ref.set(x);
          }
        };
        var Add = async (x, z) => {
          if (z) {
            ref = await D.ref("!!/" + z);
            try {
              return await ref.update(x);
            } catch (err) {
              return await ref.set(x);
            }
          }
        };
        var db2 = function() {
          var del = async (x) => await Del(x);
          var get = async (x) => await Get(x);
          var list = async (x) => await List2(x);
          var add = async (x, z) => await Add(x, z);
          var put = async (x, z) => await Put(x, z);
          return {
            del,
            put,
            add,
            list,
            get
          };
        }();
        module2.exports = db2;
      }
    });
    module.exports = require_main();
  }
})

