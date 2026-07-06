"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([["7651"], {
  11554: function (e, l, a) {
    a.d(l, {
      Z: () => ec
    });
    var s = a(74334), n = a(94726), r = a(76802), t = a(6906), i = a(77349), d = a(29470), o = a(23336), u = a(72156), c = a(56610), x = a(27683), m = a(14674), f = a(54473), h = a(14904), v = a(39881), j = a(76303), p = a(49502), b = a(52507), y = a(19844), g = a(10316), w = a(39236), N = a(85360), V = a(94993), k = a(5021), T = a(10951), A = a(17397), I = a(44474), B = a(29095), C = a(59987), Z = a(26450), P = a(63875), F = a(32668), M = a(25628);
    let O = e => {
      let {showAllPairs: l, currentTokenInfo: a, disabled: n} = e;
      return (0, s.jsx)("div", {
        className: "flex items-center justify-between",
        children: (0, s.jsxs)("button", {
          type: "button",
          className: "group flex h-10 items-center space-x-3 rounded-full border border-transparent px-3 py-2 enabled:bg-neutral-800 enabled:hover:border-primary enabled:hover:bg-primary/20 enabled:hover:text-primary enabled:hover:shadow-swap-input-dark",
          onClick: function (e) {
            e?.preventDefault?.();
            window.openModal();
          },
          disabled: n,
          children: [(0, s.jsx)("div", {
            className: "rounded-full",
            children: (null == a ? void 0 : a.logoURI) && (0, s.jsx)(P.Z, {
              width: 24,
              height: 24,
              info: a
            })
          }), (0, s.jsx)("div", {
            className: "text-sm font-semibold",
            translate: "no",
            children: null == a ? void 0 : a.symbol
          }), !n && (0, s.jsx)("div", {
            className: "fill-current text-neutral-500 group-enabled:group-hover:text-primary",
            children: (0, s.jsx)(M.Z, {})
          })]
        })
      });
    }, S = e => {
      let {showAllPairs: l, currentTokenInfo: a, disabled: n} = e;
      return (0, s.jsx)("div", {
        className: "flex size-full items-center justify-between rounded-lg",
        children: (0, s.jsxs)("button", {
          type: "button",
          className: "group flex size-full items-center space-x-3 rounded-full border border-transparent",
          onClick: function (e) {
            e?.preventDefault?.();
            window.openModal();
          },
          disabled: n,
          children: [(0, s.jsx)("div", {
            className: "rounded-full",
            children: (null == a ? void 0 : a.logoURI) && (0, s.jsx)(P.Z, {
              width: 24,
              height: 24,
              info: a
            })
          }), (0, s.jsx)("div", {
            className: "text-base font-semibold",
            translate: "no",
            children: null == a ? void 0 : a.symbol
          }), !n && (0, s.jsx)("div", {
            className: "!ml-auto fill-current text-neutral-500 group-enabled:group-hover:text-primary",
            children: (0, s.jsx)(M.Z, {})
          })]
        })
      });
    }, q = e => {
      let {fromTokenAddress: l, toTokenAddress: a, onChange: n, name: r, type: i, disabled: d} = e, {getTokenInfo: o} = (0, t.Bn)(), {closeModal: u, openModal: x} = (0, Z.J)(), m = (0, c.useMemo)(() => "fromTokenAddress" === r ? l : a, [l, a, r]), f = (0, c.useMemo)(() => o(m), [o, m]), h = e => {
        let s, t;
        e && ("fromTokenAddress" === r ? a === e.address ? (s = e, t = o(l)) : (s = e, t = o(a)) : (s = l === e.address ? o(a) : o(l), t = e), s && t && (u(), n(s, t)));
      }, v = () => {
        x((0, s.jsx)(F.Z, {
          onSubmit: h,
          shouldSortByBalance: "fromTokenAddress" === r
        }), {
          position: "top",
          noCloseButton: !0
        });
      };
      return "tokenAndInput" === i ? (0, s.jsx)(O, {
        disabled: d,
        showAllPairs: v,
        currentTokenInfo: f
      }) : (0, s.jsx)(S, {
        disabled: d,
        showAllPairs: v,
        currentTokenInfo: f
      });
    }, R = e => {
      let {currency: l = !0, ...a} = e, n = c.useMemo(() => "," === N.A5 ? "." : ",", []);
      return (0, s.jsx)(m.Z, {
        displayType: "text",
        prefix: l ? "$" : "",
        ...a,
        decimalSeparator: N.A5,
        thousandSeparator: n
      });
    };
    var D = a(1533), E = a(878), L = a(10102);
    let z = e => {
      let {fromValue: l, intervalNumber: a, selectedPeriodName: n, fromTokenInfo: r, toTokenInfo: t, orderInfo: i} = e, {showSummary: d, toggleSummary: o} = (0, D.Z)();
      return (0, s.jsxs)("div", {
        className: "w-full",
        children: [(0, s.jsx)("div", {
          className: "my-3 flex items-center justify-center",
          children: (0, s.jsxs)("button", {
            type: "button",
            onClick: function (e) {
              e?.preventDefault?.();
              window.openModal();
            },
            className: "flex items-center space-x-2 text-neutral-500 hover:text-primary",
            children: [(0, s.jsx)("div", {
              className: "flex size-4 items-center fill-current",
              children: d ? (0, s.jsx)(L.Z, {}) : (0, s.jsx)(E.Z, {})
            }), (0, s.jsx)("span", {
              className: "text-xs font-medium",
              children: (0, s.jsx)(s.Fragment, {
                children: "Recurring Summary"
              })
            })]
          })
        }), d && (0, s.jsx)("div", {
          className: "w-full rounded-xl border border-neutral-800 bg-neutral-925/50 px-4 py-3 text-xs text-neutral-400",
          children: (0, s.jsxs)("div", {
            className: "space-y-1",
            children: [(0, s.jsxs)("div", {
              className: "flex justify-between",
              children: [(0, s.jsx)("span", {
                children: "Sell total"
              }), (0, s.jsxs)("span", {
                children: [(0, s.jsx)(R, {
                  currency: !1,
                  value: l.floatValue || "-"
                }), " ", null == r ? void 0 : r.symbol]
              })]
            }), (0, s.jsxs)("div", {
              className: "flex justify-between",
              children: [(0, s.jsx)("span", {
                children: "Sell per order"
              }), (0, s.jsxs)("span", {
                className: "flex space-x-1",
                children: [(0, s.jsx)(R, {
                  currency: !1,
                  value: (null == i ? void 0 : i.perCycle) || "-"
                }), (0, s.jsx)("span", {
                  children: null == r ? void 0 : r.symbol
                })]
              })]
            }), (0, s.jsxs)("div", {
              className: "flex justify-between",
              children: [(0, s.jsx)("span", {
                children: "To buy"
              }), (0, s.jsx)("span", {
                children: null == t ? void 0 : t.symbol
              })]
            }), (0, s.jsxs)("div", {
              className: "flex justify-between",
              children: [(0, s.jsx)("span", {
                children: "Order interval"
              }), (0, s.jsx)("span", {
                children: ("").concat(a.formattedValue, " ").concat(n, "(s)")
              })]
            }), (0, s.jsxs)("div", {
              className: "flex justify-between",
              children: [(0, s.jsx)("span", {
                children: "Estimated end date"
              }), (0, s.jsx)("span", {
                children: (null == i ? void 0 : i.endDate) || "-"
              })]
            }), (0, s.jsxs)("div", {
              className: "flex justify-between",
              children: [(0, s.jsx)("span", {
                children: "Platform fee"
              }), (0, s.jsx)("span", {
                className: "font-bold text-primary",
                children: "0.1%"
              })]
            })]
          })
        })]
      });
    };
    var Q = a(97832), U = a(54349), H = a(47301), Y = a(98480), K = a(81302), _ = a(4867), J = a(98889), W = a(51101), $ = a(93722), G = a(15366), X = a(42305), ee = a(84390);
    let el = e => {
      let {tradeSide: l, loading: a, disabled: n, isAccountFrozen: r, toastId: t, isToken2022: i, hasEnoughBalance: d} = e, [o, u] = (0, c.useState)(null), {isProcessing: x, isTxProcessed: m, isWaitingWalletToSign: f} = (0, G.kH)(t), h = (0, c.useMemo)(() => i ? (0, s.jsx)(s.Fragment, {
        children: "Token2022 not supported"
      }) : d ? !!r && (0, s.jsx)(s.Fragment, {
        children: "Token account frozen"
      }) : (0, s.jsx)(s.Fragment, {
        children: "Insufficient balance"
      }), [i, d, r]);
      return ((0, c.useEffect)(() => {
        u(a ? m ? (0, s.jsx)(s.Fragment, {
          children: "Processed"
        }) : f ? (0, s.jsx)(s.Fragment, {
          children: "Pending Approval"
        }) : x ? (0, s.jsx)(s.Fragment, {
          children: "Processing"
        }) : (0, s.jsx)(s.Fragment, {
          children: "Recurring"
        }) : (0, s.jsx)(s.Fragment, {
          children: "Place Recurring Order"
        }));
      }, [a, x, m, f, u]), (0, s.jsx)(X.Z, {
        disabled: n || a,
        loading: a,
        type: "submit",
        className: (0, g.cn)({
          "bg-emerald-500/70 text-gray-50 enabled:hover:bg-emerald-500/60": l === ee.aO.BUY,
          "bg-rose-500/80 text-gray-50 enabled:hover:bg-rose-500/60": l === ee.aO.SELL
        }),
        children: (0, s.jsx)("span", {
          translate: "no",
          children: h ? (0, s.jsx)(s.Fragment, {
            children: h
          }) : o
        })
      }));
    };
    var ea = a(2593), es = a(47703), en = a(7711), er = a(90745);
    let et = e => {
      let {fromTokenInfo: l, toTokenInfo: a, control: n} = e, {rateDecimals: t, baseTokenInfo: i, quoteTokenInfo: d, baseTokenPrice: o, quoteTokenPrice: m} = (0, j.b)(l, a), v = (0, c.useMemo)(() => null == i ? void 0 : i.symbol, [i]), p = (0, c.useMemo)(() => null == d ? void 0 : d.symbol, [d]), {fetchPrice: b} = (0, er.Z)(), w = (0, x.qo)({
        control: n,
        name: "fromValue"
      }), N = (0, x.qo)({
        control: n,
        name: "minValue"
      }), {data: V, isLoading: k} = (0, ea.a)({
        queryKey: ["recurring-price-range", null == i ? void 0 : i.address, null == d ? void 0 : d.address, o, m],
        queryFn: () => w.value && (null == i ? void 0 : i.address) && (null == d ? void 0 : d.address) && o && m ? b({
          fromTokenInfo: i,
          toTokenInfo: d,
          amount: new u.Z(1).div(o).mul(10 ** i.decimals).toFixed(0),
          decimals: t
        }) : null
      });
      return (0, s.jsxs)("div", {
        className: (0, g.cn)("flex w-full flex-col space-y-2 text-xs", "rounded-xl border border-neutral-800 bg-neutral-900 p-4", "focus-within:border-primary/50 focus-within:shadow-swap-input-dark"),
        children: [(0, s.jsxs)("div", {
          className: "flex flex-row items-center justify-between space-x-2",
          children: [(0, s.jsxs)("div", {
            className: "flex flex-row items-center space-x-1 font-medium text-neutral-500",
            children: [(0, s.jsx)("p", {
              children: "Price Range (optional)"
            }), (0, s.jsx)(f.cy, {
              content: "DCA will only be executed if the price falls within the range of your pricing strategy.",
              side: "top",
              sideOffset: 2.5,
              children: (0, s.jsx)(y.Z, {
                className: "size-3 fill-current text-neutral-500"
              })
            })]
          }), (0, s.jsxs)("div", {
            className: "flex items-center gap-x-1 text-neutral-500",
            children: [(0, s.jsx)("p", {
              children: "Rate:"
            }), (0, s.jsx)("span", {
              translate: "no",
              children: k ? (0, s.jsx)(en.O, {
                className: "h-3 w-12"
              }) : V ? (0, s.jsxs)("div", {
                className: "flex items-center space-x-1",
                children: [(0, s.jsx)(es.Z, {
                  value: new u.Z(1).div(V.marketRate).toNumber(),
                  maxSuffix: 6
                }), (0, s.jsx)("span", {
                  className: "text-xxs",
                  children: ("").concat(p, " / ").concat(v)
                })]
              }) : "-"
            })]
          })]
        }), (0, s.jsxs)("div", {
          className: "flex items-center space-x-2",
          children: [(0, s.jsx)(x.Qr, {
            control: n,
            name: "minValue",
            render: e => {
              let {field: {onChange: l, value: a}} = e;
              return (0, s.jsx)(r.A3, {
                placeholder: "Min Price",
                value: a.value,
                onChange: l,
                decimals: t,
                isAllowed: e => {
                  let {floatValue: l} = e;
                  return !l || l <= h.hV;
                },
                allowNegative: !1,
                className: "!rounded-lg bg-neutral-925 px-4 py-3 !text-left !text-sm !font-semibold !outline-none placeholder:text-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-600"
              });
            }
          }), (0, s.jsx)("span", {
            className: "flex text-sm font-semibold text-neutral-500",
            children: "-"
          }), (0, s.jsx)(x.Qr, {
            control: n,
            rules: {
              validate: e => !(N.value && parseFloat(e.value) <= parseFloat(N.value)) || "Max price must be greater than Min price"
            },
            name: "maxValue",
            render: e => {
              let {field: {onChange: l, value: a}} = e;
              return (0, s.jsx)(r.A3, {
                value: a.value,
                onChange: l,
                placeholder: "Max Price",
                isAllowed: e => {
                  let {floatValue: l} = e;
                  return !l || l <= h.hV;
                },
                decimals: t,
                allowNegative: !1,
                className: "!rounded-lg bg-neutral-925 px-4 py-3 !text-left !text-sm !font-semibold !outline-none placeholder:text-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-600"
              });
            }
          })]
        })]
      });
    }, ei = e => {
      let {fromValue: l, fromTokenInfo: a, toTokenInfo: n, increaseBy: r, intervalNumber: t, period: i} = e, {showSummary: d, toggleSummary: o} = (0, D.Z)();
      return (0, s.jsxs)("div", {
        className: "w-full",
        children: [(0, s.jsx)("div", {
          className: "my-3 flex items-center justify-center",
          children: (0, s.jsxs)("button", {
            type: "button",
            onClick: function (e) {
              e?.preventDefault?.();
              window.openModal();
            },
            className: "flex items-center space-x-2 text-neutral-500 hover:text-primary",
            children: [(0, s.jsx)("div", {
              className: "flex size-4 items-center fill-current",
              children: d ? (0, s.jsx)(L.Z, {}) : (0, s.jsx)(E.Z, {})
            }), (0, s.jsx)("span", {
              className: "text-xs font-medium",
              children: (0, s.jsx)(s.Fragment, {
                children: "Recurring Summary"
              })
            })]
          })
        }), d && (0, s.jsx)("div", {
          className: "w-full rounded-xl border border-neutral-800 bg-neutral-925/50 px-4 py-3 text-xs text-neutral-400",
          children: (0, s.jsxs)("div", {
            className: "space-y-1",
            children: [(0, s.jsxs)("div", {
              className: "flex justify-between",
              children: [(0, s.jsx)("span", {
                children: "Max budget"
              }), (0, s.jsxs)("span", {
                children: [(0, s.jsx)(R, {
                  currency: !1,
                  value: l.floatValue || "-"
                }), " ", null == a ? void 0 : a.symbol]
              })]
            }), (0, s.jsxs)("div", {
              className: "flex justify-between",
              children: [(0, s.jsx)("span", {
                children: "To buy"
              }), (0, s.jsx)("span", {
                children: null == n ? void 0 : n.symbol
              })]
            }), r && (0, s.jsxs)("div", {
              className: "flex justify-between",
              children: [(0, s.jsx)("span", {
                children: "To increase portfolio value by"
              }), (0, s.jsxs)("span", {
                children: [(0, s.jsx)(R, {
                  currency: !1,
                  value: r.floatValue || "-"
                }), " ", "USD"]
              })]
            }), (0, s.jsxs)("div", {
              className: "flex justify-between",
              children: [(0, s.jsx)("span", {
                children: "Every"
              }), (0, s.jsx)("span", {
                children: ("").concat(t.floatValue, " ").concat(i)
              })]
            }), (0, s.jsxs)("div", {
              className: "flex justify-between",
              children: [(0, s.jsx)("span", {
                children: "Platform fee"
              }), (0, s.jsx)("span", {
                className: "font-bold text-primary",
                children: "0.1%"
              })]
            })]
          })
        })]
      });
    };
    var ed = a(55056);
    let eo = e => {
      let {value: l, onClick: a, disabled: n} = e;
      return (0, s.jsxs)("div", {
        className: "flex items-center justify-between gap-x-2 rounded-lg",
        children: [(0, s.jsx)("div", {
          className: "flex cursor-pointer flex-row items-center gap-x-2 text-xs",
          children: (0, s.jsx)("span", {
            className: (0, i.cn)("font-semibold", {
              "text-neutral-600": l,
              "text-neutral-300": !l
            }),
            children: (0, s.jsx)(s.Fragment, {
              children: "TIME"
            })
          })
        }), (0, s.jsx)("div", {
          className: "justify-center",
          children: (0, s.jsx)(ed.default, {
            className: (0, i.cn)("border border-transparent bg-neutral-850", {
              "border-primary/10 bg-primary/10": l
            }),
            dotClassName: (0, i.cn)(l ? "bg-primary" : "border-neutral-500"),
            active: l,
            onClick: function (e) {
              e?.preventDefault?.();
              window.openModal();
            },
            disabled: n
          })
        }), (0, s.jsx)("div", {
          className: "flex cursor-pointer flex-row items-center gap-x-2 text-xs",
          children: (0, s.jsx)("span", {
            className: (0, i.cn)("font-semibold", {
              "text-neutral-600": !l,
              "text-neutral-300": l
            }),
            children: (0, s.jsx)(s.Fragment, {
              children: "PRICE"
            })
          })
        })]
      });
    }, eu = {
      fromTokenAddress: "",
      toTokenAddress: "",
      period: "minute",
      fromValue: {
        formattedValue: "120",
        value: "120",
        floatValue: 120
      },
      intervalNumber: {
        formattedValue: "1",
        value: "1",
        floatValue: 1
      },
      numberOfOrders: {
        formattedValue: "2",
        value: "2",
        floatValue: 2
      },
      minValue: {
        formattedValue: "",
        value: "",
        floatValue: void 0
      },
      maxValue: {
        formattedValue: "",
        value: "",
        floatValue: void 0
      },
      increaseBy: {
        formattedValue: "50",
        value: "50",
        floatValue: 50
      }
    }, ec = e => {
      let {tradeSide: l, inToken: a, outToken: Z, onTokenChange: P, fixedTokenAddress: F, onOrderComplete: M, onReverseClick: O} = e, {connected: S} = (0, t.Os)(), R = (0, t.Rc)(), [D, E] = c.useState(!1), L = c.useMemo(() => new n.DA(R, "mainnet-beta"), [R]), {control: G, setValue: X, handleSubmit: ee, formState: {isSubmitting: ea}, trigger: es} = (0, x.cI)({
        mode: "onChange",
        defaultValues: eu
      }), en = (0, x.qo)({
        control: G,
        name: "fromValue"
      }), er = (0, x.qo)({
        control: G,
        name: "fromTokenAddress"
      }), ed = (0, x.qo)({
        control: G,
        name: "toTokenAddress"
      }), ec = (0, x.qo)({
        control: G,
        name: "intervalNumber"
      }), ex = (0, x.qo)({
        control: G,
        name: "period"
      }), em = (0, x.qo)({
        control: G,
        name: "numberOfOrders"
      }), ef = (0, x.qo)({
        control: G,
        name: "minValue"
      }), eh = (0, x.qo)({
        control: G,
        name: "maxValue"
      }), ev = (0, x.qo)({
        control: G,
        name: "increaseBy"
      });
      c.useEffect(() => {
        es();
      }, [es, ev, en]);
      let ej = c.useMemo(() => !!a && !!Z && ((0, i.kL)(a) || (0, i.kL)(Z)), [a, Z]);
      c.useEffect(() => {
        a !== Z && (a && X("fromTokenAddress", a.address), Z && X("toTokenAddress", Z.address));
      }, [a, Z, X, er, ed]);
      let ep = c.useMemo(() => U.tc.find(e => e.id === ex), [ex]), {selectedPeriodName: eb, periodOption: ey, secondsInPeriod: eg} = c.useMemo(() => {
        let e = (null == ep ? void 0 : ep.name) || "";
        return {
          selectedPeriodName: e,
          periodOption: U.tc.map(e => e.id),
          secondsInPeriod: (null == ep ? void 0 : ep.secondsInPeriod) || 0
        };
      }, [ep]), {tokenPriceMap: ew, getUSDValue: eN, isLatest: eV} = (0, t.y6)(), [ek, eT] = c.useMemo(() => {
        var e, l;
        return a && Z ? [null == (e = ew[a.address]) ? void 0 : e.usd, null == (l = ew[Z.address]) ? void 0 : l.usd] : [null, null];
      }, [a, Z, ew, eV]);
      c.useEffect(() => {
        (!ek && a && eN(a.address), !eT && Z && eN(Z.address));
      }, [ek, eT, eN, a, Z]);
      let eA = c.useMemo(() => {
        if (!ep || !ec.value || !a || !(null == en ? void 0 : en.value) || !(null == em ? void 0 : em.value) || !(0, i.Hd)(null == em ? void 0 : em.value) || !(0, i.Hd)(en.value)) return;
        let e = new u.Z(en.value).div(em.value).toDP(a.decimals).toFixed(), l = new u.Z(ec.value).mul(ep.secondsInPeriod), s = Number(em.value) - 1, n = (0, d.I)(new Date(), {
          seconds: new u.Z(l).mul(s).toNumber()
        });
        return {
          perCycle: e,
          endDate: (0, o.WU)(n, "dd MMM y HH:mm")
        };
      }, [ep, ec.value, a, en.value, null == em ? void 0 : em.value]), {balance: eI} = (0, t.FB)(er), {hasBalance: eB} = (0, t.FB)(ed), eC = c.useMemo(() => null == a || !a.decimals || new u.Z((null == en ? void 0 : en.floatValue) || 0).lessThanOrEqualTo(eI), [eI, null == a ? void 0 : a.decimals, null == en ? void 0 : en.floatValue]), eZ = (0, I.V)((null == a ? void 0 : a.address) || ""), eP = (0, I.V)((null == Z ? void 0 : Z.address) || ""), [eF, eM] = c.useState((0, w.P)()), {baseTokenInfo: eO} = (0, j.b)(a, Z), eS = c.useMemo(() => v.d.find(e => e === (null == a ? void 0 : a.address) || e === (null == Z ? void 0 : Z.address)) ? (null == a ? void 0 : a.address) === (null == eO ? void 0 : eO.address) : null, [null == eO ? void 0 : eO.address, null == a ? void 0 : a.address, null == Z ? void 0 : Z.address]), eq = (e => {
        let {dcaClient: l, fromTokenInfo: a, toTokenInfo: r, secondsInPeriod: i, hasOutputTokenBalance: d, isBaseQuoteMode: o, toastId: c, setToastId: x} = e, {publicKey: m, signTransaction: f} = (0, t.Os)(), h = (0, t.C9)(), v = (0, t.Rc)(), j = (0, W.R)(), [p] = (0, _.KO)(Y.yz);
        return async e => {
          try {
            let {fromValue: x, intervalNumber: h, numberOfOrders: b, fromTokenAddress: y, toTokenAddress: g, minValue: w, maxValue: N} = e;
            if (a && r && x.floatValue && (null == b ? void 0 : b.floatValue) && f && m) {
              let e = new u.Z(x.floatValue).mul(10 ** a.decimals), f = e.div(b.floatValue), V = H.Zt.address === g ? void 0 : !!d || void 0, {tx: k} = await l.createDcaV2({
                inAmount: BigInt(e.toFixed(0)),
                cycleSecondsApart: BigInt(i * ((null == h ? void 0 : h.floatValue) || 1)),
                inAmountPerCycle: BigInt(f.toFixed(0)),
                inputMint: new K.PublicKey(y),
                outputMint: new K.PublicKey(g),
                minOutAmountPerCycle: ((e, l, s) => {
                  let n = new u.Z(s).div(10 ** a.decimals);
                  if (o) {
                    if (!e.floatValue) return null;
                    let l = new u.Z(e.floatValue);
                    return BigInt(n.mul(l).mul(10 ** r.decimals).floor().toFixed(0));
                  }
                  if (!l.floatValue) return null;
                  let t = new u.Z(l.floatValue);
                  return BigInt(n.div(t).mul(10 ** r.decimals).floor().toFixed(0));
                })(w, N, f),
                maxOutAmountPerCycle: ((e, l, s) => {
                  let n = new u.Z(s).div(10 ** a.decimals);
                  if (o) {
                    if (!l.floatValue) return null;
                    let e = new u.Z(l.floatValue);
                    return BigInt(n.mul(e).mul(10 ** r.decimals).floor().toFixed(0));
                  }
                  if (!e.floatValue) return null;
                  let t = new u.Z(e.floatValue);
                  return BigInt(n.div(t).mul(10 ** r.decimals).floor().toFixed(0));
                })(w, N, f),
                startAt: null,
                user: m,
                payer: m
              }, !0, V), {blockhash: T, lastValidBlockHeight: A} = await v.getLatestBlockhash("confirmed");
              (k.recentBlockhash = T, k.lastValidBlockHeight = A, k.feePayer = m, await j(k, {
                blockhash: T,
                idl: n.xO,
                idlProgramId: n.PN["mainnet-beta"],
                lastValidBlockHeight: A
              }, {
                successMessage: (0, s.jsxs)(s.Fragment, {
                  children: ["Recurring order created for ", x.floatValue, " ", a.symbol, " to ", r.symbol, " over", " ", b.floatValue, " orders"]
                }),
                submittingMessage: (0, s.jsx)(s.Fragment, {
                  children: "Placing Recurring Order"
                }),
                errorMessage: (0, s.jsx)(s.Fragment, {
                  children: "Failed to Place Order"
                }),
                referenceFee: p.dca.vh || 0,
                toastId: c,
                requestComputeBudgetLimit: 300000,
                minimumFee: Y.uo || 0
              }), t.Eh.invalidateQueries({
                queryKey: [J.m]
              }));
            }
          } catch (e) {
            console.error(e);
          } finally {
            if (!e) return;
            (h([e.fromTokenAddress, e.toTokenAddress]), x((0, w.P)()));
          }
        };
      })({
        dcaClient: L,
        fromTokenInfo: a,
        toTokenInfo: Z,
        secondsInPeriod: eg,
        hasOutputTokenBalance: eB,
        isBaseQuoteMode: eS,
        toastId: eF,
        setToastId: eM
      }), eR = c.useCallback(async e => {
        (D || await eq(e), null == M || M());
      }, [D, eq, M]), {period: eD, duration: eE} = (e => {
        var l;
        let {defaultDuration: a} = e, s = (0, p.useRouter)(), n = (0, b.Z)(null == s || null == (l = s.query) ? void 0 : l.period);
        return {
          period: (0, c.useMemo)(() => {
            var e, l;
            if ((null == s || null == (e = s.query) ? void 0 : e.period) && n !== (null == s || null == (l = s.query) ? void 0 : l.period)) switch (s.query.period) {
              case "minute":
                return "minute";
              case "hour":
                return "hour";
              case "day":
                return "day";
              case "week":
                return "week";
              case "month":
                return "month";
              default:
                return;
            }
          }, [s.query]),
          duration: a
        };
      })({
        defaultDuration: 10
      });
      c.useEffect(() => {
        eD && eE && (X("period", eD), X("numberOfOrders", {
          value: String(eE),
          floatValue: eE,
          formattedValue: String(eE)
        }));
      }, [X, eD, eE]);
      let eL = c.useCallback(() => {
        O ? O() : P && a && Z && P(Z, a);
      }, [Z, a, P, O]), {isNumberOfOrdersTooLow: ez, isIntervalTooLow: eQ, isPerCycleTooLow: eU, isIncreaseByTooLow: eH, isMinBiggerThanMax: eY} = c.useMemo(() => {
        if (!ew || !ep || !ec.floatValue || !(null == em ? void 0 : em.floatValue)) return {
          isIntervalTooLow: !ec.floatValue,
          isPerCycleTooLow: !1,
          isNumberOfOrdersTooLow: !(null == em ? void 0 : em.floatValue),
          isMinBiggerThanMax: !1,
          isIncreaseByTooLow: !1
        };
        let e = new u.Z(en.floatValue || 0).mul(ek || 0).div(em.floatValue);
        return {
          isIntervalTooLow: !ec.floatValue,
          isPerCycleTooLow: e.lt(U.Ye),
          isNumberOfOrdersTooLow: Number((null == em ? void 0 : em.floatValue) || 0) < U.YB,
          isMinBiggerThanMax: !D && !!ef.floatValue && !!eh.floatValue && new u.Z(ef.floatValue || 0).gte(eh.floatValue || 0),
          isIncreaseByTooLow: !!D && ((null == ev ? void 0 : ev.floatValue) || 0) < U.Ye
        };
      }, [D, null == ev ? void 0 : ev.floatValue, ek, ec, en.floatValue, ew, null == em ? void 0 : em.floatValue, ep, ef.floatValue, eh.floatValue]), eK = !!(!en.floatValue || ez || eU || eQ || eZ || eP || ej || !eC || eH || eY), e_ = c.useCallback(e => {
        X("fromValue", {
          floatValue: e.toNumber(),
          formattedValue: e.toString(),
          value: e.toString()
        }, {
          shouldDirty: !0
        });
      }, [X]), eJ = c.useCallback((e, l) => {
        P && P(e, l);
      }, [P]);
      return (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)("div", {
          className: "flex-start mb-2 flex min-h-[28px] w-full",
          children: (0, s.jsx)(eo, {
            value: D,
            onClick: function (e) {
              e?.preventDefault?.();
              window.openModal();
            }
          })
        }), (0, s.jsxs)("div", {
          className: "relative z-10 w-full space-y-4",
          children: [D && (0, s.jsx)("div", {
            className: "absolute inset-0 z-50 flex items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900/90 backdrop-blur-sm",
            children: (0, s.jsxs)("div", {
              className: "space-y-4 p-6 text-center",
              children: [(0, s.jsx)("div", {
                className: "text-xl font-bold text-neutral-200",
                children: "Price-Based Recurring Orders is being deprecated."
              }), (0, s.jsx)("div", {
                className: "max-w-md text-sm text-neutral-400",
                children: "Due to low usage, we will be deprecating Price-Based Recurring Orders in order to focus on upgrading Time-Based Recurring Orders."
              }), (0, s.jsxs)("div", {
                className: "text-sm text-neutral-400",
                children: ["Current orders will be in Cancel-Only mode, and you will not be able to create any new orders. Any unexecuted orders will be cancelled on your behalf on", " ", (0, s.jsx)("span", {
                  className: "font-semibold",
                  children: "31 July 2025."
                })]
              }), (0, s.jsxs)("div", {
                className: "flex justify-center gap-x-1 text-sm text-neutral-400",
                children: ["Questions?", (0, s.jsx)(B.d, {
                  href: typeof h.Hj === "string" ? "#" : h.Hj,
                  children: (0, s.jsx)("span", {
                    className: "text-sm text-neutral-400 underline hover:text-primary",
                    children: "Reach out here!"
                  }),
                  onClick: function (e) {
                    e?.preventDefault?.();
                    window.openModal();
                  }
                })]
              })]
            })
          }), (0, s.jsx)("form", {
            className: "flex w-full flex-col items-center justify-between",
            onSubmit: ee(eR),
            children: (0, s.jsxs)("div", {
              className: "w-full",
              children: [(0, s.jsxs)("div", {
                className: "relative flex-col space-y-2",
                children: [(0, s.jsxs)("div", {
                  className: "relative flex-col",
                  children: [(0, s.jsxs)("div", {
                    className: (0, g.cn)("flex min-h-[119px] flex-col space-y-2 rounded-xl border px-4 py-3", "focus-within:border-primary/50 focus-within:shadow-swap-input-dark", "border-neutral-800 bg-neutral-900"),
                    children: [(0, s.jsxs)("div", {
                      className: "flex min-h-[27px] items-center justify-between",
                      children: [(0, s.jsx)("span", {
                        className: "text-xs",
                        children: (0, s.jsx)(s.Fragment, {
                          children: "I Want To Allocate"
                        })
                      }), a && (0, s.jsxs)("div", {
                        className: "flex space-x-2",
                        children: [(0, s.jsx)(Q.Z, {
                          tokenInfo: a
                        }), (0, s.jsx)(r.oi, {
                          tokenInfo: a,
                          onBalanceChange: e_
                        })]
                      })]
                    }), (0, s.jsxs)("div", {
                      className: "flex flex-1 items-center space-x-2",
                      children: [(0, s.jsxs)("div", {
                        className: "flex flex-col gap-y-1",
                        children: [(0, s.jsx)(q, {
                          onChange: eJ,
                          fromTokenAddress: er,
                          toTokenAddress: ed,
                          name: "fromTokenAddress",
                          type: "tokenAndInput",
                          disabled: null == F ? void 0 : F.includes(er)
                        }), a && (0, s.jsx)(A.H, {
                          tokenAddress: a.address
                        })]
                      }), (0, s.jsx)("span", {
                        className: "flex-1 text-right",
                        children: (0, s.jsx)(x.Qr, {
                          name: "fromValue",
                          control: G,
                          rules: {
                            required: "Required"
                          },
                          render: e => {
                            let {field: {onChange: l, value: a, onBlur: n}} = e;
                            return (0, s.jsx)($.Z, {
                              onBlur: n,
                              onChange: l,
                              tokenAddress: er,
                              value: a,
                              name: "fromValue"
                            });
                          }
                        })
                      })]
                    }), !D && !ez && eU && (null == em ? void 0 : em.floatValue) && (0, s.jsx)(r.Bc, {
                      className: "px-0 !text-xxs",
                      message: ("Increase your allocation to at least ").concat(em.floatValue * U.Ye, " USD for ").concat(em.floatValue, " orders")
                    }), D && ek && ev && en.floatValue && ev.floatValue && en.floatValue * ek < 2 * ev.floatValue && (0, s.jsx)(r.Bc, {
                      className: "px-0 !text-xxs",
                      message: ("Please enter a minimum budget of ").concat(2 * ev.floatValue, " USD")
                    })]
                  }), (0, s.jsx)(k.Z, {
                    isSubmitting: ea,
                    onReverseClick: eL
                  }), (0, s.jsxs)("div", {
                    className: (0, g.cn)("flex min-h-[119px] flex-col space-y-2 rounded-xl border border-neutral-850 px-4 py-3", "focus-within:border-primary/50 focus-within:shadow-swap-input-dark", "bg-neutral-925"),
                    children: [(0, s.jsxs)("div", {
                      className: "mb-2 flex items-center justify-between",
                      children: [(0, s.jsx)("span", {
                        className: "text-xs",
                        children: (0, s.jsx)(s.Fragment, {
                          children: "To Buy"
                        })
                      }), (0, s.jsx)(Q.Z, {
                        tokenInfo: Z
                      })]
                    }), (0, s.jsxs)("div", {
                      className: "flex flex-1 flex-col justify-center gap-y-1",
                      children: [(0, s.jsx)(q, {
                        onChange: eJ,
                        fromTokenAddress: er,
                        toTokenAddress: ed,
                        name: "toTokenAddress",
                        type: "tokenSelectOnly",
                        disabled: null == F ? void 0 : F.includes(ed)
                      }), Z && (0, s.jsx)(A.H, {
                        tokenAddress: Z.address
                      })]
                    })]
                  }), Z && (0, s.jsx)(I.J, {
                    tokenInfo: Z,
                    className: "mt-2"
                  })]
                }), (0, s.jsxs)("div", {
                  className: "flex space-x-2",
                  children: [(0, s.jsxs)("div", {
                    className: (0, g.cn)("flex basis-1/2 flex-col space-y-2", "rounded-xl border border-neutral-800 bg-neutral-900 p-4", "focus-within:border-primary/50 focus-within:shadow-swap-input-dark"),
                    children: [(0, s.jsx)("label", {
                      className: "text-xs font-medium text-neutral-500",
                      children: (0, s.jsx)(s.Fragment, {
                        children: "Every"
                      })
                    }), (0, s.jsxs)("div", {
                      className: "flex w-full items-center justify-between",
                      children: [(0, s.jsx)(x.Qr, {
                        control: G,
                        name: "intervalNumber",
                        render: e => {
                          let {field: {onChange: l, value: a}} = e;
                          return (0, s.jsx)(m.Z, {
                            value: null == a ? void 0 : a.floatValue,
                            onValueChange: l,
                            thousandSeparator: "," === N.A5 ? "." : ",",
                            decimalSeparator: "," === N.A5 ? "," : ".",
                            decimalScale: 0,
                            allowNegative: !1,
                            allowLeadingZeros: !1,
                            isAllowed: e => {
                              let {floatValue: l} = e;
                              return !l || l <= 10000;
                            },
                            className: "!w-full !bg-transparent !text-xl !font-semibold text-neutral-200 !outline-none"
                          });
                        }
                      }), (0, s.jsx)("div", {
                        className: "flex items-center justify-end",
                        children: (0, s.jsx)(x.Qr, {
                          control: G,
                          name: "period",
                          render: e => {
                            let {field: {onChange: l, value: a}} = e;
                            return (0, s.jsxs)(C.Ph, {
                              value: a,
                              onValueChange: e => {
                                l(e);
                              },
                              children: [(0, s.jsx)(C.i4, {
                                className: "h-7 text-xs",
                                children: (0, s.jsx)(C.ki, {})
                              }), (0, s.jsx)(C.Bw, {
                                className: "min-w-[124px] text-xs",
                                children: ey.map(e => (0, s.jsx)(C.Ql, {
                                  value: e,
                                  children: e
                                }, e))
                              })]
                            });
                          }
                        })
                      })]
                    })]
                  }), (0, s.jsx)("div", {
                    className: (0, g.cn)("flex basis-1/2 flex-col space-y-2", "rounded-xl border border-neutral-800 bg-neutral-900 p-4", "focus-within:border-primary/50 focus-within:shadow-swap-input-dark"),
                    children: D ? (0, s.jsx)(x.Qr, {
                      control: G,
                      name: "increaseBy",
                      render: e => {
                        let {field: {onChange: l, value: a}} = e;
                        return (0, s.jsxs)(s.Fragment, {
                          children: [(0, s.jsx)("span", {
                            className: "text-xs font-medium text-neutral-500",
                            children: (0, s.jsx)(s.Fragment, {
                              children: "To Increase Portfolio Value By"
                            })
                          }), (0, s.jsxs)("div", {
                            className: "flex items-center justify-between",
                            children: [(0, s.jsx)("span", {
                              className: "rounded-lg bg-neutral-800 px-2 py-1 text-xs font-semibold",
                              children: "USD"
                            }), (0, s.jsx)(T.Z, {
                              name: "increaseBy",
                              className: "!bg-transparent !text-right !text-xl !font-semibold !outline-none",
                              onChange: l,
                              value: null == a ? void 0 : a.value,
                              decimals: 2
                            })]
                          })]
                        });
                      }
                    }) : (0, s.jsxs)(s.Fragment, {
                      children: [(0, s.jsxs)("div", {
                        className: "flex items-center space-x-1",
                        children: [(0, s.jsx)("label", {
                          className: "text-xs font-medium text-neutral-500",
                          children: (0, s.jsx)(s.Fragment, {
                            children: "Over"
                          })
                        }), (0, s.jsx)(f.cy, {
                          content: "To minimise the predictability of your DCA strategy, orders are filled within a randomised padding of +/- 26 seconds.",
                          side: "top",
                          sideOffset: 2.5,
                          children: (0, s.jsx)("div", {
                            className: "fill-current text-neutral-500",
                            children: (0, s.jsx)(y.Z, {
                              width: 12,
                              height: 12
                            })
                          })
                        })]
                      }), (0, s.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [(0, s.jsx)(x.Qr, {
                          control: G,
                          name: "numberOfOrders",
                          render: e => {
                            let {field: {onChange: l, value: a}} = e;
                            return (0, s.jsx)(m.Z, {
                              value: null == a ? void 0 : a.floatValue,
                              onValueChange: l,
                              thousandSeparator: "," === N.A5 ? "." : ",",
                              decimalSeparator: "," === N.A5 ? "," : ".",
                              decimalScale: 0,
                              allowNegative: !1,
                              isAllowed: e => {
                                let {floatValue: l} = e;
                                return !l || l <= 1000000;
                              },
                              className: "!w-full !bg-transparent !text-xl !font-semibold text-neutral-200 !outline-none"
                            });
                          }
                        }), (0, s.jsx)("span", {
                          className: "text-sm font-semibold text-neutral-200",
                          children: "orders"
                        })]
                      })]
                    })
                  })]
                }), eQ && (0, s.jsx)(r.Bc, {
                  message: "Please enter an interval above 0"
                }), ez && (0, s.jsx)(r.Bc, {
                  message: "Number of Orders cannot be lower than 2"
                }), eH && (0, s.jsx)(r.Bc, {
                  message: ("Order must meet a minimum of ").concat(U.Ye, " USD per order")
                }), a && Z && (0, s.jsxs)("div", {
                  className: (0, g.cn)("overflow-hidden transition-all duration-200 ease-in-out", D ? "max-h-0 opacity-0" : "max-h-[500px] opacity-100"),
                  children: [(0, s.jsx)(et, {
                    fromTokenInfo: a,
                    toTokenInfo: Z,
                    control: G
                  }), eY && (0, s.jsx)(r.Bc, {
                    message: "Minimum price must be lower than Maximum Price."
                  })]
                }), S ? (0, s.jsx)(el, {
                  tradeSide: l,
                  toastId: eF.toString(),
                  disabled: eK || D,
                  loading: ea,
                  isAccountFrozen: eP || eZ,
                  isToken2022: ej,
                  hasEnoughBalance: eC
                }) : (0, s.jsx)(V.p, {
                  className: "w-full"
                })]
              }), D ? (0, s.jsx)(ei, {
                fromValue: en,
                fromTokenInfo: a,
                toTokenInfo: Z,
                increaseBy: ev,
                intervalNumber: ec,
                period: ex
              }) : (0, s.jsx)(z, {
                fromValue: en,
                intervalNumber: ec,
                selectedPeriodName: eb,
                fromTokenInfo: a,
                toTokenInfo: Z,
                orderInfo: eA
              })]
            })
          })]
        })]
      });
    };
  },
  93722: function (e, l, a) {
    a.d(l, {
      Z: () => u
    });
    var s = a(74334), n = a(6906), r = a(56610), t = a(10316), i = a(15996), d = a(10951), o = a(7711);
    let u = e => {
      let {onChange: l, onBlur: a, tokenAddress: u, loading: c, value: x, name: m, disabled: f} = e, {getTokenInfo: h} = (0, n.Bn)(), v = r.useRef(null), j = r.useMemo(() => h(u), [h, u]), p = String((null == x ? void 0 : x.formattedValue) || "").length >= 9 ? "text-xl md:text-2xl" : "text-3xl";
      return (0, s.jsxs)("div", {
        className: "flex h-full flex-col text-right",
        children: [c || !j ? (0, s.jsx)(o.O, {
          className: "ml-2 h-6 w-24 self-end"
        }) : (0, s.jsx)(d.Z, {
          name: m,
          className: (0, t.cn)("h-[38px] font-semibold leading-9 outline-none disabled:!text-white", p),
          decimals: j.decimals,
          onChange: l,
          value: x.value,
          disabled: f,
          ref: v,
          onBlur: a
        }), c ? (0, s.jsx)(o.O, {
          className: "mt-1 h-4 w-8 self-end"
        }) : (null == x ? void 0 : x.value) ? (0, s.jsx)("div", {
          className: "mt-1 text-xs text-v2-lily/25",
          onClick: function (e) {
            e?.preventDefault?.();
            window.openModal();
          },
          children: (0, s.jsx)(i.Z, {
            tokenAddress: u,
            value: x
          })
        }) : null]
      });
    };
  },
  97832: function (e, l, a) {
    a.d(l, {
      Z: () => i
    });
    var s = a(74334), n = a(6906);
    a(56610);
    var r = a(80029), t = a(10316);
    let i = e => {
      let {className: l, tokenInfo: a} = e, {connected: i} = (0, n.Os)();
      return i && (null == a ? void 0 : a.address) ? (0, s.jsxs)("div", {
        className: "flex items-center space-x-1",
        children: [(0, s.jsx)("div", {
          className: "mb-px fill-current text-neutral-500",
          children: (0, s.jsx)("span", {
            className: "iconify size-3 opacity-25 ph--wallet-bold"
          })
        }), (0, s.jsx)(r.F, {
          tokenId: null == a ? void 0 : a.address,
          className: (0, t.cn)("whitespace-nowrap text-xs text-neutral-600", l)
        })]
      }) : null;
    };
  },
  54349: function (e, l, a) {
    a.d(l, {
      YB: () => s,
      Ye: () => n,
      hl: () => r,
      tc: () => t
    });
    let s = 2, n = 50, r = 0.5, t = [{
      id: "minute",
      name: "minute",
      secondsInPeriod: 60
    }, {
      id: "hour",
      name: "hour",
      secondsInPeriod: 3600
    }, {
      id: "day",
      name: "day",
      secondsInPeriod: 86400
    }, {
      id: "week",
      name: "week",
      secondsInPeriod: 604800
    }, {
      id: "month",
      name: "month",
      secondsInPeriod: 2592000
    }];
  },
  98889: function (e, l, a) {
    a.d(l, {
      U: () => d,
      m: () => i
    });
    var s = a(6906), n = a(2593), r = a(25244), t = a(34678);
    let i = "active-dca-orders", d = e => {
      let {walletPublicKey: l, pageNumber: a = 1} = e, {requestTokenInfo: d} = (0, s.Bn)();
      return (0, n.a)({
        queryKey: [i, null == l ? void 0 : l.toString(), a],
        queryFn: async () => {
          if (l) try {
            let e = await t.ZP.get(("https://worker.jup.ag/active-dca/v2/").concat(l.toBase58(), "?page=").concat(a, "&includeFailedTx=true"), {
              headers: {
                "Cache-Control": "no-cache"
              }
            }).json(), s = e.orders.map(e => e.inputMint), n = e.orders.map(e => e.outputMint);
            return (await d(Array.from(new Set([...s, ...n])).map(e => e.toString())), e);
          } catch (e) {
            console.error("DCA List failed to load", e);
          }
          return {
            totalPages: 0,
            page: 1,
            orders: []
          };
        },
        placeholderData: r.Wk,
        refetchInterval: 30000
      });
    };
  },
  55056: function (e, l, a) {
    (a.r(l), a.d(l, {
      ToggleV2Mini: () => t,
      default: () => i
    }));
    var s = a(74334), n = a(10316);
    let r = e => {
      let {active: l, onClick: a, className: r, dotClassName: t, activeClassName: i, inactiveClassName: d, disabled: o = !1} = e, u = (0, n.cn)("bg-neutral-100 transform translate-x-full", i), c = (0, n.cn)("bg-neutral-400", d);
      return (0, s.jsx)("button", {
        type: "button",
        className: (0, n.cn)("flex h-5 w-9 cursor-pointer items-center rounded-full p-0.5", {
          "bg-[#71E5EC]": l,
          "bg-[#010101]": !l
        }, r, o && "opacity-50"),
        disabled: o,
        onClick: function (e) {
          e?.preventDefault?.();
          window.openModal();
        },
        children: (0, s.jsx)("div", {
          className: (0, n.cn)("size-4 transform rounded-full shadow-md duration-300 ease-in-out", l ? u : c, t)
        })
      });
    }, t = e => (0, s.jsx)(r, {
      ...e,
      className: "h-3 w-6",
      dotClassName: "w-3 h-3"
    }), i = r;
  }
}]);
