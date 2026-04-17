function Xx(t, e) {
  for (var n = 0; n < e.length; n++) {
    const r = e[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in t)) {
          const s = Object.getOwnPropertyDescriptor(r, i);
          s &&
            Object.defineProperty(
              t,
              i,
              s.get ? s : { enumerable: !0, get: () => r[i] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (s.credentials = "omit")
          : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
function Qx(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
var Um = { exports: {} },
  Va = {},
  Wm = { exports: {} },
  b = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ws = Symbol.for("react.element"),
  qx = Symbol.for("react.portal"),
  Zx = Symbol.for("react.fragment"),
  Jx = Symbol.for("react.strict_mode"),
  e_ = Symbol.for("react.profiler"),
  t_ = Symbol.for("react.provider"),
  n_ = Symbol.for("react.context"),
  r_ = Symbol.for("react.forward_ref"),
  i_ = Symbol.for("react.suspense"),
  s_ = Symbol.for("react.memo"),
  o_ = Symbol.for("react.lazy"),
  zd = Symbol.iterator;
function a_(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = (zd && t[zd]) || t["@@iterator"]),
      typeof t == "function" ? t : null);
}
var $m = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Hm = Object.assign,
  Km = {};
function Ci(t, e, n) {
  ((this.props = t),
    (this.context = e),
    (this.refs = Km),
    (this.updater = n || $m));
}
Ci.prototype.isReactComponent = {};
Ci.prototype.setState = function (t, e) {
  if (typeof t != "object" && typeof t != "function" && t != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, t, e, "setState");
};
Ci.prototype.forceUpdate = function (t) {
  this.updater.enqueueForceUpdate(this, t, "forceUpdate");
};
function Gm() {}
Gm.prototype = Ci.prototype;
function Hc(t, e, n) {
  ((this.props = t),
    (this.context = e),
    (this.refs = Km),
    (this.updater = n || $m));
}
var Kc = (Hc.prototype = new Gm());
Kc.constructor = Hc;
Hm(Kc, Ci.prototype);
Kc.isPureReactComponent = !0;
var Bd = Array.isArray,
  Ym = Object.prototype.hasOwnProperty,
  Gc = { current: null },
  Xm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Qm(t, e, n) {
  var r,
    i = {},
    s = null,
    o = null;
  if (e != null)
    for (r in (e.ref !== void 0 && (o = e.ref),
    e.key !== void 0 && (s = "" + e.key),
    e))
      Ym.call(e, r) && !Xm.hasOwnProperty(r) && (i[r] = e[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (t && t.defaultProps)
    for (r in ((a = t.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: Ws,
    type: t,
    key: s,
    ref: o,
    props: i,
    _owner: Gc.current,
  };
}
function l_(t, e) {
  return {
    $$typeof: Ws,
    type: t.type,
    key: e,
    ref: t.ref,
    props: t.props,
    _owner: t._owner,
  };
}
function Yc(t) {
  return typeof t == "object" && t !== null && t.$$typeof === Ws;
}
function u_(t) {
  var e = { "=": "=0", ":": "=2" };
  return (
    "$" +
    t.replace(/[=:]/g, function (n) {
      return e[n];
    })
  );
}
var Ud = /\/+/g;
function fl(t, e) {
  return typeof t == "object" && t !== null && t.key != null
    ? u_("" + t.key)
    : e.toString(36);
}
function Po(t, e, n, r, i) {
  var s = typeof t;
  (s === "undefined" || s === "boolean") && (t = null);
  var o = !1;
  if (t === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (t.$$typeof) {
          case Ws:
          case qx:
            o = !0;
        }
    }
  if (o)
    return (
      (o = t),
      (i = i(o)),
      (t = r === "" ? "." + fl(o, 0) : r),
      Bd(i)
        ? ((n = ""),
          t != null && (n = t.replace(Ud, "$&/") + "/"),
          Po(i, e, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (Yc(i) &&
            (i = l_(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Ud, "$&/") + "/") +
                t,
            )),
          e.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Bd(t)))
    for (var a = 0; a < t.length; a++) {
      s = t[a];
      var l = r + fl(s, a);
      o += Po(s, e, n, l, i);
    }
  else if (((l = a_(t)), typeof l == "function"))
    for (t = l.call(t), a = 0; !(s = t.next()).done; )
      ((s = s.value), (l = r + fl(s, a++)), (o += Po(s, e, n, l, i)));
  else if (s === "object")
    throw (
      (e = String(t)),
      Error(
        "Objects are not valid as a React child (found: " +
          (e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return o;
}
function eo(t, e, n) {
  if (t == null) return t;
  var r = [],
    i = 0;
  return (
    Po(t, r, "", "", function (s) {
      return e.call(n, s, i++);
    }),
    r
  );
}
function c_(t) {
  if (t._status === -1) {
    var e = t._result;
    ((e = e()),
      e.then(
        function (n) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 1), (t._result = n));
        },
        function (n) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 2), (t._result = n));
        },
      ),
      t._status === -1 && ((t._status = 0), (t._result = e)));
  }
  if (t._status === 1) return t._result.default;
  throw t._result;
}
var Ue = { current: null },
  ko = { transition: null },
  f_ = {
    ReactCurrentDispatcher: Ue,
    ReactCurrentBatchConfig: ko,
    ReactCurrentOwner: Gc,
  };
function qm() {
  throw Error("act(...) is not supported in production builds of React.");
}
b.Children = {
  map: eo,
  forEach: function (t, e, n) {
    eo(
      t,
      function () {
        e.apply(this, arguments);
      },
      n,
    );
  },
  count: function (t) {
    var e = 0;
    return (
      eo(t, function () {
        e++;
      }),
      e
    );
  },
  toArray: function (t) {
    return (
      eo(t, function (e) {
        return e;
      }) || []
    );
  },
  only: function (t) {
    if (!Yc(t))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return t;
  },
};
b.Component = Ci;
b.Fragment = Zx;
b.Profiler = e_;
b.PureComponent = Hc;
b.StrictMode = Jx;
b.Suspense = i_;
b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = f_;
b.act = qm;
b.cloneElement = function (t, e, n) {
  if (t == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        t +
        ".",
    );
  var r = Hm({}, t.props),
    i = t.key,
    s = t.ref,
    o = t._owner;
  if (e != null) {
    if (
      (e.ref !== void 0 && ((s = e.ref), (o = Gc.current)),
      e.key !== void 0 && (i = "" + e.key),
      t.type && t.type.defaultProps)
    )
      var a = t.type.defaultProps;
    for (l in e)
      Ym.call(e, l) &&
        !Xm.hasOwnProperty(l) &&
        (r[l] = e[l] === void 0 && a !== void 0 ? a[l] : e[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Ws, type: t.type, key: i, ref: s, props: r, _owner: o };
};
b.createContext = function (t) {
  return (
    (t = {
      $$typeof: n_,
      _currentValue: t,
      _currentValue2: t,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (t.Provider = { $$typeof: t_, _context: t }),
    (t.Consumer = t)
  );
};
b.createElement = Qm;
b.createFactory = function (t) {
  var e = Qm.bind(null, t);
  return ((e.type = t), e);
};
b.createRef = function () {
  return { current: null };
};
b.forwardRef = function (t) {
  return { $$typeof: r_, render: t };
};
b.isValidElement = Yc;
b.lazy = function (t) {
  return { $$typeof: o_, _payload: { _status: -1, _result: t }, _init: c_ };
};
b.memo = function (t, e) {
  return { $$typeof: s_, type: t, compare: e === void 0 ? null : e };
};
b.startTransition = function (t) {
  var e = ko.transition;
  ko.transition = {};
  try {
    t();
  } finally {
    ko.transition = e;
  }
};
b.unstable_act = qm;
b.useCallback = function (t, e) {
  return Ue.current.useCallback(t, e);
};
b.useContext = function (t) {
  return Ue.current.useContext(t);
};
b.useDebugValue = function () {};
b.useDeferredValue = function (t) {
  return Ue.current.useDeferredValue(t);
};
b.useEffect = function (t, e) {
  return Ue.current.useEffect(t, e);
};
b.useId = function () {
  return Ue.current.useId();
};
b.useImperativeHandle = function (t, e, n) {
  return Ue.current.useImperativeHandle(t, e, n);
};
b.useInsertionEffect = function (t, e) {
  return Ue.current.useInsertionEffect(t, e);
};
b.useLayoutEffect = function (t, e) {
  return Ue.current.useLayoutEffect(t, e);
};
b.useMemo = function (t, e) {
  return Ue.current.useMemo(t, e);
};
b.useReducer = function (t, e, n) {
  return Ue.current.useReducer(t, e, n);
};
b.useRef = function (t) {
  return Ue.current.useRef(t);
};
b.useState = function (t) {
  return Ue.current.useState(t);
};
b.useSyncExternalStore = function (t, e, n) {
  return Ue.current.useSyncExternalStore(t, e, n);
};
b.useTransition = function () {
  return Ue.current.useTransition();
};
b.version = "18.3.1";
Wm.exports = b;
var T = Wm.exports;
const Zm = Qx(T),
  d_ = Xx({ __proto__: null, default: Zm }, [T]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var h_ = T,
  p_ = Symbol.for("react.element"),
  m_ = Symbol.for("react.fragment"),
  g_ = Object.prototype.hasOwnProperty,
  y_ = h_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  v_ = { key: !0, ref: !0, __self: !0, __source: !0 };
function Jm(t, e, n) {
  var r,
    i = {},
    s = null,
    o = null;
  (n !== void 0 && (s = "" + n),
    e.key !== void 0 && (s = "" + e.key),
    e.ref !== void 0 && (o = e.ref));
  for (r in e) g_.call(e, r) && !v_.hasOwnProperty(r) && (i[r] = e[r]);
  if (t && t.defaultProps)
    for (r in ((e = t.defaultProps), e)) i[r] === void 0 && (i[r] = e[r]);
  return {
    $$typeof: p_,
    type: t,
    key: s,
    ref: o,
    props: i,
    _owner: y_.current,
  };
}
Va.Fragment = m_;
Va.jsx = Jm;
Va.jsxs = Jm;
Um.exports = Va;
var g = Um.exports,
  cu = {},
  eg = { exports: {} },
  ht = {},
  tg = { exports: {} },
  ng = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (t) {
  function e(N, D) {
    var O = N.length;
    N.push(D);
    e: for (; 0 < O; ) {
      var W = (O - 1) >>> 1,
        G = N[W];
      if (0 < i(G, D)) ((N[W] = D), (N[O] = G), (O = W));
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var D = N[0],
      O = N.pop();
    if (O !== D) {
      N[0] = O;
      e: for (var W = 0, G = N.length, nr = G >>> 1; W < nr; ) {
        var Pe = 2 * (W + 1) - 1,
          kt = N[Pe],
          rr = Pe + 1,
          Js = N[rr];
        if (0 > i(kt, O))
          rr < G && 0 > i(Js, kt)
            ? ((N[W] = Js), (N[rr] = O), (W = rr))
            : ((N[W] = kt), (N[Pe] = O), (W = Pe));
        else if (rr < G && 0 > i(Js, O)) ((N[W] = Js), (N[rr] = O), (W = rr));
        else break e;
      }
    }
    return D;
  }
  function i(N, D) {
    var O = N.sortIndex - D.sortIndex;
    return O !== 0 ? O : N.id - D.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    t.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      a = o.now();
    t.unstable_now = function () {
      return o.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    h = !1,
    v = !1,
    m = !1,
    _ = typeof setTimeout == "function" ? setTimeout : null,
    y = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function x(N) {
    for (var D = n(u); D !== null; ) {
      if (D.callback === null) r(u);
      else if (D.startTime <= N)
        (r(u), (D.sortIndex = D.expirationTime), e(l, D));
      else break;
      D = n(u);
    }
  }
  function w(N) {
    if (((m = !1), x(N), !v))
      if (n(l) !== null) ((v = !0), U(S));
      else {
        var D = n(u);
        D !== null && q(w, D.startTime - N);
      }
  }
  function S(N, D) {
    ((v = !1), m && ((m = !1), y(C), (C = -1)), (h = !0));
    var O = d;
    try {
      for (
        x(D), f = n(l);
        f !== null && (!(f.expirationTime > D) || (N && !L()));
      ) {
        var W = f.callback;
        if (typeof W == "function") {
          ((f.callback = null), (d = f.priorityLevel));
          var G = W(f.expirationTime <= D);
          ((D = t.unstable_now()),
            typeof G == "function" ? (f.callback = G) : f === n(l) && r(l),
            x(D));
        } else r(l);
        f = n(l);
      }
      if (f !== null) var nr = !0;
      else {
        var Pe = n(u);
        (Pe !== null && q(w, Pe.startTime - D), (nr = !1));
      }
      return nr;
    } finally {
      ((f = null), (d = O), (h = !1));
    }
  }
  var k = !1,
    P = null,
    C = -1,
    E = 5,
    j = -1;
  function L() {
    return !(t.unstable_now() - j < E);
  }
  function I() {
    if (P !== null) {
      var N = t.unstable_now();
      j = N;
      var D = !0;
      try {
        D = P(!0, N);
      } finally {
        D ? F() : ((k = !1), (P = null));
      }
    } else k = !1;
  }
  var F;
  if (typeof p == "function")
    F = function () {
      p(I);
    };
  else if (typeof MessageChannel < "u") {
    var z = new MessageChannel(),
      H = z.port2;
    ((z.port1.onmessage = I),
      (F = function () {
        H.postMessage(null);
      }));
  } else
    F = function () {
      _(I, 0);
    };
  function U(N) {
    ((P = N), k || ((k = !0), F()));
  }
  function q(N, D) {
    C = _(function () {
      N(t.unstable_now());
    }, D);
  }
  ((t.unstable_IdlePriority = 5),
    (t.unstable_ImmediatePriority = 1),
    (t.unstable_LowPriority = 4),
    (t.unstable_NormalPriority = 3),
    (t.unstable_Profiling = null),
    (t.unstable_UserBlockingPriority = 2),
    (t.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (t.unstable_continueExecution = function () {
      v || h || ((v = !0), U(S));
    }),
    (t.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (E = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (t.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (t.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (t.unstable_next = function (N) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var D = 3;
          break;
        default:
          D = d;
      }
      var O = d;
      d = D;
      try {
        return N();
      } finally {
        d = O;
      }
    }),
    (t.unstable_pauseExecution = function () {}),
    (t.unstable_requestPaint = function () {}),
    (t.unstable_runWithPriority = function (N, D) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var O = d;
      d = N;
      try {
        return D();
      } finally {
        d = O;
      }
    }),
    (t.unstable_scheduleCallback = function (N, D, O) {
      var W = t.unstable_now();
      switch (
        (typeof O == "object" && O !== null
          ? ((O = O.delay), (O = typeof O == "number" && 0 < O ? W + O : W))
          : (O = W),
        N)
      ) {
        case 1:
          var G = -1;
          break;
        case 2:
          G = 250;
          break;
        case 5:
          G = 1073741823;
          break;
        case 4:
          G = 1e4;
          break;
        default:
          G = 5e3;
      }
      return (
        (G = O + G),
        (N = {
          id: c++,
          callback: D,
          priorityLevel: N,
          startTime: O,
          expirationTime: G,
          sortIndex: -1,
        }),
        O > W
          ? ((N.sortIndex = O),
            e(u, N),
            n(l) === null &&
              N === n(u) &&
              (m ? (y(C), (C = -1)) : (m = !0), q(w, O - W)))
          : ((N.sortIndex = G), e(l, N), v || h || ((v = !0), U(S))),
        N
      );
    }),
    (t.unstable_shouldYield = L),
    (t.unstable_wrapCallback = function (N) {
      var D = d;
      return function () {
        var O = d;
        d = D;
        try {
          return N.apply(this, arguments);
        } finally {
          d = O;
        }
      };
    }));
})(ng);
tg.exports = ng;
var x_ = tg.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __ = T,
  ct = x_;
function R(t) {
  for (
    var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1;
    n < arguments.length;
    n++
  )
    e += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    t +
    "; visit " +
    e +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var rg = new Set(),
  ds = {};
function Rr(t, e) {
  (ui(t, e), ui(t + "Capture", e));
}
function ui(t, e) {
  for (ds[t] = e, t = 0; t < e.length; t++) rg.add(e[t]);
}
var cn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  fu = Object.prototype.hasOwnProperty,
  w_ =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Wd = {},
  $d = {};
function S_(t) {
  return fu.call($d, t)
    ? !0
    : fu.call(Wd, t)
      ? !1
      : w_.test(t)
        ? ($d[t] = !0)
        : ((Wd[t] = !0), !1);
}
function T_(t, e, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof e) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((t = t.toLowerCase().slice(0, 5)), t !== "data-" && t !== "aria-");
    default:
      return !1;
  }
}
function C_(t, e, n, r) {
  if (e === null || typeof e > "u" || T_(t, e, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !e;
      case 4:
        return e === !1;
      case 5:
        return isNaN(e);
      case 6:
        return isNaN(e) || 1 > e;
    }
  return !1;
}
function We(t, e, n, r, i, s, o) {
  ((this.acceptsBooleans = e === 2 || e === 3 || e === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = t),
    (this.type = e),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o));
}
var Me = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (t) {
    Me[t] = new We(t, 0, !1, t, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (t) {
  var e = t[0];
  Me[e] = new We(e, 1, !1, t[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (t) {
  Me[t] = new We(t, 2, !1, t.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (t) {
  Me[t] = new We(t, 2, !1, t, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (t) {
    Me[t] = new We(t, 3, !1, t.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (t) {
  Me[t] = new We(t, 3, !0, t, null, !1, !1);
});
["capture", "download"].forEach(function (t) {
  Me[t] = new We(t, 4, !1, t, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (t) {
  Me[t] = new We(t, 6, !1, t, null, !1, !1);
});
["rowSpan", "start"].forEach(function (t) {
  Me[t] = new We(t, 5, !1, t.toLowerCase(), null, !1, !1);
});
var Xc = /[\-:]([a-z])/g;
function Qc(t) {
  return t[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (t) {
    var e = t.replace(Xc, Qc);
    Me[e] = new We(e, 1, !1, t, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (t) {
    var e = t.replace(Xc, Qc);
    Me[e] = new We(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (t) {
  var e = t.replace(Xc, Qc);
  Me[e] = new We(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (t) {
  Me[t] = new We(t, 1, !1, t.toLowerCase(), null, !1, !1);
});
Me.xlinkHref = new We(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (t) {
  Me[t] = new We(t, 1, !1, t.toLowerCase(), null, !0, !0);
});
function qc(t, e, n, r) {
  var i = Me.hasOwnProperty(e) ? Me[e] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < e.length) ||
      (e[0] !== "o" && e[0] !== "O") ||
      (e[1] !== "n" && e[1] !== "N")) &&
    (C_(e, n, i, r) && (n = null),
    r || i === null
      ? S_(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, "" + n))
      : i.mustUseProperty
        ? (t[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
        : ((e = i.attributeName),
          (r = i.attributeNamespace),
          n === null
            ? t.removeAttribute(e)
            : ((i = i.type),
              (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
              r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))));
}
var gn = __.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  to = Symbol.for("react.element"),
  Ir = Symbol.for("react.portal"),
  Fr = Symbol.for("react.fragment"),
  Zc = Symbol.for("react.strict_mode"),
  du = Symbol.for("react.profiler"),
  ig = Symbol.for("react.provider"),
  sg = Symbol.for("react.context"),
  Jc = Symbol.for("react.forward_ref"),
  hu = Symbol.for("react.suspense"),
  pu = Symbol.for("react.suspense_list"),
  ef = Symbol.for("react.memo"),
  Sn = Symbol.for("react.lazy"),
  og = Symbol.for("react.offscreen"),
  Hd = Symbol.iterator;
function Ai(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = (Hd && t[Hd]) || t["@@iterator"]),
      typeof t == "function" ? t : null);
}
var ce = Object.assign,
  dl;
function Wi(t) {
  if (dl === void 0)
    try {
      throw Error();
    } catch (n) {
      var e = n.stack.trim().match(/\n( *(at )?)/);
      dl = (e && e[1]) || "";
    }
  return (
    `
` +
    dl +
    t
  );
}
var hl = !1;
function pl(t, e) {
  if (!t || hl) return "";
  hl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (e)
      if (
        ((e = function () {
          throw Error();
        }),
        Object.defineProperty(e.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(e, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(t, [], e);
      } else {
        try {
          e.call();
        } catch (u) {
          r = u;
        }
        t.call(e.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      t();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          s = r.stack.split(`
`),
          o = i.length - 1,
          a = s.length - 1;
        1 <= o && 0 <= a && i[o] !== s[a];
      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (i[o] !== s[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || i[o] !== s[a])) {
                var l =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  t.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", t.displayName)),
                  l
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    ((hl = !1), (Error.prepareStackTrace = n));
  }
  return (t = t ? t.displayName || t.name : "") ? Wi(t) : "";
}
function P_(t) {
  switch (t.tag) {
    case 5:
      return Wi(t.type);
    case 16:
      return Wi("Lazy");
    case 13:
      return Wi("Suspense");
    case 19:
      return Wi("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((t = pl(t.type, !1)), t);
    case 11:
      return ((t = pl(t.type.render, !1)), t);
    case 1:
      return ((t = pl(t.type, !0)), t);
    default:
      return "";
  }
}
function mu(t) {
  if (t == null) return null;
  if (typeof t == "function") return t.displayName || t.name || null;
  if (typeof t == "string") return t;
  switch (t) {
    case Fr:
      return "Fragment";
    case Ir:
      return "Portal";
    case du:
      return "Profiler";
    case Zc:
      return "StrictMode";
    case hu:
      return "Suspense";
    case pu:
      return "SuspenseList";
  }
  if (typeof t == "object")
    switch (t.$$typeof) {
      case sg:
        return (t.displayName || "Context") + ".Consumer";
      case ig:
        return (t._context.displayName || "Context") + ".Provider";
      case Jc:
        var e = t.render;
        return (
          (t = t.displayName),
          t ||
            ((t = e.displayName || e.name || ""),
            (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
          t
        );
      case ef:
        return (
          (e = t.displayName || null),
          e !== null ? e : mu(t.type) || "Memo"
        );
      case Sn:
        ((e = t._payload), (t = t._init));
        try {
          return mu(t(e));
        } catch {}
    }
  return null;
}
function k_(t) {
  var e = t.type;
  switch (t.tag) {
    case 24:
      return "Cache";
    case 9:
      return (e.displayName || "Context") + ".Consumer";
    case 10:
      return (e._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (t = e.render),
        (t = t.displayName || t.name || ""),
        e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return e;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return mu(e);
    case 8:
      return e === Zc ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof e == "function") return e.displayName || e.name || null;
      if (typeof e == "string") return e;
  }
  return null;
}
function $n(t) {
  switch (typeof t) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return t;
    case "object":
      return t;
    default:
      return "";
  }
}
function ag(t) {
  var e = t.type;
  return (
    (t = t.nodeName) &&
    t.toLowerCase() === "input" &&
    (e === "checkbox" || e === "radio")
  );
}
function E_(t) {
  var e = ag(t) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
    r = "" + t[e];
  if (
    !t.hasOwnProperty(e) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(t, e, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          ((r = "" + o), s.call(this, o));
        },
      }),
      Object.defineProperty(t, e, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          ((t._valueTracker = null), delete t[e]);
        },
      }
    );
  }
}
function no(t) {
  t._valueTracker || (t._valueTracker = E_(t));
}
function lg(t) {
  if (!t) return !1;
  var e = t._valueTracker;
  if (!e) return !0;
  var n = e.getValue(),
    r = "";
  return (
    t && (r = ag(t) ? (t.checked ? "true" : "false") : t.value),
    (t = r),
    t !== n ? (e.setValue(t), !0) : !1
  );
}
function Yo(t) {
  if (((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u"))
    return null;
  try {
    return t.activeElement || t.body;
  } catch {
    return t.body;
  }
}
function gu(t, e) {
  var n = e.checked;
  return ce({}, e, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? t._wrapperState.initialChecked,
  });
}
function Kd(t, e) {
  var n = e.defaultValue == null ? "" : e.defaultValue,
    r = e.checked != null ? e.checked : e.defaultChecked;
  ((n = $n(e.value != null ? e.value : n)),
    (t._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        e.type === "checkbox" || e.type === "radio"
          ? e.checked != null
          : e.value != null,
    }));
}
function ug(t, e) {
  ((e = e.checked), e != null && qc(t, "checked", e, !1));
}
function yu(t, e) {
  ug(t, e);
  var n = $n(e.value),
    r = e.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && t.value === "") || t.value != n) && (t.value = "" + n)
      : t.value !== "" + n && (t.value = "" + n);
  else if (r === "submit" || r === "reset") {
    t.removeAttribute("value");
    return;
  }
  (e.hasOwnProperty("value")
    ? vu(t, e.type, n)
    : e.hasOwnProperty("defaultValue") && vu(t, e.type, $n(e.defaultValue)),
    e.checked == null &&
      e.defaultChecked != null &&
      (t.defaultChecked = !!e.defaultChecked));
}
function Gd(t, e, n) {
  if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
    var r = e.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (e.value !== void 0 && e.value !== null)
      )
    )
      return;
    ((e = "" + t._wrapperState.initialValue),
      n || e === t.value || (t.value = e),
      (t.defaultValue = e));
  }
  ((n = t.name),
    n !== "" && (t.name = ""),
    (t.defaultChecked = !!t._wrapperState.initialChecked),
    n !== "" && (t.name = n));
}
function vu(t, e, n) {
  (e !== "number" || Yo(t.ownerDocument) !== t) &&
    (n == null
      ? (t.defaultValue = "" + t._wrapperState.initialValue)
      : t.defaultValue !== "" + n && (t.defaultValue = "" + n));
}
var $i = Array.isArray;
function ei(t, e, n, r) {
  if (((t = t.options), e)) {
    e = {};
    for (var i = 0; i < n.length; i++) e["$" + n[i]] = !0;
    for (n = 0; n < t.length; n++)
      ((i = e.hasOwnProperty("$" + t[n].value)),
        t[n].selected !== i && (t[n].selected = i),
        i && r && (t[n].defaultSelected = !0));
  } else {
    for (n = "" + $n(n), e = null, i = 0; i < t.length; i++) {
      if (t[i].value === n) {
        ((t[i].selected = !0), r && (t[i].defaultSelected = !0));
        return;
      }
      e !== null || t[i].disabled || (e = t[i]);
    }
    e !== null && (e.selected = !0);
  }
}
function xu(t, e) {
  if (e.dangerouslySetInnerHTML != null) throw Error(R(91));
  return ce({}, e, {
    value: void 0,
    defaultValue: void 0,
    children: "" + t._wrapperState.initialValue,
  });
}
function Yd(t, e) {
  var n = e.value;
  if (n == null) {
    if (((n = e.children), (e = e.defaultValue), n != null)) {
      if (e != null) throw Error(R(92));
      if ($i(n)) {
        if (1 < n.length) throw Error(R(93));
        n = n[0];
      }
      e = n;
    }
    (e == null && (e = ""), (n = e));
  }
  t._wrapperState = { initialValue: $n(n) };
}
function cg(t, e) {
  var n = $n(e.value),
    r = $n(e.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== t.value && (t.value = n),
    e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)),
    r != null && (t.defaultValue = "" + r));
}
function Xd(t) {
  var e = t.textContent;
  e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e);
}
function fg(t) {
  switch (t) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function _u(t, e) {
  return t == null || t === "http://www.w3.org/1999/xhtml"
    ? fg(e)
    : t === "http://www.w3.org/2000/svg" && e === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : t;
}
var ro,
  dg = (function (t) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (e, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return t(e, n, r, i);
          });
        }
      : t;
  })(function (t, e) {
    if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t)
      t.innerHTML = e;
    else {
      for (
        ro = ro || document.createElement("div"),
          ro.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>",
          e = ro.firstChild;
        t.firstChild;
      )
        t.removeChild(t.firstChild);
      for (; e.firstChild; ) t.appendChild(e.firstChild);
    }
  });
function hs(t, e) {
  if (e) {
    var n = t.firstChild;
    if (n && n === t.lastChild && n.nodeType === 3) {
      n.nodeValue = e;
      return;
    }
  }
  t.textContent = e;
}
var Qi = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  j_ = ["Webkit", "ms", "Moz", "O"];
Object.keys(Qi).forEach(function (t) {
  j_.forEach(function (e) {
    ((e = e + t.charAt(0).toUpperCase() + t.substring(1)), (Qi[e] = Qi[t]));
  });
});
function hg(t, e, n) {
  return e == null || typeof e == "boolean" || e === ""
    ? ""
    : n || typeof e != "number" || e === 0 || (Qi.hasOwnProperty(t) && Qi[t])
      ? ("" + e).trim()
      : e + "px";
}
function pg(t, e) {
  t = t.style;
  for (var n in e)
    if (e.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = hg(n, e[n], r);
      (n === "float" && (n = "cssFloat"), r ? t.setProperty(n, i) : (t[n] = i));
    }
}
var N_ = ce(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function wu(t, e) {
  if (e) {
    if (N_[t] && (e.children != null || e.dangerouslySetInnerHTML != null))
      throw Error(R(137, t));
    if (e.dangerouslySetInnerHTML != null) {
      if (e.children != null) throw Error(R(60));
      if (
        typeof e.dangerouslySetInnerHTML != "object" ||
        !("__html" in e.dangerouslySetInnerHTML)
      )
        throw Error(R(61));
    }
    if (e.style != null && typeof e.style != "object") throw Error(R(62));
  }
}
function Su(t, e) {
  if (t.indexOf("-") === -1) return typeof e.is == "string";
  switch (t) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Tu = null;
function tf(t) {
  return (
    (t = t.target || t.srcElement || window),
    t.correspondingUseElement && (t = t.correspondingUseElement),
    t.nodeType === 3 ? t.parentNode : t
  );
}
var Cu = null,
  ti = null,
  ni = null;
function Qd(t) {
  if ((t = Ks(t))) {
    if (typeof Cu != "function") throw Error(R(280));
    var e = t.stateNode;
    e && ((e = Ba(e)), Cu(t.stateNode, t.type, e));
  }
}
function mg(t) {
  ti ? (ni ? ni.push(t) : (ni = [t])) : (ti = t);
}
function gg() {
  if (ti) {
    var t = ti,
      e = ni;
    if (((ni = ti = null), Qd(t), e)) for (t = 0; t < e.length; t++) Qd(e[t]);
  }
}
function yg(t, e) {
  return t(e);
}
function vg() {}
var ml = !1;
function xg(t, e, n) {
  if (ml) return t(e, n);
  ml = !0;
  try {
    return yg(t, e, n);
  } finally {
    ((ml = !1), (ti !== null || ni !== null) && (vg(), gg()));
  }
}
function ps(t, e) {
  var n = t.stateNode;
  if (n === null) return null;
  var r = Ba(n);
  if (r === null) return null;
  n = r[e];
  e: switch (e) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      ((r = !r.disabled) ||
        ((t = t.type),
        (r = !(
          t === "button" ||
          t === "input" ||
          t === "select" ||
          t === "textarea"
        ))),
        (t = !r));
      break e;
    default:
      t = !1;
  }
  if (t) return null;
  if (n && typeof n != "function") throw Error(R(231, e, typeof n));
  return n;
}
var Pu = !1;
if (cn)
  try {
    var Di = {};
    (Object.defineProperty(Di, "passive", {
      get: function () {
        Pu = !0;
      },
    }),
      window.addEventListener("test", Di, Di),
      window.removeEventListener("test", Di, Di));
  } catch {
    Pu = !1;
  }
function R_(t, e, n, r, i, s, o, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var qi = !1,
  Xo = null,
  Qo = !1,
  ku = null,
  M_ = {
    onError: function (t) {
      ((qi = !0), (Xo = t));
    },
  };
function A_(t, e, n, r, i, s, o, a, l) {
  ((qi = !1), (Xo = null), R_.apply(M_, arguments));
}
function D_(t, e, n, r, i, s, o, a, l) {
  if ((A_.apply(this, arguments), qi)) {
    if (qi) {
      var u = Xo;
      ((qi = !1), (Xo = null));
    } else throw Error(R(198));
    Qo || ((Qo = !0), (ku = u));
  }
}
function Mr(t) {
  var e = t,
    n = t;
  if (t.alternate) for (; e.return; ) e = e.return;
  else {
    t = e;
    do ((e = t), e.flags & 4098 && (n = e.return), (t = e.return));
    while (t);
  }
  return e.tag === 3 ? n : null;
}
function _g(t) {
  if (t.tag === 13) {
    var e = t.memoizedState;
    if (
      (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
      e !== null)
    )
      return e.dehydrated;
  }
  return null;
}
function qd(t) {
  if (Mr(t) !== t) throw Error(R(188));
}
function L_(t) {
  var e = t.alternate;
  if (!e) {
    if (((e = Mr(t)), e === null)) throw Error(R(188));
    return e !== t ? null : t;
  }
  for (var n = t, r = e; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return (qd(i), t);
        if (s === r) return (qd(i), e);
        s = s.sibling;
      }
      throw Error(R(188));
    }
    if (n.return !== r.return) ((n = i), (r = s));
    else {
      for (var o = !1, a = i.child; a; ) {
        if (a === n) {
          ((o = !0), (n = i), (r = s));
          break;
        }
        if (a === r) {
          ((o = !0), (r = i), (n = s));
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = s.child; a; ) {
          if (a === n) {
            ((o = !0), (n = s), (r = i));
            break;
          }
          if (a === r) {
            ((o = !0), (r = s), (n = i));
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(R(189));
      }
    }
    if (n.alternate !== r) throw Error(R(190));
  }
  if (n.tag !== 3) throw Error(R(188));
  return n.stateNode.current === n ? t : e;
}
function wg(t) {
  return ((t = L_(t)), t !== null ? Sg(t) : null);
}
function Sg(t) {
  if (t.tag === 5 || t.tag === 6) return t;
  for (t = t.child; t !== null; ) {
    var e = Sg(t);
    if (e !== null) return e;
    t = t.sibling;
  }
  return null;
}
var Tg = ct.unstable_scheduleCallback,
  Zd = ct.unstable_cancelCallback,
  O_ = ct.unstable_shouldYield,
  V_ = ct.unstable_requestPaint,
  me = ct.unstable_now,
  I_ = ct.unstable_getCurrentPriorityLevel,
  nf = ct.unstable_ImmediatePriority,
  Cg = ct.unstable_UserBlockingPriority,
  qo = ct.unstable_NormalPriority,
  F_ = ct.unstable_LowPriority,
  Pg = ct.unstable_IdlePriority,
  Ia = null,
  Yt = null;
function b_(t) {
  if (Yt && typeof Yt.onCommitFiberRoot == "function")
    try {
      Yt.onCommitFiberRoot(Ia, t, void 0, (t.current.flags & 128) === 128);
    } catch {}
}
var Lt = Math.clz32 ? Math.clz32 : U_,
  z_ = Math.log,
  B_ = Math.LN2;
function U_(t) {
  return ((t >>>= 0), t === 0 ? 32 : (31 - ((z_(t) / B_) | 0)) | 0);
}
var io = 64,
  so = 4194304;
function Hi(t) {
  switch (t & -t) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return t & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return t;
  }
}
function Zo(t, e) {
  var n = t.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = t.suspendedLanes,
    s = t.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~i;
    a !== 0 ? (r = Hi(a)) : ((s &= o), s !== 0 && (r = Hi(s)));
  } else ((o = n & ~i), o !== 0 ? (r = Hi(o)) : s !== 0 && (r = Hi(s)));
  if (r === 0) return 0;
  if (
    e !== 0 &&
    e !== r &&
    !(e & i) &&
    ((i = r & -r), (s = e & -e), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return e;
  if ((r & 4 && (r |= n & 16), (e = t.entangledLanes), e !== 0))
    for (t = t.entanglements, e &= r; 0 < e; )
      ((n = 31 - Lt(e)), (i = 1 << n), (r |= t[n]), (e &= ~i));
  return r;
}
function W_(t, e) {
  switch (t) {
    case 1:
    case 2:
    case 4:
      return e + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function $_(t, e) {
  for (
    var n = t.suspendedLanes,
      r = t.pingedLanes,
      i = t.expirationTimes,
      s = t.pendingLanes;
    0 < s;
  ) {
    var o = 31 - Lt(s),
      a = 1 << o,
      l = i[o];
    (l === -1
      ? (!(a & n) || a & r) && (i[o] = W_(a, e))
      : l <= e && (t.expiredLanes |= a),
      (s &= ~a));
  }
}
function Eu(t) {
  return (
    (t = t.pendingLanes & -1073741825),
    t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
  );
}
function kg() {
  var t = io;
  return ((io <<= 1), !(io & 4194240) && (io = 64), t);
}
function gl(t) {
  for (var e = [], n = 0; 31 > n; n++) e.push(t);
  return e;
}
function $s(t, e, n) {
  ((t.pendingLanes |= e),
    e !== 536870912 && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
    (t = t.eventTimes),
    (e = 31 - Lt(e)),
    (t[e] = n));
}
function H_(t, e) {
  var n = t.pendingLanes & ~e;
  ((t.pendingLanes = e),
    (t.suspendedLanes = 0),
    (t.pingedLanes = 0),
    (t.expiredLanes &= e),
    (t.mutableReadLanes &= e),
    (t.entangledLanes &= e),
    (e = t.entanglements));
  var r = t.eventTimes;
  for (t = t.expirationTimes; 0 < n; ) {
    var i = 31 - Lt(n),
      s = 1 << i;
    ((e[i] = 0), (r[i] = -1), (t[i] = -1), (n &= ~s));
  }
}
function rf(t, e) {
  var n = (t.entangledLanes |= e);
  for (t = t.entanglements; n; ) {
    var r = 31 - Lt(n),
      i = 1 << r;
    ((i & e) | (t[r] & e) && (t[r] |= e), (n &= ~i));
  }
}
var K = 0;
function Eg(t) {
  return (
    (t &= -t),
    1 < t ? (4 < t ? (t & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var jg,
  sf,
  Ng,
  Rg,
  Mg,
  ju = !1,
  oo = [],
  Dn = null,
  Ln = null,
  On = null,
  ms = new Map(),
  gs = new Map(),
  Cn = [],
  K_ =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Jd(t, e) {
  switch (t) {
    case "focusin":
    case "focusout":
      Dn = null;
      break;
    case "dragenter":
    case "dragleave":
      Ln = null;
      break;
    case "mouseover":
    case "mouseout":
      On = null;
      break;
    case "pointerover":
    case "pointerout":
      ms.delete(e.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      gs.delete(e.pointerId);
  }
}
function Li(t, e, n, r, i, s) {
  return t === null || t.nativeEvent !== s
    ? ((t = {
        blockedOn: e,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      e !== null && ((e = Ks(e)), e !== null && sf(e)),
      t)
    : ((t.eventSystemFlags |= r),
      (e = t.targetContainers),
      i !== null && e.indexOf(i) === -1 && e.push(i),
      t);
}
function G_(t, e, n, r, i) {
  switch (e) {
    case "focusin":
      return ((Dn = Li(Dn, t, e, n, r, i)), !0);
    case "dragenter":
      return ((Ln = Li(Ln, t, e, n, r, i)), !0);
    case "mouseover":
      return ((On = Li(On, t, e, n, r, i)), !0);
    case "pointerover":
      var s = i.pointerId;
      return (ms.set(s, Li(ms.get(s) || null, t, e, n, r, i)), !0);
    case "gotpointercapture":
      return (
        (s = i.pointerId),
        gs.set(s, Li(gs.get(s) || null, t, e, n, r, i)),
        !0
      );
  }
  return !1;
}
function Ag(t) {
  var e = fr(t.target);
  if (e !== null) {
    var n = Mr(e);
    if (n !== null) {
      if (((e = n.tag), e === 13)) {
        if (((e = _g(n)), e !== null)) {
          ((t.blockedOn = e),
            Mg(t.priority, function () {
              Ng(n);
            }));
          return;
        }
      } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  t.blockedOn = null;
}
function Eo(t) {
  if (t.blockedOn !== null) return !1;
  for (var e = t.targetContainers; 0 < e.length; ) {
    var n = Nu(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
    if (n === null) {
      n = t.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((Tu = r), n.target.dispatchEvent(r), (Tu = null));
    } else return ((e = Ks(n)), e !== null && sf(e), (t.blockedOn = n), !1);
    e.shift();
  }
  return !0;
}
function eh(t, e, n) {
  Eo(t) && n.delete(e);
}
function Y_() {
  ((ju = !1),
    Dn !== null && Eo(Dn) && (Dn = null),
    Ln !== null && Eo(Ln) && (Ln = null),
    On !== null && Eo(On) && (On = null),
    ms.forEach(eh),
    gs.forEach(eh));
}
function Oi(t, e) {
  t.blockedOn === e &&
    ((t.blockedOn = null),
    ju ||
      ((ju = !0),
      ct.unstable_scheduleCallback(ct.unstable_NormalPriority, Y_)));
}
function ys(t) {
  function e(i) {
    return Oi(i, t);
  }
  if (0 < oo.length) {
    Oi(oo[0], t);
    for (var n = 1; n < oo.length; n++) {
      var r = oo[n];
      r.blockedOn === t && (r.blockedOn = null);
    }
  }
  for (
    Dn !== null && Oi(Dn, t),
      Ln !== null && Oi(Ln, t),
      On !== null && Oi(On, t),
      ms.forEach(e),
      gs.forEach(e),
      n = 0;
    n < Cn.length;
    n++
  )
    ((r = Cn[n]), r.blockedOn === t && (r.blockedOn = null));
  for (; 0 < Cn.length && ((n = Cn[0]), n.blockedOn === null); )
    (Ag(n), n.blockedOn === null && Cn.shift());
}
var ri = gn.ReactCurrentBatchConfig,
  Jo = !0;
function X_(t, e, n, r) {
  var i = K,
    s = ri.transition;
  ri.transition = null;
  try {
    ((K = 1), of(t, e, n, r));
  } finally {
    ((K = i), (ri.transition = s));
  }
}
function Q_(t, e, n, r) {
  var i = K,
    s = ri.transition;
  ri.transition = null;
  try {
    ((K = 4), of(t, e, n, r));
  } finally {
    ((K = i), (ri.transition = s));
  }
}
function of(t, e, n, r) {
  if (Jo) {
    var i = Nu(t, e, n, r);
    if (i === null) (kl(t, e, r, ea, n), Jd(t, r));
    else if (G_(i, t, e, n, r)) r.stopPropagation();
    else if ((Jd(t, r), e & 4 && -1 < K_.indexOf(t))) {
      for (; i !== null; ) {
        var s = Ks(i);
        if (
          (s !== null && jg(s),
          (s = Nu(t, e, n, r)),
          s === null && kl(t, e, r, ea, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else kl(t, e, r, null, n);
  }
}
var ea = null;
function Nu(t, e, n, r) {
  if (((ea = null), (t = tf(r)), (t = fr(t)), t !== null))
    if (((e = Mr(t)), e === null)) t = null;
    else if (((n = e.tag), n === 13)) {
      if (((t = _g(e)), t !== null)) return t;
      t = null;
    } else if (n === 3) {
      if (e.stateNode.current.memoizedState.isDehydrated)
        return e.tag === 3 ? e.stateNode.containerInfo : null;
      t = null;
    } else e !== t && (t = null);
  return ((ea = t), null);
}
function Dg(t) {
  switch (t) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (I_()) {
        case nf:
          return 1;
        case Cg:
          return 4;
        case qo:
        case F_:
          return 16;
        case Pg:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kn = null,
  af = null,
  jo = null;
function Lg() {
  if (jo) return jo;
  var t,
    e = af,
    n = e.length,
    r,
    i = "value" in kn ? kn.value : kn.textContent,
    s = i.length;
  for (t = 0; t < n && e[t] === i[t]; t++);
  var o = n - t;
  for (r = 1; r <= o && e[n - r] === i[s - r]; r++);
  return (jo = i.slice(t, 1 < r ? 1 - r : void 0));
}
function No(t) {
  var e = t.keyCode;
  return (
    "charCode" in t
      ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
      : (t = e),
    t === 10 && (t = 13),
    32 <= t || t === 13 ? t : 0
  );
}
function ao() {
  return !0;
}
function th() {
  return !1;
}
function pt(t) {
  function e(n, r, i, s, o) {
    ((this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null));
    for (var a in t)
      t.hasOwnProperty(a) && ((n = t[a]), (this[a] = n ? n(s) : s[a]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? ao
        : th),
      (this.isPropagationStopped = th),
      this
    );
  }
  return (
    ce(e.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = ao));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = ao));
      },
      persist: function () {},
      isPersistent: ao,
    }),
    e
  );
}
var Pi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  lf = pt(Pi),
  Hs = ce({}, Pi, { view: 0, detail: 0 }),
  q_ = pt(Hs),
  yl,
  vl,
  Vi,
  Fa = ce({}, Hs, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: uf,
    button: 0,
    buttons: 0,
    relatedTarget: function (t) {
      return t.relatedTarget === void 0
        ? t.fromElement === t.srcElement
          ? t.toElement
          : t.fromElement
        : t.relatedTarget;
    },
    movementX: function (t) {
      return "movementX" in t
        ? t.movementX
        : (t !== Vi &&
            (Vi && t.type === "mousemove"
              ? ((yl = t.screenX - Vi.screenX), (vl = t.screenY - Vi.screenY))
              : (vl = yl = 0),
            (Vi = t)),
          yl);
    },
    movementY: function (t) {
      return "movementY" in t ? t.movementY : vl;
    },
  }),
  nh = pt(Fa),
  Z_ = ce({}, Fa, { dataTransfer: 0 }),
  J_ = pt(Z_),
  e1 = ce({}, Hs, { relatedTarget: 0 }),
  xl = pt(e1),
  t1 = ce({}, Pi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  n1 = pt(t1),
  r1 = ce({}, Pi, {
    clipboardData: function (t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    },
  }),
  i1 = pt(r1),
  s1 = ce({}, Pi, { data: 0 }),
  rh = pt(s1),
  o1 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  a1 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  l1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function u1(t) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(t) : (t = l1[t]) ? !!e[t] : !1;
}
function uf() {
  return u1;
}
var c1 = ce({}, Hs, {
    key: function (t) {
      if (t.key) {
        var e = o1[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress"
        ? ((t = No(t)), t === 13 ? "Enter" : String.fromCharCode(t))
        : t.type === "keydown" || t.type === "keyup"
          ? a1[t.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: uf,
    charCode: function (t) {
      return t.type === "keypress" ? No(t) : 0;
    },
    keyCode: function (t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function (t) {
      return t.type === "keypress"
        ? No(t)
        : t.type === "keydown" || t.type === "keyup"
          ? t.keyCode
          : 0;
    },
  }),
  f1 = pt(c1),
  d1 = ce({}, Fa, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  ih = pt(d1),
  h1 = ce({}, Hs, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: uf,
  }),
  p1 = pt(h1),
  m1 = ce({}, Pi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  g1 = pt(m1),
  y1 = ce({}, Fa, {
    deltaX: function (t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function (t) {
      return "deltaY" in t
        ? t.deltaY
        : "wheelDeltaY" in t
          ? -t.wheelDeltaY
          : "wheelDelta" in t
            ? -t.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  v1 = pt(y1),
  x1 = [9, 13, 27, 32],
  cf = cn && "CompositionEvent" in window,
  Zi = null;
cn && "documentMode" in document && (Zi = document.documentMode);
var _1 = cn && "TextEvent" in window && !Zi,
  Og = cn && (!cf || (Zi && 8 < Zi && 11 >= Zi)),
  sh = " ",
  oh = !1;
function Vg(t, e) {
  switch (t) {
    case "keyup":
      return x1.indexOf(e.keyCode) !== -1;
    case "keydown":
      return e.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Ig(t) {
  return ((t = t.detail), typeof t == "object" && "data" in t ? t.data : null);
}
var br = !1;
function w1(t, e) {
  switch (t) {
    case "compositionend":
      return Ig(e);
    case "keypress":
      return e.which !== 32 ? null : ((oh = !0), sh);
    case "textInput":
      return ((t = e.data), t === sh && oh ? null : t);
    default:
      return null;
  }
}
function S1(t, e) {
  if (br)
    return t === "compositionend" || (!cf && Vg(t, e))
      ? ((t = Lg()), (jo = af = kn = null), (br = !1), t)
      : null;
  switch (t) {
    case "paste":
      return null;
    case "keypress":
      if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
        if (e.char && 1 < e.char.length) return e.char;
        if (e.which) return String.fromCharCode(e.which);
      }
      return null;
    case "compositionend":
      return Og && e.locale !== "ko" ? null : e.data;
    default:
      return null;
  }
}
var T1 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function ah(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return e === "input" ? !!T1[t.type] : e === "textarea";
}
function Fg(t, e, n, r) {
  (mg(r),
    (e = ta(e, "onChange")),
    0 < e.length &&
      ((n = new lf("onChange", "change", null, n, r)),
      t.push({ event: n, listeners: e })));
}
var Ji = null,
  vs = null;
function C1(t) {
  Xg(t, 0);
}
function ba(t) {
  var e = Ur(t);
  if (lg(e)) return t;
}
function P1(t, e) {
  if (t === "change") return e;
}
var bg = !1;
if (cn) {
  var _l;
  if (cn) {
    var wl = "oninput" in document;
    if (!wl) {
      var lh = document.createElement("div");
      (lh.setAttribute("oninput", "return;"),
        (wl = typeof lh.oninput == "function"));
    }
    _l = wl;
  } else _l = !1;
  bg = _l && (!document.documentMode || 9 < document.documentMode);
}
function uh() {
  Ji && (Ji.detachEvent("onpropertychange", zg), (vs = Ji = null));
}
function zg(t) {
  if (t.propertyName === "value" && ba(vs)) {
    var e = [];
    (Fg(e, vs, t, tf(t)), xg(C1, e));
  }
}
function k1(t, e, n) {
  t === "focusin"
    ? (uh(), (Ji = e), (vs = n), Ji.attachEvent("onpropertychange", zg))
    : t === "focusout" && uh();
}
function E1(t) {
  if (t === "selectionchange" || t === "keyup" || t === "keydown")
    return ba(vs);
}
function j1(t, e) {
  if (t === "click") return ba(e);
}
function N1(t, e) {
  if (t === "input" || t === "change") return ba(e);
}
function R1(t, e) {
  return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
var It = typeof Object.is == "function" ? Object.is : R1;
function xs(t, e) {
  if (It(t, e)) return !0;
  if (typeof t != "object" || t === null || typeof e != "object" || e === null)
    return !1;
  var n = Object.keys(t),
    r = Object.keys(e);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!fu.call(e, i) || !It(t[i], e[i])) return !1;
  }
  return !0;
}
function ch(t) {
  for (; t && t.firstChild; ) t = t.firstChild;
  return t;
}
function fh(t, e) {
  var n = ch(t);
  t = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = t + n.textContent.length), t <= e && r >= e))
        return { node: n, offset: e - t };
      t = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = ch(n);
  }
}
function Bg(t, e) {
  return t && e
    ? t === e
      ? !0
      : t && t.nodeType === 3
        ? !1
        : e && e.nodeType === 3
          ? Bg(t, e.parentNode)
          : "contains" in t
            ? t.contains(e)
            : t.compareDocumentPosition
              ? !!(t.compareDocumentPosition(e) & 16)
              : !1
    : !1;
}
function Ug() {
  for (var t = window, e = Yo(); e instanceof t.HTMLIFrameElement; ) {
    try {
      var n = typeof e.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) t = e.contentWindow;
    else break;
    e = Yo(t.document);
  }
  return e;
}
function ff(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return (
    e &&
    ((e === "input" &&
      (t.type === "text" ||
        t.type === "search" ||
        t.type === "tel" ||
        t.type === "url" ||
        t.type === "password")) ||
      e === "textarea" ||
      t.contentEditable === "true")
  );
}
function M1(t) {
  var e = Ug(),
    n = t.focusedElem,
    r = t.selectionRange;
  if (
    e !== n &&
    n &&
    n.ownerDocument &&
    Bg(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ff(n)) {
      if (
        ((e = r.start),
        (t = r.end),
        t === void 0 && (t = e),
        "selectionStart" in n)
      )
        ((n.selectionStart = e),
          (n.selectionEnd = Math.min(t, n.value.length)));
      else if (
        ((t = ((e = n.ownerDocument || document) && e.defaultView) || window),
        t.getSelection)
      ) {
        t = t.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        ((r = r.end === void 0 ? s : Math.min(r.end, i)),
          !t.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = fh(n, s)));
        var o = fh(n, r);
        i &&
          o &&
          (t.rangeCount !== 1 ||
            t.anchorNode !== i.node ||
            t.anchorOffset !== i.offset ||
            t.focusNode !== o.node ||
            t.focusOffset !== o.offset) &&
          ((e = e.createRange()),
          e.setStart(i.node, i.offset),
          t.removeAllRanges(),
          s > r
            ? (t.addRange(e), t.extend(o.node, o.offset))
            : (e.setEnd(o.node, o.offset), t.addRange(e)));
      }
    }
    for (e = [], t = n; (t = t.parentNode); )
      t.nodeType === 1 &&
        e.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < e.length; n++)
      ((t = e[n]),
        (t.element.scrollLeft = t.left),
        (t.element.scrollTop = t.top));
  }
}
var A1 = cn && "documentMode" in document && 11 >= document.documentMode,
  zr = null,
  Ru = null,
  es = null,
  Mu = !1;
function dh(t, e, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Mu ||
    zr == null ||
    zr !== Yo(r) ||
    ((r = zr),
    "selectionStart" in r && ff(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (es && xs(es, r)) ||
      ((es = r),
      (r = ta(Ru, "onSelect")),
      0 < r.length &&
        ((e = new lf("onSelect", "select", null, e, n)),
        t.push({ event: e, listeners: r }),
        (e.target = zr))));
}
function lo(t, e) {
  var n = {};
  return (
    (n[t.toLowerCase()] = e.toLowerCase()),
    (n["Webkit" + t] = "webkit" + e),
    (n["Moz" + t] = "moz" + e),
    n
  );
}
var Br = {
    animationend: lo("Animation", "AnimationEnd"),
    animationiteration: lo("Animation", "AnimationIteration"),
    animationstart: lo("Animation", "AnimationStart"),
    transitionend: lo("Transition", "TransitionEnd"),
  },
  Sl = {},
  Wg = {};
cn &&
  ((Wg = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Br.animationend.animation,
    delete Br.animationiteration.animation,
    delete Br.animationstart.animation),
  "TransitionEvent" in window || delete Br.transitionend.transition);
function za(t) {
  if (Sl[t]) return Sl[t];
  if (!Br[t]) return t;
  var e = Br[t],
    n;
  for (n in e) if (e.hasOwnProperty(n) && n in Wg) return (Sl[t] = e[n]);
  return t;
}
var $g = za("animationend"),
  Hg = za("animationiteration"),
  Kg = za("animationstart"),
  Gg = za("transitionend"),
  Yg = new Map(),
  hh =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function qn(t, e) {
  (Yg.set(t, e), Rr(e, [t]));
}
for (var Tl = 0; Tl < hh.length; Tl++) {
  var Cl = hh[Tl],
    D1 = Cl.toLowerCase(),
    L1 = Cl[0].toUpperCase() + Cl.slice(1);
  qn(D1, "on" + L1);
}
qn($g, "onAnimationEnd");
qn(Hg, "onAnimationIteration");
qn(Kg, "onAnimationStart");
qn("dblclick", "onDoubleClick");
qn("focusin", "onFocus");
qn("focusout", "onBlur");
qn(Gg, "onTransitionEnd");
ui("onMouseEnter", ["mouseout", "mouseover"]);
ui("onMouseLeave", ["mouseout", "mouseover"]);
ui("onPointerEnter", ["pointerout", "pointerover"]);
ui("onPointerLeave", ["pointerout", "pointerover"]);
Rr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Rr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Rr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Rr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Rr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Rr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Ki =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  O1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ki));
function ph(t, e, n) {
  var r = t.type || "unknown-event";
  ((t.currentTarget = n), D_(r, e, void 0, t), (t.currentTarget = null));
}
function Xg(t, e) {
  e = (e & 4) !== 0;
  for (var n = 0; n < t.length; n++) {
    var r = t[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (e)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== s && i.isPropagationStopped())) break e;
          (ph(i, a, u), (s = l));
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== s && i.isPropagationStopped())
          )
            break e;
          (ph(i, a, u), (s = l));
        }
    }
  }
  if (Qo) throw ((t = ku), (Qo = !1), (ku = null), t);
}
function J(t, e) {
  var n = e[Vu];
  n === void 0 && (n = e[Vu] = new Set());
  var r = t + "__bubble";
  n.has(r) || (Qg(e, t, 2, !1), n.add(r));
}
function Pl(t, e, n) {
  var r = 0;
  (e && (r |= 4), Qg(n, t, r, e));
}
var uo = "_reactListening" + Math.random().toString(36).slice(2);
function _s(t) {
  if (!t[uo]) {
    ((t[uo] = !0),
      rg.forEach(function (n) {
        n !== "selectionchange" && (O1.has(n) || Pl(n, !1, t), Pl(n, !0, t));
      }));
    var e = t.nodeType === 9 ? t : t.ownerDocument;
    e === null || e[uo] || ((e[uo] = !0), Pl("selectionchange", !1, e));
  }
}
function Qg(t, e, n, r) {
  switch (Dg(e)) {
    case 1:
      var i = X_;
      break;
    case 4:
      i = Q_;
      break;
    default:
      i = of;
  }
  ((n = i.bind(null, e, n, t)),
    (i = void 0),
    !Pu ||
      (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? t.addEventListener(e, n, { capture: !0, passive: i })
        : t.addEventListener(e, n, !0)
      : i !== void 0
        ? t.addEventListener(e, n, { passive: i })
        : t.addEventListener(e, n, !1));
}
function kl(t, e, n, r, i) {
  var s = r;
  if (!(e & 1) && !(e & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var l = o.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = o.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = fr(a)), o === null)) return;
          if (((l = o.tag), l === 5 || l === 6)) {
            r = s = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  xg(function () {
    var u = s,
      c = tf(n),
      f = [];
    e: {
      var d = Yg.get(t);
      if (d !== void 0) {
        var h = lf,
          v = t;
        switch (t) {
          case "keypress":
            if (No(n) === 0) break e;
          case "keydown":
          case "keyup":
            h = f1;
            break;
          case "focusin":
            ((v = "focus"), (h = xl));
            break;
          case "focusout":
            ((v = "blur"), (h = xl));
            break;
          case "beforeblur":
          case "afterblur":
            h = xl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = nh;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = J_;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = p1;
            break;
          case $g:
          case Hg:
          case Kg:
            h = n1;
            break;
          case Gg:
            h = g1;
            break;
          case "scroll":
            h = q_;
            break;
          case "wheel":
            h = v1;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = i1;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = ih;
        }
        var m = (e & 4) !== 0,
          _ = !m && t === "scroll",
          y = m ? (d !== null ? d + "Capture" : null) : d;
        m = [];
        for (var p = u, x; p !== null; ) {
          x = p;
          var w = x.stateNode;
          if (
            (x.tag === 5 &&
              w !== null &&
              ((x = w),
              y !== null && ((w = ps(p, y)), w != null && m.push(ws(p, w, x)))),
            _)
          )
            break;
          p = p.return;
        }
        0 < m.length &&
          ((d = new h(d, v, null, n, c)), f.push({ event: d, listeners: m }));
      }
    }
    if (!(e & 7)) {
      e: {
        if (
          ((d = t === "mouseover" || t === "pointerover"),
          (h = t === "mouseout" || t === "pointerout"),
          d &&
            n !== Tu &&
            (v = n.relatedTarget || n.fromElement) &&
            (fr(v) || v[fn]))
        )
          break e;
        if (
          (h || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
                ? d.defaultView || d.parentWindow
                : window),
          h
            ? ((v = n.relatedTarget || n.toElement),
              (h = u),
              (v = v ? fr(v) : null),
              v !== null &&
                ((_ = Mr(v)), v !== _ || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((h = null), (v = u)),
          h !== v)
        ) {
          if (
            ((m = nh),
            (w = "onMouseLeave"),
            (y = "onMouseEnter"),
            (p = "mouse"),
            (t === "pointerout" || t === "pointerover") &&
              ((m = ih),
              (w = "onPointerLeave"),
              (y = "onPointerEnter"),
              (p = "pointer")),
            (_ = h == null ? d : Ur(h)),
            (x = v == null ? d : Ur(v)),
            (d = new m(w, p + "leave", h, n, c)),
            (d.target = _),
            (d.relatedTarget = x),
            (w = null),
            fr(c) === u &&
              ((m = new m(y, p + "enter", v, n, c)),
              (m.target = x),
              (m.relatedTarget = _),
              (w = m)),
            (_ = w),
            h && v)
          )
            t: {
              for (m = h, y = v, p = 0, x = m; x; x = Lr(x)) p++;
              for (x = 0, w = y; w; w = Lr(w)) x++;
              for (; 0 < p - x; ) ((m = Lr(m)), p--);
              for (; 0 < x - p; ) ((y = Lr(y)), x--);
              for (; p--; ) {
                if (m === y || (y !== null && m === y.alternate)) break t;
                ((m = Lr(m)), (y = Lr(y)));
              }
              m = null;
            }
          else m = null;
          (h !== null && mh(f, d, h, m, !1),
            v !== null && _ !== null && mh(f, _, v, m, !0));
        }
      }
      e: {
        if (
          ((d = u ? Ur(u) : window),
          (h = d.nodeName && d.nodeName.toLowerCase()),
          h === "select" || (h === "input" && d.type === "file"))
        )
          var S = P1;
        else if (ah(d))
          if (bg) S = N1;
          else {
            S = E1;
            var k = k1;
          }
        else
          (h = d.nodeName) &&
            h.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (S = j1);
        if (S && (S = S(t, u))) {
          Fg(f, S, n, c);
          break e;
        }
        (k && k(t, d, u),
          t === "focusout" &&
            (k = d._wrapperState) &&
            k.controlled &&
            d.type === "number" &&
            vu(d, "number", d.value));
      }
      switch (((k = u ? Ur(u) : window), t)) {
        case "focusin":
          (ah(k) || k.contentEditable === "true") &&
            ((zr = k), (Ru = u), (es = null));
          break;
        case "focusout":
          es = Ru = zr = null;
          break;
        case "mousedown":
          Mu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((Mu = !1), dh(f, n, c));
          break;
        case "selectionchange":
          if (A1) break;
        case "keydown":
        case "keyup":
          dh(f, n, c);
      }
      var P;
      if (cf)
        e: {
          switch (t) {
            case "compositionstart":
              var C = "onCompositionStart";
              break e;
            case "compositionend":
              C = "onCompositionEnd";
              break e;
            case "compositionupdate":
              C = "onCompositionUpdate";
              break e;
          }
          C = void 0;
        }
      else
        br
          ? Vg(t, n) && (C = "onCompositionEnd")
          : t === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");
      (C &&
        (Og &&
          n.locale !== "ko" &&
          (br || C !== "onCompositionStart"
            ? C === "onCompositionEnd" && br && (P = Lg())
            : ((kn = c),
              (af = "value" in kn ? kn.value : kn.textContent),
              (br = !0))),
        (k = ta(u, C)),
        0 < k.length &&
          ((C = new rh(C, t, null, n, c)),
          f.push({ event: C, listeners: k }),
          P ? (C.data = P) : ((P = Ig(n)), P !== null && (C.data = P)))),
        (P = _1 ? w1(t, n) : S1(t, n)) &&
          ((u = ta(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new rh("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = P))));
    }
    Xg(f, e);
  });
}
function ws(t, e, n) {
  return { instance: t, listener: e, currentTarget: n };
}
function ta(t, e) {
  for (var n = e + "Capture", r = []; t !== null; ) {
    var i = t,
      s = i.stateNode;
    (i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = ps(t, n)),
      s != null && r.unshift(ws(t, s, i)),
      (s = ps(t, e)),
      s != null && r.push(ws(t, s, i))),
      (t = t.return));
  }
  return r;
}
function Lr(t) {
  if (t === null) return null;
  do t = t.return;
  while (t && t.tag !== 5);
  return t || null;
}
function mh(t, e, n, r, i) {
  for (var s = e._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    (a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((l = ps(n, s)), l != null && o.unshift(ws(n, l, a)))
        : i || ((l = ps(n, s)), l != null && o.push(ws(n, l, a)))),
      (n = n.return));
  }
  o.length !== 0 && t.push({ event: e, listeners: o });
}
var V1 = /\r\n?/g,
  I1 = /\u0000|\uFFFD/g;
function gh(t) {
  return (typeof t == "string" ? t : "" + t)
    .replace(
      V1,
      `
`,
    )
    .replace(I1, "");
}
function co(t, e, n) {
  if (((e = gh(e)), gh(t) !== e && n)) throw Error(R(425));
}
function na() {}
var Au = null,
  Du = null;
function Lu(t, e) {
  return (
    t === "textarea" ||
    t === "noscript" ||
    typeof e.children == "string" ||
    typeof e.children == "number" ||
    (typeof e.dangerouslySetInnerHTML == "object" &&
      e.dangerouslySetInnerHTML !== null &&
      e.dangerouslySetInnerHTML.__html != null)
  );
}
var Ou = typeof setTimeout == "function" ? setTimeout : void 0,
  F1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  yh = typeof Promise == "function" ? Promise : void 0,
  b1 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof yh < "u"
        ? function (t) {
            return yh.resolve(null).then(t).catch(z1);
          }
        : Ou;
function z1(t) {
  setTimeout(function () {
    throw t;
  });
}
function El(t, e) {
  var n = e,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((t.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          (t.removeChild(i), ys(e));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  ys(e);
}
function Vn(t) {
  for (; t != null; t = t.nextSibling) {
    var e = t.nodeType;
    if (e === 1 || e === 3) break;
    if (e === 8) {
      if (((e = t.data), e === "$" || e === "$!" || e === "$?")) break;
      if (e === "/$") return null;
    }
  }
  return t;
}
function vh(t) {
  t = t.previousSibling;
  for (var e = 0; t; ) {
    if (t.nodeType === 8) {
      var n = t.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (e === 0) return t;
        e--;
      } else n === "/$" && e++;
    }
    t = t.previousSibling;
  }
  return null;
}
var ki = Math.random().toString(36).slice(2),
  Ht = "__reactFiber$" + ki,
  Ss = "__reactProps$" + ki,
  fn = "__reactContainer$" + ki,
  Vu = "__reactEvents$" + ki,
  B1 = "__reactListeners$" + ki,
  U1 = "__reactHandles$" + ki;
function fr(t) {
  var e = t[Ht];
  if (e) return e;
  for (var n = t.parentNode; n; ) {
    if ((e = n[fn] || n[Ht])) {
      if (
        ((n = e.alternate),
        e.child !== null || (n !== null && n.child !== null))
      )
        for (t = vh(t); t !== null; ) {
          if ((n = t[Ht])) return n;
          t = vh(t);
        }
      return e;
    }
    ((t = n), (n = t.parentNode));
  }
  return null;
}
function Ks(t) {
  return (
    (t = t[Ht] || t[fn]),
    !t || (t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3) ? null : t
  );
}
function Ur(t) {
  if (t.tag === 5 || t.tag === 6) return t.stateNode;
  throw Error(R(33));
}
function Ba(t) {
  return t[Ss] || null;
}
var Iu = [],
  Wr = -1;
function Zn(t) {
  return { current: t };
}
function te(t) {
  0 > Wr || ((t.current = Iu[Wr]), (Iu[Wr] = null), Wr--);
}
function Z(t, e) {
  (Wr++, (Iu[Wr] = t.current), (t.current = e));
}
var Hn = {},
  Ie = Zn(Hn),
  Ge = Zn(!1),
  Pr = Hn;
function ci(t, e) {
  var n = t.type.contextTypes;
  if (!n) return Hn;
  var r = t.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === e)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = e[s];
  return (
    r &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = e),
      (t.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Ye(t) {
  return ((t = t.childContextTypes), t != null);
}
function ra() {
  (te(Ge), te(Ie));
}
function xh(t, e, n) {
  if (Ie.current !== Hn) throw Error(R(168));
  (Z(Ie, e), Z(Ge, n));
}
function qg(t, e, n) {
  var r = t.stateNode;
  if (((e = e.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in e)) throw Error(R(108, k_(t) || "Unknown", i));
  return ce({}, n, r);
}
function ia(t) {
  return (
    (t =
      ((t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext) || Hn),
    (Pr = Ie.current),
    Z(Ie, t),
    Z(Ge, Ge.current),
    !0
  );
}
function _h(t, e, n) {
  var r = t.stateNode;
  if (!r) throw Error(R(169));
  (n
    ? ((t = qg(t, e, Pr)),
      (r.__reactInternalMemoizedMergedChildContext = t),
      te(Ge),
      te(Ie),
      Z(Ie, t))
    : te(Ge),
    Z(Ge, n));
}
var rn = null,
  Ua = !1,
  jl = !1;
function Zg(t) {
  rn === null ? (rn = [t]) : rn.push(t);
}
function W1(t) {
  ((Ua = !0), Zg(t));
}
function Jn() {
  if (!jl && rn !== null) {
    jl = !0;
    var t = 0,
      e = K;
    try {
      var n = rn;
      for (K = 1; t < n.length; t++) {
        var r = n[t];
        do r = r(!0);
        while (r !== null);
      }
      ((rn = null), (Ua = !1));
    } catch (i) {
      throw (rn !== null && (rn = rn.slice(t + 1)), Tg(nf, Jn), i);
    } finally {
      ((K = e), (jl = !1));
    }
  }
  return null;
}
var $r = [],
  Hr = 0,
  sa = null,
  oa = 0,
  gt = [],
  yt = 0,
  kr = null,
  an = 1,
  ln = "";
function ar(t, e) {
  (($r[Hr++] = oa), ($r[Hr++] = sa), (sa = t), (oa = e));
}
function Jg(t, e, n) {
  ((gt[yt++] = an), (gt[yt++] = ln), (gt[yt++] = kr), (kr = t));
  var r = an;
  t = ln;
  var i = 32 - Lt(r) - 1;
  ((r &= ~(1 << i)), (n += 1));
  var s = 32 - Lt(e) + i;
  if (30 < s) {
    var o = i - (i % 5);
    ((s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (an = (1 << (32 - Lt(e) + i)) | (n << i) | r),
      (ln = s + t));
  } else ((an = (1 << s) | (n << i) | r), (ln = t));
}
function df(t) {
  t.return !== null && (ar(t, 1), Jg(t, 1, 0));
}
function hf(t) {
  for (; t === sa; )
    ((sa = $r[--Hr]), ($r[Hr] = null), (oa = $r[--Hr]), ($r[Hr] = null));
  for (; t === kr; )
    ((kr = gt[--yt]),
      (gt[yt] = null),
      (ln = gt[--yt]),
      (gt[yt] = null),
      (an = gt[--yt]),
      (gt[yt] = null));
}
var at = null,
  it = null,
  ne = !1,
  Dt = null;
function ey(t, e) {
  var n = vt(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = e),
    (n.return = t),
    (e = t.deletions),
    e === null ? ((t.deletions = [n]), (t.flags |= 16)) : e.push(n));
}
function wh(t, e) {
  switch (t.tag) {
    case 5:
      var n = t.type;
      return (
        (e =
          e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase()
            ? null
            : e),
        e !== null
          ? ((t.stateNode = e), (at = t), (it = Vn(e.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (e = t.pendingProps === "" || e.nodeType !== 3 ? null : e),
        e !== null ? ((t.stateNode = e), (at = t), (it = null), !0) : !1
      );
    case 13:
      return (
        (e = e.nodeType !== 8 ? null : e),
        e !== null
          ? ((n = kr !== null ? { id: an, overflow: ln } : null),
            (t.memoizedState = {
              dehydrated: e,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = vt(18, null, null, 0)),
            (n.stateNode = e),
            (n.return = t),
            (t.child = n),
            (at = t),
            (it = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Fu(t) {
  return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
}
function bu(t) {
  if (ne) {
    var e = it;
    if (e) {
      var n = e;
      if (!wh(t, e)) {
        if (Fu(t)) throw Error(R(418));
        e = Vn(n.nextSibling);
        var r = at;
        e && wh(t, e)
          ? ey(r, n)
          : ((t.flags = (t.flags & -4097) | 2), (ne = !1), (at = t));
      }
    } else {
      if (Fu(t)) throw Error(R(418));
      ((t.flags = (t.flags & -4097) | 2), (ne = !1), (at = t));
    }
  }
}
function Sh(t) {
  for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
    t = t.return;
  at = t;
}
function fo(t) {
  if (t !== at) return !1;
  if (!ne) return (Sh(t), (ne = !0), !1);
  var e;
  if (
    ((e = t.tag !== 3) &&
      !(e = t.tag !== 5) &&
      ((e = t.type),
      (e = e !== "head" && e !== "body" && !Lu(t.type, t.memoizedProps))),
    e && (e = it))
  ) {
    if (Fu(t)) throw (ty(), Error(R(418)));
    for (; e; ) (ey(t, e), (e = Vn(e.nextSibling)));
  }
  if ((Sh(t), t.tag === 13)) {
    if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
      throw Error(R(317));
    e: {
      for (t = t.nextSibling, e = 0; t; ) {
        if (t.nodeType === 8) {
          var n = t.data;
          if (n === "/$") {
            if (e === 0) {
              it = Vn(t.nextSibling);
              break e;
            }
            e--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || e++;
        }
        t = t.nextSibling;
      }
      it = null;
    }
  } else it = at ? Vn(t.stateNode.nextSibling) : null;
  return !0;
}
function ty() {
  for (var t = it; t; ) t = Vn(t.nextSibling);
}
function fi() {
  ((it = at = null), (ne = !1));
}
function pf(t) {
  Dt === null ? (Dt = [t]) : Dt.push(t);
}
var $1 = gn.ReactCurrentBatchConfig;
function Ii(t, e, n) {
  if (
    ((t = n.ref), t !== null && typeof t != "function" && typeof t != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(R(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(R(147, t));
      var i = r,
        s = "" + t;
      return e !== null &&
        e.ref !== null &&
        typeof e.ref == "function" &&
        e.ref._stringRef === s
        ? e.ref
        : ((e = function (o) {
            var a = i.refs;
            o === null ? delete a[s] : (a[s] = o);
          }),
          (e._stringRef = s),
          e);
    }
    if (typeof t != "string") throw Error(R(284));
    if (!n._owner) throw Error(R(290, t));
  }
  return t;
}
function ho(t, e) {
  throw (
    (t = Object.prototype.toString.call(e)),
    Error(
      R(
        31,
        t === "[object Object]"
          ? "object with keys {" + Object.keys(e).join(", ") + "}"
          : t,
      ),
    )
  );
}
function Th(t) {
  var e = t._init;
  return e(t._payload);
}
function ny(t) {
  function e(y, p) {
    if (t) {
      var x = y.deletions;
      x === null ? ((y.deletions = [p]), (y.flags |= 16)) : x.push(p);
    }
  }
  function n(y, p) {
    if (!t) return null;
    for (; p !== null; ) (e(y, p), (p = p.sibling));
    return null;
  }
  function r(y, p) {
    for (y = new Map(); p !== null; )
      (p.key !== null ? y.set(p.key, p) : y.set(p.index, p), (p = p.sibling));
    return y;
  }
  function i(y, p) {
    return ((y = zn(y, p)), (y.index = 0), (y.sibling = null), y);
  }
  function s(y, p, x) {
    return (
      (y.index = x),
      t
        ? ((x = y.alternate),
          x !== null
            ? ((x = x.index), x < p ? ((y.flags |= 2), p) : x)
            : ((y.flags |= 2), p))
        : ((y.flags |= 1048576), p)
    );
  }
  function o(y) {
    return (t && y.alternate === null && (y.flags |= 2), y);
  }
  function a(y, p, x, w) {
    return p === null || p.tag !== 6
      ? ((p = Ol(x, y.mode, w)), (p.return = y), p)
      : ((p = i(p, x)), (p.return = y), p);
  }
  function l(y, p, x, w) {
    var S = x.type;
    return S === Fr
      ? c(y, p, x.props.children, w, x.key)
      : p !== null &&
          (p.elementType === S ||
            (typeof S == "object" &&
              S !== null &&
              S.$$typeof === Sn &&
              Th(S) === p.type))
        ? ((w = i(p, x.props)), (w.ref = Ii(y, p, x)), (w.return = y), w)
        : ((w = Vo(x.type, x.key, x.props, null, y.mode, w)),
          (w.ref = Ii(y, p, x)),
          (w.return = y),
          w);
  }
  function u(y, p, x, w) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== x.containerInfo ||
      p.stateNode.implementation !== x.implementation
      ? ((p = Vl(x, y.mode, w)), (p.return = y), p)
      : ((p = i(p, x.children || [])), (p.return = y), p);
  }
  function c(y, p, x, w, S) {
    return p === null || p.tag !== 7
      ? ((p = vr(x, y.mode, w, S)), (p.return = y), p)
      : ((p = i(p, x)), (p.return = y), p);
  }
  function f(y, p, x) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return ((p = Ol("" + p, y.mode, x)), (p.return = y), p);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case to:
          return (
            (x = Vo(p.type, p.key, p.props, null, y.mode, x)),
            (x.ref = Ii(y, null, p)),
            (x.return = y),
            x
          );
        case Ir:
          return ((p = Vl(p, y.mode, x)), (p.return = y), p);
        case Sn:
          var w = p._init;
          return f(y, w(p._payload), x);
      }
      if ($i(p) || Ai(p))
        return ((p = vr(p, y.mode, x, null)), (p.return = y), p);
      ho(y, p);
    }
    return null;
  }
  function d(y, p, x, w) {
    var S = p !== null ? p.key : null;
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return S !== null ? null : a(y, p, "" + x, w);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case to:
          return x.key === S ? l(y, p, x, w) : null;
        case Ir:
          return x.key === S ? u(y, p, x, w) : null;
        case Sn:
          return ((S = x._init), d(y, p, S(x._payload), w));
      }
      if ($i(x) || Ai(x)) return S !== null ? null : c(y, p, x, w, null);
      ho(y, x);
    }
    return null;
  }
  function h(y, p, x, w, S) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return ((y = y.get(x) || null), a(p, y, "" + w, S));
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case to:
          return (
            (y = y.get(w.key === null ? x : w.key) || null),
            l(p, y, w, S)
          );
        case Ir:
          return (
            (y = y.get(w.key === null ? x : w.key) || null),
            u(p, y, w, S)
          );
        case Sn:
          var k = w._init;
          return h(y, p, x, k(w._payload), S);
      }
      if ($i(w) || Ai(w)) return ((y = y.get(x) || null), c(p, y, w, S, null));
      ho(p, w);
    }
    return null;
  }
  function v(y, p, x, w) {
    for (
      var S = null, k = null, P = p, C = (p = 0), E = null;
      P !== null && C < x.length;
      C++
    ) {
      P.index > C ? ((E = P), (P = null)) : (E = P.sibling);
      var j = d(y, P, x[C], w);
      if (j === null) {
        P === null && (P = E);
        break;
      }
      (t && P && j.alternate === null && e(y, P),
        (p = s(j, p, C)),
        k === null ? (S = j) : (k.sibling = j),
        (k = j),
        (P = E));
    }
    if (C === x.length) return (n(y, P), ne && ar(y, C), S);
    if (P === null) {
      for (; C < x.length; C++)
        ((P = f(y, x[C], w)),
          P !== null &&
            ((p = s(P, p, C)),
            k === null ? (S = P) : (k.sibling = P),
            (k = P)));
      return (ne && ar(y, C), S);
    }
    for (P = r(y, P); C < x.length; C++)
      ((E = h(P, y, C, x[C], w)),
        E !== null &&
          (t && E.alternate !== null && P.delete(E.key === null ? C : E.key),
          (p = s(E, p, C)),
          k === null ? (S = E) : (k.sibling = E),
          (k = E)));
    return (
      t &&
        P.forEach(function (L) {
          return e(y, L);
        }),
      ne && ar(y, C),
      S
    );
  }
  function m(y, p, x, w) {
    var S = Ai(x);
    if (typeof S != "function") throw Error(R(150));
    if (((x = S.call(x)), x == null)) throw Error(R(151));
    for (
      var k = (S = null), P = p, C = (p = 0), E = null, j = x.next();
      P !== null && !j.done;
      C++, j = x.next()
    ) {
      P.index > C ? ((E = P), (P = null)) : (E = P.sibling);
      var L = d(y, P, j.value, w);
      if (L === null) {
        P === null && (P = E);
        break;
      }
      (t && P && L.alternate === null && e(y, P),
        (p = s(L, p, C)),
        k === null ? (S = L) : (k.sibling = L),
        (k = L),
        (P = E));
    }
    if (j.done) return (n(y, P), ne && ar(y, C), S);
    if (P === null) {
      for (; !j.done; C++, j = x.next())
        ((j = f(y, j.value, w)),
          j !== null &&
            ((p = s(j, p, C)),
            k === null ? (S = j) : (k.sibling = j),
            (k = j)));
      return (ne && ar(y, C), S);
    }
    for (P = r(y, P); !j.done; C++, j = x.next())
      ((j = h(P, y, C, j.value, w)),
        j !== null &&
          (t && j.alternate !== null && P.delete(j.key === null ? C : j.key),
          (p = s(j, p, C)),
          k === null ? (S = j) : (k.sibling = j),
          (k = j)));
    return (
      t &&
        P.forEach(function (I) {
          return e(y, I);
        }),
      ne && ar(y, C),
      S
    );
  }
  function _(y, p, x, w) {
    if (
      (typeof x == "object" &&
        x !== null &&
        x.type === Fr &&
        x.key === null &&
        (x = x.props.children),
      typeof x == "object" && x !== null)
    ) {
      switch (x.$$typeof) {
        case to:
          e: {
            for (var S = x.key, k = p; k !== null; ) {
              if (k.key === S) {
                if (((S = x.type), S === Fr)) {
                  if (k.tag === 7) {
                    (n(y, k.sibling),
                      (p = i(k, x.props.children)),
                      (p.return = y),
                      (y = p));
                    break e;
                  }
                } else if (
                  k.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === Sn &&
                    Th(S) === k.type)
                ) {
                  (n(y, k.sibling),
                    (p = i(k, x.props)),
                    (p.ref = Ii(y, k, x)),
                    (p.return = y),
                    (y = p));
                  break e;
                }
                n(y, k);
                break;
              } else e(y, k);
              k = k.sibling;
            }
            x.type === Fr
              ? ((p = vr(x.props.children, y.mode, w, x.key)),
                (p.return = y),
                (y = p))
              : ((w = Vo(x.type, x.key, x.props, null, y.mode, w)),
                (w.ref = Ii(y, p, x)),
                (w.return = y),
                (y = w));
          }
          return o(y);
        case Ir:
          e: {
            for (k = x.key; p !== null; ) {
              if (p.key === k)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === x.containerInfo &&
                  p.stateNode.implementation === x.implementation
                ) {
                  (n(y, p.sibling),
                    (p = i(p, x.children || [])),
                    (p.return = y),
                    (y = p));
                  break e;
                } else {
                  n(y, p);
                  break;
                }
              else e(y, p);
              p = p.sibling;
            }
            ((p = Vl(x, y.mode, w)), (p.return = y), (y = p));
          }
          return o(y);
        case Sn:
          return ((k = x._init), _(y, p, k(x._payload), w));
      }
      if ($i(x)) return v(y, p, x, w);
      if (Ai(x)) return m(y, p, x, w);
      ho(y, x);
    }
    return (typeof x == "string" && x !== "") || typeof x == "number"
      ? ((x = "" + x),
        p !== null && p.tag === 6
          ? (n(y, p.sibling), (p = i(p, x)), (p.return = y), (y = p))
          : (n(y, p), (p = Ol(x, y.mode, w)), (p.return = y), (y = p)),
        o(y))
      : n(y, p);
  }
  return _;
}
var di = ny(!0),
  ry = ny(!1),
  aa = Zn(null),
  la = null,
  Kr = null,
  mf = null;
function gf() {
  mf = Kr = la = null;
}
function yf(t) {
  var e = aa.current;
  (te(aa), (t._currentValue = e));
}
function zu(t, e, n) {
  for (; t !== null; ) {
    var r = t.alternate;
    if (
      ((t.childLanes & e) !== e
        ? ((t.childLanes |= e), r !== null && (r.childLanes |= e))
        : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e),
      t === n)
    )
      break;
    t = t.return;
  }
}
function ii(t, e) {
  ((la = t),
    (mf = Kr = null),
    (t = t.dependencies),
    t !== null &&
      t.firstContext !== null &&
      (t.lanes & e && (Ke = !0), (t.firstContext = null)));
}
function Ct(t) {
  var e = t._currentValue;
  if (mf !== t)
    if (((t = { context: t, memoizedValue: e, next: null }), Kr === null)) {
      if (la === null) throw Error(R(308));
      ((Kr = t), (la.dependencies = { lanes: 0, firstContext: t }));
    } else Kr = Kr.next = t;
  return e;
}
var dr = null;
function vf(t) {
  dr === null ? (dr = [t]) : dr.push(t);
}
function iy(t, e, n, r) {
  var i = e.interleaved;
  return (
    i === null ? ((n.next = n), vf(e)) : ((n.next = i.next), (i.next = n)),
    (e.interleaved = n),
    dn(t, r)
  );
}
function dn(t, e) {
  t.lanes |= e;
  var n = t.alternate;
  for (n !== null && (n.lanes |= e), n = t, t = t.return; t !== null; )
    ((t.childLanes |= e),
      (n = t.alternate),
      n !== null && (n.childLanes |= e),
      (n = t),
      (t = t.return));
  return n.tag === 3 ? n.stateNode : null;
}
var Tn = !1;
function xf(t) {
  t.updateQueue = {
    baseState: t.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function sy(t, e) {
  ((t = t.updateQueue),
    e.updateQueue === t &&
      (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        effects: t.effects,
      }));
}
function un(t, e) {
  return {
    eventTime: t,
    lane: e,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function In(t, e, n) {
  var r = t.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), $ & 2)) {
    var i = r.pending;
    return (
      i === null ? (e.next = e) : ((e.next = i.next), (i.next = e)),
      (r.pending = e),
      dn(t, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((e.next = e), vf(r)) : ((e.next = i.next), (i.next = e)),
    (r.interleaved = e),
    dn(t, n)
  );
}
function Ro(t, e, n) {
  if (
    ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194240) !== 0))
  ) {
    var r = e.lanes;
    ((r &= t.pendingLanes), (n |= r), (e.lanes = n), rf(t, n));
  }
}
function Ch(t, e) {
  var n = t.updateQueue,
    r = t.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (s === null ? (i = s = o) : (s = s.next = o), (n = n.next));
      } while (n !== null);
      s === null ? (i = s = e) : (s = s.next = e);
    } else i = s = e;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (t.updateQueue = n));
    return;
  }
  ((t = n.lastBaseUpdate),
    t === null ? (n.firstBaseUpdate = e) : (t.next = e),
    (n.lastBaseUpdate = e));
}
function ua(t, e, n, r) {
  var i = t.updateQueue;
  Tn = !1;
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      u = l.next;
    ((l.next = null), o === null ? (s = u) : (o.next = u), (o = l));
    var c = t.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== o &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (s !== null) {
    var f = i.baseState;
    ((o = 0), (c = u = l = null), (a = s));
    do {
      var d = a.lane,
        h = a.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: h,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var v = t,
            m = a;
          switch (((d = e), (h = n), m.tag)) {
            case 1:
              if (((v = m.payload), typeof v == "function")) {
                f = v.call(h, f, d);
                break e;
              }
              f = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = m.payload),
                (d = typeof v == "function" ? v.call(h, f, d) : v),
                d == null)
              )
                break e;
              f = ce({}, f, d);
              break e;
            case 2:
              Tn = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((t.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [a]) : d.push(a));
      } else
        ((h = {
          eventTime: h,
          lane: d,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = h), (l = f)) : (c = c.next = h),
          (o |= d));
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        ((d = a),
          (a = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null));
      }
    } while (!0);
    if (
      (c === null && (l = f),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (e = i.shared.interleaved),
      e !== null)
    ) {
      i = e;
      do ((o |= i.lane), (i = i.next));
      while (i !== e);
    } else s === null && (i.shared.lanes = 0);
    ((jr |= o), (t.lanes = o), (t.memoizedState = f));
  }
}
function Ph(t, e, n) {
  if (((t = e.effects), (e.effects = null), t !== null))
    for (e = 0; e < t.length; e++) {
      var r = t[e],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(R(191, i));
        i.call(r);
      }
    }
}
var Gs = {},
  Xt = Zn(Gs),
  Ts = Zn(Gs),
  Cs = Zn(Gs);
function hr(t) {
  if (t === Gs) throw Error(R(174));
  return t;
}
function _f(t, e) {
  switch ((Z(Cs, e), Z(Ts, t), Z(Xt, Gs), (t = e.nodeType), t)) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : _u(null, "");
      break;
    default:
      ((t = t === 8 ? e.parentNode : e),
        (e = t.namespaceURI || null),
        (t = t.tagName),
        (e = _u(e, t)));
  }
  (te(Xt), Z(Xt, e));
}
function hi() {
  (te(Xt), te(Ts), te(Cs));
}
function oy(t) {
  hr(Cs.current);
  var e = hr(Xt.current),
    n = _u(e, t.type);
  e !== n && (Z(Ts, t), Z(Xt, n));
}
function wf(t) {
  Ts.current === t && (te(Xt), te(Ts));
}
var se = Zn(0);
function ca(t) {
  for (var e = t; e !== null; ) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return e;
    } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
      if (e.flags & 128) return e;
    } else if (e.child !== null) {
      ((e.child.return = e), (e = e.child));
      continue;
    }
    if (e === t) break;
    for (; e.sibling === null; ) {
      if (e.return === null || e.return === t) return null;
      e = e.return;
    }
    ((e.sibling.return = e.return), (e = e.sibling));
  }
  return null;
}
var Nl = [];
function Sf() {
  for (var t = 0; t < Nl.length; t++)
    Nl[t]._workInProgressVersionPrimary = null;
  Nl.length = 0;
}
var Mo = gn.ReactCurrentDispatcher,
  Rl = gn.ReactCurrentBatchConfig,
  Er = 0,
  le = null,
  _e = null,
  Se = null,
  fa = !1,
  ts = !1,
  Ps = 0,
  H1 = 0;
function Ae() {
  throw Error(R(321));
}
function Tf(t, e) {
  if (e === null) return !1;
  for (var n = 0; n < e.length && n < t.length; n++)
    if (!It(t[n], e[n])) return !1;
  return !0;
}
function Cf(t, e, n, r, i, s) {
  if (
    ((Er = s),
    (le = e),
    (e.memoizedState = null),
    (e.updateQueue = null),
    (e.lanes = 0),
    (Mo.current = t === null || t.memoizedState === null ? X1 : Q1),
    (t = n(r, i)),
    ts)
  ) {
    s = 0;
    do {
      if (((ts = !1), (Ps = 0), 25 <= s)) throw Error(R(301));
      ((s += 1),
        (Se = _e = null),
        (e.updateQueue = null),
        (Mo.current = q1),
        (t = n(r, i)));
    } while (ts);
  }
  if (
    ((Mo.current = da),
    (e = _e !== null && _e.next !== null),
    (Er = 0),
    (Se = _e = le = null),
    (fa = !1),
    e)
  )
    throw Error(R(300));
  return t;
}
function Pf() {
  var t = Ps !== 0;
  return ((Ps = 0), t);
}
function Bt() {
  var t = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (Se === null ? (le.memoizedState = Se = t) : (Se = Se.next = t), Se);
}
function Pt() {
  if (_e === null) {
    var t = le.alternate;
    t = t !== null ? t.memoizedState : null;
  } else t = _e.next;
  var e = Se === null ? le.memoizedState : Se.next;
  if (e !== null) ((Se = e), (_e = t));
  else {
    if (t === null) throw Error(R(310));
    ((_e = t),
      (t = {
        memoizedState: _e.memoizedState,
        baseState: _e.baseState,
        baseQueue: _e.baseQueue,
        queue: _e.queue,
        next: null,
      }),
      Se === null ? (le.memoizedState = Se = t) : (Se = Se.next = t));
  }
  return Se;
}
function ks(t, e) {
  return typeof e == "function" ? e(t) : e;
}
function Ml(t) {
  var e = Pt(),
    n = e.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = t;
  var r = _e,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      ((i.next = s.next), (s.next = o));
    }
    ((r.baseQueue = i = s), (n.pending = null));
  }
  if (i !== null) {
    ((s = i.next), (r = r.baseState));
    var a = (o = null),
      l = null,
      u = s;
    do {
      var c = u.lane;
      if ((Er & c) === c)
        (l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : t(r, u.action)));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        (l === null ? ((a = l = f), (o = r)) : (l = l.next = f),
          (le.lanes |= c),
          (jr |= c));
      }
      u = u.next;
    } while (u !== null && u !== s);
    (l === null ? (o = r) : (l.next = a),
      It(r, e.memoizedState) || (Ke = !0),
      (e.memoizedState = r),
      (e.baseState = o),
      (e.baseQueue = l),
      (n.lastRenderedState = r));
  }
  if (((t = n.interleaved), t !== null)) {
    i = t;
    do ((s = i.lane), (le.lanes |= s), (jr |= s), (i = i.next));
    while (i !== t);
  } else i === null && (n.lanes = 0);
  return [e.memoizedState, n.dispatch];
}
function Al(t) {
  var e = Pt(),
    n = e.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = t;
  var r = n.dispatch,
    i = n.pending,
    s = e.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do ((s = t(s, o.action)), (o = o.next));
    while (o !== i);
    (It(s, e.memoizedState) || (Ke = !0),
      (e.memoizedState = s),
      e.baseQueue === null && (e.baseState = s),
      (n.lastRenderedState = s));
  }
  return [s, r];
}
function ay() {}
function ly(t, e) {
  var n = le,
    r = Pt(),
    i = e(),
    s = !It(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (Ke = !0)),
    (r = r.queue),
    kf(fy.bind(null, n, r, t), [t]),
    r.getSnapshot !== e || s || (Se !== null && Se.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Es(9, cy.bind(null, n, r, i, e), void 0, null),
      Te === null)
    )
      throw Error(R(349));
    Er & 30 || uy(n, e, i);
  }
  return i;
}
function uy(t, e, n) {
  ((t.flags |= 16384),
    (t = { getSnapshot: e, value: n }),
    (e = le.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (le.updateQueue = e),
        (e.stores = [t]))
      : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t)));
}
function cy(t, e, n, r) {
  ((e.value = n), (e.getSnapshot = r), dy(e) && hy(t));
}
function fy(t, e, n) {
  return n(function () {
    dy(e) && hy(t);
  });
}
function dy(t) {
  var e = t.getSnapshot;
  t = t.value;
  try {
    var n = e();
    return !It(t, n);
  } catch {
    return !0;
  }
}
function hy(t) {
  var e = dn(t, 1);
  e !== null && Ot(e, t, 1, -1);
}
function kh(t) {
  var e = Bt();
  return (
    typeof t == "function" && (t = t()),
    (e.memoizedState = e.baseState = t),
    (t = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ks,
      lastRenderedState: t,
    }),
    (e.queue = t),
    (t = t.dispatch = Y1.bind(null, le, t)),
    [e.memoizedState, t]
  );
}
function Es(t, e, n, r) {
  return (
    (t = { tag: t, create: e, destroy: n, deps: r, next: null }),
    (e = le.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (le.updateQueue = e),
        (e.lastEffect = t.next = t))
      : ((n = e.lastEffect),
        n === null
          ? (e.lastEffect = t.next = t)
          : ((r = n.next), (n.next = t), (t.next = r), (e.lastEffect = t))),
    t
  );
}
function py() {
  return Pt().memoizedState;
}
function Ao(t, e, n, r) {
  var i = Bt();
  ((le.flags |= t),
    (i.memoizedState = Es(1 | e, n, void 0, r === void 0 ? null : r)));
}
function Wa(t, e, n, r) {
  var i = Pt();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (_e !== null) {
    var o = _e.memoizedState;
    if (((s = o.destroy), r !== null && Tf(r, o.deps))) {
      i.memoizedState = Es(e, n, s, r);
      return;
    }
  }
  ((le.flags |= t), (i.memoizedState = Es(1 | e, n, s, r)));
}
function Eh(t, e) {
  return Ao(8390656, 8, t, e);
}
function kf(t, e) {
  return Wa(2048, 8, t, e);
}
function my(t, e) {
  return Wa(4, 2, t, e);
}
function gy(t, e) {
  return Wa(4, 4, t, e);
}
function yy(t, e) {
  if (typeof e == "function")
    return (
      (t = t()),
      e(t),
      function () {
        e(null);
      }
    );
  if (e != null)
    return (
      (t = t()),
      (e.current = t),
      function () {
        e.current = null;
      }
    );
}
function vy(t, e, n) {
  return (
    (n = n != null ? n.concat([t]) : null),
    Wa(4, 4, yy.bind(null, e, t), n)
  );
}
function Ef() {}
function xy(t, e) {
  var n = Pt();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && Tf(e, r[1])
    ? r[0]
    : ((n.memoizedState = [t, e]), t);
}
function _y(t, e) {
  var n = Pt();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && Tf(e, r[1])
    ? r[0]
    : ((t = t()), (n.memoizedState = [t, e]), t);
}
function wy(t, e, n) {
  return Er & 21
    ? (It(n, e) || ((n = kg()), (le.lanes |= n), (jr |= n), (t.baseState = !0)),
      e)
    : (t.baseState && ((t.baseState = !1), (Ke = !0)), (t.memoizedState = n));
}
function K1(t, e) {
  var n = K;
  ((K = n !== 0 && 4 > n ? n : 4), t(!0));
  var r = Rl.transition;
  Rl.transition = {};
  try {
    (t(!1), e());
  } finally {
    ((K = n), (Rl.transition = r));
  }
}
function Sy() {
  return Pt().memoizedState;
}
function G1(t, e, n) {
  var r = bn(t);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Ty(t))
  )
    Cy(e, n);
  else if (((n = iy(t, e, n, r)), n !== null)) {
    var i = Be();
    (Ot(n, t, r, i), Py(n, e, r));
  }
}
function Y1(t, e, n) {
  var r = bn(t),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ty(t)) Cy(e, i);
  else {
    var s = t.alternate;
    if (
      t.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = e.lastRenderedReducer), s !== null)
    )
      try {
        var o = e.lastRenderedState,
          a = s(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), It(a, o))) {
          var l = e.interleaved;
          (l === null
            ? ((i.next = i), vf(e))
            : ((i.next = l.next), (l.next = i)),
            (e.interleaved = i));
          return;
        }
      } catch {
      } finally {
      }
    ((n = iy(t, e, i, r)),
      n !== null && ((i = Be()), Ot(n, t, r, i), Py(n, e, r)));
  }
}
function Ty(t) {
  var e = t.alternate;
  return t === le || (e !== null && e === le);
}
function Cy(t, e) {
  ts = fa = !0;
  var n = t.pending;
  (n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
    (t.pending = e));
}
function Py(t, e, n) {
  if (n & 4194240) {
    var r = e.lanes;
    ((r &= t.pendingLanes), (n |= r), (e.lanes = n), rf(t, n));
  }
}
var da = {
    readContext: Ct,
    useCallback: Ae,
    useContext: Ae,
    useEffect: Ae,
    useImperativeHandle: Ae,
    useInsertionEffect: Ae,
    useLayoutEffect: Ae,
    useMemo: Ae,
    useReducer: Ae,
    useRef: Ae,
    useState: Ae,
    useDebugValue: Ae,
    useDeferredValue: Ae,
    useTransition: Ae,
    useMutableSource: Ae,
    useSyncExternalStore: Ae,
    useId: Ae,
    unstable_isNewReconciler: !1,
  },
  X1 = {
    readContext: Ct,
    useCallback: function (t, e) {
      return ((Bt().memoizedState = [t, e === void 0 ? null : e]), t);
    },
    useContext: Ct,
    useEffect: Eh,
    useImperativeHandle: function (t, e, n) {
      return (
        (n = n != null ? n.concat([t]) : null),
        Ao(4194308, 4, yy.bind(null, e, t), n)
      );
    },
    useLayoutEffect: function (t, e) {
      return Ao(4194308, 4, t, e);
    },
    useInsertionEffect: function (t, e) {
      return Ao(4, 2, t, e);
    },
    useMemo: function (t, e) {
      var n = Bt();
      return (
        (e = e === void 0 ? null : e),
        (t = t()),
        (n.memoizedState = [t, e]),
        t
      );
    },
    useReducer: function (t, e, n) {
      var r = Bt();
      return (
        (e = n !== void 0 ? n(e) : e),
        (r.memoizedState = r.baseState = e),
        (t = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: e,
        }),
        (r.queue = t),
        (t = t.dispatch = G1.bind(null, le, t)),
        [r.memoizedState, t]
      );
    },
    useRef: function (t) {
      var e = Bt();
      return ((t = { current: t }), (e.memoizedState = t));
    },
    useState: kh,
    useDebugValue: Ef,
    useDeferredValue: function (t) {
      return (Bt().memoizedState = t);
    },
    useTransition: function () {
      var t = kh(!1),
        e = t[0];
      return ((t = K1.bind(null, t[1])), (Bt().memoizedState = t), [e, t]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (t, e, n) {
      var r = le,
        i = Bt();
      if (ne) {
        if (n === void 0) throw Error(R(407));
        n = n();
      } else {
        if (((n = e()), Te === null)) throw Error(R(349));
        Er & 30 || uy(r, e, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: e };
      return (
        (i.queue = s),
        Eh(fy.bind(null, r, s, t), [t]),
        (r.flags |= 2048),
        Es(9, cy.bind(null, r, s, n, e), void 0, null),
        n
      );
    },
    useId: function () {
      var t = Bt(),
        e = Te.identifierPrefix;
      if (ne) {
        var n = ln,
          r = an;
        ((n = (r & ~(1 << (32 - Lt(r) - 1))).toString(32) + n),
          (e = ":" + e + "R" + n),
          (n = Ps++),
          0 < n && (e += "H" + n.toString(32)),
          (e += ":"));
      } else ((n = H1++), (e = ":" + e + "r" + n.toString(32) + ":"));
      return (t.memoizedState = e);
    },
    unstable_isNewReconciler: !1,
  },
  Q1 = {
    readContext: Ct,
    useCallback: xy,
    useContext: Ct,
    useEffect: kf,
    useImperativeHandle: vy,
    useInsertionEffect: my,
    useLayoutEffect: gy,
    useMemo: _y,
    useReducer: Ml,
    useRef: py,
    useState: function () {
      return Ml(ks);
    },
    useDebugValue: Ef,
    useDeferredValue: function (t) {
      var e = Pt();
      return wy(e, _e.memoizedState, t);
    },
    useTransition: function () {
      var t = Ml(ks)[0],
        e = Pt().memoizedState;
      return [t, e];
    },
    useMutableSource: ay,
    useSyncExternalStore: ly,
    useId: Sy,
    unstable_isNewReconciler: !1,
  },
  q1 = {
    readContext: Ct,
    useCallback: xy,
    useContext: Ct,
    useEffect: kf,
    useImperativeHandle: vy,
    useInsertionEffect: my,
    useLayoutEffect: gy,
    useMemo: _y,
    useReducer: Al,
    useRef: py,
    useState: function () {
      return Al(ks);
    },
    useDebugValue: Ef,
    useDeferredValue: function (t) {
      var e = Pt();
      return _e === null ? (e.memoizedState = t) : wy(e, _e.memoizedState, t);
    },
    useTransition: function () {
      var t = Al(ks)[0],
        e = Pt().memoizedState;
      return [t, e];
    },
    useMutableSource: ay,
    useSyncExternalStore: ly,
    useId: Sy,
    unstable_isNewReconciler: !1,
  };
function Mt(t, e) {
  if (t && t.defaultProps) {
    ((e = ce({}, e)), (t = t.defaultProps));
    for (var n in t) e[n] === void 0 && (e[n] = t[n]);
    return e;
  }
  return e;
}
function Bu(t, e, n, r) {
  ((e = t.memoizedState),
    (n = n(r, e)),
    (n = n == null ? e : ce({}, e, n)),
    (t.memoizedState = n),
    t.lanes === 0 && (t.updateQueue.baseState = n));
}
var $a = {
  isMounted: function (t) {
    return (t = t._reactInternals) ? Mr(t) === t : !1;
  },
  enqueueSetState: function (t, e, n) {
    t = t._reactInternals;
    var r = Be(),
      i = bn(t),
      s = un(r, i);
    ((s.payload = e),
      n != null && (s.callback = n),
      (e = In(t, s, i)),
      e !== null && (Ot(e, t, i, r), Ro(e, t, i)));
  },
  enqueueReplaceState: function (t, e, n) {
    t = t._reactInternals;
    var r = Be(),
      i = bn(t),
      s = un(r, i);
    ((s.tag = 1),
      (s.payload = e),
      n != null && (s.callback = n),
      (e = In(t, s, i)),
      e !== null && (Ot(e, t, i, r), Ro(e, t, i)));
  },
  enqueueForceUpdate: function (t, e) {
    t = t._reactInternals;
    var n = Be(),
      r = bn(t),
      i = un(n, r);
    ((i.tag = 2),
      e != null && (i.callback = e),
      (e = In(t, i, r)),
      e !== null && (Ot(e, t, r, n), Ro(e, t, r)));
  },
};
function jh(t, e, n, r, i, s, o) {
  return (
    (t = t.stateNode),
    typeof t.shouldComponentUpdate == "function"
      ? t.shouldComponentUpdate(r, s, o)
      : e.prototype && e.prototype.isPureReactComponent
        ? !xs(n, r) || !xs(i, s)
        : !0
  );
}
function ky(t, e, n) {
  var r = !1,
    i = Hn,
    s = e.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = Ct(s))
      : ((i = Ye(e) ? Pr : Ie.current),
        (r = e.contextTypes),
        (s = (r = r != null) ? ci(t, i) : Hn)),
    (e = new e(n, s)),
    (t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null),
    (e.updater = $a),
    (t.stateNode = e),
    (e._reactInternals = t),
    r &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = i),
      (t.__reactInternalMemoizedMaskedChildContext = s)),
    e
  );
}
function Nh(t, e, n, r) {
  ((t = e.state),
    typeof e.componentWillReceiveProps == "function" &&
      e.componentWillReceiveProps(n, r),
    typeof e.UNSAFE_componentWillReceiveProps == "function" &&
      e.UNSAFE_componentWillReceiveProps(n, r),
    e.state !== t && $a.enqueueReplaceState(e, e.state, null));
}
function Uu(t, e, n, r) {
  var i = t.stateNode;
  ((i.props = n), (i.state = t.memoizedState), (i.refs = {}), xf(t));
  var s = e.contextType;
  (typeof s == "object" && s !== null
    ? (i.context = Ct(s))
    : ((s = Ye(e) ? Pr : Ie.current), (i.context = ci(t, s))),
    (i.state = t.memoizedState),
    (s = e.getDerivedStateFromProps),
    typeof s == "function" && (Bu(t, e, s, n), (i.state = t.memoizedState)),
    typeof e.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((e = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      e !== i.state && $a.enqueueReplaceState(i, i.state, null),
      ua(t, n, i, r),
      (i.state = t.memoizedState)),
    typeof i.componentDidMount == "function" && (t.flags |= 4194308));
}
function pi(t, e) {
  try {
    var n = "",
      r = e;
    do ((n += P_(r)), (r = r.return));
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: t, source: e, stack: i, digest: null };
}
function Dl(t, e, n) {
  return { value: t, source: null, stack: n ?? null, digest: e ?? null };
}
function Wu(t, e) {
  try {
    console.error(e.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Z1 = typeof WeakMap == "function" ? WeakMap : Map;
function Ey(t, e, n) {
  ((n = un(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = e.value;
  return (
    (n.callback = function () {
      (pa || ((pa = !0), (Ju = r)), Wu(t, e));
    }),
    n
  );
}
function jy(t, e, n) {
  ((n = un(-1, n)), (n.tag = 3));
  var r = t.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = e.value;
    ((n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Wu(t, e);
      }));
  }
  var s = t.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        (Wu(t, e),
          typeof r != "function" &&
            (Fn === null ? (Fn = new Set([this])) : Fn.add(this)));
        var o = e.stack;
        this.componentDidCatch(e.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Rh(t, e, n) {
  var r = t.pingCache;
  if (r === null) {
    r = t.pingCache = new Z1();
    var i = new Set();
    r.set(e, i);
  } else ((i = r.get(e)), i === void 0 && ((i = new Set()), r.set(e, i)));
  i.has(n) || (i.add(n), (t = dw.bind(null, t, e, n)), e.then(t, t));
}
function Mh(t) {
  do {
    var e;
    if (
      ((e = t.tag === 13) &&
        ((e = t.memoizedState), (e = e !== null ? e.dehydrated !== null : !0)),
      e)
    )
      return t;
    t = t.return;
  } while (t !== null);
  return null;
}
function Ah(t, e, n, r, i) {
  return t.mode & 1
    ? ((t.flags |= 65536), (t.lanes = i), t)
    : (t === e
        ? (t.flags |= 65536)
        : ((t.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((e = un(-1, 1)), (e.tag = 2), In(n, e, 1))),
          (n.lanes |= 1)),
      t);
}
var J1 = gn.ReactCurrentOwner,
  Ke = !1;
function Fe(t, e, n, r) {
  e.child = t === null ? ry(e, null, n, r) : di(e, t.child, n, r);
}
function Dh(t, e, n, r, i) {
  n = n.render;
  var s = e.ref;
  return (
    ii(e, i),
    (r = Cf(t, e, n, r, s, i)),
    (n = Pf()),
    t !== null && !Ke
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~i),
        hn(t, e, i))
      : (ne && n && df(e), (e.flags |= 1), Fe(t, e, r, i), e.child)
  );
}
function Lh(t, e, n, r, i) {
  if (t === null) {
    var s = n.type;
    return typeof s == "function" &&
      !Of(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((e.tag = 15), (e.type = s), Ny(t, e, s, r, i))
      : ((t = Vo(n.type, null, r, e, e.mode, i)),
        (t.ref = e.ref),
        (t.return = e),
        (e.child = t));
  }
  if (((s = t.child), !(t.lanes & i))) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : xs), n(o, r) && t.ref === e.ref)
    )
      return hn(t, e, i);
  }
  return (
    (e.flags |= 1),
    (t = zn(s, r)),
    (t.ref = e.ref),
    (t.return = e),
    (e.child = t)
  );
}
function Ny(t, e, n, r, i) {
  if (t !== null) {
    var s = t.memoizedProps;
    if (xs(s, r) && t.ref === e.ref)
      if (((Ke = !1), (e.pendingProps = r = s), (t.lanes & i) !== 0))
        t.flags & 131072 && (Ke = !0);
      else return ((e.lanes = t.lanes), hn(t, e, i));
  }
  return $u(t, e, n, r, i);
}
function Ry(t, e, n) {
  var r = e.pendingProps,
    i = r.children,
    s = t !== null ? t.memoizedState : null;
  if (r.mode === "hidden")
    if (!(e.mode & 1))
      ((e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Z(Yr, tt),
        (tt |= n));
    else {
      if (!(n & 1073741824))
        return (
          (t = s !== null ? s.baseLanes | n : n),
          (e.lanes = e.childLanes = 1073741824),
          (e.memoizedState = {
            baseLanes: t,
            cachePool: null,
            transitions: null,
          }),
          (e.updateQueue = null),
          Z(Yr, tt),
          (tt |= t),
          null
        );
      ((e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        Z(Yr, tt),
        (tt |= r));
    }
  else
    (s !== null ? ((r = s.baseLanes | n), (e.memoizedState = null)) : (r = n),
      Z(Yr, tt),
      (tt |= r));
  return (Fe(t, e, i, n), e.child);
}
function My(t, e) {
  var n = e.ref;
  ((t === null && n !== null) || (t !== null && t.ref !== n)) &&
    ((e.flags |= 512), (e.flags |= 2097152));
}
function $u(t, e, n, r, i) {
  var s = Ye(n) ? Pr : Ie.current;
  return (
    (s = ci(e, s)),
    ii(e, i),
    (n = Cf(t, e, n, r, s, i)),
    (r = Pf()),
    t !== null && !Ke
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~i),
        hn(t, e, i))
      : (ne && r && df(e), (e.flags |= 1), Fe(t, e, n, i), e.child)
  );
}
function Oh(t, e, n, r, i) {
  if (Ye(n)) {
    var s = !0;
    ia(e);
  } else s = !1;
  if ((ii(e, i), e.stateNode === null))
    (Do(t, e), ky(e, n, r), Uu(e, n, r, i), (r = !0));
  else if (t === null) {
    var o = e.stateNode,
      a = e.memoizedProps;
    o.props = a;
    var l = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Ct(u))
      : ((u = Ye(n) ? Pr : Ie.current), (u = ci(e, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    (f ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && Nh(e, o, r, u)),
      (Tn = !1));
    var d = e.memoizedState;
    ((o.state = d),
      ua(e, r, o, i),
      (l = e.memoizedState),
      a !== r || d !== l || Ge.current || Tn
        ? (typeof c == "function" && (Bu(e, n, c, r), (l = e.memoizedState)),
          (a = Tn || jh(e, n, a, r, d, l, u))
            ? (f ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (e.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
              (e.memoizedProps = r),
              (e.memoizedState = l)),
          (o.props = r),
          (o.state = l),
          (o.context = u),
          (r = a))
        : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
          (r = !1)));
  } else {
    ((o = e.stateNode),
      sy(t, e),
      (a = e.memoizedProps),
      (u = e.type === e.elementType ? a : Mt(e.type, a)),
      (o.props = u),
      (f = e.pendingProps),
      (d = o.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = Ct(l))
        : ((l = Ye(n) ? Pr : Ie.current), (l = ci(e, l))));
    var h = n.getDerivedStateFromProps;
    ((c =
      typeof h == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== f || d !== l) && Nh(e, o, r, l)),
      (Tn = !1),
      (d = e.memoizedState),
      (o.state = d),
      ua(e, r, o, i));
    var v = e.memoizedState;
    a !== f || d !== v || Ge.current || Tn
      ? (typeof h == "function" && (Bu(e, n, h, r), (v = e.memoizedState)),
        (u = Tn || jh(e, n, u, r, d, v, l) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, v, l),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, v, l)),
            typeof o.componentDidUpdate == "function" && (e.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === t.memoizedProps && d === t.memoizedState) ||
              (e.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === t.memoizedProps && d === t.memoizedState) ||
              (e.flags |= 1024),
            (e.memoizedProps = r),
            (e.memoizedState = v)),
        (o.props = r),
        (o.state = v),
        (o.context = l),
        (r = u))
      : (typeof o.componentDidUpdate != "function" ||
          (a === t.memoizedProps && d === t.memoizedState) ||
          (e.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === t.memoizedProps && d === t.memoizedState) ||
          (e.flags |= 1024),
        (r = !1));
  }
  return Hu(t, e, n, r, s, i);
}
function Hu(t, e, n, r, i, s) {
  My(t, e);
  var o = (e.flags & 128) !== 0;
  if (!r && !o) return (i && _h(e, n, !1), hn(t, e, s));
  ((r = e.stateNode), (J1.current = e));
  var a =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (e.flags |= 1),
    t !== null && o
      ? ((e.child = di(e, t.child, null, s)), (e.child = di(e, null, a, s)))
      : Fe(t, e, a, s),
    (e.memoizedState = r.state),
    i && _h(e, n, !0),
    e.child
  );
}
function Ay(t) {
  var e = t.stateNode;
  (e.pendingContext
    ? xh(t, e.pendingContext, e.pendingContext !== e.context)
    : e.context && xh(t, e.context, !1),
    _f(t, e.containerInfo));
}
function Vh(t, e, n, r, i) {
  return (fi(), pf(i), (e.flags |= 256), Fe(t, e, n, r), e.child);
}
var Ku = { dehydrated: null, treeContext: null, retryLane: 0 };
function Gu(t) {
  return { baseLanes: t, cachePool: null, transitions: null };
}
function Dy(t, e, n) {
  var r = e.pendingProps,
    i = se.current,
    s = !1,
    o = (e.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = t !== null && t.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((s = !0), (e.flags &= -129))
      : (t === null || t.memoizedState !== null) && (i |= 1),
    Z(se, i & 1),
    t === null)
  )
    return (
      bu(e),
      (t = e.memoizedState),
      t !== null && ((t = t.dehydrated), t !== null)
        ? (e.mode & 1
            ? t.data === "$!"
              ? (e.lanes = 8)
              : (e.lanes = 1073741824)
            : (e.lanes = 1),
          null)
        : ((o = r.children),
          (t = r.fallback),
          s
            ? ((r = e.mode),
              (s = e.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = Ga(o, r, 0, null)),
              (t = vr(t, r, n, null)),
              (s.return = e),
              (t.return = e),
              (s.sibling = t),
              (e.child = s),
              (e.child.memoizedState = Gu(n)),
              (e.memoizedState = Ku),
              t)
            : jf(e, o))
    );
  if (((i = t.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return ew(t, e, o, r, a, i, n);
  if (s) {
    ((s = r.fallback), (o = e.mode), (i = t.child), (a = i.sibling));
    var l = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && e.child !== i
        ? ((r = e.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (e.deletions = null))
        : ((r = zn(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (s = zn(a, s)) : ((s = vr(s, o, n, null)), (s.flags |= 2)),
      (s.return = e),
      (r.return = e),
      (r.sibling = s),
      (e.child = r),
      (r = s),
      (s = e.child),
      (o = t.child.memoizedState),
      (o =
        o === null
          ? Gu(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = t.childLanes & ~n),
      (e.memoizedState = Ku),
      r
    );
  }
  return (
    (s = t.child),
    (t = s.sibling),
    (r = zn(s, { mode: "visible", children: r.children })),
    !(e.mode & 1) && (r.lanes = n),
    (r.return = e),
    (r.sibling = null),
    t !== null &&
      ((n = e.deletions),
      n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t)),
    (e.child = r),
    (e.memoizedState = null),
    r
  );
}
function jf(t, e) {
  return (
    (e = Ga({ mode: "visible", children: e }, t.mode, 0, null)),
    (e.return = t),
    (t.child = e)
  );
}
function po(t, e, n, r) {
  return (
    r !== null && pf(r),
    di(e, t.child, null, n),
    (t = jf(e, e.pendingProps.children)),
    (t.flags |= 2),
    (e.memoizedState = null),
    t
  );
}
function ew(t, e, n, r, i, s, o) {
  if (n)
    return e.flags & 256
      ? ((e.flags &= -257), (r = Dl(Error(R(422)))), po(t, e, o, r))
      : e.memoizedState !== null
        ? ((e.child = t.child), (e.flags |= 128), null)
        : ((s = r.fallback),
          (i = e.mode),
          (r = Ga({ mode: "visible", children: r.children }, i, 0, null)),
          (s = vr(s, i, o, null)),
          (s.flags |= 2),
          (r.return = e),
          (s.return = e),
          (r.sibling = s),
          (e.child = r),
          e.mode & 1 && di(e, t.child, null, o),
          (e.child.memoizedState = Gu(o)),
          (e.memoizedState = Ku),
          s);
  if (!(e.mode & 1)) return po(t, e, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (
      (r = a),
      (s = Error(R(419))),
      (r = Dl(s, r, void 0)),
      po(t, e, o, r)
    );
  }
  if (((a = (o & t.childLanes) !== 0), Ke || a)) {
    if (((r = Te), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      ((i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), dn(t, i), Ot(r, t, i, -1)));
    }
    return (Lf(), (r = Dl(Error(R(421)))), po(t, e, o, r));
  }
  return i.data === "$?"
    ? ((e.flags |= 128),
      (e.child = t.child),
      (e = hw.bind(null, t)),
      (i._reactRetry = e),
      null)
    : ((t = s.treeContext),
      (it = Vn(i.nextSibling)),
      (at = e),
      (ne = !0),
      (Dt = null),
      t !== null &&
        ((gt[yt++] = an),
        (gt[yt++] = ln),
        (gt[yt++] = kr),
        (an = t.id),
        (ln = t.overflow),
        (kr = e)),
      (e = jf(e, r.children)),
      (e.flags |= 4096),
      e);
}
function Ih(t, e, n) {
  t.lanes |= e;
  var r = t.alternate;
  (r !== null && (r.lanes |= e), zu(t.return, e, n));
}
function Ll(t, e, n, r, i) {
  var s = t.memoizedState;
  s === null
    ? (t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = e),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function Ly(t, e, n) {
  var r = e.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((Fe(t, e, r.children, n), (r = se.current), r & 2))
    ((r = (r & 1) | 2), (e.flags |= 128));
  else {
    if (t !== null && t.flags & 128)
      e: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && Ih(t, n, e);
        else if (t.tag === 19) Ih(t, n, e);
        else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break e;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break e;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    r &= 1;
  }
  if ((Z(se, r), !(e.mode & 1))) e.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = e.child, i = null; n !== null; )
          ((t = n.alternate),
            t !== null && ca(t) === null && (i = n),
            (n = n.sibling));
        ((n = i),
          n === null
            ? ((i = e.child), (e.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Ll(e, !1, i, n, s));
        break;
      case "backwards":
        for (n = null, i = e.child, e.child = null; i !== null; ) {
          if (((t = i.alternate), t !== null && ca(t) === null)) {
            e.child = i;
            break;
          }
          ((t = i.sibling), (i.sibling = n), (n = i), (i = t));
        }
        Ll(e, !0, n, null, s);
        break;
      case "together":
        Ll(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
  return e.child;
}
function Do(t, e) {
  !(e.mode & 1) &&
    t !== null &&
    ((t.alternate = null), (e.alternate = null), (e.flags |= 2));
}
function hn(t, e, n) {
  if (
    (t !== null && (e.dependencies = t.dependencies),
    (jr |= e.lanes),
    !(n & e.childLanes))
  )
    return null;
  if (t !== null && e.child !== t.child) throw Error(R(153));
  if (e.child !== null) {
    for (
      t = e.child, n = zn(t, t.pendingProps), e.child = n, n.return = e;
      t.sibling !== null;
    )
      ((t = t.sibling),
        (n = n.sibling = zn(t, t.pendingProps)),
        (n.return = e));
    n.sibling = null;
  }
  return e.child;
}
function tw(t, e, n) {
  switch (e.tag) {
    case 3:
      (Ay(e), fi());
      break;
    case 5:
      oy(e);
      break;
    case 1:
      Ye(e.type) && ia(e);
      break;
    case 4:
      _f(e, e.stateNode.containerInfo);
      break;
    case 10:
      var r = e.type._context,
        i = e.memoizedProps.value;
      (Z(aa, r._currentValue), (r._currentValue = i));
      break;
    case 13:
      if (((r = e.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Z(se, se.current & 1), (e.flags |= 128), null)
          : n & e.child.childLanes
            ? Dy(t, e, n)
            : (Z(se, se.current & 1),
              (t = hn(t, e, n)),
              t !== null ? t.sibling : null);
      Z(se, se.current & 1);
      break;
    case 19:
      if (((r = (n & e.childLanes) !== 0), t.flags & 128)) {
        if (r) return Ly(t, e, n);
        e.flags |= 128;
      }
      if (
        ((i = e.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        Z(se, se.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((e.lanes = 0), Ry(t, e, n));
  }
  return hn(t, e, n);
}
var Oy, Yu, Vy, Iy;
Oy = function (t, e) {
  for (var n = e.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) t.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
Yu = function () {};
Vy = function (t, e, n, r) {
  var i = t.memoizedProps;
  if (i !== r) {
    ((t = e.stateNode), hr(Xt.current));
    var s = null;
    switch (n) {
      case "input":
        ((i = gu(t, i)), (r = gu(t, r)), (s = []));
        break;
      case "select":
        ((i = ce({}, i, { value: void 0 })),
          (r = ce({}, r, { value: void 0 })),
          (s = []));
        break;
      case "textarea":
        ((i = xu(t, i)), (r = xu(t, r)), (s = []));
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (t.onclick = na);
    }
    wu(n, r);
    var o;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (ds.hasOwnProperty(u)
              ? s || (s = [])
              : (s = s || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (l && l.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in l)
              l.hasOwnProperty(o) &&
                a[o] !== l[o] &&
                (n || (n = {}), (n[o] = l[o]));
          } else (n || (s || (s = []), s.push(u, n)), (n = l));
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (s = s || []).push(u, l))
            : u === "children"
              ? (typeof l != "string" && typeof l != "number") ||
                (s = s || []).push(u, "" + l)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (ds.hasOwnProperty(u)
                  ? (l != null && u === "onScroll" && J("scroll", t),
                    s || a === l || (s = []))
                  : (s = s || []).push(u, l));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (e.updateQueue = u) && (e.flags |= 4);
  }
};
Iy = function (t, e, n, r) {
  n !== r && (e.flags |= 4);
};
function Fi(t, e) {
  if (!ne)
    switch (t.tailMode) {
      case "hidden":
        e = t.tail;
        for (var n = null; e !== null; )
          (e.alternate !== null && (n = e), (e = e.sibling));
        n === null ? (t.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = t.tail;
        for (var r = null; n !== null; )
          (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? e || t.tail === null
            ? (t.tail = null)
            : (t.tail.sibling = null)
          : (r.sibling = null);
    }
}
function De(t) {
  var e = t.alternate !== null && t.alternate.child === t.child,
    n = 0,
    r = 0;
  if (e)
    for (var i = t.child; i !== null; )
      ((n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = t),
        (i = i.sibling));
  else
    for (i = t.child; i !== null; )
      ((n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = t),
        (i = i.sibling));
  return ((t.subtreeFlags |= r), (t.childLanes = n), e);
}
function nw(t, e, n) {
  var r = e.pendingProps;
  switch ((hf(e), e.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return (De(e), null);
    case 1:
      return (Ye(e.type) && ra(), De(e), null);
    case 3:
      return (
        (r = e.stateNode),
        hi(),
        te(Ge),
        te(Ie),
        Sf(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (t === null || t.child === null) &&
          (fo(e)
            ? (e.flags |= 4)
            : t === null ||
              (t.memoizedState.isDehydrated && !(e.flags & 256)) ||
              ((e.flags |= 1024), Dt !== null && (nc(Dt), (Dt = null)))),
        Yu(t, e),
        De(e),
        null
      );
    case 5:
      wf(e);
      var i = hr(Cs.current);
      if (((n = e.type), t !== null && e.stateNode != null))
        (Vy(t, e, n, r, i),
          t.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152)));
      else {
        if (!r) {
          if (e.stateNode === null) throw Error(R(166));
          return (De(e), null);
        }
        if (((t = hr(Xt.current)), fo(e))) {
          ((r = e.stateNode), (n = e.type));
          var s = e.memoizedProps;
          switch (((r[Ht] = e), (r[Ss] = s), (t = (e.mode & 1) !== 0), n)) {
            case "dialog":
              (J("cancel", r), J("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              J("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Ki.length; i++) J(Ki[i], r);
              break;
            case "source":
              J("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (J("error", r), J("load", r));
              break;
            case "details":
              J("toggle", r);
              break;
            case "input":
              (Kd(r, s), J("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!s.multiple }),
                J("invalid", r));
              break;
            case "textarea":
              (Yd(r, s), J("invalid", r));
          }
          (wu(n, s), (i = null));
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var a = s[o];
              o === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (s.suppressHydrationWarning !== !0 &&
                      co(r.textContent, a, t),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (s.suppressHydrationWarning !== !0 &&
                      co(r.textContent, a, t),
                    (i = ["children", "" + a]))
                : ds.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  J("scroll", r);
            }
          switch (n) {
            case "input":
              (no(r), Gd(r, s, !0));
              break;
            case "textarea":
              (no(r), Xd(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = na);
          }
          ((r = i), (e.updateQueue = r), r !== null && (e.flags |= 4));
        } else {
          ((o = i.nodeType === 9 ? i : i.ownerDocument),
            t === "http://www.w3.org/1999/xhtml" && (t = fg(n)),
            t === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((t = o.createElement("div")),
                  (t.innerHTML = "<script><\/script>"),
                  (t = t.removeChild(t.firstChild)))
                : typeof r.is == "string"
                  ? (t = o.createElement(n, { is: r.is }))
                  : ((t = o.createElement(n)),
                    n === "select" &&
                      ((o = t),
                      r.multiple
                        ? (o.multiple = !0)
                        : r.size && (o.size = r.size)))
              : (t = o.createElementNS(t, n)),
            (t[Ht] = e),
            (t[Ss] = r),
            Oy(t, e, !1, !1),
            (e.stateNode = t));
          e: {
            switch (((o = Su(n, r)), n)) {
              case "dialog":
                (J("cancel", t), J("close", t), (i = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (J("load", t), (i = r));
                break;
              case "video":
              case "audio":
                for (i = 0; i < Ki.length; i++) J(Ki[i], t);
                i = r;
                break;
              case "source":
                (J("error", t), (i = r));
                break;
              case "img":
              case "image":
              case "link":
                (J("error", t), J("load", t), (i = r));
                break;
              case "details":
                (J("toggle", t), (i = r));
                break;
              case "input":
                (Kd(t, r), (i = gu(t, r)), J("invalid", t));
                break;
              case "option":
                i = r;
                break;
              case "select":
                ((t._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = ce({}, r, { value: void 0 })),
                  J("invalid", t));
                break;
              case "textarea":
                (Yd(t, r), (i = xu(t, r)), J("invalid", t));
                break;
              default:
                i = r;
            }
            (wu(n, i), (a = i));
            for (s in a)
              if (a.hasOwnProperty(s)) {
                var l = a[s];
                s === "style"
                  ? pg(t, l)
                  : s === "dangerouslySetInnerHTML"
                    ? ((l = l ? l.__html : void 0), l != null && dg(t, l))
                    : s === "children"
                      ? typeof l == "string"
                        ? (n !== "textarea" || l !== "") && hs(t, l)
                        : typeof l == "number" && hs(t, "" + l)
                      : s !== "suppressContentEditableWarning" &&
                        s !== "suppressHydrationWarning" &&
                        s !== "autoFocus" &&
                        (ds.hasOwnProperty(s)
                          ? l != null && s === "onScroll" && J("scroll", t)
                          : l != null && qc(t, s, l, o));
              }
            switch (n) {
              case "input":
                (no(t), Gd(t, r, !1));
                break;
              case "textarea":
                (no(t), Xd(t));
                break;
              case "option":
                r.value != null && t.setAttribute("value", "" + $n(r.value));
                break;
              case "select":
                ((t.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? ei(t, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      ei(t, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof i.onClick == "function" && (t.onclick = na);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (e.flags |= 4);
        }
        e.ref !== null && ((e.flags |= 512), (e.flags |= 2097152));
      }
      return (De(e), null);
    case 6:
      if (t && e.stateNode != null) Iy(t, e, t.memoizedProps, r);
      else {
        if (typeof r != "string" && e.stateNode === null) throw Error(R(166));
        if (((n = hr(Cs.current)), hr(Xt.current), fo(e))) {
          if (
            ((r = e.stateNode),
            (n = e.memoizedProps),
            (r[Ht] = e),
            (s = r.nodeValue !== n) && ((t = at), t !== null))
          )
            switch (t.tag) {
              case 3:
                co(r.nodeValue, n, (t.mode & 1) !== 0);
                break;
              case 5:
                t.memoizedProps.suppressHydrationWarning !== !0 &&
                  co(r.nodeValue, n, (t.mode & 1) !== 0);
            }
          s && (e.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ht] = e),
            (e.stateNode = r));
      }
      return (De(e), null);
    case 13:
      if (
        (te(se),
        (r = e.memoizedState),
        t === null ||
          (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
      ) {
        if (ne && it !== null && e.mode & 1 && !(e.flags & 128))
          (ty(), fi(), (e.flags |= 98560), (s = !1));
        else if (((s = fo(e)), r !== null && r.dehydrated !== null)) {
          if (t === null) {
            if (!s) throw Error(R(318));
            if (
              ((s = e.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(R(317));
            s[Ht] = e;
          } else
            (fi(),
              !(e.flags & 128) && (e.memoizedState = null),
              (e.flags |= 4));
          (De(e), (s = !1));
        } else (Dt !== null && (nc(Dt), (Dt = null)), (s = !0));
        if (!s) return e.flags & 65536 ? e : null;
      }
      return e.flags & 128
        ? ((e.lanes = n), e)
        : ((r = r !== null),
          r !== (t !== null && t.memoizedState !== null) &&
            r &&
            ((e.child.flags |= 8192),
            e.mode & 1 &&
              (t === null || se.current & 1 ? we === 0 && (we = 3) : Lf())),
          e.updateQueue !== null && (e.flags |= 4),
          De(e),
          null);
    case 4:
      return (
        hi(),
        Yu(t, e),
        t === null && _s(e.stateNode.containerInfo),
        De(e),
        null
      );
    case 10:
      return (yf(e.type._context), De(e), null);
    case 17:
      return (Ye(e.type) && ra(), De(e), null);
    case 19:
      if ((te(se), (s = e.memoizedState), s === null)) return (De(e), null);
      if (((r = (e.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) Fi(s, !1);
        else {
          if (we !== 0 || (t !== null && t.flags & 128))
            for (t = e.child; t !== null; ) {
              if (((o = ca(t)), o !== null)) {
                for (
                  e.flags |= 128,
                    Fi(s, !1),
                    r = o.updateQueue,
                    r !== null && ((e.updateQueue = r), (e.flags |= 4)),
                    e.subtreeFlags = 0,
                    r = n,
                    n = e.child;
                  n !== null;
                )
                  ((s = n),
                    (t = r),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = t),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (t = o.dependencies),
                        (s.dependencies =
                          t === null
                            ? null
                            : {
                                lanes: t.lanes,
                                firstContext: t.firstContext,
                              })),
                    (n = n.sibling));
                return (Z(se, (se.current & 1) | 2), e.child);
              }
              t = t.sibling;
            }
          s.tail !== null &&
            me() > mi &&
            ((e.flags |= 128), (r = !0), Fi(s, !1), (e.lanes = 4194304));
        }
      else {
        if (!r)
          if (((t = ca(o)), t !== null)) {
            if (
              ((e.flags |= 128),
              (r = !0),
              (n = t.updateQueue),
              n !== null && ((e.updateQueue = n), (e.flags |= 4)),
              Fi(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !ne)
            )
              return (De(e), null);
          } else
            2 * me() - s.renderingStartTime > mi &&
              n !== 1073741824 &&
              ((e.flags |= 128), (r = !0), Fi(s, !1), (e.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = e.child), (e.child = o))
          : ((n = s.last),
            n !== null ? (n.sibling = o) : (e.child = o),
            (s.last = o));
      }
      return s.tail !== null
        ? ((e = s.tail),
          (s.rendering = e),
          (s.tail = e.sibling),
          (s.renderingStartTime = me()),
          (e.sibling = null),
          (n = se.current),
          Z(se, r ? (n & 1) | 2 : n & 1),
          e)
        : (De(e), null);
    case 22:
    case 23:
      return (
        Df(),
        (r = e.memoizedState !== null),
        t !== null && (t.memoizedState !== null) !== r && (e.flags |= 8192),
        r && e.mode & 1
          ? tt & 1073741824 && (De(e), e.subtreeFlags & 6 && (e.flags |= 8192))
          : De(e),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(R(156, e.tag));
}
function rw(t, e) {
  switch ((hf(e), e.tag)) {
    case 1:
      return (
        Ye(e.type) && ra(),
        (t = e.flags),
        t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 3:
      return (
        hi(),
        te(Ge),
        te(Ie),
        Sf(),
        (t = e.flags),
        t & 65536 && !(t & 128) ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 5:
      return (wf(e), null);
    case 13:
      if (
        (te(se), (t = e.memoizedState), t !== null && t.dehydrated !== null)
      ) {
        if (e.alternate === null) throw Error(R(340));
        fi();
      }
      return (
        (t = e.flags),
        t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 19:
      return (te(se), null);
    case 4:
      return (hi(), null);
    case 10:
      return (yf(e.type._context), null);
    case 22:
    case 23:
      return (Df(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var mo = !1,
  Le = !1,
  iw = typeof WeakSet == "function" ? WeakSet : Set,
  M = null;
function Gr(t, e) {
  var n = t.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        de(t, e, r);
      }
    else n.current = null;
}
function Xu(t, e, n) {
  try {
    n();
  } catch (r) {
    de(t, e, r);
  }
}
var Fh = !1;
function sw(t, e) {
  if (((Au = Jo), (t = Ug()), ff(t))) {
    if ("selectionStart" in t)
      var n = { start: t.selectionStart, end: t.selectionEnd };
    else
      e: {
        n = ((n = t.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, s.nodeType);
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            f = t,
            d = null;
          t: for (;;) {
            for (
              var h;
              f !== n || (i !== 0 && f.nodeType !== 3) || (a = o + i),
                f !== s || (r !== 0 && f.nodeType !== 3) || (l = o + r),
                f.nodeType === 3 && (o += f.nodeValue.length),
                (h = f.firstChild) !== null;
            )
              ((d = f), (f = h));
            for (;;) {
              if (f === t) break t;
              if (
                (d === n && ++u === i && (a = o),
                d === s && ++c === r && (l = o),
                (h = f.nextSibling) !== null)
              )
                break;
              ((f = d), (d = f.parentNode));
            }
            f = h;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Du = { focusedElem: t, selectionRange: n }, Jo = !1, M = e; M !== null; )
    if (((e = M), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null))
      ((t.return = e), (M = t));
    else
      for (; M !== null; ) {
        e = M;
        try {
          var v = e.alternate;
          if (e.flags & 1024)
            switch (e.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var m = v.memoizedProps,
                    _ = v.memoizedState,
                    y = e.stateNode,
                    p = y.getSnapshotBeforeUpdate(
                      e.elementType === e.type ? m : Mt(e.type, m),
                      _,
                    );
                  y.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var x = e.stateNode.containerInfo;
                x.nodeType === 1
                  ? (x.textContent = "")
                  : x.nodeType === 9 &&
                    x.documentElement &&
                    x.removeChild(x.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(R(163));
            }
        } catch (w) {
          de(e, e.return, w);
        }
        if (((t = e.sibling), t !== null)) {
          ((t.return = e.return), (M = t));
          break;
        }
        M = e.return;
      }
  return ((v = Fh), (Fh = !1), v);
}
function ns(t, e, n) {
  var r = e.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & t) === t) {
        var s = i.destroy;
        ((i.destroy = void 0), s !== void 0 && Xu(e, n, s));
      }
      i = i.next;
    } while (i !== r);
  }
}
function Ha(t, e) {
  if (
    ((e = e.updateQueue), (e = e !== null ? e.lastEffect : null), e !== null)
  ) {
    var n = (e = e.next);
    do {
      if ((n.tag & t) === t) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== e);
  }
}
function Qu(t) {
  var e = t.ref;
  if (e !== null) {
    var n = t.stateNode;
    switch (t.tag) {
      case 5:
        t = n;
        break;
      default:
        t = n;
    }
    typeof e == "function" ? e(t) : (e.current = t);
  }
}
function Fy(t) {
  var e = t.alternate;
  (e !== null && ((t.alternate = null), Fy(e)),
    (t.child = null),
    (t.deletions = null),
    (t.sibling = null),
    t.tag === 5 &&
      ((e = t.stateNode),
      e !== null &&
        (delete e[Ht], delete e[Ss], delete e[Vu], delete e[B1], delete e[U1])),
    (t.stateNode = null),
    (t.return = null),
    (t.dependencies = null),
    (t.memoizedProps = null),
    (t.memoizedState = null),
    (t.pendingProps = null),
    (t.stateNode = null),
    (t.updateQueue = null));
}
function by(t) {
  return t.tag === 5 || t.tag === 3 || t.tag === 4;
}
function bh(t) {
  e: for (;;) {
    for (; t.sibling === null; ) {
      if (t.return === null || by(t.return)) return null;
      t = t.return;
    }
    for (
      t.sibling.return = t.return, t = t.sibling;
      t.tag !== 5 && t.tag !== 6 && t.tag !== 18;
    ) {
      if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
      ((t.child.return = t), (t = t.child));
    }
    if (!(t.flags & 2)) return t.stateNode;
  }
}
function qu(t, e, n) {
  var r = t.tag;
  if (r === 5 || r === 6)
    ((t = t.stateNode),
      e
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(t, e)
          : n.insertBefore(t, e)
        : (n.nodeType === 8
            ? ((e = n.parentNode), e.insertBefore(t, n))
            : ((e = n), e.appendChild(t)),
          (n = n._reactRootContainer),
          n != null || e.onclick !== null || (e.onclick = na)));
  else if (r !== 4 && ((t = t.child), t !== null))
    for (qu(t, e, n), t = t.sibling; t !== null; )
      (qu(t, e, n), (t = t.sibling));
}
function Zu(t, e, n) {
  var r = t.tag;
  if (r === 5 || r === 6)
    ((t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t));
  else if (r !== 4 && ((t = t.child), t !== null))
    for (Zu(t, e, n), t = t.sibling; t !== null; )
      (Zu(t, e, n), (t = t.sibling));
}
var ke = null,
  At = !1;
function xn(t, e, n) {
  for (n = n.child; n !== null; ) (zy(t, e, n), (n = n.sibling));
}
function zy(t, e, n) {
  if (Yt && typeof Yt.onCommitFiberUnmount == "function")
    try {
      Yt.onCommitFiberUnmount(Ia, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Le || Gr(n, e);
    case 6:
      var r = ke,
        i = At;
      ((ke = null),
        xn(t, e, n),
        (ke = r),
        (At = i),
        ke !== null &&
          (At
            ? ((t = ke),
              (n = n.stateNode),
              t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n))
            : ke.removeChild(n.stateNode)));
      break;
    case 18:
      ke !== null &&
        (At
          ? ((t = ke),
            (n = n.stateNode),
            t.nodeType === 8
              ? El(t.parentNode, n)
              : t.nodeType === 1 && El(t, n),
            ys(t))
          : El(ke, n.stateNode));
      break;
    case 4:
      ((r = ke),
        (i = At),
        (ke = n.stateNode.containerInfo),
        (At = !0),
        xn(t, e, n),
        (ke = r),
        (At = i));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Le &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            o = s.destroy;
          ((s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && Xu(n, e, o),
            (i = i.next));
        } while (i !== r);
      }
      xn(t, e, n);
      break;
    case 1:
      if (
        !Le &&
        (Gr(n, e),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (a) {
          de(n, e, a);
        }
      xn(t, e, n);
      break;
    case 21:
      xn(t, e, n);
      break;
    case 22:
      n.mode & 1
        ? ((Le = (r = Le) || n.memoizedState !== null), xn(t, e, n), (Le = r))
        : xn(t, e, n);
      break;
    default:
      xn(t, e, n);
  }
}
function zh(t) {
  var e = t.updateQueue;
  if (e !== null) {
    t.updateQueue = null;
    var n = t.stateNode;
    (n === null && (n = t.stateNode = new iw()),
      e.forEach(function (r) {
        var i = pw.bind(null, t, r);
        n.has(r) || (n.add(r), r.then(i, i));
      }));
  }
}
function Et(t, e) {
  var n = e.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = t,
          o = e,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              ((ke = a.stateNode), (At = !1));
              break e;
            case 3:
              ((ke = a.stateNode.containerInfo), (At = !0));
              break e;
            case 4:
              ((ke = a.stateNode.containerInfo), (At = !0));
              break e;
          }
          a = a.return;
        }
        if (ke === null) throw Error(R(160));
        (zy(s, o, i), (ke = null), (At = !1));
        var l = i.alternate;
        (l !== null && (l.return = null), (i.return = null));
      } catch (u) {
        de(i, e, u);
      }
    }
  if (e.subtreeFlags & 12854)
    for (e = e.child; e !== null; ) (By(e, t), (e = e.sibling));
}
function By(t, e) {
  var n = t.alternate,
    r = t.flags;
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Et(e, t), Ft(t), r & 4)) {
        try {
          (ns(3, t, t.return), Ha(3, t));
        } catch (m) {
          de(t, t.return, m);
        }
        try {
          ns(5, t, t.return);
        } catch (m) {
          de(t, t.return, m);
        }
      }
      break;
    case 1:
      (Et(e, t), Ft(t), r & 512 && n !== null && Gr(n, n.return));
      break;
    case 5:
      if (
        (Et(e, t),
        Ft(t),
        r & 512 && n !== null && Gr(n, n.return),
        t.flags & 32)
      ) {
        var i = t.stateNode;
        try {
          hs(i, "");
        } catch (m) {
          de(t, t.return, m);
        }
      }
      if (r & 4 && ((i = t.stateNode), i != null)) {
        var s = t.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          a = t.type,
          l = t.updateQueue;
        if (((t.updateQueue = null), l !== null))
          try {
            (a === "input" && s.type === "radio" && s.name != null && ug(i, s),
              Su(a, o));
            var u = Su(a, s);
            for (o = 0; o < l.length; o += 2) {
              var c = l[o],
                f = l[o + 1];
              c === "style"
                ? pg(i, f)
                : c === "dangerouslySetInnerHTML"
                  ? dg(i, f)
                  : c === "children"
                    ? hs(i, f)
                    : qc(i, c, f, u);
            }
            switch (a) {
              case "input":
                yu(i, s);
                break;
              case "textarea":
                cg(i, s);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var h = s.value;
                h != null
                  ? ei(i, !!s.multiple, h, !1)
                  : d !== !!s.multiple &&
                    (s.defaultValue != null
                      ? ei(i, !!s.multiple, s.defaultValue, !0)
                      : ei(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[Ss] = s;
          } catch (m) {
            de(t, t.return, m);
          }
      }
      break;
    case 6:
      if ((Et(e, t), Ft(t), r & 4)) {
        if (t.stateNode === null) throw Error(R(162));
        ((i = t.stateNode), (s = t.memoizedProps));
        try {
          i.nodeValue = s;
        } catch (m) {
          de(t, t.return, m);
        }
      }
      break;
    case 3:
      if (
        (Et(e, t), Ft(t), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ys(e.containerInfo);
        } catch (m) {
          de(t, t.return, m);
        }
      break;
    case 4:
      (Et(e, t), Ft(t));
      break;
    case 13:
      (Et(e, t),
        Ft(t),
        (i = t.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Mf = me())),
        r & 4 && zh(t));
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        t.mode & 1 ? ((Le = (u = Le) || c), Et(e, t), (Le = u)) : Et(e, t),
        Ft(t),
        r & 8192)
      ) {
        if (
          ((u = t.memoizedState !== null),
          (t.stateNode.isHidden = u) && !c && t.mode & 1)
        )
          for (M = t, c = t.child; c !== null; ) {
            for (f = M = c; M !== null; ) {
              switch (((d = M), (h = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ns(4, d, d.return);
                  break;
                case 1:
                  Gr(d, d.return);
                  var v = d.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    ((r = d), (n = d.return));
                    try {
                      ((e = r),
                        (v.props = e.memoizedProps),
                        (v.state = e.memoizedState),
                        v.componentWillUnmount());
                    } catch (m) {
                      de(r, n, m);
                    }
                  }
                  break;
                case 5:
                  Gr(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    Uh(f);
                    continue;
                  }
              }
              h !== null ? ((h.return = d), (M = h)) : Uh(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = t; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                ((i = f.stateNode),
                  u
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((a = f.stateNode),
                      (l = f.memoizedProps.style),
                      (o =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = hg("display", o))));
              } catch (m) {
                de(t, t.return, m);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (m) {
                de(t, t.return, m);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === t) &&
            f.child !== null
          ) {
            ((f.child.return = f), (f = f.child));
            continue;
          }
          if (f === t) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === t) break e;
            (c === f && (c = null), (f = f.return));
          }
          (c === f && (c = null),
            (f.sibling.return = f.return),
            (f = f.sibling));
        }
      }
      break;
    case 19:
      (Et(e, t), Ft(t), r & 4 && zh(t));
      break;
    case 21:
      break;
    default:
      (Et(e, t), Ft(t));
  }
}
function Ft(t) {
  var e = t.flags;
  if (e & 2) {
    try {
      e: {
        for (var n = t.return; n !== null; ) {
          if (by(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(R(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (hs(i, ""), (r.flags &= -33));
          var s = bh(t);
          Zu(t, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = bh(t);
          qu(t, a, o);
          break;
        default:
          throw Error(R(161));
      }
    } catch (l) {
      de(t, t.return, l);
    }
    t.flags &= -3;
  }
  e & 4096 && (t.flags &= -4097);
}
function ow(t, e, n) {
  ((M = t), Uy(t));
}
function Uy(t, e, n) {
  for (var r = (t.mode & 1) !== 0; M !== null; ) {
    var i = M,
      s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || mo;
      if (!o) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || Le;
        a = mo;
        var u = Le;
        if (((mo = o), (Le = l) && !u))
          for (M = i; M !== null; )
            ((o = M),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Wh(i)
                : l !== null
                  ? ((l.return = o), (M = l))
                  : Wh(i));
        for (; s !== null; ) ((M = s), Uy(s), (s = s.sibling));
        ((M = i), (mo = a), (Le = u));
      }
      Bh(t);
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (M = s)) : Bh(t);
  }
}
function Bh(t) {
  for (; M !== null; ) {
    var e = M;
    if (e.flags & 8772) {
      var n = e.alternate;
      try {
        if (e.flags & 8772)
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              Le || Ha(5, e);
              break;
            case 1:
              var r = e.stateNode;
              if (e.flags & 4 && !Le)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    e.elementType === e.type
                      ? n.memoizedProps
                      : Mt(e.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var s = e.updateQueue;
              s !== null && Ph(e, s, r);
              break;
            case 3:
              var o = e.updateQueue;
              if (o !== null) {
                if (((n = null), e.child !== null))
                  switch (e.child.tag) {
                    case 5:
                      n = e.child.stateNode;
                      break;
                    case 1:
                      n = e.child.stateNode;
                  }
                Ph(e, o, n);
              }
              break;
            case 5:
              var a = e.stateNode;
              if (n === null && e.flags & 4) {
                n = a;
                var l = e.memoizedProps;
                switch (e.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (e.memoizedState === null) {
                var u = e.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && ys(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(R(163));
          }
        Le || (e.flags & 512 && Qu(e));
      } catch (d) {
        de(e, e.return, d);
      }
    }
    if (e === t) {
      M = null;
      break;
    }
    if (((n = e.sibling), n !== null)) {
      ((n.return = e.return), (M = n));
      break;
    }
    M = e.return;
  }
}
function Uh(t) {
  for (; M !== null; ) {
    var e = M;
    if (e === t) {
      M = null;
      break;
    }
    var n = e.sibling;
    if (n !== null) {
      ((n.return = e.return), (M = n));
      break;
    }
    M = e.return;
  }
}
function Wh(t) {
  for (; M !== null; ) {
    var e = M;
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var n = e.return;
          try {
            Ha(4, e);
          } catch (l) {
            de(e, n, l);
          }
          break;
        case 1:
          var r = e.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = e.return;
            try {
              r.componentDidMount();
            } catch (l) {
              de(e, i, l);
            }
          }
          var s = e.return;
          try {
            Qu(e);
          } catch (l) {
            de(e, s, l);
          }
          break;
        case 5:
          var o = e.return;
          try {
            Qu(e);
          } catch (l) {
            de(e, o, l);
          }
      }
    } catch (l) {
      de(e, e.return, l);
    }
    if (e === t) {
      M = null;
      break;
    }
    var a = e.sibling;
    if (a !== null) {
      ((a.return = e.return), (M = a));
      break;
    }
    M = e.return;
  }
}
var aw = Math.ceil,
  ha = gn.ReactCurrentDispatcher,
  Nf = gn.ReactCurrentOwner,
  St = gn.ReactCurrentBatchConfig,
  $ = 0,
  Te = null,
  ve = null,
  Ne = 0,
  tt = 0,
  Yr = Zn(0),
  we = 0,
  js = null,
  jr = 0,
  Ka = 0,
  Rf = 0,
  rs = null,
  $e = null,
  Mf = 0,
  mi = 1 / 0,
  tn = null,
  pa = !1,
  Ju = null,
  Fn = null,
  go = !1,
  En = null,
  ma = 0,
  is = 0,
  ec = null,
  Lo = -1,
  Oo = 0;
function Be() {
  return $ & 6 ? me() : Lo !== -1 ? Lo : (Lo = me());
}
function bn(t) {
  return t.mode & 1
    ? $ & 2 && Ne !== 0
      ? Ne & -Ne
      : $1.transition !== null
        ? (Oo === 0 && (Oo = kg()), Oo)
        : ((t = K),
          t !== 0 || ((t = window.event), (t = t === void 0 ? 16 : Dg(t.type))),
          t)
    : 1;
}
function Ot(t, e, n, r) {
  if (50 < is) throw ((is = 0), (ec = null), Error(R(185)));
  ($s(t, n, r),
    (!($ & 2) || t !== Te) &&
      (t === Te && (!($ & 2) && (Ka |= n), we === 4 && Pn(t, Ne)),
      Xe(t, r),
      n === 1 && $ === 0 && !(e.mode & 1) && ((mi = me() + 500), Ua && Jn())));
}
function Xe(t, e) {
  var n = t.callbackNode;
  $_(t, e);
  var r = Zo(t, t === Te ? Ne : 0);
  if (r === 0)
    (n !== null && Zd(n), (t.callbackNode = null), (t.callbackPriority = 0));
  else if (((e = r & -r), t.callbackPriority !== e)) {
    if ((n != null && Zd(n), e === 1))
      (t.tag === 0 ? W1($h.bind(null, t)) : Zg($h.bind(null, t)),
        b1(function () {
          !($ & 6) && Jn();
        }),
        (n = null));
    else {
      switch (Eg(r)) {
        case 1:
          n = nf;
          break;
        case 4:
          n = Cg;
          break;
        case 16:
          n = qo;
          break;
        case 536870912:
          n = Pg;
          break;
        default:
          n = qo;
      }
      n = Qy(n, Wy.bind(null, t));
    }
    ((t.callbackPriority = e), (t.callbackNode = n));
  }
}
function Wy(t, e) {
  if (((Lo = -1), (Oo = 0), $ & 6)) throw Error(R(327));
  var n = t.callbackNode;
  if (si() && t.callbackNode !== n) return null;
  var r = Zo(t, t === Te ? Ne : 0);
  if (r === 0) return null;
  if (r & 30 || r & t.expiredLanes || e) e = ga(t, r);
  else {
    e = r;
    var i = $;
    $ |= 2;
    var s = Hy();
    (Te !== t || Ne !== e) && ((tn = null), (mi = me() + 500), yr(t, e));
    do
      try {
        cw();
        break;
      } catch (a) {
        $y(t, a);
      }
    while (!0);
    (gf(),
      (ha.current = s),
      ($ = i),
      ve !== null ? (e = 0) : ((Te = null), (Ne = 0), (e = we)));
  }
  if (e !== 0) {
    if (
      (e === 2 && ((i = Eu(t)), i !== 0 && ((r = i), (e = tc(t, i)))), e === 1)
    )
      throw ((n = js), yr(t, 0), Pn(t, r), Xe(t, me()), n);
    if (e === 6) Pn(t, r);
    else {
      if (
        ((i = t.current.alternate),
        !(r & 30) &&
          !lw(i) &&
          ((e = ga(t, r)),
          e === 2 && ((s = Eu(t)), s !== 0 && ((r = s), (e = tc(t, s)))),
          e === 1))
      )
        throw ((n = js), yr(t, 0), Pn(t, r), Xe(t, me()), n);
      switch (((t.finishedWork = i), (t.finishedLanes = r), e)) {
        case 0:
        case 1:
          throw Error(R(345));
        case 2:
          lr(t, $e, tn);
          break;
        case 3:
          if (
            (Pn(t, r), (r & 130023424) === r && ((e = Mf + 500 - me()), 10 < e))
          ) {
            if (Zo(t, 0) !== 0) break;
            if (((i = t.suspendedLanes), (i & r) !== r)) {
              (Be(), (t.pingedLanes |= t.suspendedLanes & i));
              break;
            }
            t.timeoutHandle = Ou(lr.bind(null, t, $e, tn), e);
            break;
          }
          lr(t, $e, tn);
          break;
        case 4:
          if ((Pn(t, r), (r & 4194240) === r)) break;
          for (e = t.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - Lt(r);
            ((s = 1 << o), (o = e[o]), o > i && (i = o), (r &= ~s));
          }
          if (
            ((r = i),
            (r = me() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * aw(r / 1960)) - r),
            10 < r)
          ) {
            t.timeoutHandle = Ou(lr.bind(null, t, $e, tn), r);
            break;
          }
          lr(t, $e, tn);
          break;
        case 5:
          lr(t, $e, tn);
          break;
        default:
          throw Error(R(329));
      }
    }
  }
  return (Xe(t, me()), t.callbackNode === n ? Wy.bind(null, t) : null);
}
function tc(t, e) {
  var n = rs;
  return (
    t.current.memoizedState.isDehydrated && (yr(t, e).flags |= 256),
    (t = ga(t, e)),
    t !== 2 && ((e = $e), ($e = n), e !== null && nc(e)),
    t
  );
}
function nc(t) {
  $e === null ? ($e = t) : $e.push.apply($e, t);
}
function lw(t) {
  for (var e = t; ; ) {
    if (e.flags & 16384) {
      var n = e.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!It(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
      ((n.return = e), (e = n));
    else {
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return !0;
        e = e.return;
      }
      ((e.sibling.return = e.return), (e = e.sibling));
    }
  }
  return !0;
}
function Pn(t, e) {
  for (
    e &= ~Rf,
      e &= ~Ka,
      t.suspendedLanes |= e,
      t.pingedLanes &= ~e,
      t = t.expirationTimes;
    0 < e;
  ) {
    var n = 31 - Lt(e),
      r = 1 << n;
    ((t[n] = -1), (e &= ~r));
  }
}
function $h(t) {
  if ($ & 6) throw Error(R(327));
  si();
  var e = Zo(t, 0);
  if (!(e & 1)) return (Xe(t, me()), null);
  var n = ga(t, e);
  if (t.tag !== 0 && n === 2) {
    var r = Eu(t);
    r !== 0 && ((e = r), (n = tc(t, r)));
  }
  if (n === 1) throw ((n = js), yr(t, 0), Pn(t, e), Xe(t, me()), n);
  if (n === 6) throw Error(R(345));
  return (
    (t.finishedWork = t.current.alternate),
    (t.finishedLanes = e),
    lr(t, $e, tn),
    Xe(t, me()),
    null
  );
}
function Af(t, e) {
  var n = $;
  $ |= 1;
  try {
    return t(e);
  } finally {
    (($ = n), $ === 0 && ((mi = me() + 500), Ua && Jn()));
  }
}
function Nr(t) {
  En !== null && En.tag === 0 && !($ & 6) && si();
  var e = $;
  $ |= 1;
  var n = St.transition,
    r = K;
  try {
    if (((St.transition = null), (K = 1), t)) return t();
  } finally {
    ((K = r), (St.transition = n), ($ = e), !($ & 6) && Jn());
  }
}
function Df() {
  ((tt = Yr.current), te(Yr));
}
function yr(t, e) {
  ((t.finishedWork = null), (t.finishedLanes = 0));
  var n = t.timeoutHandle;
  if ((n !== -1 && ((t.timeoutHandle = -1), F1(n)), ve !== null))
    for (n = ve.return; n !== null; ) {
      var r = n;
      switch ((hf(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && ra());
          break;
        case 3:
          (hi(), te(Ge), te(Ie), Sf());
          break;
        case 5:
          wf(r);
          break;
        case 4:
          hi();
          break;
        case 13:
          te(se);
          break;
        case 19:
          te(se);
          break;
        case 10:
          yf(r.type._context);
          break;
        case 22:
        case 23:
          Df();
      }
      n = n.return;
    }
  if (
    ((Te = t),
    (ve = t = zn(t.current, null)),
    (Ne = tt = e),
    (we = 0),
    (js = null),
    (Rf = Ka = jr = 0),
    ($e = rs = null),
    dr !== null)
  ) {
    for (e = 0; e < dr.length; e++)
      if (((n = dr[e]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          ((s.next = i), (r.next = o));
        }
        n.pending = r;
      }
    dr = null;
  }
  return t;
}
function $y(t, e) {
  do {
    var n = ve;
    try {
      if ((gf(), (Mo.current = da), fa)) {
        for (var r = le.memoizedState; r !== null; ) {
          var i = r.queue;
          (i !== null && (i.pending = null), (r = r.next));
        }
        fa = !1;
      }
      if (
        ((Er = 0),
        (Se = _e = le = null),
        (ts = !1),
        (Ps = 0),
        (Nf.current = null),
        n === null || n.return === null)
      ) {
        ((we = 1), (js = e), (ve = null));
        break;
      }
      e: {
        var s = t,
          o = n.return,
          a = n,
          l = e;
        if (
          ((e = Ne),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var h = Mh(o);
          if (h !== null) {
            ((h.flags &= -257),
              Ah(h, o, a, s, e),
              h.mode & 1 && Rh(s, u, e),
              (e = h),
              (l = u));
            var v = e.updateQueue;
            if (v === null) {
              var m = new Set();
              (m.add(l), (e.updateQueue = m));
            } else v.add(l);
            break e;
          } else {
            if (!(e & 1)) {
              (Rh(s, u, e), Lf());
              break e;
            }
            l = Error(R(426));
          }
        } else if (ne && a.mode & 1) {
          var _ = Mh(o);
          if (_ !== null) {
            (!(_.flags & 65536) && (_.flags |= 256),
              Ah(_, o, a, s, e),
              pf(pi(l, a)));
            break e;
          }
        }
        ((s = l = pi(l, a)),
          we !== 4 && (we = 2),
          rs === null ? (rs = [s]) : rs.push(s),
          (s = o));
        do {
          switch (s.tag) {
            case 3:
              ((s.flags |= 65536), (e &= -e), (s.lanes |= e));
              var y = Ey(s, l, e);
              Ch(s, y);
              break e;
            case 1:
              a = l;
              var p = s.type,
                x = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (x !== null &&
                    typeof x.componentDidCatch == "function" &&
                    (Fn === null || !Fn.has(x))))
              ) {
                ((s.flags |= 65536), (e &= -e), (s.lanes |= e));
                var w = jy(s, a, e);
                Ch(s, w);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Gy(n);
    } catch (S) {
      ((e = S), ve === n && n !== null && (ve = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function Hy() {
  var t = ha.current;
  return ((ha.current = da), t === null ? da : t);
}
function Lf() {
  ((we === 0 || we === 3 || we === 2) && (we = 4),
    Te === null || (!(jr & 268435455) && !(Ka & 268435455)) || Pn(Te, Ne));
}
function ga(t, e) {
  var n = $;
  $ |= 2;
  var r = Hy();
  (Te !== t || Ne !== e) && ((tn = null), yr(t, e));
  do
    try {
      uw();
      break;
    } catch (i) {
      $y(t, i);
    }
  while (!0);
  if ((gf(), ($ = n), (ha.current = r), ve !== null)) throw Error(R(261));
  return ((Te = null), (Ne = 0), we);
}
function uw() {
  for (; ve !== null; ) Ky(ve);
}
function cw() {
  for (; ve !== null && !O_(); ) Ky(ve);
}
function Ky(t) {
  var e = Xy(t.alternate, t, tt);
  ((t.memoizedProps = t.pendingProps),
    e === null ? Gy(t) : (ve = e),
    (Nf.current = null));
}
function Gy(t) {
  var e = t;
  do {
    var n = e.alternate;
    if (((t = e.return), e.flags & 32768)) {
      if (((n = rw(n, e)), n !== null)) {
        ((n.flags &= 32767), (ve = n));
        return;
      }
      if (t !== null)
        ((t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null));
      else {
        ((we = 6), (ve = null));
        return;
      }
    } else if (((n = nw(n, e, tt)), n !== null)) {
      ve = n;
      return;
    }
    if (((e = e.sibling), e !== null)) {
      ve = e;
      return;
    }
    ve = e = t;
  } while (e !== null);
  we === 0 && (we = 5);
}
function lr(t, e, n) {
  var r = K,
    i = St.transition;
  try {
    ((St.transition = null), (K = 1), fw(t, e, n, r));
  } finally {
    ((St.transition = i), (K = r));
  }
  return null;
}
function fw(t, e, n, r) {
  do si();
  while (En !== null);
  if ($ & 6) throw Error(R(327));
  n = t.finishedWork;
  var i = t.finishedLanes;
  if (n === null) return null;
  if (((t.finishedWork = null), (t.finishedLanes = 0), n === t.current))
    throw Error(R(177));
  ((t.callbackNode = null), (t.callbackPriority = 0));
  var s = n.lanes | n.childLanes;
  if (
    (H_(t, s),
    t === Te && ((ve = Te = null), (Ne = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      go ||
      ((go = !0),
      Qy(qo, function () {
        return (si(), null);
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    ((s = St.transition), (St.transition = null));
    var o = K;
    K = 1;
    var a = $;
    (($ |= 4),
      (Nf.current = null),
      sw(t, n),
      By(n, t),
      M1(Du),
      (Jo = !!Au),
      (Du = Au = null),
      (t.current = n),
      ow(n),
      V_(),
      ($ = a),
      (K = o),
      (St.transition = s));
  } else t.current = n;
  if (
    (go && ((go = !1), (En = t), (ma = i)),
    (s = t.pendingLanes),
    s === 0 && (Fn = null),
    b_(n.stateNode),
    Xe(t, me()),
    e !== null)
  )
    for (r = t.onRecoverableError, n = 0; n < e.length; n++)
      ((i = e[n]), r(i.value, { componentStack: i.stack, digest: i.digest }));
  if (pa) throw ((pa = !1), (t = Ju), (Ju = null), t);
  return (
    ma & 1 && t.tag !== 0 && si(),
    (s = t.pendingLanes),
    s & 1 ? (t === ec ? is++ : ((is = 0), (ec = t))) : (is = 0),
    Jn(),
    null
  );
}
function si() {
  if (En !== null) {
    var t = Eg(ma),
      e = St.transition,
      n = K;
    try {
      if (((St.transition = null), (K = 16 > t ? 16 : t), En === null))
        var r = !1;
      else {
        if (((t = En), (En = null), (ma = 0), $ & 6)) throw Error(R(331));
        var i = $;
        for ($ |= 4, M = t.current; M !== null; ) {
          var s = M,
            o = s.child;
          if (M.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (M = u; M !== null; ) {
                  var c = M;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ns(8, c, s);
                  }
                  var f = c.child;
                  if (f !== null) ((f.return = c), (M = f));
                  else
                    for (; M !== null; ) {
                      c = M;
                      var d = c.sibling,
                        h = c.return;
                      if ((Fy(c), c === u)) {
                        M = null;
                        break;
                      }
                      if (d !== null) {
                        ((d.return = h), (M = d));
                        break;
                      }
                      M = h;
                    }
                }
              }
              var v = s.alternate;
              if (v !== null) {
                var m = v.child;
                if (m !== null) {
                  v.child = null;
                  do {
                    var _ = m.sibling;
                    ((m.sibling = null), (m = _));
                  } while (m !== null);
                }
              }
              M = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) ((o.return = s), (M = o));
          else
            e: for (; M !== null; ) {
              if (((s = M), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ns(9, s, s.return);
                }
              var y = s.sibling;
              if (y !== null) {
                ((y.return = s.return), (M = y));
                break e;
              }
              M = s.return;
            }
        }
        var p = t.current;
        for (M = p; M !== null; ) {
          o = M;
          var x = o.child;
          if (o.subtreeFlags & 2064 && x !== null) ((x.return = o), (M = x));
          else
            e: for (o = p; M !== null; ) {
              if (((a = M), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ha(9, a);
                  }
                } catch (S) {
                  de(a, a.return, S);
                }
              if (a === o) {
                M = null;
                break e;
              }
              var w = a.sibling;
              if (w !== null) {
                ((w.return = a.return), (M = w));
                break e;
              }
              M = a.return;
            }
        }
        if (
          (($ = i), Jn(), Yt && typeof Yt.onPostCommitFiberRoot == "function")
        )
          try {
            Yt.onPostCommitFiberRoot(Ia, t);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((K = n), (St.transition = e));
    }
  }
  return !1;
}
function Hh(t, e, n) {
  ((e = pi(n, e)),
    (e = Ey(t, e, 1)),
    (t = In(t, e, 1)),
    (e = Be()),
    t !== null && ($s(t, 1, e), Xe(t, e)));
}
function de(t, e, n) {
  if (t.tag === 3) Hh(t, t, n);
  else
    for (; e !== null; ) {
      if (e.tag === 3) {
        Hh(e, t, n);
        break;
      } else if (e.tag === 1) {
        var r = e.stateNode;
        if (
          typeof e.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Fn === null || !Fn.has(r)))
        ) {
          ((t = pi(n, t)),
            (t = jy(e, t, 1)),
            (e = In(e, t, 1)),
            (t = Be()),
            e !== null && ($s(e, 1, t), Xe(e, t)));
          break;
        }
      }
      e = e.return;
    }
}
function dw(t, e, n) {
  var r = t.pingCache;
  (r !== null && r.delete(e),
    (e = Be()),
    (t.pingedLanes |= t.suspendedLanes & n),
    Te === t &&
      (Ne & n) === n &&
      (we === 4 || (we === 3 && (Ne & 130023424) === Ne && 500 > me() - Mf)
        ? yr(t, 0)
        : (Rf |= n)),
    Xe(t, e));
}
function Yy(t, e) {
  e === 0 &&
    (t.mode & 1
      ? ((e = so), (so <<= 1), !(so & 130023424) && (so = 4194304))
      : (e = 1));
  var n = Be();
  ((t = dn(t, e)), t !== null && ($s(t, e, n), Xe(t, n)));
}
function hw(t) {
  var e = t.memoizedState,
    n = 0;
  (e !== null && (n = e.retryLane), Yy(t, n));
}
function pw(t, e) {
  var n = 0;
  switch (t.tag) {
    case 13:
      var r = t.stateNode,
        i = t.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = t.stateNode;
      break;
    default:
      throw Error(R(314));
  }
  (r !== null && r.delete(e), Yy(t, n));
}
var Xy;
Xy = function (t, e, n) {
  if (t !== null)
    if (t.memoizedProps !== e.pendingProps || Ge.current) Ke = !0;
    else {
      if (!(t.lanes & n) && !(e.flags & 128)) return ((Ke = !1), tw(t, e, n));
      Ke = !!(t.flags & 131072);
    }
  else ((Ke = !1), ne && e.flags & 1048576 && Jg(e, oa, e.index));
  switch (((e.lanes = 0), e.tag)) {
    case 2:
      var r = e.type;
      (Do(t, e), (t = e.pendingProps));
      var i = ci(e, Ie.current);
      (ii(e, n), (i = Cf(null, e, r, t, i, n)));
      var s = Pf();
      return (
        (e.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((e.tag = 1),
            (e.memoizedState = null),
            (e.updateQueue = null),
            Ye(r) ? ((s = !0), ia(e)) : (s = !1),
            (e.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            xf(e),
            (i.updater = $a),
            (e.stateNode = i),
            (i._reactInternals = e),
            Uu(e, r, t, n),
            (e = Hu(null, e, r, !0, s, n)))
          : ((e.tag = 0), ne && s && df(e), Fe(null, e, i, n), (e = e.child)),
        e
      );
    case 16:
      r = e.elementType;
      e: {
        switch (
          (Do(t, e),
          (t = e.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (e.type = r),
          (i = e.tag = gw(r)),
          (t = Mt(r, t)),
          i)
        ) {
          case 0:
            e = $u(null, e, r, t, n);
            break e;
          case 1:
            e = Oh(null, e, r, t, n);
            break e;
          case 11:
            e = Dh(null, e, r, t, n);
            break e;
          case 14:
            e = Lh(null, e, r, Mt(r.type, t), n);
            break e;
        }
        throw Error(R(306, r, ""));
      }
      return e;
    case 0:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : Mt(r, i)),
        $u(t, e, r, i, n)
      );
    case 1:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : Mt(r, i)),
        Oh(t, e, r, i, n)
      );
    case 3:
      e: {
        if ((Ay(e), t === null)) throw Error(R(387));
        ((r = e.pendingProps),
          (s = e.memoizedState),
          (i = s.element),
          sy(t, e),
          ua(e, r, null, n));
        var o = e.memoizedState;
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (e.updateQueue.baseState = s),
            (e.memoizedState = s),
            e.flags & 256)
          ) {
            ((i = pi(Error(R(423)), e)), (e = Vh(t, e, r, n, i)));
            break e;
          } else if (r !== i) {
            ((i = pi(Error(R(424)), e)), (e = Vh(t, e, r, n, i)));
            break e;
          } else
            for (
              it = Vn(e.stateNode.containerInfo.firstChild),
                at = e,
                ne = !0,
                Dt = null,
                n = ry(e, null, r, n),
                e.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((fi(), r === i)) {
            e = hn(t, e, n);
            break e;
          }
          Fe(t, e, r, n);
        }
        e = e.child;
      }
      return e;
    case 5:
      return (
        oy(e),
        t === null && bu(e),
        (r = e.type),
        (i = e.pendingProps),
        (s = t !== null ? t.memoizedProps : null),
        (o = i.children),
        Lu(r, i) ? (o = null) : s !== null && Lu(r, s) && (e.flags |= 32),
        My(t, e),
        Fe(t, e, o, n),
        e.child
      );
    case 6:
      return (t === null && bu(e), null);
    case 13:
      return Dy(t, e, n);
    case 4:
      return (
        _f(e, e.stateNode.containerInfo),
        (r = e.pendingProps),
        t === null ? (e.child = di(e, null, r, n)) : Fe(t, e, r, n),
        e.child
      );
    case 11:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : Mt(r, i)),
        Dh(t, e, r, i, n)
      );
    case 7:
      return (Fe(t, e, e.pendingProps, n), e.child);
    case 8:
      return (Fe(t, e, e.pendingProps.children, n), e.child);
    case 12:
      return (Fe(t, e, e.pendingProps.children, n), e.child);
    case 10:
      e: {
        if (
          ((r = e.type._context),
          (i = e.pendingProps),
          (s = e.memoizedProps),
          (o = i.value),
          Z(aa, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (It(s.value, o)) {
            if (s.children === i.children && !Ge.current) {
              e = hn(t, e, n);
              break e;
            }
          } else
            for (s = e.child, s !== null && (s.return = e); s !== null; ) {
              var a = s.dependencies;
              if (a !== null) {
                o = s.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (s.tag === 1) {
                      ((l = un(-1, n & -n)), (l.tag = 2));
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        (c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l));
                      }
                    }
                    ((s.lanes |= n),
                      (l = s.alternate),
                      l !== null && (l.lanes |= n),
                      zu(s.return, n, e),
                      (a.lanes |= n));
                    break;
                  }
                  l = l.next;
                }
              } else if (s.tag === 10) o = s.type === e.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(R(341));
                ((o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  zu(o, n, e),
                  (o = s.sibling));
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === e) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    ((s.return = o.return), (o = s));
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        (Fe(t, e, i.children, n), (e = e.child));
      }
      return e;
    case 9:
      return (
        (i = e.type),
        (r = e.pendingProps.children),
        ii(e, n),
        (i = Ct(i)),
        (r = r(i)),
        (e.flags |= 1),
        Fe(t, e, r, n),
        e.child
      );
    case 14:
      return (
        (r = e.type),
        (i = Mt(r, e.pendingProps)),
        (i = Mt(r.type, i)),
        Lh(t, e, r, i, n)
      );
    case 15:
      return Ny(t, e, e.type, e.pendingProps, n);
    case 17:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : Mt(r, i)),
        Do(t, e),
        (e.tag = 1),
        Ye(r) ? ((t = !0), ia(e)) : (t = !1),
        ii(e, n),
        ky(e, r, i),
        Uu(e, r, i, n),
        Hu(null, e, r, !0, t, n)
      );
    case 19:
      return Ly(t, e, n);
    case 22:
      return Ry(t, e, n);
  }
  throw Error(R(156, e.tag));
};
function Qy(t, e) {
  return Tg(t, e);
}
function mw(t, e, n, r) {
  ((this.tag = t),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = e),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function vt(t, e, n, r) {
  return new mw(t, e, n, r);
}
function Of(t) {
  return ((t = t.prototype), !(!t || !t.isReactComponent));
}
function gw(t) {
  if (typeof t == "function") return Of(t) ? 1 : 0;
  if (t != null) {
    if (((t = t.$$typeof), t === Jc)) return 11;
    if (t === ef) return 14;
  }
  return 2;
}
function zn(t, e) {
  var n = t.alternate;
  return (
    n === null
      ? ((n = vt(t.tag, e, t.key, t.mode)),
        (n.elementType = t.elementType),
        (n.type = t.type),
        (n.stateNode = t.stateNode),
        (n.alternate = t),
        (t.alternate = n))
      : ((n.pendingProps = e),
        (n.type = t.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = t.flags & 14680064),
    (n.childLanes = t.childLanes),
    (n.lanes = t.lanes),
    (n.child = t.child),
    (n.memoizedProps = t.memoizedProps),
    (n.memoizedState = t.memoizedState),
    (n.updateQueue = t.updateQueue),
    (e = t.dependencies),
    (n.dependencies =
      e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
    (n.sibling = t.sibling),
    (n.index = t.index),
    (n.ref = t.ref),
    n
  );
}
function Vo(t, e, n, r, i, s) {
  var o = 2;
  if (((r = t), typeof t == "function")) Of(t) && (o = 1);
  else if (typeof t == "string") o = 5;
  else
    e: switch (t) {
      case Fr:
        return vr(n.children, i, s, e);
      case Zc:
        ((o = 8), (i |= 8));
        break;
      case du:
        return (
          (t = vt(12, n, e, i | 2)),
          (t.elementType = du),
          (t.lanes = s),
          t
        );
      case hu:
        return ((t = vt(13, n, e, i)), (t.elementType = hu), (t.lanes = s), t);
      case pu:
        return ((t = vt(19, n, e, i)), (t.elementType = pu), (t.lanes = s), t);
      case og:
        return Ga(n, i, s, e);
      default:
        if (typeof t == "object" && t !== null)
          switch (t.$$typeof) {
            case ig:
              o = 10;
              break e;
            case sg:
              o = 9;
              break e;
            case Jc:
              o = 11;
              break e;
            case ef:
              o = 14;
              break e;
            case Sn:
              ((o = 16), (r = null));
              break e;
          }
        throw Error(R(130, t == null ? t : typeof t, ""));
    }
  return (
    (e = vt(o, n, e, i)),
    (e.elementType = t),
    (e.type = r),
    (e.lanes = s),
    e
  );
}
function vr(t, e, n, r) {
  return ((t = vt(7, t, r, e)), (t.lanes = n), t);
}
function Ga(t, e, n, r) {
  return (
    (t = vt(22, t, r, e)),
    (t.elementType = og),
    (t.lanes = n),
    (t.stateNode = { isHidden: !1 }),
    t
  );
}
function Ol(t, e, n) {
  return ((t = vt(6, t, null, e)), (t.lanes = n), t);
}
function Vl(t, e, n) {
  return (
    (e = vt(4, t.children !== null ? t.children : [], t.key, e)),
    (e.lanes = n),
    (e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation,
    }),
    e
  );
}
function yw(t, e, n, r, i) {
  ((this.tag = e),
    (this.containerInfo = t),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = gl(0)),
    (this.expirationTimes = gl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = gl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null));
}
function Vf(t, e, n, r, i, s, o, a, l) {
  return (
    (t = new yw(t, e, n, a, l)),
    e === 1 ? ((e = 1), s === !0 && (e |= 8)) : (e = 0),
    (s = vt(3, null, null, e)),
    (t.current = s),
    (s.stateNode = t),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    xf(s),
    t
  );
}
function vw(t, e, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Ir,
    key: r == null ? null : "" + r,
    children: t,
    containerInfo: e,
    implementation: n,
  };
}
function qy(t) {
  if (!t) return Hn;
  t = t._reactInternals;
  e: {
    if (Mr(t) !== t || t.tag !== 1) throw Error(R(170));
    var e = t;
    do {
      switch (e.tag) {
        case 3:
          e = e.stateNode.context;
          break e;
        case 1:
          if (Ye(e.type)) {
            e = e.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      e = e.return;
    } while (e !== null);
    throw Error(R(171));
  }
  if (t.tag === 1) {
    var n = t.type;
    if (Ye(n)) return qg(t, n, e);
  }
  return e;
}
function Zy(t, e, n, r, i, s, o, a, l) {
  return (
    (t = Vf(n, r, !0, t, i, s, o, a, l)),
    (t.context = qy(null)),
    (n = t.current),
    (r = Be()),
    (i = bn(n)),
    (s = un(r, i)),
    (s.callback = e ?? null),
    In(n, s, i),
    (t.current.lanes = i),
    $s(t, i, r),
    Xe(t, r),
    t
  );
}
function Ya(t, e, n, r) {
  var i = e.current,
    s = Be(),
    o = bn(i);
  return (
    (n = qy(n)),
    e.context === null ? (e.context = n) : (e.pendingContext = n),
    (e = un(s, o)),
    (e.payload = { element: t }),
    (r = r === void 0 ? null : r),
    r !== null && (e.callback = r),
    (t = In(i, e, o)),
    t !== null && (Ot(t, i, o, s), Ro(t, i, o)),
    o
  );
}
function ya(t) {
  if (((t = t.current), !t.child)) return null;
  switch (t.child.tag) {
    case 5:
      return t.child.stateNode;
    default:
      return t.child.stateNode;
  }
}
function Kh(t, e) {
  if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
    var n = t.retryLane;
    t.retryLane = n !== 0 && n < e ? n : e;
  }
}
function If(t, e) {
  (Kh(t, e), (t = t.alternate) && Kh(t, e));
}
function xw() {
  return null;
}
var Jy =
  typeof reportError == "function"
    ? reportError
    : function (t) {
        console.error(t);
      };
function Ff(t) {
  this._internalRoot = t;
}
Xa.prototype.render = Ff.prototype.render = function (t) {
  var e = this._internalRoot;
  if (e === null) throw Error(R(409));
  Ya(t, e, null, null);
};
Xa.prototype.unmount = Ff.prototype.unmount = function () {
  var t = this._internalRoot;
  if (t !== null) {
    this._internalRoot = null;
    var e = t.containerInfo;
    (Nr(function () {
      Ya(null, t, null, null);
    }),
      (e[fn] = null));
  }
};
function Xa(t) {
  this._internalRoot = t;
}
Xa.prototype.unstable_scheduleHydration = function (t) {
  if (t) {
    var e = Rg();
    t = { blockedOn: null, target: t, priority: e };
    for (var n = 0; n < Cn.length && e !== 0 && e < Cn[n].priority; n++);
    (Cn.splice(n, 0, t), n === 0 && Ag(t));
  }
};
function bf(t) {
  return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
}
function Qa(t) {
  return !(
    !t ||
    (t.nodeType !== 1 &&
      t.nodeType !== 9 &&
      t.nodeType !== 11 &&
      (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
  );
}
function Gh() {}
function _w(t, e, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var u = ya(o);
        s.call(u);
      };
    }
    var o = Zy(e, r, t, 0, null, !1, !1, "", Gh);
    return (
      (t._reactRootContainer = o),
      (t[fn] = o.current),
      _s(t.nodeType === 8 ? t.parentNode : t),
      Nr(),
      o
    );
  }
  for (; (i = t.lastChild); ) t.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = ya(l);
      a.call(u);
    };
  }
  var l = Vf(t, 0, !1, null, null, !1, !1, "", Gh);
  return (
    (t._reactRootContainer = l),
    (t[fn] = l.current),
    _s(t.nodeType === 8 ? t.parentNode : t),
    Nr(function () {
      Ya(e, l, n, r);
    }),
    l
  );
}
function qa(t, e, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = ya(o);
        a.call(l);
      };
    }
    Ya(e, o, t, i);
  } else o = _w(n, e, t, i, r);
  return ya(o);
}
jg = function (t) {
  switch (t.tag) {
    case 3:
      var e = t.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var n = Hi(e.pendingLanes);
        n !== 0 &&
          (rf(e, n | 1), Xe(e, me()), !($ & 6) && ((mi = me() + 500), Jn()));
      }
      break;
    case 13:
      (Nr(function () {
        var r = dn(t, 1);
        if (r !== null) {
          var i = Be();
          Ot(r, t, 1, i);
        }
      }),
        If(t, 1));
  }
};
sf = function (t) {
  if (t.tag === 13) {
    var e = dn(t, 134217728);
    if (e !== null) {
      var n = Be();
      Ot(e, t, 134217728, n);
    }
    If(t, 134217728);
  }
};
Ng = function (t) {
  if (t.tag === 13) {
    var e = bn(t),
      n = dn(t, e);
    if (n !== null) {
      var r = Be();
      Ot(n, t, e, r);
    }
    If(t, e);
  }
};
Rg = function () {
  return K;
};
Mg = function (t, e) {
  var n = K;
  try {
    return ((K = t), e());
  } finally {
    K = n;
  }
};
Cu = function (t, e, n) {
  switch (e) {
    case "input":
      if ((yu(t, n), (e = n.name), n.type === "radio" && e != null)) {
        for (n = t; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + e) + '][type="radio"]',
          ),
            e = 0;
          e < n.length;
          e++
        ) {
          var r = n[e];
          if (r !== t && r.form === t.form) {
            var i = Ba(r);
            if (!i) throw Error(R(90));
            (lg(r), yu(r, i));
          }
        }
      }
      break;
    case "textarea":
      cg(t, n);
      break;
    case "select":
      ((e = n.value), e != null && ei(t, !!n.multiple, e, !1));
  }
};
yg = Af;
vg = Nr;
var ww = { usingClientEntryPoint: !1, Events: [Ks, Ur, Ba, mg, gg, Af] },
  bi = {
    findFiberByHostInstance: fr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Sw = {
    bundleType: bi.bundleType,
    version: bi.version,
    rendererPackageName: bi.rendererPackageName,
    rendererConfig: bi.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: gn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (t) {
      return ((t = wg(t)), t === null ? null : t.stateNode);
    },
    findFiberByHostInstance: bi.findFiberByHostInstance || xw,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var yo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!yo.isDisabled && yo.supportsFiber)
    try {
      ((Ia = yo.inject(Sw)), (Yt = yo));
    } catch {}
}
ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ww;
ht.createPortal = function (t, e) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!bf(e)) throw Error(R(200));
  return vw(t, e, null, n);
};
ht.createRoot = function (t, e) {
  if (!bf(t)) throw Error(R(299));
  var n = !1,
    r = "",
    i = Jy;
  return (
    e != null &&
      (e.unstable_strictMode === !0 && (n = !0),
      e.identifierPrefix !== void 0 && (r = e.identifierPrefix),
      e.onRecoverableError !== void 0 && (i = e.onRecoverableError)),
    (e = Vf(t, 1, !1, null, null, n, !1, r, i)),
    (t[fn] = e.current),
    _s(t.nodeType === 8 ? t.parentNode : t),
    new Ff(e)
  );
};
ht.findDOMNode = function (t) {
  if (t == null) return null;
  if (t.nodeType === 1) return t;
  var e = t._reactInternals;
  if (e === void 0)
    throw typeof t.render == "function"
      ? Error(R(188))
      : ((t = Object.keys(t).join(",")), Error(R(268, t)));
  return ((t = wg(e)), (t = t === null ? null : t.stateNode), t);
};
ht.flushSync = function (t) {
  return Nr(t);
};
ht.hydrate = function (t, e, n) {
  if (!Qa(e)) throw Error(R(200));
  return qa(null, t, e, !0, n);
};
ht.hydrateRoot = function (t, e, n) {
  if (!bf(t)) throw Error(R(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    o = Jy;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (e = Zy(e, null, t, 1, n ?? null, i, !1, s, o)),
    (t[fn] = e.current),
    _s(t),
    r)
  )
    for (t = 0; t < r.length; t++)
      ((n = r[t]),
        (i = n._getVersion),
        (i = i(n._source)),
        e.mutableSourceEagerHydrationData == null
          ? (e.mutableSourceEagerHydrationData = [n, i])
          : e.mutableSourceEagerHydrationData.push(n, i));
  return new Xa(e);
};
ht.render = function (t, e, n) {
  if (!Qa(e)) throw Error(R(200));
  return qa(null, t, e, !1, n);
};
ht.unmountComponentAtNode = function (t) {
  if (!Qa(t)) throw Error(R(40));
  return t._reactRootContainer
    ? (Nr(function () {
        qa(null, null, t, !1, function () {
          ((t._reactRootContainer = null), (t[fn] = null));
        });
      }),
      !0)
    : !1;
};
ht.unstable_batchedUpdates = Af;
ht.unstable_renderSubtreeIntoContainer = function (t, e, n, r) {
  if (!Qa(n)) throw Error(R(200));
  if (t == null || t._reactInternals === void 0) throw Error(R(38));
  return qa(t, e, n, !1, r);
};
ht.version = "18.3.1-next-f1338f8080-20240426";
function ev() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ev);
    } catch (t) {
      console.error(t);
    }
}
(ev(), (eg.exports = ht));
var Tw = eg.exports,
  Yh = Tw;
((cu.createRoot = Yh.createRoot), (cu.hydrateRoot = Yh.hydrateRoot));
/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ns() {
  return (
    (Ns = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        }),
    Ns.apply(this, arguments)
  );
}
var jn;
(function (t) {
  ((t.Pop = "POP"), (t.Push = "PUSH"), (t.Replace = "REPLACE"));
})(jn || (jn = {}));
const Xh = "popstate";
function Cw(t) {
  t === void 0 && (t = {});
  function e(r, i) {
    let { pathname: s, search: o, hash: a } = r.location;
    return rc(
      "",
      { pathname: s, search: o, hash: a },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default",
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : va(i);
  }
  return kw(e, n, null, t);
}
function ue(t, e) {
  if (t === !1 || t === null || typeof t > "u") throw new Error(e);
}
function zf(t, e) {
  if (!t) {
    typeof console < "u" && console.warn(e);
    try {
      throw new Error(e);
    } catch {}
  }
}
function Pw() {
  return Math.random().toString(36).substr(2, 8);
}
function Qh(t, e) {
  return { usr: t.state, key: t.key, idx: e };
}
function rc(t, e, n, r) {
  return (
    n === void 0 && (n = null),
    Ns(
      { pathname: typeof t == "string" ? t : t.pathname, search: "", hash: "" },
      typeof e == "string" ? Ei(e) : e,
      { state: n, key: (e && e.key) || r || Pw() },
    )
  );
}
function va(t) {
  let { pathname: e = "/", search: n = "", hash: r = "" } = t;
  return (
    n && n !== "?" && (e += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (e += r.charAt(0) === "#" ? r : "#" + r),
    e
  );
}
function Ei(t) {
  let e = {};
  if (t) {
    let n = t.indexOf("#");
    n >= 0 && ((e.hash = t.substr(n)), (t = t.substr(0, n)));
    let r = t.indexOf("?");
    (r >= 0 && ((e.search = t.substr(r)), (t = t.substr(0, r))),
      t && (e.pathname = t));
  }
  return e;
}
function kw(t, e, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: s = !1 } = r,
    o = i.history,
    a = jn.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), o.replaceState(Ns({}, o.state, { idx: u }), ""));
  function c() {
    return (o.state || { idx: null }).idx;
  }
  function f() {
    a = jn.Pop;
    let _ = c(),
      y = _ == null ? null : _ - u;
    ((u = _), l && l({ action: a, location: m.location, delta: y }));
  }
  function d(_, y) {
    a = jn.Push;
    let p = rc(m.location, _, y);
    u = c() + 1;
    let x = Qh(p, u),
      w = m.createHref(p);
    try {
      o.pushState(x, "", w);
    } catch (S) {
      if (S instanceof DOMException && S.name === "DataCloneError") throw S;
      i.location.assign(w);
    }
    s && l && l({ action: a, location: m.location, delta: 1 });
  }
  function h(_, y) {
    a = jn.Replace;
    let p = rc(m.location, _, y);
    u = c();
    let x = Qh(p, u),
      w = m.createHref(p);
    (o.replaceState(x, "", w),
      s && l && l({ action: a, location: m.location, delta: 0 }));
  }
  function v(_) {
    let y = i.location.origin !== "null" ? i.location.origin : i.location.href,
      p = typeof _ == "string" ? _ : va(_);
    return (
      (p = p.replace(/ $/, "%20")),
      ue(
        y,
        "No window.location.(origin|href) available to create URL for href: " +
          p,
      ),
      new URL(p, y)
    );
  }
  let m = {
    get action() {
      return a;
    },
    get location() {
      return t(i, o);
    },
    listen(_) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(Xh, f),
        (l = _),
        () => {
          (i.removeEventListener(Xh, f), (l = null));
        }
      );
    },
    createHref(_) {
      return e(i, _);
    },
    createURL: v,
    encodeLocation(_) {
      let y = v(_);
      return { pathname: y.pathname, search: y.search, hash: y.hash };
    },
    push: d,
    replace: h,
    go(_) {
      return o.go(_);
    },
  };
  return m;
}
var qh;
(function (t) {
  ((t.data = "data"),
    (t.deferred = "deferred"),
    (t.redirect = "redirect"),
    (t.error = "error"));
})(qh || (qh = {}));
function Ew(t, e, n) {
  return (n === void 0 && (n = "/"), jw(t, e, n));
}
function jw(t, e, n, r) {
  let i = typeof e == "string" ? Ei(e) : e,
    s = gi(i.pathname || "/", n);
  if (s == null) return null;
  let o = tv(t);
  Nw(o);
  let a = null;
  for (let l = 0; a == null && l < o.length; ++l) {
    let u = zw(s);
    a = Fw(o[l], u);
  }
  return a;
}
function tv(t, e, n, r) {
  (e === void 0 && (e = []),
    n === void 0 && (n = []),
    r === void 0 && (r = ""));
  let i = (s, o, a) => {
    let l = {
      relativePath: a === void 0 ? s.path || "" : a,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: o,
      route: s,
    };
    l.relativePath.startsWith("/") &&
      (ue(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = Bn([r, l.relativePath]),
      c = n.concat(l);
    (s.children &&
      s.children.length > 0 &&
      (ue(
        s.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".'),
      ),
      tv(s.children, e, c, u)),
      !(s.path == null && !s.index) &&
        e.push({ path: u, score: Vw(u, s.index), routesMeta: c }));
  };
  return (
    t.forEach((s, o) => {
      var a;
      if (s.path === "" || !((a = s.path) != null && a.includes("?"))) i(s, o);
      else for (let l of nv(s.path)) i(s, o, l);
    }),
    e
  );
}
function nv(t) {
  let e = t.split("/");
  if (e.length === 0) return [];
  let [n, ...r] = e,
    i = n.endsWith("?"),
    s = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [s, ""] : [s];
  let o = nv(r.join("/")),
    a = [];
  return (
    a.push(...o.map((l) => (l === "" ? s : [s, l].join("/")))),
    i && a.push(...o),
    a.map((l) => (t.startsWith("/") && l === "" ? "/" : l))
  );
}
function Nw(t) {
  t.sort((e, n) =>
    e.score !== n.score
      ? n.score - e.score
      : Iw(
          e.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const Rw = /^:[\w-]+$/,
  Mw = 3,
  Aw = 2,
  Dw = 1,
  Lw = 10,
  Ow = -2,
  Zh = (t) => t === "*";
function Vw(t, e) {
  let n = t.split("/"),
    r = n.length;
  return (
    n.some(Zh) && (r += Ow),
    e && (r += Aw),
    n
      .filter((i) => !Zh(i))
      .reduce((i, s) => i + (Rw.test(s) ? Mw : s === "" ? Dw : Lw), r)
  );
}
function Iw(t, e) {
  return t.length === e.length && t.slice(0, -1).every((r, i) => r === e[i])
    ? t[t.length - 1] - e[e.length - 1]
    : 0;
}
function Fw(t, e, n) {
  let { routesMeta: r } = t,
    i = {},
    s = "/",
    o = [];
  for (let a = 0; a < r.length; ++a) {
    let l = r[a],
      u = a === r.length - 1,
      c = s === "/" ? e : e.slice(s.length) || "/",
      f = ic(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
        c,
      ),
      d = l.route;
    if (!f) return null;
    (Object.assign(i, f.params),
      o.push({
        params: i,
        pathname: Bn([s, f.pathname]),
        pathnameBase: Hw(Bn([s, f.pathnameBase])),
        route: d,
      }),
      f.pathnameBase !== "/" && (s = Bn([s, f.pathnameBase])));
  }
  return o;
}
function ic(t, e) {
  typeof t == "string" && (t = { path: t, caseSensitive: !1, end: !0 });
  let [n, r] = bw(t.path, t.caseSensitive, t.end),
    i = e.match(n);
  if (!i) return null;
  let s = i[0],
    o = s.replace(/(.)\/+$/, "$1"),
    a = i.slice(1);
  return {
    params: r.reduce((u, c, f) => {
      let { paramName: d, isOptional: h } = c;
      if (d === "*") {
        let m = a[f] || "";
        o = s.slice(0, s.length - m.length).replace(/(.)\/+$/, "$1");
      }
      const v = a[f];
      return (
        h && !v ? (u[d] = void 0) : (u[d] = (v || "").replace(/%2F/g, "/")),
        u
      );
    }, {}),
    pathname: s,
    pathnameBase: o,
    pattern: t,
  };
}
function bw(t, e, n) {
  (e === void 0 && (e = !1),
    n === void 0 && (n = !0),
    zf(
      t === "*" || !t.endsWith("*") || t.endsWith("/*"),
      'Route path "' +
        t +
        '" will be treated as if it were ' +
        ('"' + t.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + t.replace(/\*$/, "/*") + '".'),
    ));
  let r = [],
    i =
      "^" +
      t
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, a, l) => (
            r.push({ paramName: a, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    t.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (i += "\\/*$")
        : t !== "" && t !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, e ? void 0 : "i"), r]
  );
}
function zw(t) {
  try {
    return t
      .split("/")
      .map((e) => decodeURIComponent(e).replace(/\//g, "%2F"))
      .join("/");
  } catch (e) {
    return (
      zf(
        !1,
        'The URL path "' +
          t +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + e + ")."),
      ),
      t
    );
  }
}
function gi(t, e) {
  if (e === "/") return t;
  if (!t.toLowerCase().startsWith(e.toLowerCase())) return null;
  let n = e.endsWith("/") ? e.length - 1 : e.length,
    r = t.charAt(n);
  return r && r !== "/" ? null : t.slice(n) || "/";
}
const Bw = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Uw = (t) => Bw.test(t);
function Ww(t, e) {
  e === void 0 && (e = "/");
  let {
      pathname: n,
      search: r = "",
      hash: i = "",
    } = typeof t == "string" ? Ei(t) : t,
    s;
  if (n)
    if (Uw(n)) s = n;
    else {
      if (n.includes("//")) {
        let o = n;
        ((n = n.replace(/\/\/+/g, "/")),
          zf(
            !1,
            "Pathnames cannot have embedded double slashes - normalizing " +
              (o + " -> " + n),
          ));
      }
      n.startsWith("/") ? (s = Jh(n.substring(1), "/")) : (s = Jh(n, e));
    }
  else s = e;
  return { pathname: s, search: Kw(r), hash: Gw(i) };
}
function Jh(t, e) {
  let n = e.replace(/\/+$/, "").split("/");
  return (
    t.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Il(t, e, n, r) {
  return (
    "Cannot include a '" +
    t +
    "' character in a manually specified " +
    ("`to." +
      e +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function $w(t) {
  return t.filter(
    (e, n) => n === 0 || (e.route.path && e.route.path.length > 0),
  );
}
function Bf(t, e) {
  let n = $w(t);
  return e
    ? n.map((r, i) => (i === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Uf(t, e, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof t == "string"
    ? (i = Ei(t))
    : ((i = Ns({}, t)),
      ue(
        !i.pathname || !i.pathname.includes("?"),
        Il("?", "pathname", "search", i),
      ),
      ue(
        !i.pathname || !i.pathname.includes("#"),
        Il("#", "pathname", "hash", i),
      ),
      ue(!i.search || !i.search.includes("#"), Il("#", "search", "hash", i)));
  let s = t === "" || i.pathname === "",
    o = s ? "/" : i.pathname,
    a;
  if (o == null) a = n;
  else {
    let f = e.length - 1;
    if (!r && o.startsWith("..")) {
      let d = o.split("/");
      for (; d[0] === ".."; ) (d.shift(), (f -= 1));
      i.pathname = d.join("/");
    }
    a = f >= 0 ? e[f] : "/";
  }
  let l = Ww(i, a),
    u = o && o !== "/" && o.endsWith("/"),
    c = (s || o === ".") && n.endsWith("/");
  return (!l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l);
}
const Bn = (t) => t.join("/").replace(/\/\/+/g, "/"),
  Hw = (t) => t.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Kw = (t) => (!t || t === "?" ? "" : t.startsWith("?") ? t : "?" + t),
  Gw = (t) => (!t || t === "#" ? "" : t.startsWith("#") ? t : "#" + t);
function Yw(t) {
  return (
    t != null &&
    typeof t.status == "number" &&
    typeof t.statusText == "string" &&
    typeof t.internal == "boolean" &&
    "data" in t
  );
}
const rv = ["post", "put", "patch", "delete"];
new Set(rv);
const Xw = ["get", ...rv];
new Set(Xw);
/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Rs() {
  return (
    (Rs = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        }),
    Rs.apply(this, arguments)
  );
}
const Za = T.createContext(null),
  iv = T.createContext(null),
  yn = T.createContext(null),
  Ja = T.createContext(null),
  vn = T.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  sv = T.createContext(null);
function Qw(t, e) {
  let { relative: n } = e === void 0 ? {} : e;
  ji() || ue(!1);
  let { basename: r, navigator: i } = T.useContext(yn),
    { hash: s, pathname: o, search: a } = tl(t, { relative: n }),
    l = o;
  return (
    r !== "/" && (l = o === "/" ? r : Bn([r, o])),
    i.createHref({ pathname: l, search: a, hash: s })
  );
}
function ji() {
  return T.useContext(Ja) != null;
}
function Ar() {
  return (ji() || ue(!1), T.useContext(Ja).location);
}
function ov(t) {
  T.useContext(yn).static || T.useLayoutEffect(t);
}
function el() {
  let { isDataRoute: t } = T.useContext(vn);
  return t ? fS() : qw();
}
function qw() {
  ji() || ue(!1);
  let t = T.useContext(Za),
    { basename: e, future: n, navigator: r } = T.useContext(yn),
    { matches: i } = T.useContext(vn),
    { pathname: s } = Ar(),
    o = JSON.stringify(Bf(i, n.v7_relativeSplatPath)),
    a = T.useRef(!1);
  return (
    ov(() => {
      a.current = !0;
    }),
    T.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !a.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let f = Uf(u, JSON.parse(o), s, c.relative === "path");
        (t == null &&
          e !== "/" &&
          (f.pathname = f.pathname === "/" ? e : Bn([e, f.pathname])),
          (c.replace ? r.replace : r.push)(f, c.state, c));
      },
      [e, r, o, s, t],
    )
  );
}
const Zw = T.createContext(null);
function Jw(t) {
  let e = T.useContext(vn).outlet;
  return e && T.createElement(Zw.Provider, { value: t }, e);
}
function tl(t, e) {
  let { relative: n } = e === void 0 ? {} : e,
    { future: r } = T.useContext(yn),
    { matches: i } = T.useContext(vn),
    { pathname: s } = Ar(),
    o = JSON.stringify(Bf(i, r.v7_relativeSplatPath));
  return T.useMemo(() => Uf(t, JSON.parse(o), s, n === "path"), [t, o, s, n]);
}
function eS(t, e) {
  return tS(t, e);
}
function tS(t, e, n, r) {
  ji() || ue(!1);
  let { navigator: i } = T.useContext(yn),
    { matches: s } = T.useContext(vn),
    o = s[s.length - 1],
    a = o ? o.params : {};
  o && o.pathname;
  let l = o ? o.pathnameBase : "/";
  o && o.route;
  let u = Ar(),
    c;
  if (e) {
    var f;
    let _ = typeof e == "string" ? Ei(e) : e;
    (l === "/" || ((f = _.pathname) != null && f.startsWith(l)) || ue(!1),
      (c = _));
  } else c = u;
  let d = c.pathname || "/",
    h = d;
  if (l !== "/") {
    let _ = l.replace(/^\//, "").split("/");
    h = "/" + d.replace(/^\//, "").split("/").slice(_.length).join("/");
  }
  let v = Ew(t, { pathname: h }),
    m = oS(
      v &&
        v.map((_) =>
          Object.assign({}, _, {
            params: Object.assign({}, a, _.params),
            pathname: Bn([
              l,
              i.encodeLocation
                ? i.encodeLocation(_.pathname).pathname
                : _.pathname,
            ]),
            pathnameBase:
              _.pathnameBase === "/"
                ? l
                : Bn([
                    l,
                    i.encodeLocation
                      ? i.encodeLocation(_.pathnameBase).pathname
                      : _.pathnameBase,
                  ]),
          }),
        ),
      s,
      n,
      r,
    );
  return e && m
    ? T.createElement(
        Ja.Provider,
        {
          value: {
            location: Rs(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c,
            ),
            navigationType: jn.Pop,
          },
        },
        m,
      )
    : m;
}
function nS() {
  let t = cS(),
    e = Yw(t)
      ? t.status + " " + t.statusText
      : t instanceof Error
        ? t.message
        : JSON.stringify(t),
    n = t instanceof Error ? t.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return T.createElement(
    T.Fragment,
    null,
    T.createElement("h2", null, "Unexpected Application Error!"),
    T.createElement("h3", { style: { fontStyle: "italic" } }, e),
    n ? T.createElement("pre", { style: i }, n) : null,
    null,
  );
}
const rS = T.createElement(nS, null);
class iS extends T.Component {
  constructor(e) {
    (super(e),
      (this.state = {
        location: e.location,
        revalidation: e.revalidation,
        error: e.error,
      }));
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  static getDerivedStateFromProps(e, n) {
    return n.location !== e.location ||
      (n.revalidation !== "idle" && e.revalidation === "idle")
      ? { error: e.error, location: e.location, revalidation: e.revalidation }
      : {
          error: e.error !== void 0 ? e.error : n.error,
          location: n.location,
          revalidation: e.revalidation || n.revalidation,
        };
  }
  componentDidCatch(e, n) {
    console.error(
      "React Router caught the following error during render",
      e,
      n,
    );
  }
  render() {
    return this.state.error !== void 0
      ? T.createElement(
          vn.Provider,
          { value: this.props.routeContext },
          T.createElement(sv.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function sS(t) {
  let { routeContext: e, match: n, children: r } = t,
    i = T.useContext(Za);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    T.createElement(vn.Provider, { value: e }, r)
  );
}
function oS(t, e, n, r) {
  var i;
  if (
    (e === void 0 && (e = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    t == null)
  ) {
    var s;
    if (!n) return null;
    if (n.errors) t = n.matches;
    else if (
      (s = r) != null &&
      s.v7_partialHydration &&
      e.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      t = n.matches;
    else return null;
  }
  let o = t,
    a = (i = n) == null ? void 0 : i.errors;
  if (a != null) {
    let c = o.findIndex(
      (f) => f.route.id && (a == null ? void 0 : a[f.route.id]) !== void 0,
    );
    (c >= 0 || ue(!1), (o = o.slice(0, Math.min(o.length, c + 1))));
  }
  let l = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < o.length; c++) {
      let f = o[c];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = c),
        f.route.id)
      ) {
        let { loaderData: d, errors: h } = n,
          v =
            f.route.loader &&
            d[f.route.id] === void 0 &&
            (!h || h[f.route.id] === void 0);
        if (f.route.lazy || v) {
          ((l = !0), u >= 0 ? (o = o.slice(0, u + 1)) : (o = [o[0]]));
          break;
        }
      }
    }
  return o.reduceRight((c, f, d) => {
    let h,
      v = !1,
      m = null,
      _ = null;
    n &&
      ((h = a && f.route.id ? a[f.route.id] : void 0),
      (m = f.route.errorElement || rS),
      l &&
        (u < 0 && d === 0
          ? (dS("route-fallback"), (v = !0), (_ = null))
          : u === d &&
            ((v = !0), (_ = f.route.hydrateFallbackElement || null))));
    let y = e.concat(o.slice(0, d + 1)),
      p = () => {
        let x;
        return (
          h
            ? (x = m)
            : v
              ? (x = _)
              : f.route.Component
                ? (x = T.createElement(f.route.Component, null))
                : f.route.element
                  ? (x = f.route.element)
                  : (x = c),
          T.createElement(sS, {
            match: f,
            routeContext: { outlet: c, matches: y, isDataRoute: n != null },
            children: x,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || d === 0)
      ? T.createElement(iS, {
          location: n.location,
          revalidation: n.revalidation,
          component: m,
          error: h,
          children: p(),
          routeContext: { outlet: null, matches: y, isDataRoute: !0 },
        })
      : p();
  }, null);
}
var av = (function (t) {
    return (
      (t.UseBlocker = "useBlocker"),
      (t.UseRevalidator = "useRevalidator"),
      (t.UseNavigateStable = "useNavigate"),
      t
    );
  })(av || {}),
  lv = (function (t) {
    return (
      (t.UseBlocker = "useBlocker"),
      (t.UseLoaderData = "useLoaderData"),
      (t.UseActionData = "useActionData"),
      (t.UseRouteError = "useRouteError"),
      (t.UseNavigation = "useNavigation"),
      (t.UseRouteLoaderData = "useRouteLoaderData"),
      (t.UseMatches = "useMatches"),
      (t.UseRevalidator = "useRevalidator"),
      (t.UseNavigateStable = "useNavigate"),
      (t.UseRouteId = "useRouteId"),
      t
    );
  })(lv || {});
function aS(t) {
  let e = T.useContext(Za);
  return (e || ue(!1), e);
}
function lS(t) {
  let e = T.useContext(iv);
  return (e || ue(!1), e);
}
function uS(t) {
  let e = T.useContext(vn);
  return (e || ue(!1), e);
}
function uv(t) {
  let e = uS(),
    n = e.matches[e.matches.length - 1];
  return (n.route.id || ue(!1), n.route.id);
}
function cS() {
  var t;
  let e = T.useContext(sv),
    n = lS(),
    r = uv();
  return e !== void 0 ? e : (t = n.errors) == null ? void 0 : t[r];
}
function fS() {
  let { router: t } = aS(av.UseNavigateStable),
    e = uv(lv.UseNavigateStable),
    n = T.useRef(!1);
  return (
    ov(() => {
      n.current = !0;
    }),
    T.useCallback(
      function (i, s) {
        (s === void 0 && (s = {}),
          n.current &&
            (typeof i == "number"
              ? t.navigate(i)
              : t.navigate(i, Rs({ fromRouteId: e }, s))));
      },
      [t, e],
    )
  );
}
const ep = {};
function dS(t, e, n) {
  ep[t] || (ep[t] = !0);
}
function hS(t, e) {
  (t == null || t.v7_startTransition, t == null || t.v7_relativeSplatPath);
}
function pS(t) {
  let { to: e, replace: n, state: r, relative: i } = t;
  ji() || ue(!1);
  let { future: s, static: o } = T.useContext(yn),
    { matches: a } = T.useContext(vn),
    { pathname: l } = Ar(),
    u = el(),
    c = Uf(e, Bf(a, s.v7_relativeSplatPath), l, i === "path"),
    f = JSON.stringify(c);
  return (
    T.useEffect(
      () => u(JSON.parse(f), { replace: n, state: r, relative: i }),
      [u, f, i, n, r],
    ),
    null
  );
}
function mS(t) {
  return Jw(t.context);
}
function zt(t) {
  ue(!1);
}
function gS(t) {
  let {
    basename: e = "/",
    children: n = null,
    location: r,
    navigationType: i = jn.Pop,
    navigator: s,
    static: o = !1,
    future: a,
  } = t;
  ji() && ue(!1);
  let l = e.replace(/^\/*/, "/"),
    u = T.useMemo(
      () => ({
        basename: l,
        navigator: s,
        static: o,
        future: Rs({ v7_relativeSplatPath: !1 }, a),
      }),
      [l, a, s, o],
    );
  typeof r == "string" && (r = Ei(r));
  let {
      pathname: c = "/",
      search: f = "",
      hash: d = "",
      state: h = null,
      key: v = "default",
    } = r,
    m = T.useMemo(() => {
      let _ = gi(c, l);
      return _ == null
        ? null
        : {
            location: { pathname: _, search: f, hash: d, state: h, key: v },
            navigationType: i,
          };
    }, [l, c, f, d, h, v, i]);
  return m == null
    ? null
    : T.createElement(
        yn.Provider,
        { value: u },
        T.createElement(Ja.Provider, { children: n, value: m }),
      );
}
function yS(t) {
  let { children: e, location: n } = t;
  return eS(sc(e), n);
}
new Promise(() => {});
function sc(t, e) {
  e === void 0 && (e = []);
  let n = [];
  return (
    T.Children.forEach(t, (r, i) => {
      if (!T.isValidElement(r)) return;
      let s = [...e, i];
      if (r.type === T.Fragment) {
        n.push.apply(n, sc(r.props.children, s));
        return;
      }
      (r.type !== zt && ue(!1), !r.props.index || !r.props.children || ue(!1));
      let o = {
        id: r.props.id || s.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      (r.props.children && (o.children = sc(r.props.children, s)), n.push(o));
    }),
    n
  );
}
/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function xa() {
  return (
    (xa = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        }),
    xa.apply(this, arguments)
  );
}
function cv(t, e) {
  if (t == null) return {};
  var n = {},
    r = Object.keys(t),
    i,
    s;
  for (s = 0; s < r.length; s++)
    ((i = r[s]), !(e.indexOf(i) >= 0) && (n[i] = t[i]));
  return n;
}
function vS(t) {
  return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
}
function xS(t, e) {
  return t.button === 0 && (!e || e === "_self") && !vS(t);
}
const _S = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  wS = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "viewTransition",
    "children",
  ],
  SS = "6";
try {
  window.__reactRouterVersion = SS;
} catch {}
const TS = T.createContext({ isTransitioning: !1 }),
  CS = "startTransition",
  tp = d_[CS];
function PS(t) {
  let { basename: e, children: n, future: r, window: i } = t,
    s = T.useRef();
  s.current == null && (s.current = Cw({ window: i, v5Compat: !0 }));
  let o = s.current,
    [a, l] = T.useState({ action: o.action, location: o.location }),
    { v7_startTransition: u } = r || {},
    c = T.useCallback(
      (f) => {
        u && tp ? tp(() => l(f)) : l(f);
      },
      [l, u],
    );
  return (
    T.useLayoutEffect(() => o.listen(c), [o, c]),
    T.useEffect(() => hS(r), [r]),
    T.createElement(gS, {
      basename: e,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: o,
      future: r,
    })
  );
}
const kS =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  ES = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  sn = T.forwardRef(function (e, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: s,
        replace: o,
        state: a,
        target: l,
        to: u,
        preventScrollReset: c,
        viewTransition: f,
      } = e,
      d = cv(e, _S),
      { basename: h } = T.useContext(yn),
      v,
      m = !1;
    if (typeof u == "string" && ES.test(u) && ((v = u), kS))
      try {
        let x = new URL(window.location.href),
          w = u.startsWith("//") ? new URL(x.protocol + u) : new URL(u),
          S = gi(w.pathname, h);
        w.origin === x.origin && S != null
          ? (u = S + w.search + w.hash)
          : (m = !0);
      } catch {}
    let _ = Qw(u, { relative: i }),
      y = RS(u, {
        replace: o,
        state: a,
        target: l,
        preventScrollReset: c,
        relative: i,
        viewTransition: f,
      });
    function p(x) {
      (r && r(x), x.defaultPrevented || y(x));
    }
    return T.createElement(
      "a",
      xa({}, d, { href: v || _, onClick: m || s ? r : p, ref: n, target: l }),
    );
  }),
  jS = T.forwardRef(function (e, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: i = !1,
        className: s = "",
        end: o = !1,
        style: a,
        to: l,
        viewTransition: u,
        children: c,
      } = e,
      f = cv(e, wS),
      d = tl(l, { relative: f.relative }),
      h = Ar(),
      v = T.useContext(iv),
      { navigator: m, basename: _ } = T.useContext(yn),
      y = v != null && MS(d) && u === !0,
      p = m.encodeLocation ? m.encodeLocation(d).pathname : d.pathname,
      x = h.pathname,
      w =
        v && v.navigation && v.navigation.location
          ? v.navigation.location.pathname
          : null;
    (i ||
      ((x = x.toLowerCase()),
      (w = w ? w.toLowerCase() : null),
      (p = p.toLowerCase())),
      w && _ && (w = gi(w, _) || w));
    const S = p !== "/" && p.endsWith("/") ? p.length - 1 : p.length;
    let k = x === p || (!o && x.startsWith(p) && x.charAt(S) === "/"),
      P =
        w != null &&
        (w === p || (!o && w.startsWith(p) && w.charAt(p.length) === "/")),
      C = { isActive: k, isPending: P, isTransitioning: y },
      E = k ? r : void 0,
      j;
    typeof s == "function"
      ? (j = s(C))
      : (j = [
          s,
          k ? "active" : null,
          P ? "pending" : null,
          y ? "transitioning" : null,
        ]
          .filter(Boolean)
          .join(" "));
    let L = typeof a == "function" ? a(C) : a;
    return T.createElement(
      sn,
      xa({}, f, {
        "aria-current": E,
        className: j,
        ref: n,
        style: L,
        to: l,
        viewTransition: u,
      }),
      typeof c == "function" ? c(C) : c,
    );
  });
var oc;
(function (t) {
  ((t.UseScrollRestoration = "useScrollRestoration"),
    (t.UseSubmit = "useSubmit"),
    (t.UseSubmitFetcher = "useSubmitFetcher"),
    (t.UseFetcher = "useFetcher"),
    (t.useViewTransitionState = "useViewTransitionState"));
})(oc || (oc = {}));
var np;
(function (t) {
  ((t.UseFetcher = "useFetcher"),
    (t.UseFetchers = "useFetchers"),
    (t.UseScrollRestoration = "useScrollRestoration"));
})(np || (np = {}));
function NS(t) {
  let e = T.useContext(Za);
  return (e || ue(!1), e);
}
function RS(t, e) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: s,
      relative: o,
      viewTransition: a,
    } = e === void 0 ? {} : e,
    l = el(),
    u = Ar(),
    c = tl(t, { relative: o });
  return T.useCallback(
    (f) => {
      if (xS(f, n)) {
        f.preventDefault();
        let d = r !== void 0 ? r : va(u) === va(c);
        l(t, {
          replace: d,
          state: i,
          preventScrollReset: s,
          relative: o,
          viewTransition: a,
        });
      }
    },
    [u, l, c, r, i, n, t, s, o, a],
  );
}
function MS(t, e) {
  e === void 0 && (e = {});
  let n = T.useContext(TS);
  n == null && ue(!1);
  let { basename: r } = NS(oc.useViewTransitionState),
    i = tl(t, { relative: e.relative });
  if (!n.isTransitioning) return !1;
  let s = gi(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    o = gi(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return ic(i.pathname, o) != null || ic(i.pathname, s) != null;
}
const Wf = T.createContext({});
function $f(t) {
  const e = T.useRef(null);
  return (e.current === null && (e.current = t()), e.current);
}
const AS = typeof window < "u",
  fv = AS ? T.useLayoutEffect : T.useEffect,
  nl = T.createContext(null);
function Hf(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function _a(t, e) {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}
const Zt = (t, e, n) => (n > e ? e : n < t ? t : n);
let Kf = () => {};
const Kn = {},
  dv = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
function hv(t) {
  return typeof t == "object" && t !== null;
}
const pv = (t) => /^0[^.\s]+$/u.test(t);
function mv(t) {
  let e;
  return () => (e === void 0 && (e = t()), e);
}
const Tt = (t) => t,
  DS = (t, e) => (n) => e(t(n)),
  Ys = (...t) => t.reduce(DS),
  Ms = (t, e, n) => {
    const r = e - t;
    return r === 0 ? 1 : (n - t) / r;
  };
class Gf {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return (Hf(this.subscriptions, e), () => _a(this.subscriptions, e));
  }
  notify(e, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](e, n, r);
      else
        for (let s = 0; s < i; s++) {
          const o = this.subscriptions[s];
          o && o(e, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const lt = (t) => t * 1e3,
  xt = (t) => t / 1e3;
function gv(t, e) {
  return e ? t * (1e3 / e) : 0;
}
const yv = (t, e, n) =>
    (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t,
  LS = 1e-7,
  OS = 12;
function VS(t, e, n, r, i) {
  let s,
    o,
    a = 0;
  do ((o = e + (n - e) / 2), (s = yv(o, r, i) - t), s > 0 ? (n = o) : (e = o));
  while (Math.abs(s) > LS && ++a < OS);
  return o;
}
function Xs(t, e, n, r) {
  if (t === e && n === r) return Tt;
  const i = (s) => VS(s, 0, 1, t, n);
  return (s) => (s === 0 || s === 1 ? s : yv(i(s), e, r));
}
const vv = (t) => (e) => (e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2),
  xv = (t) => (e) => 1 - t(1 - e),
  _v = Xs(0.33, 1.53, 0.69, 0.99),
  Yf = xv(_v),
  wv = vv(Yf),
  Sv = (t) =>
    t >= 1
      ? 1
      : (t *= 2) < 1
        ? 0.5 * Yf(t)
        : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
  Xf = (t) => 1 - Math.sin(Math.acos(t)),
  Tv = xv(Xf),
  Cv = vv(Xf),
  IS = Xs(0.42, 0, 1, 1),
  FS = Xs(0, 0, 0.58, 1),
  Pv = Xs(0.42, 0, 0.58, 1),
  bS = (t) => Array.isArray(t) && typeof t[0] != "number",
  kv = (t) => Array.isArray(t) && typeof t[0] == "number",
  zS = {
    linear: Tt,
    easeIn: IS,
    easeInOut: Pv,
    easeOut: FS,
    circIn: Xf,
    circInOut: Cv,
    circOut: Tv,
    backIn: Yf,
    backInOut: wv,
    backOut: _v,
    anticipate: Sv,
  },
  BS = (t) => typeof t == "string",
  rp = (t) => {
    if (kv(t)) {
      Kf(t.length === 4);
      const [e, n, r, i] = t;
      return Xs(e, n, r, i);
    } else if (BS(t)) return zS[t];
    return t;
  },
  vo = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ];
function US(t, e) {
  let n = new Set(),
    r = new Set(),
    i = !1,
    s = !1;
  const o = new WeakSet();
  let a = { delta: 0, timestamp: 0, isProcessing: !1 };
  function l(c) {
    (o.has(c) && (u.schedule(c), t()), c(a));
  }
  const u = {
    schedule: (c, f = !1, d = !1) => {
      const v = d && i ? n : r;
      return (f && o.add(c), v.add(c), c);
    },
    cancel: (c) => {
      (r.delete(c), o.delete(c));
    },
    process: (c) => {
      if (((a = c), i)) {
        s = !0;
        return;
      }
      i = !0;
      const f = n;
      ((n = r),
        (r = f),
        n.forEach(l),
        n.clear(),
        (i = !1),
        s && ((s = !1), u.process(c)));
    },
  };
  return u;
}
const WS = 40;
function Ev(t, e) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    s = () => (n = !0),
    o = vo.reduce((x, w) => ((x[w] = US(s)), x), {}),
    {
      setup: a,
      read: l,
      resolveKeyframes: u,
      preUpdate: c,
      update: f,
      preRender: d,
      render: h,
      postRender: v,
    } = o,
    m = () => {
      const x = Kn.useManualTiming,
        w = x ? i.timestamp : performance.now();
      ((n = !1),
        x ||
          (i.delta = r ? 1e3 / 60 : Math.max(Math.min(w - i.timestamp, WS), 1)),
        (i.timestamp = w),
        (i.isProcessing = !0),
        a.process(i),
        l.process(i),
        u.process(i),
        c.process(i),
        f.process(i),
        d.process(i),
        h.process(i),
        v.process(i),
        (i.isProcessing = !1),
        n && e && ((r = !1), t(m)));
    },
    _ = () => {
      ((n = !0), (r = !0), i.isProcessing || t(m));
    };
  return {
    schedule: vo.reduce((x, w) => {
      const S = o[w];
      return (
        (x[w] = (k, P = !1, C = !1) => (n || _(), S.schedule(k, P, C))),
        x
      );
    }, {}),
    cancel: (x) => {
      for (let w = 0; w < vo.length; w++) o[vo[w]].cancel(x);
    },
    state: i,
    steps: o,
  };
}
const {
  schedule: Q,
  cancel: Gn,
  state: Ee,
  steps: Fl,
} = Ev(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Tt, !0);
let Io;
function $S() {
  Io = void 0;
}
const be = {
    now: () => (
      Io === void 0 &&
        be.set(
          Ee.isProcessing || Kn.useManualTiming
            ? Ee.timestamp
            : performance.now(),
        ),
      Io
    ),
    set: (t) => {
      ((Io = t), queueMicrotask($S));
    },
  },
  jv = (t) => (e) => typeof e == "string" && e.startsWith(t),
  Nv = jv("--"),
  HS = jv("var(--"),
  Qf = (t) => (HS(t) ? KS.test(t.split("/*")[0].trim()) : !1),
  KS =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function ip(t) {
  return typeof t != "string" ? !1 : t.split("/*")[0].includes("var(--");
}
const Ni = {
    test: (t) => typeof t == "number",
    parse: parseFloat,
    transform: (t) => t,
  },
  As = { ...Ni, transform: (t) => Zt(0, 1, t) },
  xo = { ...Ni, default: 1 },
  ss = (t) => Math.round(t * 1e5) / 1e5,
  qf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function GS(t) {
  return t == null;
}
const YS =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Zf = (t, e) => (n) =>
    !!(
      (typeof n == "string" && YS.test(n) && n.startsWith(t)) ||
      (e && !GS(n) && Object.prototype.hasOwnProperty.call(n, e))
    ),
  Rv = (t, e, n) => (r) => {
    if (typeof r != "string") return r;
    const [i, s, o, a] = r.match(qf);
    return {
      [t]: parseFloat(i),
      [e]: parseFloat(s),
      [n]: parseFloat(o),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  XS = (t) => Zt(0, 255, t),
  bl = { ...Ni, transform: (t) => Math.round(XS(t)) },
  pr = {
    test: Zf("rgb", "red"),
    parse: Rv("red", "green", "blue"),
    transform: ({ red: t, green: e, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      bl.transform(t) +
      ", " +
      bl.transform(e) +
      ", " +
      bl.transform(n) +
      ", " +
      ss(As.transform(r)) +
      ")",
  };
function QS(t) {
  let e = "",
    n = "",
    r = "",
    i = "";
  return (
    t.length > 5
      ? ((e = t.substring(1, 3)),
        (n = t.substring(3, 5)),
        (r = t.substring(5, 7)),
        (i = t.substring(7, 9)))
      : ((e = t.substring(1, 2)),
        (n = t.substring(2, 3)),
        (r = t.substring(3, 4)),
        (i = t.substring(4, 5)),
        (e += e),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(e, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const ac = { test: Zf("#"), parse: QS, transform: pr.transform },
  Qs = (t) => ({
    test: (e) =>
      typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
    parse: parseFloat,
    transform: (e) => `${e}${t}`,
  }),
  _n = Qs("deg"),
  Qt = Qs("%"),
  A = Qs("px"),
  qS = Qs("vh"),
  ZS = Qs("vw"),
  sp = {
    ...Qt,
    parse: (t) => Qt.parse(t) / 100,
    transform: (t) => Qt.transform(t * 100),
  },
  Xr = {
    test: Zf("hsl", "hue"),
    parse: Rv("hue", "saturation", "lightness"),
    transform: ({ hue: t, saturation: e, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(t) +
      ", " +
      Qt.transform(ss(e)) +
      ", " +
      Qt.transform(ss(n)) +
      ", " +
      ss(As.transform(r)) +
      ")",
  },
  ge = {
    test: (t) => pr.test(t) || ac.test(t) || Xr.test(t),
    parse: (t) =>
      pr.test(t) ? pr.parse(t) : Xr.test(t) ? Xr.parse(t) : ac.parse(t),
    transform: (t) =>
      typeof t == "string"
        ? t
        : t.hasOwnProperty("red")
          ? pr.transform(t)
          : Xr.transform(t),
    getAnimatableNone: (t) => {
      const e = ge.parse(t);
      return ((e.alpha = 0), ge.transform(e));
    },
  },
  JS =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function eT(t) {
  var e, n;
  return (
    isNaN(t) &&
    typeof t == "string" &&
    (((e = t.match(qf)) == null ? void 0 : e.length) || 0) +
      (((n = t.match(JS)) == null ? void 0 : n.length) || 0) >
      0
  );
}
const Mv = "number",
  Av = "color",
  tT = "var",
  nT = "var(",
  op = "${}",
  rT =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function yi(t) {
  const e = t.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [];
  let s = 0;
  const a = e
    .replace(
      rT,
      (l) => (
        ge.test(l)
          ? (r.color.push(s), i.push(Av), n.push(ge.parse(l)))
          : l.startsWith(nT)
            ? (r.var.push(s), i.push(tT), n.push(l))
            : (r.number.push(s), i.push(Mv), n.push(parseFloat(l))),
        ++s,
        op
      ),
    )
    .split(op);
  return { values: n, split: a, indexes: r, types: i };
}
function iT(t) {
  return yi(t).values;
}
function Dv({ split: t, types: e }) {
  const n = t.length;
  return (r) => {
    let i = "";
    for (let s = 0; s < n; s++)
      if (((i += t[s]), r[s] !== void 0)) {
        const o = e[s];
        o === Mv
          ? (i += ss(r[s]))
          : o === Av
            ? (i += ge.transform(r[s]))
            : (i += r[s]);
      }
    return i;
  };
}
function sT(t) {
  return Dv(yi(t));
}
const oT = (t) =>
    typeof t == "number" ? 0 : ge.test(t) ? ge.getAnimatableNone(t) : t,
  aT = (t, e) =>
    typeof t == "number"
      ? e != null && e.trim().endsWith("/")
        ? t
        : 0
      : oT(t);
function lT(t) {
  const e = yi(t);
  return Dv(e)(e.values.map((r, i) => aT(r, e.split[i])));
}
const Vt = {
  test: eT,
  parse: iT,
  createTransformer: sT,
  getAnimatableNone: lT,
};
function zl(t, e, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? t + (e - t) * 6 * n
      : n < 1 / 2
        ? e
        : n < 2 / 3
          ? t + (e - t) * (2 / 3 - n) * 6
          : t
  );
}
function uT({ hue: t, saturation: e, lightness: n, alpha: r }) {
  ((t /= 360), (e /= 100), (n /= 100));
  let i = 0,
    s = 0,
    o = 0;
  if (!e) i = s = o = n;
  else {
    const a = n < 0.5 ? n * (1 + e) : n + e - n * e,
      l = 2 * n - a;
    ((i = zl(l, a, t + 1 / 3)), (s = zl(l, a, t)), (o = zl(l, a, t - 1 / 3)));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(s * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
function wa(t, e) {
  return (n) => (n > 0 ? e : t);
}
const ee = (t, e, n) => t + (e - t) * n,
  Bl = (t, e, n) => {
    const r = t * t,
      i = n * (e * e - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  cT = [ac, pr, Xr],
  fT = (t) => cT.find((e) => e.test(t));
function ap(t) {
  const e = fT(t);
  if (!e) return !1;
  let n = e.parse(t);
  return (e === Xr && (n = uT(n)), n);
}
const lp = (t, e) => {
    const n = ap(t),
      r = ap(e);
    if (!n || !r) return wa(t, e);
    const i = { ...n };
    return (s) => (
      (i.red = Bl(n.red, r.red, s)),
      (i.green = Bl(n.green, r.green, s)),
      (i.blue = Bl(n.blue, r.blue, s)),
      (i.alpha = ee(n.alpha, r.alpha, s)),
      pr.transform(i)
    );
  },
  lc = new Set(["none", "hidden"]);
function dT(t, e) {
  return lc.has(t) ? (n) => (n <= 0 ? t : e) : (n) => (n >= 1 ? e : t);
}
function hT(t, e) {
  return (n) => ee(t, e, n);
}
function Jf(t) {
  return typeof t == "number"
    ? hT
    : typeof t == "string"
      ? Qf(t)
        ? wa
        : ge.test(t)
          ? lp
          : gT
      : Array.isArray(t)
        ? Lv
        : typeof t == "object"
          ? ge.test(t)
            ? lp
            : pT
          : wa;
}
function Lv(t, e) {
  const n = [...t],
    r = n.length,
    i = t.map((s, o) => Jf(s)(s, e[o]));
  return (s) => {
    for (let o = 0; o < r; o++) n[o] = i[o](s);
    return n;
  };
}
function pT(t, e) {
  const n = { ...t, ...e },
    r = {};
  for (const i in n)
    t[i] !== void 0 && e[i] !== void 0 && (r[i] = Jf(t[i])(t[i], e[i]));
  return (i) => {
    for (const s in r) n[s] = r[s](i);
    return n;
  };
}
function mT(t, e) {
  const n = [],
    r = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < e.values.length; i++) {
    const s = e.types[i],
      o = t.indexes[s][r[s]],
      a = t.values[o] ?? 0;
    ((n[i] = a), r[s]++);
  }
  return n;
}
const gT = (t, e) => {
  const n = Vt.createTransformer(e),
    r = yi(t),
    i = yi(e);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (lc.has(t) && !i.values.length) || (lc.has(e) && !r.values.length)
      ? dT(t, e)
      : Ys(Lv(mT(r, i), i.values), n)
    : wa(t, e);
};
function Ov(t, e, n) {
  return typeof t == "number" && typeof e == "number" && typeof n == "number"
    ? ee(t, e, n)
    : Jf(t)(t, e);
}
const yT = (t) => {
    const e = ({ timestamp: n }) => t(n);
    return {
      start: (n = !0) => Q.update(e, n),
      stop: () => Gn(e),
      now: () => (Ee.isProcessing ? Ee.timestamp : be.now()),
    };
  },
  Vv = (t, e, n = 10) => {
    let r = "";
    const i = Math.max(Math.round(e / n), 2);
    for (let s = 0; s < i; s++)
      r += Math.round(t(s / (i - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  },
  Sa = 2e4;
function ed(t) {
  let e = 0;
  const n = 50;
  let r = t.next(e);
  for (; !r.done && e < Sa; ) ((e += n), (r = t.next(e)));
  return e >= Sa ? 1 / 0 : e;
}
function vT(t, e = 100, n) {
  const r = n({ ...t, keyframes: [0, e] }),
    i = Math.min(ed(r), Sa);
  return {
    type: "keyframes",
    ease: (s) => r.next(i * s).value / e,
    duration: xt(i),
  };
}
const fe = {
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  duration: 800,
  bounce: 0.3,
  visualDuration: 0.3,
  restSpeed: { granular: 0.01, default: 2 },
  restDelta: { granular: 0.005, default: 0.5 },
  minDuration: 0.01,
  maxDuration: 10,
  minDamping: 0.05,
  maxDamping: 1,
};
function uc(t, e) {
  return t * Math.sqrt(1 - e * e);
}
const xT = 12;
function _T(t, e, n) {
  let r = n;
  for (let i = 1; i < xT; i++) r = r - t(r) / e(r);
  return r;
}
const Ul = 0.001;
function wT({
  duration: t = fe.duration,
  bounce: e = fe.bounce,
  velocity: n = fe.velocity,
  mass: r = fe.mass,
}) {
  let i,
    s,
    o = 1 - e;
  ((o = Zt(fe.minDamping, fe.maxDamping, o)),
    (t = Zt(fe.minDuration, fe.maxDuration, xt(t))),
    o < 1
      ? ((i = (u) => {
          const c = u * o,
            f = c * t,
            d = c - n,
            h = uc(u, o),
            v = Math.exp(-f);
          return Ul - (d / h) * v;
        }),
        (s = (u) => {
          const f = u * o * t,
            d = f * n + n,
            h = Math.pow(o, 2) * Math.pow(u, 2) * t,
            v = Math.exp(-f),
            m = uc(Math.pow(u, 2), o);
          return ((-i(u) + Ul > 0 ? -1 : 1) * ((d - h) * v)) / m;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * t),
            f = (u - n) * t + 1;
          return -Ul + c * f;
        }),
        (s = (u) => {
          const c = Math.exp(-u * t),
            f = (n - u) * (t * t);
          return c * f;
        })));
  const a = 5 / t,
    l = _T(i, s, a);
  if (((t = lt(t)), isNaN(l)))
    return { stiffness: fe.stiffness, damping: fe.damping, duration: t };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: o * 2 * Math.sqrt(r * u), duration: t };
  }
}
const ST = ["duration", "bounce"],
  TT = ["stiffness", "damping", "mass"];
function up(t, e) {
  return e.some((n) => t[n] !== void 0);
}
function CT(t) {
  let e = {
    velocity: fe.velocity,
    stiffness: fe.stiffness,
    damping: fe.damping,
    mass: fe.mass,
    isResolvedFromDuration: !1,
    ...t,
  };
  if (!up(t, TT) && up(t, ST))
    if (((e.velocity = 0), t.visualDuration)) {
      const n = t.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        i = r * r,
        s = 2 * Zt(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(i);
      e = { ...e, mass: fe.mass, stiffness: i, damping: s };
    } else {
      const n = wT({ ...t, velocity: 0 });
      ((e = { ...e, ...n, mass: fe.mass }), (e.isResolvedFromDuration = !0));
    }
  return e;
}
function Ta(t = fe.visualDuration, e = fe.bounce) {
  const n =
    typeof t != "object"
      ? { visualDuration: t, keyframes: [0, 1], bounce: e }
      : t;
  let { restSpeed: r, restDelta: i } = n;
  const s = n.keyframes[0],
    o = n.keyframes[n.keyframes.length - 1],
    a = { done: !1, value: s },
    {
      stiffness: l,
      damping: u,
      mass: c,
      duration: f,
      velocity: d,
      isResolvedFromDuration: h,
    } = CT({ ...n, velocity: -xt(n.velocity || 0) }),
    v = d || 0,
    m = u / (2 * Math.sqrt(l * c)),
    _ = o - s,
    y = xt(Math.sqrt(l / c)),
    p = Math.abs(_) < 5;
  (r || (r = p ? fe.restSpeed.granular : fe.restSpeed.default),
    i || (i = p ? fe.restDelta.granular : fe.restDelta.default));
  let x, w, S, k, P, C;
  if (m < 1)
    ((S = uc(y, m)),
      (k = (v + m * y * _) / S),
      (x = (j) => {
        const L = Math.exp(-m * y * j);
        return o - L * (k * Math.sin(S * j) + _ * Math.cos(S * j));
      }),
      (P = m * y * k + _ * S),
      (C = m * y * _ - k * S),
      (w = (j) =>
        Math.exp(-m * y * j) * (P * Math.sin(S * j) + C * Math.cos(S * j))));
  else if (m === 1) {
    x = (L) => o - Math.exp(-y * L) * (_ + (v + y * _) * L);
    const j = v + y * _;
    w = (L) => Math.exp(-y * L) * (y * j * L - v);
  } else {
    const j = y * Math.sqrt(m * m - 1);
    x = (z) => {
      const H = Math.exp(-m * y * z),
        U = Math.min(j * z, 300);
      return (
        o - (H * ((v + m * y * _) * Math.sinh(U) + j * _ * Math.cosh(U))) / j
      );
    };
    const L = (v + m * y * _) / j,
      I = m * y * L - _ * j,
      F = m * y * _ - L * j;
    w = (z) => {
      const H = Math.exp(-m * y * z),
        U = Math.min(j * z, 300);
      return H * (I * Math.sinh(U) + F * Math.cosh(U));
    };
  }
  const E = {
    calculatedDuration: (h && f) || null,
    velocity: (j) => lt(w(j)),
    next: (j) => {
      if (!h && m < 1) {
        const I = Math.exp(-m * y * j),
          F = Math.sin(S * j),
          z = Math.cos(S * j),
          H = o - I * (k * F + _ * z),
          U = lt(I * (P * F + C * z));
        return (
          (a.done = Math.abs(U) <= r && Math.abs(o - H) <= i),
          (a.value = a.done ? o : H),
          a
        );
      }
      const L = x(j);
      if (h) a.done = j >= f;
      else {
        const I = lt(w(j));
        a.done = Math.abs(I) <= r && Math.abs(o - L) <= i;
      }
      return ((a.value = a.done ? o : L), a);
    },
    toString: () => {
      const j = Math.min(ed(E), Sa),
        L = Vv((I) => E.next(j * I).value, j, 30);
      return j + "ms " + L;
    },
    toTransition: () => {},
  };
  return E;
}
Ta.applyToOptions = (t) => {
  const e = vT(t, 100, Ta);
  return (
    (t.ease = e.ease),
    (t.duration = lt(e.duration)),
    (t.type = "keyframes"),
    t
  );
};
const PT = 5;
function Iv(t, e, n) {
  const r = Math.max(e - PT, 0);
  return gv(n - t(r), e - r);
}
function cc({
  keyframes: t,
  velocity: e = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: s = 500,
  modifyTarget: o,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const f = t[0],
    d = { done: !1, value: f },
    h = (C) => (a !== void 0 && C < a) || (l !== void 0 && C > l),
    v = (C) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - C) < Math.abs(l - C)
          ? a
          : l;
  let m = n * e;
  const _ = f + m,
    y = o === void 0 ? _ : o(_);
  y !== _ && (m = y - f);
  const p = (C) => -m * Math.exp(-C / r),
    x = (C) => y + p(C),
    w = (C) => {
      const E = p(C),
        j = x(C);
      ((d.done = Math.abs(E) <= u), (d.value = d.done ? y : j));
    };
  let S, k;
  const P = (C) => {
    h(d.value) &&
      ((S = C),
      (k = Ta({
        keyframes: [d.value, v(d.value)],
        velocity: Iv(x, C, d.value),
        damping: i,
        stiffness: s,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    P(0),
    {
      calculatedDuration: null,
      next: (C) => {
        let E = !1;
        return (
          !k && S === void 0 && ((E = !0), w(C), P(C)),
          S !== void 0 && C >= S ? k.next(C - S) : (!E && w(C), d)
        );
      },
    }
  );
}
function kT(t, e, n) {
  const r = [],
    i = n || Kn.mix || Ov,
    s = t.length - 1;
  for (let o = 0; o < s; o++) {
    let a = i(t[o], t[o + 1]);
    if (e) {
      const l = Array.isArray(e) ? e[o] || Tt : e;
      a = Ys(l, a);
    }
    r.push(a);
  }
  return r;
}
function ET(t, e, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const s = t.length;
  if ((Kf(s === e.length), s === 1)) return () => e[0];
  if (s === 2 && e[0] === e[1]) return () => e[1];
  const o = t[0] === t[1];
  t[0] > t[s - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
  const a = kT(e, r, i),
    l = a.length,
    u = (c) => {
      if (o && c < t[0]) return e[0];
      let f = 0;
      if (l > 1) for (; f < t.length - 2 && !(c < t[f + 1]); f++);
      const d = Ms(t[f], t[f + 1], c);
      return a[f](d);
    };
  return n ? (c) => u(Zt(t[0], t[s - 1], c)) : u;
}
function jT(t, e) {
  const n = t[t.length - 1];
  for (let r = 1; r <= e; r++) {
    const i = Ms(0, e, r);
    t.push(ee(n, 1, i));
  }
}
function NT(t) {
  const e = [0];
  return (jT(e, t.length - 1), e);
}
function RT(t, e) {
  return t.map((n) => n * e);
}
function MT(t, e) {
  return t.map(() => e || Pv).splice(0, t.length - 1);
}
function os({
  duration: t = 300,
  keyframes: e,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = bS(r) ? r.map(rp) : rp(r),
    s = { done: !1, value: e[0] },
    o = RT(n && n.length === e.length ? n : NT(e), t),
    a = ET(o, e, { ease: Array.isArray(i) ? i : MT(e, i) });
  return {
    calculatedDuration: t,
    next: (l) => ((s.value = a(l)), (s.done = l >= t), s),
  };
}
const AT = (t) => t !== null;
function rl(t, { repeat: e, repeatType: n = "loop" }, r, i = 1) {
  const s = t.filter(AT),
    a = i < 0 || (e && n !== "loop" && e % 2 === 1) ? 0 : s.length - 1;
  return !a || r === void 0 ? s[a] : r;
}
const DT = { decay: cc, inertia: cc, tween: os, keyframes: os, spring: Ta };
function Fv(t) {
  typeof t.type == "string" && (t.type = DT[t.type]);
}
class td {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((e) => {
      this.resolve = e;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(e, n) {
    return this.finished.then(e, n);
  }
}
const LT = (t) => t / 100;
class Ca extends td {
  constructor(e) {
    (super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.delayState = { done: !1, value: void 0 }),
      (this.stop = () => {
        var r, i;
        const { motionValue: n } = this.options;
        (n && n.updatedAt !== be.now() && this.tick(be.now()),
          (this.isStopped = !0),
          this.state !== "idle" &&
            (this.teardown(),
            (i = (r = this.options).onStop) == null || i.call(r)));
      }),
      (this.options = e),
      this.initAnimation(),
      this.play(),
      e.autoplay === !1 && this.pause());
  }
  initAnimation() {
    const { options: e } = this;
    Fv(e);
    const {
      type: n = os,
      repeat: r = 0,
      repeatDelay: i = 0,
      repeatType: s,
      velocity: o = 0,
    } = e;
    let { keyframes: a } = e;
    const l = n || os;
    l !== os &&
      typeof a[0] != "number" &&
      ((this.mixKeyframes = Ys(LT, Ov(a[0], a[1]))), (a = [0, 100]));
    const u = l({ ...e, keyframes: a });
    (s === "mirror" &&
      (this.mirroredGenerator = l({
        ...e,
        keyframes: [...a].reverse(),
        velocity: -o,
      })),
      u.calculatedDuration === null && (u.calculatedDuration = ed(u)));
    const { calculatedDuration: c } = u;
    ((this.calculatedDuration = c),
      (this.resolvedDuration = c + i),
      (this.totalDuration = this.resolvedDuration * (r + 1) - i),
      (this.generator = u));
  }
  updateTime(e) {
    const n = Math.round(e - this.startTime) * this.playbackSpeed;
    this.holdTime !== null
      ? (this.currentTime = this.holdTime)
      : (this.currentTime = n);
  }
  tick(e, n = !1) {
    const {
      generator: r,
      totalDuration: i,
      mixKeyframes: s,
      mirroredGenerator: o,
      resolvedDuration: a,
      calculatedDuration: l,
    } = this;
    if (this.startTime === null) return r.next(0);
    const {
      delay: u = 0,
      keyframes: c,
      repeat: f,
      repeatType: d,
      repeatDelay: h,
      type: v,
      onUpdate: m,
      finalKeyframe: _,
    } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, e))
      : this.speed < 0 &&
        (this.startTime = Math.min(e - i / this.speed, this.startTime)),
      n ? (this.currentTime = e) : this.updateTime(e));
    const y = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1),
      p = this.playbackSpeed >= 0 ? y < 0 : y > i;
    ((this.currentTime = Math.max(y, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = i));
    let x = this.currentTime,
      w = r;
    if (f) {
      const C = Math.min(this.currentTime, i) / a;
      let E = Math.floor(C),
        j = C % 1;
      (!j && C >= 1 && (j = 1),
        j === 1 && E--,
        (E = Math.min(E, f + 1)),
        !!(E % 2) &&
          (d === "reverse"
            ? ((j = 1 - j), h && (j -= h / a))
            : d === "mirror" && (w = o)),
        (x = Zt(0, 1, j) * a));
    }
    let S;
    (p
      ? ((this.delayState.value = c[0]), (S = this.delayState))
      : (S = w.next(x)),
      s && !p && (S.value = s(S.value)));
    let { done: k } = S;
    !p &&
      l !== null &&
      (k =
        this.playbackSpeed >= 0
          ? this.currentTime >= i
          : this.currentTime <= 0);
    const P =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && k));
    return (
      P && v !== cc && (S.value = rl(c, this.options, _, this.speed)),
      m && m(S.value),
      P && this.finish(),
      S
    );
  }
  then(e, n) {
    return this.finished.then(e, n);
  }
  get duration() {
    return xt(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: e = 0 } = this.options || {};
    return this.duration + xt(e);
  }
  get time() {
    return xt(this.currentTime);
  }
  set time(e) {
    ((e = lt(e)),
      (this.currentTime = e),
      this.startTime === null ||
      this.holdTime !== null ||
      this.playbackSpeed === 0
        ? (this.holdTime = e)
        : this.driver &&
          (this.startTime = this.driver.now() - e / this.playbackSpeed),
      this.driver
        ? this.driver.start(!1)
        : ((this.startTime = 0),
          (this.state = "paused"),
          (this.holdTime = e),
          this.tick(e)));
  }
  getGeneratorVelocity() {
    const e = this.currentTime;
    if (e <= 0) return this.options.velocity || 0;
    if (this.generator.velocity) return this.generator.velocity(e);
    const n = this.generator.next(e).value;
    return Iv((r) => this.generator.next(r).value, e, n);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(e) {
    const n = this.playbackSpeed !== e;
    (n && this.driver && this.updateTime(be.now()),
      (this.playbackSpeed = e),
      n && this.driver && (this.time = xt(this.currentTime)));
  }
  play() {
    var i, s;
    if (this.isStopped) return;
    const { driver: e = yT, startTime: n } = this.options;
    (this.driver || (this.driver = e((o) => this.tick(o))),
      (s = (i = this.options).onPlay) == null || s.call(i));
    const r = this.driver.now();
    (this.state === "finished"
      ? (this.updateFinished(), (this.startTime = r))
      : this.holdTime !== null
        ? (this.startTime = r - this.holdTime)
        : this.startTime || (this.startTime = n ?? r),
      this.state === "finished" &&
        this.speed < 0 &&
        (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start());
  }
  pause() {
    ((this.state = "paused"),
      this.updateTime(be.now()),
      (this.holdTime = this.currentTime));
  }
  complete() {
    (this.state !== "running" && this.play(),
      (this.state = "finished"),
      (this.holdTime = null));
  }
  finish() {
    var e, n;
    (this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      (n = (e = this.options).onComplete) == null || n.call(e));
  }
  cancel() {
    var e, n;
    ((this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      (n = (e = this.options).onCancel) == null || n.call(e));
  }
  teardown() {
    ((this.state = "idle"),
      this.stopDriver(),
      (this.startTime = this.holdTime = null));
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(e) {
    return ((this.startTime = 0), this.tick(e, !0));
  }
  attachTimeline(e) {
    var n;
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"),
        (this.options.ease = "linear"),
        this.initAnimation()),
      (n = this.driver) == null || n.stop(),
      e.observe(this)
    );
  }
}
function OT(t) {
  for (let e = 1; e < t.length; e++) t[e] ?? (t[e] = t[e - 1]);
}
const mr = (t) => (t * 180) / Math.PI,
  fc = (t) => {
    const e = mr(Math.atan2(t[1], t[0]));
    return dc(e);
  },
  VT = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
    rotate: fc,
    rotateZ: fc,
    skewX: (t) => mr(Math.atan(t[1])),
    skewY: (t) => mr(Math.atan(t[2])),
    skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2,
  },
  dc = (t) => ((t = t % 360), t < 0 && (t += 360), t),
  cp = fc,
  fp = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]),
  dp = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]),
  IT = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: fp,
    scaleY: dp,
    scale: (t) => (fp(t) + dp(t)) / 2,
    rotateX: (t) => dc(mr(Math.atan2(t[6], t[5]))),
    rotateY: (t) => dc(mr(Math.atan2(-t[2], t[0]))),
    rotateZ: cp,
    rotate: cp,
    skewX: (t) => mr(Math.atan(t[4])),
    skewY: (t) => mr(Math.atan(t[1])),
    skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2,
  };
function hc(t) {
  return t.includes("scale") ? 1 : 0;
}
function pc(t, e) {
  if (!t || t === "none") return hc(e);
  const n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, i;
  if (n) ((r = IT), (i = n));
  else {
    const a = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    ((r = VT), (i = a));
  }
  if (!i) return hc(e);
  const s = r[e],
    o = i[1].split(",").map(bT);
  return typeof s == "function" ? s(o) : o[s];
}
const FT = (t, e) => {
  const { transform: n = "none" } = getComputedStyle(t);
  return pc(n, e);
};
function bT(t) {
  return parseFloat(t.trim());
}
const Ri = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  Mi = new Set(Ri),
  hp = (t) => t === Ni || t === A,
  zT = new Set(["x", "y", "z"]),
  BT = Ri.filter((t) => !zT.has(t));
function UT(t) {
  const e = [];
  return (
    BT.forEach((n) => {
      const r = t.getValue(n);
      r !== void 0 &&
        (e.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    e
  );
}
const Nn = {
  width: (
    { x: t },
    { paddingLeft: e = "0", paddingRight: n = "0", boxSizing: r },
  ) => {
    const i = t.max - t.min;
    return r === "border-box" ? i : i - parseFloat(e) - parseFloat(n);
  },
  height: (
    { y: t },
    { paddingTop: e = "0", paddingBottom: n = "0", boxSizing: r },
  ) => {
    const i = t.max - t.min;
    return r === "border-box" ? i : i - parseFloat(e) - parseFloat(n);
  },
  top: (t, { top: e }) => parseFloat(e),
  left: (t, { left: e }) => parseFloat(e),
  bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
  right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
  x: (t, { transform: e }) => pc(e, "x"),
  y: (t, { transform: e }) => pc(e, "y"),
};
Nn.translateX = Nn.x;
Nn.translateY = Nn.y;
const xr = new Set();
let mc = !1,
  gc = !1,
  yc = !1;
function bv() {
  if (gc) {
    const t = Array.from(xr).filter((r) => r.needsMeasurement),
      e = new Set(t.map((r) => r.element)),
      n = new Map();
    (e.forEach((r) => {
      const i = UT(r);
      i.length && (n.set(r, i), r.render());
    }),
      t.forEach((r) => r.measureInitialState()),
      e.forEach((r) => {
        r.render();
        const i = n.get(r);
        i &&
          i.forEach(([s, o]) => {
            var a;
            (a = r.getValue(s)) == null || a.set(o);
          });
      }),
      t.forEach((r) => r.measureEndState()),
      t.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      }));
  }
  ((gc = !1), (mc = !1), xr.forEach((t) => t.complete(yc)), xr.clear());
}
function zv() {
  xr.forEach((t) => {
    (t.readKeyframes(), t.needsMeasurement && (gc = !0));
  });
}
function WT() {
  ((yc = !0), zv(), bv(), (yc = !1));
}
class nd {
  constructor(e, n, r, i, s, o = !1) {
    ((this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...e]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = i),
      (this.element = s),
      (this.isAsync = o));
  }
  scheduleResolve() {
    ((this.state = "scheduled"),
      this.isAsync
        ? (xr.add(this), mc || ((mc = !0), Q.read(zv), Q.resolveKeyframes(bv)))
        : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: e,
      name: n,
      element: r,
      motionValue: i,
    } = this;
    if (e[0] === null) {
      const s = i == null ? void 0 : i.get(),
        o = e[e.length - 1];
      if (s !== void 0) e[0] = s;
      else if (r && n) {
        const a = r.readValue(n, o);
        a != null && (e[0] = a);
      }
      (e[0] === void 0 && (e[0] = o), i && s === void 0 && i.set(e[0]));
    }
    OT(e);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(e = !1) {
    ((this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e),
      xr.delete(this));
  }
  cancel() {
    this.state === "scheduled" && (xr.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const $T = (t) => t.startsWith("--");
function Bv(t, e, n) {
  $T(e) ? t.style.setProperty(e, n) : (t.style[e] = n);
}
const HT = {};
function Uv(t, e) {
  const n = mv(t);
  return () => HT[e] ?? n();
}
const KT = Uv(() => window.ScrollTimeline !== void 0, "scrollTimeline"),
  Wv = Uv(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  Gi = ([t, e, n, r]) => `cubic-bezier(${t}, ${e}, ${n}, ${r})`,
  pp = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Gi([0, 0.65, 0.55, 1]),
    circOut: Gi([0.55, 0, 1, 0.45]),
    backIn: Gi([0.31, 0.01, 0.66, -0.59]),
    backOut: Gi([0.33, 1.53, 0.69, 0.99]),
  };
function $v(t, e) {
  if (t)
    return typeof t == "function"
      ? Wv()
        ? Vv(t, e)
        : "ease-out"
      : kv(t)
        ? Gi(t)
        : Array.isArray(t)
          ? t.map((n) => $v(n, e) || pp.easeOut)
          : pp[t];
}
function GT(
  t,
  e,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: s = 0,
    repeatType: o = "loop",
    ease: a = "easeOut",
    times: l,
  } = {},
  u = void 0,
) {
  const c = { [e]: n };
  l && (c.offset = l);
  const f = $v(a, i);
  Array.isArray(f) && (c.easing = f);
  const d = {
    delay: r,
    duration: i,
    easing: Array.isArray(f) ? "linear" : f,
    fill: "both",
    iterations: s + 1,
    direction: o === "reverse" ? "alternate" : "normal",
  };
  return (u && (d.pseudoElement = u), t.animate(c, d));
}
function Hv(t) {
  return typeof t == "function" && "applyToOptions" in t;
}
function YT({ type: t, ...e }) {
  return Hv(t) && Wv()
    ? t.applyToOptions(e)
    : (e.duration ?? (e.duration = 300), e.ease ?? (e.ease = "easeOut"), e);
}
class Kv extends td {
  constructor(e) {
    if (
      (super(),
      (this.finishedTime = null),
      (this.isStopped = !1),
      (this.manualStartTime = null),
      !e)
    )
      return;
    const {
      element: n,
      name: r,
      keyframes: i,
      pseudoElement: s,
      allowFlatten: o = !1,
      finalKeyframe: a,
      onComplete: l,
    } = e;
    ((this.isPseudoElement = !!s),
      (this.allowFlatten = o),
      (this.options = e),
      Kf(typeof e.type != "string"));
    const u = YT(e);
    ((this.animation = GT(n, r, i, u, s)),
      u.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !s)) {
          const c = rl(i, this.options, a, this.speed);
          (this.updateMotionValue && this.updateMotionValue(c),
            Bv(n, r, c),
            this.animation.cancel());
        }
        (l == null || l(), this.notifyFinished());
      }));
  }
  play() {
    this.isStopped ||
      ((this.manualStartTime = null),
      this.animation.play(),
      this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var e, n;
    (n = (e = this.animation).finish) == null || n.call(e);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: e } = this;
    e === "idle" ||
      e === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    var n, r, i;
    const e = (n = this.options) == null ? void 0 : n.element;
    !this.isPseudoElement &&
      e != null &&
      e.isConnected &&
      ((i = (r = this.animation).commitStyles) == null || i.call(r));
  }
  get duration() {
    var n, r;
    const e =
      ((r =
        (n = this.animation.effect) == null ? void 0 : n.getComputedTiming) ==
      null
        ? void 0
        : r.call(n).duration) || 0;
    return xt(Number(e));
  }
  get iterationDuration() {
    const { delay: e = 0 } = this.options || {};
    return this.duration + xt(e);
  }
  get time() {
    return xt(Number(this.animation.currentTime) || 0);
  }
  set time(e) {
    const n = this.finishedTime !== null;
    ((this.manualStartTime = null),
      (this.finishedTime = null),
      (this.animation.currentTime = lt(e)),
      n && this.animation.pause());
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(e) {
    (e < 0 && (this.finishedTime = null), (this.animation.playbackRate = e));
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(e) {
    this.manualStartTime = this.animation.startTime = e;
  }
  attachTimeline({ timeline: e, rangeStart: n, rangeEnd: r, observe: i }) {
    var s;
    return (
      this.allowFlatten &&
        ((s = this.animation.effect) == null ||
          s.updateTiming({ easing: "linear" })),
      (this.animation.onfinish = null),
      e && KT()
        ? ((this.animation.timeline = e),
          n && (this.animation.rangeStart = n),
          r && (this.animation.rangeEnd = r),
          Tt)
        : i(this)
    );
  }
}
const Gv = { anticipate: Sv, backInOut: wv, circInOut: Cv };
function XT(t) {
  return t in Gv;
}
function QT(t) {
  typeof t.ease == "string" && XT(t.ease) && (t.ease = Gv[t.ease]);
}
const Wl = 10;
class qT extends Kv {
  constructor(e) {
    (QT(e),
      Fv(e),
      super(e),
      e.startTime !== void 0 &&
        e.autoplay !== !1 &&
        (this.startTime = e.startTime),
      (this.options = e));
  }
  updateMotionValue(e) {
    const {
      motionValue: n,
      onUpdate: r,
      onComplete: i,
      element: s,
      ...o
    } = this.options;
    if (!n) return;
    if (e !== void 0) {
      n.set(e);
      return;
    }
    const a = new Ca({ ...o, autoplay: !1 }),
      l = Math.max(Wl, be.now() - this.startTime),
      u = Zt(0, Wl, l - Wl),
      c = a.sample(l).value,
      { name: f } = this.options;
    (s && f && Bv(s, f, c),
      n.setWithVelocity(a.sample(Math.max(0, l - u)).value, c, u),
      a.stop());
  }
}
const mp = (t, e) =>
  e === "zIndex"
    ? !1
    : !!(
        typeof t == "number" ||
        Array.isArray(t) ||
        (typeof t == "string" &&
          (Vt.test(t) || t === "0") &&
          !t.startsWith("url("))
      );
function ZT(t) {
  const e = t[0];
  if (t.length === 1) return !0;
  for (let n = 0; n < t.length; n++) if (t[n] !== e) return !0;
}
function JT(t, e, n, r) {
  const i = t[0];
  if (i === null) return !1;
  if (e === "display" || e === "visibility") return !0;
  const s = t[t.length - 1],
    o = mp(i, e),
    a = mp(s, e);
  return !o || !a ? !1 : ZT(t) || ((n === "spring" || Hv(n)) && r);
}
function vc(t) {
  ((t.duration = 0), (t.type = "keyframes"));
}
const Yv = new Set(["opacity", "clipPath", "filter", "transform"]),
  eC = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function tC(t) {
  for (let e = 0; e < t.length; e++)
    if (typeof t[e] == "string" && eC.test(t[e])) return !0;
  return !1;
}
const nC = new Set([
    "color",
    "backgroundColor",
    "outlineColor",
    "fill",
    "stroke",
    "borderColor",
    "borderTopColor",
    "borderRightColor",
    "borderBottomColor",
    "borderLeftColor",
  ]),
  rC = mv(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function iC(t) {
  var f;
  const {
    motionValue: e,
    name: n,
    repeatDelay: r,
    repeatType: i,
    damping: s,
    type: o,
    keyframes: a,
  } = t;
  if (
    !(
      ((f = e == null ? void 0 : e.owner) == null
        ? void 0
        : f.current) instanceof HTMLElement
    )
  )
    return !1;
  const { onUpdate: u, transformTemplate: c } = e.owner.getProps();
  return (
    rC() &&
    n &&
    (Yv.has(n) || (nC.has(n) && tC(a))) &&
    (n !== "transform" || !c) &&
    !u &&
    !r &&
    i !== "mirror" &&
    s !== 0 &&
    o !== "inertia"
  );
}
const sC = 40;
class oC extends td {
  constructor({
    autoplay: e = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: i = 0,
    repeatDelay: s = 0,
    repeatType: o = "loop",
    keyframes: a,
    name: l,
    motionValue: u,
    element: c,
    ...f
  }) {
    var v;
    (super(),
      (this.stop = () => {
        var m, _;
        (this._animation &&
          (this._animation.stop(),
          (m = this.stopTimeline) == null || m.call(this)),
          (_ = this.keyframeResolver) == null || _.cancel());
      }),
      (this.createdAt = be.now()));
    const d = {
        autoplay: e,
        delay: n,
        type: r,
        repeat: i,
        repeatDelay: s,
        repeatType: o,
        name: l,
        motionValue: u,
        element: c,
        ...f,
      },
      h = (c == null ? void 0 : c.KeyframeResolver) || nd;
    ((this.keyframeResolver = new h(
      a,
      (m, _, y) => this.onKeyframesResolved(m, _, d, !y),
      l,
      u,
      c,
    )),
      (v = this.keyframeResolver) == null || v.scheduleResolve());
  }
  onKeyframesResolved(e, n, r, i) {
    var y, p;
    this.keyframeResolver = void 0;
    const {
      name: s,
      type: o,
      velocity: a,
      delay: l,
      isHandoff: u,
      onUpdate: c,
    } = r;
    this.resolvedAt = be.now();
    let f = !0;
    JT(e, s, o, a) ||
      ((f = !1),
      (Kn.instantAnimations || !l) && (c == null || c(rl(e, r, n))),
      (e[0] = e[e.length - 1]),
      vc(r),
      (r.repeat = 0));
    const h = {
        startTime: i
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > sC
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: n,
        ...r,
        keyframes: e,
      },
      v = f && !u && iC(h),
      m =
        (p = (y = h.motionValue) == null ? void 0 : y.owner) == null
          ? void 0
          : p.current;
    let _;
    if (v)
      try {
        _ = new qT({ ...h, element: m });
      } catch {
        _ = new Ca(h);
      }
    else _ = new Ca(h);
    (_.finished
      .then(() => {
        this.notifyFinished();
      })
      .catch(Tt),
      this.pendingTimeline &&
        ((this.stopTimeline = _.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = _));
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(e, n) {
    return this.finished.finally(e).then(() => {});
  }
  get animation() {
    var e;
    return (
      this._animation ||
        ((e = this.keyframeResolver) == null || e.resume(), WT()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(e) {
    this.animation.time = e;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(e) {
    this.animation.speed = e;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(e) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(e))
        : (this.pendingTimeline = e),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var e;
    (this._animation && this.animation.cancel(),
      (e = this.keyframeResolver) == null || e.cancel());
  }
}
function Xv(t, e, n, r = 0, i = 1) {
  const s = Array.from(t)
      .sort((u, c) => u.sortNodePosition(c))
      .indexOf(e),
    o = t.size,
    a = (o - 1) * r;
  return typeof n == "function" ? n(s, o) : i === 1 ? s * r : a - s * r;
}
const aC = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function lC(t) {
  const e = aC.exec(t);
  if (!e) return [,];
  const [, n, r, i] = e;
  return [`--${n ?? r}`, i];
}
function Qv(t, e, n = 1) {
  const [r, i] = lC(t);
  if (!r) return;
  const s = window.getComputedStyle(e).getPropertyValue(r);
  if (s) {
    const o = s.trim();
    return dv(o) ? parseFloat(o) : o;
  }
  return Qf(i) ? Qv(i, e, n + 1) : i;
}
const uC = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  cC = (t) => ({
    type: "spring",
    stiffness: 550,
    damping: t === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  fC = { type: "keyframes", duration: 0.8 },
  dC = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  hC = (t, { keyframes: e }) =>
    e.length > 2
      ? fC
      : Mi.has(t)
        ? t.startsWith("scale")
          ? cC(e[1])
          : uC
        : dC;
function qv(t, e) {
  if (t != null && t.inherit && e) {
    const { inherit: n, ...r } = t;
    return { ...e, ...r };
  }
  return t;
}
function rd(t, e) {
  const n =
    (t == null ? void 0 : t[e]) ?? (t == null ? void 0 : t.default) ?? t;
  return n !== t ? qv(n, t) : n;
}
const pC = new Set([
  "when",
  "delay",
  "delayChildren",
  "staggerChildren",
  "staggerDirection",
  "repeat",
  "repeatType",
  "repeatDelay",
  "from",
  "elapsed",
]);
function mC(t) {
  for (const e in t) if (!pC.has(e)) return !0;
  return !1;
}
const id =
  (t, e, n, r = {}, i, s) =>
  (o) => {
    const a = rd(r, t) || {},
      l = a.delay || r.delay || 0;
    let { elapsed: u = 0 } = r;
    u = u - lt(l);
    const c = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: "easeOut",
      velocity: e.getVelocity(),
      ...a,
      delay: -u,
      onUpdate: (d) => {
        (e.set(d), a.onUpdate && a.onUpdate(d));
      },
      onComplete: () => {
        (o(), a.onComplete && a.onComplete());
      },
      name: t,
      motionValue: e,
      element: s ? void 0 : i,
    };
    (mC(a) || Object.assign(c, hC(t, c)),
      c.duration && (c.duration = lt(c.duration)),
      c.repeatDelay && (c.repeatDelay = lt(c.repeatDelay)),
      c.from !== void 0 && (c.keyframes[0] = c.from));
    let f = !1;
    if (
      ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
        (vc(c), c.delay === 0 && (f = !0)),
      (Kn.instantAnimations ||
        Kn.skipAnimations ||
        (i != null && i.shouldSkipAnimations)) &&
        ((f = !0), vc(c), (c.delay = 0)),
      (c.allowFlatten = !a.type && !a.ease),
      f && !s && e.get() !== void 0)
    ) {
      const d = rl(c.keyframes, a);
      if (d !== void 0) {
        Q.update(() => {
          (c.onUpdate(d), c.onComplete());
        });
        return;
      }
    }
    return a.isSync ? new Ca(c) : new oC(c);
  };
function gp(t) {
  const e = [{}, {}];
  return (
    t == null ||
      t.values.forEach((n, r) => {
        ((e[0][r] = n.get()), (e[1][r] = n.getVelocity()));
      }),
    e
  );
}
function sd(t, e, n, r) {
  if (typeof e == "function") {
    const [i, s] = gp(r);
    e = e(n !== void 0 ? n : t.custom, i, s);
  }
  if (
    (typeof e == "string" && (e = t.variants && t.variants[e]),
    typeof e == "function")
  ) {
    const [i, s] = gp(r);
    e = e(n !== void 0 ? n : t.custom, i, s);
  }
  return e;
}
function _r(t, e, n) {
  const r = t.getProps();
  return sd(r, e, n !== void 0 ? n : r.custom, t);
}
const Zv = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...Ri,
  ]),
  yp = 30,
  gC = (t) => !isNaN(parseFloat(t));
class yC {
  constructor(e, n = {}) {
    ((this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r) => {
        var s;
        const i = be.now();
        if (
          (this.updatedAt !== i && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            ((s = this.events.change) == null || s.notify(this.current),
            this.dependents))
        )
          for (const o of this.dependents) o.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(e),
      (this.owner = n.owner));
  }
  setCurrent(e) {
    ((this.current = e),
      (this.updatedAt = be.now()),
      this.canTrackVelocity === null &&
        e !== void 0 &&
        (this.canTrackVelocity = gC(this.current)));
  }
  setPrevFrameValue(e = this.current) {
    ((this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(e) {
    return this.on("change", e);
  }
  on(e, n) {
    this.events[e] || (this.events[e] = new Gf());
    const r = this.events[e].add(n);
    return e === "change"
      ? () => {
          (r(),
            Q.read(() => {
              this.events.change.getSize() || this.stop();
            }));
        }
      : r;
  }
  clearListeners() {
    for (const e in this.events) this.events[e].clear();
  }
  attach(e, n) {
    ((this.passiveEffect = e), (this.stopPassiveEffect = n));
  }
  set(e) {
    this.passiveEffect
      ? this.passiveEffect(e, this.updateAndNotify)
      : this.updateAndNotify(e);
  }
  setWithVelocity(e, n, r) {
    (this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = e),
      (this.prevUpdatedAt = this.updatedAt - r));
  }
  jump(e, n = !0) {
    (this.updateAndNotify(e),
      (this.prev = e),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
  dirty() {
    var e;
    (e = this.events.change) == null || e.notify(this.current);
  }
  addDependent(e) {
    (this.dependents || (this.dependents = new Set()), this.dependents.add(e));
  }
  removeDependent(e) {
    this.dependents && this.dependents.delete(e);
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const e = be.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      e - this.updatedAt > yp
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, yp);
    return gv(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(e) {
    return (
      this.stop(),
      new Promise((n) => {
        ((this.hasAnimated = !0),
          (this.animation = e(n)),
          this.events.animationStart && this.events.animationStart.notify());
      }).then(() => {
        (this.events.animationComplete &&
          this.events.animationComplete.notify(),
          this.clearAnimation());
      })
    );
  }
  stop() {
    (this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation());
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    var e, n;
    ((e = this.dependents) == null || e.clear(),
      (n = this.events.destroy) == null || n.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
}
function vi(t, e) {
  return new yC(t, e);
}
const xc = (t) => Array.isArray(t);
function vC(t, e, n) {
  t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, vi(n));
}
function xC(t) {
  return xc(t) ? t[t.length - 1] || 0 : t;
}
function _C(t, e) {
  const n = _r(t, e);
  let { transitionEnd: r = {}, transition: i = {}, ...s } = n || {};
  s = { ...s, ...r };
  for (const o in s) {
    const a = xC(s[o]);
    vC(t, o, a);
  }
}
const je = (t) => !!(t && t.getVelocity);
function wC(t) {
  return !!(je(t) && t.add);
}
function _c(t, e) {
  const n = t.getValue("willChange");
  if (wC(n)) return n.add(e);
  if (!n && Kn.WillChange) {
    const r = new Kn.WillChange("auto");
    (t.addValue("willChange", r), r.add(e));
  }
}
function od(t) {
  return t.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`);
}
const SC = "framerAppearId",
  Jv = "data-" + od(SC);
function e0(t) {
  return t.props[Jv];
}
function TC({ protectedKeys: t, needsAnimating: e }, n) {
  const r = t.hasOwnProperty(n) && e[n] !== !0;
  return ((e[n] = !1), r);
}
function t0(t, e, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let { transition: s, transitionEnd: o, ...a } = e;
  const l = t.getDefaultTransition();
  s = s ? qv(s, l) : l;
  const u = s == null ? void 0 : s.reduceMotion;
  r && (s = r);
  const c = [],
    f = i && t.animationState && t.animationState.getState()[i];
  for (const d in a) {
    const h = t.getValue(d, t.latestValues[d] ?? null),
      v = a[d];
    if (v === void 0 || (f && TC(f, d))) continue;
    const m = { delay: n, ...rd(s || {}, d) },
      _ = h.get();
    if (
      _ !== void 0 &&
      !h.isAnimating() &&
      !Array.isArray(v) &&
      v === _ &&
      !m.velocity
    ) {
      Q.update(() => h.set(v));
      continue;
    }
    let y = !1;
    if (window.MotionHandoffAnimation) {
      const w = e0(t);
      if (w) {
        const S = window.MotionHandoffAnimation(w, d, Q);
        S !== null && ((m.startTime = S), (y = !0));
      }
    }
    _c(t, d);
    const p = u ?? t.shouldReduceMotion;
    h.start(id(d, h, v, p && Zv.has(d) ? { type: !1 } : m, t, y));
    const x = h.animation;
    x && c.push(x);
  }
  if (o) {
    const d = () =>
      Q.update(() => {
        o && _C(t, o);
      });
    c.length ? Promise.all(c).then(d) : d();
  }
  return c;
}
function wc(t, e, n = {}) {
  var l;
  const r = _r(
    t,
    e,
    n.type === "exit"
      ? (l = t.presenceContext) == null
        ? void 0
        : l.custom
      : void 0,
  );
  let { transition: i = t.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  const s = r ? () => Promise.all(t0(t, r, n)) : () => Promise.resolve(),
    o =
      t.variantChildren && t.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: f,
              staggerDirection: d,
            } = i;
            return CC(t, e, u, c, f, d, n);
          }
        : () => Promise.resolve(),
    { when: a } = i;
  if (a) {
    const [u, c] = a === "beforeChildren" ? [s, o] : [o, s];
    return u().then(() => c());
  } else return Promise.all([s(), o(n.delay)]);
}
function CC(t, e, n = 0, r = 0, i = 0, s = 1, o) {
  const a = [];
  for (const l of t.variantChildren)
    (l.notify("AnimationStart", e),
      a.push(
        wc(l, e, {
          ...o,
          delay:
            n +
            (typeof r == "function" ? 0 : r) +
            Xv(t.variantChildren, l, r, i, s),
        }).then(() => l.notify("AnimationComplete", e)),
      ));
  return Promise.all(a);
}
function PC(t, e, n = {}) {
  t.notify("AnimationStart", e);
  let r;
  if (Array.isArray(e)) {
    const i = e.map((s) => wc(t, s, n));
    r = Promise.all(i);
  } else if (typeof e == "string") r = wc(t, e, n);
  else {
    const i = typeof e == "function" ? _r(t, e, n.custom) : e;
    r = Promise.all(t0(t, i, n));
  }
  return r.then(() => {
    t.notify("AnimationComplete", e);
  });
}
const kC = { test: (t) => t === "auto", parse: (t) => t },
  n0 = (t) => (e) => e.test(t),
  r0 = [Ni, A, Qt, _n, ZS, qS, kC],
  vp = (t) => r0.find(n0(t));
function EC(t) {
  return typeof t == "number"
    ? t === 0
    : t !== null
      ? t === "none" || t === "0" || pv(t)
      : !0;
}
const jC = new Set(["brightness", "contrast", "saturate", "opacity"]);
function NC(t) {
  const [e, n] = t.slice(0, -1).split("(");
  if (e === "drop-shadow") return t;
  const [r] = n.match(qf) || [];
  if (!r) return t;
  const i = n.replace(r, "");
  let s = jC.has(e) ? 1 : 0;
  return (r !== n && (s *= 100), e + "(" + s + i + ")");
}
const RC = /\b([a-z-]*)\(.*?\)/gu,
  Sc = {
    ...Vt,
    getAnimatableNone: (t) => {
      const e = t.match(RC);
      return e ? e.map(NC).join(" ") : t;
    },
  },
  Tc = {
    ...Vt,
    getAnimatableNone: (t) => {
      const e = Vt.parse(t);
      return Vt.createTransformer(t)(
        e.map((r) =>
          typeof r == "number"
            ? 0
            : typeof r == "object"
              ? { ...r, alpha: 1 }
              : r,
        ),
      );
    },
  },
  xp = { ...Ni, transform: Math.round },
  MC = {
    rotate: _n,
    rotateX: _n,
    rotateY: _n,
    rotateZ: _n,
    scale: xo,
    scaleX: xo,
    scaleY: xo,
    scaleZ: xo,
    skew: _n,
    skewX: _n,
    skewY: _n,
    distance: A,
    translateX: A,
    translateY: A,
    translateZ: A,
    x: A,
    y: A,
    z: A,
    perspective: A,
    transformPerspective: A,
    opacity: As,
    originX: sp,
    originY: sp,
    originZ: A,
  },
  ad = {
    borderWidth: A,
    borderTopWidth: A,
    borderRightWidth: A,
    borderBottomWidth: A,
    borderLeftWidth: A,
    borderRadius: A,
    borderTopLeftRadius: A,
    borderTopRightRadius: A,
    borderBottomRightRadius: A,
    borderBottomLeftRadius: A,
    width: A,
    maxWidth: A,
    height: A,
    maxHeight: A,
    top: A,
    right: A,
    bottom: A,
    left: A,
    inset: A,
    insetBlock: A,
    insetBlockStart: A,
    insetBlockEnd: A,
    insetInline: A,
    insetInlineStart: A,
    insetInlineEnd: A,
    padding: A,
    paddingTop: A,
    paddingRight: A,
    paddingBottom: A,
    paddingLeft: A,
    paddingBlock: A,
    paddingBlockStart: A,
    paddingBlockEnd: A,
    paddingInline: A,
    paddingInlineStart: A,
    paddingInlineEnd: A,
    margin: A,
    marginTop: A,
    marginRight: A,
    marginBottom: A,
    marginLeft: A,
    marginBlock: A,
    marginBlockStart: A,
    marginBlockEnd: A,
    marginInline: A,
    marginInlineStart: A,
    marginInlineEnd: A,
    fontSize: A,
    backgroundPositionX: A,
    backgroundPositionY: A,
    ...MC,
    zIndex: xp,
    fillOpacity: As,
    strokeOpacity: As,
    numOctaves: xp,
  },
  AC = {
    ...ad,
    color: ge,
    backgroundColor: ge,
    outlineColor: ge,
    fill: ge,
    stroke: ge,
    borderColor: ge,
    borderTopColor: ge,
    borderRightColor: ge,
    borderBottomColor: ge,
    borderLeftColor: ge,
    filter: Sc,
    WebkitFilter: Sc,
    mask: Tc,
    WebkitMask: Tc,
  },
  i0 = (t) => AC[t],
  DC = new Set([Sc, Tc]);
function s0(t, e) {
  let n = i0(t);
  return (
    DC.has(n) || (n = Vt),
    n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
  );
}
const LC = new Set(["auto", "none", "0"]);
function OC(t, e, n) {
  let r = 0,
    i;
  for (; r < t.length && !i; ) {
    const s = t[r];
    (typeof s == "string" && !LC.has(s) && yi(s).values.length && (i = t[r]),
      r++);
  }
  if (i && n) for (const s of e) t[s] = s0(n, i);
}
class VC extends nd {
  constructor(e, n, r, i, s) {
    super(e, n, r, i, s, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let c = 0; c < e.length; c++) {
      let f = e[c];
      if (typeof f == "string" && ((f = f.trim()), Qf(f))) {
        const d = Qv(f, n.current);
        (d !== void 0 && (e[c] = d),
          c === e.length - 1 && (this.finalKeyframe = f));
      }
    }
    if ((this.resolveNoneKeyframes(), !Zv.has(r) || e.length !== 2)) return;
    const [i, s] = e,
      o = vp(i),
      a = vp(s),
      l = ip(i),
      u = ip(s);
    if (l !== u && Nn[r]) {
      this.needsMeasurement = !0;
      return;
    }
    if (o !== a)
      if (hp(o) && hp(a))
        for (let c = 0; c < e.length; c++) {
          const f = e[c];
          typeof f == "string" && (e[c] = parseFloat(f));
        }
      else Nn[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: e, name: n } = this,
      r = [];
    for (let i = 0; i < e.length; i++) (e[i] === null || EC(e[i])) && r.push(i);
    r.length && OC(e, r, n);
  }
  measureInitialState() {
    const { element: e, unresolvedKeyframes: n, name: r } = this;
    if (!e || !e.current) return;
    (r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Nn[r](
        e.measureViewportBox(),
        window.getComputedStyle(e.current),
      )),
      (n[0] = this.measuredOrigin));
    const i = n[n.length - 1];
    i !== void 0 && e.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var a;
    const { element: e, name: n, unresolvedKeyframes: r } = this;
    if (!e || !e.current) return;
    const i = e.getValue(n);
    i && i.jump(this.measuredOrigin, !1);
    const s = r.length - 1,
      o = r[s];
    ((r[s] = Nn[n](e.measureViewportBox(), window.getComputedStyle(e.current))),
      o !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = o),
      (a = this.removedTransforms) != null &&
        a.length &&
        this.removedTransforms.forEach(([l, u]) => {
          e.getValue(l).set(u);
        }),
      this.resolveNoneKeyframes());
  }
}
function ld(t, e, n) {
  if (t == null) return [];
  if (t instanceof EventTarget) return [t];
  if (typeof t == "string") {
    const i = document.querySelectorAll(t);
    return i ? Array.from(i) : [];
  }
  return Array.from(t).filter((r) => r != null);
}
const o0 = (t, e) => (e && typeof t == "number" ? e.transform(t) : t);
function Fo(t) {
  return hv(t) && "offsetHeight" in t && !("ownerSVGElement" in t);
}
const { schedule: ud } = Ev(queueMicrotask, !1),
  Rt = { x: !1, y: !1 };
function a0() {
  return Rt.x || Rt.y;
}
function IC(t) {
  return t === "x" || t === "y"
    ? Rt[t]
      ? null
      : ((Rt[t] = !0),
        () => {
          Rt[t] = !1;
        })
    : Rt.x || Rt.y
      ? null
      : ((Rt.x = Rt.y = !0),
        () => {
          Rt.x = Rt.y = !1;
        });
}
function l0(t, e) {
  const n = ld(t),
    r = new AbortController(),
    i = { passive: !0, ...e, signal: r.signal };
  return [n, i, () => r.abort()];
}
function FC(t) {
  return !(t.pointerType === "touch" || a0());
}
function bC(t, e, n = {}) {
  const [r, i, s] = l0(t, n);
  return (
    r.forEach((o) => {
      let a = !1,
        l = !1,
        u;
      const c = () => {
          o.removeEventListener("pointerleave", v);
        },
        f = (_) => {
          (u && (u(_), (u = void 0)), c());
        },
        d = (_) => {
          ((a = !1),
            window.removeEventListener("pointerup", d),
            window.removeEventListener("pointercancel", d),
            l && ((l = !1), f(_)));
        },
        h = () => {
          ((a = !0),
            window.addEventListener("pointerup", d, i),
            window.addEventListener("pointercancel", d, i));
        },
        v = (_) => {
          if (_.pointerType !== "touch") {
            if (a) {
              l = !0;
              return;
            }
            f(_);
          }
        },
        m = (_) => {
          if (!FC(_)) return;
          l = !1;
          const y = e(o, _);
          typeof y == "function" &&
            ((u = y), o.addEventListener("pointerleave", v, i));
        };
      (o.addEventListener("pointerenter", m, i),
        o.addEventListener("pointerdown", h, i));
    }),
    s
  );
}
const u0 = (t, e) => (e ? (t === e ? !0 : u0(t, e.parentElement)) : !1),
  cd = (t) =>
    t.pointerType === "mouse"
      ? typeof t.button != "number" || t.button <= 0
      : t.isPrimary !== !1,
  zC = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function BC(t) {
  return zC.has(t.tagName) || t.isContentEditable === !0;
}
const UC = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function WC(t) {
  return UC.has(t.tagName) || t.isContentEditable === !0;
}
const bo = new WeakSet();
function _p(t) {
  return (e) => {
    e.key === "Enter" && t(e);
  };
}
function $l(t, e) {
  t.dispatchEvent(
    new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 }),
  );
}
const $C = (t, e) => {
  const n = t.currentTarget;
  if (!n) return;
  const r = _p(() => {
    if (bo.has(n)) return;
    $l(n, "down");
    const i = _p(() => {
        $l(n, "up");
      }),
      s = () => $l(n, "cancel");
    (n.addEventListener("keyup", i, e), n.addEventListener("blur", s, e));
  });
  (n.addEventListener("keydown", r, e),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), e));
};
function wp(t) {
  return cd(t) && !a0();
}
const Sp = new WeakSet();
function HC(t, e, n = {}) {
  const [r, i, s] = l0(t, n),
    o = (a) => {
      const l = a.currentTarget;
      if (!wp(a) || Sp.has(a)) return;
      (bo.add(l), n.stopPropagation && Sp.add(a));
      const u = e(l, a),
        c = (h, v) => {
          (window.removeEventListener("pointerup", f),
            window.removeEventListener("pointercancel", d),
            bo.has(l) && bo.delete(l),
            wp(h) && typeof u == "function" && u(h, { success: v }));
        },
        f = (h) => {
          c(
            h,
            l === window ||
              l === document ||
              n.useGlobalTarget ||
              u0(l, h.target),
          );
        },
        d = (h) => {
          c(h, !1);
        };
      (window.addEventListener("pointerup", f, i),
        window.addEventListener("pointercancel", d, i));
    };
  return (
    r.forEach((a) => {
      ((n.useGlobalTarget ? window : a).addEventListener("pointerdown", o, i),
        Fo(a) &&
          (a.addEventListener("focus", (u) => $C(u, i)),
          !BC(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0)));
    }),
    s
  );
}
function fd(t) {
  return hv(t) && "ownerSVGElement" in t;
}
const zo = new WeakMap();
let wn;
const c0 = (t, e, n) => (r, i) =>
    i && i[0]
      ? i[0][t + "Size"]
      : fd(r) && "getBBox" in r
        ? r.getBBox()[e]
        : r[n],
  KC = c0("inline", "width", "offsetWidth"),
  GC = c0("block", "height", "offsetHeight");
function YC({ target: t, borderBoxSize: e }) {
  var n;
  (n = zo.get(t)) == null ||
    n.forEach((r) => {
      r(t, {
        get width() {
          return KC(t, e);
        },
        get height() {
          return GC(t, e);
        },
      });
    });
}
function XC(t) {
  t.forEach(YC);
}
function QC() {
  typeof ResizeObserver > "u" || (wn = new ResizeObserver(XC));
}
function qC(t, e) {
  wn || QC();
  const n = ld(t);
  return (
    n.forEach((r) => {
      let i = zo.get(r);
      (i || ((i = new Set()), zo.set(r, i)),
        i.add(e),
        wn == null || wn.observe(r));
    }),
    () => {
      n.forEach((r) => {
        const i = zo.get(r);
        (i == null || i.delete(e),
          (i != null && i.size) || wn == null || wn.unobserve(r));
      });
    }
  );
}
const Bo = new Set();
let Qr;
function ZC() {
  ((Qr = () => {
    const t = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      },
    };
    Bo.forEach((e) => e(t));
  }),
    window.addEventListener("resize", Qr));
}
function JC(t) {
  return (
    Bo.add(t),
    Qr || ZC(),
    () => {
      (Bo.delete(t),
        !Bo.size &&
          typeof Qr == "function" &&
          (window.removeEventListener("resize", Qr), (Qr = void 0)));
    }
  );
}
function Tp(t, e) {
  return typeof t == "function" ? JC(t) : qC(t, e);
}
function eP(t) {
  return fd(t) && t.tagName === "svg";
}
const tP = [...r0, ge, Vt],
  nP = (t) => tP.find(n0(t)),
  Cp = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  qr = () => ({ x: Cp(), y: Cp() }),
  Pp = () => ({ min: 0, max: 0 }),
  xe = () => ({ x: Pp(), y: Pp() }),
  rP = new WeakMap();
function il(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
function Ds(t) {
  return typeof t == "string" || Array.isArray(t);
}
const dd = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  hd = ["initial", ...dd];
function sl(t) {
  return il(t.animate) || hd.some((e) => Ds(t[e]));
}
function f0(t) {
  return !!(sl(t) || t.variants);
}
function iP(t, e, n) {
  for (const r in e) {
    const i = e[r],
      s = n[r];
    if (je(i)) t.addValue(r, i);
    else if (je(s)) t.addValue(r, vi(i, { owner: t }));
    else if (s !== i)
      if (t.hasValue(r)) {
        const o = t.getValue(r);
        o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i);
      } else {
        const o = t.getStaticValue(r);
        t.addValue(r, vi(o !== void 0 ? o : i, { owner: t }));
      }
  }
  for (const r in n) e[r] === void 0 && t.removeValue(r);
  return e;
}
const Cc = { current: null },
  d0 = { current: !1 },
  sP = typeof window < "u";
function oP() {
  if (((d0.current = !0), !!sP))
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"),
        e = () => (Cc.current = t.matches);
      (t.addEventListener("change", e), e());
    } else Cc.current = !1;
}
const kp = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
let Pa = {};
function h0(t) {
  Pa = t;
}
function aP() {
  return Pa;
}
class lP {
  scrapeMotionValuesFromProps(e, n, r) {
    return {};
  }
  constructor(
    {
      parent: e,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      skipAnimations: s,
      blockInitialAnimation: o,
      visualState: a,
    },
    l = {},
  ) {
    ((this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.shouldSkipAnimations = !1),
      (this.values = new Map()),
      (this.KeyframeResolver = nd),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.hasBeenMounted = !1),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection,
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const h = be.now();
        this.renderScheduledAt < h &&
          ((this.renderScheduledAt = h), Q.render(this.render, !1, !0));
      }));
    const { latestValues: u, renderState: c } = a;
    ((this.latestValues = u),
      (this.baseTarget = { ...u }),
      (this.initialValues = n.initial ? { ...u } : {}),
      (this.renderState = c),
      (this.parent = e),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = e ? e.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.skipAnimationsConfig = s),
      (this.options = l),
      (this.blockInitialAnimation = !!o),
      (this.isControllingVariants = sl(n)),
      (this.isVariantNode = f0(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(e && e.current)));
    const { willChange: f, ...d } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this,
    );
    for (const h in d) {
      const v = d[h];
      u[h] !== void 0 && je(v) && v.set(u[h]);
    }
  }
  mount(e) {
    var n, r;
    if (this.hasBeenMounted)
      for (const i in this.initialValues)
        ((n = this.values.get(i)) == null || n.jump(this.initialValues[i]),
          (this.latestValues[i] = this.initialValues[i]));
    ((this.current = e),
      rP.set(e, this),
      this.projection && !this.projection.instance && this.projection.mount(e),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((i, s) => this.bindToMotionValue(s, i)),
      this.reducedMotionConfig === "never"
        ? (this.shouldReduceMotion = !1)
        : this.reducedMotionConfig === "always"
          ? (this.shouldReduceMotion = !0)
          : (d0.current || oP(), (this.shouldReduceMotion = Cc.current)),
      (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
      (r = this.parent) == null || r.addChild(this),
      this.update(this.props, this.presenceContext),
      (this.hasBeenMounted = !0));
  }
  unmount() {
    var e;
    (this.projection && this.projection.unmount(),
      Gn(this.notifyUpdate),
      Gn(this.render),
      this.valueSubscriptions.forEach((n) => n()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      (e = this.parent) == null || e.removeChild(this));
    for (const n in this.events) this.events[n].clear();
    for (const n in this.features) {
      const r = this.features[n];
      r && (r.unmount(), (r.isMounted = !1));
    }
    this.current = null;
  }
  addChild(e) {
    (this.children.add(e),
      this.enteringChildren ?? (this.enteringChildren = new Set()),
      this.enteringChildren.add(e));
  }
  removeChild(e) {
    (this.children.delete(e),
      this.enteringChildren && this.enteringChildren.delete(e));
  }
  bindToMotionValue(e, n) {
    if (
      (this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)(),
      n.accelerate && Yv.has(e) && this.current instanceof HTMLElement)
    ) {
      const {
          factory: o,
          keyframes: a,
          times: l,
          ease: u,
          duration: c,
        } = n.accelerate,
        f = new Kv({
          element: this.current,
          name: e,
          keyframes: a,
          times: l,
          ease: u,
          duration: lt(c),
        }),
        d = o(f);
      this.valueSubscriptions.set(e, () => {
        (d(), f.cancel());
      });
      return;
    }
    const r = Mi.has(e);
    r && this.onBindTransform && this.onBindTransform();
    const i = n.on("change", (o) => {
      ((this.latestValues[e] = o),
        this.props.onUpdate && Q.preRender(this.notifyUpdate),
        r && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender());
    });
    let s;
    (typeof window < "u" &&
      window.MotionCheckAppearSync &&
      (s = window.MotionCheckAppearSync(this, e, n)),
      this.valueSubscriptions.set(e, () => {
        (i(), s && s(), n.owner && n.stop());
      }));
  }
  sortNodePosition(e) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== e.type
      ? 0
      : this.sortInstanceNodePosition(this.current, e.current);
  }
  updateFeatures() {
    let e = "animation";
    for (e in Pa) {
      const n = Pa[e];
      if (!n) continue;
      const { isEnabled: r, Feature: i } = n;
      if (
        (!this.features[e] &&
          i &&
          r(this.props) &&
          (this.features[e] = new i(this)),
        this.features[e])
      ) {
        const s = this.features[e];
        s.isMounted ? s.update() : (s.mount(), (s.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : xe();
  }
  getStaticValue(e) {
    return this.latestValues[e];
  }
  setStaticValue(e, n) {
    this.latestValues[e] = n;
  }
  update(e, n) {
    ((e.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = e),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n));
    for (let r = 0; r < kp.length; r++) {
      const i = kp[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const s = "on" + i,
        o = e[s];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    ((this.prevMotionValues = iP(
      this,
      this.scrapeMotionValuesFromProps(e, this.prevProps || {}, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue());
  }
  getProps() {
    return this.props;
  }
  getVariant(e) {
    return this.props.variants ? this.props.variants[e] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  addVariantChild(e) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(e),
        () => n.variantChildren.delete(e)
      );
  }
  addValue(e, n) {
    const r = this.values.get(e);
    n !== r &&
      (r && this.removeValue(e),
      this.bindToMotionValue(e, n),
      this.values.set(e, n),
      (this.latestValues[e] = n.get()));
  }
  removeValue(e) {
    this.values.delete(e);
    const n = this.valueSubscriptions.get(e);
    (n && (n(), this.valueSubscriptions.delete(e)),
      delete this.latestValues[e],
      this.removeValueFromRenderState(e, this.renderState));
  }
  hasValue(e) {
    return this.values.has(e);
  }
  getValue(e, n) {
    if (this.props.values && this.props.values[e]) return this.props.values[e];
    let r = this.values.get(e);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = vi(n === null ? void 0 : n, { owner: this })),
        this.addValue(e, r)),
      r
    );
  }
  readValue(e, n) {
    let r =
      this.latestValues[e] !== void 0 || !this.current
        ? this.latestValues[e]
        : (this.getBaseTargetFromProps(this.props, e) ??
          this.readValueFromInstance(this.current, e, this.options));
    return (
      r != null &&
        (typeof r == "string" && (dv(r) || pv(r))
          ? (r = parseFloat(r))
          : !nP(r) && Vt.test(n) && (r = s0(e, n)),
        this.setBaseTarget(e, je(r) ? r.get() : r)),
      je(r) ? r.get() : r
    );
  }
  setBaseTarget(e, n) {
    this.baseTarget[e] = n;
  }
  getBaseTarget(e) {
    var s;
    const { initial: n } = this.props;
    let r;
    if (typeof n == "string" || typeof n == "object") {
      const o = sd(
        this.props,
        n,
        (s = this.presenceContext) == null ? void 0 : s.custom,
      );
      o && (r = o[e]);
    }
    if (n && r !== void 0) return r;
    const i = this.getBaseTargetFromProps(this.props, e);
    return i !== void 0 && !je(i)
      ? i
      : this.initialValues[e] !== void 0 && r === void 0
        ? void 0
        : this.baseTarget[e];
  }
  on(e, n) {
    return (
      this.events[e] || (this.events[e] = new Gf()),
      this.events[e].add(n)
    );
  }
  notify(e, ...n) {
    this.events[e] && this.events[e].notify(...n);
  }
  scheduleRenderMicrotask() {
    ud.render(this.render);
  }
}
class p0 extends lP {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = VC));
  }
  sortInstanceNodePosition(e, n) {
    return e.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(e, n) {
    const r = e.style;
    return r ? r[n] : void 0;
  }
  removeValueFromRenderState(e, { vars: n, style: r }) {
    (delete n[e], delete r[e]);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: e } = this.props;
    je(e) &&
      (this.childSubscription = e.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
class er {
  constructor(e) {
    ((this.isMounted = !1), (this.node = e));
  }
  update() {}
}
function m0({ top: t, left: e, right: n, bottom: r }) {
  return { x: { min: e, max: n }, y: { min: t, max: r } };
}
function uP({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function cP(t, e) {
  if (!e) return t;
  const n = e({ x: t.left, y: t.top }),
    r = e({ x: t.right, y: t.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Hl(t) {
  return t === void 0 || t === 1;
}
function Pc({ scale: t, scaleX: e, scaleY: n }) {
  return !Hl(t) || !Hl(e) || !Hl(n);
}
function ur(t) {
  return (
    Pc(t) ||
    g0(t) ||
    t.z ||
    t.rotate ||
    t.rotateX ||
    t.rotateY ||
    t.skewX ||
    t.skewY
  );
}
function g0(t) {
  return Ep(t.x) || Ep(t.y);
}
function Ep(t) {
  return t && t !== "0%";
}
function ka(t, e, n) {
  const r = t - n,
    i = e * r;
  return n + i;
}
function jp(t, e, n, r, i) {
  return (i !== void 0 && (t = ka(t, i, r)), ka(t, n, r) + e);
}
function kc(t, e = 0, n = 1, r, i) {
  ((t.min = jp(t.min, e, n, r, i)), (t.max = jp(t.max, e, n, r, i)));
}
function y0(t, { x: e, y: n }) {
  (kc(t.x, e.translate, e.scale, e.originPoint),
    kc(t.y, n.translate, n.scale, n.originPoint));
}
const Np = 0.999999999999,
  Rp = 1.0000000000001;
function fP(t, e, n, r = !1) {
  var a;
  const i = n.length;
  if (!i) return;
  e.x = e.y = 1;
  let s, o;
  for (let l = 0; l < i; l++) {
    ((s = n[l]), (o = s.projectionDelta));
    const { visualElement: u } = s.options;
    (u && u.props.style && u.props.style.display === "contents") ||
      (r &&
        s.options.layoutScroll &&
        s.scroll &&
        s !== s.root &&
        ($t(t.x, -s.scroll.offset.x), $t(t.y, -s.scroll.offset.y)),
      o && ((e.x *= o.x.scale), (e.y *= o.y.scale), y0(t, o)),
      r &&
        ur(s.latestValues) &&
        Uo(t, s.latestValues, (a = s.layout) == null ? void 0 : a.layoutBox));
  }
  (e.x < Rp && e.x > Np && (e.x = 1), e.y < Rp && e.y > Np && (e.y = 1));
}
function $t(t, e) {
  ((t.min += e), (t.max += e));
}
function Mp(t, e, n, r, i = 0.5) {
  const s = ee(t.min, t.max, i);
  kc(t, e, n, s, r);
}
function Ap(t, e) {
  return typeof t == "string" ? (parseFloat(t) / 100) * (e.max - e.min) : t;
}
function Uo(t, e, n) {
  const r = n ?? t;
  (Mp(t.x, Ap(e.x, r.x), e.scaleX, e.scale, e.originX),
    Mp(t.y, Ap(e.y, r.y), e.scaleY, e.scale, e.originY));
}
function v0(t, e) {
  return m0(cP(t.getBoundingClientRect(), e));
}
function dP(t, e, n) {
  const r = v0(t, n),
    { scroll: i } = e;
  return (i && ($t(r.x, i.offset.x), $t(r.y, i.offset.y)), r);
}
const hP = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  pP = Ri.length;
function mP(t, e, n) {
  let r = "",
    i = !0;
  for (let s = 0; s < pP; s++) {
    const o = Ri[s],
      a = t[o];
    if (a === void 0) continue;
    let l = !0;
    if (typeof a == "number") l = a === (o.startsWith("scale") ? 1 : 0);
    else {
      const u = parseFloat(a);
      l = o.startsWith("scale") ? u === 1 : u === 0;
    }
    if (!l || n) {
      const u = o0(a, ad[o]);
      if (!l) {
        i = !1;
        const c = hP[o] || o;
        r += `${c}(${u}) `;
      }
      n && (e[o] = u);
    }
  }
  return ((r = r.trim()), n ? (r = n(e, i ? "" : r)) : i && (r = "none"), r);
}
function pd(t, e, n) {
  const { style: r, vars: i, transformOrigin: s } = t;
  let o = !1,
    a = !1;
  for (const l in e) {
    const u = e[l];
    if (Mi.has(l)) {
      o = !0;
      continue;
    } else if (Nv(l)) {
      i[l] = u;
      continue;
    } else {
      const c = o0(u, ad[l]);
      l.startsWith("origin") ? ((a = !0), (s[l] = c)) : (r[l] = c);
    }
  }
  if (
    (e.transform ||
      (o || n
        ? (r.transform = mP(e, t.transform, n))
        : r.transform && (r.transform = "none")),
    a)
  ) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = s;
    r.transformOrigin = `${l} ${u} ${c}`;
  }
}
function x0(t, { style: e, vars: n }, r, i) {
  const s = t.style;
  let o;
  for (o in e) s[o] = e[o];
  i == null || i.applyProjectionStyles(s, r);
  for (o in n) s.setProperty(o, n[o]);
}
function Dp(t, e) {
  return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
}
const zi = {
    correct: (t, e) => {
      if (!e.target) return t;
      if (typeof t == "string")
        if (A.test(t)) t = parseFloat(t);
        else return t;
      const n = Dp(t, e.target.x),
        r = Dp(t, e.target.y);
      return `${n}% ${r}%`;
    },
  },
  gP = {
    correct: (t, { treeScale: e, projectionDelta: n }) => {
      const r = t,
        i = Vt.parse(t);
      if (i.length > 5) return r;
      const s = Vt.createTransformer(t),
        o = typeof i[0] != "number" ? 1 : 0,
        a = n.x.scale * e.x,
        l = n.y.scale * e.y;
      ((i[0 + o] /= a), (i[1 + o] /= l));
      const u = ee(a, l, 0.5);
      return (
        typeof i[2 + o] == "number" && (i[2 + o] /= u),
        typeof i[3 + o] == "number" && (i[3 + o] /= u),
        s(i)
      );
    },
  },
  Ec = {
    borderRadius: {
      ...zi,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: zi,
    borderTopRightRadius: zi,
    borderBottomLeftRadius: zi,
    borderBottomRightRadius: zi,
    boxShadow: gP,
  };
function _0(t, { layout: e, layoutId: n }) {
  return (
    Mi.has(t) ||
    t.startsWith("origin") ||
    ((e || n !== void 0) && (!!Ec[t] || t === "opacity"))
  );
}
function md(t, e, n) {
  var o;
  const r = t.style,
    i = e == null ? void 0 : e.style,
    s = {};
  if (!r) return s;
  for (const a in r)
    (je(r[a]) ||
      (i && je(i[a])) ||
      _0(a, t) ||
      ((o = n == null ? void 0 : n.getValue(a)) == null
        ? void 0
        : o.liveStyle) !== void 0) &&
      (s[a] = r[a]);
  return s;
}
function yP(t) {
  return window.getComputedStyle(t);
}
class vP extends p0 {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = x0));
  }
  readValueFromInstance(e, n) {
    var r;
    if (Mi.has(n))
      return (r = this.projection) != null && r.isProjecting ? hc(n) : FT(e, n);
    {
      const i = yP(e),
        s = (Nv(n) ? i.getPropertyValue(n) : i[n]) || 0;
      return typeof s == "string" ? s.trim() : s;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: n }) {
    return v0(e, n);
  }
  build(e, n, r) {
    pd(e, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, n, r) {
    return md(e, n, r);
  }
}
const xP = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  _P = { offset: "strokeDashoffset", array: "strokeDasharray" };
function wP(t, e, n = 1, r = 0, i = !0) {
  t.pathLength = 1;
  const s = i ? xP : _P;
  ((t[s.offset] = `${-r}`), (t[s.array] = `${e} ${n}`));
}
const SP = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function w0(
  t,
  {
    attrX: e,
    attrY: n,
    attrScale: r,
    pathLength: i,
    pathSpacing: s = 1,
    pathOffset: o = 0,
    ...a
  },
  l,
  u,
  c,
) {
  if ((pd(t, a, u), l)) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  ((t.attrs = t.style), (t.style = {}));
  const { attrs: f, style: d } = t;
  (f.transform && ((d.transform = f.transform), delete f.transform),
    (d.transform || f.transformOrigin) &&
      ((d.transformOrigin = f.transformOrigin ?? "50% 50%"),
      delete f.transformOrigin),
    d.transform &&
      ((d.transformBox = (c == null ? void 0 : c.transformBox) ?? "fill-box"),
      delete f.transformBox));
  for (const h of SP) f[h] !== void 0 && ((d[h] = f[h]), delete f[h]);
  (e !== void 0 && (f.x = e),
    n !== void 0 && (f.y = n),
    r !== void 0 && (f.scale = r),
    i !== void 0 && wP(f, i, s, o, !1));
}
const S0 = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust",
  ]),
  T0 = (t) => typeof t == "string" && t.toLowerCase() === "svg";
function TP(t, e, n, r) {
  x0(t, e, void 0, r);
  for (const i in e.attrs) t.setAttribute(S0.has(i) ? i : od(i), e.attrs[i]);
}
function C0(t, e, n) {
  const r = md(t, e, n);
  for (const i in t)
    if (je(t[i]) || je(e[i])) {
      const s =
        Ri.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      r[s] = t[i];
    }
  return r;
}
class CP extends p0 {
  constructor() {
    (super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = xe));
  }
  getBaseTargetFromProps(e, n) {
    return e[n];
  }
  readValueFromInstance(e, n) {
    if (Mi.has(n)) {
      const r = i0(n);
      return (r && r.default) || 0;
    }
    return ((n = S0.has(n) ? n : od(n)), e.getAttribute(n));
  }
  scrapeMotionValuesFromProps(e, n, r) {
    return C0(e, n, r);
  }
  build(e, n, r) {
    w0(e, n, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(e, n, r, i) {
    TP(e, n, r, i);
  }
  mount(e) {
    ((this.isSVGTag = T0(e.tagName)), super.mount(e));
  }
}
const PP = hd.length;
function P0(t) {
  if (!t) return;
  if (!t.isControllingVariants) {
    const n = t.parent ? P0(t.parent) || {} : {};
    return (t.props.initial !== void 0 && (n.initial = t.props.initial), n);
  }
  const e = {};
  for (let n = 0; n < PP; n++) {
    const r = hd[n],
      i = t.props[r];
    (Ds(i) || i === !1) && (e[r] = i);
  }
  return e;
}
function k0(t, e) {
  if (!Array.isArray(e)) return !1;
  const n = e.length;
  if (n !== t.length) return !1;
  for (let r = 0; r < n; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
const kP = [...dd].reverse(),
  EP = dd.length;
function jP(t) {
  return (e) =>
    Promise.all(e.map(({ animation: n, options: r }) => PC(t, n, r)));
}
function NP(t) {
  let e = jP(t),
    n = Lp(),
    r = !0,
    i = !1;
  const s = (u) => (c, f) => {
    var h;
    const d = _r(
      t,
      f,
      u === "exit"
        ? (h = t.presenceContext) == null
          ? void 0
          : h.custom
        : void 0,
    );
    if (d) {
      const { transition: v, transitionEnd: m, ..._ } = d;
      c = { ...c, ..._, ...m };
    }
    return c;
  };
  function o(u) {
    e = u(t);
  }
  function a(u) {
    const { props: c } = t,
      f = P0(t.parent) || {},
      d = [],
      h = new Set();
    let v = {},
      m = 1 / 0;
    for (let y = 0; y < EP; y++) {
      const p = kP[y],
        x = n[p],
        w = c[p] !== void 0 ? c[p] : f[p],
        S = Ds(w),
        k = p === u ? x.isActive : null;
      k === !1 && (m = y);
      let P = w === f[p] && w !== c[p] && S;
      if (
        (P && (r || i) && t.manuallyAnimateOnMount && (P = !1),
        (x.protectedKeys = { ...v }),
        (!x.isActive && k === null) ||
          (!w && !x.prevProp) ||
          il(w) ||
          typeof w == "boolean")
      )
        continue;
      if (p === "exit" && x.isActive && k !== !0) {
        x.prevResolvedValues && (v = { ...v, ...x.prevResolvedValues });
        continue;
      }
      const C = RP(x.prevProp, w);
      let E = C || (p === u && x.isActive && !P && S) || (y > m && S),
        j = !1;
      const L = Array.isArray(w) ? w : [w];
      let I = L.reduce(s(p), {});
      k === !1 && (I = {});
      const { prevResolvedValues: F = {} } = x,
        z = { ...F, ...I },
        H = (N) => {
          ((E = !0),
            h.has(N) && ((j = !0), h.delete(N)),
            (x.needsAnimating[N] = !0));
          const D = t.getValue(N);
          D && (D.liveStyle = !1);
        };
      for (const N in z) {
        const D = I[N],
          O = F[N];
        if (v.hasOwnProperty(N)) continue;
        let W = !1;
        (xc(D) && xc(O) ? (W = !k0(D, O)) : (W = D !== O),
          W
            ? D != null
              ? H(N)
              : h.add(N)
            : D !== void 0 && h.has(N)
              ? H(N)
              : (x.protectedKeys[N] = !0));
      }
      ((x.prevProp = w),
        (x.prevResolvedValues = I),
        x.isActive && (v = { ...v, ...I }),
        (r || i) && t.blockInitialAnimation && (E = !1));
      const U = P && C;
      E &&
        (!U || j) &&
        d.push(
          ...L.map((N) => {
            const D = { type: p };
            if (
              typeof N == "string" &&
              (r || i) &&
              !U &&
              t.manuallyAnimateOnMount &&
              t.parent
            ) {
              const { parent: O } = t,
                W = _r(O, N);
              if (O.enteringChildren && W) {
                const { delayChildren: G } = W.transition || {};
                D.delay = Xv(O.enteringChildren, t, G);
              }
            }
            return { animation: N, options: D };
          }),
        );
    }
    if (h.size) {
      const y = {};
      if (typeof c.initial != "boolean") {
        const p = _r(t, Array.isArray(c.initial) ? c.initial[0] : c.initial);
        p && p.transition && (y.transition = p.transition);
      }
      (h.forEach((p) => {
        const x = t.getBaseTarget(p),
          w = t.getValue(p);
        (w && (w.liveStyle = !0), (y[p] = x ?? null));
      }),
        d.push({ animation: y }));
    }
    let _ = !!d.length;
    return (
      r &&
        (c.initial === !1 || c.initial === c.animate) &&
        !t.manuallyAnimateOnMount &&
        (_ = !1),
      (r = !1),
      (i = !1),
      _ ? e(d) : Promise.resolve()
    );
  }
  function l(u, c) {
    var d;
    if (n[u].isActive === c) return Promise.resolve();
    ((d = t.variantChildren) == null ||
      d.forEach((h) => {
        var v;
        return (v = h.animationState) == null ? void 0 : v.setActive(u, c);
      }),
      (n[u].isActive = c));
    const f = a(u);
    for (const h in n) n[h].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: a,
    setActive: l,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      ((n = Lp()), (i = !0));
    },
  };
}
function RP(t, e) {
  return typeof e == "string" ? e !== t : Array.isArray(e) ? !k0(e, t) : !1;
}
function ir(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Lp() {
  return {
    animate: ir(!0),
    whileInView: ir(),
    whileHover: ir(),
    whileTap: ir(),
    whileDrag: ir(),
    whileFocus: ir(),
    exit: ir(),
  };
}
function jc(t, e) {
  ((t.min = e.min), (t.max = e.max));
}
function jt(t, e) {
  (jc(t.x, e.x), jc(t.y, e.y));
}
function Op(t, e) {
  ((t.translate = e.translate),
    (t.scale = e.scale),
    (t.originPoint = e.originPoint),
    (t.origin = e.origin));
}
const E0 = 1e-4,
  MP = 1 - E0,
  AP = 1 + E0,
  j0 = 0.01,
  DP = 0 - j0,
  LP = 0 + j0;
function ze(t) {
  return t.max - t.min;
}
function OP(t, e, n) {
  return Math.abs(t - e) <= n;
}
function Vp(t, e, n, r = 0.5) {
  ((t.origin = r),
    (t.originPoint = ee(e.min, e.max, t.origin)),
    (t.scale = ze(n) / ze(e)),
    (t.translate = ee(n.min, n.max, t.origin) - t.originPoint),
    ((t.scale >= MP && t.scale <= AP) || isNaN(t.scale)) && (t.scale = 1),
    ((t.translate >= DP && t.translate <= LP) || isNaN(t.translate)) &&
      (t.translate = 0));
}
function as(t, e, n, r) {
  (Vp(t.x, e.x, n.x, r ? r.originX : void 0),
    Vp(t.y, e.y, n.y, r ? r.originY : void 0));
}
function Ip(t, e, n, r = 0) {
  const i = r ? ee(n.min, n.max, r) : n.min;
  ((t.min = i + e.min), (t.max = t.min + ze(e)));
}
function VP(t, e, n, r) {
  (Ip(t.x, e.x, n.x, r == null ? void 0 : r.x),
    Ip(t.y, e.y, n.y, r == null ? void 0 : r.y));
}
function Fp(t, e, n, r = 0) {
  const i = r ? ee(n.min, n.max, r) : n.min;
  ((t.min = e.min - i), (t.max = t.min + ze(e)));
}
function Ea(t, e, n, r) {
  (Fp(t.x, e.x, n.x, r == null ? void 0 : r.x),
    Fp(t.y, e.y, n.y, r == null ? void 0 : r.y));
}
function bp(t, e, n, r, i) {
  return (
    (t -= e),
    (t = ka(t, 1 / n, r)),
    i !== void 0 && (t = ka(t, 1 / i, r)),
    t
  );
}
function IP(t, e = 0, n = 1, r = 0.5, i, s = t, o = t) {
  if (
    (Qt.test(e) &&
      ((e = parseFloat(e)), (e = ee(o.min, o.max, e / 100) - o.min)),
    typeof e != "number")
  )
    return;
  let a = ee(s.min, s.max, r);
  (t === s && (a -= e),
    (t.min = bp(t.min, e, n, a, i)),
    (t.max = bp(t.max, e, n, a, i)));
}
function zp(t, e, [n, r, i], s, o) {
  IP(t, e[n], e[r], e[i], e.scale, s, o);
}
const FP = ["x", "scaleX", "originX"],
  bP = ["y", "scaleY", "originY"];
function Bp(t, e, n, r) {
  (zp(t.x, e, FP, n ? n.x : void 0, r ? r.x : void 0),
    zp(t.y, e, bP, n ? n.y : void 0, r ? r.y : void 0));
}
function Up(t) {
  return t.translate === 0 && t.scale === 1;
}
function N0(t) {
  return Up(t.x) && Up(t.y);
}
function Wp(t, e) {
  return t.min === e.min && t.max === e.max;
}
function zP(t, e) {
  return Wp(t.x, e.x) && Wp(t.y, e.y);
}
function $p(t, e) {
  return (
    Math.round(t.min) === Math.round(e.min) &&
    Math.round(t.max) === Math.round(e.max)
  );
}
function R0(t, e) {
  return $p(t.x, e.x) && $p(t.y, e.y);
}
function Hp(t) {
  return ze(t.x) / ze(t.y);
}
function Kp(t, e) {
  return (
    t.translate === e.translate &&
    t.scale === e.scale &&
    t.originPoint === e.originPoint
  );
}
function Ut(t) {
  return [t("x"), t("y")];
}
function BP(t, e, n) {
  let r = "";
  const i = t.x.translate / e.x,
    s = t.y.translate / e.y,
    o = (n == null ? void 0 : n.z) || 0;
  if (
    ((i || s || o) && (r = `translate3d(${i}px, ${s}px, ${o}px) `),
    (e.x !== 1 || e.y !== 1) && (r += `scale(${1 / e.x}, ${1 / e.y}) `),
    n)
  ) {
    const {
      transformPerspective: u,
      rotate: c,
      rotateX: f,
      rotateY: d,
      skewX: h,
      skewY: v,
    } = n;
    (u && (r = `perspective(${u}px) ${r}`),
      c && (r += `rotate(${c}deg) `),
      f && (r += `rotateX(${f}deg) `),
      d && (r += `rotateY(${d}deg) `),
      h && (r += `skewX(${h}deg) `),
      v && (r += `skewY(${v}deg) `));
  }
  const a = t.x.scale * e.x,
    l = t.y.scale * e.y;
  return ((a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none");
}
const M0 = [
    "borderTopLeftRadius",
    "borderTopRightRadius",
    "borderBottomLeftRadius",
    "borderBottomRightRadius",
  ],
  UP = M0.length,
  Gp = (t) => (typeof t == "string" ? parseFloat(t) : t),
  Yp = (t) => typeof t == "number" || A.test(t);
function WP(t, e, n, r, i, s) {
  i
    ? ((t.opacity = ee(0, n.opacity ?? 1, $P(r))),
      (t.opacityExit = ee(e.opacity ?? 1, 0, HP(r))))
    : s && (t.opacity = ee(e.opacity ?? 1, n.opacity ?? 1, r));
  for (let o = 0; o < UP; o++) {
    const a = M0[o];
    let l = Xp(e, a),
      u = Xp(n, a);
    if (l === void 0 && u === void 0) continue;
    (l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || Yp(l) === Yp(u)
        ? ((t[a] = Math.max(ee(Gp(l), Gp(u), r), 0)),
          (Qt.test(u) || Qt.test(l)) && (t[a] += "%"))
        : (t[a] = u));
  }
  (e.rotate || n.rotate) && (t.rotate = ee(e.rotate || 0, n.rotate || 0, r));
}
function Xp(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const $P = A0(0, 0.5, Tv),
  HP = A0(0.5, 0.95, Tt);
function A0(t, e, n) {
  return (r) => (r < t ? 0 : r > e ? 1 : n(Ms(t, e, r)));
}
function KP(t, e, n) {
  const r = je(t) ? t : vi(t);
  return (r.start(id("", r, e, n)), r.animation);
}
function Ls(t, e, n, r = { passive: !0 }) {
  return (t.addEventListener(e, n, r), () => t.removeEventListener(e, n));
}
const GP = (t, e) => t.depth - e.depth;
class YP {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(e) {
    (Hf(this.children, e), (this.isDirty = !0));
  }
  remove(e) {
    (_a(this.children, e), (this.isDirty = !0));
  }
  forEach(e) {
    (this.isDirty && this.children.sort(GP),
      (this.isDirty = !1),
      this.children.forEach(e));
  }
}
function XP(t, e) {
  const n = be.now(),
    r = ({ timestamp: i }) => {
      const s = i - n;
      s >= e && (Gn(r), t(s - e));
    };
  return (Q.setup(r, !0), () => Gn(r));
}
function Wo(t) {
  return je(t) ? t.get() : t;
}
class QP {
  constructor() {
    this.members = [];
  }
  add(e) {
    Hf(this.members, e);
    for (let n = this.members.length - 1; n >= 0; n--) {
      const r = this.members[n];
      if (r === e || r === this.lead || r === this.prevLead) continue;
      const i = r.instance;
      (!i || i.isConnected === !1) &&
        !r.snapshot &&
        (_a(this.members, r), r.unmount());
    }
    e.scheduleRender();
  }
  remove(e) {
    if (
      (_a(this.members, e),
      e === this.prevLead && (this.prevLead = void 0),
      e === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(e) {
    var n;
    for (let r = this.members.indexOf(e) - 1; r >= 0; r--) {
      const i = this.members[r];
      if (
        i.isPresent !== !1 &&
        ((n = i.instance) == null ? void 0 : n.isConnected) !== !1
      )
        return (this.promote(i), !0);
    }
    return !1;
  }
  promote(e, n) {
    var i;
    const r = this.lead;
    if (e !== r && ((this.prevLead = r), (this.lead = e), e.show(), r)) {
      (r.updateSnapshot(), e.scheduleRender());
      const { layoutDependency: s } = r.options,
        { layoutDependency: o } = e.options;
      ((s === void 0 || s !== o) &&
        ((e.resumeFrom = r),
        n && (r.preserveOpacity = !0),
        r.snapshot &&
          ((e.snapshot = r.snapshot),
          (e.snapshot.latestValues = r.animationValues || r.latestValues)),
        (i = e.root) != null && i.isUpdating && (e.isLayoutDirty = !0)),
        e.options.crossfade === !1 && r.hide());
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      var n, r, i, s, o;
      ((r = (n = e.options).onExitComplete) == null || r.call(n),
        (o =
          (i = e.resumingFrom) == null
            ? void 0
            : (s = i.options).onExitComplete) == null || o.call(s));
    });
  }
  scheduleRender() {
    this.members.forEach((e) => e.instance && e.scheduleRender(!1));
  }
  removeLeadSnapshot() {
    var e;
    (e = this.lead) != null && e.snapshot && (this.lead.snapshot = void 0);
  }
}
const $o = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
  Kl = ["", "X", "Y", "Z"],
  qP = 1e3;
let ZP = 0;
function Gl(t, e, n, r) {
  const { latestValues: i } = e;
  i[t] && ((n[t] = i[t]), e.setStaticValue(t, 0), r && (r[t] = 0));
}
function D0(t) {
  if (((t.hasCheckedOptimisedAppear = !0), t.root === t)) return;
  const { visualElement: e } = t.options;
  if (!e) return;
  const n = e0(e);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: s } = t.options;
    window.MotionCancelOptimisedAnimation(n, "transform", Q, !(i || s));
  }
  const { parent: r } = t;
  r && !r.hasCheckedOptimisedAppear && D0(r);
}
function L0({
  attachResizeListener: t,
  defaultParent: e,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(o = {}, a = e == null ? void 0 : e()) {
      ((this.id = ZP++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.layoutVersion = 0),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            this.nodes.forEach(tk),
            this.nodes.forEach(ak),
            this.nodes.forEach(lk),
            this.nodes.forEach(nk));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.linkedParentVersion = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = o),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0));
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new YP());
    }
    addEventListener(o, a) {
      return (
        this.eventHandlers.has(o) || this.eventHandlers.set(o, new Gf()),
        this.eventHandlers.get(o).add(a)
      );
    }
    notifyListeners(o, ...a) {
      const l = this.eventHandlers.get(o);
      l && l.notify(...a);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    mount(o) {
      if (this.instance) return;
      ((this.isSVG = fd(o) && !eP(o)), (this.instance = o));
      const { layoutId: a, layout: l, visualElement: u } = this.options;
      if (
        (u && !u.current && u.mount(o),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0),
        t)
      ) {
        let c,
          f = 0;
        const d = () => (this.root.updateBlockedByResize = !1);
        (Q.read(() => {
          f = window.innerWidth;
        }),
          t(o, () => {
            const h = window.innerWidth;
            h !== f &&
              ((f = h),
              (this.root.updateBlockedByResize = !0),
              c && c(),
              (c = XP(d, 250)),
              $o.hasAnimatedSinceResize &&
                (($o.hasAnimatedSinceResize = !1), this.nodes.forEach(Zp)));
          }));
      }
      (a && this.root.registerSharedNode(a, this),
        this.options.animate !== !1 &&
          u &&
          (a || l) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: c,
              hasLayoutChanged: f,
              hasRelativeLayoutChanged: d,
              layout: h,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const v =
                  this.options.transition || u.getDefaultTransition() || hk,
                { onLayoutAnimationStart: m, onLayoutAnimationComplete: _ } =
                  u.getProps(),
                y = !this.targetLayout || !R0(this.targetLayout, h),
                p = !f && d;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                p ||
                (f && (y || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const x = { ...rd(v, "layout"), onPlay: m, onComplete: _ };
                ((u.shouldReduceMotion || this.options.layoutRoot) &&
                  ((x.delay = 0), (x.type = !1)),
                  this.startAnimation(x),
                  this.setAnimationOrigin(c, p));
              } else
                (f || Zp(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete());
              this.targetLayout = h;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this));
      const o = this.getStack();
      (o && o.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        Gn(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(uk),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          D0(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c];
        ((f.shouldResetTransform = !0),
          (typeof f.latestValues.x == "string" ||
            typeof f.latestValues.y == "string") &&
            (f.isLayoutDirty = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1));
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = u
        ? u(this.latestValues, "")
        : void 0),
        this.updateSnapshot(),
        o && this.notifyListeners("willUpdate"));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        const l = this.updateBlockedByResize;
        (this.unblockUpdate(),
          (this.updateBlockedByResize = !1),
          this.clearAllSnapshots(),
          l && this.nodes.forEach(ik),
          this.nodes.forEach(Qp));
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(qp);
        return;
      }
      ((this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(sk),
            this.nodes.forEach(ok),
            this.nodes.forEach(JP),
            this.nodes.forEach(ek))
          : this.nodes.forEach(qp),
        this.clearAllSnapshots());
      const a = be.now();
      ((Ee.delta = Zt(0, 1e3 / 60, a - Ee.timestamp)),
        (Ee.timestamp = a),
        (Ee.isProcessing = !0),
        Fl.update.process(Ee),
        Fl.preRender.process(Ee),
        Fl.render.process(Ee),
        (Ee.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), ud.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(rk), this.sharedNodes.forEach(ck));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        Q.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Q.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !ze(this.snapshot.measuredBox.x) &&
          !ze(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const o = this.layout;
      ((this.layout = this.measure(!1)),
        this.layoutVersion++,
        this.layoutCorrected || (this.layoutCorrected = xe()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox));
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          o ? o.layoutBox : void 0,
        );
    }
    updateScroll(o = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === o &&
          (a = !1),
        a && this.instance)
      ) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: o,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      const o =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !N0(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      o &&
        this.instance &&
        (a || ur(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(o = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        o && (l = this.removeTransform(l)),
        pk(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var u;
      const { visualElement: o } = this.options;
      if (!o) return xe();
      const a = o.measureViewportBox();
      if (
        !(
          ((u = this.scroll) == null ? void 0 : u.wasRoot) || this.path.some(mk)
        )
      ) {
        const { scroll: c } = this.root;
        c && ($t(a.x, c.offset.x), $t(a.y, c.offset.y));
      }
      return a;
    }
    removeElementScroll(o) {
      var l;
      const a = xe();
      if ((jt(a, o), (l = this.scroll) != null && l.wasRoot)) return a;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u],
          { scroll: f, options: d } = c;
        c !== this.root &&
          f &&
          d.layoutScroll &&
          (f.wasRoot && jt(a, o), $t(a.x, f.offset.x), $t(a.y, f.offset.y));
      }
      return a;
    }
    applyTransform(o, a = !1, l) {
      var c, f;
      const u = l || xe();
      jt(u, o);
      for (let d = 0; d < this.path.length; d++) {
        const h = this.path[d];
        (!a &&
          h.options.layoutScroll &&
          h.scroll &&
          h !== h.root &&
          ($t(u.x, -h.scroll.offset.x), $t(u.y, -h.scroll.offset.y)),
          ur(h.latestValues) &&
            Uo(
              u,
              h.latestValues,
              (c = h.layout) == null ? void 0 : c.layoutBox,
            ));
      }
      return (
        ur(this.latestValues) &&
          Uo(
            u,
            this.latestValues,
            (f = this.layout) == null ? void 0 : f.layoutBox,
          ),
        u
      );
    }
    removeTransform(o) {
      var l;
      const a = xe();
      jt(a, o);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        if (!ur(c.latestValues)) continue;
        let f;
        (c.instance &&
          (Pc(c.latestValues) && c.updateSnapshot(),
          (f = xe()),
          jt(f, c.measurePageBox())),
          Bp(
            a,
            c.latestValues,
            (l = c.snapshot) == null ? void 0 : l.layoutBox,
            f,
          ));
      }
      return (ur(this.latestValues) && Bp(a, this.latestValues), a);
    }
    setTargetDelta(o) {
      ((this.targetDelta = o),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0));
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Ee.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var h;
      const a = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = a.isSharedProjectionDirty));
      const l = !!this.resumingFrom || this !== a;
      if (
        !(
          o ||
          (l && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          ((h = this.parent) != null && h.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: c, layoutId: f } = this.options;
      if (!this.layout || !(c || f)) return;
      this.resolvedRelativeTargetAt = Ee.timestamp;
      const d = this.getClosestProjectingParent();
      (d &&
        this.linkedParentVersion !== d.layoutVersion &&
        !d.options.layoutRoot &&
        this.removeRelativeTarget(),
        !this.targetDelta &&
          !this.relativeTarget &&
          (this.options.layoutAnchor !== !1 && d && d.layout
            ? this.createRelativeTarget(
                d,
                this.layout.layoutBox,
                d.layout.layoutBox,
              )
            : this.removeRelativeTarget()),
        !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = xe()), (this.targetWithTransforms = xe())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              VP(
                this.target,
                this.relativeTarget,
                this.relativeParent.target,
                this.options.layoutAnchor || void 0,
              ))
            : this.targetDelta
              ? (this.resumingFrom
                  ? this.applyTransform(this.layout.layoutBox, !1, this.target)
                  : jt(this.target, this.layout.layoutBox),
                y0(this.target, this.targetDelta))
              : jt(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget &&
            ((this.attemptToResolveRelativeTarget = !1),
            this.options.layoutAnchor !== !1 &&
            d &&
            !!d.resumingFrom == !!this.resumingFrom &&
            !d.options.layoutScroll &&
            d.target &&
            this.animationProgress !== 1
              ? this.createRelativeTarget(d, this.target, d.target)
              : (this.relativeParent = this.relativeTarget = void 0))));
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Pc(this.parent.latestValues) ||
          g0(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    createRelativeTarget(o, a, l) {
      ((this.relativeParent = o),
        (this.linkedParentVersion = o.layoutVersion),
        this.forceRelativeParentToResolveTarget(),
        (this.relativeTarget = xe()),
        (this.relativeTargetOrigin = xe()),
        Ea(
          this.relativeTargetOrigin,
          a,
          l,
          this.options.layoutAnchor || void 0,
        ),
        jt(this.relativeTarget, this.relativeTargetOrigin));
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      var v;
      const o = this.getLead(),
        a = !!this.resumingFrom || this !== o;
      let l = !0;
      if (
        ((this.isProjectionDirty ||
          ((v = this.parent) != null && v.isProjectionDirty)) &&
          (l = !1),
        a &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (l = !1),
        this.resolvedRelativeTargetAt === Ee.timestamp && (l = !1),
        l)
      )
        return;
      const { layout: u, layoutId: c } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(u || c))
      )
        return;
      jt(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x,
        d = this.treeScale.y;
      (fP(this.layoutCorrected, this.treeScale, this.path, a),
        o.layout &&
          !o.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((o.target = o.layout.layoutBox), (o.targetWithTransforms = xe())));
      const { target: h } = o;
      if (!h) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Op(this.prevProjectionDelta.x, this.projectionDelta.x),
          Op(this.prevProjectionDelta.y, this.projectionDelta.y)),
        as(this.projectionDelta, this.layoutCorrected, h, this.latestValues),
        (this.treeScale.x !== f ||
          this.treeScale.y !== d ||
          !Kp(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Kp(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", h)));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      var a;
      if (((a = this.options.visualElement) == null || a.scheduleRender(), o)) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = qr()),
        (this.projectionDelta = qr()),
        (this.projectionDeltaWithTransform = qr()));
    }
    setAnimationOrigin(o, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        f = qr();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a));
      const d = xe(),
        h = l ? l.source : void 0,
        v = this.layout ? this.layout.source : void 0,
        m = h !== v,
        _ = this.getStack(),
        y = !_ || _.members.length <= 1,
        p = !!(m && !y && this.options.crossfade === !0 && !this.path.some(dk));
      this.animationProgress = 0;
      let x;
      ((this.mixTargetDelta = (w) => {
        const S = w / 1e3;
        (Jp(f.x, o.x, S),
          Jp(f.y, o.y, S),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Ea(
              d,
              this.layout.layoutBox,
              this.relativeParent.layout.layoutBox,
              this.options.layoutAnchor || void 0,
            ),
            fk(this.relativeTarget, this.relativeTargetOrigin, d, S),
            x && zP(this.relativeTarget, x) && (this.isProjectionDirty = !1),
            x || (x = xe()),
            jt(x, this.relativeTarget)),
          m &&
            ((this.animationValues = c), WP(c, u, this.latestValues, S, p, y)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = S));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(o) {
      var a, l, u;
      (this.notifyListeners("animationStart"),
        (a = this.currentAnimation) == null || a.stop(),
        (u = (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) ==
          null || u.stop(),
        this.pendingAnimation &&
          (Gn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = Q.update(() => {
          (($o.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = vi(0)),
            this.motionValue.jump(0, !1),
            (this.currentAnimation = KP(this.motionValue, [0, 1e3], {
              ...o,
              velocity: 0,
              isSync: !0,
              onUpdate: (c) => {
                (this.mixTargetDelta(c), o.onUpdate && o.onUpdate(c));
              },
              onStop: () => {},
              onComplete: () => {
                (o.onComplete && o.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const o = this.getStack();
      (o && o.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete"));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(qP),
        this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: u,
        latestValues: c,
      } = o;
      if (!(!a || !l || !u)) {
        if (
          this !== o &&
          this.layout &&
          u &&
          O0(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || xe();
          const f = ze(this.layout.layoutBox.x);
          ((l.x.min = o.target.x.min), (l.x.max = l.x.min + f));
          const d = ze(this.layout.layoutBox.y);
          ((l.y.min = o.target.y.min), (l.y.max = l.y.min + d));
        }
        (jt(a, l),
          Uo(a, c),
          as(this.projectionDeltaWithTransform, this.layoutCorrected, a, c));
      }
    }
    registerSharedNode(o, a) {
      (this.sharedNodes.has(o) || this.sharedNodes.set(o, new QP()),
        this.sharedNodes.get(o).add(a));
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      var a;
      const { layoutId: o } = this.options;
      return o
        ? ((a = this.getStack()) == null ? void 0 : a.lead) || this
        : this;
    }
    getPrevLead() {
      var a;
      const { layoutId: o } = this.options;
      return o ? ((a = this.getStack()) == null ? void 0 : a.prevLead) : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o) return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      (u && u.promote(this, l),
        o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a }));
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options;
      if (!o) return;
      let a = !1;
      const { latestValues: l } = o;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const u = {};
      l.z && Gl("z", o, u, this.animationValues);
      for (let c = 0; c < Kl.length; c++)
        (Gl(`rotate${Kl[c]}`, o, u, this.animationValues),
          Gl(`skew${Kl[c]}`, o, u, this.animationValues));
      o.render();
      for (const c in u)
        (o.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c]));
      o.scheduleRender();
    }
    applyProjectionStyles(o, a) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        o.visibility = "hidden";
        return;
      }
      const l = this.getTransformTemplate();
      if (this.needsReset) {
        ((this.needsReset = !1),
          (o.visibility = ""),
          (o.opacity = ""),
          (o.pointerEvents = Wo(a == null ? void 0 : a.pointerEvents) || ""),
          (o.transform = l ? l(this.latestValues, "") : "none"));
        return;
      }
      const u = this.getLead();
      if (!this.projectionDelta || !this.layout || !u.target) {
        (this.options.layoutId &&
          ((o.opacity =
            this.latestValues.opacity !== void 0
              ? this.latestValues.opacity
              : 1),
          (o.pointerEvents = Wo(a == null ? void 0 : a.pointerEvents) || "")),
          this.hasProjected &&
            !ur(this.latestValues) &&
            ((o.transform = l ? l({}, "") : "none"), (this.hasProjected = !1)));
        return;
      }
      o.visibility = "";
      const c = u.animationValues || u.latestValues;
      this.applyTransformsToTarget();
      let f = BP(this.projectionDeltaWithTransform, this.treeScale, c);
      (l && (f = l(c, f)), (o.transform = f));
      const { x: d, y: h } = this.projectionDelta;
      ((o.transformOrigin = `${d.origin * 100}% ${h.origin * 100}% 0`),
        u.animationValues
          ? (o.opacity =
              u === this
                ? (c.opacity ?? this.latestValues.opacity ?? 1)
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : c.opacityExit)
          : (o.opacity =
              u === this
                ? c.opacity !== void 0
                  ? c.opacity
                  : ""
                : c.opacityExit !== void 0
                  ? c.opacityExit
                  : 0));
      for (const v in Ec) {
        if (c[v] === void 0) continue;
        const { correct: m, applyTo: _, isCSSVariable: y } = Ec[v],
          p = f === "none" ? c[v] : m(c[v], u);
        if (_) {
          const x = _.length;
          for (let w = 0; w < x; w++) o[_[w]] = p;
        } else
          y ? (this.options.visualElement.renderState.vars[v] = p) : (o[v] = p);
      }
      this.options.layoutId &&
        (o.pointerEvents =
          u === this ? Wo(a == null ? void 0 : a.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((o) => {
        var a;
        return (a = o.currentAnimation) == null ? void 0 : a.stop();
      }),
        this.root.nodes.forEach(Qp),
        this.root.sharedNodes.clear());
    }
  };
}
function JP(t) {
  t.updateLayout();
}
function ek(t) {
  var n;
  const e = ((n = t.resumeFrom) == null ? void 0 : n.snapshot) || t.snapshot;
  if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = t.layout,
      { animationType: s } = t.options,
      o = e.source !== t.layout.source;
    if (s === "size")
      Ut((f) => {
        const d = o ? e.measuredBox[f] : e.layoutBox[f],
          h = ze(d);
        ((d.min = r[f].min), (d.max = d.min + h));
      });
    else if (s === "x" || s === "y") {
      const f = s === "x" ? "y" : "x";
      jc(o ? e.measuredBox[f] : e.layoutBox[f], r[f]);
    } else
      O0(s, e.layoutBox, r) &&
        Ut((f) => {
          const d = o ? e.measuredBox[f] : e.layoutBox[f],
            h = ze(r[f]);
          ((d.max = d.min + h),
            t.relativeTarget &&
              !t.currentAnimation &&
              ((t.isProjectionDirty = !0),
              (t.relativeTarget[f].max = t.relativeTarget[f].min + h)));
        });
    const a = qr();
    as(a, r, e.layoutBox);
    const l = qr();
    o ? as(l, t.applyTransform(i, !0), e.measuredBox) : as(l, r, e.layoutBox);
    const u = !N0(a);
    let c = !1;
    if (!t.resumeFrom) {
      const f = t.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: d, layout: h } = f;
        if (d && h) {
          const v = t.options.layoutAnchor || void 0,
            m = xe();
          Ea(m, e.layoutBox, d.layoutBox, v);
          const _ = xe();
          (Ea(_, r, h.layoutBox, v),
            R0(m, _) || (c = !0),
            f.options.layoutRoot &&
              ((t.relativeTarget = _),
              (t.relativeTargetOrigin = m),
              (t.relativeParent = f)));
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: r,
      snapshot: e,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeLayoutChanged: c,
    });
  } else if (t.isLead()) {
    const { onExitComplete: r } = t.options;
    r && r();
  }
  t.options.transition = void 0;
}
function tk(t) {
  t.parent &&
    (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
    t.isSharedProjectionDirty ||
      (t.isSharedProjectionDirty = !!(
        t.isProjectionDirty ||
        t.parent.isProjectionDirty ||
        t.parent.isSharedProjectionDirty
      )),
    t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function nk(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function rk(t) {
  t.clearSnapshot();
}
function Qp(t) {
  t.clearMeasurements();
}
function ik(t) {
  ((t.isLayoutDirty = !0), t.updateLayout());
}
function qp(t) {
  t.isLayoutDirty = !1;
}
function sk(t) {
  t.isAnimationBlocked &&
    t.layout &&
    !t.isLayoutDirty &&
    ((t.snapshot = t.layout), (t.isLayoutDirty = !0));
}
function ok(t) {
  const { visualElement: e } = t.options;
  (e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"),
    t.resetTransform());
}
function Zp(t) {
  (t.finishAnimation(),
    (t.targetDelta = t.relativeTarget = t.target = void 0),
    (t.isProjectionDirty = !0));
}
function ak(t) {
  t.resolveTargetDelta();
}
function lk(t) {
  t.calcProjection();
}
function uk(t) {
  t.resetSkewAndRotation();
}
function ck(t) {
  t.removeLeadSnapshot();
}
function Jp(t, e, n) {
  ((t.translate = ee(e.translate, 0, n)),
    (t.scale = ee(e.scale, 1, n)),
    (t.origin = e.origin),
    (t.originPoint = e.originPoint));
}
function em(t, e, n, r) {
  ((t.min = ee(e.min, n.min, r)), (t.max = ee(e.max, n.max, r)));
}
function fk(t, e, n, r) {
  (em(t.x, e.x, n.x, r), em(t.y, e.y, n.y, r));
}
function dk(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const hk = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  tm = (t) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(t),
  nm = tm("applewebkit/") && !tm("chrome/") ? Math.round : Tt;
function rm(t) {
  ((t.min = nm(t.min)), (t.max = nm(t.max)));
}
function pk(t) {
  (rm(t.x), rm(t.y));
}
function O0(t, e, n) {
  return (
    t === "position" || (t === "preserve-aspect" && !OP(Hp(e), Hp(n), 0.2))
  );
}
function mk(t) {
  var e;
  return t !== t.root && ((e = t.scroll) == null ? void 0 : e.wasRoot);
}
const gk = L0({
    attachResizeListener: (t, e) => Ls(t, "resize", e),
    measureScroll: () => {
      var t, e;
      return {
        x:
          document.documentElement.scrollLeft ||
          ((t = document.body) == null ? void 0 : t.scrollLeft) ||
          0,
        y:
          document.documentElement.scrollTop ||
          ((e = document.body) == null ? void 0 : e.scrollTop) ||
          0,
      };
    },
    checkIsScrollRoot: () => !0,
  }),
  Yl = { current: void 0 },
  V0 = L0({
    measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
    defaultParent: () => {
      if (!Yl.current) {
        const t = new gk({});
        (t.mount(window), t.setOptions({ layoutScroll: !0 }), (Yl.current = t));
      }
      return Yl.current;
    },
    resetTransform: (t, e) => {
      t.style.transform = e !== void 0 ? e : "none";
    },
    checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed",
  }),
  gd = T.createContext({
    transformPagePoint: (t) => t,
    isStatic: !1,
    reducedMotion: "never",
  });
function im(t, e) {
  if (typeof t == "function") return t(e);
  t != null && (t.current = e);
}
function yk(...t) {
  return (e) => {
    let n = !1;
    const r = t.map((i) => {
      const s = im(i, e);
      return (!n && typeof s == "function" && (n = !0), s);
    });
    if (n)
      return () => {
        for (let i = 0; i < r.length; i++) {
          const s = r[i];
          typeof s == "function" ? s() : im(t[i], null);
        }
      };
  };
}
function vk(...t) {
  return T.useCallback(yk(...t), t);
}
class xk extends T.Component {
  getSnapshotBeforeUpdate(e) {
    const n = this.props.childRef.current;
    if (
      Fo(n) &&
      e.isPresent &&
      !this.props.isPresent &&
      this.props.pop !== !1
    ) {
      const r = n.offsetParent,
        i = (Fo(r) && r.offsetWidth) || 0,
        s = (Fo(r) && r.offsetHeight) || 0,
        o = getComputedStyle(n),
        a = this.props.sizeRef.current;
      ((a.height = parseFloat(o.height)),
        (a.width = parseFloat(o.width)),
        (a.top = n.offsetTop),
        (a.left = n.offsetLeft),
        (a.right = i - a.width - a.left),
        (a.bottom = s - a.height - a.top));
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function _k({
  children: t,
  isPresent: e,
  anchorX: n,
  anchorY: r,
  root: i,
  pop: s,
}) {
  var d;
  const o = T.useId(),
    a = T.useRef(null),
    l = T.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0, bottom: 0 }),
    { nonce: u } = T.useContext(gd),
    c =
      ((d = t.props) == null ? void 0 : d.ref) ?? (t == null ? void 0 : t.ref),
    f = vk(a, c);
  return (
    T.useInsertionEffect(() => {
      const {
        width: h,
        height: v,
        top: m,
        left: _,
        right: y,
        bottom: p,
      } = l.current;
      if (e || s === !1 || !a.current || !h || !v) return;
      const x = n === "left" ? `left: ${_}` : `right: ${y}`,
        w = r === "bottom" ? `bottom: ${p}` : `top: ${m}`;
      a.current.dataset.motionPopId = o;
      const S = document.createElement("style");
      u && (S.nonce = u);
      const k = i ?? document.head;
      return (
        k.appendChild(S),
        S.sheet &&
          S.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${h}px !important;
            height: ${v}px !important;
            ${x}px !important;
            ${w}px !important;
          }
        `),
        () => {
          var P;
          ((P = a.current) == null || P.removeAttribute("data-motion-pop-id"),
            k.contains(S) && k.removeChild(S));
        }
      );
    }, [e]),
    g.jsx(xk, {
      isPresent: e,
      childRef: a,
      sizeRef: l,
      pop: s,
      children: s === !1 ? t : T.cloneElement(t, { ref: f }),
    })
  );
}
const wk = ({
  children: t,
  initial: e,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: s,
  mode: o,
  anchorX: a,
  anchorY: l,
  root: u,
}) => {
  const c = $f(Sk),
    f = T.useId();
  let d = !0,
    h = T.useMemo(
      () => (
        (d = !1),
        {
          id: f,
          initial: e,
          isPresent: n,
          custom: i,
          onExitComplete: (v) => {
            c.set(v, !0);
            for (const m of c.values()) if (!m) return;
            r && r();
          },
          register: (v) => (c.set(v, !1), () => c.delete(v)),
        }
      ),
      [n, c, r],
    );
  return (
    s && d && (h = { ...h }),
    T.useMemo(() => {
      c.forEach((v, m) => c.set(m, !1));
    }, [n]),
    T.useEffect(() => {
      !n && !c.size && r && r();
    }, [n]),
    (t = g.jsx(_k, {
      pop: o === "popLayout",
      isPresent: n,
      anchorX: a,
      anchorY: l,
      root: u,
      children: t,
    })),
    g.jsx(nl.Provider, { value: h, children: t })
  );
};
function Sk() {
  return new Map();
}
function I0(t = !0) {
  const e = T.useContext(nl);
  if (e === null) return [!0, null];
  const { isPresent: n, onExitComplete: r, register: i } = e,
    s = T.useId();
  T.useEffect(() => {
    if (t) return i(s);
  }, [t]);
  const o = T.useCallback(() => t && r && r(s), [s, r, t]);
  return !n && r ? [!1, o] : [!0];
}
const _o = (t) => t.key || "";
function sm(t) {
  const e = [];
  return (
    T.Children.forEach(t, (n) => {
      T.isValidElement(n) && e.push(n);
    }),
    e
  );
}
const Tk = ({
    children: t,
    custom: e,
    initial: n = !0,
    onExitComplete: r,
    presenceAffectsLayout: i = !0,
    mode: s = "sync",
    propagate: o = !1,
    anchorX: a = "left",
    anchorY: l = "top",
    root: u,
  }) => {
    const [c, f] = I0(o),
      d = T.useMemo(() => sm(t), [t]),
      h = o && !c ? [] : d.map(_o),
      v = T.useRef(!0),
      m = T.useRef(d),
      _ = $f(() => new Map()),
      y = T.useRef(new Set()),
      [p, x] = T.useState(d),
      [w, S] = T.useState(d);
    fv(() => {
      ((v.current = !1), (m.current = d));
      for (let C = 0; C < w.length; C++) {
        const E = _o(w[C]);
        h.includes(E)
          ? (_.delete(E), y.current.delete(E))
          : _.get(E) !== !0 && _.set(E, !1);
      }
    }, [w, h.length, h.join("-")]);
    const k = [];
    if (d !== p) {
      let C = [...d];
      for (let E = 0; E < w.length; E++) {
        const j = w[E],
          L = _o(j);
        h.includes(L) || (C.splice(E, 0, j), k.push(j));
      }
      return (s === "wait" && k.length && (C = k), S(sm(C)), x(d), null);
    }
    const { forceRender: P } = T.useContext(Wf);
    return g.jsx(g.Fragment, {
      children: w.map((C) => {
        const E = _o(C),
          j = o && !c ? !1 : d === w || h.includes(E),
          L = () => {
            if (y.current.has(E)) return;
            if (_.has(E)) (y.current.add(E), _.set(E, !0));
            else return;
            let I = !0;
            (_.forEach((F) => {
              F || (I = !1);
            }),
              I &&
                (P == null || P(),
                S(m.current),
                o && (f == null || f()),
                r && r()));
          };
        return g.jsx(
          wk,
          {
            isPresent: j,
            initial: !v.current || n ? void 0 : !1,
            custom: e,
            presenceAffectsLayout: i,
            mode: s,
            root: u,
            onExitComplete: j ? void 0 : L,
            anchorX: a,
            anchorY: l,
            children: C,
          },
          E,
        );
      }),
    });
  },
  F0 = T.createContext({ strict: !1 }),
  om = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  };
let am = !1;
function Ck() {
  if (am) return;
  const t = {};
  for (const e in om) t[e] = { isEnabled: (n) => om[e].some((r) => !!n[r]) };
  (h0(t), (am = !0));
}
function b0() {
  return (Ck(), aP());
}
function Pk(t) {
  const e = b0();
  for (const n in t) e[n] = { ...e[n], ...t[n] };
  h0(e);
}
const kk = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "propagate",
  "ignoreStrict",
  "viewport",
]);
function ja(t) {
  return (
    t.startsWith("while") ||
    (t.startsWith("drag") && t !== "draggable") ||
    t.startsWith("layout") ||
    t.startsWith("onTap") ||
    t.startsWith("onPan") ||
    t.startsWith("onLayout") ||
    kk.has(t)
  );
}
let z0 = (t) => !ja(t);
function Ek(t) {
  typeof t == "function" && (z0 = (e) => (e.startsWith("on") ? !ja(e) : t(e)));
}
try {
  Ek(require("@emotion/is-prop-valid").default);
} catch {}
function jk(t, e, n) {
  const r = {};
  for (const i in t)
    (i === "values" && typeof t.values == "object") ||
      je(t[i]) ||
      ((z0(i) ||
        (n === !0 && ja(i)) ||
        (!e && !ja(i)) ||
        (t.draggable && i.startsWith("onDrag"))) &&
        (r[i] = t[i]));
  return r;
}
const ol = T.createContext({});
function Nk(t, e) {
  if (sl(t)) {
    const { initial: n, animate: r } = t;
    return {
      initial: n === !1 || Ds(n) ? n : void 0,
      animate: Ds(r) ? r : void 0,
    };
  }
  return t.inherit !== !1 ? e : {};
}
function Rk(t) {
  const { initial: e, animate: n } = Nk(t, T.useContext(ol));
  return T.useMemo(() => ({ initial: e, animate: n }), [lm(e), lm(n)]);
}
function lm(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
const yd = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function B0(t, e, n) {
  for (const r in e) !je(e[r]) && !_0(r, n) && (t[r] = e[r]);
}
function Mk({ transformTemplate: t }, e) {
  return T.useMemo(() => {
    const n = yd();
    return (pd(n, e, t), Object.assign({}, n.vars, n.style));
  }, [e]);
}
function Ak(t, e) {
  const n = t.style || {},
    r = {};
  return (B0(r, n, t), Object.assign(r, Mk(t, e)), r);
}
function Dk(t, e) {
  const n = {},
    r = Ak(t, e);
  return (
    t.drag &&
      t.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`)),
    t.tabIndex === void 0 &&
      (t.onTap || t.onTapStart || t.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
const U0 = () => ({ ...yd(), attrs: {} });
function Lk(t, e, n, r) {
  const i = T.useMemo(() => {
    const s = U0();
    return (
      w0(s, e, T0(r), t.transformTemplate, t.style),
      { ...s.attrs, style: { ...s.style } }
    );
  }, [e]);
  if (t.style) {
    const s = {};
    (B0(s, t.style, t), (i.style = { ...s, ...i.style }));
  }
  return i;
}
const Ok = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function vd(t) {
  return typeof t != "string" || t.includes("-")
    ? !1
    : !!(Ok.indexOf(t) > -1 || /[A-Z]/u.test(t));
}
function Vk(t, e, n, { latestValues: r }, i, s = !1, o) {
  const l = ((o ?? vd(t)) ? Lk : Dk)(e, r, i, t),
    u = jk(e, typeof t == "string", s),
    c = t !== T.Fragment ? { ...u, ...l, ref: n } : {},
    { children: f } = e,
    d = T.useMemo(() => (je(f) ? f.get() : f), [f]);
  return T.createElement(t, { ...c, children: d });
}
function Ik({ scrapeMotionValuesFromProps: t, createRenderState: e }, n, r, i) {
  return { latestValues: Fk(n, r, i, t), renderState: e() };
}
function Fk(t, e, n, r) {
  const i = {},
    s = r(t, {});
  for (const d in s) i[d] = Wo(s[d]);
  let { initial: o, animate: a } = t;
  const l = sl(t),
    u = f0(t);
  e &&
    u &&
    !l &&
    t.inherit !== !1 &&
    (o === void 0 && (o = e.initial), a === void 0 && (a = e.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || o === !1;
  const f = c ? a : o;
  if (f && typeof f != "boolean" && !il(f)) {
    const d = Array.isArray(f) ? f : [f];
    for (let h = 0; h < d.length; h++) {
      const v = sd(t, d[h]);
      if (v) {
        const { transitionEnd: m, transition: _, ...y } = v;
        for (const p in y) {
          let x = y[p];
          if (Array.isArray(x)) {
            const w = c ? x.length - 1 : 0;
            x = x[w];
          }
          x !== null && (i[p] = x);
        }
        for (const p in m) i[p] = m[p];
      }
    }
  }
  return i;
}
const W0 = (t) => (e, n) => {
    const r = T.useContext(ol),
      i = T.useContext(nl),
      s = () => Ik(t, e, r, i);
    return n ? s() : $f(s);
  },
  bk = W0({ scrapeMotionValuesFromProps: md, createRenderState: yd }),
  zk = W0({ scrapeMotionValuesFromProps: C0, createRenderState: U0 }),
  Bk = Symbol.for("motionComponentSymbol");
function Uk(t, e, n) {
  const r = T.useRef(n);
  T.useInsertionEffect(() => {
    r.current = n;
  });
  const i = T.useRef(null);
  return T.useCallback(
    (s) => {
      var a;
      s && ((a = t.onMount) == null || a.call(t, s));
      const o = r.current;
      if (typeof o == "function")
        if (s) {
          const l = o(s);
          typeof l == "function" && (i.current = l);
        } else i.current ? (i.current(), (i.current = null)) : o(s);
      else o && (o.current = s);
      e && (s ? e.mount(s) : e.unmount());
    },
    [e],
  );
}
const $0 = T.createContext({});
function Vr(t) {
  return (
    t &&
    typeof t == "object" &&
    Object.prototype.hasOwnProperty.call(t, "current")
  );
}
function Wk(t, e, n, r, i, s) {
  var x, w;
  const { visualElement: o } = T.useContext(ol),
    a = T.useContext(F0),
    l = T.useContext(nl),
    u = T.useContext(gd),
    c = u.reducedMotion,
    f = u.skipAnimations,
    d = T.useRef(null),
    h = T.useRef(!1);
  ((r = r || a.renderer),
    !d.current &&
      r &&
      ((d.current = r(t, {
        visualState: e,
        parent: o,
        props: n,
        presenceContext: l,
        blockInitialAnimation: l ? l.initial === !1 : !1,
        reducedMotionConfig: c,
        skipAnimations: f,
        isSVG: s,
      })),
      h.current && d.current && (d.current.manuallyAnimateOnMount = !0)));
  const v = d.current,
    m = T.useContext($0);
  v &&
    !v.projection &&
    i &&
    (v.type === "html" || v.type === "svg") &&
    $k(d.current, n, i, m);
  const _ = T.useRef(!1);
  T.useInsertionEffect(() => {
    v && _.current && v.update(n, l);
  });
  const y = n[Jv],
    p = T.useRef(
      !!y &&
        typeof window < "u" &&
        !((x = window.MotionHandoffIsComplete) != null && x.call(window, y)) &&
        ((w = window.MotionHasOptimisedAnimation) == null
          ? void 0
          : w.call(window, y)),
    );
  return (
    fv(() => {
      ((h.current = !0),
        v &&
          ((_.current = !0),
          (window.MotionIsMounted = !0),
          v.updateFeatures(),
          v.scheduleRenderMicrotask(),
          p.current && v.animationState && v.animationState.animateChanges()));
    }),
    T.useEffect(() => {
      v &&
        (!p.current && v.animationState && v.animationState.animateChanges(),
        p.current &&
          (queueMicrotask(() => {
            var S;
            (S = window.MotionHandoffMarkAsComplete) == null ||
              S.call(window, y);
          }),
          (p.current = !1)),
        (v.enteringChildren = void 0));
    }),
    v
  );
}
function $k(t, e, n, r) {
  const {
    layoutId: i,
    layout: s,
    drag: o,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: u,
    layoutAnchor: c,
    layoutCrossfade: f,
  } = e;
  ((t.projection = new n(
    t.latestValues,
    e["data-framer-portal-id"] ? void 0 : H0(t.parent),
  )),
    t.projection.setOptions({
      layoutId: i,
      layout: s,
      alwaysMeasureLayout: !!o || (a && Vr(a)),
      visualElement: t,
      animationType: typeof s == "string" ? s : "both",
      initialPromotionConfig: r,
      crossfade: f,
      layoutScroll: l,
      layoutRoot: u,
      layoutAnchor: c,
    }));
}
function H0(t) {
  if (t) return t.options.allowProjection !== !1 ? t.projection : H0(t.parent);
}
function Xl(t, { forwardMotionProps: e = !1, type: n } = {}, r, i) {
  r && Pk(r);
  const s = n ? n === "svg" : vd(t),
    o = s ? zk : bk;
  function a(u, c) {
    let f;
    const d = { ...T.useContext(gd), ...u, layoutId: Hk(u) },
      { isStatic: h } = d,
      v = Rk(u),
      m = o(u, h);
    if (!h && typeof window < "u") {
      Kk();
      const _ = Gk(d);
      ((f = _.MeasureLayout),
        (v.visualElement = Wk(t, m, d, i, _.ProjectionNode, s)));
    }
    return g.jsxs(ol.Provider, {
      value: v,
      children: [
        f && v.visualElement
          ? g.jsx(f, { visualElement: v.visualElement, ...d })
          : null,
        Vk(t, u, Uk(m, v.visualElement, c), m, h, e, s),
      ],
    });
  }
  a.displayName = `motion.${typeof t == "string" ? t : `create(${t.displayName ?? t.name ?? ""})`}`;
  const l = T.forwardRef(a);
  return ((l[Bk] = t), l);
}
function Hk({ layoutId: t }) {
  const e = T.useContext(Wf).id;
  return e && t !== void 0 ? e + "-" + t : t;
}
function Kk(t, e) {
  T.useContext(F0).strict;
}
function Gk(t) {
  const e = b0(),
    { drag: n, layout: r } = e;
  if (!n && !r) return {};
  const i = { ...n, ...r };
  return {
    MeasureLayout:
      (n != null && n.isEnabled(t)) || (r != null && r.isEnabled(t))
        ? i.MeasureLayout
        : void 0,
    ProjectionNode: i.ProjectionNode,
  };
}
function Yk(t, e) {
  if (typeof Proxy > "u") return Xl;
  const n = new Map(),
    r = (s, o) => Xl(s, o, t, e),
    i = (s, o) => r(s, o);
  return new Proxy(i, {
    get: (s, o) =>
      o === "create"
        ? r
        : (n.has(o) || n.set(o, Xl(o, void 0, t, e)), n.get(o)),
  });
}
const Xk = (t, e) =>
  (e.isSVG ?? vd(t))
    ? new CP(e)
    : new vP(e, { allowProjection: t !== T.Fragment });
class Qk extends er {
  constructor(e) {
    (super(e), e.animationState || (e.animationState = NP(e)));
  }
  updateAnimationControlsSubscription() {
    const { animate: e } = this.node.getProps();
    il(e) && (this.unmountControls = e.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: e } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    e !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var e;
    (this.node.animationState.reset(),
      (e = this.unmountControls) == null || e.call(this));
  }
}
let qk = 0;
class Zk extends er {
  constructor() {
    (super(...arguments), (this.id = qk++), (this.isExitComplete = !1));
  }
  update() {
    var s;
    if (!this.node.presenceContext) return;
    const { isPresent: e, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || e === r) return;
    if (e && r === !1) {
      if (this.isExitComplete) {
        const { initial: o, custom: a } = this.node.getProps();
        if (typeof o == "string") {
          const l = _r(this.node, o, a);
          if (l) {
            const { transition: u, transitionEnd: c, ...f } = l;
            for (const d in f)
              (s = this.node.getValue(d)) == null || s.jump(f[d]);
          }
        }
        (this.node.animationState.reset(),
          this.node.animationState.animateChanges());
      } else this.node.animationState.setActive("exit", !1);
      this.isExitComplete = !1;
      return;
    }
    const i = this.node.animationState.setActive("exit", !e);
    n &&
      !e &&
      i.then(() => {
        ((this.isExitComplete = !0), n(this.id));
      });
  }
  mount() {
    const { register: e, onExitComplete: n } = this.node.presenceContext || {};
    (n && n(this.id), e && (this.unmount = e(this.id)));
  }
  unmount() {}
}
const Jk = { animation: { Feature: Qk }, exit: { Feature: Zk } };
function qs(t) {
  return { point: { x: t.pageX, y: t.pageY } };
}
const eE = (t) => (e) => cd(e) && t(e, qs(e));
function ls(t, e, n, r) {
  return Ls(t, e, eE(n), r);
}
const K0 = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
  um = (t, e) => Math.abs(t - e);
function tE(t, e) {
  const n = um(t.x, e.x),
    r = um(t.y, e.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
const cm = new Set(["auto", "scroll"]);
class G0 {
  constructor(
    e,
    n,
    {
      transformPagePoint: r,
      contextWindow: i = window,
      dragSnapToOrigin: s = !1,
      distanceThreshold: o = 3,
      element: a,
    } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.lastRawMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.scrollPositions = new Map()),
      (this.removeScrollListeners = null),
      (this.onElementScroll = (h) => {
        this.handleScroll(h.target);
      }),
      (this.onWindowScroll = () => {
        this.handleScroll(window);
      }),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        this.lastRawMoveEventInfo &&
          (this.lastMoveEventInfo = wo(
            this.lastRawMoveEventInfo,
            this.transformPagePoint,
          ));
        const h = Ql(this.lastMoveEventInfo, this.history),
          v = this.startEvent !== null,
          m = tE(h.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!v && !m) return;
        const { point: _ } = h,
          { timestamp: y } = Ee;
        this.history.push({ ..._, timestamp: y });
        const { onStart: p, onMove: x } = this.handlers;
        (v ||
          (p && p(this.lastMoveEvent, h),
          (this.startEvent = this.lastMoveEvent)),
          x && x(this.lastMoveEvent, h));
      }),
      (this.handlePointerMove = (h, v) => {
        ((this.lastMoveEvent = h),
          (this.lastRawMoveEventInfo = v),
          (this.lastMoveEventInfo = wo(v, this.transformPagePoint)),
          Q.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (h, v) => {
        this.end();
        const { onEnd: m, onSessionEnd: _, resumeAnimation: y } = this.handlers;
        if (
          ((this.dragSnapToOrigin || !this.startEvent) && y && y(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const p = Ql(
          h.type === "pointercancel"
            ? this.lastMoveEventInfo
            : wo(v, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && m && m(h, p), _ && _(h, p));
      }),
      !cd(e))
    )
      return;
    ((this.dragSnapToOrigin = s),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.distanceThreshold = o),
      (this.contextWindow = i || window));
    const l = qs(e),
      u = wo(l, this.transformPagePoint),
      { point: c } = u,
      { timestamp: f } = Ee;
    this.history = [{ ...c, timestamp: f }];
    const { onSessionStart: d } = n;
    (d && d(e, Ql(u, this.history)),
      (this.removeListeners = Ys(
        ls(this.contextWindow, "pointermove", this.handlePointerMove),
        ls(this.contextWindow, "pointerup", this.handlePointerUp),
        ls(this.contextWindow, "pointercancel", this.handlePointerUp),
      )),
      a && this.startScrollTracking(a));
  }
  startScrollTracking(e) {
    let n = e.parentElement;
    for (; n; ) {
      const r = getComputedStyle(n);
      ((cm.has(r.overflowX) || cm.has(r.overflowY)) &&
        this.scrollPositions.set(n, { x: n.scrollLeft, y: n.scrollTop }),
        (n = n.parentElement));
    }
    (this.scrollPositions.set(window, { x: window.scrollX, y: window.scrollY }),
      window.addEventListener("scroll", this.onElementScroll, { capture: !0 }),
      window.addEventListener("scroll", this.onWindowScroll),
      (this.removeScrollListeners = () => {
        (window.removeEventListener("scroll", this.onElementScroll, {
          capture: !0,
        }),
          window.removeEventListener("scroll", this.onWindowScroll));
      }));
  }
  handleScroll(e) {
    const n = this.scrollPositions.get(e);
    if (!n) return;
    const r = e === window,
      i = r
        ? { x: window.scrollX, y: window.scrollY }
        : { x: e.scrollLeft, y: e.scrollTop },
      s = { x: i.x - n.x, y: i.y - n.y };
    (s.x === 0 && s.y === 0) ||
      (r
        ? this.lastMoveEventInfo &&
          ((this.lastMoveEventInfo.point.x += s.x),
          (this.lastMoveEventInfo.point.y += s.y))
        : this.history.length > 0 &&
          ((this.history[0].x -= s.x), (this.history[0].y -= s.y)),
      this.scrollPositions.set(e, i),
      Q.update(this.updatePoint, !0));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    (this.removeListeners && this.removeListeners(),
      this.removeScrollListeners && this.removeScrollListeners(),
      this.scrollPositions.clear(),
      Gn(this.updatePoint));
  }
}
function wo(t, e) {
  return e ? { point: e(t.point) } : t;
}
function fm(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function Ql({ point: t }, e) {
  return {
    point: t,
    delta: fm(t, Y0(e)),
    offset: fm(t, nE(e)),
    velocity: rE(e, 0.1),
  };
}
function nE(t) {
  return t[0];
}
function Y0(t) {
  return t[t.length - 1];
}
function rE(t, e) {
  if (t.length < 2) return { x: 0, y: 0 };
  let n = t.length - 1,
    r = null;
  const i = Y0(t);
  for (; n >= 0 && ((r = t[n]), !(i.timestamp - r.timestamp > lt(e))); ) n--;
  if (!r) return { x: 0, y: 0 };
  r === t[0] &&
    t.length > 2 &&
    i.timestamp - r.timestamp > lt(e) * 2 &&
    (r = t[1]);
  const s = xt(i.timestamp - r.timestamp);
  if (s === 0) return { x: 0, y: 0 };
  const o = { x: (i.x - r.x) / s, y: (i.y - r.y) / s };
  return (o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o);
}
function iE(t, { min: e, max: n }, r) {
  return (
    e !== void 0 && t < e
      ? (t = r ? ee(e, t, r.min) : Math.max(t, e))
      : n !== void 0 && t > n && (t = r ? ee(n, t, r.max) : Math.min(t, n)),
    t
  );
}
function dm(t, e, n) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0,
  };
}
function sE(t, { top: e, left: n, bottom: r, right: i }) {
  return { x: dm(t.x, n, i), y: dm(t.y, e, r) };
}
function hm(t, e) {
  let n = e.min - t.min,
    r = e.max - t.max;
  return (
    e.max - e.min < t.max - t.min && ([n, r] = [r, n]),
    { min: n, max: r }
  );
}
function oE(t, e) {
  return { x: hm(t.x, e.x), y: hm(t.y, e.y) };
}
function aE(t, e) {
  let n = 0.5;
  const r = ze(t),
    i = ze(e);
  return (
    i > r
      ? (n = Ms(e.min, e.max - r, t.min))
      : r > i && (n = Ms(t.min, t.max - i, e.min)),
    Zt(0, 1, n)
  );
}
function lE(t, e) {
  const n = {};
  return (
    e.min !== void 0 && (n.min = e.min - t.min),
    e.max !== void 0 && (n.max = e.max - t.min),
    n
  );
}
const Nc = 0.35;
function uE(t = Nc) {
  return (
    t === !1 ? (t = 0) : t === !0 && (t = Nc),
    { x: pm(t, "left", "right"), y: pm(t, "top", "bottom") }
  );
}
function pm(t, e, n) {
  return { min: mm(t, e), max: mm(t, n) };
}
function mm(t, e) {
  return typeof t == "number" ? t : t[e] || 0;
}
const cE = new WeakMap();
class fE {
  constructor(e) {
    ((this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = xe()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = e));
  }
  start(e, { snapToCursor: n = !1, distanceThreshold: r } = {}) {
    const { presenceContext: i } = this.visualElement;
    if (i && i.isPresent === !1) return;
    const s = (f) => {
        (n && this.snapToCursor(qs(f).point), this.stopAnimation());
      },
      o = (f, d) => {
        const { drag: h, dragPropagation: v, onDragStart: m } = this.getProps();
        if (
          h &&
          !v &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = IC(h)),
          !this.openDragLock)
        )
          return;
        ((this.latestPointerEvent = f),
          (this.latestPanInfo = d),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Ut((y) => {
            let p = this.getAxisMotionValue(y).get() || 0;
            if (Qt.test(p)) {
              const { projection: x } = this.visualElement;
              if (x && x.layout) {
                const w = x.layout.layoutBox[y];
                w && (p = ze(w) * (parseFloat(p) / 100));
              }
            }
            this.originPoint[y] = p;
          }),
          m && Q.update(() => m(f, d), !1, !0),
          _c(this.visualElement, "transform"));
        const { animationState: _ } = this.visualElement;
        _ && _.setActive("whileDrag", !0);
      },
      a = (f, d) => {
        ((this.latestPointerEvent = f), (this.latestPanInfo = d));
        const {
          dragPropagation: h,
          dragDirectionLock: v,
          onDirectionLock: m,
          onDrag: _,
        } = this.getProps();
        if (!h && !this.openDragLock) return;
        const { offset: y } = d;
        if (v && this.currentDirection === null) {
          ((this.currentDirection = hE(y)),
            this.currentDirection !== null && m && m(this.currentDirection));
          return;
        }
        (this.updateAxis("x", d.point, y),
          this.updateAxis("y", d.point, y),
          this.visualElement.render(),
          _ && Q.update(() => _(f, d), !1, !0));
      },
      l = (f, d) => {
        ((this.latestPointerEvent = f),
          (this.latestPanInfo = d),
          this.stop(f, d),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null));
      },
      u = () => {
        const { dragSnapToOrigin: f } = this.getProps();
        (f || this.constraints) && this.startAnimation({ x: 0, y: 0 });
      },
      { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new G0(
      e,
      {
        onSessionStart: s,
        onStart: o,
        onMove: a,
        onSessionEnd: l,
        resumeAnimation: u,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: c,
        distanceThreshold: r,
        contextWindow: K0(this.visualElement),
        element: this.visualElement.current,
      },
    );
  }
  stop(e, n) {
    const r = e || this.latestPointerEvent,
      i = n || this.latestPanInfo,
      s = this.isDragging;
    if ((this.cancel(), !s || !i || !r)) return;
    const { velocity: o } = i;
    this.startAnimation(o);
    const { onDragEnd: a } = this.getProps();
    a && Q.postRender(() => a(r, i));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: e, animationState: n } = this.visualElement;
    (e && (e.isAnimationBlocked = !1), this.endPanSession());
    const { dragPropagation: r } = this.getProps();
    (!r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      n && n.setActive("whileDrag", !1));
  }
  endPanSession() {
    (this.panSession && this.panSession.end(), (this.panSession = void 0));
  }
  updateAxis(e, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !So(e, i, this.currentDirection)) return;
    const s = this.getAxisMotionValue(e);
    let o = this.originPoint[e] + r[e];
    (this.constraints &&
      this.constraints[e] &&
      (o = iE(o, this.constraints[e], this.elastic[e])),
      s.set(o));
  }
  resolveConstraints() {
    var s;
    const { dragConstraints: e, dragElastic: n } = this.getProps(),
      r =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (s = this.visualElement.projection) == null
            ? void 0
            : s.layout,
      i = this.constraints;
    (e && Vr(e)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : e && r
        ? (this.constraints = sE(r.layoutBox, e))
        : (this.constraints = !1),
      (this.elastic = uE(n)),
      i !== this.constraints &&
        !Vr(e) &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Ut((o) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(o) &&
            (this.constraints[o] = lE(r.layoutBox[o], this.constraints[o]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: e, onMeasureDragConstraints: n } = this.getProps();
    if (!e || !Vr(e)) return !1;
    const r = e.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const s = dP(r, i.root, this.visualElement.getTransformPagePoint());
    let o = oE(i.layout.layoutBox, s);
    if (n) {
      const a = n(uP(o));
      ((this.hasMutatedConstraints = !!a), a && (o = m0(a)));
    }
    return o;
  }
  startAnimation(e) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: s,
        dragSnapToOrigin: o,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      u = Ut((c) => {
        if (!So(c, n, this.currentDirection)) return;
        let f = (l && l[c]) || {};
        (o === !0 || o === c) && (f = { min: 0, max: 0 });
        const d = i ? 200 : 1e6,
          h = i ? 40 : 1e7,
          v = {
            type: "inertia",
            velocity: r ? e[c] : 0,
            bounceStiffness: d,
            bounceDamping: h,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...s,
            ...f,
          };
        return this.startAxisValueAnimation(c, v);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(e, n) {
    const r = this.getAxisMotionValue(e);
    return (
      _c(this.visualElement, e),
      r.start(id(e, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    Ut((e) => this.getAxisMotionValue(e).stop());
  }
  getAxisMotionValue(e) {
    const n = `_drag${e.toUpperCase()}`,
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(e, (r.initial ? r.initial[e] : void 0) || 0)
    );
  }
  snapToCursor(e) {
    Ut((n) => {
      const { drag: r } = this.getProps();
      if (!So(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        s = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: o, max: a } = i.layout.layoutBox[n],
          l = s.get() || 0;
        s.set(e[n] - ee(o, a, 0.5) + l);
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: e, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Vr(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    Ut((o) => {
      const a = this.getAxisMotionValue(o);
      if (a && this.constraints !== !1) {
        const l = a.get();
        i[o] = aE({ min: l, max: l }, this.constraints[o]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = s ? s({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      (this.constraints = !1),
      this.resolveConstraints(),
      Ut((o) => {
        if (!So(o, e, null)) return;
        const a = this.getAxisMotionValue(o),
          { min: l, max: u } = this.constraints[o];
        a.set(ee(l, u, i[o]));
      }),
      this.visualElement.render());
  }
  addListeners() {
    if (!this.visualElement.current) return;
    cE.set(this.visualElement, this);
    const e = this.visualElement.current,
      n = ls(e, "pointerdown", (u) => {
        const { drag: c, dragListener: f = !0 } = this.getProps(),
          d = u.target,
          h = d !== e && WC(d);
        c && f && !h && this.start(u);
      });
    let r;
    const i = () => {
        const { dragConstraints: u } = this.getProps();
        Vr(u) &&
          u.current &&
          ((this.constraints = this.resolveRefConstraints()),
          r ||
            (r = dE(e, u.current, () =>
              this.scalePositionWithinConstraints(),
            )));
      },
      { projection: s } = this.visualElement,
      o = s.addEventListener("measure", i);
    (s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()),
      Q.read(i));
    const a = Ls(window, "resize", () => this.scalePositionWithinConstraints()),
      l = s.addEventListener(
        "didUpdate",
        ({ delta: u, hasLayoutChanged: c }) => {
          this.isDragging &&
            c &&
            (Ut((f) => {
              const d = this.getAxisMotionValue(f);
              d &&
                ((this.originPoint[f] += u[f].translate),
                d.set(d.get() + u[f].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      (a(), n(), o(), l && l(), r && r());
    };
  }
  getProps() {
    const e = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: s = !1,
        dragElastic: o = Nc,
        dragMomentum: a = !0,
      } = e;
    return {
      ...e,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: s,
      dragElastic: o,
      dragMomentum: a,
    };
  }
}
function gm(t) {
  let e = !0;
  return () => {
    if (e) {
      e = !1;
      return;
    }
    t();
  };
}
function dE(t, e, n) {
  const r = Tp(t, gm(n)),
    i = Tp(e, gm(n));
  return () => {
    (r(), i());
  };
}
function So(t, e, n) {
  return (e === !0 || e === t) && (n === null || n === t);
}
function hE(t, e = 10) {
  let n = null;
  return (Math.abs(t.y) > e ? (n = "y") : Math.abs(t.x) > e && (n = "x"), n);
}
class pE extends er {
  constructor(e) {
    (super(e),
      (this.removeGroupControls = Tt),
      (this.removeListeners = Tt),
      (this.controls = new fE(e)));
  }
  mount() {
    const { dragControls: e } = this.node.getProps();
    (e && (this.removeGroupControls = e.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Tt));
  }
  update() {
    const { dragControls: e } = this.node.getProps(),
      { dragControls: n } = this.node.prevProps || {};
    e !== n &&
      (this.removeGroupControls(),
      e && (this.removeGroupControls = e.subscribe(this.controls)));
  }
  unmount() {
    (this.removeGroupControls(),
      this.removeListeners(),
      this.controls.isDragging || this.controls.endPanSession());
  }
}
const ql = (t) => (e, n) => {
  t && Q.update(() => t(e, n), !1, !0);
};
class mE extends er {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = Tt));
  }
  onPointerDown(e) {
    this.session = new G0(e, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: K0(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: e,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: ql(e),
      onStart: ql(n),
      onMove: ql(r),
      onEnd: (s, o) => {
        (delete this.session, i && Q.postRender(() => i(s, o)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = ls(this.node.current, "pointerdown", (e) =>
      this.onPointerDown(e),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    (this.removePointerDownListener(), this.session && this.session.end());
  }
}
let Zl = !1;
class gE extends T.Component {
  componentDidMount() {
    const {
        visualElement: e,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: s } = e;
    (s &&
      (n.group && n.group.add(s),
      r && r.register && i && r.register(s),
      Zl && s.root.didUpdate(),
      s.addEventListener("animationComplete", () => {
        this.safeToRemove();
      }),
      s.setOptions({
        ...s.options,
        layoutDependency: this.props.layoutDependency,
        onExitComplete: () => this.safeToRemove(),
      })),
      ($o.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(e) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: s,
      } = this.props,
      { projection: o } = r;
    return (
      o &&
        ((o.isPresent = s),
        e.layoutDependency !== n &&
          o.setOptions({ ...o.options, layoutDependency: n }),
        (Zl = !0),
        i || e.layoutDependency !== n || n === void 0 || e.isPresent !== s
          ? o.willUpdate()
          : this.safeToRemove(),
        e.isPresent !== s &&
          (s
            ? o.promote()
            : o.relegate() ||
              Q.postRender(() => {
                const a = o.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { visualElement: e, layoutAnchor: n } = this.props,
      { projection: r } = e;
    r &&
      ((r.options.layoutAnchor = n),
      r.root.didUpdate(),
      ud.postRender(() => {
        !r.currentAnimation && r.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: e,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = e;
    ((Zl = !0),
      i &&
        (i.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(i),
        r && r.deregister && r.deregister(i)));
  }
  safeToRemove() {
    const { safeToRemove: e } = this.props;
    e && e();
  }
  render() {
    return null;
  }
}
function X0(t) {
  const [e, n] = I0(),
    r = T.useContext(Wf);
  return g.jsx(gE, {
    ...t,
    layoutGroup: r,
    switchLayoutGroup: T.useContext($0),
    isPresent: e,
    safeToRemove: n,
  });
}
const yE = {
  pan: { Feature: mE },
  drag: { Feature: pE, ProjectionNode: V0, MeasureLayout: X0 },
};
function ym(t, e, n) {
  const { props: r } = t;
  t.animationState &&
    r.whileHover &&
    t.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n,
    s = r[i];
  s && Q.postRender(() => s(e, qs(e)));
}
class vE extends er {
  mount() {
    const { current: e } = this.node;
    e &&
      (this.unmount = bC(
        e,
        (n, r) => (ym(this.node, r, "Start"), (i) => ym(this.node, i, "End")),
      ));
  }
  unmount() {}
}
class xE extends er {
  constructor() {
    (super(...arguments), (this.isActive = !1));
  }
  onFocus() {
    let e = !1;
    try {
      e = this.node.current.matches(":focus-visible");
    } catch {
      e = !0;
    }
    !e ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Ys(
      Ls(this.node.current, "focus", () => this.onFocus()),
      Ls(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function vm(t, e, n) {
  const { props: r } = t;
  if (t.current instanceof HTMLButtonElement && t.current.disabled) return;
  t.animationState &&
    r.whileTap &&
    t.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n),
    s = r[i];
  s && Q.postRender(() => s(e, qs(e)));
}
class _E extends er {
  mount() {
    const { current: e } = this.node;
    if (!e) return;
    const { globalTapTarget: n, propagate: r } = this.node.props;
    this.unmount = HC(
      e,
      (i, s) => (
        vm(this.node, s, "Start"),
        (o, { success: a }) => vm(this.node, o, a ? "End" : "Cancel")
      ),
      {
        useGlobalTarget: n,
        stopPropagation: (r == null ? void 0 : r.tap) === !1,
      },
    );
  }
  unmount() {}
}
const Rc = new WeakMap(),
  Jl = new WeakMap(),
  wE = (t) => {
    const e = Rc.get(t.target);
    e && e(t);
  },
  SE = (t) => {
    t.forEach(wE);
  };
function TE({ root: t, ...e }) {
  const n = t || document;
  Jl.has(n) || Jl.set(n, {});
  const r = Jl.get(n),
    i = JSON.stringify(e);
  return (
    r[i] || (r[i] = new IntersectionObserver(SE, { root: t, ...e })),
    r[i]
  );
}
function CE(t, e, n) {
  const r = TE(e);
  return (
    Rc.set(t, n),
    r.observe(t),
    () => {
      (Rc.delete(t), r.unobserve(t));
    }
  );
}
const PE = { some: 0, all: 1 };
class kE extends er {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    var l;
    (l = this.stopObserver) == null || l.call(this);
    const { viewport: e = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: s } = e,
      o = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : PE[i],
      },
      a = (u) => {
        const { isIntersecting: c } = u;
        if (
          this.isInView === c ||
          ((this.isInView = c), s && !c && this.hasEnteredView)
        )
          return;
        (c && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", c));
        const { onViewportEnter: f, onViewportLeave: d } = this.node.getProps(),
          h = c ? f : d;
        h && h(u);
      };
    this.stopObserver = CE(this.node.current, o, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: e, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(EE(e, n)) && this.startObserver();
  }
  unmount() {
    var e;
    ((e = this.stopObserver) == null || e.call(this),
      (this.hasEnteredView = !1),
      (this.isInView = !1));
  }
}
function EE({ viewport: t = {} }, { viewport: e = {} } = {}) {
  return (n) => t[n] !== e[n];
}
const jE = {
    inView: { Feature: kE },
    tap: { Feature: _E },
    focus: { Feature: xE },
    hover: { Feature: vE },
  },
  NE = { layout: { ProjectionNode: V0, MeasureLayout: X0 } },
  RE = { ...Jk, ...jE, ...yE, ...NE },
  V = Yk(RE, Xk),
  ME = { some: 0, all: 1 };
function AE(t, e, { root: n, margin: r, amount: i = "some" } = {}) {
  const s = ld(t),
    o = new WeakMap(),
    a = (u) => {
      u.forEach((c) => {
        const f = o.get(c.target);
        if (c.isIntersecting !== !!f)
          if (c.isIntersecting) {
            const d = e(c.target, c);
            typeof d == "function" ? o.set(c.target, d) : l.unobserve(c.target);
          } else typeof f == "function" && (f(c), o.delete(c.target));
      });
    },
    l = new IntersectionObserver(a, {
      root: n,
      rootMargin: r,
      threshold: typeof i == "number" ? i : ME[i],
    });
  return (s.forEach((u) => l.observe(u)), () => l.disconnect());
}
function Q0(
  t,
  { root: e, margin: n, amount: r, once: i = !1, initial: s = !1 } = {},
) {
  const [o, a] = T.useState(s);
  return (
    T.useEffect(() => {
      if (!t.current || (i && o)) return;
      const l = () => (a(!0), i ? void 0 : () => a(!1)),
        u = { root: (e && e.current) || void 0, margin: n, amount: r };
      return AE(t.current, l, u);
    }, [e, t, n, i, r]),
    o
  );
}
const xd = "sap_token",
  _d = "sap_user";
function wd() {
  return localStorage.getItem(xd);
}
function q0() {
  const t = localStorage.getItem(_d);
  return t ? JSON.parse(t) : null;
}
function DE(t, e) {
  (localStorage.setItem(xd, t), localStorage.setItem(_d, JSON.stringify(e)));
}
function LE() {
  (localStorage.removeItem(xd), localStorage.removeItem(_d));
}
const OE = [
    { to: "/dashboard", label: "Dashboard", icon: "📊", end: !0 },
    { to: "/dashboard/universities", label: "Universities", icon: "🏛️" },
    { to: "/dashboard/programs", label: "Programs", icon: "📋" },
    { to: "/dashboard/applications", label: "Applications", icon: "📄" },
    { to: "/dashboard/recommendations", label: "Recommendations", icon: "💡" },
  ],
  VE = {
    "/dashboard": {
      title: "Dashboard",
      subtitle: "Overview of your study abroad journey",
    },
    "/dashboard/universities": {
      title: "Universities",
      subtitle: "Explore universities worldwide",
    },
    "/dashboard/programs": {
      title: "Programs",
      subtitle: "Browse study programs",
    },
    "/dashboard/applications": {
      title: "Applications",
      subtitle: "Manage your applications",
    },
    "/dashboard/recommendations": {
      title: "Recommendations",
      subtitle: "AI-powered suggestions for you",
    },
  };
function IE() {
  const t = el(),
    e = Ar(),
    n = q0(),
    [r, i] = T.useState(!1),
    s = document.documentElement.getAttribute("data-theme") || "dark",
    [o, a] = T.useState(s),
    l = () => {
      const d = o === "dark" ? "light" : "dark";
      (document.documentElement.setAttribute("data-theme", d),
        localStorage.setItem("sv_theme", d),
        a(d));
    },
    u = () => {
      (LE(), t("/login"));
    },
    c =
      n != null && n.fullName
        ? n.fullName
            .split(" ")
            .map((d) => d[0])
            .join("")
            .toUpperCase()
            .slice(0, 2)
        : "?",
    f = VE[e.pathname] || { title: "Dashboard", subtitle: "" };
  return g.jsxs("div", {
    className: "dashboard-layout",
    children: [
      g.jsx("div", {
        className: `sidebar-overlay ${r ? "sidebar-overlay-visible" : ""}`,
        onClick: () => i(!1),
      }),
      g.jsxs("aside", {
        className: `sidebar ${r ? "sidebar-open" : ""}`,
        children: [
          g.jsx("div", {
            className: "sidebar-header",
            children: g.jsxs("div", {
              className: "sidebar-logo",
              children: [
                g.jsx("span", {
                  className: "sidebar-logo-icon",
                  children: "✦",
                }),
                "StudyVerse",
              ],
            }),
          }),
          g.jsxs("nav", {
            className: "sidebar-nav",
            children: [
              g.jsx("span", {
                className: "sidebar-label",
                children: "Main Menu",
              }),
              OE.map((d) =>
                g.jsxs(
                  jS,
                  {
                    to: d.to,
                    end: d.end,
                    className: ({ isActive: h }) =>
                      `sidebar-link ${h ? "active" : ""}`,
                    onClick: () => i(!1),
                    children: [
                      g.jsx("span", {
                        className: "sidebar-link-icon",
                        children: d.icon,
                      }),
                      d.label,
                    ],
                  },
                  d.to,
                ),
              ),
            ],
          }),
          g.jsxs("div", {
            className: "sidebar-footer",
            children: [
              g.jsxs("div", {
                className: "sidebar-user",
                children: [
                  g.jsx("div", { className: "sidebar-avatar", children: c }),
                  g.jsxs("div", {
                    className: "sidebar-user-info",
                    children: [
                      g.jsx("div", {
                        className: "sidebar-user-name",
                        children: (n == null ? void 0 : n.fullName) || "User",
                      }),
                      g.jsx("div", {
                        className: "sidebar-user-role",
                        children: (n == null ? void 0 : n.role) || "student",
                      }),
                    ],
                  }),
                ],
              }),
              g.jsx("button", {
                className: "sidebar-logout",
                onClick: u,
                children: "↪ Sign Out",
              }),
            ],
          }),
        ],
      }),
      g.jsxs("div", {
        className: "dashboard-main",
        children: [
          g.jsxs("header", {
            className: "dashboard-topbar",
            children: [
              g.jsxs("div", {
                style: { display: "flex", alignItems: "center", gap: "12px" },
                children: [
                  g.jsx("button", {
                    className: "hamburger",
                    onClick: () => i(!r),
                    children: "☰",
                  }),
                  g.jsxs("div", {
                    className: "topbar-title",
                    children: [
                      g.jsx("h2", { children: f.title }),
                      g.jsx("p", { children: f.subtitle }),
                    ],
                  }),
                ],
              }),
              g.jsx("div", {
                className: "topbar-actions",
                children: g.jsx("button", {
                  className: "theme-toggle",
                  onClick: l,
                  "aria-label": "Toggle theme",
                  children: o === "dark" ? "☀️" : "🌙",
                }),
              }),
            ],
          }),
          g.jsx("main", {
            className: "dashboard-content",
            children: g.jsx(Tk, {
              mode: "wait",
              children: g.jsx(
                V.div,
                {
                  className: "page-transition",
                  initial: { opacity: 0, y: 12 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -12 },
                  transition: { duration: 0.3 },
                  children: g.jsx(mS, {}),
                },
                e.pathname,
              ),
            }),
          }),
        ],
      }),
    ],
  });
}
const FE = "http://localhost:4000/api";
function eu(t = {}) {
  const e = Object.fromEntries(
    Object.entries(t).filter(([, n]) => n !== "" && n !== void 0 && n !== null),
  );
  return new URLSearchParams(e).toString();
}
async function Nt(t, e = {}) {
  const n = wd(),
    r = await fetch(`${FE}${t}`, {
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...(n ? { Authorization: `Bearer ${n}` } : {}),
        ...(e.headers || {}),
      },
    }),
    i = await r.json().catch(() => ({}));
  if (!r.ok)
    throw new Error(
      (i == null ? void 0 : i.message) ||
        (i == null ? void 0 : i.error) ||
        "Request failed",
    );
  return i;
}
const qt = {
    login: (t) =>
      Nt("/auth/login", { method: "POST", body: JSON.stringify(t) }),
    register: (t) =>
      Nt("/auth/register", { method: "POST", body: JSON.stringify(t) }),
    me: () => Nt("/auth/me"),
    universities: (t) => Nt(`/universities?${eu(t)}`),
    popularUniversities: () => Nt("/universities/popular"),
    programs: (t) => Nt(`/programs?${eu(t)}`),
    dashboard: () => Nt("/dashboard/overview"),
    recommendations: (t) => Nt(`/recommendations/${t}`),
    applications: (t = {}) => Nt(`/applications?${eu(t)}`),
    createApplication: (t) =>
      Nt("/applications", { method: "POST", body: JSON.stringify(t) }),
    updateApplicationStatus: (t, e) =>
      Nt(`/applications/${t}/status`, {
        method: "PATCH",
        body: JSON.stringify(e),
      }),
  },
  xm = {
    hidden: { opacity: 0, y: 20 },
    visible: (t = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        delay: t * 0.06,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  },
  bE = {
    draft: ["submitted"],
    submitted: ["under-review", "rejected"],
    "under-review": ["offer-received", "rejected"],
    "offer-received": ["visa-processing", "rejected"],
    "visa-processing": ["enrolled", "rejected"],
    enrolled: [],
    rejected: [],
  },
  zE = {
    draft: "badge-info",
    submitted: "badge-accent",
    "under-review": "badge-warning",
    "offer-received": "badge-teal",
    "visa-processing": "badge-accent",
    enrolled: "badge-success",
    rejected: "badge-danger",
  },
  _m = [
    "draft",
    "submitted",
    "under-review",
    "offer-received",
    "visa-processing",
    "enrolled",
  ];
function BE({ status: t }) {
  const e = _m.indexOf(t),
    n = t === "rejected";
  return g.jsx("div", {
    className: "flex gap-xs items-center",
    style: { marginTop: "12px" },
    children: _m.map((r, i) =>
      g.jsx(
        "div",
        {
          style: {
            flex: 1,
            height: "4px",
            borderRadius: "4px",
            background: n
              ? "var(--danger)"
              : i <= e
                ? "linear-gradient(90deg, var(--accent), var(--accent-2))"
                : "var(--border)",
            transition: "background 0.3s ease",
          },
          title: r,
        },
        r,
      ),
    ),
  });
}
function UE() {
  const [t, e] = T.useState([]),
    [n, r] = T.useState(""),
    [i, s] = T.useState("Fall 2026"),
    [o, a] = T.useState(""),
    [l, u] = T.useState({}),
    c = async () => {
      try {
        const h = await qt.applications();
        e(h.data);
      } catch (h) {
        a(h.message);
      }
    };
  T.useEffect(() => {
    c();
  }, []);
  const f = async (h) => {
      (h.preventDefault(), a(""));
      try {
        (await qt.createApplication({ programId: n, intake: i }),
          r(""),
          a("Application created successfully."),
          await c());
      } catch (v) {
        a(v.message);
      }
    },
    d = async (h, v) => {
      u((m) => ({ ...m, [h]: "" }));
      try {
        (await qt.updateApplicationStatus(h, { status: v }), await c());
      } catch (m) {
        u((_) => ({ ..._, [h]: m.message }));
      }
    };
  return g.jsxs(V.div, {
    initial: "hidden",
    animate: "visible",
    variants: { visible: { transition: { staggerChildren: 0.08 } } },
    children: [
      g.jsxs(V.form, {
        className: "glass-card-static p-lg",
        onSubmit: f,
        variants: xm,
        style: { marginBottom: "28px" },
        children: [
          g.jsx("h3", {
            style: {
              fontSize: "1.05rem",
              fontWeight: 700,
              marginBottom: "16px",
            },
            children: "✏️ Create New Application",
          }),
          g.jsxs("div", {
            className: "flex gap-sm flex-wrap",
            children: [
              g.jsx("input", {
                className: "input",
                placeholder: "Program ID",
                value: n,
                onChange: (h) => r(h.target.value),
                required: !0,
                style: { flex: "2 1 200px" },
              }),
              g.jsx("input", {
                className: "input",
                placeholder: "Intake (e.g. Fall 2026)",
                value: i,
                onChange: (h) => s(h.target.value),
                required: !0,
                style: { flex: "1 1 160px" },
              }),
              g.jsx("button", {
                className: "btn btn-primary",
                type: "submit",
                children: "Create",
              }),
            ],
          }),
          o &&
            g.jsx(V.p, {
              className: o.includes("successfully")
                ? "badge badge-success mt-sm"
                : "error-text mt-sm",
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              style: { display: "inline-block" },
              children: o,
            }),
        ],
      }),
      g.jsxs("div", {
        className: "flex flex-col gap-md",
        children: [
          t.map((h, v) => {
            var _, y;
            const m = bE[h.status] || [];
            return g.jsxs(
              V.article,
              {
                className: "glass-card p-lg",
                variants: xm,
                custom: v,
                layout: !0,
                children: [
                  g.jsxs("div", {
                    className:
                      "flex items-center justify-between flex-wrap gap-sm",
                    style: { marginBottom: "12px" },
                    children: [
                      g.jsx("h4", {
                        style: { fontSize: "1.05rem", fontWeight: 700 },
                        children:
                          ((_ = h.program) == null ? void 0 : _.title) ||
                          h.program,
                      }),
                      g.jsx("span", {
                        className: `badge ${zE[h.status] || "badge-info"}`,
                        children: h.status,
                      }),
                    ],
                  }),
                  g.jsxs("div", {
                    className: "flex gap-lg flex-wrap",
                    style: {
                      fontSize: "0.88rem",
                      color: "var(--text-secondary)",
                      marginBottom: "4px",
                    },
                    children: [
                      g.jsxs("span", {
                        children: [
                          "👤 ",
                          (y = h.student) == null ? void 0 : y.fullName,
                        ],
                      }),
                      g.jsxs("span", {
                        children: ["🌍 ", h.destinationCountry],
                      }),
                      g.jsxs("span", { children: ["📅 ", h.intake] }),
                    ],
                  }),
                  g.jsx(BE, { status: h.status }),
                  m.length > 0
                    ? g.jsx("div", {
                        className: "flex gap-sm flex-wrap",
                        style: { marginTop: "16px" },
                        children: m.map((p) =>
                          g.jsxs(
                            "button",
                            {
                              type: "button",
                              className: `btn btn-sm ${p === "rejected" ? "btn-danger" : "btn-secondary"}`,
                              onClick: () => d(h._id, p),
                              children: ["→ ", p],
                            },
                            p,
                          ),
                        ),
                      })
                    : g.jsx("p", {
                        style: {
                          color: "var(--text-tertiary)",
                          fontSize: "0.82rem",
                          marginTop: "12px",
                        },
                        children: "No further transitions available.",
                      }),
                  l[h._id] &&
                    g.jsx("p", {
                      className: "error-text mt-sm",
                      children: l[h._id],
                    }),
                ],
              },
              h._id,
            );
          }),
          t.length === 0 &&
            g.jsx("div", {
              className: "glass-card-static p-lg",
              style: { textAlign: "center" },
              children: g.jsx("p", {
                style: { color: "var(--text-secondary)" },
                children: "No applications yet. Create your first one above.",
              }),
            }),
        ],
      }),
    ],
  });
}
const en = {
  hidden: { opacity: 0, y: 25 },
  visible: (t = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: t * 0.07,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};
function wm({ mode: t }) {
  const e = el(),
    [n, r] = T.useState(""),
    [i, s] = T.useState(!1),
    [o, a] = T.useState(!1),
    [l, u] = T.useState({
      fullName: "",
      email: "",
      password: "",
      role: "student",
    }),
    c = t === "register",
    f = async (d) => {
      (d.preventDefault(), r(""), s(!0));
      try {
        const h = c
          ? await qt.register(l)
          : await qt.login({ email: l.email, password: l.password });
        (DE(h.data.token, h.data.user), e("/dashboard"));
      } catch (h) {
        r(h.message);
      } finally {
        s(!1);
      }
    };
  return g.jsxs("div", {
    className: "auth-page",
    children: [
      g.jsxs("div", {
        className: "auth-left",
        children: [
          g.jsxs("div", {
            className: "auth-left-bg",
            children: [
              g.jsx("div", { className: "auth-orb auth-orb-1" }),
              g.jsx("div", { className: "auth-orb auth-orb-2" }),
            ],
          }),
          g.jsxs(V.div, {
            className: "auth-left-content",
            initial: { opacity: 0, x: -30 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.7, ease: "easeOut" },
            children: [
              g.jsxs("div", {
                className: "auth-brand-logo",
                children: [
                  g.jsx("span", {
                    className: "auth-brand-icon",
                    children: "✦",
                  }),
                  "StudyVerse",
                ],
              }),
              g.jsx("h1", {
                className: "auth-left-title",
                children: c
                  ? g.jsxs(g.Fragment, {
                      children: [
                        "Start your ",
                        g.jsx("span", {
                          className: "gradient-text",
                          children: "global education",
                        }),
                        " journey",
                      ],
                    })
                  : g.jsxs(g.Fragment, {
                      children: [
                        "Welcome back to ",
                        g.jsx("span", {
                          className: "gradient-text",
                          children: "StudyVerse",
                        }),
                      ],
                    }),
              }),
              g.jsx("p", {
                className: "auth-left-subtitle",
                children: c
                  ? "Join thousands of students who found their dream university through our AI-powered platform."
                  : "Track your applications, discover new programs, and get personalized recommendations.",
              }),
              g.jsx("div", {
                className: "auth-left-features",
                children: [
                  "AI-powered university matching",
                  "Application tracking & status updates",
                  "Personalized program recommendations",
                ].map((d) =>
                  g.jsxs(
                    "div",
                    {
                      className: "auth-feature-item",
                      children: [
                        g.jsx("span", {
                          className: "auth-feature-check",
                          children: "✓",
                        }),
                        d,
                      ],
                    },
                    d,
                  ),
                ),
              }),
            ],
          }),
        ],
      }),
      g.jsx("div", {
        className: "auth-right",
        children: g.jsxs(V.div, {
          className: "auth-form-wrapper",
          initial: "hidden",
          animate: "visible",
          variants: { visible: { transition: { staggerChildren: 0.07 } } },
          children: [
            g.jsxs(V.div, {
              className: "auth-form-header",
              variants: en,
              children: [
                g.jsx("h2", {
                  children: c ? "Create your account" : "Sign in",
                }),
                g.jsx("p", {
                  children: c
                    ? "Fill in your details to get started"
                    : "Enter your credentials to access your dashboard",
                }),
              ],
            }),
            g.jsxs(V.div, {
              className: "auth-social-btns",
              variants: en,
              custom: 1,
              children: [
                g.jsxs("button", {
                  type: "button",
                  className: "auth-social-btn",
                  children: [
                    g.jsx("span", {
                      className: "auth-social-icon",
                      children: "G",
                    }),
                    "Google",
                  ],
                }),
                g.jsxs("button", {
                  type: "button",
                  className: "auth-social-btn",
                  children: [
                    g.jsx("span", {
                      className: "auth-social-icon",
                      children: "⌂",
                    }),
                    "GitHub",
                  ],
                }),
              ],
            }),
            g.jsx(V.div, {
              className: "auth-divider",
              variants: en,
              custom: 2,
              children: "or continue with email",
            }),
            g.jsxs("form", {
              className: "auth-form",
              onSubmit: f,
              children: [
                c &&
                  g.jsxs(V.div, {
                    className: "form-field",
                    variants: en,
                    custom: 3,
                    children: [
                      g.jsx("label", {
                        htmlFor: "auth-fullname",
                        children: "Full Name",
                      }),
                      g.jsx("input", {
                        id: "auth-fullname",
                        className: "input",
                        placeholder: "John Doe",
                        required: !0,
                        value: l.fullName,
                        onChange: (d) => u({ ...l, fullName: d.target.value }),
                      }),
                    ],
                  }),
                g.jsxs(V.div, {
                  className: "form-field",
                  variants: en,
                  custom: c ? 4 : 3,
                  children: [
                    g.jsx("label", {
                      htmlFor: "auth-email",
                      children: "Email address",
                    }),
                    g.jsx("input", {
                      id: "auth-email",
                      className: "input",
                      type: "email",
                      placeholder: "you@example.com",
                      required: !0,
                      value: l.email,
                      onChange: (d) => u({ ...l, email: d.target.value }),
                    }),
                  ],
                }),
                g.jsxs(V.div, {
                  className: "form-field",
                  variants: en,
                  custom: c ? 5 : 4,
                  children: [
                    g.jsx("label", {
                      htmlFor: "auth-password",
                      children: "Password",
                    }),
                    g.jsxs("div", {
                      className: "password-wrapper",
                      children: [
                        g.jsx("input", {
                          id: "auth-password",
                          className: "input",
                          type: o ? "text" : "password",
                          placeholder: "Minimum 8 characters",
                          required: !0,
                          minLength: 8,
                          value: l.password,
                          onChange: (d) =>
                            u({ ...l, password: d.target.value }),
                          style: { paddingRight: "48px" },
                        }),
                        g.jsx("button", {
                          type: "button",
                          className: "password-toggle",
                          onClick: () => a(!o),
                          tabIndex: -1,
                          "aria-label": o ? "Hide password" : "Show password",
                          children: o ? "🙈" : "👁",
                        }),
                      ],
                    }),
                  ],
                }),
                c &&
                  g.jsxs(V.div, {
                    className: "form-field",
                    variants: en,
                    custom: 6,
                    children: [
                      g.jsx("label", {
                        htmlFor: "auth-role",
                        children: "I am a",
                      }),
                      g.jsxs("select", {
                        id: "auth-role",
                        className: "input select",
                        value: l.role,
                        onChange: (d) => u({ ...l, role: d.target.value }),
                        children: [
                          g.jsx("option", {
                            value: "student",
                            children: "Student",
                          }),
                          g.jsx("option", {
                            value: "counselor",
                            children: "Counselor",
                          }),
                        ],
                      }),
                    ],
                  }),
                n &&
                  g.jsx(V.div, {
                    className: "auth-error",
                    initial: { opacity: 0, y: -8 },
                    animate: { opacity: 1, y: 0 },
                    children: n,
                  }),
                g.jsx(V.div, {
                  className: "auth-submit",
                  variants: en,
                  custom: c ? 7 : 5,
                  children: g.jsx("button", {
                    className: "btn btn-primary",
                    disabled: i,
                    type: "submit",
                    children: i
                      ? g.jsxs(g.Fragment, {
                          children: [
                            g.jsx("span", { className: "spinner" }),
                            "Please wait...",
                          ],
                        })
                      : c
                        ? "Create Account →"
                        : "Sign In →",
                  }),
                }),
              ],
            }),
            g.jsx(V.p, {
              className: "auth-footer-text",
              variants: en,
              custom: c ? 8 : 6,
              children: c
                ? g.jsxs(g.Fragment, {
                    children: [
                      "Already have an account? ",
                      g.jsx(sn, { to: "/login", children: "Sign in" }),
                    ],
                  })
                : g.jsxs(g.Fragment, {
                    children: [
                      "Don't have an account? ",
                      g.jsx(sn, { to: "/register", children: "Create one" }),
                    ],
                  }),
            }),
          ],
        }),
      }),
    ],
  });
}
function nn(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return t;
}
function Z0(t, e) {
  ((t.prototype = Object.create(e.prototype)),
    (t.prototype.constructor = t),
    (t.__proto__ = e));
}
/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var ut = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: { lineHeight: "" },
  },
  Os = { duration: 0.5, overwrite: !1, delay: 0 },
  Sd,
  Re,
  re,
  _t = 1e8,
  X = 1 / _t,
  Mc = Math.PI * 2,
  WE = Mc / 4,
  $E = 0,
  J0 = Math.sqrt,
  HE = Math.cos,
  KE = Math.sin,
  Ce = function (e) {
    return typeof e == "string";
  },
  he = function (e) {
    return typeof e == "function";
  },
  pn = function (e) {
    return typeof e == "number";
  },
  Td = function (e) {
    return typeof e > "u";
  },
  Jt = function (e) {
    return typeof e == "object";
  },
  Qe = function (e) {
    return e !== !1;
  },
  Cd = function () {
    return typeof window < "u";
  },
  To = function (e) {
    return he(e) || Ce(e);
  },
  ex =
    (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
  Ve = Array.isArray,
  GE = /random\([^)]+\)/g,
  YE = /,\s*/g,
  Sm = /(?:-?\.?\d|\.)+/gi,
  tx = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  Zr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  tu = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  nx = /[+-]=-?[.\d]+/,
  XE = /[^,'"\[\]\s]+/gi,
  QE = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  oe,
  Wt,
  Ac,
  Pd,
  ft = {},
  Na = {},
  rx,
  ix = function (e) {
    return (Na = xi(e, ft)) && et;
  },
  kd = function (e, n) {
    return console.warn(
      "Invalid property",
      e,
      "set to",
      n,
      "Missing plugin? gsap.registerPlugin()",
    );
  },
  Vs = function (e, n) {
    return !n && console.warn(e);
  },
  sx = function (e, n) {
    return (e && (ft[e] = n) && Na && (Na[e] = n)) || ft;
  },
  Is = function () {
    return 0;
  },
  qE = { suppressEvents: !0, isStart: !0, kill: !1 },
  Ho = { suppressEvents: !0, kill: !1 },
  ZE = { suppressEvents: !0 },
  Ed = {},
  Un = [],
  Dc = {},
  ox,
  nt = {},
  nu = {},
  Tm = 30,
  Ko = [],
  jd = "",
  Nd = function (e) {
    var n = e[0],
      r,
      i;
    if ((Jt(n) || he(n) || (e = [e]), !(r = (n._gsap || {}).harness))) {
      for (i = Ko.length; i-- && !Ko[i].targetTest(n); );
      r = Ko[i];
    }
    for (i = e.length; i--; )
      (e[i] && (e[i]._gsap || (e[i]._gsap = new jx(e[i], r)))) ||
        e.splice(i, 1);
    return e;
  },
  wr = function (e) {
    return e._gsap || Nd(wt(e))[0]._gsap;
  },
  ax = function (e, n, r) {
    return (r = e[n]) && he(r)
      ? e[n]()
      : (Td(r) && e.getAttribute && e.getAttribute(n)) || r;
  },
  qe = function (e, n) {
    return (e = e.split(",")).forEach(n) || e;
  },
  pe = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  ie = function (e) {
    return Math.round(e * 1e7) / 1e7 || 0;
  },
  oi = function (e, n) {
    var r = n.charAt(0),
      i = parseFloat(n.substr(2));
    return (
      (e = parseFloat(e)),
      r === "+" ? e + i : r === "-" ? e - i : r === "*" ? e * i : e / i
    );
  },
  JE = function (e, n) {
    for (var r = n.length, i = 0; e.indexOf(n[i]) < 0 && ++i < r; );
    return i < r;
  },
  Ra = function () {
    var e = Un.length,
      n = Un.slice(0),
      r,
      i;
    for (Dc = {}, Un.length = 0, r = 0; r < e; r++)
      ((i = n[r]),
        i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0));
  },
  Rd = function (e) {
    return !!(e._initted || e._startAt || e.add);
  },
  lx = function (e, n, r, i) {
    (Un.length && !Re && Ra(),
      e.render(n, r, !!(Re && n < 0 && Rd(e))),
      Un.length && !Re && Ra());
  },
  ux = function (e) {
    var n = parseFloat(e);
    return (n || n === 0) && (e + "").match(XE).length < 2
      ? n
      : Ce(e)
        ? e.trim()
        : e;
  },
  cx = function (e) {
    return e;
  },
  dt = function (e, n) {
    for (var r in n) r in e || (e[r] = n[r]);
    return e;
  },
  ej = function (e) {
    return function (n, r) {
      for (var i in r)
        i in n || (i === "duration" && e) || i === "ease" || (n[i] = r[i]);
    };
  },
  xi = function (e, n) {
    for (var r in n) e[r] = n[r];
    return e;
  },
  Cm = function t(e, n) {
    for (var r in n)
      r !== "__proto__" &&
        r !== "constructor" &&
        r !== "prototype" &&
        (e[r] = Jt(n[r]) ? t(e[r] || (e[r] = {}), n[r]) : n[r]);
    return e;
  },
  Ma = function (e, n) {
    var r = {},
      i;
    for (i in e) i in n || (r[i] = e[i]);
    return r;
  },
  us = function (e) {
    var n = e.parent || oe,
      r = e.keyframes ? ej(Ve(e.keyframes)) : dt;
    if (Qe(e.inherit))
      for (; n; ) (r(e, n.vars.defaults), (n = n.parent || n._dp));
    return e;
  },
  tj = function (e, n) {
    for (var r = e.length, i = r === n.length; i && r-- && e[r] === n[r]; );
    return r < 0;
  },
  fx = function (e, n, r, i, s) {
    var o = e[i],
      a;
    if (s) for (a = n[s]; o && o[s] > a; ) o = o._prev;
    return (
      o ? ((n._next = o._next), (o._next = n)) : ((n._next = e[r]), (e[r] = n)),
      n._next ? (n._next._prev = n) : (e[i] = n),
      (n._prev = o),
      (n.parent = n._dp = e),
      n
    );
  },
  al = function (e, n, r, i) {
    (r === void 0 && (r = "_first"), i === void 0 && (i = "_last"));
    var s = n._prev,
      o = n._next;
    (s ? (s._next = o) : e[r] === n && (e[r] = o),
      o ? (o._prev = s) : e[i] === n && (e[i] = s),
      (n._next = n._prev = n.parent = null));
  },
  Yn = function (e, n) {
    (e.parent &&
      (!n || e.parent.autoRemoveChildren) &&
      e.parent.remove &&
      e.parent.remove(e),
      (e._act = 0));
  },
  Sr = function (e, n) {
    if (e && (!n || n._end > e._dur || n._start < 0))
      for (var r = e; r; ) ((r._dirty = 1), (r = r.parent));
    return e;
  },
  nj = function (e) {
    for (var n = e.parent; n && n.parent; )
      ((n._dirty = 1), n.totalDuration(), (n = n.parent));
    return e;
  },
  Lc = function (e, n, r, i) {
    return (
      e._startAt &&
      (Re
        ? e._startAt.revert(Ho)
        : (e.vars.immediateRender && !e.vars.autoRevert) ||
          e._startAt.render(n, !0, i))
    );
  },
  rj = function t(e) {
    return !e || (e._ts && t(e.parent));
  },
  Pm = function (e) {
    return e._repeat ? _i(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
  },
  _i = function (e, n) {
    var r = Math.floor((e = ie(e / n)));
    return e && r === e ? r - 1 : r;
  },
  Aa = function (e, n) {
    return (
      (e - n._start) * n._ts +
      (n._ts >= 0 ? 0 : n._dirty ? n.totalDuration() : n._tDur)
    );
  },
  ll = function (e) {
    return (e._end = ie(
      e._start + (e._tDur / Math.abs(e._ts || e._rts || X) || 0),
    ));
  },
  ul = function (e, n) {
    var r = e._dp;
    return (
      r &&
        r.smoothChildTiming &&
        e._ts &&
        ((e._start = ie(
          r._time -
            (e._ts > 0
              ? n / e._ts
              : ((e._dirty ? e.totalDuration() : e._tDur) - n) / -e._ts),
        )),
        ll(e),
        r._dirty || Sr(r, e)),
      e
    );
  },
  dx = function (e, n) {
    var r;
    if (
      ((n._time ||
        (!n._dur && n._initted) ||
        (n._start < e._time && (n._dur || !n.add))) &&
        ((r = Aa(e.rawTime(), n)),
        (!n._dur || Zs(0, n.totalDuration(), r) - n._tTime > X) &&
          n.render(r, !0)),
      Sr(e, n)._dp && e._initted && e._time >= e._dur && e._ts)
    ) {
      if (e._dur < e.duration())
        for (r = e; r._dp; )
          (r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp));
      e._zTime = -X;
    }
  },
  Kt = function (e, n, r, i) {
    return (
      n.parent && Yn(n),
      (n._start = ie(
        (pn(r) ? r : r || e !== oe ? mt(e, r, n) : e._time) + n._delay,
      )),
      (n._end = ie(
        n._start + (n.totalDuration() / Math.abs(n.timeScale()) || 0),
      )),
      fx(e, n, "_first", "_last", e._sort ? "_start" : 0),
      Oc(n) || (e._recent = n),
      i || dx(e, n),
      e._ts < 0 && ul(e, e._tTime),
      e
    );
  },
  hx = function (e, n) {
    return (
      (ft.ScrollTrigger || kd("scrollTrigger", n)) &&
      ft.ScrollTrigger.create(n, e)
    );
  },
  px = function (e, n, r, i, s) {
    if ((Ad(e, n, s), !e._initted)) return 1;
    if (
      !r &&
      e._pt &&
      !Re &&
      ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
      ox !== rt.frame
    )
      return (Un.push(e), (e._lazy = [s, i]), 1);
  },
  ij = function t(e) {
    var n = e.parent;
    return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n));
  },
  Oc = function (e) {
    var n = e.data;
    return n === "isFromStart" || n === "isStart";
  },
  sj = function (e, n, r, i) {
    var s = e.ratio,
      o =
        n < 0 ||
        (!n &&
          ((!e._start && ij(e) && !(!e._initted && Oc(e))) ||
            ((e._ts < 0 || e._dp._ts < 0) && !Oc(e))))
          ? 0
          : 1,
      a = e._rDelay,
      l = 0,
      u,
      c,
      f;
    if (
      (a &&
        e._repeat &&
        ((l = Zs(0, e._tDur, n)),
        (c = _i(l, a)),
        e._yoyo && c & 1 && (o = 1 - o),
        c !== _i(e._tTime, a) &&
          ((s = 1 - o), e.vars.repeatRefresh && e._initted && e.invalidate())),
      o !== s || Re || i || e._zTime === X || (!n && e._zTime))
    ) {
      if (!e._initted && px(e, n, i, r, l)) return;
      for (
        f = e._zTime,
          e._zTime = n || (r ? X : 0),
          r || (r = n && !f),
          e.ratio = o,
          e._from && (o = 1 - o),
          e._time = 0,
          e._tTime = l,
          u = e._pt;
        u;
      )
        (u.r(o, u.d), (u = u._next));
      (n < 0 && Lc(e, n, r, !0),
        e._onUpdate && !r && st(e, "onUpdate"),
        l && e._repeat && !r && e.parent && st(e, "onRepeat"),
        (n >= e._tDur || n < 0) &&
          e.ratio === o &&
          (o && Yn(e, 1),
          !r &&
            !Re &&
            (st(e, o ? "onComplete" : "onReverseComplete", !0),
            e._prom && e._prom())));
    } else e._zTime || (e._zTime = n);
  },
  oj = function (e, n, r) {
    var i;
    if (r > n)
      for (i = e._first; i && i._start <= r; ) {
        if (i.data === "isPause" && i._start > n) return i;
        i = i._next;
      }
    else
      for (i = e._last; i && i._start >= r; ) {
        if (i.data === "isPause" && i._start < n) return i;
        i = i._prev;
      }
  },
  wi = function (e, n, r, i) {
    var s = e._repeat,
      o = ie(n) || 0,
      a = e._tTime / e._tDur;
    return (
      a && !i && (e._time *= o / e._dur),
      (e._dur = o),
      (e._tDur = s ? (s < 0 ? 1e10 : ie(o * (s + 1) + e._rDelay * s)) : o),
      a > 0 && !i && ul(e, (e._tTime = e._tDur * a)),
      e.parent && ll(e),
      r || Sr(e.parent, e),
      e
    );
  },
  km = function (e) {
    return e instanceof He ? Sr(e) : wi(e, e._dur);
  },
  aj = { _start: 0, endTime: Is, totalDuration: Is },
  mt = function t(e, n, r) {
    var i = e.labels,
      s = e._recent || aj,
      o = e.duration() >= _t ? s.endTime(!1) : e._dur,
      a,
      l,
      u;
    return Ce(n) && (isNaN(n) || n in i)
      ? ((l = n.charAt(0)),
        (u = n.substr(-1) === "%"),
        (a = n.indexOf("=")),
        l === "<" || l === ">"
          ? (a >= 0 && (n = n.replace(/=/, "")),
            (l === "<" ? s._start : s.endTime(s._repeat >= 0)) +
              (parseFloat(n.substr(1)) || 0) *
                (u ? (a < 0 ? s : r).totalDuration() / 100 : 1))
          : a < 0
            ? (n in i || (i[n] = o), i[n])
            : ((l = parseFloat(n.charAt(a - 1) + n.substr(a + 1))),
              u && r && (l = (l / 100) * (Ve(r) ? r[0] : r).totalDuration()),
              a > 1 ? t(e, n.substr(0, a - 1), r) + l : o + l))
      : n == null
        ? o
        : +n;
  },
  cs = function (e, n, r) {
    var i = pn(n[1]),
      s = (i ? 2 : 1) + (e < 2 ? 0 : 1),
      o = n[s],
      a,
      l;
    if ((i && (o.duration = n[1]), (o.parent = r), e)) {
      for (a = o, l = r; l && !("immediateRender" in a); )
        ((a = l.vars.defaults || {}), (l = Qe(l.vars.inherit) && l.parent));
      ((o.immediateRender = Qe(a.immediateRender)),
        e < 2 ? (o.runBackwards = 1) : (o.startAt = n[s - 1]));
    }
    return new ye(n[0], o, n[s + 1]);
  },
  tr = function (e, n) {
    return e || e === 0 ? n(e) : n;
  },
  Zs = function (e, n, r) {
    return r < e ? e : r > n ? n : r;
  },
  Oe = function (e, n) {
    return !Ce(e) || !(n = QE.exec(e)) ? "" : n[1];
  },
  lj = function (e, n, r) {
    return tr(r, function (i) {
      return Zs(e, n, i);
    });
  },
  Vc = [].slice,
  mx = function (e, n) {
    return (
      e &&
      Jt(e) &&
      "length" in e &&
      ((!n && !e.length) || (e.length - 1 in e && Jt(e[0]))) &&
      !e.nodeType &&
      e !== Wt
    );
  },
  uj = function (e, n, r) {
    return (
      r === void 0 && (r = []),
      e.forEach(function (i) {
        var s;
        return (Ce(i) && !n) || mx(i, 1)
          ? (s = r).push.apply(s, wt(i))
          : r.push(i);
      }) || r
    );
  },
  wt = function (e, n, r) {
    return re && !n && re.selector
      ? re.selector(e)
      : Ce(e) && !r && (Ac || !Si())
        ? Vc.call((n || Pd).querySelectorAll(e), 0)
        : Ve(e)
          ? uj(e, r)
          : mx(e)
            ? Vc.call(e, 0)
            : e
              ? [e]
              : [];
  },
  Ic = function (e) {
    return (
      (e = wt(e)[0] || Vs("Invalid scope") || {}),
      function (n) {
        var r = e.current || e.nativeElement || e;
        return wt(
          n,
          r.querySelectorAll
            ? r
            : r === e
              ? Vs("Invalid scope") || Pd.createElement("div")
              : e,
        );
      }
    );
  },
  gx = function (e) {
    return e.sort(function () {
      return 0.5 - Math.random();
    });
  },
  yx = function (e) {
    if (he(e)) return e;
    var n = Jt(e) ? e : { each: e },
      r = Tr(n.ease),
      i = n.from || 0,
      s = parseFloat(n.base) || 0,
      o = {},
      a = i > 0 && i < 1,
      l = isNaN(i) || a,
      u = n.axis,
      c = i,
      f = i;
    return (
      Ce(i)
        ? (c = f = { center: 0.5, edges: 0.5, end: 1 }[i] || 0)
        : !a && l && ((c = i[0]), (f = i[1])),
      function (d, h, v) {
        var m = (v || n).length,
          _ = o[m],
          y,
          p,
          x,
          w,
          S,
          k,
          P,
          C,
          E;
        if (!_) {
          if (((E = n.grid === "auto" ? 0 : (n.grid || [1, _t])[1]), !E)) {
            for (
              P = -_t;
              P < (P = v[E++].getBoundingClientRect().left) && E < m;
            );
            E < m && E--;
          }
          for (
            _ = o[m] = [],
              y = l ? Math.min(E, m) * c - 0.5 : i % E,
              p = E === _t ? 0 : l ? (m * f) / E - 0.5 : (i / E) | 0,
              P = 0,
              C = _t,
              k = 0;
            k < m;
            k++
          )
            ((x = (k % E) - y),
              (w = p - ((k / E) | 0)),
              (_[k] = S = u ? Math.abs(u === "y" ? w : x) : J0(x * x + w * w)),
              S > P && (P = S),
              S < C && (C = S));
          (i === "random" && gx(_),
            (_.max = P - C),
            (_.min = C),
            (_.v = m =
              (parseFloat(n.amount) ||
                parseFloat(n.each) *
                  (E > m
                    ? m - 1
                    : u
                      ? u === "y"
                        ? m / E
                        : E
                      : Math.max(E, m / E)) ||
                0) * (i === "edges" ? -1 : 1)),
            (_.b = m < 0 ? s - m : s),
            (_.u = Oe(n.amount || n.each) || 0),
            (r = r && m < 0 ? Sj(r) : r));
        }
        return (
          (m = (_[d] - _.min) / _.max || 0),
          ie(_.b + (r ? r(m) : m) * _.v) + _.u
        );
      }
    );
  },
  Fc = function (e) {
    var n = Math.pow(10, ((e + "").split(".")[1] || "").length);
    return function (r) {
      var i = ie(Math.round(parseFloat(r) / e) * e * n);
      return (i - (i % 1)) / n + (pn(r) ? 0 : Oe(r));
    };
  },
  vx = function (e, n) {
    var r = Ve(e),
      i,
      s;
    return (
      !r &&
        Jt(e) &&
        ((i = r = e.radius || _t),
        e.values
          ? ((e = wt(e.values)), (s = !pn(e[0])) && (i *= i))
          : (e = Fc(e.increment))),
      tr(
        n,
        r
          ? he(e)
            ? function (o) {
                return ((s = e(o)), Math.abs(s - o) <= i ? s : o);
              }
            : function (o) {
                for (
                  var a = parseFloat(s ? o.x : o),
                    l = parseFloat(s ? o.y : 0),
                    u = _t,
                    c = 0,
                    f = e.length,
                    d,
                    h;
                  f--;
                )
                  (s
                    ? ((d = e[f].x - a), (h = e[f].y - l), (d = d * d + h * h))
                    : (d = Math.abs(e[f] - a)),
                    d < u && ((u = d), (c = f)));
                return (
                  (c = !i || u <= i ? e[c] : o),
                  s || c === o || pn(o) ? c : c + Oe(o)
                );
              }
          : Fc(e),
      )
    );
  },
  xx = function (e, n, r, i) {
    return tr(Ve(e) ? !n : r === !0 ? !!(r = 0) : !i, function () {
      return Ve(e)
        ? e[~~(Math.random() * e.length)]
        : (r = r || 1e-5) &&
            (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) &&
            Math.floor(
              Math.round((e - r / 2 + Math.random() * (n - e + r * 0.99)) / r) *
                r *
                i,
            ) / i;
    });
  },
  cj = function () {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
      n[r] = arguments[r];
    return function (i) {
      return n.reduce(function (s, o) {
        return o(s);
      }, i);
    };
  },
  fj = function (e, n) {
    return function (r) {
      return e(parseFloat(r)) + (n || Oe(r));
    };
  },
  dj = function (e, n, r) {
    return wx(e, n, 0, 1, r);
  },
  _x = function (e, n, r) {
    return tr(r, function (i) {
      return e[~~n(i)];
    });
  },
  hj = function t(e, n, r) {
    var i = n - e;
    return Ve(e)
      ? _x(e, t(0, e.length), n)
      : tr(r, function (s) {
          return ((i + ((s - e) % i)) % i) + e;
        });
  },
  pj = function t(e, n, r) {
    var i = n - e,
      s = i * 2;
    return Ve(e)
      ? _x(e, t(0, e.length - 1), n)
      : tr(r, function (o) {
          return ((o = (s + ((o - e) % s)) % s || 0), e + (o > i ? s - o : o));
        });
  },
  Fs = function (e) {
    return e.replace(GE, function (n) {
      var r = n.indexOf("[") + 1,
        i = n.substring(r || 7, r ? n.indexOf("]") : n.length - 1).split(YE);
      return xx(r ? i : +i[0], r ? 0 : +i[1], +i[2] || 1e-5);
    });
  },
  wx = function (e, n, r, i, s) {
    var o = n - e,
      a = i - r;
    return tr(s, function (l) {
      return r + (((l - e) / o) * a || 0);
    });
  },
  mj = function t(e, n, r, i) {
    var s = isNaN(e + n)
      ? 0
      : function (h) {
          return (1 - h) * e + h * n;
        };
    if (!s) {
      var o = Ce(e),
        a = {},
        l,
        u,
        c,
        f,
        d;
      if ((r === !0 && (i = 1) && (r = null), o))
        ((e = { p: e }), (n = { p: n }));
      else if (Ve(e) && !Ve(n)) {
        for (c = [], f = e.length, d = f - 2, u = 1; u < f; u++)
          c.push(t(e[u - 1], e[u]));
        (f--,
          (s = function (v) {
            v *= f;
            var m = Math.min(d, ~~v);
            return c[m](v - m);
          }),
          (r = n));
      } else i || (e = xi(Ve(e) ? [] : {}, e));
      if (!c) {
        for (l in n) Md.call(a, e, l, "get", n[l]);
        s = function (v) {
          return Od(v, a) || (o ? e.p : e);
        };
      }
    }
    return tr(r, s);
  },
  Em = function (e, n, r) {
    var i = e.labels,
      s = _t,
      o,
      a,
      l;
    for (o in i)
      ((a = i[o] - n),
        a < 0 == !!r && a && s > (a = Math.abs(a)) && ((l = o), (s = a)));
    return l;
  },
  st = function (e, n, r) {
    var i = e.vars,
      s = i[n],
      o = re,
      a = e._ctx,
      l,
      u,
      c;
    if (s)
      return (
        (l = i[n + "Params"]),
        (u = i.callbackScope || e),
        r && Un.length && Ra(),
        a && (re = a),
        (c = l ? s.apply(u, l) : s.call(u)),
        (re = o),
        c
      );
  },
  Yi = function (e) {
    return (
      Yn(e),
      e.scrollTrigger && e.scrollTrigger.kill(!!Re),
      e.progress() < 1 && st(e, "onInterrupt"),
      e
    );
  },
  Jr,
  Sx = [],
  Tx = function (e) {
    if (e)
      if (((e = (!e.name && e.default) || e), Cd() || e.headless)) {
        var n = e.name,
          r = he(e),
          i =
            n && !r && e.init
              ? function () {
                  this._props = [];
                }
              : e,
          s = {
            init: Is,
            render: Od,
            add: Md,
            kill: Aj,
            modifier: Mj,
            rawVars: 0,
          },
          o = {
            targetTest: 0,
            get: 0,
            getSetter: Ld,
            aliases: {},
            register: 0,
          };
        if ((Si(), e !== i)) {
          if (nt[n]) return;
          (dt(i, dt(Ma(e, s), o)),
            xi(i.prototype, xi(s, Ma(e, o))),
            (nt[(i.prop = n)] = i),
            e.targetTest && (Ko.push(i), (Ed[n] = 1)),
            (n =
              (n === "css" ? "CSS" : n.charAt(0).toUpperCase() + n.substr(1)) +
              "Plugin"));
        }
        (sx(n, i), e.register && e.register(et, i, Ze));
      } else Sx.push(e);
  },
  Y = 255,
  Xi = {
    aqua: [0, Y, Y],
    lime: [0, Y, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, Y],
    navy: [0, 0, 128],
    white: [Y, Y, Y],
    olive: [128, 128, 0],
    yellow: [Y, Y, 0],
    orange: [Y, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [Y, 0, 0],
    pink: [Y, 192, 203],
    cyan: [0, Y, Y],
    transparent: [Y, Y, Y, 0],
  },
  ru = function (e, n, r) {
    return (
      (e += e < 0 ? 1 : e > 1 ? -1 : 0),
      ((e * 6 < 1
        ? n + (r - n) * e * 6
        : e < 0.5
          ? r
          : e * 3 < 2
            ? n + (r - n) * (2 / 3 - e) * 6
            : n) *
        Y +
        0.5) |
        0
    );
  },
  Cx = function (e, n, r) {
    var i = e ? (pn(e) ? [e >> 16, (e >> 8) & Y, e & Y] : 0) : Xi.black,
      s,
      o,
      a,
      l,
      u,
      c,
      f,
      d,
      h,
      v;
    if (!i) {
      if ((e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), Xi[e]))
        i = Xi[e];
      else if (e.charAt(0) === "#") {
        if (
          (e.length < 6 &&
            ((s = e.charAt(1)),
            (o = e.charAt(2)),
            (a = e.charAt(3)),
            (e =
              "#" +
              s +
              s +
              o +
              o +
              a +
              a +
              (e.length === 5 ? e.charAt(4) + e.charAt(4) : ""))),
          e.length === 9)
        )
          return (
            (i = parseInt(e.substr(1, 6), 16)),
            [i >> 16, (i >> 8) & Y, i & Y, parseInt(e.substr(7), 16) / 255]
          );
        ((e = parseInt(e.substr(1), 16)), (i = [e >> 16, (e >> 8) & Y, e & Y]));
      } else if (e.substr(0, 3) === "hsl") {
        if (((i = v = e.match(Sm)), !n))
          ((l = (+i[0] % 360) / 360),
            (u = +i[1] / 100),
            (c = +i[2] / 100),
            (o = c <= 0.5 ? c * (u + 1) : c + u - c * u),
            (s = c * 2 - o),
            i.length > 3 && (i[3] *= 1),
            (i[0] = ru(l + 1 / 3, s, o)),
            (i[1] = ru(l, s, o)),
            (i[2] = ru(l - 1 / 3, s, o)));
        else if (~e.indexOf("="))
          return ((i = e.match(tx)), r && i.length < 4 && (i[3] = 1), i);
      } else i = e.match(Sm) || Xi.transparent;
      i = i.map(Number);
    }
    return (
      n &&
        !v &&
        ((s = i[0] / Y),
        (o = i[1] / Y),
        (a = i[2] / Y),
        (f = Math.max(s, o, a)),
        (d = Math.min(s, o, a)),
        (c = (f + d) / 2),
        f === d
          ? (l = u = 0)
          : ((h = f - d),
            (u = c > 0.5 ? h / (2 - f - d) : h / (f + d)),
            (l =
              f === s
                ? (o - a) / h + (o < a ? 6 : 0)
                : f === o
                  ? (a - s) / h + 2
                  : (s - o) / h + 4),
            (l *= 60)),
        (i[0] = ~~(l + 0.5)),
        (i[1] = ~~(u * 100 + 0.5)),
        (i[2] = ~~(c * 100 + 0.5))),
      r && i.length < 4 && (i[3] = 1),
      i
    );
  },
  Px = function (e) {
    var n = [],
      r = [],
      i = -1;
    return (
      e.split(Wn).forEach(function (s) {
        var o = s.match(Zr) || [];
        (n.push.apply(n, o), r.push((i += o.length + 1)));
      }),
      (n.c = r),
      n
    );
  },
  jm = function (e, n, r) {
    var i = "",
      s = (e + i).match(Wn),
      o = n ? "hsla(" : "rgba(",
      a = 0,
      l,
      u,
      c,
      f;
    if (!s) return e;
    if (
      ((s = s.map(function (d) {
        return (
          (d = Cx(d, n, 1)) &&
          o +
            (n ? d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : d.join(",")) +
            ")"
        );
      })),
      r && ((c = Px(e)), (l = r.c), l.join(i) !== c.c.join(i)))
    )
      for (u = e.replace(Wn, "1").split(Zr), f = u.length - 1; a < f; a++)
        i +=
          u[a] +
          (~l.indexOf(a)
            ? s.shift() || o + "0,0,0,0)"
            : (c.length ? c : s.length ? s : r).shift());
    if (!u)
      for (u = e.split(Wn), f = u.length - 1; a < f; a++) i += u[a] + s[a];
    return i + u[f];
  },
  Wn = (function () {
    var t =
        "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      e;
    for (e in Xi) t += "|" + e + "\\b";
    return new RegExp(t + ")", "gi");
  })(),
  gj = /hsl[a]?\(/,
  kx = function (e) {
    var n = e.join(" "),
      r;
    if (((Wn.lastIndex = 0), Wn.test(n)))
      return (
        (r = gj.test(n)),
        (e[1] = jm(e[1], r)),
        (e[0] = jm(e[0], r, Px(e[1]))),
        !0
      );
  },
  bs,
  rt = (function () {
    var t = Date.now,
      e = 500,
      n = 33,
      r = t(),
      i = r,
      s = 1e3 / 240,
      o = s,
      a = [],
      l,
      u,
      c,
      f,
      d,
      h,
      v = function m(_) {
        var y = t() - i,
          p = _ === !0,
          x,
          w,
          S,
          k;
        if (
          ((y > e || y < 0) && (r += y - n),
          (i += y),
          (S = i - r),
          (x = S - o),
          (x > 0 || p) &&
            ((k = ++f.frame),
            (d = S - f.time * 1e3),
            (f.time = S = S / 1e3),
            (o += x + (x >= s ? 4 : s - x)),
            (w = 1)),
          p || (l = u(m)),
          w)
        )
          for (h = 0; h < a.length; h++) a[h](S, d, k, _);
      };
    return (
      (f = {
        time: 0,
        frame: 0,
        tick: function () {
          v(!0);
        },
        deltaRatio: function (_) {
          return d / (1e3 / (_ || 60));
        },
        wake: function () {
          rx &&
            (!Ac &&
              Cd() &&
              ((Wt = Ac = window),
              (Pd = Wt.document || {}),
              (ft.gsap = et),
              (Wt.gsapVersions || (Wt.gsapVersions = [])).push(et.version),
              ix(Na || Wt.GreenSockGlobals || (!Wt.gsap && Wt) || {}),
              Sx.forEach(Tx)),
            (c = typeof requestAnimationFrame < "u" && requestAnimationFrame),
            l && f.sleep(),
            (u =
              c ||
              function (_) {
                return setTimeout(_, (o - f.time * 1e3 + 1) | 0);
              }),
            (bs = 1),
            v(2));
        },
        sleep: function () {
          ((c ? cancelAnimationFrame : clearTimeout)(l), (bs = 0), (u = Is));
        },
        lagSmoothing: function (_, y) {
          ((e = _ || 1 / 0), (n = Math.min(y || 33, e)));
        },
        fps: function (_) {
          ((s = 1e3 / (_ || 240)), (o = f.time * 1e3 + s));
        },
        add: function (_, y, p) {
          var x = y
            ? function (w, S, k, P) {
                (_(w, S, k, P), f.remove(x));
              }
            : _;
          return (f.remove(_), a[p ? "unshift" : "push"](x), Si(), x);
        },
        remove: function (_, y) {
          ~(y = a.indexOf(_)) && a.splice(y, 1) && h >= y && h--;
        },
        _listeners: a,
      }),
      f
    );
  })(),
  Si = function () {
    return !bs && rt.wake();
  },
  B = {},
  yj = /^[\d.\-M][\d.\-,\s]/,
  vj = /["']/g,
  xj = function (e) {
    for (
      var n = {},
        r = e.substr(1, e.length - 3).split(":"),
        i = r[0],
        s = 1,
        o = r.length,
        a,
        l,
        u;
      s < o;
      s++
    )
      ((l = r[s]),
        (a = s !== o - 1 ? l.lastIndexOf(",") : l.length),
        (u = l.substr(0, a)),
        (n[i] = isNaN(u) ? u.replace(vj, "").trim() : +u),
        (i = l.substr(a + 1).trim()));
    return n;
  },
  _j = function (e) {
    var n = e.indexOf("(") + 1,
      r = e.indexOf(")"),
      i = e.indexOf("(", n);
    return e.substring(n, ~i && i < r ? e.indexOf(")", r + 1) : r);
  },
  wj = function (e) {
    var n = (e + "").split("("),
      r = B[n[0]];
    return r && n.length > 1 && r.config
      ? r.config.apply(
          null,
          ~e.indexOf("{") ? [xj(n[1])] : _j(e).split(",").map(ux),
        )
      : B._CE && yj.test(e)
        ? B._CE("", e)
        : r;
  },
  Sj = function (e) {
    return function (n) {
      return 1 - e(1 - n);
    };
  },
  Tr = function (e, n) {
    return (e && (he(e) ? e : B[e] || wj(e))) || n;
  },
  Dr = function (e, n, r, i) {
    (r === void 0 &&
      (r = function (l) {
        return 1 - n(1 - l);
      }),
      i === void 0 &&
        (i = function (l) {
          return l < 0.5 ? n(l * 2) / 2 : 1 - n((1 - l) * 2) / 2;
        }));
    var s = { easeIn: n, easeOut: r, easeInOut: i },
      o;
    return (
      qe(e, function (a) {
        ((B[a] = ft[a] = s), (B[(o = a.toLowerCase())] = r));
        for (var l in s)
          B[
            o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")
          ] = B[a + "." + l] = s[l];
      }),
      s
    );
  },
  Ex = function (e) {
    return function (n) {
      return n < 0.5 ? (1 - e(1 - n * 2)) / 2 : 0.5 + e((n - 0.5) * 2) / 2;
    };
  },
  iu = function t(e, n, r) {
    var i = n >= 1 ? n : 1,
      s = (r || (e ? 0.3 : 0.45)) / (n < 1 ? n : 1),
      o = (s / Mc) * (Math.asin(1 / i) || 0),
      a = function (c) {
        return c === 1 ? 1 : i * Math.pow(2, -10 * c) * KE((c - o) * s) + 1;
      },
      l =
        e === "out"
          ? a
          : e === "in"
            ? function (u) {
                return 1 - a(1 - u);
              }
            : Ex(a);
    return (
      (s = Mc / s),
      (l.config = function (u, c) {
        return t(e, u, c);
      }),
      l
    );
  },
  su = function t(e, n) {
    n === void 0 && (n = 1.70158);
    var r = function (o) {
        return o ? --o * o * ((n + 1) * o + n) + 1 : 0;
      },
      i =
        e === "out"
          ? r
          : e === "in"
            ? function (s) {
                return 1 - r(1 - s);
              }
            : Ex(r);
    return (
      (i.config = function (s) {
        return t(e, s);
      }),
      i
    );
  };
qe("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
  var n = e < 5 ? e + 1 : e;
  Dr(
    t + ",Power" + (n - 1),
    e
      ? function (r) {
          return Math.pow(r, n);
        }
      : function (r) {
          return r;
        },
    function (r) {
      return 1 - Math.pow(1 - r, n);
    },
    function (r) {
      return r < 0.5
        ? Math.pow(r * 2, n) / 2
        : 1 - Math.pow((1 - r) * 2, n) / 2;
    },
  );
});
B.Linear.easeNone = B.none = B.Linear.easeIn;
Dr("Elastic", iu("in"), iu("out"), iu());
(function (t, e) {
  var n = 1 / e,
    r = 2 * n,
    i = 2.5 * n,
    s = function (a) {
      return a < n
        ? t * a * a
        : a < r
          ? t * Math.pow(a - 1.5 / e, 2) + 0.75
          : a < i
            ? t * (a -= 2.25 / e) * a + 0.9375
            : t * Math.pow(a - 2.625 / e, 2) + 0.984375;
    };
  Dr(
    "Bounce",
    function (o) {
      return 1 - s(1 - o);
    },
    s,
  );
})(7.5625, 2.75);
Dr("Expo", function (t) {
  return Math.pow(2, 10 * (t - 1)) * t + t * t * t * t * t * t * (1 - t);
});
Dr("Circ", function (t) {
  return -(J0(1 - t * t) - 1);
});
Dr("Sine", function (t) {
  return t === 1 ? 1 : -HE(t * WE) + 1;
});
Dr("Back", su("in"), su("out"), su());
B.SteppedEase =
  B.steps =
  ft.SteppedEase =
    {
      config: function (e, n) {
        e === void 0 && (e = 1);
        var r = 1 / e,
          i = e + (n ? 0 : 1),
          s = n ? 1 : 0,
          o = 1 - X;
        return function (a) {
          return (((i * Zs(0, o, a)) | 0) + s) * r;
        };
      },
    };
Os.ease = B["quad.out"];
qe(
  "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
  function (t) {
    return (jd += t + "," + t + "Params,");
  },
);
var jx = function (e, n) {
    ((this.id = $E++),
      (e._gsap = this),
      (this.target = e),
      (this.harness = n),
      (this.get = n ? n.get : ax),
      (this.set = n ? n.getSetter : Ld));
  },
  zs = (function () {
    function t(n) {
      ((this.vars = n),
        (this._delay = +n.delay || 0),
        (this._repeat = n.repeat === 1 / 0 ? -2 : n.repeat || 0) &&
          ((this._rDelay = n.repeatDelay || 0),
          (this._yoyo = !!n.yoyo || !!n.yoyoEase)),
        (this._ts = 1),
        wi(this, +n.duration, 1, 1),
        (this.data = n.data),
        re && ((this._ctx = re), re.data.push(this)),
        bs || rt.wake());
    }
    var e = t.prototype;
    return (
      (e.delay = function (r) {
        return r || r === 0
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + r - this._delay),
            (this._delay = r),
            this)
          : this._delay;
      }),
      (e.duration = function (r) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r,
            )
          : this.totalDuration() && this._dur;
      }),
      (e.totalDuration = function (r) {
        return arguments.length
          ? ((this._dirty = 0),
            wi(
              this,
              this._repeat < 0
                ? r
                : (r - this._repeat * this._rDelay) / (this._repeat + 1),
            ))
          : this._tDur;
      }),
      (e.totalTime = function (r, i) {
        if ((Si(), !arguments.length)) return this._tTime;
        var s = this._dp;
        if (s && s.smoothChildTiming && this._ts) {
          for (ul(this, r), !s._dp || s.parent || dx(s, this); s && s.parent; )
            (s.parent._time !==
              s._start +
                (s._ts >= 0
                  ? s._tTime / s._ts
                  : (s.totalDuration() - s._tTime) / -s._ts) &&
              s.totalTime(s._tTime, !0),
              (s = s.parent));
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && r < this._tDur) ||
              (this._ts < 0 && r > 0) ||
              (!this._tDur && !r)) &&
            Kt(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== r ||
            (!this._dur && !i) ||
            (this._initted && Math.abs(this._zTime) === X) ||
            (!this._initted && this._dur && r) ||
            (!r && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = r), lx(this, r, i)),
          this
        );
      }),
      (e.time = function (r, i) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), r + Pm(this)) %
                (this._dur + this._rDelay) || (r ? this._dur : 0),
              i,
            )
          : this._time;
      }),
      (e.totalProgress = function (r, i) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * r, i)
          : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.rawTime() >= 0 && this._initted
              ? 1
              : 0;
      }),
      (e.progress = function (r, i) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) +
                Pm(this),
              i,
            )
          : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.rawTime() > 0
              ? 1
              : 0;
      }),
      (e.iteration = function (r, i) {
        var s = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (r - 1) * s, i)
          : this._repeat
            ? _i(this._tTime, s) + 1
            : 1;
      }),
      (e.timeScale = function (r, i) {
        if (!arguments.length) return this._rts === -X ? 0 : this._rts;
        if (this._rts === r) return this;
        var s =
          this.parent && this._ts ? Aa(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +r || 0),
          (this._ts = this._ps || r === -X ? 0 : this._rts),
          this.totalTime(
            Zs(-Math.abs(this._delay), this.totalDuration(), s),
            i !== !1,
          ),
          ll(this),
          nj(this)
        );
      }),
      (e.paused = function (r) {
        return arguments.length
          ? (this._ps !== r &&
              ((this._ps = r),
              r
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (Si(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                      Math.abs(this._zTime) !== X &&
                      (this._tTime -= X),
                  ))),
            this)
          : this._ps;
      }),
      (e.startTime = function (r) {
        if (arguments.length) {
          this._start = ie(r);
          var i = this.parent || this._dp;
          return (
            i &&
              (i._sort || !this.parent) &&
              Kt(i, this, this._start - this._delay),
            this
          );
        }
        return this._start;
      }),
      (e.endTime = function (r) {
        return (
          this._start +
          (Qe(r) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (e.rawTime = function (r) {
        var i = this.parent || this._dp;
        return i
          ? r &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
              ? Aa(i.rawTime(r), this)
              : this._tTime
          : this._tTime;
      }),
      (e.revert = function (r) {
        r === void 0 && (r = ZE);
        var i = Re;
        return (
          (Re = r),
          Rd(this) &&
            (this.timeline && this.timeline.revert(r),
            this.totalTime(-0.01, r.suppressEvents)),
          this.data !== "nested" && r.kill !== !1 && this.kill(),
          (Re = i),
          this
        );
      }),
      (e.globalTime = function (r) {
        for (var i = this, s = arguments.length ? r : i.rawTime(); i; )
          ((s = i._start + s / (Math.abs(i._ts) || 1)), (i = i._dp));
        return !this.parent && this._sat ? this._sat.globalTime(r) : s;
      }),
      (e.repeat = function (r) {
        return arguments.length
          ? ((this._repeat = r === 1 / 0 ? -2 : r), km(this))
          : this._repeat === -2
            ? 1 / 0
            : this._repeat;
      }),
      (e.repeatDelay = function (r) {
        if (arguments.length) {
          var i = this._time;
          return ((this._rDelay = r), km(this), i ? this.time(i) : this);
        }
        return this._rDelay;
      }),
      (e.yoyo = function (r) {
        return arguments.length ? ((this._yoyo = r), this) : this._yoyo;
      }),
      (e.seek = function (r, i) {
        return this.totalTime(mt(this, r), Qe(i));
      }),
      (e.restart = function (r, i) {
        return (
          this.play().totalTime(r ? -this._delay : 0, Qe(i)),
          this._dur || (this._zTime = -X),
          this
        );
      }),
      (e.play = function (r, i) {
        return (r != null && this.seek(r, i), this.reversed(!1).paused(!1));
      }),
      (e.reverse = function (r, i) {
        return (
          r != null && this.seek(r || this.totalDuration(), i),
          this.reversed(!0).paused(!1)
        );
      }),
      (e.pause = function (r, i) {
        return (r != null && this.seek(r, i), this.paused(!0));
      }),
      (e.resume = function () {
        return this.paused(!1);
      }),
      (e.reversed = function (r) {
        return arguments.length
          ? (!!r !== this.reversed() &&
              this.timeScale(-this._rts || (r ? -X : 0)),
            this)
          : this._rts < 0;
      }),
      (e.invalidate = function () {
        return ((this._initted = this._act = 0), (this._zTime = -X), this);
      }),
      (e.isActive = function () {
        var r = this.parent || this._dp,
          i = this._start,
          s;
        return !!(
          !r ||
          (this._ts &&
            this._initted &&
            r.isActive() &&
            (s = r.rawTime(!0)) >= i &&
            s < this.endTime(!0) - X)
        );
      }),
      (e.eventCallback = function (r, i, s) {
        var o = this.vars;
        return arguments.length > 1
          ? (i
              ? ((o[r] = i),
                s && (o[r + "Params"] = s),
                r === "onUpdate" && (this._onUpdate = i))
              : delete o[r],
            this)
          : o[r];
      }),
      (e.then = function (r) {
        var i = this,
          s = i._prom;
        return new Promise(function (o) {
          var a = he(r) ? r : cx,
            l = function () {
              var c = i.then;
              ((i.then = null),
                s && s(),
                he(a) && (a = a(i)) && (a.then || a === i) && (i.then = c),
                o(a),
                (i.then = c));
            };
          (i._initted && i.totalProgress() === 1 && i._ts >= 0) ||
          (!i._tTime && i._ts < 0)
            ? l()
            : (i._prom = l);
        });
      }),
      (e.kill = function () {
        Yi(this);
      }),
      t
    );
  })();
dt(zs.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -X,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var He = (function (t) {
  Z0(e, t);
  function e(r, i) {
    var s;
    return (
      r === void 0 && (r = {}),
      (s = t.call(this, r) || this),
      (s.labels = {}),
      (s.smoothChildTiming = !!r.smoothChildTiming),
      (s.autoRemoveChildren = !!r.autoRemoveChildren),
      (s._sort = Qe(r.sortChildren)),
      oe && Kt(r.parent || oe, nn(s), i),
      r.reversed && s.reverse(),
      r.paused && s.paused(!0),
      r.scrollTrigger && hx(nn(s), r.scrollTrigger),
      s
    );
  }
  var n = e.prototype;
  return (
    (n.to = function (i, s, o) {
      return (cs(0, arguments, this), this);
    }),
    (n.from = function (i, s, o) {
      return (cs(1, arguments, this), this);
    }),
    (n.fromTo = function (i, s, o, a) {
      return (cs(2, arguments, this), this);
    }),
    (n.set = function (i, s, o) {
      return (
        (s.duration = 0),
        (s.parent = this),
        us(s).repeatDelay || (s.repeat = 0),
        (s.immediateRender = !!s.immediateRender),
        new ye(i, s, mt(this, o), 1),
        this
      );
    }),
    (n.call = function (i, s, o) {
      return Kt(this, ye.delayedCall(0, i, s), o);
    }),
    (n.staggerTo = function (i, s, o, a, l, u, c) {
      return (
        (o.duration = s),
        (o.stagger = o.stagger || a),
        (o.onComplete = u),
        (o.onCompleteParams = c),
        (o.parent = this),
        new ye(i, o, mt(this, l)),
        this
      );
    }),
    (n.staggerFrom = function (i, s, o, a, l, u, c) {
      return (
        (o.runBackwards = 1),
        (us(o).immediateRender = Qe(o.immediateRender)),
        this.staggerTo(i, s, o, a, l, u, c)
      );
    }),
    (n.staggerFromTo = function (i, s, o, a, l, u, c, f) {
      return (
        (a.startAt = o),
        (us(a).immediateRender = Qe(a.immediateRender)),
        this.staggerTo(i, s, a, l, u, c, f)
      );
    }),
    (n.render = function (i, s, o) {
      var a = this._time,
        l = this._dirty ? this.totalDuration() : this._tDur,
        u = this._dur,
        c = i <= 0 ? 0 : ie(i),
        f = this._zTime < 0 != i < 0 && (this._initted || !u),
        d,
        h,
        v,
        m,
        _,
        y,
        p,
        x,
        w,
        S,
        k,
        P;
      if (
        (this !== oe && c > l && i >= 0 && (c = l), c !== this._tTime || o || f)
      ) {
        if (
          (a !== this._time &&
            u &&
            ((c += this._time - a), (i += this._time - a)),
          (d = c),
          (w = this._start),
          (x = this._ts),
          (y = !x),
          f && (u || (a = this._zTime), (i || !s) && (this._zTime = i)),
          this._repeat)
        ) {
          if (
            ((k = this._yoyo),
            (_ = u + this._rDelay),
            this._repeat < -1 && i < 0)
          )
            return this.totalTime(_ * 100 + i, s, o);
          if (
            ((d = ie(c % _)),
            c === l
              ? ((m = this._repeat), (d = u))
              : ((S = ie(c / _)),
                (m = ~~S),
                m && m === S && ((d = u), m--),
                d > u && (d = u)),
            (S = _i(this._tTime, _)),
            !a &&
              this._tTime &&
              S !== m &&
              this._tTime - S * _ - this._dur <= 0 &&
              (S = m),
            k && m & 1 && ((d = u - d), (P = 1)),
            m !== S && !this._lock)
          ) {
            var C = k && S & 1,
              E = C === (k && m & 1);
            if (
              (m < S && (C = !C),
              (a = C ? 0 : c % u ? u : c),
              (this._lock = 1),
              (this.render(a || (P ? 0 : ie(m * _)), s, !u)._lock = 0),
              (this._tTime = c),
              !s && this.parent && st(this, "onRepeat"),
              this.vars.repeatRefresh &&
                !P &&
                ((this.invalidate()._lock = 1), (S = m)),
              (a && a !== this._time) ||
                y !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((u = this._dur),
              (l = this._tDur),
              E &&
                ((this._lock = 2),
                (a = C ? u : -1e-4),
                this.render(a, !0),
                this.vars.repeatRefresh && !P && this.invalidate()),
              (this._lock = 0),
              !this._ts && !y)
            )
              return this;
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((p = oj(this, ie(a), ie(d))), p && (c -= d - (d = p._start))),
          (this._tTime = c),
          (this._time = d),
          (this._act = !!x),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = i),
            (a = 0)),
          !a && c && u && !s && !S && (st(this, "onStart"), this._tTime !== c))
        )
          return this;
        if (d >= a && i >= 0)
          for (h = this._first; h; ) {
            if (
              ((v = h._next), (h._act || d >= h._start) && h._ts && p !== h)
            ) {
              if (h.parent !== this) return this.render(i, s, o);
              if (
                (h.render(
                  h._ts > 0
                    ? (d - h._start) * h._ts
                    : (h._dirty ? h.totalDuration() : h._tDur) +
                        (d - h._start) * h._ts,
                  s,
                  o,
                ),
                d !== this._time || (!this._ts && !y))
              ) {
                ((p = 0), v && (c += this._zTime = -X));
                break;
              }
            }
            h = v;
          }
        else {
          h = this._last;
          for (var j = i < 0 ? i : d; h; ) {
            if (((v = h._prev), (h._act || j <= h._end) && h._ts && p !== h)) {
              if (h.parent !== this) return this.render(i, s, o);
              if (
                (h.render(
                  h._ts > 0
                    ? (j - h._start) * h._ts
                    : (h._dirty ? h.totalDuration() : h._tDur) +
                        (j - h._start) * h._ts,
                  s,
                  o || (Re && Rd(h)),
                ),
                d !== this._time || (!this._ts && !y))
              ) {
                ((p = 0), v && (c += this._zTime = j ? -X : X));
                break;
              }
            }
            h = v;
          }
        }
        if (
          p &&
          !s &&
          (this.pause(),
          (p.render(d >= a ? 0 : -X)._zTime = d >= a ? 1 : -1),
          this._ts)
        )
          return ((this._start = w), ll(this), this.render(i, s, o));
        (this._onUpdate && !s && st(this, "onUpdate", !0),
          ((c === l && this._tTime >= this.totalDuration()) || (!c && a)) &&
            (w === this._start || Math.abs(x) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((i || !u) &&
                ((c === l && this._ts > 0) || (!c && this._ts < 0)) &&
                Yn(this, 1),
              !s &&
                !(i < 0 && !a) &&
                (c || a || !l) &&
                (st(
                  this,
                  c === l && i >= 0 ? "onComplete" : "onReverseComplete",
                  !0,
                ),
                this._prom &&
                  !(c < l && this.timeScale() > 0) &&
                  this._prom()))));
      }
      return this;
    }),
    (n.add = function (i, s) {
      var o = this;
      if ((pn(s) || (s = mt(this, s, i)), !(i instanceof zs))) {
        if (Ve(i))
          return (
            i.forEach(function (a) {
              return o.add(a, s);
            }),
            this
          );
        if (Ce(i)) return this.addLabel(i, s);
        if (he(i)) i = ye.delayedCall(0, i);
        else return this;
      }
      return this !== i ? Kt(this, i, s) : this;
    }),
    (n.getChildren = function (i, s, o, a) {
      (i === void 0 && (i = !0),
        s === void 0 && (s = !0),
        o === void 0 && (o = !0),
        a === void 0 && (a = -_t));
      for (var l = [], u = this._first; u; )
        (u._start >= a &&
          (u instanceof ye
            ? s && l.push(u)
            : (o && l.push(u), i && l.push.apply(l, u.getChildren(!0, s, o)))),
          (u = u._next));
      return l;
    }),
    (n.getById = function (i) {
      for (var s = this.getChildren(1, 1, 1), o = s.length; o--; )
        if (s[o].vars.id === i) return s[o];
    }),
    (n.remove = function (i) {
      return Ce(i)
        ? this.removeLabel(i)
        : he(i)
          ? this.killTweensOf(i)
          : (i.parent === this && al(this, i),
            i === this._recent && (this._recent = this._last),
            Sr(this));
    }),
    (n.totalTime = function (i, s) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = ie(
              rt.time -
                (this._ts > 0
                  ? i / this._ts
                  : (this.totalDuration() - i) / -this._ts),
            )),
          t.prototype.totalTime.call(this, i, s),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (n.addLabel = function (i, s) {
      return ((this.labels[i] = mt(this, s)), this);
    }),
    (n.removeLabel = function (i) {
      return (delete this.labels[i], this);
    }),
    (n.addPause = function (i, s, o) {
      var a = ye.delayedCall(0, s || Is, o);
      return (
        (a.data = "isPause"),
        (this._hasPause = 1),
        Kt(this, a, mt(this, i))
      );
    }),
    (n.removePause = function (i) {
      var s = this._first;
      for (i = mt(this, i); s; )
        (s._start === i && s.data === "isPause" && Yn(s), (s = s._next));
    }),
    (n.killTweensOf = function (i, s, o) {
      for (var a = this.getTweensOf(i, o), l = a.length; l--; )
        Rn !== a[l] && a[l].kill(i, s);
      return this;
    }),
    (n.getTweensOf = function (i, s) {
      for (var o = [], a = wt(i), l = this._first, u = pn(s), c; l; )
        (l instanceof ye
          ? JE(l._targets, a) &&
            (u
              ? (!Rn || (l._initted && l._ts)) &&
                l.globalTime(0) <= s &&
                l.globalTime(l.totalDuration()) > s
              : !s || l.isActive()) &&
            o.push(l)
          : (c = l.getTweensOf(a, s)).length && o.push.apply(o, c),
          (l = l._next));
      return o;
    }),
    (n.tweenTo = function (i, s) {
      s = s || {};
      var o = this,
        a = mt(o, i),
        l = s,
        u = l.startAt,
        c = l.onStart,
        f = l.onStartParams,
        d = l.immediateRender,
        h,
        v = ye.to(
          o,
          dt(
            {
              ease: s.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: a,
              overwrite: "auto",
              duration:
                s.duration ||
                Math.abs(
                  (a - (u && "time" in u ? u.time : o._time)) / o.timeScale(),
                ) ||
                X,
              onStart: function () {
                if ((o.pause(), !h)) {
                  var _ =
                    s.duration ||
                    Math.abs(
                      (a - (u && "time" in u ? u.time : o._time)) /
                        o.timeScale(),
                    );
                  (v._dur !== _ && wi(v, _, 0, 1).render(v._time, !0, !0),
                    (h = 1));
                }
                c && c.apply(v, f || []);
              },
            },
            s,
          ),
        );
      return d ? v.render(0) : v;
    }),
    (n.tweenFromTo = function (i, s, o) {
      return this.tweenTo(s, dt({ startAt: { time: mt(this, i) } }, o));
    }),
    (n.recent = function () {
      return this._recent;
    }),
    (n.nextLabel = function (i) {
      return (i === void 0 && (i = this._time), Em(this, mt(this, i)));
    }),
    (n.previousLabel = function (i) {
      return (i === void 0 && (i = this._time), Em(this, mt(this, i), 1));
    }),
    (n.currentLabel = function (i) {
      return arguments.length
        ? this.seek(i, !0)
        : this.previousLabel(this._time + X);
    }),
    (n.shiftChildren = function (i, s, o) {
      o === void 0 && (o = 0);
      var a = this._first,
        l = this.labels,
        u;
      for (i = ie(i); a; )
        (a._start >= o && ((a._start += i), (a._end += i)), (a = a._next));
      if (s) for (u in l) l[u] >= o && (l[u] += i);
      return Sr(this);
    }),
    (n.invalidate = function (i) {
      var s = this._first;
      for (this._lock = 0; s; ) (s.invalidate(i), (s = s._next));
      return t.prototype.invalidate.call(this, i);
    }),
    (n.clear = function (i) {
      i === void 0 && (i = !0);
      for (var s = this._first, o; s; )
        ((o = s._next), this.remove(s), (s = o));
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        i && (this.labels = {}),
        Sr(this)
      );
    }),
    (n.totalDuration = function (i) {
      var s = 0,
        o = this,
        a = o._last,
        l = _t,
        u,
        c,
        f;
      if (arguments.length)
        return o.timeScale(
          (o._repeat < 0 ? o.duration() : o.totalDuration()) /
            (o.reversed() ? -i : i),
        );
      if (o._dirty) {
        for (f = o.parent; a; )
          ((u = a._prev),
            a._dirty && a.totalDuration(),
            (c = a._start),
            c > l && o._sort && a._ts && !o._lock
              ? ((o._lock = 1), (Kt(o, a, c - a._delay, 1)._lock = 0))
              : (l = c),
            c < 0 &&
              a._ts &&
              ((s -= c),
              ((!f && !o._dp) || (f && f.smoothChildTiming)) &&
                ((o._start += ie(c / o._ts)), (o._time -= c), (o._tTime -= c)),
              o.shiftChildren(-c, !1, -1 / 0),
              (l = 0)),
            a._end > s && a._ts && (s = a._end),
            (a = u));
        (wi(o, o === oe && o._time > s ? o._time : s, 1, 1), (o._dirty = 0));
      }
      return o._tDur;
    }),
    (e.updateRoot = function (i) {
      if ((oe._ts && (lx(oe, Aa(i, oe)), (ox = rt.frame)), rt.frame >= Tm)) {
        Tm += ut.autoSleep || 120;
        var s = oe._first;
        if ((!s || !s._ts) && ut.autoSleep && rt._listeners.length < 2) {
          for (; s && !s._ts; ) s = s._next;
          s || rt.sleep();
        }
      }
    }),
    e
  );
})(zs);
dt(He.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var Tj = function (e, n, r, i, s, o, a) {
    var l = new Ze(this._pt, e, n, 0, 1, Lx, null, s),
      u = 0,
      c = 0,
      f,
      d,
      h,
      v,
      m,
      _,
      y,
      p;
    for (
      l.b = r,
        l.e = i,
        r += "",
        i += "",
        (y = ~i.indexOf("random(")) && (i = Fs(i)),
        o && ((p = [r, i]), o(p, e, n), (r = p[0]), (i = p[1])),
        d = r.match(tu) || [];
      (f = tu.exec(i));
    )
      ((v = f[0]),
        (m = i.substring(u, f.index)),
        h ? (h = (h + 1) % 5) : m.substr(-5) === "rgba(" && (h = 1),
        v !== d[c++] &&
          ((_ = parseFloat(d[c - 1]) || 0),
          (l._pt = {
            _next: l._pt,
            p: m || c === 1 ? m : ",",
            s: _,
            c: v.charAt(1) === "=" ? oi(_, v) - _ : parseFloat(v) - _,
            m: h && h < 4 ? Math.round : 0,
          }),
          (u = tu.lastIndex)));
    return (
      (l.c = u < i.length ? i.substring(u, i.length) : ""),
      (l.fp = a),
      (nx.test(i) || y) && (l.e = 0),
      (this._pt = l),
      l
    );
  },
  Md = function (e, n, r, i, s, o, a, l, u, c) {
    he(i) && (i = i(s || 0, e, o));
    var f = e[n],
      d =
        r !== "get"
          ? r
          : he(f)
            ? u
              ? e[
                  n.indexOf("set") || !he(e["get" + n.substr(3)])
                    ? n
                    : "get" + n.substr(3)
                ](u)
              : e[n]()
            : f,
      h = he(f) ? (u ? jj : Ax) : Dd,
      v;
    if (
      (Ce(i) &&
        (~i.indexOf("random(") && (i = Fs(i)),
        i.charAt(1) === "=" &&
          ((v = oi(d, i) + (Oe(d) || 0)), (v || v === 0) && (i = v))),
      !c || d !== i || bc)
    )
      return !isNaN(d * i) && i !== ""
        ? ((v = new Ze(
            this._pt,
            e,
            n,
            +d || 0,
            i - (d || 0),
            typeof f == "boolean" ? Rj : Dx,
            0,
            h,
          )),
          u && (v.fp = u),
          a && v.modifier(a, this, e),
          (this._pt = v))
        : (!f && !(n in e) && kd(n, i),
          Tj.call(this, e, n, d, i, h, l || ut.stringFilter, u));
  },
  Cj = function (e, n, r, i, s) {
    if (
      (he(e) && (e = fs(e, s, n, r, i)),
      !Jt(e) || (e.style && e.nodeType) || Ve(e) || ex(e))
    )
      return Ce(e) ? fs(e, s, n, r, i) : e;
    var o = {},
      a;
    for (a in e) o[a] = fs(e[a], s, n, r, i);
    return o;
  },
  Nx = function (e, n, r, i, s, o) {
    var a, l, u, c;
    if (
      nt[e] &&
      (a = new nt[e]()).init(
        s,
        a.rawVars ? n[e] : Cj(n[e], i, s, o, r),
        r,
        i,
        o,
      ) !== !1 &&
      ((r._pt = l = new Ze(r._pt, s, e, 0, 1, a.render, a, 0, a.priority)),
      r !== Jr)
    )
      for (u = r._ptLookup[r._targets.indexOf(s)], c = a._props.length; c--; )
        u[a._props[c]] = l;
    return a;
  },
  Rn,
  bc,
  Ad = function t(e, n, r) {
    var i = e.vars,
      s = i.ease,
      o = i.startAt,
      a = i.immediateRender,
      l = i.lazy,
      u = i.onUpdate,
      c = i.runBackwards,
      f = i.yoyoEase,
      d = i.keyframes,
      h = i.autoRevert,
      v = e._dur,
      m = e._startAt,
      _ = e._targets,
      y = e.parent,
      p = y && y.data === "nested" ? y.vars.targets : _,
      x = e._overwrite === "auto" && !Sd,
      w = e.timeline,
      S = i.easeReverse || f,
      k,
      P,
      C,
      E,
      j,
      L,
      I,
      F,
      z,
      H,
      U,
      q,
      N;
    if (
      (w && (!d || !s) && (s = "none"),
      (e._ease = Tr(s, Os.ease)),
      (e._rEase = S && (Tr(S) || e._ease)),
      (e._from = !w && !!i.runBackwards),
      e._from && (e.ratio = 1),
      !w || (d && !i.stagger))
    ) {
      if (
        ((F = _[0] ? wr(_[0]).harness : 0),
        (q = F && i[F.prop]),
        (k = Ma(i, Ed)),
        m &&
          (m._zTime < 0 && m.progress(1),
          n < 0 && c && a && !h ? m.render(-1, !0) : m.revert(c && v ? Ho : qE),
          (m._lazy = 0)),
        o)
      ) {
        if (
          (Yn(
            (e._startAt = ye.set(
              _,
              dt(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: y,
                  immediateRender: !0,
                  lazy: !m && Qe(l),
                  startAt: null,
                  delay: 0,
                  onUpdate:
                    u &&
                    function () {
                      return st(e, "onUpdate");
                    },
                  stagger: 0,
                },
                o,
              ),
            )),
          ),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          n < 0 && (Re || (!a && !h)) && e._startAt.revert(Ho),
          a && v && n <= 0 && r <= 0)
        ) {
          n && (e._zTime = n);
          return;
        }
      } else if (c && v && !m) {
        if (
          (n && (a = !1),
          (C = dt(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: a && !m && Qe(l),
              immediateRender: a,
              stagger: 0,
              parent: y,
            },
            k,
          )),
          q && (C[F.prop] = q),
          Yn((e._startAt = ye.set(_, C))),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          n < 0 && (Re ? e._startAt.revert(Ho) : e._startAt.render(-1, !0)),
          (e._zTime = n),
          !a)
        )
          t(e._startAt, X, X);
        else if (!n) return;
      }
      for (
        e._pt = e._ptCache = 0, l = (v && Qe(l)) || (l && !v), P = 0;
        P < _.length;
        P++
      ) {
        if (
          ((j = _[P]),
          (I = j._gsap || Nd(_)[P]._gsap),
          (e._ptLookup[P] = H = {}),
          Dc[I.id] && Un.length && Ra(),
          (U = p === _ ? P : p.indexOf(j)),
          F &&
            (z = new F()).init(j, q || k, e, U, p) !== !1 &&
            ((e._pt = E =
              new Ze(e._pt, j, z.name, 0, 1, z.render, z, 0, z.priority)),
            z._props.forEach(function (D) {
              H[D] = E;
            }),
            z.priority && (L = 1)),
          !F || q)
        )
          for (C in k)
            nt[C] && (z = Nx(C, k, e, U, j, p))
              ? z.priority && (L = 1)
              : (H[C] = E =
                  Md.call(e, j, C, "get", k[C], U, p, 0, i.stringFilter));
        (e._op && e._op[P] && e.kill(j, e._op[P]),
          x &&
            e._pt &&
            ((Rn = e),
            oe.killTweensOf(j, H, e.globalTime(n)),
            (N = !e.parent),
            (Rn = 0)),
          e._pt && l && (Dc[I.id] = 1));
      }
      (L && Ox(e), e._onInit && e._onInit(e));
    }
    ((e._onUpdate = u),
      (e._initted = (!e._op || e._pt) && !N),
      d && n <= 0 && w.render(_t, !0, !0));
  },
  Pj = function (e, n, r, i, s, o, a, l) {
    var u = ((e._pt && e._ptCache) || (e._ptCache = {}))[n],
      c,
      f,
      d,
      h;
    if (!u)
      for (
        u = e._ptCache[n] = [], d = e._ptLookup, h = e._targets.length;
        h--;
      ) {
        if (((c = d[h][n]), c && c.d && c.d._pt))
          for (c = c.d._pt; c && c.p !== n && c.fp !== n; ) c = c._next;
        if (!c)
          return (
            (bc = 1),
            (e.vars[n] = "+=0"),
            Ad(e, a),
            (bc = 0),
            l
              ? Vs(
                  n +
                    " not eligible for reset. Try splitting into individual properties",
                )
              : 1
          );
        u.push(c);
      }
    for (h = u.length; h--; )
      ((f = u[h]),
        (c = f._pt || f),
        (c.s = (i || i === 0) && !s ? i : c.s + (i || 0) + o * c.c),
        (c.c = r - c.s),
        f.e && (f.e = pe(r) + Oe(f.e)),
        f.b && (f.b = c.s + Oe(f.b)));
  },
  kj = function (e, n) {
    var r = e[0] ? wr(e[0]).harness : 0,
      i = r && r.aliases,
      s,
      o,
      a,
      l;
    if (!i) return n;
    s = xi({}, n);
    for (o in i)
      if (o in s) for (l = i[o].split(","), a = l.length; a--; ) s[l[a]] = s[o];
    return s;
  },
  Ej = function (e, n, r, i) {
    var s = n.ease || i || "power1.inOut",
      o,
      a;
    if (Ve(n))
      ((a = r[e] || (r[e] = [])),
        n.forEach(function (l, u) {
          return a.push({ t: (u / (n.length - 1)) * 100, v: l, e: s });
        }));
    else
      for (o in n)
        ((a = r[o] || (r[o] = [])),
          o === "ease" || a.push({ t: parseFloat(e), v: n[o], e: s }));
  },
  fs = function (e, n, r, i, s) {
    return he(e)
      ? e.call(n, r, i, s)
      : Ce(e) && ~e.indexOf("random(")
        ? Fs(e)
        : e;
  },
  Rx =
    jd +
    "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",
  Mx = {};
qe(Rx + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
  return (Mx[t] = 1);
});
var ye = (function (t) {
  Z0(e, t);
  function e(r, i, s, o) {
    var a;
    (typeof i == "number" && ((s.duration = i), (i = s), (s = null)),
      (a = t.call(this, o ? i : us(i)) || this));
    var l = a.vars,
      u = l.duration,
      c = l.delay,
      f = l.immediateRender,
      d = l.stagger,
      h = l.overwrite,
      v = l.keyframes,
      m = l.defaults,
      _ = l.scrollTrigger,
      y = i.parent || oe,
      p = (Ve(r) || ex(r) ? pn(r[0]) : "length" in i) ? [r] : wt(r),
      x,
      w,
      S,
      k,
      P,
      C,
      E,
      j;
    if (
      ((a._targets = p.length
        ? Nd(p)
        : Vs(
            "GSAP target " + r + " not found. https://gsap.com",
            !ut.nullTargetWarn,
          ) || []),
      (a._ptLookup = []),
      (a._overwrite = h),
      v || d || To(u) || To(c))
    ) {
      i = a.vars;
      var L = i.easeReverse || i.yoyoEase;
      if (
        ((x = a.timeline =
          new He({
            data: "nested",
            defaults: m || {},
            targets: y && y.data === "nested" ? y.vars.targets : p,
          })),
        x.kill(),
        (x.parent = x._dp = nn(a)),
        (x._start = 0),
        d || To(u) || To(c))
      ) {
        if (((k = p.length), (E = d && yx(d)), Jt(d)))
          for (P in d) ~Rx.indexOf(P) && (j || (j = {}), (j[P] = d[P]));
        for (w = 0; w < k; w++)
          ((S = Ma(i, Mx)),
            (S.stagger = 0),
            L && (S.easeReverse = L),
            j && xi(S, j),
            (C = p[w]),
            (S.duration = +fs(u, nn(a), w, C, p)),
            (S.delay = (+fs(c, nn(a), w, C, p) || 0) - a._delay),
            !d &&
              k === 1 &&
              S.delay &&
              ((a._delay = c = S.delay), (a._start += c), (S.delay = 0)),
            x.to(C, S, E ? E(w, C, p) : 0),
            (x._ease = B.none));
        x.duration() ? (u = c = 0) : (a.timeline = 0);
      } else if (v) {
        (us(dt(x.vars.defaults, { ease: "none" })),
          (x._ease = Tr(v.ease || i.ease || "none")));
        var I = 0,
          F,
          z,
          H;
        if (Ve(v))
          (v.forEach(function (U) {
            return x.to(p, U, ">");
          }),
            x.duration());
        else {
          S = {};
          for (P in v)
            P === "ease" || P === "easeEach" || Ej(P, v[P], S, v.easeEach);
          for (P in S)
            for (
              F = S[P].sort(function (U, q) {
                return U.t - q.t;
              }),
                I = 0,
                w = 0;
              w < F.length;
              w++
            )
              ((z = F[w]),
                (H = {
                  ease: z.e,
                  duration: ((z.t - (w ? F[w - 1].t : 0)) / 100) * u,
                }),
                (H[P] = z.v),
                x.to(p, H, I),
                (I += H.duration));
          x.duration() < u && x.to({}, { duration: u - x.duration() });
        }
      }
      u || a.duration((u = x.duration()));
    } else a.timeline = 0;
    return (
      h === !0 && !Sd && ((Rn = nn(a)), oe.killTweensOf(p), (Rn = 0)),
      Kt(y, nn(a), s),
      i.reversed && a.reverse(),
      i.paused && a.paused(!0),
      (f ||
        (!u &&
          !v &&
          a._start === ie(y._time) &&
          Qe(f) &&
          rj(nn(a)) &&
          y.data !== "nested")) &&
        ((a._tTime = -X), a.render(Math.max(0, -c) || 0)),
      _ && hx(nn(a), _),
      a
    );
  }
  var n = e.prototype;
  return (
    (n.render = function (i, s, o) {
      var a = this._time,
        l = this._tDur,
        u = this._dur,
        c = i < 0,
        f = i > l - X && !c ? l : i < X ? 0 : i,
        d,
        h,
        v,
        m,
        _,
        y,
        p,
        x;
      if (!u) sj(this, i, s, o);
      else if (
        f !== this._tTime ||
        !i ||
        o ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== c) ||
        this._lazy
      ) {
        if (((d = f), (x = this.timeline), this._repeat)) {
          if (((m = u + this._rDelay), this._repeat < -1 && c))
            return this.totalTime(m * 100 + i, s, o);
          if (
            ((d = ie(f % m)),
            f === l
              ? ((v = this._repeat), (d = u))
              : ((_ = ie(f / m)),
                (v = ~~_),
                v && v === _ ? ((d = u), v--) : d > u && (d = u)),
            (y = this._yoyo && v & 1),
            y && (d = u - d),
            (_ = _i(this._tTime, m)),
            d === a && !o && this._initted && v === _)
          )
            return ((this._tTime = f), this);
          v !== _ &&
            this.vars.repeatRefresh &&
            !y &&
            !this._lock &&
            d !== m &&
            this._initted &&
            ((this._lock = o = 1),
            (this.render(ie(m * v), !0).invalidate()._lock = 0));
        }
        if (!this._initted) {
          if (px(this, c ? i : d, o, s, f)) return ((this._tTime = 0), this);
          if (a !== this._time && !(o && this.vars.repeatRefresh && v !== _))
            return this;
          if (u !== this._dur) return this.render(i, s, o);
        }
        if (this._rEase) {
          var w = d < a;
          if (w !== this._inv) {
            var S = w ? a : u - a;
            ((this._inv = w),
              this._from && (this.ratio = 1 - this.ratio),
              (this._invRatio = this.ratio),
              (this._invTime = a),
              (this._invRecip = S ? (w ? -1 : 1) / S : 0),
              (this._invScale = w ? -this.ratio : 1 - this.ratio),
              (this._invEase = w ? this._rEase : this._ease));
          }
          this.ratio = p =
            this._invRatio +
            this._invScale *
              this._invEase((d - this._invTime) * this._invRecip);
        } else this.ratio = p = this._ease(d / u);
        if (
          (this._from && (this.ratio = p = 1 - p),
          (this._tTime = f),
          (this._time = d),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          !a && f && !s && !_ && (st(this, "onStart"), this._tTime !== f))
        )
          return this;
        for (h = this._pt; h; ) (h.r(p, h.d), (h = h._next));
        ((x && x.render(i < 0 ? i : x._dur * x._ease(d / this._dur), s, o)) ||
          (this._startAt && (this._zTime = i)),
          this._onUpdate &&
            !s &&
            (c && Lc(this, i, s, o), st(this, "onUpdate")),
          this._repeat &&
            v !== _ &&
            this.vars.onRepeat &&
            !s &&
            this.parent &&
            st(this, "onRepeat"),
          (f === this._tDur || !f) &&
            this._tTime === f &&
            (c && !this._onUpdate && Lc(this, i, !0, !0),
            (i || !u) &&
              ((f === this._tDur && this._ts > 0) || (!f && this._ts < 0)) &&
              Yn(this, 1),
            !s &&
              !(c && !a) &&
              (f || a || y) &&
              (st(this, f === l ? "onComplete" : "onReverseComplete", !0),
              this._prom && !(f < l && this.timeScale() > 0) && this._prom())));
      }
      return this;
    }),
    (n.targets = function () {
      return this._targets;
    }),
    (n.invalidate = function (i) {
      return (
        (!i || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(i),
        t.prototype.invalidate.call(this, i)
      );
    }),
    (n.resetTo = function (i, s, o, a, l) {
      (bs || rt.wake(), this._ts || this.play());
      var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        c;
      return (
        this._initted || Ad(this, u),
        (c = this._ease(u / this._dur)),
        Pj(this, i, s, o, a, c, u, l)
          ? this.resetTo(i, s, o, a, 1)
          : (ul(this, 0),
            this.parent ||
              fx(
                this._dp,
                this,
                "_first",
                "_last",
                this._dp._sort ? "_start" : 0,
              ),
            this.render(0))
      );
    }),
    (n.kill = function (i, s) {
      if ((s === void 0 && (s = "all"), !i && (!s || s === "all")))
        return (
          (this._lazy = this._pt = 0),
          this.parent
            ? Yi(this)
            : this.scrollTrigger && this.scrollTrigger.kill(!!Re),
          this
        );
      if (this.timeline) {
        var o = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(i, s, Rn && Rn.vars.overwrite !== !0)
            ._first || Yi(this),
          this.parent &&
            o !== this.timeline.totalDuration() &&
            wi(this, (this._dur * this.timeline._tDur) / o, 0, 1),
          this
        );
      }
      var a = this._targets,
        l = i ? wt(i) : a,
        u = this._ptLookup,
        c = this._pt,
        f,
        d,
        h,
        v,
        m,
        _,
        y;
      if ((!s || s === "all") && tj(a, l))
        return (s === "all" && (this._pt = 0), Yi(this));
      for (
        f = this._op = this._op || [],
          s !== "all" &&
            (Ce(s) &&
              ((m = {}),
              qe(s, function (p) {
                return (m[p] = 1);
              }),
              (s = m)),
            (s = kj(a, s))),
          y = a.length;
        y--;
      )
        if (~l.indexOf(a[y])) {
          ((d = u[y]),
            s === "all"
              ? ((f[y] = s), (v = d), (h = {}))
              : ((h = f[y] = f[y] || {}), (v = s)));
          for (m in v)
            ((_ = d && d[m]),
              _ &&
                ((!("kill" in _.d) || _.d.kill(m) === !0) && al(this, _, "_pt"),
                delete d[m]),
              h !== "all" && (h[m] = 1));
        }
      return (this._initted && !this._pt && c && Yi(this), this);
    }),
    (e.to = function (i, s) {
      return new e(i, s, arguments[2]);
    }),
    (e.from = function (i, s) {
      return cs(1, arguments);
    }),
    (e.delayedCall = function (i, s, o, a) {
      return new e(s, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: i,
        onComplete: s,
        onReverseComplete: s,
        onCompleteParams: o,
        onReverseCompleteParams: o,
        callbackScope: a,
      });
    }),
    (e.fromTo = function (i, s, o) {
      return cs(2, arguments);
    }),
    (e.set = function (i, s) {
      return ((s.duration = 0), s.repeatDelay || (s.repeat = 0), new e(i, s));
    }),
    (e.killTweensOf = function (i, s, o) {
      return oe.killTweensOf(i, s, o);
    }),
    e
  );
})(zs);
dt(ye.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
qe("staggerTo,staggerFrom,staggerFromTo", function (t) {
  ye[t] = function () {
    var e = new He(),
      n = Vc.call(arguments, 0);
    return (n.splice(t === "staggerFromTo" ? 5 : 4, 0, 0), e[t].apply(e, n));
  };
});
var Dd = function (e, n, r) {
    return (e[n] = r);
  },
  Ax = function (e, n, r) {
    return e[n](r);
  },
  jj = function (e, n, r, i) {
    return e[n](i.fp, r);
  },
  Nj = function (e, n, r) {
    return e.setAttribute(n, r);
  },
  Ld = function (e, n) {
    return he(e[n]) ? Ax : Td(e[n]) && e.setAttribute ? Nj : Dd;
  },
  Dx = function (e, n) {
    return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e6) / 1e6, n);
  },
  Rj = function (e, n) {
    return n.set(n.t, n.p, !!(n.s + n.c * e), n);
  },
  Lx = function (e, n) {
    var r = n._pt,
      i = "";
    if (!e && n.b) i = n.b;
    else if (e === 1 && n.e) i = n.e;
    else {
      for (; r; )
        ((i =
          r.p +
          (r.m ? r.m(r.s + r.c * e) : Math.round((r.s + r.c * e) * 1e4) / 1e4) +
          i),
          (r = r._next));
      i += n.c;
    }
    n.set(n.t, n.p, i, n);
  },
  Od = function (e, n) {
    for (var r = n._pt; r; ) (r.r(e, r.d), (r = r._next));
  },
  Mj = function (e, n, r, i) {
    for (var s = this._pt, o; s; )
      ((o = s._next), s.p === i && s.modifier(e, n, r), (s = o));
  },
  Aj = function (e) {
    for (var n = this._pt, r, i; n; )
      ((i = n._next),
        (n.p === e && !n.op) || n.op === e
          ? al(this, n, "_pt")
          : n.dep || (r = 1),
        (n = i));
    return !r;
  },
  Dj = function (e, n, r, i) {
    i.mSet(e, n, i.m.call(i.tween, r, i.mt), i);
  },
  Ox = function (e) {
    for (var n = e._pt, r, i, s, o; n; ) {
      for (r = n._next, i = s; i && i.pr > n.pr; ) i = i._next;
      ((n._prev = i ? i._prev : o) ? (n._prev._next = n) : (s = n),
        (n._next = i) ? (i._prev = n) : (o = n),
        (n = r));
    }
    e._pt = s;
  },
  Ze = (function () {
    function t(n, r, i, s, o, a, l, u, c) {
      ((this.t = r),
        (this.s = s),
        (this.c = o),
        (this.p = i),
        (this.r = a || Dx),
        (this.d = l || this),
        (this.set = u || Dd),
        (this.pr = c || 0),
        (this._next = n),
        n && (n._prev = this));
    }
    var e = t.prototype;
    return (
      (e.modifier = function (r, i, s) {
        ((this.mSet = this.mSet || this.set),
          (this.set = Dj),
          (this.m = r),
          (this.mt = s),
          (this.tween = i));
      }),
      t
    );
  })();
qe(
  jd +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",
  function (t) {
    return (Ed[t] = 1);
  },
);
ft.TweenMax = ft.TweenLite = ye;
ft.TimelineLite = ft.TimelineMax = He;
oe = new He({
  sortChildren: !1,
  defaults: Os,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0,
});
ut.stringFilter = kx;
var Cr = [],
  Go = {},
  Lj = [],
  Nm = 0,
  Oj = 0,
  ou = function (e) {
    return (Go[e] || Lj).map(function (n) {
      return n();
    });
  },
  zc = function () {
    var e = Date.now(),
      n = [];
    e - Nm > 2 &&
      (ou("matchMediaInit"),
      Cr.forEach(function (r) {
        var i = r.queries,
          s = r.conditions,
          o,
          a,
          l,
          u;
        for (a in i)
          ((o = Wt.matchMedia(i[a]).matches),
            o && (l = 1),
            o !== s[a] && ((s[a] = o), (u = 1)));
        u && (r.revert(), l && n.push(r));
      }),
      ou("matchMediaRevert"),
      n.forEach(function (r) {
        return r.onMatch(r, function (i) {
          return r.add(null, i);
        });
      }),
      (Nm = e),
      ou("matchMedia"));
  },
  Vx = (function () {
    function t(n, r) {
      ((this.selector = r && Ic(r)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = Oj++),
        n && this.add(n));
    }
    var e = t.prototype;
    return (
      (e.add = function (r, i, s) {
        he(r) && ((s = i), (i = r), (r = he));
        var o = this,
          a = function () {
            var u = re,
              c = o.selector,
              f;
            return (
              u && u !== o && u.data.push(o),
              s && (o.selector = Ic(s)),
              (re = o),
              (f = i.apply(o, arguments)),
              he(f) && o._r.push(f),
              (re = u),
              (o.selector = c),
              (o.isReverted = !1),
              f
            );
          };
        return (
          (o.last = a),
          r === he
            ? a(o, function (l) {
                return o.add(null, l);
              })
            : r
              ? (o[r] = a)
              : a
        );
      }),
      (e.ignore = function (r) {
        var i = re;
        ((re = null), r(this), (re = i));
      }),
      (e.getTweens = function () {
        var r = [];
        return (
          this.data.forEach(function (i) {
            return i instanceof t
              ? r.push.apply(r, i.getTweens())
              : i instanceof ye &&
                  !(i.parent && i.parent.data === "nested") &&
                  r.push(i);
          }),
          r
        );
      }),
      (e.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (e.kill = function (r, i) {
        var s = this;
        if (
          (r
            ? (function () {
                for (var a = s.getTweens(), l = s.data.length, u; l--; )
                  ((u = s.data[l]),
                    u.data === "isFlip" &&
                      (u.revert(),
                      u.getChildren(!0, !0, !1).forEach(function (c) {
                        return a.splice(a.indexOf(c), 1);
                      })));
                for (
                  a
                    .map(function (c) {
                      return {
                        g:
                          c._dur ||
                          c._delay ||
                          (c._sat && !c._sat.vars.immediateRender)
                            ? c.globalTime(0)
                            : -1 / 0,
                        t: c,
                      };
                    })
                    .sort(function (c, f) {
                      return f.g - c.g || -1 / 0;
                    })
                    .forEach(function (c) {
                      return c.t.revert(r);
                    }),
                    l = s.data.length;
                  l--;
                )
                  ((u = s.data[l]),
                    u instanceof He
                      ? u.data !== "nested" &&
                        (u.scrollTrigger && u.scrollTrigger.revert(), u.kill())
                      : !(u instanceof ye) && u.revert && u.revert(r));
                (s._r.forEach(function (c) {
                  return c(r, s);
                }),
                  (s.isReverted = !0));
              })()
            : this.data.forEach(function (a) {
                return a.kill && a.kill();
              }),
          this.clear(),
          i)
        )
          for (var o = Cr.length; o--; )
            Cr[o].id === this.id && Cr.splice(o, 1);
      }),
      (e.revert = function (r) {
        this.kill(r || {});
      }),
      t
    );
  })(),
  Vj = (function () {
    function t(n) {
      ((this.contexts = []), (this.scope = n), re && re.data.push(this));
    }
    var e = t.prototype;
    return (
      (e.add = function (r, i, s) {
        Jt(r) || (r = { matches: r });
        var o = new Vx(0, s || this.scope),
          a = (o.conditions = {}),
          l,
          u,
          c;
        (re && !o.selector && (o.selector = re.selector),
          this.contexts.push(o),
          (i = o.add("onMatch", i)),
          (o.queries = r));
        for (u in r)
          u === "all"
            ? (c = 1)
            : ((l = Wt.matchMedia(r[u])),
              l &&
                (Cr.indexOf(o) < 0 && Cr.push(o),
                (a[u] = l.matches) && (c = 1),
                l.addListener
                  ? l.addListener(zc)
                  : l.addEventListener("change", zc)));
        return (
          c &&
            i(o, function (f) {
              return o.add(null, f);
            }),
          this
        );
      }),
      (e.revert = function (r) {
        this.kill(r || {});
      }),
      (e.kill = function (r) {
        this.contexts.forEach(function (i) {
          return i.kill(r, !0);
        });
      }),
      t
    );
  })(),
  Da = {
    registerPlugin: function () {
      for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
        n[r] = arguments[r];
      n.forEach(function (i) {
        return Tx(i);
      });
    },
    timeline: function (e) {
      return new He(e);
    },
    getTweensOf: function (e, n) {
      return oe.getTweensOf(e, n);
    },
    getProperty: function (e, n, r, i) {
      Ce(e) && (e = wt(e)[0]);
      var s = wr(e || {}).get,
        o = r ? cx : ux;
      return (
        r === "native" && (r = ""),
        e &&
          (n
            ? o(((nt[n] && nt[n].get) || s)(e, n, r, i))
            : function (a, l, u) {
                return o(((nt[a] && nt[a].get) || s)(e, a, l, u));
              })
      );
    },
    quickSetter: function (e, n, r) {
      if (((e = wt(e)), e.length > 1)) {
        var i = e.map(function (c) {
            return et.quickSetter(c, n, r);
          }),
          s = i.length;
        return function (c) {
          for (var f = s; f--; ) i[f](c);
        };
      }
      e = e[0] || {};
      var o = nt[n],
        a = wr(e),
        l = (a.harness && (a.harness.aliases || {})[n]) || n,
        u = o
          ? function (c) {
              var f = new o();
              ((Jr._pt = 0),
                f.init(e, r ? c + r : c, Jr, 0, [e]),
                f.render(1, f),
                Jr._pt && Od(1, Jr));
            }
          : a.set(e, l);
      return o
        ? u
        : function (c) {
            return u(e, l, r ? c + r : c, a, 1);
          };
    },
    quickTo: function (e, n, r) {
      var i,
        s = et.to(
          e,
          dt(
            ((i = {}), (i[n] = "+=0.1"), (i.paused = !0), (i.stagger = 0), i),
            r || {},
          ),
        ),
        o = function (l, u, c) {
          return s.resetTo(n, l, u, c);
        };
      return ((o.tween = s), o);
    },
    isTweening: function (e) {
      return oe.getTweensOf(e, !0).length > 0;
    },
    defaults: function (e) {
      return (e && e.ease && (e.ease = Tr(e.ease, Os.ease)), Cm(Os, e || {}));
    },
    config: function (e) {
      return Cm(ut, e || {});
    },
    registerEffect: function (e) {
      var n = e.name,
        r = e.effect,
        i = e.plugins,
        s = e.defaults,
        o = e.extendTimeline;
      ((i || "").split(",").forEach(function (a) {
        return (
          a && !nt[a] && !ft[a] && Vs(n + " effect requires " + a + " plugin.")
        );
      }),
        (nu[n] = function (a, l, u) {
          return r(wt(a), dt(l || {}, s), u);
        }),
        o &&
          (He.prototype[n] = function (a, l, u) {
            return this.add(nu[n](a, Jt(l) ? l : (u = l) && {}, this), u);
          }));
    },
    registerEase: function (e, n) {
      B[e] = Tr(n);
    },
    parseEase: function (e, n) {
      return arguments.length ? Tr(e, n) : B;
    },
    getById: function (e) {
      return oe.getById(e);
    },
    exportRoot: function (e, n) {
      e === void 0 && (e = {});
      var r = new He(e),
        i,
        s;
      for (
        r.smoothChildTiming = Qe(e.smoothChildTiming),
          oe.remove(r),
          r._dp = 0,
          r._time = r._tTime = oe._time,
          i = oe._first;
        i;
      )
        ((s = i._next),
          (n ||
            !(
              !i._dur &&
              i instanceof ye &&
              i.vars.onComplete === i._targets[0]
            )) &&
            Kt(r, i, i._start - i._delay),
          (i = s));
      return (Kt(oe, r, 0), r);
    },
    context: function (e, n) {
      return e ? new Vx(e, n) : re;
    },
    matchMedia: function (e) {
      return new Vj(e);
    },
    matchMediaRefresh: function () {
      return (
        Cr.forEach(function (e) {
          var n = e.conditions,
            r,
            i;
          for (i in n) n[i] && ((n[i] = !1), (r = 1));
          r && e.revert();
        }) || zc()
      );
    },
    addEventListener: function (e, n) {
      var r = Go[e] || (Go[e] = []);
      ~r.indexOf(n) || r.push(n);
    },
    removeEventListener: function (e, n) {
      var r = Go[e],
        i = r && r.indexOf(n);
      i >= 0 && r.splice(i, 1);
    },
    utils: {
      wrap: hj,
      wrapYoyo: pj,
      distribute: yx,
      random: xx,
      snap: vx,
      normalize: dj,
      getUnit: Oe,
      clamp: lj,
      splitColor: Cx,
      toArray: wt,
      selector: Ic,
      mapRange: wx,
      pipe: cj,
      unitize: fj,
      interpolate: mj,
      shuffle: gx,
    },
    install: ix,
    effects: nu,
    ticker: rt,
    updateRoot: He.updateRoot,
    plugins: nt,
    globalTimeline: oe,
    core: {
      PropTween: Ze,
      globals: sx,
      Tween: ye,
      Timeline: He,
      Animation: zs,
      getCache: wr,
      _removeLinkedListItem: al,
      reverting: function () {
        return Re;
      },
      context: function (e) {
        return (e && re && (re.data.push(e), (e._ctx = re)), re);
      },
      suppressOverwrites: function (e) {
        return (Sd = e);
      },
    },
  };
qe("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
  return (Da[t] = ye[t]);
});
rt.add(He.updateRoot);
Jr = Da.to({}, { duration: 0 });
var Ij = function (e, n) {
    for (var r = e._pt; r && r.p !== n && r.op !== n && r.fp !== n; )
      r = r._next;
    return r;
  },
  Fj = function (e, n) {
    var r = e._targets,
      i,
      s,
      o;
    for (i in n)
      for (s = r.length; s--; )
        ((o = e._ptLookup[s][i]),
          o &&
            (o = o.d) &&
            (o._pt && (o = Ij(o, i)),
            o && o.modifier && o.modifier(n[i], e, r[s], i)));
  },
  au = function (e, n) {
    return {
      name: e,
      headless: 1,
      rawVars: 1,
      init: function (i, s, o) {
        o._onInit = function (a) {
          var l, u;
          if (
            (Ce(s) &&
              ((l = {}),
              qe(s, function (c) {
                return (l[c] = 1);
              }),
              (s = l)),
            n)
          ) {
            l = {};
            for (u in s) l[u] = n(s[u]);
            s = l;
          }
          Fj(a, s);
        };
      },
    };
  },
  et =
    Da.registerPlugin(
      {
        name: "attr",
        init: function (e, n, r, i, s) {
          var o, a, l;
          this.tween = r;
          for (o in n)
            ((l = e.getAttribute(o) || ""),
              (a = this.add(
                e,
                "setAttribute",
                (l || 0) + "",
                n[o],
                i,
                s,
                0,
                0,
                o,
              )),
              (a.op = o),
              (a.b = l),
              this._props.push(o));
        },
        render: function (e, n) {
          for (var r = n._pt; r; )
            (Re ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d), (r = r._next));
        },
      },
      {
        name: "endArray",
        headless: 1,
        init: function (e, n) {
          for (var r = n.length; r--; )
            this.add(e, r, e[r] || 0, n[r], 0, 0, 0, 0, 0, 1);
        },
      },
      au("roundProps", Fc),
      au("modifiers"),
      au("snap", vx),
    ) || Da;
ye.version = He.version = et.version = "3.15.0";
rx = 1;
Cd() && Si();
B.Power0;
B.Power1;
B.Power2;
B.Power3;
B.Power4;
B.Linear;
B.Quad;
B.Cubic;
B.Quart;
B.Quint;
B.Strong;
B.Elastic;
B.Back;
B.SteppedEase;
B.Bounce;
B.Sine;
B.Expo;
B.Circ;
/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var Rm,
  Mn,
  ai,
  Vd,
  gr,
  Mm,
  Id,
  bj = function () {
    return typeof window < "u";
  },
  mn = {},
  cr = 180 / Math.PI,
  li = Math.PI / 180,
  Or = Math.atan2,
  Am = 1e8,
  Fd = /([A-Z])/g,
  zj = /(left|right|width|margin|padding|x)/i,
  Bj = /[\s,\(]\S/,
  Gt = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity",
  },
  Bc = function (e, n) {
    return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u, n);
  },
  Uj = function (e, n) {
    return n.set(
      n.t,
      n.p,
      e === 1 ? n.e : Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u,
      n,
    );
  },
  Wj = function (e, n) {
    return n.set(
      n.t,
      n.p,
      e ? Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u : n.b,
      n,
    );
  },
  $j = function (e, n) {
    return n.set(
      n.t,
      n.p,
      e === 1 ? n.e : e ? Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u : n.b,
      n,
    );
  },
  Hj = function (e, n) {
    var r = n.s + n.c * e;
    n.set(n.t, n.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + n.u, n);
  },
  Ix = function (e, n) {
    return n.set(n.t, n.p, e ? n.e : n.b, n);
  },
  Fx = function (e, n) {
    return n.set(n.t, n.p, e !== 1 ? n.b : n.e, n);
  },
  Kj = function (e, n, r) {
    return (e.style[n] = r);
  },
  Gj = function (e, n, r) {
    return e.style.setProperty(n, r);
  },
  Yj = function (e, n, r) {
    return (e._gsap[n] = r);
  },
  Xj = function (e, n, r) {
    return (e._gsap.scaleX = e._gsap.scaleY = r);
  },
  Qj = function (e, n, r, i, s) {
    var o = e._gsap;
    ((o.scaleX = o.scaleY = r), o.renderTransform(s, o));
  },
  qj = function (e, n, r, i, s) {
    var o = e._gsap;
    ((o[n] = r), o.renderTransform(s, o));
  },
  ae = "transform",
  Je = ae + "Origin",
  Zj = function t(e, n) {
    var r = this,
      i = this.target,
      s = i.style,
      o = i._gsap;
    if (e in mn && s) {
      if (((this.tfm = this.tfm || {}), e !== "transform"))
        ((e = Gt[e] || e),
          ~e.indexOf(",")
            ? e.split(",").forEach(function (a) {
                return (r.tfm[a] = on(i, a));
              })
            : (this.tfm[e] = o.x ? o[e] : on(i, e)),
          e === Je && (this.tfm.zOrigin = o.zOrigin));
      else
        return Gt.transform.split(",").forEach(function (a) {
          return t.call(r, a, n);
        });
      if (this.props.indexOf(ae) >= 0) return;
      (o.svg &&
        ((this.svgo = i.getAttribute("data-svg-origin")),
        this.props.push(Je, n, "")),
        (e = ae));
    }
    (s || n) && this.props.push(e, n, s[e]);
  },
  bx = function (e) {
    e.translate &&
      (e.removeProperty("translate"),
      e.removeProperty("scale"),
      e.removeProperty("rotate"));
  },
  Jj = function () {
    var e = this.props,
      n = this.target,
      r = n.style,
      i = n._gsap,
      s,
      o;
    for (s = 0; s < e.length; s += 3)
      e[s + 1]
        ? e[s + 1] === 2
          ? n[e[s]](e[s + 2])
          : (n[e[s]] = e[s + 2])
        : e[s + 2]
          ? (r[e[s]] = e[s + 2])
          : r.removeProperty(
              e[s].substr(0, 2) === "--"
                ? e[s]
                : e[s].replace(Fd, "-$1").toLowerCase(),
            );
    if (this.tfm) {
      for (o in this.tfm) i[o] = this.tfm[o];
      (i.svg &&
        (i.renderTransform(),
        n.setAttribute("data-svg-origin", this.svgo || "")),
        (s = Id()),
        (!s || !s.isStart) &&
          !r[ae] &&
          (bx(r),
          i.zOrigin &&
            r[Je] &&
            ((r[Je] += " " + i.zOrigin + "px"),
            (i.zOrigin = 0),
            i.renderTransform()),
          (i.uncache = 1)));
    }
  },
  zx = function (e, n) {
    var r = { target: e, props: [], revert: Jj, save: Zj };
    return (
      e._gsap || et.core.getCache(e),
      n &&
        e.style &&
        e.nodeType &&
        n.split(",").forEach(function (i) {
          return r.save(i);
        }),
      r
    );
  },
  Bx,
  Uc = function (e, n) {
    var r = Mn.createElementNS
      ? Mn.createElementNS(
          (n || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          e,
        )
      : Mn.createElement(e);
    return r && r.style ? r : Mn.createElement(e);
  },
  ot = function t(e, n, r) {
    var i = getComputedStyle(e);
    return (
      i[n] ||
      i.getPropertyValue(n.replace(Fd, "-$1").toLowerCase()) ||
      i.getPropertyValue(n) ||
      (!r && t(e, Ti(n) || n, 1)) ||
      ""
    );
  },
  Dm = "O,Moz,ms,Ms,Webkit".split(","),
  Ti = function (e, n, r) {
    var i = n || gr,
      s = i.style,
      o = 5;
    if (e in s && !r) return e;
    for (
      e = e.charAt(0).toUpperCase() + e.substr(1);
      o-- && !(Dm[o] + e in s);
    );
    return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? Dm[o] : "") + e;
  },
  Wc = function () {
    bj() &&
      window.document &&
      ((Rm = window),
      (Mn = Rm.document),
      (ai = Mn.documentElement),
      (gr = Uc("div") || { style: {} }),
      Uc("div"),
      (ae = Ti(ae)),
      (Je = ae + "Origin"),
      (gr.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (Bx = !!Ti("perspective")),
      (Id = et.core.reverting),
      (Vd = 1));
  },
  Lm = function (e) {
    var n = e.ownerSVGElement,
      r = Uc(
        "svg",
        (n && n.getAttribute("xmlns")) || "http://www.w3.org/2000/svg",
      ),
      i = e.cloneNode(!0),
      s;
    ((i.style.display = "block"), r.appendChild(i), ai.appendChild(r));
    try {
      s = i.getBBox();
    } catch {}
    return (r.removeChild(i), ai.removeChild(r), s);
  },
  Om = function (e, n) {
    for (var r = n.length; r--; )
      if (e.hasAttribute(n[r])) return e.getAttribute(n[r]);
  },
  Ux = function (e) {
    var n, r;
    try {
      n = e.getBBox();
    } catch {
      ((n = Lm(e)), (r = 1));
    }
    return (
      (n && (n.width || n.height)) || r || (n = Lm(e)),
      n && !n.width && !n.x && !n.y
        ? {
            x: +Om(e, ["x", "cx", "x1"]) || 0,
            y: +Om(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
        : n
    );
  },
  Wx = function (e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Ux(e));
  },
  Xn = function (e, n) {
    if (n) {
      var r = e.style,
        i;
      (n in mn && n !== Je && (n = ae),
        r.removeProperty
          ? ((i = n.substr(0, 2)),
            (i === "ms" || n.substr(0, 6) === "webkit") && (n = "-" + n),
            r.removeProperty(
              i === "--" ? n : n.replace(Fd, "-$1").toLowerCase(),
            ))
          : r.removeAttribute(n));
    }
  },
  An = function (e, n, r, i, s, o) {
    var a = new Ze(e._pt, n, r, 0, 1, o ? Fx : Ix);
    return ((e._pt = a), (a.b = i), (a.e = s), e._props.push(r), a);
  },
  Vm = { deg: 1, rad: 1, turn: 1 },
  eN = { grid: 1, flex: 1 },
  Qn = function t(e, n, r, i) {
    var s = parseFloat(r) || 0,
      o = (r + "").trim().substr((s + "").length) || "px",
      a = gr.style,
      l = zj.test(n),
      u = e.tagName.toLowerCase() === "svg",
      c = (u ? "client" : "offset") + (l ? "Width" : "Height"),
      f = 100,
      d = i === "px",
      h = i === "%",
      v,
      m,
      _,
      y;
    if (i === o || !s || Vm[i] || Vm[o]) return s;
    if (
      (o !== "px" && !d && (s = t(e, n, r, "px")),
      (y = e.getCTM && Wx(e)),
      (h || o === "%") && (mn[n] || ~n.indexOf("adius")))
    )
      return (
        (v = y ? e.getBBox()[l ? "width" : "height"] : e[c]),
        pe(h ? (s / v) * f : (s / 100) * v)
      );
    if (
      ((a[l ? "width" : "height"] = f + (d ? o : i)),
      (m =
        (i !== "rem" && ~n.indexOf("adius")) ||
        (i === "em" && e.appendChild && !u)
          ? e
          : e.parentNode),
      y && (m = (e.ownerSVGElement || {}).parentNode),
      (!m || m === Mn || !m.appendChild) && (m = Mn.body),
      (_ = m._gsap),
      _ && h && _.width && l && _.time === rt.time && !_.uncache)
    )
      return pe((s / _.width) * f);
    if (h && (n === "height" || n === "width")) {
      var p = e.style[n];
      ((e.style[n] = f + i), (v = e[c]), p ? (e.style[n] = p) : Xn(e, n));
    } else
      ((h || o === "%") &&
        !eN[ot(m, "display")] &&
        (a.position = ot(e, "position")),
        m === e && (a.position = "static"),
        m.appendChild(gr),
        (v = gr[c]),
        m.removeChild(gr),
        (a.position = "absolute"));
    return (
      l && h && ((_ = wr(m)), (_.time = rt.time), (_.width = m[c])),
      pe(d ? (v * s) / f : v && s ? (f / v) * s : 0)
    );
  },
  on = function (e, n, r, i) {
    var s;
    return (
      Vd || Wc(),
      n in Gt &&
        n !== "transform" &&
        ((n = Gt[n]), ~n.indexOf(",") && (n = n.split(",")[0])),
      mn[n] && n !== "transform"
        ? ((s = Us(e, i)),
          (s =
            n !== "transformOrigin"
              ? s[n]
              : s.svg
                ? s.origin
                : Oa(ot(e, Je)) + " " + s.zOrigin + "px"))
        : ((s = e.style[n]),
          (!s || s === "auto" || i || ~(s + "").indexOf("calc(")) &&
            (s =
              (La[n] && La[n](e, n, r)) ||
              ot(e, n) ||
              ax(e, n) ||
              (n === "opacity" ? 1 : 0))),
      r && !~(s + "").trim().indexOf(" ") ? Qn(e, n, s, r) + r : s
    );
  },
  tN = function (e, n, r, i) {
    if (!r || r === "none") {
      var s = Ti(n, e, 1),
        o = s && ot(e, s, 1);
      o && o !== r
        ? ((n = s), (r = o))
        : n === "borderColor" && (r = ot(e, "borderTopColor"));
    }
    var a = new Ze(this._pt, e.style, n, 0, 1, Lx),
      l = 0,
      u = 0,
      c,
      f,
      d,
      h,
      v,
      m,
      _,
      y,
      p,
      x,
      w,
      S;
    if (
      ((a.b = r),
      (a.e = i),
      (r += ""),
      (i += ""),
      i.substring(0, 6) === "var(--" &&
        (i = ot(e, i.substring(4, i.indexOf(")")))),
      i === "auto" &&
        ((m = e.style[n]),
        (e.style[n] = i),
        (i = ot(e, n) || i),
        m ? (e.style[n] = m) : Xn(e, n)),
      (c = [r, i]),
      kx(c),
      (r = c[0]),
      (i = c[1]),
      (d = r.match(Zr) || []),
      (S = i.match(Zr) || []),
      S.length)
    ) {
      for (; (f = Zr.exec(i)); )
        ((_ = f[0]),
          (p = i.substring(l, f.index)),
          v
            ? (v = (v + 1) % 5)
            : (p.substr(-5) === "rgba(" || p.substr(-5) === "hsla(") && (v = 1),
          _ !== (m = d[u++] || "") &&
            ((h = parseFloat(m) || 0),
            (w = m.substr((h + "").length)),
            _.charAt(1) === "=" && (_ = oi(h, _) + w),
            (y = parseFloat(_)),
            (x = _.substr((y + "").length)),
            (l = Zr.lastIndex - x.length),
            x ||
              ((x = x || ut.units[n] || w),
              l === i.length && ((i += x), (a.e += x))),
            w !== x && (h = Qn(e, n, m, x) || 0),
            (a._pt = {
              _next: a._pt,
              p: p || u === 1 ? p : ",",
              s: h,
              c: y - h,
              m: (v && v < 4) || n === "zIndex" ? Math.round : 0,
            })));
      a.c = l < i.length ? i.substring(l, i.length) : "";
    } else a.r = n === "display" && i === "none" ? Fx : Ix;
    return (nx.test(i) && (a.e = 0), (this._pt = a), a);
  },
  Im = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  nN = function (e) {
    var n = e.split(" "),
      r = n[0],
      i = n[1] || "50%";
    return (
      (r === "top" || r === "bottom" || i === "left" || i === "right") &&
        ((e = r), (r = i), (i = e)),
      (n[0] = Im[r] || r),
      (n[1] = Im[i] || i),
      n.join(" ")
    );
  },
  rN = function (e, n) {
    if (n.tween && n.tween._time === n.tween._dur) {
      var r = n.t,
        i = r.style,
        s = n.u,
        o = r._gsap,
        a,
        l,
        u;
      if (s === "all" || s === !0) ((i.cssText = ""), (l = 1));
      else
        for (s = s.split(","), u = s.length; --u > -1; )
          ((a = s[u]),
            mn[a] && ((l = 1), (a = a === "transformOrigin" ? Je : ae)),
            Xn(r, a));
      l &&
        (Xn(r, ae),
        o &&
          (o.svg && r.removeAttribute("transform"),
          (i.scale = i.rotate = i.translate = "none"),
          Us(r, 1),
          (o.uncache = 1),
          bx(i)));
    }
  },
  La = {
    clearProps: function (e, n, r, i, s) {
      if (s.data !== "isFromStart") {
        var o = (e._pt = new Ze(e._pt, n, r, 0, 0, rN));
        return ((o.u = i), (o.pr = -10), (o.tween = s), e._props.push(r), 1);
      }
    },
  },
  Bs = [1, 0, 0, 1, 0, 0],
  $x = {},
  Hx = function (e) {
    return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
  },
  Fm = function (e) {
    var n = ot(e, ae);
    return Hx(n) ? Bs : n.substr(7).match(tx).map(pe);
  },
  bd = function (e, n) {
    var r = e._gsap || wr(e),
      i = e.style,
      s = Fm(e),
      o,
      a,
      l,
      u;
    return r.svg && e.getAttribute("transform")
      ? ((l = e.transform.baseVal.consolidate().matrix),
        (s = [l.a, l.b, l.c, l.d, l.e, l.f]),
        s.join(",") === "1,0,0,1,0,0" ? Bs : s)
      : (s === Bs &&
          !e.offsetParent &&
          e !== ai &&
          !r.svg &&
          ((l = i.display),
          (i.display = "block"),
          (o = e.parentNode),
          (!o || (!e.offsetParent && !e.getBoundingClientRect().width)) &&
            ((u = 1), (a = e.nextElementSibling), ai.appendChild(e)),
          (s = Fm(e)),
          l ? (i.display = l) : Xn(e, "display"),
          u &&
            (a
              ? o.insertBefore(e, a)
              : o
                ? o.appendChild(e)
                : ai.removeChild(e))),
        n && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
  },
  $c = function (e, n, r, i, s, o) {
    var a = e._gsap,
      l = s || bd(e, !0),
      u = a.xOrigin || 0,
      c = a.yOrigin || 0,
      f = a.xOffset || 0,
      d = a.yOffset || 0,
      h = l[0],
      v = l[1],
      m = l[2],
      _ = l[3],
      y = l[4],
      p = l[5],
      x = n.split(" "),
      w = parseFloat(x[0]) || 0,
      S = parseFloat(x[1]) || 0,
      k,
      P,
      C,
      E;
    (r
      ? l !== Bs &&
        (P = h * _ - v * m) &&
        ((C = w * (_ / P) + S * (-m / P) + (m * p - _ * y) / P),
        (E = w * (-v / P) + S * (h / P) - (h * p - v * y) / P),
        (w = C),
        (S = E))
      : ((k = Ux(e)),
        (w = k.x + (~x[0].indexOf("%") ? (w / 100) * k.width : w)),
        (S = k.y + (~(x[1] || x[0]).indexOf("%") ? (S / 100) * k.height : S))),
      i || (i !== !1 && a.smooth)
        ? ((y = w - u),
          (p = S - c),
          (a.xOffset = f + (y * h + p * m) - y),
          (a.yOffset = d + (y * v + p * _) - p))
        : (a.xOffset = a.yOffset = 0),
      (a.xOrigin = w),
      (a.yOrigin = S),
      (a.smooth = !!i),
      (a.origin = n),
      (a.originIsAbsolute = !!r),
      (e.style[Je] = "0px 0px"),
      o &&
        (An(o, a, "xOrigin", u, w),
        An(o, a, "yOrigin", c, S),
        An(o, a, "xOffset", f, a.xOffset),
        An(o, a, "yOffset", d, a.yOffset)),
      e.setAttribute("data-svg-origin", w + " " + S));
  },
  Us = function (e, n) {
    var r = e._gsap || new jx(e);
    if ("x" in r && !n && !r.uncache) return r;
    var i = e.style,
      s = r.scaleX < 0,
      o = "px",
      a = "deg",
      l = getComputedStyle(e),
      u = ot(e, Je) || "0",
      c,
      f,
      d,
      h,
      v,
      m,
      _,
      y,
      p,
      x,
      w,
      S,
      k,
      P,
      C,
      E,
      j,
      L,
      I,
      F,
      z,
      H,
      U,
      q,
      N,
      D,
      O,
      W,
      G,
      nr,
      Pe,
      kt;
    return (
      (c = f = d = m = _ = y = p = x = w = 0),
      (h = v = 1),
      (r.svg = !!(e.getCTM && Wx(e))),
      l.translate &&
        ((l.translate !== "none" ||
          l.scale !== "none" ||
          l.rotate !== "none") &&
          (i[ae] =
            (l.translate !== "none"
              ? "translate3d(" +
                (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                ") "
              : "") +
            (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") +
            (l.scale !== "none"
              ? "scale(" + l.scale.split(" ").join(",") + ") "
              : "") +
            (l[ae] !== "none" ? l[ae] : "")),
        (i.scale = i.rotate = i.translate = "none")),
      (P = bd(e, r.svg)),
      r.svg &&
        (r.uncache
          ? ((N = e.getBBox()),
            (u = r.xOrigin - N.x + "px " + (r.yOrigin - N.y) + "px"),
            (q = ""))
          : (q = !n && e.getAttribute("data-svg-origin")),
        $c(e, q || u, !!q || r.originIsAbsolute, r.smooth !== !1, P)),
      (S = r.xOrigin || 0),
      (k = r.yOrigin || 0),
      P !== Bs &&
        ((L = P[0]),
        (I = P[1]),
        (F = P[2]),
        (z = P[3]),
        (c = H = P[4]),
        (f = U = P[5]),
        P.length === 6
          ? ((h = Math.sqrt(L * L + I * I)),
            (v = Math.sqrt(z * z + F * F)),
            (m = L || I ? Or(I, L) * cr : 0),
            (p = F || z ? Or(F, z) * cr + m : 0),
            p && (v *= Math.abs(Math.cos(p * li))),
            r.svg && ((c -= S - (S * L + k * F)), (f -= k - (S * I + k * z))))
          : ((kt = P[6]),
            (nr = P[7]),
            (O = P[8]),
            (W = P[9]),
            (G = P[10]),
            (Pe = P[11]),
            (c = P[12]),
            (f = P[13]),
            (d = P[14]),
            (C = Or(kt, G)),
            (_ = C * cr),
            C &&
              ((E = Math.cos(-C)),
              (j = Math.sin(-C)),
              (q = H * E + O * j),
              (N = U * E + W * j),
              (D = kt * E + G * j),
              (O = H * -j + O * E),
              (W = U * -j + W * E),
              (G = kt * -j + G * E),
              (Pe = nr * -j + Pe * E),
              (H = q),
              (U = N),
              (kt = D)),
            (C = Or(-F, G)),
            (y = C * cr),
            C &&
              ((E = Math.cos(-C)),
              (j = Math.sin(-C)),
              (q = L * E - O * j),
              (N = I * E - W * j),
              (D = F * E - G * j),
              (Pe = z * j + Pe * E),
              (L = q),
              (I = N),
              (F = D)),
            (C = Or(I, L)),
            (m = C * cr),
            C &&
              ((E = Math.cos(C)),
              (j = Math.sin(C)),
              (q = L * E + I * j),
              (N = H * E + U * j),
              (I = I * E - L * j),
              (U = U * E - H * j),
              (L = q),
              (H = N)),
            _ &&
              Math.abs(_) + Math.abs(m) > 359.9 &&
              ((_ = m = 0), (y = 180 - y)),
            (h = pe(Math.sqrt(L * L + I * I + F * F))),
            (v = pe(Math.sqrt(U * U + kt * kt))),
            (C = Or(H, U)),
            (p = Math.abs(C) > 2e-4 ? C * cr : 0),
            (w = Pe ? 1 / (Pe < 0 ? -Pe : Pe) : 0)),
        r.svg &&
          ((q = e.getAttribute("transform")),
          (r.forceCSS = e.setAttribute("transform", "") || !Hx(ot(e, ae))),
          q && e.setAttribute("transform", q))),
      Math.abs(p) > 90 &&
        Math.abs(p) < 270 &&
        (s
          ? ((h *= -1), (p += m <= 0 ? 180 : -180), (m += m <= 0 ? 180 : -180))
          : ((v *= -1), (p += p <= 0 ? 180 : -180))),
      (n = n || r.uncache),
      (r.x =
        c -
        ((r.xPercent =
          c &&
          ((!n && r.xPercent) ||
            (Math.round(e.offsetWidth / 2) === Math.round(-c) ? -50 : 0)))
          ? (e.offsetWidth * r.xPercent) / 100
          : 0) +
        o),
      (r.y =
        f -
        ((r.yPercent =
          f &&
          ((!n && r.yPercent) ||
            (Math.round(e.offsetHeight / 2) === Math.round(-f) ? -50 : 0)))
          ? (e.offsetHeight * r.yPercent) / 100
          : 0) +
        o),
      (r.z = d + o),
      (r.scaleX = pe(h)),
      (r.scaleY = pe(v)),
      (r.rotation = pe(m) + a),
      (r.rotationX = pe(_) + a),
      (r.rotationY = pe(y) + a),
      (r.skewX = p + a),
      (r.skewY = x + a),
      (r.transformPerspective = w + o),
      (r.zOrigin = parseFloat(u.split(" ")[2]) || (!n && r.zOrigin) || 0) &&
        (i[Je] = Oa(u)),
      (r.xOffset = r.yOffset = 0),
      (r.force3D = ut.force3D),
      (r.renderTransform = r.svg ? sN : Bx ? Kx : iN),
      (r.uncache = 0),
      r
    );
  },
  Oa = function (e) {
    return (e = e.split(" "))[0] + " " + e[1];
  },
  lu = function (e, n, r) {
    var i = Oe(n);
    return pe(parseFloat(n) + parseFloat(Qn(e, "x", r + "px", i))) + i;
  },
  iN = function (e, n) {
    ((n.z = "0px"),
      (n.rotationY = n.rotationX = "0deg"),
      (n.force3D = 0),
      Kx(e, n));
  },
  sr = "0deg",
  Bi = "0px",
  or = ") ",
  Kx = function (e, n) {
    var r = n || this,
      i = r.xPercent,
      s = r.yPercent,
      o = r.x,
      a = r.y,
      l = r.z,
      u = r.rotation,
      c = r.rotationY,
      f = r.rotationX,
      d = r.skewX,
      h = r.skewY,
      v = r.scaleX,
      m = r.scaleY,
      _ = r.transformPerspective,
      y = r.force3D,
      p = r.target,
      x = r.zOrigin,
      w = "",
      S = (y === "auto" && e && e !== 1) || y === !0;
    if (x && (f !== sr || c !== sr)) {
      var k = parseFloat(c) * li,
        P = Math.sin(k),
        C = Math.cos(k),
        E;
      ((k = parseFloat(f) * li),
        (E = Math.cos(k)),
        (o = lu(p, o, P * E * -x)),
        (a = lu(p, a, -Math.sin(k) * -x)),
        (l = lu(p, l, C * E * -x + x)));
    }
    (_ !== Bi && (w += "perspective(" + _ + or),
      (i || s) && (w += "translate(" + i + "%, " + s + "%) "),
      (S || o !== Bi || a !== Bi || l !== Bi) &&
        (w +=
          l !== Bi || S
            ? "translate3d(" + o + ", " + a + ", " + l + ") "
            : "translate(" + o + ", " + a + or),
      u !== sr && (w += "rotate(" + u + or),
      c !== sr && (w += "rotateY(" + c + or),
      f !== sr && (w += "rotateX(" + f + or),
      (d !== sr || h !== sr) && (w += "skew(" + d + ", " + h + or),
      (v !== 1 || m !== 1) && (w += "scale(" + v + ", " + m + or),
      (p.style[ae] = w || "translate(0, 0)"));
  },
  sN = function (e, n) {
    var r = n || this,
      i = r.xPercent,
      s = r.yPercent,
      o = r.x,
      a = r.y,
      l = r.rotation,
      u = r.skewX,
      c = r.skewY,
      f = r.scaleX,
      d = r.scaleY,
      h = r.target,
      v = r.xOrigin,
      m = r.yOrigin,
      _ = r.xOffset,
      y = r.yOffset,
      p = r.forceCSS,
      x = parseFloat(o),
      w = parseFloat(a),
      S,
      k,
      P,
      C,
      E;
    ((l = parseFloat(l)),
      (u = parseFloat(u)),
      (c = parseFloat(c)),
      c && ((c = parseFloat(c)), (u += c), (l += c)),
      l || u
        ? ((l *= li),
          (u *= li),
          (S = Math.cos(l) * f),
          (k = Math.sin(l) * f),
          (P = Math.sin(l - u) * -d),
          (C = Math.cos(l - u) * d),
          u &&
            ((c *= li),
            (E = Math.tan(u - c)),
            (E = Math.sqrt(1 + E * E)),
            (P *= E),
            (C *= E),
            c &&
              ((E = Math.tan(c)),
              (E = Math.sqrt(1 + E * E)),
              (S *= E),
              (k *= E))),
          (S = pe(S)),
          (k = pe(k)),
          (P = pe(P)),
          (C = pe(C)))
        : ((S = f), (C = d), (k = P = 0)),
      ((x && !~(o + "").indexOf("px")) || (w && !~(a + "").indexOf("px"))) &&
        ((x = Qn(h, "x", o, "px")), (w = Qn(h, "y", a, "px"))),
      (v || m || _ || y) &&
        ((x = pe(x + v - (v * S + m * P) + _)),
        (w = pe(w + m - (v * k + m * C) + y))),
      (i || s) &&
        ((E = h.getBBox()),
        (x = pe(x + (i / 100) * E.width)),
        (w = pe(w + (s / 100) * E.height))),
      (E =
        "matrix(" + S + "," + k + "," + P + "," + C + "," + x + "," + w + ")"),
      h.setAttribute("transform", E),
      p && (h.style[ae] = E));
  },
  oN = function (e, n, r, i, s) {
    var o = 360,
      a = Ce(s),
      l = parseFloat(s) * (a && ~s.indexOf("rad") ? cr : 1),
      u = l - i,
      c = i + u + "deg",
      f,
      d;
    return (
      a &&
        ((f = s.split("_")[1]),
        f === "short" && ((u %= o), u !== u % (o / 2) && (u += u < 0 ? o : -o)),
        f === "cw" && u < 0
          ? (u = ((u + o * Am) % o) - ~~(u / o) * o)
          : f === "ccw" && u > 0 && (u = ((u - o * Am) % o) - ~~(u / o) * o)),
      (e._pt = d = new Ze(e._pt, n, r, i, u, Uj)),
      (d.e = c),
      (d.u = "deg"),
      e._props.push(r),
      d
    );
  },
  bm = function (e, n) {
    for (var r in n) e[r] = n[r];
    return e;
  },
  aN = function (e, n, r) {
    var i = bm({}, r._gsap),
      s = "perspective,force3D,transformOrigin,svgOrigin",
      o = r.style,
      a,
      l,
      u,
      c,
      f,
      d,
      h,
      v;
    i.svg
      ? ((u = r.getAttribute("transform")),
        r.setAttribute("transform", ""),
        (o[ae] = n),
        (a = Us(r, 1)),
        Xn(r, ae),
        r.setAttribute("transform", u))
      : ((u = getComputedStyle(r)[ae]),
        (o[ae] = n),
        (a = Us(r, 1)),
        (o[ae] = u));
    for (l in mn)
      ((u = i[l]),
        (c = a[l]),
        u !== c &&
          s.indexOf(l) < 0 &&
          ((h = Oe(u)),
          (v = Oe(c)),
          (f = h !== v ? Qn(r, l, u, v) : parseFloat(u)),
          (d = parseFloat(c)),
          (e._pt = new Ze(e._pt, a, l, f, d - f, Bc)),
          (e._pt.u = v || 0),
          e._props.push(l)));
    bm(a, i);
  };
qe("padding,margin,Width,Radius", function (t, e) {
  var n = "Top",
    r = "Right",
    i = "Bottom",
    s = "Left",
    o = (e < 3 ? [n, r, i, s] : [n + s, n + r, i + r, i + s]).map(function (a) {
      return e < 2 ? t + a : "border" + a + t;
    });
  La[e > 1 ? "border" + t : t] = function (a, l, u, c, f) {
    var d, h;
    if (arguments.length < 4)
      return (
        (d = o.map(function (v) {
          return on(a, v, u);
        })),
        (h = d.join(" ")),
        h.split(d[0]).length === 5 ? d[0] : h
      );
    ((d = (c + "").split(" ")),
      (h = {}),
      o.forEach(function (v, m) {
        return (h[v] = d[m] = d[m] || d[((m - 1) / 2) | 0]);
      }),
      a.init(l, h, f));
  };
});
var Gx = {
  name: "css",
  register: Wc,
  targetTest: function (e) {
    return e.style && e.nodeType;
  },
  init: function (e, n, r, i, s) {
    var o = this._props,
      a = e.style,
      l = r.vars.startAt,
      u,
      c,
      f,
      d,
      h,
      v,
      m,
      _,
      y,
      p,
      x,
      w,
      S,
      k,
      P,
      C,
      E;
    (Vd || Wc(),
      (this.styles = this.styles || zx(e)),
      (C = this.styles.props),
      (this.tween = r));
    for (m in n)
      if (m !== "autoRound" && ((c = n[m]), !(nt[m] && Nx(m, n, r, i, e, s)))) {
        if (
          ((h = typeof c),
          (v = La[m]),
          h === "function" && ((c = c.call(r, i, e, s)), (h = typeof c)),
          h === "string" && ~c.indexOf("random(") && (c = Fs(c)),
          v)
        )
          v(this, e, m, c, r) && (P = 1);
        else if (m.substr(0, 2) === "--")
          ((u = (getComputedStyle(e).getPropertyValue(m) + "").trim()),
            (c += ""),
            (Wn.lastIndex = 0),
            Wn.test(u) ||
              ((_ = Oe(u)),
              (y = Oe(c)),
              y ? _ !== y && (u = Qn(e, m, u, y) + y) : _ && (c += _)),
            this.add(a, "setProperty", u, c, i, s, 0, 0, m),
            o.push(m),
            C.push(m, 0, a[m]));
        else if (h !== "undefined") {
          if (
            (l && m in l
              ? ((u = typeof l[m] == "function" ? l[m].call(r, i, e, s) : l[m]),
                Ce(u) && ~u.indexOf("random(") && (u = Fs(u)),
                Oe(u + "") ||
                  u === "auto" ||
                  (u += ut.units[m] || Oe(on(e, m)) || ""),
                (u + "").charAt(1) === "=" && (u = on(e, m)))
              : (u = on(e, m)),
            (d = parseFloat(u)),
            (p = h === "string" && c.charAt(1) === "=" && c.substr(0, 2)),
            p && (c = c.substr(2)),
            (f = parseFloat(c)),
            m in Gt &&
              (m === "autoAlpha" &&
                (d === 1 && on(e, "visibility") === "hidden" && f && (d = 0),
                C.push("visibility", 0, a.visibility),
                An(
                  this,
                  a,
                  "visibility",
                  d ? "inherit" : "hidden",
                  f ? "inherit" : "hidden",
                  !f,
                )),
              m !== "scale" &&
                m !== "transform" &&
                ((m = Gt[m]), ~m.indexOf(",") && (m = m.split(",")[0]))),
            (x = m in mn),
            x)
          ) {
            if (
              (this.styles.save(m),
              (E = c),
              h === "string" && c.substring(0, 6) === "var(--")
            ) {
              if (
                ((c = ot(e, c.substring(4, c.indexOf(")")))),
                c.substring(0, 5) === "calc(")
              ) {
                var j = e.style.perspective;
                ((e.style.perspective = c),
                  (c = ot(e, "perspective")),
                  j ? (e.style.perspective = j) : Xn(e, "perspective"));
              }
              f = parseFloat(c);
            }
            if (
              (w ||
                ((S = e._gsap),
                (S.renderTransform && !n.parseTransform) ||
                  Us(e, n.parseTransform),
                (k = n.smoothOrigin !== !1 && S.smooth),
                (w = this._pt =
                  new Ze(this._pt, a, ae, 0, 1, S.renderTransform, S, 0, -1)),
                (w.dep = 1)),
              m === "scale")
            )
              ((this._pt = new Ze(
                this._pt,
                S,
                "scaleY",
                S.scaleY,
                (p ? oi(S.scaleY, p + f) : f) - S.scaleY || 0,
                Bc,
              )),
                (this._pt.u = 0),
                o.push("scaleY", m),
                (m += "X"));
            else if (m === "transformOrigin") {
              (C.push(Je, 0, a[Je]),
                (c = nN(c)),
                S.svg
                  ? $c(e, c, 0, k, 0, this)
                  : ((y = parseFloat(c.split(" ")[2]) || 0),
                    y !== S.zOrigin && An(this, S, "zOrigin", S.zOrigin, y),
                    An(this, a, m, Oa(u), Oa(c))));
              continue;
            } else if (m === "svgOrigin") {
              $c(e, c, 1, k, 0, this);
              continue;
            } else if (m in $x) {
              oN(this, S, m, d, p ? oi(d, p + c) : c);
              continue;
            } else if (m === "smoothOrigin") {
              An(this, S, "smooth", S.smooth, c);
              continue;
            } else if (m === "force3D") {
              S[m] = c;
              continue;
            } else if (m === "transform") {
              aN(this, c, e);
              continue;
            }
          } else m in a || (m = Ti(m) || m);
          if (x || ((f || f === 0) && (d || d === 0) && !Bj.test(c) && m in a))
            ((_ = (u + "").substr((d + "").length)),
              f || (f = 0),
              (y = Oe(c) || (m in ut.units ? ut.units[m] : _)),
              _ !== y && (d = Qn(e, m, u, y)),
              (this._pt = new Ze(
                this._pt,
                x ? S : a,
                m,
                d,
                (p ? oi(d, p + f) : f) - d,
                !x && (y === "px" || m === "zIndex") && n.autoRound !== !1
                  ? Hj
                  : Bc,
              )),
              (this._pt.u = y || 0),
              x && E !== c
                ? ((this._pt.b = u), (this._pt.e = E), (this._pt.r = $j))
                : _ !== y &&
                  y !== "%" &&
                  ((this._pt.b = u), (this._pt.r = Wj)));
          else if (m in a) tN.call(this, e, m, u, p ? p + c : c);
          else if (m in e) this.add(e, m, u || e[m], p ? p + c : c, i, s);
          else if (m !== "parseTransform") {
            kd(m, c);
            continue;
          }
          (x ||
            (m in a
              ? C.push(m, 0, a[m])
              : typeof e[m] == "function"
                ? C.push(m, 2, e[m]())
                : C.push(m, 1, u || e[m])),
            o.push(m));
        }
      }
    P && Ox(this);
  },
  render: function (e, n) {
    if (n.tween._time || !Id())
      for (var r = n._pt; r; ) (r.r(e, r.d), (r = r._next));
    else n.styles.revert();
  },
  get: on,
  aliases: Gt,
  getSetter: function (e, n, r) {
    var i = Gt[n];
    return (
      i && i.indexOf(",") < 0 && (n = i),
      n in mn && n !== Je && (e._gsap.x || on(e, "x"))
        ? r && Mm === r
          ? n === "scale"
            ? Xj
            : Yj
          : (Mm = r || {}) && (n === "scale" ? Qj : qj)
        : e.style && !Td(e.style[n])
          ? Kj
          : ~n.indexOf("-")
            ? Gj
            : Ld(e, n)
    );
  },
  core: { _removeProperty: Xn, _getMatrix: bd },
};
et.utils.checkPrefix = Ti;
et.core.getStyleSaver = zx;
(function (t, e, n, r) {
  var i = qe(t + "," + e + "," + n, function (s) {
    mn[s] = 1;
  });
  (qe(e, function (s) {
    ((ut.units[s] = "deg"), ($x[s] = 1));
  }),
    (Gt[i[13]] = t + "," + e),
    qe(r, function (s) {
      var o = s.split(":");
      Gt[o[1]] = i[o[0]];
    }));
})(
  "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
  "rotation,rotationX,rotationY,skewX,skewY",
  "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
  "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
);
qe(
  "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
  function (t) {
    ut.units[t] = "px";
  },
);
et.registerPlugin(Gx);
var cl = et.registerPlugin(Gx) || et;
cl.core.Tween;
const uu = {
  hidden: { opacity: 0, y: 24 },
  visible: (t = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: t * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};
function lN({ value: t }) {
  const e = T.useRef(null),
    n = T.useRef(!1);
  return (
    T.useEffect(() => {
      if (!e.current || n.current || t === void 0) return;
      n.current = !0;
      const r = { val: 0 };
      cl.to(r, {
        val: t,
        duration: 1.8,
        ease: "power2.out",
        onUpdate: () => {
          e.current.textContent = Math.floor(r.val).toLocaleString();
        },
      });
    }, [t]),
    g.jsx("span", { ref: e, children: "0" })
  );
}
function uN() {
  return g.jsx("div", {
    className: "grid grid-3 gap-md",
    style: { marginBottom: "20px" },
    children: [1, 2, 3].map((t) =>
      g.jsxs(
        "div",
        {
          className: "glass-card-static p-lg",
          children: [
            g.jsx("div", {
              className: "skeleton skeleton-text",
              style: { width: "40%" },
            }),
            g.jsx("div", {
              className: "skeleton skeleton-title",
              style: { width: "60%", marginTop: "12px" },
            }),
          ],
        },
        t,
      ),
    ),
  });
}
const cN = {
  draft: "badge-info",
  submitted: "badge-accent",
  "under-review": "badge-warning",
  "offer-received": "badge-teal",
  "visa-processing": "badge-accent",
  enrolled: "badge-success",
  rejected: "badge-danger",
};
function fN() {
  const [t, e] = T.useState(null),
    [n, r] = T.useState("");
  if (
    (T.useEffect(() => {
      qt.dashboard()
        .then((s) => e(s.data))
        .catch((s) => r(s.message));
    }, []),
    n)
  )
    return g.jsx("div", {
      className: "glass-card-static p-lg",
      children: g.jsx("p", { className: "error-text", children: n }),
    });
  if (!t) return g.jsx(uN, {});
  const i = [
    {
      label: "Total Students",
      value: t.totalStudents,
      icon: "👨‍🎓",
      color: "feature-icon-purple",
    },
    {
      label: "Total Programs",
      value: t.totalPrograms,
      icon: "📋",
      color: "feature-icon-teal",
    },
    {
      label: "Total Applications",
      value: t.totalApplications,
      icon: "📄",
      color: "feature-icon-orange",
    },
  ];
  return g.jsxs(V.div, {
    initial: "hidden",
    animate: "visible",
    variants: { visible: { transition: { staggerChildren: 0.1 } } },
    children: [
      g.jsx("div", {
        className: "grid grid-3 gap-md",
        style: { marginBottom: "24px" },
        children: i.map((s, o) =>
          g.jsxs(
            V.div,
            {
              className: "glass-card p-lg",
              variants: uu,
              custom: o,
              children: [
                g.jsxs("div", {
                  className: "flex items-center justify-between",
                  style: { marginBottom: "16px" },
                  children: [
                    g.jsx("span", {
                      style: {
                        fontSize: "0.85rem",
                        color: "var(--text-secondary)",
                        fontWeight: 500,
                      },
                      children: s.label,
                    }),
                    g.jsx("div", {
                      className: `feature-icon ${s.color}`,
                      style: {
                        width: "40px",
                        height: "40px",
                        fontSize: "1.2rem",
                        marginBottom: 0,
                      },
                      children: s.icon,
                    }),
                  ],
                }),
                g.jsx("div", {
                  style: {
                    fontSize: "2.2rem",
                    fontFamily: "var(--font-heading)",
                    fontWeight: 800,
                  },
                  children: g.jsx(lN, { value: s.value }),
                }),
              ],
            },
            s.label,
          ),
        ),
      }),
      g.jsxs("div", {
        className: "grid grid-2 gap-md",
        children: [
          g.jsxs(V.div, {
            className: "glass-card-static p-lg",
            variants: uu,
            custom: 3,
            children: [
              g.jsx("h3", {
                style: {
                  fontSize: "1rem",
                  fontWeight: 700,
                  marginBottom: "16px",
                },
                children: "🌍 Top Destination Countries",
              }),
              g.jsx("div", {
                className: "flex flex-wrap gap-sm",
                children: t.topCountries.map((s) =>
                  g.jsxs(
                    "span",
                    {
                      className: "badge badge-teal",
                      style: { padding: "6px 14px", fontSize: "0.82rem" },
                      children: [s._id, " — ", s.count],
                    },
                    s._id,
                  ),
                ),
              }),
            ],
          }),
          g.jsxs(V.div, {
            className: "glass-card-static p-lg",
            variants: uu,
            custom: 4,
            children: [
              g.jsx("h3", {
                style: {
                  fontSize: "1rem",
                  fontWeight: 700,
                  marginBottom: "16px",
                },
                children: "📊 Status Breakdown",
              }),
              g.jsx("div", {
                className: "flex flex-col gap-sm",
                children: t.statusBreakdown.map((s) =>
                  g.jsxs(
                    "div",
                    {
                      className: "flex items-center justify-between",
                      style: { padding: "8px 0" },
                      children: [
                        g.jsx("span", {
                          className: `badge ${cN[s._id] || "badge-info"}`,
                          children: s._id,
                        }),
                        g.jsx("span", {
                          style: {
                            fontFamily: "var(--font-heading)",
                            fontWeight: 700,
                            fontSize: "1.1rem",
                          },
                          children: s.count,
                        }),
                      ],
                    },
                    s._id,
                  ),
                ),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const bt = {
    hidden: { opacity: 0, y: 40 },
    visible: (t = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: t * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  },
  Yx = { visible: { transition: { staggerChildren: 0.12 } } };
function dN({ target: t, suffix: e = "" }) {
  const n = T.useRef(null),
    r = Q0(n, { once: !0, margin: "-50px" });
  return (
    T.useEffect(() => {
      if (!r || !n.current) return;
      const i = { val: 0 };
      cl.to(i, {
        val: t,
        duration: 2,
        ease: "power2.out",
        onUpdate: () => {
          n.current.textContent = Math.floor(i.val).toLocaleString() + e;
        },
      });
    }, [r, t, e]),
    g.jsxs("span", { ref: n, children: ["0", e] })
  );
}
function Co({ children: t, className: e = "", id: n }) {
  const r = T.useRef(null),
    i = Q0(r, { once: !0, margin: "-80px" });
  return g.jsx(V.section, {
    ref: r,
    id: n,
    className: e,
    initial: "hidden",
    animate: i ? "visible" : "hidden",
    variants: Yx,
    children: t,
  });
}
const hN = [
    {
      icon: "🎓",
      iconClass: "feature-icon-purple",
      title: "Smart University Matching",
      desc: "AI-powered algorithm matches you with the best universities based on your profile, preferences, and academic goals.",
    },
    {
      icon: "🌎",
      iconClass: "feature-icon-teal",
      title: "50+ Countries",
      desc: "Explore study programs across 50+ countries with detailed info on tuition, scholarships, and living costs.",
    },
    {
      icon: "📋",
      iconClass: "feature-icon-orange",
      title: "Application Tracker",
      desc: "Track every application from draft to enrollment with real-time status updates and deadline reminders.",
    },
    {
      icon: "💡",
      iconClass: "feature-icon-green",
      title: "Personalized Recommendations",
      desc: "Get tailored program suggestions based on your field of study, budget, and preferred destinations.",
    },
    {
      icon: "📊",
      iconClass: "feature-icon-blue",
      title: "Analytics Dashboard",
      desc: "Beautiful dashboards showing your progress, application stats, and insights at a glance.",
    },
    {
      icon: "🛡️",
      iconClass: "feature-icon-pink",
      title: "Visa & Document Support",
      desc: "Step-by-step guidance through visa processing and document requirements for your destination country.",
    },
  ],
  pN = [
    {
      text: "StudyVerse made my dream of studying at the University of Toronto a reality. The AI recommendations were spot-on!",
      name: "Priya Sharma",
      role: "MS Computer Science, UofT",
      initials: "PS",
    },
    {
      text: "I applied to 5 universities and got into 3 — all thanks to the smart matching and application tracking features.",
      name: "Ahmed Hassan",
      role: "MBA, London Business School",
      initials: "AH",
    },
    {
      text: "The visa processing guidance saved me so much time and stress. I couldn't have done it without StudyVerse.",
      name: "Maria Garcia",
      role: "B.Eng, TU Munich",
      initials: "MG",
    },
  ];
function mN() {
  const [t, e] = T.useState(!1),
    n = T.useRef(null),
    r = !!wd();
  return (
    T.useEffect(() => {
      const i = () => e(window.scrollY > 50);
      return (
        window.addEventListener("scroll", i),
        () => window.removeEventListener("scroll", i)
      );
    }, []),
    T.useEffect(() => {
      if (!n.current) return;
      cl.timeline().fromTo(
        n.current.querySelectorAll(".hero-word"),
        { opacity: 0, y: 60, rotationX: -40 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.9,
          stagger: 0.08,
          ease: "power3.out",
        },
      );
    }, []),
    g.jsxs("div", {
      className: "landing-page",
      children: [
        g.jsxs("nav", {
          className: `landing-nav ${t ? "landing-nav-scrolled" : ""}`,
          children: [
            g.jsxs(sn, {
              to: "/",
              className: "landing-logo",
              children: [
                g.jsx("span", {
                  className: "landing-logo-icon",
                  children: "✦",
                }),
                "StudyVerse",
              ],
            }),
            g.jsxs("div", {
              className: "landing-nav-links",
              children: [
                g.jsx("a", { href: "#features", children: "Features" }),
                g.jsx("a", { href: "#how-it-works", children: "How It Works" }),
                g.jsx("a", { href: "#testimonials", children: "Testimonials" }),
              ],
            }),
            g.jsx("div", {
              className: "landing-nav-actions",
              children: r
                ? g.jsx(sn, {
                    to: "/dashboard",
                    className: "btn btn-primary btn-sm",
                    children: "Dashboard →",
                  })
                : g.jsxs(g.Fragment, {
                    children: [
                      g.jsx(sn, {
                        to: "/login",
                        className: "btn btn-ghost btn-sm",
                        children: "Log in",
                      }),
                      g.jsx(sn, {
                        to: "/register",
                        className: "btn btn-primary btn-sm",
                        children: "Get Started",
                      }),
                    ],
                  }),
            }),
          ],
        }),
        g.jsxs("section", {
          className: "hero",
          ref: n,
          children: [
            g.jsxs("div", {
              className: "hero-bg",
              children: [
                g.jsx("div", { className: "hero-orb hero-orb-1" }),
                g.jsx("div", { className: "hero-orb hero-orb-2" }),
                g.jsx("div", { className: "hero-orb hero-orb-3" }),
              ],
            }),
            g.jsxs(V.div, {
              className: "hero-content",
              initial: "hidden",
              animate: "visible",
              variants: Yx,
              children: [
                g.jsxs(V.div, {
                  className: "hero-badge",
                  variants: bt,
                  children: [
                    g.jsx("span", { className: "hero-badge-dot" }),
                    "Trusted by 10,000+ students worldwide",
                  ],
                }),
                g.jsxs("h1", {
                  className: "hero-title",
                  children: [
                    g.jsx("span", {
                      className: "hero-word",
                      children: "Your ",
                    }),
                    g.jsx("span", {
                      className: "hero-word gradient-text",
                      children: "Global Education ",
                    }),
                    g.jsx("span", {
                      className: "hero-word",
                      children: "Journey ",
                    }),
                    g.jsx("span", {
                      className: "hero-word",
                      children: "Starts ",
                    }),
                    g.jsx("span", { className: "hero-word", children: "Here" }),
                  ],
                }),
                g.jsx(V.p, {
                  className: "hero-subtitle",
                  variants: bt,
                  custom: 3,
                  children:
                    "Discover top universities, track applications, and get AI-powered recommendations — all in one beautifully crafted platform.",
                }),
                g.jsxs(V.div, {
                  className: "hero-cta",
                  variants: bt,
                  custom: 4,
                  children: [
                    g.jsx(sn, {
                      to: r ? "/dashboard" : "/register",
                      className: "btn btn-primary",
                      children: "Start Exploring →",
                    }),
                    g.jsx("a", {
                      href: "#features",
                      className: "btn btn-secondary",
                      children: "See How It Works",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        g.jsx(Co, {
          className: "stats-bar",
          id: "stats",
          children: [
            { target: 1e4, suffix: "+", label: "Students" },
            { target: 500, suffix: "+", label: "Universities" },
            { target: 50, suffix: "+", label: "Countries" },
            { target: 95, suffix: "%", label: "Success Rate" },
          ].map((i, s) =>
            g.jsxs(
              V.div,
              {
                className: "stat-item",
                variants: bt,
                custom: s,
                children: [
                  g.jsx("div", {
                    className: "stat-number gradient-text",
                    children: g.jsx(dN, { target: i.target, suffix: i.suffix }),
                  }),
                  g.jsx("div", { className: "stat-label", children: i.label }),
                ],
              },
              i.label,
            ),
          ),
        }),
        g.jsxs(Co, {
          className: "section",
          id: "features",
          children: [
            g.jsxs(V.div, {
              variants: bt,
              children: [
                g.jsx("span", {
                  className: "section-label",
                  children: "✦ Why StudyVerse",
                }),
                g.jsxs("h2", {
                  className: "section-title",
                  children: [
                    "Everything you need to",
                    g.jsx("br", {}),
                    g.jsx("span", {
                      className: "gradient-text",
                      children: "study abroad, simplified.",
                    }),
                  ],
                }),
                g.jsx("p", {
                  className: "section-subtitle",
                  children:
                    "From university discovery to visa processing — we've built the tools that make studying abroad effortless.",
                }),
              ],
            }),
            g.jsx("div", {
              className: "features-grid",
              children: hN.map((i, s) =>
                g.jsxs(
                  V.div,
                  {
                    className: "feature-card",
                    variants: bt,
                    custom: s,
                    whileHover: { y: -6 },
                    children: [
                      g.jsx("div", {
                        className: `feature-icon ${i.iconClass}`,
                        children: i.icon,
                      }),
                      g.jsx("h3", { children: i.title }),
                      g.jsx("p", { children: i.desc }),
                    ],
                  },
                  i.title,
                ),
              ),
            }),
          ],
        }),
        g.jsxs(Co, {
          className: "section",
          id: "how-it-works",
          children: [
            g.jsxs(V.div, {
              variants: bt,
              children: [
                g.jsx("span", {
                  className: "section-label",
                  children: "✦ How It Works",
                }),
                g.jsxs("h2", {
                  className: "section-title",
                  children: [
                    "Three steps to your",
                    g.jsx("br", {}),
                    g.jsx("span", {
                      className: "gradient-text",
                      children: "dream university.",
                    }),
                  ],
                }),
                g.jsx("p", {
                  className: "section-subtitle",
                  children:
                    "We've streamlined the entire study abroad process into three simple steps.",
                }),
              ],
            }),
            g.jsx("div", {
              className: "steps-container",
              children: [
                {
                  num: 1,
                  title: "Create Your Profile",
                  desc: "Sign up and tell us about your academic background, target countries, and field of interest.",
                },
                {
                  num: 2,
                  title: "Discover & Match",
                  desc: "Browse 500+ universities and get AI-powered recommendations tailored to your goals.",
                },
                {
                  num: 3,
                  title: "Apply & Track",
                  desc: "Submit applications directly and track every stage from submission to enrolled.",
                },
              ].map((i, s) =>
                g.jsxs(
                  V.div,
                  {
                    className: "step-item",
                    variants: bt,
                    custom: s,
                    children: [
                      g.jsx("div", {
                        className: "step-number",
                        children: i.num,
                      }),
                      g.jsx("h3", { children: i.title }),
                      g.jsx("p", { children: i.desc }),
                    ],
                  },
                  i.num,
                ),
              ),
            }),
          ],
        }),
        g.jsxs(Co, {
          className: "section",
          id: "testimonials",
          children: [
            g.jsxs(V.div, {
              variants: bt,
              children: [
                g.jsx("span", {
                  className: "section-label",
                  children: "✦ Testimonials",
                }),
                g.jsxs("h2", {
                  className: "section-title",
                  children: [
                    "Loved by students",
                    g.jsx("br", {}),
                    g.jsx("span", {
                      className: "gradient-text",
                      children: "around the world.",
                    }),
                  ],
                }),
                g.jsx("p", {
                  className: "section-subtitle",
                  children:
                    "Hear from students who transformed their study abroad journey with StudyVerse.",
                }),
              ],
            }),
            g.jsx("div", {
              className: "testimonials-grid",
              children: pN.map((i, s) =>
                g.jsxs(
                  V.div,
                  {
                    className: "testimonial-card",
                    variants: bt,
                    custom: s,
                    children: [
                      g.jsx("div", {
                        className: "testimonial-stars",
                        children: "★★★★★",
                      }),
                      g.jsxs("p", {
                        className: "testimonial-text",
                        children: ['"', i.text, '"'],
                      }),
                      g.jsxs("div", {
                        className: "testimonial-author",
                        children: [
                          g.jsx("div", {
                            className: "testimonial-avatar",
                            children: i.initials,
                          }),
                          g.jsxs("div", {
                            children: [
                              g.jsx("div", {
                                className: "testimonial-name",
                                children: i.name,
                              }),
                              g.jsx("div", {
                                className: "testimonial-role",
                                children: i.role,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  },
                  i.name,
                ),
              ),
            }),
          ],
        }),
        g.jsx("section", {
          className: "section",
          children: g.jsxs("div", {
            className: "cta-section",
            children: [
              g.jsx("div", { className: "cta-bg" }),
              g.jsxs("div", {
                className: "cta-content",
                children: [
                  g.jsxs(V.h2, {
                    initial: { opacity: 0, y: 30 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: !0 },
                    transition: { duration: 0.7 },
                    children: [
                      "Ready to start your ",
                      g.jsx("span", {
                        className: "gradient-text",
                        children: "global journey?",
                      }),
                    ],
                  }),
                  g.jsx(V.p, {
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: !0 },
                    transition: { duration: 0.7, delay: 0.15 },
                    children:
                      "Join 10,000+ students who are already discovering their dream universities. It's free to get started.",
                  }),
                  g.jsx(V.div, {
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: !0 },
                    transition: { duration: 0.7, delay: 0.3 },
                    children: g.jsx(sn, {
                      to: "/register",
                      className: "btn btn-primary",
                      style: {
                        padding: "16px 40px",
                        fontSize: "1rem",
                        borderRadius: "28px",
                      },
                      children: "Create Free Account →",
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
        g.jsxs("footer", {
          className: "landing-footer",
          children: [
            g.jsxs("div", {
              className: "footer-grid",
              children: [
                g.jsxs("div", {
                  children: [
                    g.jsxs("div", {
                      className: "landing-logo",
                      style: { marginBottom: "4px" },
                      children: [
                        g.jsx("span", {
                          className: "landing-logo-icon",
                          children: "✦",
                        }),
                        "StudyVerse",
                      ],
                    }),
                    g.jsx("p", {
                      className: "footer-brand-desc",
                      children:
                        "Your AI-powered companion for studying abroad. Discover, apply, and succeed — all in one place.",
                    }),
                  ],
                }),
                g.jsxs("div", {
                  className: "footer-col",
                  children: [
                    g.jsx("h4", { children: "Platform" }),
                    g.jsx("a", { href: "#features", children: "Features" }),
                    g.jsx("a", {
                      href: "#how-it-works",
                      children: "How It Works",
                    }),
                    g.jsx("a", { href: "#testimonials", children: "Reviews" }),
                  ],
                }),
                g.jsxs("div", {
                  className: "footer-col",
                  children: [
                    g.jsx("h4", { children: "Resources" }),
                    g.jsx("a", { href: "#", children: "Blog" }),
                    g.jsx("a", { href: "#", children: "Guides" }),
                    g.jsx("a", { href: "#", children: "Help Center" }),
                  ],
                }),
                g.jsxs("div", {
                  className: "footer-col",
                  children: [
                    g.jsx("h4", { children: "Company" }),
                    g.jsx("a", { href: "#", children: "About" }),
                    g.jsx("a", { href: "#", children: "Careers" }),
                    g.jsx("a", { href: "#", children: "Contact" }),
                  ],
                }),
              ],
            }),
            g.jsxs("div", {
              className: "footer-bottom",
              children: [
                g.jsx("span", {
                  children: "© 2026 StudyVerse. All rights reserved.",
                }),
                g.jsxs("div", {
                  className: "footer-socials",
                  children: [
                    g.jsx("a", {
                      href: "#",
                      "aria-label": "Twitter",
                      children: "𝕏",
                    }),
                    g.jsx("a", {
                      href: "#",
                      "aria-label": "LinkedIn",
                      children: "in",
                    }),
                    g.jsx("a", {
                      href: "#",
                      "aria-label": "GitHub",
                      children: "⌂",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
}
const zm = {
    hidden: { opacity: 0, y: 20 },
    visible: (t = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        delay: t * 0.06,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  },
  gN = {
    bachelor: "badge-accent",
    master: "badge-teal",
    diploma: "badge-warning",
    certificate: "badge-info",
  };
function yN() {
  const [t, e] = T.useState([]),
    [n, r] = T.useState({
      q: "",
      country: "",
      degreeLevel: "",
      maxTuition: "",
    }),
    i = async () => {
      const s = await qt.programs({ ...n, limit: 15 });
      e(s.data);
    };
  return (
    T.useEffect(() => {
      i();
    }, []),
    g.jsxs(V.div, {
      initial: "hidden",
      animate: "visible",
      variants: { visible: { transition: { staggerChildren: 0.05 } } },
      children: [
        g.jsxs(V.div, {
          className: "flex gap-sm flex-wrap",
          style: { marginBottom: "32px" },
          variants: zm,
          children: [
            g.jsx("input", {
              className: "input",
              placeholder: "Search title, field, or university...",
              value: n.q,
              onChange: (s) => r({ ...n, q: s.target.value }),
              style: { flex: "2 1 200px" },
            }),
            g.jsx("input", {
              className: "input",
              placeholder: "Country",
              value: n.country,
              onChange: (s) => r({ ...n, country: s.target.value }),
              style: { flex: "1 1 120px" },
            }),
            g.jsxs("select", {
              className: "input select",
              value: n.degreeLevel,
              onChange: (s) => r({ ...n, degreeLevel: s.target.value }),
              style: { flex: "1 1 120px" },
              children: [
                g.jsx("option", { value: "", children: "Any Degree" }),
                g.jsx("option", { value: "bachelor", children: "Bachelor" }),
                g.jsx("option", { value: "master", children: "Master" }),
                g.jsx("option", { value: "diploma", children: "Diploma" }),
                g.jsx("option", {
                  value: "certificate",
                  children: "Certificate",
                }),
              ],
            }),
            g.jsx("input", {
              className: "input",
              type: "number",
              placeholder: "Max tuition USD",
              value: n.maxTuition,
              onChange: (s) => r({ ...n, maxTuition: s.target.value }),
              style: { flex: "1 1 140px" },
            }),
            g.jsx("button", {
              className: "btn btn-primary",
              onClick: i,
              children: "Apply Filters",
            }),
          ],
        }),
        g.jsxs("div", {
          className: "grid grid-3 gap-md",
          children: [
            t.map((s, o) => {
              var a, l;
              return g.jsxs(
                V.article,
                {
                  className: "glass-card p-md",
                  variants: zm,
                  custom: o,
                  whileHover: { y: -4 },
                  children: [
                    g.jsxs("div", {
                      className: "flex items-center justify-between",
                      style: { marginBottom: "10px" },
                      children: [
                        g.jsx("span", {
                          className: `badge ${gN[s.degreeLevel] || "badge-info"}`,
                          children: s.degreeLevel,
                        }),
                        g.jsx("span", {
                          style: {
                            fontSize: "0.78rem",
                            color: "var(--text-tertiary)",
                          },
                          children: s.country,
                        }),
                      ],
                    }),
                    g.jsx("h4", {
                      style: {
                        fontSize: "1rem",
                        fontWeight: 700,
                        marginBottom: "6px",
                      },
                      children: s.title,
                    }),
                    g.jsx("p", {
                      style: {
                        color: "var(--text-secondary)",
                        fontSize: "0.85rem",
                        marginBottom: "10px",
                      },
                      children: s.universityName,
                    }),
                    g.jsxs("p", {
                      style: {
                        fontSize: "0.82rem",
                        color: "var(--text-tertiary)",
                        marginBottom: "10px",
                      },
                      children: ["📚 ", s.field],
                    }),
                    g.jsxs("div", {
                      className: "flex items-center justify-between",
                      style: {
                        borderTop: "1px solid var(--border)",
                        paddingTop: "10px",
                      },
                      children: [
                        g.jsxs("span", {
                          style: {
                            fontFamily: "var(--font-heading)",
                            fontWeight: 700,
                            fontSize: "1.05rem",
                          },
                          children: [
                            "$",
                            (a = s.tuitionFeeUsd) == null
                              ? void 0
                              : a.toLocaleString(),
                          ],
                        }),
                        g.jsx("div", {
                          className: "flex gap-xs flex-wrap",
                          children:
                            (l = s.intakes) == null
                              ? void 0
                              : l
                                  .slice(0, 2)
                                  .map((u) =>
                                    g.jsx(
                                      "span",
                                      {
                                        className: "badge badge-success",
                                        style: { fontSize: "0.7rem" },
                                        children: u,
                                      },
                                      u,
                                    ),
                                  ),
                        }),
                      ],
                    }),
                  ],
                },
                s._id,
              );
            }),
            t.length === 0 &&
              g.jsx("div", {
                className: "glass-card-static p-lg",
                style: { gridColumn: "1 / -1", textAlign: "center" },
                children: g.jsx("p", {
                  style: { color: "var(--text-secondary)" },
                  children: "No programs found. Try adjusting your filters.",
                }),
              }),
          ],
        }),
      ],
    })
  );
}
const Bm = {
  hidden: { opacity: 0, y: 20 },
  visible: (t = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      delay: t * 0.06,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};
function vN({ score: t }) {
  const e = Math.min(t, 100),
    n = 2 * Math.PI * 36,
    r = n - (e / 100) * n;
  return g.jsxs("div", {
    style: {
      position: "relative",
      width: "80px",
      height: "80px",
      flexShrink: 0,
    },
    children: [
      g.jsxs("svg", {
        width: "80",
        height: "80",
        viewBox: "0 0 80 80",
        children: [
          g.jsx("circle", {
            cx: "40",
            cy: "40",
            r: "36",
            fill: "none",
            stroke: "var(--border)",
            strokeWidth: "5",
          }),
          g.jsx("circle", {
            cx: "40",
            cy: "40",
            r: "36",
            fill: "none",
            stroke: "url(#gradient-ring)",
            strokeWidth: "5",
            strokeLinecap: "round",
            strokeDasharray: n,
            strokeDashoffset: r,
            transform: "rotate(-90 40 40)",
            style: { transition: "stroke-dashoffset 1s ease" },
          }),
          g.jsx("defs", {
            children: g.jsxs("linearGradient", {
              id: "gradient-ring",
              x1: "0",
              y1: "0",
              x2: "1",
              y2: "1",
              children: [
                g.jsx("stop", { offset: "0%", stopColor: "var(--accent)" }),
                g.jsx("stop", { offset: "100%", stopColor: "var(--accent-2)" }),
              ],
            }),
          }),
        ],
      }),
      g.jsx("div", {
        style: {
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "var(--font-heading)",
          fontWeight: 800,
          fontSize: "1rem",
        },
        children: e,
      }),
    ],
  });
}
function xN() {
  var s, o;
  const t = q0(),
    [e, n] = T.useState(null),
    [r, i] = T.useState("");
  return (
    T.useEffect(() => {
      t != null &&
        t.id &&
        qt
          .recommendations(t.id)
          .then((a) => n(a.data))
          .catch((a) => i(a.message));
    }, [t == null ? void 0 : t.id]),
    t != null && t.id
      ? r
        ? g.jsx("div", {
            className: "glass-card-static p-lg",
            children: g.jsx("p", { className: "error-text", children: r }),
          })
        : e
          ? g.jsxs(V.div, {
              initial: "hidden",
              animate: "visible",
              variants: { visible: { transition: { staggerChildren: 0.08 } } },
              children: [
                g.jsxs(V.div, {
                  className: "glass-card-static p-lg",
                  variants: Bm,
                  style: {
                    marginBottom: "28px",
                    background:
                      "linear-gradient(135deg, rgba(108,92,231,0.08), rgba(0,206,201,0.05))",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-lg)",
                  },
                  children: [
                    g.jsxs("h3", {
                      style: {
                        fontSize: "1.15rem",
                        fontWeight: 700,
                        marginBottom: "12px",
                      },
                      children: [
                        "🎯 ",
                        e.student.fullName,
                        "'s Recommendations",
                      ],
                    }),
                    g.jsxs("div", {
                      className: "flex gap-lg flex-wrap",
                      style: {
                        color: "var(--text-secondary)",
                        fontSize: "0.9rem",
                      },
                      children: [
                        g.jsxs("div", {
                          children: [
                            g.jsx("strong", {
                              style: {
                                color: "var(--text-primary)",
                                fontWeight: 600,
                              },
                              children: "Target Countries: ",
                            }),
                            ((s = e.student.targetCountries) == null
                              ? void 0
                              : s.length) > 0
                              ? e.student.targetCountries.map((a) =>
                                  g.jsx(
                                    "span",
                                    {
                                      className: "badge badge-teal",
                                      style: { marginLeft: "6px" },
                                      children: a,
                                    },
                                    a,
                                  ),
                                )
                              : "Not set",
                          ],
                        }),
                        g.jsxs("div", {
                          children: [
                            g.jsx("strong", {
                              style: {
                                color: "var(--text-primary)",
                                fontWeight: 600,
                              },
                              children: "Interested Fields: ",
                            }),
                            ((o = e.student.interestedFields) == null
                              ? void 0
                              : o.length) > 0
                              ? e.student.interestedFields.map((a) =>
                                  g.jsx(
                                    "span",
                                    {
                                      className: "badge badge-accent",
                                      style: { marginLeft: "6px" },
                                      children: a,
                                    },
                                    a,
                                  ),
                                )
                              : "Not set",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                g.jsxs("div", {
                  className: "flex flex-col gap-md",
                  children: [
                    e.recommendations.map((a, l) => {
                      var u, c;
                      return g.jsx(
                        V.article,
                        {
                          className: "glass-card p-lg",
                          variants: Bm,
                          custom: l,
                          children: g.jsxs("div", {
                            className: "flex gap-lg",
                            style: { alignItems: "flex-start" },
                            children: [
                              g.jsx(vN, { score: a.matchScore }),
                              g.jsxs("div", {
                                style: { flex: 1 },
                                children: [
                                  g.jsx("h4", {
                                    style: {
                                      fontSize: "1.05rem",
                                      fontWeight: 700,
                                      marginBottom: "6px",
                                    },
                                    children: a.title,
                                  }),
                                  g.jsx("p", {
                                    style: {
                                      color: "var(--text-secondary)",
                                      fontSize: "0.9rem",
                                      marginBottom: "8px",
                                    },
                                    children: a.universityName,
                                  }),
                                  g.jsxs("div", {
                                    className: "flex gap-sm flex-wrap",
                                    style: { marginBottom: "12px" },
                                    children: [
                                      g.jsx("span", {
                                        className: "badge badge-teal",
                                        children: a.country,
                                      }),
                                      g.jsx("span", {
                                        className: "badge badge-accent",
                                        children: a.degreeLevel,
                                      }),
                                      g.jsxs("span", {
                                        style: {
                                          fontFamily: "var(--font-heading)",
                                          fontWeight: 700,
                                          fontSize: "0.95rem",
                                          color: "var(--text-primary)",
                                        },
                                        children: [
                                          "$",
                                          (u = a.tuitionFeeUsd) == null
                                            ? void 0
                                            : u.toLocaleString(),
                                        ],
                                      }),
                                    ],
                                  }),
                                  ((c = a.reasons) == null
                                    ? void 0
                                    : c.length) > 0 &&
                                    g.jsx("div", {
                                      className: "flex flex-col gap-xs",
                                      children: a.reasons.map((f) =>
                                        g.jsxs(
                                          "div",
                                          {
                                            style: {
                                              display: "flex",
                                              alignItems: "center",
                                              gap: "8px",
                                              fontSize: "0.85rem",
                                              color: "var(--text-secondary)",
                                            },
                                            children: [
                                              g.jsx("span", {
                                                style: {
                                                  color: "var(--success)",
                                                },
                                                children: "✓",
                                              }),
                                              f,
                                            ],
                                          },
                                          f,
                                        ),
                                      ),
                                    }),
                                ],
                              }),
                            ],
                          }),
                        },
                        `${a.title}-${l}`,
                      );
                    }),
                    e.recommendations.length === 0 &&
                      g.jsx("div", {
                        className: "glass-card-static p-lg",
                        style: { textAlign: "center" },
                        children: g.jsx("p", {
                          style: { color: "var(--text-secondary)" },
                          children:
                            "No recommendations available yet. Update your profile to get matched.",
                        }),
                      }),
                  ],
                }),
              ],
            })
          : g.jsx("div", {
              className: "flex flex-col gap-md",
              children: [1, 2, 3].map((a) =>
                g.jsxs(
                  "div",
                  {
                    className: "glass-card-static p-lg",
                    children: [
                      g.jsx("div", { className: "skeleton skeleton-title" }),
                      g.jsx("div", { className: "skeleton skeleton-text" }),
                      g.jsx("div", {
                        className: "skeleton skeleton-text",
                        style: { width: "60%" },
                      }),
                    ],
                  },
                  a,
                ),
              ),
            })
      : g.jsx("div", {
          className: "glass-card-static p-lg",
          style: { textAlign: "center" },
          children: g.jsx("p", {
            style: { color: "var(--text-secondary)" },
            children: "No active user.",
          }),
        })
  );
}
const Ui = {
  hidden: { opacity: 0, y: 20 },
  visible: (t = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      delay: t * 0.06,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};
function _N() {
  const [t, e] = T.useState([]),
    [n, r] = T.useState([]),
    [i, s] = T.useState("");
  T.useEffect(() => {
    (qt.popularUniversities().then((l) => e(l.data)), o());
  }, []);
  const o = async () => {
      const l = await qt.universities({ q: i, limit: 12, sortBy: "popular" });
      r(l.data);
    },
    a = (l) => {
      l.key === "Enter" && o();
    };
  return g.jsxs(V.div, {
    initial: "hidden",
    animate: "visible",
    variants: { visible: { transition: { staggerChildren: 0.05 } } },
    children: [
      g.jsxs(V.div, {
        className: "flex gap-sm",
        style: { marginBottom: "32px" },
        variants: Ui,
        children: [
          g.jsxs("div", {
            style: { position: "relative", flex: 1 },
            children: [
              g.jsx("span", {
                style: {
                  position: "absolute",
                  left: "16px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "var(--text-tertiary)",
                  fontSize: "1.1rem",
                },
                children: "🔍",
              }),
              g.jsx("input", {
                className: "input",
                placeholder: "Search university, country, or city...",
                value: i,
                onChange: (l) => s(l.target.value),
                onKeyDown: a,
                style: { paddingLeft: "44px" },
              }),
            ],
          }),
          g.jsx("button", {
            className: "btn btn-primary",
            onClick: o,
            children: "Search",
          }),
        ],
      }),
      t.length > 0 &&
        g.jsxs(g.Fragment, {
          children: [
            g.jsx(V.h3, {
              variants: Ui,
              style: {
                fontSize: "1.1rem",
                fontWeight: 700,
                marginBottom: "16px",
              },
              children: "🔥 Popular Universities",
            }),
            g.jsx("div", {
              className: "grid grid-3 gap-md",
              style: { marginBottom: "40px" },
              children: t.map((l, u) =>
                g.jsxs(
                  V.article,
                  {
                    className: "glass-card p-md",
                    variants: Ui,
                    custom: u,
                    whileHover: { y: -4 },
                    children: [
                      g.jsx("h4", {
                        style: {
                          fontSize: "1rem",
                          fontWeight: 700,
                          marginBottom: "8px",
                        },
                        children: l.name,
                      }),
                      g.jsxs("p", {
                        style: {
                          color: "var(--text-secondary)",
                          fontSize: "0.88rem",
                          marginBottom: "8px",
                        },
                        children: ["📍 ", l.city, ", ", l.country],
                      }),
                      g.jsxs("span", {
                        className: "badge badge-accent",
                        children: ["QS Rank: ", l.qsRanking || "N/A"],
                      }),
                    ],
                  },
                  l._id,
                ),
              ),
            }),
          ],
        }),
      g.jsx(V.h3, {
        variants: Ui,
        style: { fontSize: "1.1rem", fontWeight: 700, marginBottom: "16px" },
        children: "🏛️ All Universities",
      }),
      g.jsxs("div", {
        className: "grid grid-3 gap-md",
        children: [
          n.map((l, u) =>
            g.jsxs(
              V.article,
              {
                className: "glass-card p-md",
                variants: Ui,
                custom: u,
                whileHover: { y: -4 },
                children: [
                  g.jsx("h4", {
                    style: {
                      fontSize: "1rem",
                      fontWeight: 700,
                      marginBottom: "8px",
                    },
                    children: l.name,
                  }),
                  g.jsxs("p", {
                    style: {
                      color: "var(--text-secondary)",
                      fontSize: "0.88rem",
                      marginBottom: "8px",
                    },
                    children: ["📍 ", l.city, ", ", l.country],
                  }),
                  g.jsxs("div", {
                    className: "flex gap-xs flex-wrap",
                    children: [
                      g.jsx("span", {
                        className: "badge badge-teal",
                        children: l.partnerType,
                      }),
                      l.scholarshipAvailable &&
                        g.jsx("span", {
                          className: "badge badge-success",
                          children: "💰 Scholarship",
                        }),
                    ],
                  }),
                ],
              },
              l._id,
            ),
          ),
          n.length === 0 &&
            g.jsx("div", {
              className: "glass-card-static p-lg",
              style: { gridColumn: "1 / -1", textAlign: "center" },
              children: g.jsx("p", {
                style: { color: "var(--text-secondary)" },
                children: "No universities found. Try a different search.",
              }),
            }),
        ],
      }),
    ],
  });
}
function wN({ children: t }) {
  return wd() ? t : g.jsx(pS, { to: "/login", replace: !0 });
}
function SN() {
  return g.jsxs(yS, {
    children: [
      g.jsx(zt, { path: "/", element: g.jsx(mN, {}) }),
      g.jsx(zt, { path: "/login", element: g.jsx(wm, { mode: "login" }) }),
      g.jsx(zt, {
        path: "/register",
        element: g.jsx(wm, { mode: "register" }),
      }),
      g.jsxs(zt, {
        path: "/dashboard",
        element: g.jsx(wN, { children: g.jsx(IE, {}) }),
        children: [
          g.jsx(zt, { index: !0, element: g.jsx(fN, {}) }),
          g.jsx(zt, { path: "universities", element: g.jsx(_N, {}) }),
          g.jsx(zt, { path: "programs", element: g.jsx(yN, {}) }),
          g.jsx(zt, { path: "applications", element: g.jsx(UE, {}) }),
          g.jsx(zt, { path: "recommendations", element: g.jsx(xN, {}) }),
        ],
      }),
    ],
  });
}
const TN = localStorage.getItem("sv_theme") || "dark";
document.documentElement.setAttribute("data-theme", TN);
cu.createRoot(document.getElementById("root")).render(
  g.jsx(Zm.StrictMode, { children: g.jsx(PS, { children: g.jsx(SN, {}) }) }),
);
