import { NextRequest, NextResponse } from 'next/server.js';
import {espnclient} from '../../../lib/fantasyApi.js';


export async function GET(request: NextRequest)  {
//   const data = await fetchLeagueData();
//   const data = {'data':'data'};
const res = await espnclient.getLeagueInfo({seasonId: 2022});
// console.log(JSON.stringify(res))
//   let json_response = {
//     status: "success",
//     results: data.
//   }
  return NextResponse.json(res.name)
};
