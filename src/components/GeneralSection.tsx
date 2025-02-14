import { General } from "../types/cv";
import Field from "./Field";

type GeneralSectionProps = {
  data: General;
  onFieldChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function GeneralSection({
  data,
  onFieldChange,
}: GeneralSectionProps) {
  return (
    <fieldset className="flex flex-col gap-4 rounded-md bg-white px-2 pt-5 pb-11">
      <div>
        <legend className="text-xl">General</legend>
      </div>
      <Field
        type="text"
        id="first-name"
        name="firstName"
        title="First Name:"
        value={data.firstName}
        onChange={onFieldChange}
      />
      <Field
        type="text"
        id="last-name"
        name="lastName"
        title="Last Name:"
        value={data.lastName}
        onChange={onFieldChange}
      />
      <Field
        type="email"
        id="email"
        name="email"
        title="Email:"
        value={data.email}
        onChange={onFieldChange}
      />
      <Field
        type="tel"
        id="phone"
        name="phone"
        title="Phone:"
        value={data.phone}
        onChange={onFieldChange}
      />
    </fieldset>
  );
}
