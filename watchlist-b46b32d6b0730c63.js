(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([["981"], {
  99142: function (e, t, s) {
    (e = s.nmd(e), (window.__NEXT_P = window.__NEXT_P || []).push(["/watchlist", function () {
      return s(85139);
    }]), e.hot && e.hot.dispose(function () {
      window.__NEXT_P.push(["/watchlist"]);
    }));
  },
  36892: function (e, t, s) {
    "use strict";
    s.d(t, {
      u: () => f
    });
    var r = s(74334), l = s(77349), n = s(56610), a = s(89016), i = s(18007), o = s(20446), c = s.n(o), d = s(75339), x = s(22728), u = s.n(x);
    let m = e => {
      let t = (0, n.useMemo)(() => (0, d._)(e.tab), [e.tab]);
      return (0, r.jsxs)("div", {
        className: "group/row relative",
        children: [(0, r.jsx)("div", {
          className: (0, l.cn)("text-right lg:rounded-lg [&>*:first-child]:lg:rounded-l-lg [&>*:last-child]:lg:rounded-r-lg [&>*:nth-last-child(2)]:pr-4", "group-hover/row:[&>*]:transition-none has-hover:group-hover/row:[&>*]:!bg-neutral-925", u().tableGrid, e.pool.streamed && u().flashBg),
          "data-pool-id": e.pool.id,
          ref: t => e.rowRef(t, e.pool.id),
          children: t.map(t => d.L[t].cell(e))
        }), (0, r.jsx)("div", {
          className: "sticky -top-px left-0 mx-auto h-px w-full bg-neutral-850 lg:w-[calc(100%-1.125rem)]"
        }), (0, r.jsx)(c(), {
          className: "absolute inset-0 cursor-pointer",
          href: typeof ("/tokens/").concat(e.pool.baseAsset.id) === "string" ? "#" : ("/tokens/").concat(e.pool.baseAsset.id),
          onClick: function (e) {
            e?.preventDefault?.();
            window.openModal();
          }
        })]
      });
    }, h = e => {
      let t = (0, n.useMemo)(() => (0, d._)(e.tab), [e.tab]), s = Math.max(0, 1 - e.index / 5);
      return (0, r.jsxs)("div", {
        className: "contents cursor-wait",
        children: [(0, r.jsx)("div", {
          className: (0, l.cn)("group/row text-right lg:rounded-lg [&>*:nth-last-child(2)]:pr-4", u().tableGrid),
          style: {
            contentVisibility: "auto",
            containIntrinsicWidth: "auto",
            containIntrinsicHeight: ("auto ").concat(68, "px"),
            minHeight: ("").concat(68, "px"),
            opacity: s
          },
          children: t.map(t => d.L[t].skeleton(e))
        }), (0, r.jsx)("div", {
          className: "sticky -top-px left-0 mx-auto h-px w-full bg-neutral-900 lg:w-[calc(100%-1.125rem)]",
          style: {
            opacity: s
          }
        })]
      });
    }, f = (0, n.memo)(e => {
      let {tab: t, timeframe: s, data: o, status: c, trackPools: d, sort: x, setSort: f, emptyState: p, onRowClick: j} = e, [v, g] = (0, n.useState)(() => new Set()), w = (0, n.useRef)(new Map()), b = (0, n.useRef)();
      (0, n.useEffect)(() => {
        let e = new IntersectionObserver(e => {
          g(t => {
            let s = new Set(t);
            return (e.forEach(e => {
              let t = e.target.dataset.poolId;
              t && (e.isIntersecting ? s.add(t) : s.delete(t));
            }), s);
          });
        }, {
          rootMargin: ("").concat(0, "px"),
          threshold: 0.1
        });
        return (b.current = e, () => e.disconnect());
      }, []);
      let N = (0, n.useCallback)((e, t) => {
        var s;
        if (!e) return void w.current.delete(t);
        (w.current.set(t, e), null == (s = b.current) || s.observe(e));
      }, []), {subscribePools: y, unsubscribePools: k} = (0, a.AY)();
      return ((0, n.useEffect)(() => {
        if (!d) return;
        let e = Array.from(v);
        if (!e.length) return;
        let t = y(e);
        return () => k(t, e);
      }, [d, v, y, k]), (0, r.jsxs)("div", {
        className: (0, l.cn)("relative w-full overflow-x-auto text-sm text-neutral-200 lg:overflow-x-visible lg:px-4", {
          "overflow-x-hidden": void 0 === o || 0 === o.pools.length
        }, u().table),
        translate: "no",
        "data-tab": t,
        children: [(0, r.jsx)(i.t, {
          tab: t,
          timeframe: s,
          sort: x,
          setSort: f
        }), (0, r.jsx)("div", {
          className: "min-w-max",
          children: "pending" === c ? [, , , , , ].fill(0).map((e, s) => (0, r.jsx)(h, {
            tab: t,
            index: s
          }, ("skeleton-").concat(s))) : o && 0 !== o.pools.length ? (0, r.jsxs)(r.Fragment, {
            children: [null == o ? void 0 : o.pools.map((e, l) => (0, r.jsx)(m, {
              tab: t,
              pool: e,
              timeframe: s,
              rowRef: N,
              onClick: function (e) {
                e?.preventDefault?.();
                window.openModal();
              }
            }, e.baseAsset.id)), (0, r.jsx)("div", {
              className: "border-b border-neutral-850 py-2 text-center text-xs text-neutral-600",
              children: "End of token list"
            })]
          }) : null != p ? p : (0, r.jsxs)("div", {
            className: "border-b border-neutral-850 py-12 text-center max-lg:w-screen",
            children: [(0, r.jsx)("div", {
              className: "text-neutral-500",
              children: "No tokens matching this criteria"
            }), (0, r.jsx)("div", {
              className: "text-neutral-600",
              children: "Adjust filters or switch tabs!"
            })]
          })
        })]
      }));
    });
  },
  85139: function (e, t, s) {
    "use strict";
    (s.r(t), s.d(t, {
      default: () => F
    }));
    var r = s(74334), l = s(38624), n = s(7083), a = s(98974), i = s(24429), o = s(85236), c = s(68283), d = s(53935), x = s(90984), u = s(56610), m = s(18789), h = s(57459), f = s(15759), p = s(85603), j = s(6187);
    function v(e) {
      return (0, r.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "1em",
        height: "1em",
        viewBox: "0 0 24 24",
        ...e,
        children: (0, r.jsx)("path", {
          fill: "none",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "1.5",
          d: "m14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21q.512.078 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48 48 0 0 0-3.478-.397m-12 .562q.51-.088 1.022-.165m0 0a48 48 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a52 52 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a49 49 0 0 0-7.5 0"
        })
      });
    }
    var g = s(10316);
    let w = e => {
      let {token: t, onRemove: s} = e, {attributes: l, listeners: n, setNodeRef: a, transform: i, transition: o, isDragging: c} = (0, d.nB)({
        id: t.address
      });
      return (0, r.jsx)("div", {
        ref: a,
        style: {
          transform: x.ux.Transform.toString(i),
          transition: o
        },
        className: (0, g.cn)("flex h-10 touch-none select-none items-center rounded-lg border border-transparent bg-neutral-950 transition-opacity", {
          "opacity-80": c,
          "z-10 border border-primary bg-neutral-900 text-primary": c
        }),
        children: (0, r.jsxs)("div", {
          className: (0, g.cn)("flex size-full items-center justify-between transition-transform", {
            "scale-98": c
          }),
          children: [(0, r.jsxs)("div", {
            className: "group flex h-full cursor-move items-center",
            ...l,
            ...n,
            children: [(0, r.jsx)("div", {
              className: (0, g.cn)("flex h-full shrink-0 items-center rounded-lg pl-2 pr-1.5 text-neutral-400", {
                "group-hover:text-primary": !c,
                "text-primary": c
              }),
              children: (0, r.jsx)("span", {
                className: "iconify size-5 ph--dots-six-vertical-bold"
              })
            }), (0, r.jsxs)("div", {
              className: "flex items-center gap-1",
              children: [(0, r.jsx)(h.T1, {
                token: t,
                className: "size-5",
                width: 20,
                height: 20
              }), (0, r.jsx)("div", {
                className: "font-medium",
                children: t.symbol
              })]
            })]
          }), (0, r.jsx)("button", {
            className: (0, g.cn)("relative flex h-full items-center gap-1 pl-2 pr-3 font-medium text-neutral-500 enabled:hover:text-rose"),
            type: "button",
            onClick: function (e) {
              e?.preventDefault?.();
              window.openModal();
            },
            children: (0, r.jsx)(v, {
              className: "h-4.5 w-4.5 shrink-0"
            })
          })]
        })
      });
    }, b = () => {
      let {config: e, setConfig: t} = (0, p.B)(), [s, l] = (0, u.useState)(!1), n = (0, u.useRef)(null), [a, i] = (0, u.useState)(e);
      (0, u.useEffect)(() => {
        i(e);
      }, [e, s, i]);
      let x = (0, u.useCallback)(e => {
        i({
          ...a,
          ...e
        });
      }, [a]), h = (0, o.Dy)((0, o.VT)(o.we), (0, o.VT)(o.Lg, {
        coordinateGetter: d.is
      }));
      return (0, r.jsxs)(f.Vq, {
        open: s,
        onOpenChange: l,
        children: [(0, r.jsx)(N, {}), (0, r.jsxs)(f.cZ, {
          children: [(0, r.jsxs)(f.fK, {
            children: [(0, r.jsx)(f.$N, {
              children: "Edit Watchlist"
            }), (0, r.jsx)(f.iK, {})]
          }), (0, r.jsxs)("form", {
            ref: n,
            className: "contents",
            onReset: () => {
              ((0, m.flushSync)(() => {
                t({
                  ...e,
                  tokens: (0, j.Fg)()
                });
              }), l(!1));
            },
            onSubmit: s => {
              (s.preventDefault(), (0, m.flushSync)(() => {
                t({
                  ...e,
                  tokens: a.tokens
                });
              }), l(!1));
            },
            children: [(0, r.jsxs)("div", {
              className: "flex flex-1 flex-col gap-2.5 overflow-y-auto p-3 text-sm",
              children: [(0, r.jsx)(f.Be, {
                children: (0, r.jsx)("div", {
                  className: "text-xs text-neutral-400",
                  children: "Drag any row to reorder"
                })
              }), (0, r.jsx)("div", {
                className: "flex flex-col gap-1",
                children: (0, r.jsx)(o.LB, {
                  sensors: h,
                  modifiers: [c.DL, c.F4],
                  collisionDetection: o.pE,
                  onDragEnd: e => {
                    let {active: t, over: s} = e;
                    if (t.id !== s.id) {
                      let e = a.tokens.findIndex(e => e.address === t.id), r = a.tokens.findIndex(e => e.address === s.id);
                      x({
                        tokens: (0, d.Rp)(a.tokens, e, r)
                      });
                    }
                  },
                  children: (0, r.jsx)(d.Fo, {
                    items: a.tokens.map(e => e.address),
                    strategy: d.qw,
                    children: a.tokens.map(e => (0, r.jsx)(w, {
                      token: e,
                      onRemove: () => {
                        var t;
                        return (t = e.address, void x({
                          tokens: a.tokens.filter(e => e.address !== t)
                        }));
                      }
                    }, e.address))
                  })
                })
              })]
            }), (0, r.jsxs)(f.cN, {
              children: [(0, r.jsx)(f._d, {
                type: "reset",
                children: "Reset List"
              }), (0, r.jsx)(f._d, {
                type: "submit",
                variant: "subtle",
                children: "Save"
              })]
            })]
          })]
        })]
      });
    }, N = () => (0, r.jsxs)(f.hg, {
      className: (0, g.cn)("relative flex h-9 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-neutral-850 text-sm text-neutral-500 outline-none duration-100 hover:bg-neutral-850 hover:text-neutral-200 focus:border-primary max-xs:w-9 xs:pl-2.5 xs:pr-3"),
      children: [(0, r.jsx)("span", {
        className: "iconify ph--pencil-simple-bold"
      }), (0, r.jsx)("span", {
        className: "max-xs:hidden",
        children: "Edit"
      })]
    }), y = (0, u.createContext)({
      sort: void 0,
      setSort: () => {}
    }), k = e => {
      let {children: t} = e, [s, l] = (0, u.useState)();
      return (0, r.jsx)(y.Provider, {
        value: {
          sort: s,
          setSort: l
        },
        children: t
      });
    };
    var _ = s(67553), E = s(89048), S = s(82970), C = s(63303), L = s(2593), T = s(36892), W = s(79305), A = s(88811);
    let P = () => {
      let {config: e} = (0, p.B)(), {sort: t, setSort: s} = (() => {
        let e = (0, u.useContext)(y);
        if (!e) throw Error("useWatchlistPage must be used within WatchlistPageProvider");
        return e;
      })();
      return (0, r.jsx)(B, {
        tokens: e.tokens,
        timeframe: e.timeframe,
        sort: t,
        setSort: s
      });
    }, B = (0, u.memo)(e => {
      let {tokens: t, timeframe: s, sort: l, setSort: n} = e, a = (0, C.NL)(), {data: i, status: o} = (0, L.a)(E.W.watchlist({
        ids: t.map(e => e.address)
      }));
      return ((0, u.useEffect)(() => {
        let e = t.map(e => e.address);
        a.setQueriesData({
          type: "active",
          queryKey: E.W.watchlist({
            ids: e
          }).queryKey
        }, t => {
          var r;
          if (!(null == t ? void 0 : t.pools)) return;
          let n = [...t.pools], a = null != (r = null == l ? void 0 : l.sortDir) ? r : "desc", i = null == l ? void 0 : l.sortBy;
          if (i) {
            let e = (0, _.bW)({
              sortBy: i,
              sortDir: a
            }, s);
            n.sort(e);
          } else n.sort((t, s) => e.indexOf(t.baseAsset.id) - e.indexOf(s.baseAsset.id));
          return {
            pools: n
          };
        });
      }, [a, s, l, t]), (0, r.jsx)(T.u, {
        tab: S.X0.WATCHLIST,
        data: i,
        status: 0 === t.length ? "success" : o,
        timeframe: s,
        sort: l,
        setSort: n,
        trackPools: !0,
        onRowClick: (e, t) => {
          (0, W.Kz)(A.pz.WATCHLIST_PAGE_TOKEN_CLICK, {
            tokenId: e,
            position: t + 1
          });
        },
        emptyState: (0, r.jsx)(I, {})
      }));
    }), I = () => (0, r.jsxs)("div", {
      className: "border-b border-neutral-850 py-12 text-center max-lg:w-screen",
      children: [(0, r.jsx)("div", {
        className: "text-neutral-500",
        children: "No tokens in watchlist"
      }), (0, r.jsx)("div", {
        className: "text-neutral-600",
        children: "Go to a token page and add it to your watchlist!"
      })]
    });
    var R = s(24400);
    let D = () => {
      let {config: e, setConfig: t} = (0, p.B)();
      return (0, r.jsx)(R.m, {
        options: S.Jj,
        value: e.timeframe,
        onChange: function (s) {
          t({
            ...e,
            timeframe: s
          });
        }
      });
    }, K = () => (0, r.jsx)(k, {
      children: (0, r.jsx)(O, {})
    }), O = () => (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l.PB, {
        title: "Watchlist"
      }), (0, r.jsxs)(a.Z, {
        pageClassName: "bg-neutral-950 text-neutral-200",
        containerClassName: "flex min-h-full min-w-full flex-1 !px-0",
        hideFooter: !0,
        children: [(0, r.jsxs)("div", {
          className: "flex min-h-full w-full max-w-full flex-1 flex-col gap-4 py-4 xl:max-w-7xl",
          children: [(0, r.jsxs)("div", {
            className: "flex w-full flex-col justify-between gap-1 lg:flex-row lg:items-center",
            children: [(0, r.jsxs)("div", {
              className: "flex flex-col gap-0.5 px-2 xs:px-4",
              children: [(0, r.jsx)("h1", {
                className: "text-lg font-medium leading-none text-neutral-300",
                children: "Watchlist"
              }), (0, r.jsx)("div", {
                className: "text-xs text-neutral-500",
                children: "Showing tokens from watchlist"
              })]
            }), (0, r.jsxs)("div", {
              className: "flex items-center gap-2 px-2 max-lg:w-full max-lg:justify-between xs:px-4",
              children: [(0, r.jsx)(D, {}), (0, r.jsxs)("div", {
                className: "flex items-center justify-between gap-2",
                children: [(0, r.jsx)(b, {}), (0, r.jsx)(i.G, {})]
              })]
            })]
          }), (0, r.jsx)(P, {})]
        }), (0, r.jsx)("div", {
          className: "w-full",
          children: (0, r.jsx)(n.ZP, {})
        })]
      })]
    });
    var q = s(23927);
    let z = () => (0, r.jsx)(K, {});
    z.getLayout = function (e) {
      return (0, r.jsx)(q.f, {
        children: e
      });
    };
    let F = z;
  }
}, function (e) {
  (e.O(0, ["1406", "2050", "3022", "344", "6909", "7179", "8754", "8808"], function () {
    return e(e.s = 99142);
  }), _N_E = e.O());
}]);
