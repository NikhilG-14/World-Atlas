import countryFacts from "../api/countryData.json"

export const About = () => {
    return <section className="setion-about container">
        <h2 className="container-title">
            Here are the interesting Facts
            <br />
            We're proud of
        </h2>
        <div className="gradient-cards">
            {countryFacts.countries.map((country) => {
                const {id, countryName, capital, population, interestingFacts} = country
                return (
                    <div className="card" key={id}>
                    <div className="container-card bg-green-box">
                        <p className="card-title">{countryName}</p>
                        <p>
                            <span className="card-description">Capital:</span>
                            {capital}
                        </p>
                        <p>
                            <span className="card-description">Population:</span>
                            {population}
                        </p>
                        <p>
                            <span className="card-description">Interesting Fact:</span>
                            {interestingFacts}
                        </p>
                    </div>
                    </div>
                );
                
            })}

            
        </div>
    </section>
};