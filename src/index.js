export default {
  async fetch(request, env) {
    const row = await env.DB.prepare('SELECT note FROM hello LIMIT 1').first();
    return Response.json({
      hello: 'scorekeeper-deploy-test',
      database: row ? row.note : 'no row',
      installCodeSet: typeof env.INSTALL_CODE === 'string' && env.INSTALL_CODE.length >= 8,
    });
  },
};
