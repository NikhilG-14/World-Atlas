export const Contact = () => {

    // Special react-19 feature for direct data collection for forum
    // "formData.entries()" return an iterator of "key-value pairs" from the form data.
    const handleFormSubmit = ( formData ) => {
        // console.log(formData.entries());
        const formInputData = Object.fromEntries(formData.entries());
        console.log(formInputData);
    };

    return <section className="section-contact">
        <h2 className="container-title">Contact</h2>

        <div className="contact-wrapper container">

            <form action={handleFormSubmit}>
                <input 
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                    name="username" 
                    required 
                    autoComplete="false" 
                />

                <input 
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    name="email" 
                    required 
                    autoComplete="false" 
                    any
                />

                <textarea 
                    className="form-control"
                    rows="10"
                    placeholder="Enter your message"
                    name="message" 
                    required 
                    autoComplete="false" 
                ></textarea>

                <button type="submit" value="send">Send</button>
            </form>
        </div>
    </section>
};