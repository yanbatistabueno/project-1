import "./ProductCard.css";

function slugify(str) {
  // Remove leading and trailing whitespace
  str = str.trim();

  // Make the string lowercase
  str = str.toLowerCase();

  // Remove accents, swap ñ for n, etc
  str = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // Remove invalid characters
  str = str.replace(/[^a-z0-9 -]/g, "");

  // Replace whitespace with a hyphen
  str = str.replace(/\s+/g, "-");

  // Collapse consecutive hyphens
  str = str.replace(/-+/g, "-");

  return str;
}

function ProductCard(props) {
  return (
    <a href={`/products.html?${slugify(props.name)}`}>
      <button>
        <div className="product-info-container">
          <h1 className="product-name">{props.name}</h1>
          <div className="product-desc">{props.desc}</div>
        </div>
        <img src={`../public/products/${props.img}`} />
      </button>
    </a>
  );
}

export default ProductCard;
