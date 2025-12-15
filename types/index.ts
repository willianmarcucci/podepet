// types/index.ts

export type Place = {
  id: string;
  name: string;
  neighborhood: string;
  city: string;
  image_url: string;
  dist_meters: number;
};

export type Category = {
  name: string;
  iconUrl: string;
  slug: string;
};