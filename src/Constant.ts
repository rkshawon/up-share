import { Files, ShieldPlus, FolderUp, BookOpenText } from "lucide-react";

export const description = {
  desc: "Transform your file management experience with our intuitive and secure file upload platform.",
};

export const sidebarItem = [
  {
    id: 1,
    name: "Upload",
    icon: FolderUp,
    path: "/upload",
  },
  {
    id: 2,
    name: "Files",
    icon: Files,
    path: "/file",
  },
  // {
  //   id: 3,
  //   name: "Upgrade",
  //   icon: ShieldPlus,
  //   path: "/upgrade",
  // },
  {
    id: 4,
    name: "About",
    icon: BookOpenText,
    path: "/about",
  },
];

export const tableHeader = [
  {
    id: 1,
    name: "File Name",
  },
  {
    id: 2,
    name: "File Type",
  },
  {
    id: 3,
    name: "File Size",
  },
];
