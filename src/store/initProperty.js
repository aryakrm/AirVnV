import { nanoid } from 'nanoid';

const initProperty = {
    id: nanoid(),
    title: '',
    type: '',
    price: 0,
    location: {
        address: '',
        city: '',
        country: '',
    },
    rating: 0,
    images: {
        first: '',
        second: '',
        third: '',
        forth: '',
        fifth: '',
        sixth: '',
    },
    createdAt: Date.now(),
    updatedAt: Date.now(),
    startDate: '',
    endDate: '',
    ownerId: '',
    details: {},
    offers: {},
    isEdited: false,
};

export default initProperty;
