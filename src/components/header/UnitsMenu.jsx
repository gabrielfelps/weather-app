import cog from '../../assets/images/icon-units.svg';
import icon_dropdown from '../../assets/images/icon-dropdown.svg';

function UnitsMenu() {
  return (
    <button className="bg-neutral-800 flex justify-center items-center gap-1.5 px-2.5 py-2 rounded-md">
      <img src={cog} alt="" />
      Units
      <img src={icon_dropdown} alt="" />
    </button>
  );
}

export default UnitsMenu;
