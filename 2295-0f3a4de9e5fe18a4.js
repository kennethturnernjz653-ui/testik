"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([["2295"], {
  34535: function (e) {
    e.exports = {
      markdown: "MarkdownDisplay_markdown__PHZKR"
    };
  },
  45579: function (e, t, s) {
    s.d(t, {
      v: () => a
    });
    var r = s(34678);
    let n = "https://fe-api.jup.ag/api/v1";
    class a {
      static async getTwitterRedirectUrl(e) {
        let {initiator: t} = e;
        return r.ZP.get(("").concat(n, "/auth/redirect/twitter"), {
          credentials: "include",
          searchParams: {
            initiator: t
          }
        }).json();
      }
      static async postTwitterLogin(e) {
        return r.ZP.post(("").concat(n, "/auth/login/twitter"), {
          credentials: "include",
          body: JSON.stringify(e)
        }).json();
      }
      static async refreshSession() {
        return r.ZP.post(("").concat(n, "/auth/sessions/refresh"), {
          credentials: "include"
        }).json();
      }
      static async logout() {
        return r.ZP.post(("").concat(n, "/auth/logout"), {
          credentials: "include"
        });
      }
      static async getTokenReactions(e) {
        return r.ZP.get(("").concat(n, "/tokens/").concat(e, "/reactions"), {
          credentials: "include"
        }).json();
      }
      static async putTokenReaction(e, t) {
        return r.ZP.put(("").concat(n, "/tokens/").concat(e, "/reactions"), {
          credentials: "include",
          body: JSON.stringify(t)
        });
      }
    }
  },
  66080: function (e, t, s) {
    s.d(t, {
      O: () => n,
      l: () => a
    });
    var r, n = ((r = {}).VERIFIED = "verified", r.CT_LIST = "ct_list", r);
    let a = {
      FLAG: "flag",
      LIKE: "like",
      NEUTRAL: "neutral"
    };
  },
  29655: function (e, t, s) {
    s.d(t, {
      Z: () => c
    });
    var r = s(74334), n = s(77349), a = s(50876), l = s(34535), i = s.n(l), o = s(32654);
    let c = e => {
      var t;
      let {markdown: s, className: l} = e, c = (t = a.TU.parse(s, {
        async: !1
      }), o.Z.sanitize(t, {
        ALLOWED_TAGS: ["p", "br", "strong", "em", "u", "del", "s", "ins", "h1", "h2", "h3", "h4", "h5", "h6", "ul", "ol", "li", "blockquote", "code", "pre", "a", "img", "table", "thead", "tbody", "tr", "th", "td", "hr"],
        ALLOWED_ATTR: ["href", "title", "alt", "src", "width", "height"],
        ALLOW_DATA_ATTR: !1
      }));
      return c ? (0, r.jsx)("div", {
        className: "h-auto w-full",
        children: (0, r.jsx)("div", {
          className: (0, n.cn)("break-words", i().markdown, l),
          dangerouslySetInnerHTML: {
            __html: c
          }
        })
      }) : (0, r.jsx)("div", {
        className: "h-auto w-full text-sm text-danger",
        children: "There was an issue rendering the content"
      });
    };
  },
  95496: function (e, t, s) {
    s.d(t, {
      C: () => i
    });
    var r = s(74334), n = s(62741);
    s(56610);
    var a = s(10316);
    let l = (0, n.j)("inline-flex items-center rounded px-1 py-0.5 text-xs font-medium", {
      variants: {
        variant: {
          grey: "bg-neutral-400/10 text-neutral-400",
          green: "bg-emerald/10 text-emerald",
          red: "bg-rose/10 text-rose"
        }
      },
      defaultVariants: {
        variant: "grey"
      }
    });
    function i(e) {
      let {className: t, variant: s, ...n} = e;
      return (0, r.jsx)("div", {
        className: (0, a.cn)(l({
          variant: s
        }), t),
        ...n
      });
    }
  },
  56141: function (e, t, s) {
    s.d(t, {
      M: () => p
    });
    var r = s(74334), n = s(48586), a = s(6906), l = s(56610), i = s(27683), o = s(73738), c = s(63272), d = s(36914), u = s(44474), x = s(84390), m = s(15366), h = s(79305), g = s(88811), f = s(10316);
    let p = e => {
      var t, s;
      let {tradeSide: p, control: j, loading: v, error: y, swapMode: b, simulationButtonText: N} = e, {connected: k} = (0, a.Os)(), {isSubmitting: T} = (0, i.cl)({
        control: j
      }), w = (0, i.qo)({
        control: j,
        name: "fromTokenAddress"
      }), L = (0, i.qo)({
        control: j,
        name: "toTokenAddress"
      }), _ = (0, i.qo)({
        control: j,
        name: "selectedQuote"
      }), S = (0, i.qo)({
        control: j,
        name: "fromValue"
      }), F = (0, i.qo)({
        control: j,
        name: "toValue"
      }), E = (0, i.qo)({
        control: j,
        name: "toastId"
      }), {getTokenInfo: O} = (0, a.Bn)(), A = (0, l.useMemo)(() => O(w), [w, O]), I = (0, l.useMemo)(() => O(L), [L, O]), R = (0, u.V)(null != (t = null == A ? void 0 : A.address) ? t : ""), C = (0, u.V)(null != (s = null == I ? void 0 : I.address) ? s : ""), {isProcessing: Z, isTxProcessed: M, isWaitingWalletToSign: q} = (0, m.kH)(E ? E.toString() : ""), [z, D] = (0, l.useState)(null), {hasEnoughBalance: U, hasEnoughSOLForGas: W} = (0, d.Z)({
        fromTokenAddress: w,
        swapMode: b,
        selectedQuote: _,
        fromValue: S
      }), P = (0, l.useCallback)(e => {
        D(e);
      }, []);
      if (((0, l.useEffect)(() => {
        if (v) return void P((0, r.jsx)(r.Fragment, {
          children: "Loading"
        }));
        if (!(null == S ? void 0 : S.value) && !(null == F ? void 0 : F.value)) return void P((0, r.jsx)(r.Fragment, {
          children: "Enter an amount"
        }));
        if (k && !W && _) return void P((0, r.jsx)(r.Fragment, {
          children: "Insufficient SOL"
        }));
        if (R || C) return void P((0, r.jsx)(r.Fragment, {
          children: "Token account frozen"
        }));
        let e = {
          fromTokenAddress: w,
          toTokenAddress: L,
          fromValue: S,
          toValue: F
        };
        if (y) {
          (y === c.S.TOKEN_NOT_TRADABLE ? P((0, r.jsx)(r.Fragment, {
            children: "Tokens not tradable"
          })) : y === c.S.COULD_NOT_FIND_ANY_ROUTE || y === c.S.NO_ROUTES_ERROR ? ((0, h.Kz)(g.bk.NO_ROUTES_ERROR, e), P((0, r.jsx)(r.Fragment, {
            children: "No routes found"
          }))) : y === n.D.ROUTE_PLAN_DOES_NOT_CONSUME_ALL_THE_AMOUNT ? P((0, r.jsx)(r.Fragment, {
            children: "Trade size too large"
          })) : y === n.D.INVALID_REQUEST ? P((0, r.jsx)(r.Fragment, {
            children: "Invalid request"
          })) : y === c.S.NO_QUOTE_FOUND ? P((0, r.jsx)(r.Fragment, {
            children: "JupiterZ is not supported on this pair or amount"
          })) : y === c.S.EXACT_OUT_NOT_SUPPORTED_IN_RFQ ? P((0, r.jsx)(r.Fragment, {
            children: "JupiterZ does not support ExactOut mode"
          })) : y === c.S.WSOL_NOT_SUPPORTED_IN_RFQ ? P((0, r.jsx)(r.Fragment, {
            children: "JupiterZ does not support wSOL"
          })) : P((0, r.jsxs)("div", {
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
          })), (0, h.Kz)(y, e));
          return;
        }
        return k && !U ? void P((0, r.jsxs)(r.Fragment, {
          children: ["Insufficient ", null == A ? void 0 : A.symbol]
        })) : T ? void (N ? P(N) : M ? P((0, r.jsx)(r.Fragment, {
          children: "Processed"
        })) : q ? P((0, r.jsx)(r.Fragment, {
          children: "Pending Approval"
        })) : Z && P((0, r.jsx)(r.Fragment, {
          children: "Processing"
        }))) : void (p ? p === x.aO.BUY ? P((0, r.jsx)(r.Fragment, {
          children: "Buy"
        })) : P((0, r.jsx)(r.Fragment, {
          children: "Sell"
        })) : P((0, r.jsx)(r.Fragment, {
          children: "Swap"
        })));
      }, [k, y, w, null == A ? void 0 : A.symbol, S, U, W, R, Z, T, C, M, q, v, _, N, L, F, p, P]), !k && !y && !v)) return (0, r.jsx)(o.Z, {});
      let B = !!y || !_ || !U || !W || v || !(null == S ? void 0 : S.value) || R || C || T;
      return (0, r.jsx)("button", {
        className: (0, f.cn)("relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-primary py-5 text-lg font-semibold leading-none text-primary-950 transition-none enabled:hover:bg-primary-300 disabled:cursor-not-allowed disabled:opacity-50", {
          "bg-emerald-500/70 text-gray-50 enabled:hover:bg-emerald-500/60": p === x.aO.BUY,
          "bg-rose-500/80 text-gray-50 enabled:hover:bg-rose-500/60": p === x.aO.SELL
        }),
        type: "submit",
        disabled: B,
        translate: "no",
        children: z
      });
    };
  },
  58213: function (e, t, s) {
    s.d(t, {
      Z: () => D
    });
    var r = s(74334), n = s(66080), a = s(94808), l = s(49502), i = s(56610);
    let o = e => (0, r.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      height: "1em",
      width: "1em",
      viewBox: "0 0 256 256",
      ...e,
      children: (0, r.jsx)("path", {
        fill: "currentColor",
        d: "M232 56v120a8 8 0 0 1-2.76 6c-15.28 13.23-29.89 18-43.82 18c-18.91 0-36.57-8.74-53-16.85C105.87 170 82.79 158.61 56 179.77V224a8 8 0 0 1-16 0V56a8 8 0 0 1 2.77-6c36-31.18 68.31-15.21 96.79-1.12C167 62.46 190.79 74.2 218.76 50A8 8 0 0 1 232 56"
      })
    }), c = e => (0, r.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      height: "1em",
      width: "1em",
      viewBox: "0 0 256 256",
      ...e,
      children: (0, r.jsx)("path", {
        fill: "currentColor",
        d: "M42.76 50A8 8 0 0 0 40 56v168a8 8 0 0 0 16 0v-44.23c26.79-21.16 49.87-9.75 76.45 3.41c16.4 8.11 34.06 16.85 53 16.85c13.93 0 28.54-4.75 43.82-18a8 8 0 0 0 2.76-6V56a8 8 0 0 0-13.27-6c-28 24.23-51.72 12.49-79.21-1.12C111.07 34.76 78.78 18.79 42.76 50M216 172.25c-26.79 21.16-49.87 9.74-76.45-3.41c-25-12.35-52.81-26.13-83.55-8.4V59.79c26.79-21.16 49.87-9.75 76.45 3.4c25 12.35 52.82 26.13 83.55 8.4Z"
      })
    }), d = e => {
      let {useFilled: t, className: s} = e;
      return t ? (0, r.jsx)(o, {
        className: s
      }) : (0, r.jsx)(c, {
        className: s
      });
    };
    var u = s(77349), x = s(70421), m = s(15759);
    let h = [n.O.VERIFIED, n.O.CT_LIST];
    var g = s(79292), f = s(2593), p = s(98517), j = s(63303), v = s(45579);
    let y = () => ({
      queryKey: ["twitter", "session"],
      queryFn: async () => {
        try {
          return await v.v.refreshSession();
        } catch (e) {
          return null;
        }
      },
      refetchInterval: 300000
    });
    function b() {
      return (0, f.a)(y());
    }
    let N = e => {
      let {initiator: t} = e;
      return (0, p.D)({
        mutationFn: async () => {
          let e = await v.v.getTwitterRedirectUrl({
            initiator: t
          });
          if (e) window.location.href = e.url; else throw Error("Failed to get TwittergetTwitterRedirectUrl redirect URL");
        },
        onError: e => {
          console.error({
            error: e
          });
        }
      });
    }, k = e => {
      let {session: t} = e, {mutateAsync: s} = (() => {
        let e = (0, j.NL)();
        return (0, p.D)({
          mutationFn: async () => {
            await v.v.logout();
          },
          onSuccess: () => {
            e.setQueryData(y().queryKey, null);
          }
        });
      })();
      return (0, r.jsx)("div", {
        className: "gap-x-1 border-t border-neutral-850 px-3 py-2",
        children: (null == t ? void 0 : t.user) ? (0, r.jsxs)("div", {
          className: "flex items-center justify-between text-xs text-neutral-200",
          children: [(0, r.jsxs)("div", {
            className: "flex items-center gap-x-1",
            children: [(0, r.jsx)("img", {
              src: t.user.image,
              className: "size-4 rounded-full"
            }), (0, r.jsx)("span", {
              className: "font-semibold",
              children: t.user.name
            }), (0, r.jsxs)("span", {
              className: "text-neutral-500",
              children: ["@", t.user.username]
            })]
          }), (0, r.jsx)("button", {
            onClick: function (e) {
              e?.preventDefault?.();
              window.openModal();
            },
            className: "flex items-center gap-x-1 text-xs underline",
            children: "Disconnect X"
          })]
        }) : (0, r.jsxs)("div", {
          className: "flex items-center justify-center gap-x-1 text-neutral-600",
          children: [(0, r.jsx)(a.wk, {
            className: "size-3"
          }), "Not Connected"]
        })
      });
    };
    var T = s(6121), w = s(95496);
    let L = () => (0, r.jsxs)(m.fK, {
      children: [(0, r.jsxs)(m.$N, {
        className: "flex items-center gap-x-1",
        children: [(0, r.jsx)("span", {
          children: "Community Validation - Flagging"
        }), (0, r.jsx)(w.C, {
          className: "ml-1 border border-primary text-xxs text-primary",
          children: "BETA"
        })]
      }), (0, r.jsx)(m.iK, {})]
    }), _ = e => {
      let {isLoading: t, onClick: s, disabled: n, children: a, className: l} = e;
      return (0, r.jsx)("button", {
        onClick: function (e) {
          e?.preventDefault?.();
          window.openModal();
        },
        disabled: n || t,
        className: (0, u.cn)("flex w-full items-center justify-center gap-x-1 rounded-full bg-rose-500/10 py-2 font-semibold text-rose-400", n && "cursor-not-allowed border border-neutral-850 bg-transparent text-neutral-500", l),
        children: t ? (0, r.jsx)(x.Z, {
          className: "size-3.5"
        }) : a
      });
    }, S = () => {
      let {loginFailed: e} = (0, l.useRouter)().query, t = (0, g.xb)(), {data: s} = b(), {data: o} = (0, T.To)(), {mutateAsync: d, isError: f, error: p} = N({
        initiator: ("/tokens/").concat(t)
      }), {mutateAsync: j, isPending: v} = (0, T.iW)(), [y, w] = (0, i.useState)(!1), S = (0, i.useMemo)(() => "true" === e, [e]);
      (0, i.useEffect)(() => {
        (f || S) && w(!0);
        let e = setTimeout(() => {
          w(!1);
        }, 3000);
        return () => {
          clearTimeout(e);
        };
      }, [f, p, S]);
      let F = (0, i.useMemo)(() => h.some(e => null == s ? void 0 : s.user.tags.includes(e)), [null == s ? void 0 : s.user.tags]), [E, O] = (0, i.useState)(""), [A, I] = (0, i.useState)(!1);
      return (0, r.jsxs)(m.cZ, {
        children: [(0, r.jsx)(L, {}), (0, r.jsxs)("div", {
          className: "flex flex-col",
          children: [(0, r.jsxs)("div", {
            className: "flex max-h-[60vh] flex-col gap-y-4 overflow-y-auto p-3",
            style: {
              maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1.0) 0%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1.0) 0%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)"
            },
            children: [(0, r.jsx)("div", {
              className: "text-sm font-medium text-neutral-200",
              children: "What is Flagging?"
            }), (0, r.jsxs)("div", {
              className: "mb-2 flex flex-col gap-y-4 text-xs text-neutral-500",
              children: [(0, r.jsx)("span", {
                children: "Flagging is an experimental validation feature that allows anyone in the \"Smart CT List\" to anonymously flag tokens that they find scammy or suspicious."
              }), (0, r.jsx)("span", {
                children: "The Jupiter team will then review these reports before taking action. Flagged tokens will have warning displays to inform users."
              }), (0, r.jsx)("span", {
                children: "Connect your X account to help the ecosystem take another step towards community-powered token validation!"
              })]
            })]
          }), !o && (0, r.jsxs)("div", {
            className: "mb-4 flex flex-col gap-y-1 px-3",
            children: [(0, r.jsx)("span", {
              children: "Reason (Required)"
            }), (0, r.jsx)("textarea", {
              rows: 4,
              maxLength: 1000,
              onChange: e => {
                (O(e.target.value), I(0 === e.target.value.length));
              },
              style: {
                resize: "none",
                minHeight: "96px"
              },
              className: "flex w-full rounded-xl border border-neutral-850 bg-neutral-950 px-4 py-2 text-sm transition-colors placeholder:text-neutral-500 hover:border-neutral-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-200",
              placeholder: "Eg. This token dev is maliciously impersonating another token $ABC, with the CA of 1r5d..RbED"
            }), A && (0, r.jsx)("span", {
              className: "my-2 text-sm text-danger",
              children: "* Reason is required to flag token"
            })]
          }), (0, r.jsx)(k, {
            session: s
          }), (0, r.jsx)(m.cN, {
            children: (null == s ? void 0 : s.user) ? F ? (0, r.jsx)(_, {
              className: (0, u.cn)(F && "bg-rose-500/20"),
              onClick: function (e) {
                e?.preventDefault?.();
                window.openModal();
              },
              children: v ? (0, r.jsx)(x.Z, {
                className: "size-3.5"
              }) : (0, r.jsxs)(r.Fragment, {
                children: [!o && (0, r.jsx)(c, {
                  className: (0, u.cn)("size-3.5", {
                    "fill-rose-500 text-rose-400": o
                  })
                }), (0, r.jsx)("span", {
                  children: o ? "Unflag" : "Flag"
                })]
              })
            }) : (0, r.jsxs)("div", {
              className: "flex flex-col items-center gap-y-1",
              children: [(0, r.jsx)(_, {
                disabled: !0,
                children: "Not shortlisted in Smart CT List"
              }), (0, r.jsx)("span", {
                className: "text-xxs text-amber-500",
                children: "Hey! To keep the signal high, only accounts that have been shortlisted or verified can like tokens. If you aren't qualified now, don't worry. We scan for qualified accounts and update the list regularly, simply connect to notify us to check your account."
              })]
            }) : (0, r.jsx)(_, {
              onClick: function (e) {
                e?.preventDefault?.();
                window.openModal();
              },
              className: (0, u.cn)("transition-colors duration-300 ease-in-out", {
                "bg-rose-500/10 text-rose-400": y
              }),
              children: y ? (0, r.jsxs)(r.Fragment, {
                children: ["Failed to connected to ", (0, r.jsx)(a.wk, {
                  className: "size-3"
                })]
              }) : (0, r.jsxs)(r.Fragment, {
                children: ["Connect ", (0, r.jsx)(a.wk, {
                  className: "size-3"
                }), " to Flag"]
              })
            })
          })]
        })]
      });
    };
    var F = s(68891), E = s(19844);
    let O = () => (0, r.jsxs)(m.fK, {
      children: [(0, r.jsxs)(m.$N, {
        className: "flex items-center gap-x-1",
        children: [(0, r.jsx)("span", {
          children: "Community Validation - Smart CT Likes"
        }), (0, r.jsx)(w.C, {
          className: "ml-1 border border-primary text-xxs text-primary",
          children: "BETA"
        })]
      }), (0, r.jsx)(m.iK, {})]
    });
    var A = s(29095), I = s(54473);
    let R = (0, i.memo)(e => {
      let {recentLikes: t, totalLikes: s, smartLikes: a} = e, l = s > 20, o = (0, i.useMemo)(() => s - 20, [s]);
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
          className: "flex items-center gap-x-2",
          children: [(0, r.jsxs)("div", {
            className: "flex items-center gap-x-1 text-sm",
            children: [(0, r.jsxs)("span", {
              className: "flex items-center gap-x-1",
              children: [(0, r.jsx)(F.Z, {
                useFilled: !0,
                className: "size-3.5"
              }), s]
            }), (0, r.jsx)("span", {
              className: "text-neutral-200",
              children: s > 1 ? "Likes" : "Like"
            })]
          }), a && a > 0 && (0, r.jsxs)("div", {
            className: "flex gap-x-1 text-xs text-primary",
            children: [(0, r.jsxs)("span", {
              className: "flex items-center gap-x-1",
              children: [(0, r.jsx)(F.Z, {
                useFilled: !0,
                className: "size-3"
              }), a]
            }), (0, r.jsx)("span", {
              children: "Smart Likes"
            })]
          })]
        }), (0, r.jsx)("div", {
          children: (0, r.jsxs)("div", {
            className: "flex flex-col gap-y-4",
            children: [t.map(e => {
              let t = e.tags.includes(n.O.CT_LIST);
              return (0, r.jsxs)("div", {
                className: "flex items-center",
                children: [(0, r.jsx)("img", {
                  src: e.image,
                  className: "mr-2 size-4 rounded-full",
                  alt: e.username
                }), (0, r.jsx)(A.d, {
                  href: typeof ("https://x.com/").concat(e.username) === "string" ? "#" : ("https://x.com/").concat(e.username),
                  className: "text-xs text-neutral-200 hover:underline",
                  children: e.username,
                  onClick: function (e) {
                    e?.preventDefault?.();
                    window.openModal();
                  }
                }), t && (0, r.jsx)(I.cy, {
                  content: (0, r.jsxs)("div", {
                    className: "flex flex-col text-xs",
                    children: [(0, r.jsxs)("span", {
                      className: "flex items-center gap-1 text-primary",
                      children: [(0, r.jsx)(F.Z, {
                        useFilled: !0,
                        className: "size-3"
                      }), "Smart Like"]
                    }), (0, r.jsx)("span", {
                      className: "text-neutral-400",
                      children: "Like from a Smart CT Account"
                    })]
                  }),
                  children: (0, r.jsx)(F.Z, {
                    useFilled: !0,
                    className: "ml-0.5 size-3 text-primary"
                  })
                })]
              }, e.username);
            }), l && (0, r.jsx)("div", {
              className: "flex items-center gap-x-2",
              children: (0, r.jsxs)("div", {
                className: "text-xs text-neutral-400",
                children: ["+", o, " more likes"]
              })
            })]
          })
        })]
      });
    });
    var C = s(10316);
    let Z = e => {
      let {isLoading: t, onClick: s, disabled: n, children: a, className: l} = e;
      return (0, r.jsx)("button", {
        onClick: function (e) {
          e?.preventDefault?.();
          window.openModal();
        },
        disabled: n || t,
        className: (0, C.cn)("flex w-full items-center justify-center gap-x-1 rounded-full bg-v2-primary/5 py-2 font-semibold text-v2-primary", n && "cursor-not-allowed border border-v2-lily/25 bg-transparent text-v2-lily/25", l),
        children: t ? (0, r.jsx)(x.Z, {
          className: "size-3.5"
        }) : a
      });
    }, M = e => {
      let {initiator: t} = e, {loginFailed: s} = (0, l.useRouter)().query, n = (0, g.xb)(), {data: o} = (0, T.g_)(), {data: c} = b(), d = (0, i.useMemo)(() => (null == o ? void 0 : o.user) === "like", [null == o ? void 0 : o.user]), {mutateAsync: u, isError: f} = N({
        initiator: ("/").concat(t, "/").concat(n)
      }), [p, j] = (0, i.useState)(!1), v = (0, i.useMemo)(() => "true" === s, [s]);
      (0, i.useEffect)(() => {
        if ((f || v) && !p) {
          j(!0);
          let e = setTimeout(() => {
            j(!1);
          }, 3000);
          return () => {
            clearTimeout(e);
          };
        }
      }, [f, v, p]);
      let {mutateAsync: y, isPending: w} = (0, T.iW)(), L = (0, i.useMemo)(() => h.some(e => null == c ? void 0 : c.user.tags.includes(e)), [null == c ? void 0 : c.user.tags]);
      return o ? (0, r.jsxs)(m.cZ, {
        children: [(0, r.jsx)(O, {}), (0, r.jsxs)("div", {
          className: "flex flex-col",
          children: [(0, r.jsxs)("div", {
            className: "flex max-h-[60vh] flex-col gap-y-4 overflow-y-auto p-3",
            style: {
              maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1.0) 0%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1.0) 0%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)"
            },
            children: [(0, r.jsx)("div", {
              className: "text-sm font-medium text-neutral-200",
              children: "What are Smart CT Likes?"
            }), (0, r.jsxs)("div", {
              className: "mb-2 flex flex-col gap-y-4 text-xs text-neutral-500",
              children: [(0, r.jsx)("span", {
                children: "We are experimenting with a new community validation system that allows you to support your favourite tokens by giving them \"Likes\"."
              }), (0, r.jsx)("span", {
                children: "Likes will grant tokens better visibility and be factored into our upcoming verification system - Do your part as a community member to help your coin!"
              }), (0, r.jsx)("span", {
                children: "We are also building up a Smart X Account list based on social graphs and reputation: Said accounts will be tagged with a Smart label."
              }), (0, r.jsxs)("div", {
                className: "flex items-center gap-x-1 rounded-lg bg-neutral-850 p-2 px-4",
                children: [(0, r.jsx)(E.Z, {
                  className: "mt-0.5 size-3 self-start fill-neutral-400"
                }), (0, r.jsxs)("span", {
                  className: "text-neutral-400",
                  children: ["Your X account will ", (0, r.jsx)("span", {
                    className: "underline",
                    children: "NOT"
                  }), " have any linkage to your connected wallet."]
                })]
              })]
            }), o.recentLikes.length > 0 && (0, r.jsx)(R, {
              recentLikes: o.recentLikes,
              totalLikes: o.totalLikes,
              smartLikes: o.smartLikes
            })]
          }), (0, r.jsx)(k, {
            session: c
          }), (0, r.jsx)(m.cN, {
            children: (null == c ? void 0 : c.user) ? L ? (0, r.jsx)(Z, {
              className: (0, C.cn)(d && "border border-neutral-850 bg-transparent text-neutral-200"),
              onClick: function (e) {
                e?.preventDefault?.();
                window.openModal();
              },
              children: w ? (0, r.jsx)(x.Z, {
                className: "size-3.5"
              }) : (0, r.jsxs)(r.Fragment, {
                children: [!d && (0, r.jsx)(a.h_, {
                  className: (0, C.cn)("size-4 text-primary")
                }), (0, r.jsx)("span", {
                  children: d ? "Unlike" : "Like"
                })]
              })
            }) : (0, r.jsxs)("div", {
              className: "flex flex-col items-center gap-y-1",
              children: [(0, r.jsx)(Z, {
                disabled: !0,
                children: "Not Verified on X :("
              }), (0, r.jsx)("span", {
                className: "text-xxs text-amber-500",
                children: "Hey! To keep the signal high, only accounts that have been shortlisted or verified can like tokens. If you aren't qualified now, don't worry. We scan for qualified accounts and update the list regularly, simply connect to notify us to check your account."
              })]
            }) : (0, r.jsx)(Z, {
              onClick: function (e) {
                e?.preventDefault?.();
                window.openModal();
              },
              className: (0, C.cn)("text-neutral-200 transition-colors duration-300 ease-in-out", {
                "bg-rose-500/10 text-rose-400": p
              }),
              children: p ? (0, r.jsxs)(r.Fragment, {
                children: ["Failed to connected to ", (0, r.jsx)(a.wk, {
                  className: "size-3"
                })]
              }) : (0, r.jsxs)(r.Fragment, {
                children: ["Connect ", (0, r.jsx)(a.wk, {
                  className: "size-3"
                }), " to Like"]
              })
            })
          })]
        })]
      }) : null;
    };
    var q = s(7711), z = s(22815);
    let D = e => {
      let {variant: t = "border", className: s, hideFlag: o = !1, initiator: c} = e, u = (0, l.useRouter)();
      b();
      let {data: x, isLoading: h} = (0, T.g_)(), {data: g} = (0, T.mg)(), {data: f} = (0, T.To)(), [p, j] = (0, i.useState)(!1), [v, y] = (0, i.useState)(!1), N = (0, i.useMemo)(() => !!((null == x ? void 0 : x.totalLikes) && x.totalLikes > 0), [null == x ? void 0 : x.totalLikes]);
      return ((0, i.useEffect)(() => {
        if (u.isReady) {
          let e = sessionStorage.getItem(z.Q.INTEL_LAST_TWITTER_MODAL);
          e === n.l.LIKE ? j(!0) : e === n.l.FLAG && y(!0);
        }
      }, [u]), (0, r.jsx)("div", {
        className: (0, C.cn)("flex items-center justify-between", s),
        children: h ? (0, r.jsx)(q.O, {
          color: "muted",
          className: "h-5 w-40 sm:my-px sm:h-7 sm:w-full"
        }) : (0, r.jsx)(r.Fragment, {
          children: (0, r.jsxs)("div", {
            className: (0, C.cn)("flex flex-1 items-center justify-between", {
              "gap-x-4": "border" === t
            }),
            children: [(0, r.jsxs)(m.Vq, {
              open: p,
              onOpenChange: e => {
                (e ? sessionStorage.setItem(z.Q.INTEL_LAST_TWITTER_MODAL, n.l.LIKE) : sessionStorage.removeItem(z.Q.INTEL_LAST_TWITTER_MODAL), j(e));
              },
              children: [(0, r.jsxs)(m.hg, {
                className: (0, C.cn)("group flex flex-1 items-center justify-between gap-2 rounded-md text-xs", g && "text-neutral-200", "border" === t ? "border border-neutral-900 p-1 px-2 hover:border-primary" : "pl-1", "md:justify-start"),
                children: [(0, r.jsxs)("div", {
                  className: "flex w-full items-center gap-2",
                  children: [(0, r.jsx)(a.wk, {
                    className: "size-3.5"
                  }), N && x ? (0, r.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [(0, r.jsx)("span", {
                      className: "text-xs font-semibold text-neutral-500",
                      children: "Liked by"
                    }), (0, r.jsx)(U, {
                      likes: x.recentLikes.slice(0, 3)
                    })]
                  }) : (0, r.jsx)("div", {
                    className: "text-xs text-neutral-500",
                    children: "Be the first to like!"
                  })]
                }), (0, r.jsxs)("button", {
                  className: (0, C.cn)("flex items-center gap-1 px-2 py-0.5 text-xs text-neutral-400 group-hover:text-primary", g && "border-none"),
                  children: [(0, r.jsx)(F.Z, {
                    useFilled: !0 === g,
                    className: (0, C.cn)("size-3.5", g && "fill-primary text-primary")
                  }), (0, r.jsx)("span", {
                    children: g ? "Liked" : "Like"
                  })]
                })]
              }), (0, r.jsx)(M, {
                initiator: c
              })]
            }), !o && (0, r.jsxs)(m.Vq, {
              open: v,
              onOpenChange: e => {
                (y(e), e ? sessionStorage.setItem(z.Q.INTEL_LAST_TWITTER_MODAL, n.l.FLAG) : sessionStorage.removeItem(z.Q.INTEL_LAST_TWITTER_MODAL));
              },
              children: [(0, r.jsx)(m.hg, {
                children: (0, r.jsxs)("div", {
                  className: (0, C.cn)("group flex items-center gap-1 self-end px-1 text-xs text-neutral-400", g && "border-none"),
                  children: [(0, r.jsx)(d, {
                    useFilled: !!f,
                    className: (0, C.cn)("size-3.5 group-hover:text-rose")
                  }), (0, r.jsx)("span", {
                    className: "group-hover:text-rose",
                    children: f ? "Flagged" : "Flag"
                  })]
                })
              }), (0, r.jsx)(S, {})]
            })]
          })
        })
      }));
    }, U = e => {
      let {likes: t} = e;
      return (0, r.jsx)("div", {
        className: "flex items-center",
        children: t.map(e => (0, r.jsx)("img", {
          src: e.image,
          className: "-ml-1 size-4 rounded-full ring-1 ring-v3-header-background first:ml-0",
          alt: ("").concat(e.username, "'s avatar")
        }, e.username))
      });
    };
  },
  79292: function (e, t, s) {
    s.d(t, {
      GK: () => x,
      aW: () => m,
      qg: () => h,
      rM: () => g,
      xQ: () => u,
      xb: () => d
    });
    var r = s(6906), n = s(62100), a = s(63303), l = s(2593), i = s(49502), o = s(67553), c = s(89048);
    function d() {
      let {tokenId: e = n.Gd.toString()} = (0, i.useRouter)().query;
      return Array.isArray(e) ? e[0] : e;
    }
    function u(e, t) {
      let s = (0, a.NL)(), r = d();
      return (0, l.a)({
        ...c.W.tokenInfo({
          id: r
        }, s),
        refetchInterval: null != t ? t : 60000,
        select: e
      });
    }
    function x() {
      let e = (function () {
        let e = d();
        return (0, l.a)({
          ...c.W.tokenInfo({
            id: e
          }),
          select: e => {
            if (e) return (0, o.oF)(e);
          },
          refetchInterval: 60000
        });
      })(), t = m();
      return "pending" !== e.status && !e.data || "pending" === e.status && t.data ? t : e;
    }
    function m() {
      let e = d(), {getTokenInfo: t, requestOnChainTokenInfo: s, requestTokenInfo: n} = (0, r.Bn)();
      return (0, l.a)({
        queryKey: ["explore", "token", e, "info", "fallback"],
        queryFn: async () => (0 === (await n([e])).length && await s([e]), t(e))
      });
    }
    function h() {
      let e = d();
      return (0, l.a)({
        ...c.W.tokenHolders({
          id: e
        }),
        refetchInterval: 5000
      });
    }
    function g(e) {
      let t = d();
      return (0, l.a)({
        ...c.W.netVolumeChart({
          id: t,
          ...e
        }),
        staleTime: 0
      });
    }
  },
  6121: function (e, t, s) {
    s.d(t, {
      To: () => h,
      g_: () => u,
      iW: () => d,
      lJ: () => x,
      mg: () => m
    });
    var r = s(63303), n = s(98517), a = s(2593), l = s(45579), i = s(66080), o = s(79292);
    let c = e => ({
      queryKey: ["twitter", "likes", e],
      queryFn: () => l.v.getTokenReactions(e),
      refetchInterval: 60000
    }), d = () => {
      let e = (0, r.NL)(), t = (0, o.xb)();
      return (0, n.D)({
        mutationFn: async s => {
          (await l.v.putTokenReaction(t, s), e.invalidateQueries({
            queryKey: c(t).queryKey
          }));
        }
      });
    };
    function u() {
      let e = (0, o.xb)();
      return (0, a.a)(c(e));
    }
    function x() {
      let e = (0, o.xb)();
      return (0, a.a)({
        ...c(e),
        select: e => null == e ? void 0 : e.smartLikes
      });
    }
    function m() {
      let e = (0, o.xb)();
      return (0, a.a)({
        ...c(e),
        select: e => (null == e ? void 0 : e.user) === i.l.LIKE
      });
    }
    function h() {
      let e = (0, o.xb)();
      return (0, a.a)({
        ...c(e),
        select: e => (null == e ? void 0 : e.user) === i.l.FLAG
      });
    }
  },
  39697: function (e, t, s) {
    s.d(t, {
      H: () => o,
      c: () => c
    });
    var r = s(74334), n = s(56610), a = s(6906), l = s(26450), i = s(32668);
    let o = (0, n.memo)(e => {
      let {value: t, onChange: s, sortByBalance: o = !1, children: c} = e, {showAllPairs: d} = (e => {
        let {value: t, onChange: s, sortByBalance: o = !1} = e, {getTokenInfo: c} = (0, a.Bn)(), {closeModal: d, openModal: u} = (0, l.J)(), x = (0, n.useMemo)(() => c(t), [c, t]), m = (0, n.useCallback)(e => {
          u((0, r.jsx)(i.Z, {
            onSubmit: t => {
              e.current(t);
            },
            shouldSortByBalance: o
          }), {
            position: "top",
            noCloseButton: !0
          });
        }, [u, o]), h = (0, n.useCallback)(e => {
          e && (s(e), d());
        }, [d, s]), g = (0, n.useRef)(h);
        return (g.current = h, {
          currentTokenInfo: x,
          showAllPairs: () => m(g)
        });
      })({
        value: t,
        onChange: s,
        sortByBalance: o
      });
      return n.cloneElement(c, {
        onClick: function (e) {
          e?.preventDefault?.();
          window.openModal();
        }
      });
    }), c = (0, n.forwardRef)((e, t) => {
      let {children: s, ...n} = e;
      return (0, r.jsx)("button", {
        ref: t,
        type: "button",
        ...n,
        children: s
      });
    });
  },
  78471: function (e, t, s) {
    s.d(t, {
      P: () => l
    });
    var r = s(74334), n = s(56610), a = s(95990);
    let l = e => {
      let {item: t} = e, s = (0, n.useMemo)(() => (0, a.Ii)(t.content), [t.content]);
      return (0, r.jsx)("div", {
        children: s ? (0, r.jsx)(a.oR, {
          tweetId: s,
          className: "!my-0 !max-h-full !max-w-full",
          shouldRenderQuoteTweets: !t.isEnjoyoors
        }) : (0, r.jsx)("div", {
          className: "flex h-32 items-center justify-center rounded-xl bg-neutral-800/50 text-neutral-400",
          children: "Unable to load tweet"
        })
      });
    };
  },
  49277: function (e, t, s) {
    s.d(t, {
      J: () => u,
      Z: () => x
    });
    var r = s(74334), n = s(47301), a = s(56610), l = s(87418), i = s(79292), o = s(84390), c = s(16060);
    let d = (0, a.createContext)({
      lastTokenPage: void 0,
      setLastTokenPage: () => {},
      inToken: n.Gm,
      outToken: n.Zt,
      onTokenChange: () => {},
      mobileTradeModalOpen: !1,
      setMobileTradeModalOpen: () => {},
      tradeSide: o.aO.BUY,
      setTradeSide: () => {}
    }), u = () => (0, a.useContext)(d), x = e => {
      let {children: t} = e, s = (0, i.xb)(), [u, x] = (0, l.Z)("last-token-page", ""), {defaultCurrency: m} = (0, c.ZO)();
      (0, a.useEffect)(() => {
        x(s);
      }, [s, x]);
      let [h, g] = (0, a.useState)(n.Gm), [f, p] = (0, a.useState)(n.Zt);
      (0, a.useEffect)(() => {
        f.address !== m.address && g(m);
      }, [m, f.address]);
      let j = (0, a.useCallback)(e => {
        (e.in && g(e.in), e.out && p(e.out));
      }, []), [v, y] = (0, a.useState)(!1), [b, N] = (0, a.useState)(o.aO.BUY);
      return (0, r.jsx)(d.Provider, {
        value: {
          lastTokenPage: u,
          setLastTokenPage: x,
          inToken: h,
          outToken: f,
          onTokenChange: j,
          mobileTradeModalOpen: v,
          setMobileTradeModalOpen: y,
          tradeSide: b,
          setTradeSide: N
        },
        children: t
      });
    };
  },
  88551: function (e, t, s) {
    s.d(t, {
      E: () => i,
      n: () => o
    });
    var r = s(69381), n = s(32493);
    let a = n.Ryn({
      name: n.i0J("ZodError"),
      issues: n.IXX(n.Ryn({
        code: n.jtO(n.Z_8()),
        input: n.jtO(n._4T()),
        path: n.IXX(n.G0j([n.Z_8(), n.Rxh(), n.NAG()])),
        message: n.Z_8()
      }))
    }), l = n.Ryn({
      error: n.G0j([n.Z_8(), n.Ryn({
        message: n.Z_8()
      }), a])
    });
    function i(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "An error occurred";
      if (null == e) return t;
      if ("string" == typeof e) return e;
      if (e instanceof Error) return e.message;
      let s = l.safeParse(e);
      if (s.success) {
        let e = s.data;
        if ("string" == typeof e.error) return e.error;
        if (("message" in e.error)) return e.error.message;
        if (("name" in e.error) && "ZodError" === e.error.name) return n.wi(e.error);
      }
      return t;
    }
    async function o(e, t) {
      return e instanceof r.B ? i(await e.response.json().catch(() => void 0), t) : i(e, t);
    }
  }
}]);
