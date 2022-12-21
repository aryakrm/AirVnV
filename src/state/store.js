import { nanoid } from 'nanoid';
import create from 'zustand';

const INIT_HOUSES = [
    {
        id: nanoid(),
        name: '',
        price: 1000,
        location: '',
        rate: 5,
        images: [],
        timeStamp: Date.now(),
        startDate: '',
        endDate: '',
        owner: {
            id: nanoid(),
            name: '',
            avatar: '',
        },
        details: {
            guests: 0,
            bedrooms: 0,
            beds: 0,
            baths: 0,
        },
        offers: {
            wifi: false,
            kitchen: false,
            parking: false,
            pets: false,
            tv: false,
            pool: false,
            smoke: false,
        },
        reviews: [
            {
                id: nanoid(),
                avatar: '',
                user: '',
                content: '',
            },
        ],
        isEdited: false,
    },
];

// price convert
// const convertPrice = (priceInUSD, option)  => {
//     const CURRENCIES = {
//         TUR: 18.5,
//         RON: 4.6,
//     }

//     return CURRENCIES[option] * priceInUSD
// }

const useStoreHouses = create((set) => ({
    houses: INIT_HOUSES,
    addHouse: (newHouse) => {
        return set((state) => ({
            houses: [...state.houses, newHouse],
        }));
    },
    deleteHouse: (houseId) => {
        return set((state) => ({
            houses: state.houses.filter(({ id }) => id !== houseId),
        }));
    },
    isEdited: (houseId) => {
        return set((state) => ({
            houses: state.houses.map((house) =>
                house.id === houseId
                    ? { ...house, isEdited: !house.isEdited }
                    : house
            ),
        }));
    },
    editHouse: (houseId, editedHouse) => {
        return set((state) => ({
            houses: state.houses.map((house) =>
                house.id === houseId ? { ...house, ...editedHouse } : house
            ),
        }));
    },
}));

// function Controls() {
//     const addHouse = useStore((state) => state.addHouse);
//     return <button onClick={() => addHouse(newHouse)}>Add House</button>;
// }

// function Counter() {
//     const count = useStore((state) => state.count);
//     return <h1>{count}</h1>;
// }
