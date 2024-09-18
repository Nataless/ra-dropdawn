import DropdownItem from "./DropdownItemFunc";

export default function DropdownList(props) {
  const { list } = props;

  return (
    <ul className="dropdown">
      {list.map((item, index) => (
        <DropdownItem item={item} key={index} />
      ))}
    </ul>
  );
}