import WindFundImg from '../assets/wind-fund.png';
import SolarFundImg from '../assets/solar-fund.png';
import NaturalFundImg from '../assets/natural-fund.png';

export const charData = 
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
