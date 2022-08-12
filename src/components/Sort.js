import React, { useState, useEffect } from 'react';


const bands = [
    {
        id: 1,
        name: 'Nightwish',
        albums: 9,
        members: 6,
        formed_in: 1996,
    },
    {
        id: 2,
        name: 'Metallica',
        albums: 10,
        members: 4,
        formed_in: 1981,
    },
    {
        id: 3,
        name: 'Nirvana',
        albums: 3,
        members: 3,
        formed_in: 1987,
    },
];

function Sort() {
    const [data, setData] = useState([]);
    const [sortType, setSortType] = useState('albums');

    useEffect(() => {
        const sortArray = type => {
            const types = {
                albums: 'albums',
                members: 'members',
                formed: 'formed_in',
            };
            const sortProperty = types[type];
            const sorted = [...bands].sort((a, b) => b[sortProperty] - a[sortProperty]);
            setData(sorted);
        };

        sortArray(sortType);
    }, [sortType]);

    const products = {
        person1: { name: "mobile phone", price: 25000, color: "pink" },
        person2: { name: "laptop", price: 50000, color: "black" },
        person3: { name: "watch", price: { lowPrice: 5000, midPrice: 10000, highPrice: 15000 }, color: "white" },
        person4: { name: "batch", price: 300, color: "white" },
        person5: { name: "cycale", price: 2000, color: "orange" },
    }
    const fiveThusandPrice = products.find(product => product.price == 5000);
    console.log(fiveThusandPrice);

    //9
    const { lowPrice, highPrice } = products.person3.price;
    // console.log(lowPrice, highPrice);

    return (
        <div className="App">
            <select onChange={(e) => setSortType(e.target.value)}>
                <option value="albums">Albums</option>
                <option value="members">Members</option>
                <option value="formed">Formed in</option>
            </select>

            {data.map(band => (
                <div key={band.id} style={{ margin: '30px' }}>
                    <div>{`Band: ${band.name}`}</div>
                    <div>{`Albums: ${band.albums}`}</div>
                    <div>{`Members: ${band.members}`}</div>
                    <div>{`Year of founding: ${band.formed_in}`}</div>
                </div>
            ))}
        </div>
    );
}

export default Sort;