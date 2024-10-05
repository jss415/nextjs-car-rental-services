import Logo from "./Logo";
import DropdownLinks from "./DropdownLinks";
import CompanyTitle from "./CompanyTitle";
import DarkMode from "./DarkMode";

export default function NavigationBar() {
  return (
    <nav className="border-b">
      <div className="mx-auto max-w-6xl xl:max-w-7xl px-2 flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4 z-10">
        <CompanyTitle />
        <div className="flex gap-4 items-center ">
          <DarkMode />
          <DropdownLinks />
        </div>
      </div>
    </nav>
  );
}
