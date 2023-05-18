import aboutImg from '../images/quienessomos.png';
import Title from './Title';

const About = () => {
  return (
    <section className='section' id='about'>
      <Title title='Quienes' subTitle='Somos' />

      <div className='section-center about-center'>
        <div className='about-img'>
          <img src={aboutImg} className='about-photo' alt='awesome beach' />
        </div>
        <article className='about-info'>
          <h3>La importancia de estudiar nuestra carrera</h3>
          <p>
          La constante evolución tecnológica implica la necesidad en las
          organizaciones de contar con profesionales de alto nivel capaces 
          de incorporar y desarrollar las variables tecnológicas eficientemente.
          </p>
          <p>
          La formación del Ingeniero de Sistemas Computacionales (ISC), 
          enfoca sus estudios en campos relacionados con la Administración 
          de Sistemas y la Ingeniería del Software, recibiendo una 
          sólida base multidisciplinaria para desarrollar actividades 
          en proyectos múltiples y la obtención de Certificaciones Profesionales.
          </p>
          <a href='#' className='btn'>
            read more
          </a>
        </article>
      </div>
    </section>
  );
};
export default About;
