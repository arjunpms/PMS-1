(function(e) {
    function t(e) {
        return e;
    }
    function n(e, t) {
        for (var n = 0, r = t.length, i = new Array(r); n < r; ++n) i[n] = e[t[n]];
        return i;
    }
    function i(e) {
        function t(t, n, r, i) {
            while (r < i) {
                var s = r + i >> 1;
                e(t[s]) < n ? r = s + 1 : i = s;
            }
            return r;
        }
        function n(t, n, r, i) {
            while (r < i) {
                var s = r + i >> 1;
                n < e(t[s]) ? i = s : r = s + 1;
            }
            return r;
        }
        n.right = n;
        n.left = t;
        return n;
    }
    function o(e) {
        function t(e, t, n) {
            var i = n - t, s = (i >>> 1) + 1;
            while (--s > 0) r(e, s, i, t);
            return e;
        }
        function n(e, t, n) {
            var i = n - t, s;
            while (--i > 0) s = e[t], e[t] = e[t + i], e[t + i] = s, r(e, 1, i, t);
            return e;
        }
        function r(t, n, r, i) {
            var s = t[--i + n], o = e(s), u;
            while ((u = n << 1) <= r) {
                u < r && e(t[i + u]) > e(t[i + u + 1]) && u++;
                if (o <= e(t[i + u])) break;
                t[i + n] = t[i + u];
                n = u;
            }
            t[i + n] = s;
        }
        t.sort = n;
        return t;
    }
    function a(e) {
        function n(n, r, i, s) {
            var o = new Array(s = Math.min(i - r, s)), u, a, f, l;
            for (a = 0; a < s; ++a) o[a] = n[r++];
            t(o, 0, s);
            if (r < i) {
                u = e(o[0]);
                do if (f = e(l = n[r]) > u) {
                    o[0] = l;
                    u = e(t(o, 0, s)[0]);
                } while (++r < i);
            }
            return o;
        }
        var t = o(e);
        return n;
    }
    function l(e) {
        function t(t, n, r) {
            for (var i = n + 1; i < r; ++i) {
                for (var s = i, o = t[i], u = e(o); s > n && e(t[s - 1]) > u; --s) t[s] = t[s - 1];
                t[s] = o;
            }
            return t;
        }
        return t;
    }
    function h(e) {
        function n(e, n, i) {
            return (i - n < p ? t : r)(e, n, i);
        }
        function r(t, r, i) {
            var s = (i - r) / 6 | 0, o = r + s, u = i - 1 - s, a = r + i - 1 >> 1, f = a - s, l = a + s, c = t[o], h = e(c), p = t[f], d = e(p), v = t[a], m = e(v), g = t[l], y = e(g), b = t[u], w = e(b), E;
            h > d && (E = c, c = p, p = E, E = h, h = d, d = E);
            y > w && (E = g, g = b, b = E, E = y, y = w, w = E);
            h > m && (E = c, c = v, v = E, E = h, h = m, m = E);
            d > m && (E = p, p = v, v = E, E = d, d = m, m = E);
            h > y && (E = c, c = g, g = E, E = h, h = y, y = E);
            m > y && (E = v, v = g, g = E, E = m, m = y, y = E);
            d > w && (E = p, p = b, b = E, E = d, d = w, w = E);
            d > m && (E = p, p = v, v = E, E = d, d = m, m = E);
            y > w && (E = g, g = b, b = E, E = y, y = w, w = E);
            var S = p, x = d, T = g, N = y;
            t[o] = c;
            t[f] = t[r];
            t[a] = v;
            t[l] = t[i - 1];
            t[u] = b;
            var C = r + 1, k = i - 2, L = x <= N && x >= N;
            if (L) for (var A = C; A <= k; ++A) {
                var O = t[A], M = e(O);
                if (M < x) {
                    if (A !== C) {
                        t[A] = t[C];
                        t[C] = O;
                    }
                    ++C;
                } else if (M > x) for (;;) {
                    var _ = e(t[k]);
                    if (_ > x) {
                        k--;
                        continue;
                    }
                    if (_ < x) {
                        t[A] = t[C];
                        t[C++] = t[k];
                        t[k--] = O;
                        break;
                    }
                    t[A] = t[k];
                    t[k--] = O;
                    break;
                }
            } else for (var A = C; A <= k; A++) {
                var O = t[A], M = e(O);
                if (M < x) {
                    if (A !== C) {
                        t[A] = t[C];
                        t[C] = O;
                    }
                    ++C;
                } else if (M > N) for (;;) {
                    var _ = e(t[k]);
                    if (_ > N) {
                        k--;
                        if (k < A) break;
                        continue;
                    }
                    if (_ < x) {
                        t[A] = t[C];
                        t[C++] = t[k];
                        t[k--] = O;
                    } else {
                        t[A] = t[k];
                        t[k--] = O;
                    }
                    break;
                }
            }
            t[r] = t[C - 1];
            t[C - 1] = S;
            t[i - 1] = t[k + 1];
            t[k + 1] = T;
            n(t, r, C - 1);
            n(t, k + 2, i);
            if (L) return t;
            if (C < o && k > u) {
                var D, _;
                while ((D = e(t[C])) <= x && D >= x) ++C;
                while ((_ = e(t[k])) <= N && _ >= N) --k;
                for (var A = C; A <= k; A++) {
                    var O = t[A], M = e(O);
                    if (M <= x && M >= x) {
                        if (A !== C) {
                            t[A] = t[C];
                            t[C] = O;
                        }
                        C++;
                    } else if (M <= N && M >= N) for (;;) {
                        var _ = e(t[k]);
                        if (_ <= N && _ >= N) {
                            k--;
                            if (k < A) break;
                            continue;
                        }
                        if (_ < x) {
                            t[A] = t[C];
                            t[C++] = t[k];
                            t[k--] = O;
                        } else {
                            t[A] = t[k];
                            t[k--] = O;
                        }
                        break;
                    }
                }
            }
            return n(t, C, k + 1);
        }
        var t = l(e);
        return n;
    }
    function b(e) {
        return new Array(e);
    }
    function w(e, t) {
        return function(n) {
            var r = n.length;
            return [ e.left(n, t, 0, r), e.right(n, t, 0, r) ];
        };
    }
    function E(e, t) {
        var n = t[0], r = t[1];
        return function(t) {
            var i = t.length;
            return [ e.left(t, n, 0, i), e.left(t, r, 0, i) ];
        };
    }
    function S(e) {
        return [ 0, e.length ];
    }
    function x() {
        return null;
    }
    function T() {
        return 0;
    }
    function N(e) {
        return e + 1;
    }
    function C(e) {
        return e - 1;
    }
    function k(e) {
        return function(t, n) {
            return t + +e(n);
        };
    }
    function L(e) {
        return function(t, n) {
            return t - e(n);
        };
    }
    function A() {
        function v(t) {
            var n = s, r = t.length;
            if (r) {
                i = i.concat(t);
                l = g(l, s += r);
                p.forEach(function(e) {
                    e(t, n, r);
                });
            }
            return e;
        }
        function m(e) {
            function q(t, r, i) {
                D = t.map(e);
                P = H(M(i), 0, i);
                D = n(D, P);
                var o = B(D), u = o[0], a = o[1], f;
                for (f = 0; f < u; ++f) l[P[f] + r] |= v;
                for (f = a; f < i; ++f) l[P[f] + r] |= v;
                if (!r) {
                    b = D;
                    A = P;
                    F = u;
                    I = a;
                    return;
                }
                var c = b, h = A, p = 0, d = 0;
                b = new Array(s);
                A = O(s, s);
                for (f = 0; p < r && d < i; ++f) if (c[p] < D[d]) {
                    b[f] = c[p];
                    A[f] = h[p++];
                } else {
                    b[f] = D[d];
                    A[f] = P[d++] + r;
                }
                for (; p < r; ++p, ++f) {
                    b[f] = c[p];
                    A[f] = h[p];
                }
                for (; d < i; ++d, ++f) {
                    b[f] = D[d];
                    A[f] = P[d] + r;
                }
                o = B(b), F = o[0], I = o[1];
            }
            function R(e, t, n) {
                j.forEach(function(e) {
                    e(D, P, t, n);
                });
                D = P = null;
            }
            function U(e) {
                var t, n, r, i = e[0], s = e[1], o = [], u = [];
                if (i < F) for (t = i, n = Math.min(F, s); t < n; ++t) {
                    l[r = A[t]] ^= v;
                    o.push(r);
                } else if (i > F) for (t = F, n = Math.min(i, I); t < n; ++t) {
                    l[r = A[t]] ^= v;
                    u.push(r);
                }
                if (s > I) for (t = Math.max(i, I), n = s; t < n; ++t) {
                    l[r = A[t]] ^= v;
                    o.push(r);
                } else if (s < I) for (t = Math.max(F, s), n = I; t < n; ++t) {
                    l[r = A[t]] ^= v;
                    u.push(r);
                }
                F = i;
                I = s;
                c.forEach(function(e) {
                    e(v, o, u);
                });
                return d;
            }
            function z(e) {
                return e == null ? V() : Array.isArray(e) ? X(e) : W(e);
            }
            function W(e) {
                return U((B = w(r, e))(b));
            }
            function X(e) {
                return U((B = E(r, e))(b));
            }
            function V() {
                return U((B = S)(b));
            }
            function $(e) {
                var t = [], n = I, r;
                while (--n >= F && e > 0) if (!l[r = A[n]]) {
                    t.push(i[r]);
                    --e;
                }
                return t;
            }
            function J(e) {
                function B(t, n, o, a) {
                    function U() {
                        if (++p === h) {
                            v = y(v, f <<= 1);
                            u = y(u, f);
                            h = _(f);
                        }
                    }
                    var d = r, v = O(p, h), b = E, w = M, S = p, T = 0, N = 0, C, k, L, A, B, j;
                    H && (b = w = x);
                    r = new Array(p), p = 0;
                    u = S > 1 ? g(u, s) : O(s, h);
                    S && (L = (k = d[0]).key);
                    while (N < a && !((A = e(t[N])) >= A)) ++N;
                    while (N < a) {
                        if (k && L <= A) {
                            B = k, j = L;
                            v[T] = p;
                            if (k = d[++T]) L = k.key;
                        } else B = {
                            key: A,
                            value: w()
                        }, j = A;
                        r[p] = B;
                        while (!(A > j)) {
                            u[C = n[N] + o] = p;
                            l[C] & m || (B.value = b(B.value, i[C]));
                            if (++N >= a) break;
                            A = e(t[N]);
                        }
                        U();
                    }
                    while (T < S) {
                        r[v[T] = p] = d[T++];
                        U();
                    }
                    if (p > T) for (T = 0; T < o; ++T) u[T] = v[u[T]];
                    C = c.indexOf(D);
                    if (p > 1) {
                        D = F;
                        P = q;
                    } else {
                        if (p === 1) {
                            D = I;
                            P = R;
                        } else {
                            D = x;
                            P = x;
                        }
                        u = null;
                    }
                    c[C] = D;
                }
                function F(e, t, n) {
                    if (e === v || H) return;
                    var s, o, a, f;
                    for (s = 0, a = t.length; s < a; ++s) if (!(l[o = t[s]] & m)) {
                        f = r[u[o]];
                        f.value = E(f.value, i[o]);
                    }
                    for (s = 0, a = n.length; s < a; ++s) if ((l[o = n[s]] & m) === e) {
                        f = r[u[o]];
                        f.value = S(f.value, i[o]);
                    }
                }
                function I(e, t, n) {
                    if (e === v || H) return;
                    var s, o, u, a = r[0];
                    for (s = 0, u = t.length; s < u; ++s) l[o = t[s]] & m || (a.value = E(a.value, i[o]));
                    for (s = 0, u = n.length; s < u; ++s) (l[o = n[s]] & m) === e && (a.value = S(a.value, i[o]));
                }
                function q() {
                    var e, t;
                    for (e = 0; e < p; ++e) r[e].value = M();
                    for (e = 0; e < s; ++e) if (!(l[e] & m)) {
                        t = r[u[e]];
                        t.value = E(t.value, i[e]);
                    }
                }
                function R() {
                    var e, t = r[0];
                    t.value = M();
                    for (e = 0; e < s; ++e) l[e] & m || (t.value = E(t.value, i[e]));
                }
                function U() {
                    H && (P(), H = !1);
                    return r;
                }
                function z(e) {
                    var t = d(U(), 0, r.length, e);
                    return w.sort(t, 0, t.length);
                }
                function W(e, t, r) {
                    E = e;
                    S = t;
                    M = r;
                    H = !0;
                    return n;
                }
                function X() {
                    return W(N, C, T);
                }
                function V(e) {
                    return W(k(e), L(e), T);
                }
                function $(e) {
                    function t(t) {
                        return e(t.value);
                    }
                    d = a(t);
                    w = o(t);
                    return n;
                }
                function J() {
                    return $(t);
                }
                function K() {
                    return p;
                }
                var n = {
                    top: z,
                    all: U,
                    reduce: W,
                    reduceCount: X,
                    reduceSum: V,
                    order: $,
                    orderNatural: J,
                    size: K
                }, r, u, f = 8, h = _(f), p = 0, d, w, E, S, M, D = x, P = x, H = !0;
                arguments.length < 1 && (e = t);
                c.push(D);
                j.push(B);
                B(b, A, 0, s);
                return X().orderNatural();
            }
            function K() {
                var e = J(x), t = e.all;
                delete e.all;
                delete e.top;
                delete e.order;
                delete e.orderNatural;
                delete e.size;
                e.value = function() {
                    return t()[0].value;
                };
                return e;
            }
            var d = {
                filter: z,
                filterExact: W,
                filterRange: X,
                filterAll: V,
                top: $,
                group: J,
                groupAll: K
            }, v = 1 << u++, m = ~v, b, A, D, P, H = h(function(e) {
                return D[e];
            }), B = S, j = [], F = 0, I = 0;
            p.unshift(q);
            p.push(R);
            u > f && (l = y(l, f <<= 1));
            q(i, 0, s);
            R(i, 0, s);
            return d;
        }
        function b() {
            function a(e, r, o) {
                var a;
                if (u) return;
                for (a = r; a < s; ++a) l[a] || (t = n(t, i[a]));
            }
            function f(e, s, o) {
                var a, f, c;
                if (u) return;
                for (a = 0, c = s.length; a < c; ++a) l[f = s[a]] || (t = n(t, i[f]));
                for (a = 0, c = o.length; a < c; ++a) l[f = o[a]] === e && (t = r(t, i[f]));
            }
            function h() {
                var e;
                t = o();
                for (e = 0; e < s; ++e) l[e] || (t = n(t, i[e]));
            }
            function d(t, i, s) {
                n = t;
                r = i;
                o = s;
                u = !0;
                return e;
            }
            function v() {
                return d(N, C, T);
            }
            function m(e) {
                return d(k(e), L(e), T);
            }
            function g() {
                u && (h(), u = !1);
                return t;
            }
            var e = {
                reduce: d,
                reduceCount: v,
                reduceSum: m,
                value: g
            }, t, n, r, o, u = !0;
            c.push(f);
            p.push(a);
            a(i, 0, s);
            return v();
        }
        function A() {
            return s;
        }
        var e = {
            add: v,
            dimension: m,
            groupAll: b,
            size: A
        }, i = [], s = 0, u = 0, f = 8, l = d(0), c = [], p = [];
        return arguments.length ? v(arguments[0]) : e;
    }
    function O(e, t) {
        return (t < 257 ? d : t < 65537 ? v : m)(e);
    }
    function M(e) {
        var t = O(e, e);
        for (var n = -1; ++n < e; ) t[n] = n;
        return t;
    }
    function _(e) {
        return e === 8 ? 256 : e === 16 ? 65536 : 4294967296;
    }
    A.version = "1.0.3";
    A.permute = n;
    var r = A.bisect = i(t);
    r.by = i;
    var s = A.heap = o(t);
    s.by = o;
    var u = A.heapselect = a(t);
    u.by = a;
    var f = A.insertionsort = l(t);
    f.by = l;
    var c = A.quicksort = h(t);
    c.by = h;
    var p = 32, d = b, v = b, m = b, g = t, y = t;
    if (typeof Uint8Array != "undefined") {
        d = function(e) {
            return new Uint8Array(e);
        };
        v = function(e) {
            return new Uint16Array(e);
        };
        m = function(e) {
            return new Uint32Array(e);
        };
        g = function(e, t) {
            var n = new e.constructor(t);
            n.set(e);
            return n;
        };
        y = function(e, t) {
            var n;
            switch (t) {
              case 16:
                n = v(e.length);
                break;
              case 32:
                n = m(e.length);
                break;
              default:
                throw new Error("invalid array width!");
            }
            n.set(e);
            return n;
        };
    }
    e.crossfilter = A;
})(this);