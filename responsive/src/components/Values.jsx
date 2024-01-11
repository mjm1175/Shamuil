import Image from '../images/morris_shamuil.png'
import SectionHead from './SectionHead'
import { GiIonicColumn } from 'react-icons/gi'
import {practices} from '../data'
import Card from '../UI/Card'


const Values = () => {
  return (
    <section className='values'>
        <div className="container values__container">
            <div className="values__left">
                <div className="values__image">
                    <img src={Image} alt="Values Image" />
                </div>
            </div>
            <div className="values__right">
                <SectionHead icon={<GiIonicColumn/>} title="Morris Shamuil"/>
                <p>
                    In our years of experience dealing with individuals facing first time or repeat offender charges, we have learned that timing is critical. We believe in a swift response and act accordingly.
                </p>
                <div className="values__wrapper">
                    {
                        practices.map(({id, icon, title, desc}) => {
                            /* TODO: Card need unique key */
                            return <Card key={id} className="values__value">
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{desc}</small>
                            </Card>
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Values