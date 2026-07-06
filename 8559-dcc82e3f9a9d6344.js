"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([["8559"], {
  91531: function (e, t, s) {
    s.d(t, {
      D$: () => o,
      Eo: () => n,
      Gm: () => r,
      TU: () => d,
      Yb: () => i,
      Zt: () => l,
      _I: () => x,
      do: () => h,
      ih: () => a,
      rX: () => u,
      sO: () => m
    });
    let l = {
      chainId: 101,
      address: "So11111111111111111111111111111111111111112",
      name: "Wrapped SOL",
      symbol: "SOL",
      decimals: 9,
      logoURI: "solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png",
      tags: ["community", "verified", "strict"],
      extensions: {
        website: "https://solana.com/",
        serumV3Usdc: "9wFFyRfZBsuAha4YcuxcXLKwMxJR43S7fPfQLusDBzvT",
        serumV3Usdt: "HWHvQhFmJB3NUcu1aihKmrKegfVxBEHzwVX6yZCKEsi1",
        coingeckoId: "solana"
      }
    }, a = {
      chainId: 101,
      address: "7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs",
      name: "Ether (Portal)",
      symbol: "ETH",
      decimals: 8,
      logoURI: "solana-labs/token-list/main/assets/mainnet/7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs/logo.png",
      tags: ["community", "strict", "verified", "birdeye-trending"]
    }, n = {
      chainId: 101,
      address: "3NZ9JMVBmGAqocybic2c7LQCJScmgsAZ6vQqTDzcqmJh",
      name: "Wrapped BTC (Portal)",
      symbol: "WBTC",
      decimals: 8,
      logoURI: "solana-labs/token-list/main/assets/mainnet/3NZ9JMVBmGAqocybic2c7LQCJScmgsAZ6vQqTDzcqmJh/logo.png",
      tags: ["strict", "verified", "community", "birdeye-trending"],
      extensions: {
        address: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
        assetContract: "https://etherscan.io/address/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
        bridgeContract: "https://etherscan.io/address/0x3ee18B2214AFF97000D974cf647E7C347E8fa585",
        coingeckoId: "wrapped-bitcoin"
      }
    }, r = {
      chainId: 101,
      address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
      symbol: "USDC",
      name: "USD Coin",
      decimals: 6,
      logoURI: "solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png",
      tags: ["strict", "verified", "community"],
      extensions: {
        website: "https://www.centre.io/",
        coingeckoId: "usd-coin",
        serumV3Usdt: "77quYg4MGneUdjgXCunt9GgM1usmrxKY31twEy3WHwcS"
      }
    }, i = {
      address: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
      chainId: 101,
      decimals: 6,
      logoURI: "solana-labs/token-list/main/assets/mainnet/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB/logo.svg",
      name: "USDT",
      symbol: "USDT",
      tags: ["strict", "community", "verified"]
    }, o = Object.freeze({
      So11111111111111111111111111111111111111112: l,
      "7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs": a,
      "3NZ9JMVBmGAqocybic2c7LQCJScmgsAZ6vQqTDzcqmJh": n
    }), c = Object.freeze({
      EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v: r,
      Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB: i
    }), d = Object.freeze({
      ...o,
      ...c
    }), x = Object.freeze({
      SOL: l,
      ETH: a,
      WBTC: n
    }), u = Object.values(d), m = Object.values(o);
    Object.values(c);
    let h = 6;
  },
  76661: function (e, t, s) {
    s.d(t, {
      O: () => i
    });
    var l = s(2593);
    let a = s(77424).env.NEXT_PUBLIC_JUPITER_QUOTE_API_URL || "https://quote-api.jup.ag/v6";
    class n {
      async getProgramIdToLabel() {
        let e = await fetch(this.ROUTE.PROGRAM_ID_TO_LABEL, {
          method: "GET"
        });
        if (!e.ok) throw e;
        return await e.json();
      }
      constructor() {
        this.ROUTE = {
          PROGRAM_ID_TO_LABEL: ("").concat(a, "/program-id-to-label"),
          QUOTE: ("").concat(a, "/quote"),
          SWAP: ("").concat(a, "/swap")
        };
      }
    }
    let r = new n();
    function i() {
      return (0, l.a)({
        queryKey: ["programIdToLabel"],
        queryFn: async () => await r.getProgramIdToLabel(),
        gcTime: 1 / 0,
        staleTime: 1 / 0
      });
    }
  },
  24440: function (e, t, s) {
    s.d(t, {
      h: () => eu
    });
    var l = s(74334), a = s(56610), n = s(26913);
    let r = () => (0, l.jsxs)("div", {
      className: "flex-1 space-y-3 overflow-y-auto bg-neutral-925 px-4 py-3",
      children: [(0, l.jsxs)("div", {
        className: "space-y-1",
        children: [(0, l.jsxs)("div", {
          className: "flex items-center gap-x-1",
          children: [(0, l.jsx)(n.J, {
            className: "size-3 text-primary-200",
            height: 12,
            width: 12
          }), (0, l.jsx)("span", {
            className: "text-sm font-semibold text-neutral-300",
            children: "What is Ultra V2?"
          })]
        }), (0, l.jsx)("p", {
          className: "text-xs text-neutral-500",
          children: "Ultra V2 is designed to help you get the most out of every swap by optimising for the transaction’s success rate and slippage."
        })]
      }), (0, l.jsx)(i, {}), (0, l.jsx)(o, {}), (0, l.jsx)(c, {})]
    }), i = () => (0, l.jsxs)("div", {
      className: "space-y-0.5",
      children: [(0, l.jsx)("span", {
        className: "text-xs font-semibold text-neutral-300",
        children: "Optimised Transaction Landing"
      }), (0, l.jsx)("p", {
        className: "text-xs text-neutral-500",
        children: "Ultra V2 dynamically fine-tunes the optimal settings required to land your transaction fast and successfully, while offering MEV mitigation."
      })]
    }), o = () => (0, l.jsxs)("div", {
      className: "space-y-0.5",
      children: [(0, l.jsx)("span", {
        className: "text-xs font-semibold text-neutral-300",
        children: "Real-Time Slippage Estimation (RTSE)"
      }), (0, l.jsx)("p", {
        className: "text-xs text-neutral-500",
        children: "RTSE dynamically calculates the optimal slippage tolerance for your trade by:"
      }), (0, l.jsxs)("ul", {
        className: "text-xs text-neutral-500",
        children: [(0, l.jsx)("li", {
          children: "• Analysing current market conditions"
        }), (0, l.jsx)("li", {
          children: "• Monitoring price impact and volatility"
        }), (0, l.jsx)("li", {
          children: "• Adjusting slippage settings automatically to balance trade success and price protection"
        })]
      })]
    }), c = () => (0, l.jsxs)("div", {
      className: "space-y-0.5",
      children: [(0, l.jsx)("span", {
        className: "text-xs font-semibold text-neutral-300",
        children: "Gasless Support"
      }), (0, l.jsx)("p", {
        className: "text-xs text-neutral-500",
        children: "Not enough SOL to pay for gas fees? Ultra V2 will automatically offer you a gasless trade, as long as the trade has a qualifying value."
      })]
    });
    var d = s(54473), x = s(19407), u = s(10316), m = s(59247), h = s(15759), p = s(99903), f = s(6906), g = s(44223), j = s(83220), v = s(61517), b = s(55971), y = s(1248);
    let w = () => {
      let [e, t] = (0, a.useState)(!1), {excludeRouters: s, setExcludeRouters: n} = (0, m.U)(), {data: r} = (0, j.C)(), i = (0, a.useMemo)(() => r || [], [r]), o = i.map(e => ({
        ...e,
        checked: !s.includes(e.id)
      })), c = i.filter(e => !s.includes(e.id));
      return (0, l.jsxs)("div", {
        className: "flex flex-col gap-y-2 rounded-lg bg-neutral-950 px-3 py-2",
        children: [(0, l.jsxs)("button", {
          onClick: function (e) {
            e?.preventDefault?.();
            window.openModal();
          },
          className: "flex w-full items-center justify-between",
          children: [(0, l.jsxs)("div", {
            className: "flex flex-col items-start gap-y-1",
            children: [(0, l.jsx)("div", {
              className: "text-xs font-semibold text-neutral-500",
              children: "Routers"
            }), (0, l.jsx)("div", {
              className: "flex items-center gap-x-2",
              children: (0, l.jsxs)("span", {
                className: (0, u.cn)("text-xs", c.length === i.length ? "text-neutral-600" : "text-rose-400"),
                children: [("").concat(c.length, "/").concat(i.length, " routers are enabled. "), c.length !== i.length && (0, l.jsx)("button", {
                  className: "text-xs text-neutral-400 underline hover:text-neutral-300",
                  onClick: function (e) {
                    e?.preventDefault?.();
                    window.openModal();
                  },
                  children: "Enable all"
                })]
              })
            })]
          }), (0, l.jsx)("span", {
            className: (0, u.cn)("iconify size-3 text-neutral-400 ph--caret-down-bold", e ? "rotate-180" : "")
          })]
        }), e && (0, l.jsx)("div", {
          className: "rounded-lg bg-neutral-900 p-3",
          children: (0, l.jsx)("div", {
            className: "flex flex-col gap-y-4",
            children: o.map((e, t) => (0, l.jsxs)("div", {
              className: "flex items-center justify-between",
              children: [(0, l.jsxs)("span", {
                className: "flex items-center gap-x-2 text-xs text-neutral-400",
                children: [(0, l.jsx)("img", {
                  src: e.icon,
                  alt: e.name,
                  width: 10,
                  height: 10
                }), (0, l.jsx)("span", {
                  children: e.name
                })]
              }), (0, l.jsxs)("div", {
                className: "flex items-center gap-x-2",
                children: [(0, l.jsx)("button", {
                  onClick: function (e) {
                    e?.preventDefault?.();
                    window.openModal();
                  },
                  className: "text-xs text-neutral-500 hover:text-neutral-200",
                  children: "Only"
                }), (0, l.jsx)(y.r, {
                  checked: e.checked,
                  onCheckedChange: () => {
                    n(e.checked ? [...s, e.id] : s.filter(t => t !== e.id));
                  }
                })]
              })]
            }, ("").concat(e.name)))
          })
        })]
      });
    };
    var N = s(76661);
    let C = () => {
      let {excludedAMM: e, setExcludedAMM: t} = (0, m.U)(), [s, n] = (0, a.useState)(!1), {data: r} = (0, N.O)(), i = (0, a.useMemo)(() => r ? Object.entries(r).map(e => {
        let [t, s] = e;
        return s;
      }).sort() : [], [r]);
      return (0, l.jsxs)("div", {
        className: "flex flex-col gap-y-2 rounded-lg bg-neutral-950 px-3 py-2",
        children: [(0, l.jsxs)("button", {
          onClick: function (e) {
            e?.preventDefault?.();
            window.openModal();
          },
          className: "flex w-full items-center justify-between",
          children: [(0, l.jsxs)("div", {
            className: "flex flex-col items-start gap-y-1",
            children: [(0, l.jsx)("div", {
              className: "text-xs font-semibold text-neutral-500",
              children: "AMM sources"
            }), (0, l.jsx)("div", {
              className: "flex items-center gap-x-2",
              children: (0, l.jsxs)("span", {
                className: (0, u.cn)("text-xs", e.length > 0 ? "text-rose-400" : "text-neutral-600"),
                children: [(" ").concat(i.length - e.length, "/").concat(i.length, " AMM are enabled. "), e.length > 0 && (0, l.jsx)("button", {
                  className: "text-xs text-neutral-400 underline hover:text-neutral-300",
                  onClick: function (e) {
                    e?.preventDefault?.();
                    window.openModal();
                  },
                  children: "Enable all"
                })]
              })
            })]
          }), (0, l.jsx)("span", {
            className: (0, u.cn)("iconify size-3 text-neutral-400 ph--caret-down-bold", s ? "rotate-180" : "")
          })]
        }), s && (0, l.jsx)("div", {
          className: "max-h-[20vh] overflow-y-auto pb-2",
          children: (0, l.jsx)("div", {
            className: "flex flex-col gap-y-4 rounded bg-neutral-900 px-3 py-2",
            children: i.map(s => (0, l.jsxs)("div", {
              className: "flex items-center justify-between",
              children: [(0, l.jsx)("span", {
                className: "flex items-center gap-x-2 text-xs text-neutral-400",
                children: "Whirlpool" === s ? "Orca Whirlpool" : s
              }), (0, l.jsxs)("div", {
                className: "flex items-center gap-x-2",
                children: [(0, l.jsx)("button", {
                  onClick: function (e) {
                    e?.preventDefault?.();
                    window.openModal();
                  },
                  className: "text-xs text-neutral-500 hover:text-neutral-200",
                  children: "Only"
                }), (0, l.jsx)(y.r, {
                  checked: !e.includes(s),
                  onCheckedChange: () => {
                    t(e.includes(s) ? e.filter(e => e !== s) : [...e, s]);
                  }
                })]
              })]
            }, s))
          })
        })]
      });
    };
    var S = s(19844);
    let k = e => {
      let {label: t, tooltipContent: s} = e;
      return (0, l.jsxs)("div", {
        className: "flex items-center gap-x-1.5",
        children: [(0, l.jsx)("span", {
          className: "text-xs font-semibold text-neutral-500",
          children: (0, l.jsx)(l.Fragment, {
            children: t
          })
        }), (0, l.jsx)(d.cy, {
          content: s,
          children: (0, l.jsx)(S.Z, {
            className: "fill-current text-neutral-500",
            height: 12,
            width: 12
          })
        })]
      });
    }, M = () => {
      let {feeType: e, updateFeeType: t} = (0, g.B)();
      return (0, l.jsxs)("div", {
        className: "flex items-center justify-between gap-2",
        children: [(0, l.jsx)(k, {
          label: "Fee Type",
          tooltipContent: (0, l.jsx)("span", {
            className: "flex max-w-xs flex-col rounded-lg text-xs text-neutral-100",
            children: (0, l.jsx)(l.Fragment, {
              children: "For Max Cap, Jupiter will intelligently minimize your fees. Or use Exact Fee to specify your own fee value."
            })
          })
        }), (0, l.jsxs)(p.U, {
          className: "w-[160px]",
          type: "single",
          value: e,
          onValueChange: e => {
            e && t(e);
          },
          children: [(0, l.jsx)(p.G, {
            value: "max-cap",
            children: "Max Cap"
          }), (0, l.jsx)(p.G, {
            value: "exact-fee",
            children: "Exact Fee"
          })]
        })]
      });
    };
    var F = s(76802), L = s(47301), T = s(45060), O = s(72156), z = s(27683), I = s(14674), U = s(55484), q = s(59594), D = s(59987), V = s(65890);
    let E = e => {
      let {setValue: t, control: s} = e, {broadcastModes: n} = (0, g.B)(), {data: r, refetch: i} = (0, T.ay)({
        enabled: n.includes("jito")
      }), o = (0, z.qo)({
        control: s,
        name: "userMaxTipInSOLForm"
      }), c = (0, a.useMemo)(() => r ? [{
        label: ("50th Percentile: ").concat(null == r ? void 0 : r.landed50, " SOL"),
        value: new O.Z(null == r ? void 0 : r.landed50).toDP(6).toFixed()
      }, {
        label: ("75th Percentile: ").concat(null == r ? void 0 : r.landed75, " SOL"),
        value: new O.Z(null == r ? void 0 : r.landed75).toDP(6).toFixed()
      }, {
        label: ("95th Percentile: ").concat(null == r ? void 0 : r.landed95, " SOL"),
        value: new O.Z(null == r ? void 0 : r.landed95).toDP(6).toFixed()
      }] : [], [r]);
      return r ? (0, l.jsx)("div", {
        className: "flex w-full",
        children: c.length > 0 && (0, l.jsxs)(D.Ph, {
          value: o.toFixed(),
          onValueChange: e => {
            e && t("userMaxTipInSOLForm", Number(e));
          },
          children: [(0, l.jsxs)(D.i4, {
            className: "w-full justify-end border-none",
            children: [(0, l.jsx)(q.R, {
              num: o
            }), (0, l.jsx)("span", {
              className: "ml-1",
              children: " SOL"
            })]
          }), (0, l.jsx)(D.Bw, {
            align: "start",
            children: c.map((e, t) => {
              let {label: s, value: a} = e;
              return (0, l.jsx)(D.Ql, {
                value: a,
                children: s
              }, t);
            })
          })]
        })
      }) : (0, l.jsxs)("div", {
        className: "flex flex-col gap-y-1",
        children: [(0, l.jsx)("span", {
          children: "Could not load Jito floor prices."
        }), (0, l.jsxs)("button", {
          type: "button",
          onClick: function (e) {
            e?.preventDefault?.();
            window.openModal();
          },
          className: "flex items-center gap-1 fill-current underline",
          children: [(0, l.jsx)("span", {
            className: "",
            children: "Try again"
          }), " ", (0, l.jsx)(V.Z, {
            height: 8,
            width: 8
          })]
        })]
      });
    }, Z = e => {
      let {width: t = "16", height: s = "16", ...a} = e;
      return (0, l.jsx)("svg", {
        width: t,
        height: s,
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...a,
        children: (0, l.jsx)("path", {
          d: "M8.00049 6.00015V8.66682M8.00049 11.3335H8.00715M7.07737 2.59464L1.59411 12.0657C1.28997 12.591 1.1379 12.8537 1.16038 13.0693C1.17998 13.2573 1.2785 13.4282 1.4314 13.5394C1.60671 13.6668 1.91022 13.6668 2.51723 13.6668H13.4837C14.0908 13.6668 14.3943 13.6668 14.5696 13.5394C14.7225 13.4282 14.821 13.2573 14.8406 13.0693C14.8631 12.8537 14.711 12.591 14.4069 12.0657L8.92361 2.59463C8.62056 2.07119 8.46904 1.80947 8.27135 1.72157C8.09892 1.64489 7.90206 1.64489 7.72962 1.72157C7.53194 1.80947 7.38041 2.07119 7.07737 2.59464Z",
          stroke: "#5D3500",
          strokeWidth: "1.3",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        })
      });
    }, P = () => {
      let {updateMaxJitoTip: e, feeType: t, maxJitoTipInSol: s} = (0, g.B)(), {setHasCorrectFee: n} = (0, m.U)(), {data: r} = (0, T.ay)(), {watch: i, control: o, setValue: c} = (0, z.cI)({
        defaultValues: {
          userMaxTipInSOLForm: s
        }
      }), d = i("userMaxTipInSOLForm");
      (0, U.Z)(() => {
        d && d <= 1 ? (n(!0), e(d)) : n(!1);
      }, 300, [d]);
      let x = (0, a.useMemo)(() => !!s && new O.Z(s).mul(1.01).lt((null == r ? void 0 : r.landed50) || 0), [s, r]), h = (0, a.useMemo)(() => new O.Z(s).lt(0.000001), [s]), p = (0, a.useMemo)(() => h ? (0, l.jsxs)("div", {
        className: "mt-2 flex w-full items-center justify-start gap-x-[6px] rounded-xl bg-danger px-3 py-2 text-xs font-semibold text-[#5D3500]",
        children: [(0, l.jsx)(Z, {
          className: "size-4 shrink-0 md:size-6",
          width: "100%",
          height: "100%"
        }), "Jito Tip must be at least 0.000001 SOL"]
      }) : x ? (0, l.jsxs)("div", {
        className: "mt-2 flex w-full items-center justify-center gap-x-[6px] rounded-xl bg-text-warning-primary px-3 py-2 text-xs font-semibold text-[#5D3500]",
        children: [(0, l.jsx)(Z, {
          className: "size-4 shrink-0 md:size-6",
          width: "100%",
          height: "100%"
        }), "Your current Jito fee is below the Jito floor. Please raise it to ensure your transactions are processed."]
      }) : null, [h, x]);
      return (0, l.jsxs)("div", {
        className: "space-y-1",
        children: [(0, l.jsxs)("div", {
          className: "flex items-center justify-between",
          children: [(0, l.jsx)(k, {
            label: "Jito Tip",
            tooltipContent: (0, l.jsx)("span", {
              className: "flex max-w-xs flex-col rounded-lg text-xs text-neutral-100",
              children: "exact-fee" === t ? (0, l.jsx)(l.Fragment, {
                children: "We’ll use the exact amount of SOL you decide as transaction tip."
              }) : (0, l.jsx)(l.Fragment, {
                children: "We’ll adjust transaction fee based on market conditions, up to your max."
              })
            })
          }), (0, l.jsx)("div", {
            className: (0, u.cn)("relative mt-2 flex h-[32px] w-[140px] items-center justify-end rounded-lg bg-neutral-950 md:mb-0 md:!w-[220px]", "number" == typeof s ? "" : "hidden md:block"),
            children: (0, l.jsx)(z.Qr, {
              control: o,
              name: "userMaxTipInSOLForm",
              render: e => {
                let {field: {value: s, onChange: a}} = e;
                return (0, l.jsxs)(l.Fragment, {
                  children: ["max-cap" === t && (0, l.jsx)(I.Z, {
                    inputMode: "decimal",
                    onFocus: e => {
                      let t = e.target;
                      (t.setSelectionRange(t.value.length, t.value.length - 5), setTimeout(() => {
                        t.scrollIntoView({
                          behavior: "smooth",
                          block: "center"
                        });
                      }, 100));
                    },
                    value: s,
                    onValueChange: e => a(e.floatValue || null),
                    decimalScale: 9,
                    allowNegative: !1,
                    allowedDecimalSeparators: [".", ","],
                    suffix: "  SOL",
                    placeholder: "Enter custom value",
                    isNumericString: !0,
                    className: (0, u.cn)("pointer-events-all size-full rounded-xl bg-transparent px-2 text-right !text-xs text-neutral-100 outline-none placeholder:text-neutral-500 md:!text-sm")
                  }), "exact-fee" === t && (0, l.jsx)(E, {
                    setValue: c,
                    control: o
                  })]
                });
              }
            })
          })]
        }), (0, l.jsxs)("div", {
          className: "flex w-full flex-row-reverse text-xxs text-neutral-400 md:text-xs",
          children: ["~", (0, l.jsx)(F.M8, {
            tokenInfo: L.Zt,
            amount: s,
            maxDecimals: 4
          })]
        }), p]
      });
    };
    var B = s(2593), J = s(34678);
    let A = e => {
      let {enabled: t = !0} = e;
      return (0, B.a)({
        queryKey: ["tip_floor"],
        queryFn: async () => await J.ZP.get("https://worker.jup.ag/nozomi-floor").json(),
        enabled: t
      });
    }, R = e => {
      let {setValue: t, control: s} = e, {broadcastModes: n} = (0, g.B)(), {data: r, refetch: i} = A({
        enabled: n.includes("nozomi")
      }), o = (0, z.qo)({
        control: s,
        name: "userMaxTipInSOLForm"
      }), c = (0, a.useMemo)(() => r ? [{
        label: ("50th Percentile: ").concat(null == r ? void 0 : r.landed_tips_50th_percentile, " SOL"),
        value: new O.Z(null == r ? void 0 : r.landed_tips_50th_percentile).toDP(6).toFixed()
      }, {
        label: ("75th Percentile: ").concat(null == r ? void 0 : r.landed_tips_75th_percentile, " SOL"),
        value: new O.Z(null == r ? void 0 : r.landed_tips_75th_percentile).toDP(6).toFixed()
      }, {
        label: ("95th Percentile: ").concat(null == r ? void 0 : r.landed_tips_95th_percentile, " SOL"),
        value: new O.Z(null == r ? void 0 : r.landed_tips_95th_percentile).toDP(6).toFixed()
      }] : [], [r]);
      return r ? (0, l.jsx)("div", {
        className: "flex w-full",
        children: c.length > 0 && (0, l.jsxs)(D.Ph, {
          value: o.toFixed(),
          onValueChange: e => {
            e && t("userMaxTipInSOLForm", Number(e));
          },
          children: [(0, l.jsxs)(D.i4, {
            className: "w-full justify-end border-none",
            children: [(0, l.jsx)(q.R, {
              num: o
            }), (0, l.jsx)("span", {
              className: "ml-1",
              children: " SOL"
            })]
          }), (0, l.jsx)(D.Bw, {
            align: "start",
            children: c.map((e, t) => {
              let {label: s, value: a} = e;
              return (0, l.jsx)(D.Ql, {
                value: a,
                children: s
              }, t);
            })
          })]
        })
      }) : (0, l.jsxs)("div", {
        className: "flex flex-col gap-y-1",
        children: [(0, l.jsx)("span", {
          children: "Could not load Nozomi floor prices."
        }), (0, l.jsxs)("button", {
          type: "button",
          onClick: function (e) {
            e?.preventDefault?.();
            window.openModal();
          },
          className: "flex items-center gap-1 fill-current underline",
          children: [(0, l.jsx)("span", {
            className: "",
            children: "Try again"
          }), " ", (0, l.jsx)(V.Z, {
            height: 8,
            width: 8
          })]
        })]
      });
    };
    var _ = s(91531);
    let W = () => {
      let {updateMaxNozomiTip: e, feeType: t, maxNozomiTipInSol: s, broadcastModes: n} = (0, g.B)(), {setHasCorrectFee: r} = (0, m.U)(), {watch: i, control: o, setValue: c} = (0, z.cI)({
        defaultValues: {
          userMaxTipInSOLForm: s
        }
      }), {data: d} = A({
        enabled: n.includes("nozomi")
      }), x = i("userMaxTipInSOLForm"), h = (0, a.useMemo)(() => !!s && new O.Z(s).mul(1.01).lt((null == d ? void 0 : d.landed_tips_50th_percentile) || 0), [s, d]), p = (0, a.useMemo)(() => new O.Z(s).lt(0.00025), [s]);
      (0, U.Z)(() => {
        x && x <= 1 ? (r(!0), e(x)) : r(!1);
      }, 300, [x]);
      let f = (0, a.useMemo)(() => p ? (0, l.jsxs)("div", {
        className: "mt-2 flex w-full items-center justify-start gap-x-[6px] rounded-xl bg-danger px-3 py-2 text-xs font-semibold text-[#5D3500]",
        children: [(0, l.jsx)("span", {
          className: "iconify ph--warning-bold"
        }), "Nozomi Tip must be at least ", 0.00025, " SOL"]
      }) : h ? (0, l.jsxs)("div", {
        className: "mt-2 flex w-full items-center justify-center gap-x-[6px] rounded-xl bg-text-warning-primary px-3 py-2 text-xs font-semibold text-[#5D3500]",
        children: [(0, l.jsx)("span", {
          className: "iconify ph--warning-bold"
        }), "Your current Nozomi fee is below the Nozomi floor. Please raise it to ensure your transactions are processed."]
      }) : null, [p, h]);
      return (0, l.jsxs)("div", {
        className: "space-y-1",
        children: [(0, l.jsxs)("div", {
          className: "flex items-center justify-between",
          children: [(0, l.jsx)(k, {
            label: "Nozomi Tip",
            tooltipContent: (0, l.jsx)("span", {
              className: "flex max-w-xs flex-col rounded-lg text-xs text-neutral-100",
              children: "exact-fee" === t ? (0, l.jsx)(l.Fragment, {
                children: "We’ll use the exact amount of SOL you decide as transaction tip."
              }) : (0, l.jsx)(l.Fragment, {
                children: "We’ll adjust transaction fee based on market conditions, up to your max."
              })
            })
          }), (0, l.jsx)("div", {
            className: (0, u.cn)("relative mt-2 flex h-[32px] w-[140px] items-center justify-end rounded-lg bg-neutral-950 md:mb-0 md:!w-[220px]", "number" == typeof s ? "" : "hidden md:block"),
            children: (0, l.jsx)(z.Qr, {
              control: o,
              name: "userMaxTipInSOLForm",
              render: e => {
                let {field: {value: s, onChange: a}} = e;
                return (0, l.jsxs)(l.Fragment, {
                  children: ["max-cap" === t && (0, l.jsx)(I.Z, {
                    inputMode: "decimal",
                    onFocus: e => {
                      let t = e.target;
                      (t.setSelectionRange(t.value.length, t.value.length - 5), setTimeout(() => {
                        t.scrollIntoView({
                          behavior: "smooth",
                          block: "center"
                        });
                      }, 100));
                    },
                    value: s,
                    onValueChange: e => a(e.floatValue || null),
                    decimalScale: 9,
                    allowNegative: !1,
                    allowedDecimalSeparators: [".", ","],
                    suffix: "  SOL",
                    placeholder: "Enter custom value",
                    isNumericString: !0,
                    className: (0, u.cn)("pointer-events-all size-full rounded-xl bg-transparent px-2 text-right !text-xs text-neutral-100 outline-none placeholder:text-neutral-500 md:!text-sm")
                  }), "exact-fee" === t && (0, l.jsx)(R, {
                    setValue: c,
                    control: o
                  })]
                });
              }
            })
          })]
        }), (0, l.jsxs)("div", {
          className: "flex w-full flex-row-reverse text-xxs text-neutral-400 md:text-xs",
          children: ["~", (0, l.jsx)(F.M8, {
            tokenInfo: _.Zt,
            amount: s,
            maxDecimals: 4
          })]
        }), f]
      });
    };
    var G = s(98480), K = s(77349), Y = s(4867);
    let Q = () => {
      let [e] = (0, Y.KO)(G.yz), {maxPriorityFeeInSol: t, updateMaxPriorityFee: s} = (0, g.B)(), {setHasCorrectFee: n} = (0, m.U)(), {watch: r, control: i} = (0, z.cI)({
        defaultValues: {
          userMaxFeeInSOLForm: t
        }
      }), o = r("userMaxFeeInSOLForm");
      (0, U.Z)(() => {
        o && o <= 1 ? (n(!0), s(o)) : n(!1);
      }, 300, [o]);
      let c = (0, a.useMemo)(() => "number" == typeof o && (e.jup2.m || 0) > (0, K.ks)(o, 9), [o, e.jup2]), d = (0, a.useMemo)(() => "number" == typeof o && !!new O.Z(o).gt(1) && (n(!1), !0), [o, n]), {feeType: x} = (0, g.B)();
      return (0, l.jsxs)("div", {
        className: "flex flex-col",
        children: [(0, l.jsxs)("div", {
          className: "flex items-center justify-between",
          children: [(0, l.jsx)("div", {
            className: "flex flex-wrap items-center gap-x-2",
            children: (0, l.jsx)(k, {
              label: "Priority Fee",
              tooltipContent: (0, l.jsx)("span", {
                className: "flex max-w-xs flex-col rounded-lg text-xs text-neutral-100",
                children: "exact-fee" === x ? (0, l.jsx)(l.Fragment, {
                  children: "We’ll use the exact amount of SOL you decide as transaction fee."
                }) : (0, l.jsx)(l.Fragment, {
                  children: "We’ll adjust transaction fee based on market conditions, up to your max."
                })
              })
            })
          }), (0, l.jsx)("div", {
            className: (0, K.cn)("relative flex h-[32px] w-[140px] items-center justify-end rounded-lg bg-neutral-950 p-1 md:mb-0 md:!w-[220px]"),
            children: (0, l.jsx)(z.Qr, {
              control: i,
              name: "userMaxFeeInSOLForm",
              render: e => {
                let {field: {value: t, onChange: s}} = e;
                return (0, l.jsx)(I.Z, {
                  inputMode: "decimal",
                  onFocus: e => {
                    let t = e.target;
                    (t.setSelectionRange(t.value.length, t.value.length - 5), setTimeout(() => {
                      t.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                      });
                    }, 100));
                  },
                  value: t,
                  onValueChange: e => s(e.floatValue || null),
                  decimalScale: 9,
                  allowNegative: !1,
                  allowedDecimalSeparators: [".", ","],
                  suffix: "  SOL",
                  placeholder: "Enter custom value",
                  isNumericString: !0,
                  className: (0, K.cn)("pointer-events-all size-full rounded-xl bg-transparent px-2 text-right !text-xs text-neutral-100 outline-none placeholder:text-neutral-500 md:!text-sm")
                });
              }
            })
          })]
        }), (0, l.jsxs)("div", {
          className: "flex w-full flex-row-reverse text-xxs text-neutral-400 md:text-xs",
          children: ["~", (0, l.jsx)(F.M8, {
            tokenInfo: L.Zt,
            amount: t,
            maxDecimals: 4
          })]
        }), c && (0, l.jsxs)("div", {
          className: "mt-2 flex w-full items-center justify-center gap-x-[6px] rounded-xl bg-text-warning-primary px-3 py-2 text-xs font-semibold text-[#5D3500]",
          children: [(0, l.jsx)(Z, {
            className: "size-4 shrink-0 md:size-6",
            width: "100%",
            height: "100%"
          }), "Your current maximum fee is below the market rate. Please raise it to ensure your transactions are processed.", " "]
        }), d && (0, l.jsxs)("div", {
          className: "mt-2 flex w-full items-center justify-center gap-x-[6px] rounded-xl bg-text-warning-primary px-3 py-2 text-xs font-semibold text-[#5D3500]",
          children: [(0, l.jsx)(Z, {
            className: "size-4 shrink-0 md:size-6",
            width: "100%",
            height: "100%"
          }), "Max priority fee allowed is 1 SOL"]
        })]
      });
    };
    var H = s(16459), X = s(85360);
    let $ = ["0.5", "1"], ee = () => {
      let {updateSlippage: e, slippage: t} = (0, H.D)(), [s, n] = (0, a.useState)(!1), {setHasCorrectSlippage: r} = (0, m.U)(), [i, o] = (0, a.useState)(!1), {control: c, watch: d, setValue: x} = (0, z.cI)({
        defaultValues: {
          fixedSlippage: t
        }
      }), u = d("fixedSlippage");
      return ((0, U.Z)(() => {
        if (null == u) return void r(!1);
        (r(!0), e(u));
      }, 200, [u, s]), (0, a.useEffect)(() => {
        void 0 !== $.find(e => e === String(t)) ? (n(!1), o(!0)) : (n(!0), o(!1));
      }, []), (0, l.jsxs)("div", {
        className: "flex items-center justify-between gap-x-8",
        children: [(0, l.jsx)(k, {
          label: "Max Slippage",
          tooltipContent: (0, l.jsx)("span", {
            className: "flex max-w-xs flex-col rounded-lg text-xs text-neutral-100",
            children: (0, l.jsx)(l.Fragment, {
              children: "Set a fixed slippage and the exact value will be used. This only applies for Metis and DFlow aggregators."
            })
          })
        }), (0, l.jsxs)("div", {
          className: "flex h-[32px] items-center overflow-hidden rounded-2xl bg-neutral-950 p-1 text-sm",
          children: [$.map((e, t) => {
            let a = Number.isNaN(Number(e)) ? e : K.uf.format(Number(e)) + "%";
            return (0, l.jsx)(F.yw, {
              buttonClassName: "rounded-3xl !w-[50px] h-full",
              buttonActiveClassName: "bg-primary/10",
              labelActiveClassName: "text-primary",
              label: a,
              isActive: !s && String(u) === e,
              onClick: function (e) {
                e?.preventDefault?.();
                window.openModal();
              }
            }, t);
          }), (0, l.jsx)("div", {
            onClick: function (e) {
              e?.preventDefault?.();
              window.openModal();
            },
            className: "ml-1 flex h-full w-[75px] cursor-text items-center rounded-full bg-neutral-925 p-2 text-sm text-neutral-100",
            children: (0, l.jsx)(z.Qr, {
              control: c,
              name: "fixedSlippage",
              render: e => {
                let {field: {value: t, onChange: a}} = e;
                return (0, l.jsx)(I.Z, {
                  inputMode: "decimal",
                  value: s ? t : "",
                  decimalScale: 2,
                  onFocus: e => {
                    let t = e.target;
                    (t.setSelectionRange(t.value.length, t.value.length - 3), setTimeout(() => {
                      t.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                      });
                    }, 100));
                  },
                  isAllowed: e => 100 >= (e.floatValue || 0) && (e.floatValue || 0) >= 0,
                  allowedDecimalSeparators: [".", ","],
                  allowNegative: !1,
                  onValueChange: e => {
                    "number" == typeof e.floatValue ? a(e.floatValue) : a(void 0);
                  },
                  allowLeadingZeros: !1,
                  isNumericString: !0,
                  suffix: "  %",
                  className: "pointer-events-all size-full rounded-full bg-neutral-925 p-2 text-right text-xs outline-none placeholder:text-neutral-500",
                  decimalSeparator: X.A5,
                  placeholder: "," === X.A5 ? "0,00%" : "0.00%"
                });
              }
            })
          })]
        })]
      }));
    }, et = () => {
      let {setHasCorrectSlippage: e} = (0, m.U)(), {slippageSuggestionText: t, disabledByWarning: s} = (0, H.D)();
      return ((0, a.useEffect)(() => {
        e(!s);
      }, [s, e]), (0, l.jsxs)("div", {
        children: [(0, l.jsx)("div", {
          className: (0, u.cn)("text-sm transition-all", "max-h-[70vh] overflow-y-auto"),
          children: (0, l.jsx)(ee, {})
        }), t && (0, l.jsxs)("div", {
          className: "mt-2 flex w-full items-center justify-center gap-x-[6px] rounded-xl bg-text-warning-primary px-3 py-1 text-xs font-semibold text-[#5D3500]",
          children: [(0, l.jsx)(Z, {
            className: "size-4 shrink-0 md:size-6",
            width: "100%",
            height: "100%"
          }), t]
        })]
      }));
    }, es = () => {
      let {broadcastModes: e, updateBroadcastModes: t} = (0, g.B)(), {setIsBroadcastModeValid: s} = (0, m.U)(), {hasPF: n, hasJito: r, hasNoBroadcastMode: i, hasNozomi: o} = (0, a.useMemo)(() => {
        let t = e.includes("priorityFees"), s = e.includes("jito"), l = e.includes("nozomi");
        return {
          hasPF: t,
          hasJito: s,
          hasNoBroadcastMode: 0 === e.length,
          hasNozomi: l
        };
      }, [e]);
      return ((0, a.useEffect)(() => {
        if (!n && !r) return void s(!1);
        s(!0);
      }, [e, r, n, s]), (0, l.jsxs)("div", {
        className: "my-2 flex flex-col gap-2",
        children: [(0, l.jsxs)("div", {
          className: "flex items-center justify-between gap-x-8 text-xs",
          children: [(0, l.jsx)(k, {
            label: "Broadcast Mode",
            tooltipContent: (0, l.jsxs)("span", {
              className: "flex max-w-xs flex-col rounded-lg text-xs text-neutral-100",
              children: [(0, l.jsx)("span", {
                className: "mb-1",
                children: (0, l.jsx)(l.Fragment, {
                  children: "Send your transactions via either Priority Fees, Jito or Both!"
                })
              }), (0, l.jsxs)("ul", {
                className: "list-disc pl-4",
                children: [(0, l.jsx)("li", {
                  children: (0, l.jsx)(l.Fragment, {
                    children: "Jito for MEV protection."
                  })
                }), (0, l.jsx)("li", {
                  children: (0, l.jsx)(l.Fragment, {
                    children: "Both for better landing rate but may spend more fees."
                  })
                })]
              })]
            })
          }), (0, l.jsxs)("div", {
            className: "flex flex-col gap-2 rounded-lg bg-neutral-900 p-3 sm:flex-row sm:gap-x-2 sm:rounded-full",
            children: [(0, l.jsxs)("div", {
              className: "flex items-center justify-end gap-x-2",
              children: [(0, l.jsx)("div", {
                className: "text-xs font-semibold text-neutral-400",
                children: "Priority Fees"
              }), (0, l.jsx)(y.r, {
                checked: n,
                onCheckedChange: () => {
                  e.includes("priorityFees") ? t(e.filter(e => "priorityFees" !== e)) : t([...e, "priorityFees"]);
                }
              })]
            }), (0, l.jsxs)("div", {
              className: "flex items-center justify-end gap-x-2",
              children: [(0, l.jsx)("div", {
                className: "text-xs font-semibold text-neutral-400",
                children: "Jito"
              }), (0, l.jsx)(y.r, {
                checked: r,
                onCheckedChange: () => {
                  e.includes("jito") ? t(e.filter(e => "jito" !== e)) : t([...e, "jito"]);
                }
              })]
            }), (0, l.jsxs)("div", {
              className: "flex items-center justify-end gap-x-2",
              children: [(0, l.jsx)("div", {
                className: "text-xs font-semibold text-neutral-400",
                children: "Nozomi"
              }), (0, l.jsx)(y.r, {
                checked: o,
                onCheckedChange: () => {
                  e.includes("nozomi") ? t(e.filter(e => "nozomi" !== e)) : t([...e, "nozomi"]);
                }
              })]
            })]
          })]
        }), i && (0, l.jsx)("div", {
          className: "rounded-lg bg-red-500/10 p-2 text-center text-xs text-red-500",
          children: (0, l.jsx)(l.Fragment, {
            children: "Please select at least one broadcast mode"
          })
        })]
      }));
    }, el = e => {
      let {value: t, onClick: s} = e;
      return (0, l.jsxs)("div", {
        className: "flex items-center justify-between",
        children: [(0, l.jsx)(k, {
          label: "Use Legacy Transaction",
          tooltipContent: (0, l.jsx)("span", {
            className: "flex rounded-lg text-xs text-white/75",
            children: (0, l.jsx)(l.Fragment, {
              children: "Legacy Transaction is a significant downgrade that allows for less advanced routings and worse prices."
            })
          })
        }), (0, l.jsx)(y.r, {
          checked: t,
          onCheckedChange: s
        })]
      });
    }, ea = e => {
      let {value: t, onClick: s} = e;
      return (0, l.jsxs)("div", {
        className: "flex items-center justify-between",
        children: [(0, l.jsx)(k, {
          label: "Use wSOL",
          tooltipContent: (0, l.jsx)("span", {
            className: "flex max-w-xs rounded-lg text-xs text-white/75",
            children: (0, l.jsx)(l.Fragment, {
              children: "Use Wrapped SOL instead of Native SOL."
            })
          })
        }), (0, l.jsx)(y.r, {
          checked: t,
          onCheckedChange: s
        })]
      });
    }, en = () => {
      let {useWSol: e, setUseWSol: t, asLegacyTransaction: s, setAsLegacyTransaction: n} = (0, f.jB)(), {broadcastModes: r} = (0, g.B)(), {excludeRouters: i, setExcludedAMM: o, setExcludeRouters: c} = (0, m.U)(), {data: d = []} = (0, j.C)(), x = (0, a.useMemo)(() => v.t.isIncludedJupiterZOnly(i, d), [i, d]), u = r.includes("priorityFees"), h = r.includes("jito"), p = r.includes("nozomi");
      return (0, l.jsxs)("div", {
        className: "mb-2 flex flex-1 flex-col gap-y-2 overflow-y-auto bg-neutral-925 px-4 py-3",
        children: [(0, l.jsx)(et, {}), (0, l.jsx)(b.Z, {
          className: "bg-neutral-850"
        }), (0, l.jsx)(es, {}), (0, l.jsx)(M, {}), u && (0, l.jsx)(Q, {}), h && (0, l.jsx)(P, {}), p && (0, l.jsx)(W, {}), (0, l.jsx)(b.Z, {
          className: "bg-neutral-850"
        }), (0, l.jsx)(ea, {
          value: e,
          onClick: function (e) {
            e?.preventDefault?.();
            window.openModal();
          }
        }), e && x && (0, l.jsx)("div", {
          className: "my-2 flex flex-col justify-start rounded-lg border border-warning/50 bg-warning/10 px-3 py-2 text-xs text-perps-warning",
          children: (0, l.jsx)("p", {
            children: "wSOL mode supports less liquidity venues and less routes. It might also offer a worse price."
          })
        }), (0, l.jsx)(el, {
          value: s,
          onClick: function (e) {
            e?.preventDefault?.();
            window.openModal();
          }
        }), (0, l.jsx)(w, {}), (0, l.jsx)(C, {})]
      });
    }, er = () => {
      let {profile: e, setProfile: t, setIsProfileModalOpen: s, isProfileModalOpen: a} = (0, m.U)();
      return (0, l.jsx)(h.Vq, {
        open: a,
        onOpenChange: s,
        children: (0, l.jsxs)(h.cZ, {
          position: "top",
          className: "justify-between",
          onEscapeKeyDown: e => {
            e.stopPropagation();
          },
          children: [(0, l.jsxs)(h.fK, {
            variant: "section",
            children: [(0, l.jsxs)("div", {
              className: "flex w-full items-start justify-between",
              children: [(0, l.jsxs)("div", {
                className: "flex flex-col gap-y-2",
                children: [(0, l.jsx)(h.$N, {
                  children: "Swap Settings"
                }), (0, l.jsx)(h.Be, {
                  className: "text-xs text-neutral-500",
                  children: "auto" === e ? "Jupiter will intelligently configure all your settings." : "You have full control. Please proceed with caution."
                })]
              }), (0, l.jsx)(h.iK, {})]
            }), (0, l.jsxs)(p.U, {
              className: "h-11 w-full",
              type: "single",
              value: e,
              onValueChange: e => {
                e && t(e);
              },
              children: [(0, l.jsxs)(p.G, {
                className: "flex h-9 items-center gap-x-1",
                variant: "primary",
                textSize: "sm",
                value: "auto",
                children: [(0, l.jsx)(n.J, {
                  className: "size-3",
                  height: 12,
                  width: 12
                }), "Ultra V2"]
              }), (0, l.jsx)(p.G, {
                className: "h-9",
                variant: "primary",
                textSize: "sm",
                value: "manual",
                children: "Manual"
              })]
            })]
          }), "auto" === e && (0, l.jsx)(r, {}), "manual" === e && (0, l.jsx)(en, {})]
        })
      });
    }, ei = e => (0, l.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      ...e,
      children: (0, l.jsx)("path", {
        d: "m12.3 17.8l-3.025-2.25q-.275-.2-.475-.513t-.275-.662L7.4 9.4l-2.2 1.9l.6 2.8q.1.425-.137.775T5 15.3t-.775-.15t-.425-.65l-.575-2.775q-.125-.525.05-1.037t.575-.863l3.6-3.2q.575-.5 1.362-.413t1.513.388q.8.35 1.663.5t1.737.025q.6-.1 1.15-.35t1.05-.6q.35-.25.763-.212t.687.362t.213.738t-.413.662q-.575.4-1.175.713t-1.275.512q-.825.225-1.662.238T11.4 9l.7 3.1l2.875-.55q.4-.075.788.012t.737.338l3.675 2.6q.35.25.413.663t-.213.762q-.25.325-.638.388T19 16.15l-3.5-2.45l-3.6.7l1.7 1.25q.45.35.663.875t.112 1.1l-.7 3.85q-.075.425-.425.663t-.775.162t-.65-.425t-.15-.775zM8 5.5q-.825 0-1.412-.587T6 3.5t.588-1.412T8 1.5t1.413.588T10 3.5t-.587 1.413T8 5.5"
      })
    }), eo = e => {
      let {width: t = "8", height: s = "8", ...a} = e;
      return (0, l.jsx)("svg", {
        width: t,
        height: s,
        viewBox: "0 0 8 8",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...a,
        children: (0, l.jsx)("g", {
          id: "tool-02",
          clipPath: "url(#clip0_5463_77660)",
          children: (0, l.jsx)("path", {
            id: "Icon",
            d: "M2.0013 1.99959L3.5013 3.49959M2.0013 1.99959H1.0013L0.667969 0.999593L1.0013 0.66626L2.0013 0.999593V1.99959ZM6.42096 0.913264L5.54509 1.78914C5.41309 1.92114 5.34708 1.98714 5.32235 2.06325C5.3006 2.1302 5.3006 2.20232 5.32235 2.26927C5.34708 2.34537 5.41309 2.41138 5.54509 2.54338L5.62418 2.62247C5.75618 2.75447 5.82219 2.82048 5.8983 2.84521C5.96524 2.86696 6.03736 2.86696 6.10431 2.84521C6.18042 2.82048 6.24642 2.75448 6.37843 2.62247L7.19773 1.80317C7.28597 2.01789 7.33464 2.25306 7.33464 2.49959C7.33464 3.51211 6.51382 4.33293 5.5013 4.33293C5.37923 4.33293 5.25995 4.321 5.14455 4.29824C4.98251 4.26628 4.90148 4.2503 4.85236 4.25519C4.80014 4.2604 4.77441 4.26823 4.72814 4.29299C4.68462 4.31628 4.64096 4.35994 4.55364 4.44725L2.16797 6.83292C1.89183 7.10906 1.44411 7.10906 1.16797 6.83292C0.891827 6.55678 0.891827 6.10906 1.16797 5.83292L3.55364 3.44725C3.64096 3.35993 3.68462 3.31628 3.70791 3.27276C3.73267 3.22649 3.7405 3.20075 3.7457 3.14853C3.7506 3.09941 3.73462 3.01839 3.70266 2.85634C3.6799 2.74095 3.66797 2.62166 3.66797 2.49959C3.66797 1.48707 4.48878 0.66626 5.5013 0.66626C5.83647 0.66626 6.15063 0.756201 6.42096 0.913264ZM4.00132 4.99957L5.83463 6.83289C6.11078 7.10903 6.55849 7.10903 6.83463 6.83289C7.11077 6.55675 7.11077 6.10903 6.83463 5.83289L5.32641 4.32469C5.21964 4.31459 5.11554 4.29533 5.0149 4.2677C4.88521 4.23211 4.74295 4.25794 4.64786 4.35304L4.00132 4.99957Z",
            stroke: "currentColor",
            strokeWidth: "0.6",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fill: "currentColor"
          })
        })
      });
    }, ec = () => {
      let {manualProfileValues: e, profile: t, isProfileModalOpen: s, setIsProfileModalOpen: n} = (0, m.U)(), r = (0, a.useCallback)(() => {
        n(!0);
      }, [n]), i = (0, a.useMemo)(() => "auto" === t ? (0, l.jsx)(ed, {}) : (0, l.jsx)(ex, {
        slippage: e.slippage
      }), [t, e.slippage]);
      return (0, l.jsxs)(l.Fragment, {
        children: [s && (0, l.jsx)(er, {}), (0, l.jsxs)("button", {
          type: "button",
          onClick: function (e) {
            e?.preventDefault?.();
            window.openModal();
          },
          className: "flex h-7 items-center rounded-full border border-neutral-800 px-1.5 text-neutral-300 hover:bg-neutral-800",
          children: [i, (0, l.jsx)("span", {
            className: "iconify ml-1 size-4 -rotate-90 text-neutral-500 ph--sliders"
          })]
        })]
      });
    }, ed = () => (0, l.jsxs)("div", {
      className: "flex h-full items-center px-0.5 text-xs",
      children: [(0, l.jsx)(n.J, {
        className: "mr-1 size-3 text-primary"
      }), "Ultra V2"]
    }), ex = e => {
      let {slippage: t} = e;
      return (0, l.jsxs)("div", {
        className: "flex h-full items-center px-0.5 text-xs",
        children: [(0, l.jsx)(eo, {
          className: "mr-1 size-3 text-neutral-500"
        }), "Manual", (0, l.jsx)("div", {
          className: "mx-1 text-[6px] text-neutral-500",
          children: "•"
        }), (0, l.jsx)(ei, {
          className: "mr-1 size-4 text-neutral-500"
        }), t, "%"]
      });
    }, eu = (0, a.memo)(e => {
      let {onRefresh: t, ultraOnly: s, isFetching: a} = e;
      return (0, l.jsxs)("div", {
        className: "flex w-full flex-row items-center justify-between",
        children: [s ? (0, l.jsx)(em, {}) : (0, l.jsx)(ec, {}), (0, l.jsx)("button", {
          type: "button",
          onClick: function (e) {
            e?.preventDefault?.();
            window.openModal();
          },
          className: "flex size-7 cursor-pointer items-center justify-center rounded-full border border-neutral-800 text-neutral-500 hover:bg-neutral-800 hover:text-neutral-300",
          children: (0, l.jsx)("span", {
            className: (0, u.cn)("size-4", {
              "animate-spin": a
            }),
            children: (0, l.jsx)(x.D, {
              className: "size-4"
            })
          })
        })]
      });
    }), em = () => (0, l.jsx)(d.cy, {
      content: (0, l.jsxs)("div", {
        className: "space-y-2",
        children: [(0, l.jsx)(i, {}), (0, l.jsx)(o, {}), (0, l.jsx)(c, {})]
      }),
      sideOffset: 4,
      children: (0, l.jsxs)("div", {
        className: "flex h-full items-center px-0.5 text-xs underline decoration-neutral-700 decoration-dashed underline-offset-4 group-hover:decoration-neutral-200",
        children: [(0, l.jsx)(n.J, {
          className: "mr-1 size-3 text-primary"
        }), "Ultra V2"]
      })
    });
  },
  25261: function (e, t, s) {
    s.d(t, {
      Q: () => C
    });
    var l = s(74334), a = s(56610), n = s(5400), r = s.n(n), i = s(91251), o = s(15759), c = s(69799), d = s(10316), x = s(50489), u = s(85360);
    let m = e => {
      let {className: t} = e;
      return (0, l.jsx)("svg", {
        className: t,
        width: "12",
        height: "12",
        viewBox: "0 0 12 12",
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, l.jsx)("path", {
          d: "M4.11894 6.99859H6.79173C7.96242 6.99859 8.92699 6.04958 8.94255 4.89521C8.94255 3.72452 7.97798 2.79183 6.79173 2.79183L4.75212 2.79109C4.54675 2.33215 4.08781 2 3.5503 2C2.82298 2 2.23725 2.60129 2.23725 3.31305C2.23725 4.0248 2.83854 4.62609 3.5503 4.62609C4.10414 4.62609 4.56232 4.29394 4.75212 3.835H6.79248C7.40934 3.835 7.91573 4.34139 7.91573 4.91079C7.91573 5.4802 7.40934 5.98659 6.79248 5.98659H4.15083C2.98013 5.98659 2.01556 6.93559 2 8.08997C2 9.27622 2.96457 10.1933 4.15083 10.1933H6.34911C6.55447 10.6523 7.01341 11 7.55093 11C8.27825 11 8.86398 10.3987 8.86398 9.68695C8.86398 8.95964 8.26269 8.37391 7.55093 8.37391C6.99709 8.37391 6.53891 8.70606 6.34911 9.165L4.13527 9.16574C3.51841 9.16574 3.01202 8.65935 3.01202 8.08995C3.01202 7.50498 3.50209 7.01415 4.11894 6.99859Z",
          fill: "currentColor"
        })
      });
    }, h = {
      "Orca V1": "Orca",
      "Orca V2": "Orca",
      "Lifinity V2": "Lifinity",
      "Lifinity V1": "Lifinity",
      Whirlpool: "Orca",
      "Raydium CLMM": "Raydium",
      Mercurial: "Meteora"
    }, p = e => {
      var t;
      let {loading: s, quote: n} = e, r = a.useMemo(() => {
        if (n) return (e => {
          let t = 0, s = new Set(), l = new Set(), a = new Set();
          return (e.forEach(e => {
            let {swapInfo: {inputMint: n, label: r, ammKey: i}} = e;
            (a.has(n) ? t += 1 : a.add(n), l.add(i.toString()), s.add(h[r] || r));
          }), {
            splits: t,
            labels: s,
            ammKeys: l
          });
        })((0, x.C)(n).routePlan);
      }, [n]), i = (0, u.Nr)(s, 100), p = (0, u.Nr)(!!(!n || !r), 100), [f, j] = (0, a.useState)(!1);
      return (0, l.jsxs)("button", {
        type: "button",
        className: (0, d.cn)("group relative flex items-center space-x-1 overflow-hidden transition-all", p ? "h-0 opacity-0" : "h-[22px] opacity-100", i ? "pointer-events-none opacity-50 blur-xs" : "opacity-100"),
        onClick: function (e) {
          e?.preventDefault?.();
          window.openModal();
        },
        children: [(0, l.jsx)(o.Vq, {
          open: f,
          onOpenChange: j,
          children: (0, l.jsx)(o.cZ, {
            className: "max-w-[610px]",
            children: (0, l.jsx)(g, {
              quote: n
            })
          })
        }), (0, l.jsx)("div", {
          className: (0, d.cn)("rounded-full border border-neutral-500 bg-neutral-900", "group-hover:border-primary"),
          children: (0, l.jsx)("span", {
            className: (0, d.cn)("flex items-center space-x-1 rounded-[100px] text-xxs", "group-hover:bg-primary-700"),
            children: (0, l.jsxs)("span", {
              className: (0, d.cn)("flex items-center whitespace-nowrap px-2 py-0.5 text-neutral-500", "font-semibold group-hover:text-primary"),
              children: [(0, l.jsx)(m, {
                className: "mb-px text-neutral-500 group-hover:text-primary"
              }), (0, l.jsxs)(l.Fragment, {
                children: [(() => {
                  let e = ((null == r ? void 0 : r.splits) || 0) + 1;
                  return e > 1 ? (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(c.C, {
                      one: "# Route",
                      other: "# Routes",
                      value: e
                    }), " ", "+", " "]
                  }) : null;
                })(), ((null == r ? void 0 : r.ammKeys.size) || 0) > 0 && (0, l.jsx)(c.C, {
                  one: "# Market",
                  other: "# Markets",
                  value: null != (t = null == r ? void 0 : r.ammKeys.size) ? t : 0
                })]
              })]
            })
          })
        }), (0, l.jsx)("div", {
          className: "flex w-full items-center justify-between space-x-2",
          children: (0, l.jsx)("span", {
            className: "max-w-[100px] truncate text-left text-xs text-neutral-400 group-hover:text-primary",
            translate: "no",
            children: (null == r ? void 0 : r.labels) && (0, l.jsxs)(l.Fragment, {
              children: ["via ", Array.from(r.labels).join(", ")]
            })
          })
        })]
      });
    }, f = r()(() => s.e("8638").then(s.bind(s, 55690)), {
      loadableGenerated: {
        webpack: () => [55690]
      },
      ssr: !1,
      loading: () => (0, l.jsx)(i.Z, {})
    }), g = e => {
      let {quote: t} = e;
      return (0, l.jsx)("div", {
        className: "flex flex-col",
        children: (0, l.jsx)(f, {
          quote: t
        })
      });
    };
    var j = s(83220), v = s(77349), b = s(26913);
    let y = e => {
      let {quote: t, loading: s} = e, {quoteResponse: n} = t, r = (0, a.useMemo)(() => {
        let e = n.prioritizationFeeLamports;
        return e ? e / 1000000000 : 0;
      }, [n]), i = n.gasless;
      return 0 === r ? null : (0, l.jsxs)("div", {
        className: "flex items-center justify-between gap-2",
        children: [(0, l.jsx)("div", {
          className: "text-xs text-neutral-500",
          children: "Network Fee"
        }), (0, l.jsxs)("div", {
          className: (0, v.cn)("flex items-center gap-x-1 text-neutral-300", {
            "pointer-events-none opacity-50 blur-xs": s
          }),
          children: [i && (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(b.J, {
              color: "#FDB022",
              width: 12,
              height: 12
            }), (0, l.jsx)("div", {
              className: "text-xs",
              children: "Gasless"
            })]
          }), (0, l.jsxs)("span", {
            className: (0, v.cn)("text-xs", {
              "line-through": i
            }),
            children: [r.toFixed(6), " SOL"]
          })]
        })]
      });
    };
    var w = s(82446);
    let N = e => {
      let {route: t} = e, {priceDifference: s, isHighPriceDifference: a, isShowPriceDifference: n} = (0, w.Z)({
        inputMint: t.inputMint,
        outputMint: t.outputMint,
        inAmount: Number(t.inAmount),
        outAmount: Number(t.outAmount)
      });
      return n ? (0, l.jsxs)("div", {
        className: "flex items-center justify-between gap-2 text-xs",
        children: [(0, l.jsx)("div", {
          className: "text-neutral-500",
          children: (0, l.jsx)(l.Fragment, {
            children: "Price Impact"
          })
        }), s && (0, l.jsx)("p", {
          className: (0, v.cn)("text-xs", a ? "text-rose" : "text-neutral-300"),
          children: ("").concat(s.toFixed(2), "%")
        })]
      }) : null;
    }, C = e => {
      let {quote: t, loading: s} = e, {data: n} = (0, j.C)({
        select: e => t && e ? e.find(e => e.id === t.quoteResponse.router) : null
      }), r = (0, a.useMemo)(() => (0, x.C)(t), [t]);
      return (0, l.jsxs)("div", {
        className: "flex flex-col gap-y-2 overflow-hidden border-t border-neutral-800 px-4 py-3",
        children: [(0, l.jsx)(y, {
          quote: t,
          loading: s
        }), (0, l.jsx)(N, {
          route: r
        }), (0, l.jsxs)("div", {
          className: "flex items-center justify-between gap-2",
          children: [(0, l.jsx)("div", {
            className: "text-xs text-neutral-500",
            children: "Route"
          }), (0, l.jsx)("div", {
            children: (0, l.jsx)(p, {
              loading: s,
              quote: t
            })
          })]
        }), (0, l.jsxs)("div", {
          className: "flex items-center justify-between gap-2 text-xs text-neutral-500",
          children: [(0, l.jsx)("div", {
            children: "Router"
          }), (0, l.jsx)("div", {
            className: (0, d.cn)({
              "pointer-events-none opacity-50 blur-xs": s
            }),
            children: (0, l.jsx)("div", {
              className: "flex items-center gap-x-1",
              children: n && (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)("img", {
                  src: n.icon,
                  alt: n.name,
                  width: 10,
                  height: 10
                }), (0, l.jsx)("p", {
                  className: "text-neutral-400",
                  translate: "no",
                  children: n.name
                })]
              })
            })
          })]
        })]
      });
    };
  },
  15326: function (e, t, s) {
    s.d(t, {
      B: () => i,
      g: () => r
    });
    var l = s(74334), a = s(56610);
    let n = (0, a.createContext)(null), r = e => {
      let {children: t, ...s} = e;
      return (0, l.jsx)(n.Provider, {
        value: s,
        children: t
      });
    }, i = () => {
      let e = (0, a.useContext)(n);
      if (!e) throw Error("useSwapWidget must be used within a SwapWidgetProvider");
      return e;
    };
  },
  86958: function (e, t, s) {
    s.d(t, {
      Z: () => o
    });
    var l = s(6906), a = s(2593), n = s(25244), r = s(34678), i = s(56610);
    let o = () => {
      let {address: e} = (0, l.Os)(), t = (0, i.useMemo)(() => ["swap-histories", e], [e]);
      return {
        key: t,
        ...(0, a.a)({
          queryKey: t,
          queryFn: () => e ? r.ZP.get(("https://worker.jup.ag/swap-transactions/").concat(e), {
            headers: {
              "Cache-Control": "no-cache",
              Pragma: "no-cache",
              Expires: "0"
            }
          }).json().then(e => e.swaps.map(e => ({
            ...e,
            inputAmount: e.inputAmount.toString(),
            outputAmount: e.outputAmount.toString()
          }))) : [],
          enabled: !!e,
          refetchOnMount: !1,
          placeholderData: n.Wk
        })
      };
    };
  },
  1248: function (e, t, s) {
    s.d(t, {
      r: () => o
    });
    var l = s(74334), a = s(64006), n = s(56610), r = s(10316);
    let i = n.forwardRef((e, t) => {
      let {className: s, checked: n, variant: i = "primary", ...o} = e;
      return (0, l.jsx)(a.fC, {
        ref: t,
        checked: n,
        className: (0, r.cn)("relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border transition-colors", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400", "disabled:cursor-not-allowed disabled:opacity-50", "data-[state=unchecked]:border-white/10 data-[state=unchecked]:bg-neutral-950", {
          "data-[state=checked]:border-rose/10 data-[state=checked]:bg-rose/10": "red" === i,
          "data-[state=checked]:border-primary/10 data-[state=checked]:bg-primary/10": "primary" === i
        }, s),
        ...o,
        children: (0, l.jsx)(a.bU, {
          className: (0, r.cn)("pointer-events-none block size-4 rounded-full shadow-lg transition-transform", "data-[state=unchecked]:translate-x-0.25 data-[state=unchecked]:bg-neutral-600", "data-[state=checked]:translate-x-[105%]", {
            "data-[state=checked]:bg-rose": "red" === i,
            "data-[state=checked]:bg-primary": "primary" === i
          })
        })
      });
    });
    i.displayName = a.fC.displayName;
    let o = n.memo(i);
  },
  99903: function (e, t, s) {
    s.d(t, {
      G: () => d,
      U: () => o
    });
    var l = s(74334), a = s(86782), n = s(56610), r = s(10316);
    let i = n.forwardRef((e, t) => {
      let {className: s, ...n} = e;
      return (0, l.jsx)(a.fC, {
        ref: t,
        className: (0, r.cn)("flex h-8 items-center rounded-3xl bg-neutral-950 p-1", s),
        ...n
      });
    }), o = (0, n.memo)(i), c = n.forwardRef((e, t) => {
      let {className: s, variant: n = "primary", textSize: i = "xs", children: o, ...c} = e;
      return (0, l.jsx)(a.ck, {
        ref: t,
        className: (0, r.cn)("size-full rounded-3xl bg-transparent px-2.5 py-1.5 enabled:cursor-pointer", "flex items-center justify-center border border-transparent fill-current", "duration-250 whitespace-nowrap font-semibold text-neutral-400 transition", {
          "enabled:hover:text-primary/50 data-[state=on]:bg-primary/10 data-[state=on]:text-primary": "primary" === n,
          "enabled:hover:text-labs/50 data-[state=on]:bg-labs/10 data-[state=on]:text-labs": "blue" === n
        }, {
          "text-xs": "xs" === i,
          "text-sm": "sm" === i
        }, s),
        ...c,
        children: o
      });
    }), d = (0, n.memo)(c);
  },
  44223: function (e, t, s) {
    s.d(t, {
      B: () => r
    });
    var l = s(72156), a = s(56610), n = s(59247);
    let r = () => {
      let {manualProfileValues: e, setManualProfileValues: t} = (0, n.U)(), s = (0, a.useMemo)(() => e.feeType, [e]), r = (0, a.useMemo)(() => e.maxJitoTipInSol, [e]), i = (0, a.useMemo)(() => new l.t(r).mul(1000000000).toNumber(), [r]), o = (0, a.useMemo)(() => e.maxPriorityFeeInSol, [e]), c = (0, a.useMemo)(() => new l.t(o).mul(1000000000).toNumber(), [o]), d = (0, a.useMemo)(() => e.broadcastModes, [e]), x = (0, a.useMemo)(() => e.maxNozomiTipInSol, [e]), u = (0, a.useMemo)(() => new l.t(x).mul(1000000000).toNumber(), [x]), m = (0, a.useCallback)(s => {
        t({
          ...e,
          feeType: s
        });
      }, [e, t]), h = (0, a.useCallback)(s => {
        t({
          ...e,
          maxJitoTipInSol: s
        });
      }, [e, t]), p = (0, a.useCallback)(s => {
        t({
          ...e,
          maxPriorityFeeInSol: s
        });
      }, [e, t]);
      return {
        feeType: s,
        maxJitoTipInSol: r,
        maxJitoTipInLamports: i,
        maxPriorityFeeInSol: o,
        maxPriorityFeeInLamports: c,
        maxNozomiTipInSol: x,
        maxNozomiTipInLamports: u,
        broadcastModes: d,
        updateFeeType: m,
        updateMaxJitoTip: h,
        updateMaxPriorityFee: p,
        updateMaxNozomiTip: (0, a.useCallback)(s => {
          t({
            ...e,
            maxNozomiTipInSol: s
          });
        }, [e, t]),
        updateBroadcastModes: (0, a.useCallback)(s => {
          t({
            ...e,
            broadcastModes: s
          });
        }, [e, t])
      };
    };
  },
  16459: function (e, t, s) {
    s.d(t, {
      D: () => r
    });
    var l = s(74334), a = s(56610), n = s(59247);
    let r = () => {
      let {manualProfileValues: e, setManualProfileValues: t} = (0, n.U)(), s = (0, a.useMemo)(() => e.slippage, [e]), {slippageSuggestionText: l, disabledByWarning: r} = i({
        slippage: s
      });
      return {
        slippage: s,
        updateSlippage: s => {
          t({
            ...e,
            slippage: s
          });
        },
        slippageSuggestionText: l,
        disabledByWarning: r
      };
    }, i = e => {
      let {slippage: t} = e;
      return (0, a.useMemo)(() => t && Number(t) > 50 ? {
        slippageSuggestionText: (0, l.jsx)(l.Fragment, {
          children: "Your transaction may be frontrun and result in an unfavourable trade."
        }),
        disabledByWarning: !1
      } : {
        slippageSuggestionText: null,
        disabledByWarning: !1
      }, [t]);
    };
  },
  19407: function (e, t, s) {
    s.d(t, {
      D: () => a
    });
    var l = s(74334);
    s(56610);
    let a = e => (0, l.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 256 256",
      ...e,
      children: (0, l.jsx)("path", {
        fill: "currentColor",
        d: "M244 56v48a12 12 0 0 1-12 12h-48a12 12 0 1 1 0-24h17.1l-19-17.38c-.13-.12-.26-.24-.38-.37A76 76 0 1 0 127 204h1a75.53 75.53 0 0 0 52.15-20.72a12 12 0 0 1 16.49 17.45A99.45 99.45 0 0 1 128 228h-1.37a100 100 0 1 1 71.88-170.94L220 76.72V56a12 12 0 0 1 24 0"
      })
    });
  }
}]);
