import {useSeoMeta} from '#imports';

export const useMeta = async (name: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  useSeoMeta(() => ({
    title: `${name} layout title`,
    description: `${name} layout description`,
  }));
};
