// import { useState, useEffect } from 'react';
// import axios from 'axios';
//
// import NewsItem from './NewsItem';
// import styled from 'styled-components';
//
// // css 작업
// const NewsListBlock = styled.div`
//   box-sizing: border-box;
//   padding-bottom: 3rem;
//   width: 768px;
//   margin: 0 auto;
//   margin-top: 2rem;
//   @media screen and (max-width: 768px) {
//     width: 100%;
//     padding-bottom: 1rem;
//     padding-right: 1rem;
//   }
// `;
// // 더미 샘플 데이터 이용(확인차 해보는거)
// // const sampleArticle = {
// //   title : '제목',
// //   description : '내용',
// //   url: 'http://example.com/',
// //   urlToImage : 'https://www.jalopnik.com/img/gallery/spacex-pays-next-to-nothing-in-federal-taxes-despite-billions-in-revenue/l-intro-1755279334.jpg',
// // }
//
// const NewsList = ({category}) => {
//   //실제 데이터 연동
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(false);
//
//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try{
//         //category 값에 따라서 url 주소가 동적으로 변경하는 코드 작성]
//         const query= category === 'all' ?'' : `&category=${category}` ;
//         const response = await axios.get(
//           // 'https://newsapi.org/v2/top-headlines?country=us&apiKey=9537259b6c9c4a7095c4a8b96a53bf88',);
//           `https://newsapi.org/v2/top-headlines?country=us${query}&apiKey=9537259b6c9c4a7095c4a8b96a53bf88`,);
//         setArticles(response.data.articles);
//         console.log(response.data);
//       } catch(e){
//         console.log(e);
//       }
//       setLoading(false);
//     };
//     fetchData();
//   }, [category]);
//
//   return (
//     <NewsListBlock>
//       {articles.map((article) => (
//         <NewsItem key={article.url} article={article} />
//       ))}
//     </NewsListBlock>
//   );
// };
//
// export default NewsList;