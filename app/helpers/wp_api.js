
const NAME = 'prepacion',
DOMAIN = `https://${NAME}.com`,
SITE = `${DOMAIN}/wp-json`,
API_WP = `${SITE}/wp/v2`,
POSTS = `${API_WP}/posts?_embed`,
POST = `${API_WP}/posts`

export default{
    NAME,
    DOMAIN,
    SITE,
    API_WP,
    POSTS,
    POST
}