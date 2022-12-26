export const MainMenuMobileApps = () => {
  return (
    <div className="flex w-full items-center justify-center grid-cols-4 gap-12 place-content-end">
      <a href="/cloud" className="text-blue-500 text-white font-bold">Cloud</a>
      <a href="/apps" className="text-white font-bold">Apps</a>
      <a href="/dev" className="text-yellow-500 font-bold">Dev</a>
      <a href="/contact" className="text-green-500 font-bold">Contact</a>
    </div>
  );
};
