import { FC, useContext } from "react";
import { UserContext } from "../../context/user";
import { UiContext } from "../../context/ui";
import { CheckIcon, GameIcon, MistakeIcon } from "../../assets/icons";

export const SuccessModal: FC = () => {
  const { name, logOut, resetCurrentScore, globalScore, numberOfGames } =
    useContext(UserContext);
  const { clearCardsSelected, showModal, toggleModal, getAnimalsImages } =
    useContext(UiContext);

  const finishGame = () => {
    logOut();
    resetCurrentScore();
    clearCardsSelected();
    getAnimalsImages({ images: [] });
    toggleModal();
  };

  const nextGame = () => {
    toggleModal();
  };

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-yellow-500 outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-2xl font-semibold text-center">
                    Good work {"<<"}
                    <span className="text-red-500">{name}</span>
                    {">>"} you are the best one!!
                  </h3>
                </div>
                <div className="relative p-6 flex-auto">
                  <div className="flex-col">
                    <h1 className="text-center text-2xl font-extrabold">
                      Global Score:{" "}
                    </h1>
                    <div className="flex justify-around">
                      <div className="flex flex-col items-center">
                        <MistakeIcon />
                        <h1 className=" text-red-700 text-3xl">{globalScore.errors}</h1>
                      </div>
                      <div className="flex flex-col items-center">
                        <CheckIcon />
                        <h1 className=" text-red-700 text-3xl">{globalScore.pairs}</h1>
                      </div>
                      <div className="flex flex-col items-center">
                        <GameIcon />
                        <h1 className=" text-red-700 text-3xl">{numberOfGames}</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={finishGame}
                  >
                    Log Out
                  </button>
                  <button
                    className="bg-black text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={nextGame}
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-100 fixed inset-0 z-40 bg-cyan-500"></div>
        </>
      ) : null}
    </>
  );
};
