import safetyImage from '../../../../assets/Home/feature-safety.png'
import ecoFriendlyImage from '../../../../assets/Home/feature-ecoFriendly.png'
import achievementWidgetImage1 from './../../../../assets/Home/achievement-image1.png'
import achievementWidgetImage2 from './../../../../assets/Home/achievement-image2.png'
import achievementWidgetImage3 from './../../../../assets/Home/achievement-image3.png'
import achievementWidgetImage4 from './../../../../assets/Home/achievement-image4.png'
import X247Image from '../../../../assets/Home/feature-24X7.png'
import founderImage from '../../../../assets/homepage/founderImage.jpg'
import directorImage from '../../../../assets/homepage/directorImage.jpg'
import featureImage01 from '../../../../assets/FeaturesImage/feature01.jpg'
import featureImage02 from '../../../../assets/FeaturesImage/feature02.jpg'
import featureImage03 from '../../../../assets/FeaturesImage/feature03.jpg'
export const widgetData=[
    {
        image:safetyImage,
        title:'Rider Safety Features',
        text:'IEE Lifts Private Limited, a renowned lift manufacturers in Mohali, we prioritise rider safety, incorporating cutting-edge safety features into the design and construction of our elevators.',
        altTag:'Safety Image',
        backgroundImage:featureImage01,
        route:'/safety/'

    },
    {
        image:ecoFriendlyImage,
        title:'Eco-Friendly Innovation',
        text:'As one of the leading elevator manufacturers, we take environmental responsibility seriously. Our lifts are designed to consume significantly less energy, promoting green vertical mobility.',
        altTag:'Eco-Friendly Image',
        backgroundImage:featureImage02,
        route:'/contact/'

    },
    {
        image:X247Image,
        title:'After Sales Service',
        text:'We are not just lift manufacturers but your reliable lift company offering comprehensive after-sales services with free maintenance sessions.',
        altTag:'24X7 Image',
        backgroundImage:featureImage03,
        route:'/maintenance/'

    },
]


export const achievementWidgetData=[
    {
        image:achievementWidgetImage1,
        number:'17+',
        text:'Years Experience'
    },
    {
        image:achievementWidgetImage2,
        number:'2000+',
        text:'Lifts Installed'
    },
    {
        image:achievementWidgetImage1,
        number:'10',
        text:'States Covered'
    },
    {
        image:achievementWidgetImage1,
        number:'115+',
        text:'Professionals'
    },
]


export const foundersData=[
    {
        name:'Rajinder Mohan Singh',
        position:'Founder & MD',
        text:'Our Founder and Managing Director is our driving force. With a master’s in structural design and 42 years of experience, he has been a visionary and a remarkable leader at IEE Lifts since 2007.',
        image:founderImage,
        video:'https://www.youtube.com/embed/oSqrXfU6ahk?si=5Qc1mrX1eyPFS2Yq&autoplay=1&rel=0'

    },
    {
        name:'Dr. Prabhjot Kaur',
        position:'Director',
        text:'Our Director Dearest is the creative genius behind our pathbreaking designs. As a PhD holder and University Educator, she continues to follow her passion for design here at IEE Lifts.',
        image:directorImage,
        video:'https://www.youtube.com/embed/kqNEZmZvcRM?si=ceIPZ6Lk10BtTQlL&rel=0'
    },
]