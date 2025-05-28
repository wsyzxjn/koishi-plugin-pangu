import { Context, Schema } from "koishi";
import pangu from "pangu";

export const name = "pangu";

export const Config = Schema.object({});

export function apply(ctx: Context) {
  ctx.before("send", (session) => {
    session.content = pangu.spacing(session.content);
  });
}
