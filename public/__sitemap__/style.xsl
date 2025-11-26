<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap - api-fussball.de</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <style type="text/css">
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
            color: #333;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
          }
          h1 {
            font-size: 24px;
            color: #059669;
            margin-bottom: 10px;
          }
          .intro {
            background: #f0fdf4;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 20px;
            border-left: 4px solid #059669;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
          }
          th {
            background: #059669;
            color: white;
            padding: 12px;
            text-align: left;
            font-weight: 600;
          }
          td {
            padding: 10px 12px;
            border-bottom: 1px solid #e5e7eb;
          }
          tr:hover {
            background: #f9fafb;
          }
          a {
            color: #059669;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
          .url-count {
            color: #6b7280;
            font-size: 14px;
          }
        </style>
      </head>
      <body>
        <h1>XML Sitemap - api-fussball.de</h1>
        <div class="intro">
          <p class="url-count">
            This XML Sitemap contains <strong><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></strong> URLs.
          </p>
          <p>This sitemap is used by search engines to discover and index pages on api-fussball.de.</p>
        </div>
        <table>
          <thead>
            <tr>
              <th style="width: 60%">URL</th>
              <th style="width: 15%">Images</th>
              <th style="width: 25%">Last Updated</th>
            </tr>
          </thead>
          <tbody>
            <xsl:for-each select="sitemap:urlset/sitemap:url">
              <tr>
                <td>
                  <a href="{sitemap:loc}">
                    <xsl:value-of select="sitemap:loc"/>
                  </a>
                </td>
                <td>
                  <xsl:value-of select="count(image:image)"/>
                </td>
                <td>
                  <xsl:value-of select="sitemap:lastmod"/>
                </td>
              </tr>
            </xsl:for-each>
          </tbody>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
