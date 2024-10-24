import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";

import {
  ButtonWrapper,
  Description,
  DialogContent,
} from "./RemovePostCell.styled";
import { Button, Dialog } from "components";
import { axiosInstance } from "services/axiosClient";
import { ENDPOINTS } from "helpers/endpoints";
import { IPost } from "types";
import { IRemovePostCell } from "./RemovePostCell.model";

export const RemovePostCell = ({ refetchList, id }: IRemovePostCell) => {
  const [isOpen, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);

  const deletePost = async (id: IPost["_id"]) =>
    axiosInstance.delete(ENDPOINTS.POST.DELETE({ id }));

  const deleteMutation = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      refetchList();
    },
  });

  return (
    <>
      <Button size="small" onClick={toggle}>
        Remove
      </Button>
      <Dialog size="sm" title="Remove post" toggle={toggle} isOpen={isOpen}>
        <DialogContent>
          <Description>Are you sure to remove this post?</Description>
          <ButtonWrapper>
            <Button onClick={toggle}>Cancel</Button>
            <Button onClick={() => deleteMutation.mutate(id)}>
              Yes, remove
            </Button>
          </ButtonWrapper>
        </DialogContent>
      </Dialog>
    </>
  );
};
