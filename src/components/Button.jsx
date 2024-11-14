import React from 'react';
import PropTypes from 'prop-types';

const ButtonPrimary = ({
    href,
    label,
    className = '',
    icon,
    target = '_self',
    classes = ''
}) => {
    const combinedClasses = `btn btn-primary ${className} ${classes}`;

    if (href) {
        return (
            <a
                href={href}
                target={target}
                className={combinedClasses.trim()}
            >
                {label}
                {icon && (
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                )}
            </a>
        );
    } else {
        return (
            <button className={combinedClasses.trim()}>
                {label}
                {icon && (
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                )}
            </button>
        );
    }
};

ButtonPrimary.propTypes = {
    href: PropTypes.string,
    label: PropTypes.string.isRequired,
    className: PropTypes.string,
    target: PropTypes.string,
    classes: PropTypes.string,
    icon: PropTypes.string,
};


// * ButtonOutline
const ButtonOutline = ({
    href,
    label,
    className = '',
    icon,
    target = '_self',
    classes = ''
}) => {
    const combinedClasses = `btn btn-outline ${className} ${classes}`;

    if (href) {
        return (
            <a
                href={href}
                target={target}
                className={combinedClasses.trim()}
            >
                {label}
                {icon && (
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                )}
            </a>
        );
    } else {
        return (
            <button className={combinedClasses.trim()}>
                {label}
                {icon && (
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                )}
            </button>
        );
    }
};

ButtonOutline.propTypes = {
    href: PropTypes.string,
    label: PropTypes.string.isRequired,
    className: PropTypes.string,
    target: PropTypes.string,
    classes: PropTypes.string,
    icon: PropTypes.string,
};


export { ButtonPrimary,ButtonOutline };
