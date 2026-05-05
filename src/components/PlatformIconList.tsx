import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";

import { BsNintendoSwitch } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";
import type { IconType } from "react-icons";
import { type Platform } from "../hooks/useGames";

const platformIconMap: Record<string, IconType> = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  nintendo: BsNintendoSwitch,
  mac: FaApple,
  linux: FaLinux,
  android: FaAndroid,
  web: BsGlobe,
};

interface Props {
    platform: Platform;
}
const PlatformIconList = ({ platform }: Props) => {
  const Icon = platformIconMap[platform.slug];
  return Icon ? <Icon /> : null;
};

export default PlatformIconList
