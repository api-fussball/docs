//server/api/_sitemap-urls.ts
export default cachedEventHandler(
    async (e) => {
        const posts = await Promise.all([
            {
                _path: '/authentication',
                modifiedAt: new Date(),
            },
            {
                _path: '/quickstart',
                modifiedAt: new Date(),
            },
            {
                _path: '/errors',
                modifiedAt: new Date(),
            },
            {
                _path: '/fussballdeid',
                modifiedAt: new Date(),
            },
            {
                _path: '/club',
                modifiedAt: new Date(),
            },
        ]);
        return posts.map((p) => {
            return {
                loc: p._path,
                lastmod: p.modifiedAt,
            };
        });
    },
    {
        name: 'sitemap-dynamic-url',
        maxAge: 60 * 10, // cache URLs for 10 minutes
    }
);
