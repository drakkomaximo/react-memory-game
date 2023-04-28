import { FC, useContext } from "react";
import { UserContext } from "../../context/user";

export const MainHeader: FC = () => {
  const { currentScore, name } = useContext(UserContext);

  return (
    <div className="flex px-10 py-2 justify-between bg-yellow-500">
      <div className="flex flex-wrap justify-center w-full sm:flex-col sm:justify-center md:flex-row md:justify-between">
        <div className="flex sm:justify-center md:justify-center">
          <h1 className="text-2xl text-black mr-4">Welcome </h1>
          <h1 className="uppercase text-2xl text-black font-extrabold">{name}</h1>
        </div>
        <div className="flex sm:justify-center md:justify-center">
          <div className="flex">
            <h1 className="text-2xl text-black">Mistakes {" "}</h1>
            <h1 className="text-2xl text-black font-extrabold ml-2">
              {currentScore && currentScore.errors}
            </h1>
            <h1 className=" mx-5 text-2xl text-black">/</h1>
            <h1 className="text-2xl text-black">Pairs </h1>
            <h1 className="text-2xl text-black font-extrabold ml-2">
              {currentScore && currentScore.pairs}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
