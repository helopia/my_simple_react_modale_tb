/// <reference types="react" />
type Props = {
    onClose: () => void;
    imageSrc: any;
    imageName: string;
    text: string;
    linkText?: string | undefined;
    linkPath?: string | undefined;
};
declare function Modale({ onClose, imageSrc, imageName, text, linkText, linkPath }: Props): JSX.Element;
export { Modale };
