import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

type Data = {
  message: string;
  token?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    try {
      const { username, password } = req.body;
      const response = await axios.post('http://127.0.0.1:8000/login', {
        username,
        password,
      });
      res.status(200).json({ message: 'Login successful', token: response.data.token });
    } catch (error) {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
