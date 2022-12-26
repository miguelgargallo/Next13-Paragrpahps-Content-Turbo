export const MainMenu = () => {
  return (
    <div className="flex w-full items-center justify-center hidden md:flex">
      <a href="/cloud" className="p-4 text-white text-md font-bold">Cloud</a>
      <a href="/#" className="p-4 text-white text-md font-bold">Apps</a>
      <a href="/#" className="p-4 text-white text-3xl font-bold">Superdata</a>
      <a href="/#" className="p-4 text-white text-md font-bold">Dev</a>
      <a href="/#" className="p-4 text-white text-md font-bold">Contact</a>
    </div>
  );
};
