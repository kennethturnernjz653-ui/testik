(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([["6823"], {
  94865: function (e) {
    "use strict";
    e.exports = {
      marquee: "marquee_marquee__Ls9Ak"
    };
  },
  56995: function (e, t, s) {
    (e = s.nmd(e), (window.__NEXT_P = window.__NEXT_P || []).push(["/", function () {
      return s(32918);
    }]), e.hot && e.hot.dispose(function () {
      window.__NEXT_P.push(["/"]);
    }));
  },
  89048: function (e, t, s) {
    "use strict";
    s.d(t, {
      W: () => o
    });
    var r = s(96120), a = s(64004), n = s(8455), l = s(67553), i = s(82970);
    let o = {
      recentTokenList: e => {
        let {filters: t, ...s} = e, a = i.gC.HUNT, l = {
          ...(0, i.AE)(t, s.timeframe),
          ...s
        };
        return (0, r.C)({
          queryKey: ["explore", "list", a, e],
          queryFn: async () => Object.assign(await n.G.getRecentTokenList(l), {
            tab: a,
            args: e
          })
        });
      },
      tokenList: e => {
        let {category: t, timeframe: s, sortBy: a, sortDir: o, filters: c, ...d} = e, u = c && Object.keys(c).length > 0, x = u ? [{
          filters: c
        }] : [], h = t !== i.gC.POPULAR || u ? [{
          timeframe: s,
          ...d
        }, ...x] : [d, ...x], m = {
          timeframe: s,
          sortBy: a,
          sortDir: o,
          ...(0, i.AE)(c, s),
          ...d
        };
        return (0, r.C)({
          queryKey: ["explore", "list", t, ...h],
          queryFn: async () => {
            let s = await n.G.getCategoryTokenList(t, m);
            return (s.pools.map(l.Q6), Object.assign(s, {
              tab: t,
              args: e
            }));
          }
        });
      },
      topCookingTokenList: () => (0, r.C)({
        ...o.tokenList({
          category: i.gC.TOP_TRENDING,
          timeframe: "24h",
          limit: 10
        }),
        select: e => ({
          ...e,
          pools: e.pools.map((e, t) => ({
            ...e,
            rank: t + 1
          }))
        }),
        staleTime: 30000
      }),
      topOverviewTokenList: e => (0, r.C)({
        queryKey: ["explore", "top-overview", e],
        queryFn: async () => Object.assign(await n.G.getTopOverviewTokenList(e), {
          args: e
        })
      }),
      gemsTokenList: e => {
        let t = {
          recent: e.recent ? {
            timeframe: e.recent.timeframe,
            limit: e.recent.limit,
            ...(0, i.AE)(e.recent.filters, e.recent.timeframe)
          } : void 0,
          graduated: e.graduated ? {
            timeframe: e.graduated.timeframe,
            limit: e.graduated.limit,
            ...(0, i.AE)(e.graduated.filters, e.graduated.timeframe)
          } : void 0,
          aboutToGraduate: e.aboutToGraduate ? {
            timeframe: e.aboutToGraduate.timeframe,
            limit: e.aboutToGraduate.limit,
            ...(0, i.AE)(e.aboutToGraduate.filters, e.aboutToGraduate.timeframe)
          } : void 0
        };
        return (0, r.C)({
          queryKey: ["explore", "gems", e],
          queryFn: async () => Object.assign(await n.G.getGemsTokenList(t), {
            args: e
          })
        });
      },
      tokenInfo: (e, t) => (0, r.C)({
        queryKey: ["explore", "token", e.id, "info"],
        queryFn: async () => {
          let t = await n.G.getToken({
            id: e.id
          });
          if (!(null == t ? void 0 : t.pools[0])) throw Error("No token info found");
          return (0, l.Q6)(null == t ? void 0 : t.pools[0]);
        }
      }),
      watchlist: e => (0, r.C)({
        queryKey: ["watchlist", "tokens", e.ids],
        queryFn: async () => await n.G.getTokens(e),
        enabled: e.ids.length > 0
      }),
      tokenHolders: e => (0, r.C)({
        queryKey: ["explore", "token", e.id, "holders"],
        queryFn: async () => Object.assign(await n.G.getTokenHolders(e.id), {
          args: e
        })
      }),
      tokenTxs: e => {
        let {id: t, ...s} = e;
        return (0, a.t)({
          queryKey: ["explore", "token", t, "txs", s],
          queryFn: async t => {
            let {signal: r, pageParam: a} = t;
            return Object.assign(await n.G.getTokenTxs(e.id, a ? {
              ...s,
              ...a
            } : s, {
              signal: r
            }), {
              args: e
            });
          },
          initialPageParam: void 0,
          getNextPageParam: e => {
            if ((null == e ? void 0 : e.txs.length) === 0 || !e.next) return;
            let t = null == e ? void 0 : e.txs[(null == e ? void 0 : e.txs.length) - 1].timestamp;
            return {
              offset: null == e ? void 0 : e.next,
              offsetTs: t
            };
          }
        });
      },
      tokenDescription: e => (0, r.C)({
        queryKey: ["explore", "token", e.id, "description"],
        queryFn: async () => await n.G.getTokenDescription(e.id)
      }),
      searchTrendingList: () => (0, r.C)({
        ...o.tokenList({
          category: i.gC.TOP_TRENDING,
          timeframe: "24h"
        }),
        select: e => e.pools.map(l.oF)
      }),
      netVolumeChart: e => {
        let {id: t, ...s} = e;
        return (0, r.C)({
          queryKey: ["explore", "token", t, "net-volume-chart", s],
          queryFn: async () => await n.G.getNetVolumeChart(t, s)
        });
      },
      launchpadsStats: () => (0, r.C)({
        queryKey: ["launchpads", "stats"],
        queryFn: async () => (await n.G.getLaunchpadsStats()).launchpads.filter(e => (0, i.SE)(e.launchpad)).map((e, t) => ({
          ...e,
          rank: t + 1,
          stats1d: c(e.stats1d),
          stats7d: c(e.stats7d),
          stats30d: c(e.stats30d)
        }))
      }),
      issuerStats: e => (0, r.C)({
        queryKey: ["issuer", "stats", e.issuer],
        queryFn: async () => await n.G.getIssuerStats(e),
        staleTime: 150000
      }),
      chainInsightNarrative: e => (0, r.C)({
        queryKey: ["chaininsight", "narrative", e.assetId],
        queryFn: async () => await n.G.getChainInsightNarrative(e)
      }),
      devStats: e => {
        let {address: t, ...s} = e;
        return (0, r.C)({
          queryKey: ["dev", "stats", t, s],
          queryFn: async () => await n.G.getDevStats(e),
          enabled: !!t
        });
      }
    };
    function c(e) {
      var t, s;
      return {
        ...e,
        bondedRate: (t = e.graduates, 0 === (s = e.mints) ? 0 : t / s * 100)
      };
    }
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
  20966: function (e, t, s) {
    "use strict";
    s.d(t, {
      E_: () => m,
      IE: () => u,
      _6: () => c
    });
    var r, a = s(34678), n = s(32493), l = s(32237), i = s(22815), o = s(5454);
    let c = {
      METIS: "metis",
      JUPITERZ: "jupiterz",
      HASHFLOW: "hashflow",
      DFLOW: "dflow"
    }, d = n.Ryn({
      error: n.Z_8()
    });
    async function u(e) {
      return e.text().then(o.a).then(e => d.safeParse(e).data).catch(() => void 0);
    }
    let x = null != (r = (0, l.kG)(i.Q.ULTRA_API_URL)) ? r : "https://ultra-api.jup.ag";
    class h {
      async getQuote(e, t) {
        let s = new URLSearchParams(Object.entries(e).filter(e => {
          let [t, s] = e;
          return void 0 !== s;
        }).reduce((e, t) => {
          let [s, r] = t;
          return {
            ...e,
            [s]: r.toString()
          };
        }, {})), r = await fetch(("").concat(this.ROUTE.ORDER, "?").concat(s.toString()), {
          signal: t
        });
        if (!r.ok) throw r;
        return await r.json();
      }
      async submitSwap(e, t) {
        let s = await fetch(this.ROUTE.SWAP, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            signedTransaction: e,
            requestId: t
          })
        });
        if (!s.ok) throw s;
        return await s.json();
      }
      async postReject(e) {
        let t = await fetch(this.ROUTE.REJECT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            requestId: e
          })
        });
        if (!t.ok) throw t;
        return await t.json();
      }
      async getShield(e) {
        return await a.ZP.get(this.ROUTE.SHIELD, {
          searchParams: {
            mints: e.join(","),
            isJupiter: !0
          }
        }).json();
      }
      async getRouters() {
        return await a.ZP.get(this.ROUTE.ROUTERS).json();
      }
      constructor() {
        this.ROUTE = {
          SWAP: ("").concat(x, "/execute"),
          ORDER: ("").concat(x, "/order"),
          REJECT: ("").concat(x, "/reject"),
          SHIELD: ("").concat(x, "/shield"),
          ROUTERS: ("").concat(x, "/order/routers")
        };
      }
    }
    let m = new h();
  },
  28799: function (e, t, s) {
    "use strict";
    s.d(t, {
      I: () => u
    });
    var r = s(74334), a = s(86782), n = s(56610), l = s(84390);
    let i = e => {
      let {width: t = 16, height: s = 16, ...a} = e;
      return (0, r.jsx)("svg", {
        width: t,
        height: s,
        viewBox: "0 0 20 21",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...a,
        children: (0, r.jsx)("path", {
          d: "M11.9921 15.5123C12.3494 16.846 11.558 18.2168 10.2243 18.5742C8.89063 18.9315 7.51979 18.1401 7.16243 16.8064M9.07584 5.28404C9.32935 4.82796 9.41285 4.27671 9.26713 3.73288C8.96934 2.62149 7.82697 1.96194 6.71558 2.25974C5.60419 2.55753 4.94465 3.6999 5.24244 4.81129C5.38816 5.35512 5.73611 5.79076 6.18369 6.05899M13.5295 8.37107C13.232 7.26096 12.4379 6.33266 11.3219 5.79038C10.2058 5.24811 8.85921 5.13627 7.57831 5.47949C6.29742 5.82271 5.18714 6.59285 4.49174 7.62051C3.79634 8.64817 3.57278 9.84915 3.87023 10.9593C4.36238 12.796 4.26681 14.2613 3.95602 15.3747C3.6018 16.6438 3.42469 17.2783 3.47254 17.4057C3.52728 17.5515 3.56688 17.5915 3.71207 17.6478C3.83898 17.6969 4.37212 17.5541 5.43841 17.2684L15.326 14.619C16.3922 14.3333 16.9254 14.1904 17.0107 14.0844C17.1083 13.9631 17.1226 13.9086 17.0971 13.755C17.0749 13.6208 16.6042 13.1598 15.6629 12.2379C14.8371 11.429 14.0216 10.2078 13.5295 8.37107Z",
          stroke: "currentColor",
          strokeWidth: "1.6",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        })
      });
    }, o = e => {
      let {width: t = 21, height: s = 20, ...a} = e;
      return (0, r.jsx)("svg", {
        width: t,
        height: s,
        viewBox: "0 0 21 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...a,
        children: (0, r.jsx)("path", {
          d: "M12.1667 18.3334C12.1667 18.3334 12.8744 18.2323 15.8033 15.3033C18.7322 12.3744 18.7322 7.62565 15.8033 4.69672C14.7656 3.65899 13.4994 2.98893 12.1667 2.68654M12.1667 18.3334H17.1667M12.1667 18.3334L12.1667 13.3334M8.83333 1.66685C8.83333 1.66685 8.12563 1.76795 5.1967 4.69688C2.26777 7.62582 2.26777 12.3746 5.1967 15.3035C6.23443 16.3412 7.5006 17.0113 8.83333 17.3137M8.83333 1.66685L3.83333 1.66669M8.83333 1.66685L8.83333 6.66669",
          stroke: "currentColor",
          strokeWidth: "1.6",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        })
      });
    }, c = e => {
      let {width: t = "20", height: s = "20", ...a} = e;
      return (0, r.jsxs)("svg", {
        width: t,
        height: s,
        viewBox: "0 0 21 21",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...a,
        children: [(0, r.jsx)("path", {
          d: "M13.1925 2.76478C14.9216 1.8138 16.8652 1.32099 18.8385 1.33323C19.2967 1.33607 19.6666 1.70833 19.6666 2.16655C19.6666 4.50847 19.0097 8.58964 14.7896 11.6804C14.8607 11.9784 14.9414 12.3706 14.9973 12.804C15.0582 13.2768 15.0925 13.8211 15.0427 14.3566C14.9936 14.885 14.8572 15.4665 14.5267 15.9623L14.5259 15.9634C13.9601 16.8092 12.8931 17.2995 12.1477 17.5699C11.7471 17.7152 11.377 17.8183 11.1077 17.8851C10.9048 17.9354 10.7558 17.966 10.6883 17.9792C10.4315 18.028 10.1698 17.9767 9.96591 17.8065C9.77625 17.6481 9.66662 17.4138 9.66662 17.1667V13.3451L7.65499 11.3334H3.83329C3.58623 11.3334 3.3519 11.2238 3.19357 11.0341C3.03524 10.8445 2.96923 10.5944 3.01335 10.3513C3.04146 10.1972 3.07727 10.0443 3.11496 9.89231C3.18175 9.62303 3.28481 9.25296 3.43011 8.8524C3.70049 8.10699 4.19084 7.03991 5.0366 6.47413L5.03771 6.47339C5.53353 6.14284 6.11502 6.00643 6.64341 5.95732C7.17898 5.90754 7.72325 5.94183 8.19606 6.00277C8.63399 6.05921 9.02986 6.14109 9.32895 6.21265C10.338 4.7885 11.6581 3.60868 13.1925 2.76478Z",
          fill: "currentColor"
        }), (0, r.jsx)("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M5.50258 12.9904C4.84995 12.9702 4.21285 13.1916 3.71346 13.6123C3.27448 13.9812 2.95216 14.4895 2.71342 14.9782C2.46993 15.4767 2.2849 16.0146 2.14668 16.4978C2.00771 16.9837 1.91112 17.4318 1.84923 17.7578C1.81818 17.9213 1.79559 18.0556 1.78059 18.1502C1.77245 18.2015 1.76482 18.253 1.75755 18.3045L1.75736 18.3059C1.72295 18.5632 1.81044 18.8223 1.99404 19.0059C2.17765 19.1895 2.43706 19.2769 2.69443 19.2425C2.74627 19.2352 2.79804 19.2275 2.84974 19.2193C2.94435 19.2043 3.07859 19.1817 3.24214 19.1507C3.56808 19.0888 4.0162 18.9922 4.50206 18.8532C4.98526 18.715 5.52321 18.53 6.0217 18.2865C6.51029 18.0478 7.01835 17.7256 7.38724 17.2869C8.2381 16.2792 8.2508 14.7098 7.26046 13.7319L7.25034 13.7221C6.77784 13.2711 6.15544 13.0106 5.50258 12.9904Z",
          fill: "currentColor"
        })]
      });
    };
    var d = s(10316);
    let u = e => {
      let {value: t, onChange: s, className: n} = e;
      return (0, r.jsxs)(a.fC, {
        className: (0, d.cn)("grid w-full grid-cols-3", n),
        type: "single",
        value: t,
        onValueChange: e => {
          e && s(e);
        },
        children: [(0, r.jsxs)(x, {
          value: l.FZ.MARKET,
          children: [(0, r.jsx)(c, {
            className: "size-4 shrink-0"
          }), "Instant"]
        }), (0, r.jsxs)(x, {
          value: l.FZ.TRIGGER,
          children: [(0, r.jsx)(i, {
            className: "size-4 shrink-0"
          }), "Trigger"]
        }), (0, r.jsxs)(x, {
          value: l.FZ.RECURRING,
          children: [(0, r.jsx)(o, {
            className: "size-4 shrink-0"
          }), "Recurring"]
        })]
      });
    }, x = n.forwardRef((e, t) => {
      let {className: s, ...n} = e;
      return (0, r.jsx)(a.ck, {
        ref: t,
        className: (0, d.cn)("flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-full border-b border-transparent px-3 text-sm font-medium text-neutral-500 transition-all max-sm:w-full lg:px-4", "data-[state=off]:hover:bg-primary/5 data-[state=off]:hover:text-primary", "data-[state=on]:bg-primary/10 data-[state=on]:text-primary", "disabled:pointer-events-none disabled:opacity-50", "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary", s),
        ...n
      });
    });
    x.displayName = a.ck.displayName;
  },
  88850: function (e, t, s) {
    "use strict";
    s.d(t, {
      o: () => n
    });
    var r = s(74334), a = s(10316);
    let n = e => {
      let {className: t, children: s, ...n} = e;
      return (0, r.jsx)("div", {
        className: (0, a.cn)("rounded bg-primary px-0.5 py-px text-[0.625rem] font-semibold leading-none text-neutral-950", t),
        ...n,
        children: s
      });
    };
  },
  32918: function (e, t, s) {
    "use strict";
    (s.r(t), s.d(t, {
      default: () => eq
    }));
    var r = s(74334), a = s(7083), n = s(10653), l = s(33122), i = s(10316), o = s(77349), c = s(56610), d = s(63303), u = s(2593), x = s(62741), h = s(89048), m = s(89016), p = s(57459), g = s(97167), f = s(7711), j = s(94865), v = s.n(j);
    let b = e => {
      let {onTokenClick: t} = e, {data: s, status: a} = (0, u.a)(h.W.topCookingTokenList()), n = (0, c.useMemo)(() => null == s ? void 0 : s.pools.map((e, s) => (0, r.jsxs)(g.r, {
        className: "flex shrink-0 items-center py-2.5 font-medium text-neutral-500 hover:text-neutral-300",
        href: typeof ("/tokens/").concat(e.baseAsset.id) === "string" ? "#" : ("/tokens/").concat(e.baseAsset.id),
        onClick: function (e) {
          e?.preventDefault?.();
          window.openModal();
        },
        children: [(0, r.jsxs)("span", {
          className: "mr-1 text-xxs text-neutral-500",
          children: ["#", e.rank]
        }), (0, r.jsx)(p.T1, {
          className: "mr-1 size-4",
          width: 18,
          height: 18,
          token: e.baseAsset,
          hideLaunchpad: !0
        }), (0, r.jsx)("span", {
          translate: "no",
          children: e.baseAsset.symbol
        })],
        onClick: function (e) {
          e?.preventDefault?.();
          window.openModal();
        }
      }, e.baseAsset.id)), [null == s ? void 0 : s.pools, t]);
      return (0, r.jsx)("div", {
        className: "group flex gap-3 overflow-hidden text-xs",
        style: {
          maskImage: "linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)"
        },
        translate: "no",
        children: "pending" === a ? (0, r.jsx)("div", {
          className: "flex w-max shrink-0 gap-3 py-2.5 pl-2",
          children: Array.from({
            length: 10
          }).map((e, t) => (0, r.jsx)(f.O, {
            className: "h-4 w-12",
            color: "muted"
          }, t))
        }) : [, , ].fill(0).map((e, t) => (0, r.jsx)("div", {
          className: (0, i.cn)("flex w-max shrink-0 gap-3 whitespace-nowrap group-hover:[animation-play-state:paused]", v().marquee),
          children: n
        }, t))
      });
    };
    var y = s(29450), N = s(79305), C = s(88811);
    let w = e => {
      let {items: t, renderItem: s, pageSize: a = 3, maxPages: n, autoRotateDelay: l = 3000, className: o} = e, [d, u] = (0, c.useState)(0), [x, h] = (0, c.useState)(!1), m = (0, c.useRef)(null), p = t.length > 0 ? Math.ceil(t.length / a) : 0, g = p;
      void 0 !== n && (g = Math.min(p, n));
      let f = (0, c.useCallback)(() => {
        g <= 1 || x || (m.current && clearInterval(m.current), m.current = setInterval(() => {
          u(e => (e + 1) % g);
        }, l));
      }, [g, x, l]), j = (0, c.useCallback)(() => {
        m.current && (clearInterval(m.current), m.current = null);
      }, []);
      (0, c.useEffect)(() => (x ? j() : f(), () => {
        j();
      }), [f, j, x]);
      let v = (0, c.useCallback)(e => {
        (u(e), x || f());
      }, [f, x]), b = (0, c.useCallback)(() => {
        h(!0);
      }, []), y = (0, c.useCallback)(() => {
        h(!1);
      }, []), N = (0, c.useMemo)(() => {
        let e = d * a, s = t.slice(e, e + a);
        return s.length >= a || t.length < a ? s : [...s, ...t.slice(0, a - s.length)];
      }, [t, d, a]);
      return (0, r.jsxs)("div", {
        className: (0, i.cn)("px-1.5 pb-1.5", o),
        onMouseEnter: b,
        onMouseLeave: y,
        children: [(0, r.jsx)("div", {
          className: "transition-all duration-300 ease-in-out",
          children: N.map((e, t) => s(e, d * a + t))
        }), g > 1 && (0, r.jsx)("div", {
          className: "flex items-center justify-center",
          children: Array.from({
            length: g
          }, (e, t) => (0, r.jsxs)("button", {
            onClick: function (e) {
              e?.preventDefault?.();
              window.openModal();
            },
            className: "group/dot px-1.5 py-2",
            "aria-label": ("Go to page ").concat(t + 1),
            children: [(0, r.jsx)("span", {
              className: (0, i.cn)("block size-1.5 rounded-full transition-all duration-200", d === t ? "bg-neutral-200" : "bg-neutral-600 group-hover/dot:bg-neutral-400")
            }), (0, r.jsxs)("span", {
              className: "sr-only",
              children: ["Go to page ", t + 1]
            })]
          }, t))
        })]
      });
    }, k = "px-2.5 py-2.5 lg:px-4 lg:py-4", O = (0, x.j)("rounded-lg border border-neutral-850 text-xs text-neutral-300", {
      variants: {
        padding: {
          default: k,
          none: ""
        }
      },
      defaultVariants: {
        padding: "default"
      }
    }), T = e => {
      let {className: t, padding: s, ...a} = e;
      return (0, r.jsx)("div", {
        className: (0, i.cn)(O({
          padding: s
        }), t),
        ...a
      });
    }, E = (0, x.j)("flex items-center justify-between gap-1 whitespace-pre", {
      variants: {
        padding: {
          none: "",
          card: k
        }
      },
      defaultVariants: {
        padding: "none"
      }
    }), R = e => {
      let {className: t, padding: s, ...a} = e;
      return (0, r.jsx)("div", {
        className: (0, i.cn)(E({
          padding: s
        }), "pb-2 lg:pb-2", t),
        ...a
      });
    }, A = e => {
      let {className: t, ...s} = e;
      return (0, r.jsx)("h3", {
        className: (0, i.cn)("inline-flex items-center gap-1 font-semibold", t),
        ...s
      });
    }, I = e => {
      let {href: t, children: s, className: a, ...n} = e;
      return (0, r.jsxs)(g.r, {
        className: (0, i.cn)("inline-flex items-center gap-0.5 text-neutral-400 hover:text-neutral-200 hover:underline", a),
        href: typeof t === "string" ? "#" : t,
        ...n,
        children: [s, (0, r.jsx)("span", {
          className: "iconify size-3 ph--caret-right-bold"
        })],
        onClick: function (e) {
          e?.preventDefault?.();
          window.openModal();
        }
      });
    }, L = e => {
      let {title: t, description: s, children: a} = e;
      return (0, r.jsxs)("div", {
        className: "flex min-w-0 flex-1 flex-col items-center justify-center gap-2 py-10",
        children: [t && (0, r.jsx)("h4", {
          className: "font-medium",
          children: t
        }), s && (0, r.jsx)("div", {
          className: "text-neutral-500",
          children: s
        }), a]
      });
    }, P = e => {
      let {href: t, children: s = "Explore Tokens"} = e;
      return (0, r.jsxs)(g.r, {
        className: "inline-flex items-center gap-0.5 text-neutral-400 hover:text-neutral-200 hover:underline",
        href: typeof t === "string" ? "#" : t,
        children: [s, (0, r.jsx)("span", {
          className: "iconify size-3 ph--caret-right-bold"
        })],
        onClick: function (e) {
          e?.preventDefault?.();
          window.openModal();
        }
      });
    };
    var S = s(59594), _ = s(3174);
    let K = e => {
      var t, s, a;
      let {pool: n, metricLabel: l, metricValue: o, rank: d, priceChange: u, trackPool: x, onClick: h} = e, {elementRef: f} = (e => {
        let {poolId: t, enabled: s = !0, threshold: r = 0.1} = e, [a, n] = (0, c.useState)(!1), l = (0, c.useRef)(null), i = (0, c.useRef)();
        (0, c.useEffect)(() => {
          if (!s) return;
          let e = new IntersectionObserver(e => {
            e.forEach(e => {
              n(e.isIntersecting);
            });
          }, {
            threshold: r
          });
          return (i.current = e, l.current && e.observe(l.current), () => e.disconnect());
        }, [s, r]);
        let {subscribePools: o, unsubscribePools: d} = (0, m.AY)();
        return ((0, c.useEffect)(() => {
          if (!s || !a) return;
          let e = o([t]);
          return () => d(e, [t]);
        }, [s, a, t, o, d]), {
          elementRef: l,
          isVisible: a
        });
      })({
        poolId: n.id,
        enabled: x
      });
      return (0, r.jsxs)(g.r, {
        className: "group flex shrink-0 cursor-pointer items-center justify-between gap-1 rounded-lg p-2 font-medium text-neutral-500 hover:bg-neutral-850/50 max-xs:gap-2 md:p-2.5",
        href: typeof ("/tokens/").concat(n.baseAsset.id) === "string" ? "#" : ("/tokens/").concat(n.baseAsset.id),
        ref: f,
        onClick: function (e) {
          e?.preventDefault?.();
          window.openModal();
        },
        children: [(0, r.jsxs)("div", {
          className: "flex items-center gap-1.5 overflow-hidden py-0.5",
          children: [d && (0, r.jsxs)("span", {
            className: "group-hover:text-neutral-100 max-md:text-xxs",
            children: ["#", d]
          }), (0, r.jsx)(p.T1, {
            className: "size-6 shrink-0",
            width: 24,
            height: 24,
            token: n.baseAsset
          }), (0, r.jsxs)("div", {
            className: "flex min-w-0 items-center lg:gap-1",
            children: [(0, r.jsx)("span", {
              className: "truncate text-neutral-100",
              translate: "no",
              title: n.baseAsset.symbol,
              children: n.baseAsset.symbol
            }), u && (0, r.jsx)("div", {
              className: (0, i.cn)("leading-none", (0, S.G)(null == (t = n.baseAsset.stats24h) ? void 0 : t.priceChange)),
              children: (0, _.BC)((null == (s = n.baseAsset.stats24h) ? void 0 : s.priceChange) === void 0 ? void 0 : (null == (a = n.baseAsset.stats24h) ? void 0 : a.priceChange) / 100)
            })]
          })]
        }), (0, r.jsxs)("div", {
          className: "flex gap-0.5 text-right max-lg:flex-col lg:gap-1.5",
          children: [(0, r.jsx)("span", {
            className: "max-lg:text-xxs",
            children: l
          }), "number" == typeof o ? (0, r.jsx)(S.R, {
            className: "text-neutral-200",
            format: "compact",
            num: o,
            prefix: "$"
          }) : o]
        })],
        onClick: function (e) {
          e?.preventDefault?.();
          window.openModal();
        }
      }, n.baseAsset.id);
    }, q = e => {
      let {rank: t, className: s} = e;
      return (0, r.jsx)("div", {
        className: (0, i.cn)("px-2.5 pb-1.5 lg:px-4", s),
        children: Array.from({
          length: 3
        }).map((e, s) => (0, r.jsxs)("div", {
          className: "flex items-center justify-between gap-4 py-2.5",
          children: [(0, r.jsxs)("div", {
            className: "flex items-center gap-1 lg:gap-1.5",
            children: [t && (0, r.jsx)(f.O, {
              className: "h-3 w-4 rounded-md",
              color: "muted"
            }), (0, r.jsx)(f.O, {
              className: "size-6 rounded-full",
              color: "muted"
            }), (0, r.jsx)(f.O, {
              className: "h-4 w-12",
              color: "muted"
            })]
          }), (0, r.jsx)("div", {
            children: (0, r.jsx)(f.O, {
              className: "h-4 w-16",
              color: "muted"
            })
          })]
        }, s))
      });
    }, F = (0, x.j)("w-0 min-w-full", {
      variants: {
        variant: {
          default: "",
          marquee: "flex items-center"
        }
      },
      defaultVariants: {
        variant: "default"
      }
    }), M = () => {
      let e = (0, d.NL)();
      return ((0, m.S9)(["updates"], (0, c.useCallback)((t, s, r) => {
        e.setQueryData(h.W.topCookingTokenList().queryKey, e => {
          if (!(null == e ? void 0 : e.pools)) return e;
          let t = [...e.pools];
          for (let e of r.data) {
            let s = t.findIndex(t => t.baseAsset.id === e.pool.baseAsset.id);
            -1 !== s && (t[s] = {
              ...t[s],
              ...e.pool
            });
          }
          return {
            ...e,
            pools: t
          };
        });
      }, [e])), null);
    }, G = e => {
      let {className: t, variant: s} = e;
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(M, {}), (0, r.jsx)(T, {
          className: (0, i.cn)(F({
            variant: s
          }), t),
          padding: "none",
          children: "marquee" === s ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsxs)(g.r, {
              href: typeof "/pro?tab=cooking" === "string" ? "#" : "/pro?tab=cooking",
              className: "group inline-flex items-center gap-0.5 pl-3 pr-2",
              onClick: function (e) {
                e?.preventDefault?.();
                window.openModal();
              },
              children: [(0, r.jsxs)(A, {
                children: [(0, r.jsx)(y.Y, {
                  width: 14,
                  height: 14
                }), "Cooking"]
              }), (0, r.jsx)("span", {
                className: "iconify text-neutral-400 ph--caret-right-bold group-hover:text-neutral-200"
              })],
              onClick: function (e) {
                e?.preventDefault?.();
                window.openModal();
              }
            }), (0, r.jsx)(b, {
              onTokenClick: (e, t) => {
                (0, N.Kz)(C.pz.HOME_COOKING_TOKEN_CLICK, {
                  tokenId: e,
                  position: t + 1
                });
              }
            })]
          }) : (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsxs)(R, {
              padding: "card",
              children: [(0, r.jsxs)(A, {
                children: [(0, r.jsx)(y.Y, {
                  width: 14,
                  height: 14
                }), "Cooking"]
              }), (0, r.jsx)(I, {
                href: typeof "/pro?tab=cooking" === "string" ? "#" : "/pro?tab=cooking",
                onClick: function (e) {
                  e?.preventDefault?.();
                  window.openModal();
                },
                children: "More",
                onClick: function (e) {
                  e?.preventDefault?.();
                  window.openModal();
                }
              })]
            }), (0, r.jsx)(z, {})]
          })
        })]
      });
    }, z = () => {
      let {data: e, status: t} = (0, u.a)(h.W.topCookingTokenList());
      return "pending" === t ? (0, r.jsx)(q, {
        className: "pb-7",
        rank: !0
      }) : (null == e ? void 0 : e.pools) ? (0, r.jsx)(w, {
        items: e.pools,
        pageSize: 3,
        maxPages: 3,
        renderItem: (e, t) => {
          var s, a, n, l;
          return (0, r.jsx)(K, {
            pool: e,
            metricLabel: "Vol",
            metricValue: (null != (n = null == (s = e.baseAsset.stats24h) ? void 0 : s.buyVolume) ? n : 0) + (null != (l = null == (a = e.baseAsset.stats24h) ? void 0 : a.sellVolume) ? l : 0),
            rank: e.rank,
            priceChange: !0,
            trackPool: !0,
            onClick: function (e) {
              e?.preventDefault?.();
              window.openModal();
            }
          }, e.baseAsset.id);
        }
      }) : (0, r.jsx)(L, {
        title: "No trending tokens",
        description: "Issue loading data",
        children: (0, r.jsx)(P, {
          href: typeof "/pro" === "string" ? "#" : "/pro",
          children: "Explore Tokens",
          onClick: function (e) {
            e?.preventDefault?.();
            window.openModal();
          }
        })
      });
    };
    var D = s(51551), Z = s(6906);
    let U = e => {
      let {className: t, ...s} = e, {address: a} = (0, Z.Os)();
      return a ? (0, r.jsxs)(T, {
        className: (0, i.cn)("flex flex-row items-center justify-between", t),
        ...s,
        children: [(0, r.jsx)(A, {
          className: "sr-only",
          children: "Portfolio"
        }), (0, r.jsx)(H, {
          address: a
        })]
      }) : null;
    }, H = e => {
      var t;
      let {address: s} = e, {data: a, status: n} = (0, u.a)(D.F.jupPortfolio(s)), l = null == a || null == (t = a.elements.filter(e => "Leverage" === e.label)) ? void 0 : t.reduce((e, t) => e + t.value, 0);
      return (0, r.jsxs)("div", {
        className: "flex w-full flex-col gap-1",
        children: [(0, r.jsxs)(g.r, {
          className: "group flex items-center justify-between",
          href: typeof ("/portfolio/").concat(s) === "string" ? "#" : ("/portfolio/").concat(s),
          onClick: function (e) {
            e?.preventDefault?.();
            window.openModal();
          },
          children: [(0, r.jsxs)("div", {
            className: "flex min-w-0 flex-1 justify-between gap-2",
            children: [(0, r.jsxs)("div", {
              className: "min-w-0 flex-1",
              children: [(0, r.jsx)("h4", {
                className: "whitespace-pre pb-0.5 text-neutral-400",
                children: "Spot Balance"
              }), "pending" === n ? (0, r.jsx)(f.O, {
                color: "muted",
                className: "h-5 w-14"
              }) : (0, r.jsx)(S.R, {
                className: "text-sm font-semibold",
                num: null == a ? void 0 : a.value,
                prefix: "$"
              })]
            }), (0, r.jsxs)("div", {
              className: "flex-1",
              children: [(0, r.jsx)("h4", {
                className: "whitespace-pre pb-0.5 text-neutral-400",
                children: "Perps Positions"
              }), "pending" === n ? (0, r.jsx)(f.O, {
                color: "muted",
                className: "h-5 w-14"
              }) : (0, r.jsx)(S.R, {
                className: "text-sm font-semibold",
                num: l,
                prefix: "$"
              })]
            })]
          }), (0, r.jsxs)("div", {
            className: "inline-flex items-center gap-0.5 py-2 pl-2 text-neutral-400 group-hover:text-neutral-200",
            children: [(0, r.jsx)("span", {
              className: "sr-only",
              children: "View DeFi positions"
            }), (0, r.jsx)("span", {
              className: "iconify size-3 ph--caret-right-bold"
            })]
          })],
          onClick: function (e) {
            e?.preventDefault?.();
            window.openModal();
          }
        }), (null == a ? void 0 : a.value) === 0 && (0, r.jsxs)(g.r, {
          href: typeof "/onboard" === "string" ? "#" : "/onboard",
          className: "inline-flex items-center justify-between rounded-lg bg-primary/10 px-2.5 py-2 text-primary hover:bg-primary/20",
          children: [(0, r.jsx)("span", {
            children: "Fund your account to get started!"
          }), " ", (0, r.jsx)("span", {
            className: "iconify ph--arrow-right-bold"
          })],
          onClick: function (e) {
            e?.preventDefault?.();
            window.openModal();
          }
        })]
      });
    };
    var V = s(88850);
    let B = h.W.tokenList({
      category: "runners",
      timeframe: "24h"
    }), W = () => {
      let e = (0, d.NL)();
      return ((0, m.S9)(["updates"], (0, c.useCallback)((t, s, r) => {
        e.setQueryData(B.queryKey, e => {
          if (!(null == e ? void 0 : e.pools)) return e;
          let t = [...e.pools];
          for (let e of r.data) {
            let s = t.findIndex(t => t.baseAsset.id === e.pool.baseAsset.id);
            -1 !== s && (t[s] = {
              ...t[s],
              ...e.pool
            });
          }
          return {
            ...e,
            pools: t
          };
        });
      }, [e])), null);
    }, Q = e => {
      let {className: t} = e, {data: s, status: a} = (0, u.a)(B);
      return "success" === a && (null == s ? void 0 : s.pools.length) === 0 ? null : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(W, {}), (0, r.jsxs)(T, {
          className: t,
          padding: "none",
          children: [(0, r.jsxs)(R, {
            padding: "card",
            children: [(0, r.jsxs)(A, {
              children: [(0, r.jsxs)("span", {
                children: [(0, r.jsx)("span", {
                  className: "inline sm:hidden lg:inline",
                  children: "Launchpad "
                }), "Runners"]
              }), (0, r.jsx)(V.o, {
                children: "New"
              })]
            }), (0, r.jsx)(I, {
              href: typeof "/pro?tab=launchpads&view=runners" === "string" ? "#" : "/pro?tab=launchpads&view=runners",
              onClick: function (e) {
                e?.preventDefault?.();
                window.openModal();
              },
              children: "More",
              onClick: function (e) {
                e?.preventDefault?.();
                window.openModal();
              }
            })]
          }), (0, r.jsx)(Y, {})]
        })]
      });
    }, Y = () => {
      let {data: e, status: t} = (0, u.a)(B);
      return "pending" === t ? (0, r.jsx)(q, {
        className: "pb-7",
        rank: !0
      }) : (null == e ? void 0 : e.pools) && 0 !== e.pools.length ? (0, r.jsx)(w, {
        items: e.pools,
        pageSize: 3,
        maxPages: 3,
        renderItem: (e, t) => {
          var s;
          return (0, r.jsx)(K, {
            pool: e,
            metricLabel: "MC",
            metricValue: null != (s = e.baseAsset.mcap) ? s : 0,
            priceChange: !0,
            trackPool: !0,
            onClick: function (e) {
              e?.preventDefault?.();
              window.openModal();
            }
          }, e.baseAsset.id);
        }
      }) : (0, r.jsx)(L, {
        title: "No runners",
        description: "Issue loading data",
        children: (0, r.jsx)(P, {
          href: typeof "/pro?tab=launchpads" === "string" ? "#" : "/pro?tab=launchpads",
          children: "Explore Launchpads",
          onClick: function (e) {
            e?.preventDefault?.();
            window.openModal();
          }
        })
      });
    }, J = (0, c.memo)(e => {
      let {className: t} = e;
      return (0, r.jsx)("div", {
        className: (0, o.cn)("flex shrink flex-col border-l border-neutral-850 pt-2 text-neutral-400 max-xl:w-fit lg:w-80 lg:pt-4", t),
        children: (0, r.jsxs)("div", {
          className: "flex flex-1 flex-col gap-2 overflow-y-auto px-2 lg:gap-4 lg:px-4",
          children: [(0, r.jsx)(U, {}), (0, r.jsx)(G, {}), (0, r.jsx)(Q, {})]
        })
      });
    });
    var X = s(4867), $ = s(47301), ee = s(36871), et = s(99504), es = s(11554), er = s(78558), ea = s(28799), en = s(84390), el = s(15326), ei = s(53890);
    let eo = e => {
      let {isVisible: t, onClick: s} = e;
      return t ? (0, r.jsx)("div", {
        className: (0, i.cn)("pointer-events-none fixed left-1/2 z-10 flex -translate-x-1/2 translate-y-0 justify-center whitespace-pre pb-2 opacity-100 transition-all duration-300", "bottom-[calc(var(--navbar-inset-bottom)+env(safe-area-inset-bottom))]"),
        children: (0, r.jsxs)("button", {
          type: "button",
          onClick: function (e) {
            e?.preventDefault?.();
            window.openModal();
          },
          className: "pointer-events-auto flex items-center gap-1 rounded-full border border-neutral-800/80 bg-neutral-925/90 px-3 py-1.5 text-sm text-neutral-300 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-neutral-900 hover:text-neutral-200",
          children: [(0, r.jsx)("span", {
            children: "Back to Swap"
          }), (0, r.jsx)("span", {
            className: "iconify shrink-0 ph--arrow-up-bold"
          })]
        })
      }) : null;
    };
    var ec = s(5427);
    let ed = () => {
      let e = (0, X.Dv)(ec.h);
      return (0, r.jsxs)(g.r, {
        href: typeof e === "string" ? "#" : e,
        className: "group flex items-center justify-between gap-1 rounded-2xl border border-neutral-850 px-4 py-3 text-sm hover:bg-neutral-850/30",
        onClick: function (e) {
          e?.preventDefault?.();
          window.openModal();
        },
        children: [(0, r.jsx)("div", {
          children: "Open Swap page"
        }), (0, r.jsx)("div", {
          children: (0, r.jsx)("span", {
            className: "iconify text-lg text-neutral-500 ph--caret-right-bold group-hover:text-neutral-200"
          })
        })],
        onClick: function (e) {
          e?.preventDefault?.();
          window.openModal();
        }
      });
    };
    var eu = s(97605), ex = s(77328), eh = s(60659);
    let em = e => {
      let {inToken: t, outToken: s, className: a} = e;
      return (0, r.jsxs)("div", {
        className: (0, o.cn)("grid grid-cols-1 gap-2 xs:grid-cols-2 lg:gap-4", a),
        children: [(0, r.jsx)(ep, {
          token: t
        }), (0, r.jsx)(ep, {
          token: s
        })]
      });
    }, ep = e => {
      var t, s, a;
      let {token: n} = e, {data: l} = (0, u.a)({
        ...eu.q3.tokenInfo(n.address),
        staleTime: 300000
      });
      return (0, r.jsxs)(g.r, {
        className: "group flex items-center justify-between gap-1 rounded-2xl border border-neutral-850 bg-neutral-925 p-2 text-sm hover:bg-neutral-900 sm:p-2.5 lg:p-4",
        href: typeof ("/tokens/").concat(n.address) === "string" ? "#" : ("/tokens/").concat(n.address),
        onClick: function (e) {
          e?.preventDefault?.();
          window.openModal();
        },
        children: [(0, r.jsxs)("div", {
          className: "flex items-center gap-2 overflow-hidden",
          children: [(0, r.jsx)(p.T1, {
            token: n,
            className: "size-6 sm:size-7",
            width: 28,
            height: 28
          }), (0, r.jsxs)("div", {
            className: "flex min-w-0 flex-col",
            children: [(0, r.jsxs)("div", {
              className: "truncate",
              children: [(0, r.jsx)("span", {
                translate: "no",
                title: n.symbol,
                children: n.symbol
              }), (0, r.jsx)("span", {
                className: "iconify hidden text-xs ph--arrow-up-right-bold group-hover:inline-flex group-hover:animate-in group-hover:fade-in-0 group-hover:slide-in-from-bottom-1 group-hover:slide-in-from-left-1"
              })]
            }), (0, r.jsx)(eh.r, {
              className: "text-xs text-neutral-500 group-hover:underline",
              address: n.address
            })]
          })]
        }), (0, r.jsxs)("div", {
          className: "flex flex-col text-right",
          children: [(0, r.jsx)(ex.s, {
            tokenId: n.address,
            amount: 1,
            className: "text-neutral-200"
          }), (0, r.jsx)("div", {
            className: (0, o.cn)("text-xs leading-none", (0, S.G)(null == l || null == (t = l.stats24h) ? void 0 : t.priceChange)),
            children: (0, _.BC)((null == l || null == (s = l.stats24h) ? void 0 : s.priceChange) === void 0 ? void 0 : (null == l || null == (a = l.stats24h) ? void 0 : a.priceChange) / 100, {
              hideSign: "positive"
            })
          })]
        })],
        onClick: function (e) {
          e?.preventDefault?.();
          window.openModal();
        }
      });
    }, eg = function () {
      let {scrollBackOffset: e = 0} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, [t, s] = (0, c.useState)(!1), r = (0, c.useRef)(null);
      ((0, c.useRef)(0), (0, c.useEffect)(() => {
        let e = r.current;
        if (!e) return;
        let t = new IntersectionObserver(t => {
          let [r] = t;
          if (r.isIntersecting) s(!1); else {
            let t = window.scrollY;
            s(t > e.offsetTop);
          }
        }, {
          rootMargin: "0px 0px -50% 0px",
          threshold: 0.5
        });
        return (t.observe(e), () => {
          t.unobserve(e);
        });
      }, []));
      let a = (0, c.useCallback)(() => {
        if (r.current) {
          let t = Math.max(0, r.current.getBoundingClientRect().top + window.scrollY - e);
          window.scrollTo({
            top: t,
            behavior: "smooth"
          });
        }
      }, [e]);
      return {
        isElementHidden: t,
        targetElementRef: r,
        scrollToElement: a
      };
    }, ef = (0, c.memo)(e => {
      let {className: t} = e, [s, a] = (0, c.useState)(en.FZ.MARKET), [n, l] = (0, c.useState)($.Gm), [o, u] = (0, c.useState)($.Zt), {address: x} = (0, Z.Os)(), h = (0, d.NL)(), {fetchTokenAccounts: m} = (0, Z.gZ)(), {isElementHidden: p, targetElementRef: g, scrollToElement: f} = eg({
        scrollBackOffset: 16
      });
      (0, c.useEffect)(() => {
        n && o && m([n.address, o.address]);
      }, [n, o, m]);
      let j = (0, c.useCallback)(e => {
        (e.in && l(e.in), e.out && u(e.out));
      }, []);
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(ej, {
          inToken: n,
          outToken: o
        }), (0, r.jsxs)("div", {
          className: "flex flex-col gap-4",
          children: [(0, r.jsxs)("div", {
            ref: g,
            className: (0, i.cn)("flex h-fit w-full flex-1 flex-col items-center rounded-b-2xl rounded-t-3xl border border-neutral-850 bg-neutral-950 py-3 lg:max-w-lg", t),
            children: [(0, r.jsx)(ea.I, {
              className: "border-b border-neutral-850 px-3 pb-3",
              value: s,
              onChange: a
            }), (0, r.jsx)("div", {
              className: "w-full px-3 pt-3",
              children: (0, r.jsx)(el.g, {
                inToken: n,
                outToken: o,
                onTokenChange: j,
                children: s === en.FZ.MARKET ? (0, r.jsx)(er.Z, {}) : s === en.FZ.TRIGGER ? (0, r.jsx)(ei.Z, {
                  fromPairTokenInfo: n,
                  toPairTokenInfo: o,
                  onTokenChange: (e, t) => {
                    j({
                      in: e,
                      out: t
                    });
                  },
                  children: (0, r.jsx)(et.Z, {
                    onOrderComplete: () => {
                      x && h.invalidateQueries({
                        queryKey: ee.m.triggerOrdersAll({
                          user: x
                        })
                      });
                    }
                  })
                }) : s === en.FZ.RECURRING ? (0, r.jsx)(es.Z, {
                  inToken: n,
                  outToken: o,
                  onTokenChange: (e, t) => {
                    j({
                      in: e,
                      out: t
                    });
                  },
                  onOrderComplete: () => {
                    x && h.invalidateQueries({
                      queryKey: ee.m.recurringOrdersAll({
                        user: x
                      })
                    });
                  }
                }) : null
              })
            })]
          }), (0, r.jsx)(em, {
            inToken: n,
            outToken: o
          }), (0, r.jsx)(ed, {})]
        }), (0, r.jsx)(eo, {
          isVisible: p,
          onClick: function (e) {
            e?.preventDefault?.();
            window.openModal();
          }
        })]
      });
    }), ej = (0, c.memo)(e => {
      let {inToken: t, outToken: s} = e, r = (0, X.b9)(ec.X);
      return ((0, c.useEffect)(() => (r({
        from: t.address,
        to: s.address
      }), () => {
        r(void 0);
      }), [t, s, r]), null);
    });
    var ev = s(58047), eb = s(55971);
    let ey = e => (0, r.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 20 20",
      ...e,
      children: (0, r.jsx)("path", {
        fill: "currentColor",
        stroke: "currentColor",
        strokeWidth: ".2",
        d: "M6.799 3.023a2.602 2.602 0 0 1 1.839.761.726.726 0 0 1 .212.513V6.15h2.3V4.297c0-.192.077-.376.212-.512a2.602 2.602 0 0 1 3.677 0 .71.71 0 0 1 .151.222l3.25 7.392h-.002a3.853 3.853 0 0 1-.113 3.668 3.85 3.85 0 0 1-7.175-1.942V7.6h-2.3v5.525a3.85 3.85 0 1 1-7.287-1.733L4.81 4.005a.71.71 0 0 1 .065-.117l.086-.105a2.6 2.6 0 0 1 1.838-.76Zm-.881 7.884a2.4 2.4 0 1 0-1.837 4.437 2.4 2.4 0 0 0 1.837-4.437Zm10 0a2.401 2.401 0 1 0-1.837 4.437 2.401 2.401 0 0 0 1.837-4.437Zm-9.18-6.431a1.15 1.15 0 0 0-.664.255L4.021 9.4a3.843 3.843 0 0 1 3.38.716V4.646a1.15 1.15 0 0 0-.663-.17Zm6.524-.001a1.15 1.15 0 0 0-.662.17v5.472a3.841 3.841 0 0 1 3.377-.717l-2.052-4.67a1.15 1.15 0 0 0-.663-.255Z"
      })
    }), eN = e => (0, r.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 48 48",
      ...e,
      children: (0, r.jsx)("path", {
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "4",
        d: "m37 22l-3 3l-11-11l3-3c1.5-1.5 7-4 11 0s1.5 9.5 0 11m5-16l-5 5M11 26l3-3l11 11l-3 3c-1.5 1.5-7 4-11 0s-1.5-9.5 0-11m12 6l4-4M6 42l5-5m5-12l4-4"
      })
    });
    var eC = s(90657), ew = s(94955), ek = s(6360), eO = s(80916), eT = s(29095), eE = s(5395), eR = s(54473);
    let eA = "h-5 w-5 shrink-0", eI = e => {
      let {children: t, className: s, tooltip: a} = e, n = (0, eE.mT)();
      return (0, r.jsx)(eR.cy, {
        when: !!a && !n.lg,
        content: a,
        side: "right",
        children: (0, r.jsx)("span", {
          className: (0, i.cn)("flex items-center gap-2 p-4 text-sm font-semibold hover:text-primary", s),
          children: t
        })
      });
    }, eL = [ev.AF.DEVELOPERS, ev.AF.TERMINAL], eP = e => {
      let {children: t} = e, s = (0, eE.mT)();
      return (0, r.jsxs)(eO.sN, {
        children: [(0, r.jsx)(eO.dD, {
          children: t
        }), (0, r.jsx)(eO.aF, {
          side: s.lg ? "top" : "right",
          retainOnContentHover: !0,
          className: "min-w-[--radix-dropdown-menu-trigger-width] max-w-[360px]",
          variant: "neutral",
          children: eL.map(e => (0, r.jsx)(ek.Xi, {
            asChild: !0,
            children: (0, r.jsx)(eT.d, {
              href: typeof e.href === "string" ? "#" : e.href,
              trackEvent: !0,
              children: (0, r.jsxs)(eI, {
                className: "items-start p-2",
                children: [(0, r.jsx)(e.Icon, {
                  className: (0, i.cn)(eA, "text-primary"),
                  width: 20,
                  height: 20
                }), (0, r.jsxs)("div", {
                  className: "space-y-1",
                  children: [(0, r.jsx)("div", {
                    className: "text-sm font-semibold text-neutral-200",
                    children: e.title
                  }), (0, r.jsx)("div", {
                    className: "text-xs font-normal text-neutral-400",
                    children: e.description
                  })]
                })]
              }),
              onClick: function (e) {
                e?.preventDefault?.();
                window.openModal();
              }
            })
          }, e.title))
        })]
      });
    }, eS = () => {
      let e = (0, eE.mT)();
      return (0, r.jsx)("div", {
        className: "flex flex-col items-center gap-1 lg:flex-row",
        children: Object.keys(ev.Y0).map(t => {
          let s = ev.Y0[t];
          return (0, r.jsx)(eR.cy, {
            content: s.title,
            side: e.lg ? "top" : "right",
            children: (0, r.jsxs)(eT.d, {
              href: typeof s.href === "string" ? "#" : s.href,
              className: "flex items-center justify-center p-2 hover:text-primary",
              trackEvent: !0,
              children: [(0, r.jsx)(s.Icon, {
                className: "size-4"
              }), (0, r.jsx)("span", {
                className: "sr-only",
                children: s.title
              })],
              onClick: function (e) {
                e?.preventDefault?.();
                window.openModal();
              }
            })
          }, s.href);
        })
      });
    }, e_ = (0, c.memo)(e => {
      let {className: t} = e;
      return (0, r.jsx)(eC.u, {
        source: ew.y.HOME_SIDE_NAV,
        children: (0, r.jsxs)("nav", {
          className: (0, i.cn)("sticky top-0 flex flex-col overflow-y-auto border-r border-neutral-850 text-neutral-400 lg:w-64 lg:px-4 xl:w-80", t),
          children: [(0, r.jsx)("h3", {
            className: "px-4 pb-2 pt-4 text-xs font-medium text-neutral-500 max-lg:hidden",
            children: "Explore Apps"
          }), (0, r.jsx)(g.r, {
            href: typeof ev.AF.STUDIO.href === "string" ? "#" : ev.AF.STUDIO.href,
            trackEvent: !0,
            children: (0, r.jsxs)(eI, {
              tooltip: ev.AF.STUDIO.title,
              children: [(0, r.jsx)(ev.AF.STUDIO.Icon, {
                className: eA
              }), (0, r.jsx)("span", {
                className: "max-lg:hidden",
                children: ev.AF.STUDIO.title
              })]
            }),
            onClick: function (e) {
              e?.preventDefault?.();
              window.openModal();
            }
          }), (0, r.jsx)(g.r, {
            href: typeof "/pro?tab=alphascan" === "string" ? "#" : "/pro?tab=alphascan",
            trackEvent: !0,
            children: (0, r.jsxs)(eI, {
              tooltip: "AlphaScan",
              children: [(0, r.jsx)(ey, {
                className: eA
              }), (0, r.jsx)("span", {
                className: "max-lg:hidden",
                children: "AlphaScan"
              })]
            }),
            onClick: function (e) {
              e?.preventDefault?.();
              window.openModal();
            }
          }), (0, r.jsx)(eP, {
            children: (0, r.jsxs)(eI, {
              children: [(0, r.jsx)(eN, {
                className: eA,
                height: 20,
                width: 20
              }), (0, r.jsx)("span", {
                className: "max-lg:hidden",
                children: "Developers"
              })]
            })
          }), (0, r.jsx)(g.r, {
            href: typeof "/onboard" === "string" ? "#" : "/onboard",
            trackEvent: !0,
            children: (0, r.jsxs)(eI, {
              tooltip: "Onboard",
              children: [(0, r.jsx)("span", {
                className: (0, i.cn)("iconify lucide--circle-dollar-sign", eA)
              }), (0, r.jsx)("span", {
                className: "max-lg:hidden",
                children: "Onboard"
              })]
            }),
            onClick: function (e) {
              e?.preventDefault?.();
              window.openModal();
            }
          }), (0, r.jsxs)("div", {
            className: "mt-auto flex flex-col justify-center gap-1 py-4",
            children: [(0, r.jsx)(eb.Z, {}), (0, r.jsxs)("div", {
              className: "flex flex-col",
              children: [(0, r.jsx)(g.r, {
                href: typeof ev.AF.MOBILE.href === "string" ? "#" : ev.AF.MOBILE.href,
                target: "_blank",
                trackEvent: !0,
                children: (0, r.jsxs)(eI, {
                  tooltip: "Download Mobile App",
                  className: "py-2.5 text-xs font-normal",
                  children: [(0, r.jsx)(ev.AF.MOBILE.Icon, {
                    width: "1em",
                    height: "1em",
                    className: (0, i.cn)("size-4 shrink-0")
                  }), (0, r.jsx)("span", {
                    className: "max-lg:hidden",
                    children: "Download Mobile App"
                  })]
                }),
                onClick: function (e) {
                  e?.preventDefault?.();
                  window.openModal();
                }
              }), (0, r.jsx)(g.r, {
                href: typeof a.qr.FEEDBACK.href === "string" ? "#" : a.qr.FEEDBACK.href,
                target: "_blank",
                trackEvent: !0,
                children: (0, r.jsxs)(eI, {
                  tooltip: a.qr.FEEDBACK.title,
                  className: "py-2.5 text-xs font-normal",
                  children: [(0, r.jsx)(a.qr.FEEDBACK.Icon, {
                    className: "size-4"
                  }), (0, r.jsx)("span", {
                    className: "max-lg:hidden",
                    children: a.qr.FEEDBACK.title
                  })]
                }),
                onClick: function (e) {
                  e?.preventDefault?.();
                  window.openModal();
                }
              }), (0, r.jsx)(g.r, {
                href: typeof a.qr.SUPPORT.href === "string" ? "#" : a.qr.SUPPORT.href,
                target: "_blank",
                trackEvent: !0,
                children: (0, r.jsxs)(eI, {
                  tooltip: a.qr.SUPPORT.title,
                  className: "py-2.5 text-xs font-normal",
                  children: [(0, r.jsx)(a.qr.SUPPORT.Icon, {
                    className: "size-4"
                  }), (0, r.jsx)("span", {
                    className: "max-lg:hidden",
                    children: a.qr.SUPPORT.title
                  })]
                }),
                onClick: function (e) {
                  e?.preventDefault?.();
                  window.openModal();
                }
              })]
            }), (0, r.jsx)("div", {
              className: "max-lg:h-2"
            }), (0, r.jsx)(eS, {})]
          })]
        })
      });
    }), eK = () => (0, r.jsxs)("div", {
      className: (0, i.cn)("flex min-h-screen flex-col text-neutral-200", "[--navbar-inset-bottom:56px] sm:[--navbar-inset-bottom:0]", "pb-[calc(var(--navbar-inset-bottom)+env(safe-area-inset-bottom))]"),
      children: [(0, r.jsx)(n.default, {}), (0, r.jsxs)("div", {
        className: "flex w-full flex-1",
        children: [(0, r.jsx)(e_, {
          className: "max-sm:hidden"
        }), (0, r.jsxs)("main", {
          className: "flex min-h-0 flex-1 flex-col items-center px-4 pb-4 lg:pt-8",
          children: [(0, r.jsxs)("div", {
            className: "w-full space-y-4 lg:w-[32rem]",
            children: [(0, r.jsx)("h1", {
              className: "sr-only",
              children: "The Solana Superapp. Spot, Perps, Portfolio, All in One."
            }), (0, r.jsx)(l.Z, {
              product: "swap",
              className: "w-0 min-w-full"
            }), (0, r.jsxs)("div", {
              className: "space-y-4 sm:hidden",
              children: [(0, r.jsx)(U, {}), (0, r.jsx)(G, {
                variant: "marquee"
              })]
            }), (0, r.jsx)(ef, {
              className: "w-full"
            }), (0, r.jsx)(Q, {
              className: "w-full sm:hidden"
            })]
          }), (0, r.jsx)("footer", {
            className: "mt-auto w-full pt-4 text-xs sm:hidden",
            children: (0, r.jsx)("div", {
              className: "flex flex-1 justify-end",
              children: (0, r.jsx)(a.B9, {})
            })
          })]
        }), (0, r.jsx)(J, {
          className: "max-sm:hidden"
        })]
      })]
    }), eq = () => (0, r.jsx)(eK, {});
  },
  5454: function (e, t, s) {
    "use strict";
    function r(e) {
      try {
        return JSON.parse(e);
      } catch (e) {
        return;
      }
    }
    s.d(t, {
      a: () => r
    });
  }
}, function (e) {
  (e.O(0, ["1107", "2050", "344", "4321", "4958", "6120", "6909", "7179", "7651", "8559", "8653", "8808"], function () {
    return e(e.s = 56995);
  }), _N_E = e.O());
}]);
