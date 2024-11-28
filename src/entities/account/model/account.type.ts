type TDetails = {
  Skins: number;
  Vbucks: number;
  Emotes: number;
  AccountLevel: number;
  Backblings: number;
  Pickaxes: number;
  Gliders: number;
  Loadings: number;
};

type TAccount = {
  id: string;
  title: string;
  images: string[];
  tags: string[];
  details: TDetails;
  price: number;
};
