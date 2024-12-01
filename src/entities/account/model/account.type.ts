export type TAccountImage = {
  url: string;
  name: string;
  _id: string;
};

export type TAccount = {
  _id: string;
  name: string;
  slug: string;
  images: TAccountImage[];
  tags: string[];
  price: number;
  parameters: {
    outfits: number;
    level: number;
    emotes: number;
    gliders: number;
    vbucks: number;
    pickaxes: number;
    backbling: number;
    loadings: number;
    _id: string;
  };
};
