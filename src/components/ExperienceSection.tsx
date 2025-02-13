import { Experience } from "../types/cv";
import Field from "./Field";

type ExperienceSectionProps = {
  data: Experience[];
  onAddClick: () => void;
  onFieldChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function ExperienceSection({
  data,
  onAddClick,
  onFieldChange,
}: ExperienceSectionProps) {
  return (
    <fieldset>
      <legend>Experience</legend>
      <button type="button" onClick={onAddClick}>
        Add
      </button>
      {data.map((experience) => (
        <div key={experience.id}>
          <Field
            type="text"
            id="company-name"
            dataId={experience.id}
            name="companyName"
            title="Company name:"
            value={experience.companyName}
            onChange={onFieldChange}
          />
          <Field
            type="text"
            id="position-title"
            dataId={experience.id}
            name="positionTitle"
            title="Position title:"
            value={experience.positionTitle}
            onChange={onFieldChange}
          />
          <Field
            type="text"
            id="experience-date-from-to"
            dataId={experience.id}
            name="dateFromTo"
            title="Date from/to:"
            value={experience.dateFromTo}
            onChange={onFieldChange}
          />
          <Field
            type="text"
            id="description"
            dataId={experience.id}
            name="description"
            title="Description:"
            value={experience.description}
            onChange={onFieldChange}
          />
        </div>
      ))}
    </fieldset>
  );
}
