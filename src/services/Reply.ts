import { api, getEndpoint } from "@/api";

class Reply {
  public static Create(
    recipe_id: string | number,
    rating_id: string | number,
    data: object = {}
  ) {
    return api.post(
      getEndpoint("replyComment", {
        recipe_id,
        rating: rating_id,
      }),
      data
    );
  }
}
export default Reply;
