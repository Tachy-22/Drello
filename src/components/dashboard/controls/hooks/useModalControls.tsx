import React from "react";

export const members = "members";
export const boards = "boards";

const useModalControls = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [modalChild, setModalChild] = React.useState<string | null>(null);

  const openModal = React.useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = React.useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleModalChild = React.useCallback(
    (child: string) => {
      if (child === members) {
        setModalChild(members);
        openModal();
      } else if (child === boards) {
        setModalChild(boards);
        openModal();
      }
    },
    [openModal]
  );

  return { isOpen,modalChild, handleModalChild, closeModal };
};

export default useModalControls;
