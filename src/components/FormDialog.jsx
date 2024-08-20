import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export default function FormDialog({ form, data, onSubmitForm }) {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [label, setLabel] = useState("");


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="contained" size="small" onClick={handleClickOpen}>
        Editar
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData();
            formData.append(form.name.toLowerCase(), name);
            formData.append(form.label.toLowerCase(), label);
            const formJson = Object.fromEntries(formData.entries());
            onSubmitForm(formJson)
            handleClose();
          },
        }}
      >
        <DialogTitle>Edit</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id={form[0].name}
            name={form[0].name}
            label={form[0].label}
            value={data[form[0].name]}
            onChange={(e) => setName(e.target.value)}
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id={form[1].name}
            name={form[1].name}
            label={form[1].label}
            value={data[form[1].name]}
            onChange={(e) => setLabel(e.target.value)}
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Save</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
