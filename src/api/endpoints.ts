/**
 * Place all endpoints here
 */

type ParamsType = string | number | boolean;
type NoParamKeys =
  | "profile"
  | "recipes"
  | "countries"
  | "categories"
  | "register"
  | "login"
  | "payments"
  | "reset-password"
  | "reset-password-verify"
  | "myRecipes"
  | "myBookmarkRecipes"
  | "myWatchlaterRecipes"
  | "worldRecipes"
  | "myRecipesRatings"
  | "myUnreadRecipesRatings"
  | "myPurchases"
  | "reports"
  | "contacts"
  | "freeCountDown";

type ParamKeys =
  | "user"
  | "singleCountry"
  | "countryStates"
  | "recipesPartial"
  | "singleRecipe"
  | "actionRecipe"
  | "replyComment"
  | "recipeReports"
  | "recipeComments"
  | "ratingLikes"
  | "paymentsCheckout"
  | "singleRating"
  | "singleChef";

type EndpointsType = {
  [k in NoParamKeys]: {
    endpoint: string;
  };
} & {
  [k in ParamKeys]: {
    endpoint: string;
    params: string[];
  };
};

type ParamsGenerator<T extends ParamKeys> = {
  [k in typeof endpoints[T]["params"][number]]: ParamsType;
};

type FunctionOverload = {
  <T extends NoParamKeys>(key: T): string;
  <T extends ParamKeys>(key: T, params: ParamsGenerator<T>): string;
};

/**
 * endpoints must have the following naming
 * @example ```js
 * const endpoints = {
 *    "endpoint-key": {
 *      endpoint: "path/to/my/endpoint/" or "path/to/:my/endpoint/:params",
 *      params: false or ["my", "params"]
 *    }
 * }
 * This way typescript will suggest you with required params
 * ```
 */
export const endpoints = {
  profile: {
    endpoint: "/profile",
  },
  payments: {
    endpoint: "/payments",
  },
  paymentsCheckout: {
    endpoint: "/payments/checkout/:id",
    params: ["id"],
  },
  myRecipes: {
    endpoint: "/my-recipes",
  },
  singleRecipe: {
    endpoint: "/recipes/:recipe_id",
    params: ["recipe_id"],
  },
  actionRecipe: {
    endpoint: "/recipes/:recipe_id/:partial",
    params: ["recipe_id", "partial"],
  },
  replyComment: {
    endpoint: "/recipes/:recipe_id/ratings/:rating/reply",
    params: ["recipe_id", "rating"],
  },
  singleRating: {
    endpoint: "/recipes/:recipe_id/ratings/:rating_id",
    params: ["recipe_id", "rating_id"],
  },
  recipesPartial: {
    endpoint: "/recipes/:id/:partial",
    params: ["id", "partial"],
  },
  recipeComments: {
    endpoint: "/recipes/:id/ratings",
    params: ["id"],
  },

  myBookmarkRecipes: {
    endpoint: "/my-bookmark-recipes",
  },
  myWatchlaterRecipes: {
    endpoint: "/my-watchlater-recipes",
  },
  categories: {
    endpoint: "/categories",
  },
  register: {
    endpoint: "/auth/register",
  },
  ratingLikes: {
    endpoint: "/ratings/:id/likes",
    params: ["id"],
  },
  login: {
    endpoint: "/auth",
  },
  countries: {
    endpoint: "/countries",
  },
  "reset-password": {
    endpoint: "/auth/reset-password",
  },
  "reset-password-verify": {
    endpoint: "/auth/reset-password/verify",
  },
  singleCountry: {
    endpoint: "/countries/:country_id",
    params: ["country_id"],
  },
  countryStates: {
    endpoint: "/countries/:country_id/states",
    params: ["country_id"],
  },
  recipes: {
    endpoint: "/recipes",
  },
  worldRecipes: {
    endpoint: "recipes/world",
  },
  user: {
    endpoint: "/users/:user_id",
    params: ["user_id"],
  },
  myRecipesRatings: {
    endpoint: "/my-recipes-ratings",
  },
  myUnreadRecipesRatings: {
    endpoint: "/my-unread-recipes-ratings",
  },
  recipeReports: {
    endpoint: "/recipes/:recipe_id/report/:partial",
    params: ["recipe_id", "partial"],
  },
  myPurchases: {
    endpoint: "/my-purchases",
  },
  reports: {
    endpoint: "/reports",
  },
  contacts: {
    endpoint: "/contacts",
  },
  singleChef: {
    endpoint: "/chefs/:chef_id",
    params: ["chef_id"],
  },
  freeCountDown: {
    endpoint: "foodiecoins/free-countdown",
  },
} as const;

/**
 * this function returns an endpoint based on panel, key, and params
 * @param key endpoint key inside that panel
 * @param params if the selected endpoint had any params(for example /details/:id), the keys in this argument must match the params of that endpoint({ id: 2 } in this example)
 * @returns the endpoint of the API
 */
const getEndpoint: FunctionOverload = (...args: any[]) => {
  const key = args[0] as keyof typeof endpoints;
  const params: any = args?.[1];
  let selectedEndpoint: string = endpoints[key].endpoint;
  if (params) {
    for (let key in params) {
      let regex = new RegExp(`\/:${key}`);
      selectedEndpoint = selectedEndpoint.replace(regex, "/" + params[key]);
    }
  }
  return selectedEndpoint;
};

export default getEndpoint;
