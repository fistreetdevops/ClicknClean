import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onChange, value }) => {
    const suggestions = [
        "House Cleaning",
        "Office Cleaning",
        "Carpet Cleaning",
        "Window Cleaning",
        "Deep Cleaning",
        "Move In/Out Cleaning",
        "Post-Construction Cleaning"
    ];
    const [placeholder, setPlaceholder] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const currentText = suggestions[currentIndex];
        const typing = setInterval(() => {
            setPlaceholder((prev) => currentText.substring(0, prev.length + 1));
            setCharIndex((prev) => prev + 1);
        }, 100);

        if (charIndex === currentText.length) {
            clearInterval(typing);
            setTimeout(() => {
                setCharIndex(0);
                setCurrentIndex((prev) => (prev + 1) % suggestions.length);
                setPlaceholder("");
            }, 1500);
        }

        return () => clearInterval(typing);
    }, [charIndex, currentIndex]);

    return (
        <div className="mil-input-frame mil-bg-m-4 mil-br-md mil-shadow mil-jcc"
            style={{
                maxWidth: "500px",
            }}>
            <input
                type="text"
                value={value}
                onChange={e => onChange(e.target.value)}
                className="mil-fs-16 mil-bg-m-4 mil-br-md mil-p-2 mil-m-2"
                placeholder={`Search ${placeholder}`}
                style={{
                    flex: 1,
                    border: "none",
                    background: "transparent",
                    height: "5rem"
                }}
            />
            <FaSearch size={20} color="#8792a4"  style={{marginRight:"20px"}}/>
        </div>
    );
}
export default SearchBar; 