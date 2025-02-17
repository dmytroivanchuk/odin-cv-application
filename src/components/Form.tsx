import { CV } from "../types/cv";
import GeneralSection from "./GeneralSection";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";

type FormProps = {
  cv: CV;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onGeneralFieldChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEducationAddClick: () => void;
  onEducationRemoveClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onEducationFieldChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onExperienceAddClick: () => void;
  onExperienceRemoveClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onExperienceFieldChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
};

export default function Form({
  cv,
  onSubmit,
  onGeneralFieldChange,
  onEducationAddClick,
  onEducationRemoveClick,
  onEducationFieldChange,
  onExperienceAddClick,
  onExperienceRemoveClick,
  onExperienceFieldChange,
}: FormProps) {
  return (
    <form
      className="flex w-[calc(100%-(var(--spacing)*8))] flex-col gap-10 rounded-lg bg-gray-100 px-3 py-8"
      onSubmit={onSubmit}
    >
      <GeneralSection data={cv.general} onFieldChange={onGeneralFieldChange} />
      <EducationSection
        data={cv.educations}
        onAddClick={onEducationAddClick}
        onRemoveClick={onEducationRemoveClick}
        onFieldChange={onEducationFieldChange}
      />
      <ExperienceSection
        data={cv.experiences}
        onAddClick={onExperienceAddClick}
        onRemoveClick={onExperienceRemoveClick}
        onFieldChange={onExperienceFieldChange}
      />
      <button className="cursor-pointer self-center rounded-sm bg-blue-800 px-4 py-1 text-white">
        Submit
      </button>
    </form>
  );
}
