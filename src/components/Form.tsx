import { useState } from "react";
import { CV } from "../types/cv";
import GeneralSection from "./GeneralSection";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";

export default function Form() {
  const emptyCV: CV = {
    general: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
    educations: [],
    experiences: [],
  };

  const [cv, setCV] = useState(emptyCV);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(cv);
  }

  function handleGeneralFieldChange(e: React.ChangeEvent<HTMLInputElement>) {
    const nextCV: CV = {
      ...cv,
      general: { ...cv.general, [e.target.name]: e.target.value },
    };

    setCV(nextCV);
  }

  function handleAddEducationClick() {
    const newEducation = {
      id: self.crypto.randomUUID(),
      schoolName: "",
      titleOfStudy: "",
      dateFromTo: "",
    };

    const nextCV: CV = {
      ...cv,
      educations: [...cv.educations, newEducation],
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

  function handleAddExperienceClick() {
    const newExperience = {
      id: self.crypto.randomUUID(),
      companyName: "",
      positionTitle: "",
      dateFromTo: "",
      description: "",
    };

    const nextCV: CV = {
      ...cv,
      experiences: [...cv.experiences, newExperience],
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

  return (
    <form onSubmit={handleSubmit}>
      <GeneralSection
        data={cv.general}
        onFieldChange={handleGeneralFieldChange}
      />
      <EducationSection
        data={cv.educations}
        onAddClick={handleAddEducationClick}
        onFieldChange={handleEducationFieldChange}
      />
      <ExperienceSection
        data={cv.experiences}
        onAddClick={handleAddExperienceClick}
        onFieldChange={handleExperienceFieldChange}
      />
      <button>Submit</button>
    </form>
  );
}
