import React, { useEffect, useState } from 'react';

import './Online.styles';
import Loading from '../../Loading';
import { Title } from '../../style/StyleComponent';
// import { useNavigate } from 'react-router-dom';

const OnlineCourses = () => {
    // let Navigate = useNavigate();

    let [loading, setLoading] = useState(true);

    useEffect(() => {
        document.title = "Online darslar";

        let timer = setTimeout(() => setLoading(false), 1000);
        window.scrollTo(0, 0);
        return () => clearTimeout(timer)
    }, []);

    return (

        <OnlineCourses>


            <div className="max-width">

                {loading ? (
                    <Loading />
                ) : (
                    <div>
                        {/* <div className="online-courses">
                            <img className='online_courses_im_1' src={img_1} alt="" />
                            <br /><br /><br /><br />
                            <h1 className=' online_courses_title font-size-48'>Online darslar yaqin <br /> kunlarda yo`lga qo`yiladi</h1>
                            <img className='online_courses_im_2' src={img_2} alt="" />
                        </div>

                        <a href="/" className="back_button">
                            <button onClick={goBackFunk} className='online_button' >Bosh sahifaga qaytish</button>
                        </a> */}

                        <Title>Online kurslar</Title>

                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum unde pariatur mollitia ab non similique necessitatibus rerum aliquam beatae tenetur deleniti iure ratione natus dolor optio suscipit adipisci facilis aspernatur dignissimos, quia cum dolores et consectetur. Eius quod porro temporibus! Excepturi suscipit officiis soluta quaerat aspernatur voluptatem corporis. Excepturi sapiente ad facilis aliquam quo eos eaque laborum omnis quibusdam non iste magnam consequuntur, assumenda cumque culpa porro accusantium vero! Non at aliquam culpa magnam, dolorum rerum atque fugit consequatur, mollitia quia voluptatibus ratione officiis blanditiis nostrum vitae asperiores laudantium. Praesentium exercitationem inventore debitis quisquam ea possimus, adipisci quas sint hic!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum unde pariatur mollitia ab non similique necessitatibus rerum aliquam beatae tenetur deleniti iure ratione natus dolor optio suscipit adipisci facilis aspernatur dignissimos, quia cum dolores et consectetur. Eius quod porro temporibus! Excepturi suscipit officiis soluta quaerat aspernatur voluptatem corporis. Excepturi sapiente ad facilis aliquam quo eos eaque laborum omnis quibusdam non iste magnam consequuntur, assumenda cumque culpa porro accusantium vero! Non at aliquam culpa magnam, dolorum rerum atque fugit consequatur, mollitia quia voluptatibus ratione officiis blanditiis nostrum vitae asperiores laudantium. Praesentium exercitationem inventore debitis quisquam ea possimus, adipisci quas sint hic! online courses
                        </p>
                    </div>

                )}
            </div>
        </OnlineCourses>
    );
};

export default OnlineCourses;