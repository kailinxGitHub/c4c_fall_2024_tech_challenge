function Form() {
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const formData = {
            name: e.target[0].value,
            description: e.target[1].value,
            logoSource: e.target[2].value,
            active: e.target[3].checked
        };

        // debug
        console.log(formData)

        window.location.reload();

        const response = await fetch('http://localhost:3000/uploadData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            alert('Form submitted successfully!');
        } else {
            alert('Form submission failed!');
        }
    }

    return (
        <form
            className="max-w-sm mx-auto grid grid-cols-1 mt-6 px-5 py-5 border border-green-400 rounded-lg border-dashed"
            onSubmit={handleSubmit}
        >
            <div className="mb-5">
                <label htmlFor="last-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Partner
                    name</label>
                <input type="last-name" id="partner-name"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="e.g. Speak For The Trees" required/>
            </div>
            <div className="mb-5">
                <label htmlFor="about" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Partner
                    description</label>
                <textarea id="about"
                          rows="3"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          required/>
            </div>
            <div className="mb-5">
                <label htmlFor="link" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Partner Logo Source</label>
                <input type="link" id="link"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="e.g. https://treeboston.org/wp-content/themes/sfttboston/images/sfttb_logo_web_2x.png" required/>
            </div>
            <div className="flex items-start mb-5">
                <div className="flex items-center h-5">
                    <input id="active" type="checkbox" value=""
                           className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    />
                </div>
                <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Active?</label>
            </div>
            <button type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
            </button>
        </form>
    );
}

export default Form;
