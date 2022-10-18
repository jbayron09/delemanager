import classNames from "classnames";

export default function SummaryCardSection({icon, className, children}) {
    return (
        <div className={classNames([
            'flex items-center',
            className && className
        ])}>
            {
                icon({
                    size: '1.5em',
                    className: 'text-gray-300 mr-2'
                })
            }
            <div className="font-bold text-gray-700">{children}</div>
        </div>
    )
}