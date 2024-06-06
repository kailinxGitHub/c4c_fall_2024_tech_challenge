
const Select = ({ setSelectedOption }) => {
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
    <div className="flex flex-col justify-center items-center">
        <form className="max-w-sm mx-auto">
            <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select
                an option</label>
            <select id="countries"
                    onChange={handleSelectChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Choose an existing Partner</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
            </select>
        </form>
    </div>
    )
}

export default Select;