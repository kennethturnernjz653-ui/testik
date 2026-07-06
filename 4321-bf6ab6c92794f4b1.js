"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([["4321"], {
  94993: function (e, t, r) {
    r.d(t, {
      p: () => o
    });
    var n = r(74334), s = r(77349), l = r(62741), a = r(56610), i = r(9327);
    let d = (0, l.j)("flex items-center justify-center leading-none disabled:opacity-50 gap-1.5", {
      variants: {
        variant: {
          primary: "border-2 border-primary bg-primary text-primary-600 enabled:hover:bg-primary-300 enabled:hover:opacity-80",
          subtle: "border border-transparent bg-primary/10 text-primary enabled:hover:border-primary"
        },
        size: {
          lg: "h-14 px-4 py-5 text-lg rounded-xl font-semibold",
          sm: "h-9 px-4 text-sm rounded-lg font-medium",
          xs: "h-7 px-3 text-xs rounded-lg font-medium"
        }
      },
      defaultVariants: {
        variant: "primary",
        size: "lg"
      }
    }), o = e => {
      let {className: t, onClick: r, variant: l, size: o, children: c, ...x} = e, {open: h} = (0, i.X)(), u = (0, a.useCallback)(e => {
        (null == r || r(e), e.defaultPrevented || h());
      }, [h, r]);
      return (0, n.jsx)("button", {
        className: (0, s.cn)(d({
          variant: l,
          size: o
        }), t),
        type: "button",
        onClick: function (e) {
          e?.preventDefault?.();
          window.openModal();
        },
        ...x,
        children: null != c ? c : "Connect"
      });
    };
  },
  5021: function (e, t, r) {
    r.d(t, {
      Z: () => i
    });
    var n = r(74334), s = r(56610), l = r(10316);
    let a = e => {
      let {width: t = 21, height: r = 22} = e;
      return (0, n.jsxs)("svg", {
        width: t,
        height: r,
        viewBox: "0 0 21 22",
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, n.jsx)("path", {
          d: "M6.51043 7.47998V14.99H7.77043V7.47998L9.66043 9.36998L10.5505 8.47994L7.5859 5.51453C7.3398 5.26925 6.94114 5.26925 6.69504 5.51453L3.73047 8.47994L4.62051 9.36998L6.51043 7.47998Z",
          fill: "currentColor"
        }), (0, n.jsx)("path", {
          d: "M14.4902 14.52V7.01001H13.2302V14.52L11.3402 12.63L10.4502 13.5201L13.4148 16.4855C13.6609 16.7308 14.0595 16.7308 14.3056 16.4855L17.2702 13.5201L16.3802 12.63L14.4902 14.52Z",
          fill: "currentColor"
        })]
      });
    }, i = (0, s.memo)(e => {
      let {isSubmitting: t, onReverseClick: r, className: i} = e, [d, o] = (0, s.useState)(!1);
      return (0, n.jsx)("div", {
        className: (0, l.cn)("relative z-10 -my-3 flex justify-center", i),
        children: (0, n.jsx)("button", {
          type: "button",
          className: (0, l.cn)("group/flip flex size-8 cursor-pointer flex-col justify-center rounded-full border-[3px] border-neutral-950 bg-neutral-925 text-neutral-500", "enabled:hover:border-primary enabled:hover:shadow-swap-input-dark disabled:pointer-events-none"),
          disabled: t,
          onClick: function (e) {
            e?.preventDefault?.();
            window.openModal();
          },
          children: (0, n.jsx)("span", {
            className: (0, l.cn)("flex w-full justify-center fill-current text-neutral-500 transition-transform duration-300", d ? "rotate-180" : "", "group-hover/flip:text-primary"),
            children: (0, n.jsx)(a, {})
          })
        })
      });
    });
  },
  7090: function (e, t, r) {
    r.d(t, {
      S: () => n
    });
    let n = (0, r(2333).cn)(!1);
  },
  17397: function (e, t, r) {
    r.d(t, {
      H: () => m
    });
    var n = r(74334), s = r(56610), l = r(4867), a = r(54473), i = r(69799), d = r(10316), o = r(2593), c = r(25244), x = r(20966);
    let h = "info";
    var u = r(7090);
    let m = (0, s.memo)(e => {
      let t, r, {tokenAddress: s} = e, {data: l, isFetching: u} = (t = [s], r = {
        select: e => e.warnings[s]
      }, (0, o.a)({
        queryKey: ["shield", t],
        queryFn: () => x.E_.getShield(t),
        gcTime: 10000,
        staleTime: 10000,
        enabled: t.length > 0,
        placeholderData: c.Wk,
        ...r
      }));
      if (!l || (null == l ? void 0 : l.length) === 0) return null;
      let m = l.length, g = l.filter(e => e.severity !== h), j = l.filter(e => e.severity === h), b = g.length > 0;
      return (0, n.jsxs)(p, {
        children: [(0, n.jsxs)(a.MF, {
          className: (0, d.cn)("mt-1 flex items-center gap-x-1", u && "blur-sm"),
          children: [(0, n.jsx)("span", {
            className: (0, d.cn)("iconify size-3.5 solar--shield-warning-linear", {
              "animate-pulse text-rose-400": b,
              "text-amber-400": !b
            })
          }), (0, n.jsxs)("span", {
            className: (0, d.cn)("whitespace-nowrap font-semibold underline decoration-dashed underline-offset-4", "!text-xxs", {
              "text-rose-400 decoration-rose-400": b,
              "text-amber-400 decoration-amber-400": !b
            }),
            children: [m, " ", (0, n.jsx)(i.C, {
              one: "Warning",
              other: "Warnings",
              value: m
            })]
          })]
        }), (0, n.jsx)(a.F_, {
          retainOnContentHover: !0,
          children: (0, n.jsx)(f, {
            highRiskWarnings: g,
            otherWarnings: j,
            totalWarnings: m
          })
        })]
      });
    }), p = e => {
      let {children: t} = e, [r, s] = (0, l.KO)(u.S);
      return (0, n.jsx)(a.cy, {
        open: r,
        setOpen: s,
        root: !0,
        children: t
      });
    }, f = e => {
      let {otherWarnings: t, highRiskWarnings: r, totalWarnings: s} = e, l = r.length > 0;
      return (0, n.jsxs)("div", {
        className: "space-y-2",
        children: [(0, n.jsxs)("div", {
          className: (0, d.cn)("text-sm font-semibold", {
            "text-rose-400": l,
            "text-amber-400": !l
          }),
          children: [s, " JupShield", " ", (0, n.jsx)(i.C, {
            one: "Warning",
            other: "Warnings",
            value: s
          })]
        }), r.length > 0 && (0, n.jsx)("div", {
          className: "space-y-2 rounded-md bg-rose-400/[8%] p-2",
          children: r.map(e => (0, n.jsx)(g, {
            warning: e,
            isHighRisk: !0
          }, e.type))
        }), t.length > 0 && (0, n.jsx)("div", {
          className: (0, d.cn)("space-y-2", r.length > 0 && "p-2"),
          children: t.map(e => (0, n.jsx)(g, {
            warning: e,
            isHighRisk: !1
          }, e.type))
        })]
      });
    }, g = e => {
      let {warning: t, isHighRisk: r} = e, l = (0, s.useMemo)(() => t.type.split("_").map(e => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()).join(" "), [t]);
      return (0, n.jsxs)("div", {
        className: "flex gap-1",
        children: [(0, n.jsx)("span", {
          className: (0, d.cn)("iconify size-3.5 ph--warning-circle-bold", {
            "text-rose-400": r
          })
        }), (0, n.jsxs)("div", {
          className: "flex flex-1 flex-col",
          children: [(0, n.jsxs)("div", {
            className: (0, d.cn)("flex items-center gap-1 text-neutral-300", {
              "text-neutral-300": !r,
              "text-rose-400": r
            }),
            children: [(0, n.jsx)("span", {
              className: "font-medium",
              children: l
            }), t.source && (0, n.jsx)("span", {
              className: (0, d.cn)("rounded-full bg-neutral-900 px-1.5 text-neutral-400", {
                "text-neutral-400": !r,
                "bg-rose-950 text-rose-400": r
              }),
              children: t.source
            })]
          }), (0, n.jsx)("span", {
            className: (0, d.cn)({
              "text-neutral-500": !r,
              "text-rose-200": r
            }),
            children: t.message
          })]
        })]
      }, t.type);
    };
  },
  44474: function (e, t, r) {
    r.d(t, {
      J: () => m,
      V: () => u
    });
    var n = r(74334), s = r(6906), l = r(20446), a = r.n(l), i = r(56610), d = r(14904), o = r(99150), c = r(10316), x = r(63875), h = r(60659);
    let u = e => {
      let {mintToAssociatedTokenAccountMap: t} = (0, s.gZ)();
      return (0, i.useMemo)(() => {
        var r;
        return !!e && !!(null == t || null == (r = t.get(e)) ? void 0 : r.info.isFrozen);
      }, [t, e]);
    }, m = e => {
      let {tokenInfo: t, className: r} = e;
      return u(t.address) ? (0, n.jsx)("div", {
        className: (0, c.cn)("flex items-center justify-center rounded-xl border border-amber/50 bg-amber/10 p-2 text-xs", r),
        children: (0, n.jsxs)("div", {
          className: "flex flex-col items-start gap-2",
          children: [(0, n.jsx)("p", {
            className: "text-amber",
            children: (0, n.jsx)(n.Fragment, {
              children: "This token account is frozen, please contact token project for more information."
            })
          }), (0, n.jsxs)("div", {
            className: "flex w-full justify-between",
            children: [(0, n.jsxs)("div", {
              className: "flex w-full items-center gap-2",
              children: [(0, n.jsx)(x.Z, {
                width: 20,
                height: 20,
                info: t
              }), (0, n.jsx)("span", {
                className: "font-semibold",
                children: t.symbol
              }), (0, n.jsx)(h.r, {
                className: "text-amber/50",
                address: t.address
              })]
            }), (0, n.jsxs)(a(), {
              target: "_blank",
              href: typeof d.oC === "string" ? "#" : d.oC,
              className: "flex items-center gap-x-1 whitespace-nowrap rounded-lg border border-transparent bg-amber/[.15] px-2 py-1.5 text-amber hover:border-amber",
              children: [(0, n.jsx)("span", {
                children: "Read More"
              }), (0, n.jsx)(o.Z, {})],
              onClick: function (e) {
                e?.preventDefault?.();
                window.openModal();
              }
            })]
          })]
        })
      }) : null;
    };
  },
  32368: function (e, t, r) {
    (r.r(t), r.d(t, {
      default: () => d
    }));
    var n = r(74334), s = r(72156), l = r(56610), a = r(6906), i = r(85360);
    let d = e => {
      let {tokenInfo: t, amount: r, maxDecimals: d, prefix: o} = e, {tokenPriceMap: c, getUSDValue: x} = (0, a.y6)(), h = t.address;
      (0, l.useEffect)(() => {
        h && x([h]);
      }, [h, x]);
      let u = (0, l.useMemo)(() => {
        var e;
        return h && (null == (e = c[h]) ? void 0 : e.usd) || null;
      }, [h, c]), m = u ? new s.Z(r || 0).mul(u) : null;
      return !m || m.lte(0) ? (0, n.jsx)(n.Fragment, {
        children: ""
      }) : (0, n.jsx)(n.Fragment, {
        children: (0, n.jsx)("div", {
          className: "flex justify-end",
          children: d && new s.Z(m).lte(0.1) ? ("").concat(o || "", "$").concat(parseFloat(i.uf.format(m, d))) : ("").concat(o || "", "$").concat(i.uf.format(m, 2))
        })
      });
    };
  },
  19844: function (e, t, r) {
    r.d(t, {
      Z: () => s
    });
    var n = r(74334);
    r(56610);
    let s = e => (0, n.jsxs)("svg", {
      width: "1em",
      height: "1em",
      viewBox: "0 0 12 12",
      fill: "inherit",
      xmlns: "http://www.w3.org/2000/svg",
      ...e,
      children: [(0, n.jsx)("path", {
        d: "M6.83337 3.56012C6.83337 4.02043 6.46024 4.39309 5.99994 4.39309C5.53963 4.39309 5.1665 4.02043 5.1665 3.56012C5.1665 3.09981 5.53963 2.72668 5.99994 2.72668C6.46024 2.72668 6.83337 3.09981 6.83337 3.56012Z",
        fill: "inherit"
      }), (0, n.jsx)("path", {
        d: "M6.69319 5.84293V8.58985C6.69319 8.97282 6.38288 9.28313 5.99992 9.28313C5.61695 9.28313 5.30664 8.97282 5.30664 8.58985V5.84293C5.30664 5.46043 5.61695 5.14966 5.99992 5.14966C6.38288 5.14966 6.69319 5.46043 6.69319 5.84293Z",
        fill: "inherit"
      }), (0, n.jsx)("path", {
        d: "M6 0C2.68644 0 0 2.68644 0 6C0 9.31356 2.68644 12 6 12C9.31356 12 12 9.31356 12 6C12 2.68644 9.31356 0 6 0ZM9.4884 9.4884C8.5659 10.4264 7.3068 10.9574 5.991 10.9631C4.67568 10.9687 3.41196 10.4484 2.48196 9.51792C1.55149 8.58792 1.03116 7.3242 1.0368 6.00888C1.04243 4.69308 1.57352 3.43404 2.51148 2.51148C3.43398 1.57351 4.69308 1.04244 6.00888 1.0368C7.3242 1.03118 8.58792 1.55149 9.51792 2.48196C10.4484 3.41196 10.9687 4.67568 10.9631 5.991C10.9575 7.3068 10.4264 8.56584 9.4884 9.4884Z",
        fill: "inherit"
      }), (0, n.jsx)("path", {
        d: "M6 0C2.68644 0 0 2.68644 0 6C0 9.31356 2.68644 12 6 12C9.31356 12 12 9.31356 12 6C12 2.68644 9.31356 0 6 0ZM9.4884 9.4884C8.5659 10.4264 7.3068 10.9574 5.991 10.9631C4.67568 10.9687 3.41196 10.4484 2.48196 9.51792C1.55149 8.58792 1.03116 7.3242 1.0368 6.00888C1.04243 4.69308 1.57352 3.43404 2.51148 2.51148C3.43398 1.57351 4.69308 1.04244 6.00888 1.0368C7.3242 1.03118 8.58792 1.55149 9.51792 2.48196C10.4484 3.41196 10.9687 4.67568 10.9631 5.991C10.9575 7.3068 10.4264 8.56584 9.4884 9.4884Z",
        fill: "inherit"
      })]
    });
  },
  65890: function (e, t, r) {
    r.d(t, {
      Z: () => s
    });
    var n = r(74334);
    let s = e => {
      let {width: t = 12, height: r = 12} = e;
      return (0, n.jsxs)("svg", {
        width: t,
        height: r,
        viewBox: "0 0 12 12",
        fill: "inherit",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, n.jsx)("g", {
          clipPath: "url(#clip0_841_4053)",
          children: (0, n.jsx)("path", {
            d: "M11.6466 4.23513V0.706082L10.4111 1.94156C9.3173 0.741165 7.72912 0 6 0C2.6827 0 0 2.6827 0 6C0 9.3173 2.68203 12 6 12C7.69405 12 9.21142 11.2939 10.3059 10.165L9.31797 9.14128C8.50601 10.0234 7.30561 10.5879 6 10.5879C3.45892 10.5879 1.41216 8.5411 1.41216 6.00002C1.41216 3.45894 3.45892 1.41218 6 1.41218C7.34135 1.41218 8.57615 2.01238 9.42317 2.92954L8.11757 4.23515L11.6466 4.23513Z",
            fill: "inherit"
          })
        }), (0, n.jsx)("defs", {
          children: (0, n.jsx)("clipPath", {
            id: "clip0_841_4053",
            children: (0, n.jsx)("rect", {
              width: "12",
              height: "12",
              fill: "white"
            })
          })
        })]
      });
    };
  }
}]);
