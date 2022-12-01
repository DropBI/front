import { useState } from "react";
import { ChevronLeftIcon, TwitterLogoIcon, BackpackIcon, ArchiveIcon } from '@radix-ui/react-icons'
import { useHistory } from "react-router-dom";

export function SideBar()  {
  const [open, setOpen] = useState(true);
  const history = useHistory();
  const Menus = [
    { title: "Lojas", src:  <BackpackIcon />, link: '/stores' },
    { title: "Produtos", src: <ArchiveIcon />,link: '/products' },
  ];


  return (
    <div
      className={` ${
        open ? "w-72" : "w-20 "
      } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
    >
      <ChevronLeftIcon
        className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
          border-2 rounded-full  ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
        alt="arrow-left"
      />
      <div className="flex gap-x-4 items-center">
        <TwitterLogoIcon
          className={`cursor-pointer duration-500 ${
            open && "rotate-[360deg]"
          }`}
        />
        <h1
          className={`text-white origin-left font-medium text-xl cursor-pointer duration-200 ${
            !open && "scale-0"
          }`}
          onClick={() => history.push('/dashboard')}
        >
          Drop Bi
        </h1>
      </div>
      <ul className="pt-6">
        {Menus.map((Menu, index) => (
          <li
            key={index}
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
            ${Menu.gap ? "mt-9" : "mt-2"} ${
              index === 0 && "bg-light-white"
            } `}
          >
            {Menu.src}
            <span className={`${!open && "hidden"} origin-left duration-200`}
              onClick={() => history.push(Menu.link)}
            >
              {Menu.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
 
  );
};
