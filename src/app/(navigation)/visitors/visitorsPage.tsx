"use client";

import React, { useEffect } from "react";
import { DataTable } from "@/components/data-table";
import { DrawerDialog } from "@/components/drawable-dialog";
import useColumns from "./columns";

import { AddVisitorForm } from "./add-visitor-form";
import { useDialogToggle } from "@/store/dialogToggle";
import { EditVisitorForm } from "./edit-visitor-form";
import { useTokenStore } from "@/store/token";

// import { useTokenDataStore } from "@/store/tokenData";

interface VisitorsPageProps {
  visitors: VisitorProps[];
  token: string | undefined;
}

export default function VisitorsPage({ visitors, token }: VisitorsPageProps) {
  const columns = useColumns();

  const { toggleDialog } = useDialogToggle();

  const { updateToken } = useTokenStore();

  //   const { updateTokenData } = useTokenDataStore();

  useEffect(() => {
    updateToken(token);
  }, [token, updateToken]);

  return (
    <>
      <DataTable
        columns={columns}
        data={visitors}
        // isOpenAddVisitor={toggleDialog.isOpenAddVisitor}
        isOpenEditVisitor={toggleDialog.isOpenEditVisitor}
        drawalDialogComponent={
          <DrawerDialog
            title="Add Visitor"
            btnTitle="Add Visitor"
            description="This is an add visitor dialogue form"
            isOpen={toggleDialog.isOpenAddVisitor}
            setIsOpen={toggleDialog.setIsOpenAddVisitor}
          >
            <AddVisitorForm token={token} />
          </DrawerDialog>
        }
        drawalEditComponent={
          toggleDialog.isOpenEditVisitor && (
            <DrawerDialog
              title="Edit Visitor"
              btnTitle="Edit Visitor"
              description="This is an Edit Visitor dialogue form"
              isOpen={toggleDialog.isOpenEditVisitor}
              setIsOpen={toggleDialog.setIsOpenEditVisitor}
            >
              <EditVisitorForm token={token} />
            </DrawerDialog>
          )
        }
      />
    </>
  );
}
