(self.__BUILD_MANIFEST = (function (s, a, e, t, c, i, n, r, o, d, p, u, f, b, h, k, l, g, j, O, w, _, m, S, I, v, L, y, D, B, F, U, C) {
  return {
    __rewrites: {
      afterFiles: [{
        has: s,
        source: "/.well-known/apple-app-site-association",
        destination: ".well-known/apple-app-site-association.json"
      }, {
        has: s,
        source: "/.well-known/assetlinks",
        destination: ".well-known/assetlinks.json"
      }, {
        has: s,
        source: "/swap",
        destination: "/swap/USDC-SOL"
      }, {
        has: s,
        source: "/stats",
        destination: "/stats/day"
      }, {
        has: s,
        source: "/trigger",
        destination: "/trigger/USDC-SOL"
      }, {
        has: s,
        source: "/recurring",
        destination: "/recurring/USDC-SOL"
      }, {
        has: s,
        source: "/va",
        destination: _
      }, {
        has: s,
        source: "/perps",
        destination: "/perps/long/SOL-SOL"
      }, {
        has: s,
        source: "/perps-v2",
        destination: "/perps-v2/long/SOL-SOL"
      }, {
        has: s,
        source: "/perps-legacy",
        destination: "/perps-legacy/long/SOL-SOL"
      }, {
        has: s,
        source: "/va",
        destination: _
      }, {
        has: s,
        source: "/bridge",
        destination: "/bridge/compare"
      }, {
        has: s,
        source: "sitemap.xml",
        destination: s
      }, {
        has: s,
        source: "/mobile",
        destination: s
      }, {
        has: s,
        source: "/mobile/terms",
        destination: s
      }],
      beforeFiles: [],
      fallback: []
    },
    __routerFilterStatic: {
      numItems: 0,
      errorRate: 0.0001,
      numBits: 0,
      numHashes: S,
      bitArray: []
    },
    __routerFilterDynamic: {
      numItems: i,
      errorRate: 0.0001,
      numBits: i,
      numHashes: S,
      bitArray: []
    },
    "/": [a, t, n, u, f, b, I, "static/css/f7cfc1c4cb41bc75.css", "static/chunks/pages/index-3cc60720b037a0ca.js"],
    "/_error": ["static/chunks/pages/_error-41dfb8270af0350c.js"],
    "/appeal": ["static/chunks/pages/appeal-666d76e68e1ab31e.js"],
    "/ask-for-sol/[address]": ["static/chunks/pages/ask-for-sol/[address]-f2eb55f1956a406b.js"],
    "/gift": ["static/chunks/pages/gift-59df3613ca4a1ea8.js"],
    "/lend": ["static/chunks/pages/lend-fff1114c50e7677d.js"],
    "/login/twitter": ["static/chunks/pages/login/twitter-e9411493e9b57124.js"],
    "/onboard": ["static/chunks/pages/onboard-c9da5b1768a27de0.js"],
    "/onboard/cctp": ["static/chunks/pages/onboard/cctp-62337026ad3f469c.js"],
    "/onboard/cex": ["static/chunks/pages/onboard/cex-5de8dd70da7b2b4b.js"],
    "/onboard/debridge": ["static/chunks/pages/onboard/debridge-3442b45b949f0bca.js"],
    "/onboard/onramp": ["static/chunks/pages/onboard/onramp-77e31d69949f9a30.js"],
    "/perps/jlp-earn": [h, "static/chunks/pages/perps/jlp-earn-822a6913ec3abda0.js"],
    "/perps/jlp-loans": [r, k, "static/chunks/pages/perps/jlp-loans-fc08b44c5773f072.js"],
    "/perps/[direction]/[inOut]": [r, k, h, v, L, "static/chunks/pages/perps/[direction]/[inOut]-c3d578d28bcf04d2.js"],
    "/perps-leaderboard": ["static/chunks/pages/perps-leaderboard-c416a1a6c758c768.js"],
    "/perps-legacy/[direction]/[inOut]": [r, h, L, "static/chunks/pages/perps-legacy/[direction]/[inOut]-38c81e5b3564745c.js"],
    "/perps-v2/[direction]/[inOut]": [r, k, v, "static/chunks/pages/perps-v2/[direction]/[inOut]-ea7362a869d30d7d.js"],
    "/portfolio": [o, "static/chunks/pages/portfolio-9f91d5e875423aa7.js"],
    "/portfolio/address-book": [o, l, "static/chunks/pages/portfolio/address-book-ea25a880b0953ad0.js", g],
    "/portfolio/[addresses]": [o, l, y, g, "static/chunks/pages/portfolio/[addresses]-f09eba4e04a6d533.js"],
    "/portfolio/[addresses]/transactions": [o, l, y, g, "static/chunks/pages/portfolio/[addresses]/transactions-017307b8c7ab9968.js"],
    "/pro": [e, c, d, p, D, "static/chunks/pages/pro-a8f07b3c57c257d7.js", B],
    "/pro/launchpads/[launchpad]": [e, c, d, p, "static/chunks/pages/pro/launchpads/[launchpad]-283da0bc72843763.js"],
    "/pro/screener/[screener]": [e, c, d, p, D, "static/chunks/pages/pro/screener/[screener]-8b9d3a48fa0ba298.js", B],
    "/recurring/[inOut]": [a, t, b, j, "static/chunks/pages/recurring/[inOut]-f45e9124926ba98f.js"],
    "/send": [a, "static/chunks/pages/send-8584f7bd4135de0f.js"],
    "/studio": ["static/chunks/recharts-01c659cb6fe1f324.js", O, F, "static/css/7c12d7727b0a4670.css", "static/chunks/pages/studio-9430446de73e7fd7.js"],
    "/studio/creator": [O, "static/chunks/pages/studio/creator-ccc5e70c43aab82f.js"],
    "/studio/login/twitter": ["static/chunks/pages/studio/login/twitter-74dab6313a5fb696.js"],
    "/studio/[tokenId]": [a, e, n, O, U, C, F, "static/chunks/pages/studio/[tokenId]-9fb3cc45f4553d78.js"],
    "/swap/[inOut]": [a, t, n, f, j, I, "static/chunks/pages/swap/[inOut]-4960f0679e430b67.js"],
    "/tokens/[tokenId]": [a, e, c, t, n, u, f, b, U, C, "static/css/aca64d5c9750fd26.css", "static/chunks/pages/tokens/[tokenId]-a814ef1a312a819c.js"],
    "/trigger/[inOut]": [a, t, u, j, "static/chunks/pages/trigger/[inOut]-8b911ed3704da583.js"],
    "/verify": ["static/chunks/pages/verify-8a8668e17d7f7783.js"],
    "/watchlist": [e, c, d, p, "static/chunks/pages/watchlist-b46b32d6b0730c63.js"],
    sortedPages: ["/", "/_app", "/_error", "/appeal", "/ask-for-sol/[address]", "/gift", "/lend", "/login/twitter", "/onboard", "/onboard/cctp", "/onboard/cex", "/onboard/debridge", "/onboard/onramp", "/perps/jlp-earn", "/perps/jlp-loans", "/perps/[direction]/[inOut]", "/perps-leaderboard", "/perps-legacy/[direction]/[inOut]", "/perps-v2/[direction]/[inOut]", "/portfolio", "/portfolio/address-book", "/portfolio/[addresses]", "/portfolio/[addresses]/transactions", "/pro", "/pro/launchpads/[launchpad]", "/pro/screener/[screener]", "/recurring/[inOut]", "/send", "/studio", "/studio/creator", "/studio/login/twitter", "/studio/[tokenId]", "/swap/[inOut]", "/tokens/[tokenId]", "/trigger/[inOut]", "/verify", "/watchlist"]
  };
})(void 0, "static/chunks/6120-2a6f22cd51b0ea7a.js", "static/chunks/3022-c3ce1be6c3c585e1.js", "static/chunks/4321-bf6ab6c92794f4b1.js", "static/chunks/8754-8eca57768f744c61.js", 0, "static/chunks/1107-7db8ab5a39a04626.js", "static/chunks/9597-39863013bfd3974d.js", "static/chunks/4523-27a2875071bbc6ad.js", "static/chunks/1406-f98b11be8b3ed4a8.js", "static/css/ac202e11f0ae5c8c.css", "static/chunks/8653-f5f2332a748fdd30.js", "static/chunks/8559-dcc82e3f9a9d6344.js", "static/chunks/7651-bc098e02e471eaec.js", "static/chunks/7574-5b97ce4a40dd0f8f.js", "static/chunks/5845-b97605e8046dc7ee.js", "static/chunks/1337-675c422be1f5f65b.js", "static/css/b4ad96fe0cb5a5b8.css", "static/chunks/7297-2a4d4a0a7c66ff96.js", "static/chunks/4383-1e78fd806bf2a2b3.js", "/va", "/va/USDC-SOL", 0.0001, NaN, "static/chunks/4958-90e1e08076c8d26c.js", "static/chunks/3858-beaa161975043408.js", "static/chunks/8670-bcdd0f2ea4833700.js", "static/chunks/4829-afabe421076c4e0c.js", "static/chunks/4753-2a301000bd7bf527.js", "static/css/8fe2d0c4032dbf18.css", "static/chunks/245-2155fd230a0d63d3.js", "static/chunks/2295-0f3a4de9e5fe18a4.js", "static/css/afaec495ba153c93.css"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB());
