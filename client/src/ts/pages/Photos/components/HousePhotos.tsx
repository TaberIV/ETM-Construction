import React from "react";
import { IImageInfo } from "../../../types/IPageInfo";
import PhotoGallery from "./PhotoGallery";

export default () => {
  const photos = [
    { src: "timmy/ETM2.jpg", heading: "ETM2" },
    { src: "timmy/ETM3.jpg", heading: "ETM3" },
    { src: "timmy/ETM4.jpg", heading: "ETM4" },
    { src: "timmy/ETM19.jpg", heading: "ETM19" },
    { src: "meridian/Meridian.jpg", heading: "Meridian", pos: [50, 70] },
    { src: "meridian/Meridian3.jpg", heading: "Meridian3", pos: [50, 70] },
    { src: "meridian/Meridian4.jpg", heading: "Meridian4" },
    { src: "sanders/Sanders_Baudouin 01s.jpg", heading: "Sanders01" },
    { src: "sanders/Sanders_Baudouin 02s.jpg", heading: "Sanders02" },
    { src: "sanders/Sanders_Baudouin 04s.jpg", heading: "Sanders03" },
    { src: "sanders/Sanders_Baudouin 05s.jpg", heading: "Sanders05" },
    { src: "sanders/Sanders_Baudouin 09s.jpg", heading: "Sanders09" },
    { src: "sanders/Sanders_Baudouin ext 07s 2.jpg", heading: "SandersExt07" },
    { src: "kelly/006-Foyer-5688621-large.jpg", heading: "KellyFoyer" },
    {
      src: "kelly/009-Great_Room-5688625-large.jpg",
      heading: "KellyGreatRoom"
    },
    { src: "kelly/018-Kitchen-5688632-large.jpg", heading: "KellyKitchen" },
    {
      src: "kelly/027-Master_Bedroom-5688641-large.jpg",
      heading: "KellyBedroom"
    },
    {
      src: "kelly/029-Master_Bathroom-5688649-large.jpg",
      heading: "KellyMasterBathroom"
    },
    {
      src: "kelly/032-Walk_In_Closet-5688647-large.jpg",
      heading: "KellyCloset"
    },
    {
      src: "kelly/042-Media_Room-5688654-large.jpg",
      heading: "KellyMediaRoom"
    },
    { src: "kelly/045-Veranda-5688599-large.jpg", heading: "KellyVeranda" },
    { src: "kelly/047-Veranda-5688594-large.jpg", heading: "KellyVerandaLong" },
    {
      src: "kelly/068-Twilight_Rear_View-5688685-large.jpg",
      heading: "KellyPoolTwilight"
    }
  ] as IImageInfo[];

  return <PhotoGallery photos={photos} />;
};
