import { File, Shield, Upload } from "lucide-react";

export const description = {
  desc: "Transform your file management experience with our intuitive and secure file upload platform.",
};

export const sidebarItem = [
  {
    id: 1,
    name: "Upload",
    icon: Upload,
    path: "/upload",
  },
  {
    id: 2,
    name: "Files",
    icon: File,
    path: "/file",
  },
  {
    id: 3,
    name: "Upgrade",
    icon: Shield,
    path: "/upgrade",
  },
];
