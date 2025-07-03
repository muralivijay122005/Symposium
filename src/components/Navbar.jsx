import {
  VscHome,
  VscTools,
  VscDebugAlt,
  VscSymbolClass,
  VscMail
} from "react-icons/vsc"; // VscMail for Contact Us
import Dock from './Dock.jsx';

const Navbar = ({ scrollToAbout, scrollToTech, scrollToNtech, scrollToWorkshop, scrollToContact }) => {
  const items = [
    {
      icon: <VscHome size={18} />,
      label: 'About',
      onClick: scrollToAbout
    },
    {
      icon: <VscDebugAlt size={18} />,
      label: 'Tech',
      onClick: scrollToTech
    },
    {
      icon: <VscSymbolClass size={18} />,
      label: 'Non-Tech',
      onClick: scrollToNtech
    },
    {
      icon: <VscTools size={18} />,
      label: 'Workshop',
      onClick: scrollToWorkshop
    },
    {
      icon: <VscMail size={18} />,
      label: 'Contact',
      onClick: scrollToContact
    }
  ];

  return (
    <Dock
      items={items}
      panelHeight={68}
      baseItemSize={50}
      magnification={70}
    />
  );
};

export default Navbar;
