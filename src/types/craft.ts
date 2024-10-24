import { IPost, PostType } from "./post";
import { ISection } from "./section";

export interface ICraft {
  image: string;
  title: string;
  href: string;
  type: PostType
}

export interface ICraftPage {
  sections: ISection[];
  craft: ISection;
  posts: IPost[];
  postsAmount: number;
}