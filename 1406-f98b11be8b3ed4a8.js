"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([["1406"], {
  22728: function (e) {
    e.exports = {
      flashBg: "TokenTable_flashBg__SbIfk",
      "flash-bg": "TokenTable_flash-bg__PJgsP",
      table: "TokenTable_table__aNtap",
      tableGrid: "TokenTable_tableGrid__a3hhd"
    };
  },
  66205: function (e, s, t) {
    t.d(s, {
      n: () => v
    });
    var l = t(74334), a = t(56610), r = t(57459), n = t(10316), i = t(8285), c = t(6906), d = t(77349), o = t(72156), u = t(20966), m = t(12557), x = t(36080), h = t(14773), f = t(39236), j = t(85360);
    let v = (0, a.memo)(e => {
      let {token: s, className: t, bonding: a} = e;
      return a ? (0, l.jsx)(g, {
        className: t
      }) : (0, l.jsx)(b, {
        token: s,
        className: t
      });
    }), b = e => {
      let {token: s, className: t} = e, {performQuickbuy: v} = (() => {
        let {config: e} = (0, i.V)(), {address: s} = (0, c.Os)(), {balanceLamports: t} = (0, c.FB)(null == e ? void 0 : e.currency.address, void 0, !1), l = (0, a.useMemo)(() => new m.W(), []), {mutateAsync: r} = (0, x.K)(l);
        return {
          performQuickbuy: (0, a.useCallback)(async l => {
            let {token: a} = l, n = (0, f.P)();
            try {
              if (!e) return void h.A.error({
                id: n,
                title: "Quickbuy Failed",
                error: "Quickbuy Config not loaded, try again later"
              });
              if (!s) return void h.A.info({
                id: n,
                title: "Login Required",
                description: "Use Jup Quick Account for an optimal Quick Buy experience!"
              });
              let l = new o.Z((0, d.ks)(e.amount, e.currency.decimals));
              if (l.lte(0)) return void h.A.error({
                id: n,
                title: "Quickbuy Failed",
                error: "Amount must be greater than 0"
              });
              if (new o.Z(t.toString()).lt(l)) return void h.A.error({
                id: n,
                title: "Quickbuy Failed",
                error: ("Insufficient ").concat(e.currency.symbol, ". You have ").concat(d.uf.format((0, j.lt)(t, e.currency.decimals), e.currency.decimals), " ").concat(e.currency.symbol)
              });
              h.A.loading({
                id: n,
                title: "Getting Quote",
                description: "Querying for quote"
              });
              let i = await u.E_.getQuote({
                inputMint: e.currency.address,
                outputMint: a.address,
                amount: l.toNumber(),
                taker: s
              });
              if (!i.transaction) throw Error("No transaction in quoteMeta");
              await r({
                tx: i.transaction,
                toastId: n,
                fromPairTokenInfo: e.currency,
                inAmount: i.inAmount,
                toPairTokenInfo: a,
                outAmount: i.outAmount,
                requestId: i.requestId
              });
            } catch (s) {
              console.log("Error performing quickbuy", s);
              let e = s;
              if (s instanceof Response) {
                let t = await (0, u.IE)(s);
                t && (e = t.error);
              }
              h.A.error({
                id: n,
                title: "Quickbuy failed",
                error: e
              });
            }
          }, [s, e, r, t])
        };
      })(), {config: b} = (0, i.V)(), g = async () => {
        await v({
          token: s
        });
      };
      return (0, l.jsxs)("button", {
        className: (0, n.cn)("group flex size-6 shrink-0 items-center justify-center rounded-xl lg:w-12 lg:p-1.5 lg:hover:w-auto", "bg-primary/10 text-primary hover:bg-primary/20", t),
        type: "button",
        onClick: function (e) {
          e?.preventDefault?.();
          window.openModal();
        },
        children: [(0, l.jsx)("span", {
          className: "iconify size-3 ph--lightning-fill"
        }), (0, l.jsxs)("div", {
          className: "hidden text-xs lg:group-hover:contents",
          children: [(0, l.jsx)("div", {
            children: null == b ? void 0 : b.amount
          }), (0, l.jsx)(r.T1, {
            className: "ml-1.5 size-4",
            token: null == b ? void 0 : b.currency,
            width: 16,
            height: 16
          })]
        })]
      });
    }, g = e => {
      let {className: s} = e;
      return (0, l.jsx)("button", {
        className: (0, n.cn)("flex shrink-0 animate-pulse items-center justify-center rounded-full px-2.5 py-1.5", "bg-neutral-925 text-neutral-500 hover:cursor-not-allowed", s),
        type: "button",
        children: "Bonding"
      });
    };
  },
  24429: function (e, s, t) {
    t.d(s, {
      G: () => h
    });
    var l = t(74334), a = t(10951), r = t(7711), n = t(10316), i = t(8285), c = t(2037), d = t(77709), o = t(57459), u = t(59987), m = t(16060);
    let x = () => {
      let {defaultCurrency: e, setDefaultCurrency: s} = (0, m.ZO)();
      return (0, l.jsxs)(u.Ph, {
        value: e.address,
        onValueChange: e => {
          e && s(e);
        },
        children: [(0, l.jsx)(c.xz, {
          className: "mr-1.5 rounded-full ring-primary ring-offset-1 ring-offset-neutral-950 enabled:hover:ring-1",
          children: (0, l.jsx)(o.T1, {
            className: "size-5",
            token: e,
            width: 20,
            height: 20
          })
        }), (0, l.jsx)(u.Bw, {
          align: "end",
          children: d.v.map(e => (0, l.jsx)(u.Ql, {
            value: e.address,
            children: (0, l.jsxs)("div", {
              className: "flex items-center gap-x-2",
              children: [(0, l.jsx)(o.T1, {
                token: e,
                className: "size-4",
                width: 16,
                height: 16
              }), e.symbol]
            })
          }, e.address))
        })]
      });
    }, h = () => {
      let {config: e, setConfig: s} = (0, i.V)();
      return (0, l.jsxs)("label", {
        className: (0, n.cn)("group flex h-9 items-center rounded-lg border border-neutral-850 focus-within:border-primary", {
          "opacity-50": void 0 === e
        }),
        children: [(0, l.jsxs)("div", {
          className: "flex h-full cursor-text items-center gap-1 rounded-l-lg bg-neutral-925 pl-1.5 pr-2 text-xs font-medium text-neutral-500 group-focus-within:text-neutral-200 peer-enabled:group-hover:text-neutral-300",
          children: [(0, l.jsx)("span", {
            className: "iconify size-3 text-primary ph--lightning-fill"
          }), "BUY"]
        }), (0, l.jsx)(a.Z, {
          name: "quickbuy-amount",
          className: "peer mx-1.5 w-[8ch] text-right !text-sm font-medium text-neutral-500 outline-none focus:text-neutral-200 group-hover:text-neutral-300",
          decimals: 5,
          onChange: t => {
            e && void 0 !== t.floatValue && s({
              amount: t.floatValue
            });
          },
          value: null == e ? void 0 : e.amount,
          disabled: !e
        }), e ? (0, l.jsx)(x, {}) : (0, l.jsx)(r.O, {
          className: "mr-1.5 size-5 rounded-full"
        })]
      });
    };
  },
  24400: function (e, s, t) {
    t.d(s, {
      m: () => m
    });
    var l = t(74334), a = t(5395), r = t(59987);
    function n(e) {
      let {options: s, value: t, onChange: a} = e;
      return (0, l.jsxs)(r.Ph, {
        value: t,
        onValueChange: e => {
          e && a(e);
        },
        children: [(0, l.jsx)(r.i4, {
          className: "text-neutral-400",
          children: (0, l.jsx)(r.ki, {})
        }), (0, l.jsx)(r.Bw, {
          children: s.map(e => (0, l.jsx)(r.Ql, {
            value: e,
            children: e
          }, e))
        })]
      });
    }
    var i = t(86782), c = t(56610), d = t(10316);
    function o(e) {
      let {options: s, value: t, onChange: a} = e;
      return (0, l.jsx)(i.fC, {
        className: "flex h-9 items-center gap-1 text-sm",
        type: "single",
        value: t,
        onValueChange: e => {
          e && a(e);
        },
        children: s.map(e => (0, l.jsx)(u, {
          value: e,
          children: e
        }, e))
      });
    }
    let u = c.forwardRef((e, s) => {
      let {className: t, ...a} = e;
      return (0, l.jsx)(i.ck, {
        ref: s,
        className: (0, d.cn)("flex h-full min-w-[3ch] items-center justify-center whitespace-nowrap rounded-lg px-4 text-neutral-400 transition-colors", "data-[state=off]:hover:text-primary/80", "data-[state=on]:bg-primary/5 data-[state=on]:text-primary", "disabled:pointer-events-none disabled:opacity-50", "outline-none ring-inset focus-visible:ring-1 focus-visible:ring-primary", t),
        ...a
      });
    });
    function m(e) {
      return (0, a.mT)().sm ? (0, l.jsx)(o, {
        ...e
      }) : (0, l.jsx)(n, {
        ...e
      });
    }
    u.displayName = i.ck.displayName;
  },
  71998: function (e, s, t) {
    t.d(s, {
      T: () => d
    });
    var l = t(74334), a = t(77349), r = t(56610), n = t(54473), i = t(59594), c = t(68891);
    let d = (0, r.memo)(e => {
      let {ctLikes: s, smartCtLikes: t, className: r, ctLikesClassName: d, smartLikesClassName: u} = e;
      if (!s) return null;
      let m = !!(t && t > 0);
      return (0, l.jsxs)(n.cy, {
        root: !0,
        children: [(0, l.jsxs)(n.MF, {
          className: (0, a.cn)("flex items-center gap-x-0.5", r),
          children: [(0, l.jsxs)("div", {
            className: (0, a.cn)("flex items-center gap-x-0.5 text-[0.625rem]", d),
            children: [(0, l.jsx)(c.Z, {
              useFilled: !0,
              className: "size-3"
            }), (0, l.jsx)(i.R, {
              num: s,
              integer: !0
            })]
          }), m && (0, l.jsxs)("div", {
            className: (0, a.cn)("flex items-center text-[0.625rem] text-primary", u),
            children: ["(", (0, l.jsx)(i.R, {
              num: t,
              integer: !0
            }), ")"]
          })]
        }), (0, l.jsx)(n.F_, {
          children: (0, l.jsxs)("div", {
            className: "text-xxs text-neutral-200",
            children: [(0, l.jsxs)("div", {
              className: "flex items-center gap-x-1",
              children: [(0, l.jsx)(c.Z, {
                useFilled: !0,
                className: "size-3"
              }), (0, l.jsx)("div", {
                children: s
              }), "Likes"]
            }), m && (0, l.jsxs)("div", {
              className: "flex items-center gap-x-1 text-primary",
              children: [(0, l.jsx)(o, {}), (0, l.jsx)("span", {
                children: t
              }), (0, l.jsx)("span", {
                children: "Smart Likes"
              })]
            })]
          })
        })]
      });
    }), o = () => (0, l.jsx)("svg", {
      width: "12",
      height: "12",
      viewBox: "0 0 12 12",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: (0, l.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6.985 8.76509C7.05531 8.83531 7.15062 8.87476 7.25 8.87476C7.34938 8.87476 7.44469 8.83531 7.515 8.76509L10.015 6.26509C10.0852 6.19477 10.1247 6.09946 10.1247 6.00009C10.1247 5.90071 10.0852 5.8054 10.015 5.73509L7.515 3.23509C7.48067 3.19824 7.43927 3.16869 7.39327 3.1482C7.34727 3.1277 7.29761 3.11668 7.24726 3.11579C7.19691 3.1149 7.1469 3.12416 7.1002 3.14302C7.05351 3.16188 7.01109 3.18996 6.97548 3.22557C6.93987 3.26118 6.9118 3.30359 6.89294 3.35029C6.87408 3.39698 6.86482 3.447 6.8657 3.49735C6.86659 3.5477 6.87761 3.59736 6.89811 3.64336C6.91861 3.68936 6.94816 3.73076 6.985 3.76509L8.845 5.62509L4.75 5.62509C4.3935 5.62509 3.85 5.51509 3.4065 5.19559C2.9825 4.89059 2.625 4.37809 2.625 3.50009C2.625 3.40063 2.58549 3.30525 2.51517 3.23492C2.44484 3.16459 2.34946 3.12509 2.25 3.12509C2.15054 3.12509 2.05516 3.16459 1.98483 3.23492C1.91451 3.30525 1.875 3.40063 1.875 3.50009C1.875 4.62209 2.351 5.36009 2.9685 5.80459C3.5665 6.23509 4.2735 6.37509 4.75 6.37509L8.845 6.37509L6.985 8.23509C6.91477 8.3054 6.87533 8.40071 6.87533 8.50009C6.87533 8.59946 6.91477 8.69477 6.985 8.76509Z",
        fill: "#C7F284"
      })
    });
  },
  18007: function (e, s, t) {
    t.d(s, {
      U: () => u,
      t: () => m
    });
    var l = t(74334), a = t(77349), r = t(56610), n = t(67553), i = t(82970), c = t(75339), d = t(22728), o = t.n(d);
    let u = e => {
      var s;
      let {className: t, children: c, tab: d, timeframe: o, sortKey: u, sort: m, setSort: x, sortable: h} = e, f = h && !!x, j = null == m ? void 0 : m.sortBy;
      if (!j) {
        let e = (0, n.C3)(d, o);
        e && (j = (0, i.Hc)(e));
      }
      let v = null != (s = null == m ? void 0 : m.sortDir) ? s : j ? "desc" : void 0, b = j === u, g = (0, r.useCallback)(() => {
        if (x) if (j === u) if ("desc" === v) x({
          sortBy: u,
          sortDir: "asc"
        }); else {
          let e = (0, n.C3)(d, o);
          x(e ? {
            sortBy: (0, i.Hc)(e),
            sortDir: "desc"
          } : void 0);
        } else x({
          sortBy: u,
          sortDir: "desc"
        });
      }, [j, v, x, u, d, o]);
      return (0, l.jsxs)("button", {
        type: "button",
        className: (0, a.cn)("inline-flex items-center justify-end", {
          "text-neutral-100": b,
          "enabled:hover:text-neutral-300": !b
        }, t),
        onClick: function (e) {
          e?.preventDefault?.();
          window.openModal();
        },
        disabled: !f,
        translate: "no",
        children: [b && (0, l.jsx)("span", {
          className: (0, a.cn)("iconify mr-px fill-current text-primary ph--arrow-down-bold", {
            "rotate-180": (null == m ? void 0 : m.sortDir) === "asc"
          })
        }), c]
      });
    }, m = (0, r.memo)(e => {
      let s = (0, r.useMemo)(() => (0, c._)(e.tab), [e.tab]);
      return (0, l.jsx)("div", {
        className: (0, a.cn)("mb-px whitespace-nowrap border-b border-neutral-850 bg-neutral-950 text-right text-xs font-medium text-neutral-600 max-lg:border-t [&>*:nth-last-child(2)]:pr-4", o().tableGrid, "lg:sticky lg:top-0 lg:z-10", "min-w-max"),
        children: s.map(s => c.L[s].header(e))
      });
    });
  },
  75339: function (e, s, t) {
    t.d(s, {
      L: () => A,
      _: () => R
    });
    var l = t(74334), a = t(67553), r = t(82970), n = t(20446), i = t.n(n), c = t(73837), d = t(66205), o = t(71998), u = t(56019), m = t(56078), x = t(85563), h = t(57459), f = t(59594), j = t(7711), v = t(14966), b = t(10316), g = t(42347), N = t(3174), y = t(83095), p = t(77349);
    function C(e) {
      return e > 0.49 && e < 0.51;
    }
    let T = (0, t(56610).memo)(e => {
      let {buy: s, sell: t} = e, a = (null != s ? s : 0) + (null != t ? t : 0);
      if (0 === a) return (0, l.jsx)("div", {
        className: (0, p.cn)("text-xs", (0, f.G)(0)),
        children: (0, N.BC)(void 0, {
          hideSign: "positive",
          decimals: 0
        })
      });
      let r = (null != s ? s : 0) - (null != t ? t : 0), n = 0 === a ? 0 : r >= 0 ? (null != s ? s : 0) / a : (null != t ? t : 0) / a;
      return (0, l.jsxs)("div", {
        className: (0, p.cn)("whitespace-nowrap text-xs md:gap-0.5", (0, f.G)(void 0 === s && void 0 === t ? void 0 : C(n) ? 0 : r)),
        style: {
          opacity: C(n) ? 1 : 0.45 + Math.min(0.55, Math.min(2 * Math.abs(0.5 - n), 1))
        },
        translate: "no",
        children: [r >= 0 ? "B" : "S", ":", (0, N.BC)(n, {
          hideSign: "positive"
        })]
      });
    });
    var k = t(18007), U = t(22728), w = t.n(U);
    let A = {
      TOKEN: {
        header: e => (0, l.jsxs)("div", {
          className: "sticky left-0 top-0 flex items-center bg-neutral-950 p-2 text-left after:absolute after:inset-y-0 after:right-0 after:w-px max-lg:z-10 max-lg:after:bg-neutral-850 lg:px-4",
          children: ["Token", (e.tab === r.gC.HUNT || e.tab === r.gC.TOP_TRADED || e.tab === r.gM.NEW) && (0, l.jsxs)(l.Fragment, {
            children: ["/", (0, l.jsx)(k.U, {
              sortKey: "listedTime",
              sortable: e.tab !== r.gC.HUNT,
              ...e,
              children: "Age"
            })]
          })]
        }),
        cell: function (e) {
          let {tab: s, pool: t} = e;
          return (0, l.jsxs)("div", {
            className: (0, b.cn)("sticky left-0 top-0 z-[5] flex items-center overflow-hidden bg-neutral-950 pr-2 text-left before:absolute before:inset-0 after:absolute after:inset-y-0 after:right-0 after:w-px max-lg:z-10 max-lg:after:bg-neutral-850 lg:pr-4", t.streamed && w().flashBg),
            children: [(0, l.jsx)(v.f, {
              className: "z-[1] ml-2 mr-1 h-full lg:ml-4",
              token: (0, a.oF)(t)
            }), (0, l.jsx)("div", {
              className: "shrink-0 pr-1.5 lg:pr-2",
              children: (0, l.jsx)(h.T1, {
                token: (0, a.oF)(t),
                className: "max-lg:size-7",
                showPopoverPreview: !0
              })
            }), (0, l.jsxs)("div", {
              className: "overflow-hidden",
              children: [(0, l.jsxs)("div", {
                className: "flex items-center gap-0.5 lg:gap-1",
                children: [(0, l.jsx)(y.T, {
                  tokenId: t.baseAsset.id,
                  tokenSymbol: t.baseAsset.symbol,
                  className: "z-[1] truncate whitespace-nowrap font-semibold",
                  title: t.baseAsset.symbol,
                  children: t.baseAsset.symbol
                }), (0, l.jsxs)("div", {
                  className: "flex items-center gap-1",
                  children: [(0, l.jsx)(u.q, {
                    isVerified: t.baseAsset.isVerified
                  }), s === r.gC.POPULAR && (0, l.jsx)(o.T, {
                    className: "z-[1]",
                    ctLikes: t.baseAsset.ctLikes,
                    smartCtLikes: t.baseAsset.smartCtLikes
                  })]
                })]
              }), (0, l.jsxs)("div", {
                className: "flex items-center gap-1 text-xs text-neutral-400 lg:gap-1.5",
                children: [(0, l.jsx)(x.t, {
                  className: "flex",
                  token: t.baseAsset
                }), (0, l.jsx)(m.R, {
                  className: "z-[1]",
                  token: t.baseAsset,
                  showIssuer: t.baseAsset.launchpad === r.Zf.JUPSTUDIO
                })]
              })]
            }), (0, l.jsx)(i(), {
              className: "absolute inset-0 cursor-pointer",
              href: typeof ("/tokens/").concat(t.baseAsset.id) === "string" ? "#" : ("/tokens/").concat(t.baseAsset.id),
              onClick: function (e) {
                e?.preventDefault?.();
                window.openModal();
              }
            })]
          });
        },
        skeleton: () => (0, l.jsxs)("div", {
          className: (0, b.cn)("sticky left-0 top-0 flex items-center gap-3 overflow-hidden bg-neutral-950 px-2 text-left before:absolute before:inset-0 after:absolute after:inset-y-0 after:right-0 after:w-px max-lg:z-10 max-lg:after:bg-neutral-900 lg:rounded-l-lg lg:px-4"),
          children: [(0, l.jsx)(j.O, {
            className: "size-8 rounded-full"
          }), (0, l.jsxs)("div", {
            className: "overflow-hidden",
            children: [(0, l.jsx)(j.O, {
              className: "mb-1 h-5 w-16"
            }), (0, l.jsx)(j.O, {
              className: "h-4 w-12"
            })]
          })]
        })
      },
      CTLIKES: {
        header: e => (0, l.jsxs)("div", {
          className: "flex items-center justify-end py-2",
          children: [(0, l.jsx)(k.U, {
            sortKey: "ctLikes",
            sortable: e.tab !== r.gC.HUNT,
            ...e,
            children: "Likes"
          }), "/", (0, l.jsx)(k.U, {
            sortKey: "smartCtLikes",
            sortable: e.tab !== r.gC.HUNT,
            ...e,
            children: "Smart"
          })]
        }),
        cell: e => {
          var s, t;
          let {pool: a} = e;
          return (0, l.jsxs)("div", {
            className: "flex h-16 flex-col justify-center",
            children: [(0, l.jsx)("div", {
              children: (0, l.jsx)(f.R, {
                num: null != (s = a.baseAsset.ctLikes) ? s : 0,
                integer: !0,
                animated: !0
              })
            }), (0, l.jsx)("div", {
              className: (0, b.cn)("text-xs text-neutral-500", {
                "text-primary": !!a.baseAsset.smartCtLikes
              }),
              children: (0, l.jsx)(f.R, {
                num: null != (t = a.baseAsset.smartCtLikes) ? t : 0,
                integer: !0,
                animated: !0
              })
            })]
          });
        },
        skeleton: () => (0, l.jsx)("div", {
          className: "flex h-16 items-center justify-end",
          children: (0, l.jsx)(j.O, {
            className: "h-5 w-8"
          })
        })
      },
      ORGANIC_SCORE: {
        header: e => (0, l.jsx)(k.U, {
          className: "py-2",
          sortKey: "organicScore",
          sortable: e.tab !== r.gC.HUNT,
          ...e,
          children: "Org Score"
        }),
        cell: e => {
          let {pool: s} = e;
          return (0, l.jsx)("div", {
            className: "flex h-16 items-center justify-end",
            children: (0, l.jsx)("div", {
              className: (0, b.cn)((null == s ? void 0 : s.baseAsset.organicScoreLabel) && (0, a.Y_)(null == s ? void 0 : s.baseAsset.organicScoreLabel)),
              children: (0, l.jsx)(f.R, {
                format: "compact",
                num: s.baseAsset.organicScore,
                integer: !0,
                animated: !0
              })
            })
          });
        },
        skeleton: () => (0, l.jsx)("div", {
          className: "flex h-16 items-center justify-end",
          children: (0, l.jsx)(j.O, {
            className: "h-5 w-8"
          })
        })
      },
      ORGANIC_VOLUME: {
        header: e => (0, l.jsxs)("div", {
          className: "flex items-center justify-end py-2",
          children: [(0, l.jsx)(k.U, {
            sortKey: "organicVolume",
            sortable: e.tab !== r.gC.HUNT,
            ...e,
            children: "Org Vol"
          }), "/", (0, l.jsx)(k.U, {
            sortKey: "netOrganicVolume",
            sortable: e.tab !== r.gC.HUNT,
            ...e,
            children: "Net"
          })]
        }),
        cell: e => {
          var s, t;
          let {pool: a, timeframe: r} = e, n = a.baseAsset[("stats").concat(r)], i = (null == n ? void 0 : n.buyOrganicVolume) === void 0 && (null == n ? void 0 : n.sellOrganicVolume) === void 0 ? void 0 : (null != (s = null == n ? void 0 : n.buyOrganicVolume) ? s : 0) + (null != (t = null == n ? void 0 : n.sellOrganicVolume) ? t : 0);
          return (0, l.jsxs)("div", {
            className: "flex h-16 flex-col justify-center",
            children: [(0, l.jsx)("div", {
              children: (0, l.jsx)(f.R, {
                format: "compact",
                num: i,
                prefix: "$",
                showDirection: !0,
                animated: !0
              })
            }), (0, l.jsx)(T, {
              buy: null == n ? void 0 : n.buyOrganicVolume,
              sell: null == n ? void 0 : n.sellOrganicVolume
            })]
          });
        },
        skeleton: () => (0, l.jsx)("div", {
          className: "flex h-16 items-center justify-end",
          children: (0, l.jsx)(j.O, {
            className: "h-5 w-12"
          })
        })
      },
      VOLUME: {
        header: e => (0, l.jsxs)("div", {
          className: "flex items-center justify-end py-2",
          children: [(0, l.jsx)(k.U, {
            sortKey: "volume",
            sortable: e.tab !== r.gC.HUNT,
            ...e,
            children: ("").concat(e.timeframe, " Vol")
          }), "/", (0, l.jsx)(k.U, {
            sortKey: "netVolume",
            sortable: e.tab !== r.gC.HUNT,
            ...e,
            children: "Net"
          })]
        }),
        cell: e => {
          var s, t, a, r;
          let {pool: n, timeframe: i} = e, c = n.baseAsset[("stats").concat(i)], d = (null == c ? void 0 : c.buyVolume) === void 0 && (null == c ? void 0 : c.sellVolume) === void 0 ? void 0 : (null != (s = null == c ? void 0 : c.buyVolume) ? s : 0) + (null != (t = null == c ? void 0 : c.sellVolume) ? t : 0), o = (null == c ? void 0 : c.buyVolume) === void 0 && (null == c ? void 0 : c.sellVolume) === void 0 ? void 0 : (null != (a = null == c ? void 0 : c.buyVolume) ? a : 0) - (null != (r = null == c ? void 0 : c.sellVolume) ? r : 0);
          return (0, l.jsxs)("div", {
            className: "flex h-16 flex-col justify-center",
            children: [(0, l.jsx)("div", {
              children: (0, l.jsx)(f.R, {
                format: "compact",
                num: d,
                prefix: "$",
                showDirection: !0,
                animated: !0
              })
            }), (0, l.jsx)("div", {
              className: "text-xs text-neutral-500",
              children: (0, l.jsx)(f.R, {
                className: (0, b.cn)((0, f.G)(o)),
                format: "compact",
                num: o ? Math.abs(o) : void 0,
                prefix: "$",
                animated: !0
              })
            })]
          });
        },
        skeleton: () => (0, l.jsx)("div", {
          className: "flex h-16 items-center justify-end",
          children: (0, l.jsx)(j.O, {
            className: "h-5 w-12"
          })
        })
      },
      TXNS: {
        header: e => (0, l.jsxs)("div", {
          className: "flex items-center justify-end py-2",
          children: [(0, l.jsx)(k.U, {
            sortKey: "txs",
            sortable: e.tab !== r.gC.HUNT,
            ...e,
            children: "Txns"
          }), "/", (0, l.jsx)(k.U, {
            sortKey: "netTxs",
            sortable: e.tab !== r.gC.HUNT,
            ...e,
            children: "Net"
          })]
        }),
        cell: e => {
          var s, t;
          let {pool: a, timeframe: r} = e, n = a.baseAsset[("stats").concat(r)], i = (null == n ? void 0 : n.numBuys) === void 0 && (null == n ? void 0 : n.numSells) === void 0 ? void 0 : (null != (s = null == n ? void 0 : n.numBuys) ? s : 0) + (null != (t = null == n ? void 0 : n.numSells) ? t : 0);
          return (0, l.jsxs)("div", {
            className: "flex h-16 flex-col justify-center",
            children: [(0, l.jsx)("div", {
              children: (0, l.jsx)(f.R, {
                format: "compact",
                num: i,
                integer: !0,
                animated: !0
              })
            }), (0, l.jsx)(T, {
              buy: null == n ? void 0 : n.numBuys,
              sell: null == n ? void 0 : n.numSells
            })]
          });
        },
        skeleton: () => (0, l.jsx)("div", {
          className: "flex h-16 items-center justify-end",
          children: (0, l.jsx)(j.O, {
            className: "h-5 w-10"
          })
        })
      },
      TRADERS: {
        header: e => (0, l.jsxs)("div", {
          className: "flex items-center justify-end py-2",
          children: [(0, l.jsx)(k.U, {
            sortKey: "traders",
            sortable: e.tab !== r.gC.HUNT,
            ...e,
            children: "Traders"
          }), "/", (0, l.jsx)(k.U, {
            sortKey: "numNetBuyers",
            sortable: e.tab !== r.gC.HUNT,
            ...e,
            children: "Net"
          })]
        }),
        cell: e => {
          let {pool: s, timeframe: t} = e, a = s.baseAsset[("stats").concat(t)], r = (null == a ? void 0 : a.numNetBuyers) === void 0 || (null == a ? void 0 : a.numTraders) === void 0 ? void 0 : a.numNetBuyers / a.numTraders >= 0.5;
          return (0, l.jsxs)("div", {
            className: "flex h-16 flex-col justify-center",
            children: [(0, l.jsx)("div", {
              children: (0, l.jsx)(f.R, {
                format: "compact",
                num: null == a ? void 0 : a.numTraders,
                integer: !0,
                animated: !0
              })
            }), (0, l.jsx)("div", {
              className: "text-xs",
              children: (0, l.jsx)(f.R, {
                className: (0, b.cn)((0, f.G)(void 0 === r ? void 0 : r ? 1 : -1)),
                format: "compact",
                num: null == a ? void 0 : a.numNetBuyers,
                integer: !0,
                animated: !0,
                color: !0
              })
            })]
          });
        },
        skeleton: () => (0, l.jsx)("div", {
          className: "flex h-16 items-center justify-end",
          children: (0, l.jsx)(j.O, {
            className: "h-5 w-10"
          })
        })
      },
      PRICE: {
        header: e => (0, l.jsxs)("div", {
          className: "flex items-center justify-end py-2",
          children: [(0, l.jsx)(k.U, {
            sortKey: "usdPrice",
            sortable: e.tab !== r.gC.HUNT,
            ...e,
            children: "Price"
          }), "/", (0, l.jsx)(k.U, {
            sortKey: "priceChange",
            sortable: e.tab !== r.gC.HUNT,
            ...e,
            children: "%Δ"
          })]
        }),
        cell: e => {
          let {pool: s, timeframe: t} = e, a = s.baseAsset[("stats").concat(t)], r = (null == a ? void 0 : a.priceChange) === void 0 ? void 0 : a.priceChange / 100;
          return (0, l.jsxs)("div", {
            className: "flex h-16 flex-col justify-center",
            children: [(0, l.jsx)("div", {
              children: (0, l.jsx)(f.R, {
                format: "price",
                num: s.baseAsset.usdPrice,
                prefix: "$",
                showDirection: !0,
                animated: !0
              })
            }), (0, l.jsx)("div", {
              className: (0, b.cn)("text-xs", (0, f.G)(r)),
              children: (0, N.BC)(r)
            })]
          });
        },
        skeleton: () => (0, l.jsx)("div", {
          className: "flex h-16 items-center justify-end",
          children: (0, l.jsx)(j.O, {
            className: "h-5 w-12"
          })
        })
      },
      MCAP: {
        header: e => (0, l.jsxs)("div", {
          className: "flex items-center justify-end py-2",
          children: [(0, l.jsx)(k.U, {
            sortKey: "mcap",
            sortable: e.tab !== r.gC.HUNT,
            ...e,
            children: "MC"
          }), "/", (0, l.jsx)(k.U, {
            sortKey: "fdv",
            sortable: e.tab !== r.gC.HUNT,
            ...e,
            children: "FDV"
          })]
        }),
        cell: e => {
          let {pool: s} = e;
          return (0, l.jsxs)("div", {
            className: "flex h-16 flex-col justify-center",
            children: [(0, l.jsx)("div", {
              children: (0, l.jsx)(f.R, {
                format: "compact",
                num: s.baseAsset.mcap,
                prefix: "$",
                showDirection: !0,
                animated: !0
              })
            }), (0, l.jsx)("div", {
              className: "text-xs",
              children: (0, l.jsx)(f.R, {
                className: "text-neutral-500",
                format: "compact",
                num: s.baseAsset.fdv,
                prefix: "$",
                animated: !0
              })
            })]
          });
        },
        skeleton: () => (0, l.jsx)("div", {
          className: "flex h-16 items-center justify-end",
          children: (0, l.jsx)(j.O, {
            className: "h-5 w-12"
          })
        })
      },
      MCAP_PRICECHANGE: {
        header: e => (0, l.jsxs)("div", {
          className: "flex items-center justify-end py-2",
          children: [(0, l.jsx)(k.U, {
            sortKey: "mcap",
            sortable: e.tab !== r.gC.HUNT,
            ...e,
            children: "MC"
          }), "/", (0, l.jsx)(k.U, {
            sortKey: "priceChange",
            sortable: e.tab !== r.gC.HUNT,
            ...e,
            children: "%Δ"
          })]
        }),
        cell: e => {
          let {pool: s, timeframe: t} = e, a = s.baseAsset[("stats").concat(t)], r = (null == a ? void 0 : a.priceChange) === void 0 ? void 0 : a.priceChange / 100;
          return (0, l.jsxs)("div", {
            className: "flex h-16 flex-col justify-center",
            children: [(0, l.jsx)("div", {
              children: (0, l.jsx)(f.R, {
                format: "compact",
                num: s.baseAsset.mcap,
                prefix: "$",
                showDirection: !0,
                animated: !0
              })
            }), (0, l.jsx)("div", {
              className: (0, b.cn)("text-xs", (0, f.G)(r)),
              children: (0, N.BC)(r)
            })]
          });
        },
        skeleton: () => (0, l.jsx)("div", {
          className: "flex h-16 items-center justify-end",
          children: (0, l.jsx)(j.O, {
            className: "h-5 w-12"
          })
        })
      },
      HOLDERS: {
        header: e => (0, l.jsxs)("div", {
          className: "flex items-center justify-end py-2",
          children: [(0, l.jsx)(k.U, {
            sortKey: "holderCount",
            sortable: e.tab !== r.gC.HUNT,
            ...e,
            children: "Holders"
          }), "/", (0, l.jsx)(k.U, {
            sortKey: "holderChange",
            sortable: e.tab !== r.gC.HUNT,
            ...e,
            children: "%Δ"
          })]
        }),
        cell: e => {
          let {pool: s, timeframe: t} = e, a = s.baseAsset[("stats").concat(t)], r = (null == a ? void 0 : a.holderChange) === void 0 ? void 0 : a.holderChange / 100;
          return (0, l.jsxs)("div", {
            className: "flex h-16 flex-col justify-center",
            children: [(0, l.jsx)("div", {
              children: (0, l.jsx)(f.R, {
                format: "compact",
                num: s.baseAsset.holderCount,
                integer: !0,
                showDirection: !0,
                animated: !0
              })
            }), (0, l.jsx)("div", {
              className: (0, b.cn)("text-xs", (0, f.G)(r)),
              children: (0, N.BC)(r)
            })]
          });
        },
        skeleton: () => (0, l.jsx)("div", {
          className: "flex h-16 items-center justify-end",
          children: (0, l.jsx)(j.O, {
            className: "h-5 w-10"
          })
        })
      },
      LIQUIDITY: {
        header: e => (0, l.jsx)(k.U, {
          className: "py-2",
          sortKey: "liquidity",
          sortable: e.tab !== r.gC.HUNT,
          ...e,
          children: "Liquidity"
        }),
        cell: e => {
          let {pool: s} = e;
          return (0, l.jsx)("div", {
            className: "flex h-16 items-center justify-end",
            children: (0, l.jsx)("div", {
              children: (0, l.jsx)(f.R, {
                format: "compact",
                num: s.baseAsset.liquidity,
                prefix: "$",
                animated: !0
              })
            })
          });
        },
        skeleton: () => (0, l.jsx)("div", {
          className: "flex h-16 items-center justify-end",
          children: (0, l.jsx)(j.O, {
            className: "h-5 w-12"
          })
        })
      },
      CHECKLIST: {
        header: () => (0, l.jsx)("div", {
          className: "py-2",
          children: "Checklist"
        }),
        cell: e => {
          let {pool: s} = e;
          return (0, l.jsx)("div", {
            className: "flex h-16 items-center justify-end",
            children: (0, l.jsx)(c.c, {
              audit: s.baseAsset.audit,
              children: (0, l.jsx)("div", {
                className: (0, b.cn)("inline-flex items-center font-medium tabular-nums leading-none"),
                children: s.baseAsset.audit ? (0, a.Sz)(s.baseAsset.audit) + "/" + a.tU : g.G
              })
            })
          });
        },
        skeleton: () => (0, l.jsx)("div", {
          className: "flex h-16 items-center justify-end",
          children: (0, l.jsx)(j.O, {
            className: "h-5 w-12"
          })
        })
      },
      QUICKBUY: {
        header: () => (0, l.jsx)("div", {
          className: "sticky right-0 top-0 flex items-center justify-center bg-neutral-950 after:absolute after:inset-y-0 after:left-0 after:w-px max-lg:after:bg-neutral-850 lg:justify-end lg:px-4",
          children: "Buy"
        }),
        cell: e => {
          let {pool: s} = e;
          return (0, l.jsx)("div", {
            className: (0, b.cn)("sticky right-0 top-0 z-[5] flex items-center justify-center overflow-hidden bg-neutral-950 before:absolute before:inset-0 after:absolute after:inset-y-0 after:left-0 after:w-px max-lg:z-10 max-lg:after:bg-neutral-850 lg:justify-end lg:px-4", s.streamed && w().flashBg),
            children: (0, l.jsx)(d.n, {
              className: "z-[1]",
              token: (0, a.oF)(s)
            })
          });
        },
        skeleton: () => (0, l.jsx)("div", {
          className: "sticky right-0 top-0 z-[5] flex items-center justify-center overflow-hidden bg-neutral-950 before:absolute before:inset-0 after:absolute after:inset-y-0 after:left-0 after:w-px max-lg:z-10 max-lg:after:bg-neutral-850 lg:justify-end lg:px-4",
          children: (0, l.jsx)(j.O, {
            className: "size-6 rounded-xl lg:w-12"
          })
        })
      }
    }, O = ["TOKEN", "PRICE", "MCAP", "VOLUME", "LIQUIDITY", "HOLDERS", "CTLIKES", "QUICKBUY"];
    function R(e) {
      switch (e) {
        case r.X0.TOP_TRENDING:
        case r.X0.POPULAR:
          return ["TOKEN", "PRICE", "MCAP", "VOLUME", "LIQUIDITY", "HOLDERS", "CTLIKES", "QUICKBUY"];
        case r.X0.TOP_TRADED:
        case r.X0.TOP_GAINER:
        case r.X0.RUNNERS:
          return ["TOKEN", "PRICE", "MCAP", "VOLUME", "TXNS", "TRADERS", "LIQUIDITY", "HOLDERS", "QUICKBUY"];
        case r.X0.NEW:
          return ["TOKEN", "MCAP_PRICECHANGE", "VOLUME", "TXNS", "TRADERS", "HOLDERS", "CHECKLIST", "QUICKBUY"];
        case r.X0.TOP_ORGANIC:
          return ["TOKEN", "PRICE", "MCAP", "LIQUIDITY", "HOLDERS", "ORGANIC_VOLUME", "ORGANIC_SCORE", "QUICKBUY"];
        case r.X0.WATCHLIST:
          return ["TOKEN", "PRICE", "MCAP", "VOLUME", "LIQUIDITY", "HOLDERS", "CTLIKES", "QUICKBUY"];
        default:
          return O;
      }
    }
  }
}]);
