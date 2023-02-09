import { api, getEndpoint } from "@/api";

class Comment {
  public static Create(recipe_id: string | number, data: object = {}) {
    return api.post(
      getEndpoint("recipesPartial", {
        id: recipe_id,
        partial: "ratings",
      }),
      data
    );
  }

  public static Delete(recipe_id: string | number, rating_id: string | number) {
    return api.delete(
      getEndpoint("singleRating", {
        recipe_id,
        rating_id,
      })
    );
  }

  public static Update(
    recipe_id: string | number,
    rating_id: string | number,
    data: object = {}
  ) {
    return api.put(
      getEndpoint("singleRating", {
        recipe_id,
        rating_id,
      }),
      data
    );
  }
}
export default Comment;
