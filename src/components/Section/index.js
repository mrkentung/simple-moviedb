import { useHistory } from 'react-router-dom'

const Section = ({title, backButton, children}) => {
    const history = useHistory()

    return (
        <div className="h-auto border border-gray-100 bg-white rounded-sm m-3 p-3">
            <div className="h-auto mb-4 flex justify-between">
                <p className="relative font-semibold text-xl">
                    {title}
                </p>
                {backButton && (
                    <p className="cursor-pointer" onClick={(e) => history.goBack()}>Back</p>
                )}
            </div>
            <div className="h-auto">
                {children}
            </div>
        </div>
    )
}

export default Section