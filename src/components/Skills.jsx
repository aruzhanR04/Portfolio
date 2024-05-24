import React from 'react';
export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Навыки:</h2>
                        <h3>Программирование: Java, C++, Python.<br></br>Веб-разработка: PHP, SpringBoot, Laravel, React.<br></br>Базы данных: PostgreSQL, MySQL.<br></br>UI/UX дизайн: Работа с Figma, примеры на Behance.<br></br>Графический дизайн: Adobe Photoshop, Illustrator.<br></br>Моделирование и анимация: 3D моделирование, 2D анимация.</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
