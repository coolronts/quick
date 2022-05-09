import { ReactElement, cloneElement, useEffect, useState } from 'react';

import AdCard from '../../units/AdCard/AdCard';
import Carousel from '../../components/Carousel/Carousel';
import FocusGroup from '../../units/FocusItems/FocusGroup';
import Footer from '../../units/Footer/Footer';
import {Header} from '../../units/Header/Header';
import Navbar from '../../units/Navbar/Navbar';
import axios from 'axios';
import { currentTheme } from '../../atoms/index'
import { useRecoilValue } from 'recoil';

export const Front: React.FC = () => {
    const [components, setComponents] = useState<ReactElement[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const currentThemes = useRecoilValue(currentTheme);
    type adProps = {
        component: string;
        props:any
    }
    useEffect(() => {axios.get('https://api.npoint.io/d11db034177ea2071293').then(res => {
            getComponents(res.data);
        })
    }, [])

    const getComponents = (data: adProps[]) => {
        data.map(component => {
            if (component.component === 'AdCard') 
               components.push(cloneElement(<AdCard
                    title={component.props.title} imgSrc={component.props.imgSrc} videoSrc={component.props.videoSrc} alt={component.props.alt} width={component.props.width} height={component.props.height}
                />))
            else if (component.component === 'Header') components.push(cloneElement(<Header />))
            else if (component.component === 'Navbar') components.push(cloneElement(<Navbar />))
            else if (component.component === 'Carousel') components.push(cloneElement(<Carousel images={component.props.images} />))
            else if (component.component === 'FocusGroups') component.props.map((group: any, index: number) => components.push(cloneElement(<FocusGroup key={index} title={group.title} index={index} />)))
            else if (component.component === 'Footer') components.push(cloneElement(<Footer />))
            return components
        })
        setIsLoading(false)
    }

    if (!isLoading) {
        return (
            <div style={{ backgroundColor: currentThemes.backgroundColor }}>
                {components}
            </div>
        );
    } else {
        return <div>Loading...</div>
    }
}