import { createSlice } from '@reduxjs/toolkit';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';

const initialState = {
  projects: [
    {
      id: 1,
      title: "3д модель Стича",
      description: "Low poly Стич, подходит для анимации",
      imgUrl: projImg1,
    },
    {
      id: 2,
      title: "Простые 2д персонажи В Adobe Illustrator",
      description: "2д персонажи подходят как и для создания иконок, так и для анимации!",
      imgUrl: projImg2,
    },
    {
      id: 3,
      title: "Пример дизайна веб сайта",
      description: "Простой дизайн для сайта по продаже билетов в кино",
      imgUrl: projImg3,
    },
    {
      id: 4,
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      id: 5,
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      id: 6,
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ],
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setProjects: (state, action) => {
      state.projects = action.payload;
    },
    addProject: (state, action) => {
      state.projects.push(action.payload);
    },
    removeProject: (state, action) => {
      state.projects = state.projects.filter(project => project.id !== action.payload);
    },
  },
});

export const { setProjects, addProject, removeProject } = projectsSlice.actions;
export default projectsSlice.reducer;
