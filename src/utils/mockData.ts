import WindFundImg from '../assets/wind-fund.png';
import SolarFundImg from '../assets/solar-fund.png';
import NaturalFundImg from '../assets/natural-fund.png';

export const chartData = 
    [
        { x: -2, y: 2 },
        { x: -1, y: 10 },
        { x: 0, y: 12 },
        { x: 1, y: 7 },
        { x: 2, y: 6 },
        { x: 3, y: 8 },
        { x: 4, y: 10 },
        { x: 5, y: 8 },
        { x: 6, y: 12 },
        { x: 7, y: 14 },
        { x: 8, y: 12 },
        { x: 9, y: 13.5 },
        { x: 10, y: 18 },
    ]

export const fundData = [
    {
        name: "Wind Fund",
        icon: WindFundImg,
        value: "$1032.23",
        percentage: 3.51
    },
    {
        name: "Solar Fund",
        icon: SolarFundImg,
        value: "$986.61",
        percentage: -0.13
    },
    {
        name: "Natural Fund",
        icon: NaturalFundImg,
        value: "$1122.56",
        percentage: 3.99
    },
]    

export const chartDataPerPeriod = [
    {
        period: '1h',
        data: [
            { x: -2, y: 2 },
            { x: -1, y: 10 },
            { x: 0, y: 12 },
            { x: 1, y: 7 },
            { x: 2, y: 6 },
            { x: 3, y: 8 },
            { x: 4, y: 10 },
            { x: 5, y: 8 },
            { x: 6, y: 12 },
            { x: 7, y: 14 },
            { x: 8, y: 12 },
            { x: 9, y: 13.5 },
            { x: 10, y: 18 },
        ]
    },
    {
        period: '1d',
        data: [
            { x: -6, y: 4 },
            { x: -5, y: 2 },
            { x: -4, y: 1 },
            { x: -3, y: 1 },
            { x: -2, y: 1 },
            { x: -1, y: 4 },
            { x: 0, y: 12 },
            { x: 1, y: 7 },
            { x: 2, y: 6 },
            { x: 3, y: 8 },
            { x: 4, y: 10 },
            { x: 5, y: 8 },
            { x: 6, y: 12 },
            { x: 7, y: 14 },
            { x: 8, y: 12 },
            { x: 9, y: 13.5 },
            { x: 10, y: 18 },
        ]
    },
    {
        period: '1w',
        data: [
            { x: -2, y: 2 },
            { x: -1, y: 10 },
            { x: 0, y: 12 },
            { x: 1, y: 7 },
            { x: 2, y: 6 },
            { x: 3, y: 8 },
            { x: 4, y: 10 },
            { x: 5, y: 8 },
            { x: 6, y: 12 },
            { x: 7, y: 14 },
            { x: 8, y: 12 },
            { x: 9, y: 13.5 },
            { x: 10, y: 18 },
        ]
    },
    {
        period: '1m',
        data: [
            { x: -2, y: 8 },
            { x: -1, y: 10 },
            { x: 0, y: 5 },
            { x: 1, y: 7 },
            { x: 2, y: 6 },
            { x: 3, y: 1 },
            { x: 4, y: 0 },
            { x: 5, y: 8 },
            { x: 6, y: 4 },
            { x: 7, y: 3 },
            { x: 8, y: 5 },
            { x: 9, y: 6 },
            { x: 10, y: 6 },
        ]
    },
    {
        period: '1y',
        data: [
            { x: -10, y: 2 },
            { x: -9, y: 3 },
            { x: -8, y: 2 },
            { x: -7, y: 6 },
            { x: -6, y: 8 },
            { x: -5, y: 10 },
            { x: -4, y: 4 },
            { x: -3, y: 6 },
            { x: -2, y: 2 },
            { x: -1, y: 10 },
            { x: 0, y: 12 },
            { x: 1, y: 7 },
            { x: 2, y: 6 },
            { x: 3, y: 8 },
            { x: 4, y: 10 },
            { x: 5, y: 8 },
            { x: 6, y: 12 },
            { x: 7, y: 14 },
            { x: 8, y: 12 },
            { x: 9, y: 13.5 },
            { x: 10, y: 18 },
        ]
    },
    {
        period: 'all',
        data: [
            { x: -2, y: 2 },
            { x: -1, y: 10 },
            { x: 0, y: 12 },
            { x: 1, y: 7 },
            { x: 2, y: 6 },
            { x: 3, y: 8 },
            { x: 4, y: 10 },
            { x: 5, y: 8 },
            { x: 6, y: 12 },
            { x: 7, y: 14 },
            { x: 8, y: 12 },
            { x: 9, y: 13.5 },
            { x: 10, y: 18 },
        ]
    },
]

export const infoAndStatusData = [
    {
        key: "AUM",
        value: '$430.88m'
    },
    {
        key: "Vintage Range",
        value: '2019 – 2022'
    },
    {
        key: "Price at Close",
        value: '$17.68'
    },
    {
        key: "Issue Date",
        value: '18/04/2022'
    },
    {
        key: "TER",
        value: '0.15%'
    },
    {
        key: "Price at Open",
        value: '$17.74'
    }
]
