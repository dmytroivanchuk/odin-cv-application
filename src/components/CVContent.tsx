import { CV } from "../types/cv";

type CVContentProps = {
  cv: CV;
  onEdit: () => void;
};

export default function CVContent({ cv, onEdit }: CVContentProps) {
  return (
    <>
      <div className="flex w-[calc(100%-(var(--spacing)*8))] flex-col gap-8">
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-semibold">
              {cv.general.firstName} {cv.general.lastName}
            </h1>
            <h2 className="text-2xl">{cv.general.positionTitle}</h2>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-medium text-gray-500">{cv.general.email}</p>
            <p className="font-medium text-gray-500">{cv.general.phone}</p>
          </div>
        </div>
        {cv.experiences.length !== 0 && (
          <div className="flex flex-col gap-4">
            <h3 className="-mb-3 text-xl font-light tracking-wider text-gray-500 uppercase">
              Experience
            </h3>
            {cv.experiences.map((experience) => (
              <div key={experience.id}>
                <h4>
                  <span className="text-lg leading-5 font-semibold">
                    {experience.companyName} |
                  </span>{" "}
                  <span className="font-medium">
                    {experience.positionTitle}
                  </span>
                </h4>
                <h5 className="mb-1 leading-5 font-medium text-gray-500">
                  {experience.dateFromTo} | {experience.location}
                </h5>
                <p className="font-extralight">{experience.description}</p>
              </div>
            ))}
          </div>
        )}
        {cv.educations.length !== 0 && (
          <div className="flex flex-col gap-4">
            <h3 className="-mb-3 text-xl font-light tracking-wider text-gray-500 uppercase">
              Education
            </h3>
            {cv.educations.map((education) => (
              <div key={education.id}>
                <h4 className="text-lg leading-5 font-semibold">
                  {education.schoolName}
                </h4>
                <h5 className="font-medium">{education.titleOfStudy}</h5>
                <h6 className="mb-1 leading-5 font-medium text-gray-500">
                  {education.dateFromTo} | {education.location}
                </h6>
              </div>
            ))}
          </div>
        )}
      </div>
      <button
        className="mt-4 mr-2 cursor-pointer rounded-sm bg-yellow-800 px-4 py-1 text-white"
        onClick={onEdit}
      >
        Edit
      </button>
    </>
  );
}
