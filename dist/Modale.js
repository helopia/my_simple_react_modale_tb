import React from 'react';
import { Link } from "react-router-dom";
function Modale({ onClose, imageSrc, imageName, text, linkText, linkPath }) {
    return (React.createElement("div", { className: 'modale' },
        React.createElement("img", { src: imageSrc, alt: imageName, onClick: onClose }),
        React.createElement("p", null, text),
        React.createElement(Link, { to: linkPath !== null && linkPath !== void 0 ? linkPath : "/" }, linkText)));
}
export { Modale };
