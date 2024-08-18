export const PostTypes = {
  graphicDesign: 'graphic-design',
  painting: "painting",
  drawing: "drawing",
  photography: "photography",
};

export const PostStates = {
  available: "available",
  soldOut: "sold_out",
  none: null,
};

export type PostType = "drawing" | "painting" | "photography" | "graphic-design";
export type PostState = "available" | "sold_out" | null;
export interface IPost {
  description?: string;
  price?: string;
  image: string;
  _id?: string;
  state?: PostState;
  type: PostType;
}

export interface IPostListFilters {
  type: IPost['type']
}
export interface IPostCard extends IPost {
  onClick: (id: IPost['_id']) => void;
}
