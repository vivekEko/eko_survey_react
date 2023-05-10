import { atom } from "recoil";

export const activeTabAtom = atom({
  key: "activeTabAtom", // unique ID (with respect to other atoms/selectors)
  default: "Create", // default value (aka initial value)
});
