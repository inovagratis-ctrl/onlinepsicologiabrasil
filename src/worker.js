export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // 1. Redirecionamento canônico HTTPS se vier em HTTP
    if (url.protocol === "http:") {
      return Response.redirect(`https://${url.hostname}${url.pathname}${url.search}`, 301);
    }

    // 2. Busca arquivos estáticos via env.ASSETS
    let response = await env.ASSETS.fetch(request);

    // Se 404 e for rota sem extensão, tenta com /index.html ou .html
    if (response.status === 404 && !url.pathname.includes(".")) {
      const cleanPath = url.pathname.endsWith("/") ? url.pathname : `${url.pathname}/`;
      const htmlReq = new Request(new URL(`${cleanPath}index.html`, request.url), request);
      response = await env.ASSETS.fetch(htmlReq);

      if (response.status === 404) {
        const dotHtmlReq = new Request(new URL(`${url.pathname}.html`, request.url), request);
        response = await env.ASSETS.fetch(dotHtmlReq);
      }
    }

    // 3. Cabeçalhos de segurança e integridade
    const newHeaders = new Headers(response.headers);
    const contentType = newHeaders.get("content-type") || "";
    if (contentType.includes("text/html") && !contentType.includes("charset")) {
      newHeaders.set("content-type", "text/html; charset=UTF-8");
    }

    newHeaders.set("X-Content-Type-Options", "nosniff");
    newHeaders.set("Referrer-Policy", "strict-origin-when-cross-origin");
    newHeaders.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders,
    });
  },
};
