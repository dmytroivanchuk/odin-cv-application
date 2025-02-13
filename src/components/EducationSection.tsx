import { Education } from "../types/cv";
import Field from "./Field";

type EducationSectionProps = {
  data: Education[];
  onAddClick: () => void;
  onFieldChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function EducationSection({
  data,
  onAddClick,
  onFieldChange,
}: EducationSectionProps) {
  return (
    <fieldset>
      <legend>Education</legend>
      <button type="button" onClick={onAddClick}>
        Add
      </button>
      {data.map((education) => (
        <div key={education.id}>
          <Field
            type="text"
            id="school-name"
            dataId={education.id}
            name="schoolName"
            title="School name:"
            value={education.schoolName}
            onChange={onFieldChange}
          />
          <Field
            type="text"
            id="title-of-study"
            dataId={education.id}
            name="titleOfStudy"
            title="Title of study:"
            value={education.titleOfStudy}
            onChange={onFieldChange}
          />
          <Field
            type="text"
            id="education-date-from-to"
            dataId={education.id}
            name="dateFromTo"
            title="Date from/to:"
            value={education.dateFromTo}
            onChange={onFieldChange}
          />
        </div>
      ))}
    </fieldset>
  );
}
