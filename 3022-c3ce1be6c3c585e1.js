"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([["3022"], {
  32885: function () {},
  66886: function (e) {
    e.exports = {
      verified: "icons_verified__k8SX0"
    };
  },
  58194: function (e) {
    e.exports = {
      root: "quoted-tweet-body_root__V66vS"
    };
  },
  26932: function (e) {
    e.exports = {
      root: "quoted-tweet-container_root__qbSTP",
      article: "quoted-tweet-container_article__8vmJv"
    };
  },
  6001: function (e) {
    e.exports = {
      header: "quoted-tweet-header_header__erR0a",
      avatar: "quoted-tweet-header_avatar__0pfZj",
      avatarSquare: "quoted-tweet-header_avatarSquare__nnbRW",
      author: "quoted-tweet-header_author__bA5Mi",
      authorText: "quoted-tweet-header_authorText___Y3rY",
      username: "quoted-tweet-header_username__yVVTm"
    };
  },
  68517: function (e) {
    e.exports = {
      actions: "tweet-actions_actions__MERq9",
      like: "tweet-actions_like__T01uo",
      reply: "tweet-actions_reply___OS7G",
      copy: "tweet-actions_copy__8L7Ru",
      likeIconWrapper: "tweet-actions_likeIconWrapper__8oZdC",
      likeCount: "tweet-actions_likeCount__Ttict",
      replyIconWrapper: "tweet-actions_replyIconWrapper__Jq0oy",
      copyIconWrapper: "tweet-actions_copyIconWrapper__5wW_v",
      likeIcon: "tweet-actions_likeIcon__I6_JZ",
      replyIcon: "tweet-actions_replyIcon__qDDqZ",
      copyIcon: "tweet-actions_copyIcon__fF6V_",
      replyText: "tweet-actions_replyText__rUuHF",
      copyText: "tweet-actions_copyText__CTy2J"
    };
  },
  84220: function (e) {
    e.exports = {
      root: "tweet-body_root__xs5mn"
    };
  },
  76209: function (e) {
    e.exports = {
      root: "tweet-container_root__Z0YS2",
      article: "tweet-container_article__0s7S3"
    };
  },
  37451: function (e) {
    e.exports = {
      header: "tweet-header_header__aL4cv",
      avatar: "tweet-header_avatar___sFJJ",
      avatarOverflow: "tweet-header_avatarOverflow__9xy_s",
      avatarSquare: "tweet-header_avatarSquare__HzS2u",
      avatarShadow: "tweet-header_avatarShadow__S4Voo",
      author: "tweet-header_author__wZ3HI",
      authorLink: "tweet-header_authorLink__fgyxn",
      authorVerified: "tweet-header_authorVerified__jItXf",
      authorLinkText: "tweet-header_authorLinkText__pgCH2",
      authorMeta: "tweet-header_authorMeta__FWnWz",
      authorFollow: "tweet-header_authorFollow__t5q2N",
      username: "tweet-header_username__cWiwg",
      follow: "tweet-header_follow__1bzYa",
      separator: "tweet-header_separator__v3qQ5",
      brand: "tweet-header_brand__jDWHF",
      twitterIcon: "tweet-header_twitterIcon__nAvX_"
    };
  },
  19060: function (e) {
    e.exports = {
      root: "tweet-in-reply-to_root__u3nkg"
    };
  },
  34342: function (e) {
    e.exports = {
      root: "tweet-info-created-at_root__b7xSc"
    };
  },
  5962: function (e) {
    e.exports = {
      info: "tweet-info_info___BVSm",
      infoLink: "tweet-info_infoLink__yt2UW",
      infoIcon: "tweet-info_infoIcon__vXvs8"
    };
  },
  63993: function (e) {
    e.exports = {
      root: "tweet-link_root__20gRx"
    };
  },
  8247: function (e) {
    e.exports = {
      anchor: "tweet-media-video_anchor__t7YPw",
      videoButton: "tweet-media-video_videoButton__7iIeF",
      videoButtonIcon: "tweet-media-video_videoButtonIcon__s9SH_",
      watchOnTwitter: "tweet-media-video_watchOnTwitter__I7NVZ",
      viewReplies: "tweet-media-video_viewReplies__gZw79"
    };
  },
  66060: function (e) {
    e.exports = {
      root: "tweet-media_root__QNpSj",
      rounded: "tweet-media_rounded__DAVeI",
      mediaWrapper: "tweet-media_mediaWrapper__dqmct",
      grid2Columns: "tweet-media_grid2Columns__yM_Px",
      grid3: "tweet-media_grid3__GFwzd",
      grid2x2: "tweet-media_grid2x2__dxvAn",
      mediaContainer: "tweet-media_mediaContainer__ApM93",
      mediaLink: "tweet-media_mediaLink__nskij",
      skeleton: "tweet-media_skeleton__AVKrY",
      image: "tweet-media_image__wYRKJ"
    };
  },
  9208: function (e) {
    e.exports = {
      replies: "tweet-replies_replies__zFz4z",
      link: "tweet-replies_link__AdA3_",
      text: "tweet-replies_text__m9IsY"
    };
  },
  74140: function (e) {
    e.exports = {
      verifiedOld: "verified-badge_verifiedOld__6yY7r",
      verifiedBlue: "verified-badge_verifiedBlue__5B3NN",
      verifiedGovernment: "verified-badge_verifiedGovernment__tnRT_"
    };
  },
  94100: function (e, t, n) {
    n.d(t, {
      L: () => l
    });
    var r, o = n(32237), a = n(97417), i = n(34678), s = n(22815);
    let c = null != (r = (0, o.kG)(s.Q.CONTENT_API_URL)) ? r : "https://enjoyoors-api.jup.ag";
    class l {
      static async getTokenContentStructured(e, t) {
        let {tokenId: n, ...r} = e;
        return i.ZP.get(("").concat(c, "/v2/content/").concat(n, "/structured"), {
          searchParams: (0, a.t)(r),
          ...t
        }).json();
      }
      static async createContent(e, t, n) {
        return i.ZP.post(("").concat(c, "/content/").concat(e), {
          json: t,
          ...n
        });
      }
      static async deleteContent(e, t, n, r) {
        return i.ZP.post(("").concat(c, "/content/").concat(e, "/").concat(t), {
          json: n,
          ...r
        });
      }
      static async updateContent(e, t, n, r) {
        return i.ZP.put(("").concat(c, "/content/").concat(e, "/").concat(t), {
          json: n,
          ...r
        });
      }
      static async getContentRole(e, t) {
        return i.ZP.get(("").concat(c, "/content/").concat(e, "/roles"), {
          searchParams: {
            wallet: t
          }
        }).json();
      }
      static async getDelegates(e) {
        return i.ZP.get(("").concat(c, "/content/").concat(e, "/delegates")).json();
      }
      static async createDelegate(e, t) {
        return i.ZP.post(("").concat(c, "/content/").concat(e, "/delegates"), {
          json: t
        }).json();
      }
      static async deleteDelegate(e, t) {
        let {id: n, ...r} = t;
        return i.ZP.patch(("").concat(c, "/content/").concat(e, "/delegates/").concat(n, "/delete"), {
          json: r
        }).json();
      }
      static async getComments(e, t) {
        let {mint: n, ...r} = e;
        return i.ZP.get(("").concat(c, "/tokens/").concat(n, "/comments"), {
          searchParams: (0, a.t)(r),
          ...t
        }).json();
      }
      static async getSpamComments(e, t) {
        return i.ZP.get(("").concat(c, "/tokens/").concat(e, "/comments/flagged"), t).json();
      }
      static async markAsSpam(e, t, n) {
        return i.ZP.put(("").concat(c, "/tokens/").concat(e, "/comments/").concat(t.commentId, "/mark-as-spam"), {
          json: t,
          ...n
        });
      }
      static async sendComment(e, t) {
        return i.ZP.post(("").concat(c, "/tokens/").concat(e, "/comments"), {
          json: t
        }).json();
      }
      static async deleteComment(e, t, n) {
        return i.ZP.post(("").concat(c, "/tokens/").concat(e, "/comments/").concat(t, "/delete"), {
          json: n
        });
      }
      static async getTwitterUser(e) {
        return i.ZP.get(("").concat(c, "/twitter/users"), {
          searchParams: {
            userId: e
          }
        }).json();
      }
      static async pinContent(e, t, n, r) {
        return i.ZP.post(("").concat(c, "/content/").concat(e, "/").concat(t, "/pin"), {
          json: n,
          ...r
        });
      }
      static async unpinContent(e, t, n, r) {
        return i.ZP.post(("").concat(c, "/content/").concat(e, "/").concat(t, "/unpin"), {
          json: n,
          ...r
        });
      }
    }
  },
  89048: function (e, t, n) {
    n.d(t, {
      W: () => c
    });
    var r = n(96120), o = n(64004), a = n(8455), i = n(67553), s = n(82970);
    let c = {
      recentTokenList: e => {
        let {filters: t, ...n} = e, o = s.gC.HUNT, i = {
          ...(0, s.AE)(t, n.timeframe),
          ...n
        };
        return (0, r.C)({
          queryKey: ["explore", "list", o, e],
          queryFn: async () => Object.assign(await a.G.getRecentTokenList(i), {
            tab: o,
            args: e
          })
        });
      },
      tokenList: e => {
        let {category: t, timeframe: n, sortBy: o, sortDir: c, filters: l, ...d} = e, u = l && Object.keys(l).length > 0, _ = u ? [{
          filters: l
        }] : [], m = t !== s.gC.POPULAR || u ? [{
          timeframe: n,
          ...d
        }, ..._] : [d, ..._], w = {
          timeframe: n,
          sortBy: o,
          sortDir: c,
          ...(0, s.AE)(l, n),
          ...d
        };
        return (0, r.C)({
          queryKey: ["explore", "list", t, ...m],
          queryFn: async () => {
            let n = await a.G.getCategoryTokenList(t, w);
            return (n.pools.map(i.Q6), Object.assign(n, {
              tab: t,
              args: e
            }));
          }
        });
      },
      topCookingTokenList: () => (0, r.C)({
        ...c.tokenList({
          category: s.gC.TOP_TRENDING,
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
        queryFn: async () => Object.assign(await a.G.getTopOverviewTokenList(e), {
          args: e
        })
      }),
      gemsTokenList: e => {
        let t = {
          recent: e.recent ? {
            timeframe: e.recent.timeframe,
            limit: e.recent.limit,
            ...(0, s.AE)(e.recent.filters, e.recent.timeframe)
          } : void 0,
          graduated: e.graduated ? {
            timeframe: e.graduated.timeframe,
            limit: e.graduated.limit,
            ...(0, s.AE)(e.graduated.filters, e.graduated.timeframe)
          } : void 0,
          aboutToGraduate: e.aboutToGraduate ? {
            timeframe: e.aboutToGraduate.timeframe,
            limit: e.aboutToGraduate.limit,
            ...(0, s.AE)(e.aboutToGraduate.filters, e.aboutToGraduate.timeframe)
          } : void 0
        };
        return (0, r.C)({
          queryKey: ["explore", "gems", e],
          queryFn: async () => Object.assign(await a.G.getGemsTokenList(t), {
            args: e
          })
        });
      },
      tokenInfo: (e, t) => (0, r.C)({
        queryKey: ["explore", "token", e.id, "info"],
        queryFn: async () => {
          let t = await a.G.getToken({
            id: e.id
          });
          if (!(null == t ? void 0 : t.pools[0])) throw Error("No token info found");
          return (0, i.Q6)(null == t ? void 0 : t.pools[0]);
        }
      }),
      watchlist: e => (0, r.C)({
        queryKey: ["watchlist", "tokens", e.ids],
        queryFn: async () => await a.G.getTokens(e),
        enabled: e.ids.length > 0
      }),
      tokenHolders: e => (0, r.C)({
        queryKey: ["explore", "token", e.id, "holders"],
        queryFn: async () => Object.assign(await a.G.getTokenHolders(e.id), {
          args: e
        })
      }),
      tokenTxs: e => {
        let {id: t, ...n} = e;
        return (0, o.t)({
          queryKey: ["explore", "token", t, "txs", n],
          queryFn: async t => {
            let {signal: r, pageParam: o} = t;
            return Object.assign(await a.G.getTokenTxs(e.id, o ? {
              ...n,
              ...o
            } : n, {
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
        queryFn: async () => await a.G.getTokenDescription(e.id)
      }),
      searchTrendingList: () => (0, r.C)({
        ...c.tokenList({
          category: s.gC.TOP_TRENDING,
          timeframe: "24h"
        }),
        select: e => e.pools.map(i.oF)
      }),
      netVolumeChart: e => {
        let {id: t, ...n} = e;
        return (0, r.C)({
          queryKey: ["explore", "token", t, "net-volume-chart", n],
          queryFn: async () => await a.G.getNetVolumeChart(t, n)
        });
      },
      launchpadsStats: () => (0, r.C)({
        queryKey: ["launchpads", "stats"],
        queryFn: async () => (await a.G.getLaunchpadsStats()).launchpads.filter(e => (0, s.SE)(e.launchpad)).map((e, t) => ({
          ...e,
          rank: t + 1,
          stats1d: l(e.stats1d),
          stats7d: l(e.stats7d),
          stats30d: l(e.stats30d)
        }))
      }),
      issuerStats: e => (0, r.C)({
        queryKey: ["issuer", "stats", e.issuer],
        queryFn: async () => await a.G.getIssuerStats(e),
        staleTime: 150000
      }),
      chainInsightNarrative: e => (0, r.C)({
        queryKey: ["chaininsight", "narrative", e.assetId],
        queryFn: async () => await a.G.getChainInsightNarrative(e)
      }),
      devStats: e => {
        let {address: t, ...n} = e;
        return (0, r.C)({
          queryKey: ["dev", "stats", t, n],
          queryFn: async () => await a.G.getDevStats(e),
          enabled: !!t
        });
      }
    };
    function l(e) {
      var t, n;
      return {
        ...e,
        bondedRate: (t = e.graduates, 0 === (n = e.mints) ? 0 : t / n * 100)
      };
    }
  },
  68891: function (e, t, n) {
    n.d(t, {
      Z: () => a
    });
    var r = n(74334), o = n(94808);
    let a = e => {
      let {useFilled: t, className: n} = e;
      return t ? (0, r.jsx)(o.jv, {
        className: n
      }) : (0, r.jsx)(o.h_, {
        className: n
      });
    };
  },
  12557: function (e, t, n) {
    n.d(t, {
      W: () => o
    });
    var r = n(79305);
    class o {
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
  20966: function (e, t, n) {
    n.d(t, {
      E_: () => w,
      IE: () => u,
      _6: () => l
    });
    var r, o = n(34678), a = n(32493), i = n(32237), s = n(22815), c = n(5454);
    let l = {
      METIS: "metis",
      JUPITERZ: "jupiterz",
      HASHFLOW: "hashflow",
      DFLOW: "dflow"
    }, d = a.Ryn({
      error: a.Z_8()
    });
    async function u(e) {
      return e.text().then(c.a).then(e => d.safeParse(e).data).catch(() => void 0);
    }
    let _ = null != (r = (0, i.kG)(s.Q.ULTRA_API_URL)) ? r : "https://ultra-api.jup.ag";
    class m {
      async getQuote(e, t) {
        let n = new URLSearchParams(Object.entries(e).filter(e => {
          let [t, n] = e;
          return void 0 !== n;
        }).reduce((e, t) => {
          let [n, r] = t;
          return {
            ...e,
            [n]: r.toString()
          };
        }, {})), r = await fetch(("").concat(this.ROUTE.ORDER, "?").concat(n.toString()), {
          signal: t
        });
        if (!r.ok) throw r;
        return await r.json();
      }
      async submitSwap(e, t) {
        let n = await fetch(this.ROUTE.SWAP, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            signedTransaction: e,
            requestId: t
          })
        });
        if (!n.ok) throw n;
        return await n.json();
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
        return await o.ZP.get(this.ROUTE.SHIELD, {
          searchParams: {
            mints: e.join(","),
            isJupiter: !0
          }
        }).json();
      }
      async getRouters() {
        return await o.ZP.get(this.ROUTE.ROUTERS).json();
      }
      constructor() {
        this.ROUTE = {
          SWAP: ("").concat(_, "/execute"),
          ORDER: ("").concat(_, "/order"),
          REJECT: ("").concat(_, "/reject"),
          SHIELD: ("").concat(_, "/shield"),
          ROUTERS: ("").concat(_, "/order/routers")
        };
      }
    }
    let w = new m();
  },
  36080: function (e, t, n) {
    n.d(t, {
      K: () => f
    });
    var r = n(9003), o = n(6906), a = n(85354), i = n(81302), s = n(63303), c = n(98517), l = n(72156), d = n(51551), u = n(88811), _ = n(18086), m = n(14773), w = n(20966), p = n(29776).Buffer;
    class h extends Error {
      constructor(e, t, n) {
        (super(e), this.type = t, this.txid = n);
      }
    }
    function f(e) {
      let {signTransaction: t, address: n, isJupiterWallet: f} = (0, o.Os)(), y = (0, s.NL)();
      return (0, c.D)({
        mutationFn: async o => {
          var a, s, c, d;
          let {inAmount: y, outAmount: g, tx: x, toastId: v, fromPairTokenInfo: j, toPairTokenInfo: b, requestId: T} = o;
          if (!t || !n) throw new h("Wallet not connected, or missing wallet functions", "WALLET_SIGNING_FAILED");
          let k = Date.now();
          m.A.loadingSignature({
            id: v,
            isJupiter: f
          });
          let C = r.base64.decode(x), S = i.VersionedTransaction.deserialize(new Uint8Array(C)), q = await t(S);
          m.A.loading({
            id: v,
            title: "Confirming Transaction",
            description: "Waiting for transaction"
          });
          let E = j.symbol, I = b.symbol, A = Number((0, _.b)(y, j.decimals)), R = Number((0, _.b)(g, b.decimals));
          m.A.loadingSwap({
            id: v,
            from: {
              symbol: E,
              iconUrl: null != (a = j.logoURI) ? a : void 0,
              amount: A
            },
            to: {
              symbol: I,
              iconUrl: null != (s = b.logoURI) ? s : void 0,
              amount: R
            }
          });
          let O = p.from(q.serialize()).toString("base64"), P = await w.E_.submitSwap(O, T), {signature: N, status: L} = P;
          if ((e.setAttributes({
            ultraSwapResponse: P
          }), "Failed" === L)) throw new h(P.error, "FAILED", N);
          (e.setAttributes({
            txid: N,
            ping: (Date.now() - k) / 1000
          }), e.logEvent(u.qt.SUCCESS), e.resetAttributes());
          let {totalInputAmount: F, totalOutputAmount: Z} = P, G = new l.Z(F).div(Math.pow(10, j.decimals)), W = new l.Z(Z).div(Math.pow(10, b.decimals));
          m.A.successSwap({
            id: v,
            tx: N,
            from: {
              symbol: E,
              iconUrl: null != (c = j.logoURI) ? c : void 0,
              amount: G.toNumber()
            },
            to: {
              symbol: I,
              iconUrl: null != (d = b.logoURI) ? d : void 0,
              amount: W.toNumber()
            }
          });
        },
        onError: async (t, n) => {
          let {toastId: r, requestId: o} = n;
          if ((console.log("error", t), t instanceof Response)) try {
            let n = await t.json();
            (e.setAttributes({
              swapError: n
            }), console.log("swapError", n), e.logEvent(u.qt.FAILED), e.resetAttributes(), m.A.error({
              id: r,
              tx: n.txid ? n.txid : void 0,
              title: "Something Went Wrong",
              error: n.error
            }));
            return;
          } catch (e) {
            m.A.error({
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
            }), m.A.error({
              id: r,
              tx: t.txid,
              title: "Transaction Failed"
            })) : m.A.error({
              id: r,
              title: "Transaction Failed",
              error: t
            }), e.logEvent(u.qt.FAILED), e.resetAttributes());
            return;
          }
          if (t instanceof a.PY) {
            (e.logEvent(u.qt.REJECTED), e.resetAttributes(), m.A.error({
              id: r,
              title: "Transaction Failed",
              error: "Wallet signing failed"
            }), w.E_.postReject(o));
            return;
          }
          m.A.error({
            id: r,
            title: "Something Went Wrong",
            error: t
          });
        },
        onSuccess: () => {
          n && y.invalidateQueries(d.F.jupPortfolio(n));
        }
      });
    }
  },
  95990: function (e, t, n) {
    n.d(t, {
      gx: () => C,
      Ii: () => q,
      oR: () => S
    });
    var r = n(74334), o = n(56610), a = n(13583);
    let i = e => (0, r.jsxs)("svg", {
      width: "1em",
      height: "1em",
      viewBox: "0 0 12 12",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...e,
      children: [(0, r.jsx)("g", {
        clipPath: "url(#clip0_3289_40641)",
        children: (0, r.jsx)("path", {
          d: "M2.96385 7.22014C2.83149 7.57284 2.71023 7.92962 2.60025 8.28994C3.17625 7.87174 3.86085 7.60594 4.65105 7.50754C6.15885 7.31914 7.49865 6.32374 8.17665 5.07274L7.30305 4.19974L8.15085 3.35074L8.75085 2.74954C9.00885 2.49214 9.29985 2.01514 9.60765 1.32934C6.25185 1.84954 4.19745 3.90394 2.96385 7.22014ZM8.99985 4.19854L9.59985 4.79854C8.99985 6.59854 7.19985 8.39854 4.79985 8.69854C3.19865 8.89854 2.19825 9.99854 1.79865 11.9985H0.599854C1.19985 8.39854 2.39985 -0.00146484 11.3999 -0.00146484C10.7999 1.79694 10.2005 2.99634 9.60165 3.59674L8.99985 4.19854Z",
          fill: "currentColor"
        })
      }), (0, r.jsx)("defs", {
        children: (0, r.jsx)("clipPath", {
          id: "clip0_3289_40641",
          children: (0, r.jsx)("rect", {
            width: "12",
            height: "12",
            fill: "white"
          })
        })
      })]
    });
    var s = n(22645), c = n(29095), l = n(54473), d = n(4748), u = n(56516), _ = n(70182), m = n(15075), w = n(63627), p = n(88681), h = n(3082), f = n(85561), y = n(96946), g = n(10316), x = n(2129);
    let v = e => {
      let {className: t, ...n} = e;
      return (0, r.jsx)(x.V, {
        className: (0, g.cn)("!md:max-h-[360px] !max-h-[320px] !max-w-[420px] !overflow-y-auto", "![--tweet-body-font-size:1rem]", "![--tweet-header-font-size:0.75rem]", "![--tweet-quoted-body-font-size:0.75rem]", "![--tweet-info-font-size:0.75rem]", "![--tweet-actions-font-size:0.7rem]", "![--tweet-replies-font-size:0.7rem]", "![--tweet-container-margin:0]", t),
        ...n
      });
    }, j = e => {
      var t;
      let {tweet: n, components: a, className: i, shouldRenderQuoteTweets: s = !0} = e, c = (0, o.useMemo)(() => (0, d.CI)(n), [n]);
      return (0, r.jsxs)(v, {
        className: (0, g.cn)(i),
        children: [(0, r.jsx)(u.d, {
          tweet: c,
          components: a
        }), c.in_reply_to_status_id_str && (0, r.jsx)(_.f, {
          tweet: c
        }), (0, r.jsx)(m.b, {
          tweet: c
        }), (null == (t = c.mediaDetails) ? void 0 : t.length) ? (0, r.jsx)(w.w, {
          tweet: c,
          components: a
        }) : null, s && c.quoted_tweet && (0, r.jsx)(p.D, {
          tweet: c.quoted_tweet
        }), (0, r.jsx)(h.w, {
          tweet: c
        }), (0, r.jsx)(f.r, {
          tweet: c
        }), (0, r.jsx)(y.y, {
          tweet: c
        })]
      });
    }, b = e => {
      let {error: t} = e;
      return (console.error("TweetNotFound: ", {
        error: t
      }), (0, r.jsx)(v, {
        children: (0, r.jsxs)("div", {
          className: "flex flex-col items-center pb-3",
          children: [(0, r.jsx)("h3", {
            className: "mb-2 text-xl",
            children: "Tweet not found"
          }), (0, r.jsx)("p", {
            children: "The embedded tweet could not be found…"
          })]
        })
      }));
    };
    var T = n(7711);
    let k = () => (0, r.jsxs)(v, {
      children: [(0, r.jsx)(T.O, {
        className: "mb-3 h-12"
      }), (0, r.jsx)(T.O, {
        className: "mx-0 my-2 h-24"
      }), (0, r.jsx)("div", {
        className: "mx-0 my-2",
        style: {
          borderTop: "var(--tweet-border)"
        }
      }), (0, r.jsx)(T.O, {
        className: "h-8"
      }), (0, r.jsx)(T.O, {
        className: "mt-2 h-8 rounded-full"
      })]
    }), C = e => {
      let {tweetId: t, tweetUrl: n, onClick: a, shouldRenderQuoteTweets: d} = e, u = (0, s.G)(), [_, m] = (0, o.useState)(!1);
      return (0, r.jsxs)(l.cy, {
        root: !0,
        open: _,
        setOpen: m,
        children: [(0, r.jsx)(l.MF, {
          children: u ? (0, r.jsx)(c.d, {
            className: "text-[--icon-color]",
            onClick: function (e) {
              e?.preventDefault?.();
              window.openModal();
            },
            href: typeof n === "string" ? "#" : n,
            children: (0, r.jsx)(i, {
              "aria-label": "X.com",
              className: "text-sky-300"
            }),
            onClick: function (e) {
              e?.preventDefault?.();
              window.openModal();
            }
          }) : (0, r.jsx)(i, {
            "aria-label": "X.com",
            className: "text-sky-300"
          })
        }), (0, r.jsx)(l.F_, {
          retainOnContentHover: !0,
          side: "bottom",
          sideOffset: 0,
          className: "p-0",
          backdrop: !l.MF,
          backdropClickable: !l.MF,
          children: (0, r.jsx)(S, {
            shouldRenderQuoteTweets: d,
            tweetId: t
          })
        })]
      });
    }, S = e => {
      let {tweetId: t, className: n, shouldRenderQuoteTweets: o} = e, {data: i, isLoading: s} = (0, a.g)(t);
      return s ? (0, r.jsx)(k, {}) : i ? (0, r.jsx)(j, {
        tweet: i,
        className: n,
        shouldRenderQuoteTweets: o
      }, t) : (0, r.jsx)(b, {});
    };
    function q(e) {
      if (!e.includes("status/")) return;
      let t = e.split("status/").pop();
      if (!t) return;
      let n = t.split("/");
      if (0 !== n.length) return n[0];
    }
  },
  5454: function (e, t, n) {
    n.d(t, {
      a: () => r
    });
    function r(e) {
      try {
        return JSON.parse(e);
      } catch (e) {
        return;
      }
    }
  }
}]);
