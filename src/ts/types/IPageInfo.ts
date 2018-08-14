export default interface IPageInfo {
  component: React.StatelessComponent;
  name: string;
  path: string;
  mainImg?: {
    src: string;
    heading?: string;
    pos?: [number, number];
  };
}
