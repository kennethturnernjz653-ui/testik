"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([["8653"], {
  35758: function (e, t, r) {
    r.d(t, {
      Z: () => s,
      y: () => n
    });
    let s = "j1o2qRpjcyUwEvwtcfhEQefh773ZgjxcVRry7LDqg5X", n = "jupoNjAxXgZ4rjzxzPMP4oxduvQsQtZzyknqvzYNrNu";
  },
  99504: function (e, t, r) {
    r.d(t, {
      Z: () => ej
    });
    var s = r(74334), n = r(6906), l = r(81302), a = r(19736), i = r.n(a), o = r(72156), d = r(56610), c = r(27683), u = r(54473), m = r(14904), x = r(97806), h = r(53890), f = r(76303), p = r(76366), g = r(19844), v = r(85360), j = r(70421), b = r(77349);
    r(8416);
    var w = r(2593), y = r(10316), N = r(29095), C = r(5993), P = r(1533), k = r(878), F = r(10102), S = r(7711), Z = r(37831);
    let M = e => {
      var t, r;
      let {rateDecimals: n, fromPairTokenInfo: l, toPairTokenInfo: a, fromPairValue: i, toPairValue: c, expiry: u, targetPrice: m, customDateLabel: x, slippageBps: h} = e, {showSummary: f, toggleSummary: p} = (0, P.Z)(), {data: g, isFetching: v} = (0, w.a)({
        queryKey: ["limit-order-fee-structure"],
        queryFn: async e => {
          let {signal: t} = e;
          return await Z.s.getFeeStructure(t);
        }
      }), j = (0, d.useCallback)(() => !!(C.CO.includes(l.address) && C.CO.includes(a.address) || C.Jx.includes(l.address) && C.Jx.includes(a.address) || C.OC.includes(l.address) || C.OC.includes(a.address)), [l.address, a.address]), y = (0, d.useMemo)(() => g ? j() ? new o.Z(g.stableFeeBps).div(100).toFixed(2) + "%" : new o.Z(g.normalFeeBps).div(100).toFixed(2) + "%" : null, [g, j]), N = (0, d.useMemo)(() => {
        let e = new o.Z(i || 0);
        return e.eq(0) ? "-" : b.uf.format(e, l.decimals);
      }, [i, l.decimals]), M = (0, d.useMemo)(() => {
        let e = new o.Z(c || 0);
        return e.eq(0) ? "-" : b.uf.format(e, a.decimals);
      }, [c, a.decimals]), T = (0, d.useMemo)(() => {
        let e = new o.Z((0, b.Hd)(m) ? m : 0);
        return e.eq(0) ? "-" : b.uf.format(e, n);
      }, [m, n]);
      return (0, s.jsxs)("div", {
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
              children: f ? (0, s.jsx)(F.Z, {}) : (0, s.jsx)(k.Z, {})
            }), (0, s.jsx)("span", {
              className: "text-xs font-medium",
              children: (0, s.jsx)(s.Fragment, {
                children: "Trigger Summary"
              })
            })]
          })
        }), f && (0, s.jsx)("div", {
          className: "w-full rounded-xl border border-neutral-800 bg-neutral-925/50 px-4 py-3 text-xs text-neutral-400",
          children: (0, s.jsxs)("div", {
            className: "space-y-1",
            children: [(0, s.jsxs)("div", {
              className: "flex items-center justify-between text-xs",
              children: [(0, s.jsx)("div", {
                children: (0, s.jsx)(s.Fragment, {
                  children: "Sell Order"
                })
              }), (0, s.jsxs)("span", {
                children: [N, " ", l.symbol]
              })]
            }), (0, s.jsxs)("div", {
              className: "flex items-center justify-between text-xs",
              children: [(0, s.jsx)("div", {
                children: (0, s.jsx)(s.Fragment, {
                  children: "To Buy"
                })
              }), (0, s.jsxs)("span", {
                children: [M, " ", a.symbol]
              })]
            }), (0, s.jsxs)("div", {
              className: "flex items-center justify-between text-xs",
              children: [(0, s.jsx)("div", {
                children: (0, s.jsxs)(s.Fragment, {
                  children: ["Buy ", a.symbol, " at Rate"]
                })
              }), (0, s.jsxs)("span", {
                children: [T, " ", l.symbol]
              })]
            }), (0, s.jsxs)("div", {
              className: "flex items-center justify-between text-xs",
              children: [(0, s.jsx)("div", {
                children: (0, s.jsx)(s.Fragment, {
                  children: "Expiry"
                })
              }), (0, s.jsx)("span", {
                children: null != (r = null == (t = C.yn[u]) ? void 0 : t.name) ? r : x
              })]
            }), (0, s.jsxs)("div", {
              className: "flex items-center justify-between text-xs",
              children: [(0, s.jsx)("div", {
                children: (0, s.jsx)(s.Fragment, {
                  children: "Platform Fee"
                })
              }), (0, s.jsx)("span", {
                className: "font-bold text-primary",
                children: v ? (0, s.jsx)(S.O, {
                  className: "h-4 w-12 rounded-md"
                }) : y
              })]
            })]
          })
        })]
      });
    };
    var T = r(35758), B = r(9003), A = r(98517), I = r(69381), V = r(14773), E = r(93181), R = r(79305), O = r(29776).Buffer, _ = r(26913);
    let D = e => {
      let {active: t, onClick: r, disabled: n = !1} = e;
      return (0, s.jsxs)("button", {
        type: "button",
        className: (0, y.cn)("relative flex h-5 w-10 cursor-pointer items-center rounded-full bg-neutral-850 p-0.5", n && "opacity-50"),
        disabled: n,
        onClick: function (e) {
          e?.preventDefault?.();
          window.openModal();
        },
        children: [(0, s.jsx)("div", {
          className: "pointer-events-none absolute left-1.5 top-1/2 -translate-y-1/2",
          children: (0, s.jsx)(_.J, {
            className: (0, y.cn)("size-2.5 text-[#304052] opacity-100 transition-opacity duration-200")
          })
        }), (0, s.jsx)("div", {
          className: "pointer-events-none absolute right-1.5 top-1/2 -translate-y-1/2"
        }), (0, s.jsx)("div", {
          className: (0, y.cn)("z-10 flex size-4 items-center justify-center rounded-full transition-transform duration-200 ease-in-out", t ? "translate-x-0.3 bg-[linear-gradient(40deg,#00BEF0_0%,#C7F284_90%)]" : "translate-x-5 border-v3-secondary"),
          children: t && (0, s.jsx)(_.J, {
            className: "size-2.5",
            color: "#111821"
          })
        })]
      });
    };
    var L = r(63303), q = r(76802), z = r(47301), U = r(20446), W = r.n(U), H = r(26450), J = r(88381);
    let Q = e => {
      let {quotedRate: t, onConfirm: r, inputAmount: n, outputAmount: l, inputPair: a, outputPair: i, usdRate: o} = e, {closeModal: d} = (0, H.J)(), c = a.symbol, u = i.symbol;
      return (0, s.jsxs)("div", {
        className: "max-w-[95vw] bg-v3 lg:max-w-md",
        children: [(0, s.jsxs)("div", {
          className: "p-6 pb-5",
          children: [(0, s.jsxs)("div", {
            className: "flex items-center justify-between",
            children: [(0, s.jsx)("h2", {
              className: "text-lg font-bold text-v2-primary",
              children: (0, s.jsx)(s.Fragment, {
                children: "Order Confirmation"
              })
            }), (0, s.jsx)("button", {
              className: "text-white/50",
              onClick: function (e) {
                e?.preventDefault?.();
                window.openModal();
              },
              children: (0, s.jsx)(J.Z, {
                width: 12,
                height: 12
              })
            })]
          }), (0, s.jsx)("p", {
            className: "mt-1 max-w-[328px] text-xs font-light text-white/50",
            children: (0, s.jsx)(s.Fragment, {
              children: "Are you sure you want to buy at this price? We will attempt to fill your order at your desired rate."
            })
          })]
        }), (0, s.jsxs)("div", {
          className: "p-5 pt-3 text-sm font-medium",
          children: [(0, s.jsx)("p", {
            className: "text-white/50",
            children: "Limit Order Summary"
          }), (0, s.jsxs)("div", {
            className: "my-3 mb-5 rounded-xl border border-white/10 bg-[#E8F9FF0D] p-4",
            children: [(0, s.jsxs)("div", {
              className: "flex items-center justify-between",
              children: [(0, s.jsx)("p", {
                className: "text-xs text-white/50",
                children: (0, s.jsx)(s.Fragment, {
                  children: "You're paying"
                })
              }), (0, s.jsxs)("div", {
                className: "flex space-x-2",
                children: [a.logoURI ? (0, s.jsx)("img", {
                  src: a.logoURI,
                  alt: "inputpair-logo",
                  height: 24,
                  width: 24,
                  className: "overflow-hidden rounded-full"
                }) : null, (0, s.jsxs)("p", {
                  className: "text-md leading-6 text-white",
                  children: [v.uf.format(n, a.decimals), " ", c]
                })]
              })]
            }), (0, s.jsx)("div", {
              className: "my-4 h-px border border-white/10"
            }), (0, s.jsxs)("div", {
              className: "flex items-center justify-between",
              children: [(0, s.jsx)("p", {
                className: "text-xs text-white/50",
                children: (0, s.jsx)(s.Fragment, {
                  children: "To receive"
                })
              }), (0, s.jsxs)("div", {
                className: "flex space-x-2",
                children: [i.logoURI ? (0, s.jsx)("img", {
                  src: i.logoURI,
                  alt: "outputpair-logo",
                  height: 24,
                  width: 24,
                  className: "overflow-hidden rounded-full"
                }) : null, (0, s.jsxs)("p", {
                  className: "text-md leading-6 text-white",
                  children: [v.uf.format(l, i.decimals), " ", u]
                })]
              })]
            })]
          }), (0, s.jsxs)("div", {
            className: "mb-2 flex items-center justify-between text-xs text-white/50",
            children: [(0, s.jsx)("p", {
              children: (0, s.jsx)(s.Fragment, {
                children: "Limit Order Rate"
              })
            }), (0, s.jsx)("p", {
              children: (0, s.jsxs)(s.Fragment, {
                children: ["1 ", u, " = ", v.uf.format(t, 4), " ", c]
              })
            })]
          }), (0, s.jsxs)("div", {
            className: "flex items-center justify-between text-xs text-white/50",
            children: [(0, s.jsx)("p", {
              children: (0, s.jsx)(s.Fragment, {
                children: "USD Price"
              })
            }), o ? (0, s.jsx)("p", {
              children: (0, s.jsxs)(s.Fragment, {
                children: ["1 ", u, " = $", v.uf.format(o, 6)]
              })
            }) : (0, s.jsx)("p", {
              className: "text-white",
              children: "Could not fetch USD rate"
            })]
          }), (0, s.jsx)("button", {
            type: "button",
            className: "mt-5 w-full rounded-md border border-transparent bg-[#C7F2840D] px-4 py-3 hover:border hover:border-v2-primary",
            onClick: function (e) {
              e?.preventDefault?.();
              window.openModal();
            },
            children: (0, s.jsx)("div", {
              className: "text-v2-primary",
              children: (0, s.jsx)(s.Fragment, {
                children: "Confirm"
              })
            })
          })]
        })]
      });
    };
    var K = r(39881), G = r(97499), Y = r(90745), X = r(94993), $ = r(5021), ee = r(10951), et = r(44474), er = r(84390), es = r(80029), en = r(32368), el = r(37766), ea = r(42305), ei = r(59987), eo = r(23725);
    let ed = e => Object.entries(e).reduce((e, t) => {
      let [r, s] = t;
      return ("hour" === r ? e += 60 * s * 60 : "minute" === r && (e += 60 * s), e);
    }, 0), ec = e => {
      let {onSet: t, value: r} = e, {day: n, hour: l, minute: a} = "number" == typeof r ? (0, v.K3)(Number(r)) : {
        day: 0,
        hour: 0,
        minute: 0
      }, {control: i, handleSubmit: o, watch: u} = (0, c.cI)({
        defaultValues: {
          hour: (24 * n + l).toString(),
          minute: a.toString()
        }
      }), m = u(), x = (0, d.useMemo)(() => !m.hour && !m.minute || 0 === Number(m.hour) && 0 === Number(m.minute) || ed(m) > 315360000, [m.hour, m.minute]), h = (0, d.useCallback)(e => {
        t(String(ed(e)));
      }, [t]), f = (0, d.useRef)(), p = (0, d.useRef)(), g = (0, d.useCallback)(() => {
        var e;
        return null == f || null == (e = f.current) ? void 0 : e.focus();
      }, []), j = (0, d.useCallback)(() => {
        var e;
        return null == p || null == (e = p.current) ? void 0 : e.focus();
      }, []);
      return (0, s.jsx)("div", {
        className: "flex w-full justify-center",
        children: (0, s.jsxs)("form", {
          className: "bg-tuna flex w-[320px] flex-col space-y-3 rounded-xl p-3 shadow-lg",
          onSubmit: o(h),
          children: [(0, s.jsx)("div", {
            className: "text-base font-semibold leading-8",
            children: (0, s.jsx)(s.Fragment, {
              children: "Custom Expiry Period"
            })
          }), (0, s.jsxs)("div", {
            className: "flex flex-col items-center space-y-2",
            children: [(0, s.jsxs)("div", {
              onClick: function (e) {
                e?.preventDefault?.();
                window.openModal();
              },
              className: "flex w-full items-center justify-between rounded-xl bg-jupiter-input-dark p-4",
              children: [(0, s.jsx)(c.Qr, {
                control: i,
                name: "hour",
                render: e => {
                  let {field: {onChange: t, value: r, name: n}} = e;
                  return (0, s.jsx)(ee.Z, {
                    name: n,
                    className: "!text-left !text-sm placeholder:text-white/20",
                    placeholder: "0",
                    decimals: 0,
                    onChange: e => t(e.value),
                    value: "0" === r ? "" : r,
                    ref: f
                  });
                }
              }), (0, s.jsx)("div", {
                className: "text-sm text-white/20",
                children: (0, s.jsx)(s.Fragment, {
                  children: "Hours"
                })
              })]
            }), (0, s.jsxs)("div", {
              onClick: function (e) {
                e?.preventDefault?.();
                window.openModal();
              },
              className: "flex w-full items-center justify-between rounded-xl bg-jupiter-input-dark p-4",
              children: [(0, s.jsx)(c.Qr, {
                control: i,
                name: "minute",
                render: e => {
                  let {field: {onChange: t, value: r, name: n}} = e;
                  return (0, s.jsx)(ee.Z, {
                    name: n,
                    className: "!text-left !text-sm placeholder:text-white/20",
                    placeholder: "0",
                    decimals: 0,
                    onChange: e => t(e.value),
                    value: "0" === r ? "" : r,
                    ref: p
                  });
                }
              }), (0, s.jsx)("div", {
                className: "text-sm text-white/20",
                children: (0, s.jsx)(s.Fragment, {
                  children: "Minutes"
                })
              })]
            })]
          }), (0, s.jsx)("button", {
            type: "submit",
            disabled: x,
            className: "mt-2 w-full items-center rounded-lg bg-jupiter-navy bg-jupiter-gradient p-px font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50",
            children: (0, s.jsx)("div", {
              className: "flex items-center justify-center rounded-lg bg-black px-8 py-4",
              children: (0, s.jsx)("span", {
                className: "text-center",
                children: (0, s.jsx)(eo.Z, {
                  animate: !1,
                  children: (0, s.jsx)(s.Fragment, {
                    children: "Set Period"
                  })
                })
              })
            })
          })]
        })
      });
    };
    var eu = r(25628), em = r(63875), ex = r(32668), eh = r(17397);
    let ef = e => {
      let {testId: t, control: r, pair: n, pairName: l, onSubmit: a, disabled: i = !1, onChangeCalculate: o, variant: u = "plain", disableTokenSelect: m} = e, {closeModal: x, openModal: h} = (0, H.J)(), f = (0, d.createRef)(), p = e => {
        e && (a(e), x());
      };
      return (0, s.jsxs)("div", {
        className: "flex items-center justify-between space-x-2",
        children: [(0, s.jsxs)("div", {
          children: [(0, s.jsxs)("button", {
            type: "button",
            className: "group flex h-10 items-center space-x-3 rounded-full border border-transparent px-3 py-2 enabled:bg-neutral-800 enabled:hover:border-primary enabled:hover:bg-primary/20 enabled:hover:text-primary enabled:hover:shadow-swap-input-dark",
            disabled: m,
            onClick: function (e) {
              e?.preventDefault?.();
              window.openModal();
            },
            children: [(0, s.jsx)("div", {
              className: "rounded-full",
              children: n.logoURI && (0, s.jsx)(em.Z, {
                width: 24,
                height: 24,
                info: n
              })
            }), (0, s.jsx)("div", {
              className: "ml-3 mr-2 text-sm font-semibold",
              translate: "no",
              "data-testid": ("").concat(t, "-symbol"),
              children: null == n ? void 0 : n.symbol
            }), !m && (0, s.jsx)("div", {
              className: "fill-current text-neutral-500 group-enabled:group-hover:text-primary",
              children: (0, s.jsx)(eu.Z, {})
            })]
          }), (0, s.jsx)("div", {
            className: "mt-1",
            children: n.address && (0, s.jsx)(eh.H, {
              tokenAddress: n.address
            })
          })]
        }), l && (0, s.jsx)(c.Qr, {
          name: l,
          control: r,
          render: e => {
            let {field: {value: r}} = e, l = String(r || "").length >= 9 ? "text-xl md:text-2xl" : "text-3xl";
            return (0, s.jsxs)("div", {
              children: [(0, s.jsx)(ee.Z, {
                testId: ("").concat(t, "-input"),
                decimals: n.decimals,
                onChangeWithoutEffect: e => o && o(e),
                value: r,
                disabled: i,
                ref: f,
                className: (0, y.cn)("h-[38px] font-semibold leading-9 outline-none disabled:!text-white", l)
              }), r ? (0, s.jsx)("div", {
                className: "mt-1 text-xs text-v2-lily/25",
                onClick: function (e) {
                  e?.preventDefault?.();
                  window.openModal();
                },
                children: (0, s.jsx)(en.default, {
                  tokenInfo: n,
                  amount: Number(r)
                })
              }) : null]
            });
          }
        })]
      });
    }, ep = (0, d.memo)(e => {
      let {tradeSide: t, fromPairTokenInfo: r, toPairTokenInfo: l, baseTokenInfo: a, quoteTokenInfo: i, baseAndQuoteTokenPriceFetched: u, rateDecimals: x, control: f, isDisabled: p, onSubmit: g, setValue: w, watchAllFields: N, formState: P, isLoadingDasQuery: k, tokenHaveTransferFee: F, customDateLabel: Z, setCustomDate: M, fixedTokenAddress: T} = e, {openContextualModal: B, ModalContextConsumer: A, closeModal: I, openModal: V} = (0, H.J)(), {connected: E, address: R} = (0, n.Os)(), {onPairChange: O, onReverseClick: _} = (0, h.k)(), D = (0, d.createRef)(), [L, U] = (0, d.useState)(!1), J = (0, d.useMemo)(() => K.d.find(e => e === (null == r ? void 0 : r.address) || e === (null == l ? void 0 : l.address)) ? {
        isFromBase: N.fromPair === (null == a ? void 0 : a.address)
      } : null, [null == a ? void 0 : a.address, null == r ? void 0 : r.address, null == l ? void 0 : l.address, N.fromPair]), ei = d.useCallback(e => {
        let t = e, s = l;
        (l.address === e.address && (t = l, s = r), U(!1), s && O(t, s));
      }, [O, r, l]), eo = d.useCallback(e => {
        let t = r, s = e;
        (r.address === e.address && (t = l, s = r), U(!1), t && O(t, s));
      }, [O, r, l]), ed = d.useCallback(() => {
        _ ? _() : (O(l, r), w("fromPairValue", "1"), U(!1));
      }, [l, r, O, w, _]), eu = (0, d.useMemo)(() => (0, b.Hd)(N.targetPrice) ? Number(N.targetPrice) : 0, [N.targetPrice]), em = d.useCallback(e => {
        (0, b.Hd)(e) && w("toPairValue", e);
      }, [w]), ex = (() => {
        let [e, t] = (0, d.useState)(!1);
        return ((0, G.Z)(() => {
          t(!0);
        }, []), e);
      })(), {swapMarketPrice: eh, lastMarketPrice: ep, isFetching: ev} = (0, Y.s)({
        quoteTokenInfo: i,
        baseTokenInfo: a,
        isBaseQuoteMode: J,
        rateDecimals: x,
        isSubmitting: P.isSubmitting
      }), ej = !!ep, eb = (0, d.useCallback)(e => {
        eh && ej && (w("targetPrice", eh.toFixed()), em((null == J ? void 0 : J.isFromBase) ? new o.Z(eh.toFixed()).mul(e || 0).toDP(x).toFixed() : new o.Z(e || 0).div(eh).toDP(x).toFixed()));
      }, [eh, ej, w, em, J, x]), ew = (0, d.useMemo)(() => N.fromPairValue, [N]);
      (0, d.useEffect)(() => {
        L || (w("targetPrice", ""), w("toPairValue", ""), eb(ew));
      }, [L, ew, w, eb]);
      let ey = (0, d.useMemo)(() => {
        let e = new o.Z(0);
        if (!ej || !N.targetPrice || !ep) return e;
        let t = new o.Z(eu).sub(ep).div(ep);
        return (e = new o.Z(100).mul(t).toDP(2)).isFinite() ? e : new o.Z(0);
      }, [N.targetPrice, ep, eu, ej]), eN = (0, d.useMemo)(() => ey.gt(10000) ? ">10000" : ("").concat(ey.toNumber() > 0 ? "+" : "").concat(ey.toDP(2).toString()), [ey]), eC = (0, d.useMemo)(() => (null == J ? void 0 : J.isFromBase) ? 0 > ey.toNumber() : ey.toNumber() > 0, [null == J ? void 0 : J.isFromBase, ey]), eP = (0, d.useMemo)(() => (null == J ? void 0 : J.isFromBase) ? ey.toNumber() > 0 : 0 > ey.toNumber(), [null == J ? void 0 : J.isFromBase, ey]), ek = (0, d.useMemo)(() => !ev && (eC || eP), [eC, eP, ev]), eF = (0, d.useMemo)(() => (null == J ? void 0 : J.isFromBase) ? ey.toNumber() > -5 : 5 > ey.toNumber(), [null == J ? void 0 : J.isFromBase, ey]), eS = (0, d.useMemo)(() => !!a.address && !!i.address && (!!ev || !u) && !ej, [u, a.address, ej, ev, i.address]), eZ = (0, d.useMemo)(() => {
        if (ex) {
          if (eS) return (0, s.jsx)(s.Fragment, {
            children: "Could not retrieve market price for this pair. Trade with caution"
          });
          let e = (0, s.jsx)(W(), {
            href: typeof ("/swap/").concat(r.address, "-").concat(l.address, "?inAmount=").concat(N.fromPairValue) === "string" ? "#" : ("/swap/").concat(r.address, "-").concat(l.address, "?inAmount=").concat(N.fromPairValue),
            className: "font-bold underline",
            target: "_blank",
            children: (0, s.jsx)(s.Fragment, {
              children: "Jupiter Swap"
            }),
            onClick: function (e) {
              e?.preventDefault?.();
              window.openModal();
            }
          }), t = (null == J ? void 0 : J.isFromBase) ? "lower" : "higher", n = (null == J ? void 0 : J.isFromBase) ? "selling" : "buying", a = (0, s.jsxs)("p", {
            children: ["Limit price is ", ey.absoluteValue().toString(), "% ", t, " than market, you are ", n, " ", "at a much ", t, " rate. We recommend that you use ", e, " instead"]
          });
          if (null == J ? void 0 : J.isFromBase) {
            if (-0.5 >= ey.toNumber()) return a;
          } else if (ey.toNumber() >= 0.5) return a;
        }
      }, [ex, eS, r.address, l.address, N.fromPairValue, ey, null == J ? void 0 : J.isFromBase]), {balance: eM} = (0, n.FB)(N.fromPair), eT = d.useCallback(e => {
        let t;
        (e.preventDefault(), w("fromPairValue", t = N.fromPair === m.W4.toBase58() ? new o.Z(eM).gt(z.WO) ? new o.Z(eM).minus(z.WO).toString() : "0" : String(eM)));
        let r = (null == J ? void 0 : J.isFromBase) ? eu : eu ? 1 / eu : 0;
        w("toPairValue", new o.Z(t).mul(r).toFixed());
      }, [N.fromPair, w, null == J ? void 0 : J.isFromBase, eu, eM]), eB = (0, d.useMemo)(() => {
        if (!E || (null == r ? void 0 : r.address) !== m.W4.toBase58() || !(0, b.Hd)(N.fromPairValue)) return !1;
        let e = new o.Z(eM).minus(z.WO);
        return new o.Z(N.fromPairValue || 0).gt(e);
      }, [null == r ? void 0 : r.address, eM, E, N.fromPairValue]), eA = (0, d.useMemo)(() => new o.Z(N.fromPairValue || 0).lte(eM), [eM, N.fromPairValue]), eI = (0, et.V)(r.address), eV = (0, et.V)(l.address), eE = (0, d.useCallback)(() => {
        A && B(C.YN, void 0, (0, s.jsx)(A, {
          children: () => {
            var e, t;
            return (0, s.jsx)(ec, {
              onSet: e => {
                (w("expiry", e), M((0, v.K3)(Number(e))), I());
              },
              value: null != (t = null == (e = C.yn[N.expiry]) ? void 0 : e.name) ? t : Number(N.expiry)
            });
          }
        }), {
          position: "center",
          containerStyle: {
            background: "none",
            boxShadow: "none"
          }
        });
      }, [A, N.expiry, B, w, I, M]), eR = (0, d.useCallback)(async e => {
        e.preventDefault();
        let {fromPairValue: t, targetPrice: n, toPairValue: a} = N, i = t ? new o.Z(t).mul(n) : null, d = new o.Z(t).div(a).toString();
        V((0, s.jsx)(Q, {
          quotedRate: d,
          onConfirm: g,
          inputAmount: t,
          outputAmount: a,
          inputPair: r,
          outputPair: l,
          usdRate: i
        }), {
          onClose() {},
          containerStyle: {
            borderRadius: "12px"
          }
        });
      }, [r, g, V, l, N]), eO = (0, d.useMemo)(() => p || !eA || eB || !eF || eI || eV || k || (null == F ? void 0 : F.length) > 0, [eA, p, eI, eV, k, eB, eF, null == F ? void 0 : F.length]);
      return (0, s.jsx)("div", {
        className: "flex w-full flex-col",
        children: (0, s.jsxs)("form", {
          "data-testid": "form",
          className: "flex h-fit w-full flex-col justify-center space-y-2",
          onSubmit: eS ? eR : g,
          children: [(0, s.jsxs)("div", {
            className: "relative flex-col",
            children: [(0, s.jsxs)("div", {
              className: (0, y.cn)("flex min-h-[119px] flex-col space-y-2 rounded-xl border px-4 py-3", "focus-within:border-primary/50 focus-within:shadow-swap-input-dark", "border-neutral-800 bg-neutral-900"),
              children: [(0, s.jsxs)("div", {
                className: "flex min-h-[26px] items-center justify-between",
                children: [(0, s.jsx)("span", {
                  className: "text-xs",
                  children: (0, s.jsx)(s.Fragment, {
                    children: "Selling"
                  })
                }), (0, s.jsxs)("div", {
                  className: "flex items-center space-x-1",
                  children: [(0, s.jsx)("div", {
                    className: "mb-px fill-current text-neutral-500",
                    children: (0, s.jsx)("span", {
                      className: "iconify size-3 opacity-25 ph--wallet-bold"
                    })
                  }), r.address ? (0, s.jsxs)("div", {
                    className: "flex items-center space-x-2",
                    children: [(0, s.jsx)("div", {
                      className: "flex cursor-pointer items-center space-x-1 whitespace-nowrap text-xs text-neutral-600 hover:text-neutral-300",
                      onClick: function (e) {
                        e?.preventDefault?.();
                        window.openModal();
                      },
                      children: (0, s.jsx)(es.F, {
                        tokenId: r.address
                      })
                    }), (0, s.jsx)(q.oi, {
                      tokenInfo: r,
                      onBalanceChange: e => {
                        w("fromPairValue", e.toString());
                        let t = (null == J ? void 0 : J.isFromBase) ? eu : eu ? 1 / eu : 0;
                        w("toPairValue", new o.Z(e).mul(t).toFixed());
                      }
                    })]
                  }) : null]
                })]
              }), (0, s.jsx)(ef, {
                testId: "fromPair",
                pair: r,
                pairName: "fromPairValue",
                disabled: !1,
                control: f,
                onSubmit: ei,
                watchAllFields: N,
                onChangeCalculate: e => {
                  let t = (0, b.Hd)(e) ? e : 0, r = (null == J ? void 0 : J.isFromBase) ? eu : eu ? 1 / eu : 0;
                  (w("fromPairValue", t || ""), w("toPairValue", new o.Z(t).mul(r).toDP(l.decimals).toFixed()));
                },
                disableTokenSelect: null == T ? void 0 : T.includes(r.address)
              }), eB ? (0, s.jsx)(el.Z, {
                className: "!mt-0 !px-2 !text-xxs",
                message: ("We recommend having at least ").concat(z.WO, " SOL for any transaction"),
                iconSize: 12
              }) : null]
            }), (0, s.jsx)($.Z, {
              isSubmitting: P.isSubmitting,
              onReverseClick: ed
            }), (0, s.jsxs)("div", {
              className: (0, y.cn)("flex min-h-[119px] flex-col space-y-2 rounded-xl border px-4 py-3", "focus-within:border-primary/50 focus-within:shadow-swap-input-dark", "border-neutral-850 bg-neutral-925"),
              children: [(0, s.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [(0, s.jsx)("span", {
                  className: "text-xs",
                  children: (0, s.jsx)(s.Fragment, {
                    children: "Buying"
                  })
                }), (0, s.jsxs)("div", {
                  className: "flex items-center space-x-1",
                  children: [(0, s.jsx)("div", {
                    className: "mb-px fill-current text-neutral-500",
                    children: (0, s.jsx)("span", {
                      className: "iconify size-3 opacity-25 ph--wallet-bold"
                    })
                  }), l.address ? (0, s.jsx)("div", {
                    className: "flex cursor-pointer items-center whitespace-nowrap text-xs text-neutral-600 hover:text-neutral-300",
                    children: (0, s.jsx)(es.F, {
                      tokenId: l.address
                    })
                  }) : null]
                })]
              }), (0, s.jsx)(ef, {
                testId: "toPair",
                pair: l,
                pairName: "toPairValue",
                control: f,
                onSubmit: eo,
                watchAllFields: N,
                onChangeCalculate: e => {
                  let t = (0, b.Hd)(e) ? e : 0, r = (null == J ? void 0 : J.isFromBase) ? eu : eu ? 1 / eu : 0;
                  (w("toPairValue", 0 === t ? "" : t), w("fromPairValue", 0 === t ? "0" : new o.Z(t).div(r).toFixed()));
                },
                disableTokenSelect: null == T ? void 0 : T.includes(l.address)
              })]
            })]
          }), (0, s.jsxs)("div", {
            className: "mb-2 flex-col-reverse space-y-2 sm:flex sm:flex-row sm:space-x-2 sm:space-y-0",
            children: [(0, s.jsxs)("div", {
              className: (0, y.cn)("flex !h-[90px] w-full flex-col justify-center space-y-1 rounded-lg bg-neutral-900 p-4 sm:w-[65%]", "border border-neutral-800 focus-within:border-primary/50 focus-within:shadow-swap-input-dark"),
              children: [(0, s.jsxs)("div", {
                className: "flex justify-between",
                children: [(0, s.jsxs)("div", {
                  className: "flex items-center",
                  children: [a ? (0, s.jsxs)("div", {
                    className: "flex items-center text-xs font-medium text-neutral-500",
                    children: [(null == J ? void 0 : J.isFromBase) ? (0, s.jsx)(s.Fragment, {
                      children: "Sell"
                    }) : (0, s.jsx)(s.Fragment, {
                      children: "Buy"
                    }), " ", (0, s.jsx)(s.Fragment, {
                      children: ("").concat(null == a ? void 0 : a.symbol, " at rate")
                    }), ev ? (0, s.jsx)(j.Z, {
                      className: "ml-1",
                      width: 8,
                      height: 8
                    }) : null]
                  }) : (0, s.jsx)(S.O, {
                    className: "h-4 w-2"
                  }), ek ? (0, s.jsx)("div", {
                    className: (0, y.cn)("ml-1 flex items-center text-xs font-medium", {
                      "text-amber": eC,
                      "text-primary": eP
                    }),
                    children: ("(").concat(eN, "%)")
                  }) : null]
                }), ej ? (0, s.jsx)("button", {
                  type: "button",
                  "data-testid": "useMarket",
                  className: "cursor-pointer rounded text-xxs font-semibold text-neutral-400 underline hover:text-neutral-200",
                  onClick: function (e) {
                    e?.preventDefault?.();
                    window.openModal();
                  },
                  children: (0, s.jsx)(s.Fragment, {
                    children: "Use Market"
                  })
                }) : null]
              }), (0, s.jsx)(c.Qr, {
                name: "targetPrice",
                control: f,
                render: e => {
                  let {field: {onChange: t, value: r}} = e;
                  return (0, s.jsxs)("div", {
                    children: [(0, s.jsxs)("div", {
                      className: "flex items-end",
                      children: [(0, s.jsx)(ee.Z, {
                        testId: "targetPrice",
                        decimals: x,
                        onChangeWithoutEffect: e => {
                          ((0, b.Hd)(e) && em((null == J ? void 0 : J.isFromBase) ? new o.Z(e).mul(N.fromPairValue || 0).toDP(x).toFixed() : new o.Z(N.fromPairValue || 0).div(e).toDP(x).toFixed()), t(e));
                        },
                        onFocus: () => U(!0),
                        value: r,
                        disabled: !1,
                        ref: D,
                        className: "flex-1 !text-left !text-sm !font-semibold !outline-none"
                      }), i ? (0, s.jsx)("div", {
                        className: "flex items-center",
                        children: (0, s.jsx)("span", {
                          className: "text-sm font-semibold",
                          children: null == i ? void 0 : i.symbol
                        })
                      }) : (0, s.jsx)(S.O, {
                        className: "h-6 w-11"
                      })]
                    }), i && (0, s.jsx)("div", {
                      className: "text-xs text-neutral-400",
                      children: (0, s.jsx)(en.default, {
                        prefix: "≈ ",
                        tokenInfo: i,
                        amount: Number(r),
                        maxDecimals: 6
                      })
                    })]
                  });
                }
              })]
            }), (0, s.jsx)(eg, {
              control: f,
              onCustomClick: e => {
                (e.preventDefault(), eE());
              },
              customDateLabel: Z
            })]
          }), eZ && (0, s.jsx)("div", {
            className: "bg-transparent align-bottom transition-all duration-700",
            children: (0, s.jsx)("div", {
              className: "rounded-xl border border-yellow-500 bg-yellow-300/25 px-3 py-2 align-middle text-xs font-medium text-yellow-500 transition-all duration-500",
              children: eZ
            })
          }), (0, s.jsx)(et.J, {
            tokenInfo: r
          }), (0, s.jsx)(et.J, {
            tokenInfo: l
          }), (0, s.jsx)("div", {
            className: "flex",
            children: R ? (0, s.jsx)(ea.Z, {
              type: "submit",
              disabled: eO,
              className: (0, y.cn)({
                "bg-emerald-500/70 text-gray-50 enabled:hover:bg-emerald-500/60": t === er.aO.BUY,
                "bg-rose-500/80 text-gray-50 enabled:hover:bg-rose-500/60": t === er.aO.SELL
              }),
              children: eB || !eA ? (0, s.jsxs)(s.Fragment, {
                children: ["Insufficient ", null == r ? void 0 : r.symbol]
              }) : (null == F ? void 0 : F.length) > 0 ? (0, s.jsx)(s.Fragment, {
                children: "Transfer Tax not supported"
              }) : eI || eV ? (0, s.jsx)(s.Fragment, {
                children: "Token account frozen"
              }) : P.isSubmitting ? (0, s.jsx)(s.Fragment, {
                children: "Submitting..."
              }) : (0, s.jsx)(s.Fragment, {
                children: "Place Trigger Order"
              })
            }) : (0, s.jsx)(X.p, {
              className: "w-full"
            })
          })]
        })
      });
    }), eg = (0, d.memo)(e => {
      let {control: t, onCustomClick: r, customDateLabel: n} = e, [l, a] = (0, d.useState)(!1), i = (0, d.useCallback)(() => {
        a(!0);
      }, [a]);
      return (0, s.jsxs)("div", {
        className: (0, y.cn)("group/expiry flex w-full flex-col space-y-1 rounded-lg bg-neutral-900 p-4 sm:w-[35%]", "border border-neutral-800 focus-within:border-primary/50 focus-within:shadow-swap-input-dark", "hover:cursor-pointer hover:border-primary/50 hover:shadow-swap-input-dark"),
        onClick: function (e) {
          e?.preventDefault?.();
          window.openModal();
        },
        children: [(0, s.jsx)("p", {
          className: "text-xs font-medium text-neutral-500",
          children: "Expiry"
        }), (0, s.jsx)(c.Qr, {
          name: "expiry",
          control: t,
          render: e => {
            let {field: {onChange: t, value: i}} = e;
            return (0, s.jsx)(ev, {
              open: l,
              setOpen: a,
              value: i,
              onValueChange: t,
              onCustomClick: r,
              customDateLabel: n
            });
          }
        })]
      });
    }), ev = (0, d.memo)(e => {
      let {open: t, setOpen: r, value: n, onValueChange: l, onCustomClick: a, customDateLabel: i} = e, o = (0, d.useMemo)(() => !C.yn[n], [n]);
      return (0, s.jsxs)(ei.Ph, {
        open: t,
        onOpenChange: r,
        value: n.length > 0 ? n : i,
        onValueChange: e => {
          e && (l(e), r(!1));
        },
        children: [(0, s.jsx)(ei.i4, {
          className: "border-none bg-transparent px-0 text-sm font-semibold focus:ring-0 group-hover/expiry:bg-transparent [&>span]:group-hover/expiry:text-neutral-300",
          children: o ? (0, s.jsx)("span", {
            children: i
          }) : (0, s.jsx)(ei.ki, {})
        }), (0, s.jsxs)(ei.Bw, {
          children: [Object.keys(C.yn).map(e => (0, s.jsx)(ei.Ql, {
            value: e,
            children: C.yn[e].name
          }, e)), (0, s.jsx)("button", {
            className: "relative flex w-full cursor-default select-none items-center rounded-md py-2 pl-2 pr-8 text-neutral-400 outline-none hover:bg-neutral-950 hover:text-neutral-300",
            onClick: function (e) {
              e?.preventDefault?.();
              window.openModal();
            },
            children: "Custom"
          })]
        })]
      });
    }), ej = e => {
      let {tradeSide: t, onOrderComplete: r, setOngoingOrder: a, openOrdersRefetch: j, openOrders: b} = e, {signTransaction: P, signAllTransactions: k, publicKey: F} = (0, n.Os)(), {constants: {CLUSTER: S}} = (0, n.MG)(), {fromPairTokenInfo: _, toPairTokenInfo: q, fixedTokenAddress: z} = (0, h.k)(), U = (0, n.C9)(), [W, H] = (0, d.useState)(!0), J = (0, x.Z)(S), {control: Q, handleSubmit: K, watch: G, setValue: Y, formState: X} = (0, c.cI)({
        defaultValues: {
          fromPair: J.initialFrom,
          toPair: J.initialTo,
          fromPairValue: "5",
          targetPrice: "",
          toPairValue: "",
          expiry: "Never"
        }
      }), {quoteTokenInfo: $, baseTokenInfo: ee, rateDecimals: et, priceFetched: er} = (0, f.b)(_, q);
      (0, d.useEffect)(() => {
        (Y("fromPair", _.address), Y("toPair", q.address), Y("targetPrice", ""), Y("toPairValue", ""));
      }, [_, q, Y]);
      let es = G(), en = (0, d.useMemo)(() => {
        let {fromPair: e, toPair: t, fromPairValue: r, targetPrice: s, toPairValue: n, expiry: l} = es;
        return !e || !t || 0 >= Number(r) || 0 >= Number(n) || 0 >= Number(s) || !l || X.isSubmitting;
      }, [es, X.isSubmitting]), {tokensWithTransferFee: el, isLoadingDasQuery: ea} = (e => {
        let {data: t, isLoading: r} = (e => {
          let t = (0, d.useMemo)(() => e.map(e => e.address.toString()), [e]);
          return (0, w.a)({
            queryKey: ["get_asset_batch", t.join("")],
            queryFn: async () => {
              try {
                let e = await fetch(n.zn, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                    jsonrpc: "2.0",
                    id: "getAssetBatch",
                    method: "getAssetBatch",
                    params: {
                      ids: t
                    }
                  })
                }), r = await e.json();
                if (r && r.result) return r.result;
                return null;
              } catch (e) {
                return null;
              }
            },
            enabled: t.length > 0
          });
        })((0, d.useMemo)(() => e.filter(Boolean), [e])), {processTokenInfo: s} = (function () {
          let {data: e} = (0, p.Z)();
          return {
            processTokenInfo: t => {
              let {mint_extensions: r, token_info: s} = t, {permanent_delegate: n, transfer_fee_config: l} = r || ({}), a = (null == e ? void 0 : e.epoch) || 0, i = null == l ? void 0 : l.older_transfer_fee, d = null == l ? void 0 : l.newer_transfer_fee, c = d && d.epoch <= a, u = c ? d : i, m = c ? void 0 : d, {decimals: x, mint_authority: h, freeze_authority: f, symbol: p} = s;
              return {
                tokenExtension: !!r,
                transferFee: u ? new o.Z(u.transfer_fee_basis_points).div(100).toFixed(2) : null,
                maxTransferFee: u ? v.uf.format(new o.Z(u.maximum_fee).div(10 ** x)) : null,
                upcomingTransferFee: {
                  fee: m ? new o.Z(m.transfer_fee_basis_points).div(100).toFixed(2) : null,
                  epoch: null == m ? void 0 : m.epoch
                },
                symbol: p,
                mintAuthority: h,
                freezeAuthority: f,
                permanentDelegate: null == n ? void 0 : n.delegate
              };
            }
          };
        })();
        return {
          tokensWithTransferFee: (0, d.useMemo)(() => null == t ? void 0 : t.map(t => {
            if (t) {
              let r = s(t);
              if (null !== r.transferFee) return {
                ...e.find(e => (null == e ? void 0 : e.address) === t.id),
                fee: r.transferFee
              };
            }
            return null;
          }).filter(Boolean), [e, t, s]),
          dasQuery: t,
          isLoadingDasQuery: r
        };
      })([_, q]), ei = (0, d.useMemo)(() => W ? "69" : "0", [W]), eo = (0, L.NL)(), {mutateAsync: ed} = (e => {
        let {onSuccess: t} = e, {signTransaction: r, walletMeta: s, isJupiterWallet: a} = (0, n.Os)(), {getTokenInfo: i} = (0, n.Bn)();
        return (0, A.D)({
          mutationFn: async e => {
            let {params: t, onOrderCreated: n} = e;
            try {
              if (!r) throw Error("Sign transaction is not available");
              let e = i(t.inputMint), s = i(t.outputMint);
              if (!e || !s) throw Error("Token info is not available");
              V.A.loadingSignature({
                id: E.w.CREATE_LIMIT_ORDER,
                isJupiter: a
              });
              let d = await Z.s.createOrder(t);
              n(d.order);
              let c = B.base64.decode(d.transaction), u = l.VersionedTransaction.deserialize(new Uint8Array(c)), m = await r(u);
              V.A.loading({
                id: E.w.CREATE_LIMIT_ORDER,
                title: "Confirming Transaction",
                description: "Placing limit order..."
              });
              let {signature: x} = await Z.s.execute({
                signedTransaction: O.from(m.serialize()).toString("base64"),
                requestId: d.requestId
              }), h = e.symbol, f = new o.Z(t.params.makingAmount).div(Math.pow(10, e.decimals)), p = s.symbol, g = new o.Z(t.params.takingAmount).div(Math.pow(10, s.decimals));
              return (V.A.success({
                id: E.w.CREATE_LIMIT_ORDER,
                title: "Confirmed Transaction",
                tx: x,
                description: ("Limit order placed ").concat(f.toNumber(), " ").concat(h, " @ ").concat(g, " ").concat(p)
              }), {
                limitOrder: d,
                signature: x
              });
            } catch (r) {
              console.error(r);
              let e = {
                wallet: null == s ? void 0 : s.name,
                createTriggerRequestParams: t,
                error: r instanceof Error ? r.message : JSON.stringify(r)
              };
              if (r instanceof I.B) {
                let t = await r.response.json();
                (Object.assign(e, {
                  signature: t.signature
                }), V.A.error({
                  id: E.w.CREATE_LIMIT_ORDER,
                  title: "Transaction Failed",
                  tx: t.signature ? t.signature : void 0,
                  error: t.error,
                  showHelp: !0
                }));
              } else V.A.error({
                id: E.w.CREATE_LIMIT_ORDER,
                title: "Transaction Failed",
                error: r,
                showHelp: !0
              });
              throw ((0, R.Kz)(C._9.CREATE_TRIGGER_FAILED, e), r);
            }
          },
          onSuccess: t
        });
      })({
        onSuccess: (e, t) => {
          let r = eo.getQueryData(["lo-market-price", null == $ ? void 0 : $.address, null == ee ? void 0 : ee.address]);
          (0, R.Kz)(C._9.CREATE_TRIGGER_SUCCESS, {
            createTriggerRequestParams: t.params,
            createTriggerResponse: e.limitOrder,
            createdTriggerSignature: e.signature,
            loMarketQuote: r
          });
        }
      }), ec = (0, d.useCallback)(async e => {
        var t, s;
        if (en || !F || !P || !k) return;
        let n = new (i())(new o.Z(e.fromPairValue).mul(10 ** _.decimals).round().toString()), d = new (i())(new o.Z(e.toPairValue).mul(10 ** q.decimals).round().toString()), c = null != (s = null == (t = C.yn[e.expiry]) ? void 0 : t.value) ? s : Number(e.expiry), u = "Never" === e.expiry ? null : new (i())(new Date().valueOf() / 1000 + c), x = l.PublicKey.default;
        try {
          await ed({
            params: {
              params: {
                makingAmount: n.toString(),
                takingAmount: d.toString(),
                expiredAt: null == u ? void 0 : u.toString(),
                slippageBps: ei
              },
              maker: F.toString(),
              payer: F.toString(),
              inputMint: e.fromPair,
              outputMint: e.toPair,
              computeUnitPrice: "auto"
            },
            onOrderCreated: t => {
              x = new l.PublicKey(t);
              let r = {
                closeTx: "",
                createdAt: Date.now().toString(),
                expiredAt: u,
                inputMint: new l.PublicKey(e.fromPair),
                makingAmount: n.toString(),
                openTx: "",
                orderKey: x,
                outputMint: new l.PublicKey(e.toPair),
                programVersion: T.Z,
                rawMakingAmount: n,
                rawRemainingMakingAmount: n,
                rawRemainingTakingAmount: d,
                rawTakingAmount: d,
                remainingMakingAmount: "0",
                remainingTakingAmount: "0",
                status: "Open",
                takingAmount: d.toString(),
                trades: [],
                updatedAt: Date.now().toString(),
                userPubkey: F,
                slippageBps: ei
              };
              a && a(e => [...e, r]);
            }
          });
        } catch (e) {
          (console.error(e), a && a(e => e.filter(e => e.userPubkey.toBase58() !== x.toBase58())));
        } finally {
          (setTimeout(() => {
            j && j();
          }, 1000), U([_.address, q.address, m.W4]), null == r || r());
        }
      }, [en, F, P, k, _.decimals, _.address, q.decimals, q.address, ed, ei, U, j, r, a]);
      (0, d.useEffect)(() => {
        a && a(e => e.filter(e => !(null == b ? void 0 : b.orders.find(t => t.userPubkey && e.userPubkey.equals(t.userPubkey)))));
      }, [a, b]);
      let [eu, em] = (0, d.useState)({
        day: 0,
        hour: 0,
        minute: 0
      }), ex = (0, d.useMemo)(() => [eu.day ? ("").concat(eu.day, "d") : "", eu.hour ? ("").concat(eu.hour, "h") : "", eu.minute ? ("").concat(eu.minute, "m") : ""].join(" "), [eu]), eh = (0, d.useMemo)(() => {
        let e = new o.Z(es.toPairValue || "0"), t = e.toString();
        if (W) {
          let r = new o.Z(ei).div(10000), s = new o.Z(1).sub(r), n = e.mul(s);
          t = n.greaterThan(0) ? n.toFixed(4) : "0";
        }
        return ("").concat(t, " ").concat(q.symbol);
      }, [es.toPairValue, W, q.symbol, ei]);
      return ee && $ ? (0, s.jsx)("div", {
        className: "relative flex w-full justify-center",
        children: (0, s.jsxs)("div", {
          className: "flex w-full flex-col",
          children: [(0, s.jsxs)("div", {
            className: "mb-2 flex min-h-[28px] items-center gap-x-2 text-xs text-neutral-500",
            children: [(0, s.jsx)("span", {
              className: (0, y.cn)("font-semibold", W ? "text-neutral-200" : "text-neutral-500"),
              children: "ULTRA"
            }), (0, s.jsx)(D, {
              active: W,
              onClick: function (e) {
                e?.preventDefault?.();
                window.openModal();
              },
              disabled: en
            }), (0, s.jsx)("span", {
              className: (0, y.cn)("font-semibold", W ? "text-neutral-500" : "text-neutral-200"),
              children: "EXACT"
            }), (0, s.jsx)(u.cy, {
              content: (0, s.jsxs)("ul", {
                className: "w-full list-outside list-disc pl-6",
                children: [(0, s.jsx)("li", {
                  children: "Ultra Mode: Improves your chance of order execution during volatile periods by intelligently applying some minimal slippage"
                }), (0, s.jsx)("li", {
                  children: "Exact Mode: Receive the exact output amount specified (minus platform fees) with 0 slippage but with a lower chance of execution during volatile periods"
                })]
              }),
              children: (0, s.jsx)("div", {
                className: "flex items-center fill-current text-neutral-600",
                children: (0, s.jsx)(g.Z, {
                  height: 11,
                  width: 11
                })
              })
            })]
          }), (0, s.jsx)("div", {
            className: "flex w-full flex-col justify-center lg:flex-row",
            children: (0, s.jsx)(ep, {
              tradeSide: t,
              fromPairTokenInfo: _,
              toPairTokenInfo: q,
              baseTokenInfo: ee,
              quoteTokenInfo: $,
              baseAndQuoteTokenPriceFetched: er,
              rateDecimals: et,
              control: Q,
              isDisabled: en,
              onSubmit: K(ec),
              watchAllFields: es,
              setValue: Y,
              formState: X,
              isLoadingDasQuery: ea,
              tokenHaveTransferFee: el,
              customDateLabel: ex,
              setCustomDate: em,
              fixedTokenAddress: z
            })
          }), (0, s.jsxs)("div", {
            className: "mt-3 space-y-1 rounded-xl border border-neutral-800 bg-neutral-925/50 px-4 py-3 text-xs text-neutral-400",
            children: [W ? (0, s.jsx)(s.Fragment, {
              children: ("Ultra Mode: You will receive at least ").concat(eh, ", minus platform fees.")
            }) : (0, s.jsx)(s.Fragment, {
              children: "Exact Mode: You will receive exactly what you have specified, minus platform fees."
            }), (0, s.jsx)(N.d, {
              className: "ml-1 underline hover:text-primary",
              href: typeof "https://support.jup.ag/hc/en-us/articles/18734458673180-Learn-how-Trigger-Order-works" === "string" ? "#" : "https://support.jup.ag/hc/en-us/articles/18734458673180-Learn-how-Trigger-Order-works",
              children: "Learn more",
              onClick: function (e) {
                e?.preventDefault?.();
                window.openModal();
              }
            })]
          }), (0, s.jsx)(M, {
            rateDecimals: et,
            fromPairTokenInfo: _,
            toPairTokenInfo: q,
            targetPrice: es.targetPrice,
            expiry: es.expiry,
            customDateLabel: ex,
            fromPairValue: es.fromPairValue,
            toPairValue: es.toPairValue,
            slippageBps: ei
          })]
        })
      }) : null;
    };
  },
  37766: function (e, t, r) {
    r.d(t, {
      Z: () => o
    });
    var s = r(74334), n = r(56610), l = r(19844), a = r(10316);
    let i = e => {
      let {children: t, className: r = "", height: l, maxHeight: i, expanded: o} = e, [d, c] = (0, n.useState)(l);
      return ((0, n.useEffect)(() => {
        o ? c(i) : c(l);
      }, [l, i, o]), (0, s.jsx)("div", {
        className: (0, a.cn)("overflow-hidden transition-all duration-200", o ? "animate-fade-in" : "animate-fade-out", r),
        style: {
          height: d,
          maxHeight: i
        },
        children: t
      }));
    }, o = e => {
      let {message: t, iconSize: r = 20, className: n} = e;
      return (0, s.jsx)(i, {
        height: 0,
        maxHeight: "auto",
        expanded: !!t,
        children: (0, s.jsxs)("div", {
          className: (0, a.cn)("mt-1 flex items-center fill-current text-xs font-semibold text-white md:px-6", n),
          children: [(0, s.jsx)(l.Z, {
            width: r,
            style: {
              minWidth: r
            },
            height: r
          }), (0, s.jsx)("span", {
            className: "ml-2",
            children: t
          })]
        })
      });
    };
  },
  23725: function (e, t, r) {
    r.d(t, {
      Z: () => l
    });
    var s = r(74334), n = r(10316);
    let l = e => {
      let {children: t, className: r, animate: l = !0} = e;
      return (0, s.jsx)("span", {
        className: (0, n.cn)("from-[rgba(199,242,132,1))] bg-v2-text-gradient to-[rgba(0,190,240,1)] bg-clip-text text-transparent", r, {
          "animate-shine": l
        }),
        children: t
      });
    };
  },
  70421: function (e, t, r) {
    r.d(t, {
      Z: () => l
    });
    var s = r(74334), n = r(10316);
    let l = e => {
      let {className: t, baseColor: r = "currentColor", spinnerColor: l = "currentColor", width: a = 20, height: i = 20} = e;
      return (0, s.jsx)("div", {
        className: (0, n.cn)("flex items-center justify-center rounded-full", t),
        style: {
          width: a,
          height: i
        },
        children: (0, s.jsxs)("svg", {
          className: "animate-spin text-white",
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          width: a,
          height: i,
          children: [(0, s.jsx)("circle", {
            className: "opacity-25",
            cx: "12",
            cy: "12",
            r: "10",
            stroke: r,
            strokeWidth: "4"
          }), (0, s.jsx)("path", {
            className: "opacity-75",
            fill: l,
            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          })]
        })
      });
    };
  },
  53890: function (e, t, r) {
    r.d(t, {
      Z: () => c,
      k: () => d
    });
    var s = r(74334), n = r(6906), l = r(56610), a = r(23989);
    let i = {
      decimals: 6,
      address: "",
      chainId: 101,
      name: "",
      symbol: ""
    }, o = (0, l.createContext)(null), d = () => {
      let e = (0, l.useContext)(o);
      if (!e) throw Error("useLimitOrderUi must be used within LimitOrderProvider");
      return e;
    }, c = e => {
      var t, r;
      let {fromPairTokenInfo: d, toPairTokenInfo: c, onTokenChange: u, children: m, fixedTokenAddress: x, onReverseClick: h} = e, [f, p] = (0, a.V)(), {fetchTokenAccounts: g} = (0, n.gZ)();
      (0, l.useEffect)(() => {
        f && p && g([f.address, p.address]);
      }, [f, p, g]);
      let v = (0, l.useCallback)((e, t) => {
        u && u(e, t);
      }, [u]);
      return (0, s.jsx)(o.Provider, {
        value: {
          onPairChange: v,
          fromPairTokenInfo: null != (t = null != d ? d : f) ? t : i,
          toPairTokenInfo: null != (r = null != c ? c : p) ? r : i,
          fixedTokenAddress: x,
          onReverseClick: h
        },
        children: m
      });
    };
  },
  90745: function (e, t, r) {
    r.d(t, {
      Z: () => c,
      s: () => d
    });
    var s = r(6906), n = r(2593), l = r(63303), a = r(72156), i = r(62647), o = r(56610);
    let d = e => {
      let {quoteTokenInfo: t, baseTokenInfo: r, isBaseQuoteMode: s, rateDecimals: l, isSubmitting: d} = e, c = (0, o.useMemo)(() => t && r ? (null == s ? void 0 : s.isFromBase) ? new a.Z(1).mul(10 ** (null == t ? void 0 : t.decimals)).toFixed(0) : new a.Z(1).mul(10 ** (null == r ? void 0 : r.decimals)).toFixed(0) : "0", [null == s ? void 0 : s.isFromBase, t, r]), {data: u, isFetching: m, isFetched: x, isError: h} = (0, n.a)({
        queryKey: ["lo-market-price", null == t ? void 0 : t.address, null == r ? void 0 : r.address],
        queryFn: async () => {
          try {
            if (!t || !r) return null;
            let e = (null == s ? void 0 : s.isFromBase) ? t : r, n = (null == s ? void 0 : s.isFromBase) ? r : t, l = {
              inputMint: e.address.toString(),
              outputMint: n.address.toString(),
              amount: c,
              slippageBps: "0",
              maxAccounts: "64"
            }, a = await fetch(("").concat(i.Zb, "/quote?").concat(new URLSearchParams(l).toString()));
            return await a.json();
          } catch (e) {
            return (console.error(e), null);
          }
        },
        enabled: !d || !!((null == t ? void 0 : t.address) && (null == r ? void 0 : r.address)),
        refetchInterval: 20000,
        retry: 3,
        retryDelay: 1000,
        select: e => {
          if (!e) return null;
          let n = (null == s ? void 0 : s.isFromBase) ? t : r, i = (null == s ? void 0 : s.isFromBase) ? r : t;
          if (!n || !i) return null;
          let o = new a.Z(e.inAmount.toString()).div(10 ** (null == n ? void 0 : n.decimals)), d = new a.Z(e.outAmount.toString()).div(10 ** (null == i ? void 0 : i.decimals)), c = new a.Z(o).div(d), u = l ? c.toDP(l) : c;
          return (null == s ? void 0 : s.isFromBase) ? u : new a.Z(1).div(u);
        }
      });
      return {
        swapMarketPrice: m || h ? null : u,
        lastMarketPrice: h ? null : u,
        isFetching: m,
        isFetched: x
      };
    }, c = () => {
      let {constants: {JUPITER_QUOTE_API_URL: e}} = (0, s.MG)();
      return ((0, l.NL)(), {
        fetchPrice: (0, o.useCallback)(async t => {
          let {fromTokenInfo: r, toTokenInfo: s, amount: n, decimals: l} = t, i = {
            inputMint: r.address.toString(),
            outputMint: s.address.toString(),
            amount: n,
            slippageBps: "0",
            maxAccounts: "64"
          }, o = await fetch(("").concat(e, "/quote?").concat(new URLSearchParams(i).toString())), d = await o.json(), c = new a.Z(d.inAmount.toString()).div(10 ** r.decimals), u = new a.Z(d.outAmount.toString()).div(10 ** s.decimals), m = new a.Z(c).div(u);
          return l ? {
            marketRate: m.toDP(l),
            priceImpactPct: 100 * Number(d.priceImpactPct)
          } : {
            marketRate: m,
            priceImpactPct: 100 * Number(d.priceImpactPct)
          };
        }, [e])
      });
    };
  },
  1533: function (e, t, r) {
    r.d(t, {
      Z: () => a
    });
    var s = r(6906), n = r(53340), l = r(56610);
    let a = () => {
      let {appName: e} = (0, s.MG)(), [t, r] = (0, n._)(("").concat(e, "-spot-show-summary"), !1);
      return {
        showSummary: t,
        toggleSummary: (0, l.useCallback)(() => {
          r(e => !e);
        }, [r]),
        setSpotSummary: (0, l.useCallback)(e => {
          r(e);
        }, [r])
      };
    };
  },
  26913: function (e, t, r) {
    r.d(t, {
      J: () => n
    });
    var s = r(74334);
    let n = e => (0, s.jsxs)("svg", {
      viewBox: "0 0 10 10",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      ...e,
      children: [(0, s.jsxs)("g", {
        clipPath: "url(#clip0_1785_33901)",
        children: [(0, s.jsx)("path", {
          d: "M7.20001 7.86127C7.45429 7.86127 7.69815 7.96228 7.87795 8.14208C8.05775 8.32188 8.15876 8.56574 8.15876 8.82002C8.15876 8.56574 8.25977 8.32188 8.43957 8.14208C8.61937 7.96228 8.86324 7.86127 9.11751 7.86127C8.86324 7.86127 8.61937 7.76026 8.43957 7.58046C8.25977 7.40066 8.15876 7.15679 8.15876 6.90252C8.15876 7.15679 8.05775 7.40066 7.87795 7.58046C7.69815 7.76026 7.45429 7.86127 7.20001 7.86127ZM7.20001 2.10877C7.45429 2.10877 7.69815 2.20978 7.87795 2.38958C8.05775 2.56938 8.15876 2.81324 8.15876 3.06752C8.15876 2.81324 8.25977 2.56938 8.43957 2.38958C8.61937 2.20978 8.86324 2.10877 9.11751 2.10877C8.86324 2.10877 8.61937 2.00776 8.43957 1.82796C8.25977 1.64816 8.15876 1.40429 8.15876 1.15002C8.15876 1.40429 8.05775 1.64816 7.87795 1.82796C7.69815 2.00776 7.45429 2.10877 7.20001 2.10877Z",
          stroke: "currentColor",
          strokeWidth: "0.95875",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }), (0, s.jsx)("path", {
          d: "M4.09971 1.42435C4.08095 1.37314 4.04691 1.32892 4.00219 1.29768C3.95748 1.26644 3.90425 1.24969 3.84971 1.24969C3.79517 1.24969 3.74194 1.26644 3.69723 1.29768C3.65251 1.32892 3.61847 1.37314 3.59971 1.42435L3.34534 2.11935C3.1457 2.6643 2.82969 3.15919 2.41931 3.56957C2.00893 3.97996 1.51403 4.29596 0.969084 4.4956L0.274086 4.74998C0.222871 4.76874 0.178655 4.80279 0.147417 4.8475C0.116179 4.89221 0.0994263 4.94543 0.0994263 4.99998C0.0994263 5.05452 0.116179 5.10775 0.147417 5.15246C0.178655 5.19717 0.222871 5.23122 0.274086 5.24998L0.969084 5.50435C1.51403 5.70399 2.00893 6.02001 2.41931 6.43039C2.82969 6.84077 3.1457 7.33566 3.34534 7.88061L3.59971 8.5756C3.61847 8.62681 3.65251 8.67103 3.69723 8.70227C3.74194 8.7335 3.79517 8.75026 3.84971 8.75026C3.90425 8.75026 3.95748 8.7335 4.00219 8.70227C4.04691 8.67103 4.08095 8.62681 4.09971 8.5756L4.35409 7.88061C4.55372 7.33566 4.86973 6.84077 5.28011 6.43039C5.69049 6.02001 6.18538 5.70399 6.73033 5.50435L7.42533 5.24998C7.47654 5.23122 7.52076 5.19717 7.552 5.15246C7.58323 5.10775 7.59999 5.05452 7.59999 4.99998C7.59999 4.94543 7.58323 4.89221 7.552 4.8475C7.52076 4.80279 7.47654 4.76874 7.42533 4.74998L6.73033 4.4956C6.18538 4.29596 5.8125 3.97995 5.40212 3.56957C4.99174 3.15919 4.55372 2.6643 4.35409 2.11935L4.09971 1.42435Z",
          fill: "currentColor"
        })]
      }), (0, s.jsx)("defs", {
        children: (0, s.jsx)("clipPath", {
          id: "clip0_1785_33901",
          children: (0, s.jsx)("rect", {
            width: "10",
            height: "10",
            fill: "white"
          })
        })
      })]
    });
  }
}]);
