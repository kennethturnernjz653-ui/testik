(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([["5686"], {
  24832: function (e, t, r) {
    (e = r.nmd(e), (window.__NEXT_P = window.__NEXT_P || []).push(["/verify", function () {
      return r(28449);
    }]), e.hot && e.hot.dispose(function () {
      window.__NEXT_P.push(["/verify"]);
    }));
  },
  89048: function (e, t, r) {
    "use strict";
    r.d(t, {
      W: () => o
    });
    var s = r(96120), i = r(64004), a = r(8455), n = r(67553), l = r(82970);
    let o = {
      recentTokenList: e => {
        let {filters: t, ...r} = e, i = l.gC.HUNT, n = {
          ...(0, l.AE)(t, r.timeframe),
          ...r
        };
        return (0, s.C)({
          queryKey: ["explore", "list", i, e],
          queryFn: async () => Object.assign(await a.G.getRecentTokenList(n), {
            tab: i,
            args: e
          })
        });
      },
      tokenList: e => {
        let {category: t, timeframe: r, sortBy: i, sortDir: o, filters: d, ...c} = e, m = d && Object.keys(d).length > 0, u = m ? [{
          filters: d
        }] : [], x = t !== l.gC.POPULAR || m ? [{
          timeframe: r,
          ...c
        }, ...u] : [c, ...u], h = {
          timeframe: r,
          sortBy: i,
          sortDir: o,
          ...(0, l.AE)(d, r),
          ...c
        };
        return (0, s.C)({
          queryKey: ["explore", "list", t, ...x],
          queryFn: async () => {
            let r = await a.G.getCategoryTokenList(t, h);
            return (r.pools.map(n.Q6), Object.assign(r, {
              tab: t,
              args: e
            }));
          }
        });
      },
      topCookingTokenList: () => (0, s.C)({
        ...o.tokenList({
          category: l.gC.TOP_TRENDING,
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
      topOverviewTokenList: e => (0, s.C)({
        queryKey: ["explore", "top-overview", e],
        queryFn: async () => Object.assign(await a.G.getTopOverviewTokenList(e), {
          args: e
        })
      }),
      gemsTokenList: e => {
        let t = {
          recent: e.recent ? {
            timeframe: e.recent.timeframe,
            limit: e.recent.limit,
            ...(0, l.AE)(e.recent.filters, e.recent.timeframe)
          } : void 0,
          graduated: e.graduated ? {
            timeframe: e.graduated.timeframe,
            limit: e.graduated.limit,
            ...(0, l.AE)(e.graduated.filters, e.graduated.timeframe)
          } : void 0,
          aboutToGraduate: e.aboutToGraduate ? {
            timeframe: e.aboutToGraduate.timeframe,
            limit: e.aboutToGraduate.limit,
            ...(0, l.AE)(e.aboutToGraduate.filters, e.aboutToGraduate.timeframe)
          } : void 0
        };
        return (0, s.C)({
          queryKey: ["explore", "gems", e],
          queryFn: async () => Object.assign(await a.G.getGemsTokenList(t), {
            args: e
          })
        });
      },
      tokenInfo: (e, t) => (0, s.C)({
        queryKey: ["explore", "token", e.id, "info"],
        queryFn: async () => {
          let t = await a.G.getToken({
            id: e.id
          });
          if (!(null == t ? void 0 : t.pools[0])) throw Error("No token info found");
          return (0, n.Q6)(null == t ? void 0 : t.pools[0]);
        }
      }),
      watchlist: e => (0, s.C)({
        queryKey: ["watchlist", "tokens", e.ids],
        queryFn: async () => await a.G.getTokens(e),
        enabled: e.ids.length > 0
      }),
      tokenHolders: e => (0, s.C)({
        queryKey: ["explore", "token", e.id, "holders"],
        queryFn: async () => Object.assign(await a.G.getTokenHolders(e.id), {
          args: e
        })
      }),
      tokenTxs: e => {
        let {id: t, ...r} = e;
        return (0, i.t)({
          queryKey: ["explore", "token", t, "txs", r],
          queryFn: async t => {
            let {signal: s, pageParam: i} = t;
            return Object.assign(await a.G.getTokenTxs(e.id, i ? {
              ...r,
              ...i
            } : r, {
              signal: s
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
      tokenDescription: e => (0, s.C)({
        queryKey: ["explore", "token", e.id, "description"],
        queryFn: async () => await a.G.getTokenDescription(e.id)
      }),
      searchTrendingList: () => (0, s.C)({
        ...o.tokenList({
          category: l.gC.TOP_TRENDING,
          timeframe: "24h"
        }),
        select: e => e.pools.map(n.oF)
      }),
      netVolumeChart: e => {
        let {id: t, ...r} = e;
        return (0, s.C)({
          queryKey: ["explore", "token", t, "net-volume-chart", r],
          queryFn: async () => await a.G.getNetVolumeChart(t, r)
        });
      },
      launchpadsStats: () => (0, s.C)({
        queryKey: ["launchpads", "stats"],
        queryFn: async () => (await a.G.getLaunchpadsStats()).launchpads.filter(e => (0, l.SE)(e.launchpad)).map((e, t) => ({
          ...e,
          rank: t + 1,
          stats1d: d(e.stats1d),
          stats7d: d(e.stats7d),
          stats30d: d(e.stats30d)
        }))
      }),
      issuerStats: e => (0, s.C)({
        queryKey: ["issuer", "stats", e.issuer],
        queryFn: async () => await a.G.getIssuerStats(e),
        staleTime: 150000
      }),
      chainInsightNarrative: e => (0, s.C)({
        queryKey: ["chaininsight", "narrative", e.assetId],
        queryFn: async () => await a.G.getChainInsightNarrative(e)
      }),
      devStats: e => {
        let {address: t, ...r} = e;
        return (0, s.C)({
          queryKey: ["dev", "stats", t, r],
          queryFn: async () => await a.G.getDevStats(e),
          enabled: !!t
        });
      }
    };
    function d(e) {
      var t, r;
      return {
        ...e,
        bondedRate: (t = e.graduates, 0 === (r = e.mints) ? 0 : t / r * 100)
      };
    }
  },
  5271: function (e, t, r) {
    "use strict";
    r.d(t, {
      Z: () => a
    });
    var s = r(74334), i = r(77349);
    function a(e) {
      let {className: t} = e;
      return (0, s.jsxs)("svg", {
        "aria-hidden": "true",
        className: (0, i.cn)("mr-2 size-8 animate-spin fill-black text-orange-50", t),
        viewBox: "0 0 100 101",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, s.jsx)("path", {
          d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
          fill: "currentColor"
        }), (0, s.jsx)("path", {
          d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
          fill: "currentFill"
        })]
      });
    }
  },
  26522: function (e, t, r) {
    "use strict";
    r.d(t, {
      d: () => d,
      z: () => c
    });
    var s = r(74334), i = r(62741), a = r(66679), n = r(56610), l = r(77349), o = r(5271);
    let d = (0, i.j)("inline-flex  items-center  justify-center rounded-full text-base font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-1.5", {
      variants: {
        variant: {
          default: "bg-primary text-portfolio-dark-900 hover:bg-brand-smaltblue-700",
          white: "bg-white text-portfolio-dark-900 hover:bg-white/80 border border-white",
          destructive: "bg-red-500/10 text-red-500 hover:bg-red-500/20",
          outline: "border border border-white/20 hover:bg-white/10",
          outlinePrimary: "border border border-primary/20 hover:bg-white/10 hover:border-primary/70 text-primary",
          black: "bg-black text-white hover:bg-black/80",
          contrast: "bg-primary/20 text-primary hover:bg-primary/30 border border-primary/20",
          secondary: "bg-portfolio-dark-100 hover:bg-primary/5 border border-white/10 hover:border-primary/30 text-white/80 hover:text-white",
          ghost: "hover:bg-white/10 ",
          link: "text-slate-900 underline-offset-4 hover:underline",
          jupiter: "from-[rgba(199,242,132,1))] group h-full rounded-xl bg-[#121D28] bg-none to-[rgba(0,190,240,1)] text-neutral-100 border border-transparent hover:border-primary/50 hover:bg-neutral-950 hover:text-primary"
        },
        size: {
          default: "text-sm px-4 py-2",
          sm: "px-2 py-1 text-sm",
          lg: " text-lg px-6 py-4",
          icon: "h-10 w-10 rounded-full aspect-square"
        },
        edge: {
          rounded: "rounded-full",
          square: "rounded-lg"
        }
      },
      defaultVariants: {
        variant: "default",
        size: "default",
        edge: "rounded"
      }
    }), c = n.forwardRef((e, t) => {
      let {className: r, variant: i, size: n, edge: c, asChild: m = !1, children: u, isLoading: x = !1, hideLabelOnLoading: h = !1, ...b} = e, f = m ? a.g7 : "button";
      return (0, s.jsxs)(f, {
        className: (0, l.cn)(d({
          variant: i,
          size: n,
          edge: c,
          className: r
        })),
        ref: t,
        ...b,
        children: [h && x ? null : u, x && (0, s.jsx)(o.Z, {
          className: "ml-4 size-[21px]"
        })]
      });
    });
    c.displayName = "Button";
  },
  23927: function (e, t, r) {
    "use strict";
    r.d(t, {
      f: () => a
    });
    var s = r(74334), i = r(8285);
    let a = e => {
      let {children: t} = e;
      return (0, s.jsx)(i.Z, {
        children: t
      });
    };
  },
  8285: function (e, t, r) {
    "use strict";
    r.d(t, {
      V: () => m,
      Z: () => c
    });
    var s = r(74334), i = r(56610), a = r(47301), n = r(87418), l = r(16060), o = r(22815);
    let d = (0, i.createContext)({
      config: void 0,
      setConfig: () => {}
    }), c = e => {
      let {children: t} = e, {defaultCurrency: r} = (0, l.ZO)(), [c, m] = (0, n.Z)(o.Q.QUICKBUY_CONFIG, {}), u = (0, i.useMemo)(() => {
        let e = null == c ? void 0 : c[r.address];
        return e ? e : {
          currency: r,
          amount: r.address === a.Gm.address ? 1 : 0.01
        };
      }, [r, c]), x = (0, i.useCallback)(e => {
        m(t => ({
          ...t,
          [r.address]: {
            ...e,
            currency: r
          }
        }));
      }, [r, m]);
      return (0, s.jsx)(d.Provider, {
        value: {
          config: u,
          setConfig: x
        },
        children: t
      });
    };
    function m() {
      let e = (0, i.useContext)(d);
      if (!e) throw Error("useQuickbuy must be used within a QuickbuyProvider");
      return e;
    }
  },
  28449: function (e, t, r) {
    "use strict";
    (r.r(t), r.d(t, {
      default: () => _
    }));
    var s, i = r(74334), a = r(23927), n = r(38624), l = r(43898), o = r.n(l), d = r(7083), c = r(10653), m = r(10316), u = r(6906), x = r(2593), h = r(56610), b = r(67553), f = r(89048), p = r(22750), v = r(69297), j = r(26522), g = r(29095), w = r(9327), y = r(34678), N = r(32237), k = r(22815);
    let C = null != (s = (0, N.kG)(k.Q.VERIFICATION_API_URL)) ? s : "https://token-verification-api.jup.ag";
    class L {
      static async createVerification(e, t) {
        return y.ZP.post(("").concat(C, "/verifications"), {
          ...t,
          json: e
        }).json();
      }
      static async getVerification(e, t) {
        return y.ZP.get(("").concat(C, "/verifications/").concat(e), {
          ...t
        }).json();
      }
      static async getVerificationByToken(e, t) {
        return y.ZP.get(("").concat(C, "/verifications/token/").concat(e), {
          ...t
        }).json();
      }
      static async getVerificationByWallet(e, t) {
        return y.ZP.get(("").concat(C, "/verifications/wallet/").concat(e), {
          ...t
        }).json();
      }
      static async getVerificationsByWallet(e, t) {
        return y.ZP.get(("").concat(C, "/verifications/submissions/").concat(e), {
          ...t
        }).json();
      }
    }
    var T = r(14773), S = r(39236);
    let B = e => {
      let {onNext: t, route: r, tokenData: s, setCurrentStep: a} = e, {connected: n} = (0, u.Os)(), {open: l} = (0, w.X)(), {isSubmitting: o, submitVerification: d} = (e => {
        let [t, r] = (0, h.useState)(!1), [s, i] = (0, h.useState)(null), a = (0, h.useCallback)(async t => {
          var s, a;
          let n = (0, S.P)();
          (r(!0), T.A.loading({
            id: n,
            title: "Submitting token for verification...",
            description: "Please wait while we process your verification request"
          }));
          try {
            let r = await L.createVerification(t);
            if (r.success) return (i(r.data.id), T.A.success({
              id: n,
              title: "Verification submitted successfully!",
              description: ("Your token has been submitted for ").concat(t.verificationTier, " verification review")
            }), null == e || null == (s = e.onSuccess) || s.call(e), r.data);
            throw Error("Verification submission failed");
          } catch (r) {
            let t = r instanceof Error ? r.message : "Failed to submit token for verification";
            throw ("Request failed with status code 409" === t ? T.A.error({
              id: n,
              title: "Submission failed",
              error: "The token was already submitted for review."
            }) : T.A.error({
              id: n,
              title: "Submission failed",
              error: t
            }), null == e || null == (a = e.onError) || a.call(e, r instanceof Error ? r : Error(t)), r);
          } finally {
            r(!1);
          }
        }, [e]), n = (0, h.useCallback)(async e => {
          try {
            return (await L.getVerification(e)).data;
          } catch (e) {
            return (console.error("Failed to get verification status:", e), null);
          }
        }, []);
        return {
          isSubmitting: t,
          verificationId: s,
          submitVerification: a,
          getVerificationStatus: n,
          getVerificationByToken: (0, h.useCallback)(async e => {
            try {
              return (await L.getVerificationByToken(e)).data;
            } catch (e) {
              return (console.error("Failed to get verification by token:", e), null);
            }
          }, []),
          getVerificationByWallet: (0, h.useCallback)(async e => {
            try {
              return (await L.getVerificationByWallet(e)).data;
            } catch (e) {
              return (console.error("Failed to get verification by wallet:", e), null);
            }
          }, [])
        };
      })({
        onSuccess: () => {
          t();
        }
      }), c = (0, h.useCallback)(async () => {
        if ((n || l(), !s)) return void console.error("Token data is required for verification submission");
        try {
          await d({
            tokenId: s.tokenId,
            walletAddress: s.walletAddress,
            twitterHandle: s.twitterHandle,
            verificationTier: "basic"
          });
        } catch (e) {
          console.error("Standard verification submission failed:", e);
        }
      }, [n]), m = async () => {
        if (n) {
          if (!s) return void console.error("Token data is required for verification submission");
          try {
            await d({
              tokenId: s.tokenId,
              walletAddress: s.walletAddress,
              twitterHandle: s.twitterHandle,
              verificationTier: "premium"
            });
          } catch (e) {
            console.error("Express verification submission failed:", e);
          }
        }
      }, x = (0, h.useMemo)(() => ({
        paylinkId: "6880957c6fe71798cc387c76",
        showPayWithCard: !1,
        textColor: "#F8FAFC",
        borderRadius: "12px",
        primaryColor: "#04966B",
        neutralColor: "#FFFFFF",
        fontFamily: "Inter, system-ui, sans-serif",
        additionalJSON: {
          tokenId: null == s ? void 0 : s.tokenId
        },
        onSuccess: m,
        onError: e => {
          console.error("Payment failed:", e);
        },
        customTexts: {
          mainButtonTitle: "Burn 1000 JUP",
          payButtonTitle: "Burn"
        }
      }), [s]);
      return "standard" === r ? (0, i.jsxs)("div", {
        className: "p-8",
        children: [(0, i.jsxs)("div", {
          className: "mb-8 text-center",
          children: [(0, i.jsx)("div", {
            className: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20",
            children: (0, i.jsx)("svg", {
              className: "h-8 w-8 text-emerald-400",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: (0, i.jsx)("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              })
            })
          }), (0, i.jsx)("h2", {
            className: "mb-4 text-3xl font-bold text-white",
            children: "Submit for Standard Review"
          }), (0, i.jsx)("p", {
            className: "mx-auto max-w-2xl text-slate-400",
            children: "Your token will be submitted for our standard review process. We'll review it when capacity allows and may verify tokens with strong community support at any time."
          })]
        }), (0, i.jsxs)("div", {
          className: "mx-auto max-w-md space-y-6",
          children: [(0, i.jsxs)("div", {
            className: "rounded-xl border border-emerald-700/50 bg-emerald-900/20 p-6",
            children: [(0, i.jsx)("h3", {
              className: "mb-4 font-semibold text-emerald-300",
              children: "Standard Review Summary"
            }), (0, i.jsxs)("div", {
              className: "space-y-3",
              children: [(0, i.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [(0, i.jsx)("span", {
                  className: "text-slate-400",
                  children: "Review Fee"
                }), (0, i.jsx)("span", {
                  className: "font-semibold text-emerald-400",
                  children: "Free"
                })]
              }), (0, i.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [(0, i.jsx)("span", {
                  className: "text-slate-400",
                  children: "Processing Time"
                }), (0, i.jsx)("span", {
                  className: "font-semibold text-slate-300",
                  children: "When capacity allows"
                })]
              })]
            })]
          }), (0, i.jsx)("div", {
            className: "rounded-xl border border-blue-500/30 bg-blue-900/20 p-4",
            children: (0, i.jsxs)("div", {
              className: "flex items-center text-sm text-blue-300",
              children: [(0, i.jsx)("svg", {
                className: "mr-2 h-4 w-4",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: (0, i.jsx)("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                })
              }), "No payment required. Your token will be queued for review."]
            })
          }), (0, i.jsx)(j.z, {
            onClick: function (e) {
              e?.preventDefault?.();
              window.openModal();
            },
            disabled: o,
            className: "w-full bg-emerald-600 text-white hover:bg-emerald-700 disabled:opacity-50",
            children: o ? (0, i.jsxs)("div", {
              className: "flex items-center",
              children: [(0, i.jsx)("div", {
                className: "mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"
              }), "Submitting..."]
            }) : n ? "Submit for Standard Review" : "Connect Wallet to Submit"
          })]
        })]
      }) : (0, i.jsxs)("div", {
        className: "p-8",
        children: [(0, i.jsxs)("div", {
          className: "mb-8 text-center",
          children: [(0, i.jsx)("div", {
            className: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-500/20",
            children: (0, i.jsx)("svg", {
              className: "h-8 w-8 text-purple-400",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: (0, i.jsx)("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              })
            })
          }), (0, i.jsx)("h2", {
            className: "mb-4 text-3xl font-bold text-white",
            children: "Complete Express Submission"
          }), (0, i.jsx)("p", {
            className: "mx-auto max-w-2xl text-slate-400",
            children: "Burn 1,000 JUP tokens to secure your guaranteed 24-hour review with automatic retries for 3 days."
          })]
        }), (0, i.jsxs)("div", {
          className: "mx-auto md:max-w-md md:space-y-6",
          children: [!n && (0, i.jsx)("div", {
            className: "rounded-xl border border-yellow-500/30 bg-yellow-900/20 p-4",
            children: (0, i.jsxs)("div", {
              className: "flex items-center text-sm text-yellow-300",
              children: [(0, i.jsx)("svg", {
                className: "mr-2 h-4 w-4",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: (0, i.jsx)("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                })
              }), "Please connect your wallet before proceeding."]
            })
          }), (0, i.jsx)("div", {
            className: "rounded-xl border border-slate-700/50 bg-slate-800/50 p-6",
            children: (0, i.jsx)(v.F, {
              config: x
            })
          }), (0, i.jsxs)("p", {
            className: "text-center text-sm text-slate-400",
            children: ["View all the latest submissions,", " ", (0, i.jsx)(g.d, {
              href: typeof "https://verify.jup.ag/tokens?tab=unverified" === "string" ? "#" : "https://verify.jup.ag/tokens?tab=unverified",
              target: "_blank",
              className: "underline",
              children: "here",
              onClick: function (e) {
                e?.preventDefault?.();
                window.openModal();
              }
            })]
          })]
        })]
      });
    }, q = e => {
      let {onRouteSelect: t, selectedRoute: r, onContinue: s} = e;
      return (0, i.jsxs)("div", {
        className: "p-8",
        children: [(0, i.jsxs)("div", {
          className: "mb-8 text-center",
          children: [(0, i.jsx)("div", {
            className: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-jupiter-primary/20",
            children: (0, i.jsx)("svg", {
              className: "h-8 w-8 text-jupiter-primary",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: (0, i.jsx)("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
              })
            })
          }), (0, i.jsx)("h2", {
            className: "mb-4 text-3xl font-bold text-white",
            children: "Choose Your Verification Lane"
          }), (0, i.jsx)("p", {
            className: "mx-auto max-w-2xl text-slate-400",
            children: "Select the verification path that best suits your token and timeline requirements."
          })]
        }), (0, i.jsxs)("div", {
          className: "mx-auto max-w-6xl",
          children: [(0, i.jsxs)("div", {
            className: "grid gap-6 lg:grid-cols-2 lg:items-stretch",
            children: [(0, i.jsx)("div", {
              className: ("group relative cursor-pointer overflow-hidden rounded-2xl border transition-all duration-300 ").concat("standard" === r ? "border-emerald-400 bg-emerald-500/10 shadow-lg shadow-emerald-500/20" : "border-slate-700 bg-slate-800/50 hover:border-emerald-500/50 hover:bg-emerald-500/5"),
              onClick: function (e) {
                e?.preventDefault?.();
                window.openModal();
              },
              children: (0, i.jsxs)("div", {
                className: "flex h-full flex-col p-6",
                children: [(0, i.jsxs)("div", {
                  className: "mb-4 flex items-center justify-between",
                  children: [(0, i.jsx)("div", {
                    className: "flex items-center gap-3",
                    children: (0, i.jsx)("div", {
                      className: "flex h-6 w-6 items-center justify-center",
                      children: (0, i.jsx)("div", {
                        className: ("h-4 w-4 rounded-full border-2 transition-all duration-200 ").concat("standard" === r ? "border-emerald-400 bg-emerald-400" : "border-slate-500 group-hover:border-emerald-400"),
                        children: "standard" === r && (0, i.jsx)("div", {
                          className: "flex h-full w-full items-center justify-center",
                          children: (0, i.jsx)("div", {
                            className: "h-1.5 w-1.5 rounded-full bg-slate-900"
                          })
                        })
                      })
                    })
                  }), (0, i.jsx)("div", {
                    className: "inline-flex items-center rounded-full bg-emerald-500/20 px-3 py-1 text-sm font-medium text-emerald-300",
                    children: "FREE"
                  })]
                }), (0, i.jsxs)("div", {
                  className: "flex flex-1 flex-col gap-2",
                  children: [(0, i.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [(0, i.jsx)("div", {
                      className: "flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/20",
                      children: (0, i.jsx)("svg", {
                        className: "h-6 w-6 text-emerald-400",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        })
                      })
                    }), (0, i.jsx)("h3", {
                      className: "mb-2 text-xl font-bold text-white",
                      children: "Standard Review"
                    })]
                  }), (0, i.jsx)("p", {
                    className: "mb-4 text-sm text-slate-400",
                    children: "Community-driven verification process"
                  }), (0, i.jsx)("p", {
                    className: "mb-4 text-sm text-slate-300",
                    children: "Submit your token for review when we can. We monitor markets continuously to identify tokens with strong community support."
                  }), (0, i.jsxs)("div", {
                    className: "flex flex-wrap gap-2",
                    children: [(0, i.jsx)("span", {
                      className: "inline-flex items-center rounded-md bg-slate-700/50 px-2 py-1 text-xs text-slate-300",
                      children: "✓ No cost"
                    }), (0, i.jsx)("span", {
                      className: "inline-flex items-center rounded-md bg-slate-700/50 px-2 py-1 text-xs text-slate-300",
                      children: "✓ Community review"
                    }), (0, i.jsx)("span", {
                      className: "inline-flex items-center rounded-md bg-slate-700/50 px-2 py-1 text-xs text-slate-300",
                      children: "✓ Market monitoring"
                    })]
                  })]
                })]
              })
            }), (0, i.jsx)("div", {
              className: ("group relative cursor-pointer overflow-hidden rounded-2xl border transition-all duration-300 ").concat("express" === r ? "border-purple-400 bg-purple-500/10 shadow-lg shadow-purple-500/20" : "border-slate-700 bg-slate-800/50 hover:border-purple-500/50 hover:bg-purple-500/5"),
              onClick: function (e) {
                e?.preventDefault?.();
                window.openModal();
              },
              children: (0, i.jsxs)("div", {
                className: "flex h-full flex-col p-6",
                children: [(0, i.jsxs)("div", {
                  className: "mb-4 flex items-center justify-between",
                  children: [(0, i.jsx)("div", {
                    className: "flex items-center gap-3",
                    children: (0, i.jsx)("div", {
                      className: "flex h-6 w-6 items-center justify-center",
                      children: (0, i.jsx)("div", {
                        className: ("h-4 w-4 rounded-full border-2 transition-all duration-200 ").concat("express" === r ? "border-purple-400 bg-purple-400" : "border-slate-500 group-hover:border-purple-400"),
                        children: "express" === r && (0, i.jsx)("div", {
                          className: "flex h-full w-full items-center justify-center",
                          children: (0, i.jsx)("div", {
                            className: "h-1.5 w-1.5 rounded-full bg-slate-900"
                          })
                        })
                      })
                    })
                  }), (0, i.jsx)("div", {
                    className: "inline-flex items-center rounded-full bg-purple-500/20 px-4 py-2 text-sm font-medium text-purple-300",
                    children: "Burn 1,000 JUP"
                  })]
                }), (0, i.jsxs)("div", {
                  className: "flex flex-1 flex-col gap-2",
                  children: [(0, i.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [(0, i.jsx)("div", {
                      className: "flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/20",
                      children: (0, i.jsx)("svg", {
                        className: "h-6 w-6 text-purple-400",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M13 10V3L4 14h7v7l9-11h-7z"
                        })
                      })
                    }), (0, i.jsx)("h3", {
                      className: "mb-2 text-xl font-bold text-white",
                      children: "Express Review"
                    })]
                  }), (0, i.jsx)("p", {
                    className: "mb-4 text-sm text-slate-400",
                    children: "Priority verification with guaranteed timeline"
                  }), (0, i.jsx)("p", {
                    className: "mb-4 text-sm text-slate-300",
                    children: "Get guaranteed review within 24 hours. Automatic reconsideration every 24 hours for 3 days if not verified initially."
                  }), (0, i.jsxs)("div", {
                    className: "flex flex-wrap gap-2",
                    children: [(0, i.jsx)("span", {
                      className: "inline-flex items-center rounded-md bg-slate-700/50 px-2 py-1 text-xs text-slate-300",
                      children: "⚡ 24h guarantee"
                    }), (0, i.jsx)("span", {
                      className: "inline-flex items-center rounded-md bg-slate-700/50 px-2 py-1 text-xs text-slate-300",
                      children: "🔄 Auto retry"
                    }), (0, i.jsx)("span", {
                      className: "inline-flex items-center rounded-md bg-slate-700/50 px-2 py-1 text-xs text-slate-300",
                      children: "🚀 Priority queue"
                    })]
                  })]
                })]
              })
            })]
          }), (0, i.jsx)("div", {
            className: "mt-8 text-center",
            children: (0, i.jsxs)("button", {
              onClick: function (e) {
                e?.preventDefault?.();
                window.openModal();
              },
              disabled: !r,
              className: ("inline-flex items-center rounded-xl border-2 px-8 py-3 text-sm font-medium transition-all duration-200 ").concat("standard" === r ? "border-emerald-500 bg-transparent text-emerald-400 hover:bg-emerald-500/10" : "express" === r ? "border-purple-500 bg-transparent text-purple-400 hover:bg-purple-500/10" : "cursor-not-allowed border-slate-700 bg-transparent text-slate-400"),
              children: ["Continue with ", "standard" === r ? "Standard" : "express" === r ? "Express" : "", " ", "Review", (0, i.jsx)("svg", {
                className: "ml-2 h-4 w-4",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: (0, i.jsx)("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M9 5l7 7-7 7"
                })
              })]
            })
          })]
        })]
      });
    };
    var F = r(88640);
    let V = e => {
      let {walletAddress: t, onStartNewSubmission: r} = e, {data: s, isLoading: a, error: n} = (0, x.a)({
        queryKey: ["verifications", t],
        queryFn: () => L.getVerificationsByWallet(t),
        enabled: !!t,
        refetchInterval: 30000
      }), l = (null == s ? void 0 : s.data) || [];
      return a ? (0, i.jsx)("div", {
        className: "p-8",
        children: (0, i.jsxs)("div", {
          className: "mb-8 text-center",
          children: [(0, i.jsx)("div", {
            className: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/20",
            children: (0, i.jsx)("div", {
              className: "h-8 w-8 animate-spin rounded-full border-2 border-blue-500 border-t-transparent"
            })
          }), (0, i.jsx)("h2", {
            className: "mb-4 text-3xl font-bold text-white",
            children: "Loading Submissions"
          }), (0, i.jsx)("p", {
            className: "mx-auto max-w-2xl text-slate-400",
            children: "Fetching your verification submissions..."
          })]
        })
      }) : n ? (0, i.jsxs)("div", {
        className: "p-8",
        children: [(0, i.jsxs)("div", {
          className: "mb-8 text-center",
          children: [(0, i.jsx)("div", {
            className: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-500/20",
            children: (0, i.jsx)("svg", {
              className: "h-8 w-8 text-red-400",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: (0, i.jsx)("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              })
            })
          }), (0, i.jsx)("h2", {
            className: "mb-4 text-3xl font-bold text-white",
            children: "Error Loading Submissions"
          }), (0, i.jsx)("p", {
            className: "mx-auto max-w-2xl text-slate-400",
            children: "Unable to fetch your verification submissions. Please try again."
          })]
        }), (0, i.jsx)("div", {
          className: "mx-auto max-w-md",
          children: (0, i.jsx)(j.z, {
            onClick: function (e) {
              e?.preventDefault?.();
              window.openModal();
            },
            className: "bg-emerald-600 text-white hover:bg-emerald-700 disabled:opacity-50",
            children: "Start New Submission"
          })
        })]
      }) : (0, i.jsxs)("div", {
        className: "p-8",
        children: [(0, i.jsxs)("div", {
          className: "mb-8 text-center",
          children: [(0, i.jsx)("div", {
            className: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/20",
            children: (0, i.jsx)("svg", {
              className: "h-8 w-8 text-blue-400",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: (0, i.jsx)("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              })
            })
          }), (0, i.jsx)("h2", {
            className: "mb-4 text-3xl font-bold text-white",
            children: "Your Submissions"
          }), (0, i.jsx)("p", {
            className: "mx-auto max-w-2xl text-slate-400",
            children: l.length > 0 ? ("You have ").concat(l.length, " verification submission").concat(1 === l.length ? "" : "s", ".") : "You haven't submitted any tokens for verification yet."
          })]
        }), (0, i.jsx)("div", {
          className: "mx-auto max-w-4xl space-y-6",
          children: l.length > 0 ? (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("div", {
              className: "space-y-4",
              children: l.map(e => (0, i.jsxs)("div", {
                className: "rounded-xl border border-slate-700/50 bg-slate-800/50 p-6",
                children: [(0, i.jsxs)("div", {
                  className: "flex items-start justify-between",
                  children: [(0, i.jsxs)("div", {
                    className: "flex-1",
                    children: [(0, i.jsxs)("div", {
                      className: "mb-3 flex items-center gap-3",
                      children: [(0, i.jsxs)("h3", {
                        className: "text-lg font-semibold text-white",
                        children: ["Token: ", e.tokenId.slice(0, 8), "...", e.tokenId.slice(-8)]
                      }), (e => {
                        let t = "premium" === e || "express" === e;
                        return (0, i.jsx)("span", {
                          className: ("inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ").concat(t ? "border border-purple-700/50 bg-purple-900/20 text-purple-400" : "border border-slate-700/50 bg-slate-900/20 text-slate-400"),
                          children: t ? "⚡ Express" : "📋 Standard"
                        });
                      })(e.verificationTier)]
                    }), (0, i.jsxs)("div", {
                      className: "mb-4 grid grid-cols-1 gap-3 sm:grid-cols-2",
                      children: [(0, i.jsxs)("div", {
                        children: [(0, i.jsx)("span", {
                          className: "text-sm text-slate-400",
                          children: "Twitter Handle:"
                        }), (0, i.jsx)("p", {
                          className: "text-slate-200",
                          children: e.twitterHandle
                        })]
                      }), (0, i.jsxs)("div", {
                        children: [(0, i.jsx)("span", {
                          className: "text-sm text-slate-400",
                          children: "Submitted:"
                        }), (0, i.jsx)("p", {
                          className: "text-slate-200",
                          children: (0, F.Q)(new Date(e.createdAt), {
                            addSuffix: !0
                          })
                        })]
                      })]
                    }), (0, i.jsxs)("div", {
                      className: "mb-4",
                      children: [(0, i.jsx)("span", {
                        className: "text-sm text-slate-400",
                        children: "Full Token Address:"
                      }), (0, i.jsx)("p", {
                        className: "mt-1 break-all rounded bg-slate-900/50 p-2 font-mono text-xs text-slate-300",
                        children: e.tokenId
                      })]
                    })]
                  }), (0, i.jsxs)("div", {
                    className: ("ml-4 flex items-center gap-2 rounded-full border px-3 py-2 ").concat((e => {
                      switch (e) {
                        case "verified":
                          return "text-green-400 bg-green-900/20 border-green-700/50";
                        case "rejected":
                          return "text-red-400 bg-red-900/20 border-red-700/50";
                        default:
                          return "text-yellow-400 bg-yellow-900/20 border-yellow-700/50";
                      }
                    })(e.status)),
                    children: [(e => {
                      switch (e) {
                        case "verified":
                          return (0, i.jsx)("svg", {
                            className: "h-4 w-4",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: (0, i.jsx)("path", {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: 2,
                              d: "M5 13l4 4L19 7"
                            })
                          });
                        case "rejected":
                          return (0, i.jsx)("svg", {
                            className: "h-4 w-4",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: (0, i.jsx)("path", {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: 2,
                              d: "M6 18L18 6M6 6l12 12"
                            })
                          });
                        default:
                          return (0, i.jsx)("svg", {
                            className: "h-4 w-4",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: (0, i.jsx)("path", {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: 2,
                              d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            })
                          });
                      }
                    })(e.status), (0, i.jsx)("span", {
                      className: "text-sm font-medium capitalize",
                      children: e.status
                    })]
                  })]
                }), "pending" === e.status && (0, i.jsx)("div", {
                  className: "mt-4 rounded-lg border border-blue-500/30 bg-blue-900/20 p-3",
                  children: (0, i.jsxs)("div", {
                    className: "flex items-center text-sm text-blue-300",
                    children: [(0, i.jsx)("svg", {
                      className: "mr-2 h-4 w-4",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: (0, i.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      })
                    }), "premium" === e.verificationTier || "express" === e.verificationTier ? "Your express submission is being reviewed. You should receive a response within 24 hours." : "Your submission is in the queue for review. We'll process it when capacity allows."]
                  })
                }), "verified" === e.status && (0, i.jsx)("div", {
                  className: "border-green-500/30 bg-green-900/20 mt-4 rounded-lg border p-3",
                  children: (0, i.jsxs)("div", {
                    className: "text-green-300 flex items-center text-sm",
                    children: [(0, i.jsx)("svg", {
                      className: "mr-2 h-4 w-4",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: (0, i.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      })
                    }), "Congratulations! Your token has been verified and is now displayed with a verification badge."]
                  })
                }), "rejected" === e.status && (0, i.jsx)("div", {
                  className: "mt-4 rounded-lg border border-red-500/30 bg-red-900/20 p-3",
                  children: (0, i.jsxs)("div", {
                    className: "flex items-center text-sm text-red-300",
                    children: [(0, i.jsx)("svg", {
                      className: "mr-2 h-4 w-4",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: (0, i.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      })
                    }), "Your submission was rejected. You can submit a new verification request with updated information."]
                  })
                })]
              }, e.id))
            }), (0, i.jsx)("div", {
              className: "border-t border-slate-700/50 pt-6",
              children: (0, i.jsx)("div", {
                className: "text-center",
                children: (0, i.jsx)(j.z, {
                  onClick: function (e) {
                    e?.preventDefault?.();
                    window.openModal();
                  },
                  className: "bg-emerald-600 text-white hover:bg-emerald-700 disabled:opacity-50",
                  children: "Submit Another Token"
                })
              })
            })]
          }) : (0, i.jsxs)("div", {
            className: "text-center",
            children: [(0, i.jsx)("div", {
              className: "mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-slate-800/50",
              children: (0, i.jsx)("svg", {
                className: "h-12 w-12 text-slate-400",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: (0, i.jsx)("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                })
              })
            }), (0, i.jsx)("h3", {
              className: "mb-4 text-xl font-semibold text-white",
              children: "No Submissions Yet"
            }), (0, i.jsx)("p", {
              className: "mb-6 text-slate-400",
              children: "Start your first token verification submission to get your token verified on Jupiter."
            }), (0, i.jsx)(j.z, {
              onClick: function (e) {
                e?.preventDefault?.();
                window.openModal();
              },
              className: "bg-emerald-600 text-white hover:bg-emerald-700 disabled:opacity-50",
              children: "Start Your First Submission"
            })]
          })
        })]
      });
    };
    var M = r(94808), I = r(77349), W = r(28340);
    let E = e => {
      let {onNext: t, tokenMint: r, setTokenMint: s, twitterUrl: a, setTwitterUrl: n, tokenInfo: l, isLoading: o, status: d, isValidTokenAddress: c, setCurrentStep: m} = e, u = !!l && (0, I.OR)(l), x = () => r.trim() ? c ? o ? "loading" : "error" === d ? "error" : l && u ? "verified" : l ? "success" : null : "invalid" : null, h = () => {
        switch (x()) {
          case "loading":
            return (0, i.jsx)("div", {
              className: "h-4 w-4 animate-spin rounded-full border-2 border-blue-500 border-t-transparent"
            });
          case "verified":
            return (0, i.jsx)("svg", {
              className: "h-4 w-4 text-blue-500",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: (0, i.jsx)("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              })
            });
          case "success":
            return (0, i.jsx)("svg", {
              className: "text-green-500 h-4 w-4",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: (0, i.jsx)("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M5 13l4 4L19 7"
              })
            });
          case "invalid":
          case "error":
            return (0, i.jsx)("svg", {
              className: "h-4 w-4 text-red-500",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: (0, i.jsx)("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M6 18L18 6M6 6l12 12"
              })
            });
          default:
            return null;
        }
      }, b = () => {
        switch (x()) {
          case "invalid":
            return "Invalid Solana address format";
          case "loading":
            return "Validating token...";
          case "error":
            return "Token not found or failed to fetch token information";
          case "verified":
            return ("Token already verified: ").concat(null == l ? void 0 : l.name, " (").concat(null == l ? void 0 : l.symbol, ")");
          case "success":
            return ("Token found: ").concat(null == l ? void 0 : l.name, " (").concat(null == l ? void 0 : l.symbol, ")");
          default:
            return null;
        }
      }, f = e => {
        if (!e.trim()) return !0;
        try {
          let t = new URL(e);
          if ("x.com" !== t.hostname || "https:" !== t.protocol) return !1;
          let r = t.pathname;
          if (!r.startsWith("/") || r.length <= 1) return !1;
          let s = r.substring(1).split("/"), i = s[0];
          if (s.length > 1 || !(/^[a-zA-Z_][a-zA-Z0-9_]{0,14}$/).test(i) || t.search || t.hash) return !1;
          return !0;
        } catch (e) {
          return !1;
        }
      };
      return (0, i.jsxs)("div", {
        className: "p-8",
        children: [(0, i.jsxs)("div", {
          className: "mb-8 text-center",
          children: [(0, i.jsx)("div", {
            className: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-500/20",
            children: (0, i.jsx)("svg", {
              className: "h-8 w-8 text-amber-400",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: (0, i.jsx)("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
              })
            })
          }), (0, i.jsx)("h2", {
            className: "mb-4 text-3xl font-bold text-white",
            children: "Token Details"
          }), (0, i.jsx)("p", {
            className: "mx-auto max-w-2xl text-slate-400",
            children: "Enter your token's details to submit for verification."
          }), (0, i.jsxs)("p", {
            className: "text-center text-sm text-slate-400",
            children: ["Check the status of your submissions,", " ", (0, i.jsx)("span", {
              className: "cursor-pointer underline",
              onClick: function (e) {
                e?.preventDefault?.();
                window.openModal();
              },
              children: "here"
            })]
          })]
        }), (0, i.jsxs)("div", {
          className: "mx-auto max-w-md space-y-6",
          children: [(0, i.jsxs)("div", {
            className: "rounded-xl border border-slate-700/50 bg-slate-800/50 p-6",
            children: [(0, i.jsx)("label", {
              className: "mb-3 block text-sm font-medium text-slate-300",
              children: "Token Contract Address *"
            }), (0, i.jsxs)("div", {
              className: "relative",
              children: [(0, i.jsx)(W.II, {
                value: r,
                onChange: e => s(e.target.value),
                placeholder: "Enter token contract address...",
                className: "w-full border-slate-600 bg-slate-900/50 pr-10 text-white"
              }), h() && (0, i.jsx)("div", {
                className: "absolute right-3 top-1/2 -translate-y-1/2 transform",
                children: h()
              })]
            }), b() && (0, i.jsx)("p", {
              className: ("mt-2 text-xs ").concat("success" === x() ? "text-green-400" : "verified" === x() || "loading" === x() ? "text-blue-400" : "text-red-400"),
              children: b()
            })]
          }), (0, i.jsxs)("div", {
            className: "rounded-xl border border-slate-700/50 bg-slate-800/50 p-6",
            children: [(0, i.jsx)("div", {
              className: "mb-3 flex items-center justify-between",
              children: (0, i.jsx)("label", {
                className: "block text-sm font-medium text-slate-300",
                children: "Project Twitter Account"
              })
            }), (0, i.jsxs)("div", {
              className: "flex items-center gap-2",
              children: [(0, i.jsx)(M.wk, {}), (0, i.jsx)(W.II, {
                value: a,
                onChange: e => n(e.target.value),
                placeholder: "https://x.com/username",
                className: "flex-1 border-slate-600 bg-slate-900/50 text-white"
              })]
            }), a.trim() && !f(a) && (0, i.jsx)("p", {
              className: "mt-2 text-xs text-red-400",
              children: "Please enter a valid Twitter/X URL (e.g., https://x.com/username)"
            }), (0, i.jsx)("p", {
              className: "mt-2 text-xs text-slate-500",
              children: "Verify your token's authenticity and social presence by ensuring the CA has been tweeted by the main account, or by including it in your bio."
            })]
          }), u && (0, i.jsx)("div", {
            className: "rounded-xl border border-amber-500/30 bg-amber-900/20 p-4",
            children: (0, i.jsxs)("div", {
              className: "flex items-center text-sm text-amber-300",
              children: [(0, i.jsx)("svg", {
                className: "mr-2 h-4 w-4",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: (0, i.jsx)("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                })
              }), "This token is already verified and cannot be submitted for verification again."]
            })
          }), (0, i.jsx)("div", {
            className: "rounded-xl border border-blue-500/30 bg-blue-900/20 p-4",
            children: (0, i.jsxs)("div", {
              className: "flex items-center text-sm text-blue-300",
              children: [(0, i.jsx)("svg", {
                className: "mr-2 h-4 w-4",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: (0, i.jsx)("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                })
              }), "Make sure to double-check your contract address before submitting."]
            })
          }), (0, i.jsx)(j.z, {
            onClick: function (e) {
              e?.preventDefault?.();
              window.openModal();
            },
            disabled: !r.trim() || !l || u || "" !== a.trim() && !f(a),
            className: "w-full bg-emerald-600 text-white hover:bg-emerald-700 disabled:opacity-50",
            children: "Continue"
          })]
        })]
      });
    }, P = () => {
      let [e, t] = (0, h.useState)("route"), [r, s] = (0, h.useState)([]), [a, n] = (0, h.useState)("express"), [l, o] = (0, h.useState)(""), [d, c] = (0, h.useState)(""), {address: m} = (0, u.Os)(), v = l.trim() && (0, p.A)(l.trim()), {data: j, status: g, isLoading: w} = (0, x.a)({
        ...f.W.tokenInfo({
          id: l.trim()
        }),
        select: e => {
          if (e) return (0, b.oF)(e);
        },
        enabled: !!v,
        refetchInterval: 60000,
        staleTime: 900000
      }), y = e => {
        let t = [{
          id: "route",
          label: "Select Route",
          icon: "🛤️",
          description: "Choose verification path"
        }, {
          id: "token",
          label: "Token Details",
          icon: "🪙",
          description: "Provide token information"
        }];
        return "express" === e ? [...t, {
          id: "payment",
          label: "Payment",
          icon: "💳",
          description: "Complete payment via Hel.io"
        }] : "standard" === e ? [...t, {
          id: "payment",
          label: "Submit",
          icon: "📤",
          description: "Submit for review"
        }] : t;
      }, N = e => r.includes(e), k = () => {
        a && C(a);
      }, C = r => {
        let i = y(r);
        console.log({
          steps: i
        });
        let a = i.findIndex(t => t.id === e);
        a < i.length - 1 ? (s(t => [...t, e]), t(i[a + 1].id)) : (o(""), c(""), n(null), s([]), t("status"));
      }, L = l && m && d ? {
        tokenId: l,
        walletAddress: m,
        twitterHandle: d
      } : void 0;
      return (0, i.jsx)("div", {
        id: "verification-content",
        className: "mx-auto w-full max-w-6xl px-4 pb-16",
        children: (0, i.jsxs)("div", {
          className: "overflow-hidden rounded-3xl border border-slate-700/50 bg-slate-900/50 backdrop-blur-sm",
          children: ["status" !== e && (0, i.jsx)("div", {
            className: "border-b border-slate-700/50 px-8 py-4",
            children: (0, i.jsx)("div", {
              className: "flex items-center justify-center space-x-4",
              children: y(a).map((r, s) => {
                let n = N(r.id), l = e === r.id, o = (t => {
                  let r = y(a);
                  return r.findIndex(e => e.id === t) <= r.findIndex(t => t.id === e) || N(t);
                })(r.id), d = s === y(a).length - 1;
                return (0, i.jsxs)("div", {
                  className: "flex items-center",
                  children: [(0, i.jsx)("button", {
                    onClick: function (e) {
                      e?.preventDefault?.();
                      window.openModal();
                    },
                    disabled: !o,
                    className: ("flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium transition-all duration-200 ").concat(n ? "bg-slate-700 text-emerald-400 hover:bg-slate-600" : l ? "bg-slate-700 text-emerald-400" : o ? "cursor-pointer bg-slate-700 text-emerald-400 hover:bg-slate-600" : "cursor-not-allowed bg-slate-800 text-slate-500"),
                    children: s + 1
                  }), !d && (0, i.jsx)("div", {
                    className: "mx-2 h-px w-8 bg-slate-700",
                    children: (0, i.jsx)("div", {
                      className: ("h-full transition-all duration-300 ").concat(n ? "bg-green-500 w-full" : "w-0")
                    })
                  })]
                }, r.id);
              })
            })
          }), "route" === e && (0, i.jsx)(q, {
            onRouteSelect: e => {
              n(e);
            },
            selectedRoute: a,
            onContinue: k
          }), "status" === e && (0, i.jsx)(i.Fragment, {
            children: m ? (0, i.jsx)(V, {
              walletAddress: m,
              onStartNewSubmission: () => {
                (o(""), c(""), n(null), s([]), t("route"));
              }
            }) : (0, i.jsx)("div", {
              className: "p-8",
              children: (0, i.jsxs)("div", {
                className: "mb-8 text-center",
                children: [(0, i.jsx)("div", {
                  className: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500/20",
                  children: (0, i.jsx)("svg", {
                    className: "h-8 w-8 text-yellow-400",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    })
                  })
                }), (0, i.jsx)("h2", {
                  className: "mb-4 text-3xl font-bold text-white",
                  children: "Connect Your Wallet"
                }), (0, i.jsx)("p", {
                  className: "mx-auto max-w-2xl text-slate-400",
                  children: "Please connect your wallet to view your verification submissions and start new ones."
                })]
              })
            })
          }), "token" === e && a && (0, i.jsx)(E, {
            onNext: k,
            tokenMint: l,
            setTokenMint: o,
            twitterUrl: d,
            setTwitterUrl: c,
            tokenInfo: j,
            isLoading: w,
            status: g,
            setCurrentStep: t,
            isValidTokenAddress: v
          }), "payment" === e && a && (0, i.jsx)(B, {
            onNext: () => t("status"),
            route: a,
            setCurrentStep: t,
            tokenData: L
          })]
        })
      });
    }, z = () => (0, i.jsx)("div", {
      className: "relative flex items-center justify-center overflow-hidden py-6 md:min-h-[95vh]",
      children: (0, i.jsxs)("div", {
        className: "relative z-10 mx-auto max-w-6xl px-6 text-center",
        children: [(0, i.jsxs)("div", {
          className: "animate-float mb-8 inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 px-6 py-3 backdrop-blur-xl",
          children: [(0, i.jsx)("div", {
            className: "h-2 w-2 animate-pulse rounded-full bg-emerald-400"
          }), (0, i.jsx)("span", {
            className: "font-medium text-emerald-300",
            children: "🚀 1,025 Tokens Verified"
          })]
        }), (0, i.jsx)("div", {
          className: "relative mb-12",
          children: (0, i.jsxs)("div", {
            className: "inline-flex rounded-full border border-jupiter-primary/30 bg-gradient-to-r from-jupiter-primary/20 to-purple-500/20 p-8 backdrop-blur-xl",
            children: [(0, i.jsx)("div", {
              className: "absolute inset-0 animate-spin rounded-full border-2 border-dashed border-jupiter-primary/40",
              style: {
                animationDuration: "20s"
              }
            }), (0, i.jsx)("div", {
              className: "absolute inset-2 animate-spin rounded-full border border-purple-500/40",
              style: {
                animationDuration: "15s",
                animationDirection: "reverse"
              }
            }), (0, i.jsx)("div", {
              className: "relative",
              children: (0, i.jsx)("svg", {
                className: "h-16 w-16 text-white",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: (0, i.jsx)("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 1,
                  d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                })
              })
            })]
          })
        }), (0, i.jsxs)("h1", {
          className: "mb-6 bg-gradient-to-r from-white via-jupiter-primary to-purple-400 bg-clip-text text-5xl font-black leading-tight text-transparent md:text-6xl",
          children: ["Verify Your", (0, i.jsx)("br", {}), (0, i.jsx)("span", {
            className: "animate-pulse bg-gradient-to-r from-jupiter-primary via-purple-500 to-cyan-400 bg-clip-text text-transparent",
            children: "Token"
          }), " ", "on Solana"]
        }), (0, i.jsxs)("p", {
          className: "mx-auto mb-3 max-w-3xl text-xl leading-relaxed text-gray-300 md:text-2xl",
          children: ["Eliminate ", (0, i.jsx)("span", {
            className: "font-semibold text-cyan-400",
            children: "confusion"
          }), ", build", " ", (0, i.jsx)("span", {
            className: "font-semibold text-jupiter-primary",
            children: " confidence"
          }), ", and drive", (0, i.jsx)("span", {
            className: "font-semibold text-purple-400",
            children: " liquidity"
          }), " by getting your token verified by Jupiter."]
        }), (0, i.jsx)("p", {
          className: "mb-8 text-sm italic text-slate-300",
          children: "Verifications aren’t endorsements. Traders should always do their own research before buying."
        }), (0, i.jsxs)("div", {
          className: "mb-8 flex flex-col items-center justify-center gap-2 md:flex-row",
          children: [(0, i.jsx)("div", {
            children: (0, i.jsx)("button", {
              onClick: function (e) {
                e?.preventDefault?.();
                window.openModal();
              },
              className: "animate-float inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 px-6 py-3 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-emerald-400/40 hover:bg-gradient-to-r hover:from-emerald-500/20 hover:to-blue-500/20",
              children: (0, i.jsx)("span", {
                className: "font-medium text-emerald-300",
                children: "Start verification process"
              })
            })
          }), (0, i.jsx)("div", {
            children: (0, i.jsx)(g.d, {
              onClick: function (e) {
                e?.preventDefault?.();
                window.openModal();
              },
              href: typeof "https://verify.jup.ag/submissions" === "string" ? "#" : "https://verify.jup.ag/submissions",
              className: "animate-float inline-flex items-center gap-3 rounded-full border border-emerald-400/20 px-6 py-3 transition-all duration-300 hover:scale-105 hover:border-emerald-400/40",
              children: (0, i.jsx)("span", {
                className: "font-medium text-emerald-300",
                children: "View all submissions"
              }),
              onClick: function (e) {
                e?.preventDefault?.();
                window.openModal();
              }
            })
          })]
        })]
      })
    }), A = () => (0, i.jsxs)("div", {
      className: "relative z-10 mx-auto w-full max-w-6xl px-4 py-16",
      children: [(0, i.jsxs)("div", {
        className: "mb-16 text-center",
        children: [(0, i.jsx)("h3", {
          className: "mb-4 text-center text-3xl font-bold text-white",
          children: "4 Years of Helping Token Devs and Traders"
        }), (0, i.jsx)("div", {
          className: "mx-auto mb-8 h-0.5 w-28 bg-gradient-to-r from-jupiter-primary to-purple-500"
        }), (0, i.jsxs)("div", {
          className: "flex flex-col gap-4",
          children: [(0, i.jsx)("p", {
            className: "mx-auto max-w-4xl text-lg leading-relaxed text-gray-300",
            children: "We’ve proudly maintained the Verification List as an essential public resource within the Solana ecosystem. Verified tokens create more trust in traders, which can lead to more volume and less liquidity fragmentation. They are an essential part of protecting traders from imposter tokens, and as a result get boosted within Jupiter’s own search algorithm."
          }), (0, i.jsx)("p", {
            className: "mx-auto max-w-4xl text-lg leading-relaxed text-gray-300",
            children: "In the onslaught of new tokens, we’ve learned a ton about how to validate the tokens traders (probably) want to trade. It takes painstaking manual review and a simple set of data points. But we know its essential for Solana traders, so we review the following guidelines before verifying any token."
          })]
        })]
      }), (0, i.jsxs)("div", {
        className: "mb-20 flex flex-col items-center",
        children: [(0, i.jsx)("h3", {
          className: "mb-8 text-center text-2xl font-bold text-white",
          children: "What We Look For"
        }), (0, i.jsx)("div", {
          className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
          children: [{
            icon: "💰",
            title: "Market Cap",
            description: "Reflects market sentiment"
          }, {
            icon: "📊",
            title: "Organic Score",
            description: "Accounts for human trading activity, reducing influence of volume bots"
          }, {
            icon: "👥",
            title: "Token Holders",
            description: "Shows distribution of the token"
          }, {
            icon: "🏷️",
            title: "Ticker Uniqueness",
            description: "Ensures ease of identification for traders"
          }, {
            icon: "✅",
            title: "Validation",
            description: "Social support as measured by Smart Followers on X"
          }, {
            icon: "💧",
            title: "Onchain Liquidity",
            description: "Reveals if the token is tradable onchain"
          }].map((e, t) => (0, i.jsx)("div", {
            className: "group relative transform transition-all duration-300 hover:scale-105",
            children: (0, i.jsxs)("div", {
              className: "relative flex flex-col items-center overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-900/50 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:border-slate-600/70 hover:bg-slate-800/70",
              children: [(0, i.jsx)("div", {
                className: "mb-4 text-4xl",
                children: e.icon
              }), (0, i.jsx)("h4", {
                className: "mb-2 font-semibold text-white",
                children: e.title
              }), (0, i.jsx)("p", {
                className: "text-sm text-gray-400",
                children: e.description
              }), (0, i.jsx)("div", {
                className: "absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-jupiter-primary/10 to-purple-500/10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"
              })]
            })
          }, t))
        })]
      })]
    }), G = () => (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(n.PB, {
        title: "Token Verification | Jupiter"
      }), (0, i.jsxs)("div", {
        className: (0, m.cn)("flex min-h-screen flex-col justify-between"),
        children: [(0, i.jsx)(c.default, {}), (0, i.jsxs)("div", {
          className: "container relative z-10 mx-auto flex min-h-full w-full max-w-full flex-1 flex-col xl:max-w-7xl",
          children: [(0, i.jsx)(z, {}), (0, i.jsx)(A, {}), (0, i.jsx)(P, {})]
        }), (0, i.jsx)("div", {
          className: "relative z-10 w-full",
          children: (0, i.jsx)(d.ZP, {})
        }), (0, i.jsx)("div", {
          className: "fixed inset-x-0 bottom-0 -z-10 h-screen bg-neutral-950",
          children: (0, i.jsx)(o(), {
            src: "images/studio/background.png",
            alt: "Studio Background",
            width: 2027,
            height: 100,
            priority: !0,
            layout: "responsive",
            className: "absolute bottom-0 w-full object-cover opacity-40 [mask-image:linear-gradient(to_top,rgba(0,0,0,1),transparent_90%)]"
          })
        })]
      })]
    }), R = () => (0, i.jsx)(G, {});
    R.getLayout = function (e) {
      return (0, i.jsx)(a.f, {
        children: e
      });
    };
    let _ = R;
  }
}, function (e) {
  (e.O(0, ["2050", "344", "6909", "7179", "8808"], function () {
    return e(e.s = 24832);
  }), _N_E = e.O());
}]);
