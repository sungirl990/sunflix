import gonewiththewind from './components/frontend/img/gonewiththewind.jpg';
import howimetyourmother from './components/frontend/img/howimetyourmother.jpg';
import rickmorty from './components/frontend/img/rick-morty.jpg';
import sexeducation from './components/frontend/img/sexeducation.jpg';
import peaky from './components/frontend/img/peaky.jpg';
import reasonswhy from './components/frontend/img/13reasonswhy.jpg';

export default function getMovie() {
    return [
        {id: "13-reasons-why", name:"13 Reasons Why", logo: reasonswhy },
        {id: "gone-with-the-wind", name:"Gone With The Wind", logo: gonewiththewind },
        {id: "how-i-met-your-mother", name: "How I Met Your Mother", logo: howimetyourmother },
        {id: "rick-and-morty", name: "Rick and Morty", logo: rickmorty },
        {id: "sex-education", name:"Sex Education", logo: sexeducation },
        {id: "peaky-blinders", name: "Peaky Blinders", logo: peaky },
    ]
}