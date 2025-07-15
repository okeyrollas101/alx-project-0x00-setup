import { ButtonProp } from "@/interfaces";

const Button: React.FC<ButtonProp> = ({title, styles}) => {
    return (
         <button className={`flex flex-col mb-4 bg-blue-400 text-white py-2 px-4 ${styles}`}>
            {title}
         </button>
    )
}

export default Button;