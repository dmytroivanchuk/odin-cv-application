import { CV } from "../types/cv";

type CVContentProps = {
  cv: CV;
};

export default function CVContent({ cv }: CVContentProps) {
  return <div>{cv.general.firstName}</div>;
}
