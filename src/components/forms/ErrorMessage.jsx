import classNames from "classnames";

export default function ErrorMessage({message, className}){
    return (
        <p
            className={classNames(["text-red-500 text-sm font-medium",
                className && className])}>
            {message}
        </p>
    )
}