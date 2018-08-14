export interface IImageInfo {
  src: string;
  heading?: string;
  headingBg?: boolean;
  pos?: [number, number];
}

export default interface IPageInfo {
  component: React.StatelessComponent;
  name: string;
  path: string;
  mainImg?: IImageInfo;
}
