import { Modal, ModalBody } from "./Modal";
import { useAppSelector, useAppDispatch } from "... @/components/redux/hooks";
//import needed functions from the appSlice
import {
getAddAndEditBoardModalValue,
getAddAndEditBoardModalVariantValue,
closeAddAndEditBoardModal,
} from "... @/components/redux/features/appSlice";

export default function AddAndEditBoardModal() {
// get the variant of the modal
const modalVariant = useAppSelector(getAddAndEditBoardModalVariantValue);
const dispatch = useAppDispatch();
// opens that modal is isOpen evaluates to true
const isOpen = useAppSelector(getAddAndEditBoardModalValue);
// close the modal
const closeModal = () => dispatch(closeAddAndEditBoardModal());

return (
 <Modal isOpen={isOpen} onRequestClose={closeModal}>
   <ModalBody>
     {/* display the variant(title) of the modal */}
     <p>{modalVariant}</p>
   </ModalBody>
 </Modal>
);
}