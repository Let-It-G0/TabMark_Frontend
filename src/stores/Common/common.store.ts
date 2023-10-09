import { atom } from "recoil";

export const HideNavHeader = atom<boolean>({
  key: "HideNavHeader",
  default: false,
});
