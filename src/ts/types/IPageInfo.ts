export default interface IPageInfo {
  component: React.StatelessComponent;
  name: string;
  path: string;
  imgSrc: string;
  imgPos?: [number, number];
  heading?: string;
}
