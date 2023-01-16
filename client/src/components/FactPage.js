import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import img from '../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';

import d1 from '../data/mainData.json';
import FactComponent from './FactComponent';
import AnchorComponent from '../subComponents/Anchor';
import BigTitle from '../subComponents/BigTitlte';
import {motion} from 'framer-motion';

const MainContainer = styled (motion.div)`
background-image: url(${img});
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;
`;
const Container = styled.div`
background-color: ${props => `rgba(${props.theme.bodyRgba},0.8)`};
width: 100%;
height:auto;

position: relative;
padding-bottom: 5rem;
`;

const Center = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 10rem;
`;

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
grid-gap: calc(1rem + 2vw);
`;

// Framer-motion config
const container = {
  hidden: {opacity: 0},
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const FactPage = () => {
  const [numbers, setNumbers] = useState (0);

  useEffect (() => {
    let num = (window.innerHeight - 70) / 30;
    setNumbers (parseInt (num));
  }, []);

  return (
    <MainContainer
      variants={container}
      initial="hidden"
      animate="show"
      exit={{
        opacity: 0,
        transition: {duration: 0.5},
      }}
    >
      <Container>
        <LogoComponent />
        <PowerButton />
        <SocialIcons />
        <AnchorComponent number={numbers} />

        <Center>
        <Grid>
          {Object.keys (d1).map (function (key, index) {
            return (
                <>
                <h1>{key}</h1>
                <h1></h1>
                {
                d1[key]['top_women_negative_reviews'].map (function (fact, index) {
                    if(index<1){
                        return <FactComponent fact={fact} name={key} user={'female negative review'}/>;
                    }
                })
                }
                 {
                d1[key]['top_men_negative_reviews'].map (function (fact, index) {
                    if(index<1){
                        return <FactComponent fact={fact} name={key} user={'male negative review'}/>;
                    }
                })
                }
                  {
                d1[key]['top_women_positive_reviews'].map (function (fact, index) {
                    if(index<1){
                        return <FactComponent fact={fact} name={key} user={'female positive review'}/>;
                    }
                })
                }
                  {
                d1[key]['top_men_positive_reviews'].map (function (fact, index) {
                    if(index<1){
                        return <FactComponent fact={fact} name={key} user={'male positive review'}/>;
                    }
                })
                }
   </>
            );
          })}
   </Grid>
        </Center>
        <BigTitle text="Reviews" top="5rem" left="5rem" />
      </Container>
    </MainContainer>
  );
};

export default FactPage;
