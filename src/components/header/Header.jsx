import AppLogo from './AppLogo';
import UnitsMenu from './UnitsMenu';

function Header() {
  return (
    <header className="flex justify-between items-center self-stretch">
      <AppLogo />
      <UnitsMenu />
    </header>
  );
}

export default Header;
