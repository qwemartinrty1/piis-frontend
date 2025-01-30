import { useState } from "react";

export const useModal = () => {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return { handleOpen, handleClose, isOpen };
};
