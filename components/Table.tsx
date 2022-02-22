// import styled from "styled-components";

// interface Props {
//   firstCol: string;
//   secondCol: string;
//   thirdCol?: string;
//   fourthCol?: string;
//   fifthCol?: string;
//   children?: JSX.Element;
// }

// const TableStyled = styled.div`
//   width: 100%;

//   /* .cols {
//     border: 1px solid #cad6d1;
//     width: 100%;
//     border-radius: 8px;
//     padding: 15px;
//     display: flex;
//     justify-content: space-between;
//   } */
//   /* span:nth-child(1),
//   span:nth-child(2),
//   span:nth-child(3),
//   span:nth-child(4),
//   span:nth-child(5) {
//     display: inline-block;
//     font-size: 12px;
//     color: #587169;
//     font-weight: 600;
//   }
//   span:nth-child(1) {
//     width: 196px;
//   }

//   span:nth-child(2) {
//     width: 124px;
//   }
//   span:nth-child(3) {
//     width: 96px;
//   }
//   span:nth-child(4) {
//     width: 142px;
//   }
//   span:nth-child(5) {
//     width: 182px;
//   } */

//   /* .rows {
//     width: 100%;
//   } */

//   .row {
//     display: flex;
//     align-items: center;
//     width: 100%;
//     padding: 15px;
//     border-bottom: 1px solid #eaefed;
//     height: 60px;
//     justify-content: space-between;
//   }

//   position: relative;

//   span:nth-child(1),
//   span:nth-child(2),
//   span:nth-child(3),
//   span:nth-child(4),
//   span:nth-child(5) {
//     display: inline-block;
//     font-size: 12px;
//     color: #587169;
//     font-weight: 400;
//   }

//   span:nth-child(1) {
//     width: 196px;
//     font-weight: 600;
//     display: flex;
//     align-items: center;
//     gap: 10px;

//     img {
//       width: 32px;
//       height: 32px;
//       border-radius: 50%;
//     }
//   }

//   span:nth-child(2) {
//     width: 124px;
//   }
//   span:nth-child(3) {
//     width: 96px;
//   }
//   .span:nth-child(4) {
//     width: 142px;
//   }
//   span:nth-child(5) {
//     width: 182px;

//     span {
//       display: flex;
//       justify-content: center;
//       width: 74px;
//       height: 24px;
//       padding: 4px 8px;
//       background: #b5f1dd;
//       border-radius: 80px;
//     }
//   }
//   span:nth-child(6) {
//     position: absolute;
//     right: 10px;
//   }
// `;

// export const Col = styled.div`
//   border: 1px solid #cad6d1;
//   width: 100%;
//   border-radius: 8px;
//   padding: 15px;
//   display: flex;
//   justify-content: space-between;
// `;

// export const ColItem = styled.div`
//   display: inline-block;
//   font-size: 12px;
//   color: #587169;
//   width: ${({ width }) => width || "120px"};
//   font-weight: ${({ fontWeight }) => fontWeight || "500"};
//   color: ${({ color }) => color};
// `;

// export const Row = styled.div`
//   display: flex;
//   align-items: center;
//   width: 100%;
//   padding: 15px;
//   border-bottom: 1px solid #eaefed;
//   height: 60px;
//   justify-content: space-between;
// `;

// export const RowItem = styled.div`
//   display: inline-block;
//   font-size: 12px;
//   color: #587169;
//   font-weight: 400;
//   position: ${({ position }) => position || "relative"};
//   width: ${({ width }) => width || "120px"};
//   font-weight: ${({ fontWeight }) => fontWeight || "500"};
//   color: ${({ color }) => color};
// `;

// export const Table = ({
//   firstCol,
//   secondCol,
//   thirdCol,
//   fourthCol,
//   fifthCol,
//   children,
// }: Props) => {
//   return (
//     <TableStyled>
//       <div className="cols">
//         <span>{firstCol}</span>
//         <span>{secondCol}</span>
//         <span>{thirdCol}</span>
//         <span>{fourthCol}</span>
//         <span>{fifthCol}</span>
//       </div>
//       <div className="rows">{children}</div>
//     </TableStyled>
//   );
// };
