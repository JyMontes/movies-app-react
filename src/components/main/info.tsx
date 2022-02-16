import { FaRegPlayCircle, FaStar } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ContainerInfo, MiniAvatar, ButtonBuy } from '../styled-components'
import BlackWidow from '../../assets/black-widow.png';
import { context } from '../../context/AppContext'


const Info = () => {
    const history = useNavigate();
    const { state } = useContext(context);
    console.log(state)
    const goToDetails = (): void => {
        history('/details/2')
    }
    return(
        <>
            <ContainerInfo>
                <section className='icon-info'>
                   <FaRegPlayCircle size={25} color={'red'}/> 
                </section>
                <section className='title-info'>
                    {state.name}
                </section>
                <section className='details-info'>
                    <section className='list'>
                        <div>2020</div>
                        <div>Fantastic</div>
                        <div>2h 35min</div>
                    </section>
                </section>
                <section className='star'>
                    <FaStar color='orange'/>
                    <FaStar color='orange'/>
                    <FaStar color='orange'/>
                    <FaStar color='orange'/>
                    <FaStar color='orange'/>
                </section>
                <section className='description'>
                    <div className='description-title'>Plot Summary</div>
                    <div className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, eaque quo. Quam nulla incidunt atque voluptatibus deserunt assumenda sint nemo, fuga ex. Velit illo reprehenderit ipsa eum aliquid exercitationem odio.</div>
                </section>
                <section className='description'>
                    <div className='description-title'>Cast</div>
                    <div className="images">
                        { [1, 2, 3, 4].map(item => <MiniAvatar key={item} src={BlackWidow}/>) }
                        
                    </div>
                    <div className='actors'>
                        { ['Steve Rogers', 'Tom Holland', 'Robert Downey', 'Bruce Banner'].map(item => <span key={item}>{item}</span>) }
                    </div>
                </section>
                <section className='button-buy'>
                    <ButtonBuy onClick={goToDetails}>Comprar</ButtonBuy>
                </section>
                
            </ContainerInfo>
        </>
    )
};
export default Info;