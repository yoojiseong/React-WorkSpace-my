// import React from 'react';
// // 중첩 라우팅을 위해 => Outlet 컴포넌트 이용
// // import { Link , Outlet } from 'react-router-dom';
// import { NavLink , Outlet } from 'react-router-dom';
//
// const Articles = () => {
//
//   // 샘플 css
//   const activeStyle = {
//     color : 'green',
//     fontSize: '21px',
//   };
//   return (
//     <div>
//       {/*중첩 라우팅 적용하기*/}
//       <Outlet />
//
//       <ul>
//         <li>
//           {/*<Link to="/articles/1">게시글 1</Link>*/}
//           <NavLink
//             to="/articles/1"
//           style={({isActive}) => isActive ? activeStyle : undefined}
//           >게시글 1</NavLink>
//         </li>
//         <li>
//           {/*<Link to="/articles/2">게시글 2</Link>*/}
//           <NavLink
//             to="/articles/2"
//             style={({isActive}) => isActive ? activeStyle : undefined}
//           >게시글 2</NavLink>
//         </li>        <li>
//           {/*<Link to="/articles/3">게시글 3</Link>*/}
//         <NavLink
//           to="/articles/3"
//           style={({isActive}) => isActive ? activeStyle : undefined}
//         >게시글 3</NavLink>
//         </li>
//       </ul>
//     </div>
//   );
// };
//
// export default Articles;