import { nanoid } from 'nanoid';

// const newUnix = () => Date.now();
// const toUnix = (date) => new Date(date).getTime();
// const fromUnix = (unix) => new Date(unix);

const INIT_HOUSES = [
    {
        id: nanoid(),
        name: 'Villa',
        price: '500$',
        location: 'Ibiza',
        rate: 5,
        images: [
            'https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg',
        ],
        timeStamp: Date.now(),
        startDate: '04/01/2023',
        endDate: '10/01/2023',
        owner: {
            id: nanoid(),
            name: 'Jack Hammer',
            avatar: '',
        },
        details: {
            guests: 10,
            bedrooms: 6,
            beds: 10,
            baths: 3,
        },
        offers: {
            wifi: true,
            kitchen: true,
            parking: true,
            pets: false,
            tv: true,
            pool: true,
            smoke: false,
        },
        reviews: [
            {
                id: nanoid(),
                avatar: '',
                user: 'Mike Smith',
                content: 'It was a nice Villa',
            },
        ],
        isEdited: false,
    },
    {
        id: nanoid(),
        name: 'Flat Home in Berlin',
        price: '100$',
        location: 'Berlin',
        rate: 4.3,
        images: [
            'https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_1280.jpg',
        ],
        timeStamp: Date.now(),
        startDate: '04/01/2023',
        endDate: '10/01/2023',
        owner: {
            id: nanoid(),
            name: 'Jack Paul',
            avatar: '',
        },
        details: {
            guests: 3,
            bedrooms: 2,
            beds: 3,
            baths: 1,
        },
        offers: {
            wifi: true,
            kitchen: true,
            parking: false,
            pets: false,
            tv: true,
            pool: false,
            smoke: true,
        },
        reviews: [
            {
                id: nanoid(),
                avatar: '',
                user: 'Mark Hanks',
                content: 'It was a nice Flat',
            },
        ],
        isEdited: false,
    },
];

export { INIT_HOUSES };
