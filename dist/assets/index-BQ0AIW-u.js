var b1 = Object.defineProperty;
var D1 = (e, t, n) =>
  t in e
    ? b1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var Zs = (e, t, n) => (D1(e, typeof t != "symbol" ? t + "" : t, n), n);
function I1(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function F1(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Kf = { exports: {} },
  ys = {},
  Gf = { exports: {} },
  D = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _o = Symbol.for("react.element"),
  $1 = Symbol.for("react.portal"),
  M1 = Symbol.for("react.fragment"),
  B1 = Symbol.for("react.strict_mode"),
  U1 = Symbol.for("react.profiler"),
  H1 = Symbol.for("react.provider"),
  V1 = Symbol.for("react.context"),
  W1 = Symbol.for("react.forward_ref"),
  Q1 = Symbol.for("react.suspense"),
  K1 = Symbol.for("react.memo"),
  G1 = Symbol.for("react.lazy"),
  Lc = Symbol.iterator;
function J1(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Lc && e[Lc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Jf = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  qf = Object.assign,
  Yf = {};
function jr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Yf),
    (this.updater = n || Jf);
}
jr.prototype.isReactComponent = {};
jr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
jr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Xf() {}
Xf.prototype = jr.prototype;
function su(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Yf),
    (this.updater = n || Jf);
}
var lu = (su.prototype = new Xf());
lu.constructor = su;
qf(lu, jr.prototype);
lu.isPureReactComponent = !0;
var bc = Array.isArray,
  Zf = Object.prototype.hasOwnProperty,
  au = { current: null },
  ep = { key: !0, ref: !0, __self: !0, __source: !0 };
function tp(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Zf.call(t, r) && !ep.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
    o.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
  return {
    $$typeof: _o,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: au.current,
  };
}
function q1(e, t) {
  return {
    $$typeof: _o,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function uu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === _o;
}
function Y1(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Dc = /\/+/g;
function el(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Y1("" + e.key)
    : t.toString(36);
}
function pi(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case _o:
          case $1:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === "" ? "." + el(s, 0) : r),
      bc(o)
        ? ((n = ""),
          e != null && (n = e.replace(Dc, "$&/") + "/"),
          pi(o, t, n, "", function (c) {
            return c;
          }))
        : o != null &&
          (uu(o) &&
            (o = q1(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Dc, "$&/") + "/") +
                e,
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), bc(e)))
    for (var l = 0; l < e.length; l++) {
      i = e[l];
      var u = r + el(i, l);
      s += pi(i, t, n, u, o);
    }
  else if (((u = J1(e)), typeof u == "function"))
    for (e = u.call(e), l = 0; !(i = e.next()).done; )
      (i = i.value), (u = r + el(i, l++)), (s += pi(i, t, n, u, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return s;
}
function Mo(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    pi(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function X1(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ce = { current: null },
  hi = { transition: null },
  Z1 = {
    ReactCurrentDispatcher: Ce,
    ReactCurrentBatchConfig: hi,
    ReactCurrentOwner: au,
  };
D.Children = {
  map: Mo,
  forEach: function (e, t, n) {
    Mo(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Mo(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Mo(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!uu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
D.Component = jr;
D.Fragment = M1;
D.Profiler = U1;
D.PureComponent = su;
D.StrictMode = B1;
D.Suspense = Q1;
D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Z1;
D.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = qf({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = au.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (u in t)
      Zf.call(t, u) &&
        !ep.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && l !== void 0 ? l[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    l = Array(u);
    for (var c = 0; c < u; c++) l[c] = arguments[c + 2];
    r.children = l;
  }
  return { $$typeof: _o, type: e.type, key: o, ref: i, props: r, _owner: s };
};
D.createContext = function (e) {
  return (
    (e = {
      $$typeof: V1,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: H1, _context: e }),
    (e.Consumer = e)
  );
};
D.createElement = tp;
D.createFactory = function (e) {
  var t = tp.bind(null, e);
  return (t.type = e), t;
};
D.createRef = function () {
  return { current: null };
};
D.forwardRef = function (e) {
  return { $$typeof: W1, render: e };
};
D.isValidElement = uu;
D.lazy = function (e) {
  return { $$typeof: G1, _payload: { _status: -1, _result: e }, _init: X1 };
};
D.memo = function (e, t) {
  return { $$typeof: K1, type: e, compare: t === void 0 ? null : t };
};
D.startTransition = function (e) {
  var t = hi.transition;
  hi.transition = {};
  try {
    e();
  } finally {
    hi.transition = t;
  }
};
D.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
D.useCallback = function (e, t) {
  return Ce.current.useCallback(e, t);
};
D.useContext = function (e) {
  return Ce.current.useContext(e);
};
D.useDebugValue = function () {};
D.useDeferredValue = function (e) {
  return Ce.current.useDeferredValue(e);
};
D.useEffect = function (e, t) {
  return Ce.current.useEffect(e, t);
};
D.useId = function () {
  return Ce.current.useId();
};
D.useImperativeHandle = function (e, t, n) {
  return Ce.current.useImperativeHandle(e, t, n);
};
D.useInsertionEffect = function (e, t) {
  return Ce.current.useInsertionEffect(e, t);
};
D.useLayoutEffect = function (e, t) {
  return Ce.current.useLayoutEffect(e, t);
};
D.useMemo = function (e, t) {
  return Ce.current.useMemo(e, t);
};
D.useReducer = function (e, t, n) {
  return Ce.current.useReducer(e, t, n);
};
D.useRef = function (e) {
  return Ce.current.useRef(e);
};
D.useState = function (e) {
  return Ce.current.useState(e);
};
D.useSyncExternalStore = function (e, t, n) {
  return Ce.current.useSyncExternalStore(e, t, n);
};
D.useTransition = function () {
  return Ce.current.useTransition();
};
D.version = "18.2.0";
Gf.exports = D;
var _ = Gf.exports;
const Se = F1(_),
  Vl = I1({ __proto__: null, default: Se }, [_]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var em = _,
  tm = Symbol.for("react.element"),
  nm = Symbol.for("react.fragment"),
  rm = Object.prototype.hasOwnProperty,
  om = em.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  im = { key: !0, ref: !0, __self: !0, __source: !0 };
function np(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) rm.call(t, r) && !im.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: tm,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: om.current,
  };
}
ys.Fragment = nm;
ys.jsx = np;
ys.jsxs = np;
Kf.exports = ys;
var a = Kf.exports,
  Wl = {},
  rp = { exports: {} },
  Ue = {},
  op = { exports: {} },
  ip = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(T, N) {
    var z = T.length;
    T.push(N);
    e: for (; 0 < z; ) {
      var U = (z - 1) >>> 1,
        H = T[U];
      if (0 < o(H, N)) (T[U] = N), (T[z] = H), (z = U);
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var N = T[0],
      z = T.pop();
    if (z !== N) {
      T[0] = z;
      e: for (var U = 0, H = T.length, vn = H >>> 1; U < vn; ) {
        var Xe = 2 * (U + 1) - 1,
          bt = T[Xe],
          ze = Xe + 1,
          gt = T[ze];
        if (0 > o(bt, z))
          ze < H && 0 > o(gt, bt)
            ? ((T[U] = gt), (T[ze] = z), (U = ze))
            : ((T[U] = bt), (T[Xe] = z), (U = Xe));
        else if (ze < H && 0 > o(gt, z)) (T[U] = gt), (T[ze] = z), (U = ze);
        else break e;
      }
    }
    return N;
  }
  function o(T, N) {
    var z = T.sortIndex - N.sortIndex;
    return z !== 0 ? z : T.id - N.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      l = s.now();
    e.unstable_now = function () {
      return s.now() - l;
    };
  }
  var u = [],
    c = [],
    f = 1,
    d = null,
    v = 3,
    w = !1,
    y = !1,
    x = !1,
    j = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(T) {
    for (var N = n(c); N !== null; ) {
      if (N.callback === null) r(c);
      else if (N.startTime <= T)
        r(c), (N.sortIndex = N.expirationTime), t(u, N);
      else break;
      N = n(c);
    }
  }
  function S(T) {
    if (((x = !1), g(T), !y))
      if (n(u) !== null) (y = !0), Ar(E);
      else {
        var N = n(c);
        N !== null && gn(S, N.startTime - T);
      }
  }
  function E(T, N) {
    (y = !1), x && ((x = !1), m(A), (A = -1)), (w = !0);
    var z = v;
    try {
      for (
        g(N), d = n(u);
        d !== null && (!(d.expirationTime > N) || (T && !ye()));

      ) {
        var U = d.callback;
        if (typeof U == "function") {
          (d.callback = null), (v = d.priorityLevel);
          var H = U(d.expirationTime <= N);
          (N = e.unstable_now()),
            typeof H == "function" ? (d.callback = H) : d === n(u) && r(u),
            g(N);
        } else r(u);
        d = n(u);
      }
      if (d !== null) var vn = !0;
      else {
        var Xe = n(c);
        Xe !== null && gn(S, Xe.startTime - N), (vn = !1);
      }
      return vn;
    } finally {
      (d = null), (v = z), (w = !1);
    }
  }
  var k = !1,
    P = null,
    A = -1,
    I = 5,
    b = -1;
  function ye() {
    return !(e.unstable_now() - b < I);
  }
  function hn() {
    if (P !== null) {
      var T = e.unstable_now();
      b = T;
      var N = !0;
      try {
        N = P(!0, T);
      } finally {
        N ? mn() : ((k = !1), (P = null));
      }
    } else k = !1;
  }
  var mn;
  if (typeof p == "function")
    mn = function () {
      p(hn);
    };
  else if (typeof MessageChannel < "u") {
    var Fo = new MessageChannel(),
      Ys = Fo.port2;
    (Fo.port1.onmessage = hn),
      (mn = function () {
        Ys.postMessage(null);
      });
  } else
    mn = function () {
      j(hn, 0);
    };
  function Ar(T) {
    (P = T), k || ((k = !0), mn());
  }
  function gn(T, N) {
    A = j(function () {
      T(e.unstable_now());
    }, N);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (T) {
      T.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || w || ((y = !0), Ar(E));
    }),
    (e.unstable_forceFrameRate = function (T) {
      0 > T || 125 < T
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (I = 0 < T ? Math.floor(1e3 / T) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return v;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (T) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var N = 3;
          break;
        default:
          N = v;
      }
      var z = v;
      v = N;
      try {
        return T();
      } finally {
        v = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (T, N) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var z = v;
      v = T;
      try {
        return N();
      } finally {
        v = z;
      }
    }),
    (e.unstable_scheduleCallback = function (T, N, z) {
      var U = e.unstable_now();
      switch (
        (typeof z == "object" && z !== null
          ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? U + z : U))
          : (z = U),
        T)
      ) {
        case 1:
          var H = -1;
          break;
        case 2:
          H = 250;
          break;
        case 5:
          H = 1073741823;
          break;
        case 4:
          H = 1e4;
          break;
        default:
          H = 5e3;
      }
      return (
        (H = z + H),
        (T = {
          id: f++,
          callback: N,
          priorityLevel: T,
          startTime: z,
          expirationTime: H,
          sortIndex: -1,
        }),
        z > U
          ? ((T.sortIndex = z),
            t(c, T),
            n(u) === null &&
              T === n(c) &&
              (x ? (m(A), (A = -1)) : (x = !0), gn(S, z - U)))
          : ((T.sortIndex = H), t(u, T), y || w || ((y = !0), Ar(E))),
        T
      );
    }),
    (e.unstable_shouldYield = ye),
    (e.unstable_wrapCallback = function (T) {
      var N = v;
      return function () {
        var z = v;
        v = N;
        try {
          return T.apply(this, arguments);
        } finally {
          v = z;
        }
      };
    });
})(ip);
op.exports = ip;
var sm = op.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sp = _,
  $e = sm;
function R(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var lp = new Set(),
  ro = {};
function Dn(e, t) {
  lr(e, t), lr(e + "Capture", t);
}
function lr(e, t) {
  for (ro[e] = t, e = 0; e < t.length; e++) lp.add(t[e]);
}
var Pt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ql = Object.prototype.hasOwnProperty,
  lm =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ic = {},
  Fc = {};
function am(e) {
  return Ql.call(Fc, e)
    ? !0
    : Ql.call(Ic, e)
    ? !1
    : lm.test(e)
    ? (Fc[e] = !0)
    : ((Ic[e] = !0), !1);
}
function um(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function cm(e, t, n, r) {
  if (t === null || typeof t > "u" || um(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ee(e, t, n, r, o, i, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s);
}
var pe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    pe[e] = new Ee(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  pe[t] = new Ee(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  pe[e] = new Ee(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  pe[e] = new Ee(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    pe[e] = new Ee(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  pe[e] = new Ee(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  pe[e] = new Ee(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  pe[e] = new Ee(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  pe[e] = new Ee(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var cu = /[\-:]([a-z])/g;
function du(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(cu, du);
    pe[t] = new Ee(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(cu, du);
    pe[t] = new Ee(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(cu, du);
  pe[t] = new Ee(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  pe[e] = new Ee(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
pe.xlinkHref = new Ee(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  pe[e] = new Ee(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function fu(e, t, n, r) {
  var o = pe.hasOwnProperty(t) ? pe[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (cm(t, n, o, r) && (n = null),
    r || o === null
      ? am(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Nt = sp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Bo = Symbol.for("react.element"),
  Un = Symbol.for("react.portal"),
  Hn = Symbol.for("react.fragment"),
  pu = Symbol.for("react.strict_mode"),
  Kl = Symbol.for("react.profiler"),
  ap = Symbol.for("react.provider"),
  up = Symbol.for("react.context"),
  hu = Symbol.for("react.forward_ref"),
  Gl = Symbol.for("react.suspense"),
  Jl = Symbol.for("react.suspense_list"),
  mu = Symbol.for("react.memo"),
  Ut = Symbol.for("react.lazy"),
  cp = Symbol.for("react.offscreen"),
  $c = Symbol.iterator;
function Or(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = ($c && e[$c]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var X = Object.assign,
  tl;
function Br(e) {
  if (tl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      tl = (t && t[1]) || "";
    }
  return (
    `
` +
    tl +
    e
  );
}
var nl = !1;
function rl(e, t) {
  if (!e || nl) return "";
  nl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var o = c.stack.split(`
`),
          i = r.stack.split(`
`),
          s = o.length - 1,
          l = i.length - 1;
        1 <= s && 0 <= l && o[s] !== i[l];

      )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (o[s] !== i[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || o[s] !== i[l])) {
                var u =
                  `
` + o[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    (nl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Br(e) : "";
}
function dm(e) {
  switch (e.tag) {
    case 5:
      return Br(e.type);
    case 16:
      return Br("Lazy");
    case 13:
      return Br("Suspense");
    case 19:
      return Br("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = rl(e.type, !1)), e;
    case 11:
      return (e = rl(e.type.render, !1)), e;
    case 1:
      return (e = rl(e.type, !0)), e;
    default:
      return "";
  }
}
function ql(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Hn:
      return "Fragment";
    case Un:
      return "Portal";
    case Kl:
      return "Profiler";
    case pu:
      return "StrictMode";
    case Gl:
      return "Suspense";
    case Jl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case up:
        return (e.displayName || "Context") + ".Consumer";
      case ap:
        return (e._context.displayName || "Context") + ".Provider";
      case hu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case mu:
        return (
          (t = e.displayName || null), t !== null ? t : ql(e.type) || "Memo"
        );
      case Ut:
        (t = e._payload), (e = e._init);
        try {
          return ql(e(t));
        } catch {}
    }
  return null;
}
function fm(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ql(t);
    case 8:
      return t === pu ? "StrictMode" : "Mode";
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
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function sn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function dp(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function pm(e) {
  var t = dp(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          (r = "" + s), i.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Uo(e) {
  e._valueTracker || (e._valueTracker = pm(e));
}
function fp(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = dp(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function zi(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Yl(e, t) {
  var n = t.checked;
  return X({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Mc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = sn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function pp(e, t) {
  (t = t.checked), t != null && fu(e, "checked", t, !1);
}
function Xl(e, t) {
  pp(e, t);
  var n = sn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Zl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Zl(e, t.type, sn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Bc(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Zl(e, t, n) {
  (t !== "number" || zi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ur = Array.isArray;
function tr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + sn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function ea(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(R(91));
  return X({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Uc(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(R(92));
      if (Ur(n)) {
        if (1 < n.length) throw Error(R(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: sn(n) };
}
function hp(e, t) {
  var n = sn(t.value),
    r = sn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Hc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function mp(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ta(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? mp(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Ho,
  gp = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Ho = Ho || document.createElement("div"),
          Ho.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ho.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function oo(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Kr = {
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
  hm = ["Webkit", "ms", "Moz", "O"];
Object.keys(Kr).forEach(function (e) {
  hm.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Kr[t] = Kr[e]);
  });
});
function vp(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Kr.hasOwnProperty(e) && Kr[e])
    ? ("" + t).trim()
    : t + "px";
}
function yp(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = vp(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var mm = X(
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
function na(e, t) {
  if (t) {
    if (mm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(R(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(R(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(R(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(R(62));
  }
}
function ra(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
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
var oa = null;
function gu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ia = null,
  nr = null,
  rr = null;
function Vc(e) {
  if ((e = To(e))) {
    if (typeof ia != "function") throw Error(R(280));
    var t = e.stateNode;
    t && ((t = Cs(t)), ia(e.stateNode, e.type, t));
  }
}
function xp(e) {
  nr ? (rr ? rr.push(e) : (rr = [e])) : (nr = e);
}
function wp() {
  if (nr) {
    var e = nr,
      t = rr;
    if (((rr = nr = null), Vc(e), t)) for (e = 0; e < t.length; e++) Vc(t[e]);
  }
}
function Sp(e, t) {
  return e(t);
}
function jp() {}
var ol = !1;
function Cp(e, t, n) {
  if (ol) return e(t, n);
  ol = !0;
  try {
    return Sp(e, t, n);
  } finally {
    (ol = !1), (nr !== null || rr !== null) && (jp(), wp());
  }
}
function io(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Cs(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(R(231, t, typeof n));
  return n;
}
var sa = !1;
if (Pt)
  try {
    var Nr = {};
    Object.defineProperty(Nr, "passive", {
      get: function () {
        sa = !0;
      },
    }),
      window.addEventListener("test", Nr, Nr),
      window.removeEventListener("test", Nr, Nr);
  } catch {
    sa = !1;
  }
function gm(e, t, n, r, o, i, s, l, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (f) {
    this.onError(f);
  }
}
var Gr = !1,
  Li = null,
  bi = !1,
  la = null,
  vm = {
    onError: function (e) {
      (Gr = !0), (Li = e);
    },
  };
function ym(e, t, n, r, o, i, s, l, u) {
  (Gr = !1), (Li = null), gm.apply(vm, arguments);
}
function xm(e, t, n, r, o, i, s, l, u) {
  if ((ym.apply(this, arguments), Gr)) {
    if (Gr) {
      var c = Li;
      (Gr = !1), (Li = null);
    } else throw Error(R(198));
    bi || ((bi = !0), (la = c));
  }
}
function In(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Ep(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Wc(e) {
  if (In(e) !== e) throw Error(R(188));
}
function wm(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = In(e)), t === null)) throw Error(R(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Wc(o), e;
        if (i === r) return Wc(o), t;
        i = i.sibling;
      }
      throw Error(R(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var s = !1, l = o.child; l; ) {
        if (l === n) {
          (s = !0), (n = o), (r = i);
          break;
        }
        if (l === r) {
          (s = !0), (r = o), (n = i);
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = i.child; l; ) {
          if (l === n) {
            (s = !0), (n = i), (r = o);
            break;
          }
          if (l === r) {
            (s = !0), (r = i), (n = o);
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(R(189));
      }
    }
    if (n.alternate !== r) throw Error(R(190));
  }
  if (n.tag !== 3) throw Error(R(188));
  return n.stateNode.current === n ? e : t;
}
function kp(e) {
  return (e = wm(e)), e !== null ? Pp(e) : null;
}
function Pp(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Pp(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var _p = $e.unstable_scheduleCallback,
  Qc = $e.unstable_cancelCallback,
  Sm = $e.unstable_shouldYield,
  jm = $e.unstable_requestPaint,
  ee = $e.unstable_now,
  Cm = $e.unstable_getCurrentPriorityLevel,
  vu = $e.unstable_ImmediatePriority,
  Rp = $e.unstable_UserBlockingPriority,
  Di = $e.unstable_NormalPriority,
  Em = $e.unstable_LowPriority,
  Ap = $e.unstable_IdlePriority,
  xs = null,
  pt = null;
function km(e) {
  if (pt && typeof pt.onCommitFiberRoot == "function")
    try {
      pt.onCommitFiberRoot(xs, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var ot = Math.clz32 ? Math.clz32 : Rm,
  Pm = Math.log,
  _m = Math.LN2;
function Rm(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Pm(e) / _m) | 0)) | 0;
}
var Vo = 64,
  Wo = 4194304;
function Hr(e) {
  switch (e & -e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ii(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var l = s & ~o;
    l !== 0 ? (r = Hr(l)) : ((i &= s), i !== 0 && (r = Hr(i)));
  } else (s = n & ~o), s !== 0 ? (r = Hr(s)) : i !== 0 && (r = Hr(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - ot(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function Am(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
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
      return t + 5e3;
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
function Tm(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var s = 31 - ot(i),
      l = 1 << s,
      u = o[s];
    u === -1
      ? (!(l & n) || l & r) && (o[s] = Am(l, t))
      : u <= t && (e.expiredLanes |= l),
      (i &= ~l);
  }
}
function aa(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Tp() {
  var e = Vo;
  return (Vo <<= 1), !(Vo & 4194240) && (Vo = 64), e;
}
function il(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ro(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - ot(t)),
    (e[t] = n);
}
function Om(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - ot(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function yu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - ot(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var B = 0;
function Op(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Np,
  xu,
  zp,
  Lp,
  bp,
  ua = !1,
  Qo = [],
  qt = null,
  Yt = null,
  Xt = null,
  so = new Map(),
  lo = new Map(),
  Vt = [],
  Nm =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Kc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      qt = null;
      break;
    case "dragenter":
    case "dragleave":
      Yt = null;
      break;
    case "mouseover":
    case "mouseout":
      Xt = null;
      break;
    case "pointerover":
    case "pointerout":
      so.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      lo.delete(t.pointerId);
  }
}
function zr(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = To(t)), t !== null && xu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function zm(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (qt = zr(qt, e, t, n, r, o)), !0;
    case "dragenter":
      return (Yt = zr(Yt, e, t, n, r, o)), !0;
    case "mouseover":
      return (Xt = zr(Xt, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return so.set(i, zr(so.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), lo.set(i, zr(lo.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function Dp(e) {
  var t = jn(e.target);
  if (t !== null) {
    var n = In(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ep(n)), t !== null)) {
          (e.blockedOn = t),
            bp(e.priority, function () {
              zp(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function mi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ca(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (oa = r), n.target.dispatchEvent(r), (oa = null);
    } else return (t = To(n)), t !== null && xu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Gc(e, t, n) {
  mi(e) && n.delete(t);
}
function Lm() {
  (ua = !1),
    qt !== null && mi(qt) && (qt = null),
    Yt !== null && mi(Yt) && (Yt = null),
    Xt !== null && mi(Xt) && (Xt = null),
    so.forEach(Gc),
    lo.forEach(Gc);
}
function Lr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ua ||
      ((ua = !0),
      $e.unstable_scheduleCallback($e.unstable_NormalPriority, Lm)));
}
function ao(e) {
  function t(o) {
    return Lr(o, e);
  }
  if (0 < Qo.length) {
    Lr(Qo[0], e);
    for (var n = 1; n < Qo.length; n++) {
      var r = Qo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    qt !== null && Lr(qt, e),
      Yt !== null && Lr(Yt, e),
      Xt !== null && Lr(Xt, e),
      so.forEach(t),
      lo.forEach(t),
      n = 0;
    n < Vt.length;
    n++
  )
    (r = Vt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Vt.length && ((n = Vt[0]), n.blockedOn === null); )
    Dp(n), n.blockedOn === null && Vt.shift();
}
var or = Nt.ReactCurrentBatchConfig,
  Fi = !0;
function bm(e, t, n, r) {
  var o = B,
    i = or.transition;
  or.transition = null;
  try {
    (B = 1), wu(e, t, n, r);
  } finally {
    (B = o), (or.transition = i);
  }
}
function Dm(e, t, n, r) {
  var o = B,
    i = or.transition;
  or.transition = null;
  try {
    (B = 4), wu(e, t, n, r);
  } finally {
    (B = o), (or.transition = i);
  }
}
function wu(e, t, n, r) {
  if (Fi) {
    var o = ca(e, t, n, r);
    if (o === null) ml(e, t, r, $i, n), Kc(e, r);
    else if (zm(o, e, t, n, r)) r.stopPropagation();
    else if ((Kc(e, r), t & 4 && -1 < Nm.indexOf(e))) {
      for (; o !== null; ) {
        var i = To(o);
        if (
          (i !== null && Np(i),
          (i = ca(e, t, n, r)),
          i === null && ml(e, t, r, $i, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else ml(e, t, r, null, n);
  }
}
var $i = null;
function ca(e, t, n, r) {
  if ((($i = null), (e = gu(r)), (e = jn(e)), e !== null))
    if (((t = In(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Ep(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ($i = e), null;
}
function Ip(e) {
  switch (e) {
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
      switch (Cm()) {
        case vu:
          return 1;
        case Rp:
          return 4;
        case Di:
        case Em:
          return 16;
        case Ap:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Qt = null,
  Su = null,
  gi = null;
function Fp() {
  if (gi) return gi;
  var e,
    t = Su,
    n = t.length,
    r,
    o = "value" in Qt ? Qt.value : Qt.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (gi = o.slice(e, 1 < r ? 1 - r : void 0));
}
function vi(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ko() {
  return !0;
}
function Jc() {
  return !1;
}
function He(e) {
  function t(n, r, o, i, s) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(i) : i[l]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Ko
        : Jc),
      (this.isPropagationStopped = Jc),
      this
    );
  }
  return (
    X(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ko));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ko));
      },
      persist: function () {},
      isPersistent: Ko,
    }),
    t
  );
}
var Cr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ju = He(Cr),
  Ao = X({}, Cr, { view: 0, detail: 0 }),
  Im = He(Ao),
  sl,
  ll,
  br,
  ws = X({}, Ao, {
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
    getModifierState: Cu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== br &&
            (br && e.type === "mousemove"
              ? ((sl = e.screenX - br.screenX), (ll = e.screenY - br.screenY))
              : (ll = sl = 0),
            (br = e)),
          sl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ll;
    },
  }),
  qc = He(ws),
  Fm = X({}, ws, { dataTransfer: 0 }),
  $m = He(Fm),
  Mm = X({}, Ao, { relatedTarget: 0 }),
  al = He(Mm),
  Bm = X({}, Cr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Um = He(Bm),
  Hm = X({}, Cr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Vm = He(Hm),
  Wm = X({}, Cr, { data: 0 }),
  Yc = He(Wm),
  Qm = {
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
  Km = {
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
  Gm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Jm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Gm[e]) ? !!t[e] : !1;
}
function Cu() {
  return Jm;
}
var qm = X({}, Ao, {
    key: function (e) {
      if (e.key) {
        var t = Qm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = vi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Km[e.keyCode] || "Unidentified"
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
    getModifierState: Cu,
    charCode: function (e) {
      return e.type === "keypress" ? vi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? vi(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Ym = He(qm),
  Xm = X({}, ws, {
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
  Xc = He(Xm),
  Zm = X({}, Ao, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Cu,
  }),
  eg = He(Zm),
  tg = X({}, Cr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ng = He(tg),
  rg = X({}, ws, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  og = He(rg),
  ig = [9, 13, 27, 32],
  Eu = Pt && "CompositionEvent" in window,
  Jr = null;
Pt && "documentMode" in document && (Jr = document.documentMode);
var sg = Pt && "TextEvent" in window && !Jr,
  $p = Pt && (!Eu || (Jr && 8 < Jr && 11 >= Jr)),
  Zc = " ",
  ed = !1;
function Mp(e, t) {
  switch (e) {
    case "keyup":
      return ig.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Bp(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Vn = !1;
function lg(e, t) {
  switch (e) {
    case "compositionend":
      return Bp(t);
    case "keypress":
      return t.which !== 32 ? null : ((ed = !0), Zc);
    case "textInput":
      return (e = t.data), e === Zc && ed ? null : e;
    default:
      return null;
  }
}
function ag(e, t) {
  if (Vn)
    return e === "compositionend" || (!Eu && Mp(e, t))
      ? ((e = Fp()), (gi = Su = Qt = null), (Vn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return $p && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var ug = {
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
function td(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!ug[e.type] : t === "textarea";
}
function Up(e, t, n, r) {
  xp(r),
    (t = Mi(t, "onChange")),
    0 < t.length &&
      ((n = new ju("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var qr = null,
  uo = null;
function cg(e) {
  Zp(e, 0);
}
function Ss(e) {
  var t = Kn(e);
  if (fp(t)) return e;
}
function dg(e, t) {
  if (e === "change") return t;
}
var Hp = !1;
if (Pt) {
  var ul;
  if (Pt) {
    var cl = "oninput" in document;
    if (!cl) {
      var nd = document.createElement("div");
      nd.setAttribute("oninput", "return;"),
        (cl = typeof nd.oninput == "function");
    }
    ul = cl;
  } else ul = !1;
  Hp = ul && (!document.documentMode || 9 < document.documentMode);
}
function rd() {
  qr && (qr.detachEvent("onpropertychange", Vp), (uo = qr = null));
}
function Vp(e) {
  if (e.propertyName === "value" && Ss(uo)) {
    var t = [];
    Up(t, uo, e, gu(e)), Cp(cg, t);
  }
}
function fg(e, t, n) {
  e === "focusin"
    ? (rd(), (qr = t), (uo = n), qr.attachEvent("onpropertychange", Vp))
    : e === "focusout" && rd();
}
function pg(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ss(uo);
}
function hg(e, t) {
  if (e === "click") return Ss(t);
}
function mg(e, t) {
  if (e === "input" || e === "change") return Ss(t);
}
function gg(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var lt = typeof Object.is == "function" ? Object.is : gg;
function co(e, t) {
  if (lt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Ql.call(t, o) || !lt(e[o], t[o])) return !1;
  }
  return !0;
}
function od(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function id(e, t) {
  var n = od(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
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
    n = od(n);
  }
}
function Wp(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Wp(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Qp() {
  for (var e = window, t = zi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = zi(e.document);
  }
  return t;
}
function ku(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function vg(e) {
  var t = Qp(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Wp(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ku(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = id(n, i));
        var s = id(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var yg = Pt && "documentMode" in document && 11 >= document.documentMode,
  Wn = null,
  da = null,
  Yr = null,
  fa = !1;
function sd(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  fa ||
    Wn == null ||
    Wn !== zi(r) ||
    ((r = Wn),
    "selectionStart" in r && ku(r)
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
    (Yr && co(Yr, r)) ||
      ((Yr = r),
      (r = Mi(da, "onSelect")),
      0 < r.length &&
        ((t = new ju("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Wn))));
}
function Go(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Qn = {
    animationend: Go("Animation", "AnimationEnd"),
    animationiteration: Go("Animation", "AnimationIteration"),
    animationstart: Go("Animation", "AnimationStart"),
    transitionend: Go("Transition", "TransitionEnd"),
  },
  dl = {},
  Kp = {};
Pt &&
  ((Kp = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Qn.animationend.animation,
    delete Qn.animationiteration.animation,
    delete Qn.animationstart.animation),
  "TransitionEvent" in window || delete Qn.transitionend.transition);
function js(e) {
  if (dl[e]) return dl[e];
  if (!Qn[e]) return e;
  var t = Qn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Kp) return (dl[e] = t[n]);
  return e;
}
var Gp = js("animationend"),
  Jp = js("animationiteration"),
  qp = js("animationstart"),
  Yp = js("transitionend"),
  Xp = new Map(),
  ld =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function cn(e, t) {
  Xp.set(e, t), Dn(t, [e]);
}
for (var fl = 0; fl < ld.length; fl++) {
  var pl = ld[fl],
    xg = pl.toLowerCase(),
    wg = pl[0].toUpperCase() + pl.slice(1);
  cn(xg, "on" + wg);
}
cn(Gp, "onAnimationEnd");
cn(Jp, "onAnimationIteration");
cn(qp, "onAnimationStart");
cn("dblclick", "onDoubleClick");
cn("focusin", "onFocus");
cn("focusout", "onBlur");
cn(Yp, "onTransitionEnd");
lr("onMouseEnter", ["mouseout", "mouseover"]);
lr("onMouseLeave", ["mouseout", "mouseover"]);
lr("onPointerEnter", ["pointerout", "pointerover"]);
lr("onPointerLeave", ["pointerout", "pointerover"]);
Dn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Dn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Dn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Dn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Dn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Dn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Vr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  Sg = new Set("cancel close invalid load scroll toggle".split(" ").concat(Vr));
function ad(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), xm(r, t, void 0, e), (e.currentTarget = null);
}
function Zp(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            u = l.instance,
            c = l.currentTarget;
          if (((l = l.listener), u !== i && o.isPropagationStopped())) break e;
          ad(o, l, c), (i = u);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]),
            (u = l.instance),
            (c = l.currentTarget),
            (l = l.listener),
            u !== i && o.isPropagationStopped())
          )
            break e;
          ad(o, l, c), (i = u);
        }
    }
  }
  if (bi) throw ((e = la), (bi = !1), (la = null), e);
}
function Q(e, t) {
  var n = t[va];
  n === void 0 && (n = t[va] = new Set());
  var r = e + "__bubble";
  n.has(r) || (eh(t, e, 2, !1), n.add(r));
}
function hl(e, t, n) {
  var r = 0;
  t && (r |= 4), eh(n, e, r, t);
}
var Jo = "_reactListening" + Math.random().toString(36).slice(2);
function fo(e) {
  if (!e[Jo]) {
    (e[Jo] = !0),
      lp.forEach(function (n) {
        n !== "selectionchange" && (Sg.has(n) || hl(n, !1, e), hl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Jo] || ((t[Jo] = !0), hl("selectionchange", !1, t));
  }
}
function eh(e, t, n, r) {
  switch (Ip(t)) {
    case 1:
      var o = bm;
      break;
    case 4:
      o = Dm;
      break;
    default:
      o = wu;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !sa ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function ml(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo;
        if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var u = s.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = s.stateNode.containerInfo),
              u === o || (u.nodeType === 8 && u.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; l !== null; ) {
          if (((s = jn(l)), s === null)) return;
          if (((u = s.tag), u === 5 || u === 6)) {
            r = i = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Cp(function () {
    var c = i,
      f = gu(n),
      d = [];
    e: {
      var v = Xp.get(e);
      if (v !== void 0) {
        var w = ju,
          y = e;
        switch (e) {
          case "keypress":
            if (vi(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = Ym;
            break;
          case "focusin":
            (y = "focus"), (w = al);
            break;
          case "focusout":
            (y = "blur"), (w = al);
            break;
          case "beforeblur":
          case "afterblur":
            w = al;
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
            w = qc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = $m;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = eg;
            break;
          case Gp:
          case Jp:
          case qp:
            w = Um;
            break;
          case Yp:
            w = ng;
            break;
          case "scroll":
            w = Im;
            break;
          case "wheel":
            w = og;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = Vm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = Xc;
        }
        var x = (t & 4) !== 0,
          j = !x && e === "scroll",
          m = x ? (v !== null ? v + "Capture" : null) : v;
        x = [];
        for (var p = c, g; p !== null; ) {
          g = p;
          var S = g.stateNode;
          if (
            (g.tag === 5 &&
              S !== null &&
              ((g = S),
              m !== null && ((S = io(p, m)), S != null && x.push(po(p, S, g)))),
            j)
          )
            break;
          p = p.return;
        }
        0 < x.length &&
          ((v = new w(v, y, null, n, f)), d.push({ event: v, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((v = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          v &&
            n !== oa &&
            (y = n.relatedTarget || n.fromElement) &&
            (jn(y) || y[_t]))
        )
          break e;
        if (
          (w || v) &&
          ((v =
            f.window === f
              ? f
              : (v = f.ownerDocument)
              ? v.defaultView || v.parentWindow
              : window),
          w
            ? ((y = n.relatedTarget || n.toElement),
              (w = c),
              (y = y ? jn(y) : null),
              y !== null &&
                ((j = In(y)), y !== j || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((w = null), (y = c)),
          w !== y)
        ) {
          if (
            ((x = qc),
            (S = "onMouseLeave"),
            (m = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = Xc),
              (S = "onPointerLeave"),
              (m = "onPointerEnter"),
              (p = "pointer")),
            (j = w == null ? v : Kn(w)),
            (g = y == null ? v : Kn(y)),
            (v = new x(S, p + "leave", w, n, f)),
            (v.target = j),
            (v.relatedTarget = g),
            (S = null),
            jn(f) === c &&
              ((x = new x(m, p + "enter", y, n, f)),
              (x.target = g),
              (x.relatedTarget = j),
              (S = x)),
            (j = S),
            w && y)
          )
            t: {
              for (x = w, m = y, p = 0, g = x; g; g = $n(g)) p++;
              for (g = 0, S = m; S; S = $n(S)) g++;
              for (; 0 < p - g; ) (x = $n(x)), p--;
              for (; 0 < g - p; ) (m = $n(m)), g--;
              for (; p--; ) {
                if (x === m || (m !== null && x === m.alternate)) break t;
                (x = $n(x)), (m = $n(m));
              }
              x = null;
            }
          else x = null;
          w !== null && ud(d, v, w, x, !1),
            y !== null && j !== null && ud(d, j, y, x, !0);
        }
      }
      e: {
        if (
          ((v = c ? Kn(c) : window),
          (w = v.nodeName && v.nodeName.toLowerCase()),
          w === "select" || (w === "input" && v.type === "file"))
        )
          var E = dg;
        else if (td(v))
          if (Hp) E = mg;
          else {
            E = pg;
            var k = fg;
          }
        else
          (w = v.nodeName) &&
            w.toLowerCase() === "input" &&
            (v.type === "checkbox" || v.type === "radio") &&
            (E = hg);
        if (E && (E = E(e, c))) {
          Up(d, E, n, f);
          break e;
        }
        k && k(e, v, c),
          e === "focusout" &&
            (k = v._wrapperState) &&
            k.controlled &&
            v.type === "number" &&
            Zl(v, "number", v.value);
      }
      switch (((k = c ? Kn(c) : window), e)) {
        case "focusin":
          (td(k) || k.contentEditable === "true") &&
            ((Wn = k), (da = c), (Yr = null));
          break;
        case "focusout":
          Yr = da = Wn = null;
          break;
        case "mousedown":
          fa = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (fa = !1), sd(d, n, f);
          break;
        case "selectionchange":
          if (yg) break;
        case "keydown":
        case "keyup":
          sd(d, n, f);
      }
      var P;
      if (Eu)
        e: {
          switch (e) {
            case "compositionstart":
              var A = "onCompositionStart";
              break e;
            case "compositionend":
              A = "onCompositionEnd";
              break e;
            case "compositionupdate":
              A = "onCompositionUpdate";
              break e;
          }
          A = void 0;
        }
      else
        Vn
          ? Mp(e, n) && (A = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (A = "onCompositionStart");
      A &&
        ($p &&
          n.locale !== "ko" &&
          (Vn || A !== "onCompositionStart"
            ? A === "onCompositionEnd" && Vn && (P = Fp())
            : ((Qt = f),
              (Su = "value" in Qt ? Qt.value : Qt.textContent),
              (Vn = !0))),
        (k = Mi(c, A)),
        0 < k.length &&
          ((A = new Yc(A, e, null, n, f)),
          d.push({ event: A, listeners: k }),
          P ? (A.data = P) : ((P = Bp(n)), P !== null && (A.data = P)))),
        (P = sg ? lg(e, n) : ag(e, n)) &&
          ((c = Mi(c, "onBeforeInput")),
          0 < c.length &&
            ((f = new Yc("onBeforeInput", "beforeinput", null, n, f)),
            d.push({ event: f, listeners: c }),
            (f.data = P)));
    }
    Zp(d, t);
  });
}
function po(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Mi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = io(e, n)),
      i != null && r.unshift(po(e, i, o)),
      (i = io(e, t)),
      i != null && r.push(po(e, i, o))),
      (e = e.return);
  }
  return r;
}
function $n(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ud(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      u = l.alternate,
      c = l.stateNode;
    if (u !== null && u === r) break;
    l.tag === 5 &&
      c !== null &&
      ((l = c),
      o
        ? ((u = io(n, i)), u != null && s.unshift(po(n, u, l)))
        : o || ((u = io(n, i)), u != null && s.push(po(n, u, l)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var jg = /\r\n?/g,
  Cg = /\u0000|\uFFFD/g;
function cd(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      jg,
      `
`,
    )
    .replace(Cg, "");
}
function qo(e, t, n) {
  if (((t = cd(t)), cd(e) !== t && n)) throw Error(R(425));
}
function Bi() {}
var pa = null,
  ha = null;
function ma(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var ga = typeof setTimeout == "function" ? setTimeout : void 0,
  Eg = typeof clearTimeout == "function" ? clearTimeout : void 0,
  dd = typeof Promise == "function" ? Promise : void 0,
  kg =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof dd < "u"
      ? function (e) {
          return dd.resolve(null).then(e).catch(Pg);
        }
      : ga;
function Pg(e) {
  setTimeout(function () {
    throw e;
  });
}
function gl(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), ao(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  ao(t);
}
function Zt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function fd(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Er = Math.random().toString(36).slice(2),
  dt = "__reactFiber$" + Er,
  ho = "__reactProps$" + Er,
  _t = "__reactContainer$" + Er,
  va = "__reactEvents$" + Er,
  _g = "__reactListeners$" + Er,
  Rg = "__reactHandles$" + Er;
function jn(e) {
  var t = e[dt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[_t] || n[dt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = fd(e); e !== null; ) {
          if ((n = e[dt])) return n;
          e = fd(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function To(e) {
  return (
    (e = e[dt] || e[_t]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Kn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(R(33));
}
function Cs(e) {
  return e[ho] || null;
}
var ya = [],
  Gn = -1;
function dn(e) {
  return { current: e };
}
function G(e) {
  0 > Gn || ((e.current = ya[Gn]), (ya[Gn] = null), Gn--);
}
function V(e, t) {
  Gn++, (ya[Gn] = e.current), (e.current = t);
}
var ln = {},
  ve = dn(ln),
  Ae = dn(!1),
  Tn = ln;
function ar(e, t) {
  var n = e.type.contextTypes;
  if (!n) return ln;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Te(e) {
  return (e = e.childContextTypes), e != null;
}
function Ui() {
  G(Ae), G(ve);
}
function pd(e, t, n) {
  if (ve.current !== ln) throw Error(R(168));
  V(ve, t), V(Ae, n);
}
function th(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(R(108, fm(e) || "Unknown", o));
  return X({}, n, r);
}
function Hi(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || ln),
    (Tn = ve.current),
    V(ve, e),
    V(Ae, Ae.current),
    !0
  );
}
function hd(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(R(169));
  n
    ? ((e = th(e, t, Tn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      G(Ae),
      G(ve),
      V(ve, e))
    : G(Ae),
    V(Ae, n);
}
var xt = null,
  Es = !1,
  vl = !1;
function nh(e) {
  xt === null ? (xt = [e]) : xt.push(e);
}
function Ag(e) {
  (Es = !0), nh(e);
}
function fn() {
  if (!vl && xt !== null) {
    vl = !0;
    var e = 0,
      t = B;
    try {
      var n = xt;
      for (B = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (xt = null), (Es = !1);
    } catch (o) {
      throw (xt !== null && (xt = xt.slice(e + 1)), _p(vu, fn), o);
    } finally {
      (B = t), (vl = !1);
    }
  }
  return null;
}
var Jn = [],
  qn = 0,
  Vi = null,
  Wi = 0,
  Ve = [],
  We = 0,
  On = null,
  St = 1,
  jt = "";
function xn(e, t) {
  (Jn[qn++] = Wi), (Jn[qn++] = Vi), (Vi = e), (Wi = t);
}
function rh(e, t, n) {
  (Ve[We++] = St), (Ve[We++] = jt), (Ve[We++] = On), (On = e);
  var r = St;
  e = jt;
  var o = 32 - ot(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - ot(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    (i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (St = (1 << (32 - ot(t) + o)) | (n << o) | r),
      (jt = i + e);
  } else (St = (1 << i) | (n << o) | r), (jt = e);
}
function Pu(e) {
  e.return !== null && (xn(e, 1), rh(e, 1, 0));
}
function _u(e) {
  for (; e === Vi; )
    (Vi = Jn[--qn]), (Jn[qn] = null), (Wi = Jn[--qn]), (Jn[qn] = null);
  for (; e === On; )
    (On = Ve[--We]),
      (Ve[We] = null),
      (jt = Ve[--We]),
      (Ve[We] = null),
      (St = Ve[--We]),
      (Ve[We] = null);
}
var Fe = null,
  De = null,
  J = !1,
  nt = null;
function oh(e, t) {
  var n = Qe(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function md(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Fe = e), (De = Zt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Fe = e), (De = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = On !== null ? { id: St, overflow: jt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Qe(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Fe = e),
            (De = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function xa(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function wa(e) {
  if (J) {
    var t = De;
    if (t) {
      var n = t;
      if (!md(e, t)) {
        if (xa(e)) throw Error(R(418));
        t = Zt(n.nextSibling);
        var r = Fe;
        t && md(e, t)
          ? oh(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (J = !1), (Fe = e));
      }
    } else {
      if (xa(e)) throw Error(R(418));
      (e.flags = (e.flags & -4097) | 2), (J = !1), (Fe = e);
    }
  }
}
function gd(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Fe = e;
}
function Yo(e) {
  if (e !== Fe) return !1;
  if (!J) return gd(e), (J = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ma(e.type, e.memoizedProps))),
    t && (t = De))
  ) {
    if (xa(e)) throw (ih(), Error(R(418)));
    for (; t; ) oh(e, t), (t = Zt(t.nextSibling));
  }
  if ((gd(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(R(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              De = Zt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      De = null;
    }
  } else De = Fe ? Zt(e.stateNode.nextSibling) : null;
  return !0;
}
function ih() {
  for (var e = De; e; ) e = Zt(e.nextSibling);
}
function ur() {
  (De = Fe = null), (J = !1);
}
function Ru(e) {
  nt === null ? (nt = [e]) : nt.push(e);
}
var Tg = Nt.ReactCurrentBatchConfig;
function et(e, t) {
  if (e && e.defaultProps) {
    (t = X({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Qi = dn(null),
  Ki = null,
  Yn = null,
  Au = null;
function Tu() {
  Au = Yn = Ki = null;
}
function Ou(e) {
  var t = Qi.current;
  G(Qi), (e._currentValue = t);
}
function Sa(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function ir(e, t) {
  (Ki = e),
    (Au = Yn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (_e = !0), (e.firstContext = null));
}
function Je(e) {
  var t = e._currentValue;
  if (Au !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Yn === null)) {
      if (Ki === null) throw Error(R(308));
      (Yn = e), (Ki.dependencies = { lanes: 0, firstContext: e });
    } else Yn = Yn.next = e;
  return t;
}
var Cn = null;
function Nu(e) {
  Cn === null ? (Cn = [e]) : Cn.push(e);
}
function sh(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Nu(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Rt(e, r)
  );
}
function Rt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Ht = !1;
function zu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function lh(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ct(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function en(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), $ & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Rt(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Nu(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Rt(e, n)
  );
}
function yi(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), yu(e, n);
  }
}
function vd(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Gi(e, t, n, r) {
  var o = e.updateQueue;
  Ht = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var u = l,
      c = u.next;
    (u.next = null), s === null ? (i = c) : (s.next = c), (s = u);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (l = f.lastBaseUpdate),
      l !== s &&
        (l === null ? (f.firstBaseUpdate = c) : (l.next = c),
        (f.lastBaseUpdate = u)));
  }
  if (i !== null) {
    var d = o.baseState;
    (s = 0), (f = c = u = null), (l = i);
    do {
      var v = l.lane,
        w = l.eventTime;
      if ((r & v) === v) {
        f !== null &&
          (f = f.next =
            {
              eventTime: w,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var y = e,
            x = l;
          switch (((v = t), (w = n), x.tag)) {
            case 1:
              if (((y = x.payload), typeof y == "function")) {
                d = y.call(w, d, v);
                break e;
              }
              d = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = x.payload),
                (v = typeof y == "function" ? y.call(w, d, v) : y),
                v == null)
              )
                break e;
              d = X({}, d, v);
              break e;
            case 2:
              Ht = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (v = o.effects),
          v === null ? (o.effects = [l]) : v.push(l));
      } else
        (w = {
          eventTime: w,
          lane: v,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          f === null ? ((c = f = w), (u = d)) : (f = f.next = w),
          (s |= v);
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break;
        (v = l),
          (l = v.next),
          (v.next = null),
          (o.lastBaseUpdate = v),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (f === null && (u = d),
      (o.baseState = u),
      (o.firstBaseUpdate = c),
      (o.lastBaseUpdate = f),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (s |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (zn |= s), (e.lanes = s), (e.memoizedState = d);
  }
}
function yd(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(R(191, o));
        o.call(r);
      }
    }
}
var ah = new sp.Component().refs;
function ja(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : X({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ks = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? In(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = je(),
      o = nn(e),
      i = Ct(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = en(e, i, o)),
      t !== null && (it(t, e, o, r), yi(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = je(),
      o = nn(e),
      i = Ct(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = en(e, i, o)),
      t !== null && (it(t, e, o, r), yi(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = je(),
      r = nn(e),
      o = Ct(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = en(e, o, r)),
      t !== null && (it(t, e, r, n), yi(t, e, r));
  },
};
function xd(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !co(n, r) || !co(o, i)
      : !0
  );
}
function uh(e, t, n) {
  var r = !1,
    o = ln,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Je(i))
      : ((o = Te(t) ? Tn : ve.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? ar(e, o) : ln)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ks),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function wd(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ks.enqueueReplaceState(t, t.state, null);
}
function Ca(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = ah), zu(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = Je(i))
    : ((i = Te(t) ? Tn : ve.current), (o.context = ar(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (ja(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && ks.enqueueReplaceState(o, o.state, null),
      Gi(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Dr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(R(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(R(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var l = o.refs;
            l === ah && (l = o.refs = {}),
              s === null ? delete l[i] : (l[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(R(284));
    if (!n._owner) throw Error(R(290, e));
  }
  return e;
}
function Xo(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      R(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function Sd(e) {
  var t = e._init;
  return t(e._payload);
}
function ch(e) {
  function t(m, p) {
    if (e) {
      var g = m.deletions;
      g === null ? ((m.deletions = [p]), (m.flags |= 16)) : g.push(p);
    }
  }
  function n(m, p) {
    if (!e) return null;
    for (; p !== null; ) t(m, p), (p = p.sibling);
    return null;
  }
  function r(m, p) {
    for (m = new Map(); p !== null; )
      p.key !== null ? m.set(p.key, p) : m.set(p.index, p), (p = p.sibling);
    return m;
  }
  function o(m, p) {
    return (m = rn(m, p)), (m.index = 0), (m.sibling = null), m;
  }
  function i(m, p, g) {
    return (
      (m.index = g),
      e
        ? ((g = m.alternate),
          g !== null
            ? ((g = g.index), g < p ? ((m.flags |= 2), p) : g)
            : ((m.flags |= 2), p))
        : ((m.flags |= 1048576), p)
    );
  }
  function s(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function l(m, p, g, S) {
    return p === null || p.tag !== 6
      ? ((p = El(g, m.mode, S)), (p.return = m), p)
      : ((p = o(p, g)), (p.return = m), p);
  }
  function u(m, p, g, S) {
    var E = g.type;
    return E === Hn
      ? f(m, p, g.props.children, S, g.key)
      : p !== null &&
        (p.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === Ut &&
            Sd(E) === p.type))
      ? ((S = o(p, g.props)), (S.ref = Dr(m, p, g)), (S.return = m), S)
      : ((S = Ei(g.type, g.key, g.props, null, m.mode, S)),
        (S.ref = Dr(m, p, g)),
        (S.return = m),
        S);
  }
  function c(m, p, g, S) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== g.containerInfo ||
      p.stateNode.implementation !== g.implementation
      ? ((p = kl(g, m.mode, S)), (p.return = m), p)
      : ((p = o(p, g.children || [])), (p.return = m), p);
  }
  function f(m, p, g, S, E) {
    return p === null || p.tag !== 7
      ? ((p = _n(g, m.mode, S, E)), (p.return = m), p)
      : ((p = o(p, g)), (p.return = m), p);
  }
  function d(m, p, g) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = El("" + p, m.mode, g)), (p.return = m), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Bo:
          return (
            (g = Ei(p.type, p.key, p.props, null, m.mode, g)),
            (g.ref = Dr(m, null, p)),
            (g.return = m),
            g
          );
        case Un:
          return (p = kl(p, m.mode, g)), (p.return = m), p;
        case Ut:
          var S = p._init;
          return d(m, S(p._payload), g);
      }
      if (Ur(p) || Or(p))
        return (p = _n(p, m.mode, g, null)), (p.return = m), p;
      Xo(m, p);
    }
    return null;
  }
  function v(m, p, g, S) {
    var E = p !== null ? p.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return E !== null ? null : l(m, p, "" + g, S);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Bo:
          return g.key === E ? u(m, p, g, S) : null;
        case Un:
          return g.key === E ? c(m, p, g, S) : null;
        case Ut:
          return (E = g._init), v(m, p, E(g._payload), S);
      }
      if (Ur(g) || Or(g)) return E !== null ? null : f(m, p, g, S, null);
      Xo(m, g);
    }
    return null;
  }
  function w(m, p, g, S, E) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (m = m.get(g) || null), l(p, m, "" + S, E);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Bo:
          return (m = m.get(S.key === null ? g : S.key) || null), u(p, m, S, E);
        case Un:
          return (m = m.get(S.key === null ? g : S.key) || null), c(p, m, S, E);
        case Ut:
          var k = S._init;
          return w(m, p, g, k(S._payload), E);
      }
      if (Ur(S) || Or(S)) return (m = m.get(g) || null), f(p, m, S, E, null);
      Xo(p, S);
    }
    return null;
  }
  function y(m, p, g, S) {
    for (
      var E = null, k = null, P = p, A = (p = 0), I = null;
      P !== null && A < g.length;
      A++
    ) {
      P.index > A ? ((I = P), (P = null)) : (I = P.sibling);
      var b = v(m, P, g[A], S);
      if (b === null) {
        P === null && (P = I);
        break;
      }
      e && P && b.alternate === null && t(m, P),
        (p = i(b, p, A)),
        k === null ? (E = b) : (k.sibling = b),
        (k = b),
        (P = I);
    }
    if (A === g.length) return n(m, P), J && xn(m, A), E;
    if (P === null) {
      for (; A < g.length; A++)
        (P = d(m, g[A], S)),
          P !== null &&
            ((p = i(P, p, A)), k === null ? (E = P) : (k.sibling = P), (k = P));
      return J && xn(m, A), E;
    }
    for (P = r(m, P); A < g.length; A++)
      (I = w(P, m, A, g[A], S)),
        I !== null &&
          (e && I.alternate !== null && P.delete(I.key === null ? A : I.key),
          (p = i(I, p, A)),
          k === null ? (E = I) : (k.sibling = I),
          (k = I));
    return (
      e &&
        P.forEach(function (ye) {
          return t(m, ye);
        }),
      J && xn(m, A),
      E
    );
  }
  function x(m, p, g, S) {
    var E = Or(g);
    if (typeof E != "function") throw Error(R(150));
    if (((g = E.call(g)), g == null)) throw Error(R(151));
    for (
      var k = (E = null), P = p, A = (p = 0), I = null, b = g.next();
      P !== null && !b.done;
      A++, b = g.next()
    ) {
      P.index > A ? ((I = P), (P = null)) : (I = P.sibling);
      var ye = v(m, P, b.value, S);
      if (ye === null) {
        P === null && (P = I);
        break;
      }
      e && P && ye.alternate === null && t(m, P),
        (p = i(ye, p, A)),
        k === null ? (E = ye) : (k.sibling = ye),
        (k = ye),
        (P = I);
    }
    if (b.done) return n(m, P), J && xn(m, A), E;
    if (P === null) {
      for (; !b.done; A++, b = g.next())
        (b = d(m, b.value, S)),
          b !== null &&
            ((p = i(b, p, A)), k === null ? (E = b) : (k.sibling = b), (k = b));
      return J && xn(m, A), E;
    }
    for (P = r(m, P); !b.done; A++, b = g.next())
      (b = w(P, m, A, b.value, S)),
        b !== null &&
          (e && b.alternate !== null && P.delete(b.key === null ? A : b.key),
          (p = i(b, p, A)),
          k === null ? (E = b) : (k.sibling = b),
          (k = b));
    return (
      e &&
        P.forEach(function (hn) {
          return t(m, hn);
        }),
      J && xn(m, A),
      E
    );
  }
  function j(m, p, g, S) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === Hn &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case Bo:
          e: {
            for (var E = g.key, k = p; k !== null; ) {
              if (k.key === E) {
                if (((E = g.type), E === Hn)) {
                  if (k.tag === 7) {
                    n(m, k.sibling),
                      (p = o(k, g.props.children)),
                      (p.return = m),
                      (m = p);
                    break e;
                  }
                } else if (
                  k.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === Ut &&
                    Sd(E) === k.type)
                ) {
                  n(m, k.sibling),
                    (p = o(k, g.props)),
                    (p.ref = Dr(m, k, g)),
                    (p.return = m),
                    (m = p);
                  break e;
                }
                n(m, k);
                break;
              } else t(m, k);
              k = k.sibling;
            }
            g.type === Hn
              ? ((p = _n(g.props.children, m.mode, S, g.key)),
                (p.return = m),
                (m = p))
              : ((S = Ei(g.type, g.key, g.props, null, m.mode, S)),
                (S.ref = Dr(m, p, g)),
                (S.return = m),
                (m = S));
          }
          return s(m);
        case Un:
          e: {
            for (k = g.key; p !== null; ) {
              if (p.key === k)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === g.containerInfo &&
                  p.stateNode.implementation === g.implementation
                ) {
                  n(m, p.sibling),
                    (p = o(p, g.children || [])),
                    (p.return = m),
                    (m = p);
                  break e;
                } else {
                  n(m, p);
                  break;
                }
              else t(m, p);
              p = p.sibling;
            }
            (p = kl(g, m.mode, S)), (p.return = m), (m = p);
          }
          return s(m);
        case Ut:
          return (k = g._init), j(m, p, k(g._payload), S);
      }
      if (Ur(g)) return y(m, p, g, S);
      if (Or(g)) return x(m, p, g, S);
      Xo(m, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        p !== null && p.tag === 6
          ? (n(m, p.sibling), (p = o(p, g)), (p.return = m), (m = p))
          : (n(m, p), (p = El(g, m.mode, S)), (p.return = m), (m = p)),
        s(m))
      : n(m, p);
  }
  return j;
}
var cr = ch(!0),
  dh = ch(!1),
  Oo = {},
  ht = dn(Oo),
  mo = dn(Oo),
  go = dn(Oo);
function En(e) {
  if (e === Oo) throw Error(R(174));
  return e;
}
function Lu(e, t) {
  switch ((V(go, t), V(mo, e), V(ht, Oo), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ta(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ta(t, e));
  }
  G(ht), V(ht, t);
}
function dr() {
  G(ht), G(mo), G(go);
}
function fh(e) {
  En(go.current);
  var t = En(ht.current),
    n = ta(t, e.type);
  t !== n && (V(mo, e), V(ht, n));
}
function bu(e) {
  mo.current === e && (G(ht), G(mo));
}
var q = dn(0);
function Ji(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var yl = [];
function Du() {
  for (var e = 0; e < yl.length; e++)
    yl[e]._workInProgressVersionPrimary = null;
  yl.length = 0;
}
var xi = Nt.ReactCurrentDispatcher,
  xl = Nt.ReactCurrentBatchConfig,
  Nn = 0,
  Y = null,
  ie = null,
  le = null,
  qi = !1,
  Xr = !1,
  vo = 0,
  Og = 0;
function he() {
  throw Error(R(321));
}
function Iu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!lt(e[n], t[n])) return !1;
  return !0;
}
function Fu(e, t, n, r, o, i) {
  if (
    ((Nn = i),
    (Y = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (xi.current = e === null || e.memoizedState === null ? bg : Dg),
    (e = n(r, o)),
    Xr)
  ) {
    i = 0;
    do {
      if (((Xr = !1), (vo = 0), 25 <= i)) throw Error(R(301));
      (i += 1),
        (le = ie = null),
        (t.updateQueue = null),
        (xi.current = Ig),
        (e = n(r, o));
    } while (Xr);
  }
  if (
    ((xi.current = Yi),
    (t = ie !== null && ie.next !== null),
    (Nn = 0),
    (le = ie = Y = null),
    (qi = !1),
    t)
  )
    throw Error(R(300));
  return e;
}
function $u() {
  var e = vo !== 0;
  return (vo = 0), e;
}
function ut() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return le === null ? (Y.memoizedState = le = e) : (le = le.next = e), le;
}
function qe() {
  if (ie === null) {
    var e = Y.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ie.next;
  var t = le === null ? Y.memoizedState : le.next;
  if (t !== null) (le = t), (ie = e);
  else {
    if (e === null) throw Error(R(310));
    (ie = e),
      (e = {
        memoizedState: ie.memoizedState,
        baseState: ie.baseState,
        baseQueue: ie.baseQueue,
        queue: ie.queue,
        next: null,
      }),
      le === null ? (Y.memoizedState = le = e) : (le = le.next = e);
  }
  return le;
}
function yo(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function wl(e) {
  var t = qe(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = ie,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      (o.next = i.next), (i.next = s);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var l = (s = null),
      u = null,
      c = i;
    do {
      var f = c.lane;
      if ((Nn & f) === f)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var d = {
          lane: f,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        u === null ? ((l = u = d), (s = r)) : (u = u.next = d),
          (Y.lanes |= f),
          (zn |= f);
      }
      c = c.next;
    } while (c !== null && c !== i);
    u === null ? (s = r) : (u.next = l),
      lt(r, t.memoizedState) || (_e = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (Y.lanes |= i), (zn |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Sl(e) {
  var t = qe(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== o);
    lt(i, t.memoizedState) || (_e = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function ph() {}
function hh(e, t) {
  var n = Y,
    r = qe(),
    o = t(),
    i = !lt(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (_e = !0)),
    (r = r.queue),
    Mu(vh.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (le !== null && le.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      xo(9, gh.bind(null, n, r, o, t), void 0, null),
      ue === null)
    )
      throw Error(R(349));
    Nn & 30 || mh(n, t, o);
  }
  return o;
}
function mh(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Y.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Y.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function gh(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), yh(t) && xh(e);
}
function vh(e, t, n) {
  return n(function () {
    yh(t) && xh(e);
  });
}
function yh(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !lt(e, n);
  } catch {
    return !0;
  }
}
function xh(e) {
  var t = Rt(e, 1);
  t !== null && it(t, e, 1, -1);
}
function jd(e) {
  var t = ut();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: yo,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Lg.bind(null, Y, e)),
    [t.memoizedState, e]
  );
}
function xo(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Y.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Y.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function wh() {
  return qe().memoizedState;
}
function wi(e, t, n, r) {
  var o = ut();
  (Y.flags |= e),
    (o.memoizedState = xo(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ps(e, t, n, r) {
  var o = qe();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ie !== null) {
    var s = ie.memoizedState;
    if (((i = s.destroy), r !== null && Iu(r, s.deps))) {
      o.memoizedState = xo(t, n, i, r);
      return;
    }
  }
  (Y.flags |= e), (o.memoizedState = xo(1 | t, n, i, r));
}
function Cd(e, t) {
  return wi(8390656, 8, e, t);
}
function Mu(e, t) {
  return Ps(2048, 8, e, t);
}
function Sh(e, t) {
  return Ps(4, 2, e, t);
}
function jh(e, t) {
  return Ps(4, 4, e, t);
}
function Ch(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Eh(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ps(4, 4, Ch.bind(null, t, e), n)
  );
}
function Bu() {}
function kh(e, t) {
  var n = qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Iu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Ph(e, t) {
  var n = qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Iu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function _h(e, t, n) {
  return Nn & 21
    ? (lt(n, t) || ((n = Tp()), (Y.lanes |= n), (zn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (_e = !0)), (e.memoizedState = n));
}
function Ng(e, t) {
  var n = B;
  (B = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = xl.transition;
  xl.transition = {};
  try {
    e(!1), t();
  } finally {
    (B = n), (xl.transition = r);
  }
}
function Rh() {
  return qe().memoizedState;
}
function zg(e, t, n) {
  var r = nn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Ah(e))
  )
    Th(t, n);
  else if (((n = sh(e, t, n, r)), n !== null)) {
    var o = je();
    it(n, e, r, o), Oh(n, t, r);
  }
}
function Lg(e, t, n) {
  var r = nn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ah(e)) Th(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          l = i(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = l), lt(l, s))) {
          var u = t.interleaved;
          u === null
            ? ((o.next = o), Nu(t))
            : ((o.next = u.next), (u.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = sh(e, t, o, r)),
      n !== null && ((o = je()), it(n, e, r, o), Oh(n, t, r));
  }
}
function Ah(e) {
  var t = e.alternate;
  return e === Y || (t !== null && t === Y);
}
function Th(e, t) {
  Xr = qi = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Oh(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), yu(e, n);
  }
}
var Yi = {
    readContext: Je,
    useCallback: he,
    useContext: he,
    useEffect: he,
    useImperativeHandle: he,
    useInsertionEffect: he,
    useLayoutEffect: he,
    useMemo: he,
    useReducer: he,
    useRef: he,
    useState: he,
    useDebugValue: he,
    useDeferredValue: he,
    useTransition: he,
    useMutableSource: he,
    useSyncExternalStore: he,
    useId: he,
    unstable_isNewReconciler: !1,
  },
  bg = {
    readContext: Je,
    useCallback: function (e, t) {
      return (ut().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Je,
    useEffect: Cd,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        wi(4194308, 4, Ch.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return wi(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return wi(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = ut();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = ut();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = zg.bind(null, Y, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = ut();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: jd,
    useDebugValue: Bu,
    useDeferredValue: function (e) {
      return (ut().memoizedState = e);
    },
    useTransition: function () {
      var e = jd(!1),
        t = e[0];
      return (e = Ng.bind(null, e[1])), (ut().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Y,
        o = ut();
      if (J) {
        if (n === void 0) throw Error(R(407));
        n = n();
      } else {
        if (((n = t()), ue === null)) throw Error(R(349));
        Nn & 30 || mh(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        Cd(vh.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        xo(9, gh.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = ut(),
        t = ue.identifierPrefix;
      if (J) {
        var n = jt,
          r = St;
        (n = (r & ~(1 << (32 - ot(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = vo++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Og++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Dg = {
    readContext: Je,
    useCallback: kh,
    useContext: Je,
    useEffect: Mu,
    useImperativeHandle: Eh,
    useInsertionEffect: Sh,
    useLayoutEffect: jh,
    useMemo: Ph,
    useReducer: wl,
    useRef: wh,
    useState: function () {
      return wl(yo);
    },
    useDebugValue: Bu,
    useDeferredValue: function (e) {
      var t = qe();
      return _h(t, ie.memoizedState, e);
    },
    useTransition: function () {
      var e = wl(yo)[0],
        t = qe().memoizedState;
      return [e, t];
    },
    useMutableSource: ph,
    useSyncExternalStore: hh,
    useId: Rh,
    unstable_isNewReconciler: !1,
  },
  Ig = {
    readContext: Je,
    useCallback: kh,
    useContext: Je,
    useEffect: Mu,
    useImperativeHandle: Eh,
    useInsertionEffect: Sh,
    useLayoutEffect: jh,
    useMemo: Ph,
    useReducer: Sl,
    useRef: wh,
    useState: function () {
      return Sl(yo);
    },
    useDebugValue: Bu,
    useDeferredValue: function (e) {
      var t = qe();
      return ie === null ? (t.memoizedState = e) : _h(t, ie.memoizedState, e);
    },
    useTransition: function () {
      var e = Sl(yo)[0],
        t = qe().memoizedState;
      return [e, t];
    },
    useMutableSource: ph,
    useSyncExternalStore: hh,
    useId: Rh,
    unstable_isNewReconciler: !1,
  };
function fr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += dm(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function jl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ea(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Fg = typeof WeakMap == "function" ? WeakMap : Map;
function Nh(e, t, n) {
  (n = Ct(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Zi || ((Zi = !0), (La = r)), Ea(e, t);
    }),
    n
  );
}
function zh(e, t, n) {
  (n = Ct(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Ea(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Ea(e, t),
          typeof r != "function" &&
            (tn === null ? (tn = new Set([this])) : tn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function Ed(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Fg();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = Xg.bind(null, e, t, n)), t.then(e, e));
}
function kd(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Pd(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ct(-1, 1)), (t.tag = 2), en(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var $g = Nt.ReactCurrentOwner,
  _e = !1;
function xe(e, t, n, r) {
  t.child = e === null ? dh(t, null, n, r) : cr(t, e.child, n, r);
}
function _d(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    ir(t, o),
    (r = Fu(e, t, n, r, i, o)),
    (n = $u()),
    e !== null && !_e
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        At(e, t, o))
      : (J && n && Pu(t), (t.flags |= 1), xe(e, t, r, o), t.child)
  );
}
function Rd(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Ju(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Lh(e, t, i, r, o))
      : ((e = Ei(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : co), n(s, r) && e.ref === t.ref)
    )
      return At(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = rn(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Lh(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (co(i, r) && e.ref === t.ref)
      if (((_e = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (_e = !0);
      else return (t.lanes = e.lanes), At(e, t, o);
  }
  return ka(e, t, n, r, o);
}
function bh(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        V(Zn, be),
        (be |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          V(Zn, be),
          (be |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        V(Zn, be),
        (be |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      V(Zn, be),
      (be |= r);
  return xe(e, t, o, n), t.child;
}
function Dh(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ka(e, t, n, r, o) {
  var i = Te(n) ? Tn : ve.current;
  return (
    (i = ar(t, i)),
    ir(t, o),
    (n = Fu(e, t, n, r, i, o)),
    (r = $u()),
    e !== null && !_e
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        At(e, t, o))
      : (J && r && Pu(t), (t.flags |= 1), xe(e, t, n, o), t.child)
  );
}
function Ad(e, t, n, r, o) {
  if (Te(n)) {
    var i = !0;
    Hi(t);
  } else i = !1;
  if ((ir(t, o), t.stateNode === null))
    Si(e, t), uh(t, n, r), Ca(t, n, r, o), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps;
    s.props = l;
    var u = s.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Je(c))
      : ((c = Te(n) ? Tn : ve.current), (c = ar(t, c)));
    var f = n.getDerivedStateFromProps,
      d =
        typeof f == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== r || u !== c) && wd(t, s, r, c)),
      (Ht = !1);
    var v = t.memoizedState;
    (s.state = v),
      Gi(t, r, s, o),
      (u = t.memoizedState),
      l !== r || v !== u || Ae.current || Ht
        ? (typeof f == "function" && (ja(t, n, f, r), (u = t.memoizedState)),
          (l = Ht || xd(t, n, l, r, v, u, c))
            ? (d ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (s.props = r),
          (s.state = u),
          (s.context = c),
          (r = l))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      lh(e, t),
      (l = t.memoizedProps),
      (c = t.type === t.elementType ? l : et(t.type, l)),
      (s.props = c),
      (d = t.pendingProps),
      (v = s.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = Je(u))
        : ((u = Te(n) ? Tn : ve.current), (u = ar(t, u)));
    var w = n.getDerivedStateFromProps;
    (f =
      typeof w == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== d || v !== u) && wd(t, s, r, u)),
      (Ht = !1),
      (v = t.memoizedState),
      (s.state = v),
      Gi(t, r, s, o);
    var y = t.memoizedState;
    l !== d || v !== y || Ae.current || Ht
      ? (typeof w == "function" && (ja(t, n, w, r), (y = t.memoizedState)),
        (c = Ht || xd(t, n, c, r, v, y, u) || !1)
          ? (f ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, y, u),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, y, u)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (l === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (s.props = r),
        (s.state = y),
        (s.context = u),
        (r = c))
      : (typeof s.componentDidUpdate != "function" ||
          (l === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Pa(e, t, n, r, i, o);
}
function Pa(e, t, n, r, o, i) {
  Dh(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && hd(t, n, !1), At(e, t, i);
  (r = t.stateNode), ($g.current = t);
  var l =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = cr(t, e.child, null, i)), (t.child = cr(t, null, l, i)))
      : xe(e, t, l, i),
    (t.memoizedState = r.state),
    o && hd(t, n, !0),
    t.child
  );
}
function Ih(e) {
  var t = e.stateNode;
  t.pendingContext
    ? pd(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && pd(e, t.context, !1),
    Lu(e, t.containerInfo);
}
function Td(e, t, n, r, o) {
  return ur(), Ru(o), (t.flags |= 256), xe(e, t, n, r), t.child;
}
var _a = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ra(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Fh(e, t, n) {
  var r = t.pendingProps,
    o = q.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    l;
  if (
    ((l = s) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    V(q, o & 1),
    e === null)
  )
    return (
      wa(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = As(s, r, 0, null)),
              (e = _n(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Ra(n)),
              (t.memoizedState = _a),
              e)
            : Uu(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
    return Mg(e, t, s, r, l, o, n);
  if (i) {
    (i = r.fallback), (s = t.mode), (o = e.child), (l = o.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = rn(o, u)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (i = rn(l, i)) : ((i = _n(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Ra(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = _a),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = rn(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Uu(e, t) {
  return (
    (t = As({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Zo(e, t, n, r) {
  return (
    r !== null && Ru(r),
    cr(t, e.child, null, n),
    (e = Uu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Mg(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = jl(Error(R(422)))), Zo(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = As({ mode: "visible", children: r.children }, o, 0, null)),
        (i = _n(i, o, s, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && cr(t, e.child, null, s),
        (t.child.memoizedState = Ra(s)),
        (t.memoizedState = _a),
        i);
  if (!(t.mode & 1)) return Zo(e, t, s, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (i = Error(R(419))), (r = jl(i, r, void 0)), Zo(e, t, s, r);
  }
  if (((l = (s & e.childLanes) !== 0), _e || l)) {
    if (((r = ue), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
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
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), Rt(e, o), it(r, e, o, -1));
    }
    return Gu(), (r = jl(Error(R(421)))), Zo(e, t, s, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Zg.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (De = Zt(o.nextSibling)),
      (Fe = t),
      (J = !0),
      (nt = null),
      e !== null &&
        ((Ve[We++] = St),
        (Ve[We++] = jt),
        (Ve[We++] = On),
        (St = e.id),
        (jt = e.overflow),
        (On = t)),
      (t = Uu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Od(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Sa(e.return, t, n);
}
function Cl(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function $h(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((xe(e, t, r.children, n), (r = q.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Od(e, n, t);
        else if (e.tag === 19) Od(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((V(q, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Ji(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Cl(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Ji(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Cl(t, !0, n, null, i);
        break;
      case "together":
        Cl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Si(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function At(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (zn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(R(153));
  if (t.child !== null) {
    for (
      e = t.child, n = rn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = rn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Bg(e, t, n) {
  switch (t.tag) {
    case 3:
      Ih(t), ur();
      break;
    case 5:
      fh(t);
      break;
    case 1:
      Te(t.type) && Hi(t);
      break;
    case 4:
      Lu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      V(Qi, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (V(q, q.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Fh(e, t, n)
          : (V(q, q.current & 1),
            (e = At(e, t, n)),
            e !== null ? e.sibling : null);
      V(q, q.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return $h(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        V(q, q.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), bh(e, t, n);
  }
  return At(e, t, n);
}
var Mh, Aa, Bh, Uh;
Mh = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Aa = function () {};
Bh = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), En(ht.current);
    var i = null;
    switch (n) {
      case "input":
        (o = Yl(e, o)), (r = Yl(e, r)), (i = []);
        break;
      case "select":
        (o = X({}, o, { value: void 0 })),
          (r = X({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = ea(e, o)), (r = ea(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Bi);
    }
    na(n, r);
    var s;
    n = null;
    for (c in o)
      if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null)
        if (c === "style") {
          var l = o[c];
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (ro.hasOwnProperty(c)
              ? i || (i = [])
              : (i = i || []).push(c, null));
    for (c in r) {
      var u = r[c];
      if (
        ((l = o != null ? o[c] : void 0),
        r.hasOwnProperty(c) && u !== l && (u != null || l != null))
      )
        if (c === "style")
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) ||
                (u && u.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in u)
              u.hasOwnProperty(s) &&
                l[s] !== u[s] &&
                (n || (n = {}), (n[s] = u[s]));
          } else n || (i || (i = []), i.push(c, n)), (n = u);
        else
          c === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (l = l ? l.__html : void 0),
              u != null && l !== u && (i = i || []).push(c, u))
            : c === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (i = i || []).push(c, "" + u)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (ro.hasOwnProperty(c)
                ? (u != null && c === "onScroll" && Q("scroll", e),
                  i || l === u || (i = []))
                : (i = i || []).push(c, u));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Uh = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Ir(e, t) {
  if (!J)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function me(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Ug(e, t, n) {
  var r = t.pendingProps;
  switch ((_u(t), t.tag)) {
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
      return me(t), null;
    case 1:
      return Te(t.type) && Ui(), me(t), null;
    case 3:
      return (
        (r = t.stateNode),
        dr(),
        G(Ae),
        G(ve),
        Du(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Yo(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), nt !== null && (Ia(nt), (nt = null)))),
        Aa(e, t),
        me(t),
        null
      );
    case 5:
      bu(t);
      var o = En(go.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Bh(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(R(166));
          return me(t), null;
        }
        if (((e = En(ht.current)), Yo(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[dt] = t), (r[ho] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Q("cancel", r), Q("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Q("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Vr.length; o++) Q(Vr[o], r);
              break;
            case "source":
              Q("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Q("error", r), Q("load", r);
              break;
            case "details":
              Q("toggle", r);
              break;
            case "input":
              Mc(r, i), Q("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                Q("invalid", r);
              break;
            case "textarea":
              Uc(r, i), Q("invalid", r);
          }
          na(n, i), (o = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var l = i[s];
              s === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (i.suppressHydrationWarning !== !0 &&
                      qo(r.textContent, l, e),
                    (o = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (i.suppressHydrationWarning !== !0 &&
                      qo(r.textContent, l, e),
                    (o = ["children", "" + l]))
                : ro.hasOwnProperty(s) &&
                  l != null &&
                  s === "onScroll" &&
                  Q("scroll", r);
            }
          switch (n) {
            case "input":
              Uo(r), Bc(r, i, !0);
              break;
            case "textarea":
              Uo(r), Hc(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Bi);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = mp(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[dt] = t),
            (e[ho] = r),
            Mh(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = ra(n, r)), n)) {
              case "dialog":
                Q("cancel", e), Q("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Q("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Vr.length; o++) Q(Vr[o], e);
                o = r;
                break;
              case "source":
                Q("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                Q("error", e), Q("load", e), (o = r);
                break;
              case "details":
                Q("toggle", e), (o = r);
                break;
              case "input":
                Mc(e, r), (o = Yl(e, r)), Q("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = X({}, r, { value: void 0 })),
                  Q("invalid", e);
                break;
              case "textarea":
                Uc(e, r), (o = ea(e, r)), Q("invalid", e);
                break;
              default:
                o = r;
            }
            na(n, o), (l = o);
            for (i in l)
              if (l.hasOwnProperty(i)) {
                var u = l[i];
                i === "style"
                  ? yp(e, u)
                  : i === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && gp(e, u))
                  : i === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && oo(e, u)
                    : typeof u == "number" && oo(e, "" + u)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (ro.hasOwnProperty(i)
                      ? u != null && i === "onScroll" && Q("scroll", e)
                      : u != null && fu(e, i, u, s));
              }
            switch (n) {
              case "input":
                Uo(e), Bc(e, r, !1);
                break;
              case "textarea":
                Uo(e), Hc(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + sn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? tr(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      tr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Bi);
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
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return me(t), null;
    case 6:
      if (e && t.stateNode != null) Uh(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(R(166));
        if (((n = En(go.current)), En(ht.current), Yo(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[dt] = t),
            (i = r.nodeValue !== n) && ((e = Fe), e !== null))
          )
            switch (e.tag) {
              case 3:
                qo(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  qo(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[dt] = t),
            (t.stateNode = r);
      }
      return me(t), null;
    case 13:
      if (
        (G(q),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (J && De !== null && t.mode & 1 && !(t.flags & 128))
          ih(), ur(), (t.flags |= 98560), (i = !1);
        else if (((i = Yo(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(R(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(R(317));
            i[dt] = t;
          } else
            ur(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          me(t), (i = !1);
        } else nt !== null && (Ia(nt), (nt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || q.current & 1 ? se === 0 && (se = 3) : Gu())),
          t.updateQueue !== null && (t.flags |= 4),
          me(t),
          null);
    case 4:
      return (
        dr(), Aa(e, t), e === null && fo(t.stateNode.containerInfo), me(t), null
      );
    case 10:
      return Ou(t.type._context), me(t), null;
    case 17:
      return Te(t.type) && Ui(), me(t), null;
    case 19:
      if ((G(q), (i = t.memoizedState), i === null)) return me(t), null;
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) Ir(i, !1);
        else {
          if (se !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Ji(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Ir(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return V(q, (q.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            ee() > pr &&
            ((t.flags |= 128), (r = !0), Ir(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ji(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Ir(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !J)
            )
              return me(t), null;
          } else
            2 * ee() - i.renderingStartTime > pr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Ir(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = ee()),
          (t.sibling = null),
          (n = q.current),
          V(q, r ? (n & 1) | 2 : n & 1),
          t)
        : (me(t), null);
    case 22:
    case 23:
      return (
        Ku(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? be & 1073741824 && (me(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : me(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(R(156, t.tag));
}
function Hg(e, t) {
  switch ((_u(t), t.tag)) {
    case 1:
      return (
        Te(t.type) && Ui(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        dr(),
        G(Ae),
        G(ve),
        Du(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return bu(t), null;
    case 13:
      if ((G(q), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(R(340));
        ur();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return G(q), null;
    case 4:
      return dr(), null;
    case 10:
      return Ou(t.type._context), null;
    case 22:
    case 23:
      return Ku(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ei = !1,
  ge = !1,
  Vg = typeof WeakSet == "function" ? WeakSet : Set,
  O = null;
function Xn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Z(e, t, r);
      }
    else n.current = null;
}
function Ta(e, t, n) {
  try {
    n();
  } catch (r) {
    Z(e, t, r);
  }
}
var Nd = !1;
function Wg(e, t) {
  if (((pa = Fi), (e = Qp()), ku(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            l = -1,
            u = -1,
            c = 0,
            f = 0,
            d = e,
            v = null;
          t: for (;;) {
            for (
              var w;
              d !== n || (o !== 0 && d.nodeType !== 3) || (l = s + o),
                d !== i || (r !== 0 && d.nodeType !== 3) || (u = s + r),
                d.nodeType === 3 && (s += d.nodeValue.length),
                (w = d.firstChild) !== null;

            )
              (v = d), (d = w);
            for (;;) {
              if (d === e) break t;
              if (
                (v === n && ++c === o && (l = s),
                v === i && ++f === r && (u = s),
                (w = d.nextSibling) !== null)
              )
                break;
              (d = v), (v = d.parentNode);
            }
            d = w;
          }
          n = l === -1 || u === -1 ? null : { start: l, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ha = { focusedElem: e, selectionRange: n }, Fi = !1, O = t; O !== null; )
    if (((t = O), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (O = e);
    else
      for (; O !== null; ) {
        t = O;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var x = y.memoizedProps,
                    j = y.memoizedState,
                    m = t.stateNode,
                    p = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : et(t.type, x),
                      j,
                    );
                  m.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(R(163));
            }
        } catch (S) {
          Z(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (O = e);
          break;
        }
        O = t.return;
      }
  return (y = Nd), (Nd = !1), y;
}
function Zr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && Ta(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function _s(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Oa(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Hh(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Hh(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[dt], delete t[ho], delete t[va], delete t[_g], delete t[Rg])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Vh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function zd(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Vh(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Na(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Bi));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Na(e, t, n), e = e.sibling; e !== null; ) Na(e, t, n), (e = e.sibling);
}
function za(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (za(e, t, n), e = e.sibling; e !== null; ) za(e, t, n), (e = e.sibling);
}
var de = null,
  tt = !1;
function It(e, t, n) {
  for (n = n.child; n !== null; ) Wh(e, t, n), (n = n.sibling);
}
function Wh(e, t, n) {
  if (pt && typeof pt.onCommitFiberUnmount == "function")
    try {
      pt.onCommitFiberUnmount(xs, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ge || Xn(n, t);
    case 6:
      var r = de,
        o = tt;
      (de = null),
        It(e, t, n),
        (de = r),
        (tt = o),
        de !== null &&
          (tt
            ? ((e = de),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : de.removeChild(n.stateNode));
      break;
    case 18:
      de !== null &&
        (tt
          ? ((e = de),
            (n = n.stateNode),
            e.nodeType === 8
              ? gl(e.parentNode, n)
              : e.nodeType === 1 && gl(e, n),
            ao(e))
          : gl(de, n.stateNode));
      break;
    case 4:
      (r = de),
        (o = tt),
        (de = n.stateNode.containerInfo),
        (tt = !0),
        It(e, t, n),
        (de = r),
        (tt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ge &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          (i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && Ta(n, t, s),
            (o = o.next);
        } while (o !== r);
      }
      It(e, t, n);
      break;
    case 1:
      if (
        !ge &&
        (Xn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          Z(n, t, l);
        }
      It(e, t, n);
      break;
    case 21:
      It(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ge = (r = ge) || n.memoizedState !== null), It(e, t, n), (ge = r))
        : It(e, t, n);
      break;
    default:
      It(e, t, n);
  }
}
function Ld(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Vg()),
      t.forEach(function (r) {
        var o = ev.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Ze(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          s = t,
          l = s;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (de = l.stateNode), (tt = !1);
              break e;
            case 3:
              (de = l.stateNode.containerInfo), (tt = !0);
              break e;
            case 4:
              (de = l.stateNode.containerInfo), (tt = !0);
              break e;
          }
          l = l.return;
        }
        if (de === null) throw Error(R(160));
        Wh(i, s, o), (de = null), (tt = !1);
        var u = o.alternate;
        u !== null && (u.return = null), (o.return = null);
      } catch (c) {
        Z(o, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Qh(t, e), (t = t.sibling);
}
function Qh(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ze(t, e), at(e), r & 4)) {
        try {
          Zr(3, e, e.return), _s(3, e);
        } catch (x) {
          Z(e, e.return, x);
        }
        try {
          Zr(5, e, e.return);
        } catch (x) {
          Z(e, e.return, x);
        }
      }
      break;
    case 1:
      Ze(t, e), at(e), r & 512 && n !== null && Xn(n, n.return);
      break;
    case 5:
      if (
        (Ze(t, e),
        at(e),
        r & 512 && n !== null && Xn(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          oo(o, "");
        } catch (x) {
          Z(e, e.return, x);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          l = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            l === "input" && i.type === "radio" && i.name != null && pp(o, i),
              ra(l, s);
            var c = ra(l, i);
            for (s = 0; s < u.length; s += 2) {
              var f = u[s],
                d = u[s + 1];
              f === "style"
                ? yp(o, d)
                : f === "dangerouslySetInnerHTML"
                ? gp(o, d)
                : f === "children"
                ? oo(o, d)
                : fu(o, f, d, c);
            }
            switch (l) {
              case "input":
                Xl(o, i);
                break;
              case "textarea":
                hp(o, i);
                break;
              case "select":
                var v = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var w = i.value;
                w != null
                  ? tr(o, !!i.multiple, w, !1)
                  : v !== !!i.multiple &&
                    (i.defaultValue != null
                      ? tr(o, !!i.multiple, i.defaultValue, !0)
                      : tr(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[ho] = i;
          } catch (x) {
            Z(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((Ze(t, e), at(e), r & 4)) {
        if (e.stateNode === null) throw Error(R(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (x) {
          Z(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (Ze(t, e), at(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ao(t.containerInfo);
        } catch (x) {
          Z(e, e.return, x);
        }
      break;
    case 4:
      Ze(t, e), at(e);
      break;
    case 13:
      Ze(t, e),
        at(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Wu = ee())),
        r & 4 && Ld(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ge = (c = ge) || f), Ze(t, e), (ge = c)) : Ze(t, e),
        at(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !f && e.mode & 1)
        )
          for (O = e, f = e.child; f !== null; ) {
            for (d = O = f; O !== null; ) {
              switch (((v = O), (w = v.child), v.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Zr(4, v, v.return);
                  break;
                case 1:
                  Xn(v, v.return);
                  var y = v.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = v), (n = v.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (x) {
                      Z(r, n, x);
                    }
                  }
                  break;
                case 5:
                  Xn(v, v.return);
                  break;
                case 22:
                  if (v.memoizedState !== null) {
                    Dd(d);
                    continue;
                  }
              }
              w !== null ? ((w.return = v), (O = w)) : Dd(d);
            }
            f = f.sibling;
          }
        e: for (f = null, d = e; ; ) {
          if (d.tag === 5) {
            if (f === null) {
              f = d;
              try {
                (o = d.stateNode),
                  c
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((l = d.stateNode),
                      (u = d.memoizedProps.style),
                      (s =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (l.style.display = vp("display", s)));
              } catch (x) {
                Z(e, e.return, x);
              }
            }
          } else if (d.tag === 6) {
            if (f === null)
              try {
                d.stateNode.nodeValue = c ? "" : d.memoizedProps;
              } catch (x) {
                Z(e, e.return, x);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            f === d && (f = null), (d = d.return);
          }
          f === d && (f = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Ze(t, e), at(e), r & 4 && Ld(e);
      break;
    case 21:
      break;
    default:
      Ze(t, e), at(e);
  }
}
function at(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Vh(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(R(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (oo(o, ""), (r.flags &= -33));
          var i = zd(e);
          za(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = zd(e);
          Na(e, l, s);
          break;
        default:
          throw Error(R(161));
      }
    } catch (u) {
      Z(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Qg(e, t, n) {
  (O = e), Kh(e);
}
function Kh(e, t, n) {
  for (var r = (e.mode & 1) !== 0; O !== null; ) {
    var o = O,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || ei;
      if (!s) {
        var l = o.alternate,
          u = (l !== null && l.memoizedState !== null) || ge;
        l = ei;
        var c = ge;
        if (((ei = s), (ge = u) && !c))
          for (O = o; O !== null; )
            (s = O),
              (u = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Id(o)
                : u !== null
                ? ((u.return = s), (O = u))
                : Id(o);
        for (; i !== null; ) (O = i), Kh(i), (i = i.sibling);
        (O = o), (ei = l), (ge = c);
      }
      bd(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (O = i)) : bd(e);
  }
}
function bd(e) {
  for (; O !== null; ) {
    var t = O;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ge || _s(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ge)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : et(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              i !== null && yd(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                yd(t, s, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
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
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var f = c.memoizedState;
                  if (f !== null) {
                    var d = f.dehydrated;
                    d !== null && ao(d);
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
        ge || (t.flags & 512 && Oa(t));
      } catch (v) {
        Z(t, t.return, v);
      }
    }
    if (t === e) {
      O = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (O = n);
      break;
    }
    O = t.return;
  }
}
function Dd(e) {
  for (; O !== null; ) {
    var t = O;
    if (t === e) {
      O = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (O = n);
      break;
    }
    O = t.return;
  }
}
function Id(e) {
  for (; O !== null; ) {
    var t = O;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            _s(4, t);
          } catch (u) {
            Z(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              Z(t, o, u);
            }
          }
          var i = t.return;
          try {
            Oa(t);
          } catch (u) {
            Z(t, i, u);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Oa(t);
          } catch (u) {
            Z(t, s, u);
          }
      }
    } catch (u) {
      Z(t, t.return, u);
    }
    if (t === e) {
      O = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (O = l);
      break;
    }
    O = t.return;
  }
}
var Kg = Math.ceil,
  Xi = Nt.ReactCurrentDispatcher,
  Hu = Nt.ReactCurrentOwner,
  Ke = Nt.ReactCurrentBatchConfig,
  $ = 0,
  ue = null,
  oe = null,
  fe = 0,
  be = 0,
  Zn = dn(0),
  se = 0,
  wo = null,
  zn = 0,
  Rs = 0,
  Vu = 0,
  eo = null,
  Pe = null,
  Wu = 0,
  pr = 1 / 0,
  vt = null,
  Zi = !1,
  La = null,
  tn = null,
  ti = !1,
  Kt = null,
  es = 0,
  to = 0,
  ba = null,
  ji = -1,
  Ci = 0;
function je() {
  return $ & 6 ? ee() : ji !== -1 ? ji : (ji = ee());
}
function nn(e) {
  return e.mode & 1
    ? $ & 2 && fe !== 0
      ? fe & -fe
      : Tg.transition !== null
      ? (Ci === 0 && (Ci = Tp()), Ci)
      : ((e = B),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ip(e.type))),
        e)
    : 1;
}
function it(e, t, n, r) {
  if (50 < to) throw ((to = 0), (ba = null), Error(R(185)));
  Ro(e, n, r),
    (!($ & 2) || e !== ue) &&
      (e === ue && (!($ & 2) && (Rs |= n), se === 4 && Wt(e, fe)),
      Oe(e, r),
      n === 1 && $ === 0 && !(t.mode & 1) && ((pr = ee() + 500), Es && fn()));
}
function Oe(e, t) {
  var n = e.callbackNode;
  Tm(e, t);
  var r = Ii(e, e === ue ? fe : 0);
  if (r === 0)
    n !== null && Qc(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Qc(n), t === 1))
      e.tag === 0 ? Ag(Fd.bind(null, e)) : nh(Fd.bind(null, e)),
        kg(function () {
          !($ & 6) && fn();
        }),
        (n = null);
    else {
      switch (Op(r)) {
        case 1:
          n = vu;
          break;
        case 4:
          n = Rp;
          break;
        case 16:
          n = Di;
          break;
        case 536870912:
          n = Ap;
          break;
        default:
          n = Di;
      }
      n = t0(n, Gh.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Gh(e, t) {
  if (((ji = -1), (Ci = 0), $ & 6)) throw Error(R(327));
  var n = e.callbackNode;
  if (sr() && e.callbackNode !== n) return null;
  var r = Ii(e, e === ue ? fe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ts(e, r);
  else {
    t = r;
    var o = $;
    $ |= 2;
    var i = qh();
    (ue !== e || fe !== t) && ((vt = null), (pr = ee() + 500), Pn(e, t));
    do
      try {
        qg();
        break;
      } catch (l) {
        Jh(e, l);
      }
    while (!0);
    Tu(),
      (Xi.current = i),
      ($ = o),
      oe !== null ? (t = 0) : ((ue = null), (fe = 0), (t = se));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = aa(e)), o !== 0 && ((r = o), (t = Da(e, o)))), t === 1)
    )
      throw ((n = wo), Pn(e, 0), Wt(e, r), Oe(e, ee()), n);
    if (t === 6) Wt(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !Gg(o) &&
          ((t = ts(e, r)),
          t === 2 && ((i = aa(e)), i !== 0 && ((r = i), (t = Da(e, i)))),
          t === 1))
      )
        throw ((n = wo), Pn(e, 0), Wt(e, r), Oe(e, ee()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(R(345));
        case 2:
          wn(e, Pe, vt);
          break;
        case 3:
          if (
            (Wt(e, r), (r & 130023424) === r && ((t = Wu + 500 - ee()), 10 < t))
          ) {
            if (Ii(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              je(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = ga(wn.bind(null, e, Pe, vt), t);
            break;
          }
          wn(e, Pe, vt);
          break;
        case 4:
          if ((Wt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - ot(r);
            (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
          }
          if (
            ((r = o),
            (r = ee() - r),
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
                : 1960 * Kg(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ga(wn.bind(null, e, Pe, vt), r);
            break;
          }
          wn(e, Pe, vt);
          break;
        case 5:
          wn(e, Pe, vt);
          break;
        default:
          throw Error(R(329));
      }
    }
  }
  return Oe(e, ee()), e.callbackNode === n ? Gh.bind(null, e) : null;
}
function Da(e, t) {
  var n = eo;
  return (
    e.current.memoizedState.isDehydrated && (Pn(e, t).flags |= 256),
    (e = ts(e, t)),
    e !== 2 && ((t = Pe), (Pe = n), t !== null && Ia(t)),
    e
  );
}
function Ia(e) {
  Pe === null ? (Pe = e) : Pe.push.apply(Pe, e);
}
function Gg(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!lt(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Wt(e, t) {
  for (
    t &= ~Vu,
      t &= ~Rs,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - ot(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Fd(e) {
  if ($ & 6) throw Error(R(327));
  sr();
  var t = Ii(e, 0);
  if (!(t & 1)) return Oe(e, ee()), null;
  var n = ts(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = aa(e);
    r !== 0 && ((t = r), (n = Da(e, r)));
  }
  if (n === 1) throw ((n = wo), Pn(e, 0), Wt(e, t), Oe(e, ee()), n);
  if (n === 6) throw Error(R(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    wn(e, Pe, vt),
    Oe(e, ee()),
    null
  );
}
function Qu(e, t) {
  var n = $;
  $ |= 1;
  try {
    return e(t);
  } finally {
    ($ = n), $ === 0 && ((pr = ee() + 500), Es && fn());
  }
}
function Ln(e) {
  Kt !== null && Kt.tag === 0 && !($ & 6) && sr();
  var t = $;
  $ |= 1;
  var n = Ke.transition,
    r = B;
  try {
    if (((Ke.transition = null), (B = 1), e)) return e();
  } finally {
    (B = r), (Ke.transition = n), ($ = t), !($ & 6) && fn();
  }
}
function Ku() {
  (be = Zn.current), G(Zn);
}
function Pn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Eg(n)), oe !== null))
    for (n = oe.return; n !== null; ) {
      var r = n;
      switch ((_u(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ui();
          break;
        case 3:
          dr(), G(Ae), G(ve), Du();
          break;
        case 5:
          bu(r);
          break;
        case 4:
          dr();
          break;
        case 13:
          G(q);
          break;
        case 19:
          G(q);
          break;
        case 10:
          Ou(r.type._context);
          break;
        case 22:
        case 23:
          Ku();
      }
      n = n.return;
    }
  if (
    ((ue = e),
    (oe = e = rn(e.current, null)),
    (fe = be = t),
    (se = 0),
    (wo = null),
    (Vu = Rs = zn = 0),
    (Pe = eo = null),
    Cn !== null)
  ) {
    for (t = 0; t < Cn.length; t++)
      if (((n = Cn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = o), (r.next = s);
        }
        n.pending = r;
      }
    Cn = null;
  }
  return e;
}
function Jh(e, t) {
  do {
    var n = oe;
    try {
      if ((Tu(), (xi.current = Yi), qi)) {
        for (var r = Y.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        qi = !1;
      }
      if (
        ((Nn = 0),
        (le = ie = Y = null),
        (Xr = !1),
        (vo = 0),
        (Hu.current = null),
        n === null || n.return === null)
      ) {
        (se = 1), (wo = t), (oe = null);
        break;
      }
      e: {
        var i = e,
          s = n.return,
          l = n,
          u = t;
        if (
          ((t = fe),
          (l.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var c = u,
            f = l,
            d = f.tag;
          if (!(f.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var v = f.alternate;
            v
              ? ((f.updateQueue = v.updateQueue),
                (f.memoizedState = v.memoizedState),
                (f.lanes = v.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var w = kd(s);
          if (w !== null) {
            (w.flags &= -257),
              Pd(w, s, l, i, t),
              w.mode & 1 && Ed(i, c, t),
              (t = w),
              (u = c);
            var y = t.updateQueue;
            if (y === null) {
              var x = new Set();
              x.add(u), (t.updateQueue = x);
            } else y.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Ed(i, c, t), Gu();
              break e;
            }
            u = Error(R(426));
          }
        } else if (J && l.mode & 1) {
          var j = kd(s);
          if (j !== null) {
            !(j.flags & 65536) && (j.flags |= 256),
              Pd(j, s, l, i, t),
              Ru(fr(u, l));
            break e;
          }
        }
        (i = u = fr(u, l)),
          se !== 4 && (se = 2),
          eo === null ? (eo = [i]) : eo.push(i),
          (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var m = Nh(i, u, t);
              vd(i, m);
              break e;
            case 1:
              l = u;
              var p = i.type,
                g = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (tn === null || !tn.has(g))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var S = zh(i, l, t);
                vd(i, S);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Xh(n);
    } catch (E) {
      (t = E), oe === n && n !== null && (oe = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function qh() {
  var e = Xi.current;
  return (Xi.current = Yi), e === null ? Yi : e;
}
function Gu() {
  (se === 0 || se === 3 || se === 2) && (se = 4),
    ue === null || (!(zn & 268435455) && !(Rs & 268435455)) || Wt(ue, fe);
}
function ts(e, t) {
  var n = $;
  $ |= 2;
  var r = qh();
  (ue !== e || fe !== t) && ((vt = null), Pn(e, t));
  do
    try {
      Jg();
      break;
    } catch (o) {
      Jh(e, o);
    }
  while (!0);
  if ((Tu(), ($ = n), (Xi.current = r), oe !== null)) throw Error(R(261));
  return (ue = null), (fe = 0), se;
}
function Jg() {
  for (; oe !== null; ) Yh(oe);
}
function qg() {
  for (; oe !== null && !Sm(); ) Yh(oe);
}
function Yh(e) {
  var t = e0(e.alternate, e, be);
  (e.memoizedProps = e.pendingProps),
    t === null ? Xh(e) : (oe = t),
    (Hu.current = null);
}
function Xh(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Hg(n, t)), n !== null)) {
        (n.flags &= 32767), (oe = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (se = 6), (oe = null);
        return;
      }
    } else if (((n = Ug(n, t, be)), n !== null)) {
      oe = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      oe = t;
      return;
    }
    oe = t = e;
  } while (t !== null);
  se === 0 && (se = 5);
}
function wn(e, t, n) {
  var r = B,
    o = Ke.transition;
  try {
    (Ke.transition = null), (B = 1), Yg(e, t, n, r);
  } finally {
    (Ke.transition = o), (B = r);
  }
  return null;
}
function Yg(e, t, n, r) {
  do sr();
  while (Kt !== null);
  if ($ & 6) throw Error(R(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(R(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Om(e, i),
    e === ue && ((oe = ue = null), (fe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ti ||
      ((ti = !0),
      t0(Di, function () {
        return sr(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Ke.transition), (Ke.transition = null);
    var s = B;
    B = 1;
    var l = $;
    ($ |= 4),
      (Hu.current = null),
      Wg(e, n),
      Qh(n, e),
      vg(ha),
      (Fi = !!pa),
      (ha = pa = null),
      (e.current = n),
      Qg(n),
      jm(),
      ($ = l),
      (B = s),
      (Ke.transition = i);
  } else e.current = n;
  if (
    (ti && ((ti = !1), (Kt = e), (es = o)),
    (i = e.pendingLanes),
    i === 0 && (tn = null),
    km(n.stateNode),
    Oe(e, ee()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Zi) throw ((Zi = !1), (e = La), (La = null), e);
  return (
    es & 1 && e.tag !== 0 && sr(),
    (i = e.pendingLanes),
    i & 1 ? (e === ba ? to++ : ((to = 0), (ba = e))) : (to = 0),
    fn(),
    null
  );
}
function sr() {
  if (Kt !== null) {
    var e = Op(es),
      t = Ke.transition,
      n = B;
    try {
      if (((Ke.transition = null), (B = 16 > e ? 16 : e), Kt === null))
        var r = !1;
      else {
        if (((e = Kt), (Kt = null), (es = 0), $ & 6)) throw Error(R(331));
        var o = $;
        for ($ |= 4, O = e.current; O !== null; ) {
          var i = O,
            s = i.child;
          if (O.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var u = 0; u < l.length; u++) {
                var c = l[u];
                for (O = c; O !== null; ) {
                  var f = O;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Zr(8, f, i);
                  }
                  var d = f.child;
                  if (d !== null) (d.return = f), (O = d);
                  else
                    for (; O !== null; ) {
                      f = O;
                      var v = f.sibling,
                        w = f.return;
                      if ((Hh(f), f === c)) {
                        O = null;
                        break;
                      }
                      if (v !== null) {
                        (v.return = w), (O = v);
                        break;
                      }
                      O = w;
                    }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var x = y.child;
                if (x !== null) {
                  y.child = null;
                  do {
                    var j = x.sibling;
                    (x.sibling = null), (x = j);
                  } while (x !== null);
                }
              }
              O = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (O = s);
          else
            e: for (; O !== null; ) {
              if (((i = O), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Zr(9, i, i.return);
                }
              var m = i.sibling;
              if (m !== null) {
                (m.return = i.return), (O = m);
                break e;
              }
              O = i.return;
            }
        }
        var p = e.current;
        for (O = p; O !== null; ) {
          s = O;
          var g = s.child;
          if (s.subtreeFlags & 2064 && g !== null) (g.return = s), (O = g);
          else
            e: for (s = p; O !== null; ) {
              if (((l = O), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      _s(9, l);
                  }
                } catch (E) {
                  Z(l, l.return, E);
                }
              if (l === s) {
                O = null;
                break e;
              }
              var S = l.sibling;
              if (S !== null) {
                (S.return = l.return), (O = S);
                break e;
              }
              O = l.return;
            }
        }
        if (
          (($ = o), fn(), pt && typeof pt.onPostCommitFiberRoot == "function")
        )
          try {
            pt.onPostCommitFiberRoot(xs, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (B = n), (Ke.transition = t);
    }
  }
  return !1;
}
function $d(e, t, n) {
  (t = fr(n, t)),
    (t = Nh(e, t, 1)),
    (e = en(e, t, 1)),
    (t = je()),
    e !== null && (Ro(e, 1, t), Oe(e, t));
}
function Z(e, t, n) {
  if (e.tag === 3) $d(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        $d(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (tn === null || !tn.has(r)))
        ) {
          (e = fr(n, e)),
            (e = zh(t, e, 1)),
            (t = en(t, e, 1)),
            (e = je()),
            t !== null && (Ro(t, 1, e), Oe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Xg(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = je()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ue === e &&
      (fe & n) === n &&
      (se === 4 || (se === 3 && (fe & 130023424) === fe && 500 > ee() - Wu)
        ? Pn(e, 0)
        : (Vu |= n)),
    Oe(e, t);
}
function Zh(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Wo), (Wo <<= 1), !(Wo & 130023424) && (Wo = 4194304))
      : (t = 1));
  var n = je();
  (e = Rt(e, t)), e !== null && (Ro(e, t, n), Oe(e, n));
}
function Zg(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Zh(e, n);
}
function ev(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(R(314));
  }
  r !== null && r.delete(t), Zh(e, n);
}
var e0;
e0 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ae.current) _e = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (_e = !1), Bg(e, t, n);
      _e = !!(e.flags & 131072);
    }
  else (_e = !1), J && t.flags & 1048576 && rh(t, Wi, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Si(e, t), (e = t.pendingProps);
      var o = ar(t, ve.current);
      ir(t, n), (o = Fu(null, t, r, e, o, n));
      var i = $u();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Te(r) ? ((i = !0), Hi(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            zu(t),
            (o.updater = ks),
            (t.stateNode = o),
            (o._reactInternals = t),
            Ca(t, r, e, n),
            (t = Pa(null, t, r, !0, i, n)))
          : ((t.tag = 0), J && i && Pu(t), xe(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Si(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = nv(r)),
          (e = et(r, e)),
          o)
        ) {
          case 0:
            t = ka(null, t, r, e, n);
            break e;
          case 1:
            t = Ad(null, t, r, e, n);
            break e;
          case 11:
            t = _d(null, t, r, e, n);
            break e;
          case 14:
            t = Rd(null, t, r, et(r.type, e), n);
            break e;
        }
        throw Error(R(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : et(r, o)),
        ka(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : et(r, o)),
        Ad(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((Ih(t), e === null)) throw Error(R(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          lh(e, t),
          Gi(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = fr(Error(R(423)), t)), (t = Td(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = fr(Error(R(424)), t)), (t = Td(e, t, r, n, o));
            break e;
          } else
            for (
              De = Zt(t.stateNode.containerInfo.firstChild),
                Fe = t,
                J = !0,
                nt = null,
                n = dh(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((ur(), r === o)) {
            t = At(e, t, n);
            break e;
          }
          xe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        fh(t),
        e === null && wa(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        ma(r, o) ? (s = null) : i !== null && ma(r, i) && (t.flags |= 32),
        Dh(e, t),
        xe(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && wa(t), null;
    case 13:
      return Fh(e, t, n);
    case 4:
      return (
        Lu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = cr(t, null, r, n)) : xe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : et(r, o)),
        _d(e, t, r, o, n)
      );
    case 7:
      return xe(e, t, t.pendingProps, n), t.child;
    case 8:
      return xe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return xe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          V(Qi, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (lt(i.value, s)) {
            if (i.children === o.children && !Ae.current) {
              t = At(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var l = i.dependencies;
              if (l !== null) {
                s = i.child;
                for (var u = l.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (i.tag === 1) {
                      (u = Ct(-1, n & -n)), (u.tag = 2);
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var f = c.pending;
                        f === null
                          ? (u.next = u)
                          : ((u.next = f.next), (f.next = u)),
                          (c.pending = u);
                      }
                    }
                    (i.lanes |= n),
                      (u = i.alternate),
                      u !== null && (u.lanes |= n),
                      Sa(i.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(R(341));
                (s.lanes |= n),
                  (l = s.alternate),
                  l !== null && (l.lanes |= n),
                  Sa(s, n, t),
                  (s = i.sibling);
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    (i.return = s.return), (s = i);
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        xe(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        ir(t, n),
        (o = Je(o)),
        (r = r(o)),
        (t.flags |= 1),
        xe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = et(r, t.pendingProps)),
        (o = et(r.type, o)),
        Rd(e, t, r, o, n)
      );
    case 15:
      return Lh(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : et(r, o)),
        Si(e, t),
        (t.tag = 1),
        Te(r) ? ((e = !0), Hi(t)) : (e = !1),
        ir(t, n),
        uh(t, r, o),
        Ca(t, r, o, n),
        Pa(null, t, r, !0, e, n)
      );
    case 19:
      return $h(e, t, n);
    case 22:
      return bh(e, t, n);
  }
  throw Error(R(156, t.tag));
};
function t0(e, t) {
  return _p(e, t);
}
function tv(e, t, n, r) {
  (this.tag = e),
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
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Qe(e, t, n, r) {
  return new tv(e, t, n, r);
}
function Ju(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function nv(e) {
  if (typeof e == "function") return Ju(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === hu)) return 11;
    if (e === mu) return 14;
  }
  return 2;
}
function rn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Qe(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ei(e, t, n, r, o, i) {
  var s = 2;
  if (((r = e), typeof e == "function")) Ju(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Hn:
        return _n(n.children, o, i, t);
      case pu:
        (s = 8), (o |= 8);
        break;
      case Kl:
        return (
          (e = Qe(12, n, t, o | 2)), (e.elementType = Kl), (e.lanes = i), e
        );
      case Gl:
        return (e = Qe(13, n, t, o)), (e.elementType = Gl), (e.lanes = i), e;
      case Jl:
        return (e = Qe(19, n, t, o)), (e.elementType = Jl), (e.lanes = i), e;
      case cp:
        return As(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case ap:
              s = 10;
              break e;
            case up:
              s = 9;
              break e;
            case hu:
              s = 11;
              break e;
            case mu:
              s = 14;
              break e;
            case Ut:
              (s = 16), (r = null);
              break e;
          }
        throw Error(R(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Qe(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function _n(e, t, n, r) {
  return (e = Qe(7, e, r, t)), (e.lanes = n), e;
}
function As(e, t, n, r) {
  return (
    (e = Qe(22, e, r, t)),
    (e.elementType = cp),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function El(e, t, n) {
  return (e = Qe(6, e, null, t)), (e.lanes = n), e;
}
function kl(e, t, n) {
  return (
    (t = Qe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function rv(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = il(0)),
    (this.expirationTimes = il(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = il(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function qu(e, t, n, r, o, i, s, l, u) {
  return (
    (e = new rv(e, t, n, l, u)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Qe(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    zu(i),
    e
  );
}
function ov(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Un,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function n0(e) {
  if (!e) return ln;
  e = e._reactInternals;
  e: {
    if (In(e) !== e || e.tag !== 1) throw Error(R(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Te(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(R(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Te(n)) return th(e, n, t);
  }
  return t;
}
function r0(e, t, n, r, o, i, s, l, u) {
  return (
    (e = qu(n, r, !0, e, o, i, s, l, u)),
    (e.context = n0(null)),
    (n = e.current),
    (r = je()),
    (o = nn(n)),
    (i = Ct(r, o)),
    (i.callback = t ?? null),
    en(n, i, o),
    (e.current.lanes = o),
    Ro(e, o, r),
    Oe(e, r),
    e
  );
}
function Ts(e, t, n, r) {
  var o = t.current,
    i = je(),
    s = nn(o);
  return (
    (n = n0(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ct(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = en(o, t, s)),
    e !== null && (it(e, o, s, i), yi(e, o, s)),
    s
  );
}
function ns(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Md(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Yu(e, t) {
  Md(e, t), (e = e.alternate) && Md(e, t);
}
function iv() {
  return null;
}
var o0 =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Xu(e) {
  this._internalRoot = e;
}
Os.prototype.render = Xu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(R(409));
  Ts(e, t, null, null);
};
Os.prototype.unmount = Xu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ln(function () {
      Ts(null, e, null, null);
    }),
      (t[_t] = null);
  }
};
function Os(e) {
  this._internalRoot = e;
}
Os.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Lp();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Vt.length && t !== 0 && t < Vt[n].priority; n++);
    Vt.splice(n, 0, e), n === 0 && Dp(e);
  }
};
function Zu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ns(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Bd() {}
function sv(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var c = ns(s);
        i.call(c);
      };
    }
    var s = r0(t, r, e, 0, null, !1, !1, "", Bd);
    return (
      (e._reactRootContainer = s),
      (e[_t] = s.current),
      fo(e.nodeType === 8 ? e.parentNode : e),
      Ln(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var c = ns(u);
      l.call(c);
    };
  }
  var u = qu(e, 0, !1, null, null, !1, !1, "", Bd);
  return (
    (e._reactRootContainer = u),
    (e[_t] = u.current),
    fo(e.nodeType === 8 ? e.parentNode : e),
    Ln(function () {
      Ts(t, u, n, r);
    }),
    u
  );
}
function zs(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var l = o;
      o = function () {
        var u = ns(s);
        l.call(u);
      };
    }
    Ts(t, s, e, o);
  } else s = sv(n, t, e, o, r);
  return ns(s);
}
Np = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Hr(t.pendingLanes);
        n !== 0 &&
          (yu(t, n | 1), Oe(t, ee()), !($ & 6) && ((pr = ee() + 500), fn()));
      }
      break;
    case 13:
      Ln(function () {
        var r = Rt(e, 1);
        if (r !== null) {
          var o = je();
          it(r, e, 1, o);
        }
      }),
        Yu(e, 1);
  }
};
xu = function (e) {
  if (e.tag === 13) {
    var t = Rt(e, 134217728);
    if (t !== null) {
      var n = je();
      it(t, e, 134217728, n);
    }
    Yu(e, 134217728);
  }
};
zp = function (e) {
  if (e.tag === 13) {
    var t = nn(e),
      n = Rt(e, t);
    if (n !== null) {
      var r = je();
      it(n, e, t, r);
    }
    Yu(e, t);
  }
};
Lp = function () {
  return B;
};
bp = function (e, t) {
  var n = B;
  try {
    return (B = e), t();
  } finally {
    B = n;
  }
};
ia = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Xl(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Cs(r);
            if (!o) throw Error(R(90));
            fp(r), Xl(r, o);
          }
        }
      }
      break;
    case "textarea":
      hp(e, n);
      break;
    case "select":
      (t = n.value), t != null && tr(e, !!n.multiple, t, !1);
  }
};
Sp = Qu;
jp = Ln;
var lv = { usingClientEntryPoint: !1, Events: [To, Kn, Cs, xp, wp, Qu] },
  Fr = {
    findFiberByHostInstance: jn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  av = {
    bundleType: Fr.bundleType,
    version: Fr.version,
    rendererPackageName: Fr.rendererPackageName,
    rendererConfig: Fr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Nt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = kp(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Fr.findFiberByHostInstance || iv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ni = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ni.isDisabled && ni.supportsFiber)
    try {
      (xs = ni.inject(av)), (pt = ni);
    } catch {}
}
Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lv;
Ue.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Zu(t)) throw Error(R(200));
  return ov(e, t, null, n);
};
Ue.createRoot = function (e, t) {
  if (!Zu(e)) throw Error(R(299));
  var n = !1,
    r = "",
    o = o0;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = qu(e, 1, !1, null, null, n, !1, r, o)),
    (e[_t] = t.current),
    fo(e.nodeType === 8 ? e.parentNode : e),
    new Xu(t)
  );
};
Ue.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(R(188))
      : ((e = Object.keys(e).join(",")), Error(R(268, e)));
  return (e = kp(t)), (e = e === null ? null : e.stateNode), e;
};
Ue.flushSync = function (e) {
  return Ln(e);
};
Ue.hydrate = function (e, t, n) {
  if (!Ns(t)) throw Error(R(200));
  return zs(null, e, t, !0, n);
};
Ue.hydrateRoot = function (e, t, n) {
  if (!Zu(e)) throw Error(R(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    s = o0;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = r0(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[_t] = t.current),
    fo(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Os(t);
};
Ue.render = function (e, t, n) {
  if (!Ns(t)) throw Error(R(200));
  return zs(null, e, t, !1, n);
};
Ue.unmountComponentAtNode = function (e) {
  if (!Ns(e)) throw Error(R(40));
  return e._reactRootContainer
    ? (Ln(function () {
        zs(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[_t] = null);
        });
      }),
      !0)
    : !1;
};
Ue.unstable_batchedUpdates = Qu;
Ue.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ns(n)) throw Error(R(200));
  if (e == null || e._reactInternals === void 0) throw Error(R(38));
  return zs(e, t, n, !1, r);
};
Ue.version = "18.2.0-next-9e3b772b8-20220608";
function i0() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i0);
    } catch (e) {
      console.error(e);
    }
}
i0(), (rp.exports = Ue);
var uv = rp.exports,
  Ud = uv;
(Wl.createRoot = Ud.createRoot), (Wl.hydrateRoot = Ud.hydrateRoot);
const cv = "ALHKQ";
/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function So() {
  return (
    (So = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    So.apply(this, arguments)
  );
}
var Gt;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Gt || (Gt = {}));
const Hd = "popstate";
function dv(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: s, hash: l } = r.location;
    return Fa(
      "",
      { pathname: i, search: s, hash: l },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default",
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : rs(o);
  }
  return pv(t, n, null, e);
}
function te(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function s0(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function fv() {
  return Math.random().toString(36).substr(2, 8);
}
function Vd(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Fa(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    So(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? kr(t) : t,
      { state: n, key: (t && t.key) || r || fv() },
    )
  );
}
function rs(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function kr(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function pv(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    s = o.history,
    l = Gt.Pop,
    u = null,
    c = f();
  c == null && ((c = 0), s.replaceState(So({}, s.state, { idx: c }), ""));
  function f() {
    return (s.state || { idx: null }).idx;
  }
  function d() {
    l = Gt.Pop;
    let j = f(),
      m = j == null ? null : j - c;
    (c = j), u && u({ action: l, location: x.location, delta: m });
  }
  function v(j, m) {
    l = Gt.Push;
    let p = Fa(x.location, j, m);
    n && n(p, j), (c = f() + 1);
    let g = Vd(p, c),
      S = x.createHref(p);
    try {
      s.pushState(g, "", S);
    } catch (E) {
      if (E instanceof DOMException && E.name === "DataCloneError") throw E;
      o.location.assign(S);
    }
    i && u && u({ action: l, location: x.location, delta: 1 });
  }
  function w(j, m) {
    l = Gt.Replace;
    let p = Fa(x.location, j, m);
    n && n(p, j), (c = f());
    let g = Vd(p, c),
      S = x.createHref(p);
    s.replaceState(g, "", S),
      i && u && u({ action: l, location: x.location, delta: 0 });
  }
  function y(j) {
    let m = o.location.origin !== "null" ? o.location.origin : o.location.href,
      p = typeof j == "string" ? j : rs(j);
    return (
      (p = p.replace(/ $/, "%20")),
      te(
        m,
        "No window.location.(origin|href) available to create URL for href: " +
          p,
      ),
      new URL(p, m)
    );
  }
  let x = {
    get action() {
      return l;
    },
    get location() {
      return e(o, s);
    },
    listen(j) {
      if (u) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(Hd, d),
        (u = j),
        () => {
          o.removeEventListener(Hd, d), (u = null);
        }
      );
    },
    createHref(j) {
      return t(o, j);
    },
    createURL: y,
    encodeLocation(j) {
      let m = y(j);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: v,
    replace: w,
    go(j) {
      return s.go(j);
    },
  };
  return x;
}
var Wd;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Wd || (Wd = {}));
function hv(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? kr(t) : t,
    o = ec(r.pathname || "/", n);
  if (o == null) return null;
  let i = l0(e);
  mv(i);
  let s = null;
  for (let l = 0; s == null && l < i.length; ++l) {
    let u = _v(o);
    s = Ev(i[l], u);
  }
  return s;
}
function l0(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (i, s, l) => {
    let u = {
      relativePath: l === void 0 ? i.path || "" : l,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: s,
      route: i,
    };
    u.relativePath.startsWith("/") &&
      (te(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let c = on([r, u.relativePath]),
      f = n.concat(u);
    i.children &&
      i.children.length > 0 &&
      (te(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + c + '".'),
      ),
      l0(i.children, t, f, c)),
      !(i.path == null && !i.index) &&
        t.push({ path: c, score: jv(c, i.index), routesMeta: f });
  };
  return (
    e.forEach((i, s) => {
      var l;
      if (i.path === "" || !((l = i.path) != null && l.includes("?"))) o(i, s);
      else for (let u of a0(i.path)) o(i, s, u);
    }),
    t
  );
}
function a0(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [i, ""] : [i];
  let s = a0(r.join("/")),
    l = [];
  return (
    l.push(...s.map((u) => (u === "" ? i : [i, u].join("/")))),
    o && l.push(...s),
    l.map((u) => (e.startsWith("/") && u === "" ? "/" : u))
  );
}
function mv(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Cv(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const gv = /^:[\w-]+$/,
  vv = 3,
  yv = 2,
  xv = 1,
  wv = 10,
  Sv = -2,
  Qd = (e) => e === "*";
function jv(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Qd) && (r += Sv),
    t && (r += yv),
    n
      .filter((o) => !Qd(o))
      .reduce((o, i) => o + (gv.test(i) ? vv : i === "" ? xv : wv), r)
  );
}
function Cv(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Ev(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = "/",
    i = [];
  for (let s = 0; s < n.length; ++s) {
    let l = n[s],
      u = s === n.length - 1,
      c = o === "/" ? t : t.slice(o.length) || "/",
      f = kv(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
        c,
      );
    if (!f) return null;
    Object.assign(r, f.params);
    let d = l.route;
    i.push({
      params: r,
      pathname: on([o, f.pathname]),
      pathnameBase: Ov(on([o, f.pathnameBase])),
      route: d,
    }),
      f.pathnameBase !== "/" && (o = on([o, f.pathnameBase]));
  }
  return i;
}
function kv(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Pv(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    s = i.replace(/(.)\/+$/, "$1"),
    l = o.slice(1);
  return {
    params: r.reduce((c, f, d) => {
      let { paramName: v, isOptional: w } = f;
      if (v === "*") {
        let x = l[d] || "";
        s = i.slice(0, i.length - x.length).replace(/(.)\/+$/, "$1");
      }
      const y = l[d];
      return (
        w && !y ? (c[v] = void 0) : (c[v] = (y || "").replace(/%2F/g, "/")), c
      );
    }, {}),
    pathname: i,
    pathnameBase: s,
    pattern: e,
  };
}
function Pv(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    s0(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, l, u) => (
            r.push({ paramName: l, isOptional: u != null }),
            u ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function _v(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      s0(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function ec(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Rv(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? kr(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : Av(n, t)) : t,
    search: Nv(r),
    hash: zv(o),
  };
}
function Av(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Pl(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Tv(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function tc(e, t) {
  let n = Tv(e);
  return t
    ? n.map((r, o) => (o === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function nc(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = kr(e))
    : ((o = So({}, e)),
      te(
        !o.pathname || !o.pathname.includes("?"),
        Pl("?", "pathname", "search", o),
      ),
      te(
        !o.pathname || !o.pathname.includes("#"),
        Pl("#", "pathname", "hash", o),
      ),
      te(!o.search || !o.search.includes("#"), Pl("#", "search", "hash", o)));
  let i = e === "" || o.pathname === "",
    s = i ? "/" : o.pathname,
    l;
  if (s == null) l = n;
  else {
    let d = t.length - 1;
    if (!r && s.startsWith("..")) {
      let v = s.split("/");
      for (; v[0] === ".."; ) v.shift(), (d -= 1);
      o.pathname = v.join("/");
    }
    l = d >= 0 ? t[d] : "/";
  }
  let u = Rv(o, l),
    c = s && s !== "/" && s.endsWith("/"),
    f = (i || s === ".") && n.endsWith("/");
  return !u.pathname.endsWith("/") && (c || f) && (u.pathname += "/"), u;
}
const on = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Ov = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Nv = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  zv = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Lv(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const u0 = ["post", "put", "patch", "delete"];
new Set(u0);
const bv = ["get", ...u0];
new Set(bv);
/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function jo() {
  return (
    (jo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    jo.apply(this, arguments)
  );
}
const rc = _.createContext(null),
  Dv = _.createContext(null),
  pn = _.createContext(null),
  Ls = _.createContext(null),
  zt = _.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  c0 = _.createContext(null);
function Iv(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Pr() || te(!1);
  let { basename: r, navigator: o } = _.useContext(pn),
    { hash: i, pathname: s, search: l } = f0(e, { relative: n }),
    u = s;
  return (
    r !== "/" && (u = s === "/" ? r : on([r, s])),
    o.createHref({ pathname: u, search: l, hash: i })
  );
}
function Pr() {
  return _.useContext(Ls) != null;
}
function Fn() {
  return Pr() || te(!1), _.useContext(Ls).location;
}
function d0(e) {
  _.useContext(pn).static || _.useLayoutEffect(e);
}
function bs() {
  let { isDataRoute: e } = _.useContext(zt);
  return e ? Xv() : Fv();
}
function Fv() {
  Pr() || te(!1);
  let e = _.useContext(rc),
    { basename: t, future: n, navigator: r } = _.useContext(pn),
    { matches: o } = _.useContext(zt),
    { pathname: i } = Fn(),
    s = JSON.stringify(tc(o, n.v7_relativeSplatPath)),
    l = _.useRef(!1);
  return (
    d0(() => {
      l.current = !0;
    }),
    _.useCallback(
      function (c, f) {
        if ((f === void 0 && (f = {}), !l.current)) return;
        if (typeof c == "number") {
          r.go(c);
          return;
        }
        let d = nc(c, JSON.parse(s), i, f.relative === "path");
        e == null &&
          t !== "/" &&
          (d.pathname = d.pathname === "/" ? t : on([t, d.pathname])),
          (f.replace ? r.replace : r.push)(d, f.state, f);
      },
      [t, r, s, i, e],
    )
  );
}
const $v = _.createContext(null);
function Mv(e) {
  let t = _.useContext(zt).outlet;
  return t && _.createElement($v.Provider, { value: e }, t);
}
function f0(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = _.useContext(pn),
    { matches: o } = _.useContext(zt),
    { pathname: i } = Fn(),
    s = JSON.stringify(tc(o, r.v7_relativeSplatPath));
  return _.useMemo(() => nc(e, JSON.parse(s), i, n === "path"), [e, s, i, n]);
}
function Bv(e, t) {
  return Uv(e, t);
}
function Uv(e, t, n, r) {
  Pr() || te(!1);
  let { navigator: o } = _.useContext(pn),
    { matches: i } = _.useContext(zt),
    s = i[i.length - 1],
    l = s ? s.params : {};
  s && s.pathname;
  let u = s ? s.pathnameBase : "/";
  s && s.route;
  let c = Fn(),
    f;
  if (t) {
    var d;
    let j = typeof t == "string" ? kr(t) : t;
    u === "/" || ((d = j.pathname) != null && d.startsWith(u)) || te(!1),
      (f = j);
  } else f = c;
  let v = f.pathname || "/",
    w = v;
  if (u !== "/") {
    let j = u.replace(/^\//, "").split("/");
    w = "/" + v.replace(/^\//, "").split("/").slice(j.length).join("/");
  }
  let y = hv(e, { pathname: w }),
    x = Kv(
      y &&
        y.map((j) =>
          Object.assign({}, j, {
            params: Object.assign({}, l, j.params),
            pathname: on([
              u,
              o.encodeLocation
                ? o.encodeLocation(j.pathname).pathname
                : j.pathname,
            ]),
            pathnameBase:
              j.pathnameBase === "/"
                ? u
                : on([
                    u,
                    o.encodeLocation
                      ? o.encodeLocation(j.pathnameBase).pathname
                      : j.pathnameBase,
                  ]),
          }),
        ),
      i,
      n,
      r,
    );
  return t && x
    ? _.createElement(
        Ls.Provider,
        {
          value: {
            location: jo(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              f,
            ),
            navigationType: Gt.Pop,
          },
        },
        x,
      )
    : x;
}
function Hv() {
  let e = Yv(),
    t = Lv(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return _.createElement(
    _.Fragment,
    null,
    _.createElement("h2", null, "Unexpected Application Error!"),
    _.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? _.createElement("pre", { style: o }, n) : null,
    null,
  );
}
const Vv = _.createElement(Hv, null);
class Wv extends _.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n,
    );
  }
  render() {
    return this.state.error !== void 0
      ? _.createElement(
          zt.Provider,
          { value: this.props.routeContext },
          _.createElement(c0.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function Qv(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = _.useContext(rc);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    _.createElement(zt.Provider, { value: t }, r)
  );
}
function Kv(e, t, n, r) {
  var o;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let s = e,
    l = (o = n) == null ? void 0 : o.errors;
  if (l != null) {
    let f = s.findIndex(
      (d) => d.route.id && (l == null ? void 0 : l[d.route.id]),
    );
    f >= 0 || te(!1), (s = s.slice(0, Math.min(s.length, f + 1)));
  }
  let u = !1,
    c = -1;
  if (n && r && r.v7_partialHydration)
    for (let f = 0; f < s.length; f++) {
      let d = s[f];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (c = f),
        d.route.id)
      ) {
        let { loaderData: v, errors: w } = n,
          y =
            d.route.loader &&
            v[d.route.id] === void 0 &&
            (!w || w[d.route.id] === void 0);
        if (d.route.lazy || y) {
          (u = !0), c >= 0 ? (s = s.slice(0, c + 1)) : (s = [s[0]]);
          break;
        }
      }
    }
  return s.reduceRight((f, d, v) => {
    let w,
      y = !1,
      x = null,
      j = null;
    n &&
      ((w = l && d.route.id ? l[d.route.id] : void 0),
      (x = d.route.errorElement || Vv),
      u &&
        (c < 0 && v === 0
          ? (Zv("route-fallback", !1), (y = !0), (j = null))
          : c === v &&
            ((y = !0), (j = d.route.hydrateFallbackElement || null))));
    let m = t.concat(s.slice(0, v + 1)),
      p = () => {
        let g;
        return (
          w
            ? (g = x)
            : y
            ? (g = j)
            : d.route.Component
            ? (g = _.createElement(d.route.Component, null))
            : d.route.element
            ? (g = d.route.element)
            : (g = f),
          _.createElement(Qv, {
            match: d,
            routeContext: { outlet: f, matches: m, isDataRoute: n != null },
            children: g,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || v === 0)
      ? _.createElement(Wv, {
          location: n.location,
          revalidation: n.revalidation,
          component: x,
          error: w,
          children: p(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : p();
  }, null);
}
var p0 = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(p0 || {}),
  os = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(os || {});
function Gv(e) {
  let t = _.useContext(rc);
  return t || te(!1), t;
}
function Jv(e) {
  let t = _.useContext(Dv);
  return t || te(!1), t;
}
function qv(e) {
  let t = _.useContext(zt);
  return t || te(!1), t;
}
function h0(e) {
  let t = qv(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || te(!1), n.route.id;
}
function Yv() {
  var e;
  let t = _.useContext(c0),
    n = Jv(os.UseRouteError),
    r = h0(os.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function Xv() {
  let { router: e } = Gv(p0.UseNavigateStable),
    t = h0(os.UseNavigateStable),
    n = _.useRef(!1);
  return (
    d0(() => {
      n.current = !0;
    }),
    _.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : e.navigate(o, jo({ fromRouteId: t }, i)));
      },
      [e, t],
    )
  );
}
const Kd = {};
function Zv(e, t, n) {
  !t && !Kd[e] && (Kd[e] = !0);
}
function Gd(e) {
  let { to: t, replace: n, state: r, relative: o } = e;
  Pr() || te(!1);
  let { future: i, static: s } = _.useContext(pn),
    { matches: l } = _.useContext(zt),
    { pathname: u } = Fn(),
    c = bs(),
    f = nc(t, tc(l, i.v7_relativeSplatPath), u, o === "path"),
    d = JSON.stringify(f);
  return (
    _.useEffect(
      () => c(JSON.parse(d), { replace: n, state: r, relative: o }),
      [c, d, o, n, r],
    ),
    null
  );
}
function oc(e) {
  return Mv(e.context);
}
function Mt(e) {
  te(!1);
}
function ey(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = Gt.Pop,
    navigator: i,
    static: s = !1,
    future: l,
  } = e;
  Pr() && te(!1);
  let u = t.replace(/^\/*/, "/"),
    c = _.useMemo(
      () => ({
        basename: u,
        navigator: i,
        static: s,
        future: jo({ v7_relativeSplatPath: !1 }, l),
      }),
      [u, l, i, s],
    );
  typeof r == "string" && (r = kr(r));
  let {
      pathname: f = "/",
      search: d = "",
      hash: v = "",
      state: w = null,
      key: y = "default",
    } = r,
    x = _.useMemo(() => {
      let j = ec(f, u);
      return j == null
        ? null
        : {
            location: { pathname: j, search: d, hash: v, state: w, key: y },
            navigationType: o,
          };
    }, [u, f, d, v, w, y, o]);
  return x == null
    ? null
    : _.createElement(
        pn.Provider,
        { value: c },
        _.createElement(Ls.Provider, { children: n, value: x }),
      );
}
function ty(e) {
  let { children: t, location: n } = e;
  return Bv($a(t), n);
}
new Promise(() => {});
function $a(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    _.Children.forEach(e, (r, o) => {
      if (!_.isValidElement(r)) return;
      let i = [...t, o];
      if (r.type === _.Fragment) {
        n.push.apply(n, $a(r.props.children, i));
        return;
      }
      r.type !== Mt && te(!1), !r.props.index || !r.props.children || te(!1);
      let s = {
        id: r.props.id || i.join("-"),
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
      r.props.children && (s.children = $a(r.props.children, i)), n.push(s);
    }),
    n
  );
}
/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ma() {
  return (
    (Ma = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ma.apply(this, arguments)
  );
}
function ny(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function ry(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function oy(e, t) {
  return e.button === 0 && (!t || t === "_self") && !ry(e);
}
function Ba(e) {
  return (
    e === void 0 && (e = ""),
    new URLSearchParams(
      typeof e == "string" || Array.isArray(e) || e instanceof URLSearchParams
        ? e
        : Object.keys(e).reduce((t, n) => {
            let r = e[n];
            return t.concat(Array.isArray(r) ? r.map((o) => [n, o]) : [[n, r]]);
          }, []),
    )
  );
}
function iy(e, t) {
  let n = Ba(e);
  return (
    t &&
      t.forEach((r, o) => {
        n.has(o) ||
          t.getAll(o).forEach((i) => {
            n.append(o, i);
          });
      }),
    n
  );
}
const sy = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  ly = "6";
try {
  window.__reactRouterVersion = ly;
} catch {}
const ay = "startTransition",
  Jd = Vl[ay];
function uy(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    i = _.useRef();
  i.current == null && (i.current = dv({ window: o, v5Compat: !0 }));
  let s = i.current,
    [l, u] = _.useState({ action: s.action, location: s.location }),
    { v7_startTransition: c } = r || {},
    f = _.useCallback(
      (d) => {
        c && Jd ? Jd(() => u(d)) : u(d);
      },
      [u, c],
    );
  return (
    _.useLayoutEffect(() => s.listen(f), [s, f]),
    _.createElement(ey, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: s,
      future: r,
    })
  );
}
const cy =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  dy = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  wt = _.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: i,
        replace: s,
        state: l,
        target: u,
        to: c,
        preventScrollReset: f,
        unstable_viewTransition: d,
      } = t,
      v = ny(t, sy),
      { basename: w } = _.useContext(pn),
      y,
      x = !1;
    if (typeof c == "string" && dy.test(c) && ((y = c), cy))
      try {
        let g = new URL(window.location.href),
          S = c.startsWith("//") ? new URL(g.protocol + c) : new URL(c),
          E = ec(S.pathname, w);
        S.origin === g.origin && E != null
          ? (c = E + S.search + S.hash)
          : (x = !0);
      } catch {}
    let j = Iv(c, { relative: o }),
      m = fy(c, {
        replace: s,
        state: l,
        target: u,
        preventScrollReset: f,
        relative: o,
        unstable_viewTransition: d,
      });
    function p(g) {
      r && r(g), g.defaultPrevented || m(g);
    }
    return _.createElement(
      "a",
      Ma({}, v, { href: y || j, onClick: x || i ? r : p, ref: n, target: u }),
    );
  });
var qd;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(qd || (qd = {}));
var Yd;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Yd || (Yd = {}));
function fy(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: i,
      relative: s,
      unstable_viewTransition: l,
    } = t === void 0 ? {} : t,
    u = bs(),
    c = Fn(),
    f = f0(e, { relative: s });
  return _.useCallback(
    (d) => {
      if (oy(d, n)) {
        d.preventDefault();
        let v = r !== void 0 ? r : rs(c) === rs(f);
        u(e, {
          replace: v,
          state: o,
          preventScrollReset: i,
          relative: s,
          unstable_viewTransition: l,
        });
      }
    },
    [c, u, f, r, o, n, e, i, s, l],
  );
}
function py(e) {
  let t = _.useRef(Ba(e)),
    n = _.useRef(!1),
    r = Fn(),
    o = _.useMemo(() => iy(r.search, n.current ? null : t.current), [r.search]),
    i = bs(),
    s = _.useCallback(
      (l, u) => {
        const c = Ba(typeof l == "function" ? l(o) : l);
        (n.current = !0), i("?" + c, u);
      },
      [i, o],
    );
  return [o, s];
}
var m0 = { exports: {} },
  g0 = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var No = _;
function hy(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var my = typeof Object.is == "function" ? Object.is : hy,
  gy = No.useSyncExternalStore,
  vy = No.useRef,
  yy = No.useEffect,
  xy = No.useMemo,
  wy = No.useDebugValue;
g0.useSyncExternalStoreWithSelector = function (e, t, n, r, o) {
  var i = vy(null);
  if (i.current === null) {
    var s = { hasValue: !1, value: null };
    i.current = s;
  } else s = i.current;
  i = xy(
    function () {
      function u(w) {
        if (!c) {
          if (((c = !0), (f = w), (w = r(w)), o !== void 0 && s.hasValue)) {
            var y = s.value;
            if (o(y, w)) return (d = y);
          }
          return (d = w);
        }
        if (((y = d), my(f, w))) return y;
        var x = r(w);
        return o !== void 0 && o(y, x) ? y : ((f = w), (d = x));
      }
      var c = !1,
        f,
        d,
        v = n === void 0 ? null : n;
      return [
        function () {
          return u(t());
        },
        v === null
          ? void 0
          : function () {
              return u(v());
            },
      ];
    },
    [t, n, r, o],
  );
  var l = gy(e, i[0], i[1]);
  return (
    yy(
      function () {
        (s.hasValue = !0), (s.value = l);
      },
      [l],
    ),
    wy(l),
    l
  );
};
m0.exports = g0;
var Sy = m0.exports,
  Ie = "default" in Vl ? Se : Vl,
  Xd = Symbol.for("react-redux-context"),
  Zd = typeof globalThis < "u" ? globalThis : {};
function jy() {
  if (!Ie.createContext) return {};
  const e = Zd[Xd] ?? (Zd[Xd] = new Map());
  let t = e.get(Ie.createContext);
  return t || ((t = Ie.createContext(null)), e.set(Ie.createContext, t)), t;
}
var an = jy(),
  Cy = () => {
    throw new Error("uSES not initialized!");
  };
function ic(e = an) {
  return function () {
    return Ie.useContext(e);
  };
}
var v0 = ic(),
  y0 = Cy,
  Ey = (e) => {
    y0 = e;
  },
  ky = (e, t) => e === t;
function Py(e = an) {
  const t = e === an ? v0 : ic(e),
    n = (r, o = {}) => {
      const { equalityFn: i = ky, devModeChecks: s = {} } =
          typeof o == "function" ? { equalityFn: o } : o,
        {
          store: l,
          subscription: u,
          getServerState: c,
          stabilityCheck: f,
          identityFunctionCheck: d,
        } = t();
      Ie.useRef(!0);
      const v = Ie.useCallback(
          {
            [r.name](y) {
              return r(y);
            },
          }[r.name],
          [r, f, s.stabilityCheck],
        ),
        w = y0(u.addNestedSub, l.getState, c || l.getState, v, i);
      return Ie.useDebugValue(w), w;
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var sc = Py();
function _y(e) {
  e();
}
function Ry() {
  let e = null,
    t = null;
  return {
    clear() {
      (e = null), (t = null);
    },
    notify() {
      _y(() => {
        let n = e;
        for (; n; ) n.callback(), (n = n.next);
      });
    },
    get() {
      const n = [];
      let r = e;
      for (; r; ) n.push(r), (r = r.next);
      return n;
    },
    subscribe(n) {
      let r = !0;
      const o = (t = { callback: n, next: null, prev: t });
      return (
        o.prev ? (o.prev.next = o) : (e = o),
        function () {
          !r ||
            e === null ||
            ((r = !1),
            o.next ? (o.next.prev = o.prev) : (t = o.prev),
            o.prev ? (o.prev.next = o.next) : (e = o.next));
        }
      );
    },
  };
}
var ef = { notify() {}, get: () => [] };
function Ay(e, t) {
  let n,
    r = ef,
    o = 0,
    i = !1;
  function s(x) {
    f();
    const j = r.subscribe(x);
    let m = !1;
    return () => {
      m || ((m = !0), j(), d());
    };
  }
  function l() {
    r.notify();
  }
  function u() {
    y.onStateChange && y.onStateChange();
  }
  function c() {
    return i;
  }
  function f() {
    o++, n || ((n = t ? t.addNestedSub(u) : e.subscribe(u)), (r = Ry()));
  }
  function d() {
    o--, n && o === 0 && (n(), (n = void 0), r.clear(), (r = ef));
  }
  function v() {
    i || ((i = !0), f());
  }
  function w() {
    i && ((i = !1), d());
  }
  const y = {
    addNestedSub: s,
    notifyNestedSubs: l,
    handleChangeWrapper: u,
    isSubscribed: c,
    trySubscribe: v,
    tryUnsubscribe: w,
    getListeners: () => r,
  };
  return y;
}
var Ty =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Oy = Ty ? Ie.useLayoutEffect : Ie.useEffect;
function Ny({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: o = "once",
  identityFunctionCheck: i = "once",
}) {
  const s = Ie.useMemo(() => {
      const c = Ay(e);
      return {
        store: e,
        subscription: c,
        getServerState: r ? () => r : void 0,
        stabilityCheck: o,
        identityFunctionCheck: i,
      };
    }, [e, r, o, i]),
    l = Ie.useMemo(() => e.getState(), [e]);
  Oy(() => {
    const { subscription: c } = s;
    return (
      (c.onStateChange = c.notifyNestedSubs),
      c.trySubscribe(),
      l !== e.getState() && c.notifyNestedSubs(),
      () => {
        c.tryUnsubscribe(), (c.onStateChange = void 0);
      }
    );
  }, [s, l]);
  const u = t || an;
  return Ie.createElement(u.Provider, { value: s }, n);
}
var zy = Ny;
function x0(e = an) {
  const t = e === an ? v0 : ic(e),
    n = () => {
      const { store: r } = t();
      return r;
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var Ly = x0();
function by(e = an) {
  const t = e === an ? Ly : x0(e),
    n = () => t().dispatch;
  return Object.assign(n, { withTypes: () => n }), n;
}
var w0 = by();
Ey(Sy.useSyncExternalStoreWithSelector);
function ce(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Dy = (typeof Symbol == "function" && Symbol.observable) || "@@observable",
  tf = Dy,
  _l = () => Math.random().toString(36).substring(7).split("").join("."),
  Iy = {
    INIT: `@@redux/INIT${_l()}`,
    REPLACE: `@@redux/REPLACE${_l()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${_l()}`,
  },
  is = Iy;
function lc(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function S0(e, t, n) {
  if (typeof e != "function") throw new Error(ce(2));
  if (
    (typeof t == "function" && typeof n == "function") ||
    (typeof n == "function" && typeof arguments[3] == "function")
  )
    throw new Error(ce(0));
  if (
    (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
    typeof n < "u")
  ) {
    if (typeof n != "function") throw new Error(ce(1));
    return n(S0)(e, t);
  }
  let r = e,
    o = t,
    i = new Map(),
    s = i,
    l = 0,
    u = !1;
  function c() {
    s === i &&
      ((s = new Map()),
      i.forEach((j, m) => {
        s.set(m, j);
      }));
  }
  function f() {
    if (u) throw new Error(ce(3));
    return o;
  }
  function d(j) {
    if (typeof j != "function") throw new Error(ce(4));
    if (u) throw new Error(ce(5));
    let m = !0;
    c();
    const p = l++;
    return (
      s.set(p, j),
      function () {
        if (m) {
          if (u) throw new Error(ce(6));
          (m = !1), c(), s.delete(p), (i = null);
        }
      }
    );
  }
  function v(j) {
    if (!lc(j)) throw new Error(ce(7));
    if (typeof j.type > "u") throw new Error(ce(8));
    if (typeof j.type != "string") throw new Error(ce(17));
    if (u) throw new Error(ce(9));
    try {
      (u = !0), (o = r(o, j));
    } finally {
      u = !1;
    }
    return (
      (i = s).forEach((p) => {
        p();
      }),
      j
    );
  }
  function w(j) {
    if (typeof j != "function") throw new Error(ce(10));
    (r = j), v({ type: is.REPLACE });
  }
  function y() {
    const j = d;
    return {
      subscribe(m) {
        if (typeof m != "object" || m === null) throw new Error(ce(11));
        function p() {
          const S = m;
          S.next && S.next(f());
        }
        return p(), { unsubscribe: j(p) };
      },
      [tf]() {
        return this;
      },
    };
  }
  return (
    v({ type: is.INIT }),
    { dispatch: v, subscribe: d, getState: f, replaceReducer: w, [tf]: y }
  );
}
function Fy(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, { type: is.INIT }) > "u") throw new Error(ce(12));
    if (typeof n(void 0, { type: is.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(ce(13));
  });
}
function $y(e) {
  const t = Object.keys(e),
    n = {};
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    typeof e[s] == "function" && (n[s] = e[s]);
  }
  const r = Object.keys(n);
  let o;
  try {
    Fy(n);
  } catch (i) {
    o = i;
  }
  return function (s = {}, l) {
    if (o) throw o;
    let u = !1;
    const c = {};
    for (let f = 0; f < r.length; f++) {
      const d = r[f],
        v = n[d],
        w = s[d],
        y = v(w, l);
      if (typeof y > "u") throw (l && l.type, new Error(ce(14)));
      (c[d] = y), (u = u || y !== w);
    }
    return (u = u || r.length !== Object.keys(s).length), u ? c : s;
  };
}
function ss(...e) {
  return e.length === 0
    ? (t) => t
    : e.length === 1
    ? e[0]
    : e.reduce(
        (t, n) =>
          (...r) =>
            t(n(...r)),
      );
}
function My(...e) {
  return (t) => (n, r) => {
    const o = t(n, r);
    let i = () => {
      throw new Error(ce(15));
    };
    const s = { getState: o.getState, dispatch: (u, ...c) => i(u, ...c) },
      l = e.map((u) => u(s));
    return (i = ss(...l)(o.dispatch)), { ...o, dispatch: i };
  };
}
function By(e) {
  return lc(e) && "type" in e && typeof e.type == "string";
}
var j0 = Symbol.for("immer-nothing"),
  nf = Symbol.for("immer-draftable"),
  Me = Symbol.for("immer-state");
function rt(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`,
  );
}
var hr = Object.getPrototypeOf;
function un(e) {
  return !!e && !!e[Me];
}
function Tt(e) {
  var t;
  return e
    ? C0(e) ||
        Array.isArray(e) ||
        !!e[nf] ||
        !!((t = e.constructor) != null && t[nf]) ||
        Is(e) ||
        Fs(e)
    : !1;
}
var Uy = Object.prototype.constructor.toString();
function C0(e) {
  if (!e || typeof e != "object") return !1;
  const t = hr(e);
  if (t === null) return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object
    ? !0
    : typeof n == "function" && Function.toString.call(n) === Uy;
}
function ls(e, t) {
  Ds(e) === 0
    ? Reflect.ownKeys(e).forEach((n) => {
        t(n, e[n], e);
      })
    : e.forEach((n, r) => t(r, n, e));
}
function Ds(e) {
  const t = e[Me];
  return t ? t.type_ : Array.isArray(e) ? 1 : Is(e) ? 2 : Fs(e) ? 3 : 0;
}
function Ua(e, t) {
  return Ds(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function E0(e, t, n) {
  const r = Ds(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
}
function Hy(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Is(e) {
  return e instanceof Map;
}
function Fs(e) {
  return e instanceof Set;
}
function Sn(e) {
  return e.copy_ || e.base_;
}
function Ha(e, t) {
  if (Is(e)) return new Map(e);
  if (Fs(e)) return new Set(e);
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  if (!t && C0(e))
    return hr(e) ? { ...e } : Object.assign(Object.create(null), e);
  const n = Object.getOwnPropertyDescriptors(e);
  delete n[Me];
  let r = Reflect.ownKeys(n);
  for (let o = 0; o < r.length; o++) {
    const i = r[o],
      s = n[i];
    s.writable === !1 && ((s.writable = !0), (s.configurable = !0)),
      (s.get || s.set) &&
        (n[i] = {
          configurable: !0,
          writable: !0,
          enumerable: s.enumerable,
          value: e[i],
        });
  }
  return Object.create(hr(e), n);
}
function ac(e, t = !1) {
  return (
    $s(e) ||
      un(e) ||
      !Tt(e) ||
      (Ds(e) > 1 && (e.set = e.add = e.clear = e.delete = Vy),
      Object.freeze(e),
      t && Object.entries(e).forEach(([n, r]) => ac(r, !0))),
    e
  );
}
function Vy() {
  rt(2);
}
function $s(e) {
  return Object.isFrozen(e);
}
var Wy = {};
function bn(e) {
  const t = Wy[e];
  return t || rt(0, e), t;
}
var Co;
function k0() {
  return Co;
}
function Qy(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function rf(e, t) {
  t &&
    (bn("Patches"),
    (e.patches_ = []),
    (e.inversePatches_ = []),
    (e.patchListener_ = t));
}
function Va(e) {
  Wa(e), e.drafts_.forEach(Ky), (e.drafts_ = null);
}
function Wa(e) {
  e === Co && (Co = e.parent_);
}
function of(e) {
  return (Co = Qy(Co, e));
}
function Ky(e) {
  const t = e[Me];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
}
function sf(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return (
    e !== void 0 && e !== n
      ? (n[Me].modified_ && (Va(t), rt(4)),
        Tt(e) && ((e = as(t, e)), t.parent_ || us(t, e)),
        t.patches_ &&
          bn("Patches").generateReplacementPatches_(
            n[Me].base_,
            e,
            t.patches_,
            t.inversePatches_,
          ))
      : (e = as(t, n, [])),
    Va(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e !== j0 ? e : void 0
  );
}
function as(e, t, n) {
  if ($s(t)) return t;
  const r = t[Me];
  if (!r) return ls(t, (o, i) => lf(e, r, t, o, i, n)), t;
  if (r.scope_ !== e) return t;
  if (!r.modified_) return us(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    (r.finalized_ = !0), r.scope_.unfinalizedDrafts_--;
    const o = r.copy_;
    let i = o,
      s = !1;
    r.type_ === 3 && ((i = new Set(o)), o.clear(), (s = !0)),
      ls(i, (l, u) => lf(e, r, o, l, u, n, s)),
      us(e, o, !1),
      n &&
        e.patches_ &&
        bn("Patches").generatePatches_(r, n, e.patches_, e.inversePatches_);
  }
  return r.copy_;
}
function lf(e, t, n, r, o, i, s) {
  if (un(o)) {
    const l =
        i && t && t.type_ !== 3 && !Ua(t.assigned_, r) ? i.concat(r) : void 0,
      u = as(e, o, l);
    if ((E0(n, r, u), un(u))) e.canAutoFreeze_ = !1;
    else return;
  } else s && n.add(o);
  if (Tt(o) && !$s(o)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
    as(e, o),
      (!t || !t.scope_.parent_) &&
        typeof r != "symbol" &&
        Object.prototype.propertyIsEnumerable.call(n, r) &&
        us(e, o);
  }
}
function us(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && ac(t, n);
}
function Gy(e, t) {
  const n = Array.isArray(e),
    r = {
      type_: n ? 1 : 0,
      scope_: t ? t.scope_ : k0(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: t,
      base_: e,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    };
  let o = r,
    i = uc;
  n && ((o = [r]), (i = Eo));
  const { revoke: s, proxy: l } = Proxy.revocable(o, i);
  return (r.draft_ = l), (r.revoke_ = s), l;
}
var uc = {
    get(e, t) {
      if (t === Me) return e;
      const n = Sn(e);
      if (!Ua(n, t)) return Jy(e, n, t);
      const r = n[t];
      return e.finalized_ || !Tt(r)
        ? r
        : r === Rl(e.base_, t)
        ? (Al(e), (e.copy_[t] = Ka(r, e)))
        : r;
    },
    has(e, t) {
      return t in Sn(e);
    },
    ownKeys(e) {
      return Reflect.ownKeys(Sn(e));
    },
    set(e, t, n) {
      const r = P0(Sn(e), t);
      if (r != null && r.set) return r.set.call(e.draft_, n), !0;
      if (!e.modified_) {
        const o = Rl(Sn(e), t),
          i = o == null ? void 0 : o[Me];
        if (i && i.base_ === n)
          return (e.copy_[t] = n), (e.assigned_[t] = !1), !0;
        if (Hy(n, o) && (n !== void 0 || Ua(e.base_, t))) return !0;
        Al(e), Qa(e);
      }
      return (
        (e.copy_[t] === n && (n !== void 0 || t in e.copy_)) ||
          (Number.isNaN(n) && Number.isNaN(e.copy_[t])) ||
          ((e.copy_[t] = n), (e.assigned_[t] = !0)),
        !0
      );
    },
    deleteProperty(e, t) {
      return (
        Rl(e.base_, t) !== void 0 || t in e.base_
          ? ((e.assigned_[t] = !1), Al(e), Qa(e))
          : delete e.assigned_[t],
        e.copy_ && delete e.copy_[t],
        !0
      );
    },
    getOwnPropertyDescriptor(e, t) {
      const n = Sn(e),
        r = Reflect.getOwnPropertyDescriptor(n, t);
      return (
        r && {
          writable: !0,
          configurable: e.type_ !== 1 || t !== "length",
          enumerable: r.enumerable,
          value: n[t],
        }
      );
    },
    defineProperty() {
      rt(11);
    },
    getPrototypeOf(e) {
      return hr(e.base_);
    },
    setPrototypeOf() {
      rt(12);
    },
  },
  Eo = {};
ls(uc, (e, t) => {
  Eo[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
});
Eo.deleteProperty = function (e, t) {
  return Eo.set.call(this, e, t, void 0);
};
Eo.set = function (e, t, n) {
  return uc.set.call(this, e[0], t, n, e[0]);
};
function Rl(e, t) {
  const n = e[Me];
  return (n ? Sn(n) : e)[t];
}
function Jy(e, t, n) {
  var o;
  const r = P0(t, n);
  return r
    ? "value" in r
      ? r.value
      : (o = r.get) == null
      ? void 0
      : o.call(e.draft_)
    : void 0;
}
function P0(e, t) {
  if (!(t in e)) return;
  let n = hr(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r) return r;
    n = hr(n);
  }
}
function Qa(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && Qa(e.parent_));
}
function Al(e) {
  e.copy_ || (e.copy_ = Ha(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
var qy = class {
  constructor(e) {
    (this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (t, n, r) => {
        if (typeof t == "function" && typeof n != "function") {
          const i = n;
          n = t;
          const s = this;
          return function (u = i, ...c) {
            return s.produce(u, (f) => n.call(this, f, ...c));
          };
        }
        typeof n != "function" && rt(6),
          r !== void 0 && typeof r != "function" && rt(7);
        let o;
        if (Tt(t)) {
          const i = of(this),
            s = Ka(t, void 0);
          let l = !0;
          try {
            (o = n(s)), (l = !1);
          } finally {
            l ? Va(i) : Wa(i);
          }
          return rf(i, r), sf(o, i);
        } else if (!t || typeof t != "object") {
          if (
            ((o = n(t)),
            o === void 0 && (o = t),
            o === j0 && (o = void 0),
            this.autoFreeze_ && ac(o, !0),
            r)
          ) {
            const i = [],
              s = [];
            bn("Patches").generateReplacementPatches_(t, o, i, s), r(i, s);
          }
          return o;
        } else rt(1, t);
      }),
      (this.produceWithPatches = (t, n) => {
        if (typeof t == "function")
          return (s, ...l) => this.produceWithPatches(s, (u) => t(u, ...l));
        let r, o;
        return [
          this.produce(t, n, (s, l) => {
            (r = s), (o = l);
          }),
          r,
          o,
        ];
      }),
      typeof (e == null ? void 0 : e.autoFreeze) == "boolean" &&
        this.setAutoFreeze(e.autoFreeze),
      typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" &&
        this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    Tt(e) || rt(8), un(e) && (e = _0(e));
    const t = of(this),
      n = Ka(e, void 0);
    return (n[Me].isManual_ = !0), Wa(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[Me];
    (!n || !n.isManual_) && rt(9);
    const { scope_: r } = n;
    return rf(r, t), sf(void 0, r);
  }
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let n;
    for (n = t.length - 1; n >= 0; n--) {
      const o = t[n];
      if (o.path.length === 0 && o.op === "replace") {
        e = o.value;
        break;
      }
    }
    n > -1 && (t = t.slice(n + 1));
    const r = bn("Patches").applyPatches_;
    return un(e) ? r(e, t) : this.produce(e, (o) => r(o, t));
  }
};
function Ka(e, t) {
  const n = Is(e)
    ? bn("MapSet").proxyMap_(e, t)
    : Fs(e)
    ? bn("MapSet").proxySet_(e, t)
    : Gy(e, t);
  return (t ? t.scope_ : k0()).drafts_.push(n), n;
}
function _0(e) {
  return un(e) || rt(10, e), R0(e);
}
function R0(e) {
  if (!Tt(e) || $s(e)) return e;
  const t = e[Me];
  let n;
  if (t) {
    if (!t.modified_) return t.base_;
    (t.finalized_ = !0), (n = Ha(e, t.scope_.immer_.useStrictShallowCopy_));
  } else n = Ha(e, !0);
  return (
    ls(n, (r, o) => {
      E0(n, r, R0(o));
    }),
    t && (t.finalized_ = !1),
    n
  );
}
var Be = new qy(),
  A0 = Be.produce;
Be.produceWithPatches.bind(Be);
Be.setAutoFreeze.bind(Be);
Be.setUseStrictShallowCopy.bind(Be);
Be.applyPatches.bind(Be);
Be.createDraft.bind(Be);
Be.finishDraft.bind(Be);
function Yy(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function") throw new TypeError(t);
}
function Xy(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object") throw new TypeError(t);
}
function Zy(
  e,
  t = "expected all items to be functions, instead received the following types: ",
) {
  if (!e.every((n) => typeof n == "function")) {
    const n = e
      .map((r) =>
        typeof r == "function" ? `function ${r.name || "unnamed"}()` : typeof r,
      )
      .join(", ");
    throw new TypeError(`${t}[${n}]`);
  }
}
var af = (e) => (Array.isArray(e) ? e : [e]);
function ex(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return (
    Zy(
      t,
      "createSelector expects all input-selectors to be functions, but received the following types: ",
    ),
    t
  );
}
function tx(e, t) {
  const n = [],
    { length: r } = e;
  for (let o = 0; o < r; o++) n.push(e[o].apply(null, t));
  return n;
}
var nx = class {
    constructor(e) {
      this.value = e;
    }
    deref() {
      return this.value;
    }
  },
  rx = typeof WeakRef < "u" ? WeakRef : nx,
  ox = 0,
  uf = 1;
function ri() {
  return { s: ox, v: void 0, o: null, p: null };
}
function cc(e, t = {}) {
  let n = ri();
  const { resultEqualityCheck: r } = t;
  let o,
    i = 0;
  function s() {
    var d;
    let l = n;
    const { length: u } = arguments;
    for (let v = 0, w = u; v < w; v++) {
      const y = arguments[v];
      if (typeof y == "function" || (typeof y == "object" && y !== null)) {
        let x = l.o;
        x === null && (l.o = x = new WeakMap());
        const j = x.get(y);
        j === void 0 ? ((l = ri()), x.set(y, l)) : (l = j);
      } else {
        let x = l.p;
        x === null && (l.p = x = new Map());
        const j = x.get(y);
        j === void 0 ? ((l = ri()), x.set(y, l)) : (l = j);
      }
    }
    const c = l;
    let f;
    if (
      (l.s === uf ? (f = l.v) : ((f = e.apply(null, arguments)), i++),
      (c.s = uf),
      r)
    ) {
      const v =
        ((d = o == null ? void 0 : o.deref) == null ? void 0 : d.call(o)) ?? o;
      v != null && r(v, f) && ((f = v), i !== 0 && i--),
        (o =
          (typeof f == "object" && f !== null) || typeof f == "function"
            ? new rx(f)
            : f);
    }
    return (c.v = f), f;
  }
  return (
    (s.clearCache = () => {
      (n = ri()), s.resetResultsCount();
    }),
    (s.resultsCount = () => i),
    (s.resetResultsCount = () => {
      i = 0;
    }),
    s
  );
}
function T0(e, ...t) {
  const n = typeof e == "function" ? { memoize: e, memoizeOptions: t } : e,
    r = (...o) => {
      let i = 0,
        s = 0,
        l,
        u = {},
        c = o.pop();
      typeof c == "object" && ((u = c), (c = o.pop())),
        Yy(
          c,
          `createSelector expects an output function after the inputs, but received: [${typeof c}]`,
        );
      const f = { ...n, ...u },
        {
          memoize: d,
          memoizeOptions: v = [],
          argsMemoize: w = cc,
          argsMemoizeOptions: y = [],
          devModeChecks: x = {},
        } = f,
        j = af(v),
        m = af(y),
        p = ex(o),
        g = d(function () {
          return i++, c.apply(null, arguments);
        }, ...j),
        S = w(function () {
          s++;
          const k = tx(p, arguments);
          return (l = g.apply(null, k)), l;
        }, ...m);
      return Object.assign(S, {
        resultFunc: c,
        memoizedResultFunc: g,
        dependencies: p,
        dependencyRecomputations: () => s,
        resetDependencyRecomputations: () => {
          s = 0;
        },
        lastResult: () => l,
        recomputations: () => i,
        resetRecomputations: () => {
          i = 0;
        },
        memoize: d,
        argsMemoize: w,
      });
    };
  return Object.assign(r, { withTypes: () => r }), r;
}
var ix = T0(cc),
  sx = Object.assign(
    (e, t = ix) => {
      Xy(
        e,
        `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`,
      );
      const n = Object.keys(e),
        r = n.map((i) => e[i]);
      return t(r, (...i) => i.reduce((s, l, u) => ((s[n[u]] = l), s), {}));
    },
    { withTypes: () => sx },
  );
function O0(e) {
  return ({ dispatch: n, getState: r }) =>
    (o) =>
    (i) =>
      typeof i == "function" ? i(n, r, e) : o(i);
}
var lx = O0(),
  ax = O0,
  ux = (...e) => {
    const t = T0(...e),
      n = Object.assign(
        (...r) => {
          const o = t(...r),
            i = (s, ...l) => o(un(s) ? _0(s) : s, ...l);
          return Object.assign(i, o), i;
        },
        { withTypes: () => n },
      );
    return n;
  };
ux(cc);
var cx =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? ss
              : ss.apply(null, arguments);
        },
  dx = (e) => e && typeof e.match == "function";
function Et(e, t) {
  function n(...r) {
    if (t) {
      let o = t(...r);
      if (!o) throw new Error(Ne(0));
      return {
        type: e,
        payload: o.payload,
        ...("meta" in o && { meta: o.meta }),
        ...("error" in o && { error: o.error }),
      };
    }
    return { type: e, payload: r[0] };
  }
  return (
    (n.toString = () => `${e}`),
    (n.type = e),
    (n.match = (r) => By(r) && r.type === e),
    n
  );
}
var N0 = class Wr extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Wr.prototype);
  }
  static get [Symbol.species]() {
    return Wr;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0])
      ? new Wr(...t[0].concat(this))
      : new Wr(...t.concat(this));
  }
};
function cf(e) {
  return Tt(e) ? A0(e, () => {}) : e;
}
function df(e, t, n) {
  if (e.has(t)) {
    let o = e.get(t);
    return n.update && ((o = n.update(o, t, e)), e.set(t, o)), o;
  }
  if (!n.insert) throw new Error(Ne(10));
  const r = n.insert(t, e);
  return e.set(t, r), r;
}
function fx(e) {
  return typeof e == "boolean";
}
var px = () =>
    function (t) {
      const {
        thunk: n = !0,
        immutableCheck: r = !0,
        serializableCheck: o = !0,
        actionCreatorCheck: i = !0,
      } = t ?? {};
      let s = new N0();
      return n && (fx(n) ? s.push(lx) : s.push(ax(n.extraArgument))), s;
    },
  hx = "RTK_autoBatch",
  z0 = (e) => (t) => {
    setTimeout(t, e);
  },
  mx =
    typeof window < "u" && window.requestAnimationFrame
      ? window.requestAnimationFrame
      : z0(10),
  gx =
    (e = { type: "raf" }) =>
    (t) =>
    (...n) => {
      const r = t(...n);
      let o = !0,
        i = !1,
        s = !1;
      const l = new Set(),
        u =
          e.type === "tick"
            ? queueMicrotask
            : e.type === "raf"
            ? mx
            : e.type === "callback"
            ? e.queueNotification
            : z0(e.timeout),
        c = () => {
          (s = !1), i && ((i = !1), l.forEach((f) => f()));
        };
      return Object.assign({}, r, {
        subscribe(f) {
          const d = () => o && f(),
            v = r.subscribe(d);
          return (
            l.add(f),
            () => {
              v(), l.delete(f);
            }
          );
        },
        dispatch(f) {
          var d;
          try {
            return (
              (o = !((d = f == null ? void 0 : f.meta) != null && d[hx])),
              (i = !o),
              i && (s || ((s = !0), u(c))),
              r.dispatch(f)
            );
          } finally {
            o = !0;
          }
        },
      });
    },
  vx = (e) =>
    function (n) {
      const { autoBatch: r = !0 } = n ?? {};
      let o = new N0(e);
      return r && o.push(gx(typeof r == "object" ? r : void 0)), o;
    },
  yx = !0;
function xx(e) {
  const t = px(),
    {
      reducer: n = void 0,
      middleware: r,
      devTools: o = !0,
      preloadedState: i = void 0,
      enhancers: s = void 0,
    } = e || {};
  let l;
  if (typeof n == "function") l = n;
  else if (lc(n)) l = $y(n);
  else throw new Error(Ne(1));
  let u;
  typeof r == "function" ? (u = r(t)) : (u = t());
  let c = ss;
  o && (c = cx({ trace: !yx, ...(typeof o == "object" && o) }));
  const f = My(...u),
    d = vx(f);
  let v = typeof s == "function" ? s(d) : d();
  const w = c(...v);
  return S0(l, i, w);
}
function L0(e) {
  const t = {},
    n = [];
  let r;
  const o = {
    addCase(i, s) {
      const l = typeof i == "string" ? i : i.type;
      if (!l) throw new Error(Ne(28));
      if (l in t) throw new Error(Ne(29));
      return (t[l] = s), o;
    },
    addMatcher(i, s) {
      return n.push({ matcher: i, reducer: s }), o;
    },
    addDefaultCase(i) {
      return (r = i), o;
    },
  };
  return e(o), [t, n, r];
}
function wx(e) {
  return typeof e == "function";
}
function Sx(e, t) {
  let [n, r, o] = L0(t),
    i;
  if (wx(e)) i = () => cf(e());
  else {
    const l = cf(e);
    i = () => l;
  }
  function s(l = i(), u) {
    let c = [
      n[u.type],
      ...r.filter(({ matcher: f }) => f(u)).map(({ reducer: f }) => f),
    ];
    return (
      c.filter((f) => !!f).length === 0 && (c = [o]),
      c.reduce((f, d) => {
        if (d)
          if (un(f)) {
            const w = d(f, u);
            return w === void 0 ? f : w;
          } else {
            if (Tt(f)) return A0(f, (v) => d(v, u));
            {
              const v = d(f, u);
              if (v === void 0) {
                if (f === null) return f;
                throw new Error(Ne(9));
              }
              return v;
            }
          }
        return f;
      }, l)
    );
  }
  return (s.getInitialState = i), s;
}
var jx = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
  b0 = (e = 21) => {
    let t = "",
      n = e;
    for (; n--; ) t += jx[(Math.random() * 64) | 0];
    return t;
  },
  Cx = (e, t) => (dx(e) ? e.match(t) : e(t));
function Ex(...e) {
  return (t) => e.some((n) => Cx(n, t));
}
var kx = ["name", "message", "stack", "code"],
  Tl = class {
    constructor(e, t) {
      Zs(this, "_type");
      (this.payload = e), (this.meta = t);
    }
  },
  ff = class {
    constructor(e, t) {
      Zs(this, "_type");
      (this.payload = e), (this.meta = t);
    }
  },
  Px = (e) => {
    if (typeof e == "object" && e !== null) {
      const t = {};
      for (const n of kx) typeof e[n] == "string" && (t[n] = e[n]);
      return t;
    }
    return { message: String(e) };
  },
  zo = (() => {
    function e(t, n, r) {
      const o = Et(t + "/fulfilled", (u, c, f, d) => ({
          payload: u,
          meta: {
            ...(d || {}),
            arg: f,
            requestId: c,
            requestStatus: "fulfilled",
          },
        })),
        i = Et(t + "/pending", (u, c, f) => ({
          payload: void 0,
          meta: {
            ...(f || {}),
            arg: c,
            requestId: u,
            requestStatus: "pending",
          },
        })),
        s = Et(t + "/rejected", (u, c, f, d, v) => ({
          payload: d,
          error: ((r && r.serializeError) || Px)(u || "Rejected"),
          meta: {
            ...(v || {}),
            arg: f,
            requestId: c,
            rejectedWithValue: !!d,
            requestStatus: "rejected",
            aborted: (u == null ? void 0 : u.name) === "AbortError",
            condition: (u == null ? void 0 : u.name) === "ConditionError",
          },
        }));
      function l(u) {
        return (c, f, d) => {
          const v = r != null && r.idGenerator ? r.idGenerator(u) : b0(),
            w = new AbortController();
          let y, x;
          function j(p) {
            (x = p), w.abort();
          }
          const m = (async function () {
            var S, E;
            let p;
            try {
              let k =
                (S = r == null ? void 0 : r.condition) == null
                  ? void 0
                  : S.call(r, u, { getState: f, extra: d });
              if ((Rx(k) && (k = await k), k === !1 || w.signal.aborted))
                throw {
                  name: "ConditionError",
                  message: "Aborted due to condition callback returning false.",
                };
              const P = new Promise((A, I) => {
                (y = () => {
                  I({ name: "AbortError", message: x || "Aborted" });
                }),
                  w.signal.addEventListener("abort", y);
              });
              c(
                i(
                  v,
                  u,
                  (E = r == null ? void 0 : r.getPendingMeta) == null
                    ? void 0
                    : E.call(
                        r,
                        { requestId: v, arg: u },
                        { getState: f, extra: d },
                      ),
                ),
              ),
                (p = await Promise.race([
                  P,
                  Promise.resolve(
                    n(u, {
                      dispatch: c,
                      getState: f,
                      extra: d,
                      requestId: v,
                      signal: w.signal,
                      abort: j,
                      rejectWithValue: (A, I) => new Tl(A, I),
                      fulfillWithValue: (A, I) => new ff(A, I),
                    }),
                  ).then((A) => {
                    if (A instanceof Tl) throw A;
                    return A instanceof ff
                      ? o(A.payload, v, u, A.meta)
                      : o(A, v, u);
                  }),
                ]));
            } catch (k) {
              p =
                k instanceof Tl ? s(null, v, u, k.payload, k.meta) : s(k, v, u);
            } finally {
              y && w.signal.removeEventListener("abort", y);
            }
            return (
              (r &&
                !r.dispatchConditionRejection &&
                s.match(p) &&
                p.meta.condition) ||
                c(p),
              p
            );
          })();
          return Object.assign(m, {
            abort: j,
            requestId: v,
            arg: u,
            unwrap() {
              return m.then(_x);
            },
          });
        };
      }
      return Object.assign(l, {
        pending: i,
        rejected: s,
        fulfilled: o,
        settled: Ex(s, o),
        typePrefix: t,
      });
    }
    return (e.withTypes = () => e), e;
  })();
function _x(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload;
}
function Rx(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var Ax = Symbol.for("rtk-slice-createasyncthunk");
function Tx(e, t) {
  return `${e}/${t}`;
}
function Ox({ creators: e } = {}) {
  var n;
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[Ax];
  return function (o) {
    const { name: i, reducerPath: s = i } = o;
    if (!i) throw new Error(Ne(11));
    typeof process < "u";
    const l =
        (typeof o.reducers == "function" ? o.reducers(Lx()) : o.reducers) || {},
      u = Object.keys(l),
      c = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      f = {
        addCase(g, S) {
          const E = typeof g == "string" ? g : g.type;
          if (!E) throw new Error(Ne(12));
          if (E in c.sliceCaseReducersByType) throw new Error(Ne(13));
          return (c.sliceCaseReducersByType[E] = S), f;
        },
        addMatcher(g, S) {
          return c.sliceMatchers.push({ matcher: g, reducer: S }), f;
        },
        exposeAction(g, S) {
          return (c.actionCreators[g] = S), f;
        },
        exposeCaseReducer(g, S) {
          return (c.sliceCaseReducersByName[g] = S), f;
        },
      };
    u.forEach((g) => {
      const S = l[g],
        E = {
          reducerName: g,
          type: Tx(i, g),
          createNotation: typeof o.reducers == "function",
        };
      Dx(S) ? Fx(E, S, f, t) : bx(E, S, f);
    });
    function d() {
      const [g = {}, S = [], E = void 0] =
          typeof o.extraReducers == "function"
            ? L0(o.extraReducers)
            : [o.extraReducers],
        k = { ...g, ...c.sliceCaseReducersByType };
      return Sx(o.initialState, (P) => {
        for (let A in k) P.addCase(A, k[A]);
        for (let A of c.sliceMatchers) P.addMatcher(A.matcher, A.reducer);
        for (let A of S) P.addMatcher(A.matcher, A.reducer);
        E && P.addDefaultCase(E);
      });
    }
    const v = (g) => g,
      w = new Map();
    let y;
    function x(g, S) {
      return y || (y = d()), y(g, S);
    }
    function j() {
      return y || (y = d()), y.getInitialState();
    }
    function m(g, S = !1) {
      function E(P) {
        let A = P[g];
        return typeof A > "u" && S && (A = j()), A;
      }
      function k(P = v) {
        const A = df(w, S, { insert: () => new WeakMap() });
        return df(A, P, {
          insert: () => {
            const I = {};
            for (const [b, ye] of Object.entries(o.selectors ?? {}))
              I[b] = Nx(ye, P, j, S);
            return I;
          },
        });
      }
      return {
        reducerPath: g,
        getSelectors: k,
        get selectors() {
          return k(E);
        },
        selectSlice: E,
      };
    }
    const p = {
      name: i,
      reducer: x,
      actions: c.actionCreators,
      caseReducers: c.sliceCaseReducersByName,
      getInitialState: j,
      ...m(s),
      injectInto(g, { reducerPath: S, ...E } = {}) {
        const k = S ?? s;
        return (
          g.inject({ reducerPath: k, reducer: x }, E), { ...p, ...m(k, !0) }
        );
      },
    };
    return p;
  };
}
function Nx(e, t, n, r) {
  function o(i, ...s) {
    let l = t(i);
    return typeof l > "u" && r && (l = n()), e(l, ...s);
  }
  return (o.unwrapped = e), o;
}
var zx = Ox();
function Lx() {
  function e(t, n) {
    return { _reducerDefinitionType: "asyncThunk", payloadCreator: t, ...n };
  }
  return (
    (e.withTypes = () => e),
    {
      reducer(t) {
        return Object.assign(
          {
            [t.name](...n) {
              return t(...n);
            },
          }[t.name],
          { _reducerDefinitionType: "reducer" },
        );
      },
      preparedReducer(t, n) {
        return {
          _reducerDefinitionType: "reducerWithPrepare",
          prepare: t,
          reducer: n,
        };
      },
      asyncThunk: e,
    }
  );
}
function bx({ type: e, reducerName: t, createNotation: n }, r, o) {
  let i, s;
  if ("reducer" in r) {
    if (n && !Ix(r)) throw new Error(Ne(17));
    (i = r.reducer), (s = r.prepare);
  } else i = r;
  o.addCase(e, i)
    .exposeCaseReducer(t, i)
    .exposeAction(t, s ? Et(e, s) : Et(e));
}
function Dx(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function Ix(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function Fx({ type: e, reducerName: t }, n, r, o) {
  if (!o) throw new Error(Ne(18));
  const {
      payloadCreator: i,
      fulfilled: s,
      pending: l,
      rejected: u,
      settled: c,
      options: f,
    } = n,
    d = o(e, i, f);
  r.exposeAction(t, d),
    s && r.addCase(d.fulfilled, s),
    l && r.addCase(d.pending, l),
    u && r.addCase(d.rejected, u),
    c && r.addMatcher(d.settled, c),
    r.exposeCaseReducer(t, {
      fulfilled: s || oi,
      pending: l || oi,
      rejected: u || oi,
      settled: c || oi,
    });
}
function oi() {}
var $x = (e, t) => {
    if (typeof e != "function") throw new Error(Ne(32));
  },
  dc = "listenerMiddleware",
  Mx = (e) => {
    let { type: t, actionCreator: n, matcher: r, predicate: o, effect: i } = e;
    if (t) o = Et(t).match;
    else if (n) (t = n.type), (o = n.match);
    else if (r) o = r;
    else if (!o) throw new Error(Ne(21));
    return $x(i), { predicate: o, type: t, effect: i };
  },
  Bx = Object.assign(
    (e) => {
      const { type: t, predicate: n, effect: r } = Mx(e);
      return {
        id: b0(),
        effect: r,
        type: t,
        predicate: n,
        pending: new Set(),
        unsubscribe: () => {
          throw new Error(Ne(22));
        },
      };
    },
    { withTypes: () => Bx },
  ),
  Ux = Object.assign(Et(`${dc}/add`), { withTypes: () => Ux });
Et(`${dc}/removeAll`);
var Hx = Object.assign(Et(`${dc}/remove`), { withTypes: () => Hx });
function Ne(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
function D0(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: Vx } = Object.prototype,
  { getPrototypeOf: fc } = Object,
  Ms = ((e) => (t) => {
    const n = Vx.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  mt = (e) => ((e = e.toLowerCase()), (t) => Ms(t) === e),
  Bs = (e) => (t) => typeof t === e,
  { isArray: _r } = Array,
  ko = Bs("undefined");
function Wx(e) {
  return (
    e !== null &&
    !ko(e) &&
    e.constructor !== null &&
    !ko(e.constructor) &&
    Ge(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const I0 = mt("ArrayBuffer");
function Qx(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && I0(e.buffer)),
    t
  );
}
const Kx = Bs("string"),
  Ge = Bs("function"),
  F0 = Bs("number"),
  Us = (e) => e !== null && typeof e == "object",
  Gx = (e) => e === !0 || e === !1,
  ki = (e) => {
    if (Ms(e) !== "object") return !1;
    const t = fc(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  Jx = mt("Date"),
  qx = mt("File"),
  Yx = mt("Blob"),
  Xx = mt("FileList"),
  Zx = (e) => Us(e) && Ge(e.pipe),
  e2 = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (Ge(e.append) &&
          ((t = Ms(e)) === "formdata" ||
            (t === "object" &&
              Ge(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  t2 = mt("URLSearchParams"),
  n2 = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Lo(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, o;
  if ((typeof e != "object" && (e = [e]), _r(e)))
    for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      s = i.length;
    let l;
    for (r = 0; r < s; r++) (l = i[r]), t.call(null, e[l], l, e);
  }
}
function $0(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    o;
  for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o;
  return null;
}
const M0 =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  B0 = (e) => !ko(e) && e !== M0;
function Ga() {
  const { caseless: e } = (B0(this) && this) || {},
    t = {},
    n = (r, o) => {
      const i = (e && $0(t, o)) || o;
      ki(t[i]) && ki(r)
        ? (t[i] = Ga(t[i], r))
        : ki(r)
        ? (t[i] = Ga({}, r))
        : _r(r)
        ? (t[i] = r.slice())
        : (t[i] = r);
    };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Lo(arguments[r], n);
  return t;
}
const r2 = (e, t, n, { allOwnKeys: r } = {}) => (
    Lo(
      t,
      (o, i) => {
        n && Ge(o) ? (e[i] = D0(o, n)) : (e[i] = o);
      },
      { allOwnKeys: r },
    ),
    e
  ),
  o2 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  i2 = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  s2 = (e, t, n, r) => {
    let o, i, s;
    const l = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
        (s = o[i]), (!r || r(s, e, t)) && !l[s] && ((t[s] = e[s]), (l[s] = !0));
      e = n !== !1 && fc(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  l2 = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  a2 = (e) => {
    if (!e) return null;
    if (_r(e)) return e;
    let t = e.length;
    if (!F0(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  u2 = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && fc(Uint8Array)),
  c2 = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = r.next()) && !o.done; ) {
      const i = o.value;
      t.call(e, i[0], i[1]);
    }
  },
  d2 = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  f2 = mt("HTMLFormElement"),
  p2 = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o;
    }),
  pf = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  h2 = mt("RegExp"),
  U0 = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Lo(n, (o, i) => {
      let s;
      (s = t(o, i, e)) !== !1 && (r[i] = s || o);
    }),
      Object.defineProperties(e, r);
  },
  m2 = (e) => {
    U0(e, (t, n) => {
      if (Ge(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (Ge(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  g2 = (e, t) => {
    const n = {},
      r = (o) => {
        o.forEach((i) => {
          n[i] = !0;
        });
      };
    return _r(e) ? r(e) : r(String(e).split(t)), n;
  },
  v2 = () => {},
  y2 = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  Ol = "abcdefghijklmnopqrstuvwxyz",
  hf = "0123456789",
  H0 = { DIGIT: hf, ALPHA: Ol, ALPHA_DIGIT: Ol + Ol.toUpperCase() + hf },
  x2 = (e = 16, t = H0.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function w2(e) {
  return !!(
    e &&
    Ge(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const S2 = (e) => {
    const t = new Array(10),
      n = (r, o) => {
        if (Us(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[o] = r;
            const i = _r(r) ? [] : {};
            return (
              Lo(r, (s, l) => {
                const u = n(s, o + 1);
                !ko(u) && (i[l] = u);
              }),
              (t[o] = void 0),
              i
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  j2 = mt("AsyncFunction"),
  C2 = (e) => e && (Us(e) || Ge(e)) && Ge(e.then) && Ge(e.catch),
  C = {
    isArray: _r,
    isArrayBuffer: I0,
    isBuffer: Wx,
    isFormData: e2,
    isArrayBufferView: Qx,
    isString: Kx,
    isNumber: F0,
    isBoolean: Gx,
    isObject: Us,
    isPlainObject: ki,
    isUndefined: ko,
    isDate: Jx,
    isFile: qx,
    isBlob: Yx,
    isRegExp: h2,
    isFunction: Ge,
    isStream: Zx,
    isURLSearchParams: t2,
    isTypedArray: u2,
    isFileList: Xx,
    forEach: Lo,
    merge: Ga,
    extend: r2,
    trim: n2,
    stripBOM: o2,
    inherits: i2,
    toFlatObject: s2,
    kindOf: Ms,
    kindOfTest: mt,
    endsWith: l2,
    toArray: a2,
    forEachEntry: c2,
    matchAll: d2,
    isHTMLForm: f2,
    hasOwnProperty: pf,
    hasOwnProp: pf,
    reduceDescriptors: U0,
    freezeMethods: m2,
    toObjectSet: g2,
    toCamelCase: p2,
    noop: v2,
    toFiniteNumber: y2,
    findKey: $0,
    global: M0,
    isContextDefined: B0,
    ALPHABET: H0,
    generateString: x2,
    isSpecCompliantForm: w2,
    toJSONObject: S2,
    isAsyncFn: j2,
    isThenable: C2,
  };
function F(e, t, n, r, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && (this.response = o);
}
C.inherits(F, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: C.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const V0 = F.prototype,
  W0 = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  W0[e] = { value: e };
});
Object.defineProperties(F, W0);
Object.defineProperty(V0, "isAxiosError", { value: !0 });
F.from = (e, t, n, r, o, i) => {
  const s = Object.create(V0);
  return (
    C.toFlatObject(
      e,
      s,
      function (u) {
        return u !== Error.prototype;
      },
      (l) => l !== "isAxiosError",
    ),
    F.call(s, e.message, t, n, r, o),
    (s.cause = e),
    (s.name = e.name),
    i && Object.assign(s, i),
    s
  );
};
const E2 = null;
function Ja(e) {
  return C.isPlainObject(e) || C.isArray(e);
}
function Q0(e) {
  return C.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function mf(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, i) {
          return (o = Q0(o)), !n && i ? "[" + o + "]" : o;
        })
        .join(n ? "." : "")
    : t;
}
function k2(e) {
  return C.isArray(e) && !e.some(Ja);
}
const P2 = C.toFlatObject(C, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Hs(e, t, n) {
  if (!C.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = C.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (x, j) {
        return !C.isUndefined(j[x]);
      },
    ));
  const r = n.metaTokens,
    o = n.visitor || f,
    i = n.dots,
    s = n.indexes,
    u = (n.Blob || (typeof Blob < "u" && Blob)) && C.isSpecCompliantForm(t);
  if (!C.isFunction(o)) throw new TypeError("visitor must be a function");
  function c(y) {
    if (y === null) return "";
    if (C.isDate(y)) return y.toISOString();
    if (!u && C.isBlob(y))
      throw new F("Blob is not supported. Use a Buffer instead.");
    return C.isArrayBuffer(y) || C.isTypedArray(y)
      ? u && typeof Blob == "function"
        ? new Blob([y])
        : Buffer.from(y)
      : y;
  }
  function f(y, x, j) {
    let m = y;
    if (y && !j && typeof y == "object") {
      if (C.endsWith(x, "{}"))
        (x = r ? x : x.slice(0, -2)), (y = JSON.stringify(y));
      else if (
        (C.isArray(y) && k2(y)) ||
        ((C.isFileList(y) || C.endsWith(x, "[]")) && (m = C.toArray(y)))
      )
        return (
          (x = Q0(x)),
          m.forEach(function (g, S) {
            !(C.isUndefined(g) || g === null) &&
              t.append(
                s === !0 ? mf([x], S, i) : s === null ? x : x + "[]",
                c(g),
              );
          }),
          !1
        );
    }
    return Ja(y) ? !0 : (t.append(mf(j, x, i), c(y)), !1);
  }
  const d = [],
    v = Object.assign(P2, {
      defaultVisitor: f,
      convertValue: c,
      isVisitable: Ja,
    });
  function w(y, x) {
    if (!C.isUndefined(y)) {
      if (d.indexOf(y) !== -1)
        throw Error("Circular reference detected in " + x.join("."));
      d.push(y),
        C.forEach(y, function (m, p) {
          (!(C.isUndefined(m) || m === null) &&
            o.call(t, m, C.isString(p) ? p.trim() : p, x, v)) === !0 &&
            w(m, x ? x.concat(p) : [p]);
        }),
        d.pop();
    }
  }
  if (!C.isObject(e)) throw new TypeError("data must be an object");
  return w(e), t;
}
function gf(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function pc(e, t) {
  (this._pairs = []), e && Hs(e, this, t);
}
const K0 = pc.prototype;
K0.append = function (t, n) {
  this._pairs.push([t, n]);
};
K0.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, gf);
      }
    : gf;
  return this._pairs
    .map(function (o) {
      return n(o[0]) + "=" + n(o[1]);
    }, "")
    .join("&");
};
function _2(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function G0(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || _2,
    o = n && n.serialize;
  let i;
  if (
    (o
      ? (i = o(t, n))
      : (i = C.isURLSearchParams(t) ? t.toString() : new pc(t, n).toString(r)),
    i)
  ) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + i);
  }
  return e;
}
class vf {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    C.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const J0 = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  R2 = typeof URLSearchParams < "u" ? URLSearchParams : pc,
  A2 = typeof FormData < "u" ? FormData : null,
  T2 = typeof Blob < "u" ? Blob : null,
  O2 = {
    isBrowser: !0,
    classes: { URLSearchParams: R2, FormData: A2, Blob: T2 },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  q0 = typeof window < "u" && typeof document < "u",
  N2 = ((e) => q0 && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
    typeof navigator < "u" && navigator.product,
  ),
  z2 =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  L2 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: q0,
        hasStandardBrowserEnv: N2,
        hasStandardBrowserWebWorkerEnv: z2,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  ft = { ...L2, ...O2 };
function b2(e, t) {
  return Hs(
    e,
    new ft.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, o, i) {
          return ft.isNode && C.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : i.defaultVisitor.apply(this, arguments);
        },
      },
      t,
    ),
  );
}
function D2(e) {
  return C.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0],
  );
}
function I2(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++) (i = n[r]), (t[i] = e[i]);
  return t;
}
function Y0(e) {
  function t(n, r, o, i) {
    let s = n[i++];
    if (s === "__proto__") return !0;
    const l = Number.isFinite(+s),
      u = i >= n.length;
    return (
      (s = !s && C.isArray(o) ? o.length : s),
      u
        ? (C.hasOwnProp(o, s) ? (o[s] = [o[s], r]) : (o[s] = r), !l)
        : ((!o[s] || !C.isObject(o[s])) && (o[s] = []),
          t(n, r, o[s], i) && C.isArray(o[s]) && (o[s] = I2(o[s])),
          !l)
    );
  }
  if (C.isFormData(e) && C.isFunction(e.entries)) {
    const n = {};
    return (
      C.forEachEntry(e, (r, o) => {
        t(D2(r), o, n, 0);
      }),
      n
    );
  }
  return null;
}
function F2(e, t, n) {
  if (C.isString(e))
    try {
      return (t || JSON.parse)(e), C.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const hc = {
  transitional: J0,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        o = r.indexOf("application/json") > -1,
        i = C.isObject(t);
      if ((i && C.isHTMLForm(t) && (t = new FormData(t)), C.isFormData(t)))
        return o ? JSON.stringify(Y0(t)) : t;
      if (
        C.isArrayBuffer(t) ||
        C.isBuffer(t) ||
        C.isStream(t) ||
        C.isFile(t) ||
        C.isBlob(t)
      )
        return t;
      if (C.isArrayBufferView(t)) return t.buffer;
      if (C.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1,
          ),
          t.toString()
        );
      let l;
      if (i) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return b2(t, this.formSerializer).toString();
        if ((l = C.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const u = this.env && this.env.FormData;
          return Hs(
            l ? { "files[]": t } : t,
            u && new u(),
            this.formSerializer,
          );
        }
      }
      return i || o ? (n.setContentType("application/json", !1), F2(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || hc.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === "json";
      if (t && C.isString(t) && ((r && !this.responseType) || o)) {
        const s = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t);
        } catch (l) {
          if (s)
            throw l.name === "SyntaxError"
              ? F.from(l, F.ERR_BAD_RESPONSE, this, null, this.response)
              : l;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: ft.classes.FormData, Blob: ft.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
C.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  hc.headers[e] = {};
});
const mc = hc,
  $2 = C.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  M2 = (e) => {
    const t = {};
    let n, r, o;
    return (
      e &&
        e
          .split(
            `
`,
          )
          .forEach(function (s) {
            (o = s.indexOf(":")),
              (n = s.substring(0, o).trim().toLowerCase()),
              (r = s.substring(o + 1).trim()),
              !(!n || (t[n] && $2[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  yf = Symbol("internals");
function $r(e) {
  return e && String(e).trim().toLowerCase();
}
function Pi(e) {
  return e === !1 || e == null ? e : C.isArray(e) ? e.map(Pi) : String(e);
}
function B2(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const U2 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Nl(e, t, n, r, o) {
  if (C.isFunction(r)) return r.call(this, t, n);
  if ((o && (t = n), !!C.isString(t))) {
    if (C.isString(r)) return t.indexOf(r) !== -1;
    if (C.isRegExp(r)) return r.test(t);
  }
}
function H2(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function V2(e, t) {
  const n = C.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (o, i, s) {
        return this[r].call(this, t, o, i, s);
      },
      configurable: !0,
    });
  });
}
class Vs {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function i(l, u, c) {
      const f = $r(u);
      if (!f) throw new Error("header name must be a non-empty string");
      const d = C.findKey(o, f);
      (!d || o[d] === void 0 || c === !0 || (c === void 0 && o[d] !== !1)) &&
        (o[d || u] = Pi(l));
    }
    const s = (l, u) => C.forEach(l, (c, f) => i(c, f, u));
    return (
      C.isPlainObject(t) || t instanceof this.constructor
        ? s(t, n)
        : C.isString(t) && (t = t.trim()) && !U2(t)
        ? s(M2(t), n)
        : t != null && i(n, t, r),
      this
    );
  }
  get(t, n) {
    if (((t = $r(t)), t)) {
      const r = C.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n) return o;
        if (n === !0) return B2(o);
        if (C.isFunction(n)) return n.call(this, o, r);
        if (C.isRegExp(n)) return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = $r(t)), t)) {
      const r = C.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Nl(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function i(s) {
      if (((s = $r(s)), s)) {
        const l = C.findKey(r, s);
        l && (!n || Nl(r, r[l], l, n)) && (delete r[l], (o = !0));
      }
    }
    return C.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      o = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || Nl(this, this[i], i, t, !0)) && (delete this[i], (o = !0));
    }
    return o;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      C.forEach(this, (o, i) => {
        const s = C.findKey(r, i);
        if (s) {
          (n[s] = Pi(o)), delete n[i];
          return;
        }
        const l = t ? H2(i) : String(i).trim();
        l !== i && delete n[i], (n[l] = Pi(o)), (r[l] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      C.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = t && C.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[yf] = this[yf] = { accessors: {} }).accessors,
      o = this.prototype;
    function i(s) {
      const l = $r(s);
      r[l] || (V2(o, s), (r[l] = !0));
    }
    return C.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
Vs.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
C.reduceDescriptors(Vs.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
C.freezeMethods(Vs);
const kt = Vs;
function zl(e, t) {
  const n = this || mc,
    r = t || n,
    o = kt.from(r.headers);
  let i = r.data;
  return (
    C.forEach(e, function (l) {
      i = l.call(n, i, o.normalize(), t ? t.status : void 0);
    }),
    o.normalize(),
    i
  );
}
function X0(e) {
  return !!(e && e.__CANCEL__);
}
function bo(e, t, n) {
  F.call(this, e ?? "canceled", F.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
C.inherits(bo, F, { __CANCEL__: !0 });
function W2(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new F(
          "Request failed with status code " + n.status,
          [F.ERR_BAD_REQUEST, F.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n,
        ),
      );
}
const Q2 = ft.hasStandardBrowserEnv
  ? {
      write(e, t, n, r, o, i) {
        const s = [e + "=" + encodeURIComponent(t)];
        C.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()),
          C.isString(r) && s.push("path=" + r),
          C.isString(o) && s.push("domain=" + o),
          i === !0 && s.push("secure"),
          (document.cookie = s.join("; "));
      },
      read(e) {
        const t = document.cookie.match(
          new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"),
        );
        return t ? decodeURIComponent(t[3]) : null;
      },
      remove(e) {
        this.write(e, "", Date.now() - 864e5);
      },
    }
  : {
      write() {},
      read() {
        return null;
      },
      remove() {},
    };
function K2(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function G2(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Z0(e, t) {
  return e && !K2(t) ? G2(e, t) : t;
}
const J2 = ft.hasStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
      let r;
      function o(i) {
        let s = i;
        return (
          t && (n.setAttribute("href", s), (s = n.href)),
          n.setAttribute("href", s),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
          }
        );
      }
      return (
        (r = o(window.location.href)),
        function (s) {
          const l = C.isString(s) ? o(s) : s;
          return l.protocol === r.protocol && l.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function q2(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function Y2(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let o = 0,
    i = 0,
    s;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (u) {
      const c = Date.now(),
        f = r[i];
      s || (s = c), (n[o] = u), (r[o] = c);
      let d = i,
        v = 0;
      for (; d !== o; ) (v += n[d++]), (d = d % e);
      if (((o = (o + 1) % e), o === i && (i = (i + 1) % e), c - s < t)) return;
      const w = f && c - f;
      return w ? Math.round((v * 1e3) / w) : void 0;
    }
  );
}
function xf(e, t) {
  let n = 0;
  const r = Y2(50, 250);
  return (o) => {
    const i = o.loaded,
      s = o.lengthComputable ? o.total : void 0,
      l = i - n,
      u = r(l),
      c = i <= s;
    n = i;
    const f = {
      loaded: i,
      total: s,
      progress: s ? i / s : void 0,
      bytes: l,
      rate: u || void 0,
      estimated: u && s && c ? (s - i) / u : void 0,
      event: o,
    };
    (f[t ? "download" : "upload"] = !0), e(f);
  };
}
const X2 = typeof XMLHttpRequest < "u",
  Z2 =
    X2 &&
    function (e) {
      return new Promise(function (n, r) {
        let o = e.data;
        const i = kt.from(e.headers).normalize();
        let { responseType: s, withXSRFToken: l } = e,
          u;
        function c() {
          e.cancelToken && e.cancelToken.unsubscribe(u),
            e.signal && e.signal.removeEventListener("abort", u);
        }
        let f;
        if (C.isFormData(o)) {
          if (ft.hasStandardBrowserEnv || ft.hasStandardBrowserWebWorkerEnv)
            i.setContentType(!1);
          else if ((f = i.getContentType()) !== !1) {
            const [x, ...j] = f
              ? f
                  .split(";")
                  .map((m) => m.trim())
                  .filter(Boolean)
              : [];
            i.setContentType([x || "multipart/form-data", ...j].join("; "));
          }
        }
        let d = new XMLHttpRequest();
        if (e.auth) {
          const x = e.auth.username || "",
            j = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          i.set("Authorization", "Basic " + btoa(x + ":" + j));
        }
        const v = Z0(e.baseURL, e.url);
        d.open(e.method.toUpperCase(), G0(v, e.params, e.paramsSerializer), !0),
          (d.timeout = e.timeout);
        function w() {
          if (!d) return;
          const x = kt.from(
              "getAllResponseHeaders" in d && d.getAllResponseHeaders(),
            ),
            m = {
              data:
                !s || s === "text" || s === "json"
                  ? d.responseText
                  : d.response,
              status: d.status,
              statusText: d.statusText,
              headers: x,
              config: e,
              request: d,
            };
          W2(
            function (g) {
              n(g), c();
            },
            function (g) {
              r(g), c();
            },
            m,
          ),
            (d = null);
        }
        if (
          ("onloadend" in d
            ? (d.onloadend = w)
            : (d.onreadystatechange = function () {
                !d ||
                  d.readyState !== 4 ||
                  (d.status === 0 &&
                    !(d.responseURL && d.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(w);
              }),
          (d.onabort = function () {
            d &&
              (r(new F("Request aborted", F.ECONNABORTED, e, d)), (d = null));
          }),
          (d.onerror = function () {
            r(new F("Network Error", F.ERR_NETWORK, e, d)), (d = null);
          }),
          (d.ontimeout = function () {
            let j = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded";
            const m = e.transitional || J0;
            e.timeoutErrorMessage && (j = e.timeoutErrorMessage),
              r(
                new F(
                  j,
                  m.clarifyTimeoutError ? F.ETIMEDOUT : F.ECONNABORTED,
                  e,
                  d,
                ),
              ),
              (d = null);
          }),
          ft.hasStandardBrowserEnv &&
            (l && C.isFunction(l) && (l = l(e)), l || (l !== !1 && J2(v))))
        ) {
          const x =
            e.xsrfHeaderName && e.xsrfCookieName && Q2.read(e.xsrfCookieName);
          x && i.set(e.xsrfHeaderName, x);
        }
        o === void 0 && i.setContentType(null),
          "setRequestHeader" in d &&
            C.forEach(i.toJSON(), function (j, m) {
              d.setRequestHeader(m, j);
            }),
          C.isUndefined(e.withCredentials) ||
            (d.withCredentials = !!e.withCredentials),
          s && s !== "json" && (d.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" &&
            d.addEventListener("progress", xf(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == "function" &&
            d.upload &&
            d.upload.addEventListener("progress", xf(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((u = (x) => {
              d &&
                (r(!x || x.type ? new bo(null, e, d) : x),
                d.abort(),
                (d = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(u),
            e.signal &&
              (e.signal.aborted ? u() : e.signal.addEventListener("abort", u)));
        const y = q2(v);
        if (y && ft.protocols.indexOf(y) === -1) {
          r(new F("Unsupported protocol " + y + ":", F.ERR_BAD_REQUEST, e));
          return;
        }
        d.send(o || null);
      });
    },
  qa = { http: E2, xhr: Z2 };
C.forEach(qa, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const wf = (e) => `- ${e}`,
  ew = (e) => C.isFunction(e) || e === null || e === !1,
  e1 = {
    getAdapter: (e) => {
      e = C.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const o = {};
      for (let i = 0; i < t; i++) {
        n = e[i];
        let s;
        if (
          ((r = n),
          !ew(n) && ((r = qa[(s = String(n)).toLowerCase()]), r === void 0))
        )
          throw new F(`Unknown adapter '${s}'`);
        if (r) break;
        o[s || "#" + i] = r;
      }
      if (!r) {
        const i = Object.entries(o).map(
          ([l, u]) =>
            `adapter ${l} ` +
            (u === !1
              ? "is not supported by the environment"
              : "is not available in the build"),
        );
        let s = t
          ? i.length > 1
            ? `since :
` +
              i.map(wf).join(`
`)
            : " " + wf(i[0])
          : "as no adapter specified";
        throw new F(
          "There is no suitable adapter to dispatch the request " + s,
          "ERR_NOT_SUPPORT",
        );
      }
      return r;
    },
    adapters: qa,
  };
function Ll(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new bo(null, e);
}
function Sf(e) {
  return (
    Ll(e),
    (e.headers = kt.from(e.headers)),
    (e.data = zl.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    e1
      .getAdapter(e.adapter || mc.adapter)(e)
      .then(
        function (r) {
          return (
            Ll(e),
            (r.data = zl.call(e, e.transformResponse, r)),
            (r.headers = kt.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            X0(r) ||
              (Ll(e),
              r &&
                r.response &&
                ((r.response.data = zl.call(
                  e,
                  e.transformResponse,
                  r.response,
                )),
                (r.response.headers = kt.from(r.response.headers)))),
            Promise.reject(r)
          );
        },
      )
  );
}
const jf = (e) => (e instanceof kt ? { ...e } : e);
function mr(e, t) {
  t = t || {};
  const n = {};
  function r(c, f, d) {
    return C.isPlainObject(c) && C.isPlainObject(f)
      ? C.merge.call({ caseless: d }, c, f)
      : C.isPlainObject(f)
      ? C.merge({}, f)
      : C.isArray(f)
      ? f.slice()
      : f;
  }
  function o(c, f, d) {
    if (C.isUndefined(f)) {
      if (!C.isUndefined(c)) return r(void 0, c, d);
    } else return r(c, f, d);
  }
  function i(c, f) {
    if (!C.isUndefined(f)) return r(void 0, f);
  }
  function s(c, f) {
    if (C.isUndefined(f)) {
      if (!C.isUndefined(c)) return r(void 0, c);
    } else return r(void 0, f);
  }
  function l(c, f, d) {
    if (d in t) return r(c, f);
    if (d in e) return r(void 0, c);
  }
  const u = {
    url: i,
    method: i,
    data: i,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    withXSRFToken: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: l,
    headers: (c, f) => o(jf(c), jf(f), !0),
  };
  return (
    C.forEach(Object.keys(Object.assign({}, e, t)), function (f) {
      const d = u[f] || o,
        v = d(e[f], t[f], f);
      (C.isUndefined(v) && d !== l) || (n[f] = v);
    }),
    n
  );
}
const t1 = "1.6.8",
  gc = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    gc[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  },
);
const Cf = {};
gc.transitional = function (t, n, r) {
  function o(i, s) {
    return (
      "[Axios v" +
      t1 +
      "] Transitional option '" +
      i +
      "'" +
      s +
      (r ? ". " + r : "")
    );
  }
  return (i, s, l) => {
    if (t === !1)
      throw new F(
        o(s, " has been removed" + (n ? " in " + n : "")),
        F.ERR_DEPRECATED,
      );
    return (
      n &&
        !Cf[s] &&
        ((Cf[s] = !0),
        console.warn(
          o(
            s,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future",
          ),
        )),
      t ? t(i, s, l) : !0
    );
  };
};
function tw(e, t, n) {
  if (typeof e != "object")
    throw new F("options must be an object", F.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o],
      s = t[i];
    if (s) {
      const l = e[i],
        u = l === void 0 || s(l, i, e);
      if (u !== !0)
        throw new F("option " + i + " must be " + u, F.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new F("Unknown option " + i, F.ERR_BAD_OPTION);
  }
}
const Ya = { assertOptions: tw, validators: gc },
  Ft = Ya.validators;
class cs {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new vf(), response: new vf() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let o;
        Error.captureStackTrace
          ? Error.captureStackTrace((o = {}))
          : (o = new Error());
        const i = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        r.stack
          ? i &&
            !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, "")) &&
            (r.stack +=
              `
` + i)
          : (r.stack = i);
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = mr(this.defaults, n));
    const { transitional: r, paramsSerializer: o, headers: i } = n;
    r !== void 0 &&
      Ya.assertOptions(
        r,
        {
          silentJSONParsing: Ft.transitional(Ft.boolean),
          forcedJSONParsing: Ft.transitional(Ft.boolean),
          clarifyTimeoutError: Ft.transitional(Ft.boolean),
        },
        !1,
      ),
      o != null &&
        (C.isFunction(o)
          ? (n.paramsSerializer = { serialize: o })
          : Ya.assertOptions(
              o,
              { encode: Ft.function, serialize: Ft.function },
              !0,
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let s = i && C.merge(i.common, i[n.method]);
    i &&
      C.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (y) => {
          delete i[y];
        },
      ),
      (n.headers = kt.concat(s, i));
    const l = [];
    let u = !0;
    this.interceptors.request.forEach(function (x) {
      (typeof x.runWhen == "function" && x.runWhen(n) === !1) ||
        ((u = u && x.synchronous), l.unshift(x.fulfilled, x.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function (x) {
      c.push(x.fulfilled, x.rejected);
    });
    let f,
      d = 0,
      v;
    if (!u) {
      const y = [Sf.bind(this), void 0];
      for (
        y.unshift.apply(y, l),
          y.push.apply(y, c),
          v = y.length,
          f = Promise.resolve(n);
        d < v;

      )
        f = f.then(y[d++], y[d++]);
      return f;
    }
    v = l.length;
    let w = n;
    for (d = 0; d < v; ) {
      const y = l[d++],
        x = l[d++];
      try {
        w = y(w);
      } catch (j) {
        x.call(this, j);
        break;
      }
    }
    try {
      f = Sf.call(this, w);
    } catch (y) {
      return Promise.reject(y);
    }
    for (d = 0, v = c.length; d < v; ) f = f.then(c[d++], c[d++]);
    return f;
  }
  getUri(t) {
    t = mr(this.defaults, t);
    const n = Z0(t.baseURL, t.url);
    return G0(n, t.params, t.paramsSerializer);
  }
}
C.forEach(["delete", "get", "head", "options"], function (t) {
  cs.prototype[t] = function (n, r) {
    return this.request(
      mr(r || {}, { method: t, url: n, data: (r || {}).data }),
    );
  };
});
C.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (i, s, l) {
      return this.request(
        mr(l || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: i,
          data: s,
        }),
      );
    };
  }
  (cs.prototype[t] = n()), (cs.prototype[t + "Form"] = n(!0));
});
const _i = cs;
class vc {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (i) {
      n = i;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; ) r._listeners[i](o);
      r._listeners = null;
    }),
      (this.promise.then = (o) => {
        let i;
        const s = new Promise((l) => {
          r.subscribe(l), (i = l);
        }).then(o);
        return (
          (s.cancel = function () {
            r.unsubscribe(i);
          }),
          s
        );
      }),
      t(function (i, s, l) {
        r.reason || ((r.reason = new bo(i, s, l)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new vc(function (o) {
        t = o;
      }),
      cancel: t,
    };
  }
}
const nw = vc;
function rw(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function ow(e) {
  return C.isObject(e) && e.isAxiosError === !0;
}
const Xa = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Xa).forEach(([e, t]) => {
  Xa[t] = e;
});
const iw = Xa;
function n1(e) {
  const t = new _i(e),
    n = D0(_i.prototype.request, t);
  return (
    C.extend(n, _i.prototype, t, { allOwnKeys: !0 }),
    C.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return n1(mr(e, o));
    }),
    n
  );
}
const W = n1(mc);
W.Axios = _i;
W.CanceledError = bo;
W.CancelToken = nw;
W.isCancel = X0;
W.VERSION = t1;
W.toFormData = Hs;
W.AxiosError = F;
W.Cancel = W.CanceledError;
W.all = function (t) {
  return Promise.all(t);
};
W.spread = rw;
W.isAxiosError = ow;
W.mergeConfig = mr;
W.AxiosHeaders = kt;
W.formToJSON = (e) => Y0(C.isHTMLForm(e) ? new FormData(e) : e);
W.getAdapter = e1.getAdapter;
W.HttpStatusCode = iw;
W.default = W;
const Do = "https://api.alhkq.live";
console.log("API_BASE_URL", Do);
const gr = W.create({
  baseURL: Do,
  headers: { "Content-Type": "application/json" },
  withCredentials: !0,
});
gr.interceptors.response.use(
  (e) => e,
  async (e) => {
    const t = e.config;
    if (e.response.status === 401 && !t._retry) {
      try {
        await sw();
      } catch (n) {
        return console.log("Get new access token failed!"), Promise.reject(n);
      }
      return (t._retry = !0), gr(t);
    }
    return Promise.reject(e);
  },
);
const sw = async () => {
    console.log("Getting new access token!"),
      await W.get(Do + "/auth/access-token", { withCredentials: !0 });
  },
  lw = (e) => {
    let t = "";
    for (const n in e) e[n] && (t += `${n}=${e[n]}&`);
    return encodeURI("?" + t.slice(0, -1));
  },
  aw = zo("userState/login", async (e) => {
    await W.post(Do + "/auth/login", e, { withCredentials: !0 });
  }),
  yc = zo("userState/getCurrentUser", async () => (await gr.get("/auth")).data);
zo(
  "userState/updateProfile",
  async (e) => (await gr.put("/user/my-profile", e)).data,
);
zo("userState/findAllUsers", async (e) => (await gr.get("/user" + lw(e))).data);
zo("userState/getUserById", async (e) => (await gr.get(`/user/${e}`)).data);
const uw = "userState",
  cw = { user: null, users: [] },
  Ef = zx({
    name: uw,
    initialState: cw,
    reducers: {},
    extraReducers: (e) => {
      e.addCase(yc.fulfilled, (t, n) => {
        console.log(n.payload), (t.user = n.payload);
      });
    },
  }),
  dw = xx({ reducer: { [Ef.name]: Ef.reducer } }),
  fw = "/assets/logo-DncgHput.png",
  pw = () =>
    a.jsx("div", {
      style: {
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      children: a.jsx("img", { src: fw, alt: "logo" }),
    }),
  hw = ({ children: e }) => {
    const t = w0(),
      [n, r] = _.useState(!0);
    return (
      _.useEffect(() => {
        t(yc()).finally(() => r(!1));
      }, []),
      n ? a.jsx(pw, {}) : e
    );
  };
function mw({ children: e }) {
  return (
    _.useEffect(() => {
      document.title = cv;
    }, []),
    a.jsx(uy, {
      children: a.jsx(zy, { store: dw, children: a.jsx(hw, { children: e }) }),
    })
  );
}
var Re = function () {
  return (
    (Re =
      Object.assign ||
      function (t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
          n = arguments[r];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      }),
    Re.apply(this, arguments)
  );
};
function ds(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) &&
        (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
  return e.concat(i || Array.prototype.slice.call(t));
}
var K = "-ms-",
  no = "-moz-",
  M = "-webkit-",
  r1 = "comm",
  Ws = "rule",
  xc = "decl",
  gw = "@import",
  o1 = "@keyframes",
  vw = "@layer",
  i1 = Math.abs,
  wc = String.fromCharCode,
  Za = Object.assign;
function yw(e, t) {
  return ae(e, 0) ^ 45
    ? (((((((t << 2) ^ ae(e, 0)) << 2) ^ ae(e, 1)) << 2) ^ ae(e, 2)) << 2) ^
        ae(e, 3)
    : 0;
}
function s1(e) {
  return e.trim();
}
function yt(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function L(e, t, n) {
  return e.replace(t, n);
}
function Ri(e, t, n) {
  return e.indexOf(t, n);
}
function ae(e, t) {
  return e.charCodeAt(t) | 0;
}
function vr(e, t, n) {
  return e.slice(t, n);
}
function ct(e) {
  return e.length;
}
function l1(e) {
  return e.length;
}
function Qr(e, t) {
  return t.push(e), e;
}
function xw(e, t) {
  return e.map(t).join("");
}
function kf(e, t) {
  return e.filter(function (n) {
    return !yt(n, t);
  });
}
var Qs = 1,
  yr = 1,
  a1 = 0,
  Ye = 0,
  re = 0,
  Rr = "";
function Ks(e, t, n, r, o, i, s, l) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: Qs,
    column: yr,
    length: s,
    return: "",
    siblings: l,
  };
}
function Bt(e, t) {
  return Za(
    Ks("", null, null, "", null, null, 0, e.siblings),
    e,
    { length: -e.length },
    t,
  );
}
function Mn(e) {
  for (; e.root; ) e = Bt(e.root, { children: [e] });
  Qr(e, e.siblings);
}
function ww() {
  return re;
}
function Sw() {
  return (
    (re = Ye > 0 ? ae(Rr, --Ye) : 0), yr--, re === 10 && ((yr = 1), Qs--), re
  );
}
function st() {
  return (
    (re = Ye < a1 ? ae(Rr, Ye++) : 0), yr++, re === 10 && ((yr = 1), Qs++), re
  );
}
function Rn() {
  return ae(Rr, Ye);
}
function Ai() {
  return Ye;
}
function Gs(e, t) {
  return vr(Rr, e, t);
}
function eu(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function jw(e) {
  return (Qs = yr = 1), (a1 = ct((Rr = e))), (Ye = 0), [];
}
function Cw(e) {
  return (Rr = ""), e;
}
function bl(e) {
  return s1(Gs(Ye - 1, tu(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Ew(e) {
  for (; (re = Rn()) && re < 33; ) st();
  return eu(e) > 2 || eu(re) > 3 ? "" : " ";
}
function kw(e, t) {
  for (
    ;
    --t &&
    st() &&
    !(re < 48 || re > 102 || (re > 57 && re < 65) || (re > 70 && re < 97));

  );
  return Gs(e, Ai() + (t < 6 && Rn() == 32 && st() == 32));
}
function tu(e) {
  for (; st(); )
    switch (re) {
      case e:
        return Ye;
      case 34:
      case 39:
        e !== 34 && e !== 39 && tu(re);
        break;
      case 40:
        e === 41 && tu(e);
        break;
      case 92:
        st();
        break;
    }
  return Ye;
}
function Pw(e, t) {
  for (; st() && e + re !== 57; ) if (e + re === 84 && Rn() === 47) break;
  return "/*" + Gs(t, Ye - 1) + "*" + wc(e === 47 ? e : st());
}
function _w(e) {
  for (; !eu(Rn()); ) st();
  return Gs(e, Ye);
}
function Rw(e) {
  return Cw(Ti("", null, null, null, [""], (e = jw(e)), 0, [0], e));
}
function Ti(e, t, n, r, o, i, s, l, u) {
  for (
    var c = 0,
      f = 0,
      d = s,
      v = 0,
      w = 0,
      y = 0,
      x = 1,
      j = 1,
      m = 1,
      p = 0,
      g = "",
      S = o,
      E = i,
      k = r,
      P = g;
    j;

  )
    switch (((y = p), (p = st()))) {
      case 40:
        if (y != 108 && ae(P, d - 1) == 58) {
          Ri((P += L(bl(p), "&", "&\f")), "&\f", i1(c ? l[c - 1] : 0)) != -1 &&
            (m = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        P += bl(p);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        P += Ew(y);
        break;
      case 92:
        P += kw(Ai() - 1, 7);
        continue;
      case 47:
        switch (Rn()) {
          case 42:
          case 47:
            Qr(Aw(Pw(st(), Ai()), t, n, u), u);
            break;
          default:
            P += "/";
        }
        break;
      case 123 * x:
        l[c++] = ct(P) * m;
      case 125 * x:
      case 59:
      case 0:
        switch (p) {
          case 0:
          case 125:
            j = 0;
          case 59 + f:
            m == -1 && (P = L(P, /\f/g, "")),
              w > 0 &&
                ct(P) - d &&
                Qr(
                  w > 32
                    ? _f(P + ";", r, n, d - 1, u)
                    : _f(L(P, " ", "") + ";", r, n, d - 2, u),
                  u,
                );
            break;
          case 59:
            P += ";";
          default:
            if (
              (Qr(
                (k = Pf(P, t, n, c, f, o, l, g, (S = []), (E = []), d, i)),
                i,
              ),
              p === 123)
            )
              if (f === 0) Ti(P, t, k, k, S, i, d, l, E);
              else
                switch (v === 99 && ae(P, 3) === 110 ? 100 : v) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ti(
                      e,
                      k,
                      k,
                      r && Qr(Pf(e, k, k, 0, 0, o, l, g, o, (S = []), d, E), E),
                      o,
                      E,
                      d,
                      l,
                      r ? S : E,
                    );
                    break;
                  default:
                    Ti(P, k, k, k, [""], E, 0, l, E);
                }
        }
        (c = f = w = 0), (x = m = 1), (g = P = ""), (d = s);
        break;
      case 58:
        (d = 1 + ct(P)), (w = y);
      default:
        if (x < 1) {
          if (p == 123) --x;
          else if (p == 125 && x++ == 0 && Sw() == 125) continue;
        }
        switch (((P += wc(p)), p * x)) {
          case 38:
            m = f > 0 ? 1 : ((P += "\f"), -1);
            break;
          case 44:
            (l[c++] = (ct(P) - 1) * m), (m = 1);
            break;
          case 64:
            Rn() === 45 && (P += bl(st())),
              (v = Rn()),
              (f = d = ct((g = P += _w(Ai())))),
              p++;
            break;
          case 45:
            y === 45 && ct(P) == 2 && (x = 0);
        }
    }
  return i;
}
function Pf(e, t, n, r, o, i, s, l, u, c, f, d) {
  for (
    var v = o - 1, w = o === 0 ? i : [""], y = l1(w), x = 0, j = 0, m = 0;
    x < r;
    ++x
  )
    for (var p = 0, g = vr(e, v + 1, (v = i1((j = s[x])))), S = e; p < y; ++p)
      (S = s1(j > 0 ? w[p] + " " + g : L(g, /&\f/g, w[p]))) && (u[m++] = S);
  return Ks(e, t, n, o === 0 ? Ws : l, u, c, f, d);
}
function Aw(e, t, n, r) {
  return Ks(e, t, n, r1, wc(ww()), vr(e, 2, -2), 0, r);
}
function _f(e, t, n, r, o) {
  return Ks(e, t, n, xc, vr(e, 0, r), vr(e, r + 1, -1), r, o);
}
function u1(e, t, n) {
  switch (yw(e, t)) {
    case 5103:
      return M + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return M + e + e;
    case 4789:
      return no + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return M + e + no + e + K + e + e;
    case 5936:
      switch (ae(e, t + 11)) {
        case 114:
          return M + e + K + L(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return M + e + K + L(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return M + e + K + L(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return M + e + K + e + e;
    case 6165:
      return M + e + K + "flex-" + e + e;
    case 5187:
      return (
        M + e + L(e, /(\w+).+(:[^]+)/, M + "box-$1$2" + K + "flex-$1$2") + e
      );
    case 5443:
      return (
        M +
        e +
        K +
        "flex-item-" +
        L(e, /flex-|-self/g, "") +
        (yt(e, /flex-|baseline/)
          ? ""
          : K + "grid-row-" + L(e, /flex-|-self/g, "")) +
        e
      );
    case 4675:
      return (
        M +
        e +
        K +
        "flex-line-pack" +
        L(e, /align-content|flex-|-self/g, "") +
        e
      );
    case 5548:
      return M + e + K + L(e, "shrink", "negative") + e;
    case 5292:
      return M + e + K + L(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        M +
        "box-" +
        L(e, "-grow", "") +
        M +
        e +
        K +
        L(e, "grow", "positive") +
        e
      );
    case 4554:
      return M + L(e, /([^-])(transform)/g, "$1" + M + "$2") + e;
    case 6187:
      return (
        L(L(L(e, /(zoom-|grab)/, M + "$1"), /(image-set)/, M + "$1"), e, "") + e
      );
    case 5495:
    case 3959:
      return L(e, /(image-set\([^]*)/, M + "$1$`$1");
    case 4968:
      return (
        L(
          L(e, /(.+:)(flex-)?(.*)/, M + "box-pack:$3" + K + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify",
        ) +
        M +
        e +
        e
      );
    case 4200:
      if (!yt(e, /flex-|baseline/))
        return K + "grid-column-align" + vr(e, t) + e;
      break;
    case 2592:
    case 3360:
      return K + L(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n &&
        n.some(function (r, o) {
          return (t = o), yt(r.props, /grid-\w+-end/);
        })
        ? ~Ri(e + (n = n[t].value), "span", 0)
          ? e
          : K +
            L(e, "-start", "") +
            e +
            K +
            "grid-row-span:" +
            (~Ri(n, "span", 0) ? yt(n, /\d+/) : +yt(n, /\d+/) - +yt(e, /\d+/)) +
            ";"
        : K + L(e, "-start", "") + e;
    case 4896:
    case 4128:
      return n &&
        n.some(function (r) {
          return yt(r.props, /grid-\w+-start/);
        })
        ? e
        : K + L(L(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return L(e, /(.+)-inline(.+)/, M + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (ct(e) - 1 - t > 6)
        switch (ae(e, t + 1)) {
          case 109:
            if (ae(e, t + 4) !== 45) break;
          case 102:
            return (
              L(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  M +
                  "$2-$3$1" +
                  no +
                  (ae(e, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + e
            );
          case 115:
            return ~Ri(e, "stretch", 0)
              ? u1(L(e, "stretch", "fill-available"), t, n) + e
              : e;
        }
      break;
    case 5152:
    case 5920:
      return L(
        e,
        /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
        function (r, o, i, s, l, u, c) {
          return (
            K +
            o +
            ":" +
            i +
            c +
            (s ? K + o + "-span:" + (l ? u : +u - +i) + c : "") +
            e
          );
        },
      );
    case 4949:
      if (ae(e, t + 6) === 121) return L(e, ":", ":" + M) + e;
      break;
    case 6444:
      switch (ae(e, ae(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return (
            L(
              e,
              /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
              "$1" +
                M +
                (ae(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                M +
                "$2$3$1" +
                K +
                "$2box$3",
            ) + e
          );
        case 100:
          return L(e, ":", ":" + K) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return L(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function fs(e, t) {
  for (var n = "", r = 0; r < e.length; r++) n += t(e[r], r, e, t) || "";
  return n;
}
function Tw(e, t, n, r) {
  switch (e.type) {
    case vw:
      if (e.children.length) break;
    case gw:
    case xc:
      return (e.return = e.return || e.value);
    case r1:
      return "";
    case o1:
      return (e.return = e.value + "{" + fs(e.children, r) + "}");
    case Ws:
      if (!ct((e.value = e.props.join(",")))) return "";
  }
  return ct((n = fs(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function Ow(e) {
  var t = l1(e);
  return function (n, r, o, i) {
    for (var s = "", l = 0; l < t; l++) s += e[l](n, r, o, i) || "";
    return s;
  };
}
function Nw(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function zw(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case xc:
        e.return = u1(e.value, e.length, n);
        return;
      case o1:
        return fs([Bt(e, { value: L(e.value, "@", "@" + M) })], r);
      case Ws:
        if (e.length)
          return xw((n = e.props), function (o) {
            switch (yt(o, (r = /(::plac\w+|:read-\w+)/))) {
              case ":read-only":
              case ":read-write":
                Mn(Bt(e, { props: [L(o, /:(read-\w+)/, ":" + no + "$1")] })),
                  Mn(Bt(e, { props: [o] })),
                  Za(e, { props: kf(n, r) });
                break;
              case "::placeholder":
                Mn(
                  Bt(e, { props: [L(o, /:(plac\w+)/, ":" + M + "input-$1")] }),
                ),
                  Mn(Bt(e, { props: [L(o, /:(plac\w+)/, ":" + no + "$1")] })),
                  Mn(Bt(e, { props: [L(o, /:(plac\w+)/, K + "input-$1")] })),
                  Mn(Bt(e, { props: [o] })),
                  Za(e, { props: kf(n, r) });
                break;
            }
            return "";
          });
    }
}
var Lw = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  Le = {},
  xr =
    (typeof process < "u" &&
      Le !== void 0 &&
      (Le.REACT_APP_SC_ATTR || Le.SC_ATTR)) ||
    "data-styled",
  c1 = "active",
  d1 = "data-styled-version",
  Js = "6.1.8",
  Sc = `/*!sc*/
`,
  jc = typeof window < "u" && "HTMLElement" in window,
  bw = !!(typeof SC_DISABLE_SPEEDY == "boolean"
    ? SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      Le !== void 0 &&
      Le.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
      Le.REACT_APP_SC_DISABLE_SPEEDY !== ""
    ? Le.REACT_APP_SC_DISABLE_SPEEDY !== "false" &&
      Le.REACT_APP_SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      Le !== void 0 &&
      Le.SC_DISABLE_SPEEDY !== void 0 &&
      Le.SC_DISABLE_SPEEDY !== "" &&
      Le.SC_DISABLE_SPEEDY !== "false" &&
      Le.SC_DISABLE_SPEEDY),
  qs = Object.freeze([]),
  wr = Object.freeze({});
function Dw(e, t, n) {
  return (
    n === void 0 && (n = wr), (e.theme !== n.theme && e.theme) || t || n.theme
  );
}
var f1 = new Set([
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "track",
    "u",
    "ul",
    "use",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ]),
  Iw = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  Fw = /(^-|-$)/g;
function Rf(e) {
  return e.replace(Iw, "-").replace(Fw, "");
}
var $w = /(a)(d)/gi,
  ii = 52,
  Af = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function nu(e) {
  var t,
    n = "";
  for (t = Math.abs(e); t > ii; t = (t / ii) | 0) n = Af(t % ii) + n;
  return (Af(t % ii) + n).replace($w, "$1-$2");
}
var Dl,
  p1 = 5381,
  er = function (e, t) {
    for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
    return e;
  },
  h1 = function (e) {
    return er(p1, e);
  };
function Mw(e) {
  return nu(h1(e) >>> 0);
}
function Bw(e) {
  return e.displayName || e.name || "Component";
}
function Il(e) {
  return typeof e == "string" && !0;
}
var m1 = typeof Symbol == "function" && Symbol.for,
  g1 = m1 ? Symbol.for("react.memo") : 60115,
  Uw = m1 ? Symbol.for("react.forward_ref") : 60112,
  Hw = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  Vw = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  v1 = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Ww =
    (((Dl = {})[Uw] = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    }),
    (Dl[g1] = v1),
    Dl);
function Tf(e) {
  return ("type" in (t = e) && t.type.$$typeof) === g1
    ? v1
    : "$$typeof" in e
    ? Ww[e.$$typeof]
    : Hw;
  var t;
}
var Qw = Object.defineProperty,
  Kw = Object.getOwnPropertyNames,
  Of = Object.getOwnPropertySymbols,
  Gw = Object.getOwnPropertyDescriptor,
  Jw = Object.getPrototypeOf,
  Nf = Object.prototype;
function y1(e, t, n) {
  if (typeof t != "string") {
    if (Nf) {
      var r = Jw(t);
      r && r !== Nf && y1(e, r, n);
    }
    var o = Kw(t);
    Of && (o = o.concat(Of(t)));
    for (var i = Tf(e), s = Tf(t), l = 0; l < o.length; ++l) {
      var u = o[l];
      if (!(u in Vw || (n && n[u]) || (s && u in s) || (i && u in i))) {
        var c = Gw(t, u);
        try {
          Qw(e, u, c);
        } catch {}
      }
    }
  }
  return e;
}
function Sr(e) {
  return typeof e == "function";
}
function Cc(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function kn(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function zf(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], r = 1; r < e.length; r++) n += t ? t + e[r] : e[r];
  return n;
}
function Po(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    e.constructor.name === Object.name &&
    !("props" in e && e.$$typeof)
  );
}
function ru(e, t, n) {
  if ((n === void 0 && (n = !1), !n && !Po(e) && !Array.isArray(e))) return t;
  if (Array.isArray(t))
    for (var r = 0; r < t.length; r++) e[r] = ru(e[r], t[r]);
  else if (Po(t)) for (var r in t) e[r] = ru(e[r], t[r]);
  return e;
}
function Ec(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
function Io(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return new Error(
    "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
      .concat(e, " for more information.")
      .concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : ""),
  );
}
var qw = (function () {
    function e(t) {
      (this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = t);
    }
    return (
      (e.prototype.indexOfGroup = function (t) {
        for (var n = 0, r = 0; r < t; r++) n += this.groupSizes[r];
        return n;
      }),
      (e.prototype.insertRules = function (t, n) {
        if (t >= this.groupSizes.length) {
          for (var r = this.groupSizes, o = r.length, i = o; t >= i; )
            if ((i <<= 1) < 0) throw Io(16, "".concat(t));
          (this.groupSizes = new Uint32Array(i)),
            this.groupSizes.set(r),
            (this.length = i);
          for (var s = o; s < i; s++) this.groupSizes[s] = 0;
        }
        for (
          var l = this.indexOfGroup(t + 1), u = ((s = 0), n.length);
          s < u;
          s++
        )
          this.tag.insertRule(l, n[s]) && (this.groupSizes[t]++, l++);
      }),
      (e.prototype.clearGroup = function (t) {
        if (t < this.length) {
          var n = this.groupSizes[t],
            r = this.indexOfGroup(t),
            o = r + n;
          this.groupSizes[t] = 0;
          for (var i = r; i < o; i++) this.tag.deleteRule(r);
        }
      }),
      (e.prototype.getGroup = function (t) {
        var n = "";
        if (t >= this.length || this.groupSizes[t] === 0) return n;
        for (
          var r = this.groupSizes[t],
            o = this.indexOfGroup(t),
            i = o + r,
            s = o;
          s < i;
          s++
        )
          n += "".concat(this.tag.getRule(s)).concat(Sc);
        return n;
      }),
      e
    );
  })(),
  Oi = new Map(),
  ps = new Map(),
  Ni = 1,
  si = function (e) {
    if (Oi.has(e)) return Oi.get(e);
    for (; ps.has(Ni); ) Ni++;
    var t = Ni++;
    return Oi.set(e, t), ps.set(t, e), t;
  },
  Yw = function (e, t) {
    (Ni = t + 1), Oi.set(e, t), ps.set(t, e);
  },
  Xw = "style[".concat(xr, "][").concat(d1, '="').concat(Js, '"]'),
  Zw = new RegExp(
    "^".concat(xr, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
  ),
  e4 = function (e, t, n) {
    for (var r, o = n.split(","), i = 0, s = o.length; i < s; i++)
      (r = o[i]) && e.registerName(t, r);
  },
  t4 = function (e, t) {
    for (
      var n,
        r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(Sc),
        o = [],
        i = 0,
        s = r.length;
      i < s;
      i++
    ) {
      var l = r[i].trim();
      if (l) {
        var u = l.match(Zw);
        if (u) {
          var c = 0 | parseInt(u[1], 10),
            f = u[2];
          c !== 0 && (Yw(f, c), e4(e, f, u[3]), e.getTag().insertRules(c, o)),
            (o.length = 0);
        } else o.push(l);
      }
    }
  };
function n4() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var x1 = function (e) {
    var t = document.head,
      n = e || t,
      r = document.createElement("style"),
      o = (function (l) {
        var u = Array.from(l.querySelectorAll("style[".concat(xr, "]")));
        return u[u.length - 1];
      })(n),
      i = o !== void 0 ? o.nextSibling : null;
    r.setAttribute(xr, c1), r.setAttribute(d1, Js);
    var s = n4();
    return s && r.setAttribute("nonce", s), n.insertBefore(r, i), r;
  },
  r4 = (function () {
    function e(t) {
      (this.element = x1(t)),
        this.element.appendChild(document.createTextNode("")),
        (this.sheet = (function (n) {
          if (n.sheet) return n.sheet;
          for (var r = document.styleSheets, o = 0, i = r.length; o < i; o++) {
            var s = r[o];
            if (s.ownerNode === n) return s;
          }
          throw Io(17);
        })(this.element)),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        try {
          return this.sheet.insertRule(n, t), this.length++, !0;
        } catch {
          return !1;
        }
      }),
      (e.prototype.deleteRule = function (t) {
        this.sheet.deleteRule(t), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        var n = this.sheet.cssRules[t];
        return n && n.cssText ? n.cssText : "";
      }),
      e
    );
  })(),
  o4 = (function () {
    function e(t) {
      (this.element = x1(t)),
        (this.nodes = this.element.childNodes),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        if (t <= this.length && t >= 0) {
          var r = document.createTextNode(n);
          return (
            this.element.insertBefore(r, this.nodes[t] || null),
            this.length++,
            !0
          );
        }
        return !1;
      }),
      (e.prototype.deleteRule = function (t) {
        this.element.removeChild(this.nodes[t]), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.nodes[t].textContent : "";
      }),
      e
    );
  })(),
  i4 = (function () {
    function e(t) {
      (this.rules = []), (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        return (
          t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0)
        );
      }),
      (e.prototype.deleteRule = function (t) {
        this.rules.splice(t, 1), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.rules[t] : "";
      }),
      e
    );
  })(),
  Lf = jc,
  s4 = { isServer: !jc, useCSSOMInjection: !bw },
  w1 = (function () {
    function e(t, n, r) {
      t === void 0 && (t = wr), n === void 0 && (n = {});
      var o = this;
      (this.options = Re(Re({}, s4), t)),
        (this.gs = n),
        (this.names = new Map(r)),
        (this.server = !!t.isServer),
        !this.server &&
          jc &&
          Lf &&
          ((Lf = !1),
          (function (i) {
            for (
              var s = document.querySelectorAll(Xw), l = 0, u = s.length;
              l < u;
              l++
            ) {
              var c = s[l];
              c &&
                c.getAttribute(xr) !== c1 &&
                (t4(i, c), c.parentNode && c.parentNode.removeChild(c));
            }
          })(this)),
        Ec(this, function () {
          return (function (i) {
            for (
              var s = i.getTag(),
                l = s.length,
                u = "",
                c = function (d) {
                  var v = (function (m) {
                    return ps.get(m);
                  })(d);
                  if (v === void 0) return "continue";
                  var w = i.names.get(v),
                    y = s.getGroup(d);
                  if (w === void 0 || y.length === 0) return "continue";
                  var x = ""
                      .concat(xr, ".g")
                      .concat(d, '[id="')
                      .concat(v, '"]'),
                    j = "";
                  w !== void 0 &&
                    w.forEach(function (m) {
                      m.length > 0 && (j += "".concat(m, ","));
                    }),
                    (u += ""
                      .concat(y)
                      .concat(x, '{content:"')
                      .concat(j, '"}')
                      .concat(Sc));
                },
                f = 0;
              f < l;
              f++
            )
              c(f);
            return u;
          })(o);
        });
    }
    return (
      (e.registerId = function (t) {
        return si(t);
      }),
      (e.prototype.reconstructWithOptions = function (t, n) {
        return (
          n === void 0 && (n = !0),
          new e(
            Re(Re({}, this.options), t),
            this.gs,
            (n && this.names) || void 0,
          )
        );
      }),
      (e.prototype.allocateGSInstance = function (t) {
        return (this.gs[t] = (this.gs[t] || 0) + 1);
      }),
      (e.prototype.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((t = (function (n) {
              var r = n.useCSSOMInjection,
                o = n.target;
              return n.isServer ? new i4(o) : r ? new r4(o) : new o4(o);
            })(this.options)),
            new qw(t)))
        );
        var t;
      }),
      (e.prototype.hasNameForId = function (t, n) {
        return this.names.has(t) && this.names.get(t).has(n);
      }),
      (e.prototype.registerName = function (t, n) {
        if ((si(t), this.names.has(t))) this.names.get(t).add(n);
        else {
          var r = new Set();
          r.add(n), this.names.set(t, r);
        }
      }),
      (e.prototype.insertRules = function (t, n, r) {
        this.registerName(t, n), this.getTag().insertRules(si(t), r);
      }),
      (e.prototype.clearNames = function (t) {
        this.names.has(t) && this.names.get(t).clear();
      }),
      (e.prototype.clearRules = function (t) {
        this.getTag().clearGroup(si(t)), this.clearNames(t);
      }),
      (e.prototype.clearTag = function () {
        this.tag = void 0;
      }),
      e
    );
  })(),
  l4 = /&/g,
  a4 = /^\s*\/\/.*$/gm;
function S1(e, t) {
  return e.map(function (n) {
    return (
      n.type === "rule" &&
        ((n.value = "".concat(t, " ").concat(n.value)),
        (n.value = n.value.replaceAll(",", ",".concat(t, " "))),
        (n.props = n.props.map(function (r) {
          return "".concat(t, " ").concat(r);
        }))),
      Array.isArray(n.children) &&
        n.type !== "@keyframes" &&
        (n.children = S1(n.children, t)),
      n
    );
  });
}
function u4(e) {
  var t,
    n,
    r,
    o = e === void 0 ? wr : e,
    i = o.options,
    s = i === void 0 ? wr : i,
    l = o.plugins,
    u = l === void 0 ? qs : l,
    c = function (v, w, y) {
      return y.startsWith(n) && y.endsWith(n) && y.replaceAll(n, "").length > 0
        ? ".".concat(t)
        : v;
    },
    f = u.slice();
  f.push(function (v) {
    v.type === Ws &&
      v.value.includes("&") &&
      (v.props[0] = v.props[0].replace(l4, n).replace(r, c));
  }),
    s.prefix && f.push(zw),
    f.push(Tw);
  var d = function (v, w, y, x) {
    w === void 0 && (w = ""),
      y === void 0 && (y = ""),
      x === void 0 && (x = "&"),
      (t = x),
      (n = w),
      (r = new RegExp("\\".concat(n, "\\b"), "g"));
    var j = v.replace(a4, ""),
      m = Rw(y || w ? "".concat(y, " ").concat(w, " { ").concat(j, " }") : j);
    s.namespace && (m = S1(m, s.namespace));
    var p = [];
    return (
      fs(
        m,
        Ow(
          f.concat(
            Nw(function (g) {
              return p.push(g);
            }),
          ),
        ),
      ),
      p
    );
  };
  return (
    (d.hash = u.length
      ? u
          .reduce(function (v, w) {
            return w.name || Io(15), er(v, w.name);
          }, p1)
          .toString()
      : ""),
    d
  );
}
var c4 = new w1(),
  ou = u4(),
  j1 = Se.createContext({
    shouldForwardProp: void 0,
    styleSheet: c4,
    stylis: ou,
  });
j1.Consumer;
Se.createContext(void 0);
function bf() {
  return _.useContext(j1);
}
var d4 = (function () {
    function e(t, n) {
      var r = this;
      (this.inject = function (o, i) {
        i === void 0 && (i = ou);
        var s = r.name + i.hash;
        o.hasNameForId(r.id, s) ||
          o.insertRules(r.id, s, i(r.rules, s, "@keyframes"));
      }),
        (this.name = t),
        (this.id = "sc-keyframes-".concat(t)),
        (this.rules = n),
        Ec(this, function () {
          throw Io(12, String(r.name));
        });
    }
    return (
      (e.prototype.getName = function (t) {
        return t === void 0 && (t = ou), this.name + t.hash;
      }),
      e
    );
  })(),
  f4 = function (e) {
    return e >= "A" && e <= "Z";
  };
function Df(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    f4(r) ? (t += "-" + r.toLowerCase()) : (t += r);
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var C1 = function (e) {
    return e == null || e === !1 || e === "";
  },
  E1 = function (e) {
    var t,
      n,
      r = [];
    for (var o in e) {
      var i = e[o];
      e.hasOwnProperty(o) &&
        !C1(i) &&
        ((Array.isArray(i) && i.isCss) || Sr(i)
          ? r.push("".concat(Df(o), ":"), i, ";")
          : Po(i)
          ? r.push.apply(r, ds(ds(["".concat(o, " {")], E1(i), !1), ["}"], !1))
          : r.push(
              ""
                .concat(Df(o), ": ")
                .concat(
                  ((t = o),
                  (n = i) == null || typeof n == "boolean" || n === ""
                    ? ""
                    : typeof n != "number" ||
                      n === 0 ||
                      t in Lw ||
                      t.startsWith("--")
                    ? String(n).trim()
                    : "".concat(n, "px")),
                  ";",
                ),
            ));
    }
    return r;
  };
function An(e, t, n, r) {
  if (C1(e)) return [];
  if (Cc(e)) return [".".concat(e.styledComponentId)];
  if (Sr(e)) {
    if (!Sr((i = e)) || (i.prototype && i.prototype.isReactComponent) || !t)
      return [e];
    var o = e(t);
    return An(o, t, n, r);
  }
  var i;
  return e instanceof d4
    ? n
      ? (e.inject(n, r), [e.getName(r)])
      : [e]
    : Po(e)
    ? E1(e)
    : Array.isArray(e)
    ? Array.prototype.concat.apply(
        qs,
        e.map(function (s) {
          return An(s, t, n, r);
        }),
      )
    : [e.toString()];
}
function p4(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (Sr(n) && !Cc(n)) return !1;
  }
  return !0;
}
var h4 = h1(Js),
  m4 = (function () {
    function e(t, n, r) {
      (this.rules = t),
        (this.staticRulesId = ""),
        (this.isStatic = (r === void 0 || r.isStatic) && p4(t)),
        (this.componentId = n),
        (this.baseHash = er(h4, n)),
        (this.baseStyle = r),
        w1.registerId(n);
    }
    return (
      (e.prototype.generateAndInjectStyles = function (t, n, r) {
        var o = this.baseStyle
          ? this.baseStyle.generateAndInjectStyles(t, n, r)
          : "";
        if (this.isStatic && !r.hash)
          if (
            this.staticRulesId &&
            n.hasNameForId(this.componentId, this.staticRulesId)
          )
            o = kn(o, this.staticRulesId);
          else {
            var i = zf(An(this.rules, t, n, r)),
              s = nu(er(this.baseHash, i) >>> 0);
            if (!n.hasNameForId(this.componentId, s)) {
              var l = r(i, ".".concat(s), void 0, this.componentId);
              n.insertRules(this.componentId, s, l);
            }
            (o = kn(o, s)), (this.staticRulesId = s);
          }
        else {
          for (
            var u = er(this.baseHash, r.hash), c = "", f = 0;
            f < this.rules.length;
            f++
          ) {
            var d = this.rules[f];
            if (typeof d == "string") c += d;
            else if (d) {
              var v = zf(An(d, t, n, r));
              (u = er(u, v + f)), (c += v);
            }
          }
          if (c) {
            var w = nu(u >>> 0);
            n.hasNameForId(this.componentId, w) ||
              n.insertRules(
                this.componentId,
                w,
                r(c, ".".concat(w), void 0, this.componentId),
              ),
              (o = kn(o, w));
          }
        }
        return o;
      }),
      e
    );
  })(),
  k1 = Se.createContext(void 0);
k1.Consumer;
var Fl = {};
function g4(e, t, n) {
  var r = Cc(e),
    o = e,
    i = !Il(e),
    s = t.attrs,
    l = s === void 0 ? qs : s,
    u = t.componentId,
    c =
      u === void 0
        ? (function (S, E) {
            var k = typeof S != "string" ? "sc" : Rf(S);
            Fl[k] = (Fl[k] || 0) + 1;
            var P = "".concat(k, "-").concat(Mw(Js + k + Fl[k]));
            return E ? "".concat(E, "-").concat(P) : P;
          })(t.displayName, t.parentComponentId)
        : u,
    f = t.displayName,
    d =
      f === void 0
        ? (function (S) {
            return Il(S) ? "styled.".concat(S) : "Styled(".concat(Bw(S), ")");
          })(e)
        : f,
    v =
      t.displayName && t.componentId
        ? "".concat(Rf(t.displayName), "-").concat(t.componentId)
        : t.componentId || c,
    w = r && o.attrs ? o.attrs.concat(l).filter(Boolean) : l,
    y = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var x = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var j = t.shouldForwardProp;
      y = function (S, E) {
        return x(S, E) && j(S, E);
      };
    } else y = x;
  }
  var m = new m4(n, v, r ? o.componentStyle : void 0);
  function p(S, E) {
    return (function (k, P, A) {
      var I = k.attrs,
        b = k.componentStyle,
        ye = k.defaultProps,
        hn = k.foldedComponentIds,
        mn = k.styledComponentId,
        Fo = k.target,
        Ys = Se.useContext(k1),
        Ar = bf(),
        gn = k.shouldForwardProp || Ar.shouldForwardProp,
        T = Dw(P, Ys, ye) || wr,
        N = (function (bt, ze, gt) {
          for (
            var Tr,
              yn = Re(Re({}, ze), { className: void 0, theme: gt }),
              Xs = 0;
            Xs < bt.length;
            Xs += 1
          ) {
            var $o = Sr((Tr = bt[Xs])) ? Tr(yn) : Tr;
            for (var Dt in $o)
              yn[Dt] =
                Dt === "className"
                  ? kn(yn[Dt], $o[Dt])
                  : Dt === "style"
                  ? Re(Re({}, yn[Dt]), $o[Dt])
                  : $o[Dt];
          }
          return (
            ze.className && (yn.className = kn(yn.className, ze.className)), yn
          );
        })(I, P, T),
        z = N.as || Fo,
        U = {};
      for (var H in N)
        N[H] === void 0 ||
          H[0] === "$" ||
          H === "as" ||
          (H === "theme" && N.theme === T) ||
          (H === "forwardedAs"
            ? (U.as = N.forwardedAs)
            : (gn && !gn(H, z)) || (U[H] = N[H]));
      var vn = (function (bt, ze) {
          var gt = bf(),
            Tr = bt.generateAndInjectStyles(ze, gt.styleSheet, gt.stylis);
          return Tr;
        })(b, N),
        Xe = kn(hn, mn);
      return (
        vn && (Xe += " " + vn),
        N.className && (Xe += " " + N.className),
        (U[Il(z) && !f1.has(z) ? "class" : "className"] = Xe),
        (U.ref = A),
        _.createElement(z, U)
      );
    })(g, S, E);
  }
  p.displayName = d;
  var g = Se.forwardRef(p);
  return (
    (g.attrs = w),
    (g.componentStyle = m),
    (g.displayName = d),
    (g.shouldForwardProp = y),
    (g.foldedComponentIds = r
      ? kn(o.foldedComponentIds, o.styledComponentId)
      : ""),
    (g.styledComponentId = v),
    (g.target = r ? o.target : e),
    Object.defineProperty(g, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (S) {
        this._foldedDefaultProps = r
          ? (function (E) {
              for (var k = [], P = 1; P < arguments.length; P++)
                k[P - 1] = arguments[P];
              for (var A = 0, I = k; A < I.length; A++) ru(E, I[A], !0);
              return E;
            })({}, o.defaultProps, S)
          : S;
      },
    }),
    Ec(g, function () {
      return ".".concat(g.styledComponentId);
    }),
    i &&
      y1(g, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
      }),
    g
  );
}
function If(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1)
    n.push(t[r], e[r + 1]);
  return n;
}
var Ff = function (e) {
  return Object.assign(e, { isCss: !0 });
};
function v4(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (Sr(e) || Po(e)) return Ff(An(If(qs, ds([e], t, !0))));
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string"
    ? An(r)
    : Ff(An(If(r, t)));
}
function iu(e, t, n) {
  if ((n === void 0 && (n = wr), !t)) throw Io(1, t);
  var r = function (o) {
    for (var i = [], s = 1; s < arguments.length; s++) i[s - 1] = arguments[s];
    return e(t, n, v4.apply(void 0, ds([o], i, !1)));
  };
  return (
    (r.attrs = function (o) {
      return iu(
        e,
        t,
        Re(Re({}, n), {
          attrs: Array.prototype.concat(n.attrs, o).filter(Boolean),
        }),
      );
    }),
    (r.withConfig = function (o) {
      return iu(e, t, Re(Re({}, n), o));
    }),
    r
  );
}
var P1 = function (e) {
    return iu(g4, e);
  },
  h = P1;
f1.forEach(function (e) {
  h[e] = P1(e);
});
const y4 = h.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: var(--s-6) var(--s-10);
`,
  x4 = h.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  font-size: 20px;
  font-family: JetBrains Mono !important;
`,
  w4 = h.div`
  width: 100%;
`,
  S4 = h.div`
  border: 1px solid gray;
  width: 100%;
`,
  j4 = h.div`
  color: #fc4308;
  font-weight: bold;
  padding: 10px;
`,
  C4 = h.ul`
  display: flex;
  gap: 40px;
  padding: 10px;
`,
  li = h.li`
  display: inline-block;
  font-size: 25px;
  &:hover {
    color: var(--blue);
    cursor: pointer;
  }
`,
  E4 = h.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`,
  k4 = h.input`
  border: none;
  background-color: #dedede;
  width: 400px;
  border-radius: 15px;
  padding: 10px;
  font-size: 20px;

  &:hover {
    background-color: white;
  }
`,
  P4 = h.div`
  padding: 10px;
  font-size: 20px;
`;
h.div`
  cursor: pointer;
  padding: 5px;
  display: flex;
  margin-right: 60px;
  gap: 4px;
  &:hover {
    color: var(--blue);
    cursor: pointer;
  }
`;
var _1 = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  $f = Se.createContext && Se.createContext(_1),
  _4 = ["attr", "size", "title"];
function R4(e, t) {
  if (e == null) return {};
  var n = A4(e, t),
    r,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (r = i[o]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function A4(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function hs() {
  return (
    (hs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    hs.apply(this, arguments)
  );
}
function Mf(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function ms(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Mf(Object(n), !0).forEach(function (r) {
          T4(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Mf(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function T4(e, t, n) {
  return (
    (t = O4(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function O4(e) {
  var t = N4(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function N4(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function R1(e) {
  return (
    e &&
    e.map((t, n) =>
      Se.createElement(t.tag, ms({ key: n }, t.attr), R1(t.child)),
    )
  );
}
function ke(e) {
  return (t) =>
    Se.createElement(z4, hs({ attr: ms({}, e.attr) }, t), R1(e.child));
}
function z4(e) {
  var t = (n) => {
    var { attr: r, size: o, title: i } = e,
      s = R4(e, _4),
      l = o || n.size || "1em",
      u;
    return (
      n.className && (u = n.className),
      e.className && (u = (u ? u + " " : "") + e.className),
      Se.createElement(
        "svg",
        hs(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          s,
          {
            className: u,
            style: ms(ms({ color: e.color || n.color }, n.style), e.style),
            height: l,
            width: l,
            xmlns: "http://www.w3.org/2000/svg",
          },
        ),
        i && Se.createElement("title", null, i),
        e.children,
      )
    );
  };
  return $f !== void 0
    ? Se.createElement($f.Consumer, null, (n) => t(n))
    : t(_1);
}
function L4(e) {
  return ke({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z",
        },
        child: [],
      },
    ],
  })(e);
}
function b4(e) {
  return ke({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z",
        },
        child: [],
      },
    ],
  })(e);
}
function D4(e) {
  return ke({
    tag: "svg",
    attr: { viewBox: "0 0 576 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z",
        },
        child: [],
      },
    ],
  })(e);
}
function gs(e) {
  return ke({
    tag: "svg",
    attr: { viewBox: "0 0 576 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z",
        },
        child: [],
      },
    ],
  })(e);
}
function A1(e) {
  return ke({
    tag: "svg",
    attr: { viewBox: "0 0 384 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm160-14.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z",
        },
        child: [],
      },
    ],
  })(e);
}
function I4(e) {
  return ke({
    tag: "svg",
    attr: { viewBox: "0 0 576 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z",
        },
        child: [],
      },
    ],
  })(e);
}
function F4(e) {
  return ke({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z",
        },
        child: [],
      },
    ],
  })(e);
}
function T1(e) {
  return ke({
    tag: "svg",
    attr: { viewBox: "0 0 640 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z",
        },
        child: [],
      },
    ],
  })(e);
}
const $4 = h.div`
  position: relative;
`,
  M4 = h.div``,
  B4 = h.div`
  visibility: ${({ $open: e }) => (e ? "visible" : "hidden")};
  position: absolute;
  z-index: 20;
  display: flex;
  flex-direction: column;
  padding: var(--s-4);
  width: max-content;
  transform: ${({ $position: e }) =>
    e === kc.LEFT ? "translateX(-50%)" : "translateX(0)"};
`;
var kc = ((e) => ((e.LEFT = "left"), (e.RIGHT = "right"), e))(kc || {});
function U4({ children: e, toggleButton: t, position: n }) {
  const [r, o] = _.useState(!1);
  return a.jsxs($4, {
    children: [
      a.jsx(M4, { onClick: () => o(!r), children: t }),
      a.jsx(B4, { $open: r, $position: n, onClick: () => o(!r), children: e }),
    ],
  });
}
function H4(e) {
  return ke({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88a9.947 9.947 0 0 1 12.28 0C16.43 19.18 14.03 20 12 20z",
        },
        child: [],
      },
    ],
  })(e);
}
function vs(e) {
  return ke({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z",
        },
        child: [],
      },
    ],
  })(e);
}
function O1(e) {
  return ke({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zM5 7V5h14v2H5zm5.56 10.46 5.93-5.93-1.06-1.06-4.87 4.87-2.11-2.11-1.06 1.06z",
        },
        child: [],
      },
    ],
  })(e);
}
const V4 = h.button`
  background-color: var(--white);
  display: flex;
  flex-direction: "row";
  align-items: center;
  font-size: var(--fs-md);
  cursor: pointer;
`,
  W4 = h.div`
  box-shadow: var(--shadow-2xl);
  background-color: var(--white);
`,
  Q4 = h.div`
  font-size: var(--fs-md);
  padding: var(--s-3);
  &:hover {
    cursor: pointer;
    background-color: var(--light-gray);
  }
`,
  K4 = [
    { label: "My Contribution", link: "/contribution" },
    { label: "Edit Profile", link: "/profile" },
    { label: "Log out", link: "/logout" },
  ];
function G4() {
  const { name: e } = sc((t) => t.userState.user) || {};
  return a.jsx(U4, {
    position: kc.RIGHT,
    toggleButton: a.jsxs(V4, {
      children: [a.jsx(H4, {}), a.jsx("p", { children: e })],
    }),
    children: a.jsx(W4, {
      children: K4.map((t) => a.jsx(Q4, { children: t.label }, t.label)),
    }),
  });
}
const J4 = () =>
    a.jsxs(y4, {
      children: [
        a.jsxs(x4, {
          children: [
            a.jsx(j4, { children: "LOGO" }),
            a.jsxs(C4, {
              children: [
                a.jsx(li, { children: "Home" }),
                a.jsx(li, { children: "Events" }),
                a.jsx(li, { children: "Contact Us" }),
                a.jsx(li, { children: "About Us" }),
              ],
            }),
            a.jsxs(E4, {
              children: [
                a.jsx(k4, { placeholder: "Search Anything" }),
                a.jsx(P4, { children: a.jsx(F4, {}) }),
              ],
            }),
            a.jsx(G4, {}),
          ],
        }),
        a.jsx(w4, { children: a.jsx(S4, {}) }),
      ],
    }),
  q4 = h.div`
  border: none;
  width: 100%;
  background-color: var(--black);
`,
  Y4 = h.div`
  display: flex;
  flex-direction: row;
  padding: var(--s-12);
  color: var(--white);
`,
  X4 = h.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 6;
`,
  Z4 = h.div`
  font-size: 36px;
  margin-bottom: var(--s-1);
`,
  eS = h.div`
  font-size: 18px;
`,
  tS = h.div`
  font-size: 18px;
  display: flex;
  flex-direction: row;
  gap: 10px;
`,
  nS = h.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  align-items: center;
`,
  rS = h.div`
  font-size: 36px;
  margin-bottom: var(--s-5);
`,
  Bf = h.div`
  font-size: 18px;
  margin-bottom: var(--s-6);
`,
  oS = h.div`
  font-size: 18px;
`,
  iS = h.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  align-items: center;
`,
  sS = h.div`
  font-size: 36px;
  margin-bottom: var(--s-5);
`,
  Uf = h.div`
  font-size: 18px;
  margin-bottom: var(--s-6);
`,
  lS = h.div`
  font-size: 18px;
`,
  aS = h.div`
  padding: var(--s-3) var(--s-12);
`,
  uS = h.div`
  border: 1px solid white;
  width: 100%;
`,
  cS = h.div`
  padding: var(--s-3) var(--s-12);
`,
  dS = h.div`
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
`,
  fS = h.div`
  font-size: 20px;
`,
  pS = h.div`
  margin-top: 2px;
  font-size: 20px;
`;
function hS(e) {
  return ke({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M13.0281 2.00098C14.1535 2.00284 14.7238 2.00879 15.2166 2.02346L15.4107 2.02981C15.6349 2.03778 15.8561 2.04778 16.1228 2.06028C17.1869 2.10944 17.9128 2.27778 18.5503 2.52528C19.2094 2.77944 19.7661 3.12278 20.3219 3.67861C20.8769 4.23444 21.2203 4.79278 21.4753 5.45028C21.7219 6.08694 21.8903 6.81361 21.9403 7.87778C21.9522 8.14444 21.9618 8.36564 21.9697 8.58989L21.976 8.78397C21.9906 9.27672 21.9973 9.8471 21.9994 10.9725L22.0002 11.7182C22.0003 11.8093 22.0003 11.9033 22.0003 12.0003L22.0002 12.2824L21.9996 13.0281C21.9977 14.1535 21.9918 14.7238 21.9771 15.2166L21.9707 15.4107C21.9628 15.6349 21.9528 15.8561 21.9403 16.1228C21.8911 17.1869 21.7219 17.9128 21.4753 18.5503C21.2211 19.2094 20.8769 19.7661 20.3219 20.3219C19.7661 20.8769 19.2069 21.2203 18.5503 21.4753C17.9128 21.7219 17.1869 21.8903 16.1228 21.9403C15.8561 21.9522 15.6349 21.9618 15.4107 21.9697L15.2166 21.976C14.7238 21.9906 14.1535 21.9973 13.0281 21.9994L12.2824 22.0002C12.1913 22.0003 12.0973 22.0003 12.0003 22.0003L11.7182 22.0002L10.9725 21.9996C9.8471 21.9977 9.27672 21.9918 8.78397 21.9771L8.58989 21.9707C8.36564 21.9628 8.14444 21.9528 7.87778 21.9403C6.81361 21.8911 6.08861 21.7219 5.45028 21.4753C4.79194 21.2211 4.23444 20.8769 3.67861 20.3219C3.12278 19.7661 2.78028 19.2069 2.52528 18.5503C2.27778 17.9128 2.11028 17.1869 2.06028 16.1228C2.0484 15.8561 2.03871 15.6349 2.03086 15.4107L2.02457 15.2166C2.00994 14.7238 2.00327 14.1535 2.00111 13.0281L2.00098 10.9725C2.00284 9.8471 2.00879 9.27672 2.02346 8.78397L2.02981 8.58989C2.03778 8.36564 2.04778 8.14444 2.06028 7.87778C2.10944 6.81278 2.27778 6.08778 2.52528 5.45028C2.77944 4.79194 3.12278 4.23444 3.67861 3.67861C4.23444 3.12278 4.79278 2.78028 5.45028 2.52528C6.08778 2.27778 6.81278 2.11028 7.87778 2.06028C8.14444 2.0484 8.36564 2.03871 8.58989 2.03086L8.78397 2.02457C9.27672 2.00994 9.8471 2.00327 10.9725 2.00111L13.0281 2.00098ZM12.0003 7.00028C9.23738 7.00028 7.00028 9.23981 7.00028 12.0003C7.00028 14.7632 9.23981 17.0003 12.0003 17.0003C14.7632 17.0003 17.0003 14.7607 17.0003 12.0003C17.0003 9.23738 14.7607 7.00028 12.0003 7.00028ZM12.0003 9.00028C13.6572 9.00028 15.0003 10.3429 15.0003 12.0003C15.0003 13.6572 13.6576 15.0003 12.0003 15.0003C10.3434 15.0003 9.00028 13.6576 9.00028 12.0003C9.00028 10.3434 10.3429 9.00028 12.0003 9.00028ZM17.2503 5.50028C16.561 5.50028 16.0003 6.06018 16.0003 6.74943C16.0003 7.43867 16.5602 7.99944 17.2503 7.99944C17.9395 7.99944 18.5003 7.43954 18.5003 6.74943C18.5003 6.06018 17.9386 5.49941 17.2503 5.50028Z",
        },
        child: [],
      },
    ],
  })(e);
}
function mS(e) {
  return ke({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c-31.2-31.2-31.2-81.9 0-113.1s81.9-31.2 113.1 0c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9c-50-50-131-50-181 0s-50 131 0 181s131 50 181 0c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0c-31.2 31.2-81.9 31.2-113.1 0z",
        },
        child: [],
      },
    ],
  })(e);
}
const gS = () =>
  a.jsxs(q4, {
    children: [
      a.jsxs(Y4, {
        children: [
          a.jsxs(X4, {
            children: [
              a.jsx(Z4, { children: "Header" }),
              a.jsx(eS, {
                children:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare cursus sed nunc eget dictum Sed ornare cursus sed nunc eget dictumd nunc eget dictum Sed ornare cursus sed nunc eget dictum",
              }),
              a.jsxs(tS, {
                children: [
                  a.jsx(L4, {}),
                  a.jsx(b4, {}),
                  a.jsx(hS, {}),
                  a.jsx(D4, {}),
                ],
              }),
            ],
          }),
          a.jsxs(nS, {
            children: [
              a.jsx(rS, { children: "Header Text" }),
              a.jsx(Bf, { children: "Button" }),
              a.jsx(Bf, { children: "Button" }),
              a.jsx(oS, { children: "Button" }),
            ],
          }),
          a.jsxs(iS, {
            children: [
              a.jsx(sS, { children: "Header Text" }),
              a.jsx(Uf, { children: "Button" }),
              a.jsx(Uf, { children: "Button" }),
              a.jsx(lS, { children: "Button" }),
            ],
          }),
        ],
      }),
      a.jsx(aS, { children: a.jsx(uS, {}) }),
      a.jsx(cS, {
        children: a.jsxs(dS, {
          children: [
            a.jsx(pS, { children: a.jsx(mS, {}) }),
            a.jsx(fS, { children: "2020 Y101, All rights reserved." }),
          ],
        }),
      }),
    ],
  });
function vS() {
  return a.jsxs(a.Fragment, {
    children: [a.jsx(J4, {}), a.jsx(oc, {}), a.jsx(gS, {})],
  });
}
const yS = h.div`
  width: 100%;
  height: 100vh;
  display: flex;
`,
  xS = h.div`
  width: 80%;
`;
h.h2`
  margin: 20px;
`;
const wS = h.div`
  margin-left: 20px;
`,
  SS = h.div`
  width: 100%
  height: 80px;
  border-bottom: 2px solid gray;
  display: flex;
  justify-content: space-between;
  div {
    margin: 20px;
  }
`;
h.h2`
  margin: 20px;
`;
const jS = () =>
    a.jsxs(SS, {
      children: [
        a.jsxs("div", {
          children: [
            a.jsx("p", { children: "Hello Admin" }),
            a.jsx("p", { children: "Have a nice day" }),
          ],
        }),
        a.jsxs("div", {
          children: [
            a.jsx("p", { children: "Lekan" }),
            a.jsx("p", { children: "Admin" }),
          ],
        }),
      ],
    }),
  CS = h.div`
  width: 20%;
  height: 100vh;
  background-color: #236192;
  button {
    background: transparent;
    width: 90%;
    height: 40px;
    cursor: pointer;
    margin-top: 20px;
    margin-left: 5%;
    border-radius: 12px;
    color: white;
  }
  button:hover {
    background-color: white;
    color: #236192;
  }
`,
  ES = h.div`
  width: 100%;
  height: 80px;
  border-bottom: 2px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    color: white;
  }
`;
function N1(e) {
  return ke({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      { tag: "path", attr: { d: "m4 6 8-4 8 4" }, child: [] },
      {
        tag: "path",
        attr: { d: "m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" },
        child: [],
      },
      {
        tag: "path",
        attr: { d: "M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4" },
        child: [],
      },
      { tag: "path", attr: { d: "M18 5v17" }, child: [] },
      { tag: "path", attr: { d: "M6 5v17" }, child: [] },
      { tag: "circle", attr: { cx: "12", cy: "9", r: "2" }, child: [] },
    ],
  })(e);
}
const kS = () =>
  a.jsx(a.Fragment, {
    children: a.jsxs(CS, {
      children: [
        a.jsx(ES, { children: a.jsx("h2", { children: "ALHKQ" }) }),
        a.jsx(wt, {
          to: "/manage",
          children: a.jsxs("button", { children: [a.jsx(I4, {}), " Home"] }),
        }),
        a.jsx(wt, {
          to: "/manage/faculty",
          children: a.jsxs("button", { children: [a.jsx(N1, {}), " Faculty"] }),
        }),
        a.jsx(wt, {
          to: "/manage/user",
          children: a.jsxs("button", { children: [a.jsx(T1, {}), " User"] }),
        }),
        a.jsx(wt, {
          to: "/manage/event",
          children: a.jsxs("button", { children: [a.jsx(O1, {}), " Events"] }),
        }),
        a.jsx(wt, {
          to: "/manage/contribution",
          children: a.jsxs("button", {
            children: [a.jsx(A1, {}), " Contributions"],
          }),
        }),
      ],
    }),
  });
function PS() {
  return a.jsxs(yS, {
    children: [
      a.jsx(kS, {}),
      a.jsxs(xS, {
        children: [a.jsx(jS, {}), a.jsx(wS, { children: a.jsx(oc, {}) })],
      }),
    ],
  });
}
function _S() {
  return a.jsx(a.Fragment, { children: a.jsx(oc, {}) });
}
const Lt = ({ allowedRoles: e, children: t }) => {
    const { user: n } = sc((o) => o.userState),
      { pathname: r } = Fn();
    return n
      ? !e || e.includes(n.role)
        ? t
        : a.jsx(Gd, { to: "/login" })
      : a.jsx(Gd, { to: "/login?redirect=" + r });
  },
  RS = h.div`
  min-height: 100vh;
  padding: var(--s-8) var(--s-8);
`,
  AS = h.div`
  display: flex;
  padding: var(--s-8) var(--s-8);
  gap: var(--s-5);
`,
  TS = h.div`
  flex: 8;
`,
  OS = h.div`
  flex: 4;
`,
  NS = h.div`
  position: relative;
  display: flex;
  flex-direction: column;
`,
  zS = h.div`
  position: absolute;
  z-index: 1;
  bottom: 0;
`,
  LS = h.h1`
  font-size: var(--fs-4xl);
  font-weight: var(--fw-bold);
  padding: var(--s-2) var(--s-5);
`,
  bS = h.p`
  font-size: var(--fs-xl);
  padding: var(--s-3) var(--s-5);
`,
  DS = h.img`
  border-radius: var(--br-lg);
  z-index: 0;
  width: 100%;
  height: auto;
`,
  IS = () =>
    a.jsxs(NS, {
      children: [
        a.jsxs(zS, {
          children: [
            a.jsx(LS, { children: "Featured Contribution" }),
            a.jsx(bS, {
              children:
                "This is a featured contribution. It could be a blog post, a video, a podcast, or anything else that we want to highlight.",
            }),
          ],
        }),
        a.jsx(DS, { src: "https://placehold.co/800x450", alt: "placeholder" }),
      ],
    }),
  FS = h.div`
  position: relative;
  display: flex;
  flex-direction: column;
`,
  $S = h.h2`
  font-size: var(--fs-2xl);
  padding: var(--s-4) 0;
`,
  MS = h.p`
  font-size: var(--fs-lg);
  padding-bottom: var(--s-4);
  border-bottom: 2px solid var(--black);
`,
  BS = h.div``,
  US = h.img`
  border-radius: var(--br-lg);
  width: 100%;
  height: auto;
  z-index: 0;
`,
  HS = h.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: var(--s-4) 0;
`,
  VS = h.div``,
  WS = () =>
    a.jsxs(FS, {
      children: [
        a.jsx(US, { src: "https://placehold.co/800x450", alt: "placeholder" }),
        a.jsx(BS, {}),
        a.jsx($S, { children: "Secondary Contribution" }),
        a.jsx(MS, {
          children:
            "This is a secondary contribution. It could be a blog post, a video, a podcast, or anything else that we want to highlight.",
        }),
        a.jsx(HS, { children: a.jsx(VS, { children: "EQUIPMENT | HOW TO " }) }),
      ],
    }),
  QS = h.div`
  display: flex;
  padding: 0 var(--s-6);
  flex-direction: column;
  overflow: auto;
`,
  KS = h.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--s-2);
`,
  GS = h.h2``,
  JS = h.div``,
  qS = h.button``,
  YS = h.button``,
  XS = h.div`
  display: flex;
  gap: var(--s-4);
  overflow: auto;
`,
  ZS = h.div`
  padding: var(--s-4);
  border-radius: var(--br-xl);
  width: 25%;
  box-shadow: var(--shadow-lg);
  margin-bottom: var(--s-4);
`,
  ej = h.img`
  width: 100%;
  border-radius: var(--br-lg);
  width: 100%;
  height: 200px;
  object-fit: cover;
`,
  tj = h.h3`
  padding: var(--s-2) 0;
`,
  nj = h.p`
  color: var(--dark-gray);
`,
  rj = h.div`
  border-radius: var(--br-lg);
  background-color: var(--light-gray);
  margin-top: var(--s-4);
  padding: var(--s-4);
  display: flex;
  justify-content: space-between;
`,
  oj = h.button``,
  ij = h.button``,
  ai = () =>
    a.jsxs(ZS, {
      children: [
        a.jsx(ej, {
          src: "https://via.placeholder.com/800/450",
          alt: "placeholder",
        }),
        a.jsx(tj, { children: "Contribution Title" }),
        a.jsx(nj, {
          children:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        }),
        a.jsxs(rj, {
          children: [
            a.jsx(oj, { children: "Like" }),
            a.jsx(ij, { children: "Comment" }),
          ],
        }),
      ],
    }),
  sj = () =>
    a.jsxs(QS, {
      children: [
        a.jsxs(KS, {
          children: [
            a.jsx(GS, { children: "Popular Contributions" }),
            a.jsxs(JS, {
              children: [
                a.jsx(qS, { children: "Left" }),
                a.jsx(YS, { children: "Right" }),
              ],
            }),
          ],
        }),
        a.jsxs(XS, {
          children: [
            a.jsx(ai, {}),
            a.jsx(ai, {}),
            a.jsx(ai, {}),
            a.jsx(ai, {}),
          ],
        }),
      ],
    }),
  lj = h.div`
  display: flex;
  flex-direction: column;
`,
  aj = h.div`
  font-size: var(--fs-10);
  padding: var(--s-4) var(--s-4);
  border-bottom: 2px solid var(--black);
  font-weight: bold;
`,
  uj = h.div`
  display: flex;
  padding: var(--s-6) 0;
  gap: var(--s-6);
`,
  cj = h.div`
  flex: 8;
`,
  dj = h.div`
  flex: 4;
`,
  fj = h.div`
  display: flex;
  flex-direction: column;
  gap: var(--s-4);
`,
  pj = h.img`
  border-radius: var(--br-lg);
  width: 100%;
  height: auto;
  z-index: 0;
`,
  hj = h.div``,
  mj = h.div`
  font-size: 50px;
  font-weight: bold;
  padding-bottom: var(--s-6);
`,
  gj = h.div`
  font-size: 20px;
`,
  vj = () =>
    a.jsxs(fj, {
      children: [
        a.jsx(pj, { src: "https://placehold.co/800x450", alt: "placeholder" }),
        a.jsx(hj, {}),
        a.jsx(mj, { children: "Gulf Craft Majesty 155 and Majesty 110 " }),
        a.jsx(gj, {
          children:
            "This is a featured contribution. It could be a blog post, a video, a podcast, or anything else that we want to highlight.",
        }),
      ],
    }),
  yj = h.div`
  display: flex;
  flex-direction: column;
  gap: var(--s-6);
`,
  xj = h.img`
  border-radius: var(--br-lg);
  z-index: 0;
  width: 100%;
  height: auto;
`,
  wj = h.div`
  font-size: 30px;
  font-weight: bold;
`,
  Sj = h.div`
  font-size: 20px;
`,
  jj = h.div`
  border: 1px solid black;
`,
  Cj = h.div`
  font-size: 20px;
`,
  Ej = () =>
    a.jsxs(yj, {
      children: [
        a.jsx(xj, { src: "https://placehold.co/800x450", alt: "placeholder" }),
        a.jsx(wj, {
          children: "Clipper Race: How I won the round-the-world race",
        }),
        a.jsx(Sj, {
          children:
            "The history of the most difficult race for the most unprepared.",
        }),
        a.jsx(jj, {}),
        a.jsx(Cj, { children: "Experineces | PSanya Serenity Coast..." }),
      ],
    }),
  kj = () =>
    a.jsxs(lj, {
      children: [
        a.jsx(aj, { children: "Photos" }),
        a.jsxs(uj, {
          children: [
            a.jsx(cj, { children: a.jsx(vj, {}) }),
            a.jsx(dj, { children: a.jsx(Ej, {}) }),
          ],
        }),
      ],
    }),
  Pj = () =>
    a.jsx(Lt, {
      children: a.jsxs(RS, {
        children: [
          a.jsxs(AS, {
            children: [
              a.jsx(TS, { children: a.jsx(IS, {}) }),
              a.jsx(OS, { children: a.jsx(WS, {}) }),
            ],
          }),
          a.jsx(sj, {}),
          a.jsx(kj, {}),
        ],
      }),
    }),
  _j = h.div`
  display: flex;
  padding: var(--s-8) var(--s-12);
  min-height: 100vh;
  gap: var(--s-40);
`,
  Rj = h.div`
  flex: 4;
`,
  Aj = h.div`
  flex: 8;
`,
  Tj = h.div`
  display: flex;
  flex-direction: column;

  gap: var(--s-10);
`,
  Oj = h.div`
  font-size: 60px;
  color: var(--blue);
  font-weight: bold;
`,
  Nj = h.div`
  padding-bottom: var(--s-4);
  border-bottom: 2px solid var(--black);
`,
  zj = h.div`
  font-size: 30px;
  font-weight: bold;
`,
  Lj = h.div`
  display: flex;
  flex-direction: column;
  gap: var(--s-6);
  padding: var(--s-9) var(--s-7);
  font-size: 20px;
  input {
    cursor: pointer;
  }
`,
  $l = h.div``,
  bj = h.div`
  display: flex;
  flex-direction: column;
  padding-bottom: var(--s-10);
  border-bottom: 2px solid var(--black);
  gap: var(--s-5);
  padding-top: var(--s-6);
`,
  Dj = h.div`
  font-size: 30px;
  font-weight: bold;
  padding-bottom: var(--s-8);
`,
  Ij = h.div`
  display: flex;
  flex-direction: row;
  gap: var(--s-5);
  justify-content: center;
  padding-bottom: var(--s-7);
`,
  Fj = h.div`
  input {
    font-size: 20px;
    cursor: pointer;
  }
`,
  $j = h.div`
  input {
    font-size: 20px;
    cursor: pointer;
  }
`,
  Mj = h.button`
  background-color: var(--blue);
  padding: var(--s-5) 0;
  font-size: 20px;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: rgba(46, 111, 194, 0.7);
  }
`,
  Bj = h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--s-10);
  padding: var(--s-10) var(--s-6);
  border-bottom: 2px solid var(--black);
`,
  Uj = h.button`
  background-color: var(--blue);
  padding: var(--s-4) var(--s-9);
  color: white;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: rgba(46, 111, 194, 0.7);
  }
`,
  Hj = h.div`
  font-size: 20px;
`,
  Vj = () =>
    a.jsxs(Tj, {
      children: [
        a.jsx(Oj, { children: "Filter " }),
        a.jsxs(Nj, {
          children: [
            a.jsx(zj, { children: "Status" }),
            a.jsxs(Lj, {
              children: [
                a.jsxs($l, {
                  children: [a.jsx("input", { type: "checkbox" }), " Submit"],
                }),
                a.jsxs($l, {
                  children: [
                    a.jsx("input", { type: "checkbox" }),
                    " Not yet submitted",
                  ],
                }),
                a.jsxs($l, {
                  children: [
                    a.jsx("input", { type: "checkbox" }),
                    " Out of date",
                  ],
                }),
              ],
            }),
          ],
        }),
        a.jsxs(bj, {
          children: [
            a.jsx(Dj, { children: "Date" }),
            a.jsxs(Ij, {
              children: [
                a.jsx(Fj, { children: a.jsx("input", { type: "date" }) }),
                a.jsx($j, { children: a.jsx("input", { type: "date" }) }),
              ],
            }),
            a.jsx(Mj, { children: "Apply" }),
          ],
        }),
        a.jsxs(Bj, {
          children: [
            a.jsx(Uj, { children: "From Newest To Oldest" }),
            a.jsx(Hj, { children: "From Oldest To Newest" }),
          ],
        }),
      ],
    }),
  Wj = h.div`
  display: flex;
  flex-direction: column;
  gap: var(--s-10);
`,
  Qj = h.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,
  Kj = h.div`
  font-size: 60px;
  color: var(--blue);
  font-weight: bold;
`,
  Gj = h.div`
  input {
    border: none;
    width: 400px;
    border-radius: 15px;
    padding: 10px;
    &:hover {
      background-color: #dedede;
    }
  }
`,
  Jj = h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 2px solid var(--black);
`,
  qj = h.div`
  display: flex;
  flex-direction: column;
  gap: var(--s-20);
  width: 100%;
`,
  Yj = h.div`
  padding: var(--s-6) 0;
`,
  Xj = h.button`
  background-color: var(--blue);
  padding: var(--s-2) var(--s-10);
  color: white;
  border-radius: var(--s-1);

  cursor: pointer;
  &:hover {
    background-color: rgba(46, 111, 194, 0.7);
  }
`,
  Zj = h.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 var(--s-5);
`,
  Ml = h.div`
  font-size: 20px;
`,
  Bl = h.div`
  display: flex;
  flex-direction: row;
  gap: var(--s-2);
`,
  e3 = h.div`
  padding: var(--s-3);
  border-radius: 50%;
  background-color: #e54335;
`,
  t3 = h.div`
  padding: var(--s-3);
  border-radius: 50%;
  background-color: #236192;
`,
  n3 = h.div`
  padding: var(--s-3);
  border-radius: 50%;
  background-color: #d9d9d9;
`,
  r3 = h.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: var(--s-6) var(--s-20);
  background-color: #e54335;
  color: white;
`,
  o3 = h.div`
  border: 1 px solid black;
  border-radius: 50%;
  padding: var(--s-4);
  background-color: white;
  img {
    width: 30px;
    height: 30px;
  }
`,
  i3 = h.div`
  font-size: 30px;
  padding: var(--s-2) 0;
`,
  s3 = h.div`
  font-size: 20px;
  padding: var(--s-4) 0;
`,
  l3 = h.div`
  font-size: 20px;
  padding: var(--s-4) 0;
`,
  a3 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADOSURBVHgB1ZNNDoIwEIWnDcZoXOgNylHcET2EZ2DNpolBtx7BUyg7j0JvAAuVGGPHEYUgUNJEN3yL/s30TV/aMviw3GQrQL1DYFNoovT9No/kTIGJRXiNPZmJ1tj6It/xpBHnlbGI5EiBGcEHw1NdhIMFmqMyiTg2AlEw2XvhGbhm+caXCHXuVxJ5RLCkmmtloQvHUCGmTlTXqKQ6BmPXSuDQktjTE5iq/vUEP19jKcAA07bPUsfbJrm1Yl5aeAD6jJ4o+RedChpTavxi+gTNelRdmwZE7wAAAABJRU5ErkJggg==",
  Bn = () =>
    a.jsxs(r3, {
      children: [
        a.jsx(o3, { children: a.jsx("img", { src: a3, alt: "" }) }),
        a.jsx(i3, { children: "Event 1" }),
        a.jsx(s3, { children: "Friday, March 3, 2023" }),
        a.jsx(l3, { children: "Friday, March 3, 2023" }),
      ],
    }),
  u3 = () =>
    a.jsxs(Wj, {
      children: [
        a.jsxs(Qj, {
          children: [
            a.jsx(Kj, { children: "List Event" }),
            a.jsx(Gj, {
              children: a.jsx("input", {
                type: "search",
                placeholder: "Search Anything",
              }),
            }),
          ],
        }),
        a.jsxs(Jj, {
          children: [
            a.jsxs(qj, {
              children: [
                a.jsx(Bn, {}),
                a.jsx(Bn, {}),
                a.jsx(Bn, {}),
                a.jsx(Bn, {}),
                a.jsx(Bn, {}),
                a.jsx(Bn, {}),
              ],
            }),
            a.jsx(Yj, { children: a.jsx(Xj, { children: "Load More" }) }),
          ],
        }),
        a.jsxs(Zj, {
          children: [
            a.jsxs(Bl, {
              children: [a.jsx(e3, {}), a.jsx(Ml, { children: "Done" })],
            }),
            a.jsxs(Bl, {
              children: [a.jsx(t3, {}), a.jsx(Ml, { children: "In Process" })],
            }),
            a.jsxs(Bl, {
              children: [a.jsx(n3, {}), a.jsx(Ml, { children: "Out Date" })],
            }),
          ],
        }),
      ],
    }),
  c3 = () =>
    a.jsx(Lt, {
      children: a.jsxs(_j, {
        children: [
          a.jsx(Rj, { children: a.jsx(Vj, {}) }),
          a.jsx(Aj, { children: a.jsx(u3, {}) }),
        ],
      }),
    }),
  d3 = h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--s-7);
`,
  f3 = h.div`
  font-size: 50px;
  font-weight: bold;
`,
  p3 = h.div`
  font-size: 20px;
`,
  h3 = h.div``,
  m3 = "/assets/addcontributions-6aPF97oR.png",
  g3 = () =>
    a.jsxs(d3, {
      children: [
        a.jsx(f3, { children: "Submit Contributions" }),
        a.jsx(p3, { children: "Fill in the required details" }),
        a.jsx(h3, { children: a.jsx("img", { src: m3, alt: "" }) }),
      ],
    }),
  v3 = h.div`
  display: flex;
  flex-direction: column;
  padding: var(--s-6) var(--s-20);
  gap: var(--s-10);
`,
  Mr = h.div``,
  ui = h.div`
  font-size: 30px;
  font-weight: bold;
`,
  ci = h.div`
  input {
    width: 100%;
    height: 28px;
    padding: var(--s-5);
    font-size: 18px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    justify-content: center;
    &:hover {
      background-color: #dedede;
    }
  }
  textarea {
    width: 100%;
    padding: var(--s-5);
    font-size: 18px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    &:hover {
      background-color: #dedede;
    }
  }
`,
  y3 = h.div`
  padding: var(--s-6);
  font-size: 20px;
  color: #000000;
  font-weight: bold;
  input {
    cursor: pointer;
  }
`,
  Hf = h.div`
  padding: var(--s-4) 0;
  color: #bfbfbf;
`,
  x3 = h.div`
  display: flex;
  justify-content: center;
`,
  w3 = h.button`
  border: none;
  padding: var(--s-4) var(--s-15);
  border-radius: 10px;
  color: white;
  font-size: 20px;
  cursor: pointer;
  background-color: var(--blue);
  &:hover {
    background-color: rgba(46, 138, 170, 0.8);
  }
`,
  S3 = () =>
    a.jsxs(v3, {
      children: [
        a.jsxs(Mr, {
          children: [
            a.jsx(ui, { children: "Title" }),
            a.jsx(ci, {
              children: a.jsx("input", {
                type: "text",
                placeholder: "Enter event title",
              }),
            }),
          ],
        }),
        a.jsxs(Mr, {
          children: [
            a.jsx(ui, { children: "Description" }),
            a.jsx(ci, {
              children: a.jsx("textarea", {
                name: "",
                id: "",
                placeholder: "Enter event description",
              }),
            }),
          ],
        }),
        a.jsxs(Mr, {
          children: [
            a.jsx(ui, { children: "Image Files" }),
            a.jsx(ci, { children: a.jsx("input", { type: "text" }) }),
            a.jsx(Hf, { children: "Specify where to submit image files" }),
          ],
        }),
        a.jsxs(Mr, {
          children: [
            a.jsx(ui, { children: "Word Files" }),
            a.jsx(ci, { children: a.jsx("input", { type: "text" }) }),
            a.jsx(Hf, { children: "Specify where to submit image files" }),
          ],
        }),
        a.jsx(Mr, {
          children: a.jsxs(y3, {
            children: [
              a.jsx("input", { type: "checkbox" }),
              " i agree with term and privacy",
            ],
          }),
        }),
        a.jsx(x3, { children: a.jsx(w3, { children: "Submit" }) }),
      ],
    }),
  j3 = h.div`
  display: flex;
  flex-direction: column;
  padding: var(--s-6) var(--s-40);
`,
  C3 = h.div``,
  E3 = h.div``,
  k3 = () =>
    a.jsx(Lt, {
      children: a.jsxs(j3, {
        children: [
          a.jsx(C3, { children: a.jsx(g3, {}) }),
          a.jsx(E3, { children: a.jsx(S3, {}) }),
        ],
      }),
    }),
  P3 = h.div`
  padding: var(--s-5) var(--s-10);
  display: flex;
  flex-direction: column;
  height: auto;
  background-color: white;
`,
  _3 = h.div`
  padding: var(--s-10);
  font-size: 50px;
  font-weight: bold;
  width: 100%;
  justify-content: center;
  display: flex;
`,
  R3 = h.div`
  padding: var(--s-10) 0;
`,
  A3 = h.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: var(--s-10);
`,
  T3 = h.div`
  display: flex;
  padding: var(--s-6) var(--s-10);
  gap: var(--s-10);
`,
  O3 = h.div`
  flex: 8;
  display: flex;
  flex-direction: column;
  gap: var(--s-13);
`,
  N3 = h.div`
  display: flex;
  gap: var(--s-6);
`,
  z3 = h.div`
  flex: 6;
  input {
    width: 100%;
    height: 30px;
    padding: var(--s-5);
    font-size: 18px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    &:hover {
      background-color: #dedede;
    }
  }
`,
  $t = h.div`
  font-weight: bold;
  font-size: 20px;
`,
  L3 = h.div`
  flex: 6;
  input {
    width: 100%;
    height: 28px;
    padding: var(--s-5);
    font-size: 18px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    &:hover {
      background-color: #dedede;
    }
  }
`,
  b3 = h.div`
  input {
    width: 100%;
    height: 30px;
    padding: var(--s-5);
    font-size: 18px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    &:hover {
      background-color: #dedede;
    }
  }
`,
  D3 = h.div`
  input {
    width: 100%;
    height: 30px;
    padding: var(--s-5);
    font-size: 18px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    &:hover {
      background-color: #dedede;
    }
  }
`,
  I3 = h.div`
  input {
    width: 100%;
    height: 30px;
    padding: var(--s-5);
    font-size: 18px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    &:hover {
      background-color: #dedede;
    }
  }
`,
  F3 = h.div`
  input {
    width: 100%;
    height: 30px;
    padding: var(--s-5);
    font-size: 18px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    &:hover {
      background-color: #dedede;
    }
  }
`,
  $3 = h.div`
  display: flex;
  flex: 4;
  flex-direction: column;
  gap: var(--s-10);
`,
  M3 = h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--s-5);
`,
  B3 = h.div`
  padding: 0 var(--s-30);
`,
  U3 = h.img`
  border-radius: 50%;
  z-index: 0;
  width: 100%;
  height: auto;
`,
  H3 = h.div``,
  V3 = h.button`
  background-color: #236192;
  padding: var(--s-3) var(--s-6);
  border-radius: 10px;
  cursor: pointer;
  color: white;
  &:hover {
    background-color: rgba(46, 111, 194, 0.7);
  }
`,
  W3 = h.div`
  display: flex;
  flex-direction: column;
  gap: var(--s-5);
`,
  Ul = h.div`
  font-size: 20px;
  input {
    cursor: pointer;
  }
`,
  Q3 = h.div`
  display: flex;
  flex-direction: column;
  gap: var(--s-5);
`,
  K3 = h.div`
  input {
    font-size: 20px;
    cursor: pointer;
  }
`,
  G3 = () =>
    a.jsxs(T3, {
      children: [
        a.jsxs(O3, {
          children: [
            a.jsxs(N3, {
              children: [
                a.jsxs(z3, {
                  children: [
                    a.jsx($t, { children: "First Name" }),
                    a.jsx("input", { type: "text", name: "", id: "" }),
                  ],
                }),
                a.jsxs(L3, {
                  children: [
                    a.jsx($t, { children: "Last Name" }),
                    a.jsx("input", { type: "text", name: "", id: "" }),
                  ],
                }),
              ],
            }),
            a.jsxs(b3, {
              children: [
                a.jsx($t, { children: "Email" }),
                a.jsx("input", { type: "email" }),
              ],
            }),
            a.jsxs(D3, {
              children: [
                a.jsx($t, { children: "Address" }),
                a.jsx("input", { type: "text" }),
              ],
            }),
            a.jsxs(I3, {
              children: [
                a.jsx($t, { children: "Contact Number" }),
                a.jsx("input", { type: "number" }),
              ],
            }),
            a.jsxs(F3, {
              children: [
                a.jsx($t, { children: "Password" }),
                a.jsx("input", { type: "password" }),
              ],
            }),
          ],
        }),
        a.jsxs($3, {
          children: [
            a.jsxs(M3, {
              children: [
                a.jsx(B3, {
                  children: a.jsx(U3, {
                    src: "https://placehold.co/800x450",
                    alt: "placeholder",
                  }),
                }),
                a.jsx(H3, {
                  children: a.jsx(V3, { children: "Change Avatar" }),
                }),
              ],
            }),
            a.jsxs(W3, {
              children: [
                a.jsx($t, { children: "Gender" }),
                a.jsxs(Ul, {
                  children: [a.jsx("input", { type: "checkbox" }), " Male"],
                }),
                a.jsxs(Ul, {
                  children: [a.jsx("input", { type: "checkbox" }), " Femal"],
                }),
                a.jsxs(Ul, {
                  children: [a.jsx("input", { type: "checkbox" }), " Other"],
                }),
              ],
            }),
            a.jsxs(Q3, {
              children: [
                a.jsx($t, { children: "Birthday" }),
                a.jsx(K3, { children: a.jsx("input", { type: "date" }) }),
              ],
            }),
          ],
        }),
      ],
    }),
  J3 = h.div`
  display: flex;
  flex: row;
  gap: var(--s-10);
`,
  q3 = h.div``,
  Y3 = h.button`
  background-color: rgba(46, 80, 92, 0.6);
  padding: var(--s-4) var(--s-10);
  color: white;
  border-radius: 10px;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background-color: #bfbfbf;
  }
`,
  X3 = h.div``,
  Z3 = h.button`
  background-color: #9cd323;
  padding: var(--s-4) var(--s-10);
  color: white;
  border-radius: 10px;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background-color: rgba(103, 255, 79, 0.4);
  }
`,
  eC = () =>
    a.jsxs(J3, {
      children: [
        a.jsx(q3, { children: a.jsx(Y3, { children: "Cancel" }) }),
        a.jsx(X3, { children: a.jsx(Z3, { children: "Save" }) }),
      ],
    }),
  tC = () =>
    a.jsx(Lt, {
      children: a.jsxs(P3, {
        children: [
          a.jsx(_3, { children: "Edit Profile" }),
          a.jsx(R3, { children: a.jsx(G3, {}) }),
          a.jsx(A3, { children: a.jsx(eC, {}) }),
        ],
      }),
    }),
  nC = h.div`
  display: flex;
`,
  rC = h.div`
  flex: 10;
  display: flex;
  flex-direction: row;
  gap: var(--s-2);
`,
  oC = h.div`
  img {
    width: 36px;
    height: 36px;
  }
`,
  iC = h.div`
  display: flex;
  flex-direction: column;
  gap: var(--s-2);
`,
  sC = h.div``,
  lC = h.div`
  font-size: 20px;
`,
  aC = h.div``,
  uC = h.div``,
  cC = h.div`
  flex: 2;
`,
  dC =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAZcSURBVHgBfZZbbBx3Fca/uezMzt4v3vV67bXXTpykiRM7hFwQiG7hBRCirSgCKkDkCYmXECohgZCw33h033hLeUFFqkTzUKlCgBqpqHlrSRqUNna9SZzdeHe9O+u9zX36zVSt2rTpjtZ/7+zMOd/5zu/8ZwV8yatWq2UM6JdK+enawWRcFT2vakwMJJMJfTAYvlNdWHr1xNLs1d+vb9YfF0P4opNrF9aqguxfScS1WrU0B30whCsKiEci2OvuQ4tGMegfQJJFTKVTmJ8qvfST73xv42vP/vRziaRHT/zs+R9esuG/rEZjxzKpHI4dPoozJ1aQjiewevQYRhMLgu/BtG0cmpuHEtVQyOXWsoXcL13FM2+9e+f6Yyv44x9++6fte7vrh2ZKGBgTnD11CuXyLJ44vgzPc9Dt6ri9tYNxX4dlm3j9+nWoELE0X8H/P3gP+nCAXDqx/srf/rnxuQq2b/730nBo/Hlp6RC27u3iyXNfgeMJOPfVVbQaD9Ht6ShO5TAzW4Ttu5guTOHsygpSiQTef7ADX/DQ7bcwHIxq8bzW7zT0658kmPR2qqZpvRwRI9Frb76FXC4Nw3QRj0fRarWwfGQR+4aDnUYL/YmNu/VdvPKPf8G2LXyr9nVUFxZwe3s7rGqv8xALlbkLL/zu139/7eq/dTlI4Nr2uqyImXutBpaPVtHv9ZBIxWA4BqKizMZ24bp+QA9azfv4z2uvQ2QVL/7lGoq5DBzFxjfPn8f/bim4cOok0tlcxjOcKwz9lBSo39ltXrlVb8AWZLjwsXDoMLSYhDFsOKTHd11EJIl9sDHUe2jc2UYxEUW7w4ooKjudZ6PTqJQqiMcSpCsC2/Gq58+tvii/eWPrmXanE1ri85DkOPoDKo/JSMSyiEdVyJIIw3YgEImHH2yj2W4jlU9BIaayJGBubg6+r5IuF0qEIi0fqqRSlPYbudMePm0ZNoK35xErKlaiAlw/uJmqebEp+/wfcGwPluuhPRjhG+dOojIcoaX3YVkO0hnyJKpIRVSoqTgmjJfPdp+UfvTcc5sq3KgkUj1JiEZExJQIZJ8qaJlIkmWuMuVHaGq/1cTq2glamEA5n4ZJVZ1OD0cPL0JWFVozpJAe2s27SCcYh53PCGTcsqyPhoI32IIPRZEhsfygCpGfgx7AGKJQKsLktZZhQGNZyVQS8wsVzBZKGI5GnHgFEdqcmU4Fwapykig+aOowxia8EFxapEqIsBJVVaEpapjE8SVotkF6gmQiRPbm4EDgrLjIz5Zwt7VHi2SoigabltmOBS2iQD5z/HCdrFcHrIJSaQUVM0lUjYR7De8J/fd4WOR+TJWqpmE0HGLiA8l0EpGYgv7oAObERCaV5nUee+ih0ezociIRr59ZOVJt7neZ2UZUi9K7OJIJzgFtkKjWcVzsc3sQVA2guruNOopUPeF8VKvVUOmgPwwBabb32GAj3B36o8E7su961ypz5Vo+m4VhmZTqI5/Lhkh67Icsy2gR425/gIPRmJudgS4bLUdlTrKNcmkGAslRWOaA308sA45rhuI817kqio6yKfgCYrEY8pkMg+eohOyIEmQqC9ZSsci9p4Be4z5Gnomp8gya9+6wBzpuvHsTHAIGDuaEvaMgkVUHCgVVfFXOLi7qja2bb9DOWlBW4L/AGQgqEAUxLFvgh3KeFdL/JGdEpOdjXUO93SMUpA0yOyQwic17JGTTacwVZ176xcUX6uFeZNrORXr9NkNlKIY0eGFQn6sYHEymkqYsrevs3UecCPf0A5RnKyFpreaDcKLjdKHE4Euz83qv8zDcssXgz+ITp+uu4224nFKPPQhWl/uPzx74pCFYJ5MJ5qtLyBbKMFwRudlFVJggygQl2qcR19XqIo4sHmEv3Y2nnr1Y/yRBmOT46U3bsTds18GjiQLkAgB4BrnCNDIzCygUitzO45wXhbuxw8DLtFfG/fruxoVvf3/z47jip59oyyfPrnuee5n06FxDioK34zjkfgyHSQLrzADnmAaTpIikJ8D4YDDW263W5e/++Ofrn475mQRhkpWzm4IlnPZc76+BesdmIj4LgiELsJSCpgcDSbo0DpzIhHq/94YrjE7/4PlfbT4a7wt/VXz82nn7rSrUyNPU8czW7Rtr1kTPBA/B/f6wzsrqBOOaY5ibFy+v64+L8SGi5Ph+rTH6ZwAAAABJRU5ErkJggg==";
function fC(e) {
  return ke({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M388.8 896.4v-27.198c.6-2.2 1.6-4.2 2-6.4 8.8-57.2 56.4-102.4 112.199-106.2 62.4-4.4 115.2 31.199 132.4 89.199 2.2 7.6 3.8 15.6 5.8 23.4v27.2c-.6 1.8-1.6 3.399-1.8 5.399-8.6 52.8-46.6 93-98.6 104.4-4 .8-8 2-12 3h-27.2c-1.8-.6-3.6-1.6-5.4-1.8-52-8.4-91.599-45.4-103.6-96.8-1.2-5-2.6-9.6-3.8-14.2zm252.4-768.797l-.001 27.202c-.6 2.2-1.6 4.2-1.8 6.4-9 57.6-56.8 102.6-113.2 106.2-62.2 4-114.8-32-131.8-90.2-2.2-7.401-3.8-15-5.6-22.401v-27.2c.6-1.8 1.6-3.4 2-5.2 9.6-52 39.8-86 90.2-102.2 6.6-2.2 13.6-3.4 20.4-5.2h27.2c1.8.6 3.6 1.6 5.4 1.8 52.2 8.6 91.6 45.4 103.6 96.8 1.201 4.8 2.401 9.4 3.601 13.999zm-.001 370.801v27.2c-.6 2.2-1.6 4.2-2 6.4-9 57.4-58.6 103.6-114.6 106-63 2.8-116.4-35.2-131.4-93.8-1.6-6.2-3-12.4-4.4-18.6v-27.2c.6-2.2 1.6-4.2 2-6.4 8.8-57.4 58.6-103.601 114.6-106.2 63-3 116.4 35.2 131.4 93.8 1.6 6.4 3 12.6 4.4 18.8z",
        },
        child: [],
      },
    ],
  })(e);
}
const pC = () =>
    a.jsxs(nC, {
      children: [
        a.jsxs(rC, {
          children: [
            a.jsx(oC, { children: a.jsx("img", { src: dC, alt: "" }) }),
            a.jsxs(iC, {
              children: [
                a.jsxs(sC, {
                  children: [
                    a.jsx(lC, { children: "Bui Thi Huong" }),
                    a.jsx(aC, { children: "14/03/2024" }),
                  ],
                }),
                a.jsx(uC, { children: "This is private comment" }),
              ],
            }),
          ],
        }),
        a.jsx(cC, { children: a.jsx(fC, {}) }),
      ],
    }),
  hC = () => a.jsx("div", { children: a.jsx(pC, {}) }),
  mC = [
    { path: "/home", component: a.jsx(Pj, {}) },
    { path: "/event", component: a.jsx(c3, {}) },
    { path: "/addcontributions", component: a.jsx(k3, {}) },
    { path: "/editprofile", component: a.jsx(tC, {}) },
    { path: "/detailcontributes", component: a.jsx(hC, {}) },
  ],
  gC = "/assets/Other03-C9_8hDs7.png",
  vC = h.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  background-color: white;
  height: auto;
  margin-top: 40px;
`,
  yC = h.div`
  flex: 3;
  img {
    display: flex;
    margin: 0 auto;
    width: 700px;
    height: 600px;
  }
`,
  xC = h.div`
  flex: 2;
`,
  wC = h.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`,
  Vf = h.button`
  margin-top: 30px;
  width: 160px;
  font-size: 18px;
  height: 38px;
  border-radius: 20px;
  border: none;
  font-family: JetBrains Mono;
  cursor: pointer;
  &:hover {
    background-color: rgba(238, 206, 62, 0.5);
  }
  background-color: ${(e) => (e.$active ? "#f2ba1d" : "#e0dcdc")};
  color: ${(e) => (e.$active ? "#1c1c1c" : "#ffffff")};
`,
  SC = h.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;
h.div`
  margin-top: 80px;
  display: flex;
  justify-content: center;
  text-align: center;
`;
h.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
const jC = h.div`
  flex: 2;
`,
  CC = h.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`,
  EC = h.div`
  font-size: 60px;
  font-weight: bold;
`,
  kC = h.div`
  font-size: 20px;
`,
  PC = h.div`
  margin-top: var(--s-5);
  font-size: 30px;
  font-family: Inter;
  font-weight: bold;
  color: #323a46;
`,
  _C = h.input`
  width: 70%;
  height: 28px;
  padding: var(--s-5);
  font-size: 18px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  &:hover {
    background-color: #dedede;
  }
`,
  RC = h.div`
  margin-top: 20px;
  font-size: 30px;
  font-family: Inter;
  font-weight: bold;
  color: #323a46;
`,
  AC = h.div`
  input {
    padding: var(--s-5);
    height: 28px;
    width: 70%;
    font-size: 18px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    &:hover {
      background-color: #dedede;
    }
  }
`,
  TC = h.div`
  a {
    text-decoration: none;
    color: #1c1c1c;
    &:hover {
      text-decoration: underline;
    }
  }
`,
  OC = h.div`
  margin-top: 10px;
  font-size: 20px;
  input {
    width: 20px;
    height: 18px;
    cursor: pointer;
  }
`,
  NC = h.div`
  margin-top: 80px;
  display: flex;
  justify-content: center;
  text-align: center;
`,
  zC = h.button`
  width: 500px;
  height: 40px;
  border: none;
  font-size: 18px;
  border-radius: 5px;
  background-color: #f2ba1d;
  cursor: pointer;
  font-family: JetBrains Mono;
  color: white;
  &:hover {
    background-color: rgba(238, 206, 62, 0.5);
  }
`,
  LC = h.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`,
  bC = h.div``,
  DC = h.button`
  height: 40px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  background-color: white;
  font-family: JetBrains Mono;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  border: 1px solid black;
  margin-top: 10px;
  &:hover {
    background-color: #dedede;
  }
  img {
    width: 18px;
    height: 18px;
    margin-right: 20px;
  }
`,
  IC =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFMSURBVHgBhVExS8NAFH7vbMgi2uBQOggR/AGxVHARrp1EB1FcdDH9Bf4BwWy6aX9Bo24dtJsu2mZ1Co4uiYhmKTRB6pDEnJfYlBgq/eDu3t337rv3vkPI4Y1WKRCgcVxAYoHgG+V70055TANnQ5FZILQY/CZnQQDV8sPTZSKSJkeB0OWhDIy5gNiJADzCYDu5ERHjj0L/eFH/2Kqw9/qq5dA1OctZlBaz+6Skr7sZK/JEeXizrJbaz8nTVBsofCnmqjMLg9v4EGUy78Pc/osB7bHSOeb64WXWiLQDLkxE9MonezQyBnC4TOydfq7A+nDzKCW62oL6qElLsWom3056qF7vUQAWuwTcVp2E382Ak9xCZdY5axG/JHNK5wKN8T/wSxpPP5lUnNg/sAWvXutpko1ZonK1qxLEQxg1yxi4iNgMw/DCbHT+6XUKfgCXc22Sh+9hSAAAAABJRU5ErkJggg==",
  FC = () => {
    const e = bs(),
      t = w0(),
      { user: n } = sc((c) => c.userState),
      [r, o] = _.useState(""),
      [i, s] = _.useState(""),
      [l] = py(),
      u = (c) => {
        c.preventDefault(),
          t(aw({ email: r, password: i }))
            .unwrap()
            .then(() => t(yc()));
      };
    return (
      _.useEffect(() => {
        n && e(l.get("redirect") || "/");
      }, [n, e, l]),
      a.jsx(jC, {
        children: a.jsxs(CC, {
          onSubmit: u,
          children: [
            a.jsx(EC, { children: "Hey, Welcome Back!" }),
            a.jsx(kC, { children: "We are very happy to see you back!" }),
            a.jsx(PC, { children: "Email" }),
            a.jsx(_C, {
              placeholder: "commitcomunity@gmail.com",
              value: r,
              onChange: (c) => o(c.target.value),
              id: "email",
            }),
            a.jsx(RC, { children: "Password" }),
            a.jsx(AC, {
              children: a.jsx("input", {
                type: "password",
                value: i,
                onChange: (c) => s(c.target.value),
                id: "password",
              }),
            }),
            a.jsx(TC, {
              children: a.jsx("a", {
                href: "/RegisterForm",
                children: "Forgot Password?",
              }),
            }),
            a.jsxs(OC, {
              children: [a.jsx("input", { type: "checkbox" }), " Remember Me."],
            }),
            a.jsx(NC, {
              children: a.jsx(zC, { type: "submit", children: "LOGIN" }),
            }),
            a.jsxs(LC, {
              children: [
                a.jsx(bC, {
                  children:
                    "------------------------OR------------------------",
                }),
                a.jsxs(DC, {
                  onClick: () => (window.location.href = Do + "/auth/google"),
                  children: [
                    a.jsx("img", { src: IC, alt: "" }),
                    "Login With Google",
                  ],
                }),
              ],
            }),
          ],
        }),
      })
    );
  },
  $C = h.div`
  flex: 2;
`,
  MC = h.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`,
  BC = h.div`
  font-size: 60px;
  font-weight: bold;
`,
  UC = h.div`
  font-size: 20px;
`,
  HC = h.div`
  margin-top: 20px;
  font-size: 30px;
  font-family: Inter;
  font-weight: bold;
  color: #323a46;
`,
  VC = h.div`
  margin-top: 10px;
  color: #b0b0b0;
`,
  WC = h.input`
  width: 70%;
  height: 28px;
  padding: var(--s-5);
  font-size: 18px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  &:hover {
    background-color: #dedede;
  }
  placeholder {
    font-family: JetBrains Mono;
  }
`,
  QC = h.div`
  margin-top: 20px;
  font-size: 20px;
  color: #7e8b9e;
  input {
    width: 20px;
    height: 18px;
    cursor: pointer;
  }
  b {
    color: #236192;
  }
`,
  KC = h.div`
  margin-top: 80px;
  display: flex;
  justify-content: center;
  text-align: center;
`,
  GC = h.button`
  width: 500px;
  height: 40px;
  margin-right: 20px;
  border: none;
  border-radius: 5px;
  background-color: #f2ba1d;
  cursor: pointer;
  font-size: 18px;
  font-family: JetBrains Mono;
  color: white;
  &:hover {
    background-color: rgba(238, 206, 62, 0.5);
  }
`,
  JC = () =>
    a.jsxs($C, {
      children: [
        a.jsxs(MC, {
          children: [
            a.jsx(BC, { children: "Welcome, Register." }),
            a.jsx(UC, { children: "Nice to meet you" }),
            a.jsx(HC, { children: "Email" }),
            a.jsx(VC, { children: "Fill your mail hear" }),
            a.jsx(WC, { placeholder: "commitcomunity@gmail.com" }),
            a.jsxs(QC, {
              children: [
                a.jsx("input", { type: "checkbox" }),
                " ",
                a.jsx("b", { children: "Term of Use" }),
                " and ",
                a.jsx("b", { children: "Condition" }),
                " &",
                " ",
                a.jsx("b", { children: "Privacy Policy." }),
              ],
            }),
          ],
        }),
        a.jsx(KC, { children: a.jsx(GC, { children: "CONTINEU" }) }),
      ],
    }),
  qC = () => {
    const [e, t] = _.useState(!0);
    return a.jsxs(vC, {
      children: [
        a.jsx(yC, { children: a.jsx("img", { src: gC, alt: "" }) }),
        a.jsxs(xC, {
          children: [
            a.jsxs(wC, {
              children: [
                a.jsx(Vf, {
                  $active: e,
                  onClick: () => t(!0),
                  children: "Login",
                }),
                a.jsx(Vf, {
                  $active: !e,
                  onClick: () => t(!1),
                  children: "Register",
                }),
              ],
            }),
            a.jsx(SC, { children: e ? a.jsx(FC, {}) : a.jsx(JC, {}) }),
          ],
        }),
      ],
    });
  },
  YC = h.div`
  display: flex;
  max-height: 100vh;
  gap: 20px;
`,
  XC = h.div`
  flex: 4;
  img {
    height: 100%;
    width: 100%;
  }
`,
  ZC = h.div`
  flex: 8;
`,
  eE = "/assets/Setup-U77fSGUC.png",
  tE = h.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: var(--s-20) var(--s-30) var(--s-5) var(--s-1);
`,
  nE = h.div`
  font-size: 50px;
`,
  rE = h.div`
  a {
    text-decoration: none;
    color: #1c1c1c;
    font-size: 20px;
    &:hover {
      text-decoration: underline;
      color: var(--blue);
    }
  }
`,
  oE = h.div`
  display: flex;
  flex-direction: row;
  gap: var(--s-6);
`,
  iE = h.div`
  flex: 6;
  display: flex;
  flex-direction: column;
  row-gap: var(--s-4);
`,
  sE = h.div`
  flex: 6;
  display: flex;
  flex-direction: column;
  row-gap: var(--s-4);
`,
  di = h.input`
  padding: var(--s-5) var(--s-5);
  font-size: 18px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  box-shadow: var(--shadow-xl);
  width: 100%;
  &:hover {
    background-color: #dedede;
  }
`,
  Wf = h.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  font-size: 20px;
  input {
    font-size: 20px;
  }
`,
  Qf = h.div`
  input {
    padding: var(--s-5) var(--s-5);
    font-size: 18px;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    box-shadow: var(--shadow-xl);
    &:hover {
      background-color: #dedede;
    }
  }
`,
  lE = h.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: var(--s-8);
  font-size: 20px;
  color: var(--blue);
  input {
    cursor: pointer;
  }
`,
  aE = h.div`
  display: flex;
  justify-content: flex-end;
`,
  uE = h.button`
  padding: var(--s-4) var(--s-10);
  background-color: #f2ba1d;
  color: black;
  font-size: 20px;
  cursor: pointer;
  border-radius: var(--s-4);
  &:hover {
    background-color: rgba(226, 190, 103, 0.5);
  }
`,
  cE = () =>
    a.jsxs(tE, {
      children: [
        a.jsx(nE, { children: "Setup Your Account" }),
        a.jsx(rE, {
          children: a.jsx("a", {
            href: "",
            children: "Already have an account?",
          }),
        }),
        a.jsxs(oE, {
          children: [
            a.jsxs(iE, {
              children: [
                a.jsx(di, { placeholder: "First Name *" }),
                a.jsx(di, { placeholder: "Faculty *" }),
                a.jsxs(Wf, {
                  children: [
                    a.jsx("input", { type: "checkbox" }),
                    "Male",
                    a.jsx("input", { type: "checkbox" }),
                    "Female",
                    a.jsx("input", { type: "checkbox" }),
                    "Other",
                  ],
                }),
                a.jsx(Qf, {
                  children: a.jsx("input", {
                    type: "password",
                    placeholder: "Password *",
                  }),
                }),
              ],
            }),
            a.jsxs(sE, {
              children: [
                a.jsx(di, { placeholder: "Last Name *" }),
                a.jsx(di, { placeholder: "Phone Number *" }),
                a.jsx(Wf, { children: a.jsx("input", { type: "date" }) }),
                a.jsx(Qf, {
                  children: a.jsx("input", {
                    type: "password",
                    placeholder: "Confirm Password *",
                  }),
                }),
              ],
            }),
          ],
        }),
        a.jsxs(lE, {
          children: [
            a.jsx("input", { type: "Checkbox" }),
            "I agree with term and privacy",
          ],
        }),
        a.jsx(aE, { children: a.jsx(uE, { children: "Register" }) }),
      ],
    }),
  dE = () =>
    a.jsxs(YC, {
      children: [
        a.jsx(XC, { children: a.jsx("img", { src: eE, alt: "" }) }),
        a.jsx(ZC, { children: a.jsx(cE, {}) }),
      ],
    }),
  fE = [
    { path: "login", component: a.jsx(qC, {}) },
    { path: "setup-account/:token", component: a.jsx(dE, {}) },
  ],
  pE = h.h2`
  margin: 20px;
`,
  fi = h.button`
  width: 450px;
  height: 48px;
  border-radius: 12px;
  cursor: pointer;
  color: white;
  background-color: ${(e) => e.color || "gray"};
`,
  Hl = h.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 20px;
`,
  hE = () =>
    a.jsxs(Lt, {
      children: [
        a.jsx(pE, { children: "Dashboard" }),
        a.jsx(Hl, {
          children: a.jsx(wt, {
            to: "/manage/user",
            children: a.jsxs(fi, {
              color: "#71984A",
              children: [a.jsx(T1, {}), " Users"],
            }),
          }),
        }),
        a.jsxs(Hl, {
          children: [
            a.jsx(wt, {
              to: "/manage/faculty",
              children: a.jsxs(fi, {
                color: "#C2C6E8",
                children: [a.jsx(N1, {}), " Faculty"],
              }),
            }),
            a.jsx(wt, {
              to: "/manage/contribution",
              children: a.jsxs(fi, {
                color: "#236192",
                children: [a.jsx(A1, {}), " Contributions"],
              }),
            }),
          ],
        }),
        a.jsx(Hl, {
          children: a.jsx(wt, {
            to: "/manage/event",
            children: a.jsxs(fi, {
              color: "#F2BA1D",
              children: [a.jsx(O1, {}), " Events"],
            }),
          }),
        }),
      ],
    }),
  Pc = h.h2`
  margin: 20px 0;
`,
  _c = h.div`
  display: flex;
  input {
    width: 360px;
    height: 40px;
    border: 1px solid gray;
    border-radius: 4px;
    margin-right: 40px;
  }
  button {
    width: 120px;
    height: 40px;
    border-radius: 4px;
    cursor: pointer;
    background: transparent;
    border: 1px solid gray;
  }
`,
  Rc = h.div`
  margin-top: 20px;
`,
  Ac = h.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`,
  Tc = h.div`
  width: 500px;
  height: 300px;
  background-color: white;
  border-radius: 4px;
  padding: 20px;
  h2 {
    margin-bottom: 20px;
  }
  input {
    width: 90%;
    height: 40px;
    border: 1px solid gray;
    border-radius: 4px;
    margin: 12px 0;
  }
`,
  Oc = h.div`
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
`,
  Nc = h.table`
  width: 90%;
  text-align: center;
  margin-top: 20px;
`,
  we = h.th`
  padding: 8px;
  background-color: #eff4fa;
`,
  ne = h.td`
  padding: 8px;
`,
  z1 = h.tr`
  background-color: white;
`,
  L1 = h.tr`
  background-color: #ebf6ff;
`,
  Ot = h.button`
  width: 120px;
  height: 40px;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${(e) => e.color || "gray"};
  color: white;
`,
  mE = h.div`
  position: relative;
  display: inline-block;
`,
  gE = h.button`
  background-color: #4caf50;
  color: white;
  padding: 12px;
  font-size: 12px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  margin-top: 12px;
`,
  vE = h.div`
  display: ${({ isOpen: e }) => (e ? "block" : "none")};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  width: 100%;
  border-radius: 4px;
`,
  yE = h.div`
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  color: black;
  &:hover {
    background-color: #f1f1f1;
    cursor: pointer;
  }
  font-size: 12px;
`,
  zc = ({ options: e }) => {
    const [t, n] = _.useState(!1),
      [r, o] = _.useState(""),
      i = () => {
        n(!t);
      },
      s = (l) => {
        o(l), n(!1);
      };
    return a.jsxs(mE, {
      children: [
        a.jsx(gE, { onClick: i, children: r || "Select an option" }),
        a.jsx(vE, {
          isOpen: t,
          children: e.map((l, u) =>
            a.jsx(yE, { onClick: () => s(l), children: l }, u),
          ),
        }),
      ],
    });
  },
  xE = ({ children: e, onClose: t }) =>
    a.jsx(Ac, {
      onClick: t,
      children: a.jsxs(Tc, {
        onClick: (n) => n.stopPropagation(),
        children: [
          e,
          a.jsxs(Oc, {
            children: [
              a.jsx(Ot, { onClick: t, children: "Close" }),
              a.jsx(Ot, { color: "#71984A", children: "Add" }),
            ],
          }),
        ],
      }),
    }),
  wE = () => {
    const [e, t] = _.useState(!1);
    return a.jsxs(Lt, {
      children: [
        a.jsx(Pc, { children: "Users" }),
        a.jsxs(_c, {
          children: [
            a.jsx("input", { type: "text", placeholder: "Search" }),
            a.jsx("button", { children: "Sort" }),
          ],
        }),
        a.jsxs(Rc, {
          children: [
            a.jsx("h3", { children: "List All User" }),
            a.jsx(Ot, {
              color: "#71984A",
              onClick: () => t(!0),
              children: "New User",
            }),
            e &&
              a.jsxs(xE, {
                onClose: () => t(!1),
                children: [
                  a.jsx("h2", { children: " Add new User" }),
                  a.jsx("p", { children: "Name Faculty" }),
                  a.jsx("input", {
                    type: "text",
                    placeholder: "Information technology",
                    required: !0,
                  }),
                  a.jsx("p", { children: "Choose MC" }),
                  a.jsx(zc, { options: [] }),
                ],
              }),
            a.jsxs(Nc, {
              children: [
                a.jsx("thead", {
                  children: a.jsxs("tr", {
                    children: [
                      a.jsx(we, { children: "Faculty Name" }),
                      a.jsx(we, { children: "MC Name" }),
                      a.jsx(we, { children: "MC Email" }),
                      a.jsx(we, {}),
                      a.jsx(we, {}),
                    ],
                  }),
                }),
                a.jsx("tbody", {}),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Jt = h.button`
  width: 80px;
  height: 32px;
  background: transparent;
  color: ${(e) => e.color || "gray"};
  border: 1.5px solid ${(e) => e.color || "gray"};
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: ${(e) => e.color || "gray"};
    color: white;
  }
`,
  SE = ({ children: e, onClose: t }) =>
    a.jsx(Ac, {
      onClick: t,
      children: a.jsxs(Tc, {
        onClick: (n) => n.stopPropagation(),
        children: [
          e,
          a.jsxs(Oc, {
            children: [
              a.jsx(Ot, { onClick: t, children: "Close" }),
              a.jsx(Ot, { color: "#71984A", children: "Add" }),
            ],
          }),
        ],
      }),
    }),
  jE = () => {
    const [e, t] = _.useState(!1),
      [n, r] = _.useState([]);
    _.useEffect(() => {
      (async () => {
        try {
          const l = await W.get("https://api.alhkq.live/faculty/all");
          r(l.data);
        } catch (l) {
          console.error("Error fetching data:", l);
        }
      })();
    }, []);
    const [o, i] = _.useState([]);
    return (
      _.useEffect(() => {
        (async () => {
          try {
            const l = await W.get("https://api.alhkq.live/user/all?role=mc");
            i(l.data);
          } catch (l) {
            console.error("Error fetching users:", l);
          }
        })();
      }, []),
      a.jsxs(Lt, {
        children: [
          a.jsx(Pc, { children: "Faculty" }),
          a.jsxs(_c, {
            children: [
              a.jsx("input", { type: "text", placeholder: "Search" }),
              a.jsx("button", { children: "Sort" }),
            ],
          }),
          a.jsxs(Rc, {
            children: [
              a.jsx("h3", { children: "List All Faculty" }),
              a.jsx(Ot, {
                color: "#71984A",
                onClick: () => t(!0),
                children: "New falcuty",
              }),
              e &&
                a.jsxs(SE, {
                  onClose: () => t(!1),
                  children: [
                    a.jsx("h2", { children: " Add new Faculty" }),
                    a.jsx("p", { children: "Name Faculty" }),
                    a.jsx("input", {
                      type: "text",
                      placeholder: "Information technology",
                      required: !0,
                    }),
                    a.jsx("p", { children: "Choose MC" }),
                    a.jsx(zc, { options: o.map((s) => s.name) }),
                  ],
                }),
              a.jsxs(Nc, {
                children: [
                  a.jsx("thead", {
                    children: a.jsxs("tr", {
                      children: [
                        a.jsx(we, { children: "Faculty Name" }),
                        a.jsx(we, { children: "MC Name" }),
                        a.jsx(we, { children: "MC Email" }),
                        a.jsx(we, {}),
                        a.jsx(we, {}),
                      ],
                    }),
                  }),
                  a.jsx("tbody", {
                    children: n.map((s, l) =>
                      l % 2 === 0
                        ? a.jsxs(
                            z1,
                            {
                              children: [
                                a.jsx(ne, { children: s.name }),
                                a.jsx(ne, {
                                  children: s.mc ? s.mc.name : "N/A",
                                }),
                                a.jsx(ne, {
                                  children: s.mc ? s.mc.email : "N/A",
                                }),
                                a.jsx(ne, {
                                  children: a.jsxs(Jt, {
                                    color: "#F2BA1D",
                                    children: [a.jsx(gs, {}), " Edit"],
                                  }),
                                }),
                                a.jsx(ne, {
                                  children: a.jsxs(Jt, {
                                    color: "#FF0000",
                                    children: [a.jsx(vs, {}), " Delete"],
                                  }),
                                }),
                              ],
                            },
                            l,
                          )
                        : a.jsxs(
                            L1,
                            {
                              children: [
                                a.jsx(ne, { children: s.name }),
                                a.jsx(ne, {
                                  children: s.mc ? s.mc.name : "N/A",
                                }),
                                a.jsx(ne, {
                                  children: s.mc ? s.mc.email : "N/A",
                                }),
                                a.jsx(ne, {
                                  children: a.jsxs(Jt, {
                                    color: "#F2BA1D",
                                    children: [a.jsx(gs, {}), " Edit"],
                                  }),
                                }),
                                a.jsx(ne, {
                                  children: a.jsxs(Jt, {
                                    color: "#FF0000",
                                    children: [a.jsx(vs, {}), " Delete"],
                                  }),
                                }),
                              ],
                            },
                            l,
                          ),
                    ),
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    );
  },
  CE = () => a.jsx(Lt, { children: "Event" }),
  EE = ({ children: e, onClose: t }) =>
    a.jsx(Ac, {
      onClick: t,
      children: a.jsxs(Tc, {
        onClick: (n) => n.stopPropagation(),
        children: [
          e,
          a.jsxs(Oc, {
            children: [
              a.jsx(Ot, { onClick: t, children: "Close" }),
              a.jsx(Ot, { color: "#71984A", children: "Add" }),
            ],
          }),
        ],
      }),
    }),
  kE = () => {
    const [e, t] = _.useState(!1),
      [n, r] = _.useState([]);
    _.useEffect(() => {
      (async () => {
        try {
          const l = await W.get("https://api.alhkq.live/user/all?role=student");
          r(l.data);
        } catch (l) {
          console.error("Error fetching data:", l);
        }
      })();
    }, []);
    const [o, i] = _.useState([]);
    return (
      _.useEffect(() => {
        (async () => {
          try {
            const l = await W.get("https://api.alhkq.live/event/all");
            i(l.data);
          } catch (l) {
            console.error("Error fetching users:", l);
          }
        })();
      }, []),
      a.jsxs(Lt, {
        children: [
          " ",
          a.jsx(Pc, { children: "Contributions" }),
          a.jsxs(_c, {
            children: [
              a.jsx("input", { type: "text", placeholder: "Search" }),
              a.jsx("button", { children: "Sort" }),
            ],
          }),
          a.jsxs(Rc, {
            children: [
              a.jsx("h3", { children: "List All Contributions" }),
              a.jsx(Ot, {
                color: "#71984A",
                onClick: () => t(!0),
                children: "Add new",
              }),
              e &&
                a.jsxs(EE, {
                  onClose: () => t(!1),
                  children: [
                    a.jsx("h2", { children: " Add new Contribution" }),
                    a.jsx("p", { children: "Name Contribution" }),
                    a.jsx("input", {
                      type: "text",
                      placeholder: "Information technology",
                      required: !0,
                    }),
                    a.jsx("p", { children: "Choose MC" }),
                    a.jsx(zc, { options: o.map((s) => s.name) }),
                  ],
                }),
              a.jsxs(Nc, {
                children: [
                  a.jsx("thead", {
                    children: a.jsxs("tr", {
                      children: [
                        a.jsx(we, { children: "Title" }),
                        a.jsx(we, { children: "Author" }),
                        a.jsx(we, { children: "Event" }),
                        a.jsx(we, {}),
                        a.jsx(we, {}),
                      ],
                    }),
                  }),
                  a.jsx("tbody", {
                    children: n.map((s, l) =>
                      l % 2 === 0
                        ? a.jsxs(
                            z1,
                            {
                              children: [
                                a.jsx(ne, { children: s.name }),
                                a.jsx(ne, {
                                  children: s.author ? s.author.name : "N/A",
                                }),
                                a.jsx(ne, {
                                  children: s.event ? s.event.name : "N/A",
                                }),
                                a.jsx(ne, {
                                  children: a.jsxs(Jt, {
                                    color: "#F2BA1D",
                                    children: [a.jsx(gs, {}), " Edit"],
                                  }),
                                }),
                                a.jsx(ne, {
                                  children: a.jsxs(Jt, {
                                    color: "#FF0000",
                                    children: [a.jsx(vs, {}), " Delete"],
                                  }),
                                }),
                              ],
                            },
                            l,
                          )
                        : a.jsxs(
                            L1,
                            {
                              children: [
                                a.jsx(ne, { children: s.name }),
                                a.jsx(ne, {
                                  children: s.author ? s.author.name : "N/A",
                                }),
                                a.jsx(ne, {
                                  children: s.event ? s.event.name : "N/A",
                                }),
                                a.jsx(ne, {
                                  children: a.jsxs(Jt, {
                                    color: "#F2BA1D",
                                    children: [a.jsx(gs, {}), " Edit"],
                                  }),
                                }),
                                a.jsx(ne, {
                                  children: a.jsxs(Jt, {
                                    color: "#FF0000",
                                    children: [a.jsx(vs, {}), " Delete"],
                                  }),
                                }),
                              ],
                            },
                            l,
                          ),
                    ),
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    );
  },
  PE = [
    { path: "manage/", component: a.jsx(hE, {}) },
    { path: "manage/user", component: a.jsx(wE, {}) },
    { path: "manage/faculty", component: a.jsx(jE, {}) },
    { path: "manage/event", component: a.jsx(CE, {}) },
    { path: "manage/contribution", component: a.jsx(kE, {}) },
  ],
  _E = "/assets/Landing-pnssmcxg.png",
  RE = h.div`
  background-image: url(${_E});
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--s-10);
`,
  AE = h.div`
  font-size: 150px;
  color: #df6a2e;
  font-weight: bold;
`,
  TE = h.div`
  display: flex;
  flex-direction: column;
  gap: var(--s-5);
`,
  OE = h.div``,
  NE = h.div``,
  zE = h.button``,
  LE = h.button``,
  bE = () =>
    a.jsxs(RE, {
      children: [
        a.jsx(AE, { children: "Team name here" }),
        a.jsxs(TE, {
          children: [
            a.jsx(OE, { children: a.jsx(zE, { children: "Register" }) }),
            a.jsx(NE, { children: a.jsx(LE, { children: "Login" }) }),
          ],
        }),
      ],
    });
function DE() {
  return a.jsxs(ty, {
    children: [
      a.jsx(Mt, { path: "/", element: a.jsx(bE, {}) }),
      a.jsx(Mt, {
        element: a.jsx(vS, {}),
        children: mC.map(({ path: e, component: t }) =>
          a.jsx(Mt, { path: e, element: t }, e),
        ),
      }),
      a.jsx(Mt, {
        element: a.jsx(_S, {}),
        children: fE.map(({ path: e, component: t }) =>
          a.jsx(Mt, { path: e, element: t }, e),
        ),
      }),
      a.jsx(Mt, {
        element: a.jsx(PS, {}),
        children: PE.map(({ path: e, component: t }) =>
          a.jsx(Mt, { path: e, element: t }, e),
        ),
      }),
    ],
  });
}
function IE() {
  return a.jsx(mw, { children: a.jsx(DE, {}) });
}
Wl.createRoot(document.getElementById("root")).render(
  a.jsx(Se.StrictMode, { children: a.jsx(IE, {}) }),
);
