export const MainMenuContact = () => {
  return (
    <div className="flex w-full items-center justify-center hidden md:flex">
      <a href="/cloud" className="p-4 text-white text-md font-bold">Cloud</a>
      <a href="/apps" className="p-4 text-white text-md font-bold">Apps</a>
      <a href="/#" className="p-4 text-white text-3xl font-bold">Superdata</a>
      <a href="/dev" className="p-4 text-white text-md font-bold">Dev</a>
      <a href="/cont" className="p-4 text-white text-md font-bold underline">Contact</a>
    </div>
  );
};
