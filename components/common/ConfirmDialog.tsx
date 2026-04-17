import React from 'react';
import { Dialog, DialogHeader, DialogBody, DialogFooter, Button } from '@material-tailwind/react';

interface ConfirmDialogProps {
  open: boolean;
  title?: string;
  message: string;
  onAccept: () => void;
  onCancel: () => void;
}

export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  open,
  title = 'Confirmar acción',
  message,
  onAccept,
  onCancel,
}) => {
  return (
    // @ts-expect-error Material Tailwind Dialog type is too strict
    <Dialog open={open} handler={onCancel} size="xs">
      <DialogHeader title={title}>{title}</DialogHeader>
      <DialogBody>{message}</DialogBody>
      <DialogFooter>
        <Button
          color="gray"
          variant="text"
          onClick={onCancel}
          className="mr-2 border border-black text-black"
          type="button"
          placeholder=""
        >
          Cancelar
        </Button>
        <Button color="black" onClick={onAccept} type="button" placeholder="">
          Aceptar
        </Button>
      </DialogFooter>
    </Dialog>
  );
};
