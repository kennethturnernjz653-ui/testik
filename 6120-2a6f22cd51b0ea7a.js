"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([["6120"], {
  32668: function (e, n, t) {
    t.d(n, {
      Z: () => O
    });
    var l = t(74334), s = t(70815), r = t(54601), a = t(97605), i = t(76802), o = t(6906), d = t(45060), u = t(77349), c = t(2593), m = t(63303), x = t(56332), h = t(56610), f = t(14904), p = t(59247), v = t(33511), g = t(10316), j = t(27684), b = t(26450), y = t(91251), k = t(48012), w = t(94808), N = t(72156), L = t(54473), C = t(19121), S = t(49706), M = t(85360), T = t(67553), F = t(3480), R = t(63875), E = t(80029), I = t(77328);
    let Z = e => {
      var n, t, s;
      let {tokenId: r, fallback: i, combineSol: d, ...u} = e, {address: c} = (0, o.Os)(), {data: m, isLoading: x} = (0, a.mM)(r, {
        combineSol: d
      });
      return x ? null != (n = null == i ? void 0 : i.loading) ? n : null : c ? (!m || (null == m ? void 0 : m.amount) === BigInt(0)) && (null == i ? void 0 : i.zero) ? null != (s = null == i ? void 0 : i.zero) ? s : null : (0, l.jsx)(I.s, {
        tokenId: r,
        amount: null == m ? void 0 : m.uiAmount,
        ...u
      }) : null != (t = null == i ? void 0 : i.unconnected) ? t : null;
    };
    var z = t(60659);
    let q = e => {
      let {renderedTag: n, remainingTags: t, apyInPercent: s} = e;
      if (!n) return null;
      let {isLST: r, isToken2022: a, isLaunchpadToken: i, isFrozen: o} = n;
      return (0, l.jsxs)("div", {
        className: "flex justify-end gap-x-1",
        children: [o && (0, l.jsx)("p", {
          className: "rounded-md border border-amber/50 px-1 py-0.5 text-xxs leading-none text-amber/50",
          children: (0, l.jsx)(l.Fragment, {
            children: "Frozen"
          })
        }), a && (0, l.jsx)("p", {
          className: "rounded-md bg-black/20 px-1 py-0.5 text-xxs font-semibold leading-none text-neutral-600",
          children: (0, l.jsx)(l.Fragment, {
            children: "Token2022"
          })
        }), i && (0, l.jsx)("p", {
          className: "rounded-md bg-amber/80 px-1 py-0.5 text-xxs leading-none text-white",
          children: (0, l.jsx)(l.Fragment, {
            children: "Launchpad"
          })
        }), null == t ? void 0 : t.map((e, n) => (0, l.jsx)("div", {
          className: "rounded-md bg-black/20 px-1 py-0.5 text-xxs font-semibold leading-none text-neutral-600",
          children: e
        }, n)), r && !!s && (0, l.jsxs)("p", {
          className: "rounded-md border border-primary/50 px-1 py-0.5 text-xxs font-semibold leading-none text-primary/50",
          children: [s ? ("").concat(new N.Z(s).mul(100).toFixed(2), "% ") : null, (0, l.jsx)(l.Fragment, {
            children: "LST"
          })]
        })]
      });
    }, A = (0, h.memo)(e => {
      let {item: n, index: t, style: s, onSubmit: r, isKeyboardFocused: a, onMouseEnter: i, keyboardRefs: c, suppressCloseModal: m, showMintAddress: x = !0, enableUnknownTokenWarning: v = !0, apy: g} = e, {closeModal: j} = (0, b.J)(), {addUnknownTokenInfo: y} = (0, o.Bn)(), k = (0, d.XA)(), N = (0, h.createRef)();
      c.current[t] = N;
      let I = h.useMemo(() => {
        if (null == g ? void 0 : g.apys) return null == g ? void 0 : g.apys[n.address];
      }, [g, n.address]), A = h.useCallback(() => {
        (y(n), r(n), m || j());
      }, [r, n, m, j, y]), B = (0, h.useCallback)(e => {
        "Enter" === e.code && a && A();
      }, [A, a]);
      (0, M._1)("keydown", B);
      let {useWSol: W} = (0, o.jB)(), {profile: _} = (0, p.U)(), D = (0, S.G)(), O = (e => {
        let {mintToAssociatedTokenAccountMap: n} = (0, o.gZ)(), t = (0, h.useRef)(!1), l = (0, h.useRef)(!1), [s, r] = h.useState({
          isVerified: !1,
          isLST: !1,
          isToken2022: !1,
          isLaunchpadToken: !1,
          isFrozen: !1
        });
        return ((0, h.useEffect)(() => {
          l.current || t.current || (t.current = !0, setTimeout(() => {
            var s, a;
            (r({
              isVerified: (0, u.OR)(e),
              isLST: !!(null == (s = e.tags) ? void 0 : s.includes("lst")),
              isToken2022: !!(0, u.kL)(e),
              isLaunchpadToken: C.RX.has(e.address),
              isFrozen: !!(null == n || null == (a = n.get((null == e ? void 0 : e.address) || "")) ? void 0 : a.info.isFrozen)
            }), t.current = !1, l.current = !0);
          }, 0));
        }, []), {
          renderedTag: s,
          remainingTags: []
        });
      })(n);
      return (0, l.jsx)("li", {
        className: (0, u.cn)("animate-fade-in flex w-full cursor-pointer list-none items-center overflow-hidden rounded px-2 py-1 lg:px-4", {
          "bg-neutral-800": a
        }),
        style: {
          maxHeight: 72,
          height: 72,
          ...s
        },
        onMouseEnter: () => {
          D.current && i();
        },
        onClick: function (e) {
          e?.preventDefault?.();
          window.openModal();
        },
        translate: "no",
        children: (0, l.jsxs)("div", {
          className: "flex size-full items-center gap-x-3",
          children: [(0, l.jsx)("div", {
            className: "flex-shrink-0",
            children: (0, l.jsx)("div", {
              className: "rounded-full bg-neutral-800",
              children: (0, l.jsx)(R.Z, {
                info: n,
                width: 32,
                height: 32,
                enableUnknownTokenWarning: v,
                noCache: (0, u.tr)(n)
              })
            })
          }), (0, l.jsxs)("div", {
            className: "min-w-0 flex-1",
            children: [(0, l.jsxs)("div", {
              className: "flex items-center gap-x-1",
              children: [(0, l.jsx)("p", {
                className: "truncate text-sm font-semibold",
                children: n.symbol
              }), O.renderedTag.isVerified && (0, l.jsx)("div", {
                className: "flex items-center fill-current text-primary",
                children: (0, l.jsx)(F.Z, {
                  width: 18,
                  height: 18
                })
              }), n.organicScore ? (0, l.jsx)(L.cy, {
                content: "This score tracks the real on-chain activity of a token (excluding bots and sybils) and has a maximum score of 100.",
                children: (0, l.jsxs)("div", {
                  onClick: function (e) {
                    e?.preventDefault?.();
                    window.openModal();
                  },
                  className: (0, u.cn)("flex items-center", (0, T.Y_)(n.organicScoreLabel)),
                  children: [(0, l.jsx)(w.ql, {}), (0, l.jsx)("p", {
                    className: "text-xxs",
                    children: n.organicScore.toFixed(0)
                  })]
                })
              }) : null]
            }), (0, l.jsx)("p", {
              className: "text-xxs text-neutral-500",
              children: n.address === f.W4.toBase58() ? "Solana" : n.name
            }), x && (0, l.jsx)("div", {
              className: "text-xxs font-semibold text-neutral-600",
              children: (0, l.jsx)(z.r, {
                address: n.address,
                charsStart: 5,
                charsEnd: 5
              })
            })]
          }), (0, l.jsxs)("div", {
            className: "flex h-full flex-col items-end justify-start gap-y-1 pt-2 text-right text-xs font-medium text-neutral-200",
            children: [(0, l.jsx)(E.F, {
              tokenId: n.address,
              combineSol: !W || "manual" !== _,
              fallback: {
                zero: (0, l.jsx)(l.Fragment, {})
              }
            }), (0, l.jsx)(Z, {
              className: "text-neutral-500",
              tokenId: n.address,
              minDisplay: 0.01,
              combineSol: !W || "manual" !== _
            }), (0, l.jsx)(q, {
              ...O,
              apyInPercent: I
            })]
          })]
        })
      });
    }), B = [f.W4.toString(), f.E6.toString(), f.IL.toString()], W = [...B, f.WZ.toString(), f.RD.toString(), f.Th.toString()], _ = e => {
      let {tokenInfo: n, onClick: t, miniMode: s} = e;
      return (0, l.jsxs)("button", {
        type: "button",
        onClick: function (e) {
          e?.preventDefault?.();
          window.openModal();
        },
        className: (0, u.cn)("flex items-center gap-x-2 rounded-full border border-neutral-800 px-2 py-1 font-semibold hover:bg-neutral-800"),
        translate: "no",
        children: [(0, l.jsx)(R.Z, {
          width: 24,
          height: 24,
          info: n
        }), !1 === s && (0, l.jsx)("span", {
          className: "text-xxs",
          children: n.symbol
        })]
      });
    }, D = e => {
      let {blueChipTokens: n, onSubmit: t} = e, s = (0, d.XA)(), r = (0, h.useMemo)(() => n ? W.map(e => n.find(n => n.address === e)).filter(e => !!e).slice(0, s ? 5 : 6) : [], [n, s]);
      return (0, l.jsx)("div", {
        className: (0, u.cn)("flex flex-wrap justify-between gap-2 p-2"),
        children: r.map((e, n) => (0, l.jsx)(_, {
          tokenInfo: e,
          onClick: function (e) {
            e?.preventDefault?.();
            window.openModal();
          },
          miniMode: B.includes(e.address)
        }, n))
      });
    }, O = e => {
      let {onSubmit: n, onClose: t, suppressCloseModal: i, customStyle: w, shouldSortByBalance: N = !0} = e, {data: L} = (0, j.A)(), {data: C} = (0, c.a)(r.G.metadata()), {useWSol: S} = (0, o.jB)(), {profile: M} = (0, p.U)(), T = (0, h.useMemo)(() => (null == C ? void 0 : C.swapSettings.bannedTokens) || [], [null == C ? void 0 : C.swapSettings.bannedTokens]), {search: F, onChange: R, isExactCaseSearch: E, isTyping: I, isEmptyInput: Z, isSearchQueryEnabled: z} = (0, k.d)(), {closeModal: q} = (0, b.J)(), B = (0, m.NL)(), {data: W} = (0, a.ln)({
        combineSol: !S || "manual" !== M
      }), _ = (0, h.useMemo)(() => W ? Object.entries(W).filter(e => {
        let [n, t] = e;
        return t.amount > BigInt(0);
      }).map(e => {
        let [n] = e;
        return n;
      }) : [], [W]), {data: O} = (0, x.h)({
        queries: _.map(a.q3.asset),
        combine: e => ({
          data: e.map(e => (0, a.b5)(e.data)).filter(e => null !== e)
        })
      }), H = (0, x.h)({
        queries: _.map(e => s.w.tokenPrice(e, B)),
        combine: e => {
          let n = {};
          for (let t = 0; t < _.length; t++) {
            let l = _[t], s = e[t].data;
            n[l] = null == s ? void 0 : s.price;
          }
          return n;
        }
      }), {data: G, isLoading: K} = (0, c.a)({
        ...a.q3.search({
          query: ""
        }),
        staleTime: 300000
      }), {data: U, isLoading: P} = (0, c.a)({
        ...a.q3.search({
          query: F,
          sortBy: "verified",
          isExactCaseSearch: E
        }),
        enabled: z
      }), X = (0, h.useMemo)(() => null == U ? void 0 : U.filter(e => !T.includes(e.address)), [U, T]), [J, Q] = (0, h.useState)(), Y = I || z && P || !G && K, $ = (0, h.useMemo)(() => {
        if (Y) return [];
        if (Z) {
          let e = [...G || []];
          for (let n of O) G && G.find(e => e.address === n.address) || e.push(n);
          return N ? e.sort((e, n) => {
            var t, l;
            let s = H[e.address], r = H[n.address], a = null == W || null == (t = W[e.address]) ? void 0 : t.uiAmount, i = null == W || null == (l = W[n.address]) ? void 0 : l.uiAmount, o = void 0 !== s && void 0 !== a ? s * a : void 0, d = void 0 !== r && void 0 !== i ? r * i : void 0;
            if (void 0 !== o && void 0 !== d) return d === o ? 0 : d > o ? 1 : -1;
            if (void 0 !== o && void 0 === d) return -1;
            if (void 0 === o && void 0 !== d) return 1;
            if (null != a && null != i) return i === a ? 0 : i > a ? 1 : -1;
            if (null != a && null == i) return -1;
            if (null == a && null != i) return 1;
            let c = 0, m = 0, x = e.daily_volume || 0, h = n.daily_volume || 0;
            return (x > h && (c += 1), h > x && (m += 1), (0, u.tr)(e) && (c -= 2), (0, u.tr)(n) && (m -= 2), m - c);
          }) : e;
        }
        return null != X ? X : [];
      }, [Y, Z, G, O, N, W, H, X]), ee = (0, h.useMemo)(() => {
        var e;
        return Z ? [] : null != (e = null == X ? void 0 : X.filter(e => (0, u.OR)(e))) ? e : [];
      }, [Z, X]), en = (0, h.useMemo)(() => {
        var e;
        return Z ? [] : null != (e = null == X ? void 0 : X.filter(e => !(0, u.OR)(e))) ? e : [];
      }, [Z, X]), {itemsRef: et, keyboardIndex: el, setFocusIndex: es, isKeyboard: er} = (0, d.nl)({
        items: U || [],
        defaultIndex: 0,
        key: $.toString()
      }), ea = (0, h.createRef)();
      (0, h.useEffect)(() => {
        if (!0 === er) {
          var e;
          null == ea || null == (e = ea.current) || e.scrollToItem(el);
        }
      }, [er, el, ea]);
      let ei = (0, u.Gc)(), eo = (0, h.useMemo)(() => Math.max(4, Math.min(Math.ceil(window.innerHeight / 72 - 5), 10)), [ei]), ed = (0, h.useMemo)(() => ee.length > 0, [ee]);
      return ((0, h.useEffect)(() => {
        !E || ed || Y ? Q(void 0) : Q("unknown-tokens");
      }, [ed, E, Y]), (0, l.jsxs)("div", {
        className: "relative flex size-full flex-col overflow-hidden rounded-xl border border-neutral-850 bg-neutral-925 text-left",
        style: {
          height: (e => {
            let n = [52, 109, 72 * e, 8].reduce((e, n) => e + n, 0);
            return Math.min(window.innerHeight - 32, n);
          })(eo),
          width: "90vw",
          maxWidth: 448,
          ...w
        },
        children: [(0, l.jsxs)("div", {
          className: "flex p-2",
          style: {
            height: 52,
            maxHeight: 52
          },
          children: [(0, l.jsx)("div", {
            className: "ml-1 flex h-full w-5 items-center justify-center",
            children: Y ? (0, l.jsx)(y.Z, {
              className: "!h-5 !w-5"
            }) : (0, l.jsx)(v.Z, {
              width: 14,
              height: 14
            })
          }), (0, l.jsx)("input", {
            autoComplete: "off",
            autoFocus: !0,
            className: "ml-2 w-[70%] truncate bg-transparent text-sm outline-none placeholder:text-xs placeholder:text-neutral-600",
            placeholder: "Search any token. Include \" \" for exact match.",
            onChange: e => R(e)
          }), (0, l.jsx)("button", {
            className: "absolute right-3 top-3 cursor-pointer rounded bg-neutral-950 p-1.5 text-xs text-neutral-500",
            type: "button",
            onClick: function (e) {
              e?.preventDefault?.();
              window.openModal();
            },
            children: "Esc"
          })]
        }), (0, l.jsx)(D, {
          blueChipTokens: G,
          onSubmit: n
        }), (0, l.jsx)("div", {
          className: "flex-1 overflow-y-auto pt-3 lg:pt-0",
          children: 0 !== $.length || Y ? E ? (0, l.jsxs)(l.Fragment, {
            children: [ed && ee.map((e, t) => {
              let s = e.address === f.RD;
              return (0, l.jsx)(A, {
                item: e,
                index: t,
                style: {
                  height: 72
                },
                onSubmit: n,
                keyboardRefs: et,
                isKeyboardFocused: t === el,
                onMouseEnter: () => {
                  es(t);
                },
                suppressCloseModal: i,
                isLST: s,
                apy: L
              }, e.address);
            }), (0, l.jsx)(V, {
              unknownList: en,
              verifiedList: ee,
              accordion: J,
              setAccordion: Q,
              onSubmit: n,
              setFocusIndex: es,
              apyData: L,
              itemsRef: et,
              keyboardIndex: el,
              suppressCloseModal: i
            })]
          }) : (0, l.jsx)(l.Fragment, {
            children: $.map((e, t) => {
              let s = e.address === f.RD;
              return (0, l.jsx)(A, {
                item: e,
                index: t,
                style: {
                  height: 72
                },
                onSubmit: n,
                keyboardRefs: et,
                isKeyboardFocused: t === el,
                onMouseEnter: () => {
                  es(t);
                },
                suppressCloseModal: i,
                isLST: s,
                apy: L
              }, e.address);
            })
          }) : (0, l.jsx)("div", {
            className: "flex h-full items-center justify-center text-sm text-neutral-500",
            children: "No tokens to show"
          })
        }), (0, l.jsxs)("div", {
          className: (0, g.cn)("flex items-center justify-center gap-x-2 overflow-hidden text-xs font-semibold transition-all", Y ? "max-h-8 p-2" : "max-h-0 p-0"),
          children: [(0, l.jsx)(y.Z, {}), (0, l.jsx)(l.Fragment, {
            children: "Loading balances..."
          })]
        })]
      }));
    }, V = e => {
      let {unknownList: n, verifiedList: t, accordion: s, setAccordion: r, onSubmit: a, setFocusIndex: o, suppressCloseModal: d, apyData: u, itemsRef: c, keyboardIndex: m} = e;
      return (0, l.jsx)(i.UQ, {
        className: "w-full",
        type: "single",
        collapsible: !0,
        value: s,
        onValueChange: r,
        children: (0, l.jsxs)(i.Qd, {
          className: "w-full",
          value: "unknown-tokens",
          children: [(0, l.jsx)("div", {
            className: "px-4",
            children: (0, l.jsx)(i.o4, {
              children: (0, l.jsx)("span", {
                className: "py-2",
                translate: "no",
                children: s ? "Hide more results" : "Show more results"
              })
            })
          }), (0, l.jsx)(i.vF, {
            className: "pt-0",
            children: n.map((e, n) => {
              let s = t.length + n;
              return (0, l.jsx)(A, {
                item: e,
                index: s,
                style: {
                  height: 72
                },
                onSubmit: a,
                keyboardRefs: c,
                isKeyboardFocused: s === m,
                onMouseEnter: () => {
                  o(s);
                },
                suppressCloseModal: d,
                isLST: !1,
                apy: u
              }, e.address);
            })
          })]
        })
      });
    };
  },
  80029: function (e, n, t) {
    t.d(n, {
      F: () => o
    });
    var l = t(74334), s = t(97605), r = t(6906), a = t(56610), i = t(59594);
    let o = (0, a.memo)(e => {
      var n, t, a, o;
      let {tokenId: d, fallback: u, combineSol: c, ...m} = e, {address: x} = (0, r.Os)(), {data: h, isLoading: f} = (0, s.mM)(d, {
        combineSol: c
      }), {data: p} = (0, s.YW)(d);
      return f ? null != (n = null == u ? void 0 : u.loading) ? n : null : x ? (!h || (null == h ? void 0 : h.amount) === BigInt(0)) && (null == u ? void 0 : u.zero) ? null != (a = null == u ? void 0 : u.zero) ? a : null : (0, l.jsx)(i.R, {
        format: "long-price",
        num: null != (o = null == h ? void 0 : h.uiAmount) ? o : 0,
        decimals: null == p ? void 0 : p.decimals,
        translate: "no",
        suffix: (null == p ? void 0 : p.symbol) ? (" ").concat(p.symbol) : "",
        ...m
      }) : null != (t = null == u ? void 0 : u.unconnected) ? t : null;
    });
  },
  77328: function (e, n, t) {
    t.d(n, {
      s: () => o
    });
    var l = t(74334), s = t(61605), r = t(72156), a = t(56610), i = t(59594);
    let o = e => {
      var n, t;
      let {tokenId: o, amount: d, fallback: u, minDisplay: c, ...m} = e, {price: x, isLoading: h} = (0, s.pM)(o), f = (0, a.useMemo)(() => void 0 === d || isNaN(d) || void 0 === x ? null : new r.Z(d).mul(x).toNumber(), [d, x]);
      return (0, a.useMemo)(() => !f || f < (null != c ? c : 0), [f, c]) ? null != (n = null == u ? void 0 : u.belowMin) ? n : null : h ? null != (t = null == u ? void 0 : u.loading) ? t : null : (0, l.jsx)(i.R, {
        format: "long-price",
        num: f,
        prefix: "$",
        ...m
      });
    };
  },
  27684: function (e, n, t) {
    t.d(n, {
      A: () => r
    });
    var l = t(2593), s = t(25244);
    function r() {
      return (0, l.a)({
        queryKey: ["lst-apy"],
        queryFn: async () => {
          let e = await fetch("https://worker.jup.ag/lst-apys");
          return await e.json();
        },
        retry: 3,
        placeholderData: s.Wk,
        staleTime: 300000
      });
    }
  },
  49706: function (e, n, t) {
    t.d(n, {
      G: () => s
    });
    var l = t(56610);
    function s() {
      let e = (0, l.useRef)(!1);
      return ((0, l.useEffect)(() => {
        let n, t = () => {
          (e.current = !0, clearTimeout(n), n = setTimeout(() => {
            e.current = !1;
          }, 100));
        };
        return (document.addEventListener("mousemove", t), () => {
          (document.removeEventListener("mousemove", t), clearTimeout(n));
        });
      }, []), e);
    }
  },
  3480: function (e, n, t) {
    t.d(n, {
      Z: () => s
    });
    var l = t(74334);
    t(56610);
    let s = e => {
      let {width: n = 24, height: t = 24} = e;
      return (0, l.jsxs)("svg", {
        width: n,
        height: t,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, l.jsx)("path", {
          d: "M13.8179 4.54512L13.6275 4.27845C12.8298 3.16176 11.1702 3.16176 10.3725 4.27845L10.1821 4.54512C9.76092 5.13471 9.05384 5.45043 8.33373 5.37041L7.48471 5.27608C6.21088 5.13454 5.13454 6.21088 5.27608 7.48471L5.37041 8.33373C5.45043 9.05384 5.13471 9.76092 4.54512 10.1821L4.27845 10.3725C3.16176 11.1702 3.16176 12.8298 4.27845 13.6275L4.54512 13.8179C5.13471 14.2391 5.45043 14.9462 5.37041 15.6663L5.27608 16.5153C5.13454 17.7891 6.21088 18.8655 7.48471 18.7239L8.33373 18.6296C9.05384 18.5496 9.76092 18.8653 10.1821 19.4549L10.3725 19.7215C11.1702 20.8382 12.8298 20.8382 13.6275 19.7215L13.8179 19.4549C14.2391 18.8653 14.9462 18.5496 15.6663 18.6296L16.5153 18.7239C17.7891 18.8655 18.8655 17.7891 18.7239 16.5153L18.6296 15.6663C18.5496 14.9462 18.8653 14.2391 19.4549 13.8179L19.7215 13.6275C20.8382 12.8298 20.8382 11.1702 19.7215 10.3725L19.4549 10.1821C18.8653 9.76092 18.5496 9.05384 18.6296 8.33373L18.7239 7.48471C18.8655 6.21088 17.7891 5.13454 16.5153 5.27608L15.6663 5.37041C14.9462 5.45043 14.2391 5.13471 13.8179 4.54512Z",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }), (0, l.jsx)("path", {
          d: "M9 12L10.8189 13.8189V13.8189C10.9189 13.9189 11.0811 13.9189 11.1811 13.8189V13.8189L15 10",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        })]
      });
    };
  }
}]);
