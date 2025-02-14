import { Education } from "../types/cv";
import Field from "./Field";

type EducationSectionProps = {
  data: Education[];
  onAddClick: () => void;
  onRemoveClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onFieldChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function EducationSection({
  data,
  onAddClick,
  onRemoveClick,
  onFieldChange,
}: EducationSectionProps) {
  return (
    <fieldset className="flex flex-col gap-4 rounded-md bg-white px-2 pt-5 pb-6">
      <div>
        <legend className="text-xl">Education</legend>
      </div>

      {data.map((education) => (
        <div
          className="flex flex-col gap-4 rounded-md bg-gray-100 px-2 pt-5 pb-5"
          key={education.id}
        >
          <h3 className="text-lg">&#8470;{education.position}</h3>
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
          <button
            className="mt-4 mr-2 cursor-pointer self-end rounded-sm bg-red-800 px-4 py-1 text-white"
            type="button"
            data-id={education.id}
            onClick={onRemoveClick}
          >
            Remove
          </button>
        </div>
      ))}
      <button
        className="mt-2 ml-2 cursor-pointer self-start rounded-sm bg-green-800 px-4 py-1 text-white"
        type="button"
        onClick={onAddClick}
      >
        + Add
      </button>
    </fieldset>
  );
}
