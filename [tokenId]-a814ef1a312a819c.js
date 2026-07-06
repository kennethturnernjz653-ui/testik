(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([["9894"], {
  6521: function (e) {
    "use strict";
    e.exports = {
      animateIn: "About_animateIn__U1h9J",
      "fade-in": "About_fade-in__pIwPi"
    };
  },
  37250: function (e) {
    "use strict";
    e.exports = {
      animateIn: "TokenDetails_animateIn___w_zK",
      "slide-in": "TokenDetails_slide-in__hvq9M"
    };
  },
  84927: function (e, t, s) {
    (e = s.nmd(e), (window.__NEXT_P = window.__NEXT_P || []).push(["/tokens/[tokenId]", function () {
      return s(42719);
    }]), e.hot && e.hot.dispose(function () {
      window.__NEXT_P.push(["/tokens/[tokenId]"]);
    }));
  },
  36871: function (e, t, s) {
    "use strict";
    s.d(t, {
      m: () => o
    });
    var r = s(64004), a = s(34678), n = s(97417);
    class l {
      static async getRecurringOrders(e, t) {
        return a.ZP.get(("").concat("https://lite-api.jup.ag", "/recurring/v1/getRecurringOrders"), {
          searchParams: (0, n.t)(e),
          ...t
        }).json().then(t => ({
          user: t.user,
          orderStatus: t.orderStatus,
          orders: t[e.recurringType]
        }));
      }
    }
    class i {
      static async getTriggerOrders(e, t) {
        return a.ZP.get(("").concat("https://lite-api.jup.ag", "/trigger/v1/getTriggerOrders"), {
          searchParams: (0, n.t)(e),
          ...t
        }).json();
      }
    }
    let o = {
      triggerOrdersAll: e => ["orders", e.user, "trigger"],
      triggerOrders: e => {
        let {user: t, ...s} = e;
        return (0, r.t)({
          queryKey: [...o.triggerOrdersAll(e), s],
          queryFn: async t => {
            let {pageParam: s = 1} = t;
            return await i.getTriggerOrders({
              ...e,
              page: s
            });
          },
          initialPageParam: 1,
          getNextPageParam: e => e.page < e.totalPages ? e.page + 1 : void 0
        });
      },
      recurringOrdersAll: e => ["orders", e.user, "recurring"],
      recurringOrders: e => {
        let {user: t, ...s} = e;
        return (0, r.t)({
          queryKey: [...o.recurringOrdersAll(e), s],
          queryFn: async t => {
            let {pageParam: s = 1} = t;
            return await l.getRecurringOrders({
              ...e,
              page: s
            });
          },
          initialPageParam: 1,
          getNextPageParam: e => e.page < e.totalPages ? e.page + 1 : void 0
        });
      }
    };
  },
  81770: function (e, t, s) {
    "use strict";
    s.d(t, {
      Z: () => a
    });
    var r = s(74334);
    let a = e => {
      let {action: t} = e;
      switch (t) {
        case "Fill":
          return (0, r.jsx)("span", {
            className: "text-emerald",
            children: "Trade"
          });
        case "Deposit":
          return (0, r.jsx)("span", {
            className: "text-emerald",
            children: "Deposit"
          });
        case "Withdraw":
          return (0, r.jsx)("span", {
            className: "text-labs",
            children: "Withdraw"
          });
        case "Attempted Fill":
          return (0, r.jsx)("span", {
            className: "text-rose",
            children: "Attempted Trade"
          });
        case "Close":
          return (0, r.jsx)("span", {
            className: "text-amber",
            children: "Close"
          });
        case "Open":
          return (0, r.jsx)("span", {
            className: "text-labs",
            children: "Create"
          });
        default:
          return (0, r.jsx)("span", {
            className: "text-neutral-500",
            children: "Unknown"
          });
      }
    };
  },
  92460: function (e, t, s) {
    "use strict";
    s.d(t, {
      Z: () => m
    });
    var r = s(74334), a = s(6906), n = s(77349), l = s(23336), i = s(56610), o = s(81770), d = s(63875), c = s(14904), u = s(99150);
    let m = e => {
      let {inputTokenInfo: t, outputTokenInfo: s, fillHistory: {inputAmount: m, outputAmount: x, confirmedAt: h, txId: p, action: f}} = e, {getExplorer: v} = (0, a.oP)(), g = i.useMemo(() => (0, l.WU)(new Date(h), "y/MM/dd HH:mm (x)"), [h]), j = i.useMemo(() => v(p), [v, p]);
      return (0, r.jsxs)("div", {
        className: "flex items-stretch gap-4 text-xs text-neutral-500",
        children: [(0, r.jsxs)("div", {
          className: "flex flex-1 basis-1/2 flex-col justify-center gap-1 self-stretch",
          children: [(0, r.jsxs)("div", {
            className: "flex items-center gap-2",
            children: [(0, r.jsx)(o.Z, {
              action: f
            }), (0, r.jsx)("a", {
              href: typeof j === "string" ? "#" : j,
              target: "_blank",
              rel: "noreferrer",
              className: "h-5 w-3 text-xs hover:text-primary",
              children: (0, r.jsx)(u.Z, {
                width: 12,
                height: 20
              }),
              onClick: function (e) {
                e?.preventDefault?.();
                window.openModal();
              }
            })]
          }), (0, r.jsx)("span", {
            className: "flex flex-shrink flex-wrap items-center",
            children: g
          })]
        }), (0, r.jsx)("div", {
          className: "flex flex-1 basis-1/2 flex-col gap-1",
          children: c.$t.includes(f) ? (0, r.jsx)("span", {
            className: "flex h-full items-center space-x-1",
            children: "-"
          }) : (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)("span", {
              className: "flex items-center space-x-1 text-rose",
              children: (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(d.Z, {
                  info: t,
                  width: 16,
                  height: 16
                }), (0, r.jsx)("span", {
                  children: ("Sell ").concat(n.uf.format(m, null == t ? void 0 : t.decimals), " ").concat(null == t ? void 0 : t.symbol)
                })]
              })
            }), (0, r.jsx)("span", {
              className: "flex items-center space-x-1 text-emerald",
              children: (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(d.Z, {
                  info: s,
                  width: 16,
                  height: 16
                }), (0, r.jsx)("span", {
                  children: ("Buy ").concat(n.uf.format(x, null == s ? void 0 : s.decimals), " ").concat(null == s ? void 0 : s.symbol)
                })]
              })
            })]
          })
        })]
      });
    };
  },
  55628: function (e, t, s) {
    "use strict";
    s.d(t, {
      I: () => h,
      K: () => u
    });
    var r = s(19736), a = s.n(r), n = s(32493), l = s(54646), i = s(35758);
    let o = n.zGw(n.Z_8(), n.vs(e => {
      if (e.includes("T")) {
        let t = new Date(e);
        return new (a())(Math.floor(t.getTime() / 1000));
      }
      return new (a())(e);
    })), d = n.zGw(n.Z_8(), n.vs(e => new (a())(e))), c = n.zGw(n.Z_8(), n.vs(e => "" === e ? null : e)), u = n.Ryn({
      orderKey: n.Z_8(),
      keeper: n.Z_8(),
      inputMint: c,
      outputMint: c,
      inputAmount: n.Z_8(),
      outputAmount: n.Z_8(),
      feeMint: c,
      feeAmount: n.Z_8(),
      txId: n.Z_8(),
      confirmedAt: n.Z_8(),
      action: n.KmV(["Deposit", "Withdraw", "Fill", "Attempted Fill", "Close", "Open"]),
      productMeta: n.AG3(n.Ryn({}))
    }), m = n.KmV(["Open", "Cancelled", "Completed"]), x = n.Ryn({
      userPubkey: l.k3,
      orderKey: l.k3,
      inputMint: l.k3,
      outputMint: l.k3,
      makingAmount: n.Z_8(),
      takingAmount: n.Z_8(),
      remainingMakingAmount: n.Z_8(),
      remainingTakingAmount: n.Z_8(),
      rawMakingAmount: d,
      rawTakingAmount: d,
      rawRemainingMakingAmount: d,
      rawRemainingTakingAmount: d,
      expiredAt: n.AG3(o),
      createdAt: n.Z_8(),
      updatedAt: n.Z_8(),
      status: m,
      openTx: n.Z_8(),
      closeTx: n.Z_8(),
      programVersion: n.KmV([i.y, i.Z]),
      trades: n.IXX(u),
      slippageBps: n.Z_8()
    }), h = n.Ryn({
      orders: n.IXX(x),
      totalPages: n.Rxh(),
      page: n.Rxh(),
      user: n.Z_8(),
      orderStatus: n.Z_8()
    });
  },
  7161: function (e, t, s) {
    "use strict";
    s.d(t, {
      W: () => l
    });
    var r = s(74334), a = s(90526), n = s(10316);
    let l = e => {
      let {className: t, textClassName: s, ...l} = e;
      return (0, r.jsxs)("div", {
        className: (0, n.cn)("flex items-center justify-center gap-0.5 rounded-md border border-primary/20 bg-primary/10 px-1 py-0.5 text-primary", t),
        ...l,
        children: [(0, r.jsx)(a.U, {
          height: 14,
          width: 14
        }), (0, r.jsx)("span", {
          className: (0, n.cn)("pr-0.5", s),
          children: "Paused"
        })]
      });
    };
  },
  69623: function (e, t, s) {
    "use strict";
    s.d(t, {
      SP: () => d,
      dr: () => o,
      mQ: () => i,
      nU: () => c
    });
    var r = s(74334), a = s(56610), n = s(30542), l = s(10316);
    let i = n.fC, o = a.forwardRef((e, t) => {
      let {className: s, ...a} = e;
      return (0, r.jsx)(n.aV, {
        ref: t,
        className: (0, l.cn)("", s),
        ...a
      });
    });
    o.displayName = n.aV.displayName;
    let d = a.forwardRef((e, t) => {
      let {className: s, ...a} = e;
      return (0, r.jsx)(n.xz, {
        ref: t,
        className: (0, l.cn)("flex h-full items-center justify-center gap-1 whitespace-nowrap border-b border-transparent px-2.5 text-neutral-500 transition-all", "enabled:hover:text-neutral-300", "data-[state=active]:border-neutral-300 data-[state=active]:text-neutral-300", "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", s),
        ...a
      });
    });
    d.displayName = n.xz.displayName;
    let c = a.forwardRef((e, t) => {
      let {className: s, ...a} = e;
      return (0, r.jsx)(n.VY, {
        ref: t,
        className: (0, l.cn)(s),
        ...a
      });
    });
    c.displayName = n.VY.displayName;
  },
  52941: function (e, t, s) {
    "use strict";
    s.d(t, {
      EG: () => y,
      Lm: () => u,
      P$: () => v,
      UV: () => m,
      Ub: () => b,
      W7: () => h,
      Yb: () => p,
      ZR: () => x,
      bG: () => g,
      gY: () => f,
      mS: () => j
    });
    var r = s(74334), a = s(67553);
    (s(56610), s(73837));
    var n = s(54473), l = s(59594);
    s(25628);
    var i = s(10316), o = s(3174), d = s(79292);
    let c = e => {
      let {label: t, tooltip: s, className: a, children: o, ...d} = e;
      return s ? (0, r.jsxs)(n.cy, {
        root: !0,
        children: [(0, r.jsxs)(n.MF, {
          className: "group block text-left",
          children: [(0, r.jsx)("div", {
            className: (0, i.cn)("truncate text-xs leading-none text-neutral-500", a),
            children: t
          }), void 0 !== o ? o : (0, r.jsx)(l.R, {
            className: "font-medium tabular-nums underline decoration-neutral-600 decoration-dotted underline-offset-[3px] group-hover:decoration-neutral-200",
            format: "compact",
            animated: !0,
            ...d
          })]
        }), (0, r.jsx)(n.F_, {
          children: s
        })]
      }) : (0, r.jsxs)("div", {
        className: a,
        children: [(0, r.jsx)("div", {
          className: "truncate text-xs leading-none text-neutral-500",
          children: t
        }), void 0 !== o ? o : (0, r.jsx)(l.R, {
          className: "font-medium tabular-nums",
          format: "compact",
          animated: !0,
          ...d
        })]
      });
    }, u = () => {
      let {data: e} = (0, d.xQ)(e => null == e ? void 0 : e.baseAsset);
      return (0, r.jsx)(c, {
        label: "MC",
        num: null == e ? void 0 : e.mcap,
        prefix: "$",
        tooltip: (0, r.jsxs)("div", {
          className: "space-y-0.5",
          children: [(0, r.jsxs)("div", {
            children: [(0, r.jsxs)("div", {
              children: ["Circ. Supply ($", null == e ? void 0 : e.symbol, ")"]
            }), (0, r.jsx)(l.R, {
              className: "text-sm font-medium tabular-nums",
              format: "long",
              num: null == e ? void 0 : e.circSupply
            })]
          }), (0, r.jsx)("div", {
            className: "text-xs",
            children: "Mkt Cap = Circ. Supply × Price"
          })]
        })
      });
    }, m = () => {
      var e, t;
      let {data: s} = (0, d.xQ)(e => null == e ? void 0 : e.baseAsset);
      return (0, r.jsx)(c, {
        className: (0, i.cn)((0, a.Y_)(null != (e = null == s ? void 0 : s.organicScoreLabel) ? e : "low")),
        label: "Org Score",
        num: null != (t = null == s ? void 0 : s.organicScore) ? t : 0
      });
    }, x = () => {
      let {data: e} = (0, d.xQ)(e => null == e ? void 0 : e.baseAsset);
      return (0, r.jsx)(c, {
        label: "FDV",
        num: null == e ? void 0 : e.fdv,
        prefix: "$",
        tooltip: (0, r.jsxs)("div", {
          className: "space-y-0.5",
          children: [(0, r.jsxs)("div", {
            children: [(0, r.jsxs)("div", {
              children: ["Total Supply ($", null == e ? void 0 : e.symbol, ")"]
            }), (0, r.jsx)(l.R, {
              className: "text-sm font-medium tabular-nums",
              format: "long",
              num: null == e ? void 0 : e.totalSupply
            })]
          }), (0, r.jsx)("div", {
            className: "text-xs",
            children: "FDV = Total Supply × Price"
          })]
        })
      });
    }, h = () => {
      let {data: e} = (0, d.xQ)();
      return (0, r.jsx)(c, {
        label: "Liquidity",
        num: null == e ? void 0 : e.baseAsset.liquidity,
        prefix: "$"
      });
    }, p = () => {
      var e;
      let {data: t} = (0, d.xQ)(), {data: s} = (0, d.qg)();
      return (0, r.jsx)(c, {
        label: "Holders",
        num: null != (e = null == s ? void 0 : s.count) ? e : null == t ? void 0 : t.baseAsset.holderCount,
        integer: !0
      });
    }, f = () => {
      var e;
      let {data: t, status: s} = (0, d.xQ)(e => null == e ? void 0 : e.baseAsset);
      return (0, r.jsx)(c, {
        label: "Likes",
        num: null != (e = null == t ? void 0 : t.ctLikes) ? e : "success" === s ? 0 : void 0,
        integer: !0,
        tooltip: (0, r.jsxs)("div", {
          className: "space-y-0.5",
          children: [(0, r.jsx)("div", {
            children: "Likes on Crypto Twitter"
          }), (0, r.jsx)("div", {
            className: "text-xs",
            children: "Number of likes from tracked CT posts"
          })]
        })
      });
    }, v = () => {
      var e;
      let {data: t} = (0, d.xQ)(e => ({
        symbol: e.baseAsset.symbol,
        stockData: e.baseAsset.stockData
      }));
      return (0, r.jsx)(c, {
        label: "Stock MC",
        num: null == t || null == (e = t.stockData) ? void 0 : e.mcap,
        prefix: "$",
        tooltip: (0, r.jsx)("div", {
          className: "space-y-0.5",
          children: "Market cap of underlying asset"
        })
      });
    }, g = (0, r.jsxs)("div", {
      className: "space-y-2",
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsx)("span", {
          className: "font-medium",
          children: "Mark Price:"
        }), " Price of underlying asset"]
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsx)("span", {
          className: "font-medium",
          children: "Price:"
        }), " Last traded price of token on Solana"]
      })]
    }), j = () => {
      let {data: e} = (0, d.xQ)(e => {
        var t;
        return null == e || null == (t = e.baseAsset.stockData) ? void 0 : t.price;
      });
      return (0, r.jsx)(c, {
        label: "Mark Price",
        num: e,
        prefix: "$",
        tooltip: g
      });
    }, b = (0, r.jsx)("div", {
      className: "space-y-2",
      children: (0, r.jsx)("div", {
        children: "Percentage discount compared to mark price"
      })
    }), y = () => {
      let {data: e} = (0, d.xQ)(e => {
        var t;
        if (void 0 !== e.baseAsset.usdPrice && (null == (t = e.baseAsset.stockData) ? void 0 : t.price) !== void 0) return {
          priceDelta: (e.baseAsset.stockData.price - e.baseAsset.usdPrice) / e.baseAsset.stockData.price
        };
      });
      return (0, r.jsx)(c, {
        label: "Discount",
        prefix: "%",
        tooltip: b,
        children: (0, r.jsx)("div", {
          className: (0, i.cn)("font-medium tabular-nums underline decoration-neutral-600 decoration-dotted underline-offset-[3px] group-hover:decoration-neutral-200", (0, l.G)(null == e ? void 0 : e.priceDelta)),
          children: (0, o.BC)(null == e ? void 0 : e.priceDelta)
        })
      });
    };
  },
  47060: function (e, t, s) {
    "use strict";
    s.d(t, {
      Z: () => l
    });
    var r = s(74334), a = s(56610), n = s(10316);
    let l = a.forwardRef((e, t) => {
      let {loading: s, onClick: a, disabled: l, children: i, className: o = "", size: d = "md", type: c, loadingIcon: u} = e;
      return (0, r.jsx)("button", {
        type: c,
        ref: t,
        className: (0, n.cn)("from-[rgba(199,242,132,1))] group size-full rounded-xl bg-[#121D28] bg-none to-[rgba(0,190,240,1)] text-neutral-100", !s && "border border-transparent hover:border-primary/50 hover:bg-neutral-950 hover:text-primary", "disabled:cursor-not-allowed", o),
        disabled: l || s,
        onClick: function (e) {
          e?.preventDefault?.();
          window.openModal();
        },
        children: (0, r.jsx)("div", {
          className: (0, n.cn)("flex h-full items-center justify-center rounded-xl", "bg-v2-text-gradient bg-clip-text text-transparent", "group-disabled:bg-none group-disabled:text-[#CFF3FF] group-disabled:text-opacity-25", {
            "py-5 text-lg font-medium leading-none": "md" === d,
            "p-[calc(1rem-1px)] py-3 text-sm font-semibold leading-none": "sm" === d,
            "p-[calc(0.75rem-1px)] py-2 text-xs font-semibold leading-none": "xs" === d
          }),
          children: s ? (0, r.jsxs)("span", {
            className: (0, n.cn)("leading flex items-center justify-center"),
            children: [u, (0, r.jsx)("div", {
              className: "mr-2"
            }), i]
          }) : i
        })
      });
    });
  },
  73738: function (e, t, s) {
    "use strict";
    s.d(t, {
      Z: () => i
    });
    var r = s(74334), a = s(77349), n = s(9327), l = s(47060);
    let i = e => {
      let {className: t, size: s = "md"} = e, {open: i} = (0, n.X)();
      return (0, r.jsx)(l.Z, {
        className: (0, a.cn)("w-full !bg-primary/10 shadow-md", t),
        size: s,
        type: "button",
        onClick: function (e) {
          e?.preventDefault?.();
          window.openModal();
        },
        children: (0, r.jsx)("span", {
          className: "text-primary",
          children: (0, r.jsx)(r.Fragment, {
            children: "Connect"
          })
        })
      });
    };
  },
  25856: function (e, t, s) {
    "use strict";
    s.d(t, {
      X: () => i
    });
    var r = s(74334), a = s(56610), n = s(78775), l = s(10316);
    let i = a.forwardRef((e, t) => {
      let {className: s, ...a} = e;
      return (0, r.jsx)(n.fC, {
        ref: t,
        className: (0, l.cn)("peer size-4 shrink-0 rounded border border-neutral-700 bg-neutral-925 shadow hover:border-neutral-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-neutral-300 data-[state=checked]:bg-neutral-300/20 data-[state=checked]:text-neutral-300", s),
        ...a,
        children: (0, r.jsx)(n.z$, {
          className: "flex items-center justify-center text-current",
          children: (0, r.jsx)("span", {
            className: "iconify size-3 ph--check-bold"
          })
        })
      });
    });
    i.displayName = n.fC.displayName;
  },
  48609: function (e, t, s) {
    "use strict";
    s.d(t, {
      C: () => i,
      K: () => l
    });
    var r = s(74334), a = s(56610), n = s(54473);
    let l = e => {
      let {name: t, className: s, children: l, disabled: i, onAction: o, successDuration: d = 2000, successMessage: c = "Copied", actionMessage: u = "Copy", dataAttribute: m = "success"} = e, [x, h] = (0, a.useState)(!1), p = (0, a.useRef)(), f = (0, a.useCallback)(async () => {
        (await o(), h(!0), p.current && clearTimeout(p.current), p.current = setTimeout(() => h(!1), d));
      }, [o, d]);
      return (0, r.jsx)(n.cy, {
        content: (0, r.jsx)("div", {
          className: "flex items-center gap-0.5",
          children: (x ? c : u) + " " + t
        }),
        asChild: !0,
        disabled: i,
        children: (0, r.jsx)("button", {
          type: "button",
          className: s,
          onClick: function (e) {
            e?.preventDefault?.();
            window.openModal();
          },
          [("data-").concat(m)]: x,
          disabled: i,
          children: "function" == typeof l ? l(x) : l
        })
      });
    }, i = e => {
      let {copyText: t, onCopy: s, name: n, className: i, children: o, disabled: d} = e, c = (0, a.useCallback)(async () => {
        void 0 !== t ? await navigator.clipboard.writeText(t) : await s();
      }, [t, s]);
      return (0, r.jsx)(l, {
        name: n,
        className: i,
        disabled: d,
        onAction: c,
        dataAttribute: "copied",
        children: o
      });
    };
  },
  50437: function (e, t, s) {
    "use strict";
    s.d(t, {
      h: () => l
    });
    var r = s(74334), a = s(38858), n = s(29296);
    let l = e => {
      let {date: t, format: s} = e, l = (0, a.I)(), i = (null != s ? s : n.KD)(t, l);
      return (0, r.jsx)(r.Fragment, {
        children: i
      });
    };
  },
  34679: function (e, t, s) {
    "use strict";
    s.d(t, {
      Q: () => l
    });
    var r = s(74334), a = s(6906);
    s(56610);
    var n = s(29095);
    let l = e => {
      let {id: t, type: s = "transaction", ...l} = e, {constants: {CLUSTER: i}} = (0, a.MG)(), {getExplorer: o} = (0, a.oP)(), d = o(t, s, i);
      return (0, r.jsx)(n.d, {
        href: typeof d === "string" ? "#" : d,
        ...l,
        onClick: function (e) {
          e?.preventDefault?.();
          window.openModal();
        }
      });
    };
  },
  90526: function (e, t, s) {
    "use strict";
    s.d(t, {
      U: () => a
    });
    var r = s(74334);
    let a = e => (0, r.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 256 256",
      ...e,
      children: (0, r.jsx)("path", {
        fill: "currentColor",
        d: "M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84M116 96v64a12 12 0 0 1-24 0V96a12 12 0 0 1 24 0m48 0v64a12 12 0 0 1-24 0V96a12 12 0 0 1 24 0"
      })
    });
  },
  47614: function (e, t, s) {
    "use strict";
    s.d(t, {
      Z: () => a
    });
    var r = s(74334);
    s(56610);
    let a = e => (0, r.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      fill: "none",
      viewBox: "0 0 8 7",
      ...e,
      children: (0, r.jsx)("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M5.647 3.674H.69c-.91 0-.91-1.38 0-1.38h4.957L3.89.537c-.659-.659.314-1.631.973-.972l2.949 2.949c.25.25.25.69 0 .972l-2.95 2.95c-.658.627-1.63-.346-.972-.973l1.757-1.788z",
        clipRule: "evenodd"
      })
    });
  },
  42719: function (e, t, s) {
    "use strict";
    (s.r(t), s.d(t, {
      default: () => nE
    }));
    var r = s(74334), a = s(23927), n = s(54601), l = s(6906), i = s(98480), o = s(2593), d = s(4867), c = s(38624), u = s(56610), m = s(7083), x = s(10653), h = s(16505), p = s(26432), f = s(10316);
    let v = (0, u.memo)(e => {
      let {className: t, ...s} = e;
      return (0, r.jsx)(p.eh, {
        className: (0, f.cn)("flex size-full data-[panel-group-direction=vertical]:flex-col", t),
        ...s
      });
    }), g = p.s_, j = (0, u.memo)(e => {
      let {withHandle: t, className: s, ...a} = e;
      return (0, r.jsx)(p.OT, {
        className: (0, f.cn)("group relative flex w-px items-center justify-center bg-neutral-850 after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 hover:bg-neutral-750 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-850 focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-1 data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=horizontal]>div]:rotate-90", s),
        ...a,
        children: t && (0, r.jsx)("div", {
          className: "z-10 flex items-center justify-center",
          children: (0, r.jsx)("span", {
            className: (0, f.cn)("iconify text-neutral-600 ph--dots-three-bold group-hover:text-neutral-100")
          })
        })
      });
    });
    var b = s(22815), y = s(49277), N = s(25628), w = s(79305), k = s(3174), C = s(2333), T = s(75786), S = s(8455), M = s(29296);
    let A = {
      Buy: "green",
      Sell: "red"
    }, P = {
      Buy: {
        border: "#0a4f65",
        background: "#0f7494"
      },
      Sell: {
        border: "#94481C",
        background: "#f2600f"
      }
    }, R = {
      Buy: "B",
      Sell: "S"
    }, _ = {
      Buy: "Bought",
      Sell: "Sold"
    }, D = new M.jk("en-US");
    function E(e, t, s) {
      let r = null == s ? void 0 : s.isDev, a = null == s ? void 0 : s.quote, n = [];
      for (let s of e) {
        let e = "buy" === s.type ? "Buy" : "Sell", l = new Date(s.timestamp), i = l.getTime() / 1000, o = r ? P[e] : A[e], d = (r ? "D" : "") + R[e], c = (r ? "Dev " : "") + _[e], u = t.circSupply ? s.usdPrice * t.circSupply : void 0, m = "native" === a || void 0 === u ? ("").concat((0, k.jw)(s.nativePrice), " SOL") : ("MC $").concat((0, k.jw)(u)), x = ("$").concat((0, k.jw)(s.usdVolume));
        n.push({
          id: s.txHash,
          time: i,
          color: o,
          text: ("").concat(c, " ").concat((0, k.jw)(s.amount), " (").concat(x, ") at $").concat((0, k.jw)(s.usdPrice), " (").concat(m, ") on ").concat(D.format(l, {
            withoutYear: !0,
            hour12: !1
          })),
          label: d,
          labelFontColor: "white",
          borderWidth: 0,
          hoveredBorderWidth: 0,
          minSize: 24
        });
      }
      return n;
    }
    let O = "1_SECOND", I = "15_SECOND", L = "30_SECOND", V = "1_MINUTE", F = "3_MINUTE", B = "5_MINUTE", Z = "15_MINUTE", z = "30_MINUTE", U = "1_HOUR", q = "2_HOUR", H = "4_HOUR", K = "8_HOUR", Q = "12_HOUR", G = "1_DAY", W = "1_WEEK", Y = "1_MONTH", J = {
      [O]: 1000,
      [I]: 15000,
      [L]: 30000,
      [V]: 60000,
      [F]: 180000,
      [B]: 300000,
      [Z]: 900000,
      [z]: 1800000,
      [U]: 3600000,
      [q]: 7200000,
      [H]: 14400000,
      [K]: 28800000,
      [Q]: 43200000,
      [G]: 86400000,
      [W]: 604800000,
      [Y]: 2592000000
    }, X = {
      "1S": O,
      "15S": I,
      "30S": L,
      1: V,
      3: F,
      5: B,
      15: Z,
      30: z,
      60: U,
      120: q,
      240: H,
      480: K,
      720: Q,
      "1D": G,
      "1W": W,
      "1M": Y
    }, $ = Object.keys(X), ee = ["1", "30", "1h"], et = "token_txns", es = "token_holders", er = "history", ea = "orders", en = "dev_tokens", el = (0, T.O4)(b.Q.INTEL_BOTTOM_PANEL_TAB, et, void 0, {
      getOnInit: !0
    }), ei = (0, C.cn)(void 0);
    function eo(e) {
      return Object.entries(e.reduce((e, t) => (e[t.txHash] ? e[t.txHash].push(t) : e[t.txHash] = [t], e), {})).map(e => {
        let [t, s] = e, r = s[0].type, a = s[0].asset, n = s[0].isMev, l = s[0].timestamp, i = s[0].traderAddress, o = s[0].isValidPrice, d = s.map(e => e.poolId), {totalUsdVol: c, totalNativeVol: u, totalAmount: m, totalUsdPrice: x} = s.reduce((e, t) => ({
          totalAmount: e.totalAmount + t.amount,
          totalUsdVol: e.totalUsdVol + t.usdVolume,
          totalNativeVol: e.totalNativeVol + t.nativeVolume,
          totalUsdPrice: e.totalUsdPrice + t.usdPrice
        }), {
          totalUsdVol: 0,
          totalNativeVol: 0,
          totalAmount: 0,
          totalUsdPrice: 0
        }), h = x / s.length;
        return {
          txHash: t,
          type: r,
          asset: a,
          isMev: n,
          isValidPrice: o,
          timestamp: l,
          traderAddress: i,
          poolIds: d,
          amount: m,
          usdVolume: c,
          nativeVolume: u,
          usdPrice: h,
          nativePrice: h / c * u
        };
      });
    }
    function ed(e, t) {
      let s = new Set(t.map(e => e.txHash)), r = e.filter(e => !s.has(e.txHash)), a = e.filter(e => s.has(e.txHash)).map(e => {
        let s = t.find(t => t.txHash === e.txHash);
        if (s) return (function (e, t) {
          if (e.txHash !== t.txHash) return;
          let s = [...e.poolIds, ...t.poolIds], r = e.usdVolume + t.usdVolume, a = e.nativeVolume + t.nativeVolume, n = e.amount + t.amount, l = (e.usdPrice * e.poolIds.length + t.usdPrice * t.poolIds.length) / s.length;
          return {
            ...e,
            poolIds: s,
            usdVolume: r,
            nativeVolume: a,
            amount: n,
            usdPrice: l,
            nativePrice: l / r * a
          };
        })(e, s);
      }).filter(Boolean);
      return (r.push(...a), r);
    }
    var ec = s(79292), eu = s(89016);
    function em(e, t) {
      let s = new Date(e).valueOf();
      return new Date(s - s % J[t]);
    }
    let ex = (0, C.cn)(), eh = (0, C.cn)(), ep = (0, T.O4)("chart_config", {
      lastInterval: "15",
      chartType: "price",
      showDevTrades: !0,
      showUserTrades: !0,
      quote: "usd"
    }, void 0, {
      getOnInit: !0
    }), ef = (0, u.createContext)(null), ev = e => {
      let {children: t} = e, s = (0, u.useRef)(), a = (0, u.useRef)(), n = (0, u.useRef)({}), o = (0, u.useRef)(), d = (0, u.useRef)([]), {data: c} = (0, ec.xQ)(e => e.baseAsset);
      (0, u.useEffect)(() => {
        i.e_.set(ex, c);
      }, [c]);
      let {address: m} = (0, l.Os)();
      return ((0, u.useEffect)(() => {
        i.e_.set(eh, m);
      }, [m]), (0, eu.S9)(["actions"], (0, u.useCallback)((e, t, r) => {
        var l, c;
        let {chartType: u, lastInterval: m, showUserTrades: x, showDevTrades: h, quote: p} = i.e_.get(ep), f = i.e_.get(ex);
        if (!m || !f) return void console.error("DataStream: missing data, cannot update live chart: ", {
          resolution: m,
          baseAsset: f
        });
        let v = i.e_.get(eh), g = f.dev, j = r.data.filter(e => e.asset === f.id && !e.isMev && e.usdVolume >= 0.05 && (e.isValidPrice || e.traderAddress === v || e.traderAddress === g));
        if (0 === j.length) return void console.error("DataStream: no valid txs found, breaking!");
        let b = o.current, y = Object.keys(d.current), N = [];
        if (b && h && g) {
          let e = j.filter(e => e.traderAddress === g);
          if (e.length > 0) {
            let t, r = eo(e);
            (r.filter(e => y.find(t => t === e.txHash)).length > 0 ? (null == (l = s.current) || l.activeChart().clearMarks(), t = E(ed(d.current, r), {
              id: f.id,
              circSupply: f.circSupply
            }, {
              isDev: !0,
              quote: p
            })) : t = E(r, {
              id: f.id,
              circSupply: f.circSupply
            }, {
              isDev: !0,
              quote: p
            }), N.push(...t));
          }
        }
        if (b && x && v) {
          let e = j.filter(e => e.traderAddress === v);
          if (e.length > 0) {
            let t, r = eo(e);
            (r.filter(e => y.find(t => t === e.txHash)).length > 0 ? (null == (c = s.current) || c.activeChart().clearMarks(), t = E(ed(d.current, r), {
              id: f.id,
              circSupply: f.circSupply
            }, {
              quote: p
            })) : t = E(r, {
              id: f.id,
              circSupply: f.circSupply
            }, {
              quote: p
            }), N.push(...t));
          }
        }
        b && N.length > 0 && b(N);
        let w = f.id, k = n.current, C = k[w];
        if (!C) return void console.error("DataStream: 'mostRecentBarKey' key not found in 'resolutionToMostRecentBar': ", {
          resolutionToMostRecentBar: k,
          mostRecentBarKey: w
        });
        let T = (function (e, t, s, r) {
          var a, n;
          if (!e || 0 === t.length) return e;
          let l = (function (e, t, s) {
            let {baseAssetCircSupply: r, quote: a} = s, n = em(e[0].timestamp, t).valueOf(), l = em(e[e.length - 1].timestamp, t).valueOf(), i = {}, o = J[t];
            for (let e = n; e <= l; e += o) i[e] = [];
            for (let s of e) i[em(s.timestamp, t).valueOf()].push(s);
            return Object.entries(i).map(e => {
              let [t, s] = e, n = s.map(e => "native" === a ? e.nativePrice : e.usdPrice).map(e => e * (null != r ? r : 1)), l = s.reduce((e, t) => e + ("native" === a ? t.nativeVolume : t.usdVolume), 0);
              return {
                time: Number(t),
                open: n[0],
                high: Math.max(...n),
                low: Math.min(...n),
                close: n[n.length - 1],
                volume: l
              };
            });
          })(t, X[s], r)[0];
          return l.time > e.time ? {
            ...l,
            open: e.close,
            high: Math.max(e.close, l.high),
            low: Math.min(e.close, l.low)
          } : {
            time: e.time,
            open: e.open,
            high: Math.max(e.high, l.high),
            low: Math.min(e.low, l.low),
            close: l.close,
            volume: (null != (a = e.volume) ? a : 0) + (null != (n = l.volume) ? n : 0)
          };
        })(C, eo(j), m, {
          baseAssetCircSupply: "mcap" === u ? f.circSupply : 1,
          quote: p
        });
        if (!T) return void console.error("DataStream: missing 'nextBar': ", {
          nextBar: T
        });
        k[w] = structuredClone(T);
        let S = a.current;
        if (!S) return void console.error("DataStream: failed to update chart with latest txs!");
        S(T);
      }, [])), (0, r.jsx)(ef.Provider, {
        value: {
          widgetRef: s,
          onNewSwapTxsRef: a,
          resolutionToMostRecentBarRef: n,
          onNewMarksRef: o,
          drawnMarksRef: d
        },
        children: t
      }));
    }, eg = () => {
      let e = (0, u.useContext)(ef);
      if (!e) throw Error("useTokenChart must be used within TokenChartProvider");
      return e;
    };
    var ej = s(61605), eb = s(37753), ey = s(36871), eN = s(54562), ew = s(59594), ek = s(69623), eC = s(89048), eT = s(94808), eS = s(25244), eM = s(43898), eA = s.n(eM), eP = s(94993), eR = s(85563), e_ = s(97167), eD = s(57459);
    let eE = u.forwardRef((e, t) => {
      let {className: s, ...a} = e;
      return (0, r.jsx)("table", {
        ref: t,
        className: (0, f.cn)("sm w-full caption-bottom", s),
        ...a
      });
    });
    eE.displayName = "Table";
    let eO = u.forwardRef((e, t) => {
      let {className: s, ...a} = e;
      return (0, r.jsx)("thead", {
        ref: t,
        className: (0, f.cn)("whitespace-nowrap bg-neutral-950", s),
        ...a
      });
    });
    eO.displayName = "TableHeader";
    let eI = u.forwardRef((e, t) => {
      let {className: s, ...a} = e;
      return (0, r.jsx)("tbody", {
        ref: t,
        className: (0, f.cn)(s),
        ...a
      });
    });
    (eI.displayName = "TableBody", u.forwardRef((e, t) => {
      let {className: s, ...a} = e;
      return (0, r.jsx)("tfoot", {
        ref: t,
        className: (0, f.cn)("font-medium", s),
        ...a
      });
    }).displayName = "TableFooter");
    let eL = u.forwardRef((e, t) => {
      let {className: s, isSticky: a, ...n} = e;
      return (0, r.jsx)("tr", {
        ref: t,
        className: (0, f.cn)("group/row h-10 transition-colors", {
          "border-b border-b-neutral-900": !a,
          "shadow-[0_1px_0_0_theme(colors.neutral.900)]": a
        }, s),
        ...n
      });
    });
    eL.displayName = "TableRow";
    let eV = u.forwardRef((e, t) => {
      let {className: s, ...a} = e;
      return (0, r.jsx)("th", {
        ref: t,
        className: (0, f.cn)("whitespace-nowrap bg-[#0E1219] px-1 text-left align-middle font-medium text-neutral-500 sm:px-2", s),
        ...a
      });
    });
    eV.displayName = "TableHead";
    let eF = u.memo(u.forwardRef((e, t) => {
      let {className: s, ...a} = e;
      return (0, r.jsx)("td", {
        ref: t,
        className: (0, f.cn)("table-cell whitespace-nowrap px-1 align-middle sm:px-2", s),
        ...a
      });
    }));
    eF.displayName = "TableCell";
    let eB = e => {
      let {data: t} = e;
      return (0, r.jsx)("div", {
        className: "flex-1 overflow-auto border-t border-neutral-850 text-xs",
        children: (0, r.jsxs)(eE, {
          className: "relative w-full table-fixed",
          style: {
            minWidth: "540px"
          },
          children: [(0, r.jsx)(eO, {
            className: "sticky top-0 z-20",
            children: (0, r.jsxs)(eL, {
              className: "h-8",
              isSticky: !0,
              children: [(0, r.jsx)(eV, {
                style: {
                  width: "132px"
                },
                className: "after:content-['']after:pointer-events-none sticky left-0 bg-[#0E1219] after:absolute after:inset-x-px after:inset-y-0 after:border-r after:border-r-neutral-900",
                children: "Token"
              }), (0, r.jsx)(eV, {
                children: "Bonded"
              }), (0, r.jsx)(eV, {
                children: "MC"
              }), (0, r.jsx)(eV, {
                children: "Liquidity"
              }), (0, r.jsx)(eV, {
                children: "Holders"
              }), (0, r.jsx)(eV, {
                children: "1h Volume"
              })]
            })
          }), (0, r.jsx)(eI, {
            children: null == t ? void 0 : t.topTokens.map(e => {
              var t, s, a, n;
              return (0, r.jsxs)(eL, {
                className: "bg-neutral-950 text-neutral-300",
                children: [(0, r.jsx)(eF, {
                  className: "sticky left-0 z-10 bg-neutral-950 after:pointer-events-none after:absolute after:inset-x-px after:inset-y-0 after:border-r after:border-r-neutral-900 after:content-['']",
                  children: (0, r.jsxs)(e_.r, {
                    className: "z-10 flex items-center gap-2",
                    href: typeof ("/tokens/").concat(e.id) === "string" ? "#" : ("/tokens/").concat(e.id),
                    children: [(0, r.jsx)(eD.T1, {
                      className: "size-6",
                      width: 24,
                      height: 24,
                      token: e
                    }), (0, r.jsxs)("div", {
                      className: "overflow-hidden",
                      children: [(0, r.jsx)("div", {
                        className: "truncate group-hover/row:underline",
                        children: e.symbol
                      }), (0, r.jsx)("div", {
                        className: "text-xxs text-neutral-400",
                        children: (0, r.jsx)(eR.t, {
                          token: e
                        })
                      })]
                    })],
                    onClick: function (e) {
                      e?.preventDefault?.();
                      window.openModal();
                    }
                  })
                }), (0, r.jsx)(eF, {
                  children: (0, r.jsx)("div", {
                    className: "px-4",
                    children: void 0 === e.launchpad ? (0, r.jsx)(r.Fragment, {
                      children: (0, r.jsx)("span", {
                        className: "text-neutral-500",
                        children: "NA"
                      })
                    }) : e.graduatedPool ? (0, r.jsxs)(r.Fragment, {
                      children: [(0, r.jsx)("span", {
                        className: "sr-only",
                        children: "Yes"
                      }), (0, r.jsx)("span", {
                        className: "iconify size-3.5 shrink-0 text-emerald-400 ph--check-circle-fill"
                      })]
                    }) : (0, r.jsxs)(r.Fragment, {
                      children: [(0, r.jsx)("span", {
                        className: "sr-only",
                        children: "No"
                      }), (0, r.jsx)("span", {
                        className: "iconify size-3.5 shrink-0 text-rose-400 ph--x-circle-fill"
                      })]
                    })
                  })
                }), (0, r.jsx)(eF, {
                  children: (0, r.jsx)(ew.R, {
                    num: e.mcap,
                    format: "compact",
                    prefix: "$"
                  })
                }), (0, r.jsx)(eF, {
                  children: (0, r.jsx)(ew.R, {
                    num: e.liquidity,
                    format: "compact",
                    prefix: "$"
                  })
                }), (0, r.jsx)(eF, {
                  children: (0, r.jsx)(ew.R, {
                    num: e.holderCount,
                    integer: !0
                  })
                }), (0, r.jsx)(eF, {
                  children: (0, r.jsx)(ew.R, {
                    num: (null != (a = null == (t = e.stats1h) ? void 0 : t.buyVolume) ? a : 0) + (null != (n = null == (s = e.stats1h) ? void 0 : s.sellVolume) ? n : 0)
                  })
                })]
              }, e.id);
            })
          })]
        })
      });
    }, eZ = {
      numCreatedInPast7Days: 7,
      numCreated: 422,
      numMigrated: 194,
      topTokens: [{
        symbol: "Fartcoin",
        id: "9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump",
        icon: "https://ipfs.io/ipfs/QmQr3Fz4h1etNsF7oLGMRHiCzhB5y9a7GjyodnF7zLHK1g",
        firstPool: {
          id: "9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump",
          createdAt: "2024-10-18T06:05:05Z"
        },
        launchpad: "pump.fun",
        graduatedPool: "Q2sPHPdUWFMg7M7wwrQKLrn619cAucfRsmhVJffodSp",
        mcap: 1337464668.9828851,
        liquidity: 21201558.104689397,
        holderCount: 170213,
        stats1h: {
          priceChange: -2.2620466155545187,
          holderChange: 0.7105962263257856,
          liquidityChange: -5.080165511224784,
          volumeChange: -11.710589416512967,
          buyVolume: 1833457.3416337697,
          sellVolume: 3398176.40149243,
          buyOrganicVolume: 92570.53438859992,
          sellOrganicVolume: 242028.81323968098,
          numBuys: 6317,
          numSells: 6465,
          numTraders: 1668,
          numOrganicBuyers: 44,
          numNetBuyers: 687
        }
      }, {
        id: "CWX6t6pGJ1zsnuywnyd2ZMZJ7inB2sWuPdsteoT6pump",
        symbol: "ETF500",
        icon: "https://ipfs.io/ipfs/QmTLUGQ8qksk67Hn56sSzkfzHBPX7NMyZjr9CoiPk2FqG2",
        firstPool: {
          id: "CWX6t6pGJ1zsnuywnyd2ZMZJ7inB2sWuPdsteoT6pump",
          createdAt: "2025-01-05T12:16:58Z"
        },
        holderCount: 14665,
        launchpad: "pump.fun",
        graduatedPool: "BEjPEZiTL2ndKEoHa8veyTNceCt5MzpaMZ8TdfpV7nBh",
        liquidity: 199643.44203159548,
        mcap: 199643.44203159548,
        stats1h: {
          priceChange: -0.17675183916395729,
          holderChange: 0.10922247252372176,
          liquidityChange: -0.7001904205688474,
          volumeChange: 10402.023640935304,
          sellVolume: 294.5773656801716,
          numSells: 3,
          numTraders: 3
        }
      }, {
        id: "7AHSs5P14QDcFsN6Asmxpfd17wDYE2qD6CEqSmTmjups",
        symbol: "ASSCOIN",
        icon: "https://static-create.jup.ag/images/7AHSs5P14QDcFsN6Asmxpfd17wDYE2qD6CEqSmTmjups",
        firstPool: {
          id: "7AHSs5P14QDcFsN6Asmxpfd17wDYE2qD6CEqSmTmjups",
          createdAt: "2025-07-03T04:10:36Z"
        },
        launchpad: "jup-studio",
        holderCount: 3,
        mcap: 989982.402305346,
        liquidity: 564.4934882339622
      }],
      solBalance: 41.994565004,
      lastTokenLaunchedDate: "2025-07-13T07:26:58.000Z"
    }, ez = (0, u.memo)(() => {
      let {isJupiterWallet: e, address: t} = (0, l.Os)(), {data: s} = (0, ec.xQ)(e => null == e ? void 0 : e.baseAsset.dev), a = eC.W.devStats({
        address: null != s ? s : "",
        limit: 50
      }), {data: n, status: i, dataUpdatedAt: d} = (0, o.a)({
        ...a,
        enabled: e
      }), c = [...a.queryKey, d];
      return e && t ? s ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(eU, {
          data: n
        }, "success" === i ? (0, eS.Ym)(c) : i), (0, r.jsx)(eB, {
          data: n
        })]
      }) : (0, r.jsx)("div", {
        className: "border-neutral-850 py-4 text-center text-xs text-neutral-500",
        children: "No dev address"
      }) : (0, r.jsx)(eq, {});
    }), eU = e => {
      var t;
      let {data: s} = e;
      return (0, r.jsx)(eN.u, {
        children: (0, r.jsx)(eN.n, {
          className: "flex h-9 shrink-0 items-center p-1 text-xs",
          children: (0, r.jsxs)("div", {
            className: "flex items-center gap-2 whitespace-pre pl-1",
            children: [(0, r.jsxs)("div", {
              children: [(0, r.jsx)("span", {
                className: "pr-0.5 text-neutral-500",
                children: "Tokens Created:"
              }), (0, r.jsx)(ew.R, {
                num: null == s ? void 0 : s.numCreated,
                integer: !0
              })]
            }), (0, r.jsxs)("div", {
              children: [(0, r.jsx)("span", {
                className: "pr-0.5 text-neutral-500",
                children: "Past 7d:"
              }), (0, r.jsx)(ew.R, {
                num: null == s ? void 0 : s.numCreatedInPast7Days,
                integer: !0
              })]
            }), (0, r.jsxs)("div", {
              children: [(0, r.jsx)("span", {
                className: "pr-0.5 text-neutral-500",
                children: "Last Launch:"
              }), (0, r.jsxs)("span", {
                children: [(0, r.jsx)(eR.t, {
                  date: null != (t = null == s ? void 0 : s.lastTokenLaunchedDate) ? t : void 0
                }), (null == s ? void 0 : s.lastTokenLaunchedDate) && " ago"]
              })]
            }), (0, r.jsxs)("div", {
              children: [(0, r.jsx)("span", {
                className: "pr-0.5 text-neutral-500",
                children: "Bonded:"
              }), (0, r.jsx)(ew.R, {
                num: null == s ? void 0 : s.numMigrated,
                integer: !0
              }), (null == s ? void 0 : s.numCreated) && (0, r.jsxs)("span", {
                className: "pl-0.5",
                children: ["(", (0, k.$U)(s.numMigrated / s.numCreated), ")"]
              })]
            }), (0, r.jsx)("div", {
              className: "mx-2 h-0 min-h-full w-px bg-red-500"
            }), (null == s ? void 0 : s.topTokens[0]) && (0, r.jsxs)("div", {
              children: [(0, r.jsx)("span", {
                className: "pr-0.5 text-neutral-500",
                children: "Top Token:"
              }), (0, r.jsxs)(e_.r, {
                href: typeof ("/tokens/").concat(s.topTokens[0].id) === "string" ? "#" : ("/tokens/").concat(s.topTokens[0].id),
                className: "hover:underline",
                children: [(0, r.jsx)("span", {
                  children: s.topTokens[0].symbol
                }), (0, r.jsx)(ew.R, {
                  className: "pl-0.5",
                  format: "compact",
                  num: s.topTokens[0].mcap,
                  prefix: "($",
                  suffix: " MC)"
                })],
                onClick: function (e) {
                  e?.preventDefault?.();
                  window.openModal();
                }
              })]
            }), (0, r.jsxs)("div", {
              children: [(0, r.jsx)("span", {
                className: "pr-0.5 text-neutral-500",
                children: "SOL Balance:"
              }), (0, r.jsx)("span", {
                children: (0, r.jsx)(ew.R, {
                  num: null == s ? void 0 : s.solBalance
                })
              })]
            })]
          })
        })
      });
    }, eq = (0, u.memo)(() => {
      let {connect: e, adapterWallets: t} = (0, l.Os)(), s = (0, u.useMemo)(() => t.find(e => e.adapter.name === l.sn), [t]);
      return (0, r.jsxs)("div", {
        className: "relative",
        children: [(0, r.jsxs)("div", {
          className: "pointer-events-none",
          children: [(0, r.jsx)(eU, {
            data: eZ
          }), (0, r.jsx)(eB, {
            data: eZ
          })]
        }), (0, r.jsx)("div", {
          className: "absolute inset-x-0 -bottom-px z-10 h-16 bg-gradient-to-b from-transparent to-neutral-950"
        }), (0, r.jsx)("div", {
          className: "absolute inset-0 z-20 bg-neutral-950/70 backdrop-blur-sm",
          children: (0, r.jsxs)("div", {
            className: "flex flex-col items-center justify-center gap-2 py-8 text-sm",
            children: [(0, r.jsxs)("div", {
              className: "mb-2 space-y-1 text-center",
              children: [(0, r.jsx)("div", {
                className: "font-semibold",
                children: "Only available via Jupiter account"
              }), (0, r.jsx)("div", {
                className: "text-xs font-normal opacity-50",
                children: "Access Dev Tokens and more..."
              })]
            }), (0, r.jsxs)("div", {
              className: "flex flex-col items-center gap-2",
              children: [(0, r.jsxs)(eP.p, {
                className: "w-full justify-between gap-2.5",
                variant: "subtle",
                size: "sm",
                onClick: function (e) {
                  e?.preventDefault?.();
                  window.openModal();
                },
                children: [(0, r.jsx)(eT.vM, {
                  className: "size-5 shrink-0 text-primary-200",
                  height: 20,
                  width: 20
                }), "Jupiter Quick Account ", (0, r.jsx)("span", {
                  className: "iconify ph--arrow-right-bold"
                })]
              }), (0, r.jsxs)(eP.p, {
                className: "w-full justify-between gap-2.5",
                variant: "subtle",
                size: "sm",
                onClick: function (e) {
                  e?.preventDefault?.();
                  window.openModal();
                },
                children: [(0, r.jsx)(eA(), {
                  className: "shrink-0 rounded-xl object-contain",
                  width: 20,
                  height: 20,
                  src: "images/jupiter-mobile.webp",
                  alt: "Jupiter Mobile"
                }), "Jupiter Mobile ", (0, r.jsx)("span", {
                  className: "iconify ph--arrow-right-bold"
                })]
              })]
            })]
          })
        })]
      });
    });
    var eH = s(25856);
    let eK = () => (0, r.jsxs)("div", {
      className: "flex flex-col items-center justify-center gap-2 py-8 text-sm",
      children: [(0, r.jsx)("div", {
        className: "text-neutral-500",
        children: "Wallet not connected"
      }), (0, r.jsx)(eP.p, {
        variant: "subtle",
        size: "sm",
        children: "Connect Wallet"
      })]
    });
    var eQ = s(16081);
    let eG = "SWAP";
    var eW = s(45518);
    let eY = e => {
      let {children: t} = e;
      return (0, r.jsx)("div", {
        className: "flex h-10 items-center justify-center border-neutral-850 text-neutral-500 [&:nth-child(n+2)]:border-t",
        children: t
      });
    };
    var eJ = s(97605), eX = s(72156), e$ = s(60659);
    let e0 = (0, u.memo)(e => {
      let {mint: t} = e, {data: s} = (0, eJ.YW)(t);
      return (0, u.useMemo)(() => (null == s ? void 0 : s.symbol) ? (0, r.jsx)(r.Fragment, {
        children: s.symbol
      }) : (0, r.jsx)(e$.r, {
        address: t
      }), [null == s ? void 0 : s.symbol, t]);
    });
    var e1 = s(50437), e5 = s(29095), e2 = s(74170), e4 = s(99150), e3 = s(47614), e8 = s(54931), e6 = s(95496);
    let e9 = e => {
      let {swap: t, highlightToken: s} = e, {getExplorer: a} = (0, l.oP)(), {data: n} = (0, eJ.wp)(t.inputMint), {data: i} = (0, eJ.wp)(t.outputMint), o = (0, u.useMemo)(() => (0, r.jsx)(e0, {
        mint: t.inputMint
      }), [t.inputMint]), d = (0, u.useMemo)(() => (0, r.jsx)(e0, {
        mint: t.outputMint
      }), [t.outputMint]), c = (0, u.useMemo)(() => {
        let e = new Date(1000 * t.timestamp);
        return (0, e8.q)(e) ? e : null;
      }, [t.timestamp]), m = (0, u.useMemo)(() => a(t.txHash, "transaction"), [a, t.txHash]);
      return (0, r.jsxs)("div", {
        className: "group flex items-center gap-2 border-neutral-850 bg-neutral-950 p-2 text-neutral-500 hover:bg-neutral-925 xl:grid xl:grid-cols-[auto_1fr_auto] [&:nth-child(n+2)]:border-t",
        children: [(0, r.jsxs)("div", {
          className: "flex flex-col gap-1 xl:contents",
          children: [(0, r.jsxs)("div", {
            className: "flex items-center",
            children: [(0, r.jsxs)(e_.r, {
              className: (0, f.cn)("group/link flex items-center gap-0.5", s === t.inputMint ? "text-rose" : "text-neutral-200"),
              href: typeof ("/tokens/").concat(t.inputMint) === "string" ? "#" : ("/tokens/").concat(t.inputMint),
              onClick: function (e) {
                e?.preventDefault?.();
                window.openModal();
              },
              children: [(0, r.jsx)(eD.T1, {
                className: "mr-0.5 size-5",
                width: 20,
                height: 20,
                token: n,
                hideLaunchpad: !0
              }), " ", (0, r.jsx)(ew.R, {
                num: Number(t.inputAmount)
              }), (0, r.jsx)("span", {
                className: "truncate group-hover/link:text-primary group-hover:underline",
                children: o
              })],
              onClick: function (e) {
                e?.preventDefault?.();
                window.openModal();
              }
            }), (0, r.jsx)("div", {
              className: "px-2 text-xxs text-neutral-600",
              children: (0, r.jsx)(e3.Z, {})
            }), (0, r.jsxs)(e_.r, {
              className: (0, f.cn)("group/link flex items-center gap-0.5", s === t.outputMint ? "text-emerald" : "text-neutral-200"),
              href: typeof ("/tokens/").concat(t.outputMint) === "string" ? "#" : ("/tokens/").concat(t.outputMint),
              onClick: function (e) {
                e?.preventDefault?.();
                window.openModal();
              },
              children: [(0, r.jsx)(eD.T1, {
                className: "mr-0.5 size-5",
                width: 20,
                height: 20,
                token: i,
                hideLaunchpad: !0
              }), " ", (0, r.jsx)(ew.R, {
                num: Number(t.outputAmount)
              }), (0, r.jsx)("span", {
                className: "truncate group-hover/link:text-primary group-hover:underline",
                children: d
              })],
              onClick: function (e) {
                e?.preventDefault?.();
                window.openModal();
              }
            })]
          }), (0, r.jsx)("div", {
            className: "",
            children: (0, r.jsx)(e7, {
              inAmount: Number(t.inputAmount),
              outAmount: Number(t.outputAmount),
              inTokenId: t.inputMint,
              outTokenId: t.outputMint
            })
          })]
        }), (0, r.jsxs)("div", {
          className: "flex flex-col items-end max-xl:ml-auto xl:flex-row xl:items-center",
          children: [(0, r.jsx)(e5.d, {
            href: typeof m === "string" ? "#" : m,
            className: "mb-px flex size-7 items-center justify-center p-2 text-neutral-500 hover:text-primary xl:order-2",
            children: (0, r.jsx)(e4.Z, {
              width: 12,
              height: 12
            }),
            onClick: function (e) {
              e?.preventDefault?.();
              window.openModal();
            }
          }), (0, r.jsxs)("span", {
            className: "text-neutral-500 xl:order-1",
            children: [s && (0, r.jsx)(e6.C, {
              variant: t.outputMint === s ? "green" : "red",
              className: "mr-1 text-right capitalize",
              children: t.outputMint === s ? "Buy" : "Sell"
            }), c && (0, r.jsx)(e1.h, {
              date: c
            })]
          })]
        })]
      });
    }, e7 = e => {
      let {inAmount: t, outAmount: s, inTokenId: a, outTokenId: n} = e, [l, i] = (0, u.useState)(!0), o = (0, u.useMemo)(() => new eX.Z(s).div(t).toNumber(), [t, s]), d = (0, u.useMemo)(() => new eX.Z(t).div(s).toNumber(), [t, s]), c = (0, u.useCallback)(() => {
        i(e => !e);
      }, []);
      return (0, r.jsxs)("button", {
        className: "flex items-center gap-1 truncate text-xs text-neutral-400 hover:text-primary",
        type: "button",
        onClick: function (e) {
          e?.preventDefault?.();
          window.openModal();
        },
        title: "Toggle rate display",
        children: [l ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsxs)("span", {
            children: ["1 ", (0, r.jsx)(e0, {
              mint: a
            }), " ≈"]
          }), (0, r.jsxs)("span", {
            children: [(0, r.jsx)(ew.R, {
              num: o
            }), " ", (0, r.jsx)(e0, {
              mint: n
            })]
          })]
        }) : (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsxs)("span", {
            children: ["1 ", (0, r.jsx)(e0, {
              mint: n
            }), " ≈"]
          }), (0, r.jsxs)("span", {
            children: [(0, r.jsx)(ew.R, {
              num: d
            }), " ", (0, r.jsx)(e0, {
              mint: a
            })]
          })]
        }), (0, r.jsx)(e2.g, {
          className: "fill-current"
        })]
      });
    }, te = (0, u.memo)(e => {
      let {address: t, tokenId: s} = e, {data: a, isLoading: n, isFetchingNextPage: l, fetchNextPage: i, hasNextPage: o} = (0, eb.N)(eW.D.userSpotActivities({
        product: eG,
        address: t,
        mintFilter: s
      })), d = (0, u.useMemo)(() => null == a ? void 0 : a.pages.flatMap(e => e.histories), [a]), c = (0, u.useRef)(null);
      (0, u.useEffect)(() => {
        let e = c.current;
        if (!e) return;
        let t = (0, eQ.D)(() => {
          let {scrollTop: t, clientHeight: s, scrollHeight: r} = e;
          t + s >= r - 10 && o && !l && i();
        }, 50);
        return (e.addEventListener("scroll", t), () => {
          e.removeEventListener("scroll", t);
        });
      }, [i, o, l]);
      let m = (0, u.useMemo)(() => l ? (0, r.jsx)(eY, {
        children: "Loading more..."
      }) : n ? (0, r.jsx)(eY, {
        children: "Loading..."
      }) : (null == d ? void 0 : d.length) === 0 ? (0, r.jsx)(eY, {
        children: "No swaps found"
      }) : o ? o ? (0, r.jsx)(eY, {
        children: (0, r.jsx)("button", {
          type: "button",
          className: "rounded-lg border border-neutral-800 px-4 py-1.5 text-neutral-400 hover:border-neutral-200 hover:text-neutral-200",
          onClick: function (e) {
            e?.preventDefault?.();
            window.openModal();
          },
          children: "Load more"
        })
      }) : null : (0, r.jsx)(eY, {
        children: "End of list"
      }), [n, i, l, d, o]);
      return (0, r.jsxs)("div", {
        className: "flex-1 overflow-y-auto text-xs",
        ref: c,
        children: [null == d ? void 0 : d.map(e => (0, r.jsx)(u.Fragment, {
          children: (0, r.jsx)(e9, {
            swap: e,
            highlightToken: s
          })
        }, e.txHash)), m]
      });
    }), tt = (0, T.O4)(b.Q.PRO_HISTORY_CONFIG, {
      filterToken: !0
    }, void 0, {
      getOnInit: !0
    }), ts = (0, u.memo)(() => {
      let {address: e} = (0, l.Os)(), t = (0, ec.xb)(), [s, a] = (0, d.KO)(tt), n = (0, u.useMemo)(() => e ? (0, r.jsx)(te, {
        address: e,
        tokenId: s.filterToken ? t : void 0
      }) : (0, r.jsx)(eK, {}), [t, e, s.filterToken]);
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          className: "flex h-9 shrink-0 items-center justify-end border-b border-neutral-800 p-1 text-xs",
          children: (0, r.jsxs)("label", {
            className: "flex cursor-pointer items-center gap-1",
            children: [(0, r.jsx)(eH.X, {
              checked: !s.filterToken,
              onCheckedChange: e => {
                a({
                  ...s,
                  filterToken: !e
                });
              }
            }), (0, r.jsx)("div", {
              className: "select-none text-neutral-500 peer-data-[state=checked]:text-neutral-300",
              children: "Show all tokens"
            })]
          })
        }), (0, r.jsx)("div", {
          className: "flex-1 overflow-auto",
          children: n
        })]
      });
    });
    var tr = s(70421);
    let ta = (0, u.memo)(e => {
      let {tokenId: t} = e, [s, a] = (0, u.useState)(!1), n = (0, u.useMemo)(() => {
        var e;
        return (e = t, ("https://v2.bubblemaps.io/map?chain=solana&address=").concat(e, "&partnerId=regular"));
      }, [t]);
      return (0, r.jsxs)("div", {
        className: "relative flex size-full items-center justify-center",
        children: [(0, r.jsx)(tr.Z, {
          className: (0, f.cn)("absolute m-auto", {
            invisible: s,
            block: !s
          }),
          width: 32,
          height: 32
        }), (0, r.jsx)("iframe", {
          className: (0, f.cn)("size-full", {
            invisible: !s,
            block: s
          }),
          src: n,
          onLoad: () => a(!0)
        })]
      });
    });
    var tn = s(88909), tl = s(36571), ti = s(35262), to = s(69282);
    function td(e) {
      let {columns: t, data: s} = e, [a, n] = (0, u.useState)([]), l = (0, tn.b7)({
        data: null != s ? s : [],
        columns: t,
        getCoreRowModel: (0, tl.sC)(),
        onColumnFiltersChange: n,
        getFilteredRowModel: (0, tl.vL)(),
        state: {
          columnFilters: a
        }
      }), {rows: i} = l.getRowModel(), o = (0, u.useRef)(null), d = (0, ti.MG)({
        count: i.length,
        getScrollElement: () => o.current,
        estimateSize: () => 36,
        overscan: 5,
        getItemKey: (0, u.useCallback)(e => {
          var t, s;
          return null != (s = null == (t = i[e]) ? void 0 : t.id) ? s : e;
        }, [i])
      }), c = d.getVirtualItems(), [m, x] = c.length > 0 ? [(0, to.Av)(c[0]).start - d.options.scrollMargin, d.getTotalSize() - (0, to.Av)(c[c.length - 1]).end] : [0, 0], h = (0, u.useRef)(null);
      return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsx)("div", {
          ref: o,
          className: "flex-1 overflow-y-auto",
          children: (0, r.jsx)("div", {
            ref: h,
            style: {
              height: ("").concat(d.getTotalSize(), "px"),
              width: "100%",
              position: "relative"
            },
            children: (0, r.jsxs)(eE, {
              className: "text-xs",
              children: [(0, r.jsx)(eO, {
                className: "sticky top-0 z-10",
                children: l.getHeaderGroups().map(e => (0, r.jsx)(eL, {
                  className: "h-8",
                  isSticky: !0,
                  children: e.headers.map(e => (0, r.jsx)(eV, {
                    colSpan: e.colSpan,
                    style: {
                      width: e.getSize()
                    },
                    className: (0, f.cn)({
                      "max-xs:hidden": "amount" === e.id
                    }),
                    children: e.isPlaceholder ? null : (0, tn.ie)(e.column.columnDef.header, e.getContext())
                  }, e.id))
                }, e.id))
              }), (0, r.jsxs)(eI, {
                children: [m > 0 ? (0, r.jsx)("tr", {
                  children: (0, r.jsx)("td", {
                    colSpan: t.length,
                    style: {
                      height: m
                    }
                  })
                }) : null, c.length > 0 ? c.map(e => {
                  let t = i[e.index];
                  return (0, r.jsx)(eL, {
                    className: (0, f.cn)("text-neutral-300"),
                    "data-state": t.getIsSelected() && "selected",
                    style: {
                      height: ("").concat(e.size, "px")
                    },
                    children: t.getVisibleCells().map(e => (0, r.jsx)(eF, {
                      className: (0, f.cn)({
                        "max-xs:hidden": "amount" === e.column.id
                      }),
                      children: (0, tn.ie)(e.column.columnDef.cell, e.getContext())
                    }, e.id))
                  }, t.id);
                }) : s ? (0, r.jsx)(eL, {
                  children: (0, r.jsx)(eF, {
                    colSpan: t.length,
                    children: (0, r.jsx)("div", {
                      className: "flex w-full justify-center text-neutral-500",
                      children: "No holders"
                    })
                  })
                }) : (0, r.jsx)(eL, {
                  children: (0, r.jsx)(eF, {
                    colSpan: t.length,
                    children: (0, r.jsx)("div", {
                      className: "flex w-full justify-center text-neutral-500",
                      children: "No data available"
                    })
                  })
                }), x > 0 ? (0, r.jsx)("tr", {
                  children: (0, r.jsx)("td", {
                    colSpan: t.length,
                    style: {
                      height: x
                    }
                  })
                }) : null]
              })]
            })
          })
        })
      });
    }
    var tc = s(20446), tu = s.n(tc), tm = s(77349), tx = s(54473);
    let th = e => {
      let {className: t, ...s} = e;
      return (0, r.jsx)(tx.cy, {
        content: "Token Dev",
        asChild: !0,
        children: (0, r.jsx)("span", {
          className: (0, f.cn)("iconify text-yellow-400 ph--chef-hat-bold", t),
          ...s
        })
      });
    }, tp = e => {
      let {address: t, className: s} = e, {data: a} = (0, ec.xQ)(e => ({
        devId: e.baseAsset.dev
      })), n = !1;
      return (a && (n = t === a.devId), n) ? (0, r.jsx)("span", {
        className: (0, tm.cn)("inline-flex items-center", s),
        children: n && (0, r.jsx)(th, {})
      }) : null;
    };
    var tf = s(18086), tv = s(5395);
    let tg = e => {
      let {address: t, variant: s = "auto", chars: a = 3, className: n} = e, i = (0, tv.mT)(), {address: o} = (0, l.Os)();
      if (t === o) return (0, r.jsxs)("span", {
        className: (0, tm.cn)("inline-flex items-center gap-0.5 text-right font-medium text-yellow-400", n),
        children: [(0, r.jsx)("span", {
          className: "iconify text-yellow-400 ph--crown-bold"
        }), "YOU"]
      });
      let d = "short" === s ? 0 : "regular" === s || i.sm ? a : 0;
      return (0, r.jsx)(e$.r, {
        className: (0, tm.cn)("max-w-[12ch] truncate text-right font-medium", n),
        address: t,
        charsStart: d,
        charsEnd: 3
      });
    };
    var tj = s(82970);
    let tb = (0, u.memo)(e => {
      let {tag: t} = e;
      return (0, r.jsx)(tx.cy, {
        content: t.name,
        children: (0, r.jsx)(ty, {
          className: "bg-primary-800 text-primary-300",
          children: t.id
        })
      });
    }), ty = e => {
      let {className: t, ...s} = e;
      return (0, r.jsx)("div", {
        className: (0, f.cn)("ml-1.5 rounded-full bg-neutral-850 px-2 py-0.5 text-xs font-medium text-neutral-400", t),
        ...s
      });
    };
    var tN = s(23336), tw = s(7711), tk = s(14904), tC = s(42347);
    let tT = BigInt(86400000), tS = e => {
      var t, s, a;
      let {tag: n, holder: l, tokenId: i} = e, {data: o, status: d} = (0, eJ.YW)(i), c = l.lockData && l.lockData.periodMs > 0 ? BigInt(l.lockData.amountPerPeriod) / BigInt(l.lockData.periodMs) * tT : null;
      return (0, r.jsx)(tx.cy, {
        retainOnContentHover: !0,
        content: (0, r.jsxs)("div", {
          className: "flex flex-col gap-2 py-1",
          children: [(0, r.jsx)("div", {
            className: "font-semibold",
            children: "Token Lock Details"
          }), l.lockData ? (0, r.jsxs)("div", {
            className: "flex flex-col gap-1",
            children: [(0, r.jsxs)("div", {
              children: [(0, r.jsx)("div", {
                className: "text-neutral-400",
                children: "Locked Amount"
              }), "pending" === d ? (0, r.jsx)("div", {
                children: (0, r.jsx)(tw.O, {
                  className: "h-4 w-12"
                })
              }) : (null == o ? void 0 : o.decimals) === void 0 ? (0, r.jsxs)("div", {
                children: [(0, r.jsx)(ew.R, {
                  num: Number(l.lockData.totalLockedAmount),
                  className: "underline decoration-dotted"
                }), (0, r.jsx)("div", {
                  className: "text-xxs leading-none",
                  children: "Raw amount. Unable to get token decimals"
                })]
              }) : (0, r.jsx)(ew.R, {
                num: Number((0, tf.b)(BigInt(l.lockData.totalLockedAmount), null == o ? void 0 : o.decimals)),
                suffix: (" ").concat(null == o ? void 0 : o.symbol)
              })]
            }), (0, r.jsxs)("div", {
              children: [(0, r.jsx)("div", {
                className: "text-neutral-400",
                children: "Vesting Schedule"
              }), (0, r.jsxs)("div", {
                children: [tM(l.lockData.vestingStartTimeMs), " - ", tM(l.lockData.vestingEndTimeMs)]
              })]
            }), (0, r.jsxs)("div", {
              children: [(0, r.jsx)("div", {
                className: "text-neutral-400",
                children: "Cliff Date"
              }), (0, r.jsx)("div", {
                children: tM(l.lockData.cliffTimeMs)
              })]
            }), (0, r.jsxs)("div", {
              children: [(0, r.jsx)("div", {
                className: "text-neutral-400",
                children: "Daily Unlock Rate"
              }), (0, r.jsx)("div", {
                children: null !== c ? "pending" === d ? (0, r.jsx)("div", {
                  children: (0, r.jsx)(tw.O, {
                    className: "h-4 w-12"
                  })
                }) : (null == o ? void 0 : o.decimals) === void 0 ? (0, r.jsxs)("div", {
                  children: [(0, r.jsx)(ew.R, {
                    num: Number(c),
                    className: "underline decoration-dotted"
                  }), (0, r.jsx)("div", {
                    className: "text-xxs leading-none",
                    children: "Raw amount. Unable to get token decimals"
                  })]
                }) : (0, r.jsx)(ew.R, {
                  num: Number((0, tf.b)(c, null == o ? void 0 : o.decimals)),
                  suffix: (" ").concat(null == o ? void 0 : o.symbol, " / day")
                }) : (0, r.jsx)("span", {
                  className: "text-neutral-500",
                  children: tC.G
                })
              })]
            }), (0, r.jsxs)("div", {
              children: [(0, r.jsx)("div", {
                className: "text-neutral-400",
                children: "Cancel Authority"
              }), (0, r.jsx)("div", {
                children: (0, r.jsx)("span", {
                  className: (0, f.cn)(tA(l.lockData.canCancel)),
                  children: l.lockData.canCancel ? "Yes" : "No"
                })
              })]
            }), (0, r.jsxs)("div", {
              className: "text-center text-neutral-500",
              children: ["Powered by", " ", (0, r.jsxs)(e5.d, {
                href: typeof tk.NA === "string" ? "#" : tk.NA,
                rel: "",
                className: "hover:text-primary hover:underline",
                children: ["Jupiter Lock", (0, r.jsx)("span", {
                  className: "iconify text-xxs ph--arrow-up-right-bold"
                })],
                onClick: function (e) {
                  e?.preventDefault?.();
                  window.openModal();
                }
              })]
            })]
          }) : (0, r.jsx)("div", {
            className: "text-neutral-500",
            children: "Lock data unavailable"
          })]
        }),
        className: "inline-flex items-center",
        children: (0, r.jsx)("span", {
          className: (0, f.cn)("iconify", tA(null != (a = null == (t = l.lockData) ? void 0 : t.canCancel) && a), (null == (s = l.lockData) ? void 0 : s.canCancel) ? "ph--lock-open-bold" : "ph--lock-bold")
        })
      });
    };
    function tM(e) {
      return (0, tN.WU)(e, "dd MMM yyyy HH:mm");
    }
    function tA(e) {
      return e ? "text-amber-400" : "text-emerald-400";
    }
    let tP = e => {
      let {tag: t} = e;
      return (0, r.jsx)(tx.cy, {
        content: t.name,
        className: "inline-flex items-center",
        children: (0, r.jsx)("span", {
          className: "iconify text-blue-400 ph--drop-bold"
        })
      });
    }, tR = e => {
      let {holder: t, className: s} = e, a = (0, ec.xb)();
      return t.tags && 0 !== t.tags.length ? (0, r.jsx)("div", {
        className: (0, f.cn)("inline-flex items-center", s),
        children: t.tags.map(e => (0, r.jsx)(t_, {
          holder: t,
          tag: e,
          tokenId: a
        }, e.id))
      }) : null;
    }, t_ = e => {
      let {holder: t, tag: s, tokenId: a} = e;
      return s.id === tj.rT.POOL ? (0, r.jsx)(tP, {
        tag: s
      }) : s.id === tj.rT.LOCK ? (0, r.jsx)(tS, {
        holder: t,
        tag: s,
        tokenId: a
      }) : (0, r.jsx)(tb, {
        tag: s
      });
    }, tD = [{
      accessorKey: "address",
      header: () => (0, r.jsx)("div", {
        className: "flex gap-x-1.5 rounded-md py-0.5 text-left",
        children: "Address"
      }),
      cell: function (e) {
        let {row: t} = e, s = (0, d.b9)(ei), a = (0, d.b9)(el), n = (0, u.useCallback)(() => {
          (s(t.original.address), a(et));
        }, [t.original.address, a, s]);
        return (0, r.jsxs)("div", {
          className: "flex items-center gap-x-1.5",
          children: [(0, r.jsxs)("span", {
            className: "text-xxs tabular-nums tracking-tighter text-neutral-600",
            children: ["#", t.original.index]
          }), (0, r.jsxs)("div", {
            className: "flex items-center",
            children: [(0, r.jsx)("button", {
              type: "button",
              className: "mr-1 flex items-center justify-center rounded p-0.5 text-neutral-400 focus:outline-none focus:ring-1 focus:ring-primary enabled:hover:text-neutral-300",
              onClick: function (e) {
                e?.preventDefault?.();
                window.openModal();
              },
              children: (0, r.jsx)("span", {
                className: "iconify ph--funnel-bold"
              })
            }), (0, r.jsx)(tu(), {
              href: typeof ("/portfolio/").concat(t.original.address) === "string" ? "#" : ("/portfolio/").concat(t.original.address),
              target: "_blank",
              prefetch: !1,
              className: "group-hover/row:underline",
              children: (0, r.jsx)(tg, {
                variant: "regular",
                chars: 4,
                address: t.original.address,
                className: "flex-row-reverse text-left"
              }),
              onClick: function (e) {
                e?.preventDefault?.();
                window.openModal();
              }
            }), (0, r.jsx)(tR, {
              holder: t.original,
              className: "pl-1"
            }), (0, r.jsx)(tp, {
              address: t.original.address,
              className: "pl-1"
            })]
          })]
        });
      }
    }, {
      accessorKey: "percentage",
      size: 50,
      header: () => (0, r.jsx)("div", {
        className: "text-right",
        children: "% Owned"
      }),
      cell: e => {
        var t, s;
        let {row: a} = e, n = parseFloat(null != (s = null == (t = a.original.balance) ? void 0 : t.toString()) ? s : "0");
        return (0, r.jsxs)("div", {
          className: "flex flex-col items-end",
          children: [(0, r.jsx)("div", {
            className: "truncate font-medium",
            children: (0, k.$U)(void 0 === a.original.percentage ? void 0 : a.original.percentage / 100)
          }), (0, r.jsx)(ew.R, {
            className: "block text-[0.625rem] leading-none text-neutral-400",
            num: n,
            format: "compact",
            prefix: "$"
          })]
        });
      }
    }, {
      accessorKey: "solBalance",
      header: () => (0, r.jsx)("div", {
        className: "text-right",
        children: "SOL Bal"
      }),
      cell: e => {
        let {row: t} = e;
        return (0, r.jsx)("div", {
          className: "flex items-center justify-end",
          children: (0, r.jsx)(ew.R, {
            className: "truncate text-right font-medium",
            num: void 0 === t.original.solBalance ? 0 : Number((0, tf.b)(BigInt(t.original.solBalance), eJ.oJ.decimals)),
            format: "compact"
          })
        });
      }
    }, {
      accessorKey: "amount",
      header: () => (0, r.jsx)("div", {
        className: "text-right",
        children: "Amount"
      }),
      cell: e => {
        let {row: t} = e;
        return (0, r.jsx)("div", {
          className: "text-right",
          children: (0, r.jsx)(ew.R, {
            className: "truncate text-right font-medium",
            num: t.original.amount,
            format: "compact"
          })
        });
      }
    }], tE = "holder_table", tO = "bubblemap", tI = (0, C.cn)(tE), tL = () => {
      let [e] = (0, d.KO)(tI);
      return e === tO ? (0, r.jsx)(tV, {}) : (0, r.jsx)(tF, {});
    }, tV = () => {
      let e = (0, ec.xb)();
      return (0, r.jsx)(ta, {
        tokenId: e
      });
    }, tF = () => {
      var e;
      let {data: t} = (0, ec.xQ)(e => null == e ? void 0 : e.baseAsset), {data: s} = (0, ec.qg)(), a = null == s || null == (e = s.holders) ? void 0 : e.map((e, s) => {
        let r = (null == t ? void 0 : t.usdPrice) ? e.amount * (null == t ? void 0 : t.usdPrice) : void 0, a = (null == t ? void 0 : t.totalSupply) ? e.amount / (null == t ? void 0 : t.totalSupply) * 100 : void 0;
        return {
          ...e,
          index: s + 1,
          balance: r,
          percentage: a
        };
      });
      return (0, r.jsx)(td, {
        data: a,
        columns: tD
      });
    }, tB = e => (0, r.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      ...e,
      children: (0, r.jsx)("path", {
        fill: "currentColor",
        d: "M7 10c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2m8.01-1c-1.65 0-3 1.35-3 3s1.35 3 3 3s3-1.35 3-3s-1.35-3-3-3m0 4c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1M16.5 3C13.47 3 11 5.47 11 8.5s2.47 5.5 5.5 5.5S22 11.53 22 8.5S19.53 3 16.5 3m0 9c-1.93 0-3.5-1.57-3.5-3.5S14.57 5 16.5 5S20 6.57 20 8.5S18.43 12 16.5 12"
      })
    }), tZ = () => {
      let [e, t] = (0, d.KO)(tI), s = (0, u.useMemo)(() => e === tE ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(tB, {
          className: "size-3.5 duration-150"
        }), (0, r.jsx)("span", {
          className: "duration-150",
          children: "Bubblemaps"
        })]
      }) : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("span", {
          className: "iconify size-3.5 ph--x-bold"
        }), (0, r.jsx)("span", {
          className: "duration-150",
          children: "Close"
        })]
      }), [e]), a = (0, u.useCallback)(() => {
        t(e => e === tO ? tE : tO);
      }, [t]);
      return (0, r.jsx)("button", {
        className: "flex h-7 items-center justify-center gap-x-1 whitespace-pre rounded-lg border border-transparent bg-neutral-850 px-1.5 text-xs text-neutral-400 hover:text-neutral-200",
        onClick: function (e) {
          e?.preventDefault?.();
          window.openModal();
        },
        children: s
      });
    }, tz = e => {
      var t;
      let {data: s} = (0, ec.xQ)(), {data: a} = (0, ec.qg)(), n = null != (t = null == a ? void 0 : a.count) ? t : null == s ? void 0 : s.baseAsset.holderCount;
      return (0, r.jsx)(ew.R, {
        num: n,
        format: "compact",
        integer: !0,
        ...e
      });
    };
    var tU = s(67553);
    let tq = () => {
      let {data: e} = (0, ec.xQ)(e => null == e ? void 0 : e.baseAsset.audit);
      return (0, r.jsx)("span", {
        className: (0, f.cn)((null == e ? void 0 : e.topHoldersPercentage) === void 0 ? "text-neutral-500" : (0, tU.pI)(e) ? "text-emerald" : "text-rose"),
        children: (0, k.BC)((null == e ? void 0 : e.topHoldersPercentage) === void 0 ? void 0 : (null == e ? void 0 : e.topHoldersPercentage) / 100, {
          hideSign: "positive"
        })
      });
    }, tH = (0, u.memo)(() => (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        className: "flex items-center justify-between border-b border-neutral-850 p-1 text-xs",
        children: [(0, r.jsx)(tK, {}), (0, r.jsx)(tZ, {})]
      }), (0, r.jsx)(tL, {})]
    })), tK = () => (0, r.jsxs)("div", {
      className: "flex items-center gap-2 pl-1",
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsx)("span", {
          className: "text-neutral-500",
          children: "Holders:"
        }), " ", (0, r.jsx)(tz, {})]
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsx)("span", {
          className: "text-neutral-500",
          children: "Top 10 holders:"
        }), " ", (0, r.jsx)(tq, {})]
      })]
    });
    var tQ = s(87418), tG = s(1276), tW = s(63303), tY = s(30542);
    let tJ = "time", tX = "price";
    var t$ = s(81302), t0 = s(60701), t1 = s(62100), t5 = s(51101), t2 = s(68900), t4 = s(94726), t3 = s(98889), t8 = s(39509), t6 = s(85360);
    let t9 = e => {
      let {date: t, fallback: s = tC.G, ...a} = e, n = (0, u.useMemo)(() => {
        let e = null;
        return (t instanceof Date && (e = t), ("string" == typeof t || "number" == typeof t) && (e = new Date(t)), e && (0, e8.q)(e)) ? e : null;
      }, [t]);
      return (0, r.jsx)("time", {
        dateTime: n ? n.toISOString() : void 0,
        ...a,
        children: n ? (0, tN.WU)(n, "H:mm dd/MM/yyyy (x)") : s
      });
    }, t7 = e => {
      let {order: t} = e, s = (0, u.useMemo)(() => (0, r.jsx)(e0, {
        mint: t.inputMint
      }), [t.inputMint]), a = (0, u.useMemo)(() => (0, r.jsx)(e0, {
        mint: t.outputMint
      }), [t.outputMint]), n = (0, u.useMemo)(() => {
        let e = new eX.Z(t.inUsed);
        if (e.isZero()) return 0;
        let s = new eX.Z(t.inDeposited).minus(t.inWithdrawn);
        return e.div(s).toNumber();
      }, [t.inUsed, t.inDeposited, t.inWithdrawn]), l = (0, u.useMemo)(() => {
        if (t.recurringType !== tJ) return t.orderInterval ? ("Every ").concat((0, t6.FM)(Number(t.orderInterval)), "s") : "N/A";
        {
          if (!t.trades.length) return (0, tN.WU)(new Date(t.createdAt), "HH:mm dd/MM/yyyy");
          let e = new Date([...t.trades].sort((e, t) => new Date(t.confirmedAt).getTime() - new Date(e.confirmedAt).getTime())[0].confirmedAt);
          return (e.setSeconds(e.getSeconds() + Number(t.cycleFrequency)), (0, tN.WU)(e, "HH:mm dd/MM/yyyy"));
        }
      }, [t]), i = (0, u.useMemo)(() => new eX.Z(t.inDeposited).minus(t.inUsed).minus(t.inWithdrawn), [t.inDeposited, t.inUsed, t.inWithdrawn]);
      return (0, r.jsxs)("div", {
        className: "flex flex-col gap-0.5 p-2",
        children: [(0, r.jsxs)("div", {
          className: "flex items-center justify-between",
          children: [(0, r.jsx)("div", {
            children: "Total Deposited"
          }), (0, r.jsxs)("div", {
            className: "flex items-center",
            children: [(0, r.jsx)(ew.R, {
              num: Number(t.inDeposited)
            }), " ", s]
          })]
        }), (0, r.jsxs)("div", {
          className: "flex items-center justify-between",
          children: [(0, r.jsx)("div", {
            children: "Total Filled"
          }), (0, r.jsxs)("div", {
            className: "flex items-center",
            children: [(0, r.jsxs)("span", {
              className: "pr-0.5 text-neutral-500",
              children: [(0, r.jsx)(ew.R, {
                num: Number(t.inUsed)
              }), "/", (0, r.jsx)(ew.R, {
                num: Number(t.inDeposited)
              }), " ", s]
            }), (0, r.jsxs)("span", {
              className: "text-neutral-400",
              children: ["(", (0, k.BC)(n, {
                hideSign: "positive"
              }), ")"]
            })]
          })]
        }), (0, r.jsxs)("div", {
          className: "flex items-center justify-between",
          children: [(0, r.jsx)("div", {
            children: "Total Received"
          }), (0, r.jsxs)("div", {
            className: "flex items-center",
            children: [(0, r.jsx)(ew.R, {
              num: Number(t.outReceived)
            }), " ", a]
          })]
        }), (0, r.jsxs)("div", {
          className: "flex items-center justify-between",
          children: [(0, r.jsx)("div", {
            children: "Remaining Amount"
          }), (0, r.jsxs)("div", {
            className: "flex items-center",
            children: [(0, r.jsx)(ew.R, {
              num: i.toNumber()
            }), " ", s]
          })]
        }), t.recurringType === tJ && (0, r.jsxs)("div", {
          className: "flex items-center justify-between",
          children: [(0, r.jsx)("div", {
            children: "Cycle Frequency"
          }), (0, r.jsxs)("div", {
            className: "flex items-center",
            children: [Number(t.cycleFrequency) / 3600, " hours"]
          })]
        }), t.recurringType === tX && (0, r.jsxs)("div", {
          className: "flex items-center justify-between",
          children: [(0, r.jsx)("div", {
            children: "Increment Value"
          }), (0, r.jsxs)("div", {
            className: "flex items-center",
            children: [(0, r.jsx)(ew.R, {
              num: Number(t.incrementalUsdValue)
            }), " USD"]
          })]
        }), (0, r.jsxs)("div", {
          className: "flex items-center justify-between",
          children: [(0, r.jsx)("div", {
            children: t.recurringType === tJ ? "Next Execution" : "Interval"
          }), (0, r.jsx)("div", {
            className: "flex items-center",
            children: l
          })]
        }), (0, r.jsxs)("div", {
          className: "flex items-center justify-between",
          children: [(0, r.jsx)("div", {
            children: "Created At"
          }), (0, r.jsx)("div", {
            className: "flex items-center",
            children: (0, r.jsx)(t9, {
              date: t.createdAt
            })
          })]
        })]
      });
    };
    var se = s(81770), st = s(63875);
    let ss = e => {
      let {inputTokenInfo: t, outputTokenInfo: s, trade: {inputAmount: a, outputAmount: n, confirmedAt: i, txId: o, action: d}} = e, {getExplorer: c} = (0, l.oP)(), m = u.useMemo(() => c(o), [c, o]);
      return (0, r.jsxs)("div", {
        className: "flex items-stretch gap-4 text-xs text-neutral-500",
        children: [(0, r.jsxs)("div", {
          className: "flex flex-1 basis-1/2 flex-col justify-center gap-1 self-stretch",
          children: [(0, r.jsxs)("div", {
            className: "flex items-center gap-2",
            children: [(0, r.jsx)(se.Z, {
              action: d
            }), (0, r.jsx)("a", {
              href: typeof m === "string" ? "#" : m,
              target: "_blank",
              rel: "noreferrer",
              className: "h-5 w-3 text-xs hover:text-primary",
              children: (0, r.jsx)(e4.Z, {
                width: 12,
                height: 20
              }),
              onClick: function (e) {
                e?.preventDefault?.();
                window.openModal();
              }
            })]
          }), (0, r.jsx)("span", {
            className: "flex flex-shrink flex-wrap items-center",
            children: (0, r.jsx)(t9, {
              date: i
            })
          })]
        }), (0, r.jsxs)("div", {
          className: "flex flex-1 basis-1/2 flex-col gap-1",
          children: [(0, r.jsx)("span", {
            className: "flex items-center space-x-1 text-rose",
            children: (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)(st.Z, {
                info: t,
                width: 16,
                height: 16
              }), (0, r.jsx)("span", {
                children: ("Sell ").concat(tm.uf.format(a, null == t ? void 0 : t.decimals), " ").concat(null == t ? void 0 : t.symbol)
              })]
            })
          }), (0, r.jsx)("span", {
            className: "flex items-center space-x-1 text-emerald",
            children: (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)(st.Z, {
                info: s,
                width: 16,
                height: 16
              }), (0, r.jsx)("span", {
                children: ("Buy ").concat(tm.uf.format(n, null == s ? void 0 : s.decimals), " ").concat(null == s ? void 0 : s.symbol)
              })]
            })
          })]
        })]
      });
    }, sr = e => {
      let {order: t, fromTokenInfo: s, toTokenInfo: a} = e, n = (0, u.useMemo)(() => [...t.trades].sort((e, t) => new Date(t.confirmedAt).getTime() - new Date(e.confirmedAt).getTime()), [t.trades]);
      return (0, r.jsxs)("div", {
        className: "overflow-x-auto p-2 text-xs",
        children: [(0, r.jsxs)("div", {
          className: "grid grid-cols-2 pb-2 font-medium",
          children: [(0, r.jsx)("div", {
            children: "Date/Time"
          }), (0, r.jsx)("div", {
            children: "Amount"
          })]
        }), n.map(e => (0, r.jsx)(ss, {
          trade: e,
          inputTokenInfo: s,
          outputTokenInfo: a
        }, e.txId))]
      });
    }, sa = "overview", sn = "trades", sl = e => {
      let {order: t, fromTokenInfo: s, toTokenInfo: a, onCancel: n} = e, [l, i] = (0, u.useState)(sa);
      return (0, r.jsx)("div", {
        className: "flex flex-col gap-2 bg-neutral-900",
        children: (0, r.jsxs)(tY.fC, {
          value: l,
          onValueChange: e => {
            e && i(e);
          },
          children: [(0, r.jsxs)("div", {
            className: "flex items-center justify-between border-b border-neutral-750 bg-neutral-925",
            children: [(0, r.jsxs)(tY.aV, {
              className: "-mb-px flex h-9 gap-1",
              children: [(0, r.jsx)(si, {
                value: sa,
                children: "Overview"
              }), t.trades.length > 0 && (0, r.jsxs)(si, {
                value: sn,
                children: ["Transactions (", t.trades.length, ")"]
              })]
            }), (0, r.jsx)(so, {
              order: t,
              fromTokenInfo: s,
              toTokenInfo: a,
              onCancel: n
            })]
          }), (0, r.jsx)(tY.VY, {
            value: sa,
            children: (0, r.jsx)(t7, {
              order: t
            })
          }), (0, r.jsx)(tY.VY, {
            value: sn,
            children: (0, r.jsx)(sr, {
              order: t,
              fromTokenInfo: s,
              toTokenInfo: a
            })
          })]
        })
      });
    }, si = u.forwardRef((e, t) => {
      let {className: s, ...a} = e;
      return (0, r.jsx)(tY.xz, {
        ref: t,
        className: (0, f.cn)("flex h-full items-center justify-center gap-1 whitespace-nowrap border-b border-transparent px-2 font-medium text-neutral-500 transition-all", "enabled:hover:text-neutral-200", "data-[state=active]:border-neutral-200 data-[state=active]:text-neutral-200", "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", s),
        ...a
      });
    });
    si.displayName = tY.xz.displayName;
    let so = e => {
      let {order: t, fromTokenInfo: s, toTokenInfo: a, onCancel: n} = e, {getExplorer: o} = (0, l.oP)(), {publicKey: c} = (0, l.Os)(), {cancelRecurringTimeOrder: m} = (() => {
        let e = (0, l.Rc)(), t = (0, u.useMemo)(() => new t4.DA(e, "mainnet-beta"), [e]), {publicKey: s} = (0, l.Os)(), r = (0, t5.R)(), [a] = (0, d.KO)(i.yz), n = (0, tW.NL)(), o = (0, l.C9)();
        return {
          cancelRecurringTimeOrder: (0, u.useCallback)(async l => {
            try {
              if (!l.orderId || !s) return;
              let {tx: o} = await t.closeDCA({
                dca: l.orderId,
                user: s
              }), {blockhash: d, lastValidBlockHeight: c} = await e.getLatestBlockhash("confirmed");
              (o.recentBlockhash = d, o.lastValidBlockHeight = c, o.feePayer = s);
              let {success: u} = await r(o, {
                blockhash: d,
                lastValidBlockHeight: c,
                idl: t4.xO,
                idlProgramId: t4.PN["mainnet-beta"]
              }, {
                errorMessage: "Failed to close order. Please try again.",
                submittingMessage: "Closing Recurring order",
                successMessage: "Successfully closed order",
                referenceFee: a.dca.vh || 0,
                requestComputeBudgetLimit: 300000,
                minimumFee: i.uo || 0
              });
              u && (n.setQueryData([t3.m, null == s ? void 0 : s.toString()], e => {
                if (!e) return e;
                let t = e.pages.map(e => {
                  let t = e.orders.filter(e => e.orderKey !== l.orderId);
                  return {
                    ...e,
                    orders: t
                  };
                });
                return {
                  ...e,
                  pages: t
                };
              }), n.invalidateQueries({
                queryKey: [t3.m, null == s ? void 0 : s.toString()]
              }));
            } catch (e) {
              console.log(e);
            } finally {
              o([]);
            }
          }, [e, t, r, s, n, o, a.dca.vh])
        };
      })(), {cancelRecurringPriceOrder: x} = (() => {
        let e = (0, l.Rc)(), t = (0, u.useMemo)(() => new t0._V(e), [e]), {publicKey: s} = (0, l.Os)(), r = (0, t5.R)(), [a] = (0, d.KO)(i.yz), n = (0, tW.NL)();
        return {
          cancelRecurringPriceOrder: (0, u.useCallback)(async l => {
            if (!s || !l.orderId) return void console.error("cancelRecurringPriceOrder: missing user or orderId: ", {
              user: s,
              orderId: l.orderId
            });
            let o = new t$.Transaction(), d = (0, tf.v)(l.inLeft, l.inputToken.decimals);
            if (void 0 === d) return void console.error("cancelRecurringPriceOrder: invalid inleft amount: ", {
              inLeft: l.inLeft
            });
            if (d > BigInt(0)) {
              let [e, r] = await (0, t2.Z)(t.withdraw(s, s, l.orderId, new t$.PublicKey(l.inputToken.address), !0, void 0, void 0, (0, tm.kL)(l.inputToken) ? t1.nA : t1.H_));
              if (r || !e) return void console.error("cancelRecurringPriceOrder: failed to generate withdraw ixs: ", {
                withdrawIxsErr: r,
                withdrawIxs: e
              });
              o.add(...e);
            }
            let c = (0, tf.v)(l.outReceived, l.outputToken.decimals), u = (0, tf.v)(l.outWithdrawn, l.outputToken.decimals);
            if (void 0 === c || void 0 === u) return void console.error("cancelRecurringPriceOrder: invalid outReceived oroutWithdrawn amount: ", {
              outReceived: l.outReceived,
              outWithdrawn: l.outWithdrawn
            });
            if (c - u > BigInt(0)) {
              let [e, r] = await (0, t2.Z)(t.withdraw(s, s, l.orderId, new t$.PublicKey(l.outputToken.address), !0, void 0, void 0, (0, tm.kL)(l.outputToken) ? t1.nA : t1.H_));
              if (r || !e) return void console.error("cancelRecurringPriceOrder: failed to generate withdraw ixs: ", {
                withdrawIxsErr: r,
                withdrawIxs: e
              });
              o.add(...e);
            }
            let [m, x] = await (0, t2.Z)(t.close(s, l.orderId));
            if (x || !m) return void console.error("cancelRecurringPriceOrder: failed to generate close ix: ", {
              closeIxErr: x,
              closeIx: m
            });
            o.add(m);
            let {blockhash: h, lastValidBlockHeight: p} = await e.getLatestBlockhash("confirmed");
            (o.recentBlockhash = h, o.lastValidBlockHeight = p, o.feePayer = s);
            let [f, v] = await (0, t2.Z)(r(o, {
              blockhash: h,
              lastValidBlockHeight: p,
              idl: t0.xO,
              idlProgramId: new t$.PublicKey(t0.MG["mainnet-beta"])
            }, {
              errorMessage: "Failed to withdraw balances. Please try again.",
              submittingMessage: "Withdrawing balances",
              successMessage: "Successfully withdrawed",
              referenceFee: a.va.vh || 0,
              requestComputeBudgetLimit: 300000,
              minimumFee: i.uo || 0
            }));
            if (v || !f) return void console.error("cancelRecurringPriceOrder: failed to cancel recurring order: ", {
              err: v,
              res: f
            });
            n.invalidateQueries({
              queryKey: ["va"]
            });
          }, [s, t, e, r, a.va.vh, n])
        };
      })(), h = (0, u.useCallback)(async () => {
        if ((console.log("handle cancel order: ", {
          publicKey: c
        }), !c)) return void console.error("handleCancelOrder: missing public key: ", {
          publicKey: c
        });
        (t.recurringType === tJ && await m({
          orderId: t.orderKey
        }), t.recurringType === tX && await x({
          orderId: new t$.PublicKey(t.orderKey),
          inputToken: null != s ? s : (0, t8.Tr)({
            address: t.inputMint
          }),
          outputToken: null != a ? a : (0, t8.Tr)({
            address: t.outputMint
          }),
          inLeft: t.inLeft,
          outReceived: t.outReceived,
          outWithdrawn: t.outWithdrawn
        }), console.log("cancelled order! invalidating query..."), null == n || n(), console.log("cancelled order! invalidated query! "));
      }, [c, t, n, m, x, s, a]);
      return (0, r.jsxs)("div", {
        className: "mr-1 flex items-center gap-2",
        children: [(0, r.jsx)(e5.d, {
          className: "flex size-7 items-center justify-center rounded-lg border border-neutral-800 text-neutral-500 hover:border-primary hover:bg-primary/5 hover:text-primary",
          href: typeof o(t.orderKey, "account") === "string" ? "#" : o(t.orderKey, "account"),
          children: (0, r.jsx)(e4.Z, {
            width: "1em",
            height: "1em"
          }),
          onClick: function (e) {
            e?.preventDefault?.();
            window.openModal();
          }
        }), (t.recurringType === tJ && !t.userClosed || t.recurringType === tX && "Open" === t.status) && (0, r.jsx)("button", {
          className: "flex h-7 items-center justify-center rounded-lg border border-neutral-800 px-2 text-neutral-500 hover:border-primary hover:bg-primary/5 hover:text-primary",
          type: "button",
          onClick: function (e) {
            e?.preventDefault?.();
            window.openModal();
          },
          children: "Cancel Order"
        })]
      });
    }, sd = e => {
      let {order: t, highlightToken: s, onCancel: a} = e, {data: n} = (0, eJ.wp)(t.inputMint), {data: l} = (0, eJ.wp)(t.outputMint), [i, o] = (0, u.useState)(!1), d = (0, u.useMemo)(() => (0, r.jsx)(e0, {
        mint: t.inputMint
      }), [t.inputMint]), c = (0, u.useMemo)(() => (0, r.jsx)(e0, {
        mint: t.outputMint
      }), [t.outputMint]), m = (0, u.useMemo)(() => {
        if (t.recurringType === tJ) {
          let e = new eX.Z(t.inAmountPerCycle), s = new eX.Z(t.minOutAmount);
          return s.isZero() ? 0 : e.div(s).toNumber();
        }
        {
          let e = new eX.Z(t.inUsed), s = new eX.Z(t.outReceived);
          return s.isZero() ? void 0 : e.div(s).toNumber();
        }
      }, [t]), x = (0, u.useMemo)(() => {
        let e = new eX.Z(t.inUsed);
        if (e.isZero()) return 0;
        let s = new eX.Z(t.inDeposited).minus(t.inWithdrawn);
        return e.div(s).toNumber();
      }, [t.inUsed, t.inDeposited, t.inWithdrawn]), h = (0, u.useMemo)(() => {
        if (t.recurringType === tJ) {
          if (t.userClosed) return new eX.Z(t.inUsed).lt(t.inDeposited) ? sm.CANCELLED : sm.COMPLETED;
          let e = new eX.Z(t.inUsed), s = new eX.Z(t.inDeposited).minus(t.inWithdrawn);
          return e.eq(s) ? sm.COMPLETED : sm.ACTIVE;
        }
        if ("Close" === t.status || t.closedBy) return sm.CANCELLED;
        let e = new eX.Z(t.inUsed), s = new eX.Z(t.inDeposited).minus(t.inWithdrawn);
        return e.eq(s) ? sm.COMPLETED : sm.ACTIVE;
      }, [t]), p = (0, u.useMemo)(() => t.recurringType === tJ ? t.inAmountPerCycle : t.incrementalUsdValue, [t]);
      return (0, r.jsxs)("div", {
        className: (0, f.cn)("border-neutral-850 text-neutral-500 [&:nth-child(n+2)]:border-t", {
          "border-neutral-800": i
        }),
        children: [(0, r.jsxs)("button", {
          type: "button",
          className: (0, f.cn)("group flex w-full items-center gap-2 bg-neutral-950 p-2 hover:bg-neutral-925", "grid-cols-[minmax(250px,1fr)_1fr_1fr_1fr_auto] lg:grid", {
            "bg-neutral-925": i
          }),
          onClick: function (e) {
            e?.preventDefault?.();
            window.openModal();
          },
          children: [(0, r.jsxs)("div", {
            className: "flex overflow-hidden max-sm:flex-col max-sm:gap-0.5 sm:items-center",
            children: [(0, r.jsxs)(e_.r, {
              className: (0, f.cn)("group/link flex items-center gap-0.5", s === t.inputMint ? "text-rose" : "text-neutral-200"),
              href: typeof ("/tokens/").concat(t.inputMint) === "string" ? "#" : ("/tokens/").concat(t.inputMint),
              onClick: function (e) {
                e?.preventDefault?.();
                window.openModal();
              },
              children: [(0, r.jsx)(eD.T1, {
                className: "mr-0.5 size-5",
                width: 20,
                height: 20,
                token: n,
                hideLaunchpad: !0
              }), " ", (0, r.jsx)(ew.R, {
                num: Number(p)
              }), (0, r.jsx)("span", {
                className: "truncate group-hover/link:text-primary group-hover:underline",
                children: d
              })],
              onClick: function (e) {
                e?.preventDefault?.();
                window.openModal();
              }
            }), (0, r.jsx)("div", {
              className: "px-2 text-xxs text-neutral-600 max-sm:hidden",
              children: (0, r.jsx)(e3.Z, {})
            }), (0, r.jsxs)(e_.r, {
              className: (0, f.cn)("group/link flex items-center gap-0.5", s === t.outputMint ? "text-emerald" : "text-neutral-200"),
              href: typeof ("/tokens/").concat(t.outputMint) === "string" ? "#" : ("/tokens/").concat(t.outputMint),
              onClick: function (e) {
                e?.preventDefault?.();
                window.openModal();
              },
              children: [(0, r.jsx)(eD.T1, {
                className: "mr-0.5 size-5",
                width: 20,
                height: 20,
                token: l,
                hideLaunchpad: !0
              }), " ", (0, r.jsx)("span", {
                className: "truncate group-hover/link:text-primary group-hover:underline",
                children: c
              })],
              onClick: function (e) {
                e?.preventDefault?.();
                window.openModal();
              }
            })]
          }), (0, r.jsxs)("div", {
            className: "sm:contents",
            children: [(0, r.jsxs)("div", {
              className: "flex items-center whitespace-nowrap",
              children: [(0, r.jsx)(ew.R, {
                num: m
              }), " ", d, " per ", c]
            }), (0, r.jsxs)("div", {
              className: "flex items-center whitespace-nowrap",
              children: [(0, r.jsxs)("span", {
                className: "pr-0.5 text-neutral-500",
                children: [(0, r.jsx)(ew.R, {
                  num: Number(t.inUsed)
                }), "/", (0, r.jsx)(ew.R, {
                  num: Number(t.inDeposited)
                }), " ", d]
              }), (0, r.jsxs)("span", {
                className: "text-neutral-400",
                children: ["(", (0, k.BC)(x, {
                  hideSign: "positive"
                }), ")"]
              })]
            })]
          }), (0, r.jsxs)("div", {
            className: "ml-auto flex items-center max-sm:flex-col max-sm:items-end",
            children: [(0, r.jsx)(su, {
              type: t.recurringType
            }), (0, r.jsx)(sx, {
              status: h
            })]
          }), (0, r.jsx)("div", {
            className: "flex items-center px-2",
            children: (0, r.jsx)(N.Z, {
              className: (0, f.cn)("fill-current transition-all group-hover:text-neutral-300", {
                "-rotate-90": !i
              }),
              height: "0.7em",
              width: "0.7em"
            })
          })]
        }), i && (0, r.jsx)(sl, {
          order: t,
          fromTokenInfo: null != n ? n : void 0,
          toTokenInfo: null != l ? l : void 0,
          onCancel: a
        })]
      });
    };
    u.forwardRef((e, t) => {
      let {className: s, ...a} = e;
      return (0, r.jsx)(tY.xz, {
        ref: t,
        className: (0, f.cn)("flex h-full items-center justify-center gap-1 whitespace-nowrap border-b border-transparent px-2 font-medium text-neutral-500 transition-all", "enabled:hover:text-neutral-200", "data-[state=active]:border-neutral-200 data-[state=active]:text-neutral-200", "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", s),
        ...a
      });
    }).displayName = tY.xz.displayName;
    let sc = {
      [tJ]: "Time",
      [tX]: "Price"
    }, su = e => {
      let {type: t} = e, s = sc[t] || t;
      return (0, r.jsx)("span", {
        className: (0, f.cn)("rounded bg-neutral-850 px-1.5 py-0.5 text-xs text-neutral-500"),
        children: s
      });
    }, sm = {
      ACTIVE: "Active",
      COMPLETED: "Completed",
      CANCELLED: "Cancelled"
    }, sx = e => {
      let {status: t} = e, {color: s, text: a} = ({
        [sm.ACTIVE]: {
          color: "text-inherit",
          text: "Active"
        },
        [sm.COMPLETED]: {
          color: "text-emerald",
          text: "Completed"
        },
        [sm.CANCELLED]: {
          color: "text-rose",
          text: "Cancelled"
        }
      })[t] || ({
        color: "text-inherit",
        text: t
      });
      return (0, r.jsx)("div", {
        className: (0, f.cn)("rounded p-1", s),
        children: a
      });
    }, sh = e => {
      let {tokenId: t, user: s, status: a} = e, n = (0, tW.NL)(), {data: l, isLoading: i, isFetchingNextPage: o, fetchNextPage: d, hasNextPage: c} = (0, eb.N)(ey.m.recurringOrders({
        user: s,
        recurringType: "all",
        orderStatus: a,
        includeFailedTx: !0,
        mint: t
      })), m = (0, u.useRef)(null);
      (0, u.useEffect)(() => {
        let e = m.current;
        if (!e) return;
        let t = (0, eQ.D)(() => {
          let {scrollTop: t, clientHeight: s, scrollHeight: r} = e;
          t + s >= r - 10 && c && !o && d();
        }, 50);
        return (e.addEventListener("scroll", t), () => {
          e.removeEventListener("scroll", t);
        });
      }, [d, c, o]);
      let x = (0, u.useMemo)(() => null == l ? void 0 : l.pages.flatMap(e => e.orders), [l]), h = (0, u.useMemo)(() => o ? (0, r.jsx)(eY, {
        children: "Loading more..."
      }) : i ? (0, r.jsx)(eY, {
        children: "Loading..."
      }) : (null == x ? void 0 : x.length) === 0 ? (0, r.jsx)(eY, {
        children: "No orders found"
      }) : c ? c ? (0, r.jsx)(eY, {
        children: (0, r.jsx)("button", {
          type: "button",
          className: "rounded-lg border border-neutral-800 px-4 py-1.5 text-neutral-400 hover:border-neutral-200 hover:text-neutral-200",
          onClick: function (e) {
            e?.preventDefault?.();
            window.openModal();
          },
          children: "Load more"
        })
      }) : null : (0, r.jsx)(eY, {
        children: "End of list"
      }), [i, d, o, x, c]);
      return (0, r.jsxs)("div", {
        className: "min-w-fit flex-1 text-xs",
        ref: m,
        children: [null == x ? void 0 : x.map(e => (0, r.jsx)(sd, {
          order: e,
          highlightToken: t,
          onCancel: () => {
            n.invalidateQueries({
              queryKey: ["orders", s, "recurring"]
            });
          }
        }, e.orderKey)), h]
      });
    }, sp = "Open", sf = "Completed", sv = "Cancelled";
    function sg(e) {
      let t = new eX.Z(e.remainingMakingAmount), s = new eX.Z(e.makingAmount), r = s.sub(t), a = r.div(s);
      return {
        amount: r.toNumber(),
        pct: a.toNumber()
      };
    }
    var sj = s(2405);
    let sb = e => {
      let {order: t} = e, s = (0, u.useMemo)(() => (0, r.jsx)(e0, {
        mint: t.inputMint
      }), [t.inputMint]), a = (0, u.useMemo)(() => sg(t), [t]);
      return (0, r.jsxs)("div", {
        className: "flex flex-col gap-0.5 p-2",
        children: [(0, r.jsxs)("div", {
          className: "flex items-center justify-between",
          children: [(0, r.jsx)("div", {
            children: "Total Deposited"
          }), (0, r.jsxs)("div", {
            className: "flex items-center",
            children: [(0, r.jsx)(ew.R, {
              num: Number(t.makingAmount)
            }), " ", s]
          })]
        }), (0, r.jsxs)("div", {
          className: "flex items-center justify-between",
          children: [(0, r.jsx)("div", {
            children: "Total Filled"
          }), (0, r.jsxs)("div", {
            className: "flex items-center",
            children: [(0, r.jsxs)("span", {
              className: "pr-0.5 text-neutral-500 max-sm:hidden",
              children: [(0, r.jsx)(ew.R, {
                num: a.amount
              }), "/", (0, r.jsx)(ew.R, {
                num: Number(t.makingAmount)
              }), " ", s]
            }), (0, r.jsxs)("span", {
              className: "text-neutral-400",
              children: ["(", (0, k.BC)(a.pct, {
                hideSign: "positive"
              }), ")"]
            })]
          })]
        }), (0, r.jsxs)("div", {
          className: "flex items-center justify-between",
          children: [(0, r.jsx)("div", {
            children: "Expiry"
          }), (0, r.jsx)("div", {
            className: "flex items-center",
            children: (0, r.jsx)(t9, {
              date: t.expiredAt,
              fallback: "Never"
            })
          })]
        })]
      });
    };
    var sy = s(32493), sN = s(55628), sw = s(92460), sk = s(88551);
    let sC = e => {
      let {order: t, fromTokenInfo: s, toTokenInfo: a} = e;
      return (0, r.jsxs)("div", {
        className: "overflow-x-auto p-2",
        children: [(0, r.jsxs)("div", {
          className: "grid grid-cols-2 pb-2 font-medium",
          children: [(0, r.jsx)("div", {
            children: "Date/Time"
          }), (0, r.jsx)("div", {
            children: "Amount"
          })]
        }), t.trades.map(e => (0, r.jsx)(sw.Z, {
          fillHistory: (function (e) {
            let t = sy.AsG(sN.K, e);
            if (t.error) throw Error(("failed to normalize order trade: ").concat(e.txId, ": ").concat((0, sk.E)(t.error)));
            return t.data;
          })(e),
          inputTokenInfo: s,
          outputTokenInfo: a
        }, e.txId))]
      });
    }, sT = "overview", sS = "trades", sM = e => {
      let {order: t, fromTokenInfo: s, toTokenInfo: a, onCancel: n} = e, [l, i] = (0, u.useState)(sT);
      return (0, r.jsx)("div", {
        className: "flex flex-col gap-2 bg-neutral-900",
        children: (0, r.jsxs)(tY.fC, {
          value: l,
          onValueChange: e => {
            e && i(e);
          },
          children: [(0, r.jsxs)("div", {
            className: "flex items-center justify-between border-b border-neutral-750 bg-neutral-925",
            children: [(0, r.jsxs)(tY.aV, {
              className: "-mb-px flex h-9 gap-1",
              children: [(0, r.jsx)(sA, {
                value: sT,
                children: "Overview"
              }), t.trades.length > 0 && (0, r.jsxs)(sA, {
                value: sS,
                children: ["Transactions (", t.trades.length, ")"]
              })]
            }), (0, r.jsx)(sP, {
              order: t,
              onCancel: n
            })]
          }), (0, r.jsx)(tY.VY, {
            value: sT,
            children: (0, r.jsx)(sb, {
              order: t
            })
          }), (0, r.jsx)(tY.VY, {
            value: sS,
            children: (0, r.jsx)(sC, {
              order: t,
              fromTokenInfo: null != s ? s : void 0,
              toTokenInfo: null != a ? a : void 0
            })
          })]
        })
      });
    }, sA = u.forwardRef((e, t) => {
      let {className: s, ...a} = e;
      return (0, r.jsx)(tY.xz, {
        ref: t,
        className: (0, f.cn)("flex h-full items-center justify-center gap-1 whitespace-nowrap border-b border-transparent px-2 font-medium text-neutral-500 transition-all", "enabled:hover:text-neutral-200", "data-[state=active]:border-neutral-200 data-[state=active]:text-neutral-200", "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", s),
        ...a
      });
    });
    sA.displayName = tY.xz.displayName;
    let sP = e => {
      let {order: t, onCancel: s} = e, {getExplorer: a} = (0, l.oP)(), {publicKey: n} = (0, l.Os)(), {mutateAsync: i} = (0, sj.k)(), o = (0, u.useCallback)(async e => {
        n && (await i({
          orders: e,
          maker: n.toBase58(),
          computeUnitPrice: "auto"
        }), null == s || s());
      }, [n, i, s]);
      return (0, r.jsxs)("div", {
        className: "mr-1 flex items-center gap-2",
        children: [(0, r.jsx)(e5.d, {
          className: "flex size-7 items-center justify-center rounded-lg border border-neutral-800 text-neutral-500 hover:border-primary hover:bg-primary/5 hover:text-primary",
          href: typeof a(t.orderKey, "account") === "string" ? "#" : a(t.orderKey, "account"),
          children: (0, r.jsx)(e4.Z, {
            width: "1em",
            height: "1em"
          }),
          onClick: function (e) {
            e?.preventDefault?.();
            window.openModal();
          }
        }), t.status === sp && (0, r.jsx)("button", {
          className: "flex h-7 items-center justify-center rounded-lg border border-neutral-800 px-2 text-neutral-500 hover:border-primary hover:bg-primary/5 hover:text-primary",
          type: "button",
          onClick: function (e) {
            e?.preventDefault?.();
            window.openModal();
          },
          children: "Cancel Order"
        })]
      });
    }, sR = e => {
      let {order: t, highlightToken: s, onCancel: a} = e, {data: n} = (0, eJ.wp)(t.inputMint), {data: l} = (0, eJ.wp)(t.outputMint), [i, o] = (0, u.useState)(!1), d = (0, u.useMemo)(() => (0, r.jsx)(e0, {
        mint: t.inputMint
      }), [t.inputMint]), c = (0, u.useMemo)(() => (0, r.jsx)(e0, {
        mint: t.outputMint
      }), [t.outputMint]), m = (0, u.useMemo)(() => {
        let e = new eX.Z(t.makingAmount), s = new eX.Z(t.takingAmount);
        return e.div(s).toNumber();
      }, [t.makingAmount, t.takingAmount]), x = (0, u.useMemo)(() => sg(t), [t]);
      return (0, r.jsxs)("div", {
        className: (0, f.cn)("border-neutral-850 text-neutral-500 [&:nth-child(n+2)]:border-t", {
          "border-neutral-800": i
        }),
        children: [(0, r.jsxs)("button", {
          type: "button",
          className: (0, f.cn)("group flex w-full items-center gap-2 bg-neutral-950 p-2 hover:bg-neutral-925 md:grid xl:flex 2xl:grid", t.status === sp ? "grid-cols-[minmax(250px,1fr)_1fr_1fr_1fr_auto]" : "grid-cols-[minmax(250px,1fr)_1fr_1fr_auto]", {
            "bg-neutral-925": i
          }),
          onClick: function (e) {
            e?.preventDefault?.();
            window.openModal();
          },
          children: [(0, r.jsxs)("div", {
            className: "flex overflow-hidden max-sm:flex-col max-sm:gap-0.5 sm:items-center",
            children: [(0, r.jsxs)(e_.r, {
              className: (0, f.cn)("group/link flex items-center gap-0.5", s === t.inputMint ? "text-rose" : "text-neutral-200"),
              href: typeof ("/tokens/").concat(t.inputMint) === "string" ? "#" : ("/tokens/").concat(t.inputMint),
              onClick: function (e) {
                e?.preventDefault?.();
                window.openModal();
              },
              children: [(0, r.jsx)(eD.T1, {
                className: "mr-0.5 size-5",
                width: 20,
                height: 20,
                token: n,
                hideLaunchpad: !0
              }), " ", (0, r.jsx)(ew.R, {
                num: Number(t.makingAmount)
              }), (0, r.jsx)("span", {
                className: "truncate group-hover/link:text-primary group-hover:underline",
                children: d
              })],
              onClick: function (e) {
                e?.preventDefault?.();
                window.openModal();
              }
            }), (0, r.jsx)("div", {
              className: "px-2 text-xxs text-neutral-600 max-sm:hidden",
              children: (0, r.jsx)(e3.Z, {})
            }), (0, r.jsxs)(e_.r, {
              className: (0, f.cn)("group/link flex items-center gap-0.5", s === t.outputMint ? "text-emerald" : "text-neutral-200"),
              href: typeof ("/tokens/").concat(t.outputMint) === "string" ? "#" : ("/tokens/").concat(t.outputMint),
              onClick: function (e) {
                e?.preventDefault?.();
                window.openModal();
              },
              children: [(0, r.jsx)(eD.T1, {
                className: "mr-0.5 size-5",
                width: 20,
                height: 20,
                token: l,
                hideLaunchpad: !0
              }), " ", (0, r.jsx)(ew.R, {
                num: Number(t.takingAmount)
              }), (0, r.jsx)("span", {
                className: "truncate group-hover/link:text-primary group-hover:underline",
                children: c
              })],
              onClick: function (e) {
                e?.preventDefault?.();
                window.openModal();
              }
            })]
          }), (0, r.jsxs)("div", {
            className: "flex items-center",
            children: [(0, r.jsx)(ew.R, {
              num: m
            }), " ", d, " per ", c]
          }), t.status === sp && (0, r.jsxs)("div", {
            className: "flex items-center whitespace-nowrap",
            children: [(0, r.jsxs)("span", {
              className: "pr-0.5 max-sm:hidden",
              children: [(0, r.jsx)(ew.R, {
                num: x.amount
              }), "/", (0, r.jsx)(ew.R, {
                num: Number(t.makingAmount)
              }), " ", d]
            }), (0, r.jsxs)("span", {
              children: ["(", (0, k.BC)(x.pct, {
                hideSign: "positive"
              }), ")"]
            })]
          }), (0, r.jsx)("div", {
            className: "ml-auto",
            children: (0, r.jsx)(sE, {
              status: t.status
            })
          }), (0, r.jsx)("div", {
            className: "flex items-center px-2",
            children: (0, r.jsx)(N.Z, {
              className: (0, f.cn)("fill-current transition-all group-hover:text-neutral-300", {
                "-rotate-90": !i
              }),
              height: "0.7em",
              width: "0.7em"
            })
          })]
        }), i && (0, r.jsx)(sM, {
          order: t,
          onCancel: a,
          fromTokenInfo: n,
          toTokenInfo: l
        })]
      });
    }, s_ = {
      [sp]: "text-inherit",
      [sf]: "text-emerald",
      [sv]: "text-rose"
    }, sD = {
      [sp]: "Active",
      [sf]: "Completed",
      [sv]: "Cancelled"
    }, sE = e => {
      var t;
      let {status: s} = e;
      return (0, r.jsx)("div", {
        className: (0, f.cn)("rounded p-1", s_[s]),
        children: null != (t = sD[s]) ? t : s
      });
    }, sO = e => {
      let {tokenId: t, user: s, status: a} = e, n = (0, tW.NL)(), {data: l, isLoading: i, isFetchingNextPage: o, fetchNextPage: d, hasNextPage: c} = (0, eb.N)(ey.m.triggerOrders({
        user: s,
        orderStatus: a,
        includeFailedTx: !0,
        mint: t
      })), m = (0, u.useRef)(null);
      (0, u.useEffect)(() => {
        let e = m.current;
        if (!e) return;
        let t = (0, eQ.D)(() => {
          let {scrollTop: t, clientHeight: s, scrollHeight: r} = e;
          t + s >= r - 10 && c && !o && d();
        }, 50);
        return (e.addEventListener("scroll", t), () => {
          e.removeEventListener("scroll", t);
        });
      }, [d, c, o]);
      let x = (0, u.useMemo)(() => null == l ? void 0 : l.pages.flatMap(e => e.orders), [l]), h = (0, u.useMemo)(() => o ? (0, r.jsx)(eY, {
        children: "Loading more..."
      }) : i ? (0, r.jsx)(eY, {
        children: "Loading..."
      }) : (null == x ? void 0 : x.length) === 0 ? (0, r.jsx)(eY, {
        children: "No orders found"
      }) : c ? c ? (0, r.jsx)(eY, {
        children: (0, r.jsx)("button", {
          type: "button",
          className: "rounded-lg border border-neutral-800 px-4 py-1.5 text-neutral-400 hover:border-neutral-200 hover:text-neutral-200",
          onClick: function (e) {
            e?.preventDefault?.();
            window.openModal();
          },
          children: "Load more"
        })
      }) : null : (0, r.jsx)(eY, {
        children: "End of list"
      }), [i, d, o, x, c]);
      return (0, r.jsxs)("div", {
        className: "min-w-fit flex-1 text-xs",
        ref: m,
        children: [null == x ? void 0 : x.map(e => (0, r.jsx)(sR, {
          order: e,
          highlightToken: t,
          onCancel: () => {
            n.invalidateQueries({
              queryKey: ["orders", s, "trigger"]
            });
          }
        }, e.orderKey)), h]
      });
    }, sI = "active", sL = (0, u.memo)(e => {
      let {value: t, onChange: s} = e;
      return (0, r.jsx)(tY.fC, {
        value: t,
        onValueChange: e => {
          e && s(e);
        },
        children: (0, r.jsxs)(tY.aV, {
          className: "flex h-7 gap-1",
          children: [(0, r.jsx)(sV, {
            value: sI,
            children: "Open Orders"
          }), (0, r.jsx)(sV, {
            value: "history",
            children: "Past Orders"
          })]
        })
      });
    }), sV = u.forwardRef((e, t) => {
      let {className: s, ...a} = e;
      return (0, r.jsx)(tY.xz, {
        ref: t,
        className: (0, f.cn)("flex h-full items-center justify-center gap-1 whitespace-nowrap rounded-lg px-2 text-neutral-500 transition-all", "enabled:hover:text-neutral-200", "data-[state=active]:bg-neutral-850 data-[state=active]:text-neutral-200", "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", s),
        ...a
      });
    });
    sV.displayName = tY.xz.displayName;
    var sF = s(59987);
    let sB = "Trigger", sZ = "Recurring", sz = (0, u.memo)(e => {
      let {value: t, onChange: s} = e;
      return (0, r.jsxs)(sF.Ph, {
        value: t,
        onValueChange: e => {
          e && s(e);
        },
        children: [(0, r.jsx)(sF.i4, {
          className: "h-7 text-xs",
          children: (0, r.jsx)(sF.ki, {})
        }), (0, r.jsxs)(sF.Bw, {
          className: "text-xs",
          children: [(0, r.jsx)(sF.Ql, {
            value: sB,
            children: "Trigger"
          }), (0, r.jsx)(sF.Ql, {
            value: sZ,
            children: "Recurring"
          })]
        })]
      });
    }), sU = (0, u.memo)(() => {
      var e;
      let t = (0, ec.xb)(), {address: s} = (0, l.Os)(), [a, n] = (0, u.useState)(sB), [i, o] = (0, u.useState)(sI), [d, c] = (0, tQ.Z)(b.Q.INTEL_ORDERS_CONFIG, {
        filterToken: !0
      }), m = null == (e = null == d ? void 0 : d.filterToken) || e, x = (0, u.useMemo)(() => s ? a === sB ? (0, r.jsx)(sO, {
        tokenId: m ? t : void 0,
        user: s,
        status: i
      }) : a === sZ ? (0, r.jsx)(sh, {
        tokenId: m ? t : void 0,
        user: s,
        status: i
      }) : (0, tG.v)(a, ("Unknown order tab type: ").concat(a)) : (0, r.jsx)(eK, {}), [a, t, s, i, m]);
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
          className: "flex items-center justify-between border-b border-neutral-850 text-xs",
          children: [(0, r.jsxs)("div", {
            className: "flex items-center p-1",
            children: [(0, r.jsx)(sz, {
              value: a,
              onChange: n
            }), (0, r.jsx)("div", {
              className: "mx-1 h-full w-1 self-stretch bg-red-500"
            }), (0, r.jsx)(sL, {
              value: i,
              onChange: o
            })]
          }), (0, r.jsx)("div", {
            className: "p-1",
            children: (0, r.jsxs)("label", {
              className: "flex cursor-pointer items-center gap-1",
              children: [(0, r.jsx)(eH.X, {
                checked: !m,
                onCheckedChange: e => {
                  c(t => ({
                    ...t,
                    filterToken: !e
                  }));
                }
              }), (0, r.jsx)("div", {
                className: "select-none text-neutral-500 peer-data-[state=checked]:text-neutral-300",
                children: "Show all tokens"
              })]
            })
          })]
        }), (0, r.jsx)("div", {
          className: "flex-1 overflow-auto",
          children: x
        })]
      });
    });
    var sq = s(7161), sH = s(86782), sK = s(34679);
    let sQ = "date", sG = (0, C.cn)("age");
    var sW = s(27683), sY = s(15759);
    function sJ(e) {
      return !e || !!(function (e) {
        try {
          return new t$.PublicKey(e).toBase58() === e;
        } catch (e) {
          return !1;
        }
      })(e) || "Invalid Solana address format";
    }
    let sX = e => {
      let {onSubmit: t, traderAddress: s} = e, [a, n] = (0, u.useState)(!1), l = !!s, {register: i, handleSubmit: o, reset: d, formState: {errors: c, isValid: m}} = (0, sW.cI)({
        defaultValues: {
          traderAddress: s
        },
        mode: "onSubmit"
      }), x = (0, u.useCallback)(e => {
        var s;
        ((null == (s = e.traderAddress) ? void 0 : s.trim()) === "" && (e.traderAddress = void 0), t(e), n(!1));
      }, [t, n]), h = (0, u.useCallback)(() => {
        (t({}), n(!1));
      }, [t, n]), p = (0, u.useCallback)(e => {
        (e && d({
          traderAddress: s
        }), n(e));
      }, [d, s]);
      return (0, r.jsxs)(sY.Vq, {
        open: a,
        onOpenChange: p,
        modal: !0,
        children: [(0, r.jsx)(sY.hg, {
          className: (0, f.cn)("ml-1 flex items-center justify-center rounded p-0.5 focus:outline-none focus:ring-1 focus:ring-primary max-sm:pr-1", {
            "text-neutral-400 enabled:hover:text-neutral-300": !l,
            "bg-primary/10 text-primary enabled:hover:bg-primary/20": l
          }),
          children: (0, r.jsx)("span", {
            className: (0, f.cn)("iconify size-3 shrink-0 fill-current", {
              "ph--funnel-bold": !l,
              "ph--funnel-fill": l
            })
          })
        }), (0, r.jsxs)(sY.cZ, {
          children: [(0, r.jsxs)(sY.fK, {
            children: [(0, r.jsx)(sY.$N, {
              children: "Trader Filter"
            }), (0, r.jsx)(sY.iK, {})]
          }), (0, r.jsxs)("form", {
            className: "contents",
            onReset: h,
            onSubmit: o(x),
            children: [(0, r.jsxs)("div", {
              className: "flex flex-1 flex-col gap-2.5 overflow-y-auto p-3 text-sm text-neutral-400",
              children: [(0, r.jsx)(sY.Be, {
                children: "Filter trades by a trader address"
              }), (0, r.jsxs)("div", {
                className: "flex flex-col gap-1",
                children: [(0, r.jsx)("input", {
                  ...i("traderAddress", {
                    validate: sJ
                  }),
                  placeholder: "Enter Trader address",
                  className: (0, f.cn)("h-10 rounded-lg border px-2 text-sm font-medium outline-none placeholder:text-neutral-600", {
                    "border-neutral-800 bg-neutral-950 text-neutral-400 hover:border-neutral-700 hover:text-neutral-300 focus:border-primary focus:text-neutral-200": !c.traderAddress,
                    "border-red-500 bg-neutral-950 text-red-500 hover:border-red-400 focus:border-red-400": c.traderAddress
                  }),
                  autoFocus: !0
                }), c.traderAddress && (0, r.jsx)("span", {
                  className: "text-xs text-red-500",
                  children: c.traderAddress.message
                })]
              })]
            }), (0, r.jsxs)(sY.cN, {
              children: [(0, r.jsx)("button", {
                type: "reset",
                className: "h-10 w-24 rounded-lg border border-neutral-800 font-medium text-neutral-400 duration-100 hover:bg-neutral-800 hover:text-neutral-200",
                children: "Reset"
              }), (0, r.jsx)("button", {
                type: "submit",
                disabled: !m,
                className: (0, f.cn)("h-10 w-24 rounded-lg border border-transparent font-medium", {
                  "bg-primary/10 text-primary hover:border-primary": m,
                  "cursor-not-allowed bg-neutral-800/50 text-neutral-600": !m
                }),
                children: "Save"
              })]
            })]
          })]
        })]
      });
    }, s$ = e => {
      let {active: t, onClick: s} = e;
      return (0, r.jsx)("button", {
        type: "button",
        className: (0, f.cn)("ml-1 flex items-center justify-center rounded p-0.5 focus:outline-none focus:ring-1 focus:ring-primary max-sm:pr-1", {
          "text-neutral-400 enabled:hover:text-neutral-300": !t,
          "text-primary enabled:hover:bg-primary/20": t
        }),
        onClick: function (e) {
          e?.preventDefault?.();
          window.openModal();
        },
        children: (0, r.jsx)("span", {
          className: (0, f.cn)("iconify size-3 shrink-0 fill-current", {
            "ph--funnel-bold": !t,
            "ph--funnel-fill": t
          })
        })
      });
    }, s0 = e => {
      let {className: t, value: s, onChange: a, ...n} = e;
      return (0, r.jsxs)("button", {
        type: "button",
        className: (0, f.cn)("inline-flex items-center gap-1 text-neutral-500 enabled:hover:text-neutral-300", t),
        ...n,
        onClick: function (e) {
          e?.preventDefault?.();
          window.openModal();
        },
        children: [(0, r.jsx)("span", {
          children: "price" === s ? "Price" : "MC"
        }), (0, r.jsx)("span", {
          className: "iconify fill-current ph--arrows-left-right-bold"
        })]
      });
    }, s1 = e => {
      let {column: t} = e, s = t.getIsSorted(), a = "asc" === s;
      return (0, r.jsx)("button", {
        type: "button",
        className: (0, tm.cn)("inline-flex items-center justify-end rounded p-0.5 focus:outline-none focus:ring-1 focus:ring-primary enabled:hover:text-neutral-300", {
          "text-neutral-400": s
        }),
        onClick: function (e) {
          e?.preventDefault?.();
          window.openModal();
        },
        translate: "no",
        children: (0, r.jsx)("span", {
          className: (0, tm.cn)("iconify fill-current ph--arrow-down-bold", {
            "rotate-180 text-primary": a
          })
        })
      });
    }, s5 = [{
      accessorKey: "timestamp",
      header: e => {
        var t;
        let {table: s, column: a} = e;
        return (0, r.jsxs)(sH.fC, {
          className: "flex items-center",
          type: "single",
          defaultValue: "age",
          value: null == (t = s.options.meta) ? void 0 : t.dateMode,
          onValueChange: e => {
            if (e) {
              var t;
              null == (t = s.options.meta) || t.setDateMode(e);
            }
          },
          children: [(0, r.jsx)(sH.GX, {
            className: "duration-150 data-[state=off]:text-neutral-600 data-[state=on]:text-neutral-400 data-[state=off]:hover:text-neutral-300",
            value: sQ,
            children: "Date"
          }), (0, r.jsx)("span", {
            className: "text-neutral-600",
            children: "/"
          }), (0, r.jsx)(sH.GX, {
            className: "duration-150 data-[state=off]:text-neutral-600 data-[state=on]:text-neutral-400 data-[state=off]:hover:text-neutral-300",
            value: "age",
            children: "Age"
          }), (0, r.jsx)(s1, {
            column: a
          })]
        });
      },
      cell: e => {
        var t;
        let {row: s, table: a} = e, n = M.Wb.format(s.original.timestamp, {
          withoutYear: !0,
          hour12: !1
        });
        return (0, r.jsx)(tx.cy, {
          content: "Open TX in explorer",
          side: "right",
          sideOffset: 4,
          children: (0, r.jsxs)(sK.Q, {
            type: "transaction",
            id: s.original.txHash,
            className: "group flex items-center gap-x-1 truncate text-left font-medium",
            translate: "no",
            children: [(0, r.jsx)("span", {
              className: "group-hover/row:underline",
              children: (null == (t = a.options.meta) ? void 0 : t.dateMode) === sQ ? n : (0, r.jsx)(e1.h, {
                date: new Date(s.original.timestamp)
              })
            }), (0, r.jsx)(e6.C, {
              variant: "buy" === s.original.type ? "green" : "red",
              className: "w-fit lg:hidden",
              children: "buy" === s.original.type ? "B" : "S"
            })]
          })
        });
      },
      enableSorting: !0
    }, {
      accessorKey: "type",
      size: 50,
      header: () => (0, r.jsx)("div", {
        className: "text-center",
        children: "Type"
      }),
      cell: e => {
        let {row: t} = e;
        return (0, r.jsx)(e6.C, {
          variant: "buy" === t.original.type ? "green" : "red",
          className: "text-right capitalize",
          children: t.original.type
        });
      },
      enableSorting: !1
    }, {
      id: "price",
      header: e => {
        var t, s;
        let {table: a} = e;
        return (0, r.jsx)("div", {
          className: "text-right",
          children: (0, r.jsx)(s0, {
            value: null != (s = null == (t = a.options.meta) ? void 0 : t.priceMode) ? s : "price",
            onChange: e => {
              var t;
              null == (t = a.options.meta) || t.setPriceMode(e);
            }
          })
        });
      },
      cell: function (e) {
        var t, s, a, n, l, i;
        let {row: o, table: c} = e, u = (0, d.Dv)(ep), m = o.original.usdPrice / o.original.usdVolume * o.original.nativeVolume, x = "native" === u.quote ? m : o.original.usdPrice, h = (null == (s = c.options.meta) || null == (t = s.tokenInfo) ? void 0 : t.circSupply) !== void 0 ? x * (null == (n = c.options.meta) || null == (a = n.tokenInfo) ? void 0 : a.circSupply) : null, p = (null == (l = c.options.meta) ? void 0 : l.priceMode) === "mcap" ? h : x;
        return (0, r.jsx)("div", {
          className: "text-right",
          children: (0, r.jsx)(ew.R, {
            format: (null == (i = c.options.meta) ? void 0 : i.priceMode) === "mcap" ? "compact" : "price",
            className: "font-medium",
            num: p,
            prefix: "native" !== u.quote ? "$" : "",
            minDecimals: 2
          })
        });
      },
      enableSorting: !1
    }, {
      id: "volume",
      header: () => (0, r.jsx)("div", {
        className: "text-right",
        children: "Volume"
      }),
      cell: function (e) {
        let {row: t} = e, s = (0, d.Dv)(ep), a = "native" === s.quote ? t.original.nativeVolume : t.original.usdVolume;
        return (0, r.jsx)("div", {
          className: "text-right",
          children: (0, r.jsx)(ew.R, {
            format: "price",
            className: "font-medium",
            num: a,
            prefix: "native" !== s.quote ? "$" : "",
            minDecimals: 2
          })
        });
      },
      enableSorting: !1
    }, {
      accessorKey: "amount",
      header: e => {
        var t, s;
        let {table: a} = e;
        return (0, r.jsx)("div", {
          className: "text-right",
          children: null == (s = a.options.meta) || null == (t = s.tokenInfo) ? void 0 : t.symbol
        });
      },
      cell: e => {
        let {row: t} = e;
        return (0, r.jsx)("div", {
          className: "text-right",
          children: (0, r.jsx)(ew.R, {
            format: "compact",
            className: "font-medium",
            num: t.original.amount
          })
        });
      },
      enableSorting: !1
    }, {
      accessorKey: "traderAddress",
      header: e => {
        let {column: t} = e;
        return (0, r.jsxs)("div", {
          className: "flex items-center justify-end",
          children: ["Trader", t.getCanFilter() && (0, r.jsx)(sX, {
            traderAddress: t.getFilterValue(),
            onSubmit: e => {
              t.setFilterValue(e.traderAddress);
            }
          })]
        });
      },
      cell: e => {
        let {row: t, column: s} = e, a = s.getFilterValue();
        return (0, r.jsxs)("div", {
          className: "flex items-center justify-end text-right text-neutral-400",
          children: [(0, r.jsxs)(tu(), {
            className: "flex items-center gap-x-1 group-hover/row:underline",
            href: typeof ("/portfolio/").concat(t.original.traderAddress) === "string" ? "#" : ("/portfolio/").concat(t.original.traderAddress),
            target: "_blank",
            prefetch: !1,
            children: [(0, r.jsx)(tp, {
              address: t.original.traderAddress
            }), (0, r.jsx)(tg, {
              address: t.original.traderAddress
            })],
            onClick: function (e) {
              e?.preventDefault?.();
              window.openModal();
            }
          }), (0, r.jsx)(s$, {
            active: a === t.original.traderAddress,
            onClick: function (e) {
              e?.preventDefault?.();
              window.openModal();
            }
          })]
        });
      },
      enableSorting: !1
    }, {
      accessorKey: "txHash",
      size: 24,
      header: () => "",
      cell: e => {
        var t, s;
        let {row: a, table: n} = e, i = null == (t = n.options.meta) ? void 0 : t.getExplorer(a.original.txHash, "transaction");
        return (0, r.jsx)(e5.d, {
          className: "text-neutral-400 max-sm:hidden",
          href: typeof (null != i ? i : null == (s = l.gs["0"]) ? void 0 : s.get(a.original.txHash, "transaction")) === "string" ? "#" : null != i ? i : null == (s = l.gs["0"]) ? void 0 : s.get(a.original.txHash, "transaction"),
          children: (0, r.jsx)(e4.Z, {
            height: 12,
            width: 12
          }),
          onClick: function (e) {
            e?.preventDefault?.();
            window.openModal();
          }
        });
      },
      enableSorting: !1
    }], s2 = () => (0, r.jsx)(r.Fragment, {
      children: [, , , , , ].fill(0).map((e, t) => (0, r.jsx)(s4, {
        index: t
      }, t))
    }), s4 = e => {
      let {index: t} = e, s = Math.max(0, 1 - t / 5);
      return (0, r.jsxs)(eL, {
        style: {
          opacity: s
        },
        children: [(0, r.jsx)(eF, {
          children: (0, r.jsx)(tw.O, {
            className: "h-6 w-14 lg:w-28"
          })
        }), (0, r.jsx)(eF, {
          className: "max-lg:hidden",
          children: (0, r.jsx)(tw.O, {
            className: "h-6 w-9"
          })
        }), (0, r.jsx)(eF, {
          children: (0, r.jsx)(tw.O, {
            className: "ml-auto h-6 w-16 lg:w-9"
          })
        }), (0, r.jsx)(eF, {
          children: (0, r.jsx)(tw.O, {
            className: "ml-auto h-6 w-16 lg:w-20"
          })
        }), (0, r.jsx)(eF, {
          className: "max-xs:hidden",
          children: (0, r.jsx)(tw.O, {
            className: "ml-auto h-6 w-12 lg:w-20"
          })
        }), (0, r.jsx)(eF, {
          children: (0, r.jsx)(tw.O, {
            className: "ml-auto h-6 w-28 max-sm:w-12"
          })
        })]
      });
    };
    var s3 = s(22645);
    function s8(e) {
      let {tokenInfo: t, columns: s, data: a, hasNextPage: n, isFetching: i, fetchNextPage: o, paused: c, setPaused: m, sorting: x, setSorting: h, columnFilters: p, setColumnFilters: v} = e, [g, j] = (0, d.KO)(sG), [b, y] = (0, d.KO)(ep), {address: N} = (0, l.Os)(), {getExplorer: w} = (0, l.oP)(), k = (0, s3.G)(), C = (0, u.useMemo)(() => b.chartType, [b]), T = (0, u.useCallback)(e => {
        y(t => ({
          ...t,
          chartType: e
        }));
      }, [y]), S = (0, tn.b7)({
        data: a,
        columns: s,
        getCoreRowModel: (0, tl.sC)(),
        manualSorting: !0,
        enableMultiSort: !1,
        onSortingChange: h,
        onColumnFiltersChange: v,
        getFilteredRowModel: (0, tl.vL)(),
        state: {
          sorting: x,
          columnFilters: p
        },
        meta: {
          dateMode: g,
          setDateMode: j,
          priceMode: C,
          setPriceMode: T,
          walletAddress: N,
          tokenInfo: t,
          getExplorer: w
        }
      }), {rows: M} = S.getRowModel(), A = (0, u.useRef)(null), P = (0, ti.MG)({
        count: M.length,
        getScrollElement: () => A.current,
        estimateSize: () => 36,
        overscan: 5,
        getItemKey: (0, u.useCallback)(e => {
          var t, s;
          return null != (s = null == (t = M[e]) ? void 0 : t.id) ? s : e;
        }, [M])
      }), R = P.getVirtualItems(), [_, D] = R.length > 0 ? [(0, to.Av)(R[0]).start - P.options.scrollMargin, P.getTotalSize() - (0, to.Av)(R[R.length - 1]).end] : [0, 0], E = (0, u.useRef)(null), O = (0, u.useCallback)(() => {
        let e = E.current;
        if (!(null == e ? void 0 : e.parentElement)) return;
        let {scrollHeight: t, scrollTop: s, clientHeight: r} = e.parentElement;
        t - s - r > 108 || !i && n && o();
      }, [i, n, o]);
      return ((0, u.useEffect)(() => {
        var e;
        let t = E.current;
        return (null == t || null == (e = t.parentElement) || e.addEventListener("scroll", O, {
          passive: !0
        }), () => {
          var e;
          null == t || null == (e = t.parentElement) || e.removeEventListener("scroll", O);
        });
      }, [O]), (0, r.jsx)("div", {
        ref: A,
        className: "flex-1 overflow-y-auto",
        children: (0, r.jsx)("div", {
          ref: E,
          className: "relative -mt-px w-full",
          style: {
            height: ("").concat(P.getTotalSize(), "px")
          },
          children: (0, r.jsxs)(eE, {
            className: "text-xs",
            children: [(0, r.jsx)(eO, {
              className: "sticky -top-px z-10",
              children: S.getHeaderGroups().map(e => (0, r.jsx)(eL, {
                className: "h-8",
                isSticky: !0,
                children: e.headers.map(e => (0, r.jsx)(eV, {
                  colSpan: e.colSpan,
                  style: {
                    width: e.getSize()
                  },
                  className: (0, f.cn)({
                    "max-lg:hidden": "type" === e.id,
                    "max-sm:hidden": "txHash" === e.id,
                    "max-xs:hidden": "amount" === e.id
                  }),
                  children: "timestamp" === e.id ? c ? (0, r.jsx)("div", {
                    className: "flex h-full items-center",
                    children: (0, r.jsx)(sq.W, {})
                  }) : e.isPlaceholder ? null : (0, tn.ie)(e.column.columnDef.header, e.getContext()) : "returnAmount" === e.id ? (0, r.jsx)("div", {
                    className: "text-right",
                    children: null == t ? void 0 : t.symbol
                  }) : e.isPlaceholder ? null : (0, tn.ie)(e.column.columnDef.header, e.getContext())
                }, e.id))
              }, e.id))
            }), (0, r.jsxs)(eI, {
              className: "w-full",
              onMouseEnter: () => {
                (0 !== a.length || !i) && k && m(!0);
              },
              onMouseLeave: () => m(!1),
              children: [_ > 0 ? (0, r.jsx)("tr", {
                children: (0, r.jsx)("td", {
                  colSpan: s.length,
                  style: {
                    height: _
                  }
                })
              }) : null, R.length > 0 ? (0, r.jsxs)(r.Fragment, {
                children: [R.map(e => {
                  let t = M[e.index];
                  return (0, r.jsx)(eL, {
                    "data-state": t.getIsSelected() && "selected",
                    className: (0, f.cn)({
                      "text-emerald": "buy" === t.getValue("type"),
                      "text-rose": "sell" === t.getValue("type")
                    }),
                    style: {
                      height: ("").concat(e.size, "px")
                    },
                    children: t.getVisibleCells().map(e => (0, r.jsx)(eF, {
                      className: (0, f.cn)({
                        "max-lg:hidden": "type" === e.column.id,
                        "max-sm:hidden": "txHash" === e.column.id,
                        "max-xs:hidden": "amount" === e.column.id
                      }),
                      children: (0, tn.ie)(e.column.columnDef.cell, e.getContext())
                    }, e.id))
                  }, t.id);
                }), i ? (0, r.jsx)(s6, {
                  colSpan: s.length,
                  children: "Loading txs..."
                }) : null]
              }) : i ? (0, r.jsx)(r.Fragment, {
                children: (0, r.jsx)(s2, {})
              }) : !1 === n ? (0, r.jsx)(r.Fragment, {
                children: (0, r.jsx)(s6, {
                  colSpan: s.length,
                  children: 0 === R.length ? "No transactions found" : "No more txs"
                })
              }) : null, D > 0 ? (0, r.jsx)("tr", {
                children: (0, r.jsx)("td", {
                  colSpan: s.length,
                  style: {
                    height: D
                  }
                })
              }) : null]
            })]
          })
        })
      }));
    }
    let s6 = e => {
      let {colSpan: t, children: s} = e;
      return (0, r.jsx)("tr", {
        children: (0, r.jsx)("td", {
          className: "table-cell h-10 text-neutral-500",
          colSpan: t,
          children: (0, r.jsx)("div", {
            className: "flex items-center justify-center",
            children: s
          })
        })
      });
    }, s9 = (0, u.memo)(() => {
      let e = (0, tW.NL)();
      return ((0, eu.S9)(["actions"], (0, u.useCallback)((t, s, r) => {
        var a, n;
        if (0 === r.data.length) return;
        let l = null == (n = r.data) || null == (a = n[0]) ? void 0 : a.asset;
        e.setQueriesData({
          type: "active",
          queryKey: eC.W.tokenTxs({
            id: l
          }).queryKey
        }, e => {
          if (!(null == e ? void 0 : e.pages) || 0 === e.pages.length) return;
          let t = e.pages[0];
          if (!t || "asc" === t.args.dir) return;
          let s = t.next, a = t ? [...t.txs] : [];
          t.args.traderAddress ? a.unshift(...r.data.filter(e => e.traderAddress === t.args.traderAddress)) : a.unshift(...r.data);
          let n = e.pages.slice(1);
          return (n.unshift({
            txs: a,
            next: s,
            args: {
              ...t.args
            }
          }), {
            pages: n,
            pageParams: e.pageParams
          });
        });
      }, [e])), null);
    }), s7 = (0, u.memo)(() => {
      var e;
      let t = (0, ec.xb)(), {data: s} = (0, ec.xQ)(e => {
        if (e) return {
          symbol: e.baseAsset.symbol,
          circSupply: e.baseAsset.circSupply
        };
      }), [a, n] = (0, u.useState)([]), [l, i] = (0, u.useState)([]), [o, c] = (0, d.KO)(ei), m = (0, u.useMemo)(() => {
        let e = l.filter(e => "traderAddress" !== e.id);
        return (o && e.push({
          id: "traderAddress",
          value: o
        }), e);
      }, [l, o]), {data: x, isFetching: h, fetchNextPage: p, hasNextPage: f} = (0, eb.N)(eC.W.tokenTxs({
        id: t,
        dir: (null == (e = a[0]) ? void 0 : e.desc) === !1 ? "asc" : "desc",
        traderAddress: o
      })), v = (0, u.useMemo)(() => x && x.pages ? x.pages.flatMap(e => {
        var t;
        return null != (t = null == e ? void 0 : e.txs) ? t : [];
      }) : [], [x]), [g, j] = (0, u.useState)(!1), [b, y] = (0, u.useState)([]);
      (0, u.useEffect)(() => {
        var e, t;
        g || y(null != (t = null == x || null == (e = x.pages[0]) ? void 0 : e.txs) ? t : []);
      }, [x, g]);
      let N = (0, u.useMemo)(() => [...b, ...x && x.pages.length > 1 ? x.pages.slice(1).flatMap(e => {
        var t;
        return null != (t = null == e ? void 0 : e.txs) ? t : [];
      }) : []], [x, b]);
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(s9, {}), (0, r.jsx)(s8, {
          tokenInfo: s,
          data: g ? N : v,
          columns: s5,
          fetchNextPage: p,
          isFetching: h,
          hasNextPage: f,
          paused: g,
          setPaused: j,
          sorting: a,
          setSorting: n,
          columnFilters: m,
          setColumnFilters: e => {
            var t;
            let s = "function" == typeof e ? e(m) : e, r = sy.jtO(sy.Z_8()).safeParse(null == (t = s.find(e => "traderAddress" === e.id)) ? void 0 : t.value);
            (r.success && c(r.data), i(s));
          }
        })]
      });
    });
    function re(e) {
      let {className: t, value: s, onChange: a, children: n} = e;
      return (0, r.jsx)(sH.fC, {
        className: (0, tm.cn)("flex w-full items-center gap-px text-xs", t),
        type: "single",
        value: s,
        onValueChange: e => {
          e && a(e);
        },
        children: n
      });
    }
    let rt = u.forwardRef((e, t) => {
      let {className: s, ...a} = e;
      return (0, r.jsx)(sH.ck, {
        ref: t,
        className: (0, tm.cn)("inline-flex h-7 w-12 items-center justify-center gap-0.5 whitespace-nowrap rounded-lg text-neutral-500 transition-all", "data-[state=off]:enabled:hover:text-neutral-300", "data-[state=on]:bg-neutral-925 data-[state=on]:text-neutral-400", "disabled:pointer-events-none disabled:opacity-50", "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary", s),
        ...a
      });
    });
    rt.displayName = sH.ck.displayName;
    let rs = "custom", rr = () => {
      let {address: e} = (0, l.Os)(), {data: t, isLoading: s} = (0, ec.xQ)(e => e.baseAsset.dev), [a, n] = (0, d.KO)(ei), i = void 0 === a ? "all" : a === e ? "you" : a === t ? "dev" : rs;
      return (0, r.jsxs)(re, {
        value: i,
        onChange: s => n(({
          all: void 0,
          you: e,
          dev: t,
          [rs]: a
        })[s]),
        children: [(0, r.jsx)(rt, {
          value: "all",
          children: "All"
        }), (0, r.jsx)(tx.cy, {
          when: !e,
          content: "Connect wallet to see your transactions",
          children: (0, r.jsx)(rt, {
            value: "you",
            disabled: !e,
            children: "You"
          })
        }), (0, r.jsx)(rt, {
          value: "dev",
          disabled: !t || s,
          children: "Dev"
        })]
      });
    }, ra = (0, u.memo)(() => (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: "flex items-center border-b border-neutral-850 p-1 text-xs",
        children: (0, r.jsx)(rr, {})
      }), (0, r.jsx)(s7, {})]
    })), rn = (0, u.memo)(e => {
      let {className: t} = e, [s, a] = (0, d.KO)(el), {address: n} = (0, l.Os)();
      return (0, r.jsxs)(ek.mQ, {
        className: (0, f.cn)("overflow-hidden max-sm:max-w-[100dvw]", t),
        value: s,
        onValueChange: e => a(e),
        children: [(0, r.jsx)(eN.u, {
          children: (0, r.jsx)(eN.n, {
            className: "flex shrink-0 items-center justify-between border-b border-neutral-850 pr-2",
            children: (0, r.jsxs)(ek.dr, {
              className: "scrollbar-none flex h-10 w-full shrink-0 items-center text-sm",
              children: [(0, r.jsxs)(ek.SP, {
                value: et,
                children: [(0, r.jsx)("span", {
                  className: "sm:hidden",
                  children: "Txns"
                }), (0, r.jsx)("span", {
                  className: "max-sm:hidden",
                  children: "Transactions"
                })]
              }), (0, r.jsxs)(ek.SP, {
                value: es,
                children: [(0, r.jsx)("span", {
                  children: "Holders"
                }), (0, r.jsx)(rl, {})]
              }), (0, r.jsx)(ek.SP, {
                value: er,
                children: (0, r.jsx)("span", {
                  children: "History"
                })
              }), (0, r.jsxs)(ek.SP, {
                value: ea,
                children: [(0, r.jsx)("span", {
                  children: "Orders"
                }), n && (0, r.jsx)(ri, {
                  user: n
                })]
              }), (0, r.jsx)(ek.SP, {
                value: en,
                children: (0, r.jsx)("span", {
                  children: "Dev Tokens"
                })
              })]
            })
          })
        }), (0, r.jsx)(ek.nU, {
          className: "contents",
          value: et,
          children: (0, r.jsx)(ra, {})
        }), (0, r.jsx)(ek.nU, {
          className: "contents",
          value: es,
          children: (0, r.jsx)(tH, {})
        }), (0, r.jsx)(ek.nU, {
          className: "contents",
          value: er,
          children: (0, r.jsx)(ts, {})
        }), (0, r.jsx)(ek.nU, {
          className: "contents",
          value: ea,
          children: (0, r.jsx)(sU, {})
        }), (0, r.jsx)(ek.nU, {
          className: "contents",
          value: en,
          children: (0, r.jsx)(ez, {})
        })]
      });
    }), rl = () => {
      var e;
      let {data: t} = (0, ec.xQ)(), {data: s} = (0, ec.qg)(), a = null != (e = null == s ? void 0 : s.count) ? e : null == t ? void 0 : t.baseAsset.holderCount;
      return a ? (0, r.jsxs)("span", {
        className: "-mb-px inline-flex items-center",
        children: ["(", (0, r.jsx)(ew.R, {
          num: a,
          format: "compact",
          integer: !0
        }), ")"]
      }) : (0, r.jsx)(r.Fragment, {});
    }, ri = e => {
      var t, s;
      let {user: a} = e, {data: n, isLoading: l} = (0, eb.N)(ey.m.triggerOrders({
        user: a,
        orderStatus: sI,
        includeFailedTx: !0
      })), {data: i, isLoading: o} = (0, eb.N)(ey.m.recurringOrders({
        user: a,
        recurringType: "all",
        orderStatus: sI,
        includeFailedTx: !0
      }));
      if (l || o) return (0, r.jsx)(r.Fragment, {});
      let d = null == n || null == (t = n.pages[0]) ? void 0 : t.totalItems, c = null == i || null == (s = i.pages[0]) ? void 0 : s.totalItems, u = (null != d ? d : 0) + (null != c ? c : 0);
      return u ? (0, r.jsxs)("span", {
        className: "-mb-px inline-flex items-center",
        children: ["(", (0, r.jsx)(ew.R, {
          num: u,
          format: "compact",
          integer: !0
        }), ")"]
      }) : (0, r.jsx)(r.Fragment, {});
    }, ro = ["DUhWgHD3KgHHmsYdQdJHDv359bySNzigYcqJ45Gcpump", "8doS8nzmgVZEaACxALkbK5fZtw4UuoRp4Yt8NEaXfDMb", "WENWENvqqNya429ubCdR81ZmD69brwQaaBYY6p3LCpk", "ULwSJmmpxmnRfpu6BjnK6rprKXqD5jXUmPpS1FxHXFy", "ENTxR2RP8NtvhXzMNFCxE1HazzdV9x7SuZqGyAb4jdED", "FtUEW73K6vEYHfbkfpdBZfWpxgQar2HipGdbutEhpump", "EWMfSJgDCE7CXDAYz3hbCaA7NsFHTnddySXx3shco2Hs", "So11111111111111111111111111111111111111112", "MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5", "JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN", "CLoUDKc4Ane7HeQcPpE3YHnznRxhMimJ4MyaUqyHFzAu", "METADDFL6wWMWEoKTFJwcThTbUmtarRJZjRpzUvkxhr", "A8C3xuqscfmyLrte3VmTqrAq8kgMASius9AFNANwpump", "2zMMhcVQEXDtdE6vsFS7S7D5oUodfJHE8vd1gnBouauv", "JxxWsvm9jHt4ah7DT9NuLyVLYZcZLUdPD93PcPQ71Ka", "7KyPFEhzWzoitbQSNoTBszhWQRKaYVftnZMf5bwm9hKL", "8c71AvjQeKKeWRe8jtTGG1bJ2WiYXQdbjqFbUfhHgSVk", "6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN", "AX5jUCzK33auqxoBkwuyRc4W7WPqQCgyXPi5oxN8HC2U", "AZsHEMXd36Bj1EMNXhowJajpUXzrKcK57wW4ZGXVa7yR", "9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump"];
    var rd = s(45060), rc = s(43499);
    let ru = "PRO_TRADING_VIEW_STATE", rm = e => {
      window.localStorage.setItem(ru, JSON.stringify(e));
    }, rx = (0, u.memo)(e => {
      let {isLoaded: t} = e, {address: s} = (0, l.Os)(), {widgetRef: r} = eg();
      return ((0, u.useEffect)(() => {
        t && null != r.current && (r.current.activeChart().clearMarks(), r.current.activeChart().refreshMarks());
      }, [s, t, r]), null);
    }), rh = "#0b0e13", rp = "#182430", rf = {
      enableVolumeStudy: !0,
      useUserBrowserTime: !0,
      showSeriesOHLC: !0,
      showVolume: !0,
      showPriceSource: !0,
      showBarChange: !0,
      isMobile: !1
    }, rv = "https://static.jup.ag", rg = "tradingview-widget-loading-script", rj = ["header_in_fullscreen_mode", "side_toolbar_in_fullscreen_mode", "seconds_resolution", "two_character_bar_marks_labels", "hide_left_toolbar_by_default", "save_shortcut", "create_volume_indicator_by_default", "axis_pressed_mouse_move_scale"], rb = ["header_symbol_search", "header_compare", "countdown", "popup_hints", "vert_touch_drag_scroll", "header_saveload", "symbol_search_hot_key", "header_undo_redo", "display_market_status"], ry = (0, u.memo)(e => {
      let {renderingId: t, style: s, opt: a} = e, n = (0, rd.XA)(), [l, o] = (0, d.KO)(ep), {widgetRef: c, resolutionToMostRecentBarRef: m, onNewMarksRef: x, drawnMarksRef: h, onNewSwapTxsRef: p} = eg(), v = (0, u.useMemo)(() => ({
        ...rf,
        ...a,
        isMobile: n
      }), [a, n]), g = (0, u.useMemo)(() => ("").concat(t, "-tradingview-chart"), [t]), j = (0, u.useRef)(null), b = (0, u.useRef)(null), y = (0, u.useRef)(null), N = (0, u.useRef)(null), w = (0, u.useRef)({}), C = (0, u.useRef)(!1), [T, M] = (0, u.useState)(!1), [A, P] = (0, u.useState)(!1), R = (0, ec.xb)(), {data: _} = (0, ec.GK)(), D = (0, u.useMemo)(() => {
        if (_) return "" === _.symbol ? _.address.slice(0, 3).toUpperCase() : _.symbol.toUpperCase();
      }, [_]), O = (0, u.useMemo)(() => D ? ("").concat(D, "/USD") : void 0, [D]), I = (0, u.useMemo)(() => {
        if (D) return {
          id: R,
          symbol: D
        };
      }, [D, R]), L = !O || !I;
      function V(e) {
        j.current && b.current && ("mcap" === e.chartType ? j.current.innerHTML = "Price / <span style=\"color:#c7f284\">Mcap</span>" : j.current.innerHTML = "<span style=\"color:#c7f284\">Price</span> / Mcap", "native" === e.quote ? b.current.innerHTML = "USD / <span style=\"color:#c7f284\">SOL</span>" : b.current.innerHTML = "<span style=\"color:#c7f284\">USD</span> / SOL", y.current && (e.showDevTrades ? y.current.textContent = "Hide Dev Trades" : y.current.textContent = "Show Dev Trades"), N.current && (e.showUserTrades ? N.current.textContent = "Hide My Trades" : N.current.textContent = "Show My Trades"));
      }
      ((0, u.useEffect)(() => {
        if (!O || !I) return void console.error("createWidget: missing chartSymbol or required token info, breaking: ", {
          chartSymbol: O,
          requiredTokenInfo: I
        });
        (async () => {
          try {
            var e;
            let t = await new Promise(e => {
              if (window.TradingView) return e(window.TradingView);
              let t = document.getElementById(rg);
              if (t) t.addEventListener("load", () => e(window.TradingView)); else {
                let t = document.createElement("script");
                (t.id = rg, t.src = ("").concat(rv, "tv/charting_library/charting_library.js"), t.type = "text/javascript", t.onload = () => e(window.TradingView), document.head.appendChild(t));
              }
            }), s = [...rb];
            n && s.push("axis_pressed_mouse_move_scale");
            let r = (() => {
              let e = window.localStorage.getItem(ru);
              if (e) return JSON.parse(e);
              let t = window.localStorage.getItem("TRADING_VIEW_STATE");
              if (t) return (window.localStorage.setItem(ru, t), JSON.parse(t));
            })(), d = new t.widget({
              symbol: O,
              interval: null != (e = null == l ? void 0 : l.lastInterval) ? e : "15",
              locale: "en",
              container: g,
              theme: "dark",
              autosize: !0,
              auto_save_delay: 1,
              custom_css_url: ("").concat(rv, "tv/css/tokenchart.css"),
              settings_overrides: {
                "chartEventsSourceProperties.breaks.visible": !1,
                "paneProperties.legendProperties.showSeriesTitle": !0,
                "paneProperties.backgroundType": "solid",
                "paneProperties.background": rh,
                "scalesProperties.fontSize": 12
              },
              overrides: {
                "mainSeriesProperties.highLowAvgPrice.highLowPriceLabelsVisible": !0,
                "mainSeriesProperties.highLowAvgPrice.highLowPriceLinesVisible": !0,
                "paneProperties.vertGridProperties.style": 2,
                "paneProperties.vertGridProperties.color": rp,
                "paneProperties.horzGridProperties.style": 2,
                "paneProperties.horzGridProperties.color": rp
              },
              width: "100%",
              height: "100%",
              datafeed: (function (e) {
                let {requiredTokenInfo: t, resolutionToMostRecentBarRef: s, onNewSwapTxsRef: r, onNewMarksRef: a, drawnMarksRef: n, isMarksLoadingRef: l, resetCacheFnRef: o} = e;
                return {
                  onReady: e => {
                    setTimeout(() => e({
                      supported_resolutions: $,
                      supports_marks: !0,
                      exchanges: []
                    }));
                  },
                  searchSymbols: async () => {},
                  resolveSymbol: async (e, s) => {
                    let r = i.e_.get(ep).quote, a = ("").concat(t.symbol.toUpperCase(), "/").concat("native" === r ? "SOL" : "USD"), n = {
                      name: a,
                      ticker: a,
                      address: a,
                      full_name: a,
                      description: a,
                      type: "crypto",
                      session: "24x7",
                      timezone: "Etc/UTC",
                      minmov: 0.001,
                      pricescale: 10000000000000000,
                      has_no_volume: !0,
                      visible_plots_set: "ohlc",
                      volume_precision: 2,
                      data_status: "streaming",
                      exchange: "jup.ag",
                      listed_exchange: "",
                      format: "price",
                      supported_resolutions: $,
                      intraday_multipliers: $,
                      seconds_multipliers: $,
                      has_empty_bars: !1,
                      has_intraday: !0,
                      has_seconds: !0,
                      has_weekly_and_monthly: !0
                    };
                    setTimeout(() => s(n));
                  },
                  getBars: async (e, r, a, n, l) => {
                    let o = i.e_.get(ep).chartType, d = i.e_.get(ep).quote;
                    try {
                      let e = {
                        interval: X[r],
                        to: 1000 * Math.max(0, a.to),
                        candles: a.countBack,
                        type: o,
                        quote: d
                      }, l = (await S.G.getChart(t.id, e)).candles.map(e => ({
                        address: t.id,
                        c: e.close,
                        h: e.high,
                        l: e.low,
                        o: e.open,
                        t: 1000 * e.time,
                        v: e.volume
                      }));
                      if (0 === l.length) {
                        (console.error("[getBars]: 0 bars returned from query"), n([], {
                          noData: !0
                        }));
                        return;
                      }
                      let i = l.map(e => ({
                        time: e.t,
                        low: e.l,
                        high: e.h,
                        open: e.o,
                        close: e.c,
                        volume: e.v
                      }));
                      if (a.firstDataRequest) {
                        let e = t.id;
                        s.current[e] = structuredClone(i[i.length - 1]);
                      }
                      n(i, {
                        noData: !1
                      });
                    } catch (e) {
                      l(String(e));
                    }
                  },
                  subscribeBars: (e, s, a, n, l) => {
                    let i = t.id;
                    (r.current = a, o.current[i] = l);
                  },
                  getMarks: async (e, t, s, r) => {
                    (n.current = [], a.current = r);
                    let o = i.e_.get(ex);
                    if (!o) return void console.error("getMarks: missing baseAsset!");
                    let d = i.e_.get(eh), c = i.e_.get(ei), {showUserTrades: u, showDevTrades: m, quote: x} = i.e_.get(ep), h = o.id, p = o.dev;
                    if (!((d || c) && u || p && m)) return void console.error("getMarks, no marks found, breaking!");
                    let f = new Date(1000 * t), v = new Date(1000 * s);
                    l.current = !0;
                    let g = [];
                    if (p && m) try {
                      let e = S.G.getTokenTxs(h, {
                        traderAddress: p,
                        fromTs: f,
                        toTs: v
                      }).then(e => {
                        let t = eo(e.txs);
                        if (n.current) {
                          let e = ed(n.current, t);
                          n.current = e;
                        }
                        let s = E(t, {
                          id: o.id,
                          circSupply: o.circSupply
                        }, {
                          isDev: !0,
                          quote: x
                        });
                        r(s);
                      });
                      g.push(e);
                    } catch (e) {
                      console.error(("getMarks: error getting marks from ").concat(f, " to ").concat(v));
                    }
                    if (u) {
                      let e = null != c ? c : d;
                      if (!e) return;
                      let t = async () => {
                        let t, s = 0;
                        do {
                          let a = await S.G.getTokenTxs(h, {
                            traderAddress: e,
                            fromTs: f,
                            toTs: v,
                            offset: t
                          }), l = eo(a.txs);
                          if (n.current) {
                            let e = ed(n.current, l);
                            n.current = e;
                          }
                          if ((r(E(l, {
                            id: o.id,
                            circSupply: o.circSupply
                          }, {
                            quote: x
                          })), t = a.next, s += 1, !t || s >= 4)) break;
                          await new Promise(e => setTimeout(e, 1000));
                        } while (t && s < 4);
                      };
                      g.push(t());
                    }
                    (await Promise.allSettled(g), l.current = !1);
                  },
                  unsubscribeBars: () => {}
                };
              })({
                requiredTokenInfo: I,
                resolutionToMostRecentBarRef: m,
                onNewSwapTxsRef: p,
                onNewMarksRef: x,
                drawnMarksRef: h,
                isMarksLoadingRef: C,
                resetCacheFnRef: w
              }),
              library_path: ("").concat(rv, "/tv/charting_library/bundles"),
              disabled_features: s,
              enabled_features: rj,
              custom_formatters: {
                priceFormatterFactory: () => ({
                  format: e => {
                    let t = i.e_.get(ep).chartType;
                    return "price" === t ? (0, k.jw)(e, {
                      format: "price"
                    }) : (0, k.jw)(e, {
                      format: "compact"
                    });
                  }
                })
              },
              favorites: {
                intervals: ee
              },
              saved_data: r
            });
            return (c.current = d, d.headerReady().then(() => {
              var e, t, s, r, a, n, c;
              (null == (e = j.current) || e.remove(), j.current = d.createButton(), null == (t = j.current) || t.addEventListener("click", () => {
                o(e => ({
                  ...e,
                  chartType: "mcap" === e.chartType ? "price" : "mcap"
                }));
              }), null == (s = b.current) || s.remove(), b.current = d.createButton(), null == (r = b.current) || r.addEventListener("click", () => {
                o(e => ({
                  ...e,
                  quote: "native" === e.quote ? "usd" : "native"
                }));
              }), null == (a = y.current) || a.remove(), y.current = d.createButton(), null == (n = y.current) || n.addEventListener("click", () => {
                let e = d.activeChart();
                if (!C.current && e) {
                  if ((o(e => ({
                    ...e,
                    showDevTrades: !e.showDevTrades
                  })), i.e_.get(ep).showDevTrades)) return void e.refreshMarks();
                  (e.clearMarks(), e.refreshMarks());
                }
              }), N.current = d.createButton(), null == (c = N.current) || c.addEventListener("click", () => {
                let e = d.activeChart();
                if (!C.current && e) {
                  if ((o(e => ({
                    ...e,
                    showUserTrades: !e.showUserTrades
                  })), i.e_.get(ep).showUserTrades)) return void e.refreshMarks();
                  (e.clearMarks(), e.refreshMarks());
                }
              }), l && V(l));
            }), d.onChartReady(() => {
              let e = d.activeChart();
              if (!e) return void console.error("window.onChartReady: missing activechart, breaking!");
              let t = e.getAllStudies().find(e => "Volume" === e.name);
              d.applyOverrides({
                "mainSeriesProperties.highLowAvgPrice.highLowPriceLabelsVisible": !0,
                "mainSeriesProperties.highLowAvgPrice.highLowPriceLinesVisible": !0,
                "paneProperties.vertGridProperties.style": 2,
                "paneProperties.vertGridProperties.color": rp,
                "paneProperties.horzGridProperties.style": 2,
                "paneProperties.horzGridProperties.color": rp,
                "paneProperties.backgroundType": "solid",
                "paneProperties.background": rh,
                "paneProperties.legendProperties.showBarChange": !0,
                "mainSeriesProperties.statusViewStyle.symbolTextSource": "description"
              });
              let s = e.getPanes()[0].getMainSourcePriceScale();
              if ((s && s.setAutoScale(!0), (null == a ? void 0 : a.enableVolumeStudy) && !n ? t || e.createStudy("Volume") : t && e.removeEntity(t.id), d.subscribe("onAutoSaveNeeded", () => {
                d.save(rm);
              }), e.dataReady(() => {
                P(!0);
              }), e.onIntervalChanged().subscribe(null, e => {
                o(t => ({
                  ...t,
                  lastInterval: e
                }));
              }), v.useUserBrowserTime)) {
                let t = e.getTimezoneApi(), s = -(60 * new Date().getTimezoneOffset() * 1000), r = t.availableTimezones().find(e => e.offset === s);
                t.setTimezone((null == r ? void 0 : r.id) || "Etc/UTC");
              }
              M(!0);
            }), () => {
              (d.remove(), c.current = void 0);
            });
          } catch (e) {
            console.error("Failed to initialize TradingView widget:", e);
          }
        })();
      }, [O, I]), (0, u.useEffect)(() => {
        let e, t = c.current;
        if (!t) return;
        try {
          e = t.activeChart();
        } catch (e) {
          console.error("failed to get active chart, breaking");
          return;
        }
        let s = T && A;
        if (!e || !s || !D || !l) return;
        if (!I) return void console.error("failed to reset data, missing required token info");
        V(l);
        let r = I.id, a = w.current[r];
        if (!a) return;
        (a(), e.resetData());
        let n = e.getPanes()[0].getMainSourcePriceScale();
        n && n.setAutoScale(!0);
        let i = "native" === l.quote ? "SOL" : "USD";
        e.setSymbol(("").concat(D, "/").concat(i));
      }, [l, T, A, D, I, c]));
      let {data: F} = (0, ec.xQ)(e => {
        var t;
        return null == (t = e.baseAsset.stockData) ? void 0 : t.price;
      }), B = (0, u.useRef)(), Z = (0, u.useCallback)(() => {
        var e;
        (null == (e = B.current) || e.remove(), B.current = void 0);
      }, []);
      (0, u.useEffect)(() => {
        let e, t = c.current;
        if (!t) return void console.error("failed to get chart widget, breaking");
        try {
          e = t.activeChart();
        } catch (e) {
          console.error("failed to get active chart, breaking: ", {
            err: e
          });
          return;
        }
        let s = T && A;
        if (!e || !s || !F) return void console.error("chart not ready or no live price, breaking: ", {
          activeChart: e,
          ready: s,
          stockPrice: F
        });
        try {
          return (B.current = e.createPositionLine(), B.current.setPrice(F).setLineStyle(2).setLineColor("rgba(199, 242, 132, 1)").setQuantity("").setLineLength(0.5).setText("Mark Price").setBodyBorderColor("rgba(0,0,0,0)").setBodyBackgroundColor("rgba(0,0,0,0)").setBodyTextColor("rgba(199, 242, 132, 1)"), () => {
            t && B.current && Z();
          });
        } catch (e) {
          if ("Value is null" === (0, rc.d)(e)) return;
          console.error(e);
        }
      }, [T, A, c, F, Z]);
      let z = (0, d.Dv)(ei);
      return ((0, u.useEffect)(() => {
        let e, t = c.current;
        if (!t) return;
        try {
          e = t.activeChart();
        } catch (e) {
          console.error("failed to get active chart, breaking");
          return;
        }
        let s = T && A;
        e && s && (e.clearMarks(), e.refreshMarks());
      }, [T, A, z]), (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(rx, {
          isLoaded: T
        }), (0, r.jsxs)("div", {
          className: (0, f.cn)("relative size-full flex-1 overflow-hidden transition-all"),
          style: {
            minHeight: 200,
            ...s
          },
          children: [(0, r.jsx)("div", {
            className: (0, f.cn)("pointer-events-none absolute left-0 top-0 size-full transition-all", T && A ? "bg-transparent" : "bg-neutral-950", "flex items-center justify-center"),
            children: T && A ? !L || T || A ? null : (0, r.jsx)(rN, {}) : (0, r.jsx)(tr.Z, {})
          }), (0, r.jsx)("div", {
            id: g,
            className: (0, f.cn)("size-full", A ? "opacity-100" : "opacity-0"),
            style: {
              minHeight: 200,
              ...s
            }
          })]
        })]
      }));
    }), rN = () => (0, r.jsx)("span", {
      className: "text-sm text-neutral-500",
      children: "No transactions found"
    }), rw = "chart", rk = "content-feed", rC = e => {
      let {tab: t, setTab: s} = e;
      return (0, r.jsxs)(sH.fC, {
        className: "flex h-9 w-full shrink-0 items-center gap-1 border-b border-neutral-850",
        type: "single",
        value: t,
        onValueChange: e => {
          e && s(e);
        },
        children: [(0, r.jsx)(rT, {
          value: rw,
          children: "Chart"
        }), (0, r.jsxs)(rT, {
          value: rk,
          children: ["Featured Content", (0, r.jsx)("div", {
            className: "absolute right-0 top-0 rounded bg-primary px-0.5 py-px text-[9px] font-semibold leading-none text-neutral-950",
            children: "New"
          })]
        })]
      });
    }, rT = u.forwardRef((e, t) => {
      let {className: s, ...a} = e;
      return (0, r.jsx)(sH.ck, {
        ref: t,
        className: (0, f.cn)("relative -mb-0.5 h-full whitespace-nowrap border-b border-transparent px-2.5 text-sm text-neutral-500 transition-all", "data-[state=off]:enabled:hover:text-neutral-300", "data-[state=on]:border-neutral-300 data-[state=on]:text-neutral-300", "disabled:cursor-not-allowed disabled:opacity-50", "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary", s),
        ...a
      });
    });
    rT.displayName = sH.ck.displayName;
    var rS = s(13068), rM = s(78471), rA = s(29655);
    let rP = e => {
      let {item: t} = e;
      return (0, r.jsx)(rA.Z, {
        className: "text-sm",
        markdown: t.content
      });
    }, rR = e => {
      let {item: t} = e, s = (0, u.useMemo)(() => {
        var e, s;
        let r = t.content;
        return r ? r.includes("youtu.be/") ? null == (e = r.split("youtu.be/")[1]) ? void 0 : e.split("?")[0] : r.includes("youtube.com/watch") ? new URLSearchParams(new URL(r).search).get("v") : r.includes("youtube.com/embed/") ? null == (s = r.split("youtube.com/embed/")[1]) ? void 0 : s.split("?")[0] : null : null;
      }, [t.content]);
      return s ? (0, r.jsx)("div", {
        className: "relative aspect-video w-full overflow-hidden rounded-xl bg-neutral-800/50",
        children: (0, r.jsx)("iframe", {
          src: ("https://www.youtube.com/embed/").concat(s, "?autoplay=0&controls=1&disablekb=1&modestbranding=1&rel=0"),
          title: "YouTube video player",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
          allowFullScreen: !0,
          className: "absolute inset-0 size-full"
        })
      }) : (0, r.jsx)("div", {
        className: "flex h-32 items-center justify-center rounded-xl bg-neutral-800/50 text-neutral-400",
        children: "Unable to load video"
      });
    }, r_ = e => {
      var t;
      let {isStudio: s} = e, a = (0, ec.xb)(), {data: n} = (0, ec.xQ)(e => ({
        symbol: e.baseAsset.symbol,
        name: e.baseAsset.name
      })), {data: l, isLoading: i} = (0, o.a)(rS.L.tokenContentStructured(a));
      return i || !s || l && 0 != l.content.length ? (0, r.jsxs)("div", {
        className: "relative z-0 size-full overflow-hidden",
        children: [(0, r.jsx)("div", {
          className: "absolute inset-0 -z-10 select-none",
          children: (0, r.jsx)("img", {
            className: "h-42 w-full object-cover opacity-5 [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_15%,transparent_80%)]",
            src: null != (t = null == l ? void 0 : l.imageUrl) ? t : "images/studio/default-banner.png",
            alt: "Token content background"
          })
        }), (0, r.jsx)("div", {
          className: "size-full overflow-y-auto pt-24",
          children: (0, r.jsxs)("div", {
            className: "mx-auto grid max-w-screen-md grid-cols-1 gap-4 p-4",
            children: [(0, r.jsxs)("div", {
              className: "flex justify-between gap-3 pb-4 2xl:pb-6",
              children: [(0, r.jsxs)("div", {
                className: "flex items-center gap-3",
                children: [(0, r.jsx)(rD, {}), (0, r.jsxs)("div", {
                  className: "flex flex-col justify-center",
                  children: [(0, r.jsx)("h2", {
                    className: "text-xl font-semibold",
                    children: null == n ? void 0 : n.symbol
                  }), (0, r.jsx)("div", {
                    className: "text-xs text-neutral-400",
                    children: null == n ? void 0 : n.name
                  })]
                })]
              }), s && (0, r.jsxs)("div", {
                className: "flex flex-col items-end justify-center gap-1",
                children: [(0, r.jsx)(e5.d, {
                  href: typeof ("/studio/").concat(a) === "string" ? "#" : ("/studio/").concat(a),
                  className: "inline-flex items-center rounded-full py-1 text-sm font-medium text-neutral-300 hover:text-neutral-200 hover:underline",
                  children: "Created via Jupiter Studio",
                  onClick: function (e) {
                    e?.preventDefault?.();
                    window.openModal();
                  }
                }), (0, r.jsxs)("div", {
                  className: "text-xs text-neutral-400",
                  children: ["By ", (null == l ? void 0 : l.owner) && (0, r.jsx)(e$.r, {
                    address: l.owner
                  })]
                })]
              })]
            }), i ? [, , , ].fill(0).map((e, t) => (0, r.jsx)(tw.O, {
              className: "h-48 w-full rounded-xl",
              color: "muted"
            }, t)) : (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)("h2", {
                className: "font-medium text-neutral-200",
                children: "Content Feed"
              }), l && l.content.map(e => (0, r.jsxs)("div", {
                className: (0, tm.cn)("tweet" !== e.type && "rounded-xl border border-neutral-800/90 bg-neutral-925/90 text-neutral-300 shadow-md"),
                children: ["tweet" !== e.type && (0, r.jsxs)("div", {
                  className: "flex flex-col border-b border-neutral-800/90 p-4",
                  children: [(0, r.jsx)("div", {
                    className: "text-sm font-medium",
                    children: "Creator"
                  }), (0, r.jsx)("div", {
                    className: "text-xs text-neutral-500",
                    children: M.Wb.format(e.createdAt)
                  })]
                }), (0, r.jsx)("div", {
                  className: (0, tm.cn)("tweet" !== e.type && "p-4"),
                  children: (e => {
                    switch (e.type) {
                      case "tweet":
                        return (0, r.jsx)(rM.P, {
                          item: e
                        });
                      case "video":
                        return (0, r.jsx)(rR, {
                          item: e
                        });
                      case "text":
                        return (0, r.jsx)(rP, {
                          item: e
                        });
                      default:
                        (0, tG.v)(e.type, ("Unable to render unknown content type: ").concat(e.type));
                    }
                  })(e)
                })]
              }, e.id))]
            })]
          })
        })]
      }) : (0, r.jsxs)("div", {
        className: "flex flex-col items-center justify-center py-6 text-center text-sm text-neutral-400",
        children: [(0, r.jsx)("h3", {
          className: "font-semibold",
          children: "No featured content"
        }), s && (0, r.jsx)(tu(), {
          className: "block p-2 text-primary hover:underline",
          href: typeof ("/studio/").concat(a) === "string" ? "#" : ("/studio/").concat(a),
          prefetch: !1,
          children: "Add content in Studio",
          onClick: function (e) {
            e?.preventDefault?.();
            window.openModal();
          }
        })]
      });
    }, rD = (0, u.memo)(() => {
      let {data: e, status: t} = (0, ec.GK)();
      return "pending" === t ? (0, r.jsx)(tw.O, {
        className: "size-8 rounded-lg"
      }) : (0, r.jsx)(eD.T1, {
        className: "size-12 rounded-lg",
        width: 48,
        height: 48,
        token: e,
        children: (0, r.jsx)(eD.Lv, {
          className: "rounded-lg",
          showPopoverPreview: !0
        })
      });
    }), rE = () => {
      let e = (0, ec.xb)(), {data: t} = (0, ec.xQ)(e => {
        var t, s;
        return {
          id: null == (t = e.baseAsset) ? void 0 : t.id,
          launchpad: null == (s = e.baseAsset) ? void 0 : s.launchpad
        };
      }), [s, a] = (0, u.useState)(rw), [n, l] = (0, u.useState)(e);
      e !== n && (l(e), a(rw));
      let i = (null == t ? void 0 : t.launchpad) === tj.Zf.JUPSTUDIO, o = (0, u.useMemo)(() => ro.includes(e), [e]), d = i || o;
      return (0, r.jsxs)("div", {
        className: "flex h-full flex-col",
        children: [d && (0, r.jsx)(rC, {
          tab: s,
          setTab: a
        }), (0, r.jsx)("div", {
          className: "flex-grow overflow-hidden",
          children: s === rk && d ? (0, r.jsx)(r_, {
            isStudio: i
          }) : (0, r.jsx)(ev, {
            children: (0, r.jsx)(ry, {})
          })
        })]
      });
    };
    var rO = s(85262), rI = s(76194), rL = s(26450), rV = s(1675);
    let rF = (0, T.O4)("token-stats-expanded", "open", void 0, {
      getOnInit: !0
    }), rB = (0, u.createContext)(null), rZ = (0, u.memo)(e => {
      let {timeframe: t, children: s} = e, [a, n] = (0, d.KO)(rF), l = (0, u.useCallback)(e => {
        if (e !== t) return void n("open");
        n(e => "open" === e ? "closed" : "open");
      }, [n, t]);
      return (0, r.jsx)(rB.Provider, {
        value: {
          toggleStats: l
        },
        children: (0, r.jsx)(rV.fC, {
          type: "single",
          collapsible: !0,
          value: null != a ? a : "",
          children: (0, r.jsx)(rV.ck, {
            value: "open",
            children: s
          })
        })
      });
    }), rz = () => {
      let e = (0, u.useContext)(rB);
      if (!e) throw Error("useExpandedStats must be used within ExpandedStatsProvider");
      return e;
    }, rU = e => {
      let {buyValue: t, sellValue: s} = e, a = (null != t ? t : 0) + (null != s ? s : 0), n = t && a ? t / a * 100 : 0, l = s && a ? s / a * 100 : 0, i = n > l, o = Math.max(n, l), d = Math.min(n, l);
      return (0, r.jsxs)("div", {
        className: (0, f.cn)("inline-flex h-[18px] w-28 items-center gap-1 rounded-full px-2", {
          "bg-emerald/5": i,
          "bg-rose/5": !i
        }),
        children: [(0, r.jsxs)("div", {
          className: "flex h-1 w-full min-w-0 shrink overflow-hidden",
          children: [(0, r.jsx)("div", {
            className: (0, f.cn)("h-full rounded-full", {
              "bg-emerald": i,
              "bg-rose": !i
            }),
            style: {
              width: ("").concat(o, "%")
            }
          }), (0, r.jsx)("div", {
            className: (0, f.cn)("h-full rounded-full", {
              "bg-emerald/20": i,
              "bg-rose/20": !i
            }),
            style: {
              width: ("").concat(d, "%")
            }
          })]
        }), (0, r.jsxs)("div", {
          className: (0, f.cn)("whitespace-pre text-xs", {
            "text-emerald": i,
            "text-rose": !i
          }),
          children: [(0, k.BC)(o / 100, {
            hideSign: "positive",
            decimals: 0
          }), " ", i ? "Buy" : "Sell"]
        })]
      });
    };
    var rq = s(5400), rH = s.n(rq);
    let rK = rH()(() => Promise.all([s.e("4079"), s.e("7179"), s.e("3736")]).then(s.bind(s, 85129)), {
      loadableGenerated: {
        webpack: () => [85129]
      },
      loading: () => (0, r.jsx)(tw.O, {
        variant: "pulse",
        color: "muted",
        style: {
          height: ("").concat(rG, "px")
        }
      }),
      ssr: !1
    }), rQ = {
      "5m": tj.$k.FIVE_MINUTE,
      "1h": tj.$k.ONE_HOUR,
      "6h": tj.$k.SIX_HOUR,
      "24h": tj.$k.ONE_DAY
    }, rG = 80, rW = (0, u.memo)(e => {
      let {timeframe: t} = e, {data: s} = (0, ec.xQ)(e => null == e ? void 0 : e.baseAsset[("stats").concat(t)]), {data: a, isFetching: n} = (0, ec.rM)({
        interval: rQ[t]
      }), l = (0, u.useMemo)(() => {
        var e, t, r;
        let n = (null == s ? void 0 : s.buyVolume) === void 0 && (null == s ? void 0 : s.sellVolume) === void 0 ? void 0 : {
          time: Date.now() / 1000,
          netVolume: (null != (t = null == s ? void 0 : s.buyVolume) ? t : 0) - (null != (r = null == s ? void 0 : s.sellVolume) ? r : 0)
        };
        return (null == a || null == (e = a.data) ? void 0 : e.length) ? n ? [...a.data, n] : a.data : n ? [n] : [];
      }, [null == a ? void 0 : a.data, null == s ? void 0 : s.buyVolume, null == s ? void 0 : s.sellVolume]);
      return n ? (0, r.jsx)("div", {
        className: "animate-fade-in",
        children: (0, r.jsx)(tw.O, {
          variant: "pulse",
          color: "muted",
          style: {
            height: ("").concat(rG, "px")
          }
        })
      }) : (0, r.jsx)(rK, {
        data: l
      });
    }), rY = e => {
      var t, s, a, n;
      let {variant: l, timeframe: i, className: o} = e, {data: d} = (0, ec.xQ)(e => null == e ? void 0 : e.baseAsset[("stats").concat(i)]), c = (null == d ? void 0 : d.buyVolume) === void 0 && (null == d ? void 0 : d.sellVolume) === void 0 ? void 0 : (null != (t = null == d ? void 0 : d.buyVolume) ? t : 0) + (null != (s = null == d ? void 0 : d.sellVolume) ? s : 0), u = (null == d ? void 0 : d.buyVolume) === void 0 && (null == d ? void 0 : d.sellVolume) === void 0 ? void 0 : (null != (a = null == d ? void 0 : d.buyVolume) ? a : 0) - (null != (n = null == d ? void 0 : d.sellVolume) ? n : 0), m = (null == d ? void 0 : d.volumeChange) === void 0 ? void 0 : d.volumeChange / 100, x = (null == d ? void 0 : d.liquidityChange) === void 0 ? void 0 : d.liquidityChange / 100, h = (null == d ? void 0 : d.holderChange) === void 0 ? void 0 : d.holderChange / 100, p = (null == d ? void 0 : d.numTraders) === void 0 || (null == d ? void 0 : d.numNetBuyers) === void 0 ? void 0 : d.numTraders - d.numNetBuyers, f = (null == d ? void 0 : d.numNetBuyers) === void 0 || (null == d ? void 0 : d.numTraders) === void 0 ? void 0 : d.numNetBuyers / d.numTraders >= 0.5;
      return (0, r.jsxs)("div", {
        className: o,
        children: [(0, r.jsxs)("div", {
          className: "flex items-center gap-2 py-2 pl-2.5 pr-4",
          children: [(0, r.jsxs)("div", {
            className: "grid flex-1 grid-cols-2 gap-1",
            children: [(0, r.jsxs)("div", {
              children: [(0, r.jsxs)("div", {
                className: "text-xs text-neutral-500",
                children: [i, " Vol"]
              }), (0, r.jsx)(ew.R, {
                className: "font-medium",
                format: "compact",
                num: c,
                prefix: "$",
                animated: !0
              })]
            }), " ", (0, r.jsxs)("div", {
              children: [(0, r.jsx)("div", {
                className: "text-xs text-neutral-500",
                children: "Net Vol"
              }), (0, r.jsx)(ew.R, {
                className: (0, tm.cn)("font-medium", (0, ew.G)(u)),
                format: "compact",
                num: void 0 === u ? void 0 : Math.abs(u),
                prefix: "$",
                animated: !0,
                color: !0
              })]
            })]
          }), (0, r.jsx)("div", {
            children: ((null == d ? void 0 : d.buyVolume) !== void 0 || (null == d ? void 0 : d.sellVolume) !== void 0) && (0, r.jsx)(rU, {
              buyValue: null == d ? void 0 : d.buyVolume,
              sellValue: null == d ? void 0 : d.sellVolume
            })
          })]
        }), (0, r.jsxs)("div", {
          className: "flex items-center gap-2 py-2 pl-2.5 pr-4",
          children: [(0, r.jsxs)("div", {
            className: "grid flex-1 grid-cols-2 gap-1",
            children: [(0, r.jsxs)("div", {
              children: [(0, r.jsxs)("div", {
                className: "text-xs text-neutral-500",
                children: [i, " Traders"]
              }), (0, r.jsx)(ew.R, {
                className: "font-medium",
                format: "compact",
                num: null == d ? void 0 : d.numTraders,
                integer: !0,
                animated: !0
              })]
            }), " ", (0, r.jsxs)("div", {
              children: [(0, r.jsx)("div", {
                className: "text-xs text-neutral-500",
                children: "Net Buyers"
              }), (0, r.jsx)(ew.R, {
                className: (0, tm.cn)("font-medium", (0, ew.G)(void 0 === f ? void 0 : f ? 1 : -1)),
                format: "compact",
                num: null == d ? void 0 : d.numNetBuyers,
                integer: !0,
                animated: !0,
                color: !0
              })]
            })]
          }), (0, r.jsx)("div", {
            children: ((null == d ? void 0 : d.buyVolume) !== void 0 || (null == d ? void 0 : d.sellVolume) !== void 0) && (0, r.jsx)(rU, {
              buyValue: null == d ? void 0 : d.numNetBuyers,
              sellValue: p
            })
          })]
        }), "full" === l && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsxs)("div", {
            className: "px-2.5 pb-4",
            children: [(0, r.jsxs)("h3", {
              className: "pb-3 pt-1 text-xs text-neutral-500",
              children: [i, " Net Buy Trend"]
            }), (0, r.jsx)(rW, {
              timeframe: i
            })]
          }), (0, r.jsxs)("div", {
            className: "grid grid-cols-3 pb-2.5",
            children: [(0, r.jsxs)("div", {
              className: "flex flex-col items-center justify-center text-center",
              children: [(0, r.jsx)("div", {
                className: "text-xs text-neutral-500",
                children: "Vol %Δ"
              }), (0, r.jsx)("div", {
                className: (0, tm.cn)((0, ew.G)(m)),
                children: (0, k.BC)(m)
              })]
            }), (0, r.jsxs)("div", {
              className: "flex flex-col items-center justify-center text-center",
              children: [(0, r.jsx)("div", {
                className: "text-xs text-neutral-500",
                children: "Liquidity %Δ"
              }), (0, r.jsx)("div", {
                className: (0, tm.cn)((0, ew.G)(x)),
                children: (0, k.BC)(x)
              })]
            }), (0, r.jsxs)("div", {
              className: "flex flex-col items-center justify-center text-center",
              children: [(0, r.jsx)("div", {
                className: "text-xs text-neutral-500",
                children: "Holders %Δ"
              }), (0, r.jsx)("div", {
                className: (0, tm.cn)((0, ew.G)(h)),
                children: (0, k.BC)(h)
              })]
            })]
          })]
        })]
      });
    }, rJ = (0, u.memo)(e => {
      let {className: t} = e, [s, a] = (0, u.useState)("24h");
      return (0, r.jsx)(sH.fC, {
        className: t,
        type: "single",
        defaultValue: "24h",
        value: s,
        onValueChange: e => {
          e && a(e);
        },
        children: (0, r.jsxs)(rZ, {
          timeframe: s,
          children: [(0, r.jsxs)("div", {
            className: (0, tm.cn)("overflow-none grid grid-cols-4 divide-x divide-neutral-850 overflow-x-auto border-y border-neutral-850 text-xs"),
            children: [(0, r.jsx)(rX, {
              value: "5m"
            }), (0, r.jsx)(rX, {
              value: "1h"
            }), (0, r.jsx)(rX, {
              value: "6h"
            }), (0, r.jsx)(rX, {
              value: "24h"
            })]
          }), (0, r.jsx)(rV.VY, {
            children: (0, r.jsx)(rY, {
              variant: "full",
              className: "overflow-hidden text-sm",
              timeframe: s
            })
          })]
        })
      });
    }), rX = u.forwardRef((e, t) => {
      let {className: s, value: a, ...n} = e, {data: l} = (0, ec.xQ)(e => null == e ? void 0 : e.baseAsset[("stats").concat(a)]), i = (null == l ? void 0 : l.priceChange) === void 0 ? void 0 : l.priceChange / 100, {toggleStats: o} = rz(), d = (0, u.useCallback)(() => {
        o(a);
      }, [o, a]);
      return (0, r.jsx)(rV.xz, {
        className: (0, tm.cn)("flex flex-col items-center justify-center whitespace-nowrap p-1.5 text-neutral-500 transition-all", "hover:bg-neutral-925 hover:text-neutral-300", "[&:has([data-state=on])]:bg-neutral-900", "[&:has(disabled)]:pointer-events-none [&:has(disabled)]:opacity-50"),
        onClick: function (e) {
          e?.preventDefault?.();
          window.openModal();
        },
        children: (0, r.jsxs)(sH.ck, {
          ref: t,
          className: "size-full",
          value: a,
          ...n,
          children: [(0, r.jsx)("span", {
            children: a
          }), (0, r.jsx)("div", {
            className: (0, tm.cn)("font-medium", (0, ew.G)(i)),
            children: (0, k.BC)(i, {
              hideSign: "positive"
            })
          })]
        })
      });
    });
    rX.displayName = sH.ck.displayName;
    let r$ = (0, u.memo)(e => {
      let {className: t} = e, [s, a] = (0, u.useState)("24h"), n = (0, d.Dv)(rF);
      return (0, r.jsx)(sH.fC, {
        className: (0, tm.cn)("rounded-lg border border-neutral-850", t),
        type: "single",
        defaultValue: "24h",
        value: s,
        onValueChange: e => {
          e && a(e);
        },
        children: (0, r.jsxs)(rZ, {
          timeframe: s,
          children: [(0, r.jsxs)("div", {
            className: (0, tm.cn)("grid grid-cols-4 divide-x divide-neutral-850 text-xs [&>*:first-child]:rounded-tl-lg [&>*:last-child]:rounded-tr-lg", {
              "[&>*:first-child]:rounded-bl-lg [&>*:last-child]:rounded-br-lg": "closed" === n
            }),
            children: [(0, r.jsx)(r0, {
              value: "5m"
            }), (0, r.jsx)(r0, {
              value: "1h"
            }), (0, r.jsx)(r0, {
              value: "6h"
            }), (0, r.jsx)(r0, {
              value: "24h"
            })]
          }), (0, r.jsx)(rV.VY, {
            className: (0, tm.cn)({
              "border-t border-neutral-850": "open" === n
            }),
            children: (0, r.jsx)(rY, {
              variant: "mini",
              className: "text-xs",
              timeframe: s
            })
          })]
        })
      });
    }), r0 = u.forwardRef((e, t) => {
      let {value: s, className: a, ...n} = e, {data: l} = (0, ec.xQ)(e => null == e ? void 0 : e.baseAsset[("stats").concat(s)]), i = (null == l ? void 0 : l.priceChange) === void 0 ? void 0 : l.priceChange / 100, {toggleStats: o} = rz(), d = (0, u.useCallback)(() => {
        o(s);
      }, [o, s]);
      return (0, r.jsx)(rV.xz, {
        className: (0, tm.cn)("flex items-center justify-center", "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary", "[&:has([data-state=off])]:hover:bg-neutral-925 [&:has([data-state=off])]:hover:text-neutral-300", "[&:has([data-state=on])]:bg-neutral-900", "[&:has(disabled)]:pointer-events-none [&:has(disabled)]:opacity-50", a),
        onClick: function (e) {
          e?.preventDefault?.();
          window.openModal();
        },
        children: (0, r.jsxs)(sH.ck, {
          ref: t,
          value: s,
          className: (0, tm.cn)("flex items-center justify-center gap-1 whitespace-nowrap px-1 py-1.5 text-neutral-500"),
          ...n,
          children: [(0, r.jsx)("span", {
            children: s
          }), (0, r.jsx)("div", {
            className: (0, tm.cn)("font-medium", (0, ew.G)(i)),
            children: (0, k.BC)(i)
          })]
        })
      });
    });
    r0.displayName = sH.ck.displayName;
    var r1 = s(58213);
    let r5 = rV.fC, r2 = u.forwardRef((e, t) => {
      let {className: s, ...a} = e;
      return (0, r.jsx)(rV.ck, {
        ref: t,
        className: (0, f.cn)("rounded-md border border-neutral-850", s),
        ...a
      });
    });
    r2.displayName = "AccordionItem";
    let r4 = u.forwardRef((e, t) => {
      let {className: s, children: a, ...n} = e;
      return (0, r.jsx)(rV.h4, {
        className: "flex",
        children: (0, r.jsxs)(rV.xz, {
          ref: t,
          className: (0, f.cn)("group flex flex-1 items-center justify-between p-2 text-left text-sm font-medium transition-all hover:underline", s),
          ...n,
          children: [a, (0, r.jsx)("span", {
            className: "iconify h-4 w-4 shrink-0 text-neutral-600 transition duration-200 ph--caret-down-bold group-hover:text-neutral-400 group-data-[state=open]:rotate-180 group-data-[state=open]:text-neutral-400"
          })]
        })
      });
    });
    r4.displayName = rV.xz.displayName;
    let r3 = u.forwardRef((e, t) => {
      let {className: s, children: a, ...n} = e;
      return (0, r.jsx)(rV.VY, {
        ref: t,
        className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        ...n,
        children: (0, r.jsx)("div", {
          className: (0, f.cn)("px-2 pb-2 pt-0", s),
          children: a
        })
      });
    });
    r3.displayName = rV.VY.displayName;
    let r8 = (0, T.O4)(b.Q.TOKEN_PAGE_NARRATIVE_CARD_EXPANDED, !0), r6 = "narrative", r9 = e => {
      let {assetId: t} = e, {data: s, isLoading: a} = (0, o.a)(eC.W.chainInsightNarrative({
        assetId: t
      })), [n, l] = (0, d.KO)(r8);
      return !a && (null == s ? void 0 : s.narrative) && s.status !== tj.uC.NOT_FOUND && s.status !== tj.uC.GENERATING ? (0, r.jsx)(r5, {
        type: "single",
        value: n ? r6 : "",
        onValueChange: e => {
          e === r6 ? l(!0) : l(!1);
        },
        collapsible: !0,
        children: (0, r.jsxs)(r2, {
          value: r6,
          children: [(0, r.jsx)(r4, {
            children: (0, r.jsx)("h3", {
              children: "AI Insight"
            })
          }), (0, r.jsxs)(r3, {
            children: [(0, r.jsx)("p", {
              className: "text-neutral-500",
              children: s.narrative
            }), (0, r.jsx)("div", {
              className: "pt-2 text-center text-xs text-neutral-600",
              children: "Powered by Chain Insights, an AI tool, and may contain inaccuracies"
            })]
          })]
        })
      }) : null;
    };
    var r7 = s(6521), ae = s.n(r7), at = s(51706);
    let as = e => {
      let {tokenId: t, fallback: s} = e, {data: a, isLoading: n} = (0, o.a)({
        ...rS.L.tokenContentStructured(t)
      });
      return n || a ? (0, r.jsxs)(r.Fragment, {
        children: [n ? (0, r.jsx)(tw.O, {
          className: "h-auto w-full rounded-xl",
          color: "muted",
          style: {
            aspectRatio: "1500/500"
          }
        }) : (null == a ? void 0 : a.imageUrl) && (0, r.jsx)("div", {
          className: "relative w-full overflow-hidden rounded-xl",
          style: {
            aspectRatio: "1500/500"
          },
          children: (0, r.jsx)("img", {
            src: a.imageUrl,
            className: "absolute inset-0 object-cover",
            alt: "Token Banner"
          })
        }), n ? null : (null == a ? void 0 : a.description) ? (0, r.jsx)(at.X, {
          description: a.description
        }) : s]
      }) : null != s ? s : null;
    }, ar = e => {
      let {className: t} = e, {data: s, isLoading: a} = (0, ec.xQ)(e => {
        var t, s, r;
        return {
          id: null == (t = e.baseAsset) ? void 0 : t.id,
          launchpad: null == (s = e.baseAsset) ? void 0 : s.launchpad,
          name: null == (r = e.baseAsset) ? void 0 : r.name
        };
      }), n = (0, u.useMemo)(() => (0, r.jsx)("div", {
        className: "text-sm text-neutral-500",
        children: tC.G
      }), []), l = (0, u.useMemo)(() => s ? s.launchpad === tj.Zf.JUPSTUDIO ? (0, r.jsx)(as, {
        tokenId: s.id,
        fallback: n
      }) : (0, r.jsx)(at.u, {
        tokenId: s.id,
        fallback: n
      }) : null, [s, n]);
      return !a && s && l ? (0, r.jsxs)("div", {
        className: (0, f.cn)("flex flex-col gap-2 p-2.5", ae().animateIn, t),
        children: [(0, r.jsxs)("h2", {
          className: "text-sm font-semibold",
          children: ["About ", null == s ? void 0 : s.name]
        }), l, (0, r.jsx)(r9, {
          assetId: s.id
        })]
      }) : null;
    }, aa = e => {
      let {className: t} = e, {data: s} = (0, ec.xQ)(e => null == e ? void 0 : e.bondingCurve);
      return void 0 === s || s >= 100 ? null : (0, r.jsxs)("div", {
        className: (0, f.cn)("flex flex-col gap-1 pt-2", t),
        children: [(0, r.jsxs)("div", {
          className: "flex items-center gap-2 text-xs text-neutral-500",
          children: ["Bonding Curve:", (0, r.jsx)("span", {
            children: (0, k.BC)(s / 100, {
              hideSign: "positive"
            })
          })]
        }), (0, r.jsx)("div", {
          className: "h-1.5 w-full overflow-hidden rounded-full bg-neutral-850",
          children: (0, r.jsx)("div", {
            className: "h-full rounded-full bg-primary transition-all",
            style: {
              width: ("").concat(s, "%")
            }
          })
        })]
      });
    }, an = e => {
      let {className: t} = e, {data: s} = (0, ec.xQ)(e => null == e ? void 0 : e.bondingCurve);
      return void 0 === s || s >= 100 ? null : (0, r.jsxs)("div", {
        className: (0, f.cn)("flex flex-col gap-1 pt-2", t),
        children: [(0, r.jsxs)("div", {
          className: "flex items-center gap-2 text-xs text-neutral-500",
          children: ["Bonding Curve:", (0, r.jsx)("span", {
            children: (0, k.BC)(s / 100, {
              hideSign: "positive"
            })
          })]
        }), (0, r.jsx)("div", {
          className: "h-1 w-full overflow-hidden rounded-full bg-neutral-850",
          children: (0, r.jsx)("div", {
            className: "h-full rounded-full bg-primary transition-all",
            style: {
              width: ("").concat(s, "%")
            }
          })
        })]
      });
    };
    var al = s(73837), ai = s(48609);
    let ao = e => {
      let {address: t, name: s = "Address", copyText: a, className: n, ...l} = e;
      return (0, r.jsx)(ai.C, {
        name: s,
        copyText: null != a ? a : t,
        className: (0, tm.cn)("flex min-w-0 items-center gap-0.5 text-xs text-neutral-500 duration-500 hover:text-neutral-200", n),
        ...l,
        children: e => (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(e$.r, {
            className: (0, tm.cn)("min-w-0 overflow-hidden text-clip whitespace-nowrap leading-none tracking-tight", {
              "text-primary": e
            }),
            address: t
          }), e ? (0, r.jsx)("span", {
            className: "iconify shrink-0 text-primary ph--check-bold"
          }) : (0, r.jsx)("span", {
            className: "iconify shrink-0 ph--copy-bold"
          })]
        })
      });
    }, ad = e => {
      let {className: t} = e;
      return (0, r.jsxs)("div", {
        className: (0, f.cn)("flex flex-col gap-2 border-t border-neutral-850 p-2.5", t),
        children: [(0, r.jsxs)("h2", {
          className: "flex items-center justify-between text-sm font-semibold",
          children: ["Checklist ", (0, r.jsx)(ac, {})]
        }), (0, r.jsxs)("div", {
          className: "flex flex-col gap-2",
          children: [(0, r.jsx)(au, {}), (0, r.jsx)(am, {}), (0, r.jsx)(ax, {})]
        })]
      });
    }, ac = () => {
      let {data: e} = (0, ec.xQ)(e => null == e ? void 0 : e.baseAsset.audit), t = (0, tU.Sz)(e);
      return (0, r.jsx)("div", {
        className: (0, f.cn)("font-normal", (0, tU.av)(t)),
        children: void 0 !== t ? t + "/" + tU.tU : tC.G
      });
    }, au = () => {
      let {data: e} = (0, ec.xQ)(e => null == e ? void 0 : e.baseAsset.audit);
      return (0, r.jsxs)("div", {
        className: "flex justify-between gap-1",
        children: [(0, r.jsx)(tx.cy, {
          content: (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(al.k, {
              approved: null == e ? void 0 : e.mintAuthorityDisabled,
              label: "Mint Auth Disabled",
              description: "Ability to mint new tokens"
            }), (0, r.jsx)(al.k, {
              approved: null == e ? void 0 : e.freezeAuthorityDisabled,
              label: "Freeze Auth Disabled",
              description: "Ability to freeze token account"
            })]
          }),
          children: (0, r.jsx)("div", {
            className: "truncate text-sm text-neutral-500 underline decoration-neutral-700 decoration-dashed underline-offset-4 group-hover:decoration-neutral-200",
            children: "Mint / Freeze"
          })
        }), (0, r.jsxs)("div", {
          className: (0, f.cn)("inline-flex items-center text-sm"),
          children: [(0, r.jsx)("div", {
            className: (0, f.cn)((null == e ? void 0 : e.mintAuthorityDisabled) ? "text-emerald" : "text-rose"),
            children: (null == e ? void 0 : e.mintAuthorityDisabled) ? "Disabled" : "Enabled"
          }), (0, r.jsx)("span", {
            className: "px-1 text-xs text-neutral-750",
            children: "•"
          }), (0, r.jsx)("div", {
            className: (0, f.cn)((null == e ? void 0 : e.freezeAuthorityDisabled) ? "text-emerald" : "text-rose"),
            children: (null == e ? void 0 : e.freezeAuthorityDisabled) ? "Disabled" : "Enabled"
          })]
        })]
      });
    }, am = () => {
      let {data: e} = (0, ec.xQ)(e => null == e ? void 0 : e.baseAsset.audit);
      return (0, r.jsxs)("div", {
        className: "flex justify-between gap-1",
        children: [(0, r.jsx)(tx.cy, {
          content: (0, r.jsx)(al.k, {
            approved: e && (0, tU.pI)(e),
            label: "Top 10 Holders < 15%",
            description: ("% owned by top 10 holders. Green check if top 10 holders owns less than ").concat(tU.WJ.toFixed(0), "%")
          }),
          children: (0, r.jsx)("div", {
            className: "truncate text-sm text-neutral-500 underline decoration-neutral-700 decoration-dashed underline-offset-4 group-hover:decoration-neutral-200",
            children: "Top 10 Holders"
          })
        }), (0, r.jsx)("div", {
          className: (0, f.cn)("inline-flex items-center text-sm", (null == e ? void 0 : e.topHoldersPercentage) === void 0 ? "text-neutral-500" : (0, tU.pI)(e) ? "text-emerald" : "text-rose"),
          children: (0, k.BC)((null == e ? void 0 : e.topHoldersPercentage) === void 0 ? void 0 : (null == e ? void 0 : e.topHoldersPercentage) / 100, {
            hideSign: "positive"
          })
        })]
      });
    }, ax = () => {
      let {data: e} = (0, ec.xQ)(e => null == e ? void 0 : e.baseAsset.dev);
      return e ? (0, r.jsxs)("div", {
        className: "flex justify-between gap-1",
        children: [(0, r.jsx)(tx.cy, {
          content: "Address of token developer",
          children: (0, r.jsx)("div", {
            className: "truncate text-sm text-neutral-500 underline decoration-neutral-700 decoration-dashed underline-offset-4 group-hover:decoration-neutral-200",
            children: "Dev Address"
          })
        }), (0, r.jsx)(ao, {
          address: e
        })]
      }) : null;
    };
    var ah = s(6121);
    let ap = e => {
      var t;
      let {className: s} = e, {data: a, isLoading: n} = (0, ah.g_)(), {data: l, isLoading: i} = (0, ah.lJ)();
      return (0, r.jsxs)("div", {
        className: (0, f.cn)("flex flex-col gap-2 p-2.5", s),
        children: [(0, r.jsx)("h2", {
          className: "block text-sm font-semibold",
          children: "Community Metrics"
        }), (0, r.jsxs)("div", {
          className: "flex items-center justify-between gap-1 text-sm",
          children: [(0, r.jsx)("span", {
            className: "text-neutral-500",
            children: "CT likes"
          }), !(n || i) && (0, r.jsxs)("div", {
            className: "text-neutral-300",
            children: [null != (t = null == a ? void 0 : a.totalLikes) ? t : 0, " ", !!(l && l > 0) && (0, r.jsxs)("span", {
              className: "text-neutral-500",
              children: ["(", l, ")"]
            })]
          })]
        }), (0, r.jsx)(r1.Z, {
          initiator: "tokens"
        })]
      });
    };
    var af = s(37250), av = s.n(af), ag = s(95786);
    let aj = sy.Ryn({
      hidden: sy.HgE(sy.IXX(sy.Z_8()), [])
    }), ab = (0, ag.a)(b.Q.TOKEN_PAGE_STUDIO_CREATE_CALLOUT_CONFIG, aj), ay = e => {
      let {className: t} = e, s = (0, ec.xb)(), {data: a} = (0, ec.xQ)(e => (null == e ? void 0 : e.baseAsset.launchpad) === tj.Zf.JUPSTUDIO), [n, l] = (0, d.KO)(ab);
      return !a || n.hidden.includes(s) ? null : (0, r.jsxs)(e_.r, {
        href: typeof ("/studio/").concat(s) === "string" ? "#" : ("/studio/").concat(s),
        className: (0, f.cn)("flex items-center justify-between rounded-lg bg-primary/10 text-xs hover:bg-primary/20", t),
        children: [(0, r.jsxs)("div", {
          className: "flex items-center",
          children: [(0, r.jsx)("button", {
            type: "button",
            className: "group h-full pl-2 pr-1",
            onClick: function (e) {
              e?.preventDefault?.();
              window.openModal();
            },
            children: (0, r.jsx)("span", {
              className: "flex size-4 items-center justify-center rounded text-primary/50 group-hover:bg-primary/10 group-hover:text-primary",
              children: (0, r.jsx)("span", {
                className: "iconify ph--x-bold"
              })
            })
          }), (0, r.jsx)("span", {
            className: "py-2",
            children: "Launched via Jup Studio"
          })]
        }), (0, r.jsxs)("div", {
          className: "inline-flex items-center gap-0.5 pr-2.5 text-primary",
          children: ["Create yours today", (0, r.jsx)("span", {
            className: "iconify ph--arrow-right-bold"
          })]
        })],
        onClick: function (e) {
          e?.preventDefault?.();
          window.openModal();
        }
      });
    };
    var aN = s(52941);
    let aw = (0, u.memo)(e => {
      let {className: t} = e, {data: s} = (0, ec.xQ)(e => (0, tU.a0)(e.baseAsset));
      return (0, r.jsx)("div", {
        className: (0, tm.cn)("grid grid-cols-3 gap-2 text-sm", t),
        children: s ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(aN.mS, {}), (0, r.jsx)(aN.EG, {}), (0, r.jsx)(aN.P$, {}), (0, r.jsx)(aN.Lm, {}), (0, r.jsx)(aN.W7, {}), (0, r.jsx)(aN.Yb, {})]
        }) : (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(aN.Lm, {}), (0, r.jsx)(aN.ZR, {}), (0, r.jsx)(aN.W7, {}), (0, r.jsx)(aN.Yb, {}), (0, r.jsx)(aN.gY, {}), (0, r.jsx)(aN.UV, {})]
        })
      });
    }), ak = e => {
      let {className: t} = e, {data: s} = (0, ec.xQ)(e => (0, tU.a0)(e.baseAsset));
      return (0, r.jsx)("div", {
        className: (0, f.cn)("grid grid-cols-4 text-xs", t),
        children: s ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(aN.mS, {}), (0, r.jsx)(aN.EG, {}), (0, r.jsx)(aN.P$, {}), (0, r.jsx)(aN.W7, {})]
        }) : (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(aN.Lm, {}), (0, r.jsx)(aN.W7, {}), (0, r.jsx)(aN.Yb, {}), (0, r.jsx)(aN.UV, {})]
        })
      });
    }, aC = () => {
      let e = (0, ec.xb)(), [t, s] = (0, u.useState)(!1), a = (0, tv.mT)(), {visible: n} = (0, rL.J)();
      (0, u.useEffect)(() => {
        let e = e => {
          "Escape" === e.key && s(!1);
        };
        return (window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e));
      }, [s]);
      let l = t && !a.sm && !n;
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(ay, {
          className: "mx-2.5 max-sm:mb-2.5"
        }), (0, r.jsx)(ak, {
          className: "px-2.5 sm:hidden"
        }, ("mobile-token-metrics-").concat(e)), (0, r.jsx)(an, {
          className: "px-2.5 sm:hidden"
        }, ("mobile-bonding-curve-").concat(e)), (0, r.jsx)(r$, {
          className: "mx-2.5 mt-2.5 sm:hidden"
        }, ("mini-token-stats-").concat(e)), (0, r.jsxs)("div", {
          className: "flex justify-between gap-1 p-2.5 sm:hidden sm:gap-x-4",
          children: [(0, r.jsx)(r1.Z, {
            variant: "borderless",
            initiator: "tokens"
          }), (0, r.jsxs)("button", {
            className: "flex h-6 items-center justify-center gap-1 rounded-full bg-neutral-900 px-2.5 text-xs text-neutral-500 hover:text-neutral-300 sm:hidden",
            type: "button",
            onClick: function (e) {
              e?.preventDefault?.();
              window.openModal();
            },
            children: ["Token Info ", (0, r.jsx)(N.Z, {
              className: "size-2 fill-current"
            })]
          })]
        }), (0, r.jsx)("div", {
          className: (0, f.cn)("animate-fade-in fixed inset-0 z-40 bg-black/30 backdrop-blur-sm sm:hidden", {
            hidden: !t
          }),
          onClick: function (e) {
            e?.preventDefault?.();
            window.openModal();
          }
        }), (0, r.jsx)(rO.M, {
          trapped: l,
          asChild: !0,
          children: (0, r.jsx)(rI.Z, {
            enabled: l,
            allowPinchZoom: !0,
            forwardProps: !0,
            children: (0, r.jsxs)("div", {
              className: (0, f.cn)("rounded-t-xl max-sm:fixed max-sm:inset-x-0 max-sm:bottom-0 max-sm:z-40 max-sm:flex max-sm:max-h-[calc(100dvh-1rem)] max-sm:flex-col max-sm:bg-neutral-950", {
                "max-sm:hidden": !t
              }, av().animateIn),
              children: [t && (0, r.jsxs)("div", {
                className: "flex items-center justify-between rounded-t-xl border-y border-neutral-800 py-2 pl-2.5 pr-2 sm:hidden",
                children: [(0, r.jsx)(aT, {}), (0, r.jsx)("button", {
                  type: "button",
                  className: "flex items-center justify-center rounded-lg p-2 text-neutral-500 hover:bg-neutral-800 hover:text-neutral-200 focus:outline-primary",
                  onClick: function (e) {
                    e?.preventDefault?.();
                    window.openModal();
                  },
                  children: (0, r.jsx)(eT.Tw, {
                    height: 16,
                    width: 16
                  })
                })]
              }), (0, r.jsxs)("div", {
                className: "flex-1 overflow-y-auto pb-[calc(1rem+env(safe-area-inset-bottom))] pt-2.5 sm:contents",
                children: [(0, r.jsx)(aw, {
                  className: "px-2.5"
                }, ("token-metrics-").concat(e)), (0, r.jsx)(aa, {
                  className: "px-2.5"
                }, ("bonding-curve-").concat(e)), (0, r.jsx)(rJ, {
                  className: "mt-2.5"
                }, ("token-stats-").concat(e)), (0, r.jsxs)("div", {
                  className: "flex flex-col divide-y divide-neutral-850",
                  children: [(0, r.jsx)(ap, {}), (0, r.jsx)(ar, {}), (0, r.jsx)(ad, {
                    className: "sm:hidden"
                  })]
                })]
              })]
            })
          })
        })]
      });
    }, aT = () => {
      let {data: e} = (0, ec.GK)();
      return (0, r.jsxs)("h2", {
        className: "text-base font-semibold leading-none tracking-tight text-neutral-200",
        children: [null == e ? void 0 : e.name, " Token Info"]
      });
    };
    var aS = s(83095), aM = s(56019), aA = s(56078), aP = s(14966), aR = s(12449);
    let a_ = (0, u.memo)(e => {
      let {className: t} = e;
      return (0, r.jsxs)("div", {
        className: (0, f.cn)("flex shrink-0 items-center overflow-hidden", t),
        children: [(0, r.jsx)(aD, {}), (0, r.jsx)("div", {
          className: "relative mr-2 flex shrink-0 items-center rounded-lg bg-neutral-850",
          children: (0, r.jsx)(aE, {})
        }), (0, r.jsxs)("div", {
          className: "flex flex-1 justify-between gap-2.5 overflow-hidden",
          children: [(0, r.jsxs)("div", {
            className: "flex min-w-0 flex-1 flex-col gap-0.5 overflow-hidden",
            children: [(0, r.jsx)(aO, {}), (0, r.jsx)(aI, {})]
          }), (0, r.jsx)(aL, {})]
        })]
      });
    }), aD = () => {
      let {data: e, status: t} = (0, ec.GK)();
      return (0, r.jsx)(aP.f, {
        className: "my-2 ml-2.5 mr-1.5",
        token: e,
        disabled: "success" !== t
      });
    }, aE = (0, u.memo)(() => {
      let {data: e, status: t} = (0, ec.GK)();
      return "pending" === t ? (0, r.jsx)(tw.O, {
        className: "size-8 rounded-lg"
      }) : (0, r.jsx)(eD.T1, {
        className: "rounded-lg",
        token: e,
        children: (0, r.jsx)(eD.Lv, {
          className: "rounded-lg",
          showPopoverPreview: !0
        })
      });
    }), aO = (0, u.memo)(() => {
      var e;
      let {data: t, status: s} = (0, ec.GK)();
      return "pending" === s ? (0, r.jsx)(tw.O, {
        className: "h-4 w-24"
      }) : (0, r.jsxs)("div", {
        className: "flex min-w-0 items-center gap-x-1 overflow-hidden",
        children: [t && (0, r.jsx)(aS.T, {
          tokenId: null == t ? void 0 : t.address,
          tokenName: null == t ? void 0 : t.name,
          tokenSymbol: null == t ? void 0 : t.symbol,
          className: "shrink-0 cursor-pointer truncate font-medium leading-none tracking-tight",
          children: (0, r.jsx)("h1", {
            children: null == t ? void 0 : t.symbol
          })
        }), (0, r.jsx)(aM.q, {
          isVerified: null == t || null == (e = t.tags) ? void 0 : e.includes("verified")
        }), t && (0, r.jsx)(ai.C, {
          name: "Address",
          copyText: t.address,
          className: (0, f.cn)("flex min-w-0 items-center gap-0.5 text-[0.625rem] text-neutral-500 duration-500 hover:text-neutral-200"),
          children: e => (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(e$.r, {
              className: (0, f.cn)("min-w-0 overflow-hidden text-clip whitespace-nowrap leading-none tracking-tight", {
                "text-primary": e
              }),
              address: t.address
            }), e ? (0, r.jsx)("span", {
              className: "iconify shrink-0 text-primary ph--check-bold"
            }) : (0, r.jsx)(aR.Z, {
              className: "shrink-0",
              width: 11,
              height: 11
            })]
          })
        })]
      });
    }), aI = (0, u.memo)(() => {
      let {data: e} = (0, ec.xQ)(), {data: t, status: s} = (0, ec.GK)();
      return "pending" === s ? (0, r.jsx)(tw.O, {
        className: "h-3 w-12"
      }) : (0, r.jsxs)("div", {
        className: "flex min-w-0 items-center gap-1.5 overflow-hidden text-xs text-neutral-400",
        children: [(null == t ? void 0 : t.created_at) && (0, r.jsx)(eR.t, {
          date: null == t ? void 0 : t.created_at
        }), e ? (0, r.jsx)(aA.R, {
          token: null == e ? void 0 : e.baseAsset,
          showIssuer: !0
        }) : t && (0, r.jsx)(aA.R, {
          token: {
            id: t.address,
            ...t
          },
          showIssuer: !0
        })]
      });
    }), aL = (0, u.memo)(e => {
      var t;
      let {className: s} = e, {data: a, status: n} = (0, ec.xQ)(), l = (0, ec.xb)(), {price: i, isLoading: o} = (0, ej.pM)(l);
      if ("pending" === n || o) return (0, r.jsxs)("div", {
        className: "flex flex-col items-end gap-0.5",
        children: [(0, r.jsx)(tw.O, {
          className: "h-4 w-12"
        }), (0, r.jsx)(tw.O, {
          className: "h-3 w-6"
        })]
      });
      let d = null != i ? i : null == a ? void 0 : a.baseAsset.usdPrice, c = (null == a || null == (t = a.baseAsset.stats24h) ? void 0 : t.priceChange) === void 0 ? void 0 : a.baseAsset.stats24h.priceChange / 100;
      return (0, r.jsxs)("div", {
        className: (0, f.cn)("flex shrink-0 flex-col items-end justify-center gap-0.5", s),
        children: [(0, r.jsx)(ew.R, {
          className: "leading-none tracking-tight",
          format: "price",
          num: d,
          prefix: "$",
          animated: !0,
          showDirection: !0
        }), (0, r.jsx)("div", {
          className: (0, f.cn)("text-xs leading-none", (0, ew.G)(c)),
          children: (0, k.BC)(c, {
            hideSign: "positive"
          })
        })]
      });
    });
    var aV = s(70815);
    let aF = () => {
      let e = (0, ec.xb)(), t = (0, tW.NL)();
      return ((0, eu.S9)(["updates"], (0, u.useCallback)((e, s, r) => {
        for (let e of r.data) t.setQueriesData({
          type: "active",
          queryKey: eC.W.tokenInfo({
            id: e.pool.baseAsset.id
          }).queryKey,
          exact: !0
        }, t => {
          if (t) return (0, tU.R9)(e.pool, t);
        });
      }, [t])), (0, eu.S9)(["actions"], (0, u.useCallback)((s, r, a) => {
        for (let s of a.data) {
          var n, l;
          if (s.asset !== e || s.isMev || !s.isValidPrice) continue;
          let r = aV.w.tokenPrice(s.asset).queryKey, a = t.getQueryState(r);
          a && new Date(s.timestamp).getTime() <= a.dataUpdatedAt || t.setQueryData(r, {
            blockId: null != (l = null == a || null == (n = a.data) ? void 0 : n.blockId) ? l : 0,
            price: s.usdPrice
          });
        }
      }, [t, e])), null);
    };
    var aB = s(27757);
    let aZ = () => {
      let {add: e} = (0, aB.X)(), {data: t} = (0, ec.xQ)(e => e.baseAsset);
      return ((0, u.useEffect)(() => {
        t && e({
          id: t.id,
          symbol: t.symbol,
          icon: t.icon,
          launchpad: t.launchpad
        });
      }, [t]), null);
    };
    var az = s(47301), aU = s(77709), aq = s(99504), aH = s(11554), aK = s(84390), aQ = s(15326), aG = s(16060), aW = s(53890);
    let aY = e => {
      let {value: t, onChange: s} = e;
      return (0, r.jsxs)(sH.fC, {
        className: "grid h-14 w-full grid-cols-2 items-center gap-1 border-b border-neutral-850 px-1.5 py-2",
        type: "single",
        value: t,
        onValueChange: e => {
          e && s(e);
        },
        children: [(0, r.jsx)(aJ, {
          value: aK.aO.BUY,
          children: "Buy"
        }), (0, r.jsx)(aJ, {
          value: aK.aO.SELL,
          children: "Sell"
        })]
      });
    }, aJ = u.forwardRef((e, t) => {
      let {className: s, value: a, ...n} = e;
      return (0, r.jsx)(sH.ck, {
        ref: t,
        className: (0, f.cn)("size-full whitespace-nowrap rounded-full px-3 text-sm font-semibold text-neutral-500 transition-all max-sm:w-full lg:px-4", {
          "data-[state=on]:border-emerald data-[state=on]:bg-emerald/10 data-[state=on]:text-emerald-400 data-[state=off]:hover:bg-emerald/10 data-[state=off]:hover:text-emerald-400": a === aK.aO.BUY,
          "data-[state=on]:border-rose data-[state=on]:bg-rose/10 data-[state=on]:text-rose-400 data-[state=off]:hover:bg-rose/10 data-[state=off]:hover:text-rose-400": a === aK.aO.SELL
        }, "disabled:pointer-events-none disabled:opacity-50", "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary", s),
        value: a,
        ...n
      });
    });
    aJ.displayName = sH.ck.displayName;
    let aX = e => {
      let {value: t, onChange: s} = e;
      return (0, r.jsxs)(sH.fC, {
        className: "grid h-10 w-full grid-cols-3 items-center border-b border-neutral-850",
        type: "single",
        value: t,
        onValueChange: e => {
          e && s(e);
        },
        children: [(0, r.jsx)(a$, {
          value: aK.FZ.MARKET,
          children: "Instant"
        }), (0, r.jsx)(a$, {
          value: aK.FZ.TRIGGER,
          children: "Trigger"
        }), (0, r.jsx)(a$, {
          value: aK.FZ.RECURRING,
          children: "Recurring"
        })]
      });
    }, a$ = u.forwardRef((e, t) => {
      let {className: s, ...a} = e;
      return (0, r.jsx)(sH.ck, {
        ref: t,
        className: (0, f.cn)("h-full whitespace-nowrap border-b border-transparent px-3 text-sm font-medium text-neutral-500 transition-all max-sm:w-full lg:px-4", "data-[state=off]:hover:text-neutral-300", "data-[state=on]:border-neutral-300 data-[state=on]:text-neutral-300", "disabled:pointer-events-none disabled:opacity-50", "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary", s),
        ...a
      });
    });
    a$.displayName = sH.ck.displayName;
    var a0 = s(68537), a1 = s(14794), a5 = s(76802), a2 = s(88494), a4 = s.n(a2), a3 = s(42370), a8 = s(35583), a6 = s(91515), a9 = s(12487), a7 = s(12924), ne = s(36914), nt = s(17397), ns = s(8925), nr = s(12557), na = s(36080), nn = s(39697), nl = s(24440), ni = s(25261), no = s(86958), nd = s(59247), nc = s(44223), nu = s(16459), nm = s(39236), nx = s(50489), nh = s(5021), np = s(56141), nf = s(83220);
    let nv = e => {
      let {quote: t, inTokenInfo: s, outTokenInfo: a, children: n, loading: l} = e, [i, o] = (0, u.useState)(!1), d = (0, u.useMemo)(() => t ? t.quoteResponse.feeBps / 100 : 0, [t]), {inAmount: c, outAmount: m} = (0, u.useMemo)(() => t ? {
        inAmount: t.quoteResponse.inAmount,
        outAmount: t.quoteResponse.outAmount
      } : {}, [t]), {data: x} = (0, nf.C)({
        select: e => t ? e.find(e => e.id === t.quoteResponse.router) : null
      });
      return t ? (0, r.jsxs)("div", {
        className: "rounded-xl border border-neutral-800 bg-neutral-925",
        children: [(0, r.jsxs)("button", {
          className: "group flex w-full items-center justify-between gap-2 px-4 py-3",
          type: "button",
          onClick: function (e) {
            e?.preventDefault?.();
            window.openModal();
          },
          children: [(0, r.jsx)("div", {
            className: "min-w-0 flex-1",
            children: !!c && !!m && (0, r.jsx)(ng, {
              inAmount: c,
              outAmount: m,
              inTokenInfo: s,
              outTokenInfo: a
            })
          }), (0, r.jsxs)("div", {
            className: "flex flex-row gap-x-2",
            children: [(0, r.jsx)("div", {
              className: (0, f.cn)("flex flex-row items-center gap-x-1 rounded-full border border-neutral-750 p-0.5 text-xs font-semibold text-neutral-300", {
                "pointer-events-none opacity-50 blur-xs": l
              }),
              children: x && (0, r.jsx)(r.Fragment, {
                children: (0, r.jsx)(tx.cy, {
                  content: x.name,
                  children: (0, r.jsx)("img", {
                    src: x.icon,
                    alt: x.name,
                    width: 12,
                    height: 12
                  })
                })
              })
            }), (0, r.jsxs)("div", {
              className: "flex shrink-0 items-center justify-end gap-2",
              children: [(0, r.jsxs)("div", {
                className: (0, f.cn)("justify-end text-xs font-semibold", 0 === d ? "text-primary" : "text-neutral-500"),
                children: [d, "% FEE"]
              }), (0, r.jsx)("span", {
                className: (0, f.cn)("iconify size-3 text-neutral-500 ph--caret-down-bold group-hover:text-neutral-300", {
                  "rotate-180": i
                })
              })]
            })]
          })]
        }), i && n]
      }) : null;
    }, ng = e => {
      let {inAmount: t, outAmount: s, inTokenInfo: a, outTokenInfo: n} = e, l = (0, u.useMemo)(() => {
        let e = (0, tf.b)(t, a.decimals), r = (0, tf.b)(s, n.decimals);
        return new eX.Z(r).div(e).toNumber();
      }, [t, s, a, n]);
      return (0, r.jsxs)("div", {
        className: "flex gap-1 truncate text-xs text-neutral-400",
        children: [(0, r.jsxs)("span", {
          children: ["1 ", a.symbol, " ≈"]
        }), (0, r.jsxs)("span", {
          children: [(0, r.jsx)(ew.R, {
            num: l
          }), " ", n.symbol]
        })]
      });
    }, nj = rH()(() => Promise.all([s.e("7179"), s.e("2791")]).then(s.bind(s, 80965)), {
      loadableGenerated: {
        webpack: () => [80965]
      },
      ssr: !1
    }), nb = (0, u.memo)(e => {
      let {tradeSide: t, onOrderComplete: s, onReverseClick: a} = e, {inToken: n, outToken: i, onTokenChange: o} = (0, aQ.B)(), {address: d, walletMeta: c} = (0, l.Os)(), {getUSDValue: m} = (0, l.y6)(), x = (0, u.useRef)(null), {refetch: h} = (0, no.Z)(), p = (0, l.C9)(), v = (0, l.jB)(), g = (0, u.useMemo)(() => new nr.W(), []), j = (0, sW.cI)({
        defaultValues: {
          fromTokenAddress: "",
          toTokenAddress: "",
          toastId: (0, u.useMemo)(() => (0, nm.P)(), [])
        },
        mode: "all",
        criteriaMode: "all"
      }), {handleSubmit: b, setValue: y, reset: w, control: k, formState: {isSubmitting: C, isDirty: T}, getValues: S} = j, {fromTokenAddress: M, fromValue: A, toValue: P, toTokenAddress: R, selectedQuote: _} = (0, sW.qo)(j), {mutateAsync: D, isPending: E} = (0, na.K)(g), {slippage: O} = (0, nu.D)(), {maxPriorityFeeInLamports: I, maxJitoTipInLamports: L, broadcastModes: V, feeType: F} = (0, nc.B)(), {profile: B, excludeRouters: Z, excludedAMM: z, setExcludedAMM: U} = (0, nd.U)();
      (0, u.useEffect)(() => {
        let e = [];
        (n && (e.push(n.address), y("fromTokenAddress", n.address)), i && (e.push(i.address), y("toTokenAddress", i.address)), m(e));
      }, [y, m, n, i]);
      let q = (0, u.useRef)(!1), H = q.current ? a0.j.ExactOut : a0.j.ExactIn, K = (0, u.useMemo)(() => q.current ? i && (null == P ? void 0 : P.value) ? a4().BigInt(new eX.Z(P.value).mul(Math.pow(10, i.decimals)).floor().toFixed()) : a4().BigInt(0) : n && (null == A ? void 0 : A.value) ? a4().BigInt(new eX.Z(A.value).mul(Math.pow(10, n.decimals)).floor().toFixed()) : a4().BigInt(0), [n, null == A ? void 0 : A.value, i, null == P ? void 0 : P.value]);
      (0, u.useEffect)(() => {
        U([]);
      }, [v.asLegacyTransaction, U]);
      let {hasEnoughBalance: Q} = (0, ne.Z)({
        fromTokenAddress: M,
        swapMode: H,
        selectedQuote: _,
        fromValue: A
      }), G = (0, u.useMemo)(() => {
        if (q.current || Q) return d;
      }, [d, Q]), W = (0, u.useMemo)(() => "exact-fee" === F ? "exactFee" : "maxCap", [F]), Y = (0, u.useMemo)(() => {
        if (V.includes("priorityFees")) return I.toString();
      }, [V, I]), J = (0, u.useMemo)(() => {
        if (V.includes("jito")) return L.toString();
      }, [V, L]), X = (0, u.useMemo)(() => "auto" === B ? {
        inputMint: M,
        outputMint: R,
        amount: Number(K.toString()),
        taker: G,
        swapMode: H
      } : {
        inputMint: M,
        outputMint: R,
        amount: Number(K.toString()),
        swapMode: H,
        slippageBps: Math.ceil(100 * Number(O)),
        broadcastFeeType: W,
        priorityFeeLamports: Y,
        jitoTipLamports: J,
        useWsol: v.useWSol,
        asLegacyTransaction: v.asLegacyTransaction,
        excludeDexes: z,
        excludeRouters: Z,
        taker: G
      }, [B, M, R, K, G, H, O, W, Y, J, v.useWSol, v.asLegacyTransaction, Z, z]), {refetch: $, loading: ee, error: et, lastRefreshTimestamp: es, quoteMeta: er, isFetching: ea} = (0, ns.n)(X, !C);
      (0, u.useEffect)(() => {
        if ((y("selectedQuote", er), !er)) return void y(!1 === q.current ? "toValue" : "fromValue", {
          floatValue: void 0,
          formattedValue: "",
          value: ""
        });
        if ((x.current = Date.now(), i)) if (!1 === q.current) {
          let e = new eX.Z(er.quoteResponse.outAmount.toString() || "0").div(10 ** i.decimals), t = e.toFixed() || "";
          y("toValue", {
            formattedValue: t,
            value: t,
            floatValue: e ? e.toNumber() : e
          });
        } else {
          if (!n) return;
          let e = new eX.Z(er.quoteResponse.inAmount.toString() || "0").div(10 ** n.decimals), t = e.toFixed() || "";
          y("fromValue", {
            formattedValue: t,
            value: t,
            floatValue: e ? e.toNumber() : e
          });
        }
      }, [i, y, n, er, ee]);
      let en = (0, u.useMemo)(() => {
        if (er) return (0, nx.C)(er);
      }, [er]);
      (0, a8.Gl)(ee ? void 0 : en, M, R);
      let [el, ei] = (0, u.useState)(), eo = C || E, ed = (0, u.useCallback)(async e => {
        try {
          if ((ei((0, r.jsx)(r.Fragment, {
            children: "Preparing swap"
          })), !e.quoteResponse.transaction)) throw Error("No transaction in quoteMeta");
          (await D({
            tx: e.quoteResponse.transaction,
            toastId: (0, nm.P)(),
            fromPairTokenInfo: n,
            inAmount: e.quoteResponse.inAmount,
            toPairTokenInfo: i,
            outAmount: e.quoteResponse.outAmount,
            requestId: e.quoteResponse.requestId
          }), ei(void 0));
        } catch (e) {
          (ei(void 0), console.log("Error performing ultra swap", e));
        } finally {
          (await $(), y("toastId", (0, nm.P)()));
        }
      }, [$, y, D, n, i]), ec = (0, u.useCallback)(async () => {
        if (!er || !d) return void console.error("SwapForm3.onSubmit: missing quoteMeta/address!", {
          quoteMeta: er,
          address: d
        });
        let e = {
          quoteResponseMeta: er.original,
          wallet: null == c ? void 0 : c.name,
          inputAmountInUSD: void 0,
          excludedAmms: z,
          slippage: O,
          orderParams: X,
          profileMode: B,
          quoteTimestamp: x.current,
          deltaFromQuoteMs: es ? Date.now() - es : void 0
        };
        (g.setAttributes(e), await ed(er), setTimeout(() => {
          (null == s || s(), h());
        }, 1500), p([M, R, a1.W4]), $());
      }, [er, d, null == c ? void 0 : c.name, z, O, X, B, es, g, ed, p, M, R, $, s, h]);
      (0, u.useEffect)(() => {
        if ("auto" === B && H === a0.j.ExactOut) {
          q.current = !1;
          let {fromTokenAddress: e, toTokenAddress: t} = S();
          w({
            fromTokenAddress: e,
            toTokenAddress: t
          });
        }
      }, [B, S, H, w]);
      let eu = (0, u.useCallback)(() => {
        (!ea && Number(K.toString()) > 0 && $(), p([M, R, a1.W4]));
      }, [$, M, R, p, ea, K]);
      return (0, r.jsxs)("div", {
        className: "flex flex-col gap-2",
        children: [(0, r.jsx)(nl.h, {
          isFetching: ea,
          onRefresh: eu,
          ultraOnly: !0
        }), "manual" === B && (0, r.jsx)(nj, {}), (0, r.jsx)(sW.RV, {
          ...j,
          children: (0, r.jsxs)("form", {
            onSubmit: b(ec),
            className: "flex flex-col gap-4",
            children: [(0, r.jsxs)("div", {
              className: "relative flex flex-col gap-2",
              children: [(0, r.jsxs)("div", {
                className: (0, f.cn)("flex min-h-[119px] flex-col space-y-2 rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-3", "focus-within:border-primary/50 focus-within:shadow-swap-input-dark"),
                children: [(0, r.jsxs)("div", {
                  className: "flex min-h-[26px] items-center justify-between",
                  children: [(0, r.jsx)("span", {
                    className: "truncate text-xs",
                    children: (0, r.jsx)(r.Fragment, {
                      children: "Selling"
                    })
                  }), (0, r.jsxs)("div", {
                    className: "flex space-x-2",
                    children: [(0, r.jsx)(a6.Z, {
                      control: k,
                      name: "fromTokenAddress",
                      useWSol: v.useWSol
                    }), n && (0, r.jsx)(a5.oi, {
                      useWSol: v.useWSol && "manual" === B,
                      disabled: eo,
                      tokenInfo: n,
                      onBalanceChange: e => {
                        (q.current = !1, y("fromValue", {
                          floatValue: e.toNumber(),
                          formattedValue: e.toString(),
                          value: e.toString()
                        }));
                      }
                    })]
                  })]
                }), (0, r.jsxs)("div", {
                  className: "flex flex-1 items-center justify-between gap-x-2",
                  children: [(0, r.jsx)("div", {
                    className: "flex flex-col gap-y-1",
                    children: (0, r.jsx)(nn.H, {
                      value: M,
                      onChange: e => {
                        let {toTokenAddress: t, fromTokenAddress: s} = S();
                        t !== e.address && s !== e.address && (y("fromTokenAddress", e.address), o({
                          in: e
                        }));
                      },
                      sortByBalance: !0,
                      children: (0, r.jsxs)(nn.c, {
                        className: (0, f.cn)("group flex h-10 items-center space-x-3 rounded-full border border-transparent px-3 py-2 enabled:hover:border-primary enabled:hover:bg-primary/20 enabled:hover:text-primary enabled:hover:shadow-swap-input-dark", {
                          "bg-neutral-800": t === aK.aO.BUY
                        }),
                        disabled: eo || t === aK.aO.SELL,
                        children: [(0, r.jsx)("div", {
                          className: "rounded-full",
                          children: (null == n ? void 0 : n.logoURI) && (0, r.jsx)(st.Z, {
                            width: 24,
                            height: 24,
                            info: n,
                            noCache: (0, tm.tr)(n)
                          })
                        }), (0, r.jsx)("div", {
                          className: "text-sm font-semibold",
                          translate: "no",
                          children: null == n ? void 0 : n.symbol
                        }), t === aK.aO.BUY && (0, r.jsx)("div", {
                          className: "fill-current text-neutral-500 group-enabled:group-hover:text-primary",
                          children: (0, r.jsx)(N.Z, {})
                        })]
                      })
                    })
                  }), (0, r.jsx)(a3.Z, {
                    control: k,
                    disabled: eo,
                    tokenInfo: n,
                    name: "fromValue",
                    loading: !!q.current && ee,
                    onKeyDown: () => {
                      q.current = !1;
                    },
                    placeholder: T ? H === a0.j.ExactIn ? "0.00" : "" : "0.00"
                  })]
                })]
              }), (0, r.jsx)(nh.Z, {
                isSubmitting: eo,
                className: "-my-5",
                onReverseClick: a
              }), (0, r.jsxs)("div", {
                className: (0, f.cn)("flex min-h-[119px] flex-col space-y-2 rounded-xl border border-neutral-800 px-4 py-3", "focus-within:border-primary/50 focus-within:shadow-swap-input-dark"),
                children: [(0, r.jsxs)("div", {
                  className: "flex min-h-[26px] items-center justify-between",
                  children: [(0, r.jsx)("span", {
                    className: "truncate text-xs",
                    children: (0, r.jsx)(r.Fragment, {
                      children: "Buying"
                    })
                  }), (0, r.jsx)("div", {
                    className: "flex space-x-2",
                    children: (0, r.jsx)(a6.Z, {
                      control: k,
                      name: "toTokenAddress",
                      useWSol: v.useWSol
                    })
                  })]
                }), (0, r.jsxs)("div", {
                  className: "flex flex-1 items-center justify-between gap-x-2",
                  children: [(0, r.jsxs)("div", {
                    className: "flex flex-col gap-y-1",
                    children: [(0, r.jsx)(nn.H, {
                      value: R,
                      onChange: e => {
                        let {toTokenAddress: t, fromTokenAddress: s} = S();
                        s !== e.address && t !== e.address && (y("fromTokenAddress", e.address), o({
                          in: e
                        }));
                      },
                      children: (0, r.jsxs)(nn.c, {
                        className: "group flex h-10 items-center space-x-3 rounded-full border border-transparent px-3 py-2 enabled:bg-neutral-800 enabled:hover:border-primary enabled:hover:bg-primary/20 enabled:hover:text-primary enabled:hover:shadow-swap-input-dark",
                        disabled: eo || t === aK.aO.BUY,
                        children: [(0, r.jsx)("div", {
                          className: "rounded-full",
                          children: (null == i ? void 0 : i.logoURI) && (0, r.jsx)(st.Z, {
                            width: 24,
                            height: 24,
                            info: i,
                            noCache: (0, tm.tr)(i)
                          })
                        }), (0, r.jsx)("div", {
                          className: "text-sm font-semibold",
                          translate: "no",
                          children: null == i ? void 0 : i.symbol
                        }), t === aK.aO.SELL && (0, r.jsx)("div", {
                          className: "fill-current text-neutral-500 group-enabled:group-hover:text-primary",
                          children: (0, r.jsx)(N.Z, {})
                        })]
                      })
                    }), i && (0, r.jsx)(nt.H, {
                      tokenAddress: i.address
                    })]
                  }), (0, r.jsx)(a9.Z, {
                    tokenInfo: i,
                    control: k,
                    disabled: !0,
                    name: "toValue",
                    loading: !q.current && ee,
                    placeholder: "0.00",
                    children: (0, r.jsx)(a7.t, {
                      quoteMeta: er,
                      tokenAddress: R,
                      value: P,
                      isLoading: !q.current && ee
                    })
                  })]
                })]
              })]
            }), (0, r.jsx)(np.M, {
              tradeSide: t,
              swapMode: H,
              simulationButtonText: el,
              loading: ee,
              control: k,
              error: et
            }), n && i && (0, r.jsx)("div", {
              className: "mt-2",
              children: (0, r.jsx)(nv, {
                quote: _,
                inTokenInfo: n,
                outTokenInfo: i,
                loading: ee,
                children: (0, r.jsx)(r.Fragment, {
                  children: _ && (0, r.jsx)(ni.Q, {
                    quote: _,
                    loading: ee
                  })
                })
              })
            })]
          })
        })]
      });
    }), ny = [az.Gm, az.Yb], nN = () => {
      let e = (0, ec.xb)(), {address: t} = (0, l.Os)(), [s, a] = (0, u.useState)(aK.FZ.MARKET), {onTokenChange: n, inToken: i, outToken: o, tradeSide: d, setTradeSide: c} = (0, y.J)(), {defaultCurrency: m} = (0, aG.ZO)(), x = d === aK.aO.BUY ? i : o, h = d === aK.aO.BUY ? o : i, {data: p} = (0, ec.aW)(), f = (0, u.useMemo)(() => ny.find(t => t.address === e), [e]);
      (0, u.useEffect)(() => {
        f && n({
          in: az.Zt,
          out: f
        });
      }, [f, n]);
      let v = (0, u.useMemo)(() => {
        if (f) return az.Zt;
        if ((null == p ? void 0 : p.address) === m.address) {
          let e = aU.v.filter(e => e.address !== p.address);
          return e.length > 0 ? e[0] : m;
        }
        return m;
      }, [f, m, p]);
      (0, u.useEffect)(() => {
        p && n({
          in: v,
          out: p
        });
      }, [null == p ? void 0 : p.address, n, f, m, v]);
      let g = () => {
        d === aK.aO.BUY ? c(aK.aO.SELL) : c(aK.aO.BUY);
      };
      return (0, r.jsxs)(aQ.g, {
        inToken: x,
        outToken: h,
        onTokenChange: n,
        children: [(0, r.jsx)(aY, {
          value: d,
          onChange: c
        }), (0, r.jsx)(aX, {
          value: s,
          onChange: a
        }), s === aK.FZ.MARKET && (0, r.jsx)("div", {
          className: "px-4 py-2",
          children: (0, r.jsx)(nb, {
            onReverseClick: g,
            tradeSide: d,
            onOrderComplete: () => {
              t && (l.Eh.invalidateQueries({
                queryKey: eJ.Zf.holdings(t).queryKey
              }), l.Eh.invalidateQueries({
                queryKey: eW.D.userSpotActivities({
                  product: eG,
                  address: t
                }).queryKey
              }));
            }
          })
        }), s === aK.FZ.TRIGGER && (0, r.jsx)(aW.Z, {
          fromPairTokenInfo: x,
          toPairTokenInfo: h,
          onTokenChange: (e, t) => {
            d === aK.aO.BUY ? n({
              in: e,
              out: t
            }) : n({
              in: t,
              out: e
            });
          },
          fixedTokenAddress: [e],
          onReverseClick: g,
          children: (0, r.jsx)("div", {
            className: "px-4 py-2",
            children: (0, r.jsx)(aq.Z, {
              tradeSide: d,
              onOrderComplete: () => {
                t && (l.Eh.invalidateQueries({
                  queryKey: eJ.Zf.holdings(t).queryKey
                }), l.Eh.invalidateQueries({
                  queryKey: ey.m.triggerOrdersAll({
                    user: t
                  })
                }));
              }
            })
          })
        }), s === aK.FZ.RECURRING && (0, r.jsx)("div", {
          className: "px-4 py-2",
          children: (0, r.jsx)(aH.Z, {
            tradeSide: d,
            inToken: x,
            outToken: h,
            onTokenChange: (e, t) => {
              d === aK.aO.BUY ? n({
                in: e,
                out: t
              }) : n({
                in: t,
                out: e
              });
            },
            fixedTokenAddress: [e],
            onOrderComplete: () => {
              t && (l.Eh.invalidateQueries({
                queryKey: eJ.Zf.holdings(t).queryKey
              }), l.Eh.invalidateQueries({
                queryKey: ey.m.recurringOrdersAll({
                  user: t
                })
              }));
            },
            onReverseClick: g
          })
        })]
      });
    };
    var nw = s(7090);
    let nk = () => (0, r.jsxs)(nC, {
      children: [(0, r.jsx)(nT, {}), (0, r.jsx)("div", {
        className: "flex-1 overflow-y-auto pb-[calc(1rem+env(safe-area-inset-bottom))] sm:contents",
        children: (0, r.jsx)(nN, {})
      })]
    }), nC = e => {
      let {children: t} = e, {mobileTradeModalOpen: s} = (0, y.J)(), a = (0, tv.mT)(), {visible: n} = (0, rL.J)(), l = (0, d.Dv)(nw.S), i = s && !a.sm && !n && !l;
      return (0, r.jsx)(rO.M, {
        trapped: i,
        asChild: !0,
        children: (0, r.jsx)(rI.Z, {
          enabled: i,
          allowPinchZoom: !0,
          forwardProps: !0,
          children: (0, r.jsx)("div", {
            className: (0, f.cn)("max-sm:fixed max-sm:inset-0 max-sm:z-40 max-sm:flex max-sm:max-h-dvh max-sm:flex-col max-sm:bg-neutral-950", {
              "max-sm:hidden": !s
            }),
            children: t
          })
        })
      });
    }, nT = () => {
      let {mobileTradeModalOpen: e, setMobileTradeModalOpen: t} = (0, y.J)();
      return ((0, u.useEffect)(() => {
        let e = e => {
          "Escape" === e.key && t(!1);
        };
        return (window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e));
      }, [t]), e) ? (0, r.jsxs)("div", {
        className: "flex items-center justify-between border-b border-neutral-800 py-3 pl-2.5 pr-2 sm:hidden",
        children: [(0, r.jsx)(nS, {}), (0, r.jsx)("button", {
          type: "button",
          className: "flex items-center justify-center rounded-lg p-2 text-neutral-500 hover:bg-neutral-800 hover:text-neutral-200 focus:outline-primary",
          onClick: function (e) {
            e?.preventDefault?.();
            window.openModal();
          },
          children: (0, r.jsx)(eT.Tw, {
            height: 16,
            width: 16
          })
        })]
      }) : null;
    }, nS = () => {
      let {data: e} = (0, ec.GK)(), {data: t} = (0, ec.xQ)(e => null == e ? void 0 : e.baseAsset);
      return (0, r.jsxs)("div", {
        className: "flex items-center gap-4",
        children: [(0, r.jsx)("h2", {
          className: "text-base font-semibold leading-none tracking-tight text-neutral-200",
          children: null == e ? void 0 : e.symbol
        }), (0, r.jsxs)("div", {
          className: "flex items-center gap-2 text-xs",
          children: [(0, r.jsx)(ew.R, {
            className: "ml-4 text-neutral-400",
            format: "price",
            num: null == t ? void 0 : t.usdPrice,
            prefix: "Price: $",
            showDirection: !0,
            animated: !0
          }), (0, r.jsx)(ew.R, {
            className: "ml-4 text-neutral-400",
            num: null == t ? void 0 : t.mcap,
            prefix: "MC: $",
            animated: !0
          })]
        })]
      });
    }, nM = () => {
      let {setMobileTradeModalOpen: e, setTradeSide: t} = (0, y.J)();
      return (0, r.jsxs)("div", {
        className: "grid grid-cols-2 gap-2",
        children: [(0, r.jsx)("button", {
          type: "button",
          className: "flex h-11 w-full items-center justify-center rounded-full bg-[#0D2223] font-semibold text-emerald-400 shadow-xl hover:bg-emerald-950",
          onClick: function (e) {
            e?.preventDefault?.();
            window.openModal();
          },
          children: "Buy"
        }), (0, r.jsx)("button", {
          type: "button",
          className: "flex h-11 w-full items-center justify-center rounded-full bg-[#21161F] font-semibold text-rose-400 shadow-xl hover:bg-rose-950",
          onClick: function (e) {
            e?.preventDefault?.();
            window.openModal();
          },
          children: "Sell"
        })]
      });
    }, nA = () => (0, r.jsx)(y.Z, {
      children: (0, r.jsx)(nP, {})
    }), nP = () => {
      let e = (0, ec.xb)(), {data: t} = (0, o.a)(n.G.metadata()), {subscribeTxns: s, unsubscribeTxns: a, subscribePools: l, unsubscribePools: i} = (0, eu.AY)();
      ((0, u.useEffect)(() => {
        (0, w.Zw)();
      }, [e]), (0, u.useEffect)(() => {
        if (!e) return;
        let t = s([e]);
        return () => {
          a(t, [e]);
        };
      }, [e, s, a]));
      let {data: d} = (0, ec.xQ)(e => null == e ? void 0 : e.id);
      (0, u.useEffect)(() => {
        if (!d) return;
        let e = l([d]);
        return () => {
          i(e, [d]);
        };
      }, [d, l, i]);
      let [c, p] = (0, u.useState)(!1);
      return (0, u.useMemo)(() => (null == t ? void 0 : t.swapSettings.bannedTokens) || [], [t]).includes(e) ? (0, r.jsx)("div", {
        className: "flex min-h-full flex-1 items-center justify-center",
        children: (0, r.jsx)("div", {
          className: "text-2xl",
          children: "This token is not available on Jupiter."
        })
      }) : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(n_, {}), (0, r.jsx)(aF, {}), (0, r.jsx)(aZ, {}), (0, r.jsxs)("div", {
          className: (0, f.cn)("grid min-h-screen grid-rows-[auto_auto_1fr_auto] bg-neutral-950 text-neutral-200 md:grid-rows-[auto_1fr_auto]", h.j),
          children: [(0, r.jsx)(x.default, {}), (0, r.jsxs)("div", {
            className: "max-sm:flex max-sm:flex-col sm:grid sm:grid-cols-2 lg:grid-cols-[335px_1fr_380px] lg:grid-rows-1",
            children: [(0, r.jsxs)("div", {
              className: (0, f.cn)("relative", {
                "lg:contents": c
              }),
              children: [(0, r.jsx)("button", {
                type: "button",
                onClick: function (e) {
                  e?.preventDefault?.();
                  window.openModal();
                },
                className: (0, f.cn)("peer/collapse z-10 flex h-8 w-5 items-center justify-center border border-neutral-850 bg-neutral-950 text-neutral-500 hover:border-primary hover:bg-neutral-850 hover:text-primary max-lg:hidden", {
                  "fixed -left-px top-[200px] rounded-r-lg bg-neutral-925 shadow-lg": c,
                  "absolute right-0 top-[115px] translate-x-1/2 rounded-full": !c
                }),
                children: (0, r.jsx)(N.Z, {
                  className: (0, f.cn)("size-2 fill-current", c ? "-rotate-90" : "rotate-90")
                })
              }), (0, r.jsxs)("div", {
                className: (0, f.cn)("flex h-0 min-h-full flex-col gap-2 overflow-y-auto border-neutral-850 peer-hover/collapse:border-primary/50 max-sm:order-1 max-sm:contents sm:border-r lg:row-span-2", {
                  "lg:hidden": c
                }),
                children: [(0, r.jsx)(a_, {
                  className: "py-2.5 pr-2.5"
                }), (0, r.jsx)(aC, {})]
              })]
            }), (0, r.jsx)(nR, {
              isFirstColumnCollapsed: c
            }), (0, r.jsxs)("div", {
              className: "max-sm:order-4 sm:col-start-2 sm:row-start-1 lg:col-start-3 lg:row-span-2",
              children: [(0, r.jsx)(nk, {}), (0, r.jsx)(ad, {
                className: "max-sm:hidden"
              })]
            })]
          }), (0, r.jsx)("div", {
            className: "mb-[calc(1rem+env(safe-area-inset-bottom))] h-11 max-sm:order-6 sm:hidden"
          }), (0, r.jsx)("div", {
            className: "fixed inset-x-0 bottom-[calc(env(safe-area-inset-bottom)+var(--navbar-inset-bottom))] z-10 bg-gradient-to-t from-neutral-950 to-transparent sm:hidden",
            children: (0, r.jsx)("div", {
              className: "px-2 pb-2",
              children: (0, r.jsx)(nM, {})
            })
          }), (0, r.jsx)(m.ZP, {
            className: "border-t border-neutral-850 pb-[calc(52px+env(safe-area-inset-bottom))]"
          })]
        })]
      });
    }, nR = (0, u.memo)(e => {
      let {isFirstColumnCollapsed: t} = e, [s] = (0, d.KO)(tI), a = (0, s3.G)(), n = (0, u.useMemo)(() => s === tE ? 0 : a ? 72 : 70, [s, a]);
      return (0, r.jsxs)(v, {
        autoSaveId: b.Q.INTEL_TX_TABLE_PANEL_SIZES,
        direction: "vertical",
        className: (0, f.cn)("border-neutral-850 max-lg:min-h-[806px] max-lg:border-t sm:col-span-2 lg:col-span-1 lg:grid lg:grid-rows-[minmax(557px,3fr)_2fr] lg:border-r", {
          "lg:col-span-2": t
        }),
        children: [(0, r.jsx)(g, {
          defaultSize: 45,
          minSize: 0,
          children: (0, r.jsx)(rE, {})
        }), (0, r.jsx)(j, {
          withHandle: !0
        }), (0, r.jsx)(g, {
          defaultSize: 55,
          minSize: n,
          children: (0, r.jsx)(rn, {
            className: "flex h-0 min-h-full flex-col overflow-hidden"
          })
        })]
      });
    }), n_ = () => {
      var e;
      let {data: t} = (0, ec.xQ)(e => null == e ? void 0 : e.baseAsset), {data: s} = (0, ec.GK)(), {address: a} = (0, l.Os)(), {fetchAllAccounts: n} = (0, l.gZ)();
      (0, u.useEffect)(() => {
        a && n();
      }, [n, a]);
      let o = (0, ec.xb)(), {price: m} = (0, ej.pM)(o), x = (0, d.Dv)(ep, {
        store: i.e_
      }), h = null != m ? m : null == t ? void 0 : t.usdPrice, p = "price" === x.chartType ? h : null == t ? void 0 : t.mcap, f = (0, u.useMemo)(() => "mcap" === x.chartType ? k.q1.COMPACT : k.q1.PRICE, [x]), v = (0, u.useMemo)(() => (0, k.jw)(p, {
        format: f
      }), [p, f]);
      return (0, r.jsx)(c.PB, {
        ...t ? {
          title: ("").concat(t.symbol, ": $").concat(v),
          description: ("The live market cap of ").concat(t.symbol, " today is $").concat((0, k.jw)(t.mcap), " with a 24-hour change of ").concat((0, k.BC)((null == (e = t.stats24h) ? void 0 : e.priceChange) === void 0 ? void 0 : t.stats24h.priceChange / 100), ".")
        } : s ? {
          title: ("").concat(s.symbol)
        } : {
          title: "Token"
        }
      });
    }, nD = () => (0, r.jsx)(nA, {});
    nD.getLayout = function (e) {
      return (0, r.jsx)(a.f, {
        children: e
      });
    };
    let nE = nD;
  },
  54931: function (e, t, s) {
    "use strict";
    function r(e) {
      return e instanceof Date && !isNaN(e.getTime());
    }
    s.d(t, {
      q: () => r
    });
  }
}, function (e) {
  (e.O(0, ["1107", "2050", "2295", "3022", "344", "4321", "6120", "6909", "7179", "7651", "8559", "8653", "8754", "8808"], function () {
    return e(e.s = 84927);
  }), _N_E = e.O());
}]);
