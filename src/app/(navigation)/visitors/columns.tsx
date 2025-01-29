"use client";

import React, { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { useVisitorStore } from "@/store/visitor";
import { useTokenStore } from "@/store/token";

import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { useDialogToggle } from "@/store/dialogToggle";
import { formatDate } from "@/lib/formatDate";

const useColumns = (): ColumnDef<VisitorProps>[] => {
  const { updatevisitor } = useVisitorStore();
  const [selectedVisitor, setSelectedVisitor] = useState<VisitorProps | null>(
    null
  );

  const { toggleDialog } = useDialogToggle();
  const [isOpenDeleteAlert, setisOpenDeleteAlert] = useState(false);
  const { token } = useTokenStore();
  const { toast } = useToast();

  const router = useRouter();

  const handleDeleteClick = (visitor: VisitorProps) => {
    setSelectedVisitor(visitor);
    setisOpenDeleteAlert(true);
  };

  return [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
          className="text-white"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
          className="text-white"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "email",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className=""
          >
            <h1 className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              EMAIL
            </h1>
            <ArrowUpDown className="ml-2 h-4 w-4 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" />
          </Button>
        );
      },
    },
    {
      accessorKey: "phone",
      header: "Phone",
    },
    {
      accessorKey: "residence",
      header: "Residence",
    },
    {
      accessorKey: "sex",
      header: "Sex",
    },
    {
      accessorKey: "wouldYouBeMember",
      header: "Want to Join us",
    },
    // {
    //   accessorKey: "givenLifeToChrist",
    //   header: "Are you save",
    //   cell: ({ row }) => {
    //     const givenLifeToChrist = row.getValue("givenLifeToChrist") as {
    //       status: string;
    //     };
    //     return <div className="capitalize">{givenLifeToChrist.status}</div>;
    //   },
    // },
    {
      accessorKey: "recordOfficer",
      header: "Record Officer",
    },
    {
      accessorKey: "inviter",
      header: "Inviter",
    },
    // {
    //   accessorKey: "inviterPhone",
    //   header: "Inviter Phone",
    // },
    {
      accessorKey: "firstTimer",
      header: "First Timer",
    },
    {
      accessorKey: "maritalStatus",
      header: "Marital Status",
    },
    // {
    //   accessorKey: "WantUsToVisit",
    //   header: "Would like Us To Visit",
    //   cell: ({ row }) => {
    //     const WantUsToVisit = row.getValue("WantUsToVisit") as {
    //       status: string;
    //     };
    //     return <div className="capitalize">{WantUsToVisit.status}</div>;
    //   },
    // },
    {
      accessorKey: "createdAt",
      header: "Created At",
      cell: ({ row }) => {
        const createdAt = row.getValue("createdAt") as string;
        return <div className="capitalize">{formatDate(createdAt)}</div>;
      },
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const visitor = row.original;
        const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

        const handleDelete = async (visitorId: string, visitorName: string) => {
          try {
            const response = await fetch(
              `${BASE_URL}/api/v1/visitors/${visitorId}`,
              {
                method: "DELETE",
                cache: "no-store",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
                },
              }
            );

            if (!response.ok) {
              throw new Error("Error occurred while trying to delete visitor");
            }

            toast({
              title: "Success",
              description: `Visitor: ${visitorName} deleted successfully`,
            });
            router.refresh();
          } catch (error) {
            toast({
              title: "Uh oh! Something went wrong.",
              description: `${error}`,
              variant: "destructive",
            });
          }
        };

        return (
          <>
            <AlertDialog open={isOpenDeleteAlert}>
              <AlertDialogContent className="bg-white">
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    {` This action cannot be undone. This will permanently delete
                    ${selectedVisitor?.name}'s details and remove ${
                      selectedVisitor?.sex === "male" ? "his" : "her"
                    } data from our servers.`}
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel
                    onClick={() => setisOpenDeleteAlert(false)}
                  >
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction
                    className="text-white"
                    // onClick={() => {
                    //   handleDelete(visitor._id ?? "", visitor.name);
                    //   setisOpenDeleteAlert(false);
                    // }}
                    onClick={() => {
                      if (selectedVisitor) {
                        handleDelete(
                          selectedVisitor._id ?? "",
                          selectedVisitor.name
                        );
                        setisOpenDeleteAlert(false);
                      }
                    }}
                  >
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white text-black" align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem
                  className="hover:bg-slate-300 cursor-pointer"
                  onClick={() => {
                    updatevisitor(visitor);
                    toggleDialog.setIsOpenEditVisitor(true);
                  }}
                >
                  Edit Visitor
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem
                  className="hover:bg-slate-300 cursor-pointer"
                  onClick={() => handleDeleteClick(visitor)}
                >
                  Delete Vistor
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem className="hover:bg-slate-300 cursor-pointer">
                  View Vistor Info
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        );
      },
    },
  ];
};

export default useColumns;
