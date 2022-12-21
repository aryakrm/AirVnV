import create from 'zustand';
import { INIT_HOUSES } from './initStoreHouses';

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
    toggleIsEdited: (houseId) => {
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

export { useStoreHouses };
