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
            first: 'https://cdn.pixabay.com/photo/2017/09/16/17/27/architecture-2756145_1280.jpg',
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
    {
        id: nanoid(),
        name: 'Tiny Home',
        price: 40,
        location: {
            city: 'New York',
            country: 'USA',
        },
        rating: 3.8,
        images: {
            first: 'https://cdn.pixabay.com/photo/2016/08/03/19/22/carriacou-1567544_1280.jpg',
            second: '',
            third: '',
            forth: '',
            fifth: '',
            sixth: '',
        },
        createdAt: Date.now(),
        updatedAt: Date.now(),
        startDate: '02/01/2023',
        endDate: '11/02/2023',
        ownerId: nanoid(),
        details: {
            guests: 1,
            bedrooms: 1,
            beds: 1,
            baths: 1,
        },
        offers: {
            wifi: false,
            kitchen: true,
            parking: false,
            pets: false,
            tv: false,
            pool: false,
            smoke: true,
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
        name: 'Home',
        price: 40,
        location: {
            city: 'London',
            country: 'UK',
        },
        rating: 3.8,
        images: {
            first: 'https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265_1280.jpg',
            second: '',
            third: '',
            forth: '',
            fifth: '',
            sixth: '',
        },
        createdAt: Date.now(),
        updatedAt: Date.now(),
        startDate: '02/01/2023',
        endDate: '11/02/2023',
        ownerId: nanoid(),
        details: {
            guests: 1,
            bedrooms: 1,
            beds: 1,
            baths: 1,
        },
        offers: {
            wifi: false,
            kitchen: true,
            parking: false,
            pets: false,
            tv: false,
            pool: false,
            smoke: true,
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
        name: 'Fantastic Home',
        price: 40,
        location: {
            city: 'Milan',
            country: 'Italy',
        },
        rating: 4.9,
        images: {
            first: 'https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_1280.jpg',
            second: '',
            third: '',
            forth: '',
            fifth: '',
            sixth: '',
        },
        createdAt: Date.now(),
        updatedAt: Date.now(),
        startDate: '02/01/2023',
        endDate: '11/02/2023',
        ownerId: nanoid(),
        details: {
            guests: 4,
            bedrooms: 3,
            beds: 4,
            baths: 2,
        },
        offers: {
            wifi: false,
            kitchen: true,
            parking: false,
            pets: false,
            tv: false,
            pool: false,
            smoke: true,
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
        name: 'Great House',
        price: 40,
        location: {
            city: 'Melbourne',
            country: 'Australia',
        },
        rating: 5,
        images: {
            first: 'https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg',
            second: '',
            third: '',
            forth: '',
            fifth: '',
            sixth: '',
        },
        createdAt: Date.now(),
        updatedAt: Date.now(),
        startDate: '02/01/2023',
        endDate: '11/02/2023',
        ownerId: nanoid(),
        details: {
            guests: 1,
            bedrooms: 1,
            beds: 1,
            baths: 1,
        },
        offers: {
            wifi: false,
            kitchen: true,
            parking: false,
            pets: false,
            tv: false,
            pool: false,
            smoke: true,
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
        name: 'Great House',
        price: 40,
        location: {
            city: 'Melbourne',
            country: 'Australia',
        },
        rating: 5,
        images: {
            first: 'https://cdn.pixabay.com/photo/2014/07/10/17/17/bedroom-389254_1280.jpg',
            second: '',
            third: '',
            forth: '',
            fifth: '',
            sixth: '',
        },
        createdAt: Date.now(),
        updatedAt: Date.now(),
        startDate: '02/01/2023',
        endDate: '11/02/2023',
        ownerId: nanoid(),
        details: {
            guests: 1,
            bedrooms: 1,
            beds: 1,
            baths: 1,
        },
        offers: {
            wifi: false,
            kitchen: true,
            parking: false,
            pets: false,
            tv: false,
            pool: false,
            smoke: true,
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
        name: 'Great House',
        price: 40,
        location: {
            city: 'Melbourne',
            country: 'Australia',
        },
        rating: 5,
        images: {
            first: 'https://cdn.pixabay.com/photo/2017/07/09/03/19/home-2486092_1280.jpg',
            second: '',
            third: '',
            forth: '',
            fifth: '',
            sixth: '',
        },
        createdAt: Date.now(),
        updatedAt: Date.now(),
        startDate: '02/01/2023',
        endDate: '11/02/2023',
        ownerId: nanoid(),
        details: {
            guests: 1,
            bedrooms: 1,
            beds: 1,
            baths: 1,
        },
        offers: {
            wifi: false,
            kitchen: true,
            parking: false,
            pets: false,
            tv: false,
            pool: false,
            smoke: true,
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
