// sidebarData.js
import { FaHome, FaInfoCircle, FaEnvelope, FaPen } from 'react-icons/fa';
import { DiCodeBadge } from "react-icons/di";

const sidebarData = [
  {
    name: 'Introduccion',
    path: '/introduccion',
    icon: <DiCodeBadge />,
  },
  {
    name: 'Variables',
    path: '/variables',
    icon: <DiCodeBadge />,
  },
  {
    name: 'Operadores',
    path: '/operadores',
    icon: <DiCodeBadge />,
  },
  {
    name: 'Desafio',
    path: '/desafio',
    icon: <FaPen />,
  },
  {
    name: 'Diccionarios',
    path: '/diccionarios',
    icon: <DiCodeBadge />,
  },
  {
    name: 'Bucles',
    path: '/bucles',
    icon: <DiCodeBadge />,
  },
  {
  name: 'Funciones',
  path: '/funciones',
  icon: <DiCodeBadge />,
},
];

export default sidebarData;
