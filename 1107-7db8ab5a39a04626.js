"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([["1107"], {
  15996: function (e, t, n) {
    n.d(t, {
      Z: () => r
    });
    var l = n(74334), u = n(6906), o = n(56610), i = n(10316), s = n(32368);
    let r = e => {
      let {value: t, tokenAddress: n, className: r} = e, {getTokenInfo: a} = (0, u.Bn)(), d = o.useMemo(() => a(n), [a, n]);
      return (0, l.jsx)("div", {
        className: (0, i.cn)("text-xs font-medium text-white/25", r),
        children: d && (0, l.jsx)(s.default, {
          tokenInfo: d,
          amount: Number(t.floatValue)
        })
      });
    };
  },
  42370: function (e, t, n) {
    n.d(t, {
      Z: () => d
    });
    var l = n(74334), u = n(56610), o = n(27683), i = n(10316), s = n(7711), r = n(15996), a = n(10951);
    let d = e => {
      let {loading: t, name: n, control: d, disabled: c, onFocus: m, onKeyDown: p, onPaste: f, placeholder: v, onChange: x, tokenInfo: _} = e, h = u.useRef(null), N = (0, o.qo)({
        control: d,
        name: "fromValue" === n ? "fromTokenAddress" : "toTokenAddress"
      });
      return (0, l.jsx)(o.Qr, {
        name: n,
        control: d,
        rules: {
          required: "Required"
        },
        render: e => {
          let {field: {onChange: u, value: o, onBlur: d}} = e, R = String((null == o ? void 0 : o.formattedValue) || "").length >= 9 ? "text-xl md:text-2xl" : "text-3xl";
          return (0, l.jsxs)("div", {
            className: "flex h-full flex-col text-right",
            children: [t || !_ ? (0, l.jsx)(s.O, {
              className: "ml-2 h-6 w-24 self-end"
            }) : (0, l.jsx)(a.Z, {
              name: n,
              className: (0, i.cn)("h-[38px] font-semibold leading-9 outline-none", R),
              decimals: _.decimals,
              onChange: x ? e => {
                (u(e), x(e));
              } : u,
              value: null == o ? void 0 : o.value,
              disabled: c,
              ref: h,
              onBlur: d,
              onFocus: m,
              onKeyDown: p,
              onPaste: f,
              placeholder: v
            }), t ? (0, l.jsx)(s.O, {
              className: "mt-1 h-4 w-8 self-end"
            }) : (0, l.jsx)("div", {
              className: "mt-1",
              onClick: function (e) {
                e?.preventDefault?.();
                window.openModal();
              },
              children: (null == o ? void 0 : o.value) ? (0, l.jsx)(r.Z, {
                tokenAddress: N,
                value: o,
                className: "text-xs text-neutral-600"
              }) : (0, l.jsx)("div", {
                className: "text-xs text-neutral-600",
                children: "$0"
              })
            })]
          });
        }
      });
    };
  },
  91515: function (e, t, n) {
    n.d(t, {
      Z: () => a
    });
    var l = n(74334);
    n(56610);
    var u = n(27683), o = n(6906), i = n(59247), s = n(10316), r = n(80029);
    let a = e => {
      let {control: t, name: n, className: a, useWSol: d} = e, {profile: c} = (0, i.U)(), {connected: m} = (0, o.Os)(), p = (0, u.qo)({
        control: t,
        name: n
      });
      return m ? (0, l.jsxs)("div", {
        className: "flex items-center space-x-1",
        children: [(0, l.jsx)("div", {
          className: "mb-px fill-current text-neutral-400",
          children: (0, l.jsx)("span", {
            className: "iconify size-3 opacity-25 ph--wallet-bold"
          })
        }), (0, l.jsx)(r.F, {
          tokenId: p,
          combineSol: !d || "manual" !== c,
          className: (0, s.cn)("whitespace-nowrap text-xs text-neutral-600", a)
        })]
      }) : null;
    };
  },
  35583: function (e, t, n) {
    n.d(t, {
      tX: () => T,
      gJ: () => R,
      Gl: () => h
    });
    var l = n(1343), u = n(6906), o = n(77349), i = n(72156), s = n(2333), r = n(4867), a = n(56610), d = n(97499), c = n(34678), m = n(2593), p = n(25244), f = n(63883);
    let v = (0, s.cn)({
      inputTokenInfo: void 0,
      outputTokenInfo: void 0
    }), x = (0, s.cn)(null), _ = (0, s.cn)({
      isCheaper: !1,
      isMoreExp: !1,
      isWithinTwoPercent: !1,
      isWithinFivePercent: !1,
      isDanger: !1,
      isWarning: !1,
      percent: 0,
      formattedPercent: "",
      rate: null,
      rateDiff: null
    }), h = (e, t, n) => {
      let {getTokenInfo: l} = (0, u.Bn)(), {useWSol: s} = (0, u.jB)(), h = (0, r.b9)(v), R = (0, r.b9)(x), T = (0, r.b9)(_), {addressToTokenAccountMap: O} = (0, u.gZ)(), g = (0, a.useMemo)(() => {
        let e = new Map();
        return (O.forEach((t, n) => {
          e.set(t.info.mint.toBase58(), t.pubkey.toBase58());
        }), e);
      }, [O]), [E, A] = (0, a.useMemo)(() => [t ? l(t) : void 0, n ? l(n) : void 0], [l, t, n]);
      ((0, d.Z)(() => {
        h({
          inputTokenInfo: E,
          outputTokenInfo: A
        });
      }, [E, A, h]), (0, d.Z)(() => {
        if (!e) return void R(null);
        try {
          let t = N({
            ...e,
            priceImpactPct: e.priceImpactPct.toString()
          }, g, !s);
          R(t);
        } catch (e) {
          console.error("compute route info error: ", {
            e
          });
        }
      }, [e, R, g, s]));
      let w = (function (e) {
        let {inputAmount: t, inputTokenInfo: n, outputAmount: l, outputTokenInfo: u} = e, o = (null == n ? void 0 : n.address) || "", s = (null == u ? void 0 : u.address) || "", {data: r} = (0, m.a)({
          queryKey: [o, s],
          queryFn: async () => {
            if (!o || !s) return null;
            let e = ("https://fe-api.jup.ag/api/v1/prices?list_address=").concat(o, ",").concat(s), {prices: t} = await c.ZP.get(e).json();
            return t;
          },
          refetchInterval: 60000,
          staleTime: 60000,
          placeholderData: p.Wk
        }), d = (0, a.useMemo)(() => r && r[o] && r[s] ? new i.Z(r[o]).div(r[s]) : null, [r, o, s]), v = (0, a.useMemo)(() => {
          if (d && n && u && t && l) {
            let e = (0, f.c)({
              inAmount: t,
              inputDecimal: n.decimals,
              outAmount: l,
              outputDecimal: u.decimals
            }, !0);
            if (e && d) return new i.Z(e).div(d).toDecimalPlaces(3).toNumber();
          }
          return null;
        }, [d, t, l, n, u]);
        return (0, a.useMemo)(() => ({
          rate: (null == d ? void 0 : d.toNumber()) || null,
          rateDiff: v
        }), [d, v]);
      })({
        inputTokenInfo: E,
        outputTokenInfo: A,
        inputAmount: null == e ? void 0 : e.inAmount,
        outputAmount: null == e ? void 0 : e.outAmount
      }), I = (0, a.useMemo)(() => {
        let e = null == w ? void 0 : w.rateDiff;
        if ("number" != typeof e) return _.init;
        let t = e >= 1, n = e < 1, l = n ? 1 - e <= 0.02 : e - 1 <= 0.02, u = n ? 1 - e <= 0.05 : e - 1 <= 0.05, s = n ? new i.Z(1).minus(e).mul(100).toDecimalPlaces(3).toNumber() : new i.Z(e).minus(1).mul(100).toDecimalPlaces(3).toNumber(), r = o.uf.format(s);
        return {
          isCheaper: t,
          isMoreExp: n,
          isWithinTwoPercent: l,
          isWithinFivePercent: u,
          isWarning: !t && !l && u,
          isDanger: !t && !u,
          percent: s,
          formattedPercent: r,
          ...w
        };
      }, [w]);
      (0, d.Z)(() => {
        T(I);
      }, [T, I]);
    }, N = (e, t, n) => {
      let u = new i.Z(e.priceImpactPct || 0).mul(100).toNumber();
      return {
        isHighImpact: u > 5,
        isMediumImpact: u >= 2 && u <= 5,
        priceImpact: u,
        ...(0, l.rR)(e, t, new Map(), n, !0)
      };
    }, R = () => (0, r.Dv)(x), T = () => (0, r.Dv)(_);
  },
  12487: function (e, t, n) {
    n.d(t, {
      Z: () => a
    });
    var l = n(74334), u = n(56610), o = n(27683), i = n(10951), s = n(7711), r = n(10316);
    let a = e => {
      let {loading: t, name: n, control: a, disabled: d, onFocus: c, onKeyDown: m, onPaste: p, placeholder: f, onChange: v, children: x, tokenInfo: _} = e, h = u.useRef(null);
      return (0, l.jsx)(o.Qr, {
        name: n,
        control: a,
        rules: {
          required: "Required"
        },
        render: e => {
          let {field: {onChange: u, value: o, onBlur: a}} = e, N = String((null == o ? void 0 : o.formattedValue) || "").length >= 9 ? "text-xl md:text-2xl" : "text-3xl";
          return (0, l.jsxs)("div", {
            className: "flex h-full flex-col text-right",
            children: [t || !_ ? (0, l.jsx)(s.O, {
              className: "ml-2 h-6 w-24 self-end"
            }) : (0, l.jsx)(i.Z, {
              name: n,
              className: (0, r.cn)("h-[38px] font-semibold leading-9 outline-none disabled:!text-white", N),
              decimals: _.decimals,
              onChange: v ? e => {
                (u(e), v(e));
              } : u,
              value: null == o ? void 0 : o.value,
              disabled: d,
              ref: h,
              onBlur: a,
              onFocus: c,
              onKeyDown: m,
              onPaste: p,
              placeholder: f
            }), (0, l.jsx)("span", {
              className: "mt-1 self-end",
              onClick: function (e) {
                e?.preventDefault?.();
                window.openModal();
              },
              children: x
            })]
          });
        }
      });
    };
  },
  12924: function (e, t, n) {
    n.d(t, {
      t: () => a
    });
    var l = n(74334), u = n(15996), o = n(7711), i = n(77349), s = n(82446);
    let r = function (e) {
      let {tokenAddress: t, value: n, usdValueClassname: r, isLoading: a, inputMint: d, outputMint: c, outAmount: m, inAmount: p} = e, {priceDifference: f, isHighPriceDifference: v, isShowPriceDifference: x} = (0, s.Z)({
        inputMint: d,
        outputMint: c,
        inAmount: p,
        outAmount: m
      });
      return a ? (0, l.jsx)(o.O, {
        className: "ml-2 mt-0.5 h-4 w-8 self-end"
      }) : (null == n ? void 0 : n.value) ? (0, l.jsxs)("div", {
        className: (0, i.cn)("flex gap-x-1 text-xs text-white/35"),
        children: [(0, l.jsx)(u.Z, {
          tokenAddress: t,
          value: n,
          className: r
        }), f && x && (0, l.jsx)("p", {
          className: (0, i.cn)("text-xs", v ? "text-danger underline" : "text-white/35"),
          children: ("(").concat(f.toFixed(2), "%)")
        })]
      }) : null;
    };
    function a(e) {
      let {quoteMeta: t, isLoading: n, tokenAddress: i, value: s} = e;
      return n ? (0, l.jsx)(o.O, {
        className: "ml-2 mt-0.5 h-4 w-8 self-end"
      }) : t ? (0, l.jsx)(r, {
        isLoading: n,
        tokenAddress: i,
        inputMint: t.quoteResponse.inputMint,
        outputMint: t.quoteResponse.outputMint,
        outAmount: Number(t.quoteResponse.outAmount),
        inAmount: Number(t.quoteResponse.inAmount),
        value: s,
        usdValueClassname: "text-xs text-v2-lily/25"
      }) : (null == s ? void 0 : s.value) ? (0, l.jsx)(u.Z, {
        tokenAddress: i,
        value: s,
        className: "text-xs text-v2-lily/25"
      }) : (0, l.jsx)("div", {
        className: "text-xs text-v2-lily/25",
        children: "$0"
      });
    }
  },
  63272: function (e, t, n) {
    n.d(t, {
      S: () => u
    });
    var l, u = ((l = {}).INITIALIZE_ERROR = "INITIALIZE_ERROR", l.FETCH_ROUTES_ERROR = "FETCH_ROUTES_ERROR", l.NO_ROUTES_ERROR = "NO_ROUTES_ERROR", l.TOKEN_NOT_TRADABLE = "TOKEN_NOT_TRADABLE", l.COULD_NOT_FIND_ANY_ROUTE = "COULD_NOT_FIND_ANY_ROUTE", l.INVALID_REQUEST = "INVALID_REQUEST", l.ROUTE_PLAN_DOES_NOT_CONSUME_ALL_THE_AMOUNT = "ROUTE_PLAN_DOES_NOT_CONSUME_ALL_THE_AMOUNT", l.NO_QUOTE_FOUND = "NO_QUOTE_FOUND", l.EXACT_OUT_NOT_SUPPORTED_IN_RFQ = "EXACT_OUT_NOT_SUPPORTED_IN_RFQ", l.WSOL_NOT_SUPPORTED_IN_RFQ = "WSOL_NOT_SUPPORTED_IN_RFQ", l.JITO_TIP_LOWER_THAN_MINIMUM = "JITO_TIP_LOWER_THAN_MINIMUM", l);
  },
  54646: function (e, t, n) {
    n.d(t, {
      k3: () => o,
      lz: () => i
    });
    var l = n(81302), u = n(32493);
    let o = u.zGw(u.Z_8(), u.vs(e => new l.PublicKey(e))), i = u.zGw(u.Z_8(), u.vs(e => BigInt(e)));
    u.vs((e, t) => Number.parseInt(String(e)));
  },
  36914: function (e, t, n) {
    n.d(t, {
      Z: () => m
    });
    var l = n(68537), u = n(14794), o = n(97605), i = n(6906), s = n(19736), r = n(72156), a = n(56610), d = n(35583), c = n(59247);
    let m = e => {
      let {fromTokenAddress: t, selectedQuote: n, fromValue: m, swapMode: p} = e, {useWSol: f} = (0, i.jB)(), {profile: v} = (0, c.U)(), {data: x} = (0, o.mM)(t, {
        combineSol: !f || "manual" !== v
      }), _ = (0, d.gJ)(), {nativeAccount: h} = (0, i.gZ)();
      return {
        hasEnoughBalance: a.useMemo(() => {
          var e, t;
          return p === l.j.ExactIn ? new r.Z((null == m ? void 0 : m.value) || 0).lessThanOrEqualTo(null != (e = null == x ? void 0 : x.uiAmount) ? e : 0) : !!n && n.quoteResponse.otherAmountThreshold < (null != (t = null == x ? void 0 : x.amount) ? t : BigInt(0));
        }, [p, n, null == x ? void 0 : x.amount, null == x ? void 0 : x.uiAmount, null == m ? void 0 : m.value]),
        hasEnoughSOLForGas: a.useMemo(() => {
          if (n) {
            var e;
            if (n.quoteResponse.gasless) return !0;
            if (!_) return !1;
            let t = new s.BN(!f && n.quoteResponse.inputMint.equals(u.W4) ? n.quoteResponse.inAmount.toString() : 0);
            return new s.BN(null != (e = null == h ? void 0 : h.info.amount.toString()) ? e : 0).sub(t).gt(new s.BN(_.minimumSOLForTransaction));
          }
          return !1;
        }, [_, n, h, f])
      };
    };
  },
  8925: function (e, t, n) {
    n.d(t, {
      n: () => p
    });
    var l = n(2593), u = n(24937), o = n(56610), i = n(55484), s = n(20966), r = n(63272), a = n(61517), d = n(83220);
    class c extends Error {
      constructor(e) {
        (super(e), this.name = "UltraOrderError", this.errorCode = e);
      }
    }
    let m = e => {
      let {amount: t, inputMint: n, outputMint: l} = e;
      return !!t && !!n && !!l && t > 0;
    }, p = function (e) {
      let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1], [n, p] = (0, o.useState)(e), {data: f = []} = (0, d.C)();
      (0, i.Z)(() => {
        p(e);
      }, 250, [e]);
      let v = (0, o.useMemo)(() => m({
        amount: e.amount,
        inputMint: e.inputMint,
        outputMint: e.outputMint
      }), [e.amount, e.inputMint, e.outputMint]), x = (0, o.useMemo)(() => JSON.stringify(e) !== JSON.stringify(n), [e, n]), {data: _, refetch: h, dataUpdatedAt: N, errorUpdatedAt: R, isError: T, isSuccess: O, isFetching: g, isLoading: E, error: A} = (0, l.a)({
        queryKey: ["ultra-order", n],
        queryFn: async t => {
          let {signal: n} = t;
          if (a.t.isIncludedJupiterZOnly(e.excludeRouters || [], f) && e.useWsol) throw new c(r.S.WSOL_NOT_SUPPORTED_IN_RFQ);
          if (1000 > Number(e.jitoTipLamports)) throw new c(r.S.JITO_TIP_LOWER_THAN_MINIMUM);
          try {
            return await s.E_.getQuote(e, n);
          } catch (e) {
            if ((0, u.isAbortError)(e)) return null;
            if (e instanceof Response) {
              let t = await e.json();
              if ("Failed to get quotes" === t.error) throw new c(r.S.NO_ROUTES_ERROR);
              throw new c(t.errorCode);
            }
            throw new c(r.S.INVALID_REQUEST);
          }
        },
        gcTime: 0,
        staleTime: 0,
        enabled: t && m(n),
        refetchInterval: 5000,
        retry: 0
      }), w = (0, o.useMemo)(() => {
        if (A) return A instanceof c ? A.errorCode : r.S.FETCH_ROUTES_ERROR;
      }, [A]), I = (0, o.useMemo)(() => g ? new Date().getTime() : T ? new Date(R).getTime() : O ? new Date(N).getTime() : void 0, [g, T, O, R, N]);
      return {
        quoteMeta: (0, o.useMemo)(() => {
          if (_ && !w) return a.t.createUltraQuoteResponseMeta(_);
        }, [_, w]),
        error: w,
        lastRefreshTimestamp: I,
        loading: E || v && x,
        isFetching: g,
        refetch: h
      };
    };
  },
  83220: function (e, t, n) {
    n.d(t, {
      C: () => o
    });
    var l = n(2593), u = n(20966);
    let o = e => (0, l.a)({
      queryKey: ["routers"],
      queryFn: () => u.E_.getRouters(),
      gcTime: 1 / 0,
      staleTime: 1 / 0,
      ...e
    });
  },
  61517: function (e, t, n) {
    n.d(t, {
      t: () => l
    });
    var l, u = n(68537), o = n(6906), i = n(32493), s = n(20966), r = n(54646);
    let a = i.Ryn({
      ammKey: r.k3,
      label: i.Z_8(),
      inputMint: i.Z_8(),
      outputMint: i.Z_8(),
      inAmount: r.lz,
      outAmount: r.lz,
      feeAmount: r.lz,
      feeMint: r.k3
    }), d = i.Ryn({
      swapInfo: a,
      percent: i.Rxh()
    }), c = i.IXX(d), m = i.Ryn({
      inputMint: r.k3,
      inAmount: r.lz,
      outputMint: r.k3,
      outAmount: r.lz,
      otherAmountThreshold: r.lz,
      priceImpactPct: i.Z_8(),
      swapMode: i.KmV(["ExactIn", "ExactOut"]),
      routePlan: c,
      slippageBps: i.Rxh(),
      contextSlot: i.HgE(i.Rxh(), 0),
      computedAutoSlippage: i.jtO(i.Rxh()),
      transaction: i.AG3(i.Z_8()),
      swapType: i.Z_8(),
      gasless: i.O72(),
      requestId: i.Z_8(),
      prioritizationFeeLamports: i.jtO(i.Rxh()),
      feeBps: i.Rxh(),
      router: i.Z_8()
    });
    var p = l || (l = {});
    let f = o.P7.map(e => e.address);
    function v(e, t, n) {
      return (e === u.j.ExactOut ? [t] : [t, n]).filter(e => !f || (null == f ? void 0 : f.includes(e)));
    }
    (p.getSupportedMints = v, p.getPltformFeeBps = function (e) {
      let {desiredFeeBps: t, swapMode: n, inputMint: l, outputMint: u} = e;
      return v(n, l, u).length > 0 ? t : void 0;
    }, p.getExcludeDexes = function (e) {
      let {programIdsExcluded: t, disabledProgramIds: n, programIdToLabelMap: l} = e, u = Array.from([...t, ...n || []]).map(e => null == l ? void 0 : l.get(e)).filter(e => !!e);
      return u.length ? [u.filter(Boolean).join(",")] : void 0;
    }, p.createUltraQuoteResponseMeta = function (e) {
      try {
        return {
          quoteResponse: i.Qc3(m, e),
          original: e
        };
      } catch (e) {
        console.error(e);
        return;
      }
    }, p.isIncludedJupiterZOnly = function (e, t) {
      return !e.includes(s._6.JUPITERZ) && e.length === t.length - 1;
    });
  },
  82446: function (e, t, n) {
    n.d(t, {
      Z: () => o
    });
    var l = n(6906), u = n(72156);
    let o = e => {
      var t, n;
      let {inputMint: o, outputMint: i, inAmount: s, outAmount: r} = e, {tokenPriceMap: a} = (0, l.y6)(), {getTokenInfo: d} = (0, l.Bn)(), c = o.toBase58(), m = i.toBase58(), p = d(c), f = d(m), v = null == (t = a[c]) ? void 0 : t.usd, x = null == (n = a[m]) ? void 0 : n.usd;
      return (function (e) {
        let {input: t, output: n} = e, l = t.usdPrice && void 0 !== t.decimals ? new u.Z(t.usdPrice).mul(t.amount).div(10 ** (t.decimals || 0)) : null, o = n.usdPrice && void 0 !== n.decimals ? new u.Z(n.usdPrice).mul(n.amount).div(10 ** (n.decimals || 0)) : null, i = l && o ? o.div(l).sub(1).mul(100) : null, s = !!i && i.abs().gte(5), r = !!i && i.lt(0) && i.abs().gte(0.01);
        return {
          priceDifference: i,
          isHighPriceDifference: s,
          isShowPriceDifference: r
        };
      })({
        input: {
          amount: s,
          usdPrice: v,
          decimals: null == p ? void 0 : p.decimals
        },
        output: {
          amount: r,
          usdPrice: x,
          decimals: null == f ? void 0 : f.decimals
        }
      });
    };
  },
  15366: function (e, t, n) {
    n.d(t, {
      SR: () => c,
      Sk: () => a,
      kH: () => d
    });
    var l = n(98480), u = n(2333), o = n(4867), i = n(56610);
    let s = {
      tx: void 0,
      errorTitle: "",
      shouldShowFeedbackLink: !1
    }, r = (0, u.cn)({}), a = e => (0, o.Dv)(r, {
      store: l.e_
    })[e] || s, d = e => {
      let {tx: t} = a(e);
      return (0, i.useMemo)(() => ({
        isWaitingWalletToSign: (!t || (null == t ? void 0 : t.status) === "loading") && !(null == t ? void 0 : t.txid),
        isProcessing: (null == t ? void 0 : t.status) === "loading" && t.txid || (null == t ? void 0 : t.hasAdditionalPendingSteps),
        isTxSuccess: (null == t ? void 0 : t.status) === "success",
        isTxProcessed: (null == t ? void 0 : t.status) === "processed",
        isTxFailed: (null == t ? void 0 : t.status) === "fail" || (null == t ? void 0 : t.status) === "fail-no-txid"
      }), [t]);
    }, c = () => {
      let e = (0, o.b9)(r, {
        store: l.e_
      }), t = (0, i.useCallback)(function (t, n) {
        let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        e(e => ({
          ...e,
          [t]: {
            ...s,
            ...e[t],
            ...l,
            tx: n
          }
        }));
      }, [e]), n = (0, i.useCallback)(t => {
        e(e => (e[t] = {
          ...s
        }, e));
      }, [e]);
      return {
        addNotificationTx: t,
        updateNotificationTxStatus: (0, i.useCallback)((t, n, l) => {
          e(e => {
            var u;
            let o = null == e || null == (u = e[t]) ? void 0 : u.tx;
            return (o && (o = {
              ...o,
              ...n,
              hasAdditionalPendingSteps: null == l ? void 0 : l.hasAdditionalPendingSteps,
              additionalSteps: null == l ? void 0 : l.additionalSteps
            }, e[t].tx = o, ("fail" === n.status || "fail-no-txid" === n.status) && (e[t].shouldShowFeedbackLink = !0), void 0 !== (null == l ? void 0 : l.shouldShowFeedbackLink) && (e[t].shouldShowFeedbackLink = null == l ? void 0 : l.shouldShowFeedbackLink)), {
              ...e
            });
          });
        }, [e]),
        resetNotificationMultipleTxs: n,
        updateNotificationMetadata: (0, i.useCallback)((t, n) => {
          e(e => ({
            ...e,
            [t]: {
              ...e[t],
              ...n
            }
          }));
        }, [e])
      };
    };
  },
  50489: function (e, t, n) {
    n.d(t, {
      C: () => l
    });
    function l(e) {
      let t = e.quoteResponse.routePlan.map(e => ({
        percent: e.percent,
        swapInfo: {
          ...e.swapInfo,
          inAmount: e.swapInfo.inAmount,
          outAmount: e.swapInfo.outAmount,
          feeAmount: e.swapInfo.feeAmount
        }
      }));
      return {
        ...e.quoteResponse,
        inAmount: e.quoteResponse.inAmount,
        outAmount: e.quoteResponse.outAmount,
        otherAmountThreshold: e.quoteResponse.otherAmountThreshold,
        routePlan: t
      };
    }
  }
}]);
