import "./CardBox.css";
import destinationination from "../../json/InfoCard.json";

function CardBox({ searchText }: { searchText: string }) {

    const filtereddestinationinations = destinationination.filter((destination) =>
        destination.title.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <>
            <h1 className="text-filter-result">{filtereddestinationinations.length} résultat(s)</h1>
            <div className="card-main">
                {filtereddestinationinations.map((destination, index) => (
                    <div className="card" key={index}>
                        <img className="card-img" alt={destination.alt} src={destination.img} />
                        <div className="country-and-title">
                            <p className="card-title font-bold">{destination.title}</p>
                            <img className="img-country" src={destination.imgCountry} alt="drapeau" />
                        </div>
                        <div className="div-card-description">
                            <h4 className="card-description">{destination.content}</h4>
                        </div>
                        <p className="card-price">
                            <strong>{destination.price}</strong>
                        </p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default CardBox;
