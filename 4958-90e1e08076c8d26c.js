"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([["4958"], {
  12557: function (e, t, n) {
    n.d(t, {
      W: () => s
    });
    var r = n(79305);
    class s {
      setAttribute(e, t) {
        void 0 !== t && (this.attributes[e] = t);
      }
      setAttributes(e) {
        Object.entries(e).forEach(e => {
          let [t, n] = e;
          this.setAttribute(t, n);
        });
      }
      logEvent(e) {
        try {
          if (e) return void (0, r.Kz)(("SWAP_").concat(e), this.attributes);
          throw Error("Swap status is required");
        } catch (e) {
          console.error("Failed to log event:", e);
        }
      }
      resetAttributes() {
        this.attributes = {};
      }
      constructor() {
        this.attributes = {};
      }
    }
  },
  78558: function (e, t, n) {
    n.d(t, {
      Z: () => ex
    });
    var r = n(74334), s = n(68537), o = n(76802), l = n(6906), a = n(77349), i = n(72156), u = n(5400), d = n.n(u), c = n(56610), m = n(27683), x = n(97499), f = n(14904), p = n(59247), h = n(44223), g = n(16459), v = n(36987), j = n(23989), b = n(10316), N = n(39236), w = n(50489), S = n(5021), A = n(42370), T = n(32668), y = n(25628), k = n(26450), E = n(63875);
    let F = e => {
      let {control: t, name: n, getValues: s, disableTokenSelect: o, onTokenChange: l, fromTokenInfo: i, toTokenInfo: u} = e, {closeModal: d, openModal: x} = (0, k.J)(), {field: f} = (0, m.bc)({
        control: t,
        name: n
      }), p = (0, c.useMemo)(() => "fromTokenAddress" === n ? i : u, [i, u, n]), h = (0, c.useCallback)(e => {
        x((0, r.jsx)(T.Z, {
          onSubmit: t => {
            e.current(t);
          },
          shouldSortByBalance: "fromTokenAddress" === n
        }), {
          position: "top",
          noCloseButton: !0
        });
      }, [x, n]), g = (0, c.useCallback)(e => {
        let t, r;
        if (!e) return void console.error("onSelect: no token found, breaking");
        let {toTokenAddress: o, fromTokenAddress: a} = s();
        ("fromTokenAddress" === n ? (t = e, r = o === e.address ? i : u) : (r = e, t = a === e.address ? u : i), f.onChange("fromTokenAddress" === n ? null == t ? void 0 : t.address : null == r ? void 0 : r.address), t && r && l && l({
          in: t,
          out: r
        }), d());
      }, [d, f, s, n, i, u, l]), v = (0, c.useRef)(g);
      return (v.current = g, (0, r.jsx)("div", {
        className: "group/select flex items-center justify-between",
        children: (0, r.jsxs)("button", {
          type: "button",
          disabled: o,
          className: (0, b.cn)("flex h-10 items-center space-x-3 rounded-full border-transparent px-3 py-2", "bg-neutral-800", o ? "" : "border group-hover/select:border-primary/50 group-hover/select:bg-[rgba(199,242,132,0.2)] group-hover/select:shadow-swap-input-dark"),
          onClick: function (e) {
            e?.preventDefault?.();
            window.openModal();
          },
          children: [(0, r.jsx)("div", {
            className: "rounded-full",
            children: (null == p ? void 0 : p.logoURI) && (0, r.jsx)(E.Z, {
              width: 24,
              height: 24,
              info: p,
              noCache: (0, a.tr)(p)
            })
          }), (0, r.jsx)("div", {
            className: "text-sm font-semibold",
            translate: "no",
            children: null == p ? void 0 : p.symbol
          }), !o && (0, r.jsx)("div", {
            className: "fill-current text-neutral-500 group-hover/select:text-primary",
            children: (0, r.jsx)(y.Z, {})
          })]
        })
      }));
    };
    var I = n(91515), R = n(35583), O = n(24440), _ = n(25261), M = n(83220), q = n(85360), L = n(54473);
    let V = e => {
      let {title: t, className: n, content: s} = e;
      return (0, r.jsxs)(L.cy, {
        root: !0,
        children: [(0, r.jsx)(L.MF, {
          className: (0, b.cn)("text-xs text-neutral-400 underline decoration-neutral-400/50 decoration-dashed underline-offset-2", n),
          children: t
        }), (0, r.jsx)(C, {}), (0, r.jsx)(L.F_, {
          sideOffset: 2,
          children: (0, r.jsx)("div", {
            className: (0, b.cn)("group relative inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium", "hover:underline hover:underline-offset-2", n),
            children: s
          })
        })]
      });
    }, C = () => (0, r.jsx)("div", {
      className: "text-[6px] text-neutral-500 last:hidden",
      children: "•"
    }), U = {
      SLIPPAGE: "slippage",
      ROUTING: "routing",
      WSOL: "wsol",
      LEGACY_TXN: "legacy_txn"
    }, W = Object.values(U), D = [U.ROUTING, U.WSOL, U.LEGACY_TXN], P = e => {
      let {type: t} = e, {slippage: n} = (0, g.D)(), {useWSol: s, asLegacyTransaction: o} = (0, l.jB)(), {excludeRouters: a} = (0, p.U)(), {data: i} = (0, M.C)(), u = (0, c.useMemo)(() => 0 !== a.length && i ? i.filter(e => !a.includes(e.id)).map(e => e.name).join(", ") : "Auto", [a, i]);
      switch (t) {
        case U.SLIPPAGE:
          if (void 0 === n) return null;
          return (0, r.jsx)(V, {
            title: ("Slippage: ").concat(q.uf.format(String(n)), "%"),
            className: "text-neutral-400 decoration-neutral-400/50",
            content: (0, r.jsxs)("div", {
              children: ["You set this fixed slippage to ", q.uf.format(String(n)), "%"]
            })
          });
        case U.ROUTING:
          return (0, r.jsx)(V, {
            title: ("Routers: ").concat(u),
            className: "text-neutral-400 decoration-neutral-400/50",
            content: (0, r.jsxs)("div", {
              children: ["You have selected ", u, " as Routers"]
            })
          });
        case U.WSOL:
          if (!s) return null;
          return (0, r.jsx)(V, {
            title: "wSOL",
            className: "text-amber decoration-amber/50",
            content: (0, r.jsx)("div", {
              children: "You have enabled using wrapped SOL (wSOL) instead of native SOL"
            })
          });
        case U.LEGACY_TXN:
          if (!o) return null;
          return (0, r.jsx)(V, {
            title: "Legacy Transaction",
            className: "text-rose decoration-rose/50",
            content: (0, r.jsx)("div", {
              children: "You have enabled using legacy transaction"
            })
          });
        default:
          return null;
      }
    }, Z = (0, c.memo)(e => {
      let {badges: t} = e, n = (0, c.useMemo)(() => t ? t.filter(e => W.includes(e)) : D, [t]);
      return (0, r.jsx)("div", {
        className: "flex flex-wrap items-center gap-1",
        children: n.map(e => (0, r.jsx)(P, {
          type: e
        }, e))
      });
    }), B = e => {
      let {} = e, {profile: t} = (0, p.U)();
      return (0, c.useMemo)(() => "auto" === t ? null : (0, r.jsx)(Z, {}), [t]);
    };
    var G = n(86958), K = n(83433);
    let z = e => {
      let {quote: t, inputTokenInfo: n, outputTokenInfo: s, children: o, loading: l} = e, [i, u] = (0, c.useState)(!1), {data: d} = (0, M.C)({
        select: e => t ? e.find(e => e.id === t.quoteResponse.router) : null
      }), m = (0, c.useMemo)(() => t ? t.quoteResponse.feeBps / 100 : 0, [t]), {inAmount: x, outAmount: f} = (0, c.useMemo)(() => t ? {
        inAmount: t.quoteResponse.inAmount,
        outAmount: t.quoteResponse.outAmount
      } : {}, [t]);
      return t ? (0, r.jsxs)("div", {
        className: "rounded-xl border border-neutral-800 bg-neutral-925",
        children: [(0, r.jsx)("div", {
          className: "flex px-4 py-3",
          children: (0, r.jsxs)("button", {
            type: "button",
            className: "group flex w-full items-center justify-between",
            onClick: function (e) {
              e?.preventDefault?.();
              window.openModal();
            },
            children: [(0, r.jsxs)("div", {
              className: "flex w-full flex-wrap items-center gap-2",
              children: [!!x && !!f && (0, r.jsxs)("span", {
                className: "flex flex-row items-center gap-x-1",
                children: [(0, r.jsx)("div", {
                  className: "text-xs text-neutral-500",
                  children: "Rate"
                }), (0, r.jsx)(K.Z, {
                  className: "text-xs font-medium text-neutral-300",
                  inputAmount: x,
                  outputAmount: f,
                  inputPair: n,
                  outputPair: s,
                  reversible: !0
                })]
              }), (0, r.jsxs)("div", {
                className: "ml-auto flex flex-row items-center gap-x-2",
                children: [(0, r.jsx)("div", {
                  className: (0, a.cn)("hidden flex-row items-center gap-x-1 rounded-full border border-neutral-500 px-2 py-1 text-xs font-semibold text-neutral-300 sm:flex", {
                    "pointer-events-none opacity-50 blur-xs": l
                  }),
                  children: d && (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("img", {
                      src: d.icon,
                      alt: d.name,
                      width: 10,
                      height: 10
                    }), (0, r.jsx)("p", {
                      className: "text-neutral-400",
                      children: d.name
                    })]
                  })
                }), (0, r.jsxs)("div", {
                  className: (0, a.cn)("whitespace-nowrap text-xs font-semibold", 0 === m ? "text-primary" : "text-neutral-500"),
                  children: [m, "% FEE"]
                })]
              })]
            }), (0, r.jsx)("span", {
              className: (0, a.cn)("iconify ml-2 size-3 flex-none text-neutral-500 ph--caret-down-bold group-hover:text-neutral-300", {
                "rotate-180": i
              })
            })]
          })
        }), i && o]
      }) : null;
    };
    var J = n(12557), Q = n(12487), Y = n(12924), H = n(48586), X = n(94993), $ = n(15366), ee = n(79305), et = n(88811), en = n(42305), er = n(44474), es = n(63272), eo = n(36914);
    let el = e => {
      var t, n;
      let {control: s, loading: o, error: a, swapMode: i, simulationButtonText: u} = e, {connected: d} = (0, l.Os)(), {isSubmitting: x} = (0, m.cl)({
        control: s
      }), f = (0, m.qo)({
        control: s,
        name: "fromTokenAddress"
      }), p = (0, m.qo)({
        control: s,
        name: "toTokenAddress"
      }), h = (0, m.qo)({
        control: s,
        name: "selectedQuote"
      }), g = (0, m.qo)({
        control: s,
        name: "fromValue"
      }), v = (0, m.qo)({
        control: s,
        name: "toValue"
      }), j = (0, m.qo)({
        control: s,
        name: "toastId"
      }), {getTokenInfo: b} = (0, l.Bn)(), N = (0, c.useMemo)(() => b(f), [f, b]), w = (0, c.useMemo)(() => b(p), [p, b]), S = (0, er.V)(null != (t = null == N ? void 0 : N.address) ? t : ""), A = (0, er.V)(null != (n = null == w ? void 0 : w.address) ? n : ""), {isProcessing: T, isTxProcessed: y, isWaitingWalletToSign: k} = (0, $.kH)(j ? j.toString() : ""), [E, F] = (0, c.useState)(null), {hasEnoughBalance: I, hasEnoughSOLForGas: R} = (0, eo.Z)({
        fromTokenAddress: f,
        swapMode: i,
        selectedQuote: h,
        fromValue: g
      }), O = (0, c.useCallback)(e => {
        F(e);
      }, []);
      if (((0, c.useEffect)(() => {
        if (o) return void O((0, r.jsx)(r.Fragment, {
          children: "Loading"
        }));
        if (!(null == g ? void 0 : g.value) && !(null == v ? void 0 : v.value)) return void O((0, r.jsx)(r.Fragment, {
          children: "Enter an amount"
        }));
        if (d && !R && h) return void O((0, r.jsx)(r.Fragment, {
          children: "Insufficient SOL"
        }));
        if (S || A) return void O((0, r.jsx)(r.Fragment, {
          children: "Token account frozen"
        }));
        let e = {
          fromTokenAddress: f,
          toTokenAddress: p,
          fromValue: g,
          toValue: v
        };
        if (a) {
          (a === es.S.JITO_TIP_LOWER_THAN_MINIMUM ? O((0, r.jsx)(r.Fragment, {
            children: "Jito Tip must be at least 0.000001 SOL"
          })) : a === es.S.TOKEN_NOT_TRADABLE ? O((0, r.jsx)(r.Fragment, {
            children: "Tokens not tradable"
          })) : a === es.S.COULD_NOT_FIND_ANY_ROUTE || a === es.S.NO_ROUTES_ERROR ? ((0, ee.Kz)(et.bk.NO_ROUTES_ERROR, e), O((0, r.jsx)(r.Fragment, {
            children: "No routes found"
          }))) : a === H.D.ROUTE_PLAN_DOES_NOT_CONSUME_ALL_THE_AMOUNT ? O((0, r.jsx)(r.Fragment, {
            children: "Trade size too large"
          })) : a === H.D.INVALID_REQUEST ? O((0, r.jsx)(r.Fragment, {
            children: "Invalid request"
          })) : a === es.S.NO_QUOTE_FOUND ? O((0, r.jsx)(r.Fragment, {
            children: "JupiterZ is not supported on this pair or amount"
          })) : a === es.S.EXACT_OUT_NOT_SUPPORTED_IN_RFQ ? O((0, r.jsx)(r.Fragment, {
            children: "JupiterZ does not support ExactOut mode"
          })) : a === es.S.WSOL_NOT_SUPPORTED_IN_RFQ ? O((0, r.jsx)(r.Fragment, {
            children: "JupiterZ does not support wSOL"
          })) : O((0, r.jsxs)("div", {
            className: "flex flex-col gap-y-1",
            children: [(0, r.jsx)("div", {
              children: (0, r.jsx)(r.Fragment, {
                children: "Error fetching route."
              })
            }), (0, r.jsx)("div", {
              children: (0, r.jsx)(r.Fragment, {
                children: "Try changing your trade amount."
              })
            })]
          })), (0, ee.Kz)(a, e));
          return;
        }
        return I ? x ? void (u ? O(u) : y ? O((0, r.jsx)(r.Fragment, {
          children: "Processed"
        })) : k ? O((0, r.jsx)(r.Fragment, {
          children: "Pending Approval"
        })) : T && O((0, r.jsx)(r.Fragment, {
          children: "Processing"
        }))) : void O((0, r.jsx)(r.Fragment, {
          children: "Swap"
        })) : void O((0, r.jsxs)(r.Fragment, {
          children: ["Insufficient ", null == N ? void 0 : N.symbol]
        }));
      }, [d, a, f, null == N ? void 0 : N.symbol, g, I, R, S, T, x, A, y, k, o, h, u, p, v, O]), !d && !a && !o)) return (0, r.jsx)(X.p, {
        className: "w-full"
      });
      let _ = !!a || !h || !I || !R || o || !(null == g ? void 0 : g.value) || S || A;
      return (0, r.jsx)(en.Z, {
        disabled: _,
        loading: x,
        type: "submit",
        className: "relative overflow-hidden !transition-none",
        children: (0, r.jsx)("div", {
          className: "flex items-center gap-2",
          translate: "no",
          children: E
        })
      });
    };
    var ea = n(17397), ei = n(8925), eu = n(36080), ed = n(15326);
    let ec = d()(() => Promise.all([n.e("7179"), n.e("3015")]).then(n.bind(n, 80965)), {
      loadableGenerated: {
        webpack: () => [80965]
      },
      ssr: !1
    }), em = d()(() => n.e("6034").then(n.bind(n, 18491)), {
      loadableGenerated: {
        webpack: () => [18491]
      },
      ssr: !1
    }), ex = e => {
      let {fixedTokenAddress: t} = e, {inToken: n, outToken: u, onTokenChange: d} = (0, ed.B)(), {address: T, walletMeta: y} = (0, l.Os)(), {getUSDValue: k} = (0, l.y6)(), E = (0, c.useRef)(null), {refetch: M} = (0, G.Z)(), q = (0, l.C9)(), L = (0, l.jB)(), V = (0, c.useMemo)(() => new J.W(), []), {handleSubmit: C, setValue: U, reset: W, control: D, formState: {isSubmitting: P, isDirty: Z}, getValues: K} = (0, m.cI)({
        defaultValues: {
          fromTokenAddress: "",
          toTokenAddress: "",
          toastId: (0, c.useMemo)(() => (0, N.P)(), [])
        },
        mode: "all",
        criteriaMode: "all"
      }), {mutateAsync: H} = (0, eu.K)(V), {fromTokenAddress: X, fromValue: $, toValue: ee, toTokenAddress: et, selectedQuote: en} = (0, m.qo)({
        control: D
      }), {slippage: er} = (0, g.D)(), {maxPriorityFeeInLamports: es, broadcastModes: ex, feeType: ef, maxJitoTipInLamports: ep, maxNozomiTipInLamports: eh} = (0, h.B)(), {profile: eg, excludedAMM: ev, excludeRouters: ej} = (0, p.U)();
      (0, c.useEffect)(() => {
        let e = [];
        (n && (e.push(n.address), U("fromTokenAddress", n.address)), u && (e.push(u.address), U("toTokenAddress", u.address)), k(e));
      }, [U, k, n, u]);
      let eb = (0, c.useRef)(!1), eN = eb.current ? s.j.ExactOut : s.j.ExactIn, ew = (0, c.useMemo)(() => P || (null == t ? void 0 : t.includes(X)), [P, t, X]), eS = (0, c.useMemo)(() => P || (null == t ? void 0 : t.includes(et)), [P, t, et]), eA = (0, c.useMemo)(() => !1 === eb.current ? n && (null == $ ? void 0 : $.value) ? BigInt(new i.Z($.value).mul(Math.pow(10, n.decimals)).floor().toFixed()) : BigInt(0) : u && (null == ee ? void 0 : ee.value) ? BigInt(new i.Z(ee.value).mul(Math.pow(10, u.decimals)).floor().toFixed()) : BigInt(0), [n, null == $ ? void 0 : $.value, u, null == ee ? void 0 : ee.value]), {hasEnoughBalance: eT} = (0, eo.Z)({
        fromTokenAddress: X,
        swapMode: eN,
        selectedQuote: en,
        fromValue: $
      }), ey = (0, c.useMemo)(() => {
        if (!1 !== eb.current || eT) return T;
      }, [T, eT]), ek = (0, c.useMemo)(() => "exact-fee" === ef ? "exactFee" : "maxCap", [ef]), eE = (0, c.useMemo)(() => {
        if (ex.includes("priorityFees")) return es.toString();
      }, [ex, es]), eF = (0, c.useMemo)(() => {
        if (ex.includes("jito")) return ep.toString();
      }, [ex, ep]), eI = (0, c.useMemo)(() => {
        if (ex.includes("nozomi")) return eh.toString();
      }, [ex, eh]), eR = (0, c.useMemo)(() => "auto" === eg ? {
        inputMint: X,
        outputMint: et,
        amount: Number(eA.toString()),
        taker: ey,
        swapMode: eN
      } : {
        inputMint: X,
        outputMint: et,
        amount: Number(eA.toString()),
        swapMode: eN,
        slippageBps: Math.ceil(100 * Number(er)),
        broadcastFeeType: ek,
        priorityFeeLamports: eE,
        jitoTipLamports: eF,
        nozomiTipLamports: eI,
        useWsol: L.useWSol,
        asLegacyTransaction: L.asLegacyTransaction,
        excludeDexes: ev,
        excludeRouters: ej,
        taker: ey
      }, [eg, X, ej, et, eA, ey, eN, er, ek, eE, eF, eI, L.useWSol, L.asLegacyTransaction, ev]), {refetch: eO, loading: e_, error: eM, lastRefreshTimestamp: eq, quoteMeta: eL, isFetching: eV} = (0, ei.n)(eR, !P);
      (0, c.useEffect)(() => {
        if ((U("selectedQuote", eL), !eL)) return void U(!1 === eb.current ? "toValue" : "fromValue", {
          floatValue: void 0,
          formattedValue: "",
          value: ""
        });
        if ((E.current = Date.now(), u)) if (!1 === eb.current) {
          let e = new i.Z(eL.quoteResponse.outAmount.toString() || "0").div(10 ** u.decimals), t = e.toFixed() || "";
          U("toValue", {
            formattedValue: t,
            value: t,
            floatValue: e ? e.toNumber() : e
          });
        } else {
          if (!n) return;
          let e = new i.Z(eL.quoteResponse.inAmount.toString() || "0").div(10 ** n.decimals), t = e.toFixed() || "";
          U("fromValue", {
            formattedValue: t,
            value: t,
            floatValue: e ? e.toNumber() : e
          });
        }
      }, [u, U, n, eL, e_]);
      let eC = (0, c.useMemo)(() => {
        if (eL) return (0, w.C)(eL);
      }, [eL]);
      (0, R.Gl)(e_ ? void 0 : eC, X, et);
      let [eU, eW] = (0, c.useState)(), eD = (0, c.useCallback)(async e => {
        try {
          if ((eW((0, r.jsx)(r.Fragment, {
            children: "Preparing swap"
          })), !e.quoteResponse.transaction)) throw Error("No transaction in quoteMeta");
          (await H({
            tx: e.quoteResponse.transaction,
            toastId: (0, N.P)(),
            fromPairTokenInfo: n,
            inAmount: e.quoteResponse.inAmount,
            toPairTokenInfo: u,
            outAmount: e.quoteResponse.outAmount,
            requestId: e.quoteResponse.requestId
          }), eW(void 0));
        } catch (e) {
          (eW(void 0), console.log("Error performing ultra swap", e));
        } finally {
          (await eO(), U("toastId", (0, N.P)()));
        }
      }, [eO, U, H, n, u]), eP = (0, c.useCallback)(async () => {
        if (!eL || !T) return void console.error("SwapForm3.onSubmit: missing quoteMeta/address!", {
          quoteMeta: eL,
          address: T
        });
        let e = {
          quoteResponseMeta: eL.original,
          wallet: null == y ? void 0 : y.name,
          inputAmountInUSD: void 0,
          excludedAmms: ev,
          slippage: er,
          orderParams: eR,
          profileMode: eg,
          quoteTimestamp: E.current,
          deltaFromQuoteMs: eq ? Date.now() - eq : void 0
        };
        (V.setAttributes(e), await eD(eL), setTimeout(() => {
          M();
        }, 1500), q([X, et, f.W4]), eO());
      }, [eL, T, null == y ? void 0 : y.name, er, eg, eq, ev, V, q, X, et, eO, eD, M, eR]), eZ = (0, j.V)();
      (0, x.Z)(() => {
        eZ[0] && eZ[1] && (n && n.address !== eZ[0].address && U("fromTokenAddress", eZ[0].address), u && u.address !== eZ[1].address && U("toTokenAddress", eZ[1].address));
      }, eZ);
      let eB = (0, v.Z)();
      (0, c.useEffect)(() => {
        eB && U("fromValue", {
          formattedValue: eB,
          value: eB,
          floatValue: Number(eB)
        });
      }, [U, eB]);
      let eG = (0, c.useCallback)(() => {
        let e;
        if (e_ || !u || !n) return;
        let {fromTokenAddress: t, toTokenAddress: r, fromValue: s} = K();
        (Number((null == s ? void 0 : s.floatValue) || 0) > 0 && eL && (e = !1 === eb.current ? (0, a.lt)(null == eL ? void 0 : eL.quoteResponse.outAmount, u.decimals).toString() : (0, a.lt)(null == eL ? void 0 : eL.quoteResponse.inAmount, n.decimals).toString()), W({
          fromTokenAddress: t,
          toTokenAddress: r,
          ...!1 === eb.current ? {
            fromValue: {
              value: e,
              floatValue: Number(e),
              formattedValue: e
            }
          } : {
            toValue: {
              value: e,
              floatValue: Number(e),
              formattedValue: e
            }
          }
        }), d({
          in: u,
          out: n
        }));
      }, [e_, u, n, K, eL, W, d]), eK = (0, c.useRef)(null), ez = (0, c.useCallback)(() => {
        (!eV && Number(eA.toString()) > 0 && eO(), q([X, et, f.W4]));
      }, [eO, X, et, q, eV, eA]);
      return (0, c.useMemo)(() => (0, r.jsxs)("div", {
        className: "flex flex-col gap-2",
        children: [(0, r.jsx)(O.h, {
          isFetching: eV,
          onRefresh: ez
        }), "manual" === eg && (0, r.jsx)(ec, {}), (0, r.jsxs)("div", {
          children: [(0, r.jsxs)("form", {
            onSubmit: C(eP),
            children: [(0, r.jsxs)("div", {
              className: "relative",
              children: [(0, r.jsxs)("div", {
                className: (0, b.cn)("flex min-h-[119px] flex-col space-y-2 rounded-xl border px-4 py-3", "focus-within:border-primary/50 focus-within:shadow-swap-input-dark", "border-neutral-800 bg-neutral-900"),
                children: [(0, r.jsxs)("div", {
                  className: "flex min-h-[26px] items-center justify-between",
                  children: [(0, r.jsx)("span", {
                    className: "text-xs",
                    children: (0, r.jsx)(r.Fragment, {
                      children: "Selling"
                    })
                  }), (0, r.jsxs)("div", {
                    className: "flex space-x-2",
                    children: [(0, r.jsx)(I.Z, {
                      control: D,
                      name: "fromTokenAddress",
                      useWSol: L.useWSol
                    }), n && (0, r.jsx)(o.oi, {
                      useWSol: L.useWSol && "manual" === eg,
                      disabled: P,
                      tokenInfo: n,
                      onBalanceChange: e => {
                        (eb.current = !1, U("fromValue", {
                          floatValue: e.toNumber(),
                          formattedValue: e.toFixed(),
                          value: e.toFixed()
                        }));
                      }
                    })]
                  })]
                }), (0, r.jsxs)("div", {
                  className: "flex flex-1 items-center justify-between gap-x-2",
                  children: [(0, r.jsxs)("div", {
                    ref: eK,
                    className: "flex min-h-[70px] flex-col justify-center gap-y-1",
                    children: [(0, r.jsx)(F, {
                      onTokenChange: d,
                      disableTokenSelect: ew,
                      getValues: K,
                      control: D,
                      name: "fromTokenAddress",
                      fromTokenInfo: n,
                      toTokenInfo: u
                    }), n && (0, r.jsx)(ea.H, {
                      tokenAddress: n.address
                    })]
                  }), (0, r.jsx)(A.Z, {
                    tokenInfo: n,
                    control: D,
                    disabled: P,
                    name: "fromValue",
                    loading: !!eb.current && e_,
                    onKeyDown: () => {
                      eb.current = !1;
                    },
                    placeholder: Z ? eN === s.j.ExactIn ? "0.00" : "" : "0.00"
                  })]
                })]
              }), (0, r.jsx)(S.Z, {
                isSubmitting: P,
                onReverseClick: eG
              }), (0, r.jsxs)("div", {
                className: (0, b.cn)("relative min-h-[109px]", "group flex flex-col space-y-1 rounded-xl border px-4 py-3", "focus-within:border-primary/50 focus-within:shadow-swap-input-dark", "border-neutral-850"),
                children: [(0, r.jsxs)("div", {
                  className: "flex items-center justify-between",
                  children: [(0, r.jsx)("div", {
                    className: "flex items-center gap-x-2",
                    children: (0, r.jsx)("span", {
                      className: "text-xs",
                      children: (0, r.jsx)(r.Fragment, {
                        children: "Buying"
                      })
                    })
                  }), (0, r.jsx)(I.Z, {
                    control: D,
                    name: "toTokenAddress",
                    useWSol: L.useWSol
                  })]
                }), (0, r.jsxs)("div", {
                  className: "flex flex-1 items-center justify-between gap-x-2",
                  children: [(0, r.jsxs)("div", {
                    ref: eK,
                    className: "flex min-h-[70px] flex-col justify-center gap-y-1",
                    children: [(0, r.jsx)(F, {
                      onTokenChange: d,
                      getValues: K,
                      disableTokenSelect: eS,
                      control: D,
                      name: "toTokenAddress",
                      fromTokenInfo: n,
                      toTokenInfo: u
                    }), u && (0, r.jsx)(ea.H, {
                      tokenAddress: u.address
                    })]
                  }), (0, r.jsx)(Q.Z, {
                    tokenInfo: u,
                    control: D,
                    disabled: "auto" === eg || P,
                    name: "toValue",
                    loading: !eb.current && e_,
                    onKeyDown: e => {
                      e.metaKey || e.ctrlKey || "Meta" === e.key || "Control" === e.key || "Alt" === e.key || "Shift" === e.key || (eb.current = !0);
                    },
                    onPaste: () => {
                      eb.current = !0;
                    },
                    placeholder: "0.00",
                    children: (0, r.jsx)(Y.t, {
                      quoteMeta: eL,
                      tokenAddress: et,
                      value: ee,
                      isLoading: !eb.current && e_
                    })
                  })]
                })]
              })]
            }), (0, r.jsx)("div", {
              className: "my-3",
              children: (0, r.jsx)(B, {
                quote: en,
                quoteLoading: e_
              })
            }), (0, r.jsx)(el, {
              swapMode: eN,
              simulationButtonText: eU,
              loading: e_,
              control: D,
              error: eM
            }), (0, r.jsx)(em, {
              swapMode: eN,
              onRefresh: ez
            })]
          }), n && u && en && (0, r.jsx)("div", {
            className: "mt-2",
            children: (0, r.jsx)(z, {
              quote: en,
              inputTokenInfo: n,
              outputTokenInfo: u,
              loading: e_,
              children: (0, r.jsx)(r.Fragment, {
                children: en && (0, r.jsx)(_.Q, {
                  quote: en,
                  loading: e_
                })
              })
            })
          })]
        })]
      }), [D, eM, K, C, n, Z, ew, P, eS, L.useWSol, e_, eG, ez, eP, d, u, eg, eL, en, U, eU, eN, et, ee]);
    };
  },
  36080: function (e, t, n) {
    n.d(t, {
      K: () => g
    });
    var r = n(9003), s = n(6906), o = n(85354), l = n(81302), a = n(63303), i = n(98517), u = n(72156), d = n(51551), c = n(88811), m = n(18086), x = n(14773), f = n(20966), p = n(29776).Buffer;
    class h extends Error {
      constructor(e, t, n) {
        (super(e), this.type = t, this.txid = n);
      }
    }
    function g(e) {
      let {signTransaction: t, address: n, isJupiterWallet: g} = (0, s.Os)(), v = (0, a.NL)();
      return (0, i.D)({
        mutationFn: async s => {
          var o, a, i, d;
          let {inAmount: v, outAmount: j, tx: b, toastId: N, fromPairTokenInfo: w, toPairTokenInfo: S, requestId: A} = s;
          if (!t || !n) throw new h("Wallet not connected, or missing wallet functions", "WALLET_SIGNING_FAILED");
          let T = Date.now();
          x.A.loadingSignature({
            id: N,
            isJupiter: g
          });
          let y = r.base64.decode(b), k = l.VersionedTransaction.deserialize(new Uint8Array(y)), E = await t(k);
          x.A.loading({
            id: N,
            title: "Confirming Transaction",
            description: "Waiting for transaction"
          });
          let F = w.symbol, I = S.symbol, R = Number((0, m.b)(v, w.decimals)), O = Number((0, m.b)(j, S.decimals));
          x.A.loadingSwap({
            id: N,
            from: {
              symbol: F,
              iconUrl: null != (o = w.logoURI) ? o : void 0,
              amount: R
            },
            to: {
              symbol: I,
              iconUrl: null != (a = S.logoURI) ? a : void 0,
              amount: O
            }
          });
          let _ = p.from(E.serialize()).toString("base64"), M = await f.E_.submitSwap(_, A), {signature: q, status: L} = M;
          if ((e.setAttributes({
            ultraSwapResponse: M
          }), "Failed" === L)) throw new h(M.error, "FAILED", q);
          (e.setAttributes({
            txid: q,
            ping: (Date.now() - T) / 1000
          }), e.logEvent(c.qt.SUCCESS), e.resetAttributes());
          let {totalInputAmount: V, totalOutputAmount: C} = M, U = new u.Z(V).div(Math.pow(10, w.decimals)), W = new u.Z(C).div(Math.pow(10, S.decimals));
          x.A.successSwap({
            id: N,
            tx: q,
            from: {
              symbol: F,
              iconUrl: null != (i = w.logoURI) ? i : void 0,
              amount: U.toNumber()
            },
            to: {
              symbol: I,
              iconUrl: null != (d = S.logoURI) ? d : void 0,
              amount: W.toNumber()
            }
          });
        },
        onError: async (t, n) => {
          let {toastId: r, requestId: s} = n;
          if ((console.log("error", t), t instanceof Response)) try {
            let n = await t.json();
            (e.setAttributes({
              swapError: n
            }), console.log("swapError", n), e.logEvent(c.qt.FAILED), e.resetAttributes(), x.A.error({
              id: r,
              tx: n.txid ? n.txid : void 0,
              title: "Something Went Wrong",
              error: n.error
            }));
            return;
          } catch (e) {
            x.A.error({
              id: r,
              title: "Something Went Wrong",
              error: e
            });
          }
          if ((e.setAttributes({
            ultraSwapError: t instanceof Error ? t.message : JSON.stringify(t)
          }), t instanceof h)) {
            (t.txid ? (e.setAttributes({
              ultraSwapTxId: t.txid
            }), x.A.error({
              id: r,
              tx: t.txid,
              title: "Transaction Failed"
            })) : x.A.error({
              id: r,
              title: "Transaction Failed",
              error: t
            }), e.logEvent(c.qt.FAILED), e.resetAttributes());
            return;
          }
          if (t instanceof o.PY) {
            (e.logEvent(c.qt.REJECTED), e.resetAttributes(), x.A.error({
              id: r,
              title: "Transaction Failed",
              error: "Wallet signing failed"
            }), f.E_.postReject(s));
            return;
          }
          x.A.error({
            id: r,
            title: "Something Went Wrong",
            error: t
          });
        },
        onSuccess: () => {
          n && v.invalidateQueries(d.F.jupPortfolio(n));
        }
      });
    }
  }
}]);
