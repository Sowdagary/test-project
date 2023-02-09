//define all routes here
export const routes = {
  home: "/",
  profile: {
    index: "/profile",
    "my-recipes": {
      index: "/profile/my-recipes",
      show: "/profile/my-recipes/[slug]",
    },
    analytics: {
      index: "/profile/analytics",
      show: "/profile/analytics/[slug]",
    },
    reviews: "/profile/reviews",
    purchases: "/profile/purchases",
    bookmarks: "/profile/bookmarks",
    "watch-later": "/profile/watch-later",
    "add-recipe": "/profile/add-recipe",
  },
  "charge-wallet": {
    index: "charge-wallet",
  },
  sign_up: {
    index: "/sign-up",
  },
  login: {
    index: "/login",
  },
  forget_password: {
    index: "/forget-password",
  },
  recipes: {
    index: "/recipes",
  },
};
