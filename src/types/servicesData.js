import specialized from "../assets/img/gallery/specialized.jpg";
import apartment from "../assets/img/gallery/apartment.jpg";
import home from "../assets/img/gallery/5.jpg";
import office from "../assets/img/gallery/6.jpg";

const services = [
  {
    id: "apartment-cleaning",
    title: "Apartment Cleaning",
    items: ["Living Room Cleaning", "Bedroom Cleaning"],
    image: apartment,
    categories: ["Furnished", "Unfurnished"],
    subservices: [
      { name: "Sofa Cleaning", price: { furnished: 599, unfurnished: 399 } },
      { name: "Curtain Cleaning", price: { furnished: 499, unfurnished: 299 } },
      { name: "Mattress Cleaning", price: { furnished: 799, unfurnished: 599 } },
      { name: "Carpet Cleaning", price: { furnished: 899, unfurnished: 699 } },
      { name: "Tile & Grout Cleaning", price: { furnished: 699, unfurnished: 499 } },
      { name: "Upholstery Cleaning", price: { furnished: 999, unfurnished: 799 } },
    ],
    included: [
      "Dusting of surfaces",
      "Vacuuming of floors",
      "Basic disinfection",
    ],
    excluded: [
      "Deep stain removal",
      "Window exterior cleaning",
    ],
  },
  {
    id: "home-cleaning",
    title: "Home Cleaning",
    items: ["Kitchen Cleaning", "Bathroom Cleaning", "Window Cleaning", "Floor Cleaning", "Deep Cleaning"],
    image: home,
    subservices: [
      { name: "Kitchen Cleaning", price: 999 },
      { name: "Bathroom Cleaning", price: 699 },
      { name: "Window Cleaning", price: 499 },
      { name: "Floor Cleaning", price: 599 },
      { name: "Deep Cleaning", price: 1499 },
    ],
    included: [
      "Basic surface cleaning",
      "Mopping and vacuuming",
    ],
    excluded: [
      "Appliance deep clean",
      "Exterior window cleaning",
    ],
  },
  {
    id: "office-cleaning",
    title: "Office Cleaning",
    items: ["Workspace Cleaning", "Restroom Sanitization", "Carpet Cleaning", "Trash Removal", "Disinfection Services"],
    image: office,
    subservices: [
      { name: "Workspace Cleaning", price: 1299 },
      { name: "Restroom Sanitization", price: 999 },
      { name: "Carpet Cleaning", price: 899 },
      { name: "Trash Removal", price: 399 },
      { name: "Disinfection Services", price: 1499 },
    ],
    included: [
      "Desk and workstation cleaning",
      "Restroom cleaning and sanitization",
    ],
    excluded: [
      "Server room cleaning",
      "Exterior window cleaning",
    ],
  },
  {
    id: "specialized-cleaning",
    title: "Specialized Cleaning",
    items: ["Warehouse Cleaning", "Abandoned Property Cleaning", "Outdoor Area Cleaning", "High-Level Dusting", "Industrial Cleaning"],
    image: specialized,
    subservices: [
      { name: "Warehouse Cleaning", price: 2499 },
      { name: "Abandoned Property Cleaning", price: 1999 },
      { name: "Outdoor Area Cleaning", price: 1599 },
      { name: "High-Level Dusting", price: 1799 },
      { name: "Industrial Cleaning", price: 2999 },
    ],
    included: [
      "Heavy-duty cleaning equipment",
      "Industrial-grade disinfection",
    ],
    excluded: [
      "Hazardous waste removal",
      "Structural repairs",
    ],
  },
];

export default services;