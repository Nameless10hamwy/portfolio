import React from 'react';
import RxCrop from './RxCrop'; // Assuming RxCrop is a component defined in a separate file
import RxPencil2 from './RxPencil2'; // Assuming RxPencil2 is a component defined in a separate file
import RxDesktop from './RxDesktop'; // Assuming RxDesktop is a component defined in a separate file
import RxReader from './RxReader'; // Assuming RxReader is a component defined in a separate file
import RxRocket from './RxRocket'; // Assuming RxRocket is a component defined in a separate file



// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const ServiceSlider = () => {
  return <div>Service Slider</div>;
};

export default ServiceSlider;
