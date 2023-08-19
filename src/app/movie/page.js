import Link from "next/link"
import MovieCard from "../components/MovieCard";
import styles from '@/app/styles/common.module.css'


const Movie = async () => {

    const url = process.env.RAPID_KEY;
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '7a768ca9a8msh3d7e667198aca24p156b9bjsnab2618c40134',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
};

const res =await fetch(url , options)

const data = await res.json();
const main_data = data.titles

    return (
        <>
                    <section className={styles.movieSection}>
                <div className={styles.container}>
            <h1>Series & Movies</h1>
            <div className={styles.card_section}>
            {
                main_data.map((currElem)=>{
                    return <MovieCard key={currElem.id} {...currElem}/>
                })
            }
            </div>
                </div>
            </section>
         
            
        </>
    )
}

export default Movie