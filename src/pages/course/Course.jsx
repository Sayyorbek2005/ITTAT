import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BizningKurslar } from '../bizningKurslarimiz/BizningKurslarimizData';
import { IoIosArrowBack } from "react-icons/io";
import * as S from './Course.styles'; // Styled komponentlarni S nomi ostida olamiz
import CROtish from '../courseRoyxatdanOtish/CROtish';
import KursniTugatganda from '../kursTugatganda/KursniTugatganda';
import { Title } from '../../style/StyleComponent';


import freelanceOne from  '../../assets/remove-nat.png'
import freelanceTwo from  '../../assets/union.jpg'
import freelanceThree from  '../../assets/m.jpeg'


const Course = () => {
    const { id } = useParams();
 const navigate = useNavigate();

    // Dinamik qidiruv
    const item = BizningKurslar.find(course => String(course.id) === String(id));

    if (!item) return <S.CourseDetailPage><div className="max-width">Kurs topilmadi</div></S.CourseDetailPage>;

    console.log('====================================');
    console.log(item.texnologiyalar);
    console.log('====================================');
    return (
        <S.CourseDetailPage data-aos="fade-down">
            <div className="max-width">
                 <S.BackButton onClick={() => navigate(-1)}>
            <IoIosArrowBack />
            orqaga
        </S.BackButton>

                <S.MainCard>
                    <S.ImageSide>
                        <img src={item.img} alt={item.nomi} />
                    </S.ImageSide>

                    <S.InfoSide>
                        <h1>{item.nomi} kursi</h1>
                        <p className="description">{item.tavsif}</p>

                        <S.AiBanner>
                            <div className="badge">Ai ✦</div>
                            <p>Endi barcha kurslarimizda sun'iy intellekt bo'yicha darslar mavjud! Kelajakni biz bilan o'rganing.</p>
                        </S.AiBanner>

                        <S.StatsGrid>
                            <S.StatItem>
                                <span>Kurs davomiyligi</span>
                                <h2>{item.davomiyligi}</h2>
                                {item.amaliyot && <div className="practice">+ 1 oy bepul amaliyot</div>}
                            </S.StatItem>
                            <S.StatItem>
                                <span>Dars soati</span>
                                <h2>{item.nechaSoat || '2'}:00</h2>
                            </S.StatItem>
                            <S.StatItem>
                                <span>Haftada</span>
                                <h2>{item.haftada || '3'} kun</h2>
                            </S.StatItem>
                        </S.StatsGrid>

                        <S.ActionFooter>
                            {/* <S.EnrollButton>Kursga yozilish</S.EnrollButton> */}
                            <S.PriceTag>
                                <span>Kurs narxi</span>
                                <h3>{item.kursNarxi} <span>so'm/oyiga</span></h3>
                            </S.PriceTag>
                        </S.ActionFooter>
                    </S.InfoSide>
                </S.MainCard>
            </div>
            <CROtish />

        {/* ? texnologialar */}
        <div className="texnologialar">
            <Title>
                O`tiladigan texnologialar
            </Title>    

            <div className="tex-cont">
            {item.texnologiyalar.map((course, index)=>(
                <div key={index}>
                    <button>
                        {course}
                    </button>
                </div>
            ))}

            </div>
        </div>
            {/* ? kursni tugatganda  */}
            <KursniTugatganda />
        {/* ? o`rtacha maosh */}

         <div className="stats-cards">
            <div className="max-width">

            <Title>
                IT bozorida dasturchilarga talab juda yuqori!
            </Title>

            <div className="display-flex ortacha" >
          <div className="stats-card">
            <h2>+ 30 kompaniyalarga</h2>
            <p>O’zbekiston bozorida dasturchilar kerak</p>
          </div>

          <div className="stats-card">
            <h2> {item.ortachaOylikIshHaqi}</h2>
            <p>O’rtacha oylik ish haqi to’lanadi.</p>
          </div>
            </div>
        

        <div className="stats-bottom display-flex">

          <div className="bottom-item display-flex">
            <div className="icon hh">
              <img src={freelanceOne} alt="" />
            </div>

            <div className="bottom-text">
              <h3>hh.uz web sayti ma’lumotlari</h3>
              
            </div>
          </div>

          <div className="bottom-item display-flex">
            <div className="icon olx">
              <img src={freelanceTwo} alt="" />
            </div>

            <div className="bottom-text">
              <h3>olx.uz web sayti ma’lumotlari</h3>
              
            </div>
          </div>

          <div className="bottom-item display-flex">
            <div className="icon rabota">
              <img src={freelanceThree} alt="" />
            </div>

            <div className="bottom-text">
              <h3>rabota.uz web sayti ma’lumotlari</h3>
           
            </div>
          </div>

            </div>
        </div>
        </div>

{/* ? oylik statistikasi */}
            <div className='oylik-statistikasi '>
                <Title>
                    Darajaga qarab oylik statistikasi
                </Title>
                <div className="cont-dunyo display-flex">
            <div className='dunyo'>
                <h1>
                    Dunyo miqqiyosida(oyiga)
                </h1>

                <div className="display-flex">

                <div className='senior'>
                    <h2>
                        Senior
                    </h2>
                    <div>
                        <h2>
                           ${item.dunyoSenior}
                        </h2>
                        <br />
                        <p>
                            O`rtacha maosh
                        </p>

                    </div>
                </div>
                {/* 2 */}
                <div className='senior s-two'>
                    <h2>
                        Middle
                    </h2>
                    <div>
                        <h2>
                           ${item.dunyoMiddle}
                        </h2>
                        <br />
                        <p>
                            O`rtacha maosh
                        </p>

                    </div>
                </div>
                <div className='senior s-three'>
                    <h2>
                        Junior
                    </h2>
                    <div>
                        <h2>
                           ${item.dunyoJunior}
                        </h2>
                        <br />
                        <p>
                            O`rtacha maosh
                        </p>

                    </div>
                </div>
                </div>
            </div>
             <div className='dunyo'>
                <h1>
                    O`zbekiston miqqiyosida(oyiga)
                </h1>

                <div className="display-flex">

                <div className='senior'>
                    <h2>
                        Senior
                    </h2>
                    <div>
                        <h2>
                           ${item.uzbSenior}
                        </h2>
                        <br />
                        <p>
                            O`rtacha maosh
                        </p>

                    </div>
                </div>
                {/* 2 */}
                <div className='senior s-two'>
                    <h2>
                        Middle
                    </h2>
                    <div>
                        <h2>
                           ${item.uzbMiddle}
                        </h2>
                        <br />
                        <p>
                            O`rtacha maosh
                        </p>

                    </div>
                </div>
                <div className='senior s-three'>
                    <h2>
                        Junior
                    </h2>
                    <div>
                        <h2>
                           ${item.uzbJunior}
                        </h2>
                        <br />
                        <p>
                            O`rtacha maosh
                        </p>

                    </div>
                </div>
                </div>
            </div>
            

                </div>

            </div>

        </S.CourseDetailPage>
    );
};

export default Course;