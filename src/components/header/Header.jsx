import HeaderButton from "./HeaderButton";

export default function Header() {
  return (
    <header>
      <div className="flex flex-row lg:justify-between md:justify-between items-center">
        <>
          <HeaderButton to="/" text="Doggo" activeText />
        </>
        <div className="flex lg:gap-7 sm:gap-1">
          <HeaderButton to="/list" text="List" />
          <HeaderButton to="/location" text="Track" />
        </div>
      </div>
    </header>
  );
}
