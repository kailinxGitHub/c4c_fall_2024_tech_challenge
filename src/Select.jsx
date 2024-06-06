import {useEffect, useState} from "react";

const Select = ({ setSelectedOption }) => {
    const [selectOptions, setSelectOptions] = useState([]);
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    useEffect(() => {
        const fetchItems = async () => {
            fetch('http://localhost:3000/getPartnerNames')
            .then(response => response.json())
            .then(data => {
                setSelectOptions(data);
            })
            .catch(error => console.error('Error fetching data:', error));
        }
        fetchItems();
    }, []);

    return (
    <div className="flex flex-col justify-center items-center">
        <form className="max-w-sm mx-auto">
            <label htmlFor="countries" className="block pt-2 mb-2 text-sm font-medium text-gray-900 dark:text-white">Select
                an option</label>
            <select id="countries"
                    onChange={handleSelectChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Choose an existing Partner</option>
                {selectOptions.map(opt =>
                    <option value={opt}>{opt}</option>
                )}
            </select>

        </form>
    </div>
    );
}

export default Select;