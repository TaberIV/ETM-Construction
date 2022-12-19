export interface IImageInfo {
  src: string;
  heading?: string;
  headingBg?: boolean;
  pos?: [number, number];
}

export default interface IPageInfo {
  component: React.ReactElement;
  name: string;
  path: string;
  mainImg?: IImageInfo;
}
