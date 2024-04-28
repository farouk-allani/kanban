import { useAppDispatch } from "... @/components/redux/hooks";
import {
  openAddAndEditBoardModal,
  openDeleteBoardAndTaskModal,
} from "... @/components/redux/features/appSlice";

interface IDropdown {
  show: boolean;
}

export default function Dropdown({ show }: IDropdown) {
  const dispatch = useAppDispatch();

  return (
    <div
      className={`${show ? "block" : "hidden"} w-48 absolute top-full bg-white
         border shadow-lg right-0 py-2 rounded-2xl`}
    >
      <div className="hover:bg-gray-300">
        <button
          className="text-sm px-4 py-2"
          onClick={() => dispatch(openAddAndEditBoardModal("Edit Board"))}
        >
          Edit Board
        </button>
      </div>
      <div className="hover:bg-gray-300">
        <button
          className="text-sm px-4 py-2"
          onClick={() =>
            dispatch(
              openDeleteBoardAndTaskModal({ variant: "Delete this board?" })
            )
          }
        >
          Delete Board
        </button>
      </div>
    </div>
  );
}
