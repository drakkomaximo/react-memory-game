import { useContext } from "react";
import { UserContext } from "../../context/user";
import { UiContext } from "../../context/ui";

export const FloatButton = () => {
  const { logOut } = useContext(UserContext);
  const { clearCardsSelected, getAnimalsImages } = useContext(UiContext);
  const resetValue = () => {
    getAnimalsImages({ images: [] });
    clearCardsSelected();
    logOut();
  };

  return (
    <button
      type="button"
      className="absolute z-10 right-6 bottom-6 mt-1 ml- text-lg font-semibold px-4 py-4
            bg-yellow-500 w-20 text-black rounded-lg block shadow-xl hover:text-white hover:bg-red-500"
      onClick={resetValue}
    >
      Salir
    </button>
  );
};
