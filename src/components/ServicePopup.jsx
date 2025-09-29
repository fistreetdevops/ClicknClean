import { useState } from "react";

const ServicePopup = ({ open, onClose, service, onSelect, onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubservices, setSelectedSubservices] = useState([]);

  if (!open || !service) return null;

  const toggleSubservice = (sub) => {
    setSelectedSubservices((prev) => {
      if (prev.find((s) => s.name === sub.name)) {
        return prev.filter((s) => s.name !== sub.name);
      } else {
        return [...prev, sub];
      }
    });
  };

  const handleAdd = () => {
    if (!selectedCategory || selectedSubservices.length === 0) return;

    const subservicesWithPrice = selectedSubservices.map((s) => {
      let price = s.price;
      if (typeof s.price === "object") {
        price =
          selectedCategory.toLowerCase() === "furnished"
            ? s.price.furnished
            : s.price.unfurnished;
      }
      return { name: s.name, price };
    });

    if (onAddToCart) {
      onAddToCart({
        ...service,
        selectedCategory,
        selectedSubservices: subservicesWithPrice,
      });
    }

    setSelectedSubservices([]);
    onClose();
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "8px",
          width: "400px",
          maxHeight: "80vh",
          overflowY: "auto",
        }}
      >
        <h3 style={{ marginBottom: "15px" }}>
          Select Options for {service.title}
        </h3>

        {/* Categories */}
        {service.categories && (
          <div style={{ marginBottom: "15px" }}>
            <h4>Categories</h4>
            <ul>
              {service.categories.map((cat, i) => (
                <li key={i}>
                  <button
                    style={{
                      padding: "6px 12px",
                      border: "1px solid #ddd",
                      borderRadius: "6px",
                      margin: "5px 0",
                      cursor: "pointer",
                      width: "100%",
                      background: selectedCategory === cat ? "#5E35B1" : "#fff",
                      color: selectedCategory === cat ? "#fff" : "#000",
                    }}
                    onClick={() => {
                      setSelectedCategory(cat);
                      if (onSelect) onSelect(cat);
                    }}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Subservices */}
        {service.subservices && (
          <div style={{ marginBottom: "15px" }}>
            <h4>Subservices</h4>
            <ul>
              {service.subservices.map((s, i) => {
                let displayPrice;
                if (typeof s.price === "object") {
                  if (selectedCategory) {
                    displayPrice =
                      selectedCategory.toLowerCase() === "furnished"
                        ? s.price.furnished
                        : s.price.unfurnished;
                  } else {
                    displayPrice = `Furnished: ₹${s.price.furnished} / Unfurnished: ₹${s.price.unfurnished}`;
                  }
                } else {
                  displayPrice = s.price;
                }

                const isChecked = selectedSubservices.find(
                  (sub) => sub.name === s.name
                );

                return (
                  <li key={i} style={{ margin: "5px 0" }}>
                    <label>
                      <input
                        type="checkbox"
                        checked={!!isChecked}
                        onChange={() => toggleSubservice(s)}
                      />{" "}
                      {s.name} - {displayPrice}
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {/* Included */}
        {service.included && service.included.length > 0 && (
          <div style={{ marginBottom: "15px" }}>
            <h4>What’s Included</h4>
            <ul>
              {service.included.map((item, i) => (
                <li key={i}>✅ {item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Excluded */}
        {service.excluded && service.excluded.length > 0 && (
          <div style={{ marginBottom: "15px" }}>
            <h4>What’s Excluded</h4>
            <ul>
              {service.excluded.map((item, i) => (
                <li key={i}>❌ {item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Add to Cart Button */}
        <button
          onClick={handleAdd}
          style={{
            marginTop: "10px",
            padding: "10px",
            width: "100%",
            background: "#43A047",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
          disabled={!selectedCategory || selectedSubservices.length === 0}
        >
          Add
        </button>
      </div>
    </div>
  );
};
export default ServicePopup;