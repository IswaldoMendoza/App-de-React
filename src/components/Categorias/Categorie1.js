    import './Categorie1.css'
    import horror from './assets/horror.png'
    import horror2 from './assets/horror2.jpg'
    import aventura from './assets/aventura.png'
    import aventura2 from './assets/aventura2.jpg'
    import estrategia from './assets/estrategia.png'
    import estrategia2 from './assets/estrategia2.jpeg'
    import action from './assets/action.png'
    import action2 from './assets/accion2.webp'

const Categorie1 = ({products}) => {
	return (
        <div className='item'>
            <div className='item1'>
            <div className='flip-card'>
                <div className='flip-card-general'>
                    <div className='flip-card-frente'>
                        <img src={horror} alt='horror'></img>
                    </div>
                    <div className='flip-card-detras'>
                        <img src={horror2} alt='horror'></img>
                        <span>Survival Horror</span>
                    </div>
                </div>
            </div>
            </div>
            <div className='item2'>
            <div className='flip-card'>
                <div className='flip-card-general'>
                    <div className='flip-card-frente'>
                    <img src={aventura} alt='aventura'></img>
                    </div>
                    <div className='flip-card-detras'>
                    <img src={aventura2} alt='aventura2'></img>
                        <span>Adventure</span>
                    </div>
                </div>
            </div>
            </div>
           <div className='item3'>
           <div className='flip-card'>
                <div className='flip-card-general'>
                    <div className='flip-card-frente'>
                    <img src={estrategia} alt='estrategia'></img>
                    </div>
                    <div className='flip-card-detras'>
                    <img src={estrategia2} alt='estrategia2'></img>
                        <span>Strategy</span>
                    </div>
                </div>
            </div>
           </div>
           <div className='item4'>
           <div className='flip-card'>
                <div className='flip-card-general'>
                    <div className='flip-card-frente'>
                       <img src={action} alt='action'></img>
                    </div>
                    <div className='flip-card-detras'>
                       <img src={action2} alt='action2'></img>
                        <span>Action</span>
                    </div>
                </div>
            </div>
           </div>
        </div>
	)
}

export default Categorie1;