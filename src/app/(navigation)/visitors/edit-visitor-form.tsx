"use client";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormEvent, useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useToast } from "@/hooks/use-toast";

import { useRouter } from "next/navigation";

import { useDialogToggle } from "@/store/dialogToggle";
import { useVisitorStore } from "@/store/visitor";
import Spinner from "@/components/Spinner";
import { DatePicker } from "@/components/datePickerCustom";

interface EditVisitorFormProps extends React.ComponentProps<"form"> {
  token: string | undefined;
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

interface BoolProps<T> {
  name: T;
  value: T;
}

enum YesNoProps {
  yes = "yes",
  no = "no",
}

enum Sex {
  male = "male",
  female = "female",
}

enum MaritalStatusEnum {
  single = "single",
  married = "married",
  divorce = "divorce",
}

enum serviceExperienceEnum {
  poor = "poor",
  good = "good",
  better = "better",
  best = "best",
}

export function EditVisitorForm({ className, token }: EditVisitorFormProps) {
  const { visitor } = useVisitorStore();

  const [sexOptions, setSexOptions] = useState<BoolProps<Sex>[]>([
    { name: Sex.male, value: Sex.male },
    { name: Sex.female, value: Sex.female },
  ]);
  const [selectedSexValue, setSelectedSexValue] = useState<Sex | string>(
    visitor?.sex as Sex
  );

  const [wouldYouBeMemberOptions, setWouldYouBeMemberOptions] = useState<
    BoolProps<YesNoProps>[]
  >([
    { name: YesNoProps.yes, value: YesNoProps.yes },
    { name: YesNoProps.no, value: YesNoProps.no },
  ]);
  const [selectedWouldYouBeMemberValue, setSelectedWouldYouBeMemberValue] =
    useState<YesNoProps | string>(visitor?.wouldYouBeMember as YesNoProps);

  const [givenLifeToChristOptions, setGivenLifeToChristOptions] = useState<
    BoolProps<YesNoProps>[]
  >([
    { name: YesNoProps.yes, value: YesNoProps.yes },
    { name: YesNoProps.no, value: YesNoProps.no },
  ]);
  const [selectedGivenLifeToChristValue, setSelectedGivenLifeToChristValue] =
    useState<YesNoProps | string>(
      visitor?.givenLifeToChrist?.status as YesNoProps
    );

  const [wantUsToVisitOptions, setWantUsToVisitOptions] = useState<
    BoolProps<YesNoProps>[]
  >([
    { name: YesNoProps.yes, value: YesNoProps.yes },
    { name: YesNoProps.no, value: YesNoProps.no },
  ]);
  const [selectedWantUsToVisitValue, setSelectedWantUsToVisitValue] = useState<
    YesNoProps | string
  >(visitor?.wantUsToVisit?.status as YesNoProps);

  const [firstTimerOptions, setFirstTimerOptions] = useState<
    BoolProps<YesNoProps>[]
  >([
    { name: YesNoProps.yes, value: YesNoProps.yes },
    { name: YesNoProps.no, value: YesNoProps.no },
  ]);
  const [selectedFirstTimerValue, setSelectedFirstTimerValue] = useState<
    YesNoProps | string
  >(visitor?.firstTimer as YesNoProps);

  const [maritalOptions, setMaritalOptions] = useState<
    BoolProps<MaritalStatusEnum>[]
  >([
    { name: MaritalStatusEnum.single, value: MaritalStatusEnum.single },
    { name: MaritalStatusEnum.married, value: MaritalStatusEnum.married },
    { name: MaritalStatusEnum.divorce, value: MaritalStatusEnum.divorce },
  ]);
  const [selectedMaritalValue, setSelectedMaritalValue] = useState<
    MaritalStatusEnum | string
  >(visitor?.maritalStatus as MaritalStatusEnum);

  const [serviceExperienceOptions, setServiceExperienceOptions] = useState<
    BoolProps<serviceExperienceEnum>[]
  >([
    { name: serviceExperienceEnum.poor, value: serviceExperienceEnum.poor },
    { name: serviceExperienceEnum.good, value: serviceExperienceEnum.good },
    { name: serviceExperienceEnum.better, value: serviceExperienceEnum.better },
    { name: serviceExperienceEnum.best, value: serviceExperienceEnum.best },
  ]);
  const [selectedServiceExperienceValue, setSelectedServiceExperienceValue] =
    useState<serviceExperienceEnum | string>(
      visitor?.serviceExperience as serviceExperienceEnum
    );

  const [selectedDateOfConvention, setSelectedDateOfConvention] = useState<
    Date | undefined
  >(undefined);

  const [selectedDateOfVisitation, setSelectedDateOfVisitation] = useState<
    Date | undefined
  >(undefined);

  const [loading, setLoading] = useState(false);

  const { toast } = useToast();
  const { toggleDialog } = useDialogToggle();

  const router = useRouter();

  //   useEffect(() => {
  //     const fetchDepartmentOptions = async () => {
  //       try {
  //         const data = await fetchDepartments<DepartmentsDataProps>(
  //           `${BASE_URL}/department`,
  //           tokenData?.token
  //         );

  //         setDepartmentOptions(data.departments);
  //       } catch (error) {
  //         console.error("Error fetching options:", error);
  //       }
  //     };

  //     fetchDepartmentOptions();
  //   }, [tokenData?.token]);

  //   useEffect(() => {
  //     const fetchRoleOptions = async () => {
  //       try {
  //         const data = await fetchRoles<RoleDataProps>(
  //           `${BASE_URL}/role`,
  //           tokenData?.token
  //         );

  //         setRoleOptions(data.data);
  //       } catch (error) {
  //         console.error("Error fetching options:", error);
  //       }
  //     };

  //     fetchRoleOptions();
  //   }, [tokenData?.token]);

  //   async function handleSubmit(event: FormEvent<HTMLFormElement>) {
  //     event.preventDefault();
  //     setLoading(true);
  //     try {
  //       const formData = new FormData(event.currentTarget);

  //       const userData: CreateUserDataProps = {
  //         name: formData.get("name") as string,
  //         email: formData.get("email") as string,
  //         departmentId: formData.get("departmentId") as string,
  //         roleIds: selectedRoleValue,
  //       };

  //       const response = await fetch(`${BASE_URL}/user`, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${tokenData?.token}`,
  //         },
  //         body: JSON.stringify(userData),
  //       });

  //       if (!response.ok && response.status === 409) {
  //         throw new Error(
  //           `username or email already exist...(${response.statusText})`
  //         );
  //       } else if (!response.ok) {
  //         throw new Error(
  //           `There was a problem with your request... (${response.statusText})`
  //         );
  //       }

  //       const data: CreatedUserResponseProps = await response.json();
  //       toast({
  //         title: "Success",
  //         description: `${data.message}`,
  //       });

  //       router.refresh();

  //       toggleDialog.setIsOpenAddUser(false);
  //     } catch (error: any) {
  //       toast({
  //         variant: "destructive",
  //         title: "Uh oh! Something went wrong.",
  //         description: `${error}`,
  //       });
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  return (
    <form
      //   onSubmit={handleSubmit}
      className={cn("grid items-start gap-4")}
    >
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input
          className="ring-transparent"
          name="name"
          id="name"
          defaultValue={visitor?.name}
          placeholder="Enter Name"
          required
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          className="ring-transparent"
          name="email"
          type="email"
          id="email"
          defaultValue={visitor?.email}
          placeholder="Enter Email"
          required
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="phone">Phone</Label>
        <Input
          className="ring-transparent"
          name="phone"
          type="tel"
          id="phone"
          defaultValue={visitor?.phone}
          placeholder="Enter phone Number"
          required
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="residence">Residence</Label>
        <Input
          className="ring-transparent"
          name="residence"
          type="text"
          id="residence"
          defaultValue={visitor?.residence}
          placeholder="Enter Residence"
          required
        />
      </div>

      <div className="w-full grid gap-2">
        <legend className="text-sm font-medium">Sex</legend>
        <Select
          onValueChange={setSelectedSexValue}
          value={selectedSexValue}
          //   defaultValue={visitor?.sex}
          name="sex"
          required
        >
          <SelectTrigger className="w-full ring-transparent">
            <SelectValue placeholder="Select Sex" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectGroup>
              {sexOptions?.map((option, id) => (
                <SelectItem
                  className="cursor-pointer  hover:bg-secondary hover:text-black"
                  key={id}
                  value={option.value}
                >
                  {option.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="w-full grid gap-2">
        <legend className="text-sm font-medium">Would You Be A Member</legend>
        <Select
          onValueChange={setSelectedWouldYouBeMemberValue}
          value={selectedWouldYouBeMemberValue}
          name="wouldYouBeMember"
          //   defaultValue={visitor?.wouldYouBeMember}
          required
        >
          <SelectTrigger className="w-full ring-transparent">
            <SelectValue placeholder="Select option" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectGroup>
              {wouldYouBeMemberOptions?.map((option, id) => (
                <SelectItem
                  className="cursor-pointer  hover:bg-secondary hover:text-black"
                  key={id}
                  value={option.value}
                >
                  {option.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="w-full grid gap-2">
        <legend className="text-sm font-medium">Are you born again</legend>
        <Select
          onValueChange={setSelectedGivenLifeToChristValue}
          value={selectedGivenLifeToChristValue}
          name="givenLifeToChrist"
          required
        >
          <SelectTrigger className="w-full ring-transparent">
            <SelectValue placeholder="Select option" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectGroup>
              {givenLifeToChristOptions?.map((option, id) => (
                <SelectItem
                  className="cursor-pointer  hover:bg-secondary hover:text-black"
                  key={id}
                  value={option.value}
                >
                  {option.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {selectedGivenLifeToChristValue === "yes" && (
        <>
          <div className="grid gap-2">
            <legend className="text-sm font-medium">Date Of Coversion</legend>
            <DatePicker
              value={
                visitor?.givenLifeToChrist.dateConverted
                  ? (visitor?.givenLifeToChrist.dateConverted as Date)
                  : undefined
              }
              onDateChange={setSelectedDateOfConvention}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="placeOfConversion">Place of conversion</Label>
            <Input
              className="ring-transparent"
              name="placeOfConversion"
              type="text"
              id="placeOfConversion"
              defaultValue={visitor?.givenLifeToChrist?.placeOfConversion}
              placeholder="Enter place of conversion"
              required
            />
          </div>
        </>
      )}

      <div className="grid gap-2">
        <Label htmlFor="inviter">Inviter</Label>
        <Input
          className="ring-transparent"
          name="inviter"
          type="text"
          id="inviter"
          defaultValue={visitor?.inviter}
          placeholder="Enter Inviter's name"
          required
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="inviterPhone">Inviter Phone</Label>
        <Input
          className="ring-transparent"
          name="inviterPhone"
          type="tel"
          id="inviterPhone"
          defaultValue={visitor?.inviterPhone}
          placeholder="Enter inviter's Phone Number"
          required
        />
      </div>

      <div className="w-full grid gap-2">
        <legend className="text-sm font-medium">First timer</legend>
        <Select
          onValueChange={setSelectedFirstTimerValue}
          value={selectedFirstTimerValue}
          name="firstTimer"
          required
        >
          <SelectTrigger className="w-full ring-transparent">
            <SelectValue placeholder="Select option" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectGroup>
              {firstTimerOptions?.map((option, id) => (
                <SelectItem
                  className="cursor-pointer  hover:bg-secondary hover:text-black"
                  key={id}
                  value={option.value}
                >
                  {option.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="purposeOfVisit">Purpose of visit</Label>
        <Input
          className="ring-transparent"
          name="purposeOfVisit"
          type="text"
          id="purposeOfVisit"
          defaultValue={visitor?.purposeOfVisit}
          placeholder="Enter purpose of visit"
          required
        />
      </div>

      <div className="w-full grid gap-2">
        <legend className="text-sm font-medium">Marital Status</legend>
        <Select
          onValueChange={setSelectedMaritalValue}
          value={selectedMaritalValue}
          //   defaultValue={visitor?.maritalStatus}
          name="wouldYouBeMember"
          required
        >
          <SelectTrigger className="w-full ring-transparent">
            <SelectValue placeholder="Select option" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectGroup>
              {maritalOptions?.map((option, id) => (
                <SelectItem
                  className="cursor-pointer  hover:bg-secondary hover:text-black"
                  key={id}
                  value={option.value}
                >
                  {option.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="w-full grid gap-2">
        <legend className="text-sm font-medium">Service Experience</legend>
        <Select
          onValueChange={setSelectedServiceExperienceValue}
          value={selectedServiceExperienceValue}
          //   defaultValue={visitor?.serviceExperience}
          name="firstTimer"
          required
        >
          <SelectTrigger className="w-full ring-transparent">
            <SelectValue placeholder="Select option" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectGroup>
              {serviceExperienceOptions?.map((option, id) => (
                <SelectItem
                  className="cursor-pointer  hover:bg-secondary hover:text-black"
                  key={id}
                  value={option.value}
                >
                  {option.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="prayerRequest">Prayer Request</Label>
        <Input
          className="ring-transparent"
          name="prayerRequest"
          type="text"
          id="prayerRequest"
          defaultValue={visitor?.prayerRequest}
          placeholder="Enter prayer request"
          required
        />
      </div>

      <div className="w-full grid gap-2">
        <legend className="text-sm font-medium">
          Would you like us to visit you
        </legend>
        <Select
          onValueChange={setSelectedWantUsToVisitValue}
          value={selectedWantUsToVisitValue}
          //   defaultValue={visitor?.wantUsToVisit?.status}
          name="wantUsToVisist"
          required
        >
          <SelectTrigger className="w-full ring-transparent">
            <SelectValue placeholder="Select option" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectGroup>
              {wantUsToVisitOptions?.map((option, id) => (
                <SelectItem
                  className="cursor-pointer  hover:bg-secondary hover:text-black"
                  key={id}
                  value={option.value}
                >
                  {option.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {selectedWantUsToVisitValue === "yes" && (
        <>
          <div className="grid gap-2">
            <legend className="text-sm font-medium">Date Of visitation</legend>
            <DatePicker
              value={visitor?.wantUsToVisit?.date}
              onDateChange={setSelectedDateOfVisitation}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="timeOfVisitation">Time of visitation</Label>
            <Input
              className="ring-transparent"
              name="timeOfVisitation"
              type="text"
              id="timeOfVisitation"
              defaultValue={visitor?.wantUsToVisit?.time}
              placeholder="Enter time of visitation"
              required
            />
          </div>
        </>
      )}

      <Button
        className="text-white flex items-center justify-center gap-4"
        type="submit"
      >
        {loading && <Spinner variant="small" />}
        {loading ? "Submiting..." : "Submit"}
      </Button>
    </form>
  );
}
