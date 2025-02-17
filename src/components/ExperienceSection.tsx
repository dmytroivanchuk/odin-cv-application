import { Experience } from "../types/cv";
import Field from "./Field";

type ExperienceSectionProps = {
  data: Experience[];
  onAddClick: () => void;
  onRemoveClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onFieldChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
};

export default function ExperienceSection({
  data,
  onAddClick,
  onRemoveClick,
  onFieldChange,
}: ExperienceSectionProps) {
  return (
    <fieldset className="flex flex-col gap-4 rounded-md bg-white px-2 pt-5 pb-6">
      <div>
        <legend className="text-xl">Experience</legend>
      </div>

      {data.map((experience) => (
        <div
          className="flex flex-col gap-4 rounded-md bg-gray-100 px-2 pt-5 pb-5"
          key={experience.id}
        >
          <h3 className="text-lg">&#8470;{experience.position}</h3>
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
            id="experience-location"
            dataId={experience.id}
            name="location"
            title="Location:"
            value={experience.location}
            onChange={onFieldChange}
          />
          <div className="flex flex-col gap-1">
            <label htmlFor="description">Description:</label>
            <textarea
              className="field-sizing-content min-h-19 resize-none rounded-sm border border-gray-500 bg-white px-1"
              id="description"
              data-id={experience.id}
              name="description"
              value={experience.description}
              onChange={onFieldChange}
            ></textarea>
          </div>
          <button
            className="mt-4 mr-2 cursor-pointer self-end rounded-sm bg-red-800 px-4 py-1 text-white"
            type="button"
            data-id={experience.id}
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
