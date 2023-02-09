import { GetServerSidePropsContext } from "next";
import getConfig from "next/config";
export const login = (url: string) => `/login?redirected=true&url=${url}`; // Define your login route address.

export const { publicRuntimeConfig } = getConfig();

export const privateRoute = (context: GetServerSidePropsContext) => {
  if (!context.req.session && !context.req.session) {
    context.res.writeHead(302, {
      Location: login(`${publicRuntimeConfig.siteBase}${context.req.url}`),
    });
    context.res?.end();
    
  }
};
