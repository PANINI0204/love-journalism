import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro/server_Dc0G1kzi.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"","routes":[{"file":"file:///C:/Users/Ley/Desktop/love-journalism/dist/js/bootstrap","links":[],"scripts":[],"styles":[],"routeData":{"route":"/js/bootstrap","isIndex":false,"type":"endpoint","pattern":"^\\/js\\/bootstrap\\/?$","segments":[[{"content":"js","dynamic":false,"spread":false}],[{"content":"bootstrap","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/js/bootstrap.js","pathname":"/js/bootstrap","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/Ley/Desktop/love-journalism/dist/js/classie","links":[],"scripts":[],"styles":[],"routeData":{"route":"/js/classie","isIndex":false,"type":"endpoint","pattern":"^\\/js\\/classie\\/?$","segments":[[{"content":"js","dynamic":false,"spread":false}],[{"content":"classie","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/js/classie.js","pathname":"/js/classie","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/Ley/Desktop/love-journalism/dist/js/easing","links":[],"scripts":[],"styles":[],"routeData":{"route":"/js/easing","isIndex":false,"type":"endpoint","pattern":"^\\/js\\/easing\\/?$","segments":[[{"content":"js","dynamic":false,"spread":false}],[{"content":"easing","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/js/easing.js","pathname":"/js/easing","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/Ley/Desktop/love-journalism/dist/js/jquery.flexisel","links":[],"scripts":[],"styles":[],"routeData":{"route":"/js/jquery.flexisel","isIndex":false,"type":"endpoint","pattern":"^\\/js\\/jquery\\.flexisel\\/?$","segments":[[{"content":"js","dynamic":false,"spread":false}],[{"content":"jquery.flexisel","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/js/jquery.flexisel.js","pathname":"/js/jquery.flexisel","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/Ley/Desktop/love-journalism/dist/js/jquery.marquee.min","links":[],"scripts":[],"styles":[],"routeData":{"route":"/js/jquery.marquee.min","isIndex":false,"type":"endpoint","pattern":"^\\/js\\/jquery\\.marquee\\.min\\/?$","segments":[[{"content":"js","dynamic":false,"spread":false}],[{"content":"jquery.marquee.min","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/js/jquery.marquee.min.js","pathname":"/js/jquery.marquee.min","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/Ley/Desktop/love-journalism/dist/js/jquery.min","links":[],"scripts":[],"styles":[],"routeData":{"route":"/js/jquery.min","isIndex":false,"type":"endpoint","pattern":"^\\/js\\/jquery\\.min\\/?$","segments":[[{"content":"js","dynamic":false,"spread":false}],[{"content":"jquery.min","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/js/jquery.min.js","pathname":"/js/jquery.min","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/Ley/Desktop/love-journalism/dist/js/move-top","links":[],"scripts":[],"styles":[],"routeData":{"route":"/js/move-top","isIndex":false,"type":"endpoint","pattern":"^\\/js\\/move-top\\/?$","segments":[[{"content":"js","dynamic":false,"spread":false}],[{"content":"move-top","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/js/move-top.js","pathname":"/js/move-top","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/Ley/Desktop/love-journalism/dist/js/responsiveslides.min","links":[],"scripts":[],"styles":[],"routeData":{"route":"/js/responsiveslides.min","isIndex":false,"type":"endpoint","pattern":"^\\/js\\/responsiveslides\\.min\\/?$","segments":[[{"content":"js","dynamic":false,"spread":false}],[{"content":"responsiveslides.min","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/js/responsiveslides.min.js","pathname":"/js/responsiveslides.min","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/Ley/Desktop/love-journalism/dist/js/uisearch","links":[],"scripts":[],"styles":[],"routeData":{"route":"/js/uisearch","isIndex":false,"type":"endpoint","pattern":"^\\/js\\/uisearch\\/?$","segments":[[{"content":"js","dynamic":false,"spread":false}],[{"content":"uisearch","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/js/uisearch.js","pathname":"/js/uisearch","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/Ley/Desktop/love-journalism/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Ley/Desktop/love-journalism/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/js/bootstrap@_@js":"pages/js/bootstrap.astro.mjs","\u0000@astro-page:src/pages/js/classie@_@js":"pages/js/classie.astro.mjs","\u0000@astro-page:src/pages/js/easing@_@js":"pages/js/easing.astro.mjs","\u0000@astro-page:src/pages/js/jquery.flexisel@_@js":"pages/js/jquery.flexisel.astro.mjs","\u0000@astro-page:src/pages/js/jquery.marquee.min@_@js":"pages/js/jquery.marquee.min.astro.mjs","\u0000@astro-page:src/pages/js/jquery.min@_@js":"pages/js/jquery.min.astro.mjs","\u0000@astro-page:src/pages/js/move-top@_@js":"pages/js/move-top.astro.mjs","\u0000@astro-page:src/pages/js/responsiveslides.min@_@js":"pages/js/responsiveslides.min.astro.mjs","\u0000@astro-page:src/pages/js/uisearch@_@js":"pages/js/uisearch.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_CNBOuax5.mjs","/src/pages/js/bootstrap.js":"chunks/bootstrap_D0aHL6Su.mjs","/src/pages/js/classie.js":"chunks/classie_-RYXe_wc.mjs","/src/pages/js/easing.js":"chunks/easing_Cfi6audz.mjs","/src/pages/js/jquery.flexisel.js":"chunks/jquery.flexisel_DrdDfWSl.mjs","/src/pages/js/jquery.marquee.min.js":"chunks/jquery.marquee.min_10TpVv36.mjs","/src/pages/js/jquery.min.js":"chunks/jquery.min_CyPY934e.mjs","/src/pages/js/move-top.js":"chunks/move-top_3xffT3my.mjs","/src/pages/js/responsiveslides.min.js":"chunks/responsiveslides.min_DvcfLxf2.mjs","/src/pages/js/uisearch.js":"chunks/uisearch_8stCvcet.mjs","/src/pages/index.astro":"chunks/index_DVE6bqma.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.B4IQA4Ms.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/file:///C:/Users/Ley/Desktop/love-journalism/dist/js/bootstrap","/file:///C:/Users/Ley/Desktop/love-journalism/dist/js/classie","/file:///C:/Users/Ley/Desktop/love-journalism/dist/js/easing","/file:///C:/Users/Ley/Desktop/love-journalism/dist/js/jquery.flexisel","/file:///C:/Users/Ley/Desktop/love-journalism/dist/js/jquery.marquee.min","/file:///C:/Users/Ley/Desktop/love-journalism/dist/js/jquery.min","/file:///C:/Users/Ley/Desktop/love-journalism/dist/js/move-top","/file:///C:/Users/Ley/Desktop/love-journalism/dist/js/responsiveslides.min","/file:///C:/Users/Ley/Desktop/love-journalism/dist/js/uisearch","/file:///C:/Users/Ley/Desktop/love-journalism/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false,"experimentalEnvGetSecretEnabled":false});

export { manifest };
