import create from 'zustand';
import { INIT_PROPERITES } from './initStoreproperties';

// price convert
// const convertPrice = (priceInUSD, option)  => {
//     const CURRENCIES = {
//         TUR: 18.5,
//         RON: 4.6,
//     }

//     return CURRENCIES[option] * priceInUSD
// }

const useStoreProperties = create((set) => ({
    properties: INIT_PROPERITES,
    addProperty: (newproperty) => {
        return set((state) => ({
            properties: [...state.properties, newproperty],
        }));
    },
    deleteProperty: (propertyId) => {
        return set((state) => ({
            properties: state.properties.filter(({ id }) => id !== propertyId),
        }));
    },
    toggleIsEdited: (propertyId) => {
        return set((state) => ({
            properties: state.properties.map((property) =>
                property.id === propertyId
                    ? { ...property, isEdited: !property.isEdited }
                    : property
            ),
        }));
    },
    editProperty: (propertyId, editedProperty) => {
        return set((state) => ({
            properties: state.properties.map((property) =>
                property.id === propertyId
                    ? { ...property, ...editedproperty }
                    : property
            ),
        }));
    },
}));

// function Controls() {
//     const addproperty = useStore((state) => state.addproperty);
//     return <button onClick={() => addproperty(newproperty)}>Add property</button>;
// }

// function Counter() {
//     const count = useStore((state) => state.count);
//     return <h1>{count}</h1>;
// }

export { useStoreProperties };
