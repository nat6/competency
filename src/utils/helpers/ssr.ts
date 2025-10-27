const isServer = () => typeof window === "undefined";

export const ssrHelpers = {
  isServer,
};
