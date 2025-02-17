import { useState } from "react";
import { CV } from "./types/cv";
import Form from "./components/Form";
import CVContent from "./components/CVContent";

const emptyCV: CV = {
  general: {
    firstName: "",
    lastName: "",
    positionTitle: "",
    email: "",
    phone: "",
  },
  educations: [],
  experiences: [],
};

export default function App() {
  const [cv, setCV] = useState(emptyCV);
  const [isFormHidden, setIsFormHidden] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsFormHidden(true);
  }

  function handleGeneralFieldChange(e: React.ChangeEvent<HTMLInputElement>) {
    const nextCV: CV = {
      ...cv,
      general: { ...cv.general, [e.target.name]: e.target.value },
    };

    setCV(nextCV);
  }

  function handleEducationAddClick() {
    const newEducation = {
      id: self.crypto.randomUUID(),
      position: cv.educations.length + 1,
      schoolName: "",
      titleOfStudy: "",
      dateFromTo: "",
      location: "",
    };

    const nextCV: CV = {
      ...cv,
      educations: [...cv.educations, newEducation],
    };

    setCV(nextCV);
  }

  function handleEducationRemoveClick(e: React.MouseEvent<HTMLButtonElement>) {
    const nextEducations = cv.educations.filter(
      (education) =>
        education.id !== (e.target as HTMLButtonElement).dataset.id,
    );

    const nextCV: CV = {
      ...cv,
      educations: nextEducations,
    };

    setCV(nextCV);
  }

  function handleEducationFieldChange(e: React.ChangeEvent<HTMLInputElement>) {
    const nextEducations = cv.educations.map((education) => {
      if (education.id === e.target.dataset.id) {
        return { ...education, [e.target.name]: e.target.value };
      } else {
        return education;
      }
    });

    const nextCV: CV = {
      ...cv,
      educations: nextEducations,
    };

    setCV(nextCV);
  }

  function handleExperienceAddClick() {
    const newExperience = {
      id: self.crypto.randomUUID(),
      position: cv.experiences.length + 1,
      companyName: "",
      positionTitle: "",
      dateFromTo: "",
      location: "",
      description: "",
    };

    const nextCV: CV = {
      ...cv,
      experiences: [...cv.experiences, newExperience],
    };

    setCV(nextCV);
  }

  function handleExperienceRemoveClick(e: React.MouseEvent<HTMLButtonElement>) {
    const nextExperiences = cv.experiences.filter(
      (experience) =>
        experience.id !== (e.target as HTMLButtonElement).dataset.id,
    );

    const nextCV: CV = {
      ...cv,
      experiences: nextExperiences,
    };

    setCV(nextCV);
  }

  function handleExperienceFieldChange(e: React.ChangeEvent<HTMLInputElement>) {
    const nextExperiences = cv.experiences.map((experience) => {
      if (experience.id === e.target.dataset.id) {
        return { ...experience, [e.target.name]: e.target.value };
      } else {
        return experience;
      }
    });

    const nextCV: CV = {
      ...cv,
      experiences: nextExperiences,
    };

    setCV(nextCV);
  }

  function handleCVEdit() {
    setIsFormHidden(false);
  }

  const home = (
    <>
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-4xl">CV Generator</h1>
        <h2>Input information below to generate a CV!</h2>
      </div>
      <Form
        cv={cv}
        onSubmit={handleSubmit}
        onGeneralFieldChange={handleGeneralFieldChange}
        onEducationAddClick={handleEducationAddClick}
        onEducationRemoveClick={handleEducationRemoveClick}
        onEducationFieldChange={handleEducationFieldChange}
        onExperienceAddClick={handleExperienceAddClick}
        onExperienceRemoveClick={handleExperienceRemoveClick}
        onExperienceFieldChange={handleExperienceFieldChange}
      />
    </>
  );

  const cvContent = <CVContent cv={cv} onEdit={handleCVEdit} />;

  return (
    <div className="my-10 flex flex-col items-center justify-center gap-8">
      {isFormHidden ? cvContent : home}
    </div>
  );
}
