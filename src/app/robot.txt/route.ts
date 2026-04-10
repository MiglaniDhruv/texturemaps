export function GET() {
  return new Response(
    `User-agent: *
Allow: /

Sitemap: https://texturemaps.co.in/sitemap.xml`,
    {
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );
}
