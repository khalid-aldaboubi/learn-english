import { Context } from "koa";
import jwt from "jsonwebtoken";

const METABASE_SITE_URL = "http://213.199.37.28";
const METABASE_SECRET_KEY = "0098a3057c39cc154b3fad7c381003112ecdf0b610fc126e9a13567d0b22e62c";

export default {
  async generateIframeUrl(ctx: Context) {
    try {
      const payload = {
        resource: { dashboard: 2 }, // Replace '2' with your Metabase dashboard ID
        params: {},
        exp: Math.round(Date.now() / 1000) + 10 * 60, // 10-minute expiration
      };

      const token = jwt.sign(payload, METABASE_SECRET_KEY);
      const iframeUrl = `${METABASE_SITE_URL}/embed/dashboard/${token}#bordered=true&titled=true`;

      ctx.body = { iframeUrl };
    } catch (error) {
      ctx.status = 400;
      ctx.body = { error: "Failed to generate iframe URL" };
    }
  },
};
