import { DropdownFilter } from "./Filter.styled";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function Filter({ filter, handleFilter }) {
  const options = [
    { value: "all", label: "Show all" },
    { value: "follow", label: "Follow" },
    { value: "followings", label: "Followings" },
  ];

  return (
    <DropdownFilter
      options={options}
      value={filter}
      onChange={({ value }) => handleFilter(value)}
      placeholder="Select an option"
      arrowClosed={<IoIosArrowDown />}
      arrowOpen={<IoIosArrowUp />}
    />
  );
}
