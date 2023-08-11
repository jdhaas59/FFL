// import React from 'react'
// // import prisma from '../../lib/prisma'
// // import { PrismaClient } from '@prisma/client';
// import prisma from '../../../../lib/prisma';
// import { NumericLiteral } from 'typescript';


// export default function Teamlist( {allTeams} ) {
//     // console.log(allTeams)
//     return (
//       <div>
//         <h1>Users</h1>
//         {/* <ul>
//           {allTeams.map(team => (
            
//             <li key={team.teamyear_id}>{team.team_name}</li>
//           ))}
//         </ul> */}
//       </div>
//     );
//   }

//   export const getServerSideProps:GetServerSideProps = async () => {
//     // const prisma = new PrismaClient()
//     const allTeams = await prisma.teams.findMany()
//     // console.log(prisma)
//     return allTeams
//   }