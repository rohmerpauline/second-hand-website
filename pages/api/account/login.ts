import { NextApiRequest, NextApiResponse } from 'next';

const loginHandler = (req: NextApiRequest, res: NextApiResponse) => {

   if(req.method === 'POST'){
      console.log(req.body)
   }
  /*  res.status(200).json({message: 'This works!'}) */
}

export default loginHandler;

/* vehicles
vehicle[id] getVehicleById */