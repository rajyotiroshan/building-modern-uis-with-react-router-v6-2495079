import { useParams } from "react-router-dom";
import { getCategory } from "../api";

export default function Category() {
  const { catId } = useParams();
  const category = getCategory(catId);

  return (
    <>

    </>
  );
}
