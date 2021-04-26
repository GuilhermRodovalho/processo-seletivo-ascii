import { useEffect, useState } from 'react';

export const EDUCATION = 'education';
export const SKILLS = 'skills';
export const SOFT_SKILLS = 'softSkills';

const Content = ({ title }) => {
  const [isEducation, setIsEducation] = useState(false);
  const [isSkills, setIsSkills] = useState(false);
  const [isSoftSkills, setIsSoftSkills] = useState(false);

  const reset = () => {
    setIsEducation(false);
    setIsSkills(false);
    setIsSoftSkills(false);
  }

  useEffect(() => {
    reset();

    if (title === EDUCATION) setIsEducation(true);
    else if (title === SKILLS) setIsSkills(true);
    else setIsSoftSkills(true);
  }, [title]);

  return (
    <>
      {isEducation ? (
        <ul>
          <li>Estou no 3° Sistemas de Informação na UFU</li>
          <li>Inglês avançado (leio bem, escrevo bem, falo de forma mediana) certificado wizard</li>
          <li>Participei do Uberhub code club como aluno e monitor</li>
        </ul>
      ) : undefined}

      {isSkills ? (
        <ul>
          <li>C: conhecimento médio, usei para disciplinas da faculdade</li>
          <li>JavaScript: básico</li>
          <li>Java: básico</li>
          <li>NodeJS: básico, fiz alguns projetos usando Node + Express (disponíveis no github)</li>
          <li>React: básico</li>
          <li>Banco de dados: apenas conhecimentos práticos de manipulação de BD</li>
        </ul>


      ) : undefined}

      {isSoftSkills ? (
        <ul>
          <li>Comunicação boa</li>
          <li>Facilidade e apreço pelo aprendizado</li>
          <li>Bom em trabalhos em grupo</li>
          <li>Dedicação</li>
          <li>Facilidade em cumprir prazos</li>
        </ul>) : undefined}

    </>
  )
}

export default Content;