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
import Spinner from "@/components/Spinner";
import { DatePicker } from "@/components/datePickerCustom";
import { useCurrentUserStore } from "@/store/currentUser";

interface AddVisitorFormProps extends React.ComponentProps<"form"> {
  token: string | undefined;
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

interface BoolProps<T> {
  name: T | string;
  value: T | string;
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

export function AddVisitorForm({ token }: AddVisitorFormProps) {
  const [sexOptions, setSexOptions] = useState<BoolProps<Sex>[]>([
    { name: Sex.male, value: Sex.male },
    { name: Sex.female, value: Sex.female },
  ]);
  const [selectedSexValue, setSelectedSexValue] = useState<string>("");

  const [wouldYouBeMemberOptions, setWouldYouBeMemberOptions] = useState<
    BoolProps<YesNoProps>[]
  >([
    { name: YesNoProps.yes, value: YesNoProps.yes },
    { name: YesNoProps.no, value: YesNoProps.no },
  ]);
  const [selectedWouldYouBeMemberValue, setSelectedWouldYouBeMemberValue] =
    useState<string>("");

  const [givenLifeToChristOptions, setGivenLifeToChristOptions] = useState<
    BoolProps<YesNoProps>[]
  >([
    { name: YesNoProps.yes, value: YesNoProps.yes },
    { name: YesNoProps.no, value: YesNoProps.no },
  ]);
  const [selectedGivenLifeToChristValue, setSelectedGivenLifeToChristValue] =
    useState<string>("");

  const [wantUsToVisitOptions, setWantUsToVisitOptions] = useState<
    BoolProps<YesNoProps>[]
  >([
    { name: YesNoProps.yes, value: YesNoProps.yes },
    { name: YesNoProps.no, value: YesNoProps.no },
  ]);
  const [selectedWantUsToVisitValue, setSelectedWantUsToVisitValue] =
    useState<string>("");

  const [firstTimerOptions, setFirstTimerOptions] = useState<
    BoolProps<YesNoProps>[]
  >([
    { name: YesNoProps.yes, value: YesNoProps.yes },
    { name: YesNoProps.no, value: YesNoProps.no },
  ]);
  const [selectedFirstTimerValue, setSelectedFirstTimerValue] =
    useState<string>("");

  const [churchBranchOptions, setChurchBranchOptions] = useState<
    BoolProps<string>[]
  >([{ name: "Hatso", value: "hatso" }]);
  const [selectedChurchBranchValue, setSelectedChurchBranchValue] =
    useState<string>("");

  const [maritalOptions, setMaritalOptions] = useState<
    BoolProps<MaritalStatusEnum>[]
  >([
    { name: MaritalStatusEnum.single, value: MaritalStatusEnum.single },
    { name: MaritalStatusEnum.married, value: MaritalStatusEnum.married },
    { name: MaritalStatusEnum.divorce, value: MaritalStatusEnum.divorce },
  ]);
  const [selectedMaritalValue, setSelectedMaritalValue] = useState<string>("");

  const [serviceExperienceOptions, setServiceExperienceOptions] = useState<
    BoolProps<serviceExperienceEnum>[]
  >([
    { name: serviceExperienceEnum.poor, value: serviceExperienceEnum.poor },
    { name: serviceExperienceEnum.good, value: serviceExperienceEnum.good },
    { name: serviceExperienceEnum.better, value: serviceExperienceEnum.better },
    { name: serviceExperienceEnum.best, value: serviceExperienceEnum.best },
  ]);
  const [selectedServiceExperienceValue, setSelectedServiceExperienceValue] =
    useState<string>("");

  const [selectedDateOfConvention, setSelectedDateOfConvention] = useState<
    Date | undefined
  >(undefined);

  const [selectedDateOfVisitation, setSelectedDateOfVisitation] = useState<
    Date | undefined
  >(undefined);

  const [loading, setLoading] = useState(false);

  const { toast } = useToast();
  const { toggleDialog } = useDialogToggle();
  const { currentUser } = useCurrentUserStore();

  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(event.currentTarget);

      const visitor: VisitorProps = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
        residence: formData.get("residence") as string,
        sex: formData.get("sex") as Sex,
        wouldYouBeMember: formData.get("wouldYouBeMember") as YesNoProps,
        givenLifeToChrist: {
          status: formData.get("givenLifeToChrist") as YesNoProps,
          dateConverted: selectedDateOfConvention,
          placeOfConversion: formData.get("placeOfConversion") as string,
        },
        recordOfficer: currentUser?.name as string,
        churchBranch: formData.get("churchBranch") as string,
        inviter: formData.get("inviter") as string,
        inviterPhone: formData.get("inviterPhone") as string,
        firstTimer: formData.get("firstTimer") as YesNoProps,
        purposeOfVisit: formData.get("purposeOfVisit") as string,
        maritalStatus: formData.get("maritalStatus") as MaritalStatusEnum,
        serviceExperience: formData.get(
          "serviceExperience"
        ) as serviceExperienceEnum,
        prayerRequest: formData.get("prayerRequest") as string,
        wantUsToVisit: {
          status: formData.get("wantUsToVisit") as YesNoProps,
          date: selectedDateOfVisitation as Date,
          time: formData.get("timeOfVisitation") as string,
        },
        createdAt: new Date(),
      };

      const response = await fetch(`${BASE_URL}/api/v1/visitors`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(visitor),
      });

      const data = await response.json();

      console.log(data);

      toast({
        title: `${data?.status}`,
        description: `Visitor created!`,
      });

      router.refresh();

      toggleDialog.setIsOpenAddVisitor(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={cn("grid items-start gap-4")}>
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input
          className="ring-transparent"
          name="name"
          id="name"
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
          placeholder="Enter Residence"
          required
        />
      </div>

      <div className="w-full grid gap-2">
        <legend className="text-sm font-medium">Sex</legend>
        <Select
          onValueChange={setSelectedSexValue}
          value={selectedSexValue}
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
            <DatePicker onDateChange={setSelectedDateOfConvention} />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="placeOfConversion">Place of conversion</Label>
            <Input
              className="ring-transparent"
              name="placeOfConversion"
              type="text"
              id="placeOfConversion"
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
          placeholder="Enter purpose of visit"
          required
        />
      </div>

      <div className="w-full grid gap-2">
        <legend className="text-sm font-medium">Marital Status</legend>
        <Select
          onValueChange={setSelectedMaritalValue}
          value={selectedMaritalValue}
          name="maritalStatus"
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
          name="serviceExperience"
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
          name="wantUsToVisit"
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
            <DatePicker onDateChange={setSelectedDateOfVisitation} />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="timeOfVisitation">Time of visitation</Label>
            <Input
              className="ring-transparent"
              name="timeOfVisitation"
              type="text"
              id="timeOfVisitation"
              placeholder="Enter time of visitation"
              required
            />
          </div>
        </>
      )}

      <div className="w-full grid gap-2">
        <legend className="text-sm font-medium">Church Branch</legend>
        <Select
          onValueChange={setSelectedChurchBranchValue}
          value={selectedChurchBranchValue}
          name="churchBranch"
          required
        >
          <SelectTrigger className="w-full ring-transparent">
            <SelectValue placeholder="Select option" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectGroup>
              {churchBranchOptions?.map((option, id) => (
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
