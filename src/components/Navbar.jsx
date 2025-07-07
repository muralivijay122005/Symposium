import { VscHome, VscTools, VscSymbolClass, VscMail } from "react-icons/vsc";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { LuBug } from "react-icons/lu";
import Dock from "./Dock.jsx";

const Navbar = ({
  scrollToAbout,
  scrollToTech,
  scrollToNtech,
  scrollToWorkshop,
  scrollToContact,
}) => {
  const items = [
    {
      icon: <VscHome className="text-xl sm:text-2xl" />,
      label: "About",
      onClick: scrollToAbout,
    },
    {
      icon: <LuBug className="text-xl sm:text-2xl stroke-[1.5]" />,
      label: "Tech",
      onClick: scrollToTech,
    },
    {
      icon: (
        <IoExtensionPuzzleOutline className="text-xl sm:text-2xl stroke-[1.5]" />
      ),
      label: "Non-Tech",
      onClick: scrollToNtech,
    },
    {
      icon: <VscTools className="text-xl sm:text-2xl" />,
      label: "Workshop",
      onClick: scrollToWorkshop,
    },
    {
      icon: <VscMail className="text-xl sm:text-2xl" />,
      label: "Contact",
      onClick: scrollToContact,
    },
  ];

  return (
    <Dock items={items} panelHeight={68} baseItemSize={50} magnification={70} />
  );
};

export default Navbar;
