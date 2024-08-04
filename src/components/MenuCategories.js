import "./MenuCategories.css";

function MenuCategories({ name, className, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {name}
    </button>
  );
}

export default MenuCategories;
