import { nanoid } from 'nanoid';

// const newUnix = () => Date.now();
// const toUnix = (date) => new Date(date).getTime();
// const fromUnix = (unix) => new Date(unix);

const INIT_HOUSES = [
    {
        id: nanoid(),
        name: 'Villa',
        price: 500,
        location: {
            city: 'Ibiza',
            country: 'Spain',
        },
        rating: 5,
        images: {
            first: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg',
            second: '',
            third: '',
            forth: '',
            fifth: '',
            sixth: '',
        },
        createdAt: Date.now(),
        updatedAt: Date.now(),
        startDate: '04/01/2023',
        endDate: '10/01/2023',
        ownerId: nanoid(),
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
        // reviews: [
        //     {
        //         id: nanoid(),
        //         avatar: '',
        //         user: 'Mike Smith',
        //         content: 'It was a nice Villa',
        //     },
        // ],
        isEdited: false,
    },
    {
        id: nanoid(),
        name: 'Villa',
        price: 500,
        location: {
            city: 'Berlin',
            country: 'Germany',
        },
        rating: 5,
        images: {
            first: 'https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_1280.jpg',
            second: '',
            third: '',
            forth: '',
            fifth: '',
            sixth: '',
        },
        createdAt: Date.now(),
        updatedAt: Date.now(),
        startDate: '22/01/2023',
        endDate: '01/02/2023',
        ownerId: nanoid(),
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
        // reviews: [
        //     {
        //         id: nanoid(),
        //         avatar: '',
        //         user: 'Mike Smith',
        //         content: 'It was a nice Villa',
        //     },
        // ],
        isEdited: false,
    },
];

export { INIT_HOUSES };
