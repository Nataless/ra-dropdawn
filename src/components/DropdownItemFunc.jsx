export default function DropdownItem(props) {
  const { item } = props;

  const hendelEnterLeave = (e) => {
    e.target.classList.toggle("active");
  };

  return (
    <li>
      <a
        href="#0"
        onMouseEnter={hendelEnterLeave}
        onMouseLeave={hendelEnterLeave}
      >
        {item}
      </a>
    </li>
  );
}