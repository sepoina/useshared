var b = (t, e, r) => {
  if (!e.has(t))
    throw TypeError("Cannot " + r);
};
var C = (t, e, r) => (b(t, e, "read from private field"), r ? r.call(t) : e.get(t)), x = (t, e, r) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, r);
}, v = (t, e, r, i) => (b(t, e, "write to private field"), i ? i.call(t, r) : e.set(t, r), r);
import { useContext as j, useState as U, useId as $, useEffect as N, useRef as m, useMemo as P, createContext as E } from "react";
import { createContext as A } from "react";
import { jsx as O } from "react/jsx-runtime";
const G = (...t) => {
  var o;
  const [e, r, i] = (t == null ? void 0 : t[0]) instanceof Object ? [...t] : [S, ...t], { shared: u, subscribe: l, setter: _ } = j(e), [, s] = U(null), n = $();
  N(() => {
    const a = l(n, r, () => {
      s((f) => f + 1);
    });
    return () => {
      a(n, r);
    };
  });
  const d = ((o = u[r]) == null ? void 0 : o.__isStoreClass) ? u[r].state : u[r];
  return (t == null ? void 0 : t[(t == null ? void 0 : t.length) - 1]) === "useSharedClass" ? u[r] : [
    d === void 0 ? i : d,
    (a) => _(r, a),
    // espone la funzione di setter con il necessario valore di key
    u[r]
    // torna un puntatore alla classe che contiene le azioni 
  ];
}, M = (...t) => G(...t, "useSharedClass"), T = (t) => {
  const e = m(0), r = m({}), i = (s, n) => {
    if (!(s in (e.current || {})))
      return;
    const c = e.current[s];
    if (c.__isStoreClass) {
      if (c.state === n)
        return !0;
      c.state = n;
      return;
    }
    c !== n && (e.current[s] = n, l(s, n));
  }, u = (s) => {
    if (s in (e.current || {}))
      return e.current[s].__isStoreClass ? e.current[s].state : e.current[s];
  }, l = (s, n) => {
    console.log(`${s} updated to ${n}`), r.current[s] && Object.values(r.current[s]).forEach((c) => {
      c(n);
    });
  }, _ = (s, n, c) => (r.current[n] || (r.current[n] = {}), console.log(`subscribing to ${n}`), r.current[n][s] = c, (d, o) => {
    var a, f;
    console.log(`unsubscribing to ${o}`), (f = (a = r.current) == null ? void 0 : a[o]) != null && f[d] && delete r.current[o][d];
  });
  return e.current = P(() => {
    var s, n;
    if (!t.share || !(t.share instanceof Object))
      return {};
    for (const c in t.share)
      (s = t.share) != null && s[c] && (n = t.share) != null && n[c] && t.share[c] instanceof Object && t.share[c].__isStoreClass !== void 0 && (t.share[c].__key = c, t.share[c].__handleNotifyUpdate = l, t.share[c].__setter = i, t.share[c].__getter = u);
    return t.share;
  }, [t]), t.context ? /* @__PURE__ */ O(t.context.Provider, { value: { shared: e.current, setter: i, subscribe: _ }, children: t.children }) : /* @__PURE__ */ O(S.Provider, { value: { shared: e.current, setter: i, subscribe: _ }, children: t.children });
};
var h;
class V {
  constructor() {
    x(this, h, {});
    this.__isStoreClass = !0;
  }
  get state() {
    return C(this, h);
  }
  set state(e) {
    C(this, h) !== e && (v(this, h, e), this.__handleNotifyUpdate && this.__handleNotifyUpdate(this.__key, e), this._stateObserver && this._stateObserver());
  }
  /**
   * Setta una chiave della stessa collezione
   * @param {*} key 
   * @param {*} newSubState 
   * @returns 
   */
  setShared(e, r) {
    return this.__setter && this.__setter(e, r);
  }
  /**
   * Recupera una chiave della stessa collezione
   * @param {*} key 
   * @returns 
   */
  getShared(e) {
    return this.__getter && this.__getter(e);
  }
}
h = new WeakMap();
const S = E();
export {
  T as GlobalSharedContext,
  T as SharedContext,
  S as SharedGlobalContext,
  V as sharedClassTemplate,
  A as sharedCreateContext,
  G as useShared,
  M as useSharedClass
};
//# sourceMappingURL=index.js.map
